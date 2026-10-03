# SEO / Content Validation Contract

Wave E provides deterministic repository, build, and rendered-output checks. It is a regression gate, not an SEO rewrite, GSC remediation, or content-quality opinion engine.

## Commands

- `npm run validate:blog` — existing blog/content rules.
- `npm run validate:seo` — production build, then source/build route, blog, sitemap, host, date, metadata-source, and deterministic internal-link validation.
- `npm run browser:test:seo` — rendered browser checks for representative page families. Set `PLAYWRIGHT_PORT` when the default local port is occupied.
- `npm run browser:local` — existing D1 critical visual regression suite.

Run the SEO gate before publishing an article, adding/removing an indexable route, changing metadata, sitemap or schema generation, changing internal-link components, or changing a page template that affects crawlable output. Preview and production publication still require the D2 target-aware deployment gate.

## Validation layers

`SOURCE PASS` checks content catalogs, route declarations, sitemap construction, hosts, dates, and literal internal links. `BUILD PASS` checks that the expected route inventory is present in the production build manifest. `RENDERED HTML PASS` checks actual titles, descriptions, canonicals, H1s, robots-related head output, and parseable JSON-LD in a browser. `VISUAL PASS` remains the D1 browser contract, and `PRODUCTION PASS` remains the D2 deployment/serving proof.

`SOURCE PASS ≠ BUILD PASS ≠ DOM PASS ≠ VISUAL PASS ≠ PRODUCTION PASS.`

## Hard failures

- duplicate or mismatched blog slugs;
- missing required published-article fields, invalid/future dates, or mojibake;
- expected source route absent from the production build;
- duplicate sitemap entries, non-production sitemap host, or missing deterministic indexable route coverage;
- localhost/preview hosts in indexable source;
- deterministic literal internal links that do not resolve to the known route inventory;
- rendered missing title, description, canonical, or required single H1;
- rendered canonical on the wrong host, non-production head URL, or malformed/incorrectly hosted JSON-LD;
- published articles missing from the rendered blog index or sitemap composition.

## Warnings and deliberate scope

Title/description length preferences, keyword targeting, low link counts, and possible orphan risk are not hard failures because they require editorial judgment or a complete crawl model. External links, fragments, `mailto:`, `tel:`, API paths, asset paths, and runtime-only dynamic links are not treated as local route failures. GSC, search-engine availability, Umami, CRM, n8n, and public-site crawling are intentionally outside this deterministic local gate.

## Representative rendered coverage

The browser suite covers Home, Services, an individual service, a commercial page, a regional page, Blog index, a current article, Contacts, and EN/RU equivalents where applicable. It verifies actual response status, title, description, canonical host, one H1, production-host safety, and parseable structured data. The composition check compares all current published blog slugs against the rendered blog index and sitemap, preventing a stale article-card/sitemap state.

## Forensic coverage matrix

| Dimension | Wave E status |
| --- | --- |
| Route/sitemap uniqueness, host, coverage, malformed URLs | Implemented hard gate; fixed missing GEO generation and `/es/espana-automatizacion` sitemap coverage |
| Canonical/title/description/H1 and rendered head | Implemented for representative families |
| Robots/indexability consistency | Representative rendered coverage; full policy semantics remain source-owned |
| Blog fields, dates, duplicate slugs | Existing validator strengthened with deterministic hard failures |
| Blog index/sitemap composition | Implemented against all published articles |
| Literal internal links | Implemented against known route inventory |
| JSON-LD parse/host safety | Implemented for representative rendered pages |
| EN/RU representative coverage | Implemented; full hreflang reciprocity is not forced where the architecture has no universal contract |
| Subjective length, orphan risk, GSC/external crawl | Intentionally warning/deferred, not hard-gated |

No public copy, design, production setting, or GSC state is changed by this gate.
