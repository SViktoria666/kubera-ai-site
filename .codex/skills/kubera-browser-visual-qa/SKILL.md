---
name: kubera-browser-visual-qa
description: Prove Kubera rendered UI behavior with real browser evidence for layout, responsive, overlay, media, navigation, or workflow changes.
---

## Trigger

Use for CSS/layout, component rendering, responsive behavior, overlays or assistant surfaces, workflow/diagram geometry, media, or navigation changes where appearance matters. Do not use source inspection, build output, HTTP 200, or DOM presence as a visual pass.

## Procedure

1. Identify affected templates, routes, conditional variants, and the user-visible acceptance criteria.
2. Select relevant viewports rather than blindly rendering every route: core desktop `1366x768` and mobile `390x844`; add `1440x900` and `1024x768` for complex surfaces or breakpoint-sensitive work.
3. Render the local/preview/production target in an actual browser. An isolated Playwright + Microsoft Edge audit environment may exist outside this repository; it is not a production dependency and is not guaranteed on a fresh clone.
4. Check geometry, clipping, overflow, text collision, failed images/media, hidden content, responsive transitions, and relevant z-index/positioning.
5. Check assistant overlap and workflow semantic geometry when relevant: paths, labels, cards, branches, continuation, and intentional termination.
6. Capture selective screenshots, measurements, console/network failures, and route/viewport identifiers as evidence.
7. Compare the rendered result with the intended design and classify `VISUAL PASS`, `VISUAL FAIL`, or `VISUAL VERIFICATION BLOCKED / NOT PERFORMED`.

## Hard rules

`typecheck != visual proof`; `build != visual proof`; `HTTP 200 != visual proof`; `DOM presence != visual proof`. If actual browser evidence is unavailable, never claim `VISUAL PASS`. Do not create a 192-page screenshot set when template-first representative coverage is sufficient.

The historical workflow geometry incident is closed. Treat it as a regression class and acceptance lesson, not as a current production defect.

## Output

Return routes/templates, selected viewports, browser used, evidence paths or measurements, failures, and one of the defined visual statuses. If rendering was unavailable, state that instead of claiming a pass.

## Wave D boundary

This skill defines the procedure only. Automated Playwright infrastructure, reusable browser tests, and visual baselines are a planned Wave D capability unless the current environment independently provides them.
