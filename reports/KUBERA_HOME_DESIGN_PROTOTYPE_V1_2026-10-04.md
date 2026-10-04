# Kubera AI — Home Design Prototype V1

Date: 2026-10-04  
Branch: `design/home-design-prototype-v1-20261004`  
Scope: isolated full-page visual proof; real Home and production intentionally unchanged.

Implementation commit: `82accb0e5fc76b2ae968bdf0a4f8aee24c08d01b`.

## Purpose and boundary

This prototype answers whether the proven Kubera visual language can carry a
real long-form Home page. It is available only at `/design-lab/home-v1`, is
`noindex,nofollow,nocache`, is not in the sitemap or navigation, and is
rendered by the existing SiteShell without changing the production `/` route.

The prototype reuses the real Home structure and data: the Home Hero meaning,
pricing packages/video, loss calculator, featured use-case links, and featured
solution links. Copy, CTA destinations, business claims, calculator behavior,
internal links, and section order are preserved.

## Current Home audit

Production Home is composed of `HeroSection`, `PricingPackages`,
`LossCalculator`, and two Home-specific solution-navigation sections inside
the shared `SiteShell` (Header, Footer, assistant, analytics, and structured
data). The prototype uses equivalent content and the real pricing/calculator
components, while adding a prototype-only Hero composition and scoped visual
system. Home does not currently render `WorkflowSection`; no workflow
semantics were invented or changed.

## Visual system proof

- Deep navy remains the structural base.
- Cyan/turquoise is the functional and primary luminous accent.
- Electric blue bridges the cyan and violet fields.
- Violet is localized atmospheric depth only, never the dominant page color.
- Gold remains a restrained brand/premium detail.
- The Hero uses partial orbital paths, purposeful nodes, and an abstract CSS/SVG sphere with cyan rim light. It is a temporary prototype visual, not a production asset.
- The proven `@sohumsuthar/liquid-glass@3.1.0` material is used only on the selected Hero signal panel; ordinary sections use lighter-weight translucent/navy surfaces.
- Pricing, calculator, use-case, and solution areas use different surface densities so the long page has visual rhythm instead of uniform glow.

## Isolation and SEO freeze

Prototype-only styles are scoped to `.home-design-prototype` and the transient
`body.home-design-lab-active` class, added only while the lab route is mounted
and removed on unmount. The real Home, Germany WhatsApp page, service page,
Blog article, and Contacts route have no prototype wrapper or active class in
negative-control browser checks.

The prototype preserves production SEO semantics. Its route metadata is
`noindex,nofollow,nocache`; production Home metadata, canonical, structured
data, robots behavior, and sitemap output are unchanged.

## Evidence

Genuine external evidence is stored at:
`C:\Users\Admin\kubera-visual-audit\evidence\home-design-prototype-v1\`

- `before/`: real production Home at 390, 768, 1024, 1366, 1440 plus 561/1200 boundary probes.
- `after/`: prototype at the same viewports, plus focused Hero, pricing, calculator, use-case, and footer captures at 1440.
- Evidence was captured from the local serving branch after hydration; prototype captures report `body.home-design-lab-active`, no horizontal overflow, and the lab route noindex metadata.

Known harness limitation: the local sandbox blocks the external Umami analytics
request with `ERR_NETWORK_ACCESS_DENIED`. No application page errors or
hydration errors were observed; the analytics failure is an existing external
telemetry boundary, not prototype code.

## Validation status

- Typecheck: PASS.
- Production build: PASS; 221 generated routes including the non-indexable lab route.
- Responsive containment: PASS at 390, 561, 768, 1024, 1200, 1366, and 1440.
- Prototype noindex: PASS.
- Negative controls: PASS for `/`, Germany WhatsApp, `/services`, a Blog article, and `/contacts`.
- D1 assistant/workflow regression: run after final commit; existing assertions must remain unchanged.
- Owner visual approval: `PENDING`.

## Explicitly not done

No real Home modification, production deployment, main merge, sibling rollout,
SEO rewrite, copy rewrite, new page-family propagation, workflow redesign, or
site-wide token promotion was performed.

## Next gate

Owner scrolls through the complete Home prototype and reviews the full-page
composition. Only explicit owner approval may authorize a later, separately
scoped rollout decision.

## Home Design Prototype V1.1 — composition and color correction

V1 remains recoverable at `9e3ed7c0fcf79e2541ed7543202cf4a89711f5f4`.
V1.1 is a bounded follow-up on the same isolated prototype branch. It restores
the real Home Hero geometry: the H1 uses the original full-width content measure,
font scale, weight, wrapping behavior, and responsive proportions while keeping
the requested white/cyan phrase split.

V1.1 keeps the header near-black, converts functional controls to the cyan
system in normal/hover/focus/active states, converts the Most Popular badge and
pricing CTAs to cyan-family treatment, and changes prototype pricing bullets and
eyebrows from legacy yellow to cyan. Gold remains only in Kubera branding and
approved premium identity details. Explore services remains a readable,
secondary dark/cyan control.

The abstract sphere is reduced and moved toward the right edge as a secondary
depth object; the accepted cyan/blue/violet lighting and orbital composition
remain intact. No Home copy, CTA destination, pricing content, calculator
behavior, production metadata, or real Home source was changed.

V1.1 evidence is preserved separately at:
`C:\Users\Admin\kubera-visual-audit\evidence\home-design-prototype-v1\after-v1.1\`.
It includes matching full-page viewports, focused controls, and a computed
interaction audit proving cyan controls do not become gold/yellow on hover.

Validation: typecheck PASS; production build PASS; SEO validation PASS with
213 built indexable routes and 0 warnings; responsive containment PASS at
390/768/1024/1366/1440 and 561/1200 probes; D1 critical suite 24/24 PASS
after building/running with `AI_ASSISTANT_ENABLED=true`. The first D1 attempt
without that required harness flag was discarded as an environment setup
failure, not an application regression. The Playwright runner again required
the established manual teardown stop after reporting all 24 passing tests.

Owner visual approval remains `PENDING`. Real Home, siblings, main, and
production remain unchanged. Site-wide rollout is `NOT AUTHORIZED`.

## V1.1 owner-browser recovery

The earlier `READY FOR OWNER REVIEW` claim was invalidated after the owner
reported raw browser-default rendering. The failure was reproduced at the
exact URL: port 3105 returned the HTML shell, but the CSS request
`/_next/static/css/app/(site)/layout.css?...` and route JS chunks returned
404. Chromium consequently computed Times New Roman/32px H1 styles and a
transparent page background. The port was owned by stale PID 5892; the
generated `.next` cache in this isolated worktree was cleared and the server
was restarted from the verified V1.1 worktree/HEAD.

After recovery, CSS returned 200, all six required Next JS chunks returned 200,
and normal load, hard reload, and a new tab computed Space Grotesk H1 styles,
dark header, dark page background, and the cyan CTA. A new scoped browser guard
at `tests/browser/home-design-lab.spec.ts` fails at desktop/mobile/tablet if
critical prototype styles fall back to browser defaults. It passed 3/3. The
existing D1 suite passed 24/24 against the repaired 3105 server.

No design source, real Home, main, production, or deployment was changed.

## EXACT NEXT STEP

Owner reviews Home Design Prototype V1.1 in the visible browser at
`/design-lab/home-v1`. Do not modify real Home, merge, deploy, or propagate the
system before explicit owner feedback.
