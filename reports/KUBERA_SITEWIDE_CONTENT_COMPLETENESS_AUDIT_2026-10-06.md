# KUBERA SITE-WIDE CONTENT COMPLETENESS AUDIT — 2026-10-06

## Scope

Audited 211 validator-equivalent real indexable user-facing routes from source inventory. Excluded design-lab, API, demo, and redirect-only demo routes. The audit is read-only and source-backed.

## Result

Conclusion: **MOSTLY-GEO**.

The confirmed completeness defect is concentrated in the markdown-backed GEO parser family: 17 affected routes. The separate canonical country family and other families have no scoped missing required-looking content fields or empty content arrays in this audit.

## Family totals

- HOME / SHARED: 6 total, 0 affected, critical 0, high 0, medium 0, low 0; none detected by scoped source completeness checks.
- GEO / REGIONAL / COUNTRY (legacy markdown): 18 total, 17 affected, critical 0, high 17, medium 0, low 0; parser-created empty/title-only GEO sections.
- BLOG: 49 total, 0 affected, critical 0, high 0, medium 0, low 0; none detected by scoped source completeness checks.
- CASES: 16 total, 0 affected, critical 0, high 0, medium 0, low 0; none detected by scoped source completeness checks.
- GEO / REGIONAL / COUNTRY (canonical country): 18 total, 0 affected, critical 0, high 0, medium 0, low 0; none detected by scoped source completeness checks.
- COMMERCIAL / INDUSTRY: 54 total, 0 affected, critical 0, high 0, medium 0, low 0; none detected by scoped source completeness checks.
- ES: 1 total, 0 affected, critical 0, high 0, medium 0, low 0; none detected by scoped source completeness checks.
- RU: 21 total, 0 affected, critical 0, high 0, medium 0, low 0; none detected by scoped source completeness checks.
- LANDING PAGES: 21 total, 0 affected, critical 0, high 0, medium 0, low 0; none detected by scoped source completeness checks.
- USE CASES: 7 total, 0 affected, critical 0, high 0, medium 0, low 0; none detected by scoped source completeness checks.

## Detector contract

The detector scopes completeness checks to content-bearing source contracts: section bodies, card descriptions, FAQ answers, process bodies, and required-looking structured fields. It does not classify navigation labels, buttons, badges, prices, metadata labels, or other compact UI strings as thin content. It checks GEO source/generated/parser/rendered lineage separately and scans non-GEO content sources for empty required-looking strings or empty content arrays.

## Why QA missed it

Existing validators prove route/build/SEO/DOM/asset/hydration behavior but do not prove semantic content population or source-to-parser parity. The GeoPage renderer accepts an empty blocks array and still emits a panel, so route and DOM assertions pass while usefulness is reduced.

## Caveat

No production request or production mutation was performed. The audit proves the defect from the current source and shared render contract; a later read-only production crawl may validate external parity before remediation.

