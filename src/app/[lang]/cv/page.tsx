import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getContent, isLocale, otherLocale } from "@/content";
import { resolveCv } from "@/lib/cv";
import { Optics } from "@/components/Optics";
import { PrintButton } from "@/components/PrintButton";
import { SiteFooter } from "@/components/Sections";
import { TopNav } from "@/components/TopNav";

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
 * Même palette et même typographie que le vol, mais aucun habillage : ni aile,
 * ni rail, ni bande. Sert aussi de source à l'export PDF via l'impression
 * navigateur, qui bascule la feuille en noir sur blanc.
 */
export default async function ClassicCvPage({ params }: PageProps<"/[lang]/cv">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const c = getContent(lang);
  const cv = resolveCv(lang);
  const s = c.classic.sections;

  return (
    <>
      <Optics />

      <div className="wrap">
        <TopNav
          lang={lang}
          other={otherLocale(lang)}
          nav={c.nav}
          name={c.hero.name}
          cv={cv}
          onClassicPage
          classicLabel={c.nav.classicView}
          siteLabel={c.nav.siteView}
        />

        <main id="contenu" className="shell cv-page">
          <article className="cv-article">
            <header className="cv-head">
              <h1>{c.hero.name}</h1>
              <p className="role">{c.hero.role}</p>

              <ul className="cv-contact mono">
                <li>
                  <a href={`mailto:${c.contact.email}`}>{c.contact.email}</a>
                </li>
                <li>
                  <a href={`tel:${c.contact.phone.replace(/\s/g, "")}`}>{c.contact.phone}</a>
                </li>
                <li>
                  <a href={c.contact.linkedin} target="_blank" rel="noopener noreferrer">
                    {c.contact.linkedinLabel}
                  </a>
                </li>
              </ul>

              <div className="hero-actions no-print" style={{ justifyContent: "flex-start" }}>
                <PrintButton label={c.classic.printLabel} />
                {cv.isPdf ? (
                  <a
                    className="btn btn-primary"
                    href={cv.href}
                    download={cv.download}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {c.nav.downloadCv}
                  </a>
                ) : null}
              </div>
            </header>

            <CvSection title={s.profile}>
              <div className="cv-entry">
                <p style={{ color: "var(--snow)" }}>{c.hero.signature}</p>
                <p style={{ marginTop: "var(--s-3)" }}>{c.hero.tagline}</p>
              </div>
            </CvSection>

            <CvSection title={s.education}>
              {c.education.items.map((item) => (
                <div className="cv-entry" key={`${item.school}-${item.period}`}>
                  <div className="cv-row">
                    <h3>{item.degree}</h3>
                    <span className="mono">{item.period}</span>
                  </div>
                  <p className="sub">
                    {item.school}
                    {item.location ? ` · ${item.location}` : ""}
                  </p>
                  {item.detail ? (
                    <p style={{ marginTop: "var(--s-2)" }}>{item.detail}</p>
                  ) : null}
                </div>
              ))}
            </CvSection>

            <CvSection title={s.experience}>
              {c.experience.items.map((item) => (
                <div className="cv-entry" key={item.id}>
                  <div className="cv-row">
                    <h3>
                      {item.role} · {item.company}
                    </h3>
                    <span className="mono">{item.period}</span>
                  </div>
                  <p className="sub">
                    {item.fullName} · {item.location}
                  </p>
                  <ul className="bullets">
                    {item.missions.map((mission) => (
                      <li key={mission}>{mission}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </CvSection>

            <CvSection title={s.projects}>
              {c.projects.items.map((project) => (
                <div className="cv-entry" key={project.id}>
                  <div className="cv-row">
                    <h3>{project.name}</h3>
                    <span className="mono">{project.period}</span>
                  </div>
                  <p className="sub">{project.tagline}</p>
                  <ul className="bullets">
                    {project.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                  <p className="sub" style={{ marginTop: "var(--s-3)" }}>
                    {project.stack.join(" · ")}
                  </p>
                </div>
              ))}
            </CvSection>

            <CvSection title={s.skills}>
              {c.skills.groups.map((group) => (
                <div className="cv-entry" key={group.id}>
                  <h3>{group.domain}</h3>
                  <p style={{ marginTop: "var(--s-2)" }}>
                    {group.skills
                      .map((skill) => (skill.note ? `${skill.name} (${skill.note})` : skill.name))
                      .join(" · ")}
                  </p>
                </div>
              ))}
              <div className="cv-entry">
                <h3>{c.skills.soft.title}</h3>
                <p style={{ marginTop: "var(--s-2)" }}>{c.skills.soft.items.join(" · ")}</p>
              </div>
            </CvSection>

            <CvSection title={s.associative}>
              {c.associative.items.map((role) => (
                <div className="cv-entry" key={`${role.title}-${role.period}`}>
                  <div className="cv-row">
                    <h3>
                      {role.title} · {role.org}
                    </h3>
                    <span className="mono">{role.period}</span>
                  </div>
                  <ul className="bullets">
                    {role.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </CvSection>

            <CvSection title={s.languages}>
              <div className="cv-entry">
                <p>
                  {c.skills.languages.items
                    .map((item) => `${item.name} : ${item.level.toLowerCase()}`)
                    .join(" · ")}
                </p>
              </div>
            </CvSection>

            <CvSection title={s.interests}>
              <div className="cv-entry">
                <p>{c.interests.items.join(" · ")}</p>
              </div>
            </CvSection>
          </article>
        </main>

        <SiteFooter footer={c.footer} wordmark={c.hero.wordmark} />
      </div>
    </>
  );
}

function CvSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="cv-section">
      <h2>{title}</h2>
      <div className="cv-body">{children}</div>
    </section>
  );
}
