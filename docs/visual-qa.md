# Visual QA Contract

## Evidence standard

Real browser rendering is required for visual claims. Typecheck, build, HTTP 200, DOM presence, and computed dimensions are useful signals but are not visual proof. Do not claim `VISUAL PASS`, `FIXED`, or `PRODUCTION VERIFIED` without the corresponding browser evidence.

## Current environment

An isolated local Playwright + Microsoft Edge audit environment exists outside this repository. It is the current source of browser evidence, not a production dependency. If it is unavailable, report visual verification as unavailable rather than inventing a pass.

## Template-first coverage

Audit shared templates and conditional layout variants before expanding to every route. Critical categories include home, commercial pages, blog index/article, case index/detail, use cases, GEO/solution pages, language pages, workflow diagrams, video, forms, long headings, assistant/mascot, and complex grids.

Minimum representative viewports are desktop and mobile, normally 1366×768 and 390×844. Complex layouts should additionally be checked at 1440×900 and 1024×768 when relevant.

## Signals and evidence

Check horizontal overflow, clipping, overlap, failed images/media, hidden content, navigation collisions, assistant obstruction, card/grid integrity, workflow connector semantics, and responsive stacking. Save selective screenshots for failures and important acceptance decisions. Future visual baselines should be small, route-critical, and reviewed for intentional changes.

The workflow branch regression is closed in production. It remains a regression-prevention example: semantic geometry must be checked in real browser screenshots, not inferred from source or build output.

## D1 browser foundation

The repository now contains a bounded Playwright foundation in `playwright.config.ts` and `tests/browser/critical.spec.ts`. It is template-first and risk-first, not a screenshot sweep of every route.

Run the critical suite from the repository root:

```text
npm run browser:test:critical

# Explicit target-aware gates
npm run browser:local
PLAYWRIGHT_BASE_URL=https://<verified-preview-url> PLAYWRIGHT_EXPECTED_SHA=<sha> npm run browser:preview
npm run browser:production
```

The default local server is the repository dev server on `http://127.0.0.1:3200`; override the port with `PLAYWRIGHT_PORT` if needed. To test a completed production build instead, run `npm run build` first and then run the suite with `PLAYWRIGHT_USE_PROD_SERVER=1` in the shell environment. `PLAYWRIGHT_BROWSER_CHANNEL=msedge` may be used when the locally installed Microsoft Edge audit browser is the evidence browser; without it, Playwright uses its configured/default Chromium browser and that browser must be installed on the machine. The harness never reuses an existing server, so an occupied port is a setup failure rather than a silent test-environment substitution.

The D2 gate labels every run with `LOCAL`, `PREVIEW`, or `PRODUCTION`, plus URL and serving-version metadata. Remote targets never start the local web server. If provider metadata cannot prove the serving version, the result is `DEPLOYMENT STATE UNKNOWN`, not visual or production PASS. Evidence is retained as compact JSON in ignored `browser-gate-evidence/`; screenshots and traces are retained by Playwright on failure.

The critical route matrix represents the home, commercial services, blog article, contacts, and use-case templates. The core projects are `1366x768` desktop, `390x844` mobile, and `1024x768` tablet for breakpoint-sensitive surfaces. A `1440x900` run is added only when a specific complex layout requires it; it is not a blanket matrix.

The suite currently covers:

- route sanity with visible `main`, fatal page-error detection, near-viewport broken-image detection, and document overflow checks;
- the closed workflow incident as a regression class: step 07, YES/NO branch structure, branch ordering, rendered column geometry, merge connector, and step 11 convergence;
- the assistant launcher and panel at mobile, tablet, and desktop sizes, including in-viewport bounds, open/close behavior, panel containment, and overflow.

Playwright writes failure screenshots, traces, and videos to `test-results/` and the HTML report to `playwright-report/`; these are diagnostic artifacts and are ignored by Git. The workflow and assistant tests also attach targeted screenshots on successful critical checks. No committed golden screenshot baseline is required by D1.

`VISUAL PASS` requires the actual browser run, the relevant project/viewport, assertions for the affected invariant, and selective screenshot or failure diagnostics where appropriate. Typecheck, build, HTTP 200, DOM presence, and source inspection remain separate signals and cannot substitute for browser evidence. If the browser cannot run, the result is `VISUAL VERIFICATION BLOCKED / NOT PERFORMED`.

When a visual incident is found, add a focused regression test only after preserving the incident evidence and identifying the shared template/route class. Keep the assertion semantic and geometry-based where possible; do not encode arbitrary pixel positions or create a baseline for every URL. D1 does not implement the preview-to-production browser gate; that is a separate D2 scope.
