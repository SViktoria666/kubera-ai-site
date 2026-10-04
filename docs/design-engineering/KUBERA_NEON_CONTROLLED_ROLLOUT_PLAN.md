# Kubera Neon Controlled Rollout Plan

Status: `FORENSIC + PLAN ONLY`; production rollout is not authorized.

Prepared: 2026-10-05
Planning branch: `design/kubera-neon-controlled-rollout-prep-20261005`
Planning base: `b234f4e8171cd3976bb0fdfb82fe1126d3f67c10`
Local `origin/main`: `8dcd0e13764dbf757c62385dd0161e50cd8e975a`

## Preservation proof

All eight Phase 1 artifacts exist in the intended repository/worktree and are Git-tracked:

`C:\Users\Admin\kubera-ai-site.worktrees\germany-whatsapp-reference-pilot-20261004\docs\design-engineering\`

1. `KUBERA_DESIGN_ENGINEERING_SYSTEM_FORENSIC.md`
2. `registry/KUBERA_DESIGN_ENGINEERING_RESOURCE_REGISTRY.json`
3. `KUBERA_APPROVED_ARSENAL.md`
4. `KUBERA_APPROVED_MATERIAL_001_PREMIUM_CYAN_OPTICAL_GLASS.md`
5. `KUBERA_DESIGN_STUDIO_ARCHITECTURE.md`
6. `KUBERA_TELEGRAM_MINI_APP_DESIGN_READINESS.md`
7. `KUBERA_DESIGN_SYSTEM_LICENSE_PROVENANCE.md`
8. `KUBERA_DESIGN_ENGINEERING_IMPLEMENTATION_ROADMAP.md`

`origin/design/kubera-design-engineering-phase1-20261005` is locally tracked at `b234f4e8171cd3976bb0fdfb82fe1126d3f67c10`, matching the preserved Phase 1 SHA. The earlier report’s `kubera-ai.worktrees` path was a reporting typo; no second artifact location was found or deleted.

No production source, real Home, Germany page, SEO, metadata, main branch, deployment, analytics, n8n, or Telegram production system is modified by this planning branch.

## Material #001 preservation

### KUBERA APPROVED MATERIAL #001 — PREMIUM CYAN OPTICAL GLASS

- Approved source lineage: `design/theme-architecture-ui-kit-20261005` at `8ea971dfd2657b167031b1ebd0971435a889a774`.
- Material proof lineage: `625e825cbc948f44e04ebccf8c953724ef452f5b`.
- Dependency: `@sohumsuthar/liquid-glass@3.1.0`, MIT.
- UI Kit consumer: `src/components/design-lab/UiKitLab.tsx`.
- Material Lab consumer: `src/components/design-lab/LiquidGlassLab.tsx`.
- Scoped styles/tokens: `src/app/globals.css`, `.ui-kit-lab[data-theme]`, `--ui-*` roles.
- Browser guard: `tests/browser/ui-kit-lab.spec.ts`.
- Evidence roots: `C:\Users\Admin\kubera-visual-audit\evidence\ui-kit-20261005\` and `reports/evidence/theme-architecture-ui-kit-2026-10-05/`.

### Preserved behavior

- Primary CTA: cyan optical glass with permanent normal-state luminosity.
- Compact language buttons: EN/RU consume the same button family.
- Secondary button: Explore services uses dark/translucent surface, crisp light text, cyan edge, and restrained hover light.
- Material variants: Artisan, Optical, Chromatic; same geometry, material-only difference.
- States: normal, hover, focus-visible, active, disabled.
- Functional interaction stays cyan; cyan never changes to yellow/gold.
- Theme controls appearance only; geometry remains locked.
- Material parameters in the focal glass specimen: radius `24px`, blur `5px`, saturation `170%`, brightness `0.88`, contrast `1.08`; lens options `bezel: 18`, `refraction: 1.7`, `dispersion: 5`.

The full recoverable record is [KUBERA_APPROVED_MATERIAL_001_PREMIUM_CYAN_OPTICAL_GLASS.md](KUBERA_APPROVED_MATERIAL_001_PREMIUM_CYAN_OPTICAL_GLASS.md). Do not replace, retune, or promote this material without a separate owner-approved implementation task.

## Current source architecture

The page count is not the implementation count. Most appearance is controlled by the shared shell and `src/app/globals.css`.

### Global shell map

| Source | Scope | Consumers | Risk | Migration method |
|---|---|---|---|---|
| `src/components/core/SiteShell.tsx` | shared composition | all `(site)` and `(es)` shell routes | high | preserve structure; theme provider/token scope only |
| `src/components/core/Header.tsx` | shared header/nav/primary CTA | all shell routes | very high | add semantic appearance variants without changing height, nav, or DOM |
| `src/components/core/LanguageSwitcher.tsx` | shared EN/RU control | all multilingual routes | high | adapter to approved compact glass button; preserve links and active semantics |
| `src/components/core/Footer.tsx` | shared footer/contact links | all shell routes | medium | tokenize surfaces, links, icons; preserve layout/content |
| `src/app/globals.css` top-level rules | global reset, variables, `.button`, forms, header/footer | potentially all built routes | very high | introduce explicit semantic aliases, then migrate one primitive at a time |
| `src/components/ai/AiAssistantWidget.tsx` + CSS | shared floating assistant | routes with assistant enabled | very high | protect geometry; appearance-only adapter and separate performance budget |

### Page and component family map

Counts below are source-level route records/files, not a claim that each is independently styled.

| Family | Source of truth | Current shared components/styles | Affected route estimate | Risk | Migration method |
|---|---|---|---:|---|---|
| Home | `src/app/(site)/page.tsx` | `HeroSection`, `PricingPackages`, `LossCalculator`, `globals.css` | 1 real route plus isolated `/design-lab/home-v1` reference | high | use as visual reference first; no production change in this phase |
| Services index | `src/app/(site)/services/page.tsx` | `HeroSection`, `LossCalculator`, `ServicesGrid` | 1 | high | controlled preview after shell/button contract |
| Commercial service pages | `src/components/services/CommercialServicePage.tsx`, 21 route files | service-specific solution classes plus global buttons/cards/forms | 21 | high | migrate shared primitives, keep service geometry |
| Industry/commercial solutions | `IndustrySolutionTemplate.tsx`, `Industry*` components, `src/content/industry-solutions*.ts` | one template with 57 source solution records | approximately 57 generated pages | very high | first validate one route; never alter template globally until sibling negative controls pass |
| GEO/country pages | `src/app/(site)/[geoSlug]/page.tsx`, `src/components/geo/*`, `src/content/geo/*` | GeoPage/CountryPage plus global shell/forms/cards | 19 catalog routes | high | theme scope at shell and shared surfaces; content/SEO frozen |
| Use cases | `src/components/use-cases/UseCaseLandingPage.tsx` plus 7 route files | markdown renderer, `.button`, `.card`, `.solution-*` | 7 | medium/high | use token aliases; protect long-form readability |
| Cases gallery/detail | `CasesGallery.tsx`, `CaseStudyPage.tsx` | `.card`, `.button`, inline layout styles | index + dynamic details; source-level 2 route files | high | surface/button adapter; review inline color exceptions individually |
| Blog index/articles | `BlogIndexPage.tsx`, `BlogArticlePage.tsx`, MarkdownRenderer | `.card`, `.button`, `.muted`, article CSS | index + 48 Markdown articles + dynamic article route | high | plain reading surfaces first; glass not default; preserve typography geometry |
| Contacts/forms | `ContactSection.tsx`, `ContactForm.tsx` | `.form`, `.input`, `.textarea`, `.button` | 1 main + RU equivalent | very high | tokenized form controls; run keyboard, validation, contrast, and no-submit regression |
| RU pages | `src/app/(site)/ru/*`, RU content | same shell and many shared sections | 7 page files plus dynamic content | high | language-aware shared primitives; preserve links and copy |
| ES pages | `src/app/(es)/*`, Spanish content | separate layout using `SiteShell` | 2 page files | high | verify shell theme does not assume English-only language control |
| Special systems | `AiAssistantWidget`, `WorkflowSection`, `LossCalculator`, `AmbientTechCloud`, `VideoShowcaseCard` | component-local CSS and inline styles | cross-family | very high | appearance adapter only; protect assistant/workflow/calculator geometry |

## Hardcoded visual-value audit

Current source scan on the planning base:

- 247 hexadecimal occurrences.
- 560 `rgb/rgba` occurrences.
- 0 HSL occurrences.
- 184 gradient occurrences.
- 86 `box-shadow`/`text-shadow` declarations.
- 57 inline-style hits; most are layout values, but each color-bearing hit requires classification.

The numbers are inventory signals, not a migration target. The existing top-level token layer is only six legacy variables (`--color-bg`, `--color-bg-soft`, `--color-bg-deep`, `--color-text`, `--color-muted`, `--color-accent`, plus blue/border). Many family overrides still use literal gradients, shadows, border colors, SVG strokes, pseudo-elements, and state rules.

### Value classification and mapping

| Current pattern | Semantic class | Neon mapping | Action |
|---|---|---|---|
| `--color-bg`, `#1a0533`, `#100020` | legacy structural background | `--theme-bg-primary: #0C1726`; secondary `#142136` | alias first; preserve Current theme |
| `#2a1045`, translucent white surfaces | surface/elevated | `--theme-surface-primary: #20344A` plus density variants | migrate by component hierarchy |
| `--color-accent`, `#ffb800`, `#ffc72f`, `#ffd95f` | mixed functional + brand legacy | functional `--theme-accent-primary: #4CE5E4`; brand `--theme-brand-gold: #D7B887` | split by semantic usage; never blind replace |
| `--color-blue`, `#327aff` | links, depth, borders, atmosphere | `--theme-accent-secondary: #3495A0` / electric-blue atmosphere | classify per use, not one global swap |
| white rgba borders/highlights | border/specular/text | `--theme-border-subtle`, `--theme-glass-highlight` | preserve opacity per material density |
| linear/radial gradients | functional, surface, atmosphere, one-off | semantic gradient roles | migrate only after role inventory |
| shadow/filter/backdrop-filter | depth/material/assistant/icon | `--theme-shadow-*`, material contract | performance-budgeted, not globalized |
| SVG fill/stroke | functional/brand/decorative | semantic stroke/fill tokens or CSS variables | audit file-by-file |
| inline colors | one-off/unknown | explicit component token or leave as documented exception | no mass replacement |

## Minimum shared primitive layer

Do not create a component solely to rename a CSS class. The smallest useful layer is:

1. `KuberaButton` — primary, secondary, compact, icon; semantic state contract.
2. `KuberaLanguageButton` — EN/RU active/inactive and English-only state.
3. `KuberaBadge` — Most Popular and status badges; cyan functional family, gold never used as generic action.
4. `KuberaSurface` — plain, elevated, glass; density and fallback explicit.
5. `KuberaFormControl` — input, textarea, select, focus/error/disabled states.
6. `KuberaCard` — only where a repeated card surface is already a meaningful shared pattern.
7. `KuberaThemeSurface` — root semantic token scope; must not control geometry.

Do not abstract assistant, workflow, calculator, or page-family sections until their geometry contracts are separately expressed. They can consume the primitives later.

## Button adoption map

| Existing control | Adoption | Material | Reason |
|---|---|---|---|
| Header Discuss my project | safe direct consumer after shell pilot | compact/primary optical glass | high-value action; preserve black header |
| Home Hero primary CTA | safe direct consumer in Home preview | primary optical glass | approved owner direction; geometry frozen |
| Home Hero secondary CTA / Explore services | safe direct consumer with adapter | secondary glass | visible normal-state contrast; subordinate to primary |
| EN/RU | safe direct consumer | compact glass | owner-approved family; preserve link/active semantics |
| Pricing CTA | needs adapter | plain or light glass; featured card may use optical | commercial clarity and performance over uniform gloss |
| Most Popular badge | safe direct consumer | cyan glass/badge, not yellow | functional/recommendation role |
| Contact form submit | needs adapter | primary/compact optical only where contrast and performance pass | conversion action; native button semantics preserved |
| Secondary form actions | needs adapter | plain/secondary surface | avoid multiple competing luminous elements |
| Dense cards/blog cards | do not use advanced glass by default | plain/elevated token surface | reading density and performance |
| Assistant controls | do not use Material #001 initially | existing geometry-protected control with tokenized edge | floating system has separate interaction/performance risk |

## Performance budget

Before a production wave, establish measured browser budgets. Until then:

- maximum 3 advanced liquid-glass lenses simultaneously in the initial viewport on desktop;
- maximum 1 advanced lens in the initial mobile viewport, with other controls using CSS fallback;
- no advanced glass on every card, article surface, or assistant panel;
- no continuously animated blur/displacement;
- `prefers-reduced-motion: reduce` removes transitions and nonessential motion;
- Chromium may use refraction; Safari/Firefox use intentional dark translucent + rim fallback;
- measure mobile scroll, first interaction, paint stability, and console errors at 390 and 768;
- keep static CSS gradients/edges for atmosphere; do not introduce WebGL/canvas for rollout;
- production wave requires a comparison of baseline vs Neon CPU/GPU/scroll behavior, not only screenshot approval.

## Accessibility contract

- preserve native links, buttons, inputs, select, and textarea semantics;
- retain visible `:focus-visible` with a cyan or theme-appropriate high-contrast ring;
- validate normal-state text contrast over every surface, not only hover;
- preserve minimum 44px interactive targets for compact/mobile controls;
- disabled states must be visually distinct without relying on color alone;
- glass and glow must not reduce label readability;
- preserve keyboard order and form validation behavior;
- test reduced motion and fallback browsers;
- run representative contrast and accessibility checks before each preview wave.

## First controlled preview group

The first preview should remain isolated and contain only four representatives:

1. `http://localhost:<port>/design-lab/home-v1` — existing owner-reviewed Home geometry/material reference, not production.
2. `/en/solutions/germany/whatsapp-automation` — commercial/industry template representative; currently the Germany pilot reference, so it must remain preview-only.
3. `/en/germany-automation` — representative GEO route from the existing geo catalog mapping.
4. `/contacts` — representative form/contact surface.

This group covers a custom Home composition, the dynamic industry template, a GEO content/template route, and conversion forms without selecting dozens of pages. Production routes must be previewed from a bounded branch/preview serving SHA; localhost is not production proof.

## Exact rollout order

1. Freeze baseline SHA and capture geometry/state evidence for the four preview routes at 390, 768, 1024, 1366, and 1440.
2. Introduce semantic aliases behind an explicitly scoped theme mode; do not remove legacy variables yet.
3. Extract/adapt `KuberaButton`, `KuberaLanguageButton`, `KuberaBadge`, and form-control states while preserving DOM geometry and analytics attributes.
4. Apply black header + tokenized shell only in the preview scope.
5. Apply Material #001 to the header CTA, Home Hero CTA, EN/RU, and selected secondary CTA; use plain/elevated surfaces elsewhere.
6. Add controlled theme tokens for cards/forms and audit every remaining literal functional yellow/gold.
7. Run typecheck, build, SEO validation, D1, browser geometry/overflow/interaction/accessibility checks, and performance measurements.
8. Create a protected preview through the existing D2 gate; prove serving SHA and asset integrity.
9. Owner reviews real before/after browser evidence. Automated PASS does not authorize production.
10. Only after explicit owner approval, promote one bounded family/wave with a rollback SHA and negative controls.

## Preview/production gate

`CODE → TYPECHECK → BUILD → SEO VALIDATION → LOCAL BROWSER QA → PREVIEW DEPLOYMENT → PREVIEW BROWSER QA → SERVING SHA PROOF → OWNER VISUAL APPROVAL → PRODUCTION → LIVE BROWSER SMOKE → VERIFIED COMPLETE`

Push, build, HTTP 200, or screenshot generation alone are insufficient proof.

## Visual regression matrix

Every preview route: 390×844, 768×1024, 1024×768, 1366×768, 1440×900. Boundary probes: 561 and 1200 where existing QA uses them.

Protect explicitly:

- header height and black header state;
- EN/RU presence, links, active state, and geometry;
- H1 width/wrapping and section geometry;
- primary/secondary CTA normal, hover, focus, active, disabled;
- pricing, forms, calculator, and workflow semantics;
- AI Assistant position/geometry;
- no horizontal overflow or failed media;
- no cyan→gold functional state leak;
- content, metadata, canonical, schema, sitemap, and robots unchanged.

## Rollback

Rollback is the exact pre-wave commit/serving SHA. Do not mutate production in the preview phase. Each future wave must record:

- baseline SHA;
- implementation SHA;
- preview serving SHA;
- evidence manifest;
- negative-control routes;
- owner approval status;
- one-command/reversible Git rollback target.

If a shared primitive unexpectedly changes geometry, SEO, assistant/workflow behavior, or a sibling family, stop the wave and revert the preview branch to the baseline SHA.

## STOP conditions

- any Phase 1 artifact is missing or remote preservation cannot be verified;
- shared primitive extraction requires layout or content changes;
- functional gold remains in a cyan interaction state;
- glass needs to be applied broadly to look acceptable;
- mobile performance or readability is materially worse;
- assistant/workflow geometry changes;
- SEO/content/metadata/URL/canonical/schema changes appear;
- preview serving SHA cannot be proven;
- browser CSS/assets are incomplete or hydration errors occur;
- owner approval is absent.

## Owner decisions required

1. Confirm the four-route preview group.
2. Confirm whether Material #001 may be used in header CTA and Home Hero CTA in the first preview.
3. Confirm the maximum mobile advanced-glass lens budget after measurement.
4. Confirm whether the first approved production wave should be shell/buttons only or include forms/cards.
