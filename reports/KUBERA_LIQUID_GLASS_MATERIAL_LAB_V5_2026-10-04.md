# Kubera AI — V5 Liquid Glass Material Lab

Date: 2026-10-04  
Branch: `design/germany-whatsapp-reference-pilot-20261004`  
Scope: isolated material proof only; Germany page integration intentionally not performed.

## Decision

V4 is preserved as the rollback point. V5 introduces a noindex `/design-lab/liquid-glass` route and a small material harness containing one panel, one primary CTA, one secondary control, a rich Kubera-compatible backdrop, and a local Glass on/off control. It does not alter the Germany page, sibling routes, production, or main.

## V4 matte root cause

V4 had more CSS layers, but its material was still a page-scoped reconstruction rather than a real lensing material: the backdrop response was mostly blur/brightness/saturation over a low-frequency hero field, the surface body carried too much uniform tint, and the optical edge/reflection layers were authored as independent decorative gradients. That flattened the luminance relationship between backdrop and surface. The first lab capture also exposed a harness-specific failure: the researched package detected light mode because the lab did not set `html.dark`, applying its light tint and producing a gray matte slab. The lab now sets dark mode only while mounted and restores the prior document state on cleanup.

## Research matrix

| Project | License | Commercial use | Architecture | Decision |
|---|---|---|---|---|
| [sohumsuthar/liquid-glass](https://github.com/sohumsuthar/liquid-glass) | MIT | Yes | React + CSS; four layers; SVG displacement; per-element lens; measured transfer curve and Fresnel/specular rim | Selected for bounded lab |
| [samasante/liquid-glass](https://github.com/samasante/liquid-glass) | MIT | Yes | Headless React lens; live-DOM displacement; Chrome/Edge native path and cross-browser copy/refract modes | Not needed after viable A |
| [LeonardSEO/liquid-glass-react](https://github.com/LeonardSEO/liquid-glass-react) | Reviewed as secondary React/Next candidate | Verify before any adoption | Compact SVG `feDisplacementMap` approach | Not tested because A was viable |
| `leefanv/liqui-design` | Not adopted | Not adopted | Not required for bounded comparison | Not pursued |

Selected package: `@sohumsuthar/liquid-glass@3.1.0`, MIT. Attribution/license notice is retained by the dependency and recorded here; no source was copied into the repository. The package requires React 18+, which is compatible with the repository's React 19. Its client component uses `useId`/`useEffect`; it is therefore isolated behind a client lab component. `transpilePackages` is required because the published package contains JSX modules.

The primary implementation documents a four-layer surface: backdrop effect/refraction, tint, shine/rim, and crisp content. Its README explicitly states that a photographically/richly varied backdrop is necessary because a flat colour does not reveal transmission or luminance response. The package exposes clear/regular variants, refraction/lens options, saturation/brightness tokens, and performance guidance to keep chromatic multi-pass effects to a small number of hero surfaces.

## Material proof

The lab uses a high-frequency test backdrop: partial cyan/blue/violet orbital paths, a grid fragment, a bright signal line, ruler marks, and a purposeful node. The main `LiquidGlass` surface uses the per-element lens path with `refraction: 2.2` and `dispersion: 7`; the CTA uses its own bounded lens with `refraction: 1.3` and `dispersion: 4`.

- Glass OFF/ON: A/B control changes the same surface between raw backdrop and material layers.
- Refraction: Chromium renders `filter: url(#lg-refract)` / `url(#lg-refract-sm)` on the effect layers; the high-frequency signal is intentionally placed behind the panel for visual comparison.
- Specular/rim: the package's measured shine layer is visible as non-uniform top/bottom hairlines and dark side falloff.
- Transmission/saturation: the dark clear tint preserves the cyan/violet fields instead of replacing them with a uniform light slab.
- CTA: normal state is already cyan-gradient, rim-lit, shadow-separated, and externally luminous; hover increases the existing effect.
- Content: the foreground remains selectable DOM content and the heading remains crisp white.

Technical proof is PASS in Chromium and is awaiting owner visual review. This is not owner aesthetic approval.

## Browser and performance boundary

Chromium/Edge: the lab exercises the real SVG displacement lens path.  
Safari/Firefox: no local browser run was available in this session; the package's documented fallback is intentional frost/tint/rim without the live backdrop bend in the native DOM path. A cross-browser copy/refract mode exists in the secondary candidate but was not introduced because the selected candidate already passed the bounded Chromium proof.  
Performance: the lab uses two lenses only, static effects, no WebGL, no canvas, no continuous animation, and no new runtime dependency beyond the selected React package. Full page performance remains a follow-up before any Germany integration.

## Evidence

Manifest: `reports/evidence/design-pilot-v5-material-lab/manifest.json`  
External captures: `C:\Users\Admin\kubera-visual-audit\evidence\design-pilot\v5-material-lab-on-1440.png`, `v5-material-lab-off-1440.png`, and equivalent panel crops. These are separate from V1/V2/V3/V4 evidence and are not overwritten.

## Safety status

- Germany integration: `NO`.
- Germany page, sibling pages, SEO semantics, content, metadata, assistant geometry, workflow semantics, main, and production: unchanged by V5 lab work.
- Lab route: `noindex, nofollow, nocache`; not in sitemap; not in navigation.
- V4 rollback: `8ba6a2d0242f25ae02f3454bd015029777b1e1d3`.
- Owner visual approval: `PENDING`.

## Next gate

Owner reviews the material lab first. Only if the material itself is visually accepted may a separate, bounded Germany Hero/CTA integration be prepared.
