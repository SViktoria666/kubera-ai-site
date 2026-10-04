# Kubera Theme Architecture + UI Kit Foundation — Phase 1

Status: technical foundation ready for owner review; no production migration authorized.
Branch: `design/theme-architecture-ui-kit-20261005`
Base: `cc45fe70cc66fcf8c2cb404ef4d60946b3d1b5f8`

## Scope and source of truth

The current repository is the implementation authority. The isolated UI Kit is a client-side design lab at `/design-lab/ui-kit`; it is not linked from production navigation, is marked `noindex,nofollow,nocache`, and is not added to the sitemap. The real Home, Germany pilot, shared production header, and all sibling pages remain outside the new theme scope.

Rollback is the base commit above. The only prototype cleanup in this task is removal of the owner-rejected `Signal in. Clarity out.` floating detail from `HomeDesignPrototype`; it does not touch the real Home route.

## Current design forensic

The current visual system is concentrated in `src/app/globals.css` and shared components. The legacy layer contains the original purple/blue/yellow token set plus extensive component-local values. A repository scan of `src` found 241 hex occurrences, 558 `rgb/rgba` occurrences, and no HSL occurrences across CSS/TS/TSX. This confirms that a blind global replacement is unsafe.

Representative semantic mapping:

| Existing value / pattern | Observed usage | New semantic role | Migration decision |
|---|---|---|---|
| `--color-bg`, `#1a0533`, `#100020` | legacy page/background foundations | `--color-bg-primary`, `--color-bg-secondary` | preserve in CURRENT theme; map deliberately later |
| `#327aff`, repeated blue rgba values | legacy links, controls, borders, atmospheric fields | accent, border-active, atmosphere-secondary | split by semantic role |
| `#ffb800`, `#ffc72f`, `#ffd95f` | legacy functional buttons/badges and brand accents | brand-gold only; functional controls become accent-primary in Neon | never blind-replace logo/brand values |
| `#4CE5E4`, `#3495A0`, `#1E5B6E` | V1.1/V5.1 pilot functional light and depth | accent-primary, accent-active, accent-secondary | approved Neon roles |
| `#F5F6F7`, `#B4CBD0`, `#818892` | pilot text hierarchy | text-primary, text-secondary, text-muted | approved Neon roles |
| repeated `rgba(255,255,255,…)` | borders, glass tint, highlights, text opacity | border-subtle, glass-highlight, surface | must remain component/role-specific |
| gradients and shadows in family overrides | hero atmosphere, cards, pricing, workflow, assistant | atmosphere/glow/material tokens | local overrides remain until individually migrated |

Inline styles, SVG fills/strokes, pseudo-elements, hover/focus/active states, and media-query overrides remain known legacy risk classes. The lab does not migrate them globally; it demonstrates the replacement boundary with scoped semantic tokens.

## Architecture

The UI Kit uses one DOM/component structure and a scoped `data-theme` attribute. `.ui-kit-lab[data-theme="current"]` keeps a legacy/current appearance; `.ui-kit-lab[data-theme="kubera-neon"]` maps the same semantic roles to the closed Kubera palette. Tokens contain color, border, glow, atmosphere, and glass appearance only. No token controls page width, spacing, typography scale, line-height, breakpoints, DOM order, content, routing, or SEO.

`KuberaButton` exposes `primary`, `secondary`, `language`, `icon`, and `compact` variants plus three bounded material candidates: clean cyan glass, cyan/blue optical edge, and controlled chromatic edge. All states stay in the same functional accent family; gold is reserved for the brand sample. The lab also includes a reusable liquid-glass card, badge, input, select, switch, theme switcher, and geometry-lock readout.

## Glass foundation decision

Selected: `@sohumsuthar/liquid-glass@3.1.0`, MIT, already installed and proven in this repository's V5 material lab. Its package is React 18+ compatible and implements layered SVG lens/refraction plus rim/specular treatment without WebGL. The UI Kit uses it for the focal card only; ordinary surfaces remain CSS-backed so glass retains hierarchy.

Reviewed references: `kucukkanat/liquid-glass` (MIT, React UI kit with SVG displacement/refraction and documented Safari handling) and `LeonardSEO/liquid-glass-react` (MIT, React/Next.js-oriented single SVG displacement approach). They were not installed. Other candidate URLs were recorded as discovered references only; no unclear-license code was adopted.

Fallback strategy: Chromium uses the installed refraction/lens path; Safari and Firefox receive the package/browser fallback path plus dark translucent surface, border/rim and controlled glow. Reduced motion disables transitions in the lab. WebGL, canvas, and animation libraries were not introduced.

## Anti-patterns recorded

- Theme changes must not change H1 geometry, layout, or content.
- Cyan functional controls must never become gold/yellow on hover.
- No uncontrolled global CSS leakage from a lab or pilot.
- No arbitrary decorative sphere dominating a composition.
- No random orbital circles.
- No unstyled fallback; build success is not browser visual proof.
- HTML loaded is not evidence that CSS loaded.
- Owner-visible browser verification is mandatory.
- Stale Next server/cache state can create a false visual PASS.
- Do not turn every rectangle into glass or every surface into neon.

## Evidence and gate

Evidence root: `C:\Users\Admin\kubera-visual-audit\evidence\ui-kit-20261005\` (CURRENT and KUBERA NEON captures, focused primitive captures, and viewport manifest). The owner gate remains `PENDING`; automated checks do not authorize theme approval or site-wide migration.

Next exact step: owner compares CURRENT vs KUBERA NEON and selects the glass/neon material direction.
