/**
 * Modèle de contenu du portfolio.
 *
 * Une seule forme, deux traductions (`fr.ts`, `en.ts`). Toute section ajoutée
 * ici doit l'être dans les deux fichiers — TypeScript le fait respecter.
 */

export const LOCALES = ["fr", "en"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "fr";

/** Une station : entrée « problème » → sortie « livré ». */
export interface Experience {
  id: string;
  company: string;
  /** Libellé court, utilisé en en-tête de colonne dans la matrice. */
  short: string;
  fullName: string;
  role: string;
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

/** Une étape de la séquence d'inspection d'un projet phare. */
export interface ProjectStep {
  step: string;
  title: string;
  body: string;
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
  /** Signature courte, reprise telle quelle sur le CV imprimable. */
  stack: string[];
  /**
   * Le stack réel, par couche. Quand il est renseigné, c'est lui qui est
   * affiché dans le dépliage : une liste à plat de quarante briques ne dit
   * rien, la même liste rangée par couche se lit.
   */
  stackDetail?: { label: string; items: string[] }[];
  /** Chiffre mis en avant sur le moniteur, en mono. */
  metric?: { value: string; label: string };
  /** Site en ligne, quand le projet est public. */
  url?: string;
  /** Séquence d'inspection, réservée aux projets phares. */
  steps?: ProjectStep[];
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
    /**
     * Toutes les stations du document, dans l'ordre. Le rail latéral les
     * affiche toutes ; la barre du haut ne garde que celles marquées
     * `primary` — une navigation de dix liens n'est plus une navigation.
     */
    sections: { id: string; label: string; primary?: boolean }[];
    classicView: string;
    siteView: string;
    downloadCv: string;
    skipToContent: string;
    langLabel: string;
    /** Étiquettes accessibles des deux navigations. */
    primaryNavLabel: string;
    sectionsNavLabel: string;
    /** Sous-titre du bloc de marque, en mono. */
    brandRole: string;
    /** Ouverture et fermeture du panneau de navigation sur petit écran. */
    menuLabel: string;
    menuCloseLabel: string;
  };
  hero: {
    eyebrow: string;
    name: string;
    role: string;
    /** Le titre du vol : court, tenu sur deux lignes au plus. */
    headline: string;
    /** Chapeau du hero — la promesse en une phrase. */
    lede: string;
    tagline: string;
    signature: string;
    stats: { value: string; unit: string; label: string }[];
    ctaPrimary: string;
    ctaSecondary: string;
    /** Signature typographique sous le hero, en mono. */
    wordmark: string;
  };
  /**
   * Le principe fondateur, illustré par une vraie figure d'ingénierie :
   * le bord dentelé de l'aile de la chouette, qui divise un gros
   * tourbillon en petits tourbillons inaudibles.
   */
  principle: {
    eyebrow: string;
    title: string;
    body: string;
    figCaption: string;
    figAlt: string;
    plainLabel: string;
    plainWake: string;
    serratedLabel: string;
    serratedWake: string;
    notes: string[];
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
    /** Libellés du dépliage : le détail est replié par défaut. */
    detailsLabel: string;
    hideLabel: string;
    items: Experience[];
  };
  projects: {
    title: string;
    intro: string;
    /** Libellés du dépliage : le détail est replié par défaut. */
    detailsLabel: string;
    hideLabel: string;
    /** Lien sortant vers le projet en ligne. */
    siteLabel: string;
    openLabel: string;
    closeLabel: string;
    stackLabel: string;
    stepsLabel: string;
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
