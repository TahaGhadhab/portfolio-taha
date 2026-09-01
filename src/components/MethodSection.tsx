import type { Content } from "@/content";
import { Reveal } from "./Reveal";

/** Le fil rouge en quatre temps : identifier, concevoir, implémenter, mesurer. */
export function MethodSteps({ steps }: { steps: Content["method"]["steps"] }) {
  return (
    <ol className="grid grid-cols-1 gap-px overflow-hidden rounded-[3px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, i) => (
        <li key={step.step} className="bg-panel">
          <Reveal delay={i * 80} className="block h-full p-5 sm:p-6">
            <div className="flex items-center gap-2.5">
              <span className="font-mono text-2xl font-bold leading-none text-amber">
                {step.step}
              </span>
              <span aria-hidden="true" className="h-px flex-1 bg-line" />
            </div>
            <h3 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-lg font-bold text-ink">
              {step.title}
            </h3>
            <p className="mt-2.5 text-sm leading-relaxed text-muted">{step.body}</p>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
