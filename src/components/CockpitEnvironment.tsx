"use client";

import { useEffect, useRef } from "react";

/**
 * Poste de pilotage complet en arrière-plan, traversé par le scroll.
 *
 * La caméra fait un travelling avant, pas un panoramique : les quatre plans
 * s'agrandissent depuis un point de fuite commun, à des vitesses très
 * différentes. La structure de cabine grossit vite, sort du cadre et s'efface
 * — on passe au travers. Le pare-brise, lui, bouge à peine et s'ouvre. En bas
 * de page il ne reste que l'horizon.
 *
 * C'est l'agrandissement depuis un point de fuite, et non la translation, qui
 * donne la sensation d'être dans la scène : c'est ce que fait l'œil quand le
 * corps avance.
 *
 * Composition : la structure occupe les bords — montants latéraux, casquette
 * en haut, console en bas — et laisse la colonne centrale dégagée. On est
 * assis dans le poste, le contenu flotte dans le champ de vision. C'est ce qui
 * permet à un décor aussi chargé de ne jamais gêner la lecture.
 *
 * Une seule écriture JS par frame (`--cam`), tout le reste est du CSS : le
 * navigateur compose les plans sur le GPU.
 */
export function CockpitEnvironment({ photo }: { photo?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (
      typeof matchMedia !== "undefined" &&
      matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      node.style.setProperty("--cam", "0");
      return;
    }

    let frame = 0;
    const update = () => {
      frame = 0;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const cam = scrollable > 0 ? window.scrollY / scrollable : 0;
      node.style.setProperty("--cam", cam.toFixed(4));
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="no-print pointer-events-none fixed inset-0 z-0 overflow-hidden opacity-45 md:opacity-75 xl:opacity-100"
      style={{ "--cam": 0 } as React.CSSProperties}
    >
      {/* ---------- Plan 0 : photo réelle, si elle a été déposée ---------- */}
      {photo ? (
        <Layer travel={2} growth={0.12} opacity={0.28}>
          <div
            className="h-full w-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${photo})`,
              filter: "grayscale(1) contrast(1.05) brightness(0.42)",
            }}
          />
        </Layer>
      ) : null}

      {/* ---------- Plan 1 : le dehors, vu à travers le pare-brise ---------- */}
      <Layer travel={3} growth={0.1} opacity={0.42} fade={-0.26}>
        <WindscreenView />
      </Layer>

      {/* ---------- Plan 2 : panneau supérieur, au-dessus de la tête ---------- */}
      <Layer travel={9} growth={0.55} opacity={0.5} fade={0.24}>
        <OverheadPanel />
      </Layer>

      {/* ---------- Plan 3 : planche de bord, de part et d'autre ---------- */}
      <Layer travel={18} growth={1.3} opacity={0.32} fade={0.22}>
        <MainPanel />
      </Layer>

      {/* ---------- Plan 4 : structure de cabine, au plus près ---------- */}
      <Layer travel={26} growth={2.6} opacity={0.6} fade={0.55}>
        <CabinFrame />
      </Layer>
    </div>
  );
}

/**
 * Un plan de profondeur, vu par une camera qui avance.
 *
 * Deux mouvements se combinent :
 *
 * - `travel` : une legere translation verticale, le mouvement de tete.
 * - `growth` : l'agrandissement depuis le point de fuite. C'est LUI qui produit
 *   la sensation d'etre dans la scene. Une translation seule se lit comme un
 *   panoramique — la camera balaie mais ne se deplace pas. Un agrandissement
 *   depuis un point de fuite commun se lit comme un travelling avant : les
 *   objets proches grossissent vite et sortent du cadre, les lointains bougent
 *   a peine. C'est exactement ce que fait l'oeil quand le corps avance.
 *
 * `fade` accompagne le passage : un plan qu'on depasse quitte le champ, il ne
 * reste pas colle devant les yeux. En fin de page la structure de cabine s'est
 * effacee et il ne reste que l'horizon — on est passe au travers.
 *
 * La boite mesure `100vh + travel` pour que son bord inferieur ne remonte
 * jamais dans le viewport, l'agrandissement ne faisant que renforcer la
 * couverture.
 */
function Layer({
  travel,
  growth,
  opacity,
  fade = 0,
  children,
}: {
  travel: number;
  growth: number;
  opacity: number;
  /** Opacite perdue sur toute la course. Negative = gagnee : le
   *  pare-brise s'eclaircit a mesure que la cabine s'efface devant lui. */
  fade?: number;
  children: React.ReactNode;
}) {
  // L'operateur est choisi ici plutot que d'emettre un « * -0.26 » dans le
  // calc() : une opacite invalide retomberait a 1 et ferait ressortir le plan
  // au lieu de l'effacer.
  const opacityExpr =
    fade >= 0
      ? `calc(${opacity} - var(--cam) * ${fade})`
      : `calc(${opacity} + var(--cam) * ${-fade})`;

  return (
    <div
      className="absolute left-[-8%] right-[-8%] top-0"
      style={{
        height: `calc(100vh + ${travel}vh)`,
        // Point de fuite commun a tous les plans : sans origine partagee,
        // les plans glisseraient les uns sur les autres au lieu de fuir
        // ensemble vers le meme point.
        transformOrigin: "50% 40%",
        transform: `translate3d(0, calc(var(--cam) * ${-travel}vh), 0) scale(calc(1 + var(--cam) * ${growth}))`,
        opacity: opacityExpr,
        willChange: "transform, opacity",
      }}
    >
      {children}
    </div>
  );
}

const COVER = {
  viewBox: "0 0 1200 800",
  preserveAspectRatio: "xMidYMid slice",
  className: "block h-full w-full",
} as const;

/* ================================================================== *
 * Le dehors : horizon et sol en perspective, vus par la verrière.
 * ================================================================== */
function WindscreenView() {
  const vanishX = 600;
  const horizon = 330;

  return (
    <svg {...COVER}>
      {/* Lueur d'horizon */}
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--color-cyan)" stopOpacity="0" />
          <stop offset="100%" stopColor="var(--color-cyan)" stopOpacity="0.12" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="1200" height={horizon} fill="url(#sky)" />

      {/* Ligne d'horizon */}
      <line
        x1="0"
        y1={horizon}
        x2="1200"
        y2={horizon}
        stroke="var(--color-cyan)"
        strokeWidth="1.5"
        opacity="0.45"
      />

      {/* Sol en fuite vers le point de convergence */}
      <g stroke="var(--color-line)" strokeWidth="1">
        {Array.from({ length: 21 }, (_, i) => {
          const spread = (i - 10) * 260;
          return (
            <line key={i} x1={vanishX + spread} y1="800" x2={vanishX + spread * 0.06} y2={horizon} />
          );
        })}
        {/* Traverses, resserrées vers l'horizon */}
        {Array.from({ length: 12 }, (_, i) => {
          const t = (i + 1) / 12;
          const y = horizon + (800 - horizon) * t * t;
          return <line key={`h-${i}`} x1="0" y1={y} x2="1200" y2={y} opacity={0.25 + t * 0.4} />;
        })}
      </g>

      {/* Repères lointains */}
      {[
        [214, 296],
        [388, 312],
        [830, 302],
        [1012, 288],
      ].map(([x, y]) => (
        <circle key={x} cx={x} cy={y} r="2" fill="var(--color-cyan)" opacity="0.5" />
      ))}
    </svg>
  );
}

/* ================================================================== *
 * Panneau supérieur : rangées de disjoncteurs et d'interrupteurs.
 * ================================================================== */
function OverheadPanel() {
  const rows = Array.from({ length: 4 }, (_, r) => r);
  const cols = Array.from({ length: 22 }, (_, c) => c);

  return (
    <svg {...COVER}>
      <g transform="translate(0, -18)">
        <rect x="150" y="0" width="900" height="132" fill="var(--color-panel)" opacity="0.5" />
        <line x1="150" y1="132" x2="1050" y2="132" stroke="var(--color-line)" strokeWidth="1.5" />

        {rows.map((r) =>
          cols.map((c) => {
            const x = 176 + c * 39;
            const y = 22 + r * 28;
            // Un disjoncteur sur sept est arme, en ambre
            const armed = (r * 22 + c) % 7 === 0;
            return (
              <g key={`${r}-${c}`}>
                <circle
                  cx={x}
                  cy={y}
                  r="6"
                  fill="none"
                  stroke="var(--color-line)"
                  strokeWidth="1.2"
                />
                <circle
                  cx={x}
                  cy={y}
                  r="2.4"
                  fill={armed ? "var(--color-amber)" : "var(--color-line)"}
                  opacity={armed ? 0.7 : 1}
                />
              </g>
            );
          }),
        )}
      </g>
    </svg>
  );
}

/* ================================================================== *
 * Planche de bord : deux grappes d'instruments, laissant le centre libre.
 * ================================================================== */
function MainPanel() {
  const cluster = (originX: number) => (
    <g transform={`translate(${originX}, 470)`}>
      <rect x="-20" y="-40" width="300" height="290" fill="var(--color-panel)" opacity="0.45" />

      {/* Trois cadrans ronds */}
      {[0, 1, 2].map((i) => {
        const cx = 42 + i * 92;
        return (
          <g key={i}>
            <circle cx={cx} cy="34" r="34" fill="none" stroke="var(--color-line)" strokeWidth="1.6" />
            <circle cx={cx} cy="34" r="27" fill="none" stroke="var(--color-line)" strokeWidth="0.8" />
            {Array.from({ length: 12 }, (_, t) => {
              const a = ((t * 30 - 90) * Math.PI) / 180;
              return (
                <line
                  key={t}
                  x1={cx + Math.cos(a) * 28}
                  y1={34 + Math.sin(a) * 28}
                  x2={cx + Math.cos(a) * 33}
                  y2={34 + Math.sin(a) * 33}
                  stroke="var(--color-line)"
                  strokeWidth="1"
                />
              );
            })}
            {/* Aiguille figée, chaque cadran sur une valeur différente */}
            <line
              x1={cx}
              y1="34"
              x2={cx + Math.cos(((i * 47 - 60) * Math.PI) / 180) * 22}
              y2={34 + Math.sin(((i * 47 - 60) * Math.PI) / 180) * 22}
              stroke="var(--color-amber)"
              strokeWidth="1.8"
              strokeLinecap="round"
              opacity="0.5"
            />
            <circle cx={cx} cy="34" r="2.6" fill="var(--color-amber)" opacity="0.5" />
          </g>
        );
      })}

      {/* Deux écrans multifonctions */}
      {[0, 1].map((i) => (
        <g key={`mfd-${i}`} transform={`translate(${8 + i * 138}, 92)`}>
          <rect
            width="118"
            height="82"
            rx="2"
            fill="var(--color-base)"
            stroke="var(--color-line)"
            strokeWidth="1.4"
          />
          <polyline
            points={
              i === 0
                ? "10,62 26,48 42,54 58,32 74,40 90,22 106,28"
                : "10,30 26,44 42,38 58,56 74,50 90,64 106,58"
            }
            fill="none"
            stroke="var(--color-cyan)"
            strokeWidth="1.4"
            opacity="0.6"
          />
          <line x1="10" y1="70" x2="106" y2="70" stroke="var(--color-line)" strokeWidth="1" />
        </g>
      ))}

      {/* Rangée d'interrupteurs à bascule */}
      {Array.from({ length: 8 }, (_, i) => (
        <rect
          key={`sw-${i}`}
          x={10 + i * 34}
          y="196"
          width="18"
          height="26"
          rx="1.5"
          fill="var(--color-panel-2)"
          stroke="var(--color-line)"
          strokeWidth="1"
        />
      ))}
    </g>
  );

  return (
    <svg {...COVER}>
      {cluster(28)}
      {/* Grappe droite, en miroir */}
      <g transform="translate(1200, 0) scale(-1, 1)">{cluster(28)}</g>
    </svg>
  );
}

/* ================================================================== *
 * Structure de cabine : montants, casquette, console centrale.
 * Le plan le plus proche — c'est lui qui donne le sentiment d'être assis.
 * ================================================================== */
function CabinFrame() {
  return (
    <svg {...COVER}>
      {/* Casquette de planche de bord, incurvée au-dessus du champ de vision */}
      <path
        d="M0 0 H1200 V96 Q900 168 600 172 Q300 168 0 96 Z"
        fill="var(--color-base)"
        stroke="var(--color-line)"
        strokeWidth="2"
      />
      <path
        d="M0 96 Q300 168 600 172 Q900 168 1200 96"
        fill="none"
        stroke="var(--color-amber)"
        strokeWidth="1.2"
        opacity="0.28"
      />

      {/* Montants de verrière */}
      <path
        d="M0 120 L118 168 L150 800 L0 800 Z"
        fill="var(--color-base)"
        stroke="var(--color-line)"
        strokeWidth="2"
      />
      <path
        d="M1200 120 L1082 168 L1050 800 L1200 800 Z"
        fill="var(--color-base)"
        stroke="var(--color-line)"
        strokeWidth="2"
      />

      {/* Rivets sur les montants */}
      {Array.from({ length: 9 }, (_, i) => {
        const y = 210 + i * 66;
        return (
          <g key={i}>
            <circle cx={104 + i * 5} cy={y} r="2.6" fill="var(--color-line)" />
            <circle cx={1096 - i * 5} cy={y} r="2.6" fill="var(--color-line)" />
          </g>
        );
      })}

      {/* Console centrale, en bas du champ */}
      <path
        d="M470 800 L512 690 H688 L730 800 Z"
        fill="var(--color-base)"
        stroke="var(--color-line)"
        strokeWidth="2"
      />
      {/* Manettes de poussée */}
      <g stroke="var(--color-line)" strokeWidth="3" strokeLinecap="round">
        <line x1="566" y1="756" x2="558" y2="700" />
        <line x1="634" y1="756" x2="642" y2="700" />
      </g>
      <circle cx="558" cy="696" r="7" fill="var(--color-panel-2)" stroke="var(--color-line)" strokeWidth="1.5" />
      <circle cx="642" cy="696" r="7" fill="var(--color-panel-2)" stroke="var(--color-line)" strokeWidth="1.5" />
    </svg>
  );
}
