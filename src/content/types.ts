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

/**
 * Le résumé de tête d'un projet : cinq lignes, lues avant toute autre chose.
 *
 * Un dossier technique complet ne se refuse pas, il se diffère. Ces cinq
 * lignes tiennent la promesse du niveau 1 — problème, réponse, rôle, socle,
 * résultat — et tout ce qui les justifie vit derrière le dépliage.
 */
export interface ProjectCapsule {
  problem: string;
  solution: string;
  role: string;
  /** Signature courte du socle, en une ligne. Le détail par couche est en 06. */
  stack: string;
  result: string;
}

/** Un cadre d'un logigramme : son titre, sa précision. */
export interface FlowNode {
  title: string;
  /**
   * La précision, sous le titre. Un tableau pour la couper en deux lignes —
   * un cadre de deux cents unités ne tient qu'une trentaine de caractères,
   * et une étiquette qui déborde de son cadre ne se lit plus.
   */
  sub?: string | string[];
  /** Un poste qui branche — dessiné à pans coupés, pas en rectangle. */
  decision?: boolean;
}

/** Une sortie latérale : ce qui arrive quand le flux ne continue pas. */
export interface FlowExit {
  /** Index du nœud quitté, dans `nodes`. */
  from: number;
  /** L'étiquette portée par l'arête — « non », « ignorer », « oui »… */
  edge: string;
  title: string;
  sub?: string | string[];
  /** `fault` pour un refus, `ok` pour une branche qui aboutit. */
  tone?: "fault" | "ok";
}

/** L'en-tête commun à toutes les planches de projet. */
interface FigureFrame {
  /** Rang de la planche dans le projet, déjà formaté — « FIG. 01 ». */
  no: string;
  title: string;
  /** Description longue, lue par les lecteurs d'écran. */
  alt: string;
  /** Ce que la planche affirme et que le texte ne dirait pas aussi vite. */
  caption: string;
}

/**
 * Les planches d'un projet.
 *
 * Quatre formes seulement, et chacune répond à une question précise : par où
 * passe la donnée (`flow`), dans quel ordre les tentatives sont faites
 * (`ladder`), ce qui change entre deux options (`bands`), où tombe une mesure
 * dans un intervalle (`tolerance`). Une cinquième forme voudrait dire qu'une
 * des quatre ne démontrait rien.
 *
 * Les libellés vivent dans le contenu, jamais dans le tracé : une planche dont
 * le texte est codé en dur n'a pas de version anglaise.
 */
export type ProjectFigure =
  | (FigureFrame & {
      kind: "flow";
      nodes: FlowNode[];
      exits?: FlowExit[];
      /** Le dernier cadre, celui qu'on voulait atteindre. */
      outcome: FlowNode;
    })
  | (FigureFrame & {
      kind: "ladder";
      /** Ce qui est calculé une fois, avant la première tentative. */
      input: FlowNode;
      levels: {
        no: string;
        name: string;
        /** La condition testée à ce niveau. */
        test: string;
        /** Ce qu'on obtient quand elle répond. */
        hit: string;
        note?: string;
        /** Le niveau décisif — le seul tracé en iris. */
        key?: boolean;
      }[];
      /** L'étiquette de l'arête de chute, répétée entre les niveaux. */
      failLabel: string;
      /** Ce qui reste quand aucun niveau n'a répondu. */
      none: string;
    })
  | (FigureFrame & {
      kind: "bands";
      rows: {
        label: string;
        /** Le segment de gauche — celui qui est visé. */
        left: string;
        /** Le segment de droite — le voisin, qu'on détruit ou qu'on préserve. */
        right?: string;
        /** Étendue du cache posé sur la bande. */
        mask?: "none" | "wide" | "narrow";
        note?: string;
        tone?: "fault" | "ok";
      }[];
    })
  | (FigureFrame & {
      kind: "tolerance";
      /** La règle qui produit l'intervalle, en une ligne. */
      rule: string;
      min: string;
      target: string;
      max: string;
      minLabel: string;
      targetLabel: string;
      maxLabel: string;
      unit: string;
      rejectLabel: string;
      passLabel: string;
      /** Deux mesures posées sur l'axe. `at` va de 0 à 1 sur toute la bande. */
      samples: { value: string; label: string; ok: boolean; at: number }[];
    });

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
  /**
   * Le résumé de tête. Quand il est renseigné, le projet est lu en étude de
   * cas : cinq lignes visibles, la séquence numérotée 01 à 06 sous le
   * dépliage. Sans lui, la fiche garde sa forme courte.
   */
  capsule?: ProjectCapsule;
  /**
   * Les planches du projet. La première est visible d'emblée — c'est elle qui
   * porte la preuve avant le texte ; les suivantes attendent le dépliage.
   */
  figures?: ProjectFigure[];
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
    /**
     * La planche d'ouverture : le circuit fermé. La liste dit ce que contient
     * chaque poste, la figure dit que le dernier renvoie au premier.
     */
    figure: {
      alt: string;
      caption: string;
      /** L'arête de retour, en une ou deux lignes courtes — la figure ne renvoie pas à la ligne toute seule. */
      returnLabel: string[];
    };
    steps: { step: string; title: string; body: string }[];
  };
  about: {
    title: string;
    lead: string;
    body: string[];
    positioning: {
      title: string;
      /** Les trois disques et leur intersection : le point commun se voit, il ne s'affirme pas. */
      figure: { alt: string; caption: string; centerLabel: string };
      pillars: { title: string; body: string }[];
    };
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
    /**
     * Libellés du résumé de tête. Le même gabarit sur tous les projets qui en
     * portent un : cinq lignes comparables valent mieux que cinq résumés
     * chacun à sa façon.
     */
    capsule: {
      problem: string;
      solution: string;
      role: string;
      stack: string;
      result: string;
    };
    /** En-tête de la séquence numérotée, sur les projets en étude de cas. */
    caseLabel: string;
    /** Numéro porté par le bloc socle, dernier poste de la séquence. */
    stackStepNo: string;
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
