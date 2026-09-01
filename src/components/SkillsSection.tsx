import type { Content, Deployment } from "@/content";
import { Reveal } from "./Reveal";
import { SkillsMatrix } from "./SkillsMatrix";

/**
 * Compétences.
 *
 * La matrice porte les compétences dures, adossées à leurs terrains. Les soft
 * skills et les langues restent volontairement hors métaphore : les enfermer
 * dans une grille chiffrée serait de la sur-thématisation.
 */
export function SkillsSection({
  skills,
  deployments,
}: {
  skills: Content["skills"];
  deployments: Deployment[];
}) {
  return (
    <div className="space-y-12">
      <Reveal>
        <SkillsMatrix skills={skills} deployments={deployments} />
      </Reveal>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <Reveal className="h-full">
          <div className="panel h-full p-5 sm:p-6">
            <h3 className="label-instrument !text-ink">{skills.soft.title}</h3>
            <ul className="mt-4 space-y-2.5">
              {skills.soft.items.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted">
                  <span aria-hidden="true" className="mt-2 size-1 shrink-0 bg-cyan" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={90} className="h-full">
          <div className="panel h-full p-5 sm:p-6">
            <h3 className="label-instrument !text-ink">{skills.languages.title}</h3>
            <dl className="mt-4 space-y-3">
              {skills.languages.items.map((item) => (
                <div
                  key={item.name}
                  className="flex items-baseline justify-between gap-4 border-b border-line pb-2.5 last:border-0 last:pb-0"
                >
                  <dt className="text-sm text-ink">{item.name}</dt>
                  <dd className="font-mono text-xs text-muted">{item.level}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
