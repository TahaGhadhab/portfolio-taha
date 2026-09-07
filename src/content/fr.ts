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
        value: "5",
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
    intro: "Écouter d'abord. N'agir qu'une fois. Les oreilles d'une chouette sont placées à des hauteurs différentes sur son crâne : elle situe un son en trois dimensions avant de s'engager, au lieu de chasser à l'essai. Ces cinq étapes se déroulent dans cet ordre sur chaque mission, du terrain jusqu'au pilotage ; c'est ce qui relie un OCR chez Safran à un tableau de bord académique.",
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
      "Mon terrain de jeu, c'est l'endroit où un processus industriel rencontre un outil logiciel. Chez Safran, la question n'était pas « comment corriger ces documents non conformes ? » mais « comment faire pour qu'ils cessent d'arriver ? ». La réponse a pris la forme d'un OCR local qui détecte et corrige activement.",
      "Cette approche vient d'une trajectoire volontairement large : la rigueur méthodologique de l'ingénierie industrielle, les outils de la data, et une lecture business acquise en conseil financier. Trois angles sur le même problème valent mieux qu'un seul, appliqué trois fois."
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
        degree: "Mastère en systèmes complexes intelligents",
        school: "École Polytechnique de Tunisie (EPT)",
        period: "2026 à aujourd'hui",
        location: "La Marsa",
        detail: "Modélisation et pilotage des systèmes complexes, apprentissage automatique, aide à la décision.",
        current: true
      },
      {
        degree: "Diplôme National d'Ingénieur en génie industriel",
        school: "École Nationale d'Ingénieurs de Bizerte (ENIB)",
        period: "2024 à aujourd'hui",
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
    ]
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
    items: [
      {
        id: "safran",
        short: "Safran",
        company: "Safran",
        fullName: "Safran",
        role: "Ingénieur méthode",
        period: "1er juin au 24 juillet 2026",
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
    intro: "Cinq systèmes construits pour résoudre un problème précis, de la documentation aéronautique à l'implantation d'atelier.",
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
          problem: "Après le rachat de Zodiac, des milliers de dossiers de fabrication portaient encore l'ancienne entité en en-tête et en pied. Et un PDF range cette même ligne visible de cinq façons différentes.",
          solution: "Un outil de bureau qui retrouve chaque mention quel que soit son encodage, la remplace sans abîmer ce qui l'entoure, et n'écrit rien sans l'accord d'un opérateur.",
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
        summary: "Sur une ligne d'assemblage, un serrage se contrôle contre un couple cible et une tolérance. La preuve de ce contrôle vivait dans des relevés papier et des tableurs. ControlTorque enregistre chaque contrôle comme une ligne immuable portant son propre calcul, refuse celui qui serait pris avec un couplemètre hors étalonnage, et ouvre une fiche de non-conformité suivie dès qu'une mesure sort de ses bornes.",
        capsule: {
          problem: "La preuve qu'un serrage avait été contrôlé vivait dans des relevés papier et des tableurs : introuvable, inauditable, et impossible à croire des années après.",
          solution: "Une application web où chaque contrôle est un enregistrement immuable portant son propre calcul, et où un résultat non conforme ouvre une fiche suivie plutôt qu'une note.",
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
        tagline: "Application web fullstack de pilotage, ENIB",
        period: "2025 à 2026",
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
              "safran-rebranding"
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
          level: "Courant"
        }
      ]
    }
  },
  associative: {
    title: "Vie associative",
    intro: "Club AI Innovators, ENIB.",
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
    title: "CV de Taha Ghadhab",
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
