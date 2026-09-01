import type { Content } from "@/content";

const R_OUTER = 156;
const R_RING = 132;
const R_INNER = 96;

/** Repères de cap, tous les 15°. */
const HEADINGS = Array.from({ length: 24 }, (_, i) => i * 15);

/** Échos fixes sur le scope — positions figées, jamais aléatoires. */
const BLIPS = [
  { angle: 34, distance: 0.52, size: 3.4 },
  { angle: 122, distance: 0.78, size: 2.6 },
  { angle: 198, distance: 0.38, size: 3 },
  { angle: 262, distance: 0.66, size: 2.2 },
  { angle: 318, distance: 0.86, size: 2.8 },
];

function polar(angleDeg: number, radius: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: 200 + radius * Math.cos(rad), y: 200 + radius * Math.sin(rad) };
}

/**
 * Cluster d'instruments du poste de pilotage.
 *
 * Entièrement vectoriel et statique côté serveur : le seul mouvement est un
 * balayage de scope très lent et très peu contrasté, du type explicitement
 * autorisé par le design system — un balayage subtil, jamais scintillant.
 * `prefers-reduced-motion` l'arrête net (règle globale de `globals.css`).
 *
 * Décoratif : chaque information affichée ici existe en texte ailleurs.
 */
export function HeroInstrument({ hero }: { hero: Content["hero"] }) {
  return (
    <div className="relative select-none" aria-hidden="true">
      <svg viewBox="0 0 400 400" className="block h-full w-full">
        <defs>
          {/* Le balayage : une traînée qui s'estompe derrière le rayon */}
          <linearGradient id="sweep" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--color-cyan)" stopOpacity="0" />
            <stop offset="100%" stopColor="var(--color-cyan)" stopOpacity="0.24" />
          </linearGradient>
          <radialGradient id="core">
            <stop offset="0%" stopColor="var(--color-cyan)" stopOpacity="0.09" />
            <stop offset="100%" stopColor="var(--color-cyan)" stopOpacity="0" />
          </radialGradient>
          <clipPath id="scope">
            <circle cx="200" cy="200" r={R_RING} />
          </clipPath>
        </defs>

        {/* Équerres de cadrage HUD */}
        <g stroke="var(--color-line)" strokeWidth="1.4" fill="none">
          <path d="M12 44V12h32M356 12h32v32M388 356v32h-32M44 388H12v-32" />
        </g>

        <circle cx="200" cy="200" r={R_OUTER} fill="url(#core)" />

        {/* Couronne de cap */}
        <circle
          cx="200"
          cy="200"
          r={R_OUTER}
          fill="none"
          stroke="var(--color-line)"
          strokeWidth="1"
        />
        {HEADINGS.map((deg) => {
          const major = deg % 45 === 0;
          const outer = polar(deg, R_OUTER);
          const inner = polar(deg, R_OUTER - (major ? 14 : 7));
          return (
            <line
              key={deg}
              x1={inner.x}
              y1={inner.y}
              x2={outer.x}
              y2={outer.y}
              stroke={major ? "var(--color-muted)" : "var(--color-line)"}
              strokeWidth={major ? 1.4 : 1}
            />
          );
        })}

        {/* Cercles de portée */}
        <g fill="none" stroke="var(--color-line)" strokeWidth="1">
          <circle cx="200" cy="200" r={R_RING} />
          <circle cx="200" cy="200" r={R_INNER} strokeDasharray="3 5" />
          <circle cx="200" cy="200" r={56} strokeDasharray="3 5" />
        </g>

        {/* Réticule */}
        <g stroke="var(--color-line)" strokeWidth="1">
          <line x1={200 - R_RING} y1="200" x2={200 + R_RING} y2="200" />
          <line x1="200" y1={200 - R_RING} x2="200" y2={200 + R_RING} />
        </g>

        <g clipPath="url(#scope)">
          {/* Ligne d'horizon, légèrement inclinée : l'appareil est en virage */}
          <g transform="rotate(-7 200 200)">
            <line
              x1={200 - R_RING}
              y1="200"
              x2={200 + R_RING}
              y2="200"
              stroke="var(--color-amber)"
              strokeWidth="1.6"
              opacity="0.5"
            />
            <line
              x1={200 - 46}
              y1="176"
              x2={200 + 46}
              y2="176"
              stroke="var(--color-amber)"
              strokeWidth="1"
              opacity="0.22"
            />
            <line
              x1={200 - 46}
              y1="224"
              x2={200 + 46}
              y2="224"
              stroke="var(--color-amber)"
              strokeWidth="1"
              opacity="0.22"
            />
          </g>

          {/* Balayage — 9 s par tour, contraste très bas */}
          <g
            style={{
              transformOrigin: "200px 200px",
              animation: "instrument-sweep 9s linear infinite",
            }}
          >
            <path
              d={`M200 200 L200 ${200 - R_RING} A ${R_RING} ${R_RING} 0 0 1 ${
                polar(62, R_RING).x
              } ${polar(62, R_RING).y} Z`}
              fill="url(#sweep)"
            />
            <line
              x1="200"
              y1="200"
              x2="200"
              y2={200 - R_RING}
              stroke="var(--color-cyan)"
              strokeWidth="1.4"
              opacity="0.55"
            />
          </g>
        </g>

        {/* Échos */}
        {BLIPS.map((blip) => {
          const p = polar(blip.angle, R_RING * blip.distance);
          return (
            <circle
              key={blip.angle}
              cx={p.x}
              cy={p.y}
              r={blip.size}
              fill="var(--color-cyan)"
              opacity="0.75"
            />
          );
        })}

        {/* Symbole appareil, au centre */}
        <g stroke="var(--color-amber)" strokeWidth="2" fill="none" strokeLinecap="round">
          <path d="M176 200h16M208 200h16M200 188v-8" />
          <circle cx="200" cy="200" r="3.5" fill="var(--color-amber)" stroke="none" />
        </g>

        {/* Cartouches de lecture */}
        <g
          fill="var(--color-muted)"
          style={{ fontFamily: "var(--font-jetbrains-mono)", fontSize: "10px", letterSpacing: "1.4px" }}
        >
          <text x="20" y="204">
            SYS
          </text>
          <text x="356" y="204" textAnchor="end">
            OPS
          </text>
          <text x="200" y="24" textAnchor="middle">
            N
          </text>
          <text x="200" y="386" textAnchor="middle">
            S
          </text>
        </g>

        {/* Trois valeurs déjà présentes en texte dans le compteur d'ouverture */}
        {hero.stats.map((stat, i) => (
          <text
            key={stat.label}
            x="20"
            y={244 + i * 18}
            fill="var(--color-cyan)"
            opacity="0.85"
            style={{ fontFamily: "var(--font-jetbrains-mono)", fontSize: "11px" }}
          >
            {stat.value.padStart(2, "0")}
          </text>
        ))}
      </svg>
    </div>
  );
}
