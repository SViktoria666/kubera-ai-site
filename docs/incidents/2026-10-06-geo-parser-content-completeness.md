# Incident

## DATE

2026-10-06

## INCIDENT

GEO parser fidelity produced title-only and visually empty content panels.

## IMPACT

17 of 18 markdown-backed GEO routes could render incomplete visible commercial/informational sections. This was a serious production-quality defect: incomplete visible content can reduce page usefulness and visitor trust. No causal claim is made about lead volume or business outcomes.

Historical forensic counts were 155 empty records, 213 title-only records, 58 structural placeholders, and 86 thin records requiring separate owner/content classification.

## AFFECTED SURFACE

`src/content/geo/*.md` → `scripts/generate-geo-kb.mjs` → `src/content/geo/generated.ts` → `src/content/geo/loader.ts` → `GeoPageData.sections` → `src/components/geo/GeoPage.tsx`.

The canonical `countries.ts` / `CountryPage` family was not affected by this parser defect.

## DISCOVERY

Owner visual review found large GEO surfaces that appeared empty or title-only. The full forensic expanded the check from 18 markdown routes to 36 GEO-like paths across two country families and then to all 211 real indexable user-facing routes.

## EVIDENCE

- First GEO engine/parser/renderer introduction: `8939e1a`.
- Fuller authored Germany source: `d50286d`; sibling GEO source files were authored June 9–10, 2026.
- Prior full GEO audit: `reports/KUBERA_FULL_GEO_CONTENT_AUDIT_2026-10-06.json`.
- Site-wide audit: `reports/KUBERA_SITEWIDE_CONTENT_COMPLETENESS_AUDIT_2026-10-06.json`.

## ROOT CAUSE

The parser fallback treated any short non-terminal English line as a top-level section heading. Content-bearing list labels and subheadings were therefore detached from their authored body text and emitted as title-only sections. The generator and runtime loader shared the same heuristic. The renderer then emitted every parsed section as a panel, including empty `blocks`.

This was parser/schema loss amplified by the renderer, not missing authored copy.

## WHY EXISTING CHECKS MISSED IT

Build and SEO checks validated route presence, metadata, and generated-route inclusion. Browser/D1 checks validated DOM existence, assets, hydration, overflow, controls, and representative rendering. No check asserted semantic body population, source-to-generated parity, generated-to-parser parity, or rejected empty content-bearing panels.

## FIX

- Removed the unsafe generic short-line heading fallback from both generator and runtime parser paths.
- Preserved explicit semantic section forms and added only reusable heading patterns.
- Added a renderer fail-safe that omits malformed empty content panels without hiding legitimate short UI controls.
- Added `npm run validate:content` and controlled-failure tests under `tests/content-completeness.test.mjs`.

No GEO marketing copy, SEO intent, canonical strategy, sitemap, or route architecture changed.

## VERIFICATION

- Source/generated parity: PASS for all 18 markdown sources.
- Content gate: PASS; zero empty generated sections.
- Controlled failures: PASS; required-body, title-only-card, parity-loss, and empty-section fixtures fail; restored valid state passes.
- Post-fix 211-route audit: 194 healthy baseline families plus all 17 formerly affected GEO routes now clear of empty/title-only/placeholder defects. Thin content remains a separate owner review category.

## PRODUCTION PROOF

External production read-only verification was not completed because the bounded local HTTP probe was blocked by PowerShell runtime/tooling errors before a production response could be established. Production status is therefore UNKNOWN, not PASS.

## ROLLBACK

Revert the single remediation commit. This restores the prior parser, renderer, tests, and documentation without changing main or production deployment state.

## RECURRENCE GUARD

The family-aware Content Completeness Gate rejects missing required bodies, title-only content cards, empty generated GEO sections, incomplete CTA/FAQ records, source/generated raw loss, and source/generated route drift. It intentionally does not enforce arbitrary word counts or judge buttons, labels, badges, prices, navigation, or metadata labels.

## FOLLOW-UP

Owner/content review remains required for the 86 historical/provisional thin records and the 58 historical structural-placeholder records. They must not be expanded or converted into marketing copy without separate authorization.
