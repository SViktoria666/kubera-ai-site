# Vercel Deployment Storage — 2026-10-05

## Symptom

The `viktiriia-s-projects` Hobby team received a Deployment Storage warning at approximately 75% of its 10 GB allowance.

## Evidence and root cause

- Initial inventory: 78 deployments total — 74 Kubera and 4 Anima.
- The primary cause was deployment accumulation, not a proven page/build-size anomaly: historical production deployments, preview churn, deployments still inside Vercel retention, and protected aliases/branch previews.
- One Wave 1 design session created roughly eight previews in about 75 minutes.
- Authenticated CLI/API methods did not expose an authoritative post-cleanup GB/% reading. Do not invent that metric from deployment count.

## Safe remediation completed

- Removed 7 superseded, unaliased Wave 1 previews.
- Removed 24 final-safety-verified historical production deployments.
- Final inventory: 47 total — 43 Kubera and 4 Anima.
- Kubera production deployments: 30 to 6.
- Preserved current production, five verified rollback deployments, the active Neon work/preview, required aliases, and all unknown deployments.
- Production remained healthy throughout. No source, content, DNS, configuration, environment, or Git history was changed.

## Operating policy

Default delivery flow:

`LOCAL DEVELOPMENT → LOCAL BUILD/TYPECHECK → LOCAL BROWSER QA → OWNER LOCAL VISUAL REVIEW WHEN POSSIBLE → ONE HOSTED VERCEL PREVIEW ONLY WHEN REQUIRED → OWNER APPROVAL → PRODUCTION GATE → PRODUCTION → REMOVE SUPERSEDED UNNEEDED PREVIEW WHEN SAFE`.

- Do not create a Vercel deployment for every CSS/design iteration.
- Retain current production, about five verified recent production rollback points, and explicitly required active previews.
- After a review wave, identify and remove only proven-safe unaliased superseded previews. `UNKNOWN = KEEP`.
- At about 50 total deployments, or before a deployment-heavy preview wave, perform a lightweight deployment/alias/storage forensic. This is a review trigger, not an automatic deletion threshold.
- Never remove current production, active review work, required rollback deployments, unknown deployments, or deployments belonging to another project such as Anima.

## Rollback and safety lessons

Deletion requires a fresh identity/alias check and bounded batches with production HTTP, serving identity, alias, and active-review verification after each batch. `Build PASS`, `HTTP 200`, and deployment count are not an authoritative Deployment Storage reading.
