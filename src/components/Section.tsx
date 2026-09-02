import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

interface SectionProps {
  id: string;
  /** Numéro d'instrument affiché en mono, ex. « 03 ». */
  index: string;
  title: string;
  intro?: string;
  children: ReactNode;
  className?: string;
}

/** En-tête commun à toutes les sections : numéro, titre, chapeau. */
export function Section({ id, index, title, intro, children, className = "" }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`relative scroll-mt-20 px-4 py-20 sm:px-6 sm:py-28 ${className}`}
    >
      {/* Bus de circuit : la piste verticale traverse toutes les sections et
          les relie bout à bout, avec une via au niveau de chaque en-tête.
          Masquée sous `xl`, où la marge disponible est trop mince. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-full max-w-6xl -translate-x-1/2 xl:block"
      >
        <span className="absolute inset-y-0 -left-8 w-px bg-line" />
        <span className="absolute -left-[38px] top-[calc(5rem+0.4rem)] size-[13px] rounded-full border border-line bg-base" />
        <span className="absolute -left-[34px] top-[calc(5rem+0.65rem)] size-[5px] rounded-full bg-amber" />
        {/* Dérivation vers le titre de section */}
        <span className="absolute -left-8 top-[calc(5rem+0.65rem)] h-px w-6 bg-line" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl">
        <Reveal>
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-xs text-amber">{index}</span>
            <span aria-hidden="true" className="h-px flex-1 bg-line" />
          </div>
          <h2
            id={`${id}-title`}
            className="mt-4 font-[family-name:var(--font-space-grotesk)] text-3xl font-bold tracking-tight text-ink sm:text-4xl"
          >
            {title}
          </h2>
          {intro ? (
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">{intro}</p>
          ) : null}
        </Reveal>

        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
