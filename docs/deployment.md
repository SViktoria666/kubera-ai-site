# Deployment and Rollback Contract

This document describes the verified process shape, not credentials or a deployment command that is not present in the repository.

## D2 browser deployment gate

The release sequence is `IMPLEMENT → LOCAL VERIFY → PREVIEW VERIFY → OWNER/CHANGE-CONTROL DECISION → DEPLOY/PROMOTE → PRODUCTION VERIFY → CHECKPOINT`.

Run `npm run browser:local`, `npm run browser:preview`, or `npm run browser:production`. Remote runs require a runtime URL; provider deployment ID, expected SHA, and provider-confirmed serving SHA are recorded when available. The gate prints these values and writes compact JSON evidence under ignored `browser-gate-evidence/`; Playwright may clean its own `test-results/` directory. Remote targets refuse localhost URLs and perform at most three bounded HTTP preflight attempts before browser QA. Missing provider linkage remains `DEPLOYMENT STATE UNKNOWN` and exits non-zero; it cannot become PASS from HTTP or browser results alone. Production smoke defaults to `https://www.kubera-automation.com` and is side-effect-free.

This repository currently has no authenticated Vercel CLI/API integration or checked-in preview URL. A real preview URL and provider metadata must come from the configured deployment system; the gate does not invent deployment IDs or infer a serving SHA from a screenshot. Existing CI remains build/typecheck-only until a safe provider handoff is available.

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
- `Push ≠ Production Verified`, `Build PASS ≠ Production Verified`, `HTTP 200 ≠ Production Verified`, and `Preview PASS ≠ Production PASS`.
- HTTP 200 and source/DOM inspection do not prove visual correctness.
- Never change Vercel settings, domains, environment variables, or external systems as a workaround without explicit approval.
- Do not poll indefinitely; use bounded verification and report propagation uncertainty.

## Rollback readiness

Before a risky release, record the previous known-good production commit/deployment identity and the normal provider/Git rollback path. Never use force-push or destructive reset as an emergency shortcut. If the release is wrong, stop new changes, preserve evidence, and use the approved revert/rollback procedure after owner authorization.

No credentials, tokens, cookies, deployment secrets, or stale deployment IDs belong in this document.

## Deployment storage and preview retention

The operational incident record is [2026-10-05 Vercel Deployment Storage](incidents/2026-10-05-vercel-deployment-storage.md). Its policy is part of the standard deployment contract: local visual iteration is the default, hosted previews are created only when they are actually required, and stale previews are removed only after a fresh safety/alias review. At roughly 50 total deployments, or before a deployment-heavy preview wave, perform a lightweight storage/alias forensic. This is a review trigger, never automatic deletion.
