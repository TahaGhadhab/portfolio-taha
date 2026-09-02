import { notFound } from "next/navigation";
import { getContent, getDeployments, isLocale, otherLocale } from "@/content";
import { resolveCv } from "@/lib/cv";
import { resolveCockpitPhoto } from "@/lib/cockpit";
import { AboutSection } from "@/components/AboutSection";
import { AssemblyLine } from "@/components/AssemblyLine";
import { AssociativeSection, InterestsRow } from "@/components/AssociativeSection";
import { Atmosphere } from "@/components/Atmosphere";
import { BootSequence } from "@/components/BootSequence";
import { CockpitEnvironment } from "@/components/CockpitEnvironment";
import { ContactSection } from "@/components/ContactSection";
import { EasterEggLamp } from "@/components/EasterEggLamp";
import { EducationTimeline } from "@/components/EducationTimeline";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { MethodSteps } from "@/components/MethodSection";
import { ProjectWall } from "@/components/ProjectWall";
import { Section } from "@/components/Section";
import { StatusHud } from "@/components/StatusHud";
import { SkillsSection } from "@/components/SkillsSection";
import { TopBar } from "@/components/TopBar";

/**
 * Vue cockpit.
 *
 * L'arc suit la trajectoire réelle : méthode → parcours → terrain (chaîne de
 * montage) → projets → instruments → vision. Tout est rendu côté serveur ;
 * seules les briques réellement interactives sont des composants client.
 */
export default async function CockpitPage({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const c = getContent(lang);
  const cv = resolveCv(lang);
  const deployments = getDeployments(c);
  const cockpitPhoto = resolveCockpitPhoto();

  // Sections suivies par le mini-HUD, dans l'ordre du document. Deux d'entre
  // elles ne figurent pas dans la navigation mais restent des postes observés.
  const hudSections = [
    { id: "methode", label: c.method.title },
    { id: "a-propos", label: c.about.title },
    { id: "parcours", label: c.education.title },
    { id: "experiences", label: c.experience.title },
    { id: "projets", label: c.projects.title },
    { id: "competences", label: c.skills.title },
    { id: "associatif", label: c.associative.title },
    { id: "contact", label: c.contact.title },
  ];

  return (
    <>
      <BootSequence boot={c.boot} />
      <CockpitEnvironment photo={cockpitPhoto} />

      <TopBar
        lang={lang}
        other={otherLocale(lang)}
        nav={c.nav}
        cv={cv}
        classicLabel={c.nav.classicView}
      />

      <main id="contenu" className="relative z-10 flex-1">
        <Hero hero={c.hero} cv={cv} cvLabel={c.contact.cvHint} />

        <Section id="methode" index="01" title={c.method.title} intro={c.method.intro}>
          <MethodSteps steps={c.method.steps} />
        </Section>

        <Section id="a-propos" index="02" title={c.about.title}>
          <AboutSection about={c.about} />
        </Section>

        <Section
          id="parcours"
          index="03"
          title={c.education.title}
          intro={c.education.intro}
        >
          <EducationTimeline items={c.education.items} />
        </Section>

        <Section
          id="experiences"
          index="04"
          title={c.experience.title}
          intro={c.experience.intro}
          className="bg-base-2/70"
        >
          <AssemblyLine experience={c.experience} />
        </Section>

        <Section id="projets" index="05" title={c.projects.title} intro={c.projects.intro}>
          <ProjectWall projects={c.projects} />
        </Section>

        <Section
          id="competences"
          index="06"
          title={c.skills.title}
          intro={c.skills.intro}
          className="bg-base-2/70"
        >
          <SkillsSection skills={c.skills} deployments={deployments} />
        </Section>

        <Section
          id="associatif"
          index="07"
          title={c.associative.title}
          intro={c.associative.intro}
        >
          <AssociativeSection items={c.associative.items} />
          <div className="mt-12">
            <InterestsRow interests={c.interests} />
          </div>
        </Section>

        <Section
          id="contact"
          index="08"
          title={c.contact.title}
          className="bg-base-2/70"
        >
          <ContactSection contact={c.contact} cv={cv} />
        </Section>
      </main>

      <div className="relative z-10">
        <Footer footer={c.footer} />
      </div>
      <StatusHud sections={hudSections} statusLabel={c.nav.statusLabel} />
      <EasterEggLamp egg={c.easterEgg} />
      <Atmosphere />
    </>
  );
}
