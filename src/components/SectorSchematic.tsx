import type { Sector } from "@/content";

/**
 * Bandeau de schéma technique en tête de station, façon plan coté.
 *
 * Un dessin par secteur : coupe de profil d'aile pour l'aéronautique, tête de
 * puits pour le pétrolier, série chiffrée pour la finance. Décoratif — le
 * secteur est écrit en toutes lettres dans la carte.
 */
export function SectorSchematic({ sector }: { sector: Sector }) {
  return (
    <div
      aria-hidden="true"
      className="relative overflow-hidden border-b border-line bg-base"
      style={{ aspectRatio: "16 / 5" }}
    >
      <div className="grid-blueprint absolute inset-0 opacity-60" />
      {sector === "aero" ? <AeroSchematic /> : null}
      {sector === "oil" ? <OilSchematic /> : null}
      {sector === "finance" ? <FinanceSchematic /> : null}
    </div>
  );
}

const SVG_PROPS = {
  viewBox: "0 0 320 100",
  className: "relative block h-full w-full",
  preserveAspectRatio: "xMidYMid meet",
} as const;

/** Cote avec ses deux embouts, comme sur un plan d'atelier. */
function Dimension({
  x1,
  x2,
  y,
  label,
}: {
  x1: number;
  x2: number;
  y: number;
  label: string;
}) {
  return (
    <g stroke="var(--color-muted)" strokeWidth="0.7" opacity="0.75">
      <line x1={x1} y1={y} x2={x2} y2={y} />
      <line x1={x1} y1={y - 3} x2={x1} y2={y + 3} />
      <line x1={x2} y1={y - 3} x2={x2} y2={y + 3} />
      <text
        x={(x1 + x2) / 2}
        y={y - 5}
        textAnchor="middle"
        fill="var(--color-muted)"
        stroke="none"
        style={{ fontFamily: "var(--font-jetbrains-mono)", fontSize: "6px" }}
      >
        {label}
      </text>
    </g>
  );
}

/* --- Aéronautique : coupe de profil d'aile, avec ses points de serrage --- */
function AeroSchematic() {
  return (
    <svg {...SVG_PROPS}>
      {/* Profil */}
      <path
        d="M28 62 C56 34, 128 26, 196 38 C238 45, 268 54, 292 62 C266 70, 214 76, 156 74 C104 72, 56 68, 28 62 Z"
        fill="var(--color-panel)"
        stroke="var(--color-cyan)"
        strokeWidth="1.2"
      />
      {/* Corde */}
      <line
        x1="28"
        y1="62"
        x2="292"
        y2="62"
        stroke="var(--color-line)"
        strokeWidth="0.8"
        strokeDasharray="4 3"
      />
      {/* Longerons */}
      <g stroke="var(--color-line)" strokeWidth="0.8">
        <line x1="92" y1="40" x2="92" y2="70" />
        <line x1="156" y1="33" x2="156" y2="74" />
        <line x1="220" y1="41" x2="220" y2="72" />
      </g>
      {/* Points de serrage contrôlés */}
      {[92, 156, 220].map((x, i) => (
        <circle
          key={x}
          cx={x}
          cy={62}
          r="3"
          fill="var(--color-base)"
          stroke={i === 1 ? "var(--color-amber)" : "var(--color-cyan)"}
          strokeWidth="1.4"
        />
      ))}
      <Dimension x1={28} x2={292} y={88} label="CORDE" />
    </svg>
  );
}

/* --- Pétrolier : tête de puits et colonne, esprit coiled-tubing --- */
function OilSchematic() {
  return (
    <svg {...SVG_PROPS}>
      {/* Sol */}
      <line x1="0" y1="58" x2="320" y2="58" stroke="var(--color-line)" strokeWidth="1" />
      <g stroke="var(--color-line)" strokeWidth="0.7" opacity="0.7">
        {Array.from({ length: 16 }, (_, i) => (
          <line key={i} x1={i * 20 + 6} y1="58" x2={i * 20} y2="66" />
        ))}
      </g>

      {/* Colonne de puits */}
      <g stroke="var(--color-cyan)" strokeWidth="1.1" fill="none">
        <line x1="150" y1="58" x2="150" y2="96" />
        <line x1="170" y1="58" x2="170" y2="96" />
      </g>
      {/* Tubing enroulé descendu dans le puits */}
      <path
        d="M160 58 v34"
        stroke="var(--color-amber)"
        strokeWidth="1.6"
        strokeLinecap="round"
      />

      {/* Touret de coiled-tubing */}
      <g transform="translate(66, 30)">
        <circle cx="0" cy="0" r="22" fill="none" stroke="var(--color-cyan)" strokeWidth="1.2" />
        <circle cx="0" cy="0" r="14" fill="none" stroke="var(--color-line)" strokeWidth="0.9" />
        <circle cx="0" cy="0" r="7" fill="none" stroke="var(--color-line)" strokeWidth="0.9" />
        <circle cx="0" cy="0" r="2" fill="var(--color-amber)" />
      </g>
      {/* Trajet du tubing, du touret vers la tête de puits */}
      <path
        d="M88 30 C124 30, 132 42, 160 52"
        fill="none"
        stroke="var(--color-amber)"
        strokeWidth="1.4"
      />

      {/* Bloc obturateur */}
      <rect
        x="144"
        y="44"
        width="32"
        height="14"
        rx="1.5"
        fill="var(--color-panel)"
        stroke="var(--color-cyan)"
        strokeWidth="1.1"
      />

      <Dimension x1={144} x2={176} y={18} label="BOP" />
    </svg>
  );
}

/* --- Finance : série chiffrée et ligne de tendance --- */
function FinanceSchematic() {
  const bars = [46, 62, 38, 70, 54, 78, 60, 86, 72, 92];
  const x0 = 32;
  const gap = 26;

  return (
    <svg {...SVG_PROPS}>
      <line x1="24" y1="84" x2="300" y2="84" stroke="var(--color-line)" strokeWidth="1" />
      <line x1="24" y1="14" x2="24" y2="84" stroke="var(--color-line)" strokeWidth="1" />

      {bars.map((value, i) => (
        <rect
          key={i}
          x={x0 + i * gap}
          y={84 - value * 0.62}
          width="12"
          height={value * 0.62}
          rx="1"
          fill="var(--color-cyan)"
          opacity={0.18 + (i / bars.length) * 0.34}
        />
      ))}

      {/* Tendance */}
      <polyline
        points={bars.map((v, i) => `${x0 + i * gap + 6},${84 - v * 0.62 - 5}`).join(" ")}
        fill="none"
        stroke="var(--color-amber)"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      {/* Point de décision */}
      <circle
        cx={x0 + 7 * gap + 6}
        cy={84 - bars[7] * 0.62 - 5}
        r="3.2"
        fill="var(--color-base)"
        stroke="var(--color-amber)"
        strokeWidth="1.5"
      />
    </svg>
  );
}
