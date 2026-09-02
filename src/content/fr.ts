import type { Content } from "./types";

/**
 * Contenu français — source de vérité : files/CV_Taha.md
 *
 * Les compétences sont décrites par leurs usages (`usedIn`) et non par une
 * note : chaque croisement de la matrice est une affirmation vérifiable.
 */
export const fr: Content = {
  meta: {
    title: "Taha Ghadhab — Ingénieur génie industriel",
    description:
      "Portfolio de Taha Ghadhab, élève ingénieur en génie industriel : optimisation des systèmes de production, data et Industrie 4.0. Safran, SMIP, AFC.",
    ogAlt: "Salle de contrôle — portfolio de Taha Ghadhab",
  },

  nav: {
    sections: [
      { id: "methode", label: "Méthode" },
      { id: "parcours", label: "Parcours" },
      { id: "experiences", label: "Expériences" },
      { id: "projets", label: "Projets" },
      { id: "competences", label: "Compétences" },
      { id: "contact", label: "Contact" },
    ],
    classicView: "Vue classique",
    cockpitView: "Vue cockpit",
    downloadCv: "CV PDF",
    skipToContent: "Aller au contenu principal",
    langLabel: "Langue",
    statusLabel: "Statut",
  },

  boot: {
    lines: [
      "SYSTEM CHECK ................ OK",
      "LOADING PROFILE: TAHA GHADHAB",
      "INDUSTRIAL ENGINEERING ...... OK",
      "DATA & AI MODULES ........... OK",
    ],
    ready: "SYSTÈME PRÊT",
    skip: "Cliquez ou appuyez sur Entrée pour passer",
    srAnnounce: "Chargement du portfolio de Taha Ghadhab.",
  },

  hero: {
    eyebrow: "Poste de pilotage",
    name: "Taha Ghadhab",
    role: "Élève ingénieur en génie industriel",
    tagline:
      "Rigueur analytique, appétence pour la donnée et optimisation des systèmes de production.",
    signature:
      "Je ne fais pas que corriger des problèmes, je les élimine définitivement avec des outils innovants.",
    stats: [
      { value: "3", unit: "", label: "stages en entreprise" },
      { value: "1", unit: "", label: "startup co-fondée" },
      { value: "42", unit: "", label: "KPI suivis" },
    ],
    ctaPrimary: "Télécharger le CV",
    ctaSecondary: "Explorer le parcours",
    scrollHint: "Défiler",
  },

  method: {
    title: "Méthode de travail",
    intro:
      "Le même protocole sur chaque mission, du terrain jusqu'au pilotage. C'est ce qui relie un OCR chez Safran à un tableau de bord académique.",
    steps: [
      {
        step: "01",
        title: "Identifier",
        body: "Repérer le problème réel ou le point d'amélioration, en observant le flux plutôt que le symptôme.",
      },
      {
        step: "02",
        title: "Concevoir",
        body: "Construire un système intelligent qui traite la cause, pas une rustine qu'il faudra réappliquer.",
      },
      {
        step: "03",
        title: "Implémenter",
        body: "Livrer le changement de la meilleure façon possible, en tenant compte des contraintes du terrain.",
      },
      {
        step: "04",
        title: "Mesurer",
        body: "Quantifier le gain : temps gagné, qualité montée, non-conformités évitées.",
      },
    ],
  },

  about: {
    title: "À propos",
    lead: "Élève ingénieur en génie industriel à l'ENIB, passionné par les systèmes qui tournent mieux après mon passage qu'avant.",
    body: [
      "Mon terrain de jeu, c'est l'endroit où un processus industriel rencontre un outil logiciel. Chez Safran, la question n'était pas « comment corriger ces documents non conformes ? » mais « comment faire pour qu'ils cessent d'arriver ? ». La réponse a pris la forme d'un OCR local qui détecte et corrige activement.",
      "Cette approche vient d'une trajectoire volontairement large : la rigueur méthodologique de l'ingénierie industrielle, les outils de la data, et une lecture business acquise en conseil financier. Trois angles sur le même problème valent mieux qu'un seul, appliqué trois fois.",
    ],
    positioning: {
      title: "Triple casquette",
      pillars: [
        {
          title: "Ingénierie industrielle",
          body: "Lean, DMAIC, VSM, implantation d'atelier, planification PIC/PDP/MRP. La méthode avant l'outil.",
        },
        {
          title: "Data & IA appliquée",
          body: "Python, SQL, Power BI, OCR, tableaux de bord décisionnels. L'outil au service de la mesure.",
        },
        {
          title: "Business & entrepreneuriat",
          body: "Étude technico-économique, conseil financier, co-fondation d'une startup. Le gain, exprimé en langage décideur.",
        },
      ],
    },
  },

  education: {
    title: "Parcours académique",
    intro: "Une trajectoire scientifique, orientée vers l'ingénierie des systèmes.",
    items: [
      {
        degree: "Diplôme National d'Ingénieur — Génie Industriel",
        school: "École Nationale d'Ingénieurs de Bizerte (ENIB)",
        period: "2024 — Présent",
        location: "Bizerte",
        detail:
          "Optimisation des systèmes de production, Lean management, planification industrielle, Industrie 4.0.",
        current: true,
      },
      {
        degree: "Cycle préparatoire Mathématiques-Physique",
        school: "Faculté des Sciences de Tunis",
        period: "2021 — 2024",
        location: "Tunis",
        detail: "Formation scientifique intensive, socle mathématique et physique.",
        current: false,
      },
      {
        degree: "Baccalauréat Mathématiques",
        school: "Mention Bien",
        period: "2021",
        current: false,
      },
    ],
  },

  experience: {
    title: "Expériences",
    intro:
      "Trois environnements industriels, une même façon d'entrer : identifier ce qui coince, sortir avec quelque chose qui tient.",
    inputLabel: "Entrée — problème identifié",
    outputLabel: "Sortie — livré",
    missionsLabel: "Missions",
    toolsLabel: "Outils",
    immersionLabel: "Sortie — acquis",
    items: [
      {
        id: "safran",
        short: "Safran",
        company: "Safran",
        fullName: "Safran",
        role: "Ingénieur méthode",
        sector: "aero",
        period: "Juin — Juillet 2025",
        location: "Dhari",
        input:
          "Documents non conformes aux normes qualité détectés tardivement, et conformité des outils de serrage suivie sans système dédié.",
        output:
          "Un logiciel OCR local qui détecte et corrige activement les non-conformités documentaires, et une plateforme de suivi de la conformité des outils de serrage.",
        missions: [
          "Création d'un logiciel intelligent (OCR local) pour la détection et la correction active des documents non conformes aux normes de qualité",
          "Création d'une plateforme de suivi de la conformité des outils de serrage, en réponse aux exigences de la norme de sécurité aéronautique",
        ],
        tools: ["OCR", "Python", "Normes qualité aéro"],
        hasDeliverable: true,
      },
      {
        id: "smip",
        short: "SMIP",
        company: "SMIP",
        fullName: "Société de Maintenance et d'Installation Pétrolière",
        role: "Assistant ingénieur",
        sector: "oil",
        period: "Juin — Juillet 2025",
        location: "Les Berges du Lac, Tunisie",
        input:
          "Une décision d'investissement lourde — l'acquisition d'une unité de coiled-tubing — à instruire sur des bases chiffrées.",
        output:
          "Une étude technico-économique complète servant de support à la décision d'acquisition.",
        missions: [
          "Étude technico-économique pour l'acquisition d'une unité de coiled-tubing",
          "Immersion dans les enjeux HSE et les normes de sécurité pétrolières",
        ],
        tools: ["Étude technico-économique", "HSE", "Normes pétrolières"],
        hasDeliverable: true,
      },
      {
        id: "afc",
        short: "AFC",
        company: "AFC",
        fullName: "Arab Financial Consultants",
        role: "Apprenti consultant",
        sector: "finance",
        period: "Août — Septembre 2025",
        location: "Les Berges du Lac, Tunisie",
        input:
          "Une lecture purement technique des projets industriels, sans le vocabulaire ni les critères du décideur financier.",
        output:
          "Une grille de lecture financière des systèmes : savoir traduire un gain d'ingénierie en argument d'investissement.",
        missions: [
          "Immersion dans un environnement de conseil en finance",
          "Développement de compétences en rigueur analytique et compréhension des systèmes financiers",
        ],
        tools: ["Conseil", "Analyse financière"],
        hasDeliverable: false,
      },
    ],
  },

  projects: {
    title: "Projets",
    intro:
      "Trois systèmes construits pour résoudre un problème précis, du process RH à l'implantation d'atelier.",
    openLabel: "Ouvrir",
    closeLabel: "Fermer",
    stackLabel: "Stack",
    stepsLabel: "Séquence d'inspection",
    items: [
      {
        id: "pharmacowork",
        accentTint: "#4FD8B0",
        name: "PharmacoWork",
        short: "PharmacoWork",
        url: "https://pharmacowork.fr",
        visual: "roster",
        tagline: "Outil de gestion RH pour pharmacies",
        period: "2025 — Présent",
        status: "Actif",
        summary:
          "Application mobile de gestion des ressources humaines pour les pharmacies, co-fondée pour répondre à un besoin non couvert : gérer les plannings, les remplacements et le suivi du personnel sans outil dédié.",
        highlights: [
          "Modélisation des processus RH du secteur officinal",
          "Conception de la base de données et des interfaces",
          "Optimisation des flux de gestion du personnel",
        ],
        stack: ["React", "Supabase", "SQL", "Modélisation BPMN"],
        metric: { value: "Co-fondateur", label: "Rôle" },
      },
      {
        id: "machine-layout",
        accentTint: "#F2913C",
        name: "Machine Layout Optimization App",
        short: "Machine Layout",
        visual: "layout",
        steps: [
          {
            step: "01",
            title: "Relever",
            body: "Recenser les machines, les gammes de fabrication et les flux réels entre postes. Sans cette matrice de départ, tout regroupement est arbitraire.",
          },
          {
            step: "02",
            title: "Regrouper",
            body: "Appliquer la méthode de King — un tri itératif des lignes et des colonnes de la matrice d'incidence — jusqu'à faire émerger les îlots de production.",
          },
          {
            step: "03",
            title: "Implanter",
            body: "Chaîner les postes à l'intérieur de chaque îlot par un algorithme d'optimisation, et positionner les îlots entre eux.",
          },
          {
            step: "04",
            title: "Mesurer",
            body: "Noter chaque implantation candidate sur le trafic, la connexité et le ratio d'optimalité. C'est le chiffre qui tranche, pas l'intuition.",
          },
        ],

        tagline: "Aide à la décision en implantation d'atelier",
        period: "2025 — 2026",
        status: "En cours",
        summary:
          "Application d'aide à la décision pour l'implantation d'ateliers : elle regroupe les machines en îlots de production cohérents et évalue chaque implantation candidate sur des critères industriels mesurables.",
        highlights: [
          "Méthode de King (Rank Order Clustering) pour la constitution d'îlots de production",
          "Algorithmes d'optimisation par chaînage",
          "Indicateurs industriels : trafic, connexité, ratio d'optimalité",
        ],
        stack: ["MATLAB", "Python", "Recherche opérationnelle"],
        metric: { value: "ROC", label: "Méthode de King" },
      },
      {
        id: "dashboard-enib",
        accentTint: "#4FD8E8",
        name: "Dashboard de Performance Académique",
        short: "Dashboard ENIB",
        visual: "dashboard",
        tagline: "Application web fullstack de pilotage — ENIB",
        period: "2025 — 2026",
        status: "En cours",
        summary:
          "Plateforme de pilotage de la performance académique de l'ENIB : elle centralise les indicateurs de suivi, déclenche des alertes automatiques sur les dérives et rend la satisfaction étudiante lisible en un coup d'œil.",
        highlights: [
          "42 KPI de suivi des performances académiques",
          "Système d'alerte automatisé sur les seuils critiques",
          "Visualisations interactives et suivi de la satisfaction estudiantine",
        ],
        stack: ["React", "Supabase", "SQL", "Power BI"],
        metric: { value: "42", label: "KPI suivis" },
      },
    ],
  },

  skills: {
    title: "Compétences",
    intro:
      "Plutôt qu'un pourcentage que je m'attribuerais moi-même, voici où chaque compétence a réellement servi. La lecture se fait comme une matrice d'incidence — l'outil même qu'utilise la méthode de King dans mon projet d'implantation.",
    matrix: {
      deploymentsLabel: "Déploiements",
      legend: "Cellule active = compétence mise en œuvre sur ce terrain",
      countLabel: "terrains",
      cellLabel: "{skill} mise en œuvre sur {deployment}",
      emptyHint: "Survolez une ligne ou une colonne pour isoler un croisement.",
    },
    groups: [
      {
        id: "industriel",
        domain: "Industrielles",
        accent: "amber",
        skills: [
          {
            name: "Lean & amélioration continue",
            note: "DMAIC, PDCA, VSM, Ishikawa",
            usedIn: ["safran", "dashboard-enib"],
          },
          {
            name: "Gestion & planification",
            note: "PIC, PDP, MRP, MS Project, ERP",
            usedIn: ["smip", "pharmacowork"],
          },
          {
            name: "Layout / Implantation",
            usedIn: ["machine-layout"],
          },
          {
            name: "Maîtrise des processus",
            usedIn: ["safran", "pharmacowork", "machine-layout"],
          },
          {
            name: "Étude technico-économique",
            usedIn: ["smip", "afc"],
          },
        ],
      },
      {
        id: "technique",
        domain: "Techniques",
        accent: "cyan",
        skills: [
          {
            name: "Python",
            usedIn: ["safran", "machine-layout"],
          },
          {
            name: "SQL / Supabase",
            usedIn: ["pharmacowork", "dashboard-enib"],
          },
          {
            name: "React",
            usedIn: ["pharmacowork", "dashboard-enib"],
          },
          {
            name: "Power BI",
            usedIn: ["dashboard-enib"],
          },
          {
            name: "MATLAB",
            usedIn: ["machine-layout"],
          },
          {
            name: "OCR / Vision",
            usedIn: ["safran"],
          },
          {
            name: "CATIA V5",
            usedIn: [],
          },
        ],
      },
    ],
    soft: {
      title: "Soft skills",
      items: [
        "Leadership & gestion d'équipe",
        "Travail en équipe multiculturelle",
        "Communication publique",
      ],
    },
    languages: {
      title: "Langues",
      items: [
        { name: "Arabe", level: "Langue maternelle" },
        { name: "Français", level: "Courant" },
        { name: "Anglais", level: "Courant" },
      ],
    },
  },

  associative: {
    title: "Vie associative",
    intro: "Club AI Innovators — ENIB.",
    items: [
      {
        title: "Président",
        org: "Club AI Innovators — ENIB",
        period: "2025 — 2026",
        points: [
          "Direction stratégique du club : projets IA & Data pluridisciplinaires",
          "Organisation d'événements",
        ],
      },
      {
        title: "Responsable RH",
        org: "Club AI Innovators — ENIB",
        period: "2024 — 2025",
        points: ["Gestion des recrutements internes", "Intégration des membres"],
      },
    ],
  },

  interests: {
    title: "Centres d'intérêt",
    items: [
      "Industrie 4.0",
      "IA appliquée",
      "Entrepreneuriat",
      "Musculation et sport",
      "Leadership associatif",
      "Business & stratégie",
    ],
  },

  contact: {
    title: "Contact",
    intro:
      "Ouvert aux opportunités de stage et d'alternance en ingénierie industrielle, data et Industrie 4.0.",
    email: "taha.ghadhab@enib.ucar.tn",
    phone: "+216 54 347 150",
    linkedin: "https://www.linkedin.com/in/taha-ghadhab",
    linkedinLabel: "linkedin.com/in/taha-ghadhab",
    location: "Tunisie",
    emailLabel: "E-mail",
    phoneLabel: "Téléphone",
    locationLabel: "Localisation",
    cvLabel: "Télécharger le CV en PDF",
    cvHint: "Version imprimable, un clic.",
  },

  easterEgg: {
    lampLabel: "Voyant auxiliaire",
    title: "Hors protocole",
    body: "Quand je ne pilote pas de process, je soulève de la fonte. La musculation, c'est le même métier que l'ingénierie industrielle : une charge, un protocole, une mesure, et la patience d'attendre que la courbe monte. Le reste n'est que du bruit.",
    close: "Refermer",
  },

  classic: {
    title: "CV — Taha Ghadhab",
    intro: "Version texte, scannable, sans habillage.",
    printLabel: "Imprimer / PDF",
    backLabel: "Retour au cockpit",
    sections: {
      profile: "Profil",
      education: "Formation",
      experience: "Expérience professionnelle",
      projects: "Projets techniques & industriels",
      skills: "Compétences",
      associative: "Vie associative",
      languages: "Langues",
      interests: "Centres d'intérêt",
      contact: "Contact",
    },
  },

  footer: {
    builtWith: "Conçu et développé par Taha Ghadhab",
    rights: "Tous droits réservés.",
  },
};
