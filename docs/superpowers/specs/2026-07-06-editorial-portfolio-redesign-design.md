# Editorial Portfolio Redesign

**Date:** 2026-07-06
**Goal:** Rebuild `src/app/page.tsx` in the print-deck / editorial style of `public/design_idea.pdf`. Content stays the same; the look changes.

## Constraints

- Same content as today: projects, experience, skills, achievements, education, "beyond", contact. No data removed.
- Palette + fonts already match the PDF (`#ebedef` ice-blue, `#8f240d` brick, Bodoni Moda serif, Spline Sans Mono, Big Shoulders Display). No palette change needed.
- Add one font: **Caveat** (Google), for handwriting script accents only.
- Keep subtle web motion: scroll fade-up, card/photo hover, marquee ticker.
- Light base overall; brick-red used as full-bleed contrast sections (PDF rhythm).

## Look & feel (from the PDF)

- Full-screen sections alternating **ice-blue** and **brick-red**.
- Huge Bodoni serif display; Spline mono for labels/body-mono; Caveat script for small accents.
- Deco marks: flower-asterisk, globe, star-smiley, stacked-chevron logo — inline SVG.
- Tilted framed photos (CSS `rotate()`), giant faded name behind hero.
- Print-like generous whitespace; centered and split layouts.

## Sections (top → bottom)

1. **Nav** — keep current glass nav + links (Work / About / Beyond / Résumé). Restyle to fit light editorial (already close).
2. **Hero** (ice-blue) — giant faded name behind; `titi.png` centered portrait; role label left, "(&) Content Creator" right; tagline bottom-left. Uses `KineticText` for the name. Drop RetroGrid / dotgrid / hero-vignette.
3. **Intro** (brick-red) — "Hi, I'm Tiavina!" heading + About opener paragraph; Caveat "what i do"; list built from skill categories.
4. **Location** (brick-red) — Caveat "location" / "work" labels; Antananarivo + availability; one tilted framed photo center.
5. **Selected Work title** (ice-blue) — deco icons row (asterisk/globe/star-smiley) + big serif "Selected Work".
6. **Projects** — thumbnail row `> 01 > 02 > 03 > 04` with mono captions; existing project images, links, GitHub, badges kept. Card hover retained.
7. **Experience / Skills / Achievements / Education** (ice-blue) — same content, editorial spacing + type. Marquee tech ticker kept between hero-area and work (or under intro — implementer picks the cleaner spot).
8. **Beyond** (ice-blue) — same content (basketball / MIT / culture), restyled to editorial cards.
9. **CTA + Footer** (brick-red) — split giant serif "LET'S WORK / TOGETHER"; mono email + portfolio link; Caveat signature; socials + footer meta.

## Components / files

- **`src/app/page.tsx`** — rewrite. Same data arrays; new markup + section styling.
- **`src/app/globals.css`** — add: `--ff-script` (Caveat) + `--font-script` theme token; red-section helper (bg + inverted text/border tokens); deco/tilt utilities. Remove RetroGrid-specific CSS if any. Keep grain, marquee, fade-up, card, tag-pill.
- **`src/app/layout.tsx`** — add `&family=Caveat:wght@400;600` to the Google Fonts href.
- **`src/components/ui/deco-icons.tsx`** (new) — small inline-SVG marks: `FlowerAsterisk`, `Globe`, `StarSmiley`, `ChevronMark`. `className` prop for sizing/color.
- **`src/components/ui/retro-grid.tsx`** — delete (unused after redesign).
- Keep `kinetic-text.tsx`, `marquee.tsx`.

## Red-section handling

Brick-red sections need inverted colors (light text/borders on red). Approach: a `.section-red` class setting `background: var(--accent)` and overriding `--foreground` / `--muted-foreground` / `--border` locally (CSS custom-property scoping) so existing utility classes (`text-foreground`, `text-muted-foreground`, `border-border`) invert automatically inside. Avoids rewriting every child's color.

## Motion

Reuse existing `.animate-fade-up`, `.project-card` hover, marquee. Add a light `hover:rotate-0` transition on tilted photos. Respect `prefers-reduced-motion` (already handled for fade-up; extend to tilt if needed).

## Out of scope

- No new copy/content, no new photos beyond `titi.png` (and existing project images).
- No CMS, no dark-mode toggle, no unrelated refactor.

## Testing / verification

Static portfolio page — verify by running the app and eyeballing each section against the PDF:
- Sections alternate ice-blue / brick-red, text readable on red.
- Hero portrait + faded name render; all project links/images intact.
- Caveat accents show; deco icons render; tilted photos straighten on hover.
- Responsive: mobile stacks cleanly (split CTA becomes stacked, thumbnail row wraps).
- `prefers-reduced-motion` kills animation.
- No console errors; `retro-grid` import removed.
