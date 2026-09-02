import type { Content } from "@/content";
import type { CvTarget } from "@/lib/cv";
import { HeroInstrument } from "./HeroInstrument";
import { Reveal } from "./Reveal";

interface HeroProps {
  hero: Content["hero"];
  cv: CvTarget;
  cvLabel: string;
}

/**
 * Landing : le nom en readout HUD, la phrase signature, le compteur d'ouverture
 * et l'accès CV. Aucun de ces éléments n'attend une animation pour être lisible.
 *
 * L'instrument occupe la seconde colonne à partir de `lg`. En dessous, il
 * passe sous le compteur : il ne doit jamais repousser le bouton CV hors de
 * l'écran sur un téléphone.
 */
export function Hero({ hero, cv, cvLabel }: HeroProps) {
  return (
    <section className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden px-4 pb-16 pt-24 sm:px-6">
      {/* Halo ambre très diffus, ancré en haut à gauche comme un éclairage de poste */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 -top-40 size-[34rem] rounded-full opacity-[0.07] blur-3xl"
        style={{ background: "radial-gradient(circle, var(--color-amber), transparent 70%)" }}
      />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
        <div>
          <Reveal>
            <p className="label-instrument flex items-center gap-2">
              <span aria-hidden="true" className="inline-block h-px w-8 bg-line" />
              {hero.eyebrow}
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-5 font-[family-name:var(--font-space-grotesk)] text-[clamp(2.5rem,9vw,5rem)] font-bold leading-[0.95] tracking-tight text-ink">
              {hero.name}
            </h1>
          </Reveal>

          <Reveal delay={140}>
            <p className="mt-4 font-mono text-sm uppercase tracking-[0.14em] text-cyan sm:text-base">
              {hero.role}
            </p>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              {hero.tagline}
            </p>
          </Reveal>

          {/* Phrase signature — conservée telle quelle, mise en avant comme une baseline */}
          <Reveal delay={260}>
            <blockquote className="mt-8 max-w-2xl border-l-2 border-amber pl-4 sm:pl-5">
              <p className="text-balance text-lg font-medium leading-snug text-ink sm:text-xl">
                {hero.signature}
              </p>
            </blockquote>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href={cv.href}
                {...(cv.isPdf
                  ? { download: cv.download, target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="push-button push-button--primary px-5 py-3"
              >
                {hero.ctaPrimary}
              </a>
              <a href="#experiences" className="push-button px-5 py-3">
                {hero.ctaSecondary}
              </a>
            </div>
            <p className="label-instrument mt-3 normal-case tracking-normal">{cvLabel}</p>
          </Reveal>
        </div>

        {/* Instrument — plein cadre sur desktop, contenu sur mobile */}
        <Reveal delay={220} className="order-last mx-auto w-full max-w-[19rem] lg:max-w-none">
          <HeroInstrument hero={hero} />
        </Reveal>
      </div>

      {/* Compteur d'ouverture — chiffres en mono, effet instrument de mesure */}
      <div className="relative mx-auto w-full max-w-6xl">
        <Reveal delay={400}>
          <dl className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-[3px] border border-line bg-line sm:grid-cols-3">
            {hero.stats.map((stat) => (
              <div key={stat.label} className="bg-panel px-5 py-5">
                <dd className="font-mono text-4xl font-bold leading-none text-cyan">
                  {stat.value}
                  {stat.unit}
                </dd>
                <dt className="label-instrument mt-2.5">{stat.label}</dt>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
