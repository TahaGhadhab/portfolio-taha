import type { Content } from "./types";

/**
 * English content — mirrors `fr.ts` field for field.
 * Company and school names stay in their original form.
 */
export const en: Content = {
  meta: {
    title: "Taha Ghadhab, industrial engineering",
    description: "Portfolio of Taha Ghadhab, industrial engineering student: production systems optimisation, data and Industry 4.0. Safran, SMIP, AFC.",
    ogAlt: "Silent flight, Taha Ghadhab's portfolio"
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
        value: "7",
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
    figCaption: "FIG. 01 · WAKE STRUCTURE, PLAIN vs. SERRATED EDGE",
    figAlt: "Two airfoil edges compared. A plain edge sheds a large turbulent wake; a serrated edge splits the flow into fine parallel streams.",
    plainLabel: "PLAIN EDGE",
    plainWake: "TURBULENT WAKE · AUDIBLE",
    serratedLabel: "SERRATED EDGE",
    serratedWake: "FINE PARALLEL STREAMS · SILENT",
    notes: [
      "I keep coming back to this because it is the whole job in one picture. The plain edge is not lazy; it is doing the obvious thing. It still makes noise.",
      "The serrated edge does not fight the turbulence. It divides the problem until every piece is small enough to be harmless. That is decomposition, and it is what I do to a production line, a document flow, or a cost structure."
    ]
  },
  method: {
    title: "How I work",
    intro: "Listen first. Move once. Five stations, always in that order, from the shop floor to the control tower.",
    figure: {
      alt: "A five-station circuit: listen, stabilize, decompose, optimize, sustain. A return edge runs from the last station back to the first.",
      caption: "FIG. 02 · ONE PASS, THEN IT RUNS WITHOUT ME",
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
      "My territory is the point where an industrial process meets a software tool. At Safran, the question was never “how do we fix these non-compliant documents?” but “how do we stop them from arriving?” The answer took the form of a local OCR system that detects and actively corrects."
    ],
    positioning: {
      title: "Three disciplines, one profile",
      figure: {
        alt: "Three equally sized discs overlapping at a single common point: industrial engineering, applied data and AI, business and entrepreneurship.",
        caption: "FIG. 03 · THREE DOMAINS, ONE INTERSECTION",
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
        degree: "Research Master's in Intelligent Complex Systems, dual degree",
        school: "École Polytechnique de Tunisie (EPT)",
        period: "2026 to 2027",
        location: "La Marsa",
        detail: "Artificial intelligence, advanced robotics and intelligent transport, embedded systems, optimal control, system identification.",
        current: true
      },
      {
        degree: "National Engineering Degree in Industrial Engineering",
        school: "École Nationale d'Ingénieurs de Bizerte (ENIB)",
        period: "2024 to 2027",
        location: "Bizerte",
        detail: "Production systems optimisation, Lean management, industrial planning, Industry 4.0.",
        current: true
      },
      {
        degree: "Preparatory cycle in Mathematics & Physics",
        school: "Faculty of Sciences of Tunis",
        period: "2021 to 2024",
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
    ],
    certifications: {
      title: "Certifications",
      issuer: "Claude Academy · Anthropic",
      verifyLabel: "Verify",
      items: [
        {
          name: "AI Fluency: Framework & Foundations",
          meta: "4 h · 14 lessons",
          body: "Training on the 4D framework (Delegation, Description, Discernment, Diligence) for working with generative AI effectively, ethically and safely. Covers how large language models work, task delegation strategies, and the critical evaluation of AI output.",
          url: "https://academy.claude.com/verify/e3dbdaa15e6b6866a90f56dabc6a4fac"
        },
        {
          name: "AI Capabilities and Limitations",
          meta: "3.5 h · 13 lessons",
          body: "Building a rigorous mental model of how large language models operate: next-token prediction, the limits of knowledge and working memory (the context window), and how reliably they follow instructions. Aimed at diagnosing AI failures and calibrating trust to the kind of task at hand.",
          url: "https://academy.claude.com/verify/8eb5d609652f479c1e0b3bab3c844a32"
        },
        {
          name: "Building Effective Human Agent Teams (Beta)",
          meta: "45 min · 5 lessons",
          body: "An introduction to moving from AI as an individual assistant to AI agents working inside a team. Sets out the four principles of a sound human-agent team: clear roles, a written shared goal, gradual rollout, and controlled access to information.",
          url: "https://academy.claude.com/verify/18fd7cf214b2721852eb621e42bdd57f"
        }
      ]
    }
  },
  experience: {
    title: "Experience",
    intro: "Three industrial environments, one way in: find what is stuck, leave with something that holds.",
    inputLabel: "Input · problem identified",
    outputLabel: "Output · delivered",
    missionsLabel: "Assignments",
    toolsLabel: "Tools",
    immersionLabel: "Output · gained",
    detailsLabel: "Show detail",
    hideLabel: "Hide detail",
    expandAllLabel: "Expand all",
    collapseAllLabel: "Collapse all",
    items: [
      {
        id: "safran",
        short: "Safran",
        company: "Safran",
        fullName: "Safran",
        role: "Methods engineer",
        period: "1 June to 24 July 2026",
        location: "Dhari",
        input: "The old entity is still printed across thousands of manufacturing documents, with manual rework out of the question. In parallel, torque tool compliance is tracked with no dedicated system.",
        output: "A local OCR-assisted rebranding tool, with human validation and an audit log, plus a platform tracking tightening-tool compliance.",
        missions: [
          "Digitised a production control: paper-based torque checks across 19 cells replaced by a traceability application; measurements received directly from over half of the 18 torque wrenches, tools identified by barcode, out-of-calibration tools blocked, corrections validated by the supervisor; 8 business rules, 58 unit tests; check time reduced from 60–120 s to 30 s",
          "Automated a document workflow with AI (OpenCV, PaddleOCR, Tesseract, PyMuPDF): 100 % of marks detected across 73 documents, zero false positives, processing time reduced from 30–60 min to about 3 min, 210 unit tests",
          "Daily collaboration with quality, methods, and shop-floor operators"
        ],
        tools: [
          "Python",
          "PyMuPDF",
          "PaddleOCR",
          "Tesseract",
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
        period: "June to July 2025",
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
        period: "August to September 2025",
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
    intro: "Seven systems built to solve a specific problem, from aerospace documentation to reinforcement learning.",
    openLabel: "Open",
    detailsLabel: "Show detail",
    hideLabel: "Hide detail",
    siteLabel: "Visit site",
    closeLabel: "Close",
    stackLabel: "Stack",
    stepsLabel: "Inspection sequence",
    capsule: {
      problem: "Problem",
      solution: "Solution",
      role: "Role",
      stack: "Stack",
      result: "Result"
    },
    caseLabel: "Case study",
    stackStepNo: "06",
    expandAllLabel: "Expand all",
    collapseAllLabel: "Collapse all",
    grid: {
      label: "Project index",
      filterLabel: "Filter by field",
      allLabel: "All",
      countLabel: "{n} projects",
      openLabel: "Go to {name}",
      emptyLabel: "No project in this field."
    },
    tracks: {
      industrial: "Industrial",
      data: "Data & AI",
      business: "Business"
    },
    statuses: {
      done: "Delivered",
      pilot: "Pilot",
      wip: "In progress"
    },
    items: [
      {
        id: "safran-rebranding",
        name: "Zodiac → Safran document rebranding",
        short: "Safran rebranding",
        tagline: "Brand detection and replacement across thousands of manufacturing documents",
        period: "2025",
        status: "Delivered",
        statusTone: "done",
        tracks: ["data", "industrial"],
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
              "Tesseract 5 · fra+eng",
              "PaddleOCR 3.6 · DBNet + CRNN",
              "TrOCR · handwritten notes"
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
              "PySide6 · MVVM, QThread",
              "Tkinter · production tool",
              "Per-occurrence preview and approval"
            ]
          },
          {
            label: "Traceability",
            items: [
              "SQLite · 5 tables",
              "Append-only audit log",
              "Automated quality gate"
            ]
          },
          {
            label: "Quality",
            items: [
              "pytest · 210 unit tests",
              "pytest-qt",
              "black",
              "flake8"
            ]
          }
        ],
        capsule: {
          problem: "Thousands of manufacturing dossiers still carried Zodiac in their headers. And a PDF stores that one visible line in five different ways.",
          solution: "A desktop tool that finds them whatever the encoding, replaces them without damaging their surroundings, and writes nothing without human approval.",
          role: "Sole developer: problem framing, architecture, algorithms, interface, tests.",
          stack: "Python 3.12 · PyMuPDF · Tesseract · PaddleOCR · OpenCV · PySide6 · SQLite",
          result: "18/18 occurrences on the reference document · 210 unit tests · ≈ 19 300 LOC"
        },
        steps: [
          {
            step: "01",
            title: "Context",
            body: "Zodiac Aerospace became Safran Electronics & Defense. The brand changed on the letterhead; it did not change inside the thousands of PDFs already issued: manufacturing dossiers, CAD sheets, work orders, all still naming an entity that no longer exists."
          },
          {
            step: "02",
            title: "Constraint",
            body: "Aerospace documentation is auditable. A silent modification is worse than no modification: whoever opens the file in five years has to be able to know what it said before, who changed it, and when. And a header is never alone on its line: the dossier reference beside it has to survive untouched."
          },
          {
            step: "03",
            title: "Approach",
            body: "Read the file before rewriting it. One visible header exists as native text, as a Form XObject from a CAD export, as curves holding no characters at all, as a raster scan, or as a bitmap logo. Five encodings, five recovery techniques, and not one of them covers the others. Hence three extraction passes, an unconditional OCR fallback, and a matcher tolerant of what OCR gets wrong."
          },
          {
            step: "04",
            title: "Build",
            body: "Two programs. A layered PySide6 application (≈ 12 900 LOC) where every arrow points at a framework-free domain, and a deliberately flat production tool (≈ 4 900 LOC) whose engine imports no graphics code and stays driveable from the command line. Between them one SQLite schema: pending modifications, an append-only change log, quality reports."
          },
          {
            step: "05",
            title: "Result",
            body: "18 occurrences out of 18 on the 17-page reference document, up from 0 out of 16 before the containment level was added. 210 unit tests run without a Qt event loop or a PDF on disk. The logo detector is the one part that did not work: template correlation peaks at 0.568 against a 0.65 threshold at every scale tested. Measured, reported, not hidden."
          }
        ],
        figures: [
          {
            kind: "flow",
            no: "FIG. 01",
            title: "From source PDF to reissued file",
            alt: "Vertical flowchart: the source PDF is classified as native or scanned, each page is zoned into header and footer, text is extracted in three passes, the VariantMatcher returns occurrences, an operator validates each one, replacement and a quality gate follow, and a new file is written. Skipping an occurrence writes nothing; every decision is appended to the change log.",
            caption: "The chamfered station is the only path to writing. Modifications are created PENDING and the PDF stays untouched until apply_modifications() is called, so an occurrence that is skipped costs nothing, but still leaves a line in the log.",
            nodes: [
              {
                title: "Source PDF",
                sub: "never overwritten"
              },
              {
                title: "Classification",
                sub: "< 50 chars/page → scanned"
              },
              {
                title: "Header + footer zoning",
                sub: "top 30% · bottom 15%"
              },
              {
                title: "Extraction",
                sub: [
                  "3 passes over the stream",
                  "unconditional OCR fallback"
                ]
              },
              {
                title: "VariantMatcher",
                sub: "4 levels · fig. 02"
              },
              {
                title: "Operator validation",
                sub: "one occurrence at a time",
                decision: true
              },
              {
                title: "Replacement",
                sub: "auto | precise · fig. 03"
              },
              {
                title: "Quality gate",
                sub: [
                  "4 checks",
                  "score from 0 to 1"
                ]
              }
            ],
            exits: [
              {
                from: 5,
                edge: "skip",
                title: "Nothing written",
                sub: "next occurrence",
                tone: "fault"
              },
              {
                from: 6,
                edge: "trace",
                title: "change_log",
                sub: [
                  "append-only",
                  "who · when · what"
                ]
              }
            ],
            outcome: {
              title: "*_safran.pdf",
              sub: "a new file, not the source"
            }
          },
          {
            kind: "ladder",
            no: "FIG. 02",
            title: "Four levels tried in order: the first to answer wins",
            alt: "Decision ladder: the normalised text is computed once, then four matching levels are tried in order: exact, deep, contain, fuzzy. Each returns a score when it answers and falls through to the next when it does not. The third level, containment, is highlighted as the one that took detection from zero out of sixteen to eighteen out of eighteen.",
            caption: "Why contain comes before fuzzy. A real header reads « ZODIAC AERO ELECTRIC DOSSIER FABRICATION REF SAQ172_ »: measured against the pattern alone, the edit distance is dominated by the surrounding text and the ratio collapses. Containment answers 1.0 without ambiguity whenever it applies, so it has to be asked first.",
            input: {
              title: "normalize_text(ocr_normalize(text))",
              sub: "computed once, outside the pattern loop"
            },
            levels: [
              {
                no: "LEVEL 1",
                name: "exact",
                test: "case, accents, spaces",
                hit: "score 1.0",
                note: "clean native text"
              },
              {
                no: "LEVEL 2",
                name: "deep",
                test: "OCR substitutions",
                hit: "score 1.0",
                note: "Z0DIAC → ZODIAC"
              },
              {
                no: "LEVEL 3 · DECISIVE",
                name: "contain",
                test: "pattern ⊂ normalised text",
                hit: "score 1.0",
                note: "0/16 → 18/18",
                key: true
              },
              {
                no: "LEVEL 4",
                name: "fuzzy",
                test: "Levenshtein ratio ≥ cutoff",
                hit: "score = ratio",
                note: "degraded scans"
              }
            ],
            failLabel: "no match",
            none: "no occurrence"
          },
          {
            kind: "bands",
            no: "FIG. 03",
            title: "auto against precise: the width of one mask",
            alt: "Three stacked strips. The first shows the detected header block, holding the Zodiac mention on the left and a dossier reference on the right. The second shows auto mode masking the whole block width and destroying the reference. The third shows precise mode masking only the Zodiac zone, leaving the reference readable.",
            caption: "The only difference between the two modes is how wide the white patch is drawn, and that difference destroys or preserves the dossier reference sitting in the same block. precise measures the minimal bounding box from the spans that actually contain the mention, and falls back to the block box only when none is found.",
            rows: [
              {
                label: "BEFORE · DETECTED HEADER BLOCK",
                left: "ZODIAC AERO ELECTRIC",
                right: "DOSSIER FAB. REF SAQ172_",
                mask: "none"
              },
              {
                label: "AUTO · MASK OVER THE WHOLE BLOCK",
                left: "SAFRAN ELECTRONICS & DEFENSE",
                mask: "wide",
                tone: "fault",
                note: "the neighbouring dossier reference is destroyed"
              },
              {
                label: "PRECISE · MINIMAL BBOX COMPUTED",
                left: "SAFRAN ELEC. & DEF.",
                right: "DOSSIER FAB. REF SAQ172_",
                mask: "narrow",
                tone: "ok",
                note: "the reference survives untouched"
              }
            ]
          }
        ],
        metric: {
          value: "18/18",
          label: "Occurrences detected"
        }
      },
      {
        id: "controltorque",
        name: "ControlTorque: torque tool traceability",
        short: "ControlTorque",
        tagline: "Proving a tightening was checked, years after the fact",
        period: "2025",
        status: "Delivered",
        statusTone: "done",
        tracks: ["industrial", "data"],
        capsule: {
          problem: "The proof that a tightening had been checked lived in paper logs and spreadsheets: unsearchable, unauditable, and impossible to trust years later.",
          solution: "A web application where each check is an immutable record carrying its calculation, and where an out-of-bounds measurement opens a tracked file.",
          role: "Sole developer: business rules, backend, frontend, data model.",
          stack: "Angular 13 · Spring Boot 2.7 · Java 8 · Hibernate · SQL Server · JWT",
          result: "8 business rules enforced server-side · 11 entities · 1 append-only event log"
        },
        highlights: [
          "Eight business rules, all enforced server-side: the frontend mirrors them for input comfort, it never enforces them",
          "The operator's identity is read from the JWT on every request, never from the request body; recording a check under a colleague's name is not possible",
          "A check taken with an expired calibration is refused with a 400 rather than stored: a check with no probative value is more dangerous than no check, because it looks like conformity",
          "Tolerance, its source and both bounds are frozen into the record, and the tool and torquemeter references are copied as plain strings rather than linked, so an auditor can replay the calculation years later even if the manufacturing range has been revised since",
          "control_checks is INSERT ONLY, every nonconformity decision is appended to an event log, and a closed file has no allowed transition back"
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
              "10 HTTP services"
            ]
          },
          {
            label: "Backend",
            items: [
              "Spring Boot 2.7.18",
              "11 controllers · 14 services",
              "@Transactional",
              "GlobalExceptionHandler"
            ]
          },
          {
            label: "Domain",
            items: [
              "ConformityService · BigDecimal",
              "CalibrationService",
              "NonconformityService",
              "8 business rules"
            ]
          },
          {
            label: "Persistence",
            items: [
              "Hibernate 5.6 · 11 entities",
              "H2 in development",
              "SQL Server in production",
              "Filtered queries, pagination"
            ]
          },
          {
            label: "Security",
            items: [
              "JWT HS256 · 8 h",
              "BCrypt, cost 12",
              "2 roles: OPERATOR, ADMIN",
              "Single-origin CORS"
            ]
          }
        ],
        steps: [
          {
            step: "01",
            title: "Context",
            body: "On an assembly line, a torque tightening is checked against a target value and a tolerance. The check itself takes seconds; proving it happened, under which conditions and by whom, is the part that has to survive an audit years later. And that part was living on paper."
          },
          {
            step: "02",
            title: "Constraint",
            body: "Everything that matters has to hold even against the person using it. An operator must not be able to record a check under someone else's name, to hand the server a verdict it did not compute, or to alter a check after the fact. And a tool whose calibration has lapsed has to stop production rather than decorate it."
          },
          {
            step: "03",
            title: "Approach",
            body: "Put every decision in one layer, and leave it no way around. The verdict is recomputed server-side from the target and the measurement; the operator's id is read from the token, never from the body; the timestamp comes from the database. The frontend mirrors the rules so entry stays comfortable, and enforces none of them."
          },
          {
            step: "04",
            title: "Build",
            body: "An Angular SPA over a stateless Spring Boot backend: 11 controllers, 14 services, 11 JPA entities, and no JPA entity ever reaching the client. Two rules got a service of their own: conformity, computed in BigDecimal because binary rounding has no place in an aerospace quality file, and calibration, which can refuse a request outright."
          },
          {
            step: "05",
            title: "Result",
            body: "Eight business rules, all server-side. A check carries its own tolerance, its source and both bounds, and copies the tool and torquemeter references as plain strings, so the record still says under exactly which conditions that tightening was validated, even after the range is revised. One limit, stated rather than hidden: immutability is guaranteed by the application, not by the database, so direct SQL access would bypass it."
          }
        ],
        figures: [
          {
            kind: "flow",
            no: "FIG. 01",
            title: "What one torque check has to survive",
            alt: "Vertical flowchart of a POST to the controls endpoint: the user is read from the JWT, references are resolved, the torquemeter is read, conformity is computed, the record is inserted, and a 201 is returned. Unknown references exit with a 404, an expired calibration exits with a 400, and a non-conforming result opens a nonconformity file.",
            caption: "The refusal is deliberate. A torquemeter whose calibration has lapsed fails the request rather than producing a record: a check with no probative value is more dangerous than a missing one, because it looks like conformity. An unknown due date, by contrast, does not block production: it is simply recorded as it stands.",
            nodes: [
              {
                title: "POST /api/controls",
                sub: "one torque check"
              },
              {
                title: "user ← JWT",
                sub: "user_id in body ignored"
              },
              {
                title: "Reference resolution",
                sub: "ToolType · COI · cell"
              },
              {
                title: "Torquemeter read",
                sub: "calibration due date"
              },
              {
                title: "ConformityService",
                sub: [
                  "R1 tolerance → R2 bounds",
                  "R3 verdict · fig. 02"
                ]
              },
              {
                title: "INSERT control_checks",
                sub: [
                  "checked_at set by the DB",
                  "record is immutable"
                ]
              },
              {
                title: "Result non-conforming?",
                sub: "server-side verdict",
                decision: true
              }
            ],
            exits: [
              {
                from: 2,
                edge: "unknown",
                title: "404 Not Found",
                sub: "ResourceNotFound",
                tone: "fault"
              },
              {
                from: 3,
                edge: "expired",
                title: "400 Bad Request",
                sub: [
                  "check refused",
                  "rule R7"
                ],
                tone: "fault"
              },
              {
                from: 6,
                edge: "yes",
                title: "Nonconformity",
                sub: [
                  "status A_TRAITER",
                  "file opened"
                ],
                tone: "fault"
              }
            ],
            outcome: {
              title: "201 Created",
              sub: "+ deviationPct computed"
            }
          },
          {
            kind: "tolerance",
            no: "FIG. 02",
            title: "The tolerance band, and why the bounds are included",
            alt: "Number line for a 25 Nm target with a 4 percent tolerance: the conforming zone runs from 24.000 to 26.000 Nm, bounds included, with reject zones either side. A measurement of 25.400 Nm is conforming; a measurement of 26.350 Nm is not.",
            caption: "R2 sets the bounds: min = target × (1 − tol/100) and max = target × (1 + tol/100), rounded HALF_UP to three decimals. R3 gives the verdict: the bounds are included, so a measurement of exactly 24.000 Nm is conforming. All four computed values are written into the record, which is what lets an auditor redo the calculation years later even if the range has changed since.",
            rule: "target 25.000 Nm > 10 Nm → tolerance 4.00% (DEFAUT_4PCT)",
            min: "24.000",
            target: "25.000",
            max: "26.000",
            minLabel: "min",
            targetLabel: "target",
            maxLabel: "max",
            unit: "Nm",
            rejectLabel: "reject",
            passLabel: "CONFORMING",
            samples: [
              {
                value: "25.400 Nm",
                label: "CONFORMING",
                ok: true,
                at: 0.6
              },
              {
                value: "26.350 Nm",
                label: "NON-CONFORMING",
                ok: false,
                at: 0.8375
              }
            ]
          }
        ],
        metric: {
          value: "8",
          label: "Rules held server-side"
        }
      },
      {
        id: "pharmacowork",
        name: "PharmacoWork",
        short: "PharmacoWork",
        url: "https://pharmacowork.fr",
        tagline: "The pharmacy's internal workspace",
        period: "2025 to present",
        status: "Pilot",
        statusTone: "pilot",
        tracks: ["business"],
        capsule: {
          problem: "Pharmacy software stops at the sale. Preparations, callbacks and quality checks run on sticky notes and WhatsApp, patient names included.",
          solution: "An internal workspace for the pharmacy: eleven modules, built mobile-first because the job is done standing at the counter.",
          role: "Co-founder: product framing, architecture, development.",
          stack: "NestJS 11 · Next.js 16 · React 19 · Prisma · PostgreSQL 18 · Railway",
          result: "11 modules in pilot · 41 models isolated per pharmacy · identities encrypted at rest"
        },
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
              "Next.js 16 · App Router",
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
              "S3 · presigned URLs",
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
        period: "2025 to 2026",
        status: "Delivered",
        statusTone: "done",
        tracks: ["industrial"],
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
        tagline: "Full-stack web platform, ENIB",
        period: "2025 to 2026",
        status: "Delivered",
        statusTone: "done",
        tracks: ["data", "business"],
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
      },
      {
        id: "lunar-lander",
        name: "Lunar Lander: reward shaping and reward hacking",
        short: "Lunar Lander",
        tagline: "Making an AI cheat on purpose, then proving the fix",
        period: "2026",
        status: "Delivered",
        statusTone: "done",
        tracks: ["data"],
        capsule: {
          problem: "A reward that looks harmless, \"+1 per frame where the lander is upright and slow\", is enough to make an agent cheat: it hovers until the time limit instead of landing, and its training curve says it is excellent.",
          solution: "Reproduce the cheat under a strict protocol, then rewrite the same idea as potential-based shaping (Ng, Harada and Russell, 1999), and prove through an ablation that this term is what fixes it.",
          role: "Specification, experimental protocol, hypotheses and validation. Code written with Claude Code, checked by 51 tests.",
          stack: "Python 3.12 · Gymnasium · Box2D · Stable-Baselines3 (PPO) · PyTorch · pytest",
          result: "Truncation 77 % → 0 % on every seed · true score 36.8 → 263.4 · 15 training runs of 1 M steps"
        },
        highlights: [
          "Five reward functions, each a Gymnasium wrapper that adds to the native reward without ever replacing it or touching terminated, truncated and info",
          "Hypothesis written before each run in a dated log, 3 seeds per variant, and verdicts published as they came out: two hypotheses were marked refuted",
          "An evaluation the shaped reward cannot fool: raw environment, deterministic policy, 50 episodes on held-out seeds, worst seed reported in brackets",
          "Finding: the cheat an agent finds depends on its learning path. Seed 2 learns to land around 400,000 steps, then unlearns it and hovers on every episode from 750,000",
          "Lander Studio: a local, framework-free web app to train live and watch the network light up next to the lander in flight"
        ],
        steps: [
          {
            step: "01",
            title: "Context",
            body: "A tutorial teaches an AI to land a lunar module. That is not the point here. The point is what happens when you add a reward rule that looks reasonable: a bonus that pays for a state rather than for progress. That is reward hacking, and it is the most common failure of applied reinforcement learning."
          },
          {
            step: "02",
            title: "Constraint",
            body: "A cheating agent's training score is wrong by construction: judged by its own reward, it succeeds. The protocol therefore had to judge every variant on the same scale, the game's raw reward, and distrust any conclusion drawn from a single seed."
          },
          {
            step: "03",
            title: "Approach",
            body: "The arithmetic first. Hovering pays about +0.8 per frame, close to 800 over an episode cut at 1,000 frames, against +100 for a landing that also stops the payments. With γ = 0.999 and bootstrapping on truncation, the critic values hovering at about 735. The fix pays for improvement, F = γ·Φ(s') − Φ(s): the sum telescopes and stays bounded, so there is nothing left to farm."
          },
          {
            step: "04",
            title: "Build",
            body: "A layered Python package: environment factory, reward registry, PPO training that writes versions, git hash and duration into every config.json, a fair evaluator, video recording. Three potential-shaping traps covered by tests: the same γ as PPO, Φ set to zero on a real termination but not on a truncation, Φ recomputed on every reset."
          },
          {
            step: "05",
            title: "Result",
            body: "The cheat reproduced on 2 seeds out of 3 (77 % of episodes cut at 1,000 frames, true score 36.8 against 257.3 for the baseline), while their training score climbed towards 1,000. The potential term removes it on every seed: 0 % truncation, score within the baseline's standard deviation. The ablation without the per-frame fee gives the same result: the potential term is the fix, not the fee. Reproduced bit for bit from a fresh clone."
          }
        ],
        figures: [
          {
            kind: "flow",
            no: "FIG. 01",
            title: "A protocol the shaped reward cannot fool",
            alt: "Vertical flowchart: the hypothesis is written before the run, three seeds are trained for one million steps, the raw score is logged alongside the shaped score, then each model is evaluated on the raw environment with a deterministic policy over fifty held-out seeds. A test checks whether more than twenty percent of episodes are cut at one thousand frames; if so, cheating is likely and the median seed's video confirms it. The verdict is written to the experiment log.",
            caption: "Shaping only exists during training. Evaluation never sees it: every variant is judged on the game's reward, which is why an agent showing nearly 1,000 points comes out at 36.8. Monitor sits beneath the reward wrapper, so even the training curve is in raw score.",
            nodes: [
              {
                title: "Hypothesis written",
                sub: "before the run, dated"
              },
              {
                title: "PPO training",
                sub: "3 seeds · 1 M steps"
              },
              {
                title: "Two-column log",
                sub: [
                  "raw score (Monitor)",
                  "shaped score, apart"
                ]
              },
              {
                title: "Raw evaluation",
                sub: [
                  "deterministic · 50 episodes",
                  "seeds 10,000 to 10,049"
                ]
              },
              {
                title: "Truncation > 20 %?",
                sub: "the hovering signature",
                decision: true
              }
            ],
            exits: [
              {
                from: 4,
                edge: "yes",
                title: "Likely cheating",
                sub: [
                  "video of the median",
                  "seed, not the best"
                ],
                tone: "fault"
              }
            ],
            outcome: {
              title: "Verdict logged",
              sub: [
                "confirmed · refuted",
                "inconclusive"
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
            label: "Learning",
            items: [
              "PPO · Stable-Baselines3 2.9",
              "Actor-critic MLP 2 × 64",
              "9,797 parameters",
              "PyTorch CPU"
            ]
          },
          {
            label: "Simulation",
            items: [
              "Gymnasium 1.3 · LunarLander-v3",
              "Box2D",
              "16 parallel environments"
            ]
          },
          {
            label: "Experiment",
            items: [
              "5 reward wrappers",
              "config.json · versions and git hash",
              "Monitor CSV",
              "pandas · matplotlib"
            ]
          },
          {
            label: "Interface",
            items: [
              "Lander Studio · http.server + SSE",
              "Framework-free HTML / JavaScript",
              "pygame · game window",
              "moviepy · MP4"
            ]
          },
          {
            label: "Quality",
            items: [
              "pytest · 51 tests",
              "ruff",
              "Read-only audit agent"
            ]
          }
        ],
        metric: {
          value: "77 → 0 %",
          label: "Truncation, cheat then fix"
        }
      },
      {
        id: "fliplander",
        name: "Tesla Roadster rocket",
        short: "Tesla Roadster rocket",
        tagline: "A car that flips in mid-air and lands on its wheels",
        period: "2026 to present",
        status: "In progress",
        statusTone: "wip",
        tracks: ["data", "industrial"],
        capsule: {
          problem: "A 1.85 t car leaves a loop upside down at 10 m. It must roll 180° in mid-air with 10 compressed-air thrusters, brake, and land on its four wheels without emptying its tank or exceeding 3 g. A demo proves it works once; the real question is robustness.",
          solution: "A 6-degree-of-freedom MuJoCo simulator built from a config file, a PPO agent trained through a curriculum, and a classical SO(3) controller as an honest opponent.",
          role: "Specification, modelling decisions, review of every milestone, QA and security audit. Code written with Claude Code and validated by tests.",
          stack: "Python · MuJoCo · Gymnasium · Stable-Baselines3 (PPO, SAC) · PyTorch · Railway",
          result: "Classical controller: 83.1 % success over 1,000 episodes · PPO still training, no figure published before 5 seeds"
        },
        highlights: [
          "Physics written test-first: free fall, energy conservation, thruster impulse, air mass (194.6 kg) and tank blowdown each have their own test",
          "Physically modelled tank: 600 L at 300 bar, thrust that drops below 40 bar, vehicle mass updated as air is consumed",
          "Classical SO(3) controller with bounded least-squares allocation: from 0 % to 85.4 % on the nominal level, valve-lag compensation alone worth +32 points",
          "An 8-level curriculum, from an upright car at rest to the full sequence with wind, mass errors and a failed thruster",
          "Failures documented and fixed: a short γ made hovering pay better than a hard landing, and a policy mean drifted outside the action bounds"
        ],
        steps: [
          {
            step: "01",
            title: "Context",
            body: "The 3D follow-up to the Lunar Lander project, inspired by a public demo of a car flipping in mid-air. From 2 dimensions and 2 engines to 6 degrees of freedom, 10 thrusters with valve delay, a physical resource that runs out, and a human constraint: the occupant must stay below 3 g. Only three public figures are reused; everything else is a documented engineering assumption."
          },
          {
            step: "02",
            title: "Constraint",
            body: "Upside down, the four lift thrusters push the car towards the ground. It has to flip before it can brake, in about 0.7 s, on an air budget that allows only 4.9 s of hover. And a learned success rate means nothing without an engineer's controller to compare against: that controller sets the bar."
          },
          {
            step: "03",
            title: "Approach",
            body: "The MuJoCo model is generated from a YAML file, so every parameter traces back to its source. Observations never use Euler angles: a 6D rotation representation, gravity in the body frame, and never time, to keep the problem Markovian. The reward uses potential-based shaping with the same γ as the algorithm."
          },
          {
            step: "04",
            title: "Build",
            body: "A Gymnasium environment, a curriculum promoted over 200 episodes with 20 % replay of earlier levels, training locally or on Railway from a dedicated git branch per batch, artifacts synced to S3. About 100 tests, CI with ruff, strict mypy, bandit and pip-audit; policies exported without pickle."
          },
          {
            step: "05",
            title: "Current state",
            body: "The classical controller is measured on held-out seeds, 1,000 episodes per level: 83.1 % nominal, 38.0 % with domain randomization, 33.1 % with a failed thruster, 22.5 % on the full sequence. PPO has already reached 95 to 100 % on some seeds, but not consistently: the milestone requires 95 % across 5 seeds with confidence intervals before anything is published. Batches v5a and v5b are running."
          }
        ],
        figures: [
          {
            kind: "flow",
            no: "FIG. 01",
            title: "From the loop to touchdown: flip before braking",
            alt: "Vertical flowchart: the loop climb is scripted, the car is released upside down at 9.26 metres and 6 metres per second, the agent rolls it 180 degrees, brakes it along a safe-speed profile, then the landing criteria are checked. If they fail, the episode is classed as a hard landing, crash or over 3 g. If they hold, the car is resting on its four wheels.",
            caption: "The order is not a matter of style. While the car is inverted, the lift thrusters accelerate it towards the ground: braking before the flip makes the fall worse. One of the project's questions is whether the agent discovers this sequence on its own.",
            nodes: [
              {
                title: "Scripted climb",
                sub: "loop R = 5 m · suction"
              },
              {
                title: "Inverted release",
                sub: [
                  "9.26 m · 5.98 m/s",
                  "pitch 1.38 rad/s"
                ]
              },
              {
                title: "180° roll",
                sub: "≈ 0.7 s · 14.6 kN·m"
              },
              {
                title: "Braking",
                sub: "v_safe(h) profile"
              },
              {
                title: "Criteria met?",
                sub: [
                  "tilt < 8° · vz < 2 m/s",
                  "peak < 3 g"
                ],
                decision: true
              }
            ],
            exits: [
              {
                from: 4,
                edge: "no",
                title: "Failure classed",
                sub: [
                  "hard · crash · over-g",
                  "out of zone"
                ],
                tone: "fault"
              }
            ],
            outcome: {
              title: "On 4 wheels",
              sub: "settled 1 s after contact"
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
              "Model generated from YAML",
              "Tank, valves, drag, wind",
              "Randomization and faults"
            ]
          },
          {
            label: "Learning",
            items: [
              "PPO · Stable-Baselines3",
              "SAC for comparison",
              "MLP 256 × 256",
              "VecNormalize",
              "8-level curriculum"
            ]
          },
          {
            label: "Control",
            items: [
              "Attitude control on SO(3)",
              "Allocation · scipy lsq_linear",
              "Phase planner"
            ]
          },
          {
            label: "Infrastructure",
            items: [
              "Docker",
              "Railway",
              "S3-compatible storage",
              "TensorBoard"
            ]
          },
          {
            label: "Quality",
            items: [
              "pytest · ~100 tests",
              "ruff · strict mypy",
              "bandit · pip-audit",
              "GitHub Actions"
            ]
          }
        ],
        metric: {
          value: "83.1 %",
          label: "Classical baseline, nominal level"
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
              "safran-rebranding",
              "controltorque"
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
              "safran-rebranding",
              "lunar-lander",
              "fliplander"
            ]
          },
          {
            name: "Reinforcement learning",
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
          level: "Fluent, written and spoken"
        },
        {
          name: "German",
          level: "B1 (Goethe-Institut)"
        }
      ]
    }
  },
  associative: {
    title: "Student leadership",
    intro: "AI Innovators Club, ENIB.",
    url: "https://aiinnovators.vercel.app/",
    linkLabel: "Visit the club's site",
    items: [
      {
        title: "President",
        org: "AI Innovators Club, ENIB",
        period: "2025 to 2026",
        points: [
          "Strategic direction of the club: cross-disciplinary AI & data projects",
          "Event organisation"
        ]
      },
      {
        title: "Head of HR",
        org: "AI Innovators Club, ENIB",
        period: "2024 to 2025",
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
    intro: "Final-year internship (PFE), six months, starting February 2027. Open to opportunities in industrial engineering, AI, data and process automation.",
    email: "tahaghadhab@gmail.com",
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
    title: "Taha Ghadhab's resume",
    intro: "Plain text version, scannable, no styling.",
    printLabel: "Print / PDF",
    backLabel: "Back to the site",
    sections: {
      profile: "Profile",
      education: "Education",
      certifications: "Certifications",
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
