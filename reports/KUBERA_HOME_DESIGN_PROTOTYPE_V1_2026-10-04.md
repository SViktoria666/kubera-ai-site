# Kubera AI — Home Design Prototype V1

Date: 2026-10-04  
Branch: `design/home-design-prototype-v1-20261004`  
Scope: isolated full-page visual proof; real Home and production intentionally unchanged.

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
