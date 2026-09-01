import { fr } from "./fr";
import { en } from "./en";
import { LOCALES, DEFAULT_LOCALE, type Locale, type Content } from "./types";

const dictionaries: Record<Locale, Content> = { fr, en };

/** Narrows an arbitrary route segment to a supported locale. */
export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

export function getContent(locale: Locale): Content {
  return dictionaries[locale];
}

/** The locale the language switch should point to. */
export function otherLocale(locale: Locale): Locale {
  return locale === "fr" ? "en" : "fr";
}

export const LOCALE_NAMES: Record<Locale, string> = {
  fr: "Francais",
  en: "English",
};

/** Un terrain d'application : une expérience ou un projet. */
export interface Deployment {
  id: string;
  short: string;
  full: string;
  kind: "experience" | "project";
}

/**
 * Colonnes de la matrice de compétences, dans l'ordre du récit :
 * les terrains d'entreprise d'abord, les projets ensuite.
 *
 * Vérifie au passage que chaque `usedIn` pointe sur un id réel. L'appel a lieu
 * pendant la génération statique : une référence morte casse le build au lieu
 * de produire silencieusement une ligne vide.
 */
export function getDeployments(content: Content): Deployment[] {
  const deployments: Deployment[] = [
    ...content.experience.items.map((item) => ({
      id: item.id,
      short: item.short,
      full: `${item.role} — ${item.company}`,
      kind: "experience" as const,
    })),
    ...content.projects.items.map((item) => ({
      id: item.id,
      short: item.short,
      full: item.name,
      kind: "project" as const,
    })),
  ];

  const known = new Set(deployments.map((d) => d.id));
  for (const group of content.skills.groups) {
    for (const skill of group.skills) {
      for (const id of skill.usedIn) {
        if (!known.has(id)) {
          throw new Error(
            `Compétence « ${skill.name} » : le terrain « ${id} » n'existe ni dans les expériences ni dans les projets.`,
          );
        }
      }
    }
  }

  return deployments;
}

export { LOCALES, DEFAULT_LOCALE };
export type { Locale, Content };
export type * from "./types";
