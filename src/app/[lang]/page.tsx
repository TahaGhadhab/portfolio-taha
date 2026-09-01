import { notFound } from "next/navigation";
import { getContent, getDeployments, isLocale, otherLocale } from "@/content";
import { resolveCv } from "@/lib/cv";
import { AboutSection } from "@/components/AboutSection";
import { AssemblyLine } from "@/components/AssemblyLine";
import { AssociativeSection, InterestsRow } from "@/components/AssociativeSection";
import { Atmosphere } from "@/components/Atmosphere";
import { BootSequence } from "@/components/BootSequence";
import { ContactSection } from "@/components/ContactSection";
import { EasterEggLamp } from "@/components/EasterEggLamp";
import { EducationTimeline } from "@/components/EducationTimeline";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { MethodSteps } from "@/components/MethodSection";
import { ProjectWall } from "@/components/ProjectWall";
import { Section } from "@/components/Section";
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

  return (
    <>
      <BootSequence boot={c.boot} />

      <TopBar
        lang={lang}
        other={otherLocale(lang)}
        nav={c.nav}
        cv={cv}
        classicLabel={c.nav.classicView}
      />

      <main id="contenu" className="flex-1">
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
          className="bg-base-2"
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
          className="bg-base-2"
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
          className="bg-base-2"
        >
          <ContactSection contact={c.contact} cv={cv} />
        </Section>
      </main>

      <Footer footer={c.footer} />
      <EasterEggLamp egg={c.easterEgg} />
      <Atmosphere />
    </>
  );
}
