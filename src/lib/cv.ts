import fs from "node:fs";
import path from "node:path";
import type { Locale } from "@/content";

/**
 * Emplacement du CV PDF officiel, par langue.
 * Depose le fichier dans `public/cv/` et il prend automatiquement la priorite
 * sur la page imprimable — aucun code a changer.
 */
const OFFICIAL_PDF: Record<Locale, string> = {
  fr: "CV_Taha_Ghadhab_FR.pdf",
  en: "CV_Taha_Ghadhab_EN.pdf",
};

export interface CvTarget {
  href: string;
  /** `true` quand un vrai PDF est servi, `false` pour la page imprimable. */
  isPdf: boolean;
  download?: string;
}

/**
 * Resout la cible du bouton "CV" : le PDF officiel s'il existe, sinon la page
 * imprimable `/[lang]/cv`. Evalue au build (composant serveur uniquement).
 */
export function resolveCv(locale: Locale): CvTarget {
  const file = OFFICIAL_PDF[locale];
  const abs = path.join(process.cwd(), "public", "cv", file);

  if (fs.existsSync(abs)) {
    return { href: `/cv/${file}`, isPdf: true, download: file };
  }
  return { href: `/${locale}/cv`, isPdf: false };
}
