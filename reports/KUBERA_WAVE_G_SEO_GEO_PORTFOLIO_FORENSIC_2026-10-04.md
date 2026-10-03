# Kubera Wave G — SEO/GEO Commercial Portfolio Forensic

Status: forensic complete; no SEO implementation performed.

## Executive result

The current architecture is technically indexable and internally consistent, but the GSC evidence does not support treating the 162-page non-blog portfolio as one equally mature demand surface. Evidence is concentrated in a small number of pages and mixed-intent use cases. The correct near-term response is selective investigation, not a mass rewrite or more country pages.

The actionable inventory is 211 routes: 49 blog routes (blog index plus 48 articles) and 162 non-blog routes. The historical build count is 213 because `/demo` and `/ru/demo` are concrete build routes but are explicitly outside Wave E's indexable/sitemap scope. They are not included in the portfolio matrix.

## Evidence and method

### Repository facts

- Base: `53b925c4b8479de579645f7e38e0f87f666ae509`.
- Canonical host: `https://www.kubera-automation.com`.
- Wave E deterministic validation remains the source for route, sitemap, canonical, internal-link, JSON-LD, and rendered-SEO consistency. It does not prove Google visibility.
- Inventory was derived from current `src/app`, `src/content`, `content/blog`, country/GEO catalogs, industry solution data, case data, and use-case data.
- Page age is a Git first-seen proxy where no publication date exists. It is not a claim that the page was first published on that date.

### GSC facts

Source: sanitized Wave F packet in `reports/evidence/wave-f-gsc-2026-10-04/`; property `sc-domain:kubera-automation.com`.

| Window | Clicks | Impressions | CTR | Average position |
|---|---:|---:|---:|---:|
| 2026-09-05–2026-10-02 | 15 | 2,561 | 0.6% | 15.7 |
| 2026-08-08–2026-09-04 | 10 | 1,725 | 0.6% | 33.4 |
| 2026-07-05–2026-10-02 | 44 | 5,570 | 0.8% | 27.3 |

Visibility and average position improved versus the previous 28 days, while CTR remained approximately 0.6%. The sample is small; percentage changes are not treated as proof of causation.

### External demand/SERP method

Read-only SERP discovery was performed for representative Germany, Spain, Portugal, Cyprus, Finland, and German/Portuguese/Spanish-language clusters. No paid volume tool was available or used. These are qualitative SERP observations, not search-volume estimates. Observations were kept separate from GSC facts and hypotheses.

The sampled SERPs repeatedly contained specialist agencies, WhatsApp/CRM automation providers, real-estate AI products, and localized-language providers. Examples include [German KI process automation](https://www.ki-automatisierungs-agentur.de/), [Spanish WhatsApp AI automation](https://www.nanoredlabs.com/automatizacion-whatsapp-ia-pymes), [Portuguese WhatsApp/CRM automation](https://konnexa.pt/), [Cyprus real-estate AI](https://www.zingzee.com/industries/real-estate), and [Finnish AI automation](https://aigen.fi/). This demonstrates observable commercial SERP competition and localized terminology, but not market size.

## Portfolio inventory

### Counts

| Scope | Count |
|---|---:|
| Concrete build routes | 213 |
| Explicitly excluded demo routes | 2 |
| Actionable indexable inventory | 211 |
| Blog routes | 49 |
| Commercial/non-blog routes | 162 |
| Regional/GEO routes | 36 |
| Service routes | 21 |
| Commercial/industry routes | 54 |
| Use-case routes | 7 |
| Case/proof routes | 32 |
| Service index routes | 3 |
| Contacts | 2 |
| Other commercial/supporting routes | 7 |

The full row-level matrix is the machine-readable source of truth. `N/A` and `UNKNOWN` are intentional where the repository or GSC packet does not provide the fact.

## GSC join and ranking distribution

For every actionable row, the matrix joins page-level GSC values when the canonical URL appears in the supplied export. Absence from a returned GSC page table is treated as insufficient evidence, not as a measured zero.

Among the 162 commercial/non-blog rows, 106 have a page row in the 90-day export and 56 do not. Position bands for all portfolio rows are:

| 90-day position band | Pages | Impressions | Clicks |
|---|---:|---:|---:|
| 1–3 | 10 | 19 | 0 |
| 4–10 | 47 | 557 | 2 |
| 11–20 | 19 | 1,131 | 26 |
| 21–50 | 21 | 1,401 | 4 |
| 51+ | 9 | 1,030 | 0 |
| Insufficient data | 56 | N/A | N/A |

This is a mixed bottleneck: some pages are shown but rank too low, some have first-page visibility with weak click yield, and a large minority has no page-level row in the available export. It is not evidence that the full portfolio is technically unindexed or that every low-visibility page needs rewriting.

## Page/query and portfolio findings

### Germany WhatsApp positive-control candidate

`/en/solutions/germany/whatsapp-automation` remains the strongest commercial/GEO signal. It received 107 impressions, 0 clicks, and average position 6.03 in 90 days; in the primary 28 days it received 57 impressions at position 6.7. The query `whatsapp automation germany` supplied 50 primary impressions at position 7.54 and zero clicks. This is real page-one visibility with a click-yield problem, not a no-demand conclusion.

The current page/query relationship is specific and commercially coherent. External SERPs also show specialist German-language process-automation providers and WhatsApp/Business API material. The evidence supports a focused snippet/intent/competition review later; it does not authorize changing the page in Wave G.

### Commercial/industry portfolio

The industry portfolio has 54 routes across 18 target-country groupings. Evidence is uneven. Examples from 90 days:

- Germany dental: 100 impressions, 2 clicks, position 22.86; page/query evidence is present for terms such as `dental practice automation` and `dental office automation`.
- Cyprus real estate: 220 impressions, 0 clicks, position 65.69; this is visibility without competitive ranking, not a CTR-only case.
- Finland SaaS startup: 156 impressions, 0 clicks, position 33.1; too low for a defensible snippet diagnosis.
- Spain WhatsApp: 43 impressions, 0 clicks, position 5.12; early first-page signal, but too small for a confident conclusion.

The largest high-level pattern is not “one country is bad.” It is that a few specific problem/service combinations are understood by Google while sibling combinations have either low positions or insufficient evidence.

### Real-estate use case

`/use-cases/real-estate-lead-automation` has 325 90-day impressions, 2 clicks, position 32.8. Its page×query sample is mixed: `real estate lead follow up automation` is low (position about 62), while long problem-form queries about capturing and routing enquiries appear at much stronger positions. This is a low-confidence reposition candidate because observed demand may be split between a generic service term and detailed workflow/problem intent.

### Blog retained separately

The model-comparison article remains the Wave F opportunity: 556 impressions, position 4.48, 5 clicks in the primary 28-day period. It is not part of the commercial/GEO action set and is retained for the next focused snippet/search-intent forensic.

## Country × service / localization observations

The repository contains a broad country × industry matrix, but GSC does not yet provide enough page×query volume to validate every combination. Country dimension data must not be treated as page performance: for example, GSC country impressions reflect searcher location, not necessarily the target country of the landing page.

External SERPs show that literal English translation is not a safe localization strategy. German results use `KI-Automatisierung`, `Prozessautomatisierung`, and `KI-Agenten`; Portuguese results use `automação com IA`, `PMEs`, `WhatsApp`, and `CRM`; Spanish results use `automatización con IA`, `WhatsApp`, `pymes`, and `agentes`. The observed market language differs by country and by intent. This supports localization research before creating or rewriting country pages, not automatic translation or page multiplication.

Qualitative status:

- Strongest observed combinations: Germany × WhatsApp automation; Germany × dental automation as an early/second-page signal; Spain × WhatsApp as a first-page early signal; Cyprus × real estate as visible but low-ranking and competitive.
- Early signals: selected Spain, Belgium, Ireland, Netherlands, and Austria service/industry rows with small impression counts.
- Weak/insufficient: most country × service combinations, especially where no page row or only single-digit impressions exist.
- No country is classified as `NO DEMAND` from this packet alone.

## Internal linking and differentiation

Wave E proves literal internal links are valid. Wave G's separate static scan gives only a lower bound: 35 portfolio rows have no literal incoming route reference, 74 have one, and the rest range from a few references to shared navigation/data references. This is not a PageRank measurement and does not prove practical orphaning. It does identify a bounded follow-up: compare contextual discovery for the small priority set before broad linking changes.

The country and industry sources use shared templates, but shared structure alone is not duplicate content. The source data contains country/industry-specific headings, problems, workflows, modules, FAQs, and CTA framing. Some families are semantically close; the current evidence is insufficient to justify consolidation. No page receives `CONSOLIDATE` on this review.

## Classification

Every actionable non-blog row has exactly one primary status in the matrix. Conservative totals:

| Status | Count |
|---|---:|
| KEEP | 2 |
| IMPROVE | 103 |
| REPOSITION | 1 |
| CONSOLIDATE | 0 |
| TOO NEW | 0 |
| NO DEMAND | 0 |
| NEED MORE DATA | 56 |

`IMPROVE` is intentionally broad and low-confidence for many rows with some visibility; it means “evidence exists that merits investigation,” not “rewrite now.” `NEED MORE DATA` is the correct status for absent GSC rows. No `NO DEMAND` or `CONSOLIDATE` label is assigned without stronger evidence. Age is a source-file first-seen proxy; 28 rows are `EARLY`, 134 are `MATURE ENOUGH FOR EVIDENCE`, and exact publication age is unknown for generated/content-composed pages.

## Priority plan

### Phase 1 — Focused evidence review, no mass edits

1. Germany WhatsApp automation: snippet/title and SERP intent review using the exact query/page pair; compare German vs English demand wording; inspect why position 6–7 produces zero clicks.
2. Model-comparison article: retained Wave F candidate for separate snippet/search-intent forensic.
3. Real-estate use case: investigate whether the current page should serve the observed workflow/problem queries or a more generic follow-up query. Do not reposition until the query evidence is expanded.

### Phase 2 — Portfolio architecture evidence

Measure contextual internal discovery for the Phase 1 pages and a small country/service control group. Expand only combinations with repeatable non-brand impressions and coherent intent.

### Phase 3 — Controlled localization/portfolio decisions

For Germany, Spain, Portugal, and Cyprus, validate local-language query clusters and SERP page types before deciding whether a page should be improved, repositioned, or left unchanged. Reassess after a complete GSC window following any later approved implementation.

### Phase 4 — Portfolio gaps

Potential gap themes observed in SERP research include localized workflow automation, WhatsApp/CRM lead handling, and Cyprus real-estate response/follow-up. These are opportunity hypotheses only; no new page is approved until demand, fit, and differentiation are validated.

## Anti-roadmap

- Do not mass-rewrite 162 commercial pages or ~200 total routes.
- Do not delete zero-click pages or call them `NO DEMAND` from absent rows.
- Do not create more GEO pages blindly under the same country × service model.
- Do not translate English keywords literally.
- Do not rewrite every title or change canonical/sitemap/robots without a current defect.
- Do not consolidate pages based only on shared templates.
- Do not buy links before relevance, intent, and page differentiation are understood.
- Do not judge early pages as failures.
- Do not redesign the site as an SEO substitute.

## Limitations

- GSC packet covers three windows and selected page×query exports, not a complete API export for every page/query pair.
- No exact external keyword volumes were available; demand research is qualitative.
- GSC average position is an aggregate diagnostic, not a stable rank guarantee.
- Page age is often a Git/source proxy, not a verified publication timestamp.
- Static internal-link counts are lower bounds and do not measure authority.

## Independent rereview

Verdict: **PASS**.

The review challenged tiny samples, branded-vs-nonbrand ambiguity, absent-row interpretation, country dimension scope, average-position overreach, translation assumptions, and unsupported consolidation/no-demand claims. Findings were handled conservatively: only one low-confidence `REPOSITION` status, zero `NO DEMAND` and zero `CONSOLIDATE`, and a small Phase 1 set. No application or public content changes were made.

## Exact next step

Focused snippet/search-intent forensic for the two retained Wave F candidates—Germany WhatsApp automation and the model-comparison article—while using the real-estate page as a secondary control, not as a new implementation target.
