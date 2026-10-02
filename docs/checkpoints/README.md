# Checkpoints

## Canonical current state

`CURRENT.md` is the single entry point for where the project is now. A substantive session reads it after the applicable `AGENTS.md`, verifies repository/worktree/branch/HEAD and remote state, and compares the recorded state with Git before editing. Do not search dated files to guess the current state.

Before a substantive session is completed or paused, update `CURRENT.md` with what actually happened, evidence, unfinished work, risks, blockers, and the exact next step. If the update is not pushed and its remote HEAD is not verified, state `HANDOFF NOT REMOTELY PERSISTED`; do not claim a portable handoff.

Substantive work includes multi-file or cross-session work, risky production work, migrations, meaningful SEO/CRO or visual work, browser QA, unresolved debugging, and any work another Codex session must inherit. Tiny isolated changes and read-only questions do not require checkpoint churn.

## Historical checkpoints

Use `TEMPLATE.md` for milestone snapshots only: a major Wave, release, migration, significant architecture decision, or major incident/recovery point. Use sortable names such as `YYYY-MM-DD-short-description.md`. Do not turn `CURRENT.md` into a history log or create a dated snapshot after every small task.

## State boundaries

- `CURRENT.md` = current operational state and handoff.
- Dated checkpoint = durable milestone snapshot.
- `docs/incidents/` = significant failure, root cause, fix, verification, and recurrence guard.
- `AGENTS.md` = stable project policy.
- `.codex/skills/` = reusable procedures.

Important long-term decisions must be promoted from current state into the appropriate durable documentation. Do not duplicate complete incident histories or skill procedures in `CURRENT.md`.

## SHA and Git lifecycle

Record verified upstream/base SHAs and actual Git evidence. Never guess a future commit SHA. The current branch HEAD is obtained with `git rev-parse HEAD`; it is intentionally not copied into `CURRENT.md` when doing so would create a self-referential update loop. If a commit SHA must be recorded, use a bounded follow-up metadata update and stop; do not create an endless SHA-update chain.

Current state travels with a feature branch while work is in progress and reaches `main` only through the normal reviewed integration path. No automatic push, merge, deploy, or force operation is implied by the checkpoint lifecycle.

## Stale state

If `CURRENT.md` conflicts with repository/Git/deployed evidence, report the mismatch. Repository/Git evidence wins for implementation facts. Correct the current state safely as part of the substantive session when authorized, or leave an explicit blocker; never follow stale instructions silently.

Use `TEMPLATE.md`, record source truth and evidence, and never include secrets. A checkpoint is state, not authority to publish or change production.
