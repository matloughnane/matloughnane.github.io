---
name: Album Leaf
description: A family photo album someone is showing you — oxblood cloth, card with tooth, every photograph held on gummed corner mounts.
colors:
  ground: "#efeae2"
  leaf: "#f7f3ec"
  edge: "#ded6ca"
  corner: "#c6baa9"
  ink: "#221c18"
  ink-2: "#6e6459"
  cloth: "#7e1220"
  on-cloth: "#f1e7dc"
  reserve: "#b02318"
  ground-dark: "#141215"
  leaf-dark: "#1e1b20"
  edge-dark: "#2a252c"
  corner-dark: "#312a33"
  ink-dark: "#f4efe9"
  ink-2-dark: "#a2969f"
  cloth-dark: "#7e1220"
  on-cloth-dark: "#f1e7dc"
  reserve-dark: "#e2554c"
  spine-fill: "#5e0d18"
typography:
  display:
    fontFamily: "Archivo Black, Archivo Variable, sans-serif"
    fontSize: "74px"
    fontWeight: 400
    lineHeight: 0.94
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Archivo Black, Archivo Variable, sans-serif"
    fontSize: "58px"
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: "-0.03em"
  display-md:
    fontFamily: "Archivo Black, Archivo Variable, sans-serif"
    fontSize: "62px"
    fontWeight: 400
    lineHeight: 0.94
    letterSpacing: "-0.03em"
  display-sm:
    fontFamily: "Archivo Black, Archivo Variable, sans-serif"
    fontSize: "46px"
    fontWeight: 400
    lineHeight: 0.94
    letterSpacing: "-0.03em"
  headline-md:
    fontFamily: "Archivo Black, Archivo Variable, sans-serif"
    fontSize: "54px"
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: "-0.03em"
  headline-sm:
    fontFamily: "Archivo Black, Archivo Variable, sans-serif"
    fontSize: "42px"
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: "-0.03em"
  entry-title:
    fontFamily: "Archivo Black, Archivo Variable, sans-serif"
    fontSize: "52px"
    fontWeight: 400
    lineHeight: 0.98
    letterSpacing: "-0.03em"
  entry-title-sm:
    fontFamily: "Archivo Black, Archivo Variable, sans-serif"
    fontSize: "40px"
    fontWeight: 400
    lineHeight: 0.98
    letterSpacing: "-0.03em"
  colophon:
    fontFamily: "Archivo Black, Archivo Variable, sans-serif"
    fontSize: "46px"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.03em"
  colophon-sm:
    fontFamily: "Archivo Black, Archivo Variable, sans-serif"
    fontSize: "38px"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.03em"
  section:
    fontFamily: "Archivo Variable, system-ui, sans-serif"
    fontSize: "32px"
    fontWeight: 600
    lineHeight: "1.2"
    letterSpacing: "-0.02em"
  shelf:
    fontFamily: "Archivo Variable, system-ui, sans-serif"
    fontSize: "19px"
    fontWeight: 600
    lineHeight: "1.4"
    letterSpacing: "normal"
  title:
    fontFamily: "Archivo Variable, system-ui, sans-serif"
    fontSize: "21px"
    fontWeight: 600
    lineHeight: "28px"
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Archivo Variable, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: "28px"
    letterSpacing: "normal"
  body-small:
    fontFamily: "Archivo Variable, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: "24px"
    letterSpacing: "normal"
  label:
    fontFamily: "Archivo Narrow Variable, Archivo Variable, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: "1.4"
    letterSpacing: "0.16em"
  label-small:
    fontFamily: "Archivo Narrow Variable, Archivo Variable, sans-serif"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: "1.4"
    letterSpacing: "0.14em"
rounded:
  none: "0"
  pill: "9999px"
spacing:
  gutter: "20px"
  gutter-wide: "56px"
  rule-gap: "36px"
  column-gap: "40px"
  row-gap: "44px"
  section-gap: "44px"
  section-gap-wide: "48px"
  cover-gap: "96px"
  spine-width: "84px"
components:
  mounted-photo:
    backgroundColor: "{colors.leaf}"
    rounded: "{rounded.none}"
    size: "26px | 30px | 32px | 34px corner mount"
  entry-card-title:
    textColor: "{colors.ink}"
    typography: "{typography.title}"
    height: "56px"
  entry-caption:
    textColor: "{colors.ink-2}"
    typography: "{typography.label-small}"
  lead-entry-title:
    textColor: "{colors.ink}"
    typography: "{typography.headline}"
  lead-entry-title-hover:
    textColor: "{colors.reserve}"
  lead-entry-link:
    textColor: "{colors.reserve}"
    rounded: "{rounded.none}"
    padding: "0 0 4px 0"
  pagination-link:
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0 0 4px 0"
  pagination-link-disabled:
    textColor: "{colors.ink-2}"
  nav-link:
    textColor: "{colors.ink-2}"
    typography: "{typography.body-small}"
  nav-link-active:
    textColor: "{colors.ink}"
    typography: "{typography.body-small}"
  shelf-filter:
    textColor: "{colors.ink-2}"
    typography: "{typography.label-small}"
    padding: "0 0 4px 0"
  shelf-filter-active:
    textColor: "{colors.ink}"
    typography: "{typography.label-small}"
    padding: "0 0 4px 0"
  search-field:
    backgroundColor: "{colors.leaf}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "6px 14px"
  theme-toggle:
    textColor: "{colors.ink-2}"
    rounded: "{rounded.pill}"
    size: "36px"
  spine-plate:
    backgroundColor: "{colors.on-cloth}"
    rounded: "{rounded.none}"
    padding: "6px 6px"
  spine-letter:
    textColor: "{colors.on-cloth}"
    typography: "{typography.display}"
    size: "19px"
  back-cover:
    backgroundColor: "{colors.cloth}"
    textColor: "{colors.on-cloth}"
    rounded: "{rounded.none}"
    padding: "48px 20px"
---

<!-- Recorded from the built branch `redesign-album-leaf`. Seed key fa888a25 (Album Leaf, form candidate 3 of 7). Ground truth for everything below is the shipped code, not the direction contract in src/layouts/global-layout.astro; where the two disagree, the divergence is stated. -->

# Design System: Album Leaf

## Overview

**Creative North Star: "The Family Photo Album"**

This is not a site with an album theme applied to it. It is an album: oxblood book cloth down the left edge, card leaves with visible tooth, and every photograph held to the leaf by four gummed corner mounts. The reader is not browsing an index, they are being shown something. That single fiction settles almost every decision — why photographs are mounted rather than framed, why captions sit *under* titles in narrow uppercase, why the newest entry is the only thing in the album allowed to carry a red mark, and why nothing floats.

The world is materially specific and chromatically nearly silent. Two neutrals do the work of an entire palette (card and ink), one deep oxblood carries the binding, and one saturated red is spent exactly once per page. Density is generous rather than tight: pages breathe on a 20/56px gutter with 36–48px between sections, and the only thing competing for attention is a photograph. There are no gradients, no glass, no cards-with-shadows, no hero band — the direction contract's stated refusal (a full-bleed gradient hero over a grid of equal cards) is visible in the build as an absence, and the homepage's asymmetric spread, where the first entry of the grid runs across two columns, is what replaces it.

Light and dark are not inversions of one another. They are the same physical album under two lights: manila card on a table in daylight, and the black album closed in its case. The values in each rendition were authored from that scene, which is why the dark ground is a warm-neutral near-black rather than a mathematically flipped manila, and why the book cloth — a physical material — is byte-identical in both.

**Key Characteristics:**

- Two neutral renditions of one object, not a palette and its inverse
- Every photograph mounted on four square corner mounts; no photograph is ever a bare rectangle
- Blocked Archivo Black display lettering against small, wide-tracked Archivo Narrow captions
- One saturated red, reserved for the single most recent entry
- Radius 0 on everything that holds content
- Flat by default — exactly one shadow exists in the entire system
- Marks are drawn, not set from a glyph font

## Colors

Two renditions of one palette: a light `:root` and a `.dark` class, both defined in `src/styles/global.css` and exposed to utilities through `@theme inline` as `bg-ground`, `text-ink`, `border-edge`, `text-reserve` and siblings. The names are the album's parts, not abstractions.

### Primary

- **Oxblood Book Cloth** (`cloth`): the binding. It carries the fixed desktop spine, the mobile cloth band, and the back cover, always as background under the crosshatch weave. It is also the album's system colour — focus rings, `::selection`, `accent-color` and the input caret all take cloth. Identical in both renditions, because a bound cover does not change colour when you move the album into the light.
- **Album Cream** (`on-cloth`): the only text colour permitted on cloth, and the stock of the pasted spine label. 8.63:1 on cloth in both renditions. In dark, where cloth sits at only 1.77:1 against the ground, this colour also takes over the focus outline so the ring stays visible.

### Secondary

- **Reserve Red** (`reserve`): the single saturated red. See The Reserve Rule below — it has exactly one job. Light 5.66:1 on ground; dark 5.00:1, lightened to `#e2554c` specifically so it clears the floor against a near-black ground.

### Neutral

- **Manila Card / Album Black** (`ground`): the leaf you are looking at. It carries a fine turbulence-noise tooth as a background image — 0.035 opacity on manila, 0.055 in dark, because black album card takes grain harder than manila does. It reads as stock, not as texture.
- **Leaf** (`leaf`): a half-step lighter (or lighter-still-dark) than the ground. It backs a mounted photograph while it loads, and backs the expanded search field.
- **Edge** (`edge`): every hairline in the album — section rules, nav underline, tag chip strokes, the diagonal score line across each corner mount. 1px, never heavier.
- **Corner** (`corner`): the gummed corner mounts themselves, and the scrollbar thumb.
- **Ink** (`ink`): all primary text. 14.06:1 light, 16.30:1 dark.
- **Ink Two** (`ink-2`): captions, descriptions, inactive navigation, disabled pagination. 4.83:1 light, 6.57:1 dark — tinted from the ground rather than a grey, so secondary text reads as faded rather than as a different material.

### Named Rules

**The Reserve Rule.** The saturated red marks the most recent entry and nothing else. In the build it appears in exactly three places, all on the lead entry: the 10×10px square beside its caption, the title's hover colour, and the rule under its read link. Every other red-shaped opportunity is deliberately refused — pagination links take ink, shelf filters take ink, search-result hover takes an ink underline, the spine's scroll fill takes a deeper cloth (`#5e0d18`), and browser chrome takes cloth. The audit test: if a screen shows red in two unrelated places, one of them is wrong.

**The Two Renditions Rule.** Light and dark are the same album under different light, not a colour and its inverse. Author each rendition's neutrals from the scene; do not derive one from the other. Cloth and on-cloth do not change between them.

**The Cloth-Is-Chrome Rule.** Anything the browser draws that the design did not — focus ring, text selection, caret, form accent, scrollbar — takes cloth or corner, never reserve. In dark, the focus outline swaps to on-cloth, because cloth against a near-black ground is 1.77:1 and effectively invisible.

## Typography

**Display Font:** Archivo Black (self-hosted via `@fontsource/archivo-black`)
**Body Font:** Archivo Variable (self-hosted via `@fontsource-variable/archivo`, with `system-ui` fallback)
**Caption Font:** Archivo Narrow Variable (self-hosted via `@fontsource-variable/archivo-narrow`)

**Character:** One family in three cuts, which is why the page reads as a single hand. Archivo Black is used the way a label is stamped — heavy, tight (−0.03em), set below single line-height so multi-line names lock into a block. Archivo Narrow does the opposite job at the opposite scale: small, uppercase, opened to 0.14–0.16em tracking, the width of a caption written along the bottom of a photograph.

### Hierarchy

- **Display** (Archivo Black 400, 46px → 62px at `sm` → 74px at `md`, line-height 0.94, −0.03em): the person's name on the home page and the About page, and nothing else at this size. Also the wordmark on the back cover at 38px → 46px.
- **Headline** (Archivo Black 400, 42px → 52px → 58px, line-height 0.95, −0.03em): the lead entry's title. Page titles ("All entries", a shelf name) take the same face at 42px → 54px; a post's own title takes 40px → 52px at line-height 0.98.
- **Title** (Archivo Variable 600, 21px, line-height 28px, −0.015em): entry card titles. Clamped to two lines with a reserved 56px min-height, so caption lines across a row sit in one lane regardless of title length.
- **Body** (Archivo Variable 400, 17px, line-height 28px): the running text of a page, held to 46–60ch.
- **Body Small** (Archivo Variable 400, 15px, line-height 24px): entry descriptions, secondary paragraphs, read links, pagination labels.
- **Label** (Archivo Narrow Variable 400, 13px, 0.16em tracking, uppercase): the nav's entry-count line, section headings like "THE ALBUM, SHELF BY SHELF", figure captions, the back cover's location line.
- **Label Small** (Archivo Narrow Variable 400, 12px, 0.14em tracking, uppercase): the caption under an entry — its shelf and its date.
- **Spine** (Archivo Black 400, 19px, line-height 20px, +0.02em): the name stamped one letter per line down the cloth. Positive tracking here, unlike every other display use, because stacked single letters need air.

### Named Rules

**The Caption-Under Rule.** The caption belongs beneath the thing it captions, never above it. Shelf and date sit under an entry's title in Archivo Narrow uppercase; the title always leads. No eyebrow, no kicker, no label above a heading.

**The Two Voices Rule.** Display type is heavy, tight, and negative-tracked; caption type is narrow, small, uppercase, and wide-tracked. There is no third register — anything that isn't one of those two is set in Archivo Variable at body weight. Never letterspace body text and never set a caption in the display face.

**The Written-Out Rule.** Counts in caption lines are spelled out as words ("THIRTY-SEVEN ENTRIES · 2020—2026"), the way someone writes on the back of a photograph, not set as figures. This applies to the album's own self-description; per-shelf counts inside filters stay numeric.

## Layout

The page is a spread, not a container. Content runs to a 20px gutter on mobile and 56px from `md` up, with no centred max-width on album pages — width is bounded by the viewport and by measure (`max-w-[46ch]` on entry copy, `max-w-[60ch]` on the intro). The one exception is a post, which centres to `max-w-3xl` because it is running prose.

The desktop spine is `position: fixed` at 84px wide, and the whole document body is inset by exactly that (`md:pl-[84px]`) so the cloth runs the full height of every page without ever overlapping content. Below `md` the spine unfolds into a horizontal cloth band across the top and the inset disappears — vertical letterforms do not survive a 390px viewport.

Vertical rhythm is coarse and consistent: 44px between sections on mobile, 48px from `md`; 36px between a section's top rule and its first content; 44px of row gap and 40px of column gap inside a grid; 96px of air before the back cover. Page padding is 32/44px vertical at the two breakpoints.

The entry grid is 1 → 2 (`sm`) → 3 (`lg`) columns. On the homepage the first card of the grid spans two of the three columns, and the spread is cut to exactly five entries so the rows fill without an orphan. Paginated shelves run 12 per page with the newest entry pulled out above the grid as the lead, so page 1 carries 13.

### Named Rules

**The Spread Rule.** A row of entries is a page someone laid out, not six identical slots. When a grid can be broken asymmetrically — one card spanning two columns, an entry lifted out to lead — break it, and cut the count so no row is left with an orphan.

**The Hairline Rule.** Sections are separated by a 1px `edge` rule with 36px of space beneath it. That rule is the only divider in the system: no boxes, no panels, no filled section backgrounds.

## Elevation & Depth

The album is flat. There are no elevation tiers, no shadow scale, and no surface-container ramp; depth comes from three physical devices instead. First, tonal layering — `leaf` sits a half-step off `ground`, which is enough to read as one sheet resting on another. Second, texture — a fractal-noise tooth on the body and a 45°/−45° crosshatch weave on every cloth surface, so cloth and card are legible as different materials rather than as different colours. Third, the corner mounts themselves, which imply that a photograph is a separate object lying *on* the leaf.

Exactly one shadow exists in the build.

### Shadow Vocabulary

- **Pasted label** (`box-shadow: 0 1px 3px rgb(0 0 0 / 0.35)`): only on the spine's cream plate, paired with a `rotate(-1.5deg)`. Its job is to say the label was stuck onto the cloth rather than printed into it. It is not a reusable elevation token.

### Named Rules

**The Flat Leaf Rule.** Nothing in the album casts a shadow. Cards, photographs, the nav, the search field, the mobile menu and the back cover are all flat at rest and flat on hover. If a surface needs to separate from another surface, use the `edge` hairline or the `leaf`/`ground` tonal step — never a shadow, and never a shadow appearing on hover.

## Shapes

Square. Radius is 0 on every surface that holds content: photographs, their corner mounts, the spine plate, entry cards, the reserve marker square, section rules, and the cloth bands. The `--radius` scale inherited from the shadcn preset is still present in the stylesheet but the album never reaches for it.

The recurring silhouette is the corner mount: a right triangle whose hypotenuse runs across the photo corner, filled in `corner` with a 1px `edge` line scored along the diagonal. Four of them per photograph, drawn as four separate fixed-size SVGs rather than one stretched overlay, so they stay square at any container size. Mount size is chosen against the photograph's size — 26px on grid cards, 30px on the portrait, 32px on a post header, 34px on the lead entry.

Icon marks share one hand: a single 1.6–1.7px stroke, round caps and joins, 24×24 viewbox, `currentColor`. Three category marks (a route line for Journeys, a covered dish for Kitchen, a pair of code brackets for Builds), one arrow drawn at both directions, and the theme toggle's sun and moon.

### Named Rules

**The Square Corner Rule.** Radius 0 on anything that holds content. The only rounded forms in the album are the search field and post tag chips; they are carried inconsistencies, not a shape token to extend.

**The Corner Mount Rule.** Every photograph in the album is held by four gummed corner mounts. The motif does not stop at the door of an entry, a post header, or a result — a photograph without mounts is not part of this album.

**The Drawn Mark Rule.** Marks are drawn as inline SVG at 1.6–1.7 stroke with round caps, in the album's own hand. No glyph icons, no unicode arrows, no icon fonts, and no borrowed icon set at a different stroke weight.

## Components

### Mounted Photo

The album's core motif and the only image treatment that exists. A flat `leaf`-backed frame with `object-cover` fill and four absolutely positioned corner SVGs above it, marked `pointer-events-none` and `aria-hidden`. On hover — of the photo or of any ancestor link — all four mounts tighten to `scale(0.82)` over 420ms on `cubic-bezier(0.16, 1, 0.3, 1)`, as if the album's corners had gripped the print. This is the system's signature interaction; nothing else in the album animates on hover.

### Entry Card

- **Structure:** photo, then title, then caption, then description — the order a leaf is actually laid out.
- **Shape / background:** no card. No border, no fill, no radius, no padding of its own; the photograph and the type are simply stacked with 14px between them.
- **Title:** 21px semibold, two-line clamp with a reserved 56px min-height, underlined on group hover with `ink-2/50` at 4px offset.
- **Caption:** category mark at 15px beside a 12px Archivo Narrow uppercase line reading `SHELF · MON YYYY`.
- **Interaction:** only the title is a link; a stretched `after:absolute after:inset-0` pseudo-element makes the whole card clickable without dragging the photo alt, caption and excerpt into the link's accessible name.
- **Entrance:** entries settle in on scroll — see Motion below.

### Lead Entry

The newest entry, and the only component permitted to use reserve. A full-width row above a top rule: a 34px-mounted photograph at 58% width beside the title in Archivo Black at up to 58px, a 10×10px reserve square beside the caption, a 46ch description, and a read link underlined in reserve. The photo link is `tabindex="-1"` and `aria-hidden` since the title link already leads to the same place.

### Navigation

- **Style:** a single row under a 1px `edge` rule, with the album's spelled-out entry count on the left in Archivo Narrow and the links on the right.
- **States:** inactive links are `ink-2` at 14px; the current page is `ink` at semibold with `aria-current="page"`. No underline, no pill, no background.
- **Mobile:** the count line hides and a three-bar toggle takes its place, transforming into an X on open; the menu is a bordered column below the nav carrying the same links at 16px plus the count line.

### Shelf Filters

A wrapped row of Archivo Narrow uppercase links, each pairing its category mark with a label and count. Active takes a 2px `ink` bottom rule and semibold `ink`; inactive takes a transparent 1px bottom rule and `ink-2` that goes to `ink` on hover. The reserved bottom-border on the inactive state keeps the row from shifting when selection changes.

### Pagination

Prev/Next links at 15px semibold `ink` with a 1px `ink` bottom rule and a drawn arrow, plus a centred `PAGE n OF m` caption. Disabled sides render as spans at full `ink-2` with no rule — dimming further would drop them below the contrast floor, and the missing rule already reads as unavailable. Renders nothing at all when there is only one page.

### Search Field

Collapsed, it is an 18px search mark in `ink-2`. Expanded, it is a `leaf`-filled pill ruled with the same `edge` hairline as the nav, containing the mark, the input, and a close mark. Focus is delegated: `has-[input:focus-visible]` puts the site's standard cloth outline (on-cloth in dark) around the whole field rather than around the bare input. Expansion animates `scaleX(0.6) → 1` with opacity over 300ms.

### Theme Toggle

A 36px round hit area with no background, showing the album you would switch to rather than the one you are in — moon in light, sun in dark. `aria-pressed` and the label are re-synced on every toggle so the announced action always describes what pressing it will do.

### Spine

The signature component. On desktop, a fixed 84px cloth column running the full viewport height: the favicon on a cream plate rotated −1.5° at the top, then LOUGHNANE stamped one letter per line in Archivo Black. Behind them, a reading-progress fill in a deeper cloth that grows top-down with scroll — animated as `scaleY` on a compositor-friendly transform rather than as height, and carrying the same crosshatch weave so it reads as the same cloth in shadow rather than a second colour. Below `md` the whole thing becomes a horizontal cloth band with just the plate.

### Back Cover

The album closes on the cloth it opens with: a full-width `cloth` footer 96px below the last content, carrying a location caption and outbound links in `on-cloth` (underlined at 40% opacity, going full on hover) on the left, and the wordmark in Archivo Black at up to 46px on the right.

### Motion

Four authored moments, all gated on `prefers-reduced-motion: reduce`:

- **Corner mounts tighten** on photo hover — `scale(0.82)`, 420ms, `cubic-bezier(0.16, 1, 0.3, 1)`.
- **Entries settle** onto the leaf on scroll — opacity and a 14px rise over 620ms on the same curve, staggered up to 3 × 70ms, driven by an IntersectionObserver with `rootMargin: 0px 0px -10% 0px` at 0.1 threshold.
- **Spine progress** fills as you read — `scaleY`, 120ms linear, recomputed once per animation frame.
- **Search expands** — `scaleX` and opacity, 300ms ease-out.

**The Visible-By-Default Rule.** Entries ship visible in the markup and are only ever hidden by script, and a 1600ms failsafe reveals anything the observer missed. No animation is permitted to be the reason content is invisible — if the script fails, the page must still read.

## Do's and Don'ts

### Do:

- **Do** mount every photograph on four corner mounts, scaling the mount to the photo (26px on grid cards, 30–34px on hero-scale images).
- **Do** spend reserve red on the single most recent entry and nowhere else; use `ink` for every other emphasis, and `cloth` for anything the browser draws.
- **Do** author light and dark as two renditions of the same object, keeping `cloth` and `on-cloth` identical across both.
- **Do** put the caption under the title in Archivo Narrow uppercase at 12–13px with 0.14–0.16em tracking.
- **Do** separate sections with a single 1px `edge` rule and 36px beneath it.
- **Do** draw new marks as inline SVG at 1.6–1.7 stroke with round caps, in `currentColor`.
- **Do** break a grid asymmetrically and cut the entry count so no row ends in an orphan.
- **Do** gate every animation on `prefers-reduced-motion` and ship content visible by default.
- **Do** hold running copy to 46–60ch and centre only a post's prose column (`max-w-3xl`).

### Don't:

- **Don't** add a shadow. The one shadow in the system belongs to the spine plate and does not generalise.
- **Don't** round a surface that holds content. The album is square; the search field's and tag chips' pills are inherited inconsistencies, not permission.
- **Don't** use reserve for a focus ring, a hover state, a link colour, a badge, or a second "important" thing on the same page.
- **Don't** reach for the legacy tokens still sitting in `@theme` (`--color-primary` teal, `--color-accent` coral, `--color-muted`, `--background-image-grid`, the marquee keyframes) or the shadcn oklch neutral set. They predate this world and belong to no surface in it.
- **Don't** set a unicode arrow or a glyph icon; the album has a drawn arrow component and three drawn category marks.
- **Don't** put a label, count, or eyebrow above a heading.
- **Don't** letterspace body text, and don't set caption-scale type in Archivo Black.
- **Don't** introduce a full-bleed gradient hero, a glass panel, or a grid of six identical bordered cards — the album exists as a refusal of exactly that.
- **Don't** animate `height` or `top` for a scroll-driven effect; use a compositor transform.
