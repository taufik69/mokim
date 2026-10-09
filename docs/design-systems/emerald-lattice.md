# Emerald Lattice

## Essence
Calm, trustworthy, and community-minded. A deep emerald primary sits on clean white surfaces, grounded by a near-black forest green and warmed by soft gold accents. Full-bleed photographic heroes under a dark scrim, faint geometric lattice ornaments, and generously rounded white cards make the site feel welcoming and credible. It favors clarity and readability over decoration, and asks for action without pressure.

## Color Palette

### Backgrounds
- Base: `#ffffff` — page body, cards, inputs
- Soft surface: `#eef2f0` — tinted callout blocks, secondary button fill
- Card hover: `#fbfbfb` — card background on pointer hover
- Deep forest: `#0f2920` — footer, dark sections
- Glass header: `rgba(255,255,255,0.875)` + `backdrop-filter: blur(6px)` — floating nav bar over hero imagery
- Hero scrim: dark overlay (roughly 50–70% black, inferred) over full-bleed photos
- Gold panel: `#e8b65d` — featured form panel overlapping the hero
- Pale gold: `#f8de9e` — light warm tint
- Mint: `#cef5e3` — light success/primary tint

### Text
- Primary: `#0f2920` — headings and body copy (forest green, not pure black)
- Neutral dark: `#212b36` / `#1c252e` — card titles, small headings
- Body alt: `#333333` — some icon buttons, long-form text
- Secondary/muted: `#637381` — icons, meta text
- Inverse: `#ffffff` — on hero, footer, primary buttons
- Footer links: `#ffffff` with primary-green headings/accents

### Accents
- Primary: `#008e48` — CTAs, active nav, links, checkmarks, newsletter band
- Primary hover: `#006648`
- Primary tint: `rgba(0,142,72,0.3)` — selected segment in toggles
- Amber: `#d08322` — secondary text-link button color (warm counterpoint)
- Gold: `#e8b65d` — feature panels, secondary submit buttons on green

### Semantic
- Success: `#008e48` (shares primary)
- Error: `#ff3b30` — required-field asterisks, errors; `#e85d65` softer variant
- Info: `#4597e8`
- Warning: gold `#e8b65d` (inferred)

### Borders & Dividers
- Default: `1px solid rgba(145,158,171,0.12)` — dividers, subtle outlines
- Input: `1px solid rgba(145,158,171,0.2)`
- Strong: `rgba(145,158,171,0.32)`
- Hairline neutral: `#e9e9e9`
- Accent outline: `1px solid #008e48`

## Typography

### Families
- All text: `"Ubuntu Sans", <script-specific fallback>, sans-serif` — a humanist sans with a matching fallback face for non-Latin script. Weights 400, 600, 700.
- No monospace in use.

### Scale
| Level | Size | Weight | Line Height | Usage |
|-------|------|--------|-------------|-------|
| Hero | 70px | 700 | 1.0 | Home hero title, white on photo |
| Display | 48px | 700 | 68px (~1.42) | Large section statements |
| H1/H2 | 36px | 700 | 1.4 | Page banners, section titles |
| H3 | 24px | 700 | 30px (1.25) | Sub-sections, card group titles |
| Card title | 22px | 700 | 1.75 | Card headings (centered) |
| Lead | 20px | 400 | 1.5 | Intro paragraphs |
| Body | 17px | 400 | 1.5 | Default text |
| Body alt | 16px | 400 | 26px | Dense paragraphs |
| Small | 14px | 400 | 1.5 | Meta, captions |
| Button | 17px | 700 | 1.75 | All CTAs |
| Label | 17px | 700 | 1.5 | Form labels |
| Toggle | 14px | 700 | 24px | Segmented controls |

### Treatments
- Body baseline is 17px, slightly larger than usual, for readability of complex script.
- Section titles are centered with no eyebrow or uppercase. Hierarchy comes from size and weight only.
- Card titles and descriptions are centered.
- No letter-spacing adjustments; no uppercase transforms.

## Spacing

### Base Unit
4px, with frequent 8px steps.

### Common Values
- 2xs: 4px — icon gaps
- xs: 8px — inline gaps, small padding
- sm: 16px — button horizontal padding, grid gaps
- md: 24px — secondary button horizontal padding, container gutter
- lg: 32–36px — panel padding (`36px 32px`)
- xl: 80px — section vertical rhythm
- 2xl: 150px — banner/hero vertical padding

### Layout
- Content container: `1170px` max-width, centered, 24px side gutter.
- Readable text blocks: ~800px.
- Header: sticky, 80px tall, floating inset bar (not edge-to-edge).
- Cards in 3-column grids with ~30px gaps.
- Form panel overlaps the hero bottom edge, creating depth.

## Elevation

### Shadows
- Subtle (cards): `0 2px 6px 2px rgba(0,0,0,0.03)` — barely there, more of a soft halo
- Medium (menus, popovers): `0 8px 24px 0 rgba(0,0,0,0.16)`
- Heavy (dialogs): `0 5px 40px 0 rgba(0,0,0,0.16)`
- Colored (primary hover): `0 8px 16px 0 rgba(0,142,72,0.24)`

### Border Radii
- Small: 8px — buttons, inputs, segmented controls
- Medium: 10px — floating header bar
- Large: 20px — cards, tinted content panels, newsletter band
- XL: 25px — featured gold form panel
- Pill: 100px
- Circle: 50% — icon buttons, floating chat button

### Layering
- Sticky glass header above content.
- Gold form panel lifts above the hero boundary.
- Floating circular action button fixed at bottom-right.

## Interactive States

### Buttons
- **Primary:** `#008e48` fill, white 17px/700 text, 8px radius, `6px 16px` padding, 40px tall (nav) or 56px (hero).
  - Hover: background `#006648` plus green glow shadow `0 8px 16px rgba(0,142,72,0.24)`.
  - Transition: `background-color, box-shadow, border-color 250ms cubic-bezier(0.4,0,0.2,1)`.
- **Outline on dark:** transparent with 1px white border, white text, same size as primary.
- **Soft:** `#eef2f0` fill, `#008e48` text, `6px 24px` padding, 50px tall. Used for secondary actions inside cards.
- **Text link button:** white fill, amber `#d08322` bold text.
- **Gold:** `#e8b65d` fill with dark text, used inside green bands.
- **Segmented toggle:** two joined 8px-radius halves. Active half gets `rgba(0,142,72,0.3)`, inactive is transparent.
- **Icon button:** circular, `#637381` icon, transparent fill.
- Disabled: not observed; use MUI-style 0.48 opacity text on `rgba(145,158,171,0.24)` fill to match the system.

### Links / Navigation
- Nav links: `#0f2920`, 17px/400, no underline.
- Active nav: `#008e48` text with 1.5px primary underline bar beneath (pseudo-element, full text width).
- Hover: color shift toward primary, `color 200ms cubic-bezier(0.4,0,0.2,1)`.
- Inline links in copy: primary green, no underline.

### Form Inputs
- White fill, 8px radius, ~51px tall, `1px solid rgba(145,158,171,0.2)` outline, 17px text.
- Labels above field, 17px/700 forest green; required marker in `#ff3b30`.
- Inline info icon next to some labels.
- Focus: border stays subtle in computed styles; no strong ring observed. For accessibility, add a 2px primary focus outline when recreating.
- Inline submit: input and gold button share one white rounded container (newsletter pattern).

### Cards
- White, 20px radius, subtle shadow, image top (240px, `object-fit: cover`), centered title + text, full-width CTA at bottom.
- Hover: background shifts to `#fbfbfb`; images fade in with `opacity 150ms, filter 300ms`.

## Motion

### Principles
Quiet and functional. Short durations (150–300ms) on Material standard easing. Nothing bounces or slides dramatically. Motion only confirms interaction.

### Patterns
- Button feedback: 250ms `cubic-bezier(0.4,0,0.2,1)` on bg + shadow.
- Color shifts: 200ms same easing.
- Small controls: 150ms on background or border.
- Icon fill: 300ms.
- Image load: opacity fade 150ms with 300ms filter (blur-up style).
- Drawers/menus: 225–250ms, `cubic-bezier(0.4,0,0.6,1)` sharp-out on exit.
- Hero: static photo with scrim; no parallax observed.

## Design Principles
- **Green means go.** One saturated primary handles every action and active state, so the next step is always obvious.
- **Warmth through gold.** Gold appears sparingly on high-value panels and secondary submits to soften the institutional green.
- **Soft containment.** Large 20px radii and near-invisible shadows group content without hard edges.
- **Readable first.** Large 17px body, 1.5 line-height, centered section headings, ample white space.
- **Heritage ornament, modern frame.** Faint geometric lattice patterns and silhouettes appear at low contrast in heroes and the footer, giving cultural texture without clutter.

## Implementation Notes
- Built on Material UI with a customized "minimal" theme: grey channel `145,158,171` for alpha borders, `#637381` secondary text, `#1c252e`/`#212b36` dark greys, standard MUI easings. Reproduce with a MUI `createTheme` and override `palette.primary.main = #008e48`, `primary.dark = #006648`, `text.primary = #0f2920`, `shape.borderRadius = 8`, `typography.fontSize = 17`.
- Styles are emitted as hashed CSS-in-JS classes (`css-xxxx`); no `:root` custom properties are exposed. Define tokens yourself as CSS variables:
  ```css
  :root {
    --color-primary: #008e48;
    --color-primary-hover: #006648;
    --color-forest: #0f2920;
    --color-gold: #e8b65d;
    --color-amber: #d08322;
    --color-surface-soft: #eef2f0;
    --color-text-muted: #637381;
    --border-subtle: rgba(145,158,171,0.12);
    --border-input: rgba(145,158,171,0.2);
    --radius-sm: 8px;
    --radius-md: 10px;
    --radius-lg: 20px;
    --shadow-card: 0 2px 6px 2px rgba(0,0,0,0.03);
    --shadow-primary-hover: 0 8px 16px rgba(0,142,72,0.24);
    --ease-standard: cubic-bezier(0.4,0,0.2,1);
    --container: 1170px;
  }
  ```
- The header is an inset glass bar: transparent sticky wrapper, inner bar with 10px radius, 87.5% white, and 6px backdrop blur.
- Footer: `#0f2920` with large faint architectural silhouettes and lattice ornaments at very low opacity; four-column link layout; centered copyright bar.
- Newsletter band: primary-green 20px-radius block with oversized translucent concentric-circle decorations, overlapping the dark footer top edge.
