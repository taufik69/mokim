---
name: design-system-extractor
description: Extract a design system (colors, typography, spacing, elevation, interactive states, motion) from a website URL or product screenshots and write markdown documentation that lets engineers and coding agents recreate the aesthetic. Use when the user says "extract design system", "document the design of this site", "recreate this look", or gives a URL/screenshot and asks for its design tokens or style guide.
argument-hint: <url-or-screenshot-path>
---

# Design System Extractor

Extract design systems from websites and product screenshots, producing documentation that enables design engineers and coding agents to recreate the aesthetic in new applications.

## Capabilities

Use browser automation tools (Claude in Chrome, `mcp__claude-in-chrome__*`) to navigate sites, interact with elements, inspect styles, and take screenshots. For URLs, use these extensively. For static screenshots only, describe what's visible qualitatively.

Load all needed Chrome tools in ONE ToolSearch call before starting:
`select:mcp__claude-in-chrome__tabs_context_mcp,mcp__claude-in-chrome__tabs_create_mcp,mcp__claude-in-chrome__navigate,mcp__claude-in-chrome__computer,mcp__claude-in-chrome__read_page,mcp__claude-in-chrome__get_page_text,mcp__claude-in-chrome__javascript_tool,mcp__claude-in-chrome__find`

Prefer `javascript_tool` with `getComputedStyle` for exact values (see "Extraction Script" below) over eyeballing screenshots.

## Workflow

### 1. Receive Input
- **URL provided:** navigate to site, traverse all primary pages/flows, click interactive elements to observe states.
- **Screenshots only:** analyze images qualitatively without inferring precise values.

### 2. Explore (URLs only)
Navigate the full primary user journey:
- Landing/home page
- Key feature pages
- Any authenticated views if accessible
- Settings, modals, forms

Click buttons, hover elements, trigger animations. Observe state changes. Extract computed styles via JavaScript where accessible. Do not submit forms, make payments/donations, or trigger dialogs (`alert`/`confirm`).

### 3. Extract Primitives

**Color Palette**
- Background colors (primary, secondary, surface)
- Text colors (primary, secondary, muted)
- Accent/brand colors
- Semantic colors (success, warning, error, info)
- Borders, dividers, shadows

**Typography**
- Font families (headings, body, monospace if present)
- Weight scale in use
- Size scale (h1 through body/caption)
- Line heights, letter spacing
- Text treatments (uppercase, tracking, etc.)

**Spacing & Layout**
- Base spacing unit if systematic
- Common spacing values observed
- Container widths, margins
- Grid structure if apparent

**Elevation & Depth**
- Shadow styles (subtle, medium, heavy)
- Border radii patterns
- Layering/z-index conventions

**Interactive States**
- Hover, focus, active, disabled appearances
- Transition timing and easing (if extractable)
- Cursor behaviors

**Animations & Motion**
- Entrance/exit patterns
- Micro-interactions
- Loading states
- Timing and easing (specific if verifiable, qualitative otherwise)

### 4. Name the System
Create a memorable, unique name that evokes the aesthetic without referencing the original product. Examples:
- "Arctic Dawn" (clean, light, spacious)
- "Obsidian" (dark, sharp, technical)
- "Playground" (playful, colorful, rounded)
- "Bauhaus Mono" (geometric, systematic, minimal)

### 5. Generate Report
Output a markdown file. Max 3000 words. Structure:

```markdown
# [System Name]

## Essence
2-3 sentences capturing the overall feel, personality, and design philosophy. What emotional response does it evoke? What design principles are evident?

## Color Palette

### Backgrounds
- Primary: `#hex` — usage context
- Secondary: `#hex` — usage context

### Text
### Accents
### Semantic

## Typography

### Families
- Headings: [font name], [weights used]
- Body: [font name], [weights used]

### Scale
| Level | Size | Weight | Line Height | Usage |
|-------|------|--------|-------------|-------|
| H1 | 48px | 700 | 1.1 | Page titles |

### Treatments
- [notable text styling patterns]

## Spacing

### Base Unit
[value] — or describe the rhythm if not systematic

### Common Values
- xs: [value]
- sm: [value]

## Elevation

### Shadows
- Subtle: [value or description]
- Medium: [value or description]

### Border Radii
- Small: [value]
- Medium: [value]

## Interactive States

### Buttons
- Default / Hover / Active / Disabled: [description]
- Transition: [timing/easing if known]

### Links
### Form Inputs

## Motion

### Principles
[Qualitative description of motion philosophy — snappy? smooth? playful?]

### Patterns
- [Animation type]: [description, timing if known]

## Design Principles
3-5 inferred principles that guide this system.

## Implementation Notes
Technical observations useful for recreation (CSS custom properties structure, naming conventions observed, etc.)
```

## Rules

- **Never include product names, company names, or specific copy.** Use "the application", "the site", generic descriptors.
- **Precise values when verifiable.** If confirmed via computed-style inspection, give exact hex codes, px values, timing functions. If inferred from screenshots or uncertain, describe qualitatively.
- **Primitives only.** Document colors, typography, spacing, elevation, states, motion. Not full component specifications.
- **Descriptive → Prescriptive.** Lead with feel/essence, then specific values.
- **Single viewport.** Treat as desktop snapshot. Don't document responsive breakpoints.
- **Traverse primary flows.** For URLs, explore all main pages before synthesizing. Don't document a single page in isolation.
- **Interactive states matter.** Click and hover to observe state changes. These define much of a system's character.
- **Concise.** Match detail to complexity. Simple sites get brief docs. Don't pad.

## Output

Save to `docs/design-systems/<kebab-case-system-name>.md` in the current project (create the directory if missing), unless the user names another location. Tell the user the path and give a short summary of the system.

## Extraction Script

Run via `javascript_tool` on each page to tally computed styles. Hex-convert and rank by frequency.

```js
(() => {
  const toHex = c => { const m = c.match(/\d+(\.\d+)?/g); if (!m) return c; const [r,g,b,a] = m.map(Number); const h = '#' + [r,g,b].map(v => v.toString(16).padStart(2,'0')).join(''); return a !== undefined && a < 1 ? `${h} @${a}` : h; };
  const tally = {}; const add = (k, v) => { if (!v || v === 'none' || v === 'normal' || v.startsWith('rgba(0, 0, 0, 0)')) return; (tally[k] ||= {})[v] = (tally[k][v] || 0) + 1; };
  for (const el of document.querySelectorAll('body *')) {
    const s = getComputedStyle(el); if (s.display === 'none') continue;
    add('bg', s.backgroundColor.startsWith('rgb') ? toHex(s.backgroundColor) : s.backgroundColor);
    add('color', toHex(s.color)); add('border', s.borderTopWidth !== '0px' ? `${s.borderTopWidth} ${toHex(s.borderTopColor)}` : '');
    add('font', s.fontFamily); add('size', `${s.fontSize}/${s.fontWeight}/${s.lineHeight}`); add('radius', s.borderRadius !== '0px' ? s.borderRadius : '');
    add('shadow', s.boxShadow); add('transition', s.transition !== 'all 0s ease 0s' ? s.transition : '');
    add('pad', s.padding !== '0px' ? s.padding : ''); add('gap', s.gap);
  }
  const top = o => Object.entries(o).sort((a,b) => b[1]-a[1]).slice(0, 15);
  const vars = {}; for (const sheet of document.styleSheets) { try { for (const r of sheet.cssRules) if (r.selectorText === ':root') for (const p of r.style) if (p.startsWith('--')) vars[p] = r.style.getPropertyValue(p).trim(); } catch {} }
  return JSON.stringify({ ...Object.fromEntries(Object.entries(tally).map(([k,v]) => [k, top(v)])), rootVars: Object.fromEntries(Object.entries(vars).slice(0, 80)) });
})()
```

For headings, query `h1,h2,h3,h4,h5,h6,p,small,button,a,input` individually to map the type scale. For hover states, hover with the `computer` tool then re-read `getComputedStyle` on that element.
