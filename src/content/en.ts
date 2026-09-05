import type { Content } from "./types";

/**
 * English content — mirrors `fr.ts` field for field.
 * Company and school names stay in their original form.
 */
export const en: Content = {
  meta: {
    title: "Taha Ghadhab — Industrial Engineering",
    description: "Portfolio of Taha Ghadhab, industrial engineering student: production systems optimisation, data and Industry 4.0. Safran, SMIP, AFC.",
    ogAlt: "Silent flight — Taha Ghadhab's portfolio"
  },
  nav: {
    sections: [
      {
        id: "vol",
        label: "Flight"
      },
      {
        id: "principe",
        label: "Principle"
      },
      {
        id: "methode",
        label: "Method",
        primary: true
      },
      {
        id: "experiences",
        label: "Experience",
        primary: true
      },
      {
        id: "projets",
        label: "Projects",
        primary: true
      },
      {
        id: "competences",
        label: "Skills",
        primary: true
      },
      {
        id: "parcours",
        label: "Education"
      },
      {
        id: "a-propos",
        label: "About"
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
    classicView: "Plain view",
    siteView: "Full view",
    downloadCv: "Resume PDF",
    skipToContent: "Skip to main content",
    langLabel: "Language",
    primaryNavLabel: "Primary navigation",
    sectionsNavLabel: "Sections",
    brandRole: "INDUSTRIAL ENGINEERING",
    menuLabel: "Menu",
    menuCloseLabel: "Close"
  },
  hero: {
    eyebrow: "Silent flight",
    name: "Taha Ghadhab",
    role: "Industrial engineering student",
    headline: "Watch first. Move once.",
    lede: "I isolate the governing constraint in a failing system, resolve it decisively, and engineer for permanence rather than maintenance.",
    tagline: "Analytical rigour, a taste for data, and the optimisation of production systems.",
    signature: "I don't just fix problems. I eliminate them for good, with tools built for the job.",
    stats: [
      {
        value: "3",
        unit: "",
        label: "industry internships"
      },
      {
        value: "1",
        unit: "",
        label: "startup co-founded"
      },
      {
        value: "4",
        unit: "",
        label: "projects built"
      }
    ],
    ctaPrimary: "See the work",
    ctaSecondary: "How I work",
    wordmark: "SILENT FLIGHT"
  },
  principle: {
    eyebrow: "THE PRINCIPLE",
    title: "Noise is a design failure",
    body: "A snowy owl flies in near silence because the leading edge of its wing is a comb of fine serrations. The teeth break one large vortex into many small ones, and small vortices carry almost no sound. Engineers copied it for wind-turbine blades and pantograph fairings.",
    figCaption: "FIG. 01 — WAKE STRUCTURE, PLAIN vs. SERRATED EDGE",
    figAlt: "Two airfoil edges compared. A plain edge sheds a large turbulent wake; a serrated edge splits the flow into fine parallel streams.",
    plainLabel: "PLAIN EDGE",
    plainWake: "TURBULENT WAKE — AUDIBLE",
    serratedLabel: "SERRATED EDGE",
    serratedWake: "FINE PARALLEL STREAMS — SILENT",
    notes: [
      "I keep coming back to this because it is the whole job in one picture. The plain edge is not lazy; it is doing the obvious thing. It still makes noise.",
      "The serrated edge does not fight the turbulence. It divides the problem until every piece is small enough to be harmless. That is decomposition, and it is what I do to a production line, a document flow, or a cost structure."
    ]
  },
  method: {
    title: "How I work",
    intro: "Listen first. Move once. An owl's ears sit at different heights on its skull, so it places a sound in three dimensions before committing instead of hunting by trial. These five steps run in that order on every assignment, from the shop floor to the control tower; they are what connects an OCR tool at Safran to an academic dashboard.",
    figure: {
      alt: "A five-station circuit: listen, stabilize, decompose, optimize, sustain. A return edge runs from the last station back to the first.",
      caption: "FIG. 02 — ONE PASS, THEN IT RUNS WITHOUT ME",
      returnLabel: ["The loop keeps running", "once I have left"]
    },
    steps: [
      {
        step: "01",
        title: "Listen",
        body: "Talk to the people inside the problem before touching anything. They already know where it hurts; they are rarely asked."
      },
      {
        step: "02",
        title: "Stabilize",
        body: "A temporary fix, sized to how critical the failure is. It buys the time to do the real work properly instead of under pressure."
      },
      {
        step: "03",
        title: "Decompose",
        body: "Break the system apart. Solve the independent pieces first, then the ones tangled together, never the reverse."
      },
      {
        step: "04",
        title: "Optimize",
        body: "Compare the candidates on quality against cost. Pick with math, not with taste, and be able to show the working."
      },
      {
        step: "05",
        title: "Sustain",
        body: "Manage the rollout so it holds during setup and keeps holding after handover. If it needs me in the room, it is not finished."
      }
    ]
  },
  about: {
    title: "About",
    lead: "Industrial engineering student at ENIB, drawn to systems that run better after I leave than before I arrived.",
    body: [
      "My territory is the point where an industrial process meets a software tool. At Safran, the question was never “how do we fix these non-compliant documents?” but “how do we stop them from arriving?” The answer took the form of a local OCR system that detects and actively corrects.",
      "That approach comes from a deliberately broad path: the methodological rigour of industrial engineering, the tooling of data work, and a business lens picked up in financial consulting. Three angles on one problem beat one angle applied three times."
    ],
    positioning: {
      title: "Three disciplines, one profile",
      figure: {
        alt: "Three equally sized discs overlapping at a single common point: industrial engineering, applied data and AI, business and entrepreneurship.",
        caption: "FIG. 03 — THREE DOMAINS, ONE INTERSECTION",
        centerLabel: "Here"
      },
      pillars: [
        {
          title: "Industrial engineering",
          body: "Lean, DMAIC, VSM, plant layout, PIC/PDP/MRP planning. Method before tooling."
        },
        {
          title: "Applied data & AI",
          body: "Python, SQL, Power BI, OCR, decision dashboards. Tooling in service of measurement."
        },
        {
          title: "Business & entrepreneurship",
          body: "Techno-economic studies, financial consulting, a co-founded startup. The gain, stated in decision-maker language."
        }
      ]
    }
  },
  education: {
    title: "Education",
    intro: "A scientific path, aimed at systems engineering.",
    items: [
      {
        degree: "Master's — Intelligent Complex Systems",
        school: "École Polytechnique de Tunisie (EPT)",
        period: "2026 — Present",
        location: "La Marsa",
        detail: "Modelling and control of complex systems, machine learning, decision support.",
        current: true
      },
      {
        degree: "National Engineering Degree — Industrial Engineering",
        school: "École Nationale d'Ingénieurs de Bizerte (ENIB)",
        period: "2024 — Present",
        location: "Bizerte",
        detail: "Production systems optimisation, Lean management, industrial planning, Industry 4.0.",
        current: true
      },
      {
        degree: "Preparatory cycle — Mathematics & Physics",
        school: "Faculty of Sciences of Tunis",
        period: "2021 — 2024",
        location: "Tunis",
        detail: "Intensive scientific training in mathematics and physics.",
        current: false
      },
      {
        degree: "Baccalaureate in Mathematics",
        school: "Awarded with distinction",
        period: "2021",
        current: false
      }
    ]
  },
  experience: {
    title: "Experience",
    intro: "Three industrial environments, one way in: find what is stuck, leave with something that holds.",
    inputLabel: "Input — problem identified",
    outputLabel: "Output — delivered",
    missionsLabel: "Assignments",
    toolsLabel: "Tools",
    immersionLabel: "Output — gained",
    detailsLabel: "Show detail",
    hideLabel: "Hide detail",
    items: [
      {
        id: "safran",
        short: "Safran",
        company: "Safran",
        fullName: "Safran",
        role: "Methods engineer",
        period: "June — July 2025",
        location: "Dhari",
        input: "Safran's acquisition of Zodiac left the old entity printed in the headers of thousands of manufacturing documents, with manual rework out of the question. Meanwhile, tightening-tool compliance was tracked with no dedicated system.",
        output: "A local OCR-assisted rebranding tool, with human validation and an audit log, plus a platform tracking tightening-tool compliance.",
        missions: [
          "Designed a local document-rebranding tool: Zodiac mentions detected in native text and in scanned pages alike, replaced under operator approval, with the source file never overwritten",
          "Built a platform tracking tightening-tool compliance, meeting aerospace safety standard requirements"
        ],
        tools: [
          "Python",
          "PyMuPDF",
          "OCR",
          "OpenCV",
          "Aerospace quality standards"
        ],
        hasDeliverable: true
      },
      {
        id: "smip",
        short: "SMIP",
        company: "SMIP",
        fullName: "Société de Maintenance et d'Installation Pétrolière",
        role: "Assistant engineer",
        period: "June — July 2025",
        location: "Les Berges du Lac, Tunisia",
        input: "A heavy investment decision that needed to be argued on hard numbers: acquiring a coiled-tubing unit.",
        output: "A full techno-economic study supporting the acquisition decision.",
        missions: [
          "Techno-economic study for the acquisition of a coiled-tubing unit",
          "Immersion in HSE concerns and oil-sector safety standards"
        ],
        tools: [
          "Techno-economic study",
          "HSE",
          "Oil-sector standards"
        ],
        hasDeliverable: true
      },
      {
        id: "afc",
        short: "AFC",
        company: "AFC",
        fullName: "Arab Financial Consultants",
        role: "Trainee consultant",
        period: "August — September 2025",
        location: "Les Berges du Lac, Tunisia",
        input: "A purely technical reading of industrial projects, without the vocabulary or the criteria of the financial decision-maker.",
        output: "A financial lens on systems: translating an engineering gain into an investment argument.",
        missions: [
          "Immersion in a financial consulting environment",
          "Developed analytical rigour and an understanding of financial systems"
        ],
        tools: [
          "Consulting",
          "Financial analysis"
        ],
        hasDeliverable: false
      }
    ]
  },
  projects: {
    title: "Projects",
    intro: "Four systems built to solve a specific problem, from aerospace documentation to plant layout.",
    openLabel: "Open",
    detailsLabel: "Show detail",
    hideLabel: "Hide detail",
    siteLabel: "Visit site",
    closeLabel: "Close",
    stackLabel: "Stack",
    stepsLabel: "Inspection sequence",
    items: [
      {
        id: "safran-rebranding",
        name: "Zodiac → Safran document rebranding",
        short: "Safran rebranding",
        tagline: "Brand detection and replacement across thousands of manufacturing documents",
        period: "2025",
        status: "Delivered",
        summary: "After Safran acquired Zodiac Aerospace, thousands of manufacturing dossiers, CAD sheets and work orders still carried the old entity in their headers and footers. The tool finds those mentions whatever their encoding inside the PDF, replaces them without damaging what surrounds them, and applies nothing without an operator's approval.",
        highlights: [
          "Five encodings behind one visible header: native text, Form XObjects from CAD exports, text vectorised into curves, raster scans, and bitmap logos",
          "Four-level hierarchical matching, tolerant of OCR noise (Z0DIAC read for ZODIAC); adding a containment test took detection from 0 to 18 occurrences out of 18",
          "Minimal-bounding-box replacement: only the offending mention is wiped, the neighbouring dossier reference in the same block survives",
          "On scans, the background is sampled at the median RGB around the zone, so the patch stays invisible on yellowed paper",
          "Occurrence-by-occurrence human validation and an audit log: in aerospace documentation, an untraced modification is an unacceptable one"
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
            label: "PDF engine",
            items: [
              "PyMuPDF (fitz)",
              "Spans, fonts, colours",
              "Form XObject streams",
              "300 DPI rendering"
            ]
          },
          {
            label: "Recognition",
            items: [
              "Tesseract 5 — fra+eng",
              "PaddleOCR 3.6 — DBNet + CRNN",
              "TrOCR — handwritten notes"
            ]
          },
          {
            label: "Vision",
            items: [
              "OpenCV 4.10 headless",
              "Deskew, contrast, denoise",
              "Logo template matching",
              "Pillow",
              "NumPy"
            ]
          },
          {
            label: "Interface",
            items: [
              "PySide6 — MVVM, QThread",
              "Tkinter — production tool",
              "Per-occurrence preview and approval"
            ]
          },
          {
            label: "Traceability",
            items: [
              "SQLite — 5 tables",
              "Append-only audit log",
              "Automated quality gate"
            ]
          },
          {
            label: "Quality",
            items: [
              "pytest — 210 unit tests",
              "pytest-qt",
              "black",
              "flake8"
            ]
          }
        ],
        metric: {
          value: "18/18",
          label: "Occurrences detected"
        }
      },
      {
        id: "pharmacowork",
        name: "PharmacoWork",
        short: "PharmacoWork",
        url: "https://pharmacowork.fr",
        tagline: "The pharmacy's internal workspace",
        period: "2025 — Present",
        status: "Pilot",
        summary: "Pharmacy management software handles sales, stock and billing, not what moves between people. Who is preparing which prescription, who owes a patient a call, which quality check is overdue: that gap is filled today with sticky notes, a shared notebook and a WhatsApp group, the last of which carries patient names on personal phones, outside any regulatory frame. Co-founded to occupy that gap and nothing else: eleven modules, built mobile-first because the job is done standing at the counter. It replaces neither the management software, nor the till, nor the legal prescription register.",
        highlights: [
          "Eleven modules end to end: ~80 screens, ~180 API routes, 41 data models",
          "Strict tenancy: every row carries its officineId, every query is filtered on it",
          "Passwordless sign-in by magic link, with a mandatory second factor for pharmacy owners",
          "Patient identities encrypted at rest, search preserved by HMAC index: no plaintext name server-side",
          "Data purge that can be dry-run before activation, with a log of what it would have deleted",
          "Prescription access traced, and readable by the pharmacy owner"
        ],
        steps: [
          {
            step: "01",
            title: "Bound the gap",
            body: "Pharmacy software stops at the sale. Preparations, callbacks, stock-outs and quality checks have no tool, so they have WhatsApp. The first job was to bound that gap without encroaching on what already works: not the till, not the legal register."
          },
          {
            step: "02",
            title: "Partition",
            body: "One pharmacy is one tenant. Isolation is not a view laid over the data: every row carries its officineId and every query is filtered on it, down at the core. That is the only way the promise holds once forty-one models refer to one another."
          },
          {
            step: "03",
            title: "Hold the patient data",
            body: "A patient's name must never be readable server-side, and yet the team has to be able to search. Identities are encrypted at rest and indexed by HMAC: search works, the plaintext name exists nowhere. Prescription access is traced, and the pharmacy owner can read the trail back."
          },
          {
            step: "04",
            title: "Make the security checkable",
            body: "A purge policy nobody can verify is worth nothing: this one is dry-run before activation and leaves the log of what it would have deleted. Sixty-three test suites run on every commit, and the August 2026 security audit was cleared in three waves."
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
              "Per-pharmacy multi-tenancy"
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
              "Hand-rolled service worker"
            ]
          },
          {
            label: "Security",
            items: [
              "JWT + magic link",
              "Hand-rolled TOTP HMAC-SHA256",
              "AES-256-GCM at rest",
              "HMAC patient-name index",
              "Helmet 8",
              "Throttling",
              "Per-request CSP nonce"
            ]
          },
          {
            label: "Services",
            items: [
              "S3 — presigned URLs",
              "Resend / SMTP",
              "Web push VAPID",
              "Mistral OCR",
              "ffmpeg worker",
              "Crons + advisory locks"
            ]
          },
          {
            label: "Infrastructure",
            items: [
              "Railway",
              "Multi-stage Docker",
              "node:22-alpine",
              "GitHub Actions",
              "BDPM import"
            ]
          },
          {
            label: "Quality",
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
        tagline: "Decision support for plant layout",
        period: "2025 — 2026",
        status: "In progress",
        summary: "A decision-support application for workshop layout: it groups machines into coherent production cells and scores each candidate layout on measurable industrial criteria.",
        highlights: [
          "King's method (Rank Order Clustering) to form production cells",
          "Chain-based optimisation algorithms",
          "Industrial indicators: traffic, connectivity, optimality ratio"
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
          label: "King's method"
        },
        url: "https://machine-layout-solver.vercel.app/"
      },
      {
        id: "dashboard-enib",
        name: "Academic Performance Dashboard",
        short: "ENIB Dashboard",
        tagline: "Full-stack web platform — ENIB",
        period: "2025 — 2026",
        status: "In progress",
        summary: "A steering platform for ENIB's academic performance: it centralises tracking indicators, fires automatic alerts on drift, and makes student satisfaction readable at a glance.",
        highlights: [
          "42 KPIs tracking academic performance",
          "Automated alert system on critical thresholds",
          "Interactive visualisations and student satisfaction tracking"
        ],
        stack: [
          "React",
          "Supabase",
          "SQL",
          "Power BI"
        ],
        metric: {
          value: "42",
          label: "KPIs tracked"
        }
      }
    ]
  },
  skills: {
    title: "Skills",
    intro: "Rather than a percentage I would award myself, here is where each skill was actually used. Under each line, the deployments that prove it.",
    matrix: {
      deploymentsLabel: "Deployments",
      legend: "Lit cell = skill applied on that ground",
      countLabel: "grounds",
      cellLabel: "{skill} applied on {deployment}",
      emptyHint: "Hover a row or a column to isolate one crossing."
    },
    groups: [
      {
        id: "industriel",
        domain: "Industrial",
        skills: [
          {
            name: "Lean & continuous improvement",
            note: "DMAIC, PDCA, VSM, Ishikawa",
            usedIn: [
              "safran",
              "dashboard-enib"
            ]
          },
          {
            name: "Planning & scheduling",
            note: "PIC, PDP, MRP, MS Project, ERP",
            usedIn: [
              "smip",
              "pharmacowork"
            ]
          },
          {
            name: "Plant layout",
            usedIn: [
              "machine-layout"
            ]
          },
          {
            name: "Process control",
            usedIn: [
              "safran",
              "pharmacowork",
              "machine-layout",
              "safran-rebranding"
            ]
          },
          {
            name: "Techno-economic studies",
            usedIn: [
              "smip",
              "afc"
            ]
          }
        ]
      },
      {
        id: "technique",
        domain: "Technical",
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
        "Leadership & team management",
        "Multicultural teamwork",
        "Public speaking"
      ]
    },
    languages: {
      title: "Languages",
      items: [
        {
          name: "Arabic",
          level: "Native"
        },
        {
          name: "French",
          level: "Fluent"
        },
        {
          name: "English",
          level: "Fluent"
        }
      ]
    }
  },
  associative: {
    title: "Student leadership",
    intro: "AI Innovators Club — ENIB.",
    items: [
      {
        title: "President",
        org: "AI Innovators Club — ENIB",
        period: "2025 — 2026",
        points: [
          "Strategic direction of the club: cross-disciplinary AI & data projects",
          "Event organisation"
        ]
      },
      {
        title: "Head of HR",
        org: "AI Innovators Club — ENIB",
        period: "2024 — 2025",
        points: [
          "Managed internal recruitment",
          "Onboarded new members"
        ]
      }
    ]
  },
  interests: {
    title: "Interests",
    items: [
      "Industry 4.0",
      "Applied AI",
      "Entrepreneurship",
      "Strength training & sport",
      "Student leadership",
      "Business & strategy"
    ]
  },
  contact: {
    title: "Contact",
    intro: "Open to internship and apprenticeship opportunities in industrial engineering, data and Industry 4.0.",
    email: "taha.ghadhab@enib.ucar.tn",
    phone: "+216 54 347 150",
    linkedin: "https://www.linkedin.com/in/taha-ghadhab",
    linkedinLabel: "linkedin.com/in/taha-ghadhab",
    location: "Tunisia",
    emailLabel: "Email",
    phoneLabel: "Phone",
    locationLabel: "Location",
    cvLabel: "Download resume as PDF",
    cvHint: "Print-ready, one click."
  },
  classic: {
    title: "Resume — Taha Ghadhab",
    intro: "Plain text version, scannable, no styling.",
    printLabel: "Print / PDF",
    backLabel: "Back to the site",
    sections: {
      profile: "Profile",
      education: "Education",
      experience: "Professional experience",
      projects: "Technical & industrial projects",
      skills: "Skills",
      associative: "Student leadership",
      languages: "Languages",
      interests: "Interests",
      contact: "Contact"
    }
  },
  footer: {
    builtWith: "Designed and built by Taha Ghadhab",
    rights: "All rights reserved."
  }
};
