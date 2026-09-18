# Token inventory — before and after Phase 2B

Every colour value that existed before the phase, and the role it now carries. Counts are `var()` references in `src/app/globals.css` at the start of the phase.

## Colour

| Old token | Old value | Uses | New role | New value |
|---|---|---|---|---|
| `--color-void` / `--void` | `#0B0E0C` | 18 | `--color-bg` | unchanged |
| `--color-void-high` | `#0F1412` | 1 | `--color-bg-high` | unchanged |
| `--color-void-deep` | `#060806` | 1 | `--color-bg-deep` | unchanged |
| `--color-void-lift` | `#12160F` | 8 | `--color-surface-1` | `#121714` |
| `--color-lift-hover` | `#191D16` | 2 | `--color-surface-2` | `#18201B` |
| `--color-line` | `#20261F` | 23 | `--color-border-subtle` | `#1F2922` |
| `--color-line-lit` | `#333B31` | 26 | `--color-rule` (ornament only) + `--color-border-ui` where the boundary carries meaning | unchanged |
| `--color-edge` | `#5C6559` | 18 | `--color-border-ui` | unchanged |
| `--color-snow` | `#F5F7F1` | 26 | `--color-text-strong` + `--color-graphic` | `#EDF0E7` |
| `--color-snow-2` | `#C5CCC2` | 22 | `--color-text` | `#C9CEC3` |
| `--color-snow-3` | `#8B948A` | 33 | `--color-text-data` | `#8FA396` |
| `--color-iris` | `#FDA51E` | 70 → 50 | `--color-accent` + `--color-focus` | `#E8A21C` |
| `--color-fault` | `#D9705F` | 9 | `--color-status-danger` | unchanged |
| `--color-ok` | `#6FBF8F` | 6 | `--color-status-ok` | unchanged |
| `--color-veil` / `-grid` / `-grid-fine` / `-edge-lit` | vellum at 1.6–14 % | 7 | same names, now derived from `--vellum-50-rgb` | re-tinted |
| `--color-bloom` / `--color-sky` | cold tints | 2 | `--bloom` / `--sky`, from `--ice-rgb` / `--mist-rgb` | unchanged |
| `--color-sheen` / `--color-chip-on` | brass at 10–13 % | 2 | same names, from `--brass-400-rgb` | re-tinted |

## Raw values that were not tokens at all

| Raw value | Where | Now |
|---|---|---|
| `#F7CB63`, `#E8A21C`, `#8E5A12` | eye gradient, `Flight.tsx` | `--color-accent-highlight`, `--color-accent`, `--color-accent-shade` |
| `#F5F7F1` | eye core gradient, `Flight.tsx` | `--color-graphic` |
| `rgba(6,9,7,.88)` | sticky bar background | `--color-bar` |
| `rgba(0,0,0,.6)` | vignette | `--color-vignette` |
| `rgba(232,162,28,.055)` | tile sheen | `--sheen-soft` |
| `#000` ×2 | radial masks | `--mask-solid` |
| `#fff`, `#000`, `#333`, `#555`, `#666`, `#999` (33 uses) | print stylesheet | `--print-paper`, `--print-ink`, `--print-ink-2`, `--print-muted`, `--print-rule-strong`, `--print-rule` |

## Accepted exceptions (cannot read CSS variables)

| File | Why |
|---|---|
| `src/app/icon.svg` | a favicon is served on its own, outside the page |
| `viewport.themeColor` in `[lang]/layout.tsx` | a meta value, not a style |
| `[lang]/opengraph-image.tsx` | `ImageResponse` renders outside the browser |

## Where brass was removed (D5)

Now sage (data) or vellum (strong text): section numbers, `fold-label`, skills group titles, the classic-view role and section headings, step numbers, capsule result, card metrics and their bars, the About pull-quote bar, `linkout` and `mailto` at rest, the mobile-menu numbers.

Brass kept: primary CTA, focus ring, `::selection`, skip link, all hover states, the active filter chip, "you are here" in the nav and rail, the scroll-progress bar, the single key element in each diagram, and the eye.
