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
- The assistant uses an in-memory session lifecycle: opening starts a fresh conversation, transient errors preserve the active chat, and closing the widget intentionally clears the conversation and lead draft.
- The assistant also carries a compact structured memory summary so confirmed facts, contact details, stage, and open questions survive long conversations without keeping an unbounded transcript.
- Capability answers stay conservative unless the website knowledge base explicitly confirms the capability; unconfirmed integrations should be framed as possible only after technical review.
- The retry flow is bounded so a temporary backend or network error can be retried once automatically, then manually without duplicating the conversation history.

## Analytics

- Umami analytics is loaded globally from the shared `SiteShell` layout so it covers all English, Russian, Spanish, and future pages without touching 160+ routes.
- The tracker is configured through `NEXT_PUBLIC_UMAMI_SCRIPT_URL` and `NEXT_PUBLIC_UMAMI_WEBSITE_ID`.
- The implementation records anonymous page context, safe CTA clicks, calculator activity, contact form engagement, assistant milestones, and outbound link clicks without sending personal data.
- Operational notes and the Russian glossary live in [`docs/analytics.md`](docs/analytics.md).

