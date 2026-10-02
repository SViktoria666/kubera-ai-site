# Kubera Current Project State

This is the canonical current-state entry point. Read it after the applicable `AGENTS.md` before substantive work. It is operational state, not a diary, permission to publish, or a replacement for Git evidence.

## PROJECT

Kubera AI website and its portable Codex operating contract.

## LAST UPDATED

2026-10-02 — Wave C.5 checkpoint lifecycle implementation in progress on a dedicated branch.

## CURRENT ORIGIN/MAIN SHA

Verified before this Wave C.5 change: `b05fbfff9d186135351ad10957b6256b1be13370`.

The current branch HEAD is always obtained from Git (`git rev-parse HEAD`) rather than copied into this file. This avoids a self-referential SHA update loop.

## CURRENT WORKING STATE

- Wave A, Wave B, and Wave C are complete in `origin/main`.
- This Wave C.5 branch adds the canonical current-state lifecycle and session handoff rules.
- No application behavior, production system, or Wave A preservation branch is part of this work.

## COMPLETED RECENTLY

- Unique Portugal work is preserved remotely on separate preservation branches.
- Unique analytics work is preserved remotely on separate branches; no implementation was selected as canonical.
- Wave B portable operating contract is integrated: repo `AGENTS.md` and linked architecture, deployment, content, SEO, visual QA, checkpoint, and incident documentation exist.
- Wave C six repo-scoped skills are integrated under `.codex/skills/`.
- Fresh-clone/runtime discovery of all six skills was proven with an ephemeral Codex CLI session.
- Waves B/C changed no application source or production behavior.

## CURRENT / UNFINISHED WORK

- Wave C.5 checkpoint lifecycle is the current bounded task.
- Wave D — actual browser QA / Playwright gate — has not started.
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
- Vercel automatic deployment status is not inferred from a main push.

## BLOCKERS

None for the completed Waves A-C. Any current task must stop on source-of-truth conflict, unexpected dirty work, missing rollback, missing approval, secret exposure, or unavailable required evidence.

## DEFERRED / LOW-LATER ITEMS

- Implement Wave D browser/Playwright QA and visual gate.
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

Complete Wave C.5 validation, commit the documentation-only lifecycle changes, push the dedicated branch, and perform the independent doubt review. Do not merge or begin Wave D in this task.

## OWNER DECISIONS REQUIRED

- Approve integration of Wave C.5 after independent review.
- Later decide which local forensic reports/evidence should become portable project documentation or private archive.
- Separately approve Wave D browser/Playwright implementation.

## RECOVERY NOTES

On a new machine: clone the repository, open a new Codex session at the repository root, read the nearest `AGENTS.md`, read this file, verify `git status` and `git rev-parse HEAD`, then read only the relevant linked docs and skills. If the recorded main SHA or state differs from Git, report the mismatch and use repository/Git evidence for implementation facts. Do not claim portable handoff until the relevant branch/current state is present on the remote.

## HANDOFF STATUS

This checkpoint is being authored on a dedicated Wave C.5 branch. Until that branch is pushed and its remote HEAD is verified, handoff status is `HANDOFF NOT REMOTELY PERSISTED`.

## SHA LIFECYCLE

`CURRENT ORIGIN/MAIN SHA` records the verified upstream baseline. The branch HEAD is authoritative in Git and is intentionally not duplicated here. A checkpoint content commit may be recorded in the handoff report after creation; do not guess a future SHA or create an endless self-update loop.
