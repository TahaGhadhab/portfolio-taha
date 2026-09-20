# Portfolio design and UX audit

Date: 2026-09-20
Branch: `codex/portfolio-fiber-polish`
Baseline: `master` (the repository's existing default branch).

## Scope and preservation

- The French/English content files, project facts, contact information and PDF resumes are unchanged from `master`.
- All nine main sections retain their order and anchor IDs. Locale routes and the plain CV remain available.
- Visual assets are decorative. The real portfolio information remains server-rendered HTML.
- Original Instrument Serif, Literata, Archivo and Martian Mono font roles are retained.

## Design and reading experience

- Graphite and cool mineral backgrounds connect adjacent sections; gold is reserved for signals and interactions.
- The original owl is paired with a newly generated black optical-fiber feather with yellow-gold luminous tips.
- Hero: layered image motion, pointer parallax, travelling filament highlights, staggered text and an accessible pause control.
- Hero motion stops outside the viewport, in a hidden tab, on pause, and for reduced-motion preferences.
- Experience summaries open complete dossiers. Project cards open the corresponding dossier and focus its summary.
- Closed project dossiers are omitted from the enhanced overview, avoiding a second list of the same projects.
- Mobile projects use a swipeable, scroll-snapping row with previous/next controls and a partial next card.
- Method steps use native exclusive disclosures. Diagrams, certification descriptions, skill evidence and positioning details remain available on demand.
- Education and engagement use two columns on desktop. There is no forced nested scrolling in long dossiers.
- Disclosure content remains in the document; without JavaScript, native summaries provide access to the complete project information.

## Issues corrected

- Inconsistent light-section text/diagram contrast.
- Oversized section spacing and duplicated project overview/detail content.
- Large reveal blocks that could remain invisible due to an intersection threshold.
- Sidebar/content collision on narrower desktop screens.
- Hero text overlapping the owl's eye at tablet width.
- Mobile menu focus escape, missing focus restoration, and scroll lock after resizing to desktop.
- Project animation-frame cleanup when filtering cards out.
- Brand link not reliably returning to the top of the portfolio.

## Verification performed

- `npm run lint`: pass.
- `npm run build`: pass; all FR/EN portfolio and CV pages statically generated.
- `git diff --check`: pass.
- `npm audit --omit=dev`: zero reported vulnerabilities at audit time.
- HTTP 200: `/fr`, `/en`, `/fr/cv`, `/en/cv`, both PDFs and both image assets. `/xx`: 404.
- Browser inspections at 320, 390, 768, 1280, 1600 and 1920 px. No document-level horizontal overflow in the checked layouts.
- Tested locale navigation, mobile menu, Tab/Shift+Tab trapping, Escape, focus restoration and desktop resize while the menu was open.
- Tested project filtering, card-to-dossier navigation, direct dossier URL reload, keyboard close and focus return to the originating card.
- Tested expand-all isolation between experience and projects, exclusive method steps and skill-evidence disclosure.
- Verified hero pause/resume and offscreen suspension through computed animation state.
- Verified both artwork assets load, the page has one H1, and section anchor targets exist.
- Static token contrast ratios: primary text 16.58:1; body text 10.99:1; metadata 6.93:1; gold 9.44:1; button text 10.87:1. These are token checks, not a complete WCAG certification.

## Measured improvements

- French desktop project overview at 1280 px: approximately 6,288 px before progressive disclosure, 1,176 px after (81% shorter initially). All information is still accessible.
- Final French desktop document: approximately 7,597 px before expanding details.
- Final source image payload: 892,462 bytes combined. Next Image additionally serves responsive, lazy-loaded variants; only the hero is prioritized.
- No new animation framework, video, WebGL scene or continuously running JavaScript animation loop.

## Remaining validation

- Real-device Safari/iOS and Android testing, screen-reader testing and field Core Web Vitals remain release checks.
- Reduced-motion and no-JavaScript fallbacks were reviewed in code; those browser modes were not emulated by the available preview controls.
- No Lighthouse score is claimed. Local development timings are not production performance evidence.
- Next.js reports a non-blocking lockfile outside this repository in the parent user directory. No files outside this project were changed.
- This audit was completed before publication. Subsequent commits and branch publication are recorded in Git history; merging and deployment are outside the audit scope.

## Asset provenance

- `public/images/fiber-owl-hero.webp`: user's supplied owl, format-compressed for the web.
- `public/images/fiber-feather.webp`: generated for this redesign and revised against the supplied owl to match its black optical fibers and sparkling yellow-gold light.
- Original supplied and generated PNG files remain untouched outside the repository.
