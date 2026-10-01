# Deployment and Rollback Contract

This document describes the verified process shape, not credentials or a deployment command that is not present in the repository.

## Required sequence

1. Record the base SHA and confirm the intended scope in an isolated worktree.
2. Inspect the exact diff and preserve unrelated dirty work.
3. Run the relevant repository checks: `npm run typecheck`, `npm run validate:blog`, and `npm run build` as applicable.
4. For rendered changes, obtain browser evidence against the local build and, where applicable, the preview deployment.
5. Identify the deployment and expected Git SHA through the configured provider. Do not infer it from a push message.
6. Obtain the required owner approval before an authorized production publication.
7. After release, verify the production alias, deployment identity, live HTTP route, and rendered browser result.
8. Record the evidence and rollback path in a checkpoint or incident record.

## Rules

- `git push` does not prove that Vercel built or serves that SHA.
- A successful deployment does not prove the correct production alias is active.
- HTTP 200 and source/DOM inspection do not prove visual correctness.
- Never change Vercel settings, domains, environment variables, or external systems as a workaround without explicit approval.
- Do not poll indefinitely; use bounded verification and report propagation uncertainty.

## Rollback readiness

Before a risky release, record the previous known-good production commit/deployment identity and the normal provider/Git rollback path. Never use force-push or destructive reset as an emergency shortcut. If the release is wrong, stop new changes, preserve evidence, and use the approved revert/rollback procedure after owner authorization.

No credentials, tokens, cookies, deployment secrets, or stale deployment IDs belong in this document.
