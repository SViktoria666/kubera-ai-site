# Kubera AI Site

Next.js App Router architecture skeleton for the Kubera AI website.

## Scope

This repository is prepared for a staged migration from Tilda to Next.js and Vercel.

- No production domain is connected.
- No real webhook URLs or API keys are committed.
- Contact forms submit to a server API route first.
- Future n8n, AI assistant, monitoring, and GEO/AEO layers have reserved modules.

## Scripts

```bash
npm run dev
npm run build
npm run typecheck
```

## Routes

English:

- `/`
- `/services`
- `/how-we-work`
- `/cases`
- `/blog`
- `/contacts`
- `/en/[country]-automation`

Russian:

- `/ru`
- `/ru/uslugi`
- `/ru/kak-my-rabotaem`
- `/ru/keysy`
- `/ru/blog`
- `/ru/kontakty`

Spanish:

- `/es/espana-automatizacion`

## Contact Links

- The visible `hello@kubera-automation.com` contact links in the contacts section and footer use `mailto:` and remain keyboard accessible.

## Assistant Handoff

- The production assistant route forwards the original customer message and transcript to the CRM handoff payload so downstream lead records can preserve the source language and context.

## Analytics

- Umami analytics is loaded globally from the shared `SiteShell` layout so it covers all English, Russian, Spanish, and future pages without touching 160+ routes.
- The tracker is configured through `NEXT_PUBLIC_UMAMI_SCRIPT_URL` and `NEXT_PUBLIC_UMAMI_WEBSITE_ID`.
- The implementation records anonymous page context, safe CTA clicks, calculator activity, contact form engagement, assistant milestones, and outbound link clicks without sending personal data.
- Operational notes and the Russian glossary live in [`docs/analytics.md`](docs/analytics.md).

