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
      className={`scroll-mt-20 px-4 py-20 sm:px-6 sm:py-28 ${className}`}
    >
      <div className="mx-auto w-full max-w-6xl">
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
