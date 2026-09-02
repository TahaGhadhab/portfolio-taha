import type { Content } from "./types";

/**
 * English content — mirrors `fr.ts` field for field.
 * Company and school names stay in their original form.
 */
export const en: Content = {
  meta: {
    title: "Taha Ghadhab — Industrial Engineering",
    description:
      "Portfolio of Taha Ghadhab, industrial engineering student: production systems optimisation, data and Industry 4.0. Safran, SMIP, AFC.",
    ogAlt: "Control room — Taha Ghadhab's portfolio",
  },

  nav: {
    sections: [
      { id: "methode", label: "Method" },
      { id: "parcours", label: "Education" },
      { id: "experiences", label: "Experience" },
      { id: "projets", label: "Projects" },
      { id: "competences", label: "Skills" },
      { id: "contact", label: "Contact" },
    ],
    classicView: "Plain view",
    cockpitView: "Cockpit view",
    downloadCv: "Resume PDF",
    skipToContent: "Skip to main content",
    langLabel: "Language",
    statusLabel: "Status",
  },

  boot: {
    lines: [
      "SYSTEM CHECK ................ OK",
      "LOADING PROFILE: TAHA GHADHAB",
      "INDUSTRIAL ENGINEERING ...... OK",
      "DATA & AI MODULES ........... OK",
    ],
    ready: "SYSTEM READY",
    skip: "Click or press Enter to skip",
    srAnnounce: "Loading Taha Ghadhab's portfolio.",
  },

  hero: {
    eyebrow: "Flight deck",
    name: "Taha Ghadhab",
    role: "Industrial engineering student",
    tagline:
      "Analytical rigour, a taste for data, and the optimisation of production systems.",
    signature:
      "I don't just fix problems — I eliminate them for good, with tools built for the job.",
    stats: [
      { value: "3", unit: "", label: "industry internships" },
      { value: "1", unit: "", label: "startup co-founded" },
      { value: "42", unit: "", label: "KPIs tracked" },
    ],
    ctaPrimary: "Download resume",
    ctaSecondary: "Explore the work",
    scrollHint: "Scroll",
  },

  method: {
    title: "How I work",
    intro:
      "The same protocol on every assignment, from the shop floor to the control tower. It is what connects an OCR tool at Safran to an academic dashboard.",
    steps: [
      {
        step: "01",
        title: "Identify",
        body: "Find the real problem or the improvement point by watching the flow, not the symptom.",
      },
      {
        step: "02",
        title: "Design",
        body: "Build an intelligent system that addresses the cause — not a patch someone will have to reapply.",
      },
      {
        step: "03",
        title: "Implement",
        body: "Ship the change in the best way available, accounting for real constraints on the ground.",
      },
      {
        step: "04",
        title: "Measure",
        body: "Quantify the gain: time saved, quality raised, non-conformities avoided.",
      },
    ],
  },

  about: {
    title: "About",
    lead: "Industrial engineering student at ENIB, drawn to systems that run better after I leave than before I arrived.",
    body: [
      "My territory is the point where an industrial process meets a software tool. At Safran, the question was never “how do we fix these non-compliant documents?” but “how do we stop them from arriving?” The answer took the form of a local OCR system that detects and actively corrects.",
      "That approach comes from a deliberately broad path: the methodological rigour of industrial engineering, the tooling of data work, and a business lens picked up in financial consulting. Three angles on one problem beat one angle applied three times.",
    ],
    positioning: {
      title: "Three disciplines, one profile",
      pillars: [
        {
          title: "Industrial engineering",
          body: "Lean, DMAIC, VSM, plant layout, PIC/PDP/MRP planning. Method before tooling.",
        },
        {
          title: "Applied data & AI",
          body: "Python, SQL, Power BI, OCR, decision dashboards. Tooling in service of measurement.",
        },
        {
          title: "Business & entrepreneurship",
          body: "Techno-economic studies, financial consulting, a co-founded startup. The gain, stated in decision-maker language.",
        },
      ],
    },
  },

  education: {
    title: "Education",
    intro: "A scientific path, aimed at systems engineering.",
    items: [
      {
        degree: "National Engineering Degree — Industrial Engineering",
        school: "École Nationale d'Ingénieurs de Bizerte (ENIB)",
        period: "2024 — Present",
        location: "Bizerte",
        detail:
          "Production systems optimisation, Lean management, industrial planning, Industry 4.0.",
        current: true,
      },
      {
        degree: "Preparatory cycle — Mathematics & Physics",
        school: "Faculty of Sciences of Tunis",
        period: "2021 — 2024",
        location: "Tunis",
        detail: "Intensive scientific training in mathematics and physics.",
        current: false,
      },
      {
        degree: "Baccalaureate in Mathematics",
        school: "Awarded with distinction",
        period: "2021",
        current: false,
      },
    ],
  },

  experience: {
    title: "Experience",
    intro:
      "Three industrial environments, one way in: find what is stuck, leave with something that holds.",
    inputLabel: "Input — problem identified",
    outputLabel: "Output — delivered",
    missionsLabel: "Assignments",
    toolsLabel: "Tools",
    immersionLabel: "Output — gained",
    items: [
      {
        id: "safran",
        short: "Safran",
        company: "Safran",
        fullName: "Safran",
        role: "Methods engineer",
        sector: "aero",
        period: "June — July 2025",
        location: "Dhari",
        input:
          "Documents failing quality standards were caught late, and tightening-tool compliance was tracked with no dedicated system.",
        output:
          "A local OCR system that detects and actively corrects documentary non-conformities, plus a platform tracking tightening-tool compliance.",
        missions: [
          "Built an intelligent local OCR system to detect and actively correct documents failing quality standards",
          "Built a platform tracking tightening-tool compliance, meeting aerospace safety standard requirements",
        ],
        tools: ["OCR", "Python", "Aerospace quality standards"],
        hasDeliverable: true,
      },
      {
        id: "smip",
        short: "SMIP",
        company: "SMIP",
        fullName: "Société de Maintenance et d'Installation Pétrolière",
        role: "Assistant engineer",
        sector: "oil",
        period: "June — July 2025",
        location: "Les Berges du Lac, Tunisia",
        input:
          "A heavy investment decision — acquiring a coiled-tubing unit — that needed to be argued on hard numbers.",
        output:
          "A full techno-economic study supporting the acquisition decision.",
        missions: [
          "Techno-economic study for the acquisition of a coiled-tubing unit",
          "Immersion in HSE concerns and oil-sector safety standards",
        ],
        tools: ["Techno-economic study", "HSE", "Oil-sector standards"],
        hasDeliverable: true,
      },
      {
        id: "afc",
        short: "AFC",
        company: "AFC",
        fullName: "Arab Financial Consultants",
        role: "Trainee consultant",
        sector: "finance",
        period: "August — September 2025",
        location: "Les Berges du Lac, Tunisia",
        input:
          "A purely technical reading of industrial projects, without the vocabulary or the criteria of the financial decision-maker.",
        output:
          "A financial lens on systems: translating an engineering gain into an investment argument.",
        missions: [
          "Immersion in a financial consulting environment",
          "Developed analytical rigour and an understanding of financial systems",
        ],
        tools: ["Consulting", "Financial analysis"],
        hasDeliverable: false,
      },
    ],
  },

  projects: {
    title: "Projects",
    intro:
      "Three systems built to solve a specific problem, from HR process to plant layout.",
    openLabel: "Open",
    closeLabel: "Close",
    stackLabel: "Stack",
    stepsLabel: "Inspection sequence",
    items: [
      {
        id: "pharmacowork",
        accentTint: "#4FD8B0",
        name: "PharmacoWork",
        short: "PharmacoWork",
        url: "https://pharmacowork.fr",
        visual: "roster",
        tagline: "HR management tool for pharmacies",
        period: "2025 — Present",
        status: "Active",
        summary:
          "A mobile HR management app for pharmacies, co-founded to serve an uncovered need: handling schedules, replacements and staff tracking without a dedicated tool.",
        highlights: [
          "Modelled the HR processes of the pharmacy sector",
          "Designed the database and the interfaces",
          "Optimised staff management flows",
        ],
        stack: ["React", "Supabase", "SQL", "BPMN modelling"],
        metric: { value: "Co-founder", label: "Role" },
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
            title: "Survey",
            body: "Record the machines, the routings and the real flows between stations. Without that starting matrix, any grouping is arbitrary.",
          },
          {
            step: "02",
            title: "Cluster",
            body: "Apply King's method — an iterative sort of the incidence matrix rows and columns — until the production cells emerge.",
          },
          {
            step: "03",
            title: "Lay out",
            body: "Chain the stations inside each cell with an optimisation algorithm, then place the cells relative to one another.",
          },
          {
            step: "04",
            title: "Score",
            body: "Rate every candidate layout on traffic, connectivity and optimality ratio. The number decides, not the hunch.",
          },
        ],

        tagline: "Decision support for plant layout",
        period: "2025 — 2026",
        status: "In progress",
        summary:
          "A decision-support application for workshop layout: it groups machines into coherent production cells and scores each candidate layout on measurable industrial criteria.",
        highlights: [
          "King's method (Rank Order Clustering) to form production cells",
          "Chain-based optimisation algorithms",
          "Industrial indicators: traffic, connectivity, optimality ratio",
        ],
        stack: ["MATLAB", "Python", "Operations research"],
        metric: { value: "ROC", label: "King's method" },
      },
      {
        id: "dashboard-enib",
        accentTint: "#4FD8E8",
        name: "Academic Performance Dashboard",
        short: "ENIB Dashboard",
        visual: "dashboard",
        tagline: "Full-stack web platform — ENIB",
        period: "2025 — 2026",
        status: "In progress",
        summary:
          "A steering platform for ENIB's academic performance: it centralises tracking indicators, fires automatic alerts on drift, and makes student satisfaction readable at a glance.",
        highlights: [
          "42 KPIs tracking academic performance",
          "Automated alert system on critical thresholds",
          "Interactive visualisations and student satisfaction tracking",
        ],
        stack: ["React", "Supabase", "SQL", "Power BI"],
        metric: { value: "42", label: "KPIs tracked" },
      },
    ],
  },

  skills: {
    title: "Skills",
    intro:
      "Rather than a percentage I would award myself, here is where each skill has actually been put to work. It reads as an incidence matrix — the very tool King's method uses in my plant layout project.",
    matrix: {
      deploymentsLabel: "Deployments",
      legend: "Lit cell = skill applied on that ground",
      countLabel: "grounds",
      cellLabel: "{skill} applied on {deployment}",
      emptyHint: "Hover a row or a column to isolate one crossing.",
    },
    groups: [
      {
        id: "industriel",
        domain: "Industrial",
        accent: "amber",
        skills: [
          {
            name: "Lean & continuous improvement",
            note: "DMAIC, PDCA, VSM, Ishikawa",
            usedIn: ["safran", "dashboard-enib"],
          },
          {
            name: "Planning & scheduling",
            note: "PIC, PDP, MRP, MS Project, ERP",
            usedIn: ["smip", "pharmacowork"],
          },
          {
            name: "Plant layout",
            usedIn: ["machine-layout"],
          },
          {
            name: "Process control",
            usedIn: ["safran", "pharmacowork", "machine-layout"],
          },
          {
            name: "Techno-economic studies",
            usedIn: ["smip", "afc"],
          },
        ],
      },
      {
        id: "technique",
        domain: "Technical",
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
        "Leadership & team management",
        "Multicultural teamwork",
        "Public speaking",
      ],
    },
    languages: {
      title: "Languages",
      items: [
        { name: "Arabic", level: "Native" },
        { name: "French", level: "Fluent" },
        { name: "English", level: "Fluent" },
      ],
    },
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
          "Event organisation",
        ],
      },
      {
        title: "Head of HR",
        org: "AI Innovators Club — ENIB",
        period: "2024 — 2025",
        points: ["Managed internal recruitment", "Onboarded new members"],
      },
    ],
  },

  interests: {
    title: "Interests",
    items: [
      "Industry 4.0",
      "Applied AI",
      "Entrepreneurship",
      "Strength training & sport",
      "Student leadership",
      "Business & strategy",
    ],
  },

  contact: {
    title: "Contact",
    intro:
      "Open to internship and apprenticeship opportunities in industrial engineering, data and Industry 4.0.",
    email: "taha.ghadhab@enib.ucar.tn",
    phone: "+216 54 347 150",
    linkedin: "https://www.linkedin.com/in/taha-ghadhab",
    linkedinLabel: "linkedin.com/in/taha-ghadhab",
    location: "Tunisia",
    emailLabel: "Email",
    phoneLabel: "Phone",
    locationLabel: "Location",
    cvLabel: "Download resume as PDF",
    cvHint: "Print-ready, one click.",
  },

  easterEgg: {
    lampLabel: "Auxiliary lamp",
    title: "Off protocol",
    body: "When I'm not steering a process, I'm lifting iron. Strength training is the same trade as industrial engineering: a load, a protocol, a measurement, and the patience to wait for the curve to climb. The rest is noise.",
    close: "Close",
  },

  classic: {
    title: "Resume — Taha Ghadhab",
    intro: "Plain text version, scannable, no styling.",
    printLabel: "Print / PDF",
    backLabel: "Back to cockpit",
    sections: {
      profile: "Profile",
      education: "Education",
      experience: "Professional experience",
      projects: "Technical & industrial projects",
      skills: "Skills",
      associative: "Student leadership",
      languages: "Languages",
      interests: "Interests",
      contact: "Contact",
    },
  },

  footer: {
    builtWith: "Designed and built by Taha Ghadhab",
    rights: "All rights reserved.",
  },
};
