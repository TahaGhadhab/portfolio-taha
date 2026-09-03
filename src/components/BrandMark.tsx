/**
 * La marque : le même peigne que le bord d'attaque de l'aile, réduit à une
 * signature. Géométrie déterministe, calculée au rendu serveur — aucun
 * risque d'écart d'hydratation.
 */
export function BrandMark({ className = "brand-mark" }: { className?: string }) {
  const R = 12;
  const cx = 16;
  const cy = 21;
  const teeth = Array.from({ length: 13 }, (_, i) => {
    const t = i / 12;
    const a = ((10 + 160 * t) * Math.PI) / 180;
    const len = 2.4 + 4.8 * Math.sin(Math.PI * t);
    return {
      x1: cx + Math.cos(a) * R,
      y1: cy - Math.sin(a) * R,
      x2: cx + Math.cos(a) * (R + len),
      y2: cy - Math.sin(a) * (R + len),
    };
  });

  return (
    <svg className={className} viewBox="0 0 32 32" aria-hidden="true">
      <path
        d="M4 21 A12 12 0 0 1 28 21"
        fill="none"
        stroke="var(--iris)"
        strokeWidth="1.3"
      />
      {teeth.map((t, i) => (
        <line
          key={i}
          x1={t.x1.toFixed(1)}
          y1={t.y1.toFixed(1)}
          x2={t.x2.toFixed(1)}
          y2={t.y2.toFixed(1)}
          stroke="var(--iris)"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
      ))}
    </svg>
  );
}
