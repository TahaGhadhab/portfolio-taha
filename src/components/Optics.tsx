/**
 * Les couches optiques fixes : cadre de repérage, vignettage, grain.
 *
 * Elles n'illustrent rien — elles cadrent. Le document est tenu comme une
 * planche photographique : quatre filets, quatre équerres de repère, et un
 * grain assez faible pour ne se voir que si on le cherche.
 */
export function Optics() {
  return (
    <>
      <div className="optics" aria-hidden="true">
        <span className="rule t" />
        <span className="rule b" />
        <span className="rule l" />
        <span className="rule r" />
        <span className="reg tl" />
        <span className="reg tr" />
        <span className="reg bl" />
        <span className="reg br" />
      </div>
      <div className="vignette" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />
    </>
  );
}
