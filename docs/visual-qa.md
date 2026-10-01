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
