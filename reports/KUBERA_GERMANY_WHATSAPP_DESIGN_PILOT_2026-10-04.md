# Germany WhatsApp Reference Pilot — Owner Review Package

## Status

- Pilot branch: `design/germany-whatsapp-reference-pilot-20261004`
- Base main: `8dcd0e13764dbf757c62385dd0161e50cd8e975a`
- Pilot implementation SHA: `56902003cd2ff833a26ef60cb1f5ec693097dc93`
- Route: `/en/solutions/germany/whatsapp-automation`
- Canonical: `https://www.kubera-automation.com/en/solutions/germany/whatsapp-automation`
- Technical status: `PASS`
- Owner visual approval: `PENDING`
- Site-wide rollout: `NOT AUTHORIZED`

## Scope and isolation

Only `IndustrySolutionTemplate` and scoped rules in `src/app/globals.css` changed. The template emits `data-design-pilot="germany-whatsapp"` only when `solution.country === "germany"` and `solution.industry === "whatsapp-automation"`. All new visual rules are descendants of `.germany-whatsapp-pilot`.

Negative-control browser checks at 1024×768 confirmed no pilot marker/class on:

- `/en/solutions/germany/hospitality-automation`
- `/en/solutions/germany/crm-automation`
- `/en/solutions/spain/whatsapp-automation`

No duplicate route or permanent template fork was introduced. Header, Footer, Assistant styling/geometry, and workflow markup were intentionally left shared and unchanged.

## Visual direction implemented

- calm navy structural background using the approved `#0C1726`, `#142136`, and `#20344A` roles;
- cyan functional CTA/focus/flow treatment using `#4CE5E4` and `#3495A0`;
- white/blue-gray text hierarchy using `#F5F6F7` and `#B4CBD0`;
- restrained gold remains a result/brand detail, not the primary CTA;
- lower-glare surfaces, quieter borders, consistent 16–24px radius range, and reduced shadow/glass intensity;
- improved hero spacing, heading wrapping, section rhythm, card hierarchy, and mobile CTA stacking;
- violet/blue atmosphere retained at lower pilot-scoped opacity;
- reduced-motion override retained for pilot hover treatment.

Intentionally deferred: global header/footer redesign, assistant recoloring, assistant geometry changes, workflow restyling, pricing/global component promotion, and all sibling page changes.

## SEO/content freeze evidence

The after browser manifest recorded unchanged values at all five viewports:

- title: `WhatsApp Automation for Businesses in Germany | Kubera AI`;
- canonical: `https://www.kubera-automation.com/en/solutions/germany/whatsapp-automation`;
- description: the existing Germany WhatsApp description;
- H1: `WhatsApp Automation for Businesses in Germany`;
- JSON-LD script count: 7;
- body/document width stayed within viewport at 390, 768, 1024, 1366, and 1440.

No content, metadata, URL, canonical, robots, sitemap, schema meaning, localization, internal-link, CTA destination, or form behavior source changed.

## Evidence mapping

BEFORE was captured before implementation at base SHA `8dcd0e13764dbf757c62385dd0161e50cd8e975a`:

`C:\Users\Admin\kubera-visual-audit\evidence\design-pilot\before-8dcd0e1\manifest.json`

AFTER was captured from a production-like local build at pilot SHA `56902003cd2ff833a26ef60cb1f5ec693097dc93`:

`C:\Users\Admin\kubera-visual-audit\evidence\design-pilot\after-5690200\manifest.json`

Both manifests identify target, base URL, route, SHA, timestamp, viewport matrix, and surface capture convention. Each viewport has full-page, viewport, hero, CTA, cards, final CTA, footer, and assistant closed/open evidence where present. This template has no lead form; final CTA is the equivalent lead/CTA surface.

Required comparisons:

- `390x844`: mobile header/hero/card/CTA/assistant evidence;
- `768x1024`: portrait tablet evidence;
- `1024x768`: breakpoint and assistant regression evidence;
- `1366x768`: desktop evidence;
- `1440x900`: wide desktop evidence.

## Validation

- `npm run typecheck`: PASS;
- `npm run build` with `AI_ASSISTANT_ENABLED=true`: PASS, 219 static pages;
- `npm run validate:seo`: PASS, 48 blog files, 213 built indexable routes, 0 warnings;
- D1 critical browser suite: 24/24 PASS on 390×844, 1024×768, and 1366×768;
- workflow geometry protection: PASS;
- assistant launcher/open/close/containment protection: PASS;
- pilot route overflow/identity checks: PASS at all five viewports;
- sibling isolation checks: PASS for three shared-template sibling routes at 1024×768.

The first browser attempt was a setup miss: the production build lacked `AI_ASSISTANT_ENABLED=true`, so six assistant tests could not find the launcher. No assertions were changed; the build was corrected and the complete 24/24 suite was rerun successfully.

## Accessibility and visual self-review

Manual role review found the pilot primary CTA readable on navy and cyan, secondary CTA readable with visible focus outline, 48px shared button height, readable secondary text, and reduced-motion coverage. No new contrast, focus, touch-target, clipping, or overflow issue was found in the captured pilot states. Automated axe was not added; owner review remains required for final visual approval.

The pilot is intentionally less glow-heavy and more scannable while preserving the dark Kubera identity. The mobile visual order and shared assistant treatment remain unchanged from the existing template; this is deliberate risk control, not an unverified redesign of those systems.

## Preview / production boundary

No production deployment, Vercel configuration change, or main merge was performed. No provider preview was created in this bounded task; evidence is local production-like and explicitly identified as `LOCAL_PRODUCTION_BUILD`. A future owner-authorized preview must use the D2 target-aware gate before promotion.

## Owner decision

Automated technical PASS is not owner approval. The pilot is now **AWAITING OWNER VISUAL APPROVAL**. Owner should review the BEFORE/AFTER pairs at all five viewports and either approve this visual direction or request bounded changes. Site-wide token promotion and sibling rollout remain unauthorized until approval.

## V2 luminosity / depth refinement — 2026-10-04

- V1 remains recoverable at pilot history SHA `455621f4db4a5db0298c7037e1b23645399f9aa1`; V1 implementation was `56902003cd2ff833a26ef60cb1f5ec693097dc93`.
- V2 implementation SHA: `6bc0deae4c06cff25524e0254d09545713b67c1c`.
- Scope remained `.germany-whatsapp-pilot` only; no DOM, content, metadata, SEO, assistant geometry, workflow semantics, or shared sibling styles were changed.
- V2 added CSS-only deep navy contrast, localized cyan/violet atmosphere, clipped orbital arcs, a small number of luminous nodes, stronger hero layering, and localized CTA/surface illumination. No raster dependency, WebGL, particle engine, or new client-side motion was added.
- V2 evidence: `C:\Users\Admin\kubera-visual-audit\evidence\design-pilot\v2-6bc0dea\manifest.json`.
- V2 identity remained stable at 390, 768, 1024, 1366, and 1440: title, canonical, description, H1, JSON-LD count, and document containment passed. Three sibling IndustrySolutionTemplate controls remained unmarked and unstyled by the pilot.
- `npm run typecheck`: PASS; production build: PASS (219 static pages); `npm run validate:seo`: PASS (213 built indexable routes, 0 warnings); D1 critical browser suite: 24/24 PASS.
- V2 visual self-review: luminosity, depth, cyan CTA energy, visible violet/blue atmosphere, orbital language, and mobile cropping improved without obvious overflow or excessive glow. Owner visual approval remains `PENDING`.

### V1 → V2 evidence lineage

`before-8dcd0e1` is the pre-V1 baseline at main SHA `8dcd0e13764dbf757c62385dd0161e50cd8e975a`.

`after-5690200` is the original V1 after evidence captured from implementation SHA `56902003cd2ff833a26ef60cb1f5ec693097dc93`, then documented on pilot head `455621f4db4a5db0298c7037e1b23645399f9aa1`.

`v2-6bc0dea` is the V2 after evidence captured from exact V2 SHA `6bc0deae4c06cff25524e0254d09545713b67c1c`. V1 evidence was not overwritten or renamed.

## V3 polished light / glass depth refinement — 2026-10-04

- V2 remains recoverable at `6bc0deae4c06cff25524e0254d09545713b67c1c`.
- V3 implementation SHA: `a7a1805b3cfa4e6887de7140bc29c4974f607520`.
- The owner-provided reference image was inspected first at `C:\Users\Admin\Desktop\Изображение ChatGPT 4 окт. 2026 г., 02_51_45.png`. Its relevant principles were translated into an original Kubera treatment: dark falloff, unequal partial off-canvas paths, purposeful path nodes, directional edge light, crisp white/cyan hierarchy, and a luminous resting CTA.
- V2 target-like rings were rebuilt as masked partial arcs with different centers, sizes, rotations, opacity, and fade. They do not form a shared concentric target system.
- V3 added CSS-only layered lighting: deep navy base, localized blue/violet/cyan fields, translucent surface depth, directional specular edges, restrained backdrop blur on pilot surfaces, and CTA base-state gloss/glow. No new raster, WebGL, particle system, or heavy animation was added.
- V3 evidence: `C:\Users\Admin\kubera-visual-audit\evidence\design-pilot\v3-a7a1805\manifest.json`; it includes base/hover CTA captures, five viewport captures, and three sibling controls.
- V3 identity stayed unchanged at 390, 768, 1024, 1366, and 1440: title, canonical, description, H1, JSON-LD count, and document containment all passed. Siblings remained unmarked and outside pilot styling.
- `npm run typecheck`: PASS; production build: PASS (219 static pages); `npm run validate:seo`: PASS (213 built indexable routes, 0 warnings); D1 suite: 24/24 PASS.
- V3 self-review: arcs read as fragments of a larger system, CTA is luminous before hover and stronger on hover, H1 remains crisp, surfaces have directional light/depth, and dark contrast remains. Owner visual approval remains `PENDING`.

### V3 evidence lineage

Baseline `before-8dcd0e1` → V1 `after-5690200` → V2 `v2-6bc0dea` → V3 `v3-a7a1805`.

V1 implementation was `56902003cd2ff833a26ef60cb1f5ec693097dc93`, documented at pilot head `455621f4db4a5db0298c7037e1b23645399f9aa1`. V2 implementation was `6bc0deae4c06cff25524e0254d09545713b67c1c`. V3 is `a7a1805b3cfa4e6887de7140bc29c4974f607520`. Earlier evidence was not overwritten.

## V4 forensic root-cause note — before implementation

V3's matte appearance is a compositing problem, not a missing color:

- The page backdrop has localized fields, but the Hero's own dark gradient still dominates the large surface; the translucent body therefore reveals little luminance variation behind it.
- `backdrop-filter: blur(...) saturate(...)` is present on the Hero and surfaces, but without a sufficiently rich/contrasting backdrop response it reads as frost rather than glass.
- V3 has narrow top highlights and generic inset/outer shadows, but no directional non-uniform rim, internal reflection field, or localized specular layer that visibly catches light across the surface.
- Orbital paths are mostly background decoration outside the panel; they are not materially integrated through occlusion/reflection, so the panel does not appear to sit inside the same light system.
- The CTA has a gradient and glow, but its normal-state material is still primarily a flat fill with a small highlight rather than a layered luminous object.
- The assistant-side Hero region has no dedicated dark falloff plus reflected light field, leaving the large surrounding plane visually compressed.

V4 therefore reconstructs the material stack: richer independent backdrop fields, translucent dark body, backdrop response, internal reflections, directional rim/specular layers, non-uniform depth shadows, and a layered CTA material. No page structure or SEO/content semantics are part of this correction.
