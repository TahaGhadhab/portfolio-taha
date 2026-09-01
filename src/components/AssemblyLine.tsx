import type { Content } from "@/content";
import { Reveal } from "./Reveal";
import { SectorIcon } from "./SectorIcon";
import { SectorSchematic } from "./SectorSchematic";

/**
 * Chaîne de montage : une station par expérience, reliée par un convoyeur.
 *
 * Vertical sur mobile (une station par écran), horizontal à partir de `lg`.
 * Tout le contenu est visible en permanence — rien n'est réservé au survol,
 * un recruteur au clavier ou au doigt lit la même chose qu'à la souris.
 * Le rouge et le vert ne servent qu'ici, au signal entrée/sortie.
 */
export function AssemblyLine({ experience }: { experience: Content["experience"] }) {
  return (
    <div className="relative">
      {/* Convoyeur — vertical sur mobile */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-[7px] top-2 w-px bg-line lg:hidden"
      />
      {/* Convoyeur — horizontal sur desktop */}
      <div
        aria-hidden="true"
        className="absolute left-0 right-0 top-[7px] hidden h-px bg-line lg:block"
      />

      <ol className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-6">
        {experience.items.map((station, i) => (
          <li key={station.id} className="relative pl-10 lg:pl-0 lg:pt-12">
            <Reveal delay={i * 90}>
              {/* Nœud de station sur le convoyeur */}
              <span
                aria-hidden="true"
                className="absolute left-0 top-1 size-[15px] rounded-full border-2 border-amber bg-base lg:top-0"
              />

              <article className="panel flex h-full flex-col overflow-hidden">
                <SectorSchematic sector={station.sector} />

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <header className="flex items-start gap-3">
                    <span className="mt-0.5 shrink-0 text-cyan">
                      <SectorIcon sector={station.sector} />
                    </span>
                    <div className="min-w-0">
                      <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold leading-tight text-ink">
                        {station.company}
                      </h3>
                      <p className="mt-1 text-sm text-cyan">{station.role}</p>
                    </div>
                  </header>

                  <p className="label-instrument mt-4 leading-relaxed">
                    {station.period}
                    <span aria-hidden="true"> · </span>
                    {station.location}
                  </p>
                  <p className="mt-1 text-xs text-muted">{station.fullName}</p>

                  {/* Entrée : problème identifié */}
                  <div className="mt-6 border-l-2 border-fault pl-3.5">
                    <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-fault">
                      <span aria-hidden="true" className="size-1.5 rounded-full bg-fault" />
                      {experience.inputLabel}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{station.input}</p>
                  </div>

                  {/* Sens de passage sur le convoyeur */}
                  <div aria-hidden="true" className="my-3 flex items-center gap-2 pl-1">
                    <span className="h-4 w-px bg-line" />
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="text-line">
                      <path
                        d="M5 1v8M2 6l3 3 3-3"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  {/* Sortie : ce qui a été livré (ou acquis, pour une immersion) */}
                  <div className="border-l-2 border-ok pl-3.5">
                    <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-ok">
                      <span aria-hidden="true" className="size-1.5 rounded-full bg-ok" />
                      {station.hasDeliverable ? experience.outputLabel : experience.immersionLabel}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-ink">{station.output}</p>
                  </div>

                  <div className="mt-6">
                    <p className="label-instrument">{experience.missionsLabel}</p>
                    <ul className="mt-2.5 space-y-2">
                      {station.missions.map((mission) => (
                        <li key={mission} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                          <span aria-hidden="true" className="mt-2 size-1 shrink-0 bg-muted" />
                          <span>{mission}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {station.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-[3px] border border-line px-2 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-muted"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </div>
  );
}
