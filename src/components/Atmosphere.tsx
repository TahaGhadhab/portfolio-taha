/**
 * Matière d'écran par-dessus toute la page : lignes de balayage et
 * assombrissement des bords.
 *
 * Volontairement au ras du perceptible — le design system interdit le
 * scintillement et le néon. L'effet doit se sentir sans se voir, et ne jamais
 * dégrader le contraste du texte : c'est pourquoi la vignette s'arrête à 32 %
 * de noir sur les bords seulement, loin des colonnes de lecture.
 *
 * `pointer-events-none` sur toute la couche : elle ne doit rien intercepter.
 */
export function Atmosphere() {
  return (
    <div aria-hidden="true" className="no-print pointer-events-none fixed inset-0 z-[60]">
      <div className="scanlines absolute inset-0 opacity-[0.55]" />
      <div className="vignette absolute inset-0" />
    </div>
  );
}
