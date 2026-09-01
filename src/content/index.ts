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

export { LOCALES, DEFAULT_LOCALE };
export type { Locale, Content };
export type * from "./types";
