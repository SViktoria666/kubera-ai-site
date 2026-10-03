# Kubera Current Project State

This is the canonical current-state entry point. Read it after the applicable `AGENTS.md` before substantive work. It is operational state, not a diary, permission to publish, or a replacement for Git evidence.

## PROJECT

Kubera AI website and its portable Codex operating contract.

## LAST UPDATED

2026-10-02 — Wave C.5 checkpoint lifecycle integrated into main.

## CURRENT ORIGIN/MAIN SHA

Verified current `origin/main` baseline: `5c734ef23b126fec76bdafb6f7a9b5395b3897a6`.

The final main HEAD is always obtained from Git (`git rev-parse HEAD`) rather than copied into this file. This avoids a self-referential SHA update loop.

## CURRENT WORKING STATE

- Wave A, Wave B, and Wave C are complete in `origin/main`.
- Wave C.5 is integrated into `origin/main`; the canonical current-state lifecycle and session handoff rules are active.
- No application behavior, production system, or Wave A preservation branch is part of this work.

## COMPLETED RECENTLY

- Unique Portugal work is preserved remotely on separate preservation branches.
- Unique analytics work is preserved remotely on separate branches; no implementation was selected as canonical.
- Wave B portable operating contract is integrated: repo `AGENTS.md` and linked architecture, deployment, content, SEO, visual QA, checkpoint, and incident documentation exist.
- Wave C six repo-scoped skills are integrated under `.codex/skills/`.
- Fresh-clone/runtime discovery of all six skills was proven with an ephemeral Codex CLI session.
- Waves B/C changed no application source or production behavior.

## CURRENT / UNFINISHED WORK

- Wave C.5 checkpoint lifecycle is integrated into main.
- Wave D1 browser QA foundation and its 1024px assistant remediation are complete and integrated into `origin/main`.
- Wave D2 deployment browser gate is implemented on `wave-d2/deployment-browser-gate-20261002`, but remains PARTIAL pending a real provider-linked preview deployment and serving-SHA proof.
- Durable portability of local forensic reports/evidence is not yet complete.

## IMPORTANT DECISIONS

- `docs/checkpoints/CURRENT.md` is the only standard current-state entry point.
- Git and repository evidence override stale checkpoint text for implementation facts; mismatches must be reported.
- Current state is updated at substantive session handoff, but tiny read-only or trivial tasks do not create checkpoint churn.
- Historical milestones remain separate checkpoint files; incidents remain under `docs/incidents/`.
- Repo-scoped skills are procedures, not permissions to expand scope or modify production.

## KNOWN ISSUES / RISKS

- A task-created local skill-discovery clone remains deferred for cleanup after Windows denied removal; it is not required to recover the project.
- Local audit reports/evidence are not all stored in GitHub and may require a separate portability decision.
- Vercel automatic deployment status is not inferred from a main push; this D2 worktree has no authenticated Vercel CLI/API integration.

## BLOCKERS

The single D2 blocker is real preview deployment/serving-version proof from the configured provider. Any current task must stop on source-of-truth conflict, unexpected dirty work, missing rollback, missing approval, secret exposure, or unavailable required evidence.

## DEFERRED / LOW-LATER ITEMS

- D2 infrastructure is now implemented; only provider-linked preview/serving proof remains. Do not begin the SEO/content stage.

- D2 infrastructure is implemented; only provider-linked preview/serving proof remains. Do not begin the SEO/content stage.
- Curate and migrate local forensic reports/evidence where useful and safe.
- Clean up the task-created temporary discovery clone in a separate approved task.

## PROTECTED SYSTEMS RELEVANT TO CURRENT WORK

Vercel settings and aliases, production, domains/DNS, environment variables, credentials, n8n, CRM, Umami/PostgreSQL, assistant integrations, webhooks, Telegram ownership, preservation branches, unrelated repositories, and user dirty work.

## IMPORTANT REMOTE BRANCHES

- `preserve/portugal-wip-20261002` — `898780944a8107ce6e4d5842596584109c24ef87`
- `preserve/portugal-real-image-history-20261002` — `997514ab5870c94d4da726d52c5fd170818e7de6`
- `analytics-remediation-v2` — `87aa5ae80ea32f678284425036f336e7a071928a`
- `codex/analytics-bridge-final-fix` — `15ab80be7498fd4adf1294b5458f3381e989004b`
- `codex/analytics-remediation-v2-integration` — `1ec25b1548eaca015f584778619b10779e620e09`
- `codex/analytics-traffic-classification` — `96a5f711096289b2aca22603461947bbb67c4f27`

These branches are preservation lines, not canonical production implementations.

## LAST VERIFIED EVIDENCE

- Remote `origin/main` was verified at `b05fbfff9d186135351ad10957b6256b1be13370` before this task.
- The Wave C discovery proof established six skills in a fresh clone and runtime metadata discovery by `codex-cli 0.153.4`.
- The Wave C integration scope contained only six skill files and the approved `AGENTS.md` routing update; the Wave C.5 scope is documentation/skill lifecycle only.
- Current repository status and final branch HEAD must be rechecked at each session boundary; this file never replaces `git status` or `git rev-parse HEAD`.

## EXACT NEXT STEP

## WAVE D2 DEPLOYMENT BROWSER GATE OVERRIDE — 2026-10-02

- D2 target-aware gate infrastructure is implemented on `wave-d2/deployment-browser-gate-20261002` from base `5c734ef23b126fec76bdafb6f7a9b5395b3897a6`.
- Local gate: PASS; typecheck: PASS; production build: PASS; local critical browser gate: 24/24 PASS at 1366x768, 390x844, and 1024x768.
- Existing production smoke mechanism executed read-only against `https://www.kubera-automation.com`; HTTP 200 and 24/24 browser tests PASS, including workflow geometry and assistant responsive checks. No forms, messages, n8n, or CRM actions were invoked.
- Production serving version: UNKNOWN because expected SHA/deployment identity/provider serving SHA are unavailable. This is intentionally not production verification.
- Real preview deployment: NOT PROVEN. GitHub auth is invalid in this environment; no authenticated Vercel CLI/API or existing preview URL was available. The gate fails closed rather than treating localhost or HTTP 200 as preview proof.
- CI remains build/typecheck-only; no new secret-dependent integration was added. Independent doubt review: FIX REQUIRED only for the single external preview/serving-proof blocker.
- D2 status: PARTIAL. Exact next step: obtain a real provider-linked preview URL plus expected/deployment/serving SHA metadata, run `npm run browser:preview`, and rereview. Do not begin the SEO/content stage.

## WAVE D2.1 REAL PREVIEW PROOF — 2026-10-02

- Matching Vercel/GitHub Preview already existed for branch `wave-d2/deployment-browser-gate-20261002`: deployment record `6813330915`, provider state `success`, environment `Preview`, and provider SHA `f4c2efe9ef7bb69a8c90c76597e4270b36ce6726` matching the branch HEAD. The temporary URL is retained only in the external audit report and runtime evidence.
- Existing `npm run browser:preview` executed against the real URL with explicit `TARGET=PREVIEW`; it failed because Vercel Deployment Protection served its login page instead of the Kubera application. HTTP 200 did not become PASS.
- Preview serving version classification: PARTIAL. Provider SHA/deployment relationship is strong, but browser content cannot be verified without authorized Preview access.
- D2 remains PARTIAL. No Vercel auth session, CLI, bypass environment variable, token, or cookie is available locally. Exact blocker: owner-authorized provider-supported access to this protected Preview through an approved secret/session channel.
- Production unchanged; CI remains DEFERRED; no credentials or Preview URL were committed.
- Current-head recheck: branch SHA `d3bd54ba00e0263caf7f069cc9131ca5810e2605` has matching Vercel/GitHub Preview deployment `6813591506`, provider state `success`, and provider SHA match. Existing Preview gate ran against it and returned `15 passed / 9 failed` because Deployment Protection served the provider login page. D2 remains PARTIAL; the blocker is authorized access to the protected Preview.

Wave D2 infrastructure is implemented but PARTIAL. Obtain a real provider-linked preview URL plus expected/deployment/serving SHA metadata, run the preview gate, and rereview. Do not begin the SEO/content stage.

## OWNER DECISIONS REQUIRED

- Later decide which local forensic reports/evidence should become portable project documentation or private archive.
- Provide/authorize the configured provider handoff required to prove the preview deployment and serving SHA; no production promotion is requested.

## RECOVERY NOTES

On a new machine: clone the repository, open a new Codex session at the repository root, read the nearest `AGENTS.md`, read this file, verify `git status` and `git rev-parse HEAD`, then read only the relevant linked docs and skills. If the recorded main SHA or state differs from Git, report the mismatch and use repository/Git evidence for implementation facts. Do not claim portable handoff until the relevant branch/current state is present on the remote.

## HANDOFF STATUS

This checkpoint records the approved Wave C.5 state for main. The main metadata commit has been pushed and its remote HEAD is verified; handoff status is `REMOTELY PERSISTED`.

## SHA LIFECYCLE

`CURRENT ORIGIN/MAIN SHA` records the verified upstream baseline. The branch HEAD is authoritative in Git and is intentionally not duplicated here. The checkpoint content commit is recorded below only after it exists; the final metadata update does not require embedding its own SHA, so there is no self-update loop.

## CHECKPOINT CONTENT COMMIT SHA

`0d038b99161c7847a2853a3f39242b8f654d9a9d`

## WAVE D1 CRASH RECOVERY OVERRIDE — 2026-10-02

- Recovery found the dedicated worktree `kubera-ai-site.worktrees/kubera-wave-d1-20261002` and branch `wave-d1/playwright-browser-qa-20261002` at base `baa8d77bb4ff74ffc07263e15debea316b5e47b0`; no prior D1 commit or remote D1 branch existed.
- Recovered uncommitted D1 work: Playwright config, browser suite, server harness, package/lock changes, ignored diagnostics, and visual-QA documentation. A stale CSS mutation (`workflow-branch-grid: 1fr`) was found, proven as a failing mutation, and removed; no application source change remains.
- Pre-remediation checks: `npm.cmd run typecheck` PASS; `npm.cmd run build` PASS; the initial browser critical run was 22/24 with the known 1024×768 assistant defect. The defect was fixed in D1.1 and is now regression-protected.
- False-pass proof: workflow geometry mutation and assistant right-offset mutation both caused targeted browser FAIL, then were fully reverted.
- CI remains unchanged; existing CI has typecheck/build only. Browser CI is deferred because adding browser installation/preview architecture is outside this bounded D1 repair.
- Historical pre-remediation review result was `FIX REQUIRED`; D1.1 rereview subsequently returned `PASS`. Production was not modified.
- Crash/recovery report: `C:\Users\Admin\kubera-visual-audit\reports\KUBERA_WAVE_D1_BROWSER_QA.md`.
- Partial D1 handoff commit `59121e84590f8a0583d591b17094e9700130a90b` is pushed and verified on `origin/wave-d1/playwright-browser-qa-20261002`; `origin/main` remains `baa8d77bb4ff74ffc07263e15debea316b5e47b0`.

## WAVE D1.1 REMEDIATION — 2026-10-02

- Original 1024×768 assistant overflow reproduced before editing: launcher and open panel right edge `1037px` vs allowed `1025px`; before screenshots preserved under `C:\Users\Admin\kubera-visual-audit\evidence\wave-d1.1`.
- Root cause: `@media (min-width: 561px) and (max-width: 1200px)` used `.ai-assistant-widget { right: -28px; }`.
- Minimal application fix: `src/app/globals.css` only, changed that rule to `right: 12px`. No test assertion, workflow, assistant logic, backend, or unrelated file changed.
- After evidence: assistant closed/open PASS at 390×844, 1024×768, and 1366×768; neighboring widths 560, 561, 900, 980, 1024, 1200, 1201 probed and contained.
- Full D1 rerun: 24/24 browser tests PASS; workflow geometry PASS; typecheck PASS; production build PASS with 202 static pages.
- Independent rereview: PASS. Wave D1 is COMPLETE / IN MAIN.

## EXACT NEXT STEP

Wave D2 — Preview → Production Browser Gate. Do not start D2 in this session.
## WAVE D2.2 PROTECTED PREVIEW AUTHORIZATION OVERRIDE - 2026-10-03

- Owner-authorized Vercel Shareable Link access completed in an isolated Chrome profile; the share token and Playwright storage state remain runtime-only and are not in Git.
- Verified Preview deployment: `6813591506`, expected/provider SHA `d3bd54ba00e0263caf7f069cc9131ca5810e2605`, provider state `READY`. The share query token is omitted from project records.
- `npm run browser:preview` ran against the real protected Preview with explicit `TARGET=PREVIEW` and completed **24/24 PASS** at 1366x768, 390x844, and 1024x768. Kubera application identity checks passed; the Vercel protection page was not rendered.
- Workflow geometry and assistant regression protections passed, including 390 mobile, 1024 tablet, and 1366 desktop. The gate remained fail-closed before authorization.
- D2.2 independent read-only rereview: PASS. Production was not modified; CI remains DEFERRED. Wave D2 is COMPLETE / READY FOR OWNER-AUTHORIZED MAIN INTEGRATION.

## EXACT NEXT STEP

Owner-authorized integration of Wave D2 into `main`, then the next Master Roadmap stage: SEO/content automated validation. Do not begin SEO in this session.
## MAIN INTEGRATION OVERRIDE - WAVE D2 - 2026-10-03

- Wave D1: COMPLETE / IN MAIN.
- Wave D2: COMPLETE / IN MAIN.
- Deployment Browser Gate: ACTIVE. Preview verification: ACTIVE. Production smoke: ACTIVE.
- Existing live production smoke after integration: 24/24 browser checks PASS on the canonical host, including workflow geometry and assistant behavior at 1366x768, 390x844, and 1024x768. Production serving SHA/deployment identity remains UNKNOWN; HTTP/browser PASS is not production verification. Automatic Vercel deployment from this push is UNKNOWN from repository evidence.
- The approved D2 source `c2c51211e287e6985389802d142c86a33ec97ae1` is integrated from the verified D2 branch. Runtime Vercel Shareable Link and Playwright storage-state artifacts were not committed.
- Durable rules remain active: Push != Production Verified; Build PASS != Production Verified; HTTP 200 != Production Verified; Preview PASS != Production PASS; SOURCE PASS != BUILD PASS != DOM PASS != VISUAL PASS.

## CLOSED DESIGN DECISION - CONTROLLED MODERNIZATION PALETTE

Palette decision: CLOSED. This is a durable direction only; no design implementation starts in this task.

- Structural base: `#0C1726` main background, `#142136` secondary background, `#20344A` surface.
- Functional accent: `#4CE5E4` neon cyan, `#1E5B6E` dark accent, `#3495A0` muted accent.
- Typography: `#F5F6F7` main text, `#B4CBD0` secondary text, `#818892` muted text.
- Brand detail: gold gradient `#AA895E` -> `#D7B887` -> `#EDD9AA`.
- Atmospheric accent: violet/blue used selectively for gradients, glow, and orbits.
- Roles: navy structural; cyan functional UI/CTA; gold brand/premium detail; violet atmospheric.
- Rollout: one reference page, then desktop/tablet/mobile approval, then shared design system/components, then full-site regional/country/commercial rollout.
- Palette research must not be restarted.

## EXACT NEXT STEP

SEO / Content Automated Validation. Do not begin design implementation in this task.
