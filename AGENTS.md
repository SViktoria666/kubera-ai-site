# Kubera AI — Repository Operating Contract

## 1. Purpose and Scope

Kubera AI is a Next.js website for AI automation, use cases, services, geographic pages, cases, and English/Russian/Spanish content. This file defines stable project rules for Codex work in this repository. It is not a project history, task log, secret store, or replacement for linked procedures in `docs/`.

Default mode is read-only analysis. A change requires an explicit task scope. Production, external systems, credentials, and irreversible actions require a separate approval gate where applicable.

## 2. Source-of-Truth Hierarchy

Before editing, identify the authoritative layer:

1. Git branch/commit and the clean worktree used for the task.
2. Application source under `src/`, content under `content/`, and approved public assets.
3. Generators and their inputs; generated output is not authoritative unless documented otherwise.
4. Repository commands and configuration (`package.json`, lockfile, `next.config.ts`, `vercel.json`, `.gitignore`).
5. Rendered browser state and deployment state, which prove runtime behavior but do not replace source.
6. External systems (Vercel, Umami, n8n, CRM, domains) only for their own state.

Never edit generated output instead of its source. Never infer production state from source, build success, HTTP status, or a stale deployment identifier alone.

## 3. Protected External Systems

Do not modify as a side effect of website work: Vercel settings, domains/DNS, environment variables, credentials, n8n, CRM, Umami/PostgreSQL, assistant integrations, webhooks, Telegram ownership, or unrelated repositories. Do not run server/docker/restart/destructive database actions without explicit break-glass approval. Do not publish or deploy unless the task explicitly authorizes it and the deployment gate is satisfied.

## 4. Repository Architecture

- `src/app/`: Next.js routes, layouts, metadata, `sitemap.ts`, and `robots.ts`.
- `src/components/`: shared UI and page/template components.
- `src/content/`: typed page data, use cases, service pages, site data, and generated content inputs/outputs.
- `content/blog/`: Markdown article source and frontmatter.
- `public/`: public assets.
- `scripts/`: repository validators/generators.
- `tests/`: existing unit/integration-style checks.
- `docs/`: operating contracts, checkpoints, incidents, and project documentation.

Do not treat a route inventory as an architecture map. Prefer shared templates/components and their source data.

## 5. Real Commands

Run from the repository root with the project package manager:

- `npm run typecheck` — TypeScript check (`tsc --noEmit`).
- `npm run validate:blog` — current Markdown/blog validator.
- `npm run generate:geo-kb` — current GEO knowledge generator; understand its inputs before running it.
- `npm run build` — production build; its prebuild runs blog validation and GEO generation.
- `npm run dev` — local development server.
- `npm run start` — serves a completed production build.

Do not claim a command passed if it was not run. Planned validators or browser checks must be labelled planned, not presented as existing commands.

## 6. Change-Control Rules

- No production-first experiments. Risky or non-trivial experiments must start in an isolated worktree, local, draft, preview, or test path as appropriate. Establish verification and rollback before production; production is the final controlled stage, not an experimentation environment.
- Use a clean isolated worktree for non-trivial or risky work; preserve dirty user work.
- Establish the rollback path before a risky change.
- Keep scope bounded and the diff minimal. No opportunistic refactors or cleanup.
- Identify affected routes/systems before editing and leave unrelated systems untouched.
- Inspect every staged file; never use broad staging when unrelated files may exist.
- Preserve exact failure evidence. Retry an equivalent failed operation no more than 2–3 times; then stop and reassess.
- Never create recursive repair loops or silently broaden scope.
- Never commit secrets, tokens, cookies, auth state, SSH keys, OAuth material, private database dumps, or sensitive customer data.
- If Codex can safely perform a routine technical action itself—such as repository inspection, Git/GitHub operations, file operations, tests, validation, or authorized technical verification—it should do so rather than transfer the work to the owner for convenience. This does not expand authority and does not override protected-system, production-approval, scope, secret, or rollback rules.
- If owner approval, 2FA, secret entry, business judgment, or irreversible authorization is genuinely required, stop at that gate and report it.

## 7. Visual Definition of Done

`typecheck PASS != visual PASS`, `build PASS != visual PASS`, `HTTP 200 != visual PASS`, and `DOM presence != visual PASS`.

Rendered UI changes require real browser evidence. Verify relevant desktop/mobile viewports, overflow, failed media, clipping, overlap, and conditional layout states. Save selective screenshots or measurements when they are evidence. Do not claim `FIXED`, `VISUALLY CORRECT`, or `PRODUCTION VERIFIED` without corresponding rendered evidence. The workflow branch regression is a closed incident; use it as a regression lesson, not as an active defect.

## 8. Content / Editorial Integrity

For content changes, preserve source meaning and primary intent. Verify factual/current claims against primary sources, keep research qualifications, do not invent clients, results, statistics, citations, or experience, and use current canonical slugs. Check frontmatter, date, H1, links, CTA, schema, and rendered text. Final claims and positioning require human editorial/business approval where judgment is material. See `docs/content-system.md`.

## 9. Deployment and Rollback Gate

Before production-relevant work, record base SHA, intended diff, validation results, expected deployment identity, preview evidence where applicable, and rollback path. Do not assume a push equals a production deployment or that a deployment equals the expected serving SHA. Verify the live alias, route, rendered result, and deployment identity after release. Follow `docs/deployment.md`; never include credentials or stale IDs in documentation.

## 10. Checkpoint and Incident Convention

For every substantive session, read `docs/checkpoints/CURRENT.md` after the applicable `AGENTS.md`, verify its recorded state against Git, and identify the relevant skills and protected systems before editing. A checkpoint is required for multi-hour, cross-session, risky production, migration, large visual, or unfinished inherited work. Tiny isolated or read-only tasks do not need checkpoint churn.

Before declaring substantive work complete or paused, update `docs/checkpoints/CURRENT.md` with evidence-based completion, unfinished work, resulting state, risks, blockers, and the exact next step. Do not guess a future SHA. Git HEAD and remote refs remain authoritative; if a handoff is not pushed and verified, report `HANDOFF NOT REMOTELY PERSISTED`. Repository/Git evidence overrides stale checkpoint text, and any mismatch must be reported and corrected safely. Keep milestone snapshots separate from `CURRENT.md`; keep failure/root-cause records in `docs/incidents/`. Never store secrets.

## 11. Skill Routing

The six repo-scoped Kubera protocols are available under `.codex/skills/<skill-name>/SKILL.md`:

- `kubera-context-pack` — use before complex, unfamiliar, cross-session, or production-relevant work.
- `kubera-change-packet` — use before a real bounded repository change.
- `kubera-browser-visual-qa` — use for rendered UI, responsive, overlay, media, navigation, or workflow changes; it defines the procedure but does not claim Wave D automation exists.
- `kubera-publication-gate` — use for any authorized application or content publication.
- `kubera-evidence-content` — use for evidence-backed technical, research, case-style, or factual commercial content.
- `kubera-doubt-review` — use for adversarial review before important acceptance, merge, publication, deployment, or migration.

Use only the protocols whose triggers apply; do not invoke all six for trivial work. Skills are reusable procedures, not permission to expand scope or modify production. They preserve the protected-system, owner-approval, secret, rollback, and visual-proof rules above. A global user-level AGENTS policy may also apply outside this repository, but this repo-level contract is sufficient for Kubera work on a fresh laptop and does not require any machine-specific external file.
