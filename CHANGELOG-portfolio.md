# Portfolio upgrade — changelog

Tracks every finding ID from `portfolio-audit-and-upgrade-plan.md`: what changed, evidence, and anything deferred and why.

Status keys: **Done** · **Deferred** (with reason) · **Needs Taha** · **Open**

---

## Phase 0 — Baseline & visual audit · 17 Sep 2026

**Production code changed:** none. Only new files: `CHANGELOG-portfolio.md`, `audit/visual-findings.md`, `audit/baseline/**`.

### Done
- Architecture summary → `audit/visual-findings.md` §1
- 15 full-page baseline screenshots (`/fr`, `/en`, `/fr/cv` × 320/375/414/768/1440) + 15 first-viewport shots → `audit/baseline/`
- Lighthouse baseline (mobile + desktop `/fr`, mobile `/fr/cv`) → `audit/baseline/lighthouse/`
- V1 contrast table (34 measured pairs, 2 failures) → §4
- V2 type, V3 motion, V4 eye conflict, V5 overflow → §5–8
- New findings V6–V13 → §9

### Baseline numbers (for success metrics)
| Metric | Baseline |
|---|---|
| Lighthouse mobile Perf / A11y / BP / SEO (`/fr`) | 79 / 100 / 96 / 82 |
| Lighthouse desktop Perf / A11y / BP / SEO (`/fr`) | 98 / 100 / 96 / 82 |
| Contrast failures | 2 (both `--line-lit #333B31`, 1.67:1) |
| Homepage height at 1440 (`/fr`) | 16 819 px → target ≤ 10 091 px |
| Page-level horizontal scroll | 0 routes; clipped tags at 768 px |
| Font payload | 10 woff2, 474 KiB |

### Conflicts with the plan (constraint/reality wins, recorded here)
- **D1, D2** are based on a palette (`#43594C`, `#EDF0E7`, `#E8A21C`) that is not the one in the code. Neither failure occurs today. Phase 2B scope needs re-basing on the real tokens (`--snow*`, `--iris`, `--line*`, `--edge`). → **Needs Taha**
- **A2**: the header already has ≤ 6 links; the 10-item list and "Vol" live in the side rail and mobile menu. Fix is narrower than planned.
- **D4, D7, D9 (scale), D10 (spacing), D12 (partially)**: already partly implemented; remaining work is the semantic layer and documentation.
- `audit/baseline/` is ≈ 53 MB of PNG. Recommend not committing screenshots (add `audit/**/*.png` to `.gitignore`) → **Needs Taha**

### Deferred / blocked
- LinkedIn Post Inspector (K1) — not possible against localhost; Phase 2 on a preview URL.
- C6 link validity — LinkedIn blocks automated requests; manual check.

---

## Questions for Taha

1. Exact job title wording for Safran, AFC and SMIP?
2. Real LinkedIn URL: `taha-ghadhab` or `taha-ghadhab-5b5835242`?
3. A personal email to show alongside the school one?
4. Any measured result for the rebranding tool (documents processed, time saved) and ControlTorque (tools/controls tracked)?
5. Proof for MATLAB, CATIA V5 and the soft skills, or remove them?
6. AI Innovators club numbers (events, attendance, team size)?
7. Keep or remove the Baccalauréat line?
8. Is the 1200×627 LinkedIn banner available? It is not in the repo; please add it to `/public`.
9. Chamfered corners on UI, or diagrams only?
10. ~~Is the classic view light?~~ Answered by the audit: it is dark; only print is light.
11. Phase 2B: re-base the token work on the palette actually shipped (`#F5F7F1` / `#FDA51E` / Martian Mono), or migrate the site to the plan's palette (`#EDF0E7` / `#E8A21C` / IBM Plex Mono)?
12. Eye conflict (V4): hide the header mark while the hero is visible, or redraw it without eyes?
13. Commit the 53 MB of baseline screenshots, or gitignore `audit/**/*.png`?

---

## Phase 1 — Credibility fixes · 17 Sep 2026

**Sources used:** the updated CV text Taha pasted on 17 Sep 2026 (titles, ControlTorque test count, languages) and Taha's message confirming the LinkedIn URL. No other new facts were added.

**Status: implemented and verified, not committed.** Waiting for Taha to approve the wording (checkpoint item).

| ID | Change | Files |
|---|---|---|
| C1 | Rebranding and ControlTorque `period` 2025 → **2026** (FR + EN) | `fr.ts`, `en.ts` |
| C2 | New `start: "AAAA-MM"` field on `Experience`; `getContent` sorts experiences newest first. Rendered order: Safran → AFC → SMIP on `/fr`, `/en`, `/fr/cv`, `/en/cv`. The skills-matrix columns follow the same order. | `types.ts`, `index.ts`, content |
| C3 | Root cause fixed in `WorkSheets`: removed the extra `SORTIE · ACQUIS` tag from the aside; an immersion post now shows `SORTIE · ACQUIS` / `OUTPUT · GAINED` in place of `SORTIE · LIVRÉ`. All three cards share one label structure. | `Sections.tsx` |
| C4 | Safran: "Stagiaire au service Méthodes" / "Methods department intern", company "Safran Electronics & Defense", location "Dhari, Tunisie". AFC: "Consultant stagiaire" / "Consulting intern". SMIP: **"Assistant ingénieur" kept** because the updated CV uses it (the plan suggested "Stagiaire ingénieur"). Meta/OG title: "élève ingénieur en génie industriel" / "industrial engineering student". | content |
| C5 | Role lines: "Porteur du projet : … construction assistée par IA, puis validation par 210 / 58 tests unitaires"; PharmacoWork "Co-fondateur : … construction assistée par IA, tests et audit de sécurité". "≈ 19 300 lignes" removed from the result line. Footer: "Conçu par Taha Ghadhab · construit avec l'IA, testé et audité". EN equivalents. | content |
| C6 | LinkedIn → `linkedin.com/in/taha-ghadhab-5b5835242` (confirmed by Taha) | content |
| C7 | Anglais "C1 · Amideast", added Allemand "B1 · Goethe-Institut" (FR + EN). The classic view used to lowercase every level ("c1 · amideast"); it now lowercases only word-like levels ("courant"). | content, `cv/page.tsx` |
| P6 | "satisfaction estudiantine" → "satisfaction étudiante" | `fr.ts` |

### Evidence
- `eslint src`: clean. `next build`: compiles, 7/7 static pages.
- Rendered-text check (Playwright, all 4 routes): none of these strings remain: `Seul développeur`, `Sole developer`, `développé par`, `Designed and built`, `19 300`, `estudiantine`, `Ingénieur méthode`, `Apprenti consultant`.
- Grep `lignes|LOC` in content: only the case-study construction step "≈ 12 900 / 4 900 lignes (LOC)". **Intended:** it describes the size of the delivered system, not who wrote it.
- Outbound links: pharmacowork.fr 200, machine-layout-solver.vercel.app 200, both CV PDFs 200. LinkedIn returns 999 (bot block); **manual check needed**.
- Screenshot: `audit/phase1/experiences-fr-1440.png`

### Found while working (not fixed, for later phases)
- **CV PDFs are out of date.** `public/cv/CV_Taha_Ghadhab_{FR,EN}.pdf` still say "Ingénieur méthode", "Apprenti consultant", "Anglais : Courant", the old LinkedIn URL and the off-voice quote. The site now contradicts the downloadable CV. → **Needs Taha:** export the updated CV to both PDFs.
- The updated CV has stronger, sourced metrics for P1 (Phase 4): rebranding tested on 73 documents with 100 % detection and 0 false positives, 3 prototypes compared, 30–60 min → 3 min per document; ControlTorque covers 19 îlots and about 18 torque meters.
- Education (Phase 4): the CV says "Master de recherche … (double diplôme avec l'ENIB)"; the site says "Mastère en systèmes complexes intelligents" with no mention of the double degree.
- AFC missions (Phase 4): the CV adds "analyse financière de projets d'ingénierie".
- Skills (S1): the CV moves MATLAB and CATIA V5 under "Modélisation et simulation" and replaces the soft skills with "autonomie · initiative · curiosité · travail en équipe (président de club)". This is still not project-level proof.
- `files/CV_Taha.md`, cited in `fr.ts` as the "source de vérité", is also out of date.

---

## Palette preview (Phase 2B, trial) · 17 Sep 2026

Taha's answers to the Phase 1 questions: SMIP stays "Assistant ingénieur"; "Methods department intern" approved; issuing bodies (Amideast, Goethe-Institut) approved.

**Trial, reversible, not committed.** The plan's palette is added as one override block `:root[data-palette="vellum"]` in `globals.css`, switched on by `data-palette="vellum"` on `<html>` in `[lang]/layout.tsx`.
- **To revert:** remove the attribute (original palette back). Delete the block to remove the palette entirely.
- **Mapping:** `--color-snow` #F5F7F1 → vellum #EDF0E7 (16.83:1) · `--color-snow-2` #C5CCC2 → #C9CEC3 (12.10:1) · `--color-snow-3` #8B948A → sage #8FA396 (7.25:1) · `--color-iris` #FDA51E → brass #E8A21C (8.88:1) · surfaces #121714 / #18201B · rule #1F2922 · veils re-tinted.
- All text pairs still pass AA; the smallest text (mono meta) improves from 6.19:1 to 7.25:1.
- **Not included:** the font change (Martian Mono → IBM Plex Mono), the plan's green #43594C (no role in the current UI, and it fails as ink), and brass restriction D5. The hero eye gradient was already #E8A21C.
- **Comparisons:** `audit/palette-preview/compare-*.png`

---

## Phase 2 — Hero, positioning & conversion · 17 Sep 2026

Branch `portfolio-upgrade` (not pushed). Phase 1 committed at `ed2b245`; palette trial at `8456f0f` (Taha asked to keep going, so the palette stays on).

| ID | Status | Change |
|---|---|---|
| H1 | Done | Identity line above the H1 in FR/EN: "Élève ingénieur en génie industriel · data & IA appliquée" / "Industrial engineering student · data & applied AI". The brand maxim stays as the H1. Alternatives B (identity as the H1, maxim below) and C (name + role as the H1) are kept here for Taha. |
| H1 (lede) | Removed at Taha's request | Deleted the positioning lede "Méthodes industrielles, données et IA appliquée : …" / "Industrial methods, data and applied AI: …". |
| H2 | Done | Counters replaced by sourced proof points from the updated CV: 100 % detection on 73 Safran documents · 3 min per document vs 30–60 min · 11 PharmacoWork modules in pilot. No invented numbers. Rendered as a list (`ul`) with an accessible label. |
| H3 | Done | 2 CTAs: primary "Voir les projets" first, secondary "CV PDF". "Ma méthode" removed. Also fixes V13 (the primary was second on mobile). |
| H4 | **Removed at Taha's request** | The availability line was added and then deleted ("Stage ingénieur dès février 2027 · mobile en Europe"). |
| K1 | Done | `[lang]/opengraph-image.tsx` renders a 1200×630 PNG per locale (name, identity line, URL), with `og:image:*` + `twitter:card=summary_large_image` on `/fr`, `/en`, `/fr/cv`, `/en/cv`. Colours are copied as literals in that file because `ImageResponse` cannot read CSS variables (documented exception to "tokens only"). The existing 1200×627 banner was not in the repo. **Pending:** LinkedIn Post Inspector after deploy. |
| K2 | Reverted at Taha's request | Contact kept the original intro and "Tunisie" (the dates/mobility wording was removed along with H4). |
| K3 | Deferred | No personal email provided. |
| K4 | Done | `metadataBase` (`src/lib/site.ts`, overridable via `NEXT_PUBLIC_SITE_URL`); canonical + `hreflang` fr/en/x-default are absolute on all 4 routes; `og:locale:alternate`. Fixes V8. |
| K5 | Done | "Vue classique" link in the hero below 1100 px (where the header links collapse into the menu). Visible without scrolling at 375×812, 414×896 and 768×1024. |
| V4 | Done (option 1, reversible) | The header owl fades out while the hero wing is on screen (`data-eye-in-view` on `<html>`) and returns once scrolled past. Option 2 (eyeless mark) is not implemented. |
| V6 | Done | At 1100 px+ and ≤ 940 px tall, the wing and H1 are capped to the viewport height. The CTA row now sits well above the frame line at 1440×900 and 1366×768. |

### Evidence
- `tsc`, `eslint`, `next build` clean; 9 static routes including `/fr/opengraph-image` and `/en/opengraph-image`.
- First-viewport check (FR + EN): identity line, H1 and primary CTA visible at 320×640, 375×667, 375×812, 414×896, 768×1024, 1366×768, 1440×900; no horizontal scroll; header owl opacity 0 on the hero and 1 after scrolling.
- Screenshots: `audit/phase2/hero-*.png`, share images `audit/phase2/og-{fr,en}.png`.
