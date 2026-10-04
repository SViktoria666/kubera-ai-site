# Kubera Design Engineering System — Phase 1 Forensic

Reviewed: 2026-10-05
Branch: `design/kubera-design-engineering-phase1-20261005`
Base: `8ea971dfd2657b167031b1ebd0971435a889a774`

## Decision

Kubera should build a curated private design-engineering system, not adopt a single universal UI library. The system should combine:

1. semantic tokens and themes;
2. a small approved component/material registry;
3. platform adapters, especially Telegram Mini Apps;
4. machine-readable provenance and agent instructions;
5. browser and accessibility gates.

No external code was copied and no new dependency was installed in this phase.

## Repository facts

| Fact | Evidence |
|---|---|
| Current worktree is isolated | Git worktree `kubera-ai-site.worktrees/germany-whatsapp-reference-pilot-20261004` |
| Current branch | `design/kubera-design-engineering-phase1-20261005` |
| Base/current HEAD | `8ea971dfd2657b167031b1ebd0971435a889a774` |
| Local `origin/main` ref | `8dcd0e13764dbf757c62385dd0161e50cd8e975a` |
| Working tree before this documentation work | clean |
| Production/main | not modified |
| Approved UI Kit | preserved at the base commit and parent branch `design/theme-architecture-ui-kit-20261005` |
| Approved material dependency | `@sohumsuthar/liquid-glass@3.1.0`, MIT, already installed |

The remote fetch was attempted before this work but GitHub was unreachable from the shell (`Failed to connect to github.com port 443`). The isolated branch was subsequently pushed successfully; the local tracking ref is `f5a415242df5f82115b03647e50ab95970ff6102`. A later `ls-remote` verification was network-blocked, so the push command output and matching local tracking ref are the available persistence evidence.

## Existing Kubera foundation

The current Theme Playground already proves the minimum architecture:

- one DOM/component structure with scoped `data-theme`;
- semantic appearance tokens that do not control layout;
- geometry-lock evidence;
- CURRENT and KUBERA NEON themes;
- approved A/B/C cyan glass material specimens;
- browser guards for CSS loading, visual delta, and geometry;
- an isolated Material Lab with proven liquid glass;
- explicit owner-visible review gates.

This work is an asset to preserve, not a prototype to replace. The existing implementation remains the immediate runtime reference while the private system is designed.

## External forensic findings

### Theme and token systems

- `jnsahaj/tweakcn` is an active visual theme editor for Tailwind/shadcn with Apache-2.0 licensing. Its useful pattern is a preview/editor/preset workflow, not direct runtime adoption. It has a large application surface and should remain a reference until its current internals are reviewed commit-by-commit.
- `jdeweedata/theme-generator` is an MIT Next.js 14/App Router example with live HSL controls, presets, typography, CSS export, and WCAG contrast checking. It is a useful Design Studio UX reference, not a dependency.
- `next-themes` is an MIT-style, small theme-provider pattern supporting class or data-attribute selectors, no-flash initialization, and cross-tab synchronization. The current isolated Kubera provider is sufficient; adoption is deferred until production theme persistence is needed.

### Component and registry systems

- shadcn registries provide a strong copy-own-modify model. Registry items can include components, tokens, docs, AI resources, rules, tests, and workflows; namespaced private registries can use authenticated URLs. This is a good future distribution protocol, but the registry must remain private and provenance-aware.
- `STiXzoOR/applecn` is an unusually relevant agent-ready pattern: tokens are data, CSS is generated and tested, components use registry metadata, platform scopes are explicit, and a skill teaches agents how to consume the registry. It is MIT and should be treated as an architecture donor, not as a source of Apple branding or code.
- `shadcnstudio/shadcn-studio` has useful block/registry ideas, but its repository advertises MIT plus Commons Clause. That is a legal/provenance risk for direct reuse in a commercial internal system; reference only unless counsel approves the exact use.

### Materials

- Kubera’s approved material remains `@sohumsuthar/liquid-glass@3.1.0`: MIT, React 18+, SVG lens/displacement/refraction, Fresnel/specular treatment, and a proven Chromium lab result. It is the current primary material, not to be replaced in this phase.
- `leefanv/liqui-design` is MIT and distributes source components through a shadcn registry. It separates color custom properties from optical dials and documents a Chromium refraction path with Safari/Firefox fallback. It is the strongest alternative architecture reference, but it requires Tailwind v4/Base UI and was not installed.
- `gentpan/liquidglass` is an MIT Web Component reference that uses SVG displacement and has a Codex-oriented skill. It is useful for cross-browser material and agent documentation patterns, but its demo asset rights and Web Component integration require separate review.
- `aberhamm/liquid-glass-react` is a lightweight React/Expo reference with an opt-in live-displacement path and fallback behavior. It remains reference-only until license and browser tests are independently verified.

### Telegram Mini Apps

- The `telegram-mini-apps` ecosystem and `@tma.js/sdk-react` are the recommended integration foundation to validate first. Use official Telegram Web Apps documentation for launch data, theme parameters, viewport, safe areas, Back Button, and platform events.
- `TelegramUI` is an MIT React component library with Telegram color-scheme support, SSR, Storybook, and mobile-oriented controls. It is a component-source/reference candidate, not an automatic Kubera dependency.
- The official/community React template demonstrates initialization order, Telegram UI styles, SDK hooks, platform mapping, and a mock environment outside Telegram. This is the first implementation pattern to adapt for the upcoming Mini App.

## Recommended architecture

Separate six concerns:

1. `knowledge/`: human-readable decisions, anti-patterns, research notes.
2. `registry/`: machine-readable resources, slots, component metadata, provenance, compatibility, and status.
3. `tokens/` and `themes/`: semantic values and theme presets; no layout geometry.
4. `materials/` and `components/`: Kubera-owned runtime implementations and explicit fallbacks.
5. `platform/`: web, Telegram, and future client adapters.
6. `testing/`, `skills/`, and `licenses/`: browser gates, accessibility rules, Codex retrieval guidance, and legal records.

The first private implementation should remain documentation-first in the existing repository. A future private design-system repository/package can be split out once the Telegram proof establishes the API boundary.

## Decision matrix

| System/resource | Category | Decision | Why | License | Kubera | Next/React | Telegram/mobile | Agent-ready | Risk |
|---|---|---|---|---|---|---|---|---|---|
| Existing Theme Playground | theme/runtime proof | USE | already proven with geometry lock | Kubera original | yes | yes | adapter needed | high | must remain isolated until migration gate |
| `@sohumsuthar/liquid-glass` | material | USE | approved and Chromium-proven | MIT | approved | React | selective/mobile test | medium | filter cost/fallback |
| tweakcn | theme editor | REFERENCE | strong editor/preset workflow | Apache-2.0 | compatible pattern | Next/React | neutral | medium | broad app; not a runtime dependency |
| liqui-design | material/components | REFERENCE/TEST LATER | coherent optical + registry model | MIT | promising alternative | React/Base UI | mobile test needed | high | Tailwind v4 and browser fallback |
| theme-generator | Design Studio UX | REFERENCE | live editing/export/contrast | MIT | compatible pattern | Next/React | neutral | medium | small project, not production foundation |
| applecn | tokens/registry/agent | ARCHITECTURE DONOR | tokens-as-data, platform scopes, agent skill | MIT | strong pattern | Next/React | platform model useful | very high | Apple-specific scope must not leak |
| shadcn registry | distribution | ADOPT PATTERN | machine-readable private registry | project license varies | strong | framework-agnostic | strong for clients | very high | auth/provenance/package drift |
| `@tma.js/sdk-react` | Telegram bridge | TEST FIRST | official ecosystem integration | MIT/verify at adoption | target | React | primary | high | Telegram version/platform changes |
| TelegramUI | Telegram components | REFERENCE/TEST | SSR and Telegram-native controls | MIT | candidate | React | strong | medium | adoption surface and visual fit |
| Playwright + sharp guard | visual QA | USE | current browser evidence | Apache-2.0/MIT ecosystem | approved pattern | Next/React | device emulation | high | screenshots are not owner approval |
| shadcn-studio | components/blocks | REFERENCE ONLY | useful registry ideas | MIT + Commons Clause | legal review | React | neutral | medium | redistribution/use restrictions |

## Top recommendations

- Architecture donors: `applecn`, shadcn Registry, existing Kubera Theme Playground.
- Theme editor donors: tweakcn, theme-generator, existing Kubera token panel.
- Glass/material: approved Sohum foundation; Liqui Design as alternative research.
- Component source: Kubera-owned primitives, Base UI/Radix patterns, TelegramUI for Telegram-native reference.
- Telegram foundation: official Telegram Web Apps docs + `@tma.js/sdk-react` + official/community React template.
- Agent-ready patterns: applecn skill/registry, shadcn namespaced registry, Kubera JSON registry plus future `kubera-design-engineering` skill.

## Rejected/avoid for now

1. Installing multiple competing glass engines; no measured gap exists.
2. Direct reuse of shadcn-studio code before Commons Clause review.
3. WebGL/canvas material as a default; current SVG/CSS material meets the proven need with lower mobile risk.

## Evidence links

- [tweakcn](https://github.com/jnsahaj/tweakcn)
- [Liqui Design](https://github.com/leefanv/liqui-design)
- [theme-generator](https://github.com/jdeweedata/theme-generator)
- [applecn](https://github.com/STiXzoOR/applecn)
- [shadcn Registry](https://ui.shadcn.com/docs/registry)
- [next-themes](https://github.com/pacocoursey/next-themes)
- [Telegram Mini Apps ecosystem](https://github.com/telegram-mini-apps)
- [Telegram Web Apps API](https://core.telegram.org/bots/webapps)
- [TelegramUI](https://github.com/telegram-mini-apps-dev/TelegramUI)
- [Kubera approved material source](https://github.com/sohumsuthar/liquid-glass)
