# KUBERA FULL GEO CONTENT ROOT-CAUSE FORENSIC — 2026-10-06

## Scope and inventory

- 36 GEO-like URL paths resolve from two 18-country families.
- 19 are non-redirect indexable pages: 18 canonical /en/<country>-automation pages plus the Spanish /automatizacion-ia-espana page.
- 17 /ai-automation-* paths are legacy aliases redirected by middleware to canonical country pages.
- The previous 18-route report enumerated only src/content/geo/catalog.ts; the owner’s approximately 36 count includes the separate src/content/countries/countries.ts family.

## Pair comparison

The hypothesis is CONFIRMED: every country has a canonical CountryPage model and a markdown-backed GeoPage entry. The canonical family has three populated sections per country. The markdown family is the affected family: 17 of 18 routes contain parser-created empty/title-only/thin section records; Spain is the unflagged exception under the existing classifier.

## Root-cause chain

src/content/geo/*.md → scripts/generate-geo-kb.mjs → src/content/geo/generated.ts → src/content/geo/loader.ts → GeoPageData.sections → GeoPage.

The source prose is present. The shared parser’s fallback rule treats a short line that does not end in punctuation as a section heading. Lists, short subheadings, and other content-bearing lines therefore become title-only sections. The generator and runtime loader share this parsing shape. GeoPage then renders every parsed section as a visible panel, including an empty blocks array. This is parser/schema loss amplified by the renderer’s unconditional panel contract, not missing authoring and not a CSS-only issue.

## Historical evidence

- GEO engine/catalog/parser/renderer introduced in 8939e1a (2026-06-10).
- Country source model predates it in the SEO foundation 1953a59 (2026-06-08).
- GEO files were authored in June 9–10 commits, including Germany at d50286d; current and historical files contain fuller prose.
- GEO generation was added in ea25de4 (2026-06-11). Redirect consolidation occurred in cd04f43.
- No evidence of a deleted fuller copy or mass content overwrite was found. Full historical copy is recoverable verbatim from Git; no copy was restored in this task.

## Classification

- NEVER AUTHORED: 0 confirmed.
- AUTHORED THEN LOST: 0 confirmed.
- SOURCE EXISTS / GENERATOR LOST: 0 confirmed.
- GENERATED EXISTS / PARSER LOST: 155 empty + 58 structural title-only records; 17 affected pages.
- PARSER EXISTS / RENDERER LOST: 0 confirmed.
- INTENTIONAL SHORT: 86 thin records require content-owner review; they are not automatically defects.
- STRUCTURAL PLACEHOLDER: 58.
- UNKNOWN: 0 for the GEO parser incident.

## Why existing QA missed it

Build/SEO validation checks route presence, metadata, source shape, and generated-route inclusion. Browser/D1 checks validate DOM, assets, hydration, overflow, controls, and representative rendering. None asserts semantic body population for GeoPageData.sections, rejects title-only content-bearing panels, or compares source prose to parsed blocks. Empty panels are therefore valid React/HTML and valid route output. The prior visual review was representative rather than a route-wide semantic content audit.

## Production impact

The same source/parser/renderer chain is used by real GEO routes, so the issue is production-relevant by code path. This task performed no production mutation or external crawl. The exact current-source affected set is 17 of 18 markdown family routes; canonical country pages are source-complete.

See the JSON evidence for every route, item, source field, generated field, parser field, and rendered field.

