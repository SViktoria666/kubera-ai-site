# Kubera Approved Arsenal — Initial Model

Status: Phase 1 foundation; owner-approved material preserved, site-wide migration not authorized.

Each slot has a small decision surface: `PRIMARY`, `ALTERNATIVE`, or `EXPERIMENTAL`. An item is not approved merely because it is attractive; it needs source, license, compatibility, evidence, and a rollback path.

| Slot | PRIMARY | ALTERNATIVE | EXPERIMENTAL | Status |
|---|---|---|---|---|
| Theme engine | Kubera scoped semantic `data-theme` | `next-themes` after production persistence need | platform-specific adapter | Kubera approved in lab |
| Token system | Kubera semantic CSS variables | applecn tokens-as-data pattern | generated token compiler | Kubera approved in lab |
| Color editor | future Kubera Design Studio | theme-generator/tweakcn UX patterns | live client theme editor | reference |
| Glass engine | `@sohumsuthar/liquid-glass@3.1.0` | Liqui Design | gentpan Web Component model | Material #001 approved |
| Primary button | Kubera Premium Cyan Optical Glass | Base UI/Radix-owned primitive with Kubera skin | chromatic material | Material #001 approved |
| Secondary button | Kubera Explore Services glass treatment | dark translucent token variant | violet-edge variant | Material #001 family |
| Language button | Kubera compact EN/RU glass button | compact theme-token button | Telegram language selector | Material #001 family |
| Card | Kubera focal liquid-glass card | dark translucent semantic surface | refraction card | lab-proven; not production-wide |
| Input/select/switch | Kubera semantic lab primitives | Base UI/Radix primitives | Liqui controls | lab/reference |
| Tabs/modal/sheet | source-owned accessible primitive | Base UI/Radix | Liqui/TelegramUI pattern | next priority |
| Bottom navigation | Telegram-native pattern via TelegramUI + Kubera tokens | source-owned mobile primitive | gesture-heavy variant | Telegram priority |
| Search/filter | source-owned accessible pattern | TelegramUI reference | command palette | next priority |
| Gallery/date/upload | source-owned or narrowly selected primitive | platform library after audit | optical media surface | later |
| Toast/skeleton/empty state | Kubera pattern with reduced-motion support | Radix/React Aria pattern | branded optical variant | next priority |
| Motion | CSS transitions and small motion utilities | Motion library after need | shader/particle motion | later |
| Icons | existing project icon conventions | Lucide/another permissive set after license check | client-specific icon set | reference |
| Charts | project-specific accessible chart layer | Recharts/visx after need | WebGL chart | later |
| Background | V5.1 layered CSS light fields | SVG background primitives | shader background | Kubera approved pattern |
| Typography | semantic scale independent of theme | variable font strategy | client-specific type system | foundation |
| Telegram bridge | TMA.js SDK React integration | official raw Telegram WebApp API | third-party wrapper | test first |
| Visual QA | Playwright + screenshot/pixel delta + geometry lock | Storybook/Chromatic-like workflow | perceptual diff service | existing QA pattern |
| Accessibility | browser assertions + axe integration plan | component-library audits | automated remediation | mandatory |

## Initial approved material slot

`KUBERA APPROVED MATERIAL #001 — PREMIUM CYAN OPTICAL GLASS` is the only externally backed material marked approved in this phase. Its exact implementation lineage is recorded separately. Preserve it even if the future runtime package changes.

## Decision rules

1. A production component must consume semantic tokens and preserve structure.
2. A material must have a dark fallback, browser notes, accessibility notes, and a measured performance boundary.
3. A resource with unclear or restrictive commercial terms is reference-only until legal review.
4. A Telegram component must respect safe areas, touch targets, viewport changes, platform theme, and Back Button semantics.
5. Owner visual approval and automated technical PASS are separate gates.
