import type { Content } from "./types";

/**
 * Contenu français — source de vérité : files/CV_Taha.md
 *
 * Les compétences sont décrites par leurs usages (`usedIn`) et non par une
 * note : chaque rattachement est une affirmation vérifiable.
 */
export const fr: Content = {
  meta: {
    title: "Taha Ghadhab — Ingénieur génie industriel",
    description: "Portfolio de Taha Ghadhab, élève ingénieur en génie industriel : optimisation des systèmes de production, data et Industrie 4.0. Safran, SMIP, AFC.",
    ogAlt: "Vol silencieux — portfolio de Taha Ghadhab"
  },
  nav: {
    sections: [
      {
        id: "vol",
        label: "Vol"
      },
      {
        id: "principe",
        label: "Principe"
      },
      {
        id: "methode",
        label: "Méthode",
        primary: true
      },
      {
        id: "experiences",
        label: "Expériences",
        primary: true
      },
      {
        id: "projets",
        label: "Projets",
        primary: true
      },
      {
        id: "competences",
        label: "Compétences",
        primary: true
      },
      {
        id: "parcours",
        label: "Parcours"
      },
      {
        id: "a-propos",
        label: "À propos"
      },
      {
        id: "associatif",
        label: "Engagement"
      },
      {
        id: "contact",
        label: "Contact",
        primary: true
      }
    ],
    classicView: "Vue classique",
    siteView: "Vue complète",
    downloadCv: "CV PDF",
    skipToContent: "Aller au contenu principal",
    langLabel: "Langue",
    primaryNavLabel: "Navigation principale",
    sectionsNavLabel: "Sections",
    brandRole: "GÉNIE INDUSTRIEL",
    menuLabel: "Menu",
    menuCloseLabel: "Fermer"
  },
  hero: {
    eyebrow: "Vol silencieux",
    name: "Taha Ghadhab",
    role: "Élève ingénieur en génie industriel",
    headline: "Observer, puis trancher une seule fois.",
    lede: "J'isole la contrainte qui gouverne un système en défaut, je la lève une bonne fois, et je conçois pour la durée plutôt que pour la maintenance.",
    tagline: "Rigueur analytique, appétence pour la donnée et optimisation des systèmes de production.",
    signature: "Je ne fais pas que corriger des problèmes, je les élimine définitivement avec des outils innovants.",
    stats: [
      {
        value: "3",
        unit: "",
        label: "stages en entreprise"
      },
      {
        value: "1",
        unit: "",
        label: "startup co-fondée"
      },
      {
        value: "4",
        unit: "",
        label: "projets construits"
      }
    ],
    ctaPrimary: "Voir les réalisations",
    ctaSecondary: "Ma méthode",
    wordmark: "VOL SILENCIEUX"
  },
  principle: {
    eyebrow: "LE PRINCIPE",
    title: "Le bruit est un défaut de conception",
    body: "La chouette harfang vole en silence parce que le bord d'attaque de son aile est un peigne de fines dentelures. Les dents brisent un gros tourbillon en une multitude de petits, et les petits tourbillons ne portent presque aucun son. Les ingénieurs l'ont copié pour les pales d'éoliennes et les carénages de pantographes.",
    figCaption: "FIG. 01 — STRUCTURE DE SILLAGE, BORD LISSE vs. BORD DENTELÉ",
    figAlt: "Comparaison de deux bords d'aile. Le bord lisse laisse un large sillage turbulent ; le bord dentelé divise l'écoulement en fins filets parallèles.",
    plainLabel: "BORD LISSE",
    plainWake: "SILLAGE TURBULENT — AUDIBLE",
    serratedLabel: "BORD DENTELÉ",
    serratedWake: "FILETS PARALLÈLES — SILENCIEUX",
    notes: [
      "J'y reviens toujours parce que c'est tout le métier en une image. Le bord lisse n'est pas paresseux : il fait la chose évidente. Et il fait quand même du bruit.",
      "Le bord dentelé ne combat pas la turbulence. Il divise le problème jusqu'à ce que chaque morceau soit assez petit pour être inoffensif. C'est de la décomposition, et c'est ce que je fais à une ligne de production, à un flux documentaire ou à une structure de coûts."
    ]
  },
  method: {
    title: "Méthode de travail",
    intro: "Écouter d'abord. N'agir qu'une fois. Les oreilles d'une chouette sont placées à des hauteurs différentes sur son crâne : elle situe un son en trois dimensions avant de s'engager, au lieu de chasser à l'essai. Ces cinq étapes se déroulent dans cet ordre sur chaque mission, du terrain jusqu'au pilotage ; c'est ce qui relie un OCR chez Safran à un tableau de bord académique.",
    figure: {
      alt: "Circuit à cinq postes : écouter, stabiliser, décomposer, optimiser, pérenniser. Une arête de retour ramène le dernier poste vers le premier.",
      caption: "FIG. 02 — UN SEUL PASSAGE, PUIS ÇA TOURNE SANS MOI",
      returnLabel: ["La boucle continue", "une fois que je suis parti"]
    },
    steps: [
      {
        step: "01",
        title: "Écouter",
        body: "Parler aux gens qui vivent le problème avant de toucher à quoi que ce soit. Ils savent déjà où ça fait mal ; on le leur demande rarement."
      },
      {
        step: "02",
        title: "Stabiliser",
        body: "Un correctif temporaire, dimensionné selon la criticité de la panne. Il achète le temps de faire le vrai travail correctement, plutôt que sous pression."
      },
      {
        step: "03",
        title: "Décomposer",
        body: "Démonter le système. Résoudre d'abord les morceaux indépendants, ensuite ceux qui sont enchevêtrés, jamais l'inverse."
      },
      {
        step: "04",
        title: "Optimiser",
        body: "Comparer les candidats sur la qualité rapportée au coût. Choisir avec des maths, pas avec du goût, et pouvoir montrer le calcul."
      },
      {
        step: "05",
        title: "Pérenniser",
        body: "Piloter le déploiement pour qu'il tienne à l'installation et qu'il tienne encore après la passation. Si ça exige ma présence, ce n'est pas fini."
      }
    ]
  },
  about: {
    title: "À propos",
    lead: "Élève ingénieur en génie industriel à l'ENIB, passionné par les systèmes qui tournent mieux après mon passage qu'avant.",
    body: [
      "Mon terrain de jeu, c'est l'endroit où un processus industriel rencontre un outil logiciel. Chez Safran, la question n'était pas « comment corriger ces documents non conformes ? » mais « comment faire pour qu'ils cessent d'arriver ? ». La réponse a pris la forme d'un OCR local qui détecte et corrige activement.",
      "Cette approche vient d'une trajectoire volontairement large : la rigueur méthodologique de l'ingénierie industrielle, les outils de la data, et une lecture business acquise en conseil financier. Trois angles sur le même problème valent mieux qu'un seul, appliqué trois fois."
    ],
    positioning: {
      title: "Triple casquette",
      figure: {
        alt: "Trois disques de même taille qui se recouvrent en un seul point commun : ingénierie industrielle, data et IA appliquée, business et entrepreneuriat.",
        caption: "FIG. 03 — TROIS DOMAINES, UNE SEULE INTERSECTION",
        centerLabel: "Ici"
      },
      pillars: [
        {
          title: "Ingénierie industrielle",
          body: "Lean, DMAIC, VSM, implantation d'atelier, planification PIC/PDP/MRP. La méthode avant l'outil."
        },
        {
          title: "Data & IA appliquée",
          body: "Python, SQL, Power BI, OCR, tableaux de bord décisionnels. L'outil au service de la mesure."
        },
        {
          title: "Business & entrepreneuriat",
          body: "Étude technico-économique, conseil financier, co-fondation d'une startup. Le gain, exprimé en langage décideur."
        }
      ]
    }
  },
  education: {
    title: "Parcours académique",
    intro: "Une trajectoire scientifique, orientée vers l'ingénierie des systèmes.",
    items: [
      {
        degree: "Mastère — Systèmes complexes intelligents",
        school: "École Polytechnique de Tunisie (EPT)",
        period: "2026 — Présent",
        location: "La Marsa",
        detail: "Modélisation et pilotage des systèmes complexes, apprentissage automatique, aide à la décision.",
        current: true
      },
      {
        degree: "Diplôme National d'Ingénieur — Génie Industriel",
        school: "École Nationale d'Ingénieurs de Bizerte (ENIB)",
        period: "2024 — Présent",
        location: "Bizerte",
        detail: "Optimisation des systèmes de production, Lean management, planification industrielle, Industrie 4.0.",
        current: true
      },
      {
        degree: "Cycle préparatoire Mathématiques-Physique",
        school: "Faculté des Sciences de Tunis",
        period: "2021 — 2024",
        location: "Tunis",
        detail: "Formation scientifique intensive, socle mathématique et physique.",
        current: false
      },
      {
        degree: "Baccalauréat Mathématiques",
        school: "Mention Bien",
        period: "2021",
        current: false
      }
    ]
  },
  experience: {
    title: "Expériences",
    intro: "Trois environnements industriels, une même façon d'entrer : identifier ce qui coince, sortir avec quelque chose qui tient.",
    inputLabel: "Entrée — problème identifié",
    outputLabel: "Sortie — livré",
    missionsLabel: "Missions",
    toolsLabel: "Outils",
    immersionLabel: "Sortie — acquis",
    detailsLabel: "Voir le détail",
    hideLabel: "Masquer le détail",
    items: [
      {
        id: "safran",
        short: "Safran",
        company: "Safran",
        fullName: "Safran",
        role: "Ingénieur méthode",
        period: "Juin — Juillet 2025",
        location: "Dhari",
        input: "Le rachat de Zodiac par Safran laisse l'ancienne entité imprimée dans les en-têtes de milliers de documents de fabrication ; reprise manuelle exclue. En parallèle, la conformité des outils de serrage est suivie sans système dédié.",
        output: "Un outil de reprise de marque assistée par OCR, avec validation humaine et journal d'audit, et une plateforme de suivi de la conformité des outils de serrage.",
        missions: [
          "Conception d'un outil local de reprise de marque documentaire : détection des mentions Zodiac dans le texte natif comme dans les pages scannées, remplacement sous validation de l'opérateur, fichier source jamais écrasé",
          "Création d'une plateforme de suivi de la conformité des outils de serrage, en réponse aux exigences de la norme de sécurité aéronautique"
        ],
        tools: [
          "Python",
          "PyMuPDF",
          "OCR",
          "OpenCV",
          "Normes qualité aéro"
        ],
        hasDeliverable: true
      },
      {
        id: "smip",
        short: "SMIP",
        company: "SMIP",
        fullName: "Société de Maintenance et d'Installation Pétrolière",
        role: "Assistant ingénieur",
        period: "Juin — Juillet 2025",
        location: "Les Berges du Lac, Tunisie",
        input: "Une décision d'investissement lourde à instruire sur des bases chiffrées : l'acquisition d'une unité de coiled-tubing.",
        output: "Une étude technico-économique complète servant de support à la décision d'acquisition.",
        missions: [
          "Étude technico-économique pour l'acquisition d'une unité de coiled-tubing",
          "Immersion dans les enjeux HSE et les normes de sécurité pétrolières"
        ],
        tools: [
          "Étude technico-économique",
          "HSE",
          "Normes pétrolières"
        ],
        hasDeliverable: true
      },
      {
        id: "afc",
        short: "AFC",
        company: "AFC",
        fullName: "Arab Financial Consultants",
        role: "Apprenti consultant",
        period: "Août — Septembre 2025",
        location: "Les Berges du Lac, Tunisie",
        input: "Une lecture purement technique des projets industriels, sans le vocabulaire ni les critères du décideur financier.",
        output: "Une grille de lecture financière des systèmes : savoir traduire un gain d'ingénierie en argument d'investissement.",
        missions: [
          "Immersion dans un environnement de conseil en finance",
          "Développement de compétences en rigueur analytique et compréhension des systèmes financiers"
        ],
        tools: [
          "Conseil",
          "Analyse financière"
        ],
        hasDeliverable: false
      }
    ]
  },
  projects: {
    title: "Projets",
    intro: "Quatre systèmes construits pour résoudre un problème précis, de la documentation aéronautique à l'implantation d'atelier.",
    openLabel: "Ouvrir",
    detailsLabel: "Voir le détail",
    hideLabel: "Masquer le détail",
    siteLabel: "Voir le site",
    closeLabel: "Fermer",
    stackLabel: "Stack",
    stepsLabel: "Séquence d'inspection",
    items: [
      {
        id: "safran-rebranding",
        name: "Reprise de marque documentaire Zodiac → Safran",
        short: "Rebranding Safran",
        tagline: "Détection et remplacement de marque sur des milliers de documents de fabrication",
        period: "2025",
        status: "Livré",
        summary: "Après le rachat de Zodiac Aerospace par Safran, des milliers de dossiers de fabrication, plans CAO et ordres de fabrication portent encore l'ancienne entité dans leurs en-têtes et leurs pieds de page. L'outil retrouve ces mentions quel que soit leur encodage dans le PDF, les remplace sans abîmer ce qui les entoure, et n'applique rien sans l'accord d'un opérateur.",
        highlights: [
          "Cinq encodages à couvrir pour un même en-tête visible : texte natif, Form XObject des exports CAO, texte vectorisé en courbes, scan raster et logo bitmap",
          "Correspondance hiérarchique à quatre niveaux, tolérante au bruit OCR (Z0DIAC lu pour ZODIAC) ; l'ajout d'un test d'inclusion a fait passer la détection de 0 à 18 occurrences sur 18",
          "Remplacement en boîte minimale : seule la mention fautive est effacée, la référence de dossier voisine dans le même bloc est préservée",
          "Sur les scans, le fond est échantillonné à la médiane RGB autour de la zone, si bien que la reprise reste invisible sur un papier jauni",
          "Validation humaine occurrence par occurrence et journal d'audit : en documentation aéronautique, une modification non tracée est une modification inacceptable"
        ],
        stack: [
          "Python 3.12",
          "PyMuPDF",
          "Tesseract 5",
          "PaddleOCR",
          "OpenCV",
          "PySide6",
          "SQLite"
        ],
        stackDetail: [
          {
            label: "Moteur PDF",
            items: [
              "PyMuPDF (fitz)",
              "Spans, polices, couleurs",
              "Flux Form XObject",
              "Rendu 300 DPI"
            ]
          },
          {
            label: "Reconnaissance",
            items: [
              "Tesseract 5 — fra+eng",
              "PaddleOCR 3.6 — DBNet + CRNN",
              "TrOCR — annotations manuscrites"
            ]
          },
          {
            label: "Vision",
            items: [
              "OpenCV 4.10 headless",
              "Redressement, contraste, débruitage",
              "Template matching de logo",
              "Pillow",
              "NumPy"
            ]
          },
          {
            label: "Interface",
            items: [
              "PySide6 — MVVM, QThread",
              "Tkinter — outil de production",
              "Aperçu et validation par occurrence"
            ]
          },
          {
            label: "Traçabilité",
            items: [
              "SQLite — 5 tables",
              "Journal d'audit en ajout seul",
              "Contrôle qualité automatisé"
            ]
          },
          {
            label: "Qualité",
            items: [
              "pytest — 210 tests unitaires",
              "pytest-qt",
              "black",
              "flake8"
            ]
          }
        ],
        metric: {
          value: "18/18",
          label: "Occurrences détectées"
        }
      },
      {
        id: "pharmacowork",
        name: "PharmacoWork",
        short: "PharmacoWork",
        url: "https://pharmacowork.fr",
        tagline: "L'espace de travail interne de l'officine",
        period: "2025 — Présent",
        status: "Pilote",
        summary: "Le logiciel d'officine gère la vente, le stock et la facturation, pas ce qui circule entre les gens. Qui prépare quelle ordonnance, qui doit rappeler un patient, quel contrôle qualité est en retard : ce vide se comble aujourd'hui au post-it, au cahier de liaison et au groupe WhatsApp, ce dernier faisant transiter des noms de patients sur des téléphones personnels, hors de tout cadre. Co-fondé pour occuper ce vide et rien d'autre : onze modules, pensés mobile d'abord parce que le métier se pratique debout au comptoir. Il ne remplace ni le logiciel d'officine, ni la caisse, ni le registre légal des ordonnances.",
        highlights: [
          "Onze modules bout en bout : ~80 écrans, ~180 routes d'API, 41 modèles de données",
          "Cloisonnement strict : chaque ligne porte son officineId, chaque requête est filtrée dessus",
          "Connexion sans mot de passe par lien magique, et second facteur obligatoire pour les titulaires",
          "Identités patients chiffrées au repos, recherche préservée par index HMAC : aucun nom en clair côté serveur",
          "Purge de données simulable avant activation, avec le journal de ce qu'elle aurait supprimé",
          "Accès aux ordonnances tracés, et consultables par le titulaire"
        ],
        steps: [
          {
            step: "01",
            title: "Délimiter le vide",
            body: "Le logiciel d'officine s'arrête à la vente. Les préparations, les rappels, les ruptures, les contrôles qualité n'ont pas d'outil, donc ils ont WhatsApp. Le premier travail a été de border ce vide sans déborder sur ce qui fonctionne déjà : ni caisse, ni registre légal."
          },
          {
            step: "02",
            title: "Cloisonner",
            body: "Une officine est un locataire. L'isolement n'est pas une vue posée sur les données : chaque ligne porte son officineId et chaque requête est filtrée dessus, au niveau du socle. C'est la seule façon de tenir la promesse quand quarante et un modèles se répondent."
          },
          {
            step: "03",
            title: "Tenir la donnée patient",
            body: "Un nom de patient ne doit jamais être lisible côté serveur, et pourtant l'équipe doit pouvoir chercher. Les identités sont chiffrées au repos et indexées par HMAC : la recherche fonctionne, le nom en clair n'existe nulle part. Les accès aux ordonnances sont tracés, et le titulaire peut les relire."
          },
          {
            step: "04",
            title: "Rendre la sécurité vérifiable",
            body: "Une politique de purge qu'on ne peut pas contrôler ne vaut rien : celle-ci se simule avant activation et laisse le journal de ce qu'elle aurait supprimé. Soixante-trois suites de tests tournent à chaque commit, et l'audit de sécurité d'août 2026 a été soldé en trois vagues."
          }
        ],
        stack: [
          "NestJS 11",
          "Next.js 16",
          "React 19",
          "TypeScript",
          "Prisma",
          "PostgreSQL 18",
          "Tailwind CSS 4",
          "Railway"
        ],
        stackDetail: [
          {
            label: "Backend",
            items: [
              "NestJS 11",
              "Express 5",
              "TypeScript 5.7",
              "Node 22",
              "Prisma 6",
              "PostgreSQL 18",
              "Multi-tenant par officine"
            ]
          },
          {
            label: "Frontend",
            items: [
              "Next.js 16 — App Router",
              "React 19",
              "Tailwind CSS 4",
              "lucide-react",
              "zxing-wasm",
              "Service worker maison"
            ]
          },
          {
            label: "Sécurité",
            items: [
              "JWT + magic-link",
              "TOTP maison HMAC-SHA256",
              "AES-256-GCM au repos",
              "Index patients par HMAC",
              "Helmet 8",
              "Throttling",
              "CSP à nonce"
            ]
          },
          {
            label: "Services",
            items: [
              "S3 — URL pré-signées",
              "Resend / SMTP",
              "Web-push VAPID",
              "OCR Mistral",
              "Worker ffmpeg",
              "Crons + advisory locks"
            ]
          },
          {
            label: "Infrastructure",
            items: [
              "Railway",
              "Docker multi-stage",
              "node:22-alpine",
              "GitHub Actions",
              "Import BDPM"
            ]
          },
          {
            label: "Qualité",
            items: [
              "Jest 30",
              "Supertest",
              "Semgrep",
              "npm audit",
              "Sentry",
              "PostHog EU",
              "autocannon"
            ]
          }
        ],
        metric: {
          value: "11",
          label: "Modules"
        }
      },
      {
        id: "machine-layout",
        name: "Machine Layout Optimization App",
        short: "Machine Layout",
        tagline: "Aide à la décision en implantation d'atelier",
        period: "2025 — 2026",
        status: "En cours",
        summary: "Application d'aide à la décision pour l'implantation d'ateliers : elle regroupe les machines en îlots de production cohérents et évalue chaque implantation candidate sur des critères industriels mesurables.",
        highlights: [
          "Méthode de King (Rank Order Clustering) pour la constitution d'îlots de production",
          "Algorithmes d'optimisation par chaînage",
          "Indicateurs industriels : trafic, connexité, ratio d'optimalité"
        ],
        stack: [
          "React",
          "TypeScript",
          "Vite",
          "Tailwind CSS",
          "Zustand",
          "Python"
        ],
        metric: {
          value: "ROC",
          label: "Méthode de King"
        },
        url: "https://machine-layout-solver.vercel.app/"
      },
      {
        id: "dashboard-enib",
        name: "Dashboard de Performance Académique",
        short: "Dashboard ENIB",
        tagline: "Application web fullstack de pilotage — ENIB",
        period: "2025 — 2026",
        status: "En cours",
        summary: "Plateforme de pilotage de la performance académique de l'ENIB : elle centralise les indicateurs de suivi, déclenche des alertes automatiques sur les dérives et rend la satisfaction étudiante lisible en un coup d'œil.",
        highlights: [
          "42 KPI de suivi des performances académiques",
          "Système d'alerte automatisé sur les seuils critiques",
          "Visualisations interactives et suivi de la satisfaction estudiantine"
        ],
        stack: [
          "React",
          "Supabase",
          "SQL",
          "Power BI"
        ],
        metric: {
          value: "42",
          label: "KPI suivis"
        }
      }
    ]
  },
  skills: {
    title: "Compétences",
    intro: "Plutôt qu'un pourcentage que je m'attribuerais moi-même, voici où chaque compétence a réellement servi. Sous chaque ligne, les terrains qui la prouvent.",
    matrix: {
      deploymentsLabel: "Déploiements",
      legend: "Cellule active = compétence mise en œuvre sur ce terrain",
      countLabel: "terrains",
      cellLabel: "{skill} mise en œuvre sur {deployment}",
      emptyHint: "Survolez une ligne ou une colonne pour isoler un croisement."
    },
    groups: [
      {
        id: "industriel",
        domain: "Industrielles",
        skills: [
          {
            name: "Lean & amélioration continue",
            note: "DMAIC, PDCA, VSM, Ishikawa",
            usedIn: [
              "safran",
              "dashboard-enib"
            ]
          },
          {
            name: "Gestion & planification",
            note: "PIC, PDP, MRP, MS Project, ERP",
            usedIn: [
              "smip",
              "pharmacowork"
            ]
          },
          {
            name: "Layout / Implantation",
            usedIn: [
              "machine-layout"
            ]
          },
          {
            name: "Maîtrise des processus",
            usedIn: [
              "safran",
              "pharmacowork",
              "machine-layout",
              "safran-rebranding"
            ]
          },
          {
            name: "Étude technico-économique",
            usedIn: [
              "smip",
              "afc"
            ]
          }
        ]
      },
      {
        id: "technique",
        domain: "Techniques",
        skills: [
          {
            name: "Python",
            usedIn: [
              "safran",
              "machine-layout",
              "safran-rebranding"
            ]
          },
          {
            name: "SQL / PostgreSQL",
            usedIn: [
              "pharmacowork",
              "dashboard-enib"
            ]
          },
          {
            name: "React",
            usedIn: [
              "pharmacowork",
              "dashboard-enib",
              "machine-layout"
            ]
          },
          {
            name: "Power BI",
            usedIn: [
              "dashboard-enib"
            ]
          },
          {
            name: "MATLAB",
            usedIn: []
          },
          {
            name: "OCR / Vision",
            usedIn: [
              "safran",
              "safran-rebranding"
            ]
          },
          {
            name: "CATIA V5",
            usedIn: []
          }
        ]
      }
    ],
    soft: {
      title: "Soft skills",
      items: [
        "Leadership & gestion d'équipe",
        "Travail en équipe multiculturelle",
        "Communication publique"
      ]
    },
    languages: {
      title: "Langues",
      items: [
        {
          name: "Arabe",
          level: "Langue maternelle"
        },
        {
          name: "Français",
          level: "Courant"
        },
        {
          name: "Anglais",
          level: "Courant"
        }
      ]
    }
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
          "Organisation d'événements"
        ]
      },
      {
        title: "Responsable RH",
        org: "Club AI Innovators — ENIB",
        period: "2024 — 2025",
        points: [
          "Gestion des recrutements internes",
          "Intégration des membres"
        ]
      }
    ]
  },
  interests: {
    title: "Centres d'intérêt",
    items: [
      "Industrie 4.0",
      "IA appliquée",
      "Entrepreneuriat",
      "Musculation et sport",
      "Leadership associatif",
      "Business & stratégie"
    ]
  },
  contact: {
    title: "Contact",
    intro: "Ouvert aux opportunités de stage et d'alternance en ingénierie industrielle, data et Industrie 4.0.",
    email: "taha.ghadhab@enib.ucar.tn",
    phone: "+216 54 347 150",
    linkedin: "https://www.linkedin.com/in/taha-ghadhab",
    linkedinLabel: "linkedin.com/in/taha-ghadhab",
    location: "Tunisie",
    emailLabel: "E-mail",
    phoneLabel: "Téléphone",
    locationLabel: "Localisation",
    cvLabel: "Télécharger le CV en PDF",
    cvHint: "Version imprimable, un clic."
  },
  classic: {
    title: "CV — Taha Ghadhab",
    intro: "Version texte, scannable, sans habillage.",
    printLabel: "Imprimer / PDF",
    backLabel: "Retour au site",
    sections: {
      profile: "Profil",
      education: "Formation",
      experience: "Expérience professionnelle",
      projects: "Projets techniques & industriels",
      skills: "Compétences",
      associative: "Vie associative",
      languages: "Langues",
      interests: "Centres d'intérêt",
      contact: "Contact"
    }
  },
  footer: {
    builtWith: "Conçu et développé par Taha Ghadhab",
    rights: "Tous droits réservés."
  }
};
