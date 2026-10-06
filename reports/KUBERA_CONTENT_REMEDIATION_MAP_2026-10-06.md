# KUBERA CONTENT REMEDIATION MAP — 2026-10-06

No remediation was implemented in this forensic task.

## P0 — content-path correction before broad review/rollout

- 17 affected markdown-backed GEO routes: first restore parser/source-to-model fidelity without changing copy.
- Preferred action: FIX PARSER / GENERATOR contract, then verify GeoPage does not render empty content-bearing panels.
- Do not rewrite source prose until parser fidelity is proven; current fuller source remains in Git.

## P1 — owner content review

- Review the 86 thin records and 58 structural placeholders with the owner/content authority.
- Classify each as intentional short content, content needing expansion, or invalid placeholder.
- Action options: RESTORE FROM GIT where historical source differs; FIX SOURCE where current source is intentionally incomplete; REMOVE INVALID PLACEHOLDER where a section was never intended as copy.

## P2 — prevention and broader quality

- Add family/component-aware source-to-generated parity checks.
- Add a content-bearing title/body contract and reject empty rendered panels.
- Keep minimum-length rules scoped to semantic components; do not impose a site-wide word count.

## Not authorized in this wave

No copy writing, SEO change, sitemap change, route change, renderer redesign, production change, deployment, or 211-route owner-review restart.

