---
name: kubera-publication-gate
description: Gate an authorized Kubera application or content publication from local validation through preview, production identity, live verification, and rollback evidence.
---

## Trigger

Use for any change intended for production publication, including code, content, metadata, or generated output. It is a gate, not permission to deploy. For visual work, pair with `kubera-browser-visual-qa`; for important work, use `kubera-doubt-review` before the publication decision.

## Gate sequence

1. Read `docs/checkpoints/CURRENT.md` for substantive work. Record base SHA, intended commit, exact scope, owner approval requirement, and rollback path.
2. Run verified local checks and relevant source/content checks.
3. Establish preview/deployment identity through the configured environment. Do not invent provider commands or IDs.
4. Verify preview content and browser rendering where applicable.
5. Obtain the required owner approval before the production action.
6. After the authorized action, verify the actual production alias, deployment identity, expected SHA, live route, metadata/content, and rendered result as applicable.
7. Record evidence, uncertainties, rollback readiness, and final publication state in `CURRENT.md` or the relevant incident record before handoff.

## Hard rules

- Push is not production proof.
- Deployment success is not proof that the expected alias serves the expected SHA.
- Preview is not production.
- HTTP 200, build success, source inspection, or DOM presence is not visual proof.
- Do not experiment first on production.
- Do not modify unrelated Vercel settings, DNS, env, credentials, n8n, CRM, Umami, or routing.
- Use only commands verified in the repository/docs/current environment; mark environment-specific provider actions explicitly.
- Do not poll indefinitely. Use bounded verification and report propagation uncertainty.

## Stop conditions

Stop before publication on unexpected source/remote state, failed checks, missing deployment identity, missing owner approval, unresolved visual evidence, missing rollback, conflict, or suspected secret exposure.

## Output

Return the base and intended commit, checks, preview and production identity, live verification, approvals, rollback readiness, evidence, unresolved uncertainty, and the `CURRENT.md` handoff status. A gate result is not permission to publish unless the task explicitly authorizes that action.
