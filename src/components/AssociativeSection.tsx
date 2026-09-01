import type { Content } from "@/content";
import { Reveal } from "./Reveal";

export function AssociativeSection({ items }: { items: Content["associative"]["items"] }) {
  return (
    <ul className="grid grid-cols-1 gap-5 md:grid-cols-2">
      {items.map((role, i) => (
        <li key={`${role.title}-${role.period}`}>
          <Reveal delay={i * 90} className="h-full">
            <article className="panel h-full p-5 sm:p-6">
              <p className="label-instrument">{role.period}</p>
              <h3 className="mt-2 font-[family-name:var(--font-space-grotesk)] text-lg font-bold text-ink">
                {role.title}
              </h3>
              <p className="mt-1 text-sm text-cyan">{role.org}</p>
              <ul className="mt-4 space-y-2">
                {role.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted">
                    <span aria-hidden="true" className="mt-2 size-1 shrink-0 bg-muted" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </li>
      ))}
    </ul>
  );
}

export function InterestsRow({ interests }: { interests: Content["interests"] }) {
  return (
    <Reveal>
      <h3 className="label-instrument !text-ink">{interests.title}</h3>
      <ul className="mt-4 flex flex-wrap gap-2">
        {interests.items.map((item) => (
          <li
            key={item}
            className="rounded-[3px] border border-line px-3 py-1.5 text-sm text-muted"
          >
            {item}
          </li>
        ))}
      </ul>
    </Reveal>
  );
}
