/**
 * Modèle de contenu du portfolio.
 *
 * Une seule forme, deux traductions (`fr.ts`, `en.ts`). Toute section ajoutée
 * ici doit l'être dans les deux fichiers — TypeScript le fait respecter.
 */

export const LOCALES = ["fr", "en"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "fr";

/** Secteur d'une station de la chaîne de montage — pilote l'icône affichée. */
export type Sector = "aero" | "oil" | "finance";

/** Une station : entrée « problème » → sortie « livré ». */
export interface Experience {
  id: string;
  company: string;
  /** Libellé court, utilisé en en-tête de colonne dans la matrice. */
  short: string;
  fullName: string;
  role: string;
  sector: Sector;
  period: string;
  location: string;
  /** Entrée du poste : ce qui n'allait pas. Rendu en signal `fault`. */
  input: string;
  /** Sortie du poste : ce qui a été livré. Rendu en signal `ok`. */
  output: string;
  /** Détail des missions, puces courtes. */
  missions: string[];
  tools: string[];
  /**
   * `false` pour les postes d'immersion sans livrable outillé : la métaphore
   * chaîne de montage s'applique sélectivement, jamais de force.
   */
  hasDeliverable: boolean;
}

export interface Project {
  id: string;
  name: string;
  /** Libellé court, utilisé en en-tête de colonne dans la matrice. */
  short: string;
  tagline: string;
  period: string;
  status: string;
  summary: string;
  highlights: string[];
  stack: string[];
  /** Chiffre mis en avant sur le moniteur, en mono. */
  metric?: { value: string; label: string };
  /** Site en ligne, quand le projet est public. */
  url?: string;
  /** Illustration procédurale affichée sur le moniteur. */
  visual: "roster" | "layout" | "dashboard";
}

export interface Education {
  degree: string;
  school: string;
  period: string;
  location?: string;
  detail?: string;
  /** Cursus en cours — affiché avec un voyant actif. */
  current: boolean;
}

/**
 * Une compétence, décrite par ses usages réels plutôt que par une note.
 *
 * Un pourcentage auto-attribué n'apporte aucune information vérifiable : « 75 »
 * ne dit rien que « 70 » ne dirait. La preuve, elle, est vérifiable — d'où
 * `usedIn`, qui référence les expériences et projets où la compétence a servi.
 */
export interface Skill {
  name: string;
  note?: string;
  /** Ids d'`Experience` ou de `Project`. Une entrée inconnue casse le build. */
  usedIn: string[];
}

export interface SkillGroup {
  id: string;
  domain: string;
  /** `amber` ou `cyan` — l'aiguille du cadran prend cette couleur. */
  accent: "amber" | "cyan";
  skills: Skill[];
}

export interface Role {
  title: string;
  org: string;
  period: string;
  points: string[];
}

export interface Content {
  meta: { title: string; description: string; ogAlt: string };
  nav: {
    sections: { id: string; label: string }[];
    classicView: string;
    cockpitView: string;
    downloadCv: string;
    skipToContent: string;
    langLabel: string;
  };
  boot: {
    lines: string[];
    ready: string;
    skip: string;
    /** Annonce lecteur d'écran pendant la séquence. */
    srAnnounce: string;
  };
  hero: {
    eyebrow: string;
    name: string;
    role: string;
    tagline: string;
    signature: string;
    stats: { value: string; unit: string; label: string }[];
    ctaPrimary: string;
    ctaSecondary: string;
    scrollHint: string;
  };
  method: {
    title: string;
    intro: string;
    steps: { step: string; title: string; body: string }[];
  };
  about: {
    title: string;
    lead: string;
    body: string[];
    positioning: { title: string; pillars: { title: string; body: string }[] };
  };
  education: { title: string; intro: string; items: Education[] };
  experience: {
    title: string;
    intro: string;
    inputLabel: string;
    outputLabel: string;
    missionsLabel: string;
    toolsLabel: string;
    immersionLabel: string;
    items: Experience[];
  };
  projects: {
    title: string;
    intro: string;
    openLabel: string;
    closeLabel: string;
    stackLabel: string;
    items: Project[];
  };
  skills: {
    title: string;
    intro: string;
    /** Libellés de la matrice d'incidence compétences × déploiements. */
    matrix: {
      deploymentsLabel: string;
      legend: string;
      countLabel: string;
      /** Gabarit accessible d'une cellule active, `{skill}` et `{deployment}`. */
      cellLabel: string;
      emptyHint: string;
    };
    groups: SkillGroup[];
    soft: { title: string; items: string[] };
    languages: { title: string; items: { name: string; level: string }[] };
  };
  associative: { title: string; intro: string; items: Role[] };
  interests: { title: string; items: string[] };
  contact: {
    title: string;
    intro: string;
    email: string;
    phone: string;
    linkedin: string;
    linkedinLabel: string;
    location: string;
    emailLabel: string;
    phoneLabel: string;
    locationLabel: string;
    cvLabel: string;
    cvHint: string;
  };
  easterEgg: {
    lampLabel: string;
    title: string;
    body: string;
    close: string;
  };
  classic: {
    title: string;
    intro: string;
    printLabel: string;
    backLabel: string;
    sections: {
      profile: string;
      education: string;
      experience: string;
      projects: string;
      skills: string;
      associative: string;
      languages: string;
      interests: string;
      contact: string;
    };
  };
  footer: { builtWith: string; rights: string };
}
