import type { Content, Deployment } from "@/content";
import type { CvTarget } from "@/lib/cv";
import { PositioningFigure } from "./Figures";
import { SplitWords } from "./SplitWords";

/** Rang d'un élément dans une arrivée, à poser en style en ligne. */
const rank = (i: number) => ({ "--i": i }) as React.CSSProperties;

/**
 * Une bande du document. Toutes les sections en héritent : même respiration,
 * même filet de séparation, un fond légèrement soulevé une fois sur deux pour
 * que le rythme se lise sans qu'aucune couleur ne soit ajoutée.
 */
export function Band({
  id,
  quiet = false,
  children,
}: {
  id: string;
  quiet?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section className={`band${quiet ? " band-quiet" : ""}`} id={id}>
      <div className="shell">{children}</div>
    </section>
  );
}

/**
 * Chapeau de section : numéro de station, surtitre en mono, filet, titre,
 * intention.
 *
 * Le numéro et le filet ne sont pas décoratifs — ils datent le document. Un
 * chapeau qui porte « 03 » et un trait tiré jusqu'au bord de la colonne se lit
 * comme une planche numérotée ; le même chapeau sans eux se lit comme un
 * article. Le titre se lève mot à mot, l'intention suit d'un temps.
 */
export function Head({
  no,
  eyebrow,
  title,
  intro,
}: {
  /** Rang de la section dans le document, déjà formaté. */
  no?: string;
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="head commit">
      <p className="mono eyebrow">
        {no ? <span className="no">{no}</span> : null}
        <span>{eyebrow.toUpperCase()}</span>
        <span className="rule" aria-hidden="true" />
      </p>
      <SplitWords as="h2" text={title} from={1} />
      {intro ? <p className="head-intro">{intro}</p> : null}
    </div>
  );
}

/* ── Méthode ─────────────────────────────────────────────── */

export function MethodRail({ steps }: { steps: Content["method"]["steps"] }) {
  return (
    <ol className="rail-list commit" data-stagger>
      {steps.map((s, i) => (
        <li className="step" key={s.step} style={rank(i)}>
          <div className="step-no">{s.step}</div>
          <div>
            <h3>{s.title}</h3>
            <p>{s.body}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

/**
 * Le dépliage.
 *
 * `<details>` natif : il fonctionne sans JavaScript, se navigue au clavier et
 * s'ouvre à l'impression. Un seul libellé bascule entre les deux états, sans
 * rien faire tourner — le plus se rétracte en moins.
 */
function Fold({
  openLabel,
  closeLabel,
  children,
}: {
  openLabel: string;
  closeLabel: string;
  children: React.ReactNode;
}) {
  return (
    <details className="fold">
      <summary className="fold-toggle">
        <span className="fold-sign" aria-hidden="true" />
        <span className="fold-closed">{openLabel.toUpperCase()}</span>
        <span className="fold-open">{closeLabel.toUpperCase()}</span>
      </summary>
      <div className="fold-body">{children}</div>
    </details>
  );
}

/* ── Expériences ─────────────────────────────────────────── */

/**
 * Une expérience se lit comme une fiche de poste : à gauche l'identité, à
 * droite ce qui est entré et ce qui est sorti. Les deux seules couleurs
 * fonctionnelles du document vivent ici — le problème et le livrable.
 *
 * Le détail des missions et l'outillage restent repliés : une fiche doit
 * pouvoir être lue en dix secondes, et creusée seulement si elle intéresse.
 */
export function WorkSheets({ experience }: { experience: Content["experience"] }) {
  return (
    <>
      {experience.items.map((item, i) => (
        <article className="sheet commit" data-stagger key={item.id}>
          <div className="sheet-aside">
            <p className="mono">{String(i + 1).padStart(2, "0")}</p>
            <h3>{item.role}</h3>
            <p className="mono">{item.company}</p>
            <p className="mono">
              {item.period} — {item.location}
            </p>
            {!item.hasDeliverable ? (
              <div className="tags">
                <span className="tag">{experience.immersionLabel.toUpperCase()}</span>
              </div>
            ) : null}
          </div>

          <div>
            <div className="io">
              <div className="io-row io-in">
                <span className="io-dot" aria-hidden="true" />
                <div>
                  <span className="io-label">{experience.inputLabel.toUpperCase()}</span>
                  <p>{item.input}</p>
                </div>
              </div>
              <div className="io-row io-out">
                <span className="io-dot" aria-hidden="true" />
                <div>
                  <span className="io-label">{experience.outputLabel.toUpperCase()}</span>
                  <p>{item.output}</p>
                </div>
              </div>
            </div>

            <Fold openLabel={experience.detailsLabel} closeLabel={experience.hideLabel}>
              <div>
                <span className="fold-label">{experience.missionsLabel.toUpperCase()}</span>
                <ul className="bullets" style={{ marginTop: 0 }}>
                  {item.missions.map((m) => (
                    <li key={m}>{m}</li>
                  ))}
                </ul>
              </div>
              <div>
                <span className="fold-label">{experience.toolsLabel.toUpperCase()}</span>
                <div className="tags" style={{ marginTop: 0 }}>
                  {item.tools.map((t) => (
                    <span className="tag" key={t}>
                      {t.toUpperCase()}
                    </span>
                  ))}
                </div>
              </div>
            </Fold>
          </div>
        </article>
      ))}
    </>
  );
}

/* ── Projets ─────────────────────────────────────────────── */

export function ProjectSheets({ projects }: { projects: Content["projects"] }) {
  return (
    <>
      {projects.items.map((p, i) => (
        <article className="sheet commit" data-stagger key={p.id}>
          <div className="sheet-aside">
            <p className="mono">{String(i + 1).padStart(2, "0")}</p>
            <h3>{p.name}</h3>
            <p className="mono">
              {p.period} — {p.status}
            </p>
            {p.metric ? (
              <div className="metric">
                <span className="v">{p.metric.value}</span>
                <span className="k">{p.metric.label.toUpperCase()}</span>
              </div>
            ) : null}
            {p.url ? (
              <a
                className="linkout"
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {projects.siteLabel.toUpperCase()} ↗
              </a>
            ) : null}
          </div>

          <div>
            <p className="lede">{p.tagline}</p>
            <p style={{ marginTop: "var(--s-4)" }}>{p.summary}</p>

            <Fold openLabel={projects.detailsLabel} closeLabel={projects.hideLabel}>
              <div>
                <ul className="bullets" style={{ marginTop: 0 }}>
                  {p.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </div>

              {p.steps ? (
                <div>
                  <span className="fold-label">{projects.stepsLabel.toUpperCase()}</span>
                  <ol className="rail-list">
                    {p.steps.map((s) => (
                      <li className="step" key={s.step}>
                        <div className="step-no">{s.step}</div>
                        <div>
                          <h3>{s.title}</h3>
                          <p>{s.body}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              ) : null}

              <div>
                <span className="fold-label">{projects.stackLabel.toUpperCase()}</span>
                {p.stackDetail ? (
                  <div className="stack-groups">
                    {p.stackDetail.map((g) => (
                      <div className="stack-row" key={g.label}>
                        <span className="mono">{g.label.toUpperCase()}</span>
                        <div className="tags">
                          {g.items.map((t) => (
                            <span className="tag" key={t}>
                              {t.toUpperCase()}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="tags" style={{ marginTop: 0 }}>
                    {p.stack.map((t) => (
                      <span className="tag" key={t}>
                        {t.toUpperCase()}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Fold>
          </div>
        </article>
      ))}
    </>
  );
}

/* ── Compétences ─────────────────────────────────────────── */

/**
 * Le CV en nomenclature.
 *
 * Une compétence n'est pas notée en pourcentage — elle est rattachée aux
 * terrains où elle a servi. C'est la seule affirmation vérifiable qu'on puisse
 * faire sur une compétence.
 */
export function CapabilityGroups({
  skills,
  deployments,
}: {
  skills: Content["skills"];
  deployments: Deployment[];
}) {
  const shortOf = new Map(deployments.map((d) => [d.id, d.short]));

  return (
    <div className="groups commit" data-stagger>
      {skills.groups.map((group, i) => (
        <div className="group" key={group.id} style={rank(i)}>
          <h3>{group.domain.toUpperCase()}</h3>
          <ul>
            {group.skills.map((skill) => (
              <li key={skill.name}>
                {skill.name}
                {skill.usedIn.length ? (
                  <span className="note">
                    {skill.usedIn.map((id) => shortOf.get(id) ?? id).join(" · ")}
                  </span>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div className="group" style={rank(skills.groups.length)}>
        <h3>{skills.soft.title.toUpperCase()}</h3>
        <ul>
          {skills.soft.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="group" style={rank(skills.groups.length + 1)}>
        <h3>{skills.languages.title.toUpperCase()}</h3>
        <ul>
          {skills.languages.items.map((item) => (
            <li key={item.name}>
              {item.name}
              <span className="note">{item.level}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ── Parcours ────────────────────────────────────────────── */

export function EducationRail({ items }: { items: Content["education"]["items"] }) {
  return (
    <ol className="rail-list commit" data-stagger>
      {items.map((item, i) => (
        <li className="step" key={`${item.school}-${item.period}`} style={rank(i)}>
          <div className="step-no">{String(items.length - i).padStart(2, "0")}</div>
          <div>
            <div className="step-meta">
              <span className={`mono${item.current ? " step-live" : ""}`}>{item.period}</span>
              {item.location ? <span className="mono">{item.location}</span> : null}
            </div>
            <h3>{item.degree}</h3>
            <p>
              {item.school}
              {item.detail ? ` — ${item.detail}` : ""}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}

/* ── Origine ─────────────────────────────────────────────── */

export function OriginSection({
  about,
  no,
  pull,
  eyebrow,
}: {
  about: Content["about"];
  no?: string;
  pull: string;
  eyebrow: string;
}) {
  return (
    <>
      <div className="about commit">
        <div className="head" style={{ marginBottom: 0 }}>
          <p className="mono eyebrow">
            {no ? <span className="no">{no}</span> : null}
            <span>{eyebrow.toUpperCase()}</span>
            <span className="rule" aria-hidden="true" />
          </p>
          <SplitWords as="h2" text={about.title} from={1} />
        </div>
        <div>
          <p className="lede">{about.lead}</p>
          <blockquote className="pull">{pull}</blockquote>
          {about.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>

      {/* Rien dans une rangée de trois blocs ne dit que les casquettes se
          recouvrent. La figure le dit, et se lit à côté d'eux. */}
      <div className="plate-split">
        <PositioningFigure
          figure={about.positioning.figure}
          pillars={about.positioning.pillars}
        />

        <div className="groups commit" data-stagger>
          {about.positioning.pillars.map((pillar, i) => (
            <div className="group" key={pillar.title} style={rank(i)}>
              <h3>{pillar.title.toUpperCase()}</h3>
              <p style={{ color: "var(--snow-2)", fontSize: "var(--t--1)" }}>
                {pillar.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

/* ── Engagement ──────────────────────────────────────────── */

export function EngagementSection({
  associative,
  interests,
}: {
  associative: Content["associative"];
  interests: Content["interests"];
}) {
  return (
    <>
      <ol className="rail-list commit" data-stagger>
        {associative.items.map((role, i) => (
          <li className="step" key={`${role.title}-${role.period}`} style={rank(i)}>
            <div className="step-no">{String(i + 1).padStart(2, "0")}</div>
            <div>
              <div className="step-meta">
                <span className="mono">{role.period}</span>
                <span className="mono">{role.org}</span>
              </div>
              <h3>{role.title}</h3>
              <ul className="bullets">
                {role.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>

      <div className="commit" style={{ marginTop: "var(--s-7)" }}>
        <p className="mono">{interests.title.toUpperCase()}</p>
        <div className="tags">
          {interests.items.map((item) => (
            <span className="tag" key={item}>
              {item.toUpperCase()}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}

/* ── Clôture ─────────────────────────────────────────────── */

export function ContactClose({
  contact,
  cv,
  cvLabel,
}: {
  contact: Content["contact"];
  cv: CvTarget;
  cvLabel: string;
}) {
  return (
    <div className="close commit" data-stagger>
      <div className="close-lead">
        <p className="mono eyebrow">
          <span>{contact.title.toUpperCase()}</span>
          <span className="rule" aria-hidden="true" />
        </p>
        <SplitWords as="h2" text={contact.intro} from={1} className="close-title" />
      </div>

      {/* Le moyen de joindre tient dans sa propre colonne : la phrase
          d'ouverture et les coordonnées ne se lisent pas au même moment, et
          les empiler laissait la moitié droite de l'écran vide. */}
      <div className="close-side">
        <a className="mailto" href={`mailto:${contact.email}`}>
          {contact.email}
        </a>

        <div className="contact-rows">
          <div className="contact-row">
            <span className="mono">{contact.phoneLabel.toUpperCase()}</span>
            <a className="val" href={`tel:${contact.phone.replace(/\s/g, "")}`}>
              {contact.phone}
            </a>
          </div>
          <div className="contact-row">
            <span className="mono">LINKEDIN</span>
            <a
              className="val"
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              {contact.linkedinLabel}
            </a>
          </div>
          <div className="contact-row">
            <span className="mono">{contact.locationLabel.toUpperCase()}</span>
            <span className="val">{contact.location}</span>
          </div>
        </div>

        <div className="close-cta">
          <a
            className="btn btn-primary"
            href={cv.href}
            {...(cv.isPdf
              ? { download: cv.download, target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            {cvLabel}
          </a>
        </div>
      </div>
    </div>
  );
}

/* ── Pied ────────────────────────────────────────────────── */

export function SiteFooter({
  footer,
  wordmark,
}: {
  footer: Content["footer"];
  wordmark: string;
}) {
  return (
    <footer>
      <div className="shell">
        <div className="foot">
          <p className="mono">{footer.builtWith}</p>
          <p className="mono">{wordmark}</p>
        </div>
      </div>
    </footer>
  );
}
