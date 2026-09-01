import type { Content } from "@/content";
import { Gauge } from "./Gauge";
import { Reveal } from "./Reveal";

/**
 * Compétences en instruments de cockpit, regroupées par domaine.
 *
 * Les soft skills et les langues restent volontairement hors métaphore :
 * les enfermer dans une jauge chiffrée serait de la sur-thématisation.
 */
export function SkillsSection({ skills }: { skills: Content["skills"] }) {
  return (
    <div className="space-y-14">
      {skills.groups.map((group) => (
        <div key={group.id}>
          <Reveal>
            <div className="flex items-center gap-3">
              <h3 className="label-instrument !text-ink">{group.domain}</h3>
              <span aria-hidden="true" className="h-px flex-1 bg-line" />
            </div>
          </Reveal>

          <ul className="mt-8 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
            {group.skills.map((skill, i) => (
              <li key={skill.name}>
                <Gauge
                  label={skill.name}
                  value={skill.level}
                  accent={group.accent}
                  note={skill.note}
                  delay={i * 110}
                />
              </li>
            ))}
          </ul>
        </div>
      ))}

      <Reveal>
        <p className="font-mono text-[11px] text-muted">{skills.disclaimer}</p>
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
