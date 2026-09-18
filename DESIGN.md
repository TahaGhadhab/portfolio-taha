# Silent Flight — design system

The one reference for the portfolio's colours, type, spacing, states and motion.
Everything below lives in `src/app/globals.css`, between `@theme` and the end of the `:root` blocks. **No rule and no component writes a colour, a font or a duration of its own.**

---

## 1. Two layers of tokens

| Layer | What it is | Who may read it |
|---|---|---|
| **Primitives** | A value named after its hue: `--vellum-50`, `--brass-400`, `--void-900`, `--sage-400`, `--red-400`… | Only the role layer, inside the token block. |
| **Roles** | What the colour *does*: `--color-text`, `--color-text-data`, `--color-accent`, `--color-border-ui`, `--color-surface-1`, `--color-status-ok`… | Every rule and every component. |

This is what stops a component from picking "the green one" without a reason — the mistake that produces unreadable text.

The previous palette is still in the file: `data-palette="original"` on `<html>` restores it without touching a single rule.

## 2. Colour roles

| Role | Value | Use | Contrast on `--color-bg` |
|---|---|---|---|
| `--color-bg` | `#0B0E0C` | the page | — |
| `--color-surface-1` | `#121714` | cards, tiles | — |
| `--color-surface-2` | `#18201B` | a tile under the pointer | — |
| `--color-text-strong` | `#EDF0E7` vellum | headings, names, key figures | 16.83:1 |
| `--color-text` | `#C9CEC3` | body copy | 12.10:1 |
| `--color-text-data` | `#8FA396` sage | figures, meta, labels | 7.25:1 |
| `--color-graphic` | `#EDF0E7` | wing and diagram strokes | 16.83:1 |
| `--color-accent` | `#E8A21C` brass | **action only** | 8.88:1 |
| `--color-accent-contrast` | `#0B0E0C` | text on a brass fill | 8.88:1 |
| `--color-border-ui` | `#5C6559` | anything clickable, and any boundary that carries meaning | 3.20:1 |
| `--color-border-subtle` | `#1F2922` | separators | decorative |
| `--color-rule` | `#333B31` | ornament only — **never a meaningful boundary** (1.67:1) | decorative |
| `--color-status-ok` | `#6FBF8F` | delivered, conforming | 8.80:1 |
| `--color-status-danger` | `#D9705F` | problem, rejection, non-conformity | 5.94:1 |

### Rules
- **Brass = action, or the single most important thing on screen.** Primary CTA, focus ring, hover, active filter, "you are here". Never a decoration, never a static label. Target: under 5 % of any viewport.
- **Sage = data.** Figures, units, meta, small labels.
- **Vellum = the strong voice.** Headings, names, and the key figure in a card.
- **`--color-rule` is ornament.** A flowchart box, a chip border, a button border are boundaries that must be seen: they use `--color-border-ui` (3.20:1, WCAG 1.4.11).
- **No status by colour alone.** Every state also carries a word and a dot (WCAG 1.4.1).
- Printing has its own tokens (`--print-ink`, `--print-rule`…): black on white, greys for hierarchy.

### Measured contrast (browser, computed styles, both languages, 375 and 1440 px)
30 distinct pairs, **0 failures**. Smallest margins: `--color-border-ui` on a lifted surface 3.07:1 (needs 3), `--color-status-danger` on a band 5.71:1 (needs 4.5). Full table: `audit/baseline/contrast.json`.

## 3. Type

Four families, no shared role:

| Family | Role | Token |
|---|---|---|
| Instrument Serif | headings (H1, H2) | `--f-title` |
| Archivo | interface: nav, buttons, brand, labels, proof captions | `--f-display` |
| Literata | body copy (`opsz` axis) | `--f-body` |
| Martian Mono | **numbers, code identifiers, short meta — never a sentence** | `--f-mono` |

- **Scale:** `--t--2 … --t-5`, fluid (`clamp`), roughly a 1.2 ratio. Two correction factors, because equal pixel sizes do not read as equal: `--fit-title: 1.16` (Instrument Serif), `--fit-mono: 0.92` (Martian Mono).
- **Tracking** is indexed on the size (`--tr--2 … --tr-3`); no rule writes `letter-spacing` by hand.
- **Measure:** `--measure: 58ch` (40ch on phones). Body line-height 1.66.
- **Uppercase** is a rendering choice, never content: the `.u` class applies `text-transform`, so a screen reader reads "Missions", not "M-I-S-S-I-O-N-S". Reserved for labels of three words or fewer. Code identifiers (`PyMuPDF`, `ConformityService`) keep their real case.
- **Loading:** `latin` subset only (it covers French, œ included), `display: swap`, and only the H1 face is preloaded.

## 4. Spacing & shape

- Spacing scale `--s-1` (0.25rem) … `--s-9` (7rem); page gutter `--edge`, frame `--frame`.
- **Shape language: chamfer on diagrams only.** Decision boxes in the flowcharts are cut at the corners because that is the drafting convention; UI (buttons, cards, chips) keeps a 2px radius. *Pending Taha's confirmation — the alternative is chamfer everywhere on the UI.*
- No drop shadows. Depth comes from three surfaces and from parallax on the wing.

## 5. Interaction states

| State | Treatment |
|---|---|
| hover | brass on text and borders, `--d-snap` (220 ms) |
| focus-visible | `--focus-width` (2px) brass ring, `--focus-offset` (4px), visible on every surface |
| active | `translate: 0 1px` |
| selected (filter) | brass border + brass tick + `aria-pressed` |
| disclosure open | label swaps, `aria-expanded` carried by `<summary>` |

## 6. Motion

| Token | Value | Use |
|---|---|---|
| `--ease-commit` | `cubic-bezier(.13,.9,.16,1)` | anything answering a finger |
| `--ease-glide` | `cubic-bezier(.19,1,.22,1)` | the arrival of content |
| `--d-blink` | 130 ms | the eye blink |
| `--d-snap` | 220 ms | hover, focus |
| `--d-commit` | 520 ms | the wing opening, section arrivals |
| `--d-hold` | 850 ms | the stillness before the wing opens (read by `Flight`) |
| `--d-arrive` | 820 ms | the hero sequence |
| `--stagger` | 60 ms | gap between two items of one arrival |

Section arrivals are deliberately faint (6 px rise over 520 ms) so they never compete with the hero's single gesture.

**`prefers-reduced-motion: reduce`** removes: the hold, the wing opening, the blink, pupil tracking, arrivals, card tilt, the scroll-progress bar. Nothing is hidden — content lands in its final state.

## 7. The mark

The owl is a behaviour, not a bird: stay still, watch, commit once. Two eye sites never show at the same time — while the hero wing is on screen, `data-eye-in-view` on `<html>` fades the header mark out; it returns once you scroll past. Minimum size 28 px (16 px for the favicon, which carries its own background).

## 8. Checks to re-run after any change

```bash
# 0 raw colours and 0 raw font families outside the token block
grep -nE "#[0-9a-fA-F]{3,8}|rgba?\(|hsla?\(|oklch\(" src/app/globals.css | grep -v "var(--"
grep -n "font-family" src/app/globals.css | grep -v "var(--f"
# 0 primitives referenced outside the token block
grep -nE "var\(--(void-9|vellum|sage|brass|red-|green-|edge-5|rule-6|grey|black|white)" src/app/globals.css
```
Exceptions, documented: `src/app/icon.svg` (a favicon has no access to CSS variables), `viewport.themeColor` in `[lang]/layout.tsx`, and `[lang]/opengraph-image.tsx` (`ImageResponse` does not read CSS).
