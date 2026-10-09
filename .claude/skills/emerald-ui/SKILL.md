---
name: emerald-ui
description: Design system and component conventions for this Next.js site (deep emerald + forest + gold, Bengali UI, Tailwind v4). Use whenever adding or changing a page, section, card, form, button, or any UI in this project, or when the user asks to "keep the design consistent", "make a new section", "add a page", or "match the existing style".
---

# Emerald UI

The house style for this site. Calm, trustworthy, warm. Emerald for action, deep forest for weight, gold for warmth, cream for breathing room. Large soft radii, layered photography under dark-green scrims, faint geometric lattice texture, and gentle motion.

Read this before writing UI. Reuse what exists before inventing anything new.

## Hard rules

1. **Every component file is 100 lines or fewer.** ESLint `max-lines` enforces it (`npm run lint`). Split instead of compressing: a child card component, a client form component, or data moved into `src/lib/`. See `.claude/rules/component-size.md`.
2. **Use theme tokens only.** No raw hex values in components. Tokens are in `@theme` in `src/app/globals.css`.
3. **Copy lives in `src/lib/site.ts` or `src/lib/content.ts`,** not hard-coded in reusable components. Section headings may stay inline.
4. **Bengali first.** `lang="bn"`. Format numbers with `new Intl.NumberFormat("bn-BD")`. Currency is `৳`.
5. **Mobile first.** Write the base classes for phones, then add `sm:` (640), `md:` (768), `lg:` (1024) and `xl:` (1280). Nothing may scroll sideways at 360px.
6. **Run `npm run lint` and `npm run build`** after every change.

## Tokens

| Token | Value | Use |
|---|---|---|
| `brand-600` | #008e48 | Primary actions, active states, links, accents |
| `brand-700` | #006648 | Primary hover, gradient end |
| `brand-500` | #00a352 | Gradient highlight, progress fills |
| `brand-50` / `brand-100` | tints | Chips, soft buttons, icon wells |
| `forest-900` | #0f2920 | Body text, dark sections, dark buttons |
| `forest-950` | #08180f | Footer, hero base, image scrims |
| `gold-400` | #e8b65d | Warm CTA (on green or dark), highlighted words, badges |
| `gold-300` | #f8de9e | Eyebrow text on dark, user button |
| `amber-brand` | #d08322 | Logo tagline, category labels |
| `cream` | #faf7f0 | Alternate section background |
| `muted` | #637381 | Secondary text |

- **Shadows:** `shadow-card` (resting cards), `shadow-lift` (hover, floating panels, sticky nav), `shadow-glow` (primary button hover).
- **Radii:** `rounded-xl` for buttons and inputs, `rounded-2xl` for small tiles, chips and nav, `rounded-3xl` for cards and images, `rounded-[2rem]` for big feature panels.
- **Utilities:** `container-page` (1240px content on desktop, the same width as the navbar bar; responsive gutters). Never set a different page width., `lattice` (white pattern for dark backgrounds), `lattice-light` (green pattern for light backgrounds).
  - `lattice` and `lattice-light` set `background-image`, so they wipe out `bg-gradient-*` on the same element. Combine them only with a solid `bg-*` color. On gradients, put the pattern on an absolute overlay span instead.
- **Easing:** `ease-standard`. Durations: 200–300ms for color and shadow, 300ms for lift, 700ms for image zoom.

## Typography

- Font stack: Hind Siliguri (Bengali), then Ubuntu Sans (Latin), loaded in `layout.tsx` via `next/font`.
- Hero H1: `text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.15]`
- Section H2 (via `SectionHeading`): `text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight`
- Card title: `text-xl font-bold` (lead stories `text-2xl`)
- Body: `text-base sm:text-lg` for intros; `text-sm leading-relaxed text-muted` inside cards.
- Highlight one key phrase per heading with `text-brand-600` (light background) or `text-gold-400` (dark background). Never more than one.

## Section rhythm

- Vertical padding: `py-20 sm:py-28`. If the previous section has the same background, use `pb-20 sm:pb-28` only.
- Alternate backgrounds so neighbouring sections never match: white → cream (`lattice-light`) → white → forest (`lattice`) → white.
- Every section starts with `SectionHeading` (eyebrow chip, title, optional text, optional action). Centered for intro-style sections; `align="left"` with an `action` button when there is a "see all" link.
- Give each section an `id` that the navbar can link to.

## Components to reuse

| Need | Use |
|---|---|
| Link button | `<Button href variant size arrow>` with variants `primary`, `gold`, `outline` (on photos/dark), `soft`, `dark` |
| Non-link element styled as a button | `buttonClass(variant, size)` |
| Icon | `<Icon name="…" className="size-5" />`. Add new paths to `Icon.tsx` (24×24 stroke icons); keep the file under 100 lines. |
| Section title block | `<SectionHeading eyebrow title text align dark action />` |
| Fade-in on scroll | `<Reveal delay={i * 100}>`. Stagger list items 60–120ms. |
| Animated number | `<CountUp value suffix />` |
| Brand mark | `<Logo light? />` |
| Images | `next/image` with `fill`, an accurate `sizes`, and `object-cover` inside a `relative overflow-hidden` wrapper with a fixed aspect ratio |

## Patterns

- **Card:** `group rounded-3xl bg-white shadow-card ring-1 ring-forest-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift`. The image inside zooms on hover with `transition-transform duration-700 group-hover:scale-105` (or `scale-110` for small tiles).
- **Card on dark:** `bg-white/5 ring-1 ring-white/10 backdrop-blur-sm hover:bg-white/10`.
- **Glass panel on a photo:** `rounded-3xl border border-white/15 bg-white/10 backdrop-blur-xl`.
- **Photo with scrim:** the image at `-z-20`, then a gradient `from-forest-950/95 via-forest-950/80 to-forest-950/30` at `-z-10`, with the `isolate` class on the parent.
- **Eyebrow chip:** handled by `SectionHeading`. Inline: `rounded-full bg-white/10 px-3 py-1 text-sm text-gold-300`.
- **Tag on an image:** `absolute top-4 left-4 rounded-full bg-gold-400 px-3 py-1 text-xs font-semibold text-forest-900`.
- **Progress bar:** a `h-2 rounded-full bg-brand-50` track with a `bg-gradient-to-r from-brand-600 to-brand-500` fill. Raised amount shown in `text-brand-600`.
- **Input:** `h-12 rounded-xl border border-forest-900/15 px-4 focus:border-brand-600 focus:ring-4 focus:ring-brand-600/15 focus:outline-none`.
- **Feature panel:** `rounded-[2rem]` with a gradient `from-brand-600 via-brand-700 to-forest-900`, a lattice overlay (`<span className="lattice absolute inset-0 -z-10" />` inside an `isolate` parent), and one blurred `gold-400/20` glow plus one ring decoration (`border-[44px] border-white/5`). Do not overlap other sections; keep panels separated by section padding.
- **Full-bleed CTA section** (used by `Newsletter`): an `isolate` section with the green gradient `from-brand-600 via-brand-700 to-forest-900` (no photo), then decorative shapes at `-z-10`: a lattice overlay, a `gold-400/25` blur blob, a `border-[56px] border-white/5` ring and a dashed `gold-400/30` circle. Content is a 2-column grid: text on the left, a white form card with `ring-8 ring-white/10` on the right.
- **Gallery:** a 4-column bento grid (`sm:grid-cols-4`, `auto-rows-[200px]`, `grid-flow-dense`). Spans come from data (`sm:col-span-2`, `sm:row-span-2`). Fill every cell, with no empty slots.
- **Grid containing a horizontal scroller** (chip row, carousel): use `grid-cols-[minmax(0,1fr)]` (and `minmax(0,1fr)` for the flexible column on desktop). A plain `1fr` or implicit column grows to the scroller's full width and makes the page scroll sideways on phones.
- **Lightbox:** `fixed inset-0 z-[60]` dialog on `bg-forest-950/95`, image `object-contain`, round glass prev/next buttons, Esc/arrow keys, body scroll locked while open. See `components/gallery/Lightbox.tsx`.
- **Mobile carousel:** `flex snap-x snap-mandatory overflow-x-auto` with item width `w-[82%]` on phones, switching to `md:grid md:grid-cols-3`.

## Interaction

- Hover: lift (`-translate-y-1`) plus `shadow-lift`, image zoom, and an arrow nudge (`group-hover:translate-x-1`).
- Press: `active:scale-[.98]` on buttons.
- Focus: the global `:focus-visible` outline in `brand-600`. Never remove it.
- Forms are client components. They show an inline success state (a check icon in a `brand-50` circle) and make no network calls until a backend exists.
- Respect `prefers-reduced-motion`. `globals.css` already disables animations.

## Don'ts

- No new colors, fonts, or shadow values outside the tokens.
- No pure black text. Use `forest-900`.
- Don't use more than one gold CTA per viewport, or gold for body text.
- No sharp corners on cards or images.
- Don't put a component over 100 lines, and don't squeeze JSX onto one line to get under the limit.
