# Kubera Approved Material #001

## Premium Cyan Optical Glass

Status: `KUBERA APPROVED`

Approval basis: owner approval of the current working Kubera UI Kit glass/neon button direction, recorded in the Phase 1 task. This is a material-family approval, not production rollout authorization.

## Preserved implementation lineage

- Source branch: `design/theme-architecture-ui-kit-20261005`
- Preserved UI Kit SHA: `8ea971dfd2657b167031b1ebd0971435a889a774`
- Current Phase 1 documentation branch: `design/kubera-design-engineering-phase1-20261005`
- Base of this documentation branch: `8ea971dfd2657b167031b1ebd0971435a889a774`
- Material Lab proof SHA: `625e825cbc948f44e04ebccf8c953724ef452f5b`
- Dependency: `@sohumsuthar/liquid-glass@3.1.0`
- Dependency license: MIT, verified in installed `node_modules/@sohumsuthar/liquid-glass/package.json`
- Upstream: https://github.com/sohumsuthar/liquid-glass

## Exact implementation references

- `src/components/design-lab/UiKitLab.tsx` — `KuberaButton`, A/B/C material specimens, compact EN/RU examples, secondary button, badge, form controls.
- `src/app/globals.css` — scoped `.ui-kit-lab` semantic theme tokens and material/state styles.
- `src/components/design-lab/LiquidGlassLab.tsx` — isolated material proof and glass off/on comparison.
- `src/app/design-lab/ui-kit/page.tsx` — isolated noindex UI Kit route.
- `src/app/design-lab/liquid-glass/page.tsx` — isolated noindex material lab route.
- `tests/browser/ui-kit-lab.spec.ts` — visual delta, geometry lock, computed-style, CSS/JS loading and interaction guard.
- `tests/browser/liquid-glass-lab.spec.ts` — material proof checks.
- `package.json` / lockfile — dependency declaration and resolved version.

## Approved family

1. Primary cyan optical/liquid-glass CTA.
2. Compact EN/RU glass buttons.
3. Explore Services secondary glass button.
4. Cyan luminous rim and restrained external glow.
5. Hover direction: already luminous cyan → more luminous cyan.
6. Focus: visible cyan focus treatment.
7. Gold is reserved for brand/premium identity; functional cyan never becomes gold.
8. Component geometry is independent from theme/material appearance.

## Material contract

- Requires a visually rich backdrop; it is not evaluated over a flat fill.
- Uses real lens/refraction/specular layers where supported.
- Keeps content as ordinary crisp DOM content above the material.
- Must degrade to dark translucent surface + rim + controlled glow.
- Must be used selectively; do not make every rectangle glass.
- Must retain 44px interactive targets where applicable and visible keyboard focus.

## Evidence

- Material report: `reports/KUBERA_LIQUID_GLASS_MATERIAL_LAB_V5_2026-10-04.md`
- Theme/UI Kit report: `reports/KUBERA_THEME_ARCHITECTURE_UI_KIT_PHASE1_2026-10-05.md`
- UI Kit evidence root: `C:\Users\Admin\kubera-visual-audit\evidence\ui-kit-20261005\`
- Material Lab evidence manifest: `reports/evidence/design-pilot-v5-material-lab/manifest.json`
- UI Kit evidence manifest: `reports/evidence/theme-architecture-ui-kit-2026-10-05/manifest.json`

## Rollback

Revert to the preserved UI Kit SHA or remove the lab-only material consumer. No production consumer exists in this Phase 1 record.
