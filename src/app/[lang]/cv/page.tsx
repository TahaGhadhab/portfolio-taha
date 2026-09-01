import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getContent, isLocale, otherLocale } from "@/content";
import { resolveCv } from "@/lib/cv";
import { Footer } from "@/components/Footer";
import { PrintButton } from "@/components/PrintButton";
import { TopBar } from "@/components/TopBar";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/cv">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const c = getContent(lang);
  return {
    title: c.classic.title,
    description: c.meta.description,
    alternates: { canonical: `/${lang}/cv`, languages: { fr: "/fr/cv", en: "/en/cv" } },
  };
}

/**
 * Vue classique — le mode que choisira un recruteur pressé sur téléphone.
 *
 * Même palette et même police de corps que le cockpit, mais aucun habillage :
 * pas de convoyeur, pas de cadran, pas d'animation. Sert aussi de source à
 * l'export PDF via l'impression navigateur (feuille `@media print`).
 */
export default async function ClassicCvPage({ params }: PageProps<"/[lang]/cv">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const c = getContent(lang);
  const cv = resolveCv(lang);
  const s = c.classic.sections;

  return (
    <>
      <TopBar
        lang={lang}
        other={otherLocale(lang)}
        nav={c.nav}
        cv={cv}
        onClassicPage
        classicLabel={c.nav.classicView}
      />

      <main id="contenu" className="flex-1 px-4 pb-16 pt-24 sm:px-6">
        <article className="mx-auto w-full max-w-3xl">
          {/* --- En-tête --- */}
          <header className="border-b border-line pb-7">
            <h1 className="font-[family-name:var(--font-space-grotesk)] text-4xl font-bold tracking-tight text-ink sm:text-5xl">
              {c.hero.name}
            </h1>
            <p className="mt-2 text-lg text-cyan">{c.hero.role}</p>

            <ul className="mt-5 flex flex-col gap-1.5 font-mono text-sm text-muted sm:flex-row sm:flex-wrap sm:gap-x-5">
              <li>
                <a href={`mailto:${c.contact.email}`} className="hover:text-cyan">
                  {c.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${c.contact.phone.replace(/\s/g, "")}`}
                  className="hover:text-cyan"
                >
                  {c.contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={c.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan"
                >
                  {c.contact.linkedinLabel}
                </a>
              </li>
            </ul>

            <div className="no-print mt-7 flex flex-wrap items-center gap-3">
              <PrintButton label={c.classic.printLabel} />
              {cv.isPdf ? (
                <a
                  href={cv.href}
                  download={cv.download}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="push-button px-5 py-3"
                >
                  {c.nav.downloadCv}
                </a>
              ) : null}
            </div>
          </header>

          {/* --- Profil --- */}
          <CvSection title={s.profile}>
            <p className="text-base leading-relaxed text-ink">{c.hero.signature}</p>
            <p className="mt-3 leading-relaxed text-muted">{c.hero.tagline}</p>
          </CvSection>

          {/* --- Formation --- */}
          <CvSection title={s.education}>
            <ul className="space-y-6">
              {c.education.items.map((item) => (
                <li key={`${item.school}-${item.period}`}>
                  <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                    <h3 className="font-semibold text-ink">{item.degree}</h3>
                    <p className="shrink-0 font-mono text-xs text-muted">{item.period}</p>
                  </div>
                  <p className="mt-1 text-sm text-cyan">
                    {item.school}
                    {item.location ? (
                      <span className="text-muted"> — {item.location}</span>
                    ) : null}
                  </p>
                  {item.detail ? (
                    <p className="mt-2 text-sm leading-relaxed text-muted">{item.detail}</p>
                  ) : null}
                </li>
              ))}
            </ul>
          </CvSection>

          {/* --- Expérience --- */}
          <CvSection title={s.experience}>
            <ul className="space-y-7">
              {c.experience.items.map((item) => (
                <li key={item.id}>
                  <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                    <h3 className="font-semibold text-ink">
                      {item.role} — {item.company}
                    </h3>
                    <p className="shrink-0 font-mono text-xs text-muted">{item.period}</p>
                  </div>
                  <p className="mt-1 text-sm text-muted">
                    {item.fullName}
                    <span> — {item.location}</span>
                  </p>
                  <ul className="mt-3 space-y-1.5">
                    {item.missions.map((mission) => (
                      <li
                        key={mission}
                        className="flex gap-3 text-sm leading-relaxed text-muted"
                      >
                        <span aria-hidden="true" className="mt-2 size-1 shrink-0 bg-muted" />
                        <span>{mission}</span>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </CvSection>

          {/* --- Projets --- */}
          <CvSection title={s.projects}>
            <ul className="space-y-7">
              {c.projects.items.map((project) => (
                <li key={project.id}>
                  <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                    <h3 className="font-semibold text-ink">
                      {project.name} — <span className="font-normal">{project.tagline}</span>
                    </h3>
                    <p className="shrink-0 font-mono text-xs text-muted">{project.period}</p>
                  </div>
                  <ul className="mt-3 space-y-1.5">
                    {project.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-3 text-sm leading-relaxed text-muted"
                      >
                        <span aria-hidden="true" className="mt-2 size-1 shrink-0 bg-muted" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-2 font-mono text-xs text-muted">
                    {project.stack.join(" · ")}
                  </p>
                </li>
              ))}
            </ul>
          </CvSection>

          {/* --- Compétences --- */}
          <CvSection title={s.skills}>
            <div className="space-y-5">
              {c.skills.groups.map((group) => (
                <div key={group.id}>
                  <h3 className="font-semibold text-ink">{group.domain}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {group.skills
                      .map((skill) => (skill.note ? `${skill.name} (${skill.note})` : skill.name))
                      .join(" · ")}
                  </p>
                </div>
              ))}
              <div>
                <h3 className="font-semibold text-ink">{c.skills.soft.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {c.skills.soft.items.join(" · ")}
                </p>
              </div>
            </div>
          </CvSection>

          {/* --- Vie associative --- */}
          <CvSection title={s.associative}>
            <ul className="space-y-5">
              {c.associative.items.map((role) => (
                <li key={`${role.title}-${role.period}`}>
                  <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                    <h3 className="font-semibold text-ink">
                      {role.title} — {role.org}
                    </h3>
                    <p className="shrink-0 font-mono text-xs text-muted">{role.period}</p>
                  </div>
                  <ul className="mt-2 space-y-1.5">
                    {role.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-3 text-sm leading-relaxed text-muted"
                      >
                        <span aria-hidden="true" className="mt-2 size-1 shrink-0 bg-muted" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </CvSection>

          {/* --- Langues --- */}
          <CvSection title={s.languages}>
            <p className="text-sm leading-relaxed text-muted">
              {c.skills.languages.items
                .map((item) => `${item.name} : ${item.level.toLowerCase()}`)
                .join(" · ")}
            </p>
          </CvSection>

          {/* --- Centres d'intérêt --- */}
          <CvSection title={s.interests}>
            <p className="text-sm leading-relaxed text-muted">{c.interests.items.join(" · ")}</p>
          </CvSection>
        </article>
      </main>

      <Footer footer={c.footer} />
    </>
  );
}

function CvSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10 break-inside-avoid">
      <h2 className="label-instrument !text-amber border-b border-line pb-2">{title}</h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}
