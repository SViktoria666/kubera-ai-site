---
title: "Grok Bot Explained: What It Does, Which Models Run It and What a Team of 10 Costs"
slug: "grok-bot-explained-ai-agent-team-cost"
description: "Grok Bot gives you named AI teammates that work on a cloud computer and keep going after you close the app. This guide covers capabilities, models, security, a 10-Bot team and what it costs in euros, and a decision rule for whether a big team is worth it."
seoTitle: "Grok Bot Explained: Features, Models, Team Cost in EUR"
metaDescription: "What Grok Bot is, what it can do, which models power it, what a team of 10 Bots costs in euros, and when a large Bot team is worth it. A practical guide for European businesses."
date: "2026-11-04"
publishedAt: "2026-11-04"
tags: ["Grok Bot", "AI agents", "AI automation", "AI pricing", "GDPR"]
status: "published"
language: "en-GB"
category: "AI Automation"
---

Grok Bot gives you named AI teammates that work on a cloud computer and keep going after you close the app. This guide covers capabilities, models, security, a 10-Bot team and what it costs in euros, and a decision rule for whether a big team is worth it.

# Grok Bot Explained: What It Does, Which Models Run It and What a Team of 10 Costs

Short answer. Grok Bot is a product from SpaceXSI, the company whose earlier materials used the xAI name, that gives you named AI agents. Each Bot has a job, its own conversation and a screen on a cloud computer where it signs into your tools, completes multi-step work and keeps running when you close the app. Bots are sold inside The X Subscription from $30 a month, about €27. Ten Bots do not need ten subscriptions: they share one account, one cloud computer and one weekly usage pool. The real cost question is how fast ten Bots drain that pool, and the real risk question is that Bots are not separate security boundaries.

Facts below were checked on 3 November 2026. Each is marked by how well it is sourced: confirmed on a page of SpaceXSI or Cursor documentation, reported by secondary sources only, or an assumption. This product is in beta and changes often, so confirm the current terms before you buy.

## What Grok Bot is

The [launch post](https://x.ai/news/introducing-grok-bot) of 11 August 2026 describes Grok Bot as a set of persistent AI teammates. Each Bot has a cloud computer, signs into the tools you already use and works across apps, inboxes and websites, including ones without an API.

Three ideas set it apart from a chatbot:

- It acts, not only answers. A Bot opens a browser, logs in, fills forms, moves files and runs commands.
- It persists. The cloud computer stays on, so a job continues when your laptop is closed.
- It has a role. A Bot has a name, a job and its own context.

SpaceXSI's [Grok Bot documentation](https://docs.x.ai/grok-bot/overview) confirms the architecture. Every Bot on your account uses one persistent cloud computer and shares its files, browser sessions and logins, while each Bot gets its own screen. This matters for both cost and security, and it comes back below.

## What a Bot can do

Capabilities listed in the launch post and in documentation:

| Capability | What it means in practice |
| --- | --- |
| Computer use | The Bot clicks and types in websites and apps that have no API |
| Sign-ins and approvals | It logs in and asks you before sensitive steps |
| Messaging | You talk to a Bot from phone or desktop and continue the same thread |
| Memory | It keeps conversation history and how you like work done |
| Routines | You show a workflow once, the Bot saves the steps, takes corrections and repeats them on a schedule or trigger |
| Several Bots | A chief-of-staff Bot can oversee specialist Bots |
| Group chats | Bots message each other and coordinate in a shared thread |
| Proactive work | Bots follow up on stalled threads and pick up work before you ask |
| Teach by demonstration | You record a workflow and it becomes a reviewable skill or routine |

One limit is confirmed in the official [FAQ](https://docs.x.ai/grok-bot/overview): a Bot runs one computer-use task on its screen at a time. We could not confirm on an official page the reported limits of up to 50 routines per Bot, two to six Bots in a group chat, or 50 Bots and group chats combined per account. The pages we read did not state a Bot limit.

The official overview says Grok Bot runs on macOS, Windows, Linux, iPhone and Android. It also says that computers used by Bots run in Cursor's cloud. It does not establish every regional availability claim, so check the provider before planning around it.

## Which models power Grok Bot

This is the least certain part, so the evidence is split by quality.

**Confirmed in documentation.** SpaceXSI's FAQ says Grok Bot picks the model for each task, there is no model picker and the underlying model for a request is not shown. Cursor's [models and pricing documentation](https://cursor.com/docs/models-and-pricing) lists first-party SpaceXSI models and says Cursor Router can pick among Cursor models and third-party models on Teams and Enterprise. It does not establish which model is selected for each Bot task.

**Reported, not documented.** Secondary sources quote Elon Musk's posts of 6 and 7 October. He said Grok Bot would use the best backend model for each task, naming Claude Opus 5.5, Midjourney and Suno, and that simple questions go to small, fast models while complex ones go to larger models. We could not open the posts. Midjourney and Suno do not appear on the Cursor pricing page, so do not treat them as confirmed Bot integrations.

Grok 4.7 is listed as a first-party model in Cursor's current pricing documentation. That does not say it is the default model for Bots.

For a business, the practical meaning is simple. You buy a service, not a guaranteed model. The model behind a task can change without notice, and you cannot block a vendor's routing choice. If your policy requires knowing who processes your data, ask in writing before putting regulated data into a Bot.

## Plans and prices

New customers buy Grok Bot through The X Subscription. Older Cursor plans that already included it remain open to existing subscribers.

Cursor's [current pricing page](https://cursor.com/docs/models-and-pricing) gives the following tiers:

| Plan | Monthly price | Annual price | Usage versus Plus | Grok Bot |
| --- | ---: | ---: | ---: | --- |
| Plus | $8 | $80 | 1x | No |
| Premium | $30 | $300 | 4x | Yes |
| Super | $100 | $1,000 | 15x | Yes |
| Ultra | $200 | $2,000 | 50x | Yes |
| Teams | $30, $100 or $200 per seat | none published | matches the seat tier | Yes, subject to the plan and account |
| Enterprise | custom | custom | pooled | Yes, subject to contract |

Notes that change the maths:

- **One weekly pool.** Grok, Cursor and Grok Bot draw from the same weekly pool on The X Subscription. A busy Bot leaves less for chat and coding. This is the later pricing and overview rule; the August launch post described a separate Bot allotment, so older accounts may behave differently.
- **Only multipliers are published.** SpaceXSI and Cursor give usage relative to Plus, not in messages or tokens.
- **Extra usage is paid.** Cursor says that after the pool runs out, extra usage is paid from prepaid credit, with optional auto top-up and spending caps. It does not publish a separate Bot per-token rate.
- **Two different bills.** Cursor models beyond the weekly pool use the published Cursor rates. Third-party models in Cursor are billed separately at API list price from prepaid credit, and Teams and Enterprise can add a Cursor Token Rate on eligible requests. Whether a helper step that a Bot routes to a third-party model is billed under one rule or the other is not documented on the pages we read.
- **Routines spend usage.** A routine that checks something every 15 minutes draws usage every 15 minutes.
- **Tax.** Prices are before sales tax. For a business in the EU, VAT comes on top and depends on the invoicing entity and your VAT status.

## What a team of 10 Bots can do

Group chats hold two to six Bots according to reported summaries, so a team of ten is more naturally a chief of staff plus specialists, not one big chat. Here is a realistic organisation for a 20-person company, built from the use cases in the launch material and documentation.

| Bot | Job | Typical work | Approval rule |
| --- | --- | --- | --- |
| Chief of staff | Routes work, summarises the day | Morning brief, task hand-offs | Read only |
| Lead researcher | Prospect research | Company profiles, contact lists, draft outreach | Asks before sending |
| Pipeline keeper | CRM hygiene | Update stages, flag stalled deals | Asks before changing records |
| Invoice clerk | Accounts payable | Read invoices from email, prepare entries | Asks before paying |
| Onboarding Bot | New hires | Accounts checklist, seating, welcome messages | Asks before creating accounts |
| Support triage | Inbox | Sort, tag, draft replies | Asks before replying |
| Content assistant | Marketing | Draft posts, collect assets, schedule | Asks before publishing |
| QA Bot | Engineering | Reproduce reported bugs, file tickets | Asks before closing |
| Fixer Bot | Engineering follow-up | Prepare a proposed fix and test notes for human review | Asks before changing code |
| Reporter | Operations metrics | Collect usage and workflow metrics, draft weekly summaries | Asks before distributing |

These are ten roles, not ten promises of simultaneous computer-use capacity. Bots share one cloud computer, and each Bot runs one computer-use task on its screen at a time. The team takes over the preparation layer of repeated work so people spend time on decisions. It should not run unattended on tasks involving money, legal exposure or customer promises.

## What a team of 10 costs in euros

Conversion uses the ECB euro reference rate for 2 November 2026: **1 EUR = 1.1216 USD**. Euro figures are rounded to the nearest cent, then shown to the euro in the text. VAT is excluded. The ECB reference rate is for information, not a transaction quote.

There are two different “teams of 10”, and the price differs by a factor of ten.

### Case A: one account with ten Bots

This is one seat on one account. The Bots share the computer and the pool.

| Plan | Monthly in USD | Monthly in EUR | Annual in USD | Annual in EUR | Annual monthly equivalent in EUR |
| --- | ---: | ---: | ---: | ---: | ---: |
| Premium | 30 | 26.75 | 300 | 267.48 | 22.29 |
| Super | 100 | 89.16 | 1,000 | 891.58 | 74.30 |
| Ultra | 200 | 178.32 | 2,000 | 1,783.17 | 148.60 |

### Case B: ten employees with paid Teams seats

Cursor lists Teams seats at $30, $100 or $200 a month, the same as the individual tiers, with no annual price published. Whether Bots are enabled on a particular seat depends on the plan and account, so the table shows monthly figures only.

| Plan | Ten seats monthly in USD | Ten seats monthly in EUR |
| --- | ---: | ---: |
| Premium | 300 | 267.96 |
| Super | 1,000 | 891.58 |
| Ultra | 2,000 | 1,783.17 |

Enterprise pricing is custom and not public, so we do not estimate it.

## The pool is the real constraint

Ten Bots on one Premium plan share 4x Plus usage. Ten Bots on Super share 15x. Divided evenly, that is 0.4, 1.5 and 5.0 Plus-equivalents per Bot for Premium, Super and Ultra. Because xAI publishes no absolute numbers, nobody can tell you in advance how many tasks that buys. The only honest way to find out is a measured pilot.

## Extra usage: one illustrative calculation

Suppose the weekly pool is exhausted and extra usage is billed. Neither Cursor nor SpaceXSI publishes a separate per-token rate for Bot usage, so this is an assumption: we apply Cursor's published additional-usage rate for Grok 4.7, which is $2 per million input tokens and $6 per million output tokens. We also assume one run uses 300,000 input tokens and 30,000 output tokens, plausible for a browser task that reads many pages. Third-party models are excluded because their treatment inside Bots is not documented.

Cost per run: **$0.78**, or **€0.70**.

- 500 extra runs in a month: $390, or €347.72.
- 1,000 extra runs: $780, or €695.44.
- 2,200 extra runs, which is ten Bots doing ten runs a day over 22 working days: $1,716, or €1,529.96.

These are assumptions, not measurements. The shape matters: a flat subscription covers a base load, and heavy routines can become a metered bill.

## Compared with human time

At an illustrative €35 per hour, the monthly plan price equals this much work:

| Plan | Monthly price in EUR | Hours of €35 work |
| --- | ---: | ---: |
| Premium | 26.75 | 0.76 |
| Super | 89.16 | 2.55 |
| Ultra | 178.32 | 5.09 |

If the Bots save more than the hours in the last column after checking and correcting their output, the subscription pays for itself. Checking time is the part most people forget.

## Security and data: the part not to skip

SpaceXSI's official FAQ says not to use separate Bots as a security boundary. All Bots share one computer, its files, browser sessions and logins. If you sign a Bot into your accounting tool, every Bot on that account can use that session until it expires.

The official documentation describes approvals and a shared cloud computer. Other controls reported by secondary sources, not all of which we could confirm on an official page, include:

- Approvals that allow once, allow permanently or deny. Passwords, two-factor codes and CAPTCHAs go back to you.
- Auto Review, intended to complement rather than replace least privilege and explicit approvals.
- Approval expiry for routines, reported as about 10 minutes.
- “Stop now” halting a Bot without undoing actions already taken, such as sent emails.
- Bank and card connections through Plaid as read-only.
- Training opt-out following Cursor privacy settings.

Treat any Bot with access to money, customer data or publishing as a system that needs least privilege, not as a trusted employee. For the wider principle, see [AI agent autonomy and human-in-the-loop](/blog/ai-agent-autonomy-human-in-the-loop).

## Data protection for European businesses

A few questions to settle before use. This is general information, not legal advice.

**Where is data processed?** SpaceXSI's FAQ states that Grok Bot requires cloud data storage and that only providers on Cursor's sub-processor list can process your data. Ask for written confirmation of location and transfer mechanisms before using regulated data.

**Who is the processor?** GDPR Article 28 requires a contract with a processor where that relationship applies. Check whether the plan you buy comes with a data processing agreement. Consumer plans may not.

**Which personal data will Bots see?** Mailboxes contain personal data of customers and staff. GDPR Article 32 asks for appropriate security measures. A shared computer with shared logins is a design you need to document.

**Is anything an automated decision?** If Bots decide matters affecting individuals, Article 22 may apply.

For a fuller checklist see [AI data safety for European businesses](/blog/ai-data-safety-european-businesses). If staff already use agents on their own accounts, [shadow AI risk in Europe](/blog/shadow-ai-business-risk-europe) explains how to bring that into the open.

## The Kubera Bot Team Sizing Test

Use this heuristic before you add the fourth, fifth or tenth Bot. It is a rule of thumb from our own practice, not a published standard.

Count a Bot as justified only if it passes four checks:

- **Repeat.** The job happens at least weekly and follows a pattern a person can describe in ten lines.
- **Reversible.** A wrong action can be undone, or an approval stops it first.
- **Separable.** The Bot needs access to few tools, and not the same sensitive logins as the others.
- **Measurable.** You can compare time or errors before and after, in numbers.

| Bots in the team | When it is reasonable | Main risk |
| ---: | --- | --- |
| 1 | You have one repeated job and want to learn | Choosing a task that is too vague |
| 2 to 3 | Distinct jobs with different tools | Shared logins widening access |
| 4 to 6 | A chief of staff plus specialists, with owners | Pool drain, unclear accountability |
| 7 to 10 | Only after the first six each pass all four checks for a month | Cost opacity, approval fatigue, coordination errors |

## Is a big team worth it?

Usually not at the start, and sometimes later. The case for a big team: jobs run in parallel, specialists keep tighter context, and a chief of staff reduces the threads you manage. The case against: ten Bots share one pool, so adding Bots adds no capacity; they share one computer, so one leaked session reaches all of them; and every Bot needs an owner who reviews its output.

A sensible path: start with one Bot on Premium, run one routine for four weeks, record the usage meter and the checking time, then add a second. If the pool meter stays in the low range after a month, a large team is probably unnecessary. If it reaches the limit in the first week, you need a higher tier or fewer routines, not more Bots.

For a framework to price this against other options, see [how to read AI agent pricing](/blog/how-to-read-ai-agent-pricing) and [how to measure ROI of AI automation](/blog/how-to-measure-roi-ai-automation).

## Grok Bot or a workflow tool?

A Bot is flexible and learns by demonstration, but it is also less predictable. For stable, high-volume, rule-based processes, a workflow engine is usually cheaper and easier to audit. See [n8n vs Make vs Zapier](/blog/n8n-vs-make-vs-zapier) for that side. A mixed setup often works best: a workflow engine for the fixed pipeline, a Bot for edges with no API. [How to choose your first AI automation project](/blog/how-to-choose-first-ai-automation-project) covers how to start with a measurable process.

## Illustrative scenario

Illustrative scenario, not a specific Kubera client. A 12-person consultancy, with assumed figures. One operations manager runs three Bots on a Super plan, €89.16 a month: prospect research, inbox drafting for approval and a weekly report. Assume they save 4, 3 and 1 hours a week, 8 in total, and checking and correcting takes 40 percent of that. Net saving is 8 × 0.6 = 4.8 hours a week. At €35 an hour over 4.3 weeks that is about €722 against €89.16. With checking at 80 percent, it is 1.6 hours a week, about €241, still above the plan price. These are assumptions, not results. Your four-week pilot is the real test.

## Frequently asked questions

### What is Grok Bot?

A set of named AI agents from SpaceXSI. Each runs on a cloud computer, signs into your tools and keeps working after you close the app. It launched in beta on 11 August 2026.

### Which models does Grok Bot use?

The service chooses the model for each task, and it can be a first-party SpaceXSI model or a third-party model, according to Cursor's documentation. Elon Musk named Claude Opus 5.5, Midjourney and Suno in October posts, which we could only see through secondary reports. The exact mix is not published.

### How much does Grok Bot cost in euros?

Premium is $30 a month, about €26.75. Super is $100, about €89.16. Ultra is $200, about €178.32. These use the stated ECB rate of 1.1216 USD per euro on 2 November 2026 and exclude VAT. Annual billing costs ten months' price.

### Does a team of 10 Bots need 10 subscriptions?

No. Ten Bots on one account share one cloud computer and one weekly usage pool. Ten separate paid seats on Teams plans multiply the price by ten.

### What happens when I use up the weekly pool?

Further usage is billed from prepaid credit at token cost. Auto top-up is off until enabled, and you can set a spending cap. A Bot's exact treatment after a limit depends on the plan and account.

### Are Bots safe to give access to company systems?

Only with limits. Bots share one computer and its logins, and the documentation says not to treat separate Bots as a security boundary. Use least-privilege accounts, keep approvals on for sending, publishing, purchases and deletions, and avoid regulated data until you have confirmed processing terms.

### Can Grok Bot replace n8n, Make or Zapier?

For fixed, high-volume processes, usually not. A workflow tool is more predictable and easier to audit. A Bot suits messy, low-volume jobs where there is no API.

### Is Grok Bot available in the EU?

Our sources do not establish regional availability for every Bot feature or model. Check availability, data location and processing terms with the provider before planning around it.

### How do I start without wasting money?

Start with one Bot and one repeated job, keep approvals on, and track the usage meter and your checking time for four weeks. Add a second Bot only if the first one saves more time than it costs to supervise.

## Sources

- [Introducing Grok Bot, SpaceXSI, 11 August 2026](https://x.ai/news/introducing-grok-bot)
- [Grok Bot overview and FAQ, SpaceXSI documentation](https://docs.x.ai/grok-bot/overview)
- [Models and pricing, Cursor documentation](https://cursor.com/docs/models-and-pricing)
- [Introducing The X Subscription, Cursor forum, 12 October 2026](https://forum.cursor.com/t/introducing-the-x-subscription/174450)
- [ECB euro reference exchange rates](https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html)

[Discuss your automation project →](/contacts)
