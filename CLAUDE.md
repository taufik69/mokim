# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

- `npm run dev`: start the dev server at http://localhost:3000
- `npm run build`: production build, which also type-checks
- `npm run lint`: ESLint, including the 100-line component limit

## Rules

- **Every component file must be 100 lines or fewer.** See `.claude/rules/component-size.md`. ESLint `max-lines` enforces it for `src/components/**` and `src/app/**`.
- UI copy is Bengali (`<html lang="bn">`). Numbers are shown with `Intl.NumberFormat("bn-BD")`.

## Architecture

- Next.js 16 App Router with Tailwind CSS v4 and TypeScript. `next.config.ts` enables `cacheComponents`.
- `src/app/layout.tsx` loads the fonts (Hind Siliguri for Bengali, Ubuntu Sans for Latin) and wraps every page in `Navbar` and `Footer`. `src/app/page.tsx` only stacks the home page sections in order.
- `src/components/sections/`: one file per home page section. Large sections hand repeated or interactive parts to child files (`HeroCard`, `FundCard`, `DonateForm`).
- `src/components/ui/`: shared primitives: `Button` (a `Link` with variants; `buttonClass()` gives the same classes for non-link elements), `Icon` (inline SVG paths chosen by `name`), `SectionHeading`, `Reveal` (fade-in on scroll), `CountUp`, `Logo`.
- `src/components/layout/`: `Navbar` (client; turns from transparent to frosted glass on scroll), `MobileMenu`, `Footer`.
- `src/lib/site.ts` holds brand info, navigation, stats, pillars and join options. `src/lib/content.ts` holds programs, funds, news and gallery data. Change copy there, not in components.
- Design tokens (colors `brand-*`, `forest-*`, `gold-*`, `cream`; shadows; animations; `lattice` and `container-page` utilities) are defined in `@theme` in `src/app/globals.css`. They come from `../docs/design-systems/emerald-lattice.md`.
- Images live in `public/images/`. Sections reference them by path; `Hero` imports `hero.jpg` statically so it gets a blur placeholder.
- Forms (`DonateForm`, `Newsletter`) are demo-only. They show a success state and make no network calls.
