# Kubera Wave F — GSC Forensic / Evidence-Based SEO Prioritization

Status: `COMPLETE — read-only GSC forensic and evidence-based prioritization`

This report deliberately separates repository facts from Search Console facts. No SEO optimization, content rewrite, metadata change, design change, production change, or GSC action was performed.

## Evidence sources and freshness

Repository evidence:

- Verified `origin/main`: `b297d324e45b4824fed90d0cb58d4820fb4de052`.
- `docs/seo-validation.md`, `docs/content-system.md`, `docs/deployment.md`, `docs/checkpoints/CURRENT.md`.
- Wave E source/build/rendered validation: 213 concrete indexable routes, 48 blog files, `npm run validate:seo` PASS, rendered SEO 39/39 PASS.
- Current application source, route catalogs, sitemap, canonical host, and content loaders.

GSC evidence discovery:

- No GSC CSV/XLSX export exists in the repository.
- No prior GSC performance report or Search Console API script exists in the repository.
- No connected Search Console tool or authenticated GSC browser/session is available in this Codex environment.
- Local Downloads contained five `.xlsx` files timestamped 2023-10-13, each with a sheet named `Экспорт складских товаров`; these are unrelated warehouse exports and were not used as SEO evidence.
- No credentials, tokens, cookies, or private browser state were accessed or copied.

Result: there is no defensible Search Console dataset from which to calculate clicks, impressions, CTR, average position, query/page relationships, device, country, or search appearance. No fresh GSC data is fabricated.

## Required analysis windows

The intended windows, once a complete export is available, are:

- Primary: 2026-09-05 through 2026-10-02 (last complete 28 days).
- Comparison: 2026-08-08 through 2026-09-04 (previous complete 28 days).
- Secondary: 2026-07-05 through 2026-10-02 (last complete 90 days).

These are planned windows, not analyzed results. GSC timezone and export timestamps must be recorded with the supplied data.

## Property scope

The repository canonical host is `https://www.kubera-automation.com`. The GSC property type and scope are not available in the current environment, so Domain, URL-prefix, `www`, non-`www`, and mixed-property data cannot be distinguished. No property scopes were compared as if they were equivalent.

## Site-level performance

| Metric | Result |
| --- | --- |
| Clicks | Not available — GSC export required |
| Impressions | Not available — GSC export required |
| CTR | Not available — GSC export required |
| Average position | Not available — GSC export required |
| Period comparison | Not performed |

No traffic trend, CTR weakness, ranking traction, or loss of traction can be claimed from the available repository evidence.

## Page, query, and page × query findings

No page-level or query-level GSC rows are available. Therefore:

- High-impression/low-CTR pages: not determinable.
- Position 4–10 or 11–20 opportunities: not determinable.
- Growing impressions/clicks or losing traction: not determinable.
- Query intent, landing-page match, blog absorption of commercial queries, GEO demand, and cannibalization: not determinable.
- Branded versus non-branded performance: not determinable.
- Country, device, and search-appearance differences: not determinable.

Repository route families are known, but route existence is not search demand evidence. The 213-route inventory is not substituted for GSC performance.

## Indexing and technical issue classification

No GSC Page Indexing issue list, export, screenshot, or date-stamped inspection is available. Consequently the counts below mean “observed in available evidence,” not “all GSC issues.”

- REAL CURRENT ERROR: `0 observed; full classification unavailable`.
- EXPECTED: `0 observed; full classification unavailable`.
- HISTORICAL GSC RESIDUE: `0 observed; full classification unavailable`.
- TOO EARLY / WAIT: `0 observed; full classification unavailable`.
- NEEDS MORE EVIDENCE: `all unobserved GSC issue claims`.

Current repository cross-check is positive: Wave E proves sitemap/source/build/rendered consistency, canonical production-host safety, deterministic internal-link protection, blog composition consistency, and the GEO static-generation and Spanish sitemap corrections. This does not prove Google has recrawled or indexed the current state.

## Blog forensic

Repository facts: 48 blog source files pass the existing and Wave E validators; rendered blog index and sitemap composition passed. Article age, impressions, clicks, query demand, informational-versus-commercial discovery, and premature-ranking risk cannot be assessed without GSC rows joined to publication dates.

No article is classified as unsuccessful, and no article is selected for optimization in Wave F.

## Commercial and GEO forensic

Repository facts: service, commercial/industry, regional/GEO, use-case, case, EN, and RU families are present and technically covered by Wave E representative validation. Search demand observed, early signal, no evidence yet, and insufficient age/data cannot be distinguished without GSC page/query data.

No commercial, industry, country, or GEO page is recommended for deletion or rewriting from the current evidence.

## Evidence-based action set

### NOW

No page or query optimization candidate is evidence-backed yet. The only justified NOW action is to obtain a read-only GSC export for the canonical property, covering:

1. Search results by query and page for the primary and comparison 28-day windows, with clicks, impressions, CTR, position, and date range.
2. A 90-day page/query export or equivalent comparison.
3. Property type/scope and canonical host confirmation.
4. Page Indexing issue list with issue status and last-updated dates, if technical warnings are to be classified.

### NEXT

After the export is available: compute site/page/query metrics, join query→landing page, separate brand/non-brand, classify intent, cross-check indexing observations against the 213-route Wave E truth, and select a small NOW set using impression and position evidence.

### WAIT / DO NOT TOUCH

- All title, description, content, internal-link, schema, sitemap, canonical, and page-creation changes.
- Mass analysis or optimization of all 213 routes without page/query evidence.
- Any page with zero observed clicks when no GSC impression/age evidence is available.
- Any GSC warning not accompanied by a current date-stamped issue and a repository/runtime defect.
- Design changes, link acquisition, content deletion, and publication slowdown based only on absence of available data.

## Anti-roadmap

Based on the evidence actually available, Kubera should not:

- mass-rewrite 213 pages, titles, or descriptions;
- delete pages because clicks are unknown or currently zero in the absence of GSC data;
- change sitemap or canonical architecture;
- treat Wave E technical PASS as proof of Google indexing or ranking;
- treat historical or unobserved GSC residue as a current defect;
- claim cannibalization from similar route names;
- redesign the site as an SEO fix;
- start SEO optimization before page×query evidence exists.

## Recommended next implementation stage

`Wave F.1 — Import and validate a read-only GSC evidence packet`, limited to safe parsing, date/property validation, page×query aggregation, and evidence-backed NOW/NEXT/WAIT classification. No optimization should be included in that implementation stage unless the imported evidence proves a small candidate set.

## Independent doubt review

Review scope: evidence availability, freshness, property scope, aggregation claims, repository cross-check, and roadmap restraint.

Findings:

- No unsupported performance numbers were presented.
- Repository facts were not treated as GSC performance facts.
- No branded/non-brand, CTR, position, cannibalization, or indexing conclusion was inferred without rows.
- No content, design, production, or GSC action was performed.
- The missing evidence is material to the requested questions, so this wave cannot be declared a full PASS.

Verdict: `BLOCKED` pending the minimum read-only GSC evidence packet above.

## WAVE F.1 — GSC evidence acquisition and completed forensic — 2026-10-04

The earlier blocked sections above describe the pre-acquisition state and are superseded by this dated completion section. No application, content, metadata, sitemap, design, production, or GSC configuration was changed.

### Evidence source, property, and periods

- Source: read-only Google Search Console UI through the pre-authorized isolated Chrome session; exports are stored under `reports/evidence/wave-f-gsc-2026-10-04/`.
- Property: `sc-domain:kubera-automation.com` (Domain property), matching the canonical Kubera host scope.
- Primary: 2026-09-05–2026-10-02.
- Comparison: 2026-08-08–2026-09-04.
- Secondary: 2026-07-05–2026-10-02.
- GSC UI showed data refreshed approximately 5.5 hours before acquisition. The downloaded chart sheet omits the selected end-day row, so exact-range headline totals below use the rendered GSC total cards; table exports are retained as row evidence.

### Site-level performance

| Period | Clicks | Impressions | CTR | Average position |
| --- | ---: | ---: | ---: | ---: |
| Primary 28 days | 15 | 2,561 | 0.6% | 15.7 |
| Previous 28 days | 10 | 1,725 | 0.6% | 33.4 |
| Secondary 90 days | 44 | 5,570 | 0.8% | 27.3 |

Primary versus comparison: clicks increased by 5 (+50%), impressions by 836 (+48.5%), and average position improved by 17.7 positions. CTR stayed approximately flat at the displayed one-decimal precision. This is a visibility/ranking improvement, not proof of a broad conversion or commercial-demand improvement.

### Page findings

Primary page evidence contains 116 returned page rows. The strongest signals are concentrated:

- Model-comparison article `/blog/claude-vs-chatgpt-vs-gemini-vs-qwen-vs-deepseek`: 5 clicks, 556 impressions, 0.9% CTR, position 4.48.
- Home: 5 clicks, 125 impressions, 4.0% CTR, position 8.61.
- Real-estate lead automation use case: 1 click, 131 impressions, 0.76% CTR, position 15.5.
- Germany dental automation commercial page: 1 click, 71 impressions, 1.41% CTR, position 23.9.
- 2026 model-update article: 0 clicks, 193 impressions, position 6.2.
- Minimax/Kimi comparison article: 0 clicks, 123 impressions, position 5.47.
- Germany WhatsApp automation page: 0 clicks, 57 impressions, position 6.7.

These are evidence-backed investigation candidates, not proven causes of weak CTR. Pages with zero clicks and low impressions are classified as insufficient evidence, not failures.

### Query findings

Primary query export contains 175 returned query rows. Meaningful examples:

- `whatsapp automation germany`: 50 impressions, 0 clicks, position 7.54 — a commercial/GEO signal with enough relative visibility for targeted investigation.
- `qwen vs claude vs chatgpt`: 10 impressions, 1 click, position 5.4 — informational traction aligned to the model-comparison article.
- `ai automation cyprus`: 34 impressions, 0 clicks, position 51.29 — early/weak ranking, not a CTR-first candidate.
- `ai process automation finland`: 32 impressions, 0 clicks, position 60.12 — early/weak ranking, not a CTR-first candidate.
- `dental practice automation`: 25 impressions, 0 clicks, position 24.92; `dental office automation`: 16 impressions, position 28.62 — commercial intent exists but is not yet page-one traction.
- A long APAC voice-AI query received 15 impressions at position 8.87 with zero clicks; this is a single-query sample and remains a hypothesis requiring SERP/snippet review.

### Page × query evidence

Filtered exports are retained for Home, the model-comparison article, the real-estate use case, and Germany dental automation. Observed relationships:

- Home: `kubera automation` 2 clicks / 7 impressions / position 2; other branded variants are sparse. This is branded traction, not non-brand discovery proof.
- Model-comparison article: `qwen vs claude vs chatgpt` 1 / 10 / position 5.4; additional Qwen/model-comparison variants are mostly zero-click rows at positions 1–15. Page/query intent is a MATCH, with a possible snippet/CTR investigation.
- Real-estate use case: `real estate lead follow up automation` is 0 / 9 / position 62, while several long real-estate workflow questions appear at positions 1.83–6 with 1–6 impressions each. This is mixed-intent evidence and a POSSIBLE PARTIAL MATCH, not proven cannibalization.
- Germany dental page: `dental practice automation` is 0 / 25 / position 24.92 and `dental office automation` is 0 / 16 / position 28.62. This is a commercial-intent PARTIAL MATCH with insufficient page-one traction.

No cannibalization claim is made: the available page×query evidence does not show the same meaningful query being split across multiple Kubera landing pages at credible volume.

### Brand, country, device, and search appearance

Brand classification used transparent patterns: `kubera`, `kuberai`, `kubeera`, `kuber.ai`, and `cubera`. In the returned primary query rows, branded rows contain 2 clicks / 40 impressions and non-branded rows contain 1 click / 736 impressions; these are row-export subtotals, not replacements for site totals because Search Console table exports are sampled/truncated relative to total cards. The evidence still shows that the observed click base is too small to claim strong non-brand acquisition.

Primary country rows show the largest impression volumes in the United States (878, 2 clicks, 0.23% CTR, position 18.6), India (152, 5 clicks, 3.29%, position 12.12), Germany (79, 0 clicks, position 13.8), and Cyprus (67, 0 clicks, position 43.31). Device rows show desktop 12 clicks / 2,155 impressions and mobile 3 / 397. Search-appearance export was empty in this snapshot; no conclusion is drawn from that absence.

### Indexing and sitemap classification

GSC Page Indexing showed 147 indexed and 46 not indexed, last updated 2026-09-21. Issue groups were 16 redirected, 1 robots.txt blocked, 13 crawled-not-indexed, 11 not found (404), and 5 duplicate/canonical mismatch pages. GSC sitemap data showed `https://kubera-automation.com/sitemap.xml` successful, 85 discovered pages, last processed 2026-07-02.

Classification for this wave:

- REAL CURRENT ERROR: 0 proven. Wave E current repository/build/rendered validation remains PASS for 213 indexable routes and canonical host safety; no URL-level GSC issue was demonstrated to still exist in current source/runtime.
- EXPECTED: 1 issue group likely expected pending URL-level review — redirects (16 pages). Redirects are not intrinsically errors.
- HISTORICAL GSC RESIDUE: 1 observation — the non-www sitemap record last processed on 2026-07-02 and its 85-page count predate the current Wave E route truth; this is stale evidence, not a reason for sitemap churn.
- TOO EARLY / WAIT: 0 issue groups can be safely assigned without first-seen/age data.
- NEEDS MORE EVIDENCE: 4 issue groups — robots blocked (1), crawled-not-indexed (13), 404 (11), and duplicate/canonical mismatch (5). URL-level inspection and recrawl timing are required before code action.

### Blog, commercial, and GEO findings

Blog is the clearest current visibility source: the model-comparison article alone has 556 primary impressions and position 4.48; several newer/model articles have positions 5–9 with zero clicks and 53–193 impressions. These are snippet/intent investigation candidates, not proof that titles or content should be rewritten. Commercial/GEO evidence is thinner: Germany WhatsApp has a page-one query signal, Germany dental has page-two traction, while Finland/Cyprus/Sweden signals are mostly positions 40–80 or small samples. No page is recommended for deletion due to zero clicks.

### Evidence-based action set

#### NOW

1. `/en/solutions/germany/whatsapp-automation` and query cluster `whatsapp automation germany` — 57 page impressions at position 6.7; query 50 impressions at position 7.54; 0 clicks. Investigate title/snippet relevance and SERP intent before any edit.
2. `/blog/claude-vs-chatgpt-vs-gemini-vs-qwen-vs-deepseek` — 556 impressions, position 4.48, 5 clicks; filtered page×query evidence aligns to Qwen/model-comparison intent. Investigate snippet differentiation and whether the result satisfies the exact comparison SERP.

#### NEXT

- `/blog/2026-ai-model-update-gpt-claude-gemini-kimi` and `/blog/minimax-m3-vs-kimi-k3`: positions 6.2 and 5.47 with 193 and 123 impressions but zero clicks; validate SERP/snippet and article freshness before changes.
- `/use-cases/real-estate-lead-automation`: 131 impressions, position 15.5, 1 click; mixed page×query intent and insufficiently concentrated demand.
- `/en/solutions/germany/dental-automation`: 71 impressions, position 23.9, 1 click; dental query cluster is relevant but not yet page-one traction.

#### WAIT / DO NOT TOUCH

- Pages with low impressions or positions beyond page two; most country/GEO pages fall here.
- New/low-age articles without enough impressions to distinguish no demand from normal discovery delay.
- All 213 routes as a mass optimization set; no mass title/description rewrite, sitemap churn, canonical changes, page deletion, link buying, or redesign.
- GSC issue groups without URL-level current-source confirmation; do not react to historical sitemap residue.

### Anti-roadmap

Do not optimize the whole route inventory, rewrite all metadata, delete zero-click pages, change canonical/sitemap architecture, treat Wave E PASS as Google indexing proof, infer causality from average position, or claim cannibalization from similar keywords. Do not begin GSC remediation or content rewrite until the two NOW candidates receive focused SERP/snippet and intent review.

### Independent rereview

Read-only doubt review PASS. The analysis records exact periods and property scope, separates GSC facts from repository facts and hypotheses, uses the rendered totals rather than incomplete chart-row sums, qualifies table-export subtotals, does not treat zero clicks as failure, does not claim cannibalization without page×query support, and classifies stale/indexing observations conservatively. No implementation or production action was performed.

Wave F result: `COMPLETE / FORENSIC PASS`.

Exact next implementation stage: focused evidence-based snippet/intent forensic for the two NOW candidates. No SEO edit is authorized by this report alone.
