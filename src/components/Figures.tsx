import type { Content } from "@/content";

/**
 * Les figures du document.
 *
 * Même règle que pour l'aile : une figure ne décore pas, elle démontre. Chacune
 * porte une affirmation que le texte à côté ne peut pas faire aussi vite — la
 * boucle de la méthode, l'intersection des trois casquettes. Rien n'y bouge :
 * ce sont des planches, pas des animations.
 *
 * Un `viewBox` ne se règle pas en CSS : une planche large ramenée à la largeur
 * d'une colonne rend ses étiquettes à sept pixels, et une planche qu'on ne peut
 * pas lire ne démontre rien. C'est donc la géométrie qui change de format, pas
 * l'échelle du texte.
 *
 * Les deux sont donc dessinées étroites, une seule fois. Chacune se lit à côté
 * de son détail sur large écran et empilée au-dessus sur petit : la même forme
 * en colonne convient aux deux situations, ce qui est précisément pourquoi elle
 * peut être unique.
 */

/**
 * Une pointe de flèche, dessinée à la main : pas de `marker`, pas d'id à unifier.
 *
 * L'arête de retour la demande plus grosse : un trait fin ne porte pas une
 * couleur, il la dilue. La seule arête colorée du document doit peser autant
 * que ce qu'elle affirme.
 */
function head(x: number, y: number, dir: "e" | "s" | "w" | "n", s = 6) {
  const pts: Record<typeof dir, string> = {
    e: `M${x} ${y} L${x - s} ${y - s} L${x - s} ${y + s} Z`,
    s: `M${x} ${y} L${x - s} ${y - s} L${x + s} ${y - s} Z`,
    w: `M${x} ${y} L${x + s} ${y - s} L${x + s} ${y + s} Z`,
    n: `M${x} ${y} L${x - s} ${y + s} L${x + s} ${y + s} Z`,
  };
  return pts[dir];
}

/* ── La boucle ───────────────────────────────────────────── */

/** Un poste du circuit : le cadre, le numéro, le titre. */
function Station({
  x,
  y,
  w,
  h,
  step,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  step: Content["method"]["steps"][number];
}) {
  return (
    <g>
      <rect className="diag-node" x={x} y={y} width={w} height={h} strokeWidth="1" />
      <text className="diag-label" x={x + 18} y={y + 30}>
        {step.step}
      </text>
      <text className="diag-title" x={x + 18} y={y + 68}>
        {step.title}
      </text>
    </g>
  );
}

/** Les quatre postes en colonne, le retour longe la marge. */
const NODES = [12, 138, 264, 390];

function Loop({
  figure,
  steps,
}: {
  figure: Content["method"]["figure"];
  steps: Content["method"]["steps"];
}) {
  return (
    <svg viewBox="0 0 320 500" role="img" aria-label={figure.alt}>
      {NODES.map((y, i) =>
        steps[i] ? (
          <Station key={steps[i].step} x={76} y={y} w={232} h={96} step={steps[i]} />
        ) : null,
      )}

      {NODES.slice(0, -1).map((y) => (
        <g key={y}>
          <path
            className="diag-edge"
            d={`M192 ${y + 96} L192 ${y + 120}`}
            strokeWidth="1.2"
          />
          <path className="diag-edge-head" d={head(192, y + 126, "s")} />
        </g>
      ))}

      {/* Le retour descend hors de la colonne, remonte, et rentre dans 01. */}
      <path className="diag-return" d="M76 438 L44 438 L44 60 L70 60" strokeWidth="2.2" />
      <path className="diag-return-head" d={head(78, 60, "e", 8)} />

      {/* Couchée le long du retour, comme une cote sur une planche : la
          colonne ne laisse aucune réserve horizontale pour la poser à plat. */}
      <text
        className="diag-return-label"
        x="22"
        y="249"
        textAnchor="middle"
        transform="rotate(-90 22 249)"
      >
        {figure.returnLabel.join(" ")}
      </text>
    </svg>
  );
}

/**
 * La méthode, vue comme un circuit fermé.
 *
 * La liste numérotée dit ce que contient chaque poste ; elle ne peut pas dire
 * que le quatrième renvoie au premier. C'est pourtant tout le propos : la
 * mesure n'est pas une fin de course, elle relance l'observation. L'arête de
 * retour est la seule tracée à l'iris — la seule couleur chaude du document,
 * réservée à ce qui se voit.
 */
export function MethodLoop({
  figure,
  steps,
}: {
  figure: Content["method"]["figure"];
  steps: Content["method"]["steps"];
}) {
  return (
    <figure className="plate commit">
      <Loop figure={figure} steps={steps} />
      <figcaption className="mono">{figure.caption}</figcaption>
    </figure>
  );
}

/* ── L'intersection ──────────────────────────────────────── */

type Pillars = Content["about"]["positioning"]["pillars"];
type PositioningFigureContent = Content["about"]["positioning"]["figure"];

/**
 * Les trois disques, et les titres en légende numérotée sous le trait.
 *
 * Trois titres de vingt-cinq caractères ne tiennent pas côte à côte dans trois
 * cent vingt unités — ils se chevaucheraient. Numéroter les disques et lister
 * la clé sous le trait est la solution des planches cotées, pas un repli.
 */
function Fields({
  figure,
  pillars,
}: {
  figure: PositioningFigureContent;
  pillars: Pillars;
}) {
  const marks = [
    { cx: 120, cy: 120, x: 34, y: 125, anchor: "end" as const },
    { cx: 200, cy: 120, x: 286, y: 125, anchor: "start" as const },
    { cx: 160, cy: 188, x: 160, y: 284, anchor: "middle" as const },
  ];

  return (
    <svg viewBox="0 0 320 400" role="img" aria-label={figure.alt}>
      {marks.map((m, i) => (
        <circle
          className="diag-field"
          key={pillars[i]?.title ?? i}
          cx={m.cx}
          cy={m.cy}
          r={76}
          strokeWidth="1.2"
        />
      ))}

      {marks.map((m, i) => (
        <text
          className="diag-label"
          key={`no-${pillars[i]?.title ?? i}`}
          x={m.x}
          y={m.y}
          textAnchor={m.anchor}
        >
          {i + 1}
        </text>
      ))}

      <circle className="diag-mark" cx="160" cy="143" r="4" />
      <text className="diag-mark-label" x="160" y="164" textAnchor="middle">
        {figure.centerLabel.toUpperCase()}
      </text>

      <path
        className="diag-rule"
        d="M8 308 L312 308"
        strokeWidth="1"
        strokeDasharray="3 5"
      />
      {pillars.map((p, i) => (
        <g key={p.title}>
          <text className="diag-mark-label" x="8" y={334 + i * 26}>
            {i + 1}
          </text>
          <text className="diag-label" x="30" y={334 + i * 26}>
            {p.title.toUpperCase()}
          </text>
        </g>
      ))}
    </svg>
  );
}

/**
 * Trois disques, un seul point commun.
 *
 * « Trois angles sur le même problème valent mieux qu'un seul, appliqué trois
 * fois » est une phrase ; l'intersection, elle, se voit. Les trois cercles ont
 * la même surface et le même trait : aucune casquette n'est présentée comme
 * dominante. Le seul repère marqué est celui où les trois se recouvrent.
 */
export function PositioningFigure({
  figure,
  pillars,
}: {
  figure: PositioningFigureContent;
  pillars: Pillars;
}) {
  return (
    <figure className="plate commit">
      <Fields figure={figure} pillars={pillars} />
      <figcaption className="mono">{figure.caption}</figcaption>
    </figure>
  );
}
