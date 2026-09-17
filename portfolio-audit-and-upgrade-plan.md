# Portfolio Audit & Upgrade Plan — Taha Ghadhab

> **How to use this file.** Paste or attach it to Claude Code at the root of the portfolio repository, then say:
> *"Read `portfolio-audit-and-upgrade-plan.md` in full and start with Phase 0."*
> The file is written as an operating brief for the agent. Sections in XML tags are instructions; the rest is reference material.

---

<role>
You are a senior product designer and senior frontend engineer working together as one person. You have shipped portfolio and editorial sites for engineers, you care about typographic precision and accessibility, and you refuse template defaults. You are careful with an existing codebase: you edit in place, you do not delete what you were not asked to delete, and you verify your work in a real browser before calling anything done.
</role>

<mission>
Upgrade the portfolio at `https://portfolio-taha-neon.vercel.app` so that a recruiter for an **industrial engineering / methods / data & Industry 4.0 internship in the EU (start February 2027)** understands who Taha is, what he has proven, and how to contact him **within 30 seconds**, while keeping the "Silent Flight" brand system intact.

Success is not "the site looks different". Success is: every item in the Findings section is either fixed and verified, or explicitly deferred with a reason recorded in `CHANGELOG-portfolio.md`.
</mission>

<context>
<owner>
- Taha Ghadhab, élève ingénieur en génie industriel at ENIB (2024–2027), plus a research master's in Systèmes Complexes Intelligents at École Polytechnique de Tunisie (Sep 2026 – Sep 2027), official double degree.
- Internships: Safran Electronics & Defense, Dhari (methods, 1 Jun – 24 Jul 2026); AFC Arab Financial Consultants (Aug – Sep 2025); SMIP (Jun – Jul 2025).
- Five projects: Zodiac→Safran PDF rebranding tool, ControlTorque, PharmacoWork (co-founder), Machine Layout Optimization App, ENIB Academic Performance Dashboard.
- Languages: Arabic native, French fluent, English C1 (Amideast), German B1 (Goethe-Institut).
- Wants **data analysis** and **applied AI** to be visible strengths.
</owner>

<how_taha_builds_software>
**Critical and non-negotiable.** Taha does not hand-write most of the code. He specifies the problem, builds the software with AI, then personally owns QA, testing, and security review. Never write copy that says or implies he hand-coded the software ("seul développeur", "j'ai codé", "développé par"). The accurate framing is: *specifies → builds with AI → validates with tests and security audits*. Treat this as a differentiator, not something to hide.
</how_taha_builds_software>

<brand_system name="Silent Flight">
- Palette: void `#0B0E0C`, vellum `#EDF0E7`, machine-tool green `#43594C`, oxidised brass `#E8A21C` (single warm accent), UI edge `--edge-ui: #5C6559` (3.20:1, WCAG 1.4.11).
- Type: Archivo (display, variable width), Literata (body serif, optical size), IBM Plex Mono (data/meta).
- Motion: one easing curve, fast out of stillness, dead stop. Page holds 850 ms, opens in one 520 ms move. Rare arrhythmic eye blink, cursor-tracking pupil.
- Voice: precise and declarative. Too casual and too abstract are both failures.
- Guardrails: dual mode (immersive vs. "Vue classique"), PDF CV always reachable, mobile-first, accessibility non-negotiable, owl metaphor is functional (serrated leading edge = decomposition), never "wise owl".
</brand_system>

<site_facts>
- Routes observed: `/fr`, `/en`, `/fr/cv` (classic view), `/cv/CV_Taha_Ghadhab_FR.pdf`.
- Framework appears to be Next.js (`next-size-adjust` meta). **Verify by reading `package.json` before assuming anything.**
- The audit below was made from the rendered HTML/text only. Colour, spacing, motion, and mobile layout were **not** visually inspected; Phase 0 fills that gap.
</site_facts>
</context>

<hard_constraints>
1. **No fabricated content.** Never invent a metric, date, testimonial, employer detail, or outcome. If a better number is needed and not present in the repo or this file, insert a visible placeholder `[À CONFIRMER : …]` and list it in the "Questions for Taha" output. Do not ship placeholders to production without flagging them.
2. **No hand-coding claims** (see `how_taha_builds_software`).
3. **Edit in place.** Do not delete routes, components, pages, the EN version, or the classic view. Any deletion of a file requires listing it and getting explicit confirmation first.
4. **Keep FR and EN in parity.** Every copy change on `/fr` gets its equivalent on `/en` in the same commit.
5. **Tokens only.** No new inline hex/rgb colours or ad hoc `font-family` values. Add a named CSS custom property if a new value is truly needed.
6. **Headings stay roman.** No italic display type or italic emphasis words in headings.
7. **Accessibility floor:** WCAG 2.2 AA text contrast (4.5:1 body, 3:1 large text and UI), visible focus states, `prefers-reduced-motion` respected, correct heading order, `aria-expanded` on disclosure buttons.
8. **Mobile floor:** no horizontal scroll at 320 / 375 / 414 / 768 px; no two-line buttons or nav links.
9. **One phase per commit series.** Commit messages prefixed with the finding ID(s), e.g. `fix(C1,C2): correct project dates and experience order`.
</hard_constraints>

<working_method>
Think before acting. For each phase:
1. **Read** the relevant files and state, in 3–6 lines, what you found and which files you will modify or create.
2. **Plan** the change against the finding IDs it resolves.
3. **Implement** the smallest change that fully resolves the findings.
4. **Verify** using the checkpoint for that phase (build, lint, browser screenshots, contrast checks). Evidence beats assertion: attach or describe the actual output.
5. **Log** in `CHANGELOG-portfolio.md`: finding IDs, what changed, verification evidence, anything deferred and why.
6. **Stop at the checkpoint** and summarise for Taha before moving to the next phase, unless he has said "run all phases".

When a finding conflicts with a hard constraint, the constraint wins; note the conflict in the changelog.
When you are unsure whether something is a bug or an intentional design choice, ask instead of guessing.
</working_method>

---

## Findings (the audit)

Severity: **P0** = credibility or conversion damage, fix first · **P1** = significant clarity/hierarchy problem · **P2** = polish.

### C — Credibility

| ID | Sev | Finding | Required outcome |
|---|---|---|---|
| C1 | P0 | Rebranding and ControlTorque projects are dated **2025**, but they were built during the Safran internship dated **June–July 2026**. | Both project dates read **2026**, consistent with the Safran experience entry, in FR and EN. |
| C2 | P0 | Experience order is wrong: SMIP (Jun–Jul 2025) appears before AFC (Aug–Sep 2025). | Experiences sorted reverse-chronologically: Safran → AFC → SMIP. Sorting driven by data (date field), not by manual array order, if the data model allows. |
| C3 | P0 | AFC card renders a stray `SORTIE · ACQUIS` label before `ENTRÉE · PROBLÈME IDENTIFIÉ`. | Label removed or the data bug fixed; AFC card has the same label structure as the others. |
| C4 | P0 | Titles overstate status: "Ingénieur méthode" (Safran), "Assistant ingénieur", "Apprenti consultant". Meta title says "ingénieur génie industriel". | Titles read as internships: e.g. "Stagiaire ingénieur méthodes", "Stagiaire ingénieur", "Stagiaire consultant". Meta/OG title uses "élève ingénieur". Confirm exact wording with Taha if unsure. |
| C5 | P0 | "RÔLE : Seul développeur…", "≈ 19 300 lignes", "Co-fondateur : … développement", and footer "Conçu et développé par Taha Ghadhab" imply hand-written code. | Role lines reframed to *specification, architecture decisions, AI-assisted build, QA and security review*. Line counts removed or reframed as scope of the delivered system, not personal authorship. Footer reframed (e.g. "Conçu par Taha Ghadhab · construit avec l'IA, testé et audité"). |
| C6 | P0 | Contact LinkedIn link points to `linkedin.com/in/taha-ghadhab`; Taha's known profile URL is `linkedin.com/in/taha-ghadhab-5b5835242`. | Link verified against Taha's real URL. If unconfirmed, flag `[À CONFIRMER]` and use the known `-5b5835242` URL. |
| C7 | P0 | German B1 is missing; English shown as "Courant" despite a C1 certificate. | Languages: Arabe (maternelle), Français (courant), Anglais (C1, Amideast), Allemand (B1, Goethe-Institut). FR and EN. |

### A — Information architecture

| ID | Sev | Finding | Required outcome |
|---|---|---|---|
| A1 | P1 | The owl-feather principle section sits immediately after the hero, before any evidence. | Order becomes: Hero → Projets → Expériences → Méthode → Compétences → Parcours → À propos (principle condensed inside or directly before it) → Engagement → Contact. The FIG. 01 wake diagram is kept, but moved. |
| A2 | P1 | 10 nav items; the "VOL" label is opaque to visitors. | Desktop header nav ≤ 6 items (e.g. Projets, Expériences, Méthode, À propos, Contact) plus CV PDF and language switch. Full menu may list more but must not use "Vol". |
| A3 | P1 | Numbering collisions: visible section labels skip (unnumbered principle, then 03); "06 · STACK" inside project cards collides with section 06; FIG numbers restart (FIG 01/02 page-level, FIG 01–03 in each project, FIG 03 again in À propos). | One numbering scheme for sections, contiguous and matching the new order. Figures numbered by scope: page figures `FIG. 1, 2, 3…`; project figures prefixed per project, e.g. `FIG. P1.1`. Stack blocks unnumbered. |
| A4 | P1 | Projects 1–2 carry full case studies (5 steps, 2–3 diagrams, stack grid) on the homepage; projects 4–5 have 3 bullets. The page becomes documentation, and the imbalance makes 3 projects look like filler. | Homepage shows **uniform project cards** (title, one-line problem, role, 1 headline outcome, tags, link). Full case studies move to `/fr/projets/[slug]` and `/en/projects/[slug]` with all existing diagrams and text preserved. Projects 3–5 get a case-study page with whatever real content exists; missing sections flagged `[À CONFIRMER]`, never invented. |
| A5 | P1 | Projects appear twice: a filterable card list, then the expanded versions below. | One representation on the homepage (the cards from A4), with the filter tabs kept and working. |

### H — Hero

| ID | Sev | Finding | Required outcome |
|---|---|---|---|
| H1 | P0 | H1 "Observer, puis trancher une seule fois." never says what Taha is. Data and AI are absent above the fold. | Hero states identity and positioning in the first two lines, e.g. eyebrow or H1 containing "Élève ingénieur en génie industriel" and a line naming production systems, data and applied AI. The brand line can survive as a secondary line. Provide 3 copy options to Taha; do not pick silently. |
| H2 | P1 | Stat counters "3 stages · 1 startup · 5 projets" are counts, not outcomes. | Replaced by 2–3 real proof points drawn from existing content (e.g. "Safran · aéronautique", "210 tests sur l'outil de reprise", "PharmacoWork en pilote"), or removed. No invented numbers. |
| H3 | P2 | Three hero CTAs; CV PDF link repeated ~4 times on the page. | Hero has 2 CTAs max (primary: Voir les projets; secondary: CV PDF). CV link persists in header and contact only. |
| H4 | P1 | No availability/mobility signal anywhere near the top. | Short availability line in hero or header: "Disponible pour un stage dès février 2027 · mobile en Europe" (confirm wording with Taha). |

### P — Projects content

| ID | Sev | Finding | Required outcome |
|---|---|---|---|
| P1 | P1 | Headline metrics don't land: "18/18 occurrences" is one 17-page reference doc vs. a problem of "thousands of documents"; "8 règles tenues côté serveur" is jargon for a methods recruiter; "ROC · Méthode de King" is not a metric. | Each card's headline slot shows an outcome a non-developer understands. Use only facts in the repo; where a stronger fact is needed (time saved, documents processed), insert `[À CONFIRMER]`. If no metric exists, the slot shows a short outcome phrase, consistently styled. |
| P2 | P1 | All-caps monospace mangles identifiers (`BIGDECIMAL`, `CONFORMITYSERVICE`, `apply_modifications`) and long tag runs are unreadable. | Uppercase reserved for short labels (≤ 3 words). Code identifiers rendered in their real case in `<code>`. Tags visually separated (gap or separator), not concatenated. |
| P3 | P1 | Positioning skews to software engineering (Spring Boot, JWT, HMAC, CSP nonces) while the target is industrial/methods roles. | On cards and at the top of each case study: process problem, standard/norm, people affected, audit/quality outcome first. Stack detail moved lower. |
| P4 | P2 | The honest-limits passages (logo detector 0.568 vs 0.65; app-level vs DB-level immutability) are the best copy on the site. | Preserved verbatim through the restructure. Mention the pattern in the case-study template as a "Limites" block. |
| P5 | P2 | FR page contains untranslated labels: "Machine Layout Optimization App", "Dashboard", "Soft skills", "Stack". | Translated, or a documented rule for which technical terms stay English. |
| P6 | P2 | Typo: "satisfaction estudiantine". | "satisfaction étudiante". |

### S — Skills, education, certifications, about

| ID | Sev | Finding | Required outcome |
|---|---|---|---|
| S1 | P1 | Skills intro promises proof per skill, but MATLAB, CATIA V5 and all soft skills have none; "Lean & amélioration continue" is proven by "Dashboard ENIB". | Every listed skill has at least one real proof reference, or is removed, or moved to a clearly labelled "Outils utilisés en formation" line. Ask Taha for proof where plausible. |
| S2 | P2 | Three short Claude Academy courses get paragraph descriptions; one is a 45-minute beta. | Compressed to one compact row each: title · duration · verify link. No paragraphs. |
| S3 | P2 | Baccalauréat entry adds noise at this level. | Removed from the portfolio timeline (kept on the PDF CV if Taha wants). Confirm before removing. |
| S4 | P1 | À propos quote "Je ne fais pas que corriger des problèmes, je les élimine définitivement avec des outils innovants." is generic and off-voice. | Quote deleted, or replaced with approved brand copy: "J'isole la contrainte qui gouverne un système en défaut, je la lève une bonne fois, et je conçois pour la durée plutôt que pour la maintenance." Avoid repeating the hero line verbatim. |
| S5 | P2 | Engagement section is thin ("Organisation d'événements"). | Structure ready for numbers (events, attendance, team size) with `[À CONFIRMER]` placeholders; ask Taha. |

### K — Conversion & metadata

| ID | Sev | Finding | Required outcome |
|---|---|---|---|
| K1 | P0 | No `og:image`; `twitter:card` is `summary`. LinkedIn shares show a bare link, although a 1200×627 banner exists. | `og:image` (1200×627, absolute URL, with `og:image:alt`) and `twitter:card=summary_large_image` on `/fr`, `/en`, and each case-study page. Validated with LinkedIn Post Inspector. If the banner file is not in the repo, ask Taha for it. |
| K2 | P1 | Contact CTA has no dates or mobility; location "Tunisie" alone. | "Stage ingénieur dès février 2027 · Tunisie, mobile en Europe" (confirm wording). |
| K3 | P2 | Only a school email (`@enib.ucar.tn`), which expires after graduation. | Add a personal email if Taha provides one; otherwise leave and flag. |
| K4 | P2 | `hreflang` alternates and `og:locale:alternate` not confirmed. | `<link rel="alternate" hreflang="fr|en|x-default">` present on every localized route. |
| K5 | P1 | "Vue classique" must stay easy to reach on mobile. | Classic view link reachable from the hero area or sticky header on 375 px, not only inside the menu. |

### V — Visual audit (not yet performed)

| ID | Sev | Finding | Required outcome |
|---|---|---|---|
| V1 | P0 | Brass accent and green on void/vellum not contrast-checked from pixels. | Contrast table for every text/background and UI-edge pair actually used, with ratios. Failures fixed via tokens. |
| V2 | P1 | Type scale, vertical rhythm and line length unverified. | Body measure 60–75 characters; one documented type scale in tokens; heading sizes consistent across sections. |
| V3 | P1 | Motion unverified against spec and reduced motion. | Hero timing matches 850 ms hold + 520 ms open; all non-essential motion off under `prefers-reduced-motion: reduce`. |
| V4 | P1 | Open brand question: owl logo in the header plus the hero's cursor-tracking eye may create a three-eye conflict. | Screenshot the header+hero; if both eyes are visible together, propose 2 resolutions to Taha (e.g. text wordmark in header on the homepage, or head-only mark without pupil). Do not decide alone. |
| V5 | P0 | Mobile layout unverified. | Screenshots at 320/375/414/768/1440 px for every page; zero horizontal scroll; no clipped diagrams (SVG figures scroll inside their own container or reflow). |

### D — Design system, colour & typography

Contrast ratios below were **calculated** from the Silent Flight hex values (WCAG 2.x relative luminance). Where each pair is actually used on the site is unverified until Phase 0.

| Pair | Ratio | Status |
|---|---|---|
| vellum `#EDF0E7` on void `#0B0E0C` | 16.83:1 | Pass, but too harsh for long body text |
| brass `#E8A21C` on void | 8.88:1 | Pass |
| void text on brass fill | 8.88:1 | Pass |
| edge `#5C6559` on void | 3.20:1 | Pass for UI borders only, fails as text |
| **green `#43594C` on void** | **2.56:1** | **Fails text and UI (1.4.3, 1.4.11)** |
| brass on green | 3.47:1 | Large text only |
| **brass on vellum** | **1.89:1** | **Fails everything** |
| green on vellum | 6.57:1 | Pass |

| ID | Sev | Finding | Required outcome |
|---|---|---|---|
| D1 | P0 | Green `#43594C` fails on void (2.56:1). Any text, icon, tag, diagram stroke or UI border in green on the dark background is inaccessible. | Green used only as surface/structural fill on dark backgrounds. Readable green ink uses a new sage token `#8FA396` (7.25:1 on void). Every existing usage audited and reassigned. |
| D2 | P0 | Brass on vellum (1.89:1) — any classic view, light mode, print style or CV page reusing brass on a light background makes links and accents invisible. | Light contexts use `--brass-700: #7A5200` (6.0:1 on vellum). `--brass-400` is forbidden on light backgrounds. |
| D3 | P1 | No semantic token layer: components pick raw colours ("green") without a role, which is how the 2.56:1 usage happens. | Two-layer token architecture: primitives (never referenced in components) and semantic role tokens (only ones allowed in components). See token block below. Lint or grep check enforces it. |
| D4 | P1 | Pure vellum on void (16.83:1) for long Literata body text causes halation and fatigue on the case studies. | Body text uses a softened `--color-text` (start at `#C9CEC3`, target ≈ 11–13:1, measured in browser). Pure vellum reserved for headings. |
| D5 | P1 | Brass risks overuse (numbers, labels, tags, links, CTAs), which kills its signal as the single warm accent. | Brass restricted to: primary CTA, focus ring, at most one key figure per viewport, active filter state. Target < 5 % of visible area per screen, checked on screenshots. |
| D6 | P1 | A single black for every surface makes cards, figures and panels flat. | Three elevation surfaces: `#121714`, `#18201B`, `#1F2922`. All text tokens re-verified on the lightest surface (vellum 13.03:1, brass 6.88:1, sage 5.61:1 on `#1F2922`). No drop shadows. |
| D7 | P1 | Status colours missing and states rely on colour alone (LIVRÉ/PILOTE, CONFORME/NON CONFORME, rejet). | Add `--color-status-ok`, `--color-status-warn`, `--color-status-danger` (desaturated oxidised red, ≥ 4.5:1 on void, value to test). Every status also carries a text label or shape (WCAG 1.4.1). |
| D8 | P1 | IBM Plex Mono overused (nav, labels, tags, stacks, card titles), usually in all caps. Mono no longer signals "data". | Mono limited to numbers, code identifiers, short meta. Nav and card titles move to Archivo. Uppercase only for labels ≤ 3 words with `letter-spacing: 0.06em`. (Complements P2.) |
| D9 | P1 | No documented type scale; risk of ad hoc sizes. Three variable families cost performance. | Fluid scale tokens `--step--1`…`--step-5` (ratio ≈ 1.25, `clamp()`). Body Literata 17–19 px, line-height 1.55–1.65, measure 60–75ch, `font-optical-sizing: auto`. Fonts subset (latin), `woff2`, only used axes/weights, preload only the H1 face, `font-display: swap` with size-adjusted fallbacks. |
| D10 | P2 | No spacing scale or shape language. The chamfered corners already used in diagrams are a distinctive motif but applied inconsistently or not at all to UI. | Spacing tokens on a 4 px base (`--space-1`…`--space-10`). Decide one shape language: chamfer used consistently on buttons, cards, tags, **or** not at all on UI. Record the decision. |
| D11 | P1 | Interaction states not tokenised (hover, focus-visible, active, disabled, selected tab, disclosure open). | Every interactive component has all states defined through tokens. Focus: 2 px brass ring, 2 px offset, visible on every surface. |
| D12 | P1 | Motion values not tokenised; scroll-reveal animations (if present) dilute the signature hero moment. | `--ease-flight`, `--dur-hold: 850ms`, `--dur-open: 520ms` as tokens. Scroll-triggered fades removed or reduced to near-imperceptible. Under `prefers-reduced-motion: reduce`, pupil tracking and blink are also disabled. |
| D13 | P2 | Design system not documented in the repo. | `DESIGN.md` (and optionally a non-indexed `/design-system` route) documenting tokens and roles, contrast table, brass/green usage rules, component states, logo clear space and minimum sizes. |

#### Reference token block (starting point — verify in browser, do not paste blindly over existing tokens)

```css
:root {
  /* Primitives — never referenced directly in components */
  --void-950: #0B0E0C;
  --void-900: #121714;
  --void-850: #18201B;
  --void-800: #1F2922;
  --vellum-50: #EDF0E7;
  --sage-400: #8FA396;   /* 7.25:1 on void-950 */
  --green-600: #43594C;  /* fills and surfaces only on dark */
  --edge-500: #5C6559;   /* 3.20:1 on void-950, UI borders */
  --brass-400: #E8A21C;  /* dark backgrounds only */
  --brass-700: #7A5200;  /* light backgrounds only, 6.0:1 on vellum */

  /* Semantic — immersive (dark) mode */
  --color-bg: var(--void-950);
  --color-surface-1: var(--void-900);
  --color-surface-2: var(--void-850);
  --color-surface-3: var(--void-800);
  --color-text-strong: var(--vellum-50);
  --color-text: #C9CEC3;            /* measure; target 11–13:1 */
  --color-text-muted: #A7B0A2;      /* 8.66:1 */
  --color-text-data: var(--sage-400);
  --color-accent: var(--brass-400);
  --color-accent-contrast: var(--void-950);
  --color-border-ui: var(--edge-500);
  --color-border-subtle: var(--void-800);
  --color-fill-structure: var(--green-600);
  --color-focus: var(--brass-400);
}

[data-mode="classic"] {
  --color-bg: var(--vellum-50);
  --color-text-strong: var(--void-950);
  --color-text: #2A302C;            /* measure */
  --color-text-muted: var(--green-600); /* 6.57:1 */
  --color-accent: var(--brass-700);
  --color-border-ui: var(--edge-500);   /* 5.26:1 on vellum */
  --color-focus: var(--brass-700);
}
```

#### Colour role rules (to copy into `DESIGN.md`)
- **Brass** = action or the single most important thing on screen. Rare.
- **Sage** = data, measurement, numbers.
- **Deep green** = structure (diagram zones, fills, surfaces). Never ink on dark.
- **Edge** = UI boundaries only.
- **Vellum** = headings; softened vellum = body.
- No component may reference a primitive token.

---

## The plan — SMART goals and checkpoints

Dates assume work starts **Wednesday 16 September 2026**. Target: everything live by 19 October 2026, before EU internship application peaks (October–November 2026).

### Phase 0 — Baseline & visual audit
**SMART goal:** By **18 Sep 2026**, produce a baseline report covering stack detection, current Lighthouse scores, and screenshots of `/fr`, `/en`, `/fr/cv` at 5 widths, plus a completed V1–V5 audit, without changing any production code.

Tasks:
1. Read `package.json`, the routing structure, the content/data files for experiences and projects, and the token/CSS files. Summarise the architecture in ≤ 15 lines.
2. Run the site locally. Capture screenshots with Playwright at 320, 375, 414, 768, 1440 px (full page) into `audit/baseline/`.
3. Run Lighthouse (mobile + desktop) on `/fr`; save JSON and note Performance, Accessibility, Best Practices, SEO.
4. Measure contrast for every colour pair in use (V1). Inspect type scale (V2), motion + reduced motion (V3), header/hero eye conflict (V4), horizontal overflow (V5).
5. Create `CHANGELOG-portfolio.md` and `audit/visual-findings.md` (add new V-IDs for anything found that isn't listed here).

**Checkpoint 0 (stop and report):**
- [ ] Architecture summary written
- [ ] 15 baseline screenshots saved (3 routes × 5 widths)
- [ ] Lighthouse baseline recorded
- [ ] Contrast table complete, failures listed
- [ ] "Questions for Taha" list started
- [ ] No production code changed

### Phase 1 — Credibility fixes (P0 content)
**SMART goal:** By **21 Sep 2026**, resolve C1–C7 and P6 in both FR and EN, with zero invented facts, verified by a text diff and a re-render.

Tasks: fix dates (C1), sort order (C2), stray label (C3), titles (C4), AI-build framing (C5), LinkedIn URL (C6), languages (C7), typo (P6).

**Checkpoint 1:**
- [ ] `grep -ri "seul développeur\|développé par\|lignes" ` over content files returns only intended occurrences
- [ ] Safran experience and projects 1–2 all show 2026
- [ ] Experience order Safran → AFC → SMIP on `/fr` and `/en`
- [ ] Every outbound link on the contact section returns HTTP 200 (LinkedIn may require manual check; note it)
- [ ] FR/EN parity confirmed
- [ ] Changelog updated; Taha approves titles and role wording

### Phase 2 — Hero, positioning & conversion
**SMART goal:** By **25 Sep 2026**, ship a hero where identity, positioning (industrial + data + AI) and availability are readable in the first viewport at 375 px, and add `og:image` so a LinkedIn share shows the banner preview.

Tasks: H1–H4, K1, K2, K4, K5 (K3 if email provided). Present 3 hero copy options before implementing.

**Checkpoint 2:**
- [ ] 375 px screenshot: name, "élève ingénieur", domain, availability, and one CTA visible without scrolling
- [ ] Hero has ≤ 2 CTAs
- [ ] No invented numbers in proof points
- [ ] LinkedIn Post Inspector shows title, description and image for `/fr` and `/en`
- [ ] `hreflang` alternates present
- [ ] Classic view reachable at 375 px without opening the menu

### Phase 2B — Design system foundations (colour, type, tokens)
**SMART goal:** By **30 Sep 2026**, implement the two-layer token architecture and resolve D1–D13, so that **100 % of component colour and font declarations reference semantic tokens**, every text/UI colour pair in use passes WCAG 2.2 AA in both immersive and classic modes, and `DESIGN.md` documents the system.

Why here: Phases 3–5 build new pages and components. Doing tokens first means everything new is born compliant instead of being fixed twice.

Tasks:
1. Inventory every colour and `font-family` declaration in the codebase (grep for `#`, `rgb(`, `hsl(`, `oklch(`, `font-family`). Map each to a semantic role. Save the map in `audit/token-inventory.md`.
2. Introduce primitives and semantic tokens (reference block in D-section). Keep existing token names working through aliases during migration; remove aliases only at the end of the phase.
3. Reassign every green-on-dark ink usage to `--color-text-data` or `--color-border-ui` (D1). Replace any brass-on-light with `--brass-700` (D2).
4. Soften body text (D4), add elevation surfaces (D6), add status tokens with text/shape redundancy (D7).
5. Restrict brass usage (D5) and mono usage (D8); implement the type scale and font loading strategy (D9).
6. Add spacing tokens and make the chamfer decision with Taha (D10).
7. Tokenise all interaction states and focus ring (D11); tokenise motion and strengthen reduced motion (D12).
8. Write `DESIGN.md` (D13) including the measured contrast table from the browser, not only the calculated one.

**Checkpoint 2B:**
- [ ] `audit/token-inventory.md` lists every former raw value and its new role
- [ ] Grep over component/style files finds **0** raw hex/rgb/hsl/oklch colours and **0** raw `font-family` values outside the token file
- [ ] Grep finds **0** primitive tokens (`--void-*`, `--brass-*`, `--green-*`, `--sage-*`) referenced outside the token file
- [ ] Browser-measured contrast table: every text pair ≥ 4.5:1 (≥ 3:1 for large text), every UI border/icon ≥ 3:1, in **both** modes
- [ ] Screenshot review at 375 and 1440 px: brass covers visibly < 5 % of each viewport; no green text on dark
- [ ] Every status (LIVRÉ, PILOTE, CONFORME, NON CONFORME, rejet) readable in grayscale screenshot
- [ ] Keyboard tab through homepage: focus ring visible on every interactive element, both modes
- [ ] Reduced-motion check: no hero animation, no pupil tracking, no blink
- [ ] Fonts: only used weights/axes shipped; Lighthouse shows no render-blocking font beyond the preloaded H1 face
- [ ] `DESIGN.md` committed; Taha approves chamfer decision and the softened body colour

### Phase 3 — Information architecture & project pages
**SMART goal:** By **7 Oct 2026**, reorder the homepage (A1), reduce nav to ≤ 6 items (A2), unify numbering (A3), and move all 5 case studies to dedicated FR/EN routes (A4, A5), preserving 100 % of existing case-study text and diagrams.

Tasks:
1. Build a reusable case-study template: Contexte, Contrainte, Approche, Construction, Résultat, **Limites**, Stack.
2. Migrate projects 1–2 verbatim; create pages for 3–5 with real content only and `[À CONFIRMER]` where empty.
3. Homepage cards uniform, filter tabs working, each card links to its page.
4. Renumber sections and figures per A3.

**Checkpoint 3:**
- [ ] Word count of case-study prose before vs. after for projects 1–2 matches (± headings)
- [ ] All diagrams render on the new pages at 375 and 1440 px
- [ ] Homepage height at 1440 px reduced by ≥ 40 % vs. baseline screenshot
- [ ] Nav ≤ 6 items; no "Vol" label
- [ ] Section numbers contiguous; no duplicate FIG numbers within a page
- [ ] Every card link resolves; old `#projet-*` anchors redirect or scroll to the right card (no broken inbound links)

### Phase 4 — Projects & skills content quality
**SMART goal:** By **12 Oct 2026**, every project card has a headline outcome readable by a non-developer, every listed skill has proof or is removed, and all-caps identifier mangling is gone.

Tasks: P1, P2, P3, P4, P5, S1, S2, S3, S4, S5.

**Checkpoint 4:**
- [ ] No code identifier rendered in uppercase (manual scan of all case-study pages)
- [ ] Each of 5 cards has a consistent headline-slot format
- [ ] Skills list: 0 items without proof (or explicitly relabelled)
- [ ] Certifications are compact rows
- [ ] Off-voice quote removed; honest "Limites" blocks intact
- [ ] Remaining `[À CONFIRMER]` items listed for Taha

### Phase 5 — Visual, accessibility & performance hardening
**SMART goal:** By **16 Oct 2026**, reach Lighthouse mobile **Accessibility = 100**, **SEO ≥ 95**, **Performance ≥ 90**, **Best Practices ≥ 95** on `/fr` and one case-study page, with zero contrast failures and zero horizontal overflow at 320–1440 px.

Tasks: fix all remaining V-findings from Phase 0 and verify D-findings still hold after Phases 3–4, reduced motion, focus states, `aria-expanded` on disclosures, image and font loading.

**Checkpoint 5:**
- [ ] Lighthouse report saved in `audit/final/` meeting all four targets
- [ ] axe (or equivalent) run: 0 serious/critical issues
- [ ] Keyboard-only walkthrough of homepage and one case study completed and described
- [ ] Reduced-motion screenshot/recording shows no hero animation
- [ ] Contrast table: all pairs pass
- [ ] Before/after screenshots side by side for 375 and 1440 px

### Phase 6 — Final review & release
**SMART goal:** By **19 Oct 2026**, deploy to production after a 30-second recruiter test and a full findings reconciliation, with every finding marked Done, Deferred (with reason), or Needs Taha.

Tasks:
1. **30-second test:** open `/fr` fresh at 1440 and 375 px. Write down only what is understood from the first viewport and one scroll. It must include: who, level, domain, strongest proof, availability, how to contact.
2. Reconcile the Findings tables against the changelog.
3. Deploy; re-run LinkedIn Post Inspector on production URLs.

**Checkpoint 6 (definition of done):**
- [ ] D1–D13 statuses recorded; `DESIGN.md` matches the shipped tokens
- [ ] 30-second test passes on both widths
- [ ] 100 % of finding IDs have a status in the changelog
- [ ] Zero `[À CONFIRMER]` strings in production build (`grep` the build output)
- [ ] Production `og:image` preview confirmed
- [ ] Taha signs off

---

<success_metrics>
| Metric | Baseline | Target |
|---|---|---|
| Recruiter understands identity + availability in first viewport (375 px) | No | Yes |
| Credibility inconsistencies (dates, order, titles, links, languages) | 7 | 0 |
| Lighthouse mobile Accessibility | measure in Phase 0 | 100 |
| Lighthouse mobile Performance | measure in Phase 0 | ≥ 90 |
| Contrast failures | measure in Phase 0 | 0 |
| Homepage height at 1440 px | measure in Phase 0 | −40 % or more |
| Raw colour / font values outside token file | measure in Phase 2B inventory | 0 |
| Failing colour pairs (both modes) | ≥ 2 known (green on void, brass on vellum) | 0 |
| Brass share of viewport area | unmeasured | < 5 % |
| Skills without proof | 5+ | 0 |
| LinkedIn share preview with image | No | Yes |
</success_metrics>

<examples>
Good vs. bad rewrites — match the "good" register.

**Role line (C5)**
- Bad: "Seul développeur : cadrage, architecture, algorithmes, interface, tests."
- Good: "Porteur du projet : cadrage du besoin, choix d'architecture, construction assistée par IA, puis validation par 210 tests et revue de sécurité."

**Project headline slot (P1)**
- Bad: "8 RÈGLES TENUES CÔTÉ SERVEUR"
- Good: "Un contrôle sur un couplemètre non étalonné est refusé, pas enregistré"

**Hero (H1) — structure, not final copy**
- Bad: an abstract maxim alone as H1.
- Good: eyebrow "Élève ingénieur · génie industriel · data & IA" + H1 in the brand voice + one line naming what he fixes + availability line.

**Invented metric (hard constraint 1)**
- Bad: "−60 % de temps de reprise documentaire"
- Good: "[À CONFIRMER : temps de reprise manuel estimé vs. outil]"
</examples>

<output_format>
At the end of each phase, reply to Taha with exactly:
1. **Phase & status** (one line)
2. **Findings resolved** (IDs)
3. **Evidence** (screenshots paths, scores, grep results)
4. **Deferred / blocked** (IDs + reason)
5. **Questions for Taha** (numbered, answerable in one line each)
Keep it under 250 words. Details go in `CHANGELOG-portfolio.md`.
</output_format>

<questions_for_taha_seed>
Start the list with these; add more as you work:
1. Exact job title wording you are comfortable with for Safran, AFC and SMIP?
2. Your real LinkedIn URL (custom or `-5b5835242`)?
3. A personal email to display alongside the school one?
4. Any measured result for the rebranding tool (documents processed, time saved) and for ControlTorque (tools/controls tracked)?
5. Proof for MATLAB, CATIA V5, and the soft skills, or should they be removed?
6. Numbers for AI Innovators club events (count, attendance, team size)?
7. Keep or remove the Baccalauréat line?
8. Is the 1200×627 LinkedIn banner in the repo? If not, please add it to `/public`.
9. Chamfered corners as the UI shape language, or no chamfer on UI (diagrams only)?
10. Is the classic view meant to be light (vellum background)? This decides whether the light-mode tokens are required now.
</questions_for_taha_seed>
