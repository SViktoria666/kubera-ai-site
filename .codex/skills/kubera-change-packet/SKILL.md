---
name: kubera-change-packet
description: Execute a bounded Kubera repository change with explicit scope, rollback, validation, and evidence; use before editing tracked project files.
---

## Trigger

Use before a real code, content, configuration, or documentation change. For complex work, first use `kubera-context-pack` when available. Do not use this skill to authorize production or external-system changes.

## Procedure

1. Read `docs/checkpoints/CURRENT.md` for substantive work. Confirm the exact target, scope, out-of-scope areas, base SHA, worktree, branch, dirty state, and rollback path.
2. Preserve existing user work. Use a clean isolated worktree for non-trivial or risky work.
3. Name the intended files and verification before editing. Do not use `git add .` or `git add -A` when unrelated files may exist.
4. Make the minimum necessary diff. Do not refactor, clean up, or change adjacent behavior opportunistically.
5. Inspect the complete diff and staged file list. Scan for secrets and unrelated files.
6. Run the relevant verified commands and browser/content checks. Distinguish unavailable checks from passes.
7. Recheck scope, source-vs-generated relationships, protected systems, remaining risk, and the evidence needed to update `CURRENT.md`.

## Stop conditions

Stop and report on unexpected dirty state, scope expansion, conflict, secret-like material, missing rollback, failed validation, or a repeated equivalent failure. Do not use destructive reset or force push. Retry an equivalent operation no more than 2–3 times.

## Output

Return a change evidence packet containing before/after SHA, worktree/branch, intended and actual files, tests, browser/deployment evidence where applicable, remaining risks, owner approvals, rollback, and the proposed `CURRENT.md` handoff facts. A successful build alone is not a complete packet for rendered or production work.

## Handoff

Before declaring substantive work complete or paused, update `docs/checkpoints/CURRENT.md` with actual results, evidence, blockers, and the next step. If the relevant branch cannot be pushed and its remote HEAD verified, state `HANDOFF NOT REMOTELY PERSISTED`; do not claim portable handoff.
