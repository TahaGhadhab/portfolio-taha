/**
 * La marque : une chouette, réduite à ce qui la rend reconnaissable d'un coup
 * d'œil — un disque facial, deux aigrettes, deux yeux trop grands.
 *
 * Le dessin est volontairement pauvre en traits. Il doit tenir à 28 px dans la
 * barre et à 16 px dans un onglet : tout détail supplémentaire s'y refermerait
 * en tache. La même géométrie sert au favicon (`src/app/icon.svg`), à ceci
 * près que le favicon porte son propre fond — un onglet clair ne pardonne pas
 * un dessin qui compte sur le fond de la page.
 *
 * Aucune couleur en dur : les jetons du design system suivent le thème.
 */

/** Disque facial. */
const HEAD = { cx: 16, cy: 17, r: 11.4 };

/** Aigrettes — assises sur le disque, jamais flottantes. */
const TUFT_LEFT = "M7.9 8.9 L8.5 2.5 L11.3 6.6 Z";
const TUFT_RIGHT = "M24.1 8.9 L23.5 2.5 L20.7 6.6 Z";

/** Bec, entre les yeux et sous eux. */
const BEAK = "M13.9 21.3 L18.1 21.3 L16 25.7 Z";

const EYES = [
  { cx: 11.6, cy: 16 },
  { cx: 20.4, cy: 16 },
];
const EYE_R = 4.3;
const PUPIL_R = 1.9;

export function BrandMark({ className = "brand-mark" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" aria-hidden="true">
      <circle
        cx={HEAD.cx}
        cy={HEAD.cy}
        r={HEAD.r}
        fill="none"
        stroke="var(--iris)"
        strokeWidth="1.6"
      />
      <path d={TUFT_LEFT} fill="var(--iris)" />
      <path d={TUFT_RIGHT} fill="var(--iris)" />

      {EYES.map((e) => (
        <circle key={e.cx} cx={e.cx} cy={e.cy} r={EYE_R} fill="var(--iris)" />
      ))}
      {EYES.map((e) => (
        <circle key={e.cx} cx={e.cx} cy={e.cy} r={PUPIL_R} fill="var(--void)" />
      ))}

      <path d={BEAK} fill="var(--iris)" />
    </svg>
  );
}
