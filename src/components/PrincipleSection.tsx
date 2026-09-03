import type { Content } from "@/content";

/* Le sillage turbulent : quatre tourbillons alternés, dessinés à la main
   plutôt que générés — leur irrégularité est le propos. */
const VORTICES = Array.from({ length: 4 }, (_, i) => {
  const x = 326 + i * 68;
  const y = 74 + (i % 2 ? 22 : -20);
  return `M${x} ${y} c 18 -24 44 -22 51 3 c 6 22 -19 33 -31 18 c -10 -12 3 -25 15 -18`;
});

/* Les dents du bord dentelé, régulières, et les filets qu'elles produisent. */
const TEETH = Array.from({ length: 40 }, (_, i) => 26 + i * 7).filter((x) => x <= 300);
const STREAMS = Array.from({ length: 10 }, (_, i) => ({
  y: 218 + i * 6,
  x2: 498 + (i % 3) * 30,
}));

/**
 * Le principe fondateur, tenu par une vraie figure d'ingénierie.
 *
 * C'est la seule illustration littérale du document : elle ne décore pas, elle
 * démontre. Un bord lisse fait du bruit ; un bord dentelé divise le problème
 * jusqu'à ce qu'il devienne inaudible.
 */
export function PrincipleSection({ principle }: { principle: Content["principle"] }) {
  return (
    <>
      <div className="head commit">
        <p className="mono">{principle.eyebrow}</p>
        <h2>{principle.title}</h2>
        <p>{principle.body}</p>
      </div>

      <div className="why commit">
        <figure className="why-figure">
          <svg viewBox="0 0 620 300" role="img" aria-label={principle.figAlt}>
            <text className="diag-label" x="26" y="34">
              {principle.plainLabel}
            </text>
            <path className="diag-line" d="M26 74 L300 74" strokeWidth="2.5" />
            {VORTICES.map((d) => (
              <path key={d} className="diag-wake" d={d} strokeWidth="1.3" />
            ))}
            <text className="diag-label" x="326" y="140">
              {principle.plainWake}
            </text>

            <path
              className="diag-rule"
              d="M26 166 L594 166"
              strokeWidth="1"
              strokeDasharray="3 5"
            />

            <text className="diag-label" x="26" y="212">
              {principle.serratedLabel}
            </text>
            <path className="diag-line" d="M26 250 L300 250" strokeWidth="2.5" />
            {TEETH.map((x) => (
              <path
                key={x}
                className="diag-line"
                d={`M${x} 250 L${x + 3.5} 238`}
                strokeWidth="1.1"
              />
            ))}
            {STREAMS.map((s) => (
              <path
                key={s.y}
                className="diag-wake-calm"
                d={`M316 ${s.y} L${s.x2} ${s.y}`}
                strokeWidth="1.1"
              />
            ))}
            <text className="diag-label" x="316" y="292">
              {principle.serratedWake}
            </text>
          </svg>
          <figcaption className="mono">{principle.figCaption}</figcaption>
        </figure>

        <div className="why-note">
          {principle.notes.map((note) => (
            <p key={note}>{note}</p>
          ))}
        </div>
      </div>
    </>
  );
}
