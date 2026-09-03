"use client";

import { useEffect, useRef, useState } from "react";
import type { Content } from "@/content";
import type { CvTarget } from "@/lib/cv";

/* ══════════════════════════════════════════════════════════════
   L'AILE — trois couches de plumes, chacune une lame fuselée
   portée par son rachis. L'opacité varie le long de l'éventail
   pour que la forme ait de la profondeur au lieu d'être plate.

   Toute la géométrie est déterministe et calculée au chargement
   du module : le rendu serveur et le rendu client produisent le
   même balisage, sans écart d'hydratation.
   ══════════════════════════════════════════════════════════════ */

const CX = 600;
const CY = 350;

/** Une lame : deux courbes de Bézier refermées sur le point d'attache. */
function blade(side: number, x0: number, len: number, w: number) {
  const xa = CX + side * x0;
  const xb = CX + side * (x0 + len);
  const u1 = CX + side * (x0 + len * 0.3);
  const u2 = CX + side * (x0 + len * 0.74);
  return (
    `M${xa} ${CY}` +
    ` C${u1} ${CY - w} ${u2} ${CY - w * 0.46} ${xb} ${CY}` +
    ` C${u2} ${CY + w * 0.26} ${u1} ${CY + w * 0.52} ${xa} ${CY}Z`
  );
}

interface Feather {
  angle: number;
  delay: number;
  d: string;
  quill: string;
  fill: number;
  stroke: number;
  width: number;
}

function layer(
  side: number,
  n: number,
  a0: number,
  a1: number,
  x0: number,
  base: number,
  span: number,
  w: number,
  fill: number,
  stroke: number,
  sw: number,
): Feather[] {
  const out: Feather[] = [];
  for (let i = 0; i < n; i++) {
    const t = i / (n - 1);
    const arc = Math.sin(Math.PI * t); // profondeur tonale le long de l'éventail
    const ang = a0 + (a1 - a0) * t;
    const len = base + span * Math.sin(Math.PI * (0.1 + 0.8 * t));
    const xb = CX + side * (x0 + len);
    const sO = stroke * (0.52 + 0.48 * arc);
    out.push({
      angle: side * -ang,
      delay: Math.round(t * 60),
      d: blade(side, x0, len, w * (0.6 + 0.4 * arc)),
      quill: `M${CX + side * x0} ${CY} L${xb} ${CY}`,
      fill: fill * (0.6 + 0.4 * arc),
      stroke: sO,
      width: sw,
    });
  }
  return out;
}

/** Le bord dentelé, posé sur l'enveloppe réelle des rémiges primaires. */
function serrated(
  side: number,
  a0: number,
  a1: number,
  x0: number,
  base: number,
  span: number,
  steps: number,
) {
  const pts: [number, number][] = [];
  const teeth: string[] = [];
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const ang = ((a0 + (a1 - a0) * t) * Math.PI) / 180;
    const r = x0 + base + span * Math.sin(Math.PI * (0.1 + 0.8 * t));
    const x = CX + side * Math.cos(ang) * r;
    const y = CY - Math.sin(ang) * r;
    pts.push([x, y]);
    const tooth = 5 + 11 * Math.sin(Math.PI * t);
    const tx = CX + side * Math.cos(ang) * (r + tooth);
    const ty = CY - Math.sin(ang) * (r + tooth);
    teeth.push(`M${x.toFixed(1)} ${y.toFixed(1)} L${tx.toFixed(1)} ${ty.toFixed(1)}`);
  }
  const poly = pts
    .map(([x, y], i) => `${i === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`)
    .join(" ");
  return { poly, teeth };
}

const SIDES = [-1, 1] as const;

const WING = SIDES.map((side) => ({
  side,
  coverts: layer(side, 13, 3, 38, 38, 104, 66, 15, 0.055, 0.22, 0.9),
  secondaries: layer(side, 16, 2, 45, 46, 176, 128, 18, 0.06, 0.3, 0.9),
  primaries: layer(side, 19, 0, 52, 54, 250, 236, 21, 0.07, 0.46, 1),
  edge: serrated(side, 0, 52, 54, 250, 236, 52),
}));

/** Repère technique : la ligne d'horizon graduée qui tient la forme organique. */
const HORIZON_TICKS = Array.from({ length: 11 }, (_, i) => 100 + i * 100);

function Feathers({ feathers }: { feathers: Feather[] }) {
  return (
    <>
      {feathers.map((f, i) => (
        <g
          key={i}
          className="feather"
          style={
            {
              "--a": `${f.angle.toFixed(1)}deg`,
              transitionDelay: `${f.delay}ms`,
            } as React.CSSProperties
          }
        >
          <path
            className="blade"
            d={f.d}
            fillOpacity={f.fill.toFixed(3)}
            strokeOpacity={(f.stroke * 0.8).toFixed(3)}
            strokeWidth={f.width}
          />
          <path
            className="quill"
            d={f.quill}
            strokeOpacity={f.stroke.toFixed(3)}
            strokeWidth={(f.width * 0.7).toFixed(2)}
          />
        </g>
      ))}
    </>
  );
}

interface FlightProps {
  hero: Content["hero"];
  cv: CvTarget;
  cvLabel: string;
  primaryHref: string;
  secondaryHref: string;
}

export function Flight({ hero, cv, cvLabel, primaryHref, secondaryHref }: FlightProps) {
  const wingRef = useRef<SVGSVGElement>(null);
  const pupilRef = useRef<SVGGElement>(null);
  const [open, setOpen] = useState(false);
  const [blinking, setBlinking] = useState(false);
  /* Sur téléphone, l'envergure complète rend l'œil à 7px. On recadre serré
     pour que l'œil — et son clignement — survivent au petit écran. */
  const [narrow, setNarrow] = useState(false);

  useEffect(() => {
    const mq = matchMedia("(max-width: 679px)");
    const apply = () => setNarrow(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  /* Immobilité, puis un seul mouvement : 850 ms de rien, l'aile s'ouvre et
     s'arrête. Le bord dentelé ne se résout qu'ensuite — le détail fin est la
     récompense de l'attente. */
  useEffect(() => {
    const wait = matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 850;
    const id = setTimeout(() => setOpen(true), wait);
    return () => clearTimeout(id);
  }, []);

  /* Le seul comportement au repos de toute la page : il vous regarde. */
  useEffect(() => {
    if (!open) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let px = 0;
    let py = 0;
    let tx = 0;
    let ty = 0;

    const step = () => {
      raf = 0;
      px += (tx - px) * 0.16;
      py += (ty - py) * 0.16;
      pupilRef.current?.setAttribute("transform", `translate(${px.toFixed(2)},${py.toFixed(2)})`);
      if (Math.abs(tx - px) > 0.25 || Math.abs(ty - py) > 0.25) queue();
    };
    const queue = () => {
      if (!raf) raf = requestAnimationFrame(step);
    };
    const onMove = (e: PointerEvent) => {
      const r = wingRef.current?.getBoundingClientRect();
      if (!r?.width) return;
      const nx = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
      const ny = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
      tx = Math.max(-1, Math.min(1, nx)) * 8.5;
      ty = Math.max(-1, Math.min(1, ny)) * 8.5;
      queue();
    };

    addEventListener("pointermove", onMove, { passive: true });

    /* Les chouettes clignent rarement, vite, et jamais sur un rythme fixe. */
    let blinkId: ReturnType<typeof setTimeout>;
    let closeId: ReturnType<typeof setTimeout>;
    const schedule = () => {
      blinkId = setTimeout(
        () => {
          if (!document.hidden) {
            setBlinking(true);
            closeId = setTimeout(() => setBlinking(false), 145);
          }
          schedule();
        },
        5200 + Math.random() * 6800,
      );
    };
    schedule();

    return () => {
      removeEventListener("pointermove", onMove);
      if (raf) cancelAnimationFrame(raf);
      clearTimeout(blinkId);
      clearTimeout(closeId);
    };
  }, [open]);

  const wingClass = ["wing", open ? "is-open" : "", blinking ? "is-blinking" : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <header className="flight" id="vol">
      <div className="wing-holder">
        <svg
          ref={wingRef}
          className={wingClass}
          viewBox={narrow ? "330 195 540 215" : "0 0 1200 420"}
          aria-hidden="true"
        >
          <defs>
            <radialGradient id="irisG" cx="42%" cy="36%" r="72%">
              <stop offset="0%" stopColor="#F7CB63" />
              <stop offset="52%" stopColor="#E8A21C" />
              <stop offset="100%" stopColor="#8E5A12" />
            </radialGradient>
            <radialGradient id="glowG" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#E8A21C" stopOpacity=".26" />
              <stop offset="55%" stopColor="#E8A21C" stopOpacity=".07" />
              <stop offset="100%" stopColor="#E8A21C" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="coreG" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#F5F7F1" stopOpacity=".10" />
              <stop offset="100%" stopColor="#F5F7F1" stopOpacity="0" />
            </radialGradient>
          </defs>

          <g className="horizon">
            <path d={`M40 ${CY} L1160 ${CY}`} stroke="currentColor" strokeWidth="1" />
            {HORIZON_TICKS.map((x) => (
              <path
                key={x}
                d={`M${x} ${CY - 4} L${x} ${CY + 4}`}
                stroke="currentColor"
                strokeWidth="1"
              />
            ))}
          </g>

          <ellipse className="core" cx={CX} cy={CY} rx="150" ry="96" />

          {WING.map((w) => (
            <g key={w.side}>
              <Feathers feathers={w.coverts} />
              <Feathers feathers={w.secondaries} />
              <Feathers feathers={w.primaries} />
              <path className="comb" d={w.edge.poly} strokeWidth="1" />
              {w.edge.teeth.map((d, i) => (
                <path key={i} className="comb" d={d} strokeWidth="1.05" />
              ))}
            </g>
          ))}

          <g className="glow">
            <circle cx={CX} cy={CY} r="150" fill="url(#glowG)" />
          </g>
          <g className="eye">
            <circle className="iris-body" cx={CX} cy={CY} r="26" />
            <g ref={pupilRef}>
              <circle className="pupil" cx={CX} cy={CY} r="11" />
              <circle className="spec" cx={CX - 4.5} cy={CY - 5.5} r="2.6" />
            </g>
            <ellipse className="lid" cx={CX} cy={CY} rx="28" ry="29" />
          </g>
        </svg>
      </div>

      <div className="shell">
        {/* Le nom vit dans la barre collante, visible en permanence : le
            répéter ici ne ferait que retarder la seule phrase qui compte. */}
        <div className={`hero${open ? " is-open" : ""}`}>
          <h1>{hero.headline}</h1>
          <p className="lede">{hero.lede}</p>

          <div className="hero-actions">
            <a className="btn btn-primary" href={primaryHref}>
              {hero.ctaPrimary}
            </a>
            <a className="btn" href={secondaryHref}>
              {hero.ctaSecondary}
            </a>
            <a
              className="btn"
              href={cv.href}
              {...(cv.isPdf
                ? { download: cv.download, target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {cvLabel}
            </a>
          </div>

          <div className="hero-stats">
            {hero.stats.map((s) => (
              <div key={s.label}>
                <span className="v">
                  {s.value}
                  {s.unit}
                </span>
                <span className="k">{s.label}</span>
              </div>
            ))}
          </div>

          <div className="wordmark-strip">
            <span className="hair" />
            <span className="mono">{hero.wordmark}</span>
            <span className="hair" />
          </div>
        </div>
      </div>
    </header>
  );
}
