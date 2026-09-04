import { notFound } from "next/navigation";
import { getContent, getDeployments, isLocale, otherLocale } from "@/content";
import { resolveCv } from "@/lib/cv";
import { Flight } from "@/components/Flight";
import { Optics } from "@/components/Optics";
import { PageMotion } from "@/components/PageMotion";
import { PrincipleSection } from "@/components/PrincipleSection";
import { SectionIndex } from "@/components/SectionIndex";
import { TopNav } from "@/components/TopNav";
import {
  Band,
  CapabilityGroups,
  ContactClose,
  EducationRail,
  EngagementSection,
  Head,
  MethodRail,
  OriginSection,
  ProjectSheets,
  SiteFooter,
  WorkSheets,
} from "@/components/Sections";

/**
 * Le vol.
 *
 * L'arc suit le comportement plutôt que le calendrier : d'abord l'immobilité
 * (le vol, le principe), puis la manière (la méthode), puis les preuves (les
 * terrains, les projets, la nomenclature), et seulement ensuite d'où cela
 * vient. Tout est rendu côté serveur ; seules l'aile, le rail de sections et
 * l'observateur de bandes sont des composants client.
 */
export default async function FlightPage({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const c = getContent(lang);
  const cv = resolveCv(lang);
  const deployments = getDeployments(c);
  const label = (id: string) => c.nav.sections.find((s) => s.id === id)?.label ?? id;
  /* Le numéro de station d'une section : son rang dans le rail latéral. Les
     deux repères portent le même chiffre, sinon le document se contredit. */
  const no = (id: string) => {
    const i = c.nav.sections.findIndex((s) => s.id === id);
    return i < 0 ? undefined : String(i + 1).padStart(2, "0");
  };

  return (
    <>
      <Optics />
      <SectionIndex sections={c.nav.sections} label={c.nav.sectionsNavLabel} />

      <div className="wrap">
        <TopNav
          lang={lang}
          other={otherLocale(lang)}
          nav={c.nav}
          name={c.hero.name}
          cv={cv}
          classicLabel={c.nav.classicView}
          siteLabel={c.nav.siteView}
        />

        <Flight
          hero={c.hero}
          cv={cv}
          cvLabel={c.nav.downloadCv}
          primaryHref="#projets"
          secondaryHref="#methode"
        />

        <main id="contenu">
          <Band id="principe" quiet>
            <PrincipleSection principle={c.principle} />
          </Band>

          <Band id="methode">
            <Head
              no={no("methode")}
              eyebrow={label("methode")}
              title={c.method.title}
              intro={c.method.intro}
            />
            <MethodRail steps={c.method.steps} />
          </Band>

          <Band id="experiences" quiet>
            <Head
              no={no("experiences")}
              eyebrow={label("experiences")}
              title={c.experience.title}
              intro={c.experience.intro}
            />
            <WorkSheets experience={c.experience} />
          </Band>

          <Band id="projets">
            <Head
              no={no("projets")}
              eyebrow={label("projets")}
              title={c.projects.title}
              intro={c.projects.intro}
            />
            <ProjectSheets projects={c.projects} />
          </Band>

          <Band id="competences" quiet>
            <Head
              no={no("competences")}
              eyebrow={label("competences")}
              title={c.skills.title}
              intro={c.skills.intro}
            />
            <CapabilityGroups skills={c.skills} deployments={deployments} />
          </Band>

          <Band id="parcours">
            <Head
              no={no("parcours")}
              eyebrow={label("parcours")}
              title={c.education.title}
              intro={c.education.intro}
            />
            <EducationRail items={c.education.items} />
          </Band>

          <Band id="a-propos" quiet>
            <OriginSection
              about={c.about}
              no={no("a-propos")}
              pull={c.hero.signature}
              eyebrow={label("a-propos")}
            />
          </Band>

          <Band id="associatif">
            <Head
              no={no("associatif")}
              eyebrow={label("associatif")}
              title={c.associative.title}
              intro={c.associative.intro}
            />
            <EngagementSection associative={c.associative} interests={c.interests} />
          </Band>

          <Band id="contact" quiet>
            <ContactClose contact={c.contact} cv={cv} cvLabel={c.contact.cvLabel} />
          </Band>
        </main>

        <SiteFooter footer={c.footer} wordmark={c.hero.wordmark} />
      </div>

      <PageMotion />
    </>
  );
}
