import type { Content } from "@/content";
import { Reveal } from "./Reveal";

/** Chronologie sobre : la métaphore cockpit ne s'applique pas ici. */
export function EducationTimeline({ items }: { items: Content["education"]["items"] }) {
  return (
    <ol className="relative">
      <div aria-hidden="true" className="absolute bottom-2 left-[7px] top-2 w-px bg-line" />

      {items.map((item, i) => (
        <li key={`${item.school}-${item.period}`} className="relative pb-10 pl-10 last:pb-0">
          <Reveal delay={i * 80}>
            <span
              aria-hidden="true"
              className={`absolute left-0 top-1 size-[15px] rounded-full border-2 bg-base ${
                item.current ? "border-amber" : "border-line"
              }`}
              style={item.current ? { animation: "pulse-lamp 2.8s ease-in-out infinite" } : undefined}
            />

            <p className="label-instrument">{item.period}</p>
            <h3 className="mt-2 font-[family-name:var(--font-space-grotesk)] text-lg font-bold leading-snug text-ink">
              {item.degree}
            </h3>
            <p className="mt-1 text-sm text-cyan">{item.school}</p>
            {item.location ? (
              <p className="mt-1 font-mono text-xs text-muted">{item.location}</p>
            ) : null}
            {item.detail ? (
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">{item.detail}</p>
            ) : null}
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
