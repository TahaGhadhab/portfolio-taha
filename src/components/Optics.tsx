/**
 * Les couches optiques fixes : l'air, le vignettage, le grain, le cadre.
 *
 * Elles n'illustrent rien — elles cadrent, et elles donnent de la
 * profondeur au champ. Le document est tenu comme une planche
 * photographique : quatre filets, quatre équerres de repère, et un grain
 * assez faible pour ne se voir que si on le cherche.
 *
 * L'air, lui, est ce qui manquait. Un aplat unique derrière un vol de nuit
 * n'est pas une nuit, c'est un mur : il n'a ni haut ni bas, et rien n'y
 * indique qu'on traverse quelque chose. Trois plans le remplacent — une
 * trame mesurée, une lueur, un horizon —, chacun se déplaçant à sa propre
 * vitesse quand on descend le document. C'est la parallaxe, et elle seule,
 * qui fait qu'un fond a une épaisseur.
 *
 * Rien n'y est animé au repos : les trois plans ne bougent que si le
 * lecteur défile, exactement comme le cheveu de progression sous la barre.
 * Tout est en CSS, piloté par le défilement lui-même — aucune image,
 * aucune boucle, aucune ligne de JavaScript.
 */
export function Optics() {
  return (
    <>
      <div className="air" aria-hidden="true">
        {/* La trame : deux pas, un fin et un large, comme un papier
            millimétré. Elle dit que le vide est mesuré. */}
        <span className="air-field" />
        {/* La lueur, qui descend plus lentement que le texte. */}
        <span className="air-bloom" />
        {/* L'horizon — le même repère que sous l'aile, tenu à l'échelle
            de la page. */}
        <span className="air-horizon" />
      </div>

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
