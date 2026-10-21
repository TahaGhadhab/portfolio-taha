import type { CSSProperties } from "react";

/**
 * Le pictogramme animé d'une tuile de projet.
 *
 * Chaque projet est raconté en un geste, pas illustré : l'en-tête qu'on
 * remplace, l'aiguille qui se pose dans la tolérance, le module qui se pose
 * sur la piste. Le geste se joue une fois quand la tuile entre à l'écran, et
 * rejoue au survol — jamais en boucle (design system, § 5).
 *
 * Le SVG décrit l'état final : sans JavaScript, en mouvement réduit ou à
 * l'impression, la tuile montre le résultat, immobile. Le mouvement est tout
 * entier dans `project-glyphs.css`. Purement décoratif : `aria-hidden`, le
 * nom et l'accroche de la tuile disent déjà tout.
 */

const at = (i: number, extra?: Record<string, string>) =>
  ({ "--i": i, ...extra }) as CSSProperties;

function Rebranding() {
  return (
    <>
      <rect className="g-line" x="14" y="6" width="44" height="60" rx="2" />
      <rect className="g-fault g-reb-old" x="20" y="12" width="32" height="7" />
      <rect className="g-fill-acc g-reb-new" x="20" y="12" width="32" height="7" />
      <path className="g-dim" d="M20 28h32M20 35h28M20 42h32M20 49h22M20 56h30" />
      <path className="g-acc g-reb-scan" d="M10 9h52" />
      <path className="g-dim" d="M66 36h12m-4-4 4 4-4 4" />
      {Array.from({ length: 6 }, (_, i) => (
        <g key={i}>
          <rect className="g-dim" x={88 + i * 17} y="30" width="12" height="12" rx="1.5" />
          <path className="g-ok g-reb-tick" style={at(i)} d={`M${91 + i * 17} 36l2.5 2.5 4.5-5`} />
        </g>
      ))}
    </>
  );
}

function Torque() {
  return (
    <>
      <path className="g-dim" d="M6 62h92" />
      <path className="g-line" d="M10 62a42 42 0 0 1 84 0" />
      <path className="g-ok g-band" d="M55.7 20.2a42 42 0 0 1 17.3 5.4" />
      <path className="g-acc g-needle" d="M52 62V26" />
      <circle className="g-solid" cx="52" cy="62" r="3" />
      {[56, 44, 50].map((w, i) => (
        <g className="g-log" style={at(i)} key={w}>
          <circle className="g-solid-ok" cx="124" cy={24 + i * 14} r="2.5" />
          <path className="g-dim" d={`M132 ${24 + i * 14}h${w}`} />
        </g>
      ))}
    </>
  );
}

function Pharmaco() {
  return (
    <>
      <rect className="g-line" x="14" y="4" width="30" height="64" rx="5" />
      <path className="g-dim" d="M24 10h10M46 36h8" />
      {Array.from({ length: 11 }, (_, i) => (
        <rect
          key={i}
          className="g-tile"
          style={at(i)}
          x={60 + (i % 6) * 22}
          y={16 + Math.floor(i / 6) * 24}
          width="16"
          height="16"
          rx="2"
        />
      ))}
    </>
  );
}

/** Position finale de chaque machine, et l'écart qui la sépare de son point de départ. */
const MACHINES = [
  [70, 16, -40, 24],
  [94, 16, -86, -6],
  [70, 40, -26, -32],
  [94, 40, -78, 12],
  [138, 16, -98, 8],
  [162, 16, -156, 14],
  [138, 40, -112, -36],
  [162, 40, -112, 14],
] as const;

function Layout() {
  return (
    <>
      <rect className="g-dim g-cell" x="62" y="8" width="50" height="56" rx="3" />
      <rect className="g-dim g-cell" x="130" y="8" width="50" height="56" rx="3" />
      {MACHINES.map(([x, y, fx, fy], i) => (
        <rect
          key={i}
          className={`g-machine ${i < 4 ? "g-fill-line" : "g-fill-acc"}`}
          style={at(i, { "--fx": `${fx}px`, "--fy": `${fy}px` })}
          x={x}
          y={y}
          width="10"
          height="10"
          rx="1.5"
        />
      ))}
    </>
  );
}

const BARS = [30, 38, 26, 44, 34, 48, 18, 40, 46];

function Dashboard() {
  return (
    <>
      <path className="g-dim" d="M10 8v56h180" />
      {BARS.map((h, i) => (
        <rect
          key={i}
          className={`g-bar ${h < 24 ? "g-fill-fault" : "g-fill-acc"}`}
          style={at(i)}
          x={20 + i * 19}
          y={64 - h}
          width="12"
          height={h}
        />
      ))}
      <path className="g-fault g-dash g-threshold" d="M12 40h178" />
      <circle className="g-solid-fault" cx="140" cy="38" r="2.5" />
      <circle className="g-fault g-ring" cx="140" cy="38" r="2.5" />
    </>
  );
}

function Lunar() {
  return (
    <>
      <circle className="g-star" cx="22" cy="10" r="0.9" />
      <circle className="g-star" cx="150" cy="8" r="0.9" />
      <circle className="g-star" cx="182" cy="22" r="0.9" />
      <circle className="g-star" cx="62" cy="20" r="0.9" />
      <path className="g-dim g-dash" d="M46 6c24 6 52 14 56 34" />
      <path className="g-dim" d="M4 62h192" />
      <path className="g-acc g-pad" d="M88 62h28" />
      <path className="g-dim g-dust" d="M84 60q-6-4-12-2M120 60q6-4 12-2" />
      <g className="g-lander">
        <path className="g-fill-acc g-flame" d="M99 53l3 8 3-8z" />
        <path className="g-line" d="M96 40q6-9 12 0" />
        <rect className="g-line" x="94" y="40" width="16" height="12" rx="2" />
        <path className="g-line" d="M95 52l-5 10M109 52l5 10M87 62h6M111 62h6" />
      </g>
    </>
  );
}

function Flip() {
  return (
    <>
      <path className="g-dim" d="M4 62h192" />
      <path className="g-line" d="M60 62a24 24 0 0 1 0-48" />
      <path className="g-dim g-dash" d="M60 22q42-26 93 22" />
      <path className="g-acc g-pad" d="M138 62h30" />
      <g className="g-car">
        <path className="g-acc g-puff" d="M146 63v5M160 63v5" />
        <path className="g-line" d="M140 56v-6l6-1 4-5h10l4 5 6 1v6z" />
        <circle className="g-line" cx="146" cy="58.5" r="3.5" />
        <circle className="g-line" cx="160" cy="58.5" r="3.5" />
      </g>
    </>
  );
}

const GLYPHS: Record<string, () => React.JSX.Element> = {
  "safran-rebranding": Rebranding,
  controltorque: Torque,
  pharmacowork: Pharmaco,
  "machine-layout": Layout,
  "dashboard-enib": Dashboard,
  "lunar-lander": Lunar,
  fliplander: Flip,
};

export function ProjectGlyph({ id }: { id: string }) {
  const Glyph = GLYPHS[id];
  if (!Glyph) return null;
  return (
    <span className={`pcard-glyph glyph-${id}`} aria-hidden="true">
      <svg viewBox="0 0 200 72" preserveAspectRatio="xMinYMid meet" focusable="false">
        <Glyph />
      </svg>
    </span>
  );
}
