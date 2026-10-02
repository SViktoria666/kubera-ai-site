---
name: kubera-context-pack
description: Build a compact, authoritative context packet before complex, unfamiliar, cross-session, or production-relevant Kubera work.
---

## Trigger

Use before multi-file changes, unfamiliar subsystems, architecture work, production-relevant work, or continuation of unfinished work. Do not load unrelated repository history for a small isolated task.

## Procedure

1. State `TASK`, `GOAL`, `SCOPE`, and `OUT OF SCOPE`.
2. Read `docs/checkpoints/CURRENT.md` for substantive work. Record repository, isolated worktree, branch, base SHA, and current HEAD.
3. Identify the source of truth for each relevant concern: application source, content, generator/input, rendered browser state, Git state, deployment state, or external system.
4. Read only the relevant files/docs, including the current checkpoint when one exists.
5. List relevant files, protected systems, constraints, unknowns, rollback requirements, and owner decisions required.
6. Mark each important statement as `FACT`, `ASSUMPTION`, or `UNKNOWN`.
7. Compare docs, code, `CURRENT.md`, checkpoint, and Git state. Repository reality wins for implementation facts. Report stale or conflicting checkpoint state before proceeding.

## Stop conditions

Stop and report when a meaningful source-of-truth conflict, unexpected dirty state, missing required access, or unresolved authorization boundary changes the safe plan. Do not resolve a conflict by guessing or by editing first.

## Output

Produce a compact context packet another Codex session can use: scope, authoritative sources, relevant evidence, protected systems, decisions, unknowns, rollback, current checkpoint state, and exact next step. Do not include secrets or temporary history that is not needed for the task.
