import type { Content } from "@/content";
import { Reveal } from "./Reveal";

/**
 * « À propos » reste sobre : pas de HUD, pas de convoyeur. La métaphore est
 * réservée aux sections où elle dit quelque chose.
 */
export function AboutSection({ about }: { about: Content["about"] }) {
  return (
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
      <div>
        <Reveal>
          <p className="text-balance text-xl leading-snug text-ink sm:text-2xl">{about.lead}</p>
        </Reveal>
        {about.body.map((paragraph, i) => (
          <Reveal key={paragraph.slice(0, 24)} delay={(i + 1) * 80}>
            <p className="mt-5 leading-relaxed text-muted">{paragraph}</p>
          </Reveal>
        ))}
      </div>

      <div>
        <Reveal>
          <h3 className="label-instrument !text-ink">{about.positioning.title}</h3>
        </Reveal>
        <ul className="mt-5 space-y-px overflow-hidden rounded-[3px] border border-line bg-line">
          {about.positioning.pillars.map((pillar, i) => (
            <li key={pillar.title} className="bg-panel">
              <Reveal delay={i * 80} className="block p-5">
                <h4 className="font-[family-name:var(--font-space-grotesk)] font-bold text-cyan">
                  {pillar.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-muted">{pillar.body}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
