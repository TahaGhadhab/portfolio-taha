import type { Content } from "./types";

/**
 * Contenu français — source de vérité : files/CV_Taha.md
 *
 * Les compétences sont décrites par leurs usages (`usedIn`) et non par une
 * note : chaque rattachement est une affirmation vérifiable.
 */
export const fr: Content = {
  meta: {
    title: "Taha Ghadhab, ingénieur génie industriel",
    description: "Portfolio de Taha Ghadhab, élève ingénieur en génie industriel : optimisation des systèmes de production, data et Industrie 4.0. Safran, SMIP, AFC.",
    ogAlt: "Vol silencieux, portfolio de Taha Ghadhab"
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
        value: "7",
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
    figCaption: "FIG. 01 · STRUCTURE DE SILLAGE, BORD LISSE vs. BORD DENTELÉ",
    figAlt: "Comparaison de deux bords d'aile. Le bord lisse laisse un large sillage turbulent ; le bord dentelé divise l'écoulement en fins filets parallèles.",
    plainLabel: "BORD LISSE",
    plainWake: "SILLAGE TURBULENT · AUDIBLE",
    serratedLabel: "BORD DENTELÉ",
    serratedWake: "FILETS PARALLÈLES · SILENCIEUX",
    notes: [
      "J'y reviens toujours parce que c'est tout le métier en une image. Le bord lisse n'est pas paresseux : il fait la chose évidente. Et il fait quand même du bruit.",
      "Le bord dentelé ne combat pas la turbulence. Il divise le problème jusqu'à ce que chaque morceau soit assez petit pour être inoffensif. C'est de la décomposition, et c'est ce que je fais à une ligne de production, à un flux documentaire ou à une structure de coûts."
    ]
  },
  method: {
    title: "Méthode de travail",
    intro: "Écouter d'abord. N'agir qu'une fois. Cinq postes, toujours dans cet ordre, du terrain jusqu'au pilotage.",
    figure: {
      alt: "Circuit à cinq postes : écouter, stabiliser, décomposer, optimiser, pérenniser. Une arête de retour ramène le dernier poste vers le premier.",
      caption: "FIG. 02 · UN SEUL PASSAGE, PUIS ÇA TOURNE SANS MOI",
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
      "Mon terrain de jeu, c'est l'endroit où un processus industriel rencontre un outil logiciel. Chez Safran, la question n'était pas « comment corriger ces documents non conformes ? » mais « comment faire pour qu'ils cessent d'arriver ? ». La réponse a pris la forme d'un OCR local qui détecte et corrige activement."
    ],
    positioning: {
      title: "Triple casquette",
      figure: {
        alt: "Trois disques de même taille qui se recouvrent en un seul point commun : ingénierie industrielle, data et IA appliquée, business et entrepreneuriat.",
        caption: "FIG. 03 · TROIS DOMAINES, UNE SEULE INTERSECTION",
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
        degree: "Master Recherche en systèmes complexes intelligents, double diplôme",
        school: "École Polytechnique de Tunisie (EPT)",
        period: "2026 à 2027",
        location: "La Marsa",
        detail: "Intelligence artificielle, robotique avancée et transports intelligents, systèmes embarqués, commande optimale, identification des systèmes.",
        current: true
      },
      {
        degree: "Diplôme National d'Ingénieur en génie industriel",
        school: "École Nationale d'Ingénieurs de Bizerte (ENIB)",
        period: "2024 à 2027",
        location: "Bizerte",
        detail: "Optimisation des systèmes de production, Lean management, planification industrielle, Industrie 4.0.",
        current: true
      },
      {
        degree: "Cycle préparatoire Mathématiques-Physique",
        school: "Faculté des Sciences de Tunis",
        period: "2021 à 2024",
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
    ],
    certifications: {
      title: "Certifications",
      issuer: "Claude Academy · Anthropic",
      verifyLabel: "Vérifier",
      items: [
        {
          name: "AI Fluency: Framework & Foundations",
          meta: "4 h · 14 leçons",
          body: "Formation sur le framework des 4D (Delegation, Description, Discernment, Diligence) pour collaborer efficacement, de façon éthique et sûre avec l'IA générative. Couvre les fondements des LLM, les stratégies de délégation de tâches et l'évaluation critique des résultats produits par l'IA.",
          url: "https://academy.claude.com/verify/e3dbdaa15e6b6866a90f56dabc6a4fac"
        },
        {
          name: "AI Capabilities and Limitations",
          meta: "3,5 h · 13 leçons",
          body: "Construction d'un modèle mental rigoureux du fonctionnement des grands modèles de langage : prédiction du prochain token, limites de connaissance et de mémoire de travail (fenêtre de contexte), et fiabilité du pilotage par instructions. Vise à diagnostiquer les erreurs de l'IA et à calibrer le niveau de confiance selon le type de tâche.",
          url: "https://academy.claude.com/verify/8eb5d609652f479c1e0b3bab3c844a32"
        },
        {
          name: "Building Effective Human Agent Teams (Beta)",
          meta: "45 min · 5 leçons",
          body: "Introduction au passage d'une IA « assistant individuel » à des agents IA collaborant au sein d'une équipe. Présente les quatre principes d'une équipe humain-agent saine : rôles clairs, objectif commun écrit, déploiement progressif et accès maîtrisé à l'information.",
          url: "https://academy.claude.com/verify/18fd7cf214b2721852eb621e42bdd57f"
        }
      ]
    }
  },
  experience: {
    title: "Expériences",
    intro: "Trois environnements industriels, une même façon d'entrer : identifier ce qui coince, sortir avec quelque chose qui tient.",
    inputLabel: "Entrée · problème identifié",
    outputLabel: "Sortie · livré",
    missionsLabel: "Missions",
    toolsLabel: "Outils",
    immersionLabel: "Sortie · acquis",
    detailsLabel: "Voir le détail",
    hideLabel: "Masquer le détail",
    expandAllLabel: "Tout déplier",
    collapseAllLabel: "Tout replier",
    items: [
      {
        id: "safran",
        short: "Safran",
        company: "Safran",
        fullName: "Safran",
        role: "Ingénieur méthode",
        period: "1er juin au 24 juillet 2026",
        location: "Dhari",
        input: "L'ancienne entité reste imprimée sur des milliers de documents de fabrication, reprise manuelle exclue. En parallèle, la conformité des outils de serrage est suivie sans système dédié.",
        output: "Un outil de reprise de marque assistée par OCR, avec validation humaine et journal d'audit, et une plateforme de suivi de la conformité des outils de serrage.",
        missions: [
          "Digitalisation d'un contrôle de production : suivi papier des contrôles de couple de 19 îlots remplacé par une application de traçabilité ; mesures reçues directement de plus de la moitié des 18 couplemètres, outils identifiés par code-barres, outil hors étalonnage bloqué, corrections validées par le responsable ; 8 règles métier, 58 tests unitaires ; contrôle ramené de 60-120 s à 30 s",
          "Automatisation d'un processus documentaire par IA (OpenCV, PaddleOCR, Tesseract, PyMuPDF) : 100 % des marques détectées sur 73 documents, sans faux positif, traitement ramené de 30-60 min à environ 3 min, 210 tests unitaires",
          "Travail quotidien avec la qualité, les méthodes et les opérateurs"
        ],
        tools: [
          "Python",
          "PyMuPDF",
          "PaddleOCR",
          "Tesseract",
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
        period: "Juin à juillet 2025",
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
        period: "Août à septembre 2025",
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
    intro: "Sept systèmes construits pour résoudre un problème précis, de la documentation aéronautique à l'apprentissage par renforcement.",
    openLabel: "Ouvrir",
    detailsLabel: "Voir le détail",
    hideLabel: "Masquer le détail",
    siteLabel: "Voir le site",
    closeLabel: "Fermer",
    stackLabel: "Stack",
    stepsLabel: "Séquence d'inspection",
    capsule: {
      problem: "Problème",
      solution: "Réponse",
      role: "Rôle",
      stack: "Socle",
      result: "Résultat"
    },
    caseLabel: "Étude de cas",
    stackStepNo: "06",
    expandAllLabel: "Tout déplier",
    collapseAllLabel: "Tout replier",
    grid: {
      label: "Sommaire des projets",
      filterLabel: "Filtrer par domaine",
      allLabel: "Tous",
      countLabel: "{n} projets",
      openLabel: "Aller à {name}",
      emptyLabel: "Aucun projet sur ce domaine."
    },
    tracks: {
      industrial: "Industriel",
      data: "Data & IA",
      business: "Business"
    },
    statuses: {
      done: "Livré",
      pilot: "Pilote",
      wip: "En cours"
    },
    items: [
      {
        id: "safran-rebranding",
        name: "Reprise de marque documentaire Zodiac → Safran",
        short: "Rebranding Safran",
        tagline: "Détection et remplacement de marque sur des milliers de documents de fabrication",
        period: "2025",
        status: "Livré",
        statusTone: "done",
        tracks: ["data", "industrial"],
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
              "Tesseract 5 · fra+eng",
              "PaddleOCR 3.6 · DBNet + CRNN",
              "TrOCR · annotations manuscrites"
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
              "PySide6 · MVVM, QThread",
              "Tkinter · outil de production",
              "Aperçu et validation par occurrence"
            ]
          },
          {
            label: "Traçabilité",
            items: [
              "SQLite · 5 tables",
              "Journal d'audit en ajout seul",
              "Contrôle qualité automatisé"
            ]
          },
          {
            label: "Qualité",
            items: [
              "pytest · 210 tests unitaires",
              "pytest-qt",
              "black",
              "flake8"
            ]
          }
        ],
        capsule: {
          problem: "Des milliers de dossiers de fabrication portaient encore Zodiac en en-tête. Et un PDF range cette même ligne visible de cinq façons différentes.",
          solution: "Un outil de bureau qui les retrouve quel que soit l'encodage, les remplace sans abîmer le voisinage, et n'écrit rien sans validation humaine.",
          role: "Seul développeur : cadrage, architecture, algorithmes, interface, tests.",
          stack: "Python 3.12 · PyMuPDF · Tesseract · PaddleOCR · OpenCV · PySide6 · SQLite",
          result: "18/18 occurrences sur le document de référence · 210 tests unitaires · ≈ 19 300 lignes"
        },
        steps: [
          {
            step: "01",
            title: "Contexte",
            body: "Zodiac Aerospace est devenu Safran Electronics & Defense. La marque a changé sur le papier à en-tête ; elle n'a pas changé à l'intérieur des milliers de PDF déjà émis : dossiers de fabrication, plans CAO, ordres de fabrication, tous nommant encore une entité qui n'existe plus."
          },
          {
            step: "02",
            title: "Contrainte",
            body: "La documentation aéronautique est auditable. Une modification silencieuse est pire qu'une absence de modification : celui qui ouvrira le fichier dans cinq ans doit pouvoir savoir ce qu'il disait avant, qui l'a changé et quand. Et un en-tête n'est jamais seul sur sa ligne : la référence de dossier posée à côté doit ressortir intacte."
          },
          {
            step: "03",
            title: "Approche",
            body: "Lire le fichier avant de le réécrire. Un même en-tête visible existe en texte natif, en Form XObject issu d'un export CAO, en courbes ne portant aucun caractère, en scan raster ou en logo bitmap. Cinq encodages, cinq techniques de récupération, et aucune ne couvre les autres. D'où trois passes d'extraction, un repli OCR inconditionnel, et un appariement tolérant à ce que l'OCR lit de travers."
          },
          {
            step: "04",
            title: "Construction",
            body: "Deux programmes. Une application PySide6 en couches (≈ 12 900 lignes) où toutes les flèches pointent vers un domaine sans framework, et un outil de production délibérément plat (≈ 4 900 lignes) dont le moteur n'importe pas une ligne de code graphique et reste pilotable en ligne de commande. Entre les deux, un schéma SQLite : modifications en attente, journal en ajout seul, rapports qualité."
          },
          {
            step: "05",
            title: "Résultat",
            body: "18 occurrences sur 18 sur le document de référence de 17 pages, contre 0 sur 16 avant l'ajout du niveau d'inclusion. 210 tests unitaires tournent sans boucle d'événements Qt ni PDF sur disque. Le détecteur de logo est la seule partie qui n'a pas fonctionné : la corrélation de gabarit plafonne à 0,568 face à un seuil de 0,65, à toutes les échelles testées. Mesuré, rapporté, pas dissimulé."
          }
        ],
        figures: [
          {
            kind: "flow",
            no: "FIG. 01",
            title: "Du PDF source au fichier réémis",
            alt: "Logigramme vertical : le PDF source est classé natif ou scanné, chaque page est zonée en en-tête et pied, le texte est extrait en trois passes, le VariantMatcher renvoie les occurrences, un opérateur valide chacune d'elles, le remplacement et un contrôle qualité suivent, et un nouveau fichier est écrit. Ignorer une occurrence n'écrit rien ; chaque décision est ajoutée au journal des modifications.",
            caption: "Le poste à pans coupés est le seul chemin vers l'écriture. Les modifications naissent à l'état PENDING et le PDF reste intact tant que apply_modifications() n'est pas appelé. Une occurrence ignorée ne coûte donc rien, mais laisse quand même une ligne au journal.",
            nodes: [
              {
                title: "PDF source",
                sub: "jamais écrasé"
              },
              {
                title: "Classification",
                sub: "< 50 car./page → scanné"
              },
              {
                title: "Zonage en-tête et pied",
                sub: "haut 30 % · bas 15 %"
              },
              {
                title: "Extraction",
                sub: [
                  "3 passes sur le flux",
                  "repli OCR inconditionnel"
                ]
              },
              {
                title: "VariantMatcher",
                sub: "4 niveaux · fig. 02"
              },
              {
                title: "Validation opérateur",
                sub: "occurrence par occurrence",
                decision: true
              },
              {
                title: "Remplacement",
                sub: "auto | precise · fig. 03"
              },
              {
                title: "Contrôle qualité",
                sub: [
                  "4 vérifications",
                  "score de 0 à 1"
                ]
              }
            ],
            exits: [
              {
                from: 5,
                edge: "ignorer",
                title: "Aucune écriture",
                sub: "occurrence suivante",
                tone: "fault"
              },
              {
                from: 6,
                edge: "trace",
                title: "change_log",
                sub: [
                  "ajout seul",
                  "qui · quand · quoi"
                ]
              }
            ],
            outcome: {
              title: "*_safran.pdf",
              sub: "un fichier neuf"
            }
          },
          {
            kind: "ladder",
            no: "FIG. 02",
            title: "Quatre niveaux essayés dans l'ordre : le premier qui répond gagne",
            alt: "Échelle de décision : le texte normalisé est calculé une seule fois, puis quatre niveaux d'appariement sont essayés dans l'ordre : exact, deep, contain, fuzzy. Chacun rend un score quand il répond et laisse tomber au suivant sinon. Le troisième niveau, l'inclusion, est mis en évidence comme celui qui a fait passer la détection de zéro sur seize à dix-huit sur dix-huit.",
            caption: "Pourquoi contain passe avant fuzzy. Un en-tête réel se lit « ZODIAC AERO ELECTRIC DOSSIER FABRICATION REF SAQ172_ » : face au motif seul, la distance d'édition est dominée par le texte voisin et le ratio s'effondre. L'inclusion, elle, répond 1.0 sans ambiguïté dès qu'elle s'applique ; elle doit donc être consultée en premier.",
            input: {
              title: "normalize_text(ocr_normalize(texte))",
              sub: "calculé une fois, hors de la boucle sur les motifs"
            },
            levels: [
              {
                no: "NIVEAU 1",
                name: "exact",
                test: "casse, accents, espaces",
                hit: "score 1.0",
                note: "texte natif propre"
              },
              {
                no: "NIVEAU 2",
                name: "deep",
                test: "substitutions OCR",
                hit: "score 1.0",
                note: "Z0DIAC → ZODIAC"
              },
              {
                no: "NIVEAU 3 · DÉCISIF",
                name: "contain",
                test: "variante ⊂ texte normalisé",
                hit: "score 1.0",
                note: "0/16 → 18/18",
                key: true
              },
              {
                no: "NIVEAU 4",
                name: "fuzzy",
                test: "ratio Levenshtein ≥ seuil",
                hit: "score = ratio",
                note: "scans dégradés"
              }
            ],
            failLabel: "échec",
            none: "aucune occurrence"
          },
          {
            kind: "bands",
            no: "FIG. 03",
            title: "auto contre precise : la largeur d'un cache",
            alt: "Trois bandes empilées. La première montre le bloc d'en-tête détecté, portant la mention Zodiac à gauche et une référence de dossier à droite. La deuxième montre le mode auto couvrant toute la largeur du bloc et détruisant la référence. La troisième montre le mode precise ne couvrant que la zone Zodiac, la référence restant lisible.",
            caption: "La seule différence entre les deux modes tient à la largeur du cache blanc, et cette différence détruit ou préserve la référence de dossier posée dans le même bloc. precise calcule la bbox minimale à partir des spans qui contiennent réellement la mention, et ne se replie sur la bbox du bloc qu'à défaut.",
            rows: [
              {
                label: "AVANT · BLOC D'EN-TÊTE DÉTECTÉ",
                left: "ZODIAC AERO ELECTRIC",
                right: "DOSSIER FAB. REF SAQ172_",
                mask: "none"
              },
              {
                label: "AUTO · CACHE SUR TOUT LE BLOC",
                left: "SAFRAN ELECTRONICS & DEFENSE",
                mask: "wide",
                tone: "fault",
                note: "la référence de dossier voisine est détruite"
              },
              {
                label: "PRECISE · BBOX MINIMALE CALCULÉE",
                left: "SAFRAN ELEC. & DEF.",
                right: "DOSSIER FAB. REF SAQ172_",
                mask: "narrow",
                tone: "ok",
                note: "la référence ressort intacte"
              }
            ]
          }
        ],
        metric: {
          value: "18/18",
          label: "Occurrences détectées"
        }
      },
      {
        id: "controltorque",
        name: "ControlTorque : traçabilité des outils de serrage",
        short: "ControlTorque",
        tagline: "Prouver qu'un serrage a été contrôlé, des années après",
        period: "2025",
        status: "Livré",
        statusTone: "done",
        tracks: ["industrial", "data"],
        capsule: {
          problem: "La preuve qu'un serrage avait été contrôlé vivait dans des relevés papier et des tableurs : introuvable, inauditable, et impossible à croire des années après.",
          solution: "Une application web où chaque contrôle est un enregistrement immuable portant son calcul, et où une mesure hors bornes ouvre une fiche suivie.",
          role: "Seul développeur : règles métier, backend, frontend, modèle de données.",
          stack: "Angular 13 · Spring Boot 2.7 · Java 8 · Hibernate · SQL Server · JWT",
          result: "8 règles tenues côté serveur · 11 entités · 1 journal en ajout seul"
        },
        highlights: [
          "Huit règles métier, toutes tenues côté serveur : le frontend les reflète pour le confort de saisie, il ne les fait jamais respecter",
          "L'identité de l'opérateur est relue dans le JWT à chaque requête, jamais dans le corps du message ; enregistrer un contrôle au nom d'un collègue est impossible",
          "Un contrôle pris avec un étalonnage expiré est refusé par un 400 plutôt qu'enregistré : un contrôle sans valeur probante est plus dangereux qu'une absence de contrôle, puisqu'il donne l'illusion de la conformité",
          "La tolérance, sa source et les deux bornes sont figées dans l'enregistrement, et les références de l'outil et du couplemètre y sont recopiées en simples chaînes plutôt que liées, si bien qu'un auditeur peut refaire le calcul des années plus tard, même si la gamme a été révisée entre-temps",
          "control_checks est en INSERT ONLY, chaque décision de non-conformité est ajoutée à un journal d'événements, et depuis une fiche clôturée aucune transition n'est autorisée"
        ],
        stack: [
          "Angular 13",
          "Spring Boot 2.7",
          "Java 8",
          "Hibernate 5.6",
          "SQL Server",
          "JWT",
          "BCrypt"
        ],
        stackDetail: [
          {
            label: "Frontend",
            items: [
              "Angular 13.3 · SPA",
              "AuthGuard · AdminGuard",
              "JwtInterceptor",
              "10 services HTTP"
            ]
          },
          {
            label: "Backend",
            items: [
              "Spring Boot 2.7.18",
              "11 contrôleurs · 14 services",
              "@Transactional",
              "GlobalExceptionHandler"
            ]
          },
          {
            label: "Domaine",
            items: [
              "ConformityService · BigDecimal",
              "CalibrationService",
              "NonconformityService",
              "8 règles métier"
            ]
          },
          {
            label: "Persistance",
            items: [
              "Hibernate 5.6 · 11 entités",
              "H2 en développement",
              "SQL Server en production",
              "Requêtes filtrées, pagination"
            ]
          },
          {
            label: "Sécurité",
            items: [
              "JWT HS256 · 8 h",
              "BCrypt, coût 12",
              "2 rôles : OPERATOR, ADMIN",
              "CORS à origine unique"
            ]
          }
        ],
        steps: [
          {
            step: "01",
            title: "Contexte",
            body: "Sur une ligne d'assemblage, un serrage se contrôle contre un couple cible et une tolérance. Le contrôle lui-même prend quelques secondes ; prouver qu'il a eu lieu, dans quelles conditions et par qui, est la partie qui doit survivre à un audit des années après. Et cette partie vivait sur du papier."
          },
          {
            step: "02",
            title: "Contrainte",
            body: "Tout ce qui compte doit tenir même contre celui qui s'en sert. Un opérateur ne doit pas pouvoir enregistrer un contrôle au nom d'un autre, transmettre au serveur un verdict qu'il n'a pas calculé, ni modifier un contrôle après coup. Et un outil dont l'étalonnage a expiré doit arrêter la production plutôt que la décorer."
          },
          {
            step: "03",
            title: "Approche",
            body: "Mettre toutes les décisions dans une seule couche, et ne lui laisser aucun contournement. Le verdict est recalculé côté serveur à partir du couple cible et du couple mesuré ; l'identifiant de l'opérateur est relu dans le token, jamais dans le corps ; l'horodatage vient de la base. Le frontend reflète les règles pour que la saisie reste confortable, et n'en fait respecter aucune."
          },
          {
            step: "04",
            title: "Construction",
            body: "Un SPA Angular au-dessus d'un backend Spring Boot sans session : 11 contrôleurs, 14 services, 11 entités JPA, et aucune entité JPA qui remonte jusqu'au client. Deux règles ont leur propre service : la conformité, calculée en BigDecimal parce que les arrondis binaires n'ont pas leur place dans un dossier qualité aéronautique, et l'étalonnage, qui peut refuser une requête d'emblée."
          },
          {
            step: "05",
            title: "Résultat",
            body: "Huit règles métier, toutes côté serveur. Un contrôle porte sa tolérance, sa source et ses deux bornes, et recopie les références de l'outil et du couplemètre en simples chaînes, si bien que l'enregistrement continue de dire sous quelles conditions exactes ce serrage a été validé, même après révision de la gamme. Une limite, énoncée plutôt que masquée : l'immuabilité est garantie par l'application, pas par la base, et un accès SQL direct la contournerait."
          }
        ],
        figures: [
          {
            kind: "flow",
            no: "FIG. 01",
            title: "Ce qu'un contrôle de serrage doit franchir",
            alt: "Logigramme vertical d'un POST vers l'endpoint des contrôles : l'utilisateur est relu dans le JWT, les références sont résolues, le couplemètre est lu, la conformité est calculée, l'enregistrement est inséré et un 201 est renvoyé. Une référence inconnue sort en 404, un étalonnage expiré sort en 400, et un résultat non conforme ouvre une fiche de non-conformité.",
            caption: "Le refus est volontaire. Un couplemètre dont l'étalonnage a expiré fait échouer la requête plutôt que produire un enregistrement : un contrôle sans valeur probante est plus dangereux qu'un contrôle manquant, puisqu'il donne l'illusion de la conformité. Une échéance inconnue, à l'inverse, ne bloque pas la production : elle est simplement enregistrée telle quelle.",
            nodes: [
              {
                title: "POST /api/controls",
                sub: "un contrôle de serrage"
              },
              {
                title: "user ← JWT",
                sub: "user_id du corps ignoré"
              },
              {
                title: "Résolution des références",
                sub: "ToolType · COI · îlot"
              },
              {
                title: "Lecture du couplemètre",
                sub: "échéance d'étalonnage"
              },
              {
                title: "ConformityService",
                sub: [
                  "R1 tolérance → R2 bornes",
                  "R3 verdict · fig. 02"
                ]
              },
              {
                title: "INSERT control_checks",
                sub: [
                  "checked_at posé par la base",
                  "enregistrement immuable"
                ]
              },
              {
                title: "Résultat non conforme ?",
                sub: "verdict calculé au serveur",
                decision: true
              }
            ],
            exits: [
              {
                from: 2,
                edge: "inconnue",
                title: "404 Not Found",
                sub: "ResourceNotFound",
                tone: "fault"
              },
              {
                from: 3,
                edge: "expirée",
                title: "400 Bad Request",
                sub: [
                  "contrôle refusé",
                  "règle R7"
                ],
                tone: "fault"
              },
              {
                from: 6,
                edge: "oui",
                title: "Non-conformité",
                sub: [
                  "statut A_TRAITER",
                  "fiche ouverte"
                ],
                tone: "fault"
              }
            ],
            outcome: {
              title: "201 Created",
              sub: "+ deviationPct calculé"
            }
          },
          {
            kind: "tolerance",
            no: "FIG. 02",
            title: "La bande de tolérance, et pourquoi les bornes sont incluses",
            alt: "Axe gradué pour un couple cible de 25 Nm à 4 pour cent : la zone conforme s'étend de 24,000 à 26,000 Nm, bornes incluses, avec une zone de rejet de chaque côté. Une mesure à 25,400 Nm est conforme ; une mesure à 26,350 Nm ne l'est pas.",
            caption: "R2 pose les bornes : min = cible × (1 − tol/100) et max = cible × (1 + tol/100), arrondis HALF_UP à trois décimales. R3 rend le verdict : les bornes sont incluses, une mesure exactement à 24,000 Nm est donc conforme. Les quatre valeurs calculées sont écrites dans l'enregistrement, ce qui permet à un auditeur de refaire le calcul des années plus tard même si la gamme a changé depuis.",
            rule: "cible 25,000 Nm > 10 Nm → tolérance 4,00 % (DEFAUT_4PCT)",
            min: "24,000",
            target: "25,000",
            max: "26,000",
            minLabel: "min",
            targetLabel: "cible",
            maxLabel: "max",
            unit: "Nm",
            rejectLabel: "rejet",
            passLabel: "CONFORME",
            samples: [
              {
                value: "25,400 Nm",
                label: "CONFORME",
                ok: true,
                at: 0.6
              },
              {
                value: "26,350 Nm",
                label: "NON CONFORME",
                ok: false,
                at: 0.8375
              }
            ]
          }
        ],
        metric: {
          value: "8",
          label: "Règles tenues côté serveur"
        }
      },
      {
        id: "pharmacowork",
        name: "PharmacoWork",
        short: "PharmacoWork",
        url: "https://pharmacowork.fr",
        tagline: "L'espace de travail interne de l'officine",
        period: "2025 à aujourd'hui",
        status: "Pilote",
        statusTone: "pilot",
        tracks: ["business"],
        capsule: {
          problem: "Le logiciel d'officine s'arrête à la vente. Préparations, rappels, contrôles qualité se traitent au post-it et sur WhatsApp, noms de patients compris.",
          solution: "Un espace de travail interne à l'officine : onze modules, pensés mobile d'abord parce que le métier se pratique debout au comptoir.",
          role: "Co-fondateur : cadrage produit, architecture, développement.",
          stack: "NestJS 11 · Next.js 16 · React 19 · Prisma · PostgreSQL 18 · Railway",
          result: "11 modules en pilote · 41 modèles cloisonnés par officine · identités chiffrées au repos"
        },
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
              "Next.js 16 · App Router",
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
              "S3 · URL pré-signées",
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
        period: "2025 à 2026",
        status: "Livré",
        statusTone: "done",
        tracks: ["industrial"],
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
        tagline: "Application web fullstack de pilotage, ENIB",
        period: "2025 à 2026",
        status: "Livré",
        statusTone: "done",
        tracks: ["data", "business"],
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
      },
      {
        id: "lunar-lander",
        name: "Lunar Lander : reward shaping et reward hacking",
        short: "Lunar Lander",
        tagline: "Faire tricher une IA exprès, puis prouver la correction",
        period: "2026",
        status: "Livré",
        statusTone: "done",
        tracks: ["data"],
        capsule: {
          problem: "Une récompense qui paraît anodine, « +1 par image où le module est droit et lent », suffit à faire tricher un agent : il plane jusqu'à la coupure au lieu d'atterrir, et sa courbe d'entraînement dit qu'il excelle.",
          solution: "Reproduire la triche sous protocole, puis réécrire la même idée en potential-based shaping (Ng, Harada et Russell, 1999), et prouver par ablation que c'est ce terme qui corrige.",
          role: "Spécification, protocole expérimental, hypothèses et validation. Code écrit avec Claude Code, vérifié par 51 tests.",
          stack: "Python 3.12 · Gymnasium · Box2D · Stable-Baselines3 (PPO) · PyTorch · pytest",
          result: "Troncature 77 % → 0 % sur chaque graine · score réel 36,8 → 263,4 · 15 entraînements de 1 M de pas"
        },
        highlights: [
          "Cinq fonctions de récompense, chacune un wrapper Gymnasium qui ajoute à la récompense native sans jamais la remplacer ni toucher à terminated, truncated et info",
          "Hypothèse écrite avant chaque essai dans un journal daté, 3 graines par variante, et verdicts publiés tels quels : deux hypothèses ont été marquées réfutées",
          "Évaluation que la récompense modifiée ne peut pas tromper : environnement brut, politique déterministe, 50 épisodes sur des graines réservées, pire graine rapportée entre crochets",
          "Découverte : la triche trouvée dépend du chemin d'apprentissage. La graine 2 apprend à se poser vers 400 000 pas, puis désapprend et plane sur tous les épisodes à partir de 750 000",
          "Lander Studio : une application web locale, sans framework, pour entraîner en direct et voir le réseau s'allumer à côté du module en vol"
        ],
        steps: [
          {
            step: "01",
            title: "Contexte",
            body: "Un tutoriel apprend à une IA à poser un module lunaire. L'intérêt n'est pas là. Il est dans ce qui arrive quand on ajoute une règle de récompense raisonnable en apparence : un bonus qui paie un état plutôt qu'un progrès. C'est le reward hacking, et c'est le défaut le plus courant de l'apprentissage par renforcement appliqué."
          },
          {
            step: "02",
            title: "Contrainte",
            body: "Le score d'entraînement d'un agent tricheur est faux par construction : jugé par sa propre récompense, il réussit. Le protocole devait donc juger toutes les variantes sur la même échelle, la récompense brute du jeu, et se méfier de toute conclusion tirée d'une seule graine."
          },
          {
            step: "03",
            title: "Approche",
            body: "Le calcul d'abord. Planer rapporte environ +0,8 par image, soit près de 800 sur un épisode coupé à 1 000 images, contre +100 pour un atterrissage qui arrête les paiements. Avec γ = 0,999 et le bootstrapping sur troncature, le critique évalue le vol stationnaire à environ 735. La correction paie l'amélioration, F = γ·Φ(s') − Φ(s) : la somme se télescope et reste bornée, il n'y a plus rien à accumuler."
          },
          {
            step: "04",
            title: "Construction",
            body: "Un paquet Python en couches : fabrique d'environnements, registre de récompenses, entraînement PPO qui écrit dans chaque config.json versions, hash git et durée, évaluation équitable, enregistrement vidéo. Trois pièges du potentiel couverts par des tests : même γ que PPO, Φ nul sur une vraie fin mais pas sur une troncature, Φ recalculé à chaque reset."
          },
          {
            step: "05",
            title: "Résultat",
            body: "La triche est reproduite sur 2 graines sur 3 (77 % des épisodes coupés à 1 000 images, score réel 36,8 contre 257,3 en baseline), pendant que leur score d'entraînement montait vers 1 000. Le potentiel la supprime sur toutes les graines : 0 % de troncature, score dans l'écart-type de la baseline. L'ablation sans frais par image donne le même résultat : c'est le terme potentiel qui corrige, pas les frais. Reproduit à l'identique depuis un clone propre."
          }
        ],
        figures: [
          {
            kind: "flow",
            no: "FIG. 01",
            title: "Un protocole que la récompense modifiée ne peut pas tromper",
            alt: "Logigramme vertical : l'hypothèse est écrite avant l'essai, trois graines sont entraînées sur un million de pas, le score brut est journalisé à côté du score façonné, puis chaque modèle est évalué sur l'environnement brut avec une politique déterministe sur cinquante graines réservées. Un test vérifie si plus de vingt pour cent des épisodes sont coupés à mille images ; si oui, la triche est probable et la vidéo de la graine médiane le confirme. Le verdict est écrit au journal d'expériences.",
            caption: "Le façonnage n'existe qu'à l'entraînement. L'évaluation ne le voit jamais : toutes les variantes sont jugées sur la récompense du jeu, et c'est pour cela qu'un agent qui affichait près de 1 000 points ressort à 36,8. Monitor est posé sous le wrapper de récompense, si bien que la courbe d'entraînement elle-même est en score brut.",
            nodes: [
              {
                title: "Hypothèse écrite",
                sub: "avant l'essai, datée"
              },
              {
                title: "Entraînement PPO",
                sub: "3 graines · 1 M de pas"
              },
              {
                title: "Journal à deux colonnes",
                sub: [
                  "score brut (Monitor)",
                  "score façonné, à part"
                ]
              },
              {
                title: "Évaluation brute",
                sub: [
                  "déterministe · 50 épisodes",
                  "graines 10 000 à 10 049"
                ]
              },
              {
                title: "Troncature > 20 % ?",
                sub: "signature du vol stationnaire",
                decision: true
              }
            ],
            exits: [
              {
                from: 4,
                edge: "oui",
                title: "Triche probable",
                sub: [
                  "vidéo de la graine",
                  "médiane, pas la meilleure"
                ],
                tone: "fault"
              }
            ],
            outcome: {
              title: "Verdict au journal",
              sub: [
                "confirmé · réfuté",
                "non concluant"
              ]
            }
          }
        ],
        stack: [
          "Python 3.12",
          "Gymnasium",
          "Box2D",
          "Stable-Baselines3",
          "PyTorch",
          "pytest",
          "ruff"
        ],
        stackDetail: [
          {
            label: "Apprentissage",
            items: [
              "PPO · Stable-Baselines3 2.9",
              "MLP acteur-critique 2 × 64",
              "9 797 paramètres",
              "PyTorch CPU"
            ]
          },
          {
            label: "Simulation",
            items: [
              "Gymnasium 1.3 · LunarLander-v3",
              "Box2D",
              "16 environnements parallèles"
            ]
          },
          {
            label: "Expérience",
            items: [
              "5 wrappers de récompense",
              "config.json · versions et hash git",
              "Monitor CSV",
              "pandas · matplotlib"
            ]
          },
          {
            label: "Interface",
            items: [
              "Lander Studio · http.server + SSE",
              "HTML / JavaScript sans framework",
              "pygame · fenêtre de jeu",
              "moviepy · MP4"
            ]
          },
          {
            label: "Qualité",
            items: [
              "pytest · 51 tests",
              "ruff",
              "Agent d'audit en lecture seule"
            ]
          }
        ],
        metric: {
          value: "77 → 0 %",
          label: "Troncature, triche puis correction"
        }
      },
      {
        id: "fliplander",
        name: "Tesla Roadster rocket",
        short: "Tesla Roadster rocket",
        tagline: "Une voiture qui se retourne en l'air et se pose sur ses roues",
        period: "2026 à aujourd'hui",
        status: "En cours",
        statusTone: "wip",
        tracks: ["data", "industrial"],
        capsule: {
          problem: "Une voiture de 1,85 t quitte une boucle tête en bas à 10 m. Elle doit se retourner de 180° en vol avec 10 propulseurs à air comprimé, freiner et se poser sur ses quatre roues, sans vider son réservoir ni dépasser 3 g. Une démonstration prouve que ça marche une fois ; la vraie question est la robustesse.",
          solution: "Un simulateur MuJoCo 6 degrés de liberté construit depuis un fichier de configuration, un agent PPO entraîné par curriculum, et un contrôleur classique sur SO(3) comme adversaire honnête.",
          role: "Spécification, décisions de modélisation, revue de chaque jalon, QA et audit de sécurité. Code écrit avec Claude Code et validé par les tests.",
          stack: "Python · MuJoCo · Gymnasium · Stable-Baselines3 (PPO, SAC) · PyTorch · Railway",
          result: "Contrôleur classique : 83,1 % de succès sur 1 000 épisodes · PPO en cours d'entraînement, aucun chiffre publié avant 5 graines"
        },
        highlights: [
          "Physique écrite test d'abord : chute libre, conservation de l'énergie, impulsion des propulseurs, masse d'air (194,6 kg) et vidange du réservoir ont chacune leur test",
          "Réservoir modélisé physiquement : 600 L à 300 bar, poussée qui chute sous 40 bar, masse du véhicule mise à jour à mesure que l'air est consommé",
          "Contrôleur classique sur SO(3) avec allocation par moindres carrés bornés : de 0 % à 85,4 % sur le niveau nominal, la compensation du retard des vannes valant à elle seule +32 points",
          "Curriculum de 8 niveaux, du module droit au repos jusqu'à la séquence complète avec vent, erreurs de masse et propulseur en panne",
          "Échecs documentés et corrigés : un γ trop court rendait le vol stationnaire plus rentable qu'un atterrissage dur, et une moyenne de politique dérivait hors des bornes d'action"
        ],
        steps: [
          {
            step: "01",
            title: "Contexte",
            body: "Le prolongement en 3D du projet Lunar Lander, inspiré d'une démonstration publique de voiture qui se retourne en vol. Sur 2 dimensions et 2 moteurs, on passe à 6 degrés de liberté, 10 propulseurs avec retard de vanne, une ressource physique qui s'épuise et une contrainte humaine : l'occupant ne doit pas dépasser 3 g. Seuls trois chiffres publics sont repris ; tout le reste est une hypothèse d'ingénierie documentée."
          },
          {
            step: "02",
            title: "Contrainte",
            body: "Tête en bas, les quatre propulseurs de sustentation poussent la voiture vers le sol. Il faut donc se retourner avant de pouvoir freiner, en 0,7 s environ, sur un budget d'air qui ne permet que 4,9 s de vol stationnaire. Et un taux de succès appris ne veut rien dire sans un contrôleur d'ingénieur en face : c'est lui qui fixe la barre."
          },
          {
            step: "03",
            title: "Approche",
            body: "Le modèle MuJoCo est généré depuis un YAML, si bien que chaque paramètre se retrace jusqu'à sa source. L'observation n'utilise jamais d'angles d'Euler : rotation en représentation 6D, gravité dans le repère du véhicule, et jamais le temps, pour garder le problème markovien. La récompense est en potential-based shaping, avec le même γ que l'algorithme."
          },
          {
            step: "04",
            title: "Construction",
            body: "Environnement Gymnasium, curriculum à promotion sur 200 épisodes avec 20 % de rejeu des niveaux précédents, entraînement local ou sur Railway depuis une branche git dédiée par lot, synchronisation des artefacts sur S3. Environ 100 tests, CI avec ruff, mypy strict, bandit et pip-audit ; politiques exportées sans pickle."
          },
          {
            step: "05",
            title: "État actuel",
            body: "Le contrôleur classique est mesuré sur des graines réservées, 1 000 épisodes par niveau : 83,1 % en nominal, 38,0 % avec randomisation, 33,1 % avec un propulseur en panne, 22,5 % sur la séquence complète. PPO a déjà atteint 95 à 100 % sur certaines graines, mais pas de façon stable : le jalon impose 95 % sur 5 graines avec intervalles de confiance avant toute publication. Les lots v5a et v5b tournent."
          }
        ],
        figures: [
          {
            kind: "flow",
            no: "FIG. 01",
            title: "De la boucle au toucher : se retourner avant de freiner",
            alt: "Logigramme vertical : la montée dans la boucle est scriptée, la voiture est larguée tête en bas à 9,26 mètres et 6 mètres par seconde, l'agent la retourne de 180 degrés, la freine en suivant un profil de vitesse sûre, puis les critères d'atterrissage sont vérifiés. S'ils échouent, l'épisode est classé atterrissage dur, crash ou dépassement de 3 g. S'ils sont tenus, la voiture est posée sur ses quatre roues.",
            caption: "L'ordre n'est pas un choix de style. Tant que la voiture est inversée, les propulseurs de sustentation l'accélèrent vers le sol : freiner avant d'avoir retourné le véhicule aggrave la chute. Une des questions du projet est de savoir si l'agent découvre seul cette séquence.",
            nodes: [
              {
                title: "Montée scriptée",
                sub: "boucle R = 5 m · ventouses"
              },
              {
                title: "Largage inversé",
                sub: [
                  "9,26 m · 5,98 m/s",
                  "tangage 1,38 rad/s"
                ]
              },
              {
                title: "Retournement 180°",
                sub: "≈ 0,7 s · 14,6 kN·m"
              },
              {
                title: "Freinage",
                sub: "profil v_safe(h)"
              },
              {
                title: "Critères tenus ?",
                sub: [
                  "inclinaison < 8° · vz < 2 m/s",
                  "pic < 3 g"
                ],
                decision: true
              }
            ],
            exits: [
              {
                from: 4,
                edge: "non",
                title: "Échec classé",
                sub: [
                  "dur · crash · sur-g",
                  "sortie de zone"
                ],
                tone: "fault"
              }
            ],
            outcome: {
              title: "Posé sur 4 roues",
              sub: "stabilisé 1 s après le contact"
            }
          }
        ],
        stack: [
          "Python",
          "MuJoCo",
          "Gymnasium",
          "Stable-Baselines3",
          "PyTorch",
          "pydantic",
          "Docker",
          "Railway"
        ],
        stackDetail: [
          {
            label: "Simulation",
            items: [
              "MuJoCo ≥ 3.2 · 500 Hz",
              "Modèle généré depuis YAML",
              "Réservoir, vannes, traînée, vent",
              "Randomisation et pannes"
            ]
          },
          {
            label: "Apprentissage",
            items: [
              "PPO · Stable-Baselines3",
              "SAC en comparaison",
              "MLP 256 × 256",
              "VecNormalize",
              "Curriculum 8 niveaux"
            ]
          },
          {
            label: "Contrôle",
            items: [
              "Contrôle d'attitude sur SO(3)",
              "Allocation · scipy lsq_linear",
              "Planificateur de phases"
            ]
          },
          {
            label: "Infrastructure",
            items: [
              "Docker",
              "Railway",
              "Stockage compatible S3",
              "TensorBoard"
            ]
          },
          {
            label: "Qualité",
            items: [
              "pytest · ~100 tests",
              "ruff · mypy strict",
              "bandit · pip-audit",
              "GitHub Actions"
            ]
          }
        ],
        metric: {
          value: "83,1 %",
          label: "Référence classique, niveau nominal"
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
              "safran-rebranding",
              "controltorque"
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
              "safran-rebranding",
              "lunar-lander",
              "fliplander"
            ]
          },
          {
            name: "Apprentissage par renforcement",
            note: "PPO, reward shaping, curriculum",
            usedIn: [
              "lunar-lander",
              "fliplander"
            ]
          },
          {
            name: "SQL / PostgreSQL",
            usedIn: [
              "pharmacowork",
              "dashboard-enib",
              "controltorque"
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
          level: "Courant, écrit et oral"
        },
        {
          name: "Allemand",
          level: "B1 (Goethe-Institut)"
        }
      ]
    }
  },
  associative: {
    title: "Vie associative",
    intro: "Club AI Innovators, ENIB.",
    url: "https://aiinnovators.vercel.app/",
    linkLabel: "Voir le site du club",
    items: [
      {
        title: "Président",
        org: "Club AI Innovators, ENIB",
        period: "2025 à 2026",
        points: [
          "Direction stratégique du club : projets IA & Data pluridisciplinaires",
          "Organisation d'événements"
        ]
      },
      {
        title: "Responsable RH",
        org: "Club AI Innovators, ENIB",
        period: "2024 à 2025",
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
    intro: "Stage de fin d'études (PFE), six mois, à partir de février 2027. Ouvert aux opportunités en ingénierie industrielle, IA, données et automatisation des processus.",
    email: "tahaghadhab@gmail.com",
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
    title: "CV de Taha Ghadhab",
    intro: "Version texte, scannable, sans habillage.",
    printLabel: "Imprimer / PDF",
    backLabel: "Retour au site",
    sections: {
      profile: "Profil",
      education: "Formation",
      certifications: "Certifications",
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
