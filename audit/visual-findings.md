# Phase 0 — Baseline & visual audit

Date: 17 Sep 2026 · Build: `master@cfd2ab4`, `next build` + `next start` on :3100 (production build, local).
Tooling (installed outside the repo, `package.json` untouched): Playwright 1.63 driving system Chrome, Lighthouse 13.4.1.
Raw data: `audit/baseline/metrics.json`, `contrast.json`, `meta-motion-focus.json`, `lighthouse/*.json|html`.

---

## 1. Architecture (≤ 15 lines)

- **Next.js 16.3.4**, React 19.2, Tailwind CSS 4 (`@theme` in `globals.css`), TypeScript. Deployed on Vercel (`@vercel/analytics`); a `Dockerfile` + `railway.json` also exist.
- **Routing:** `src/app/[lang]/page.tsx` (home) and `src/app/[lang]/cv/page.tsx` (classic view), `lang ∈ {fr, en}`, SSG via `generateStaticParams`, `dynamicParams = false`. `src/proxy.ts` handles locale redirect. `global-not-found.tsx` for 404.
- **Content:** all copy lives in `src/content/fr.ts` and `en.ts` (≈1 240 lines each), typed by `src/content/types.ts`. Experiences are a plain array; order = array order (no date field used for sorting).
- **Components:** `Sections.tsx` (677 lines — Head, WorkSheets, ProjectSheets, skills, education, contact, footer), `Flight.tsx` (hero wing + eye), `ProjectGrid.tsx` (filterable cards), `Figures.tsx` / `ProjectFigures.tsx` (SVG diagrams), `TopNav`/`MobileNav`/`SectionIndex` (nav + side rail), `PageMotion` (scroll reveals).
- **Styles:** one 3 952-line `globals.css`. Tokens: `@theme` colours/fonts/easings, then `:root` aliases (`--snow`, `--iris`, `--t-*` fluid type scale, `--s-*` spacing, `--d-*` durations). A print stylesheet flips to black on white.
- **Fonts (4 families, `next/font/google`):** Instrument Serif (titles), Archivo `wdth` (UI / h3), Literata `opsz` (body), Martian Mono `wdth` (data/labels). 404 page alone uses IBM Plex Mono.
- **CV PDFs:** `public/cv/CV_Taha_Ghadhab_{FR,EN}.pdf`, resolved by `src/lib/cv.ts`.

## 2. The plan vs. the repo — assumptions that do not hold

These change how Phase 2B should be scoped. **Needs Taha's decision before 2B.**

| Plan says | Repo actually has |
|---|---|
| Palette: vellum `#EDF0E7`, brass `#E8A21C`, green `#43594C` | Text `--snow #F5F7F1` / `--snow-2 #C5CCC2` / `--snow-3 #8B948A`, accent `--iris #FDA51E`. **`#43594C` is used nowhere.** `#E8A21C` survives only in `icon.svg` and the hero eye gradient in `Flight.tsx`. |
| D1 green-on-void 2.56:1 failure | Does not occur — no green ink exists. |
| D2 brass-on-vellum failure in classic view | Classic view (`/fr/cv`) uses the **same dark palette**; only `@media print` is light (black/grey, no brass). No failure found. |
| Type: Archivo / Literata / IBM Plex Mono | Instrument Serif + Archivo + Literata + **Martian Mono**. Headings H1/H2 are Instrument Serif. |
| "No documented type scale / spacing" (D9, D10) | Fluid `--t--2 … --t-5` scale, `--tr-*` tracking, `--s-1 … --s-9` spacing, `--measure: 58ch` already exist. Missing: semantic role layer and documentation. |
| Motion tokens missing (D12) | `--ease-commit`, `--ease-glide`, `--d-commit: 520ms`, `--d-arrive: 820ms` exist; the 850 ms hold is a literal in `Flight.tsx`. |
| "10 nav items, VOL label" in header (A2) | Desktop header already has 5 links + Vue classique + CV PDF + EN. The 10 items and "Vol" are in the **right-hand side rail** (`SectionIndex`) and the mobile menu. |
| Status colours missing (D7) | `--color-ok #6FBF8F` and `--color-fault #D9705F` exist; status chips carry a text label + dot. |

## 3. Lighthouse baseline (local production build, `/fr`)

| Run | Perf | A11y | Best Pr. | SEO | LCP | TBT | CLS |
|---|---|---|---|---|---|---|---|
| `/fr` mobile | **79** | 100 | 96 | **82** | 5.5 s | 110 ms | 0.017 |
| `/fr` desktop | 98 | 100 | 96 | **82** | 1.1 s | 0 ms | 0 |
| `/fr/cv` mobile | 80 | 100 | 96 | 82 | 5.3 s | 120 ms | 0 |

- **SEO 82:** `canonical` and `hreflang` links are **relative** (`/fr`) — no `metadataBase` in `layout.tsx`. No `x-default`.
- **Perf (mobile):** LCP element is the hero H1; render delay is dominated by the word-by-word reveal after the hold. 10 font files preloaded, **474 KiB of woff2**. 25 KiB unused JS.
- **Best Practices 96:** only console error is `/_vercel/insights/script.js` 404 — local-only artefact, not a production issue.
- Local runs on an unthrottled machine; re-measure against the production URL in Phase 5.

## 4. V1 — Contrast (measured in browser, computed styles, disclosures opened)

34 distinct foreground/background pairs across `/fr`, `/en`, `/fr/cv`, `/en/cv` at 375 and 1440 px. **2 failures, same token.**

| Kind | Foreground | Background | Ratio | Need | Result | Where |
|---|---|---|---|---|---|---|
| graphic | `--line-lit #333B31` | void `#0B0E0C` | **1.67:1** | 3:1 | **FAIL** | Flowchart node outlines `rect.diag-node` (132 instances) |
| UI | `--line-lit #333B31` | void | **1.67:1** | 3:1 | **FAIL** | Mobile `MENU` button border (375 px) |
| UI | `--edge-ui #5C6559` | `#111411` band | 3.07:1 | 3:1 | pass (thin) | `Tout déplier` border |
| UI | `--edge-ui #5C6559` | void | 3.20:1 | 3:1 | pass | secondary buttons |
| text | `--color-fault #D9705F` | `#111411` | 5.70:1 | 4.5 | pass | `ENTRÉE · PROBLÈME` labels |
| text | `--snow-3 #8B948A` | card `#12160F` | 5.84:1 | 4.5 | pass | card numbers, metric labels, tracks |
| text | `--snow-3 #8B948A` | void | 6.19:1 | 4.5 | pass | 1 250 uses — mono meta |
| text | `--color-ok #6FBF8F` | void / cards | 8.3–8.8:1 | 4.5 | pass | `LIVRÉ`, `SORTIE · LIVRÉ` |
| text/UI | `--iris #FDA51E` | void / cards | 9.2–9.8:1 | 4.5 | pass | metrics, section numbers, primary CTA fill |
| text | void | `--iris` | 9.77:1 | 4.5 | pass | primary CTA label, skip link |
| text | `--snow-2 #C5CCC2` | void / bands | 11.2–11.8:1 | 4.5 | pass | body, lede (586 uses) |
| text | `--snow #F5F7F1` | void | 17.98:1 | 4.5 | pass | headings, names |

Notes:
- The plan's D4 concern (pure light on black for long body text) is already handled: body copy is `--snow-2` at 11.8:1, inside the plan's 11–13:1 target.
- Pairs over gradients/grain were measured against the nearest solid colour; the air gradients are ≤ 7 % alpha, so the error is small but not zero.

## 5. V2 — Type scale, rhythm, measure

- Scale is tokenised and fluid; headings consistent per level: H1 49 px (375) / 104 px (1440), H2 36 / 55 px, H3 18–21 / 25–32 px. No italic headings.
- **Body measure:** 55–72 characters per line at 1440 (in target); 36–45 at 375 (normal for mobile).
- **Mono dominance (confirms D8):** at 1440 on `/fr`, 478 of 751 text nodes are Martian Mono (64 %), vs 135 Literata. The most common size is 11.8 px mono.
- **Uppercase identifiers (confirms P2):** uppercasing is done in JS (`.toUpperCase()` — 31 calls in `Sections.tsx`, 43 total), not CSS, so screen readers also get the uppercased strings. Stack items like `ConformityService · BigDecimal`, `PyMuPDF (fitz)`, `pytest-qt` render as `CONFORMITYSERVICE · BIGDECIMAL` etc.
- **Heading order:** H1 → H2 → H3, no skips. But 11–12 px mono labels are marked up as `H3` (certifications, engagement) and the classic view's section `H2`s are 11 px, which is semantically fine but visually inverts hierarchy (H3 role titles at 18 px under 11 px H2s).

## 6. V3 — Motion

| Check | Result |
|---|---|
| Hero hold 850 ms, then open | ✅ wing closed at 800 ms, open at 1 000 ms (`Flight.tsx:190`) |
| Open duration 520 ms | ✅ `--d-commit: 520ms` |
| Pupil tracks cursor (default) | ✅ `translate(-7.13,-8.28)` → `translate(7.80,8.33)` |
| Reduced motion: no hold, wing static | ✅ open at 100 ms, 0 running animations after 500 ms |
| Reduced motion: pupil tracking off | ✅ no transform applied |
| Reduced motion: blink off | ✅ blink scheduled inside the same early-return effect |
| Scroll reveals (D12) | ⚠️ present: every `.commit` block fades/translates in over `--d-arrive: 820ms` with 60 ms stagger. Content stays at opacity 0 until scrolled into view. |

Reference: `audit/baseline/reduced-motion-fr-1440-t2500.png`.

## 7. V4 — Eye conflict

**Confirmed.** `eyes-header-hero-1440.png` and `eyes-header-hero-375.png`: the header owl mark (two brass eyes, 28 px) and the hero's single brass eye (≈ 40 px, cursor-tracking) are visible together in the first viewport at both widths — three eyes on screen. Two options for Taha (not decided):
1. **Header wordmark only on the homepage** — hide `BrandMark` in `TopNav` while the hero is in view; keep it on `/cv` and once scrolled past the hero.
2. **Head-only mark without eyes** — redraw `BrandMark` as the ear-tuft silhouette with no pupils, so the hero eye stays the only eye site-wide.

## 8. V5 — Mobile layout & overflow

- **No page-level horizontal scroll** at 320 / 375 / 414 / 768 / 1440 on `/fr`, `/en`, `/fr/cv` (`scrollWidth == clientWidth` everywhere). `html, body { overflow-x: clip }` guarantees this, which also means overflow is **silently cut off** rather than scrollable.
- **Clipped content at 768 px:** long stack tags in the expanded case studies (`TROCR · ANNOTATIONS MANUSCRITES`, `REDRESSEMENT, CONTRASTE, DÉBRUITAGE`, `APERÇU ET VALIDATION PAR OCCURRENCE`) extend to 774–809 px and are cut at the viewport edge.
- The hero SVG extends past the viewport at ≤ 414 px by design (clipped wing) — not a defect.
- Controls wrapping: no button text wraps to two lines (automated check produced false positives from nested spans; verified visually on the 375 and 1440 viewport screenshots).
- **Page height at 1440:** `/fr` 16 819 px, `/en` 16 438 px, `/fr/cv` 5 495 px. At 375: `/fr` 21 537 px. The two long case studies alone, expanded, are 5 968 px and 4 915 px at 1440 (A4 target: −40 % homepage height).
- **K5 confirmed:** at 375 px "Vue classique" is not visible without opening the menu.

## 9. New findings (not in the plan)

| ID | Sev | Finding | Evidence |
|---|---|---|---|
| V6 | P0 | At 1440×900 the fixed decorative frame line crosses the hero CTA row, so all three button labels read as struck through, and the CTAs sit at the bottom edge of the first viewport. | `viewport-fr-1440.png` (y ≈ 883) |
| V7 | P1 | `--line-lit #333B31` used as a meaningful boundary (flowchart nodes, mobile MENU button) at 1.67:1 — fails 1.4.11. | §4 |
| V8 | P1 | `canonical` and `hreflang` are relative URLs (no `metadataBase`); Lighthouse SEO 82. No `x-default`. `/cv` pages reuse the homepage `og:title`. Overlaps K1/K4. | Lighthouse `canonical`, `hreflang` |
| V9 | P1 | AFC card (`hasDeliverable: false`) shows **both** an aside tag `SORTIE · ACQUIS` and the standard `SORTIE · LIVRÉ` label — contradictory, and "livré" is wrong for an immersion. Root cause for C3: `Sections.tsx:148-170`. | `crops/experiences-1440.png` |
| V10 | P1 | Stack tags clipped at 768 px (see §8); `overflow-x: clip` hides it instead of wrapping. | `metrics.json` `/fr@768` |
| V11 | P2 | Uppercasing via `.toUpperCase()` in JSX changes the accessible text too (screen readers may spell out `CV PDF`-style strings); should be CSS `text-transform` on short labels only. Complements P2/D8. | §5 |
| V12 | P2 | 474 KiB of woff2 across 10 preloaded files (4 families incl. `latin-ext` subsets); mobile LCP 5.5 s. Feeds D9. | §3 |
| V13 | P2 | Mobile hero CTA order puts the secondary "Ma méthode" above the primary "Voir les réalisations". | `eyes-header-hero-375.png` |

## 10. Confirmed plan findings (spot-checked against the rendered page)

- **C1** Rebranding and ControlTorque `period: "2025"` (`fr.ts`), Safran internship 2026. ✅ confirmed
- **C2** Order Safran → SMIP → AFC. ✅ confirmed
- **C3** see V9. ✅ confirmed (the label sits in the aside, not before `ENTRÉE`)
- **C4** "Ingénieur méthode", "Assistant ingénieur", "Apprenti consultant"; meta title "ingénieur génie industriel". ✅ confirmed
- **C5** "Seul développeur" ×2, "≈ 19 300 lignes", "Co-fondateur : … développement", footer "Conçu et développé par". ✅ confirmed
- **C6** LinkedIn `linkedin.com/in/taha-ghadhab`. ✅ confirmed (not yet checked against the real profile)
- **C7** Anglais "Courant", no German. ✅ confirmed
- **H1** H1 "Observer, puis trancher une seule fois."; "Élève ingénieur" exists in content (`hero.role`) but is not visible in the hero. ✅ confirmed
- **H3** three hero CTAs. ✅ · **H4** no availability line. ✅ · **K1** no `og:image`, `twitter:card=summary`. ✅
- **A3** FIG numbering on `/fr`: `FIG. 01, 02, 01, 01, 03` — duplicates. ✅
- **A5** grid + expanded sheets both on the homepage. ✅
- **P6** "satisfaction estudiantine" (`fr.ts` highlights). ✅
- **S3** Baccalauréat present. ✅ · **S4** off-voice quote in `hero.signature`, rendered in À propos. ✅
