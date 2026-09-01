import type { Project } from "@/content";

/**
 * Illustration procédurale d'un projet, dessinée en SVG.
 *
 * Chaque visuel montre ce que le projet fait réellement — un planning
 * d'officine, une implantation en îlots, un tableau de bord — plutôt qu'une
 * image d'illustration interchangeable. Purement décoratif au sens des
 * lecteurs d'écran : le résumé textuel dit déjà tout, d'où `aria-hidden`.
 */
export function ProjectVisual({ kind }: { kind: Project["visual"] }) {
  return (
    <div
      aria-hidden="true"
      className="relative overflow-hidden border-b border-line bg-base"
      style={{ aspectRatio: "16 / 8" }}
    >
      <div className="grid-blueprint absolute inset-0 opacity-50" />
      {kind === "roster" ? <RosterVisual /> : null}
      {kind === "layout" ? <LayoutVisual /> : null}
      {kind === "dashboard" ? <DashboardVisual /> : null}
      {/* Reflet d'écran, très léger */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(160deg, color-mix(in srgb, var(--color-ink) 5%, transparent) 0%, transparent 42%)",
        }}
      />
    </div>
  );
}

const SVG_PROPS = {
  viewBox: "0 0 320 160",
  className: "relative block h-full w-full",
  preserveAspectRatio: "xMidYMid meet",
} as const;

/* ------------------------------------------------------------------ *
 * PharmacoWork — planning d'équipe d'officine.
 * Les créneaux couverts sont en cyan, le trou de couverture en ambre :
 * c'est exactement le problème que l'outil sert à voir.
 * ------------------------------------------------------------------ */
function RosterVisual() {
  const staff = ["AB", "KM", "SL", "NH", "TG"];
  const days = ["L", "M", "M", "J", "V", "S", "D"];
  // 1 = matin, 2 = journée, 3 = trou à couvrir, 0 = repos
  const shifts = [
    [2, 2, 1, 2, 2, 1, 0],
    [1, 2, 2, 0, 2, 2, 1],
    [2, 0, 2, 2, 3, 1, 0],
    [0, 1, 2, 2, 2, 0, 2],
    [2, 2, 0, 1, 2, 2, 1],
  ];

  const x0 = 40;
  const y0 = 30;
  const cw = 38;
  const ch = 22;

  return (
    <svg {...SVG_PROPS}>
      {days.map((day, c) => (
        <text
          key={`${day}-${c}`}
          x={x0 + c * cw + cw / 2 - 3}
          y={y0 - 10}
          fill="var(--color-muted)"
          style={{ fontFamily: "var(--font-jetbrains-mono)", fontSize: "8px" }}
        >
          {day}
        </text>
      ))}

      {staff.map((person, r) => (
        <text
          key={person}
          x={10}
          y={y0 + r * ch + 14}
          fill="var(--color-muted)"
          style={{ fontFamily: "var(--font-jetbrains-mono)", fontSize: "8px" }}
        >
          {person}
        </text>
      ))}

      {shifts.map((rowShifts, r) =>
        rowShifts.map((shift, c) => {
          if (shift === 0) return null;
          const gap = shift === 3;
          return (
            <rect
              key={`${r}-${c}`}
              x={x0 + c * cw + 2}
              y={y0 + r * ch + 3}
              width={cw - 5}
              height={ch - 8}
              rx="2"
              fill={gap ? "var(--color-amber)" : "var(--color-cyan)"}
              opacity={gap ? 0.95 : shift === 2 ? 0.5 : 0.24}
              stroke={gap ? "var(--color-amber)" : "none"}
              strokeWidth="1"
            />
          );
        }),
      )}

      {/* Ligne de séparation du total */}
      <line
        x1={x0}
        y1={y0 + staff.length * ch + 4}
        x2={x0 + days.length * cw - 3}
        y2={y0 + staff.length * ch + 4}
        stroke="var(--color-line)"
        strokeWidth="1"
      />
    </svg>
  );
}

/* ------------------------------------------------------------------ *
 * Machine Layout — implantation en îlots.
 * Trois îlots issus du regroupement, reliés par les flux inter-îlots.
 * ------------------------------------------------------------------ */
function LayoutVisual() {
  const cells = [
    {
      x: 20,
      y: 26,
      w: 84,
      h: 60,
      machines: [
        { x: 8, y: 10, w: 28, h: 18 },
        { x: 44, y: 10, w: 30, h: 18 },
        { x: 8, y: 34, w: 30, h: 16 },
        { x: 46, y: 34, w: 28, h: 16 },
      ],
    },
    {
      x: 124,
      y: 18,
      w: 76,
      h: 48,
      machines: [
        { x: 8, y: 10, w: 26, h: 16 },
        { x: 42, y: 10, w: 26, h: 16 },
        { x: 24, y: 30, w: 28, h: 10 },
      ],
    },
    {
      x: 214,
      y: 44,
      w: 86,
      h: 72,
      machines: [
        { x: 10, y: 12, w: 30, h: 18 },
        { x: 48, y: 12, w: 28, h: 18 },
        { x: 10, y: 38, w: 28, h: 20 },
        { x: 46, y: 38, w: 30, h: 20 },
      ],
    },
  ];

  return (
    <svg {...SVG_PROPS}>
      {/* Flux inter-îlots */}
      <g stroke="var(--color-amber)" strokeWidth="1.2" fill="none" opacity="0.72">
        <path d="M104 56 L124 44" strokeDasharray="3 3" />
        <path d="M200 46 L214 68" strokeDasharray="3 3" />
        <path d="M62 86 Q150 132 258 116" strokeDasharray="3 3" opacity="0.55" />
      </g>

      {cells.map((cell, i) => (
        <g key={i}>
          {/* Frontière d'îlot */}
          <rect
            x={cell.x}
            y={cell.y}
            width={cell.w}
            height={cell.h}
            rx="2"
            fill="none"
            stroke="var(--color-cyan)"
            strokeWidth="1"
            strokeDasharray="4 3"
            opacity="0.55"
          />
          <text
            x={cell.x + 3}
            y={cell.y - 4}
            fill="var(--color-cyan)"
            style={{ fontFamily: "var(--font-jetbrains-mono)", fontSize: "7px" }}
          >
            {`C${i + 1}`}
          </text>

          {cell.machines.map((machine, j) => (
            <rect
              key={j}
              x={cell.x + machine.x}
              y={cell.y + machine.y}
              width={machine.w}
              height={machine.h}
              rx="1.5"
              fill="var(--color-panel-2)"
              stroke="var(--color-line)"
              strokeWidth="1"
            />
          ))}
        </g>
      ))}
    </svg>
  );
}

/* ------------------------------------------------------------------ *
 * Dashboard ENIB — tuiles de KPI, courbe de suivi, seuil d'alerte.
 * ------------------------------------------------------------------ */
function DashboardVisual() {
  const series = [128, 120, 126, 112, 104, 108, 96, 88, 92, 78, 82, 70];
  const step = 232 / (series.length - 1);
  const points = series.map((v, i) => `${44 + i * step},${v}`).join(" ");
  const area = `M44,${series[0]} L${points.split(" ").slice(1).join(" L")} L${44 + 232},140 L44,140 Z`;

  const tiles = [
    { label: "KPI", value: "42", accent: "var(--color-cyan)" },
    { label: "ALERTES", value: "3", accent: "var(--color-amber)" },
    { label: "SAT.", value: "87%", accent: "var(--color-cyan)" },
  ];

  return (
    <svg {...SVG_PROPS}>
      {tiles.map((tile, i) => (
        <g key={tile.label} transform={`translate(${20 + i * 96}, 16)`}>
          <rect
            width="84"
            height="34"
            rx="2"
            fill="var(--color-panel)"
            stroke="var(--color-line)"
            strokeWidth="1"
          />
          <text
            x="8"
            y="14"
            fill="var(--color-muted)"
            style={{ fontFamily: "var(--font-jetbrains-mono)", fontSize: "6.5px", letterSpacing: "1px" }}
          >
            {tile.label}
          </text>
          <text
            x="8"
            y="28"
            fill={tile.accent}
            style={{ fontFamily: "var(--font-jetbrains-mono)", fontSize: "13px", fontWeight: 700 }}
          >
            {tile.value}
          </text>
        </g>
      ))}

      {/* Seuil d'alerte */}
      <line
        x1="44"
        y1="100"
        x2="276"
        y2="100"
        stroke="var(--color-amber)"
        strokeWidth="1"
        strokeDasharray="4 3"
        opacity="0.7"
      />
      <text
        x="278"
        y="103"
        fill="var(--color-amber)"
        style={{ fontFamily: "var(--font-jetbrains-mono)", fontSize: "6.5px" }}
      >
        S
      </text>

      <path d={area} fill="var(--color-cyan)" opacity="0.12" />
      <polyline
        points={points}
        fill="none"
        stroke="var(--color-cyan)"
        strokeWidth="1.6"
        strokeLinejoin="round"
        strokeLinecap="round"
      />

      {series.map((v, i) =>
        i % 3 === 0 ? (
          <circle key={i} cx={44 + i * step} cy={v} r="2" fill="var(--color-cyan)" />
        ) : null,
      )}

      <line x1="44" y1="140" x2="276" y2="140" stroke="var(--color-line)" strokeWidth="1" />
      <line x1="44" y1="62" x2="44" y2="140" stroke="var(--color-line)" strokeWidth="1" />
    </svg>
  );
}
