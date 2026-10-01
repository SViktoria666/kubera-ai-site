# Kubera AI Architecture and Source-of-Truth Map

## Application

Kubera is a Next.js application. Routes and language/site layouts live under `src/app/`; shared UI and templates live under `src/components/`; typed page data lives under `src/content/`; public assets live under `public/`.

Route groups include the main site, blog, cases, use cases, services, GEO/location pages, and language-specific layouts. Prefer changing the shared template or source data when the behavior is shared. Do not maintain a route encyclopedia here.

## Content

- English blog source: `content/blog/*.md`.
- Typed service/use-case/site content: `src/content/`.
- Blog route/rendering: `src/app/(site)/blog/` and related components.
- Publication, frontmatter, links, claims, and CTA rules: `docs/content-system.md`.

## Generated artifacts

`src/content/geo/generated.ts` and other generated outputs are not automatically authoritative. Inspect the generator and its inputs before changing them. The current generator command is `npm run generate:geo-kb`; `npm run build` invokes it through `prebuild`. Do not stage line-ending/stat drift merely to make a worktree appear clean.

## Runtime and metadata

- `src/middleware.ts` controls middleware behavior.
- `src/app/sitemap.ts` and `src/app/robots.ts` define generated sitemap/robots behavior.
- `next.config.ts` and `vercel.json` affect build/runtime/deployment behavior.
- `package.json` and `package-lock.json` define the reproducible Node command surface.

## Validation

Current commands are listed in `AGENTS.md` and `package.json`: typecheck, blog validation, GEO generation, build, dev, and start. Browser visual evidence is a separate requirement documented in `docs/visual-qa.md`; it is not replaced by build success.

## External boundaries

Vercel, domains/DNS, environment variables, credentials, Umami/PostgreSQL, n8n, CRM, assistant integrations, and webhooks are external protected systems. Their runtime state is not inferred from this repository and must not be modified as a side effect of application work.
