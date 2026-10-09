---
paths:
  - "src/components/**/*.tsx"
  - "src/app/**/*.tsx"
---

# Component size rule

Every component file must be **100 lines or fewer**, counting blank lines and comments.

- ESLint enforces this with `max-lines` in `eslint.config.mjs`. `npm run lint` fails if a file goes over 100 lines.
- When a component approaches the limit, split it. Do not compress formatting to fit:
  - Move a repeated card or row into its own component, as `FundCard.tsx` does for `Funds.tsx` and `HeroCard.tsx` does for `Hero.tsx`.
  - Move interactive state into a small client component, as `DonateForm.tsx` does for `Donate.tsx`.
  - Move static copy and lists into `src/lib/site.ts` or `src/lib/content.ts`.
- Keep one default-exported component per file. Small helpers such as `buttonClass` may share the file.
- Check line counts with: `wc -l src/components/**/*.tsx src/app/**/*.tsx | sort -n`
