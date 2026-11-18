---
title: "Claude Whiteboards, Sheets and Data: What Admins Should Set Before the Defaults Change"
slug: "claude-whiteboards-sheets-data-admin-defaults"
description: "Anthropic launched Claude Whiteboards, Sheets and Data on 10 November 2026. Defaults differ by plan and date. A three-question review for Team and Enterprise admins."
seoTitle: "Claude Whiteboards, Sheets and Data: Admin Defaults to Set"
metaDescription: "Anthropic launched Claude Whiteboards, Sheets and Data on 10 November 2026. Defaults differ by plan and date. A three-question review for Team and Enterprise admins."
excerpt: "Boards, spreadsheets and dashboards now live inside Claude, and the defaults differ by plan and by date. Team plans have all three on already. Enterprise plans get Claude Data switched on by default this week. This guide separates what the help pages state from what they leave open, and gives admins a three-question review: Switch, Source, Share."
date: "2026-11-18"
publishedAt: "2026-11-18"
tags: ["AI Automation", "AI Governance", "Data Safety"]
status: "published"
language: "en-GB"
category: "AI Automation"
---

# Claude Whiteboards, Sheets and Data: What Admins Should Set Before the Defaults Change

For a team that already works in Claude, the 10 November 2026 release is good news. Documents, boards, spreadsheets and dashboards can now stay in one place, where colleagues and Claude edit the same thing, instead of travelling between inboxes as attachments. A sheet Claude builds from a prompt and a board it turns into a timeline are practical tools for a mid-size business.

For the person who administers the account, the same release is a set of defaults that depend on the plan and on the date. Team plans have all three features on already. Enterprise plans have two of them off, and the third, Claude Data, switches on by default this week unless an owner has saved a setting. Defaults decide who can see what before anyone has written a policy, so they are worth an hour.

This article reads Anthropic's announcement and help pages as they stood on 16 November 2026, separates what they state from what they leave open, and offers a three-question review for an afternoon. Parts are in beta and pages change; the live help pages are the reference. This article is not legal advice. Questions about personal data subject to GDPR depend on your contract and facts, so take advice for your own situation.

## What was released

On 10 November 2026 Anthropic launched Claude Whiteboards and Claude Sheets in beta, and made the earlier Claude Dashboards generally available under a new name, Claude Data. The launch announcement says all three are available on paid plans. The current help pages specify web, desktop and mobile for Whiteboards, and web and desktop with limited mobile access for Sheets; check the live page for the current platform matrix.

| Product | Status | What it does |
|---|---|---|
| Claude Whiteboards | Beta | A shared board where a team works with Claude. Claude turns talk, text and sketches into shapes, arrows and sections, can regroup a board by theme or timeline, and can turn it into a doc or deck |
| Claude Sheets | Beta | A spreadsheet that Claude builds and edits with you, with tabs, formulas across tabs, formatting, dropdowns, checkboxes and charts. Each Claude edit is outlined as it lands |
| Claude Data | Generally available, with certified queries and live sharing in beta | Dashboards and data stories built on a data warehouse or a connected app, where Claude writes a query for each chart and shows it |

## Defaults by plan and date

The table shows what the help pages state.

| Item | Team plans | Enterprise plans |
|---|---|---|
| Whiteboards | On by default | Off until an owner turns it on |
| Sheets | On by default | Off until an owner turns it on |
| Data | On by default | Turns on by default on 19 or 20 November 2026, unless an owner has already saved a setting |
| Data certified queries and live sharing | On by default | Off by default |
| Email invitations outside the organization | On by default | Off by default |

Two things in that table deserve attention.

The Enterprise date appears twice, with two values. Anthropic's admin guide read on 16 November said Claude Data turns on by default on 19 November 2026. The launch announcement, the Claude Data help article and the Artifacts feature page said 20 November 2026. The pages did not explain the difference. The current help pages now converge on 20 November, but the discrepancy was real in the source set reviewed for this article. Plan for the earlier date when working from that historical snapshot.

The default may only apply if nobody has chosen. The Data help article says the switch happens unless an owner has already saved a setting. The admin guide says an owner can turn Data on sooner. Saving a deliberate choice, on or off, before the earlier date is therefore a sensible precaution.

For Team plans there is nothing to wait for. The features are on by default, including the two beta features of Claude Data and the setting that lets people invite outside colleagues by email. If your organization is on a Team plan, the review below applies now. For a practical rollout sequence, compare it with [how to build an AI roadmap](/blog/how-to-build-an-ai-roadmap).

## What the help pages say about limits

Beta features have limits, and a few matter for deciding who should use them. These are as stated on the help pages on 16 November 2026.

| Area | What the page states |
|---|---|
| Sheets size | The current help page says a sheet can hold at least 200,000 filled cells; the 16 November source snapshot said 100,000 |
| Sheets functions | The 16 November source snapshot listed 144 functions; the current help page no longer states a function count, so confirm it before setting a hard limit |
| Sheets, not supported at launch | Pivot tables, protected ranges, find and replace, multi-column sort, filter views, multi-select dropdowns, PDF export, and Excel features such as macros, VBA, Power Query, DAX and print layout |
| Sheets and live data | Sheets cannot pull live data from connected apps, and docs, decks and dashboards cannot use a sheet as a data source |
| Sheets compliance | HIPAA, CMEK and zero data retention are not yet supported |
| Whiteboards and connected apps | Claude works from what is on the board and does not use context from connected apps |
| Whiteboards export | PNG, or send to Lucid, Miro or Zoho Vani. A board cannot be imported from a file |
| Whiteboards compliance | Not available to HIPAA-ready organizations. Under zero data retention for Claude Code, available in chat and Cowork but not covered by zero data retention |
| Usage | All three count toward the plan's usage limits |

Sheets suits a tracker or a budget model, and for heavier work Anthropic points to export as .xlsx or CSV, or to Claude for Excel. Whiteboards is for planning together and does not pull from your other systems. Claude Data is the only one of the three that reaches into company data, so most governance questions sit there. The wider [AI data-safety guide](/blog/ai-data-safety-european-businesses) covers the vendor and GDPR questions that sit alongside these settings.

## Where the real decisions are

### Source: whose access runs the query

Claude Data needs a data warehouse, such as Amazon Redshift, BigQuery, ClickHouse, Databricks or Snowflake, or another connected app, such as Salesforce. Claude writes a SQL query for each chart and runs it against the source, and each chart shows its query and when the data was last refreshed.

By default, a shared dashboard loads its data through each viewer's own connections. With live sharing, which is in beta, people in your organization can see results from the owner's connection, including saved results. Anthropic's help article is direct about the consequence: live sharing runs on the owner's access to the data source, anyone the owner shares the dashboard with sees those results even without access to that source, and the owner should check what a dashboard shows before sharing it this way. It is limited to the exact queries the dashboard needs, those cannot change without an editor's approval, and viewers cannot run other queries with the owner's access.

Live sharing is a deliberate widening of access. It is useful when a leadership team wants revenue figures without each person holding a warehouse login, and it is also where a dashboard built by one person on a broad permission can be seen by many. Treat it as a decision, not a convenience. The same least-privilege principle appears in our [AI agent security guidance](/blog/ai-agents-taking-orders-from-other-agents).

### Source: what “certified” means

Certified queries let a data team approve the definitions of metrics that everyone should use, and charts built on them show a badge. The help article says a data team can certify directly in Claude or reuse definitions from dbt, Looker or Cube through existing connectors. It also says that anyone with write access to a Data artifact can certify, and that editing a certified query removes its certification.

Read together, a badge means that someone with write access certified the query, which is not the same as a data team review unless you arrange write access that way. The admin guide adds that to switch certified queries on you must choose a marketplace and a plugin, and with a Git-backed plugin, changes go through pull request review, a stronger control. The help pages leave that design choice to you.

### Share: who can open what

Everything starts private to its creator. On Team and Enterprise plans, artifacts stay inside the organization by default, and an owner decides whether people can share outside it. Two independent settings control this.

External sharing lets users share with anyone who holds a link. Anthropic's features page says links stay inside the organization unless an owner turns this on. The admin guide does not state the default.

Email invitations outside your organization lets users invite named outside people, who sign in with the invited address. It is on by default for Team and off for Enterprise.

Turning on one does not turn on the other. To keep everything internal, the admin guide says to leave both off. Artifacts that connect to other websites, and artifacts with an uploaded file still being scanned, stay internal.

Two further details. An admin can allow external sharing for one named artifact while the organization setting is off. And turning the Artifacts master switch off has wide effects: nobody can open, edit, download or share the organization's artifacts, and all links stop working, including public and email-invite links. Nothing is deleted.

### Record: what you can see afterwards

Anthropic's admin guide says artifacts made in conversations and in the Artifacts tab are recorded in the Compliance API at the artifact level. For Claude Data it says the Compliance API records when an artifact is created, viewed, edited or deleted, and does not include content. The guide does not list which events are recorded for Sheets and Whiteboards, so ask before you rely on an audit trail for them. Admins can also see every shared Claude Data artifact with its owner and visibility under Published artifacts, by filtering the type to Data. Anthropic's Compliance API documentation adds that recording begins when the Compliance API is first enabled and is not backfilled, so switch it on before a rollout. Claude Data and Claude Sheets keep version history, and restoring a version in Claude Data changes the dashboard for everyone who opens it and is logged. Removing a person from the organization removes their artifact access immediately.

## The Kubera Switch, Source and Share Review

Kubera AI planning heuristic, not a universal benchmark. It is not a validated method.

The review asks three questions about each feature, in order, and ends with a recorded decision.

| Question | What to check | Where to check it | Decision to record |
|---|---|---|---|
| Switch | Is the feature on for your plan today, and what changes on which date | Organization settings, Artifacts, and the Capabilities setting for cloud code execution and file creation | On for all, on for a named group through custom roles, or off, with an owner and a date |
| Source | What data can it reach, and under whose access does a shared view run | Connected sources, Data settings for certified queries and live sharing | Which sources are allowed, whether live sharing is on, who may certify |
| Share | Who can open it, inside and outside the organization | External sharing and email invitations, Published artifacts list | Both off, or a named exception with a reason |

The order matters. A feature that is off needs no source or share decision yet. For one that is on, decide the source before the share, because sharing decides who sees what the source returns.

For Enterprise plans, custom roles can limit a feature to specific groups. The organization setting is the master switch, and the role controls per-user access underneath it. One detail to know: users without the Artifacts capability can still open, comment on and enter data into artifacts that were shared with them, up to the Contributor level, so a pilot group controls who creates, not who may be invited to look.

## What to do, by plan

### On a Team plan, this week

Open Organization settings, Artifacts, and read what is on. Whiteboards, Sheets and Data are on already.

Decide on email invitations outside the organization. It is on by default, so leave it on only if you want people to invite outside colleagues.

Decide on live sharing and certified queries for Claude Data. Both are on by default.

Tell the team in two lines what may go onto a board or into a sheet. Keep it short.

### On an Enterprise plan, before 19 November

Open Organization settings, Artifacts, Templates. Save a Claude Data setting on purpose, either on or off, so the date does not decide for you.

If you turn Data on, choose a group through custom roles for the first weeks, and leave certified queries and live sharing off until the source and share questions above are answered.

Decide on Whiteboards and Sheets separately. They stay off until an owner turns them on, so there is no deadline, and a short pilot with one team is a reasonable first step.

Keep External sharing and email invitations off unless a named exception needs them.

If you use the Compliance API, enable it before the rollout, because recording is not backfilled.

For how to sequence a pilot, see [how to build an AI roadmap](/blog/how-to-build-an-ai-roadmap).

## What the help pages do not answer

On the pages we read, these points were not answered.

| Open question | What the pages leave open | Sensible admin action |
|---|---|---|
| Data processing location | The Claude Data help article does not make a region or processing statement | Ask Anthropic or the account contact and keep the answer with the feature decision |
| Retention | Sheets and Whiteboards pages give no separate retention detail | Confirm the organisation's retention setting and whether it covers artifacts |
| Audit content | The Compliance API records Claude Data events but not content; Sheets and Whiteboards event coverage is not listed | Do not rely on the API as a content archive; ask what events are covered |
| Beta contract coverage | The Service Specific Terms describe beta services as potentially unsuitable for production and provided as-is | Check whether the feature and data-processing terms cover the intended use |
| Third-party cloud access | The admin guide says artifacts are not available through third-party cloud platforms | Confirm the route before designing a cloud-platform deployment |

Where the data is processed. The Claude Data help article says it does not cover region or data processing statements. The admin guide says one product, standalone Claude Design, does not support data residency requirements, and it says nothing of the kind for Sheets, Whiteboards or Data. If your obligations depend on where data is processed, ask Anthropic or your account contact and get the answer in writing.

Retention for Sheets and Whiteboards. The admin guide says uploaded assets follow the organization's standard retention policies and that Enterprise custom retention can cover artifacts, with an artifact permanently deleted if no one opens it during the retention period. The Sheets and Whiteboards pages give no other data handling details.

Content in the audit trail. For Claude Data, the Compliance API does not record content.

Contract coverage. The Commercial Terms say data is processed under Anthropic's data processing terms, which they incorporate by reference, and say nothing specific about beta features. The Service Specific Terms, effective 31 August 2026, have a Beta Services section: beta offerings may not be suitable for production use, are provided as is on a temporary basis, and Anthropic is not responsible for a customer's use of or reliance on them, with its liability limited to a stated amount. The pages we read do not say whether a feature labelled beta falls under that section or whether the data processing terms cover it. Do not assume either way.

If personal data subject to GDPR will sit in a sheet or on a board, check whether the controller–processor agreement (Article 28) in your contract covers these features, given the beta terms above, and record the answer in writing. A standard contract does not settle it by itself. Our guidance on [data safety for European businesses](/blog/ai-data-safety-european-businesses) covers that question in more depth.

One more note for companies that reach Claude through a cloud platform: the admin guide says artifacts are not available through third-party cloud platforms. And eligibility under Anthropic's [Supported Regions Policy](/blog/anthropic-supported-regions-policy-europe-check) applies to who uses these features, as we explain in our regions policy check. If you are considering a second model for continuity, compare the exact [model terms and licences](/blog/is-it-really-open-source-ai-agent-licence-check) rather than treating “open” as a guarantee.

## Illustrative scenario

Illustrative scenario, not a specific Kubera client. We describe the design intent here, not a measured result.

A 70-person services company in Germany, with all details invented, is on a Team plan. The operations lead has started using Whiteboards for planning and Sheets for trackers. The finance lead wants a revenue dashboard in Claude Data built on the company's warehouse.

The administrator runs the Switch, Source and Share Review in an afternoon. Switch: all three are on already, and the administrator decides to keep Whiteboards and Sheets on for everyone. Source: for Claude Data, one warehouse connection is approved, and live sharing is turned off for the first month so that each viewer sees data through their own access. Certified queries are turned on with a pull-request-reviewed plugin, so a badge means a data person has checked it. Share: email invitations outside the organization are turned off, because no outside party needs a board yet, and one named exception is added later when an agency joins a campaign plan.

The design intent is a short written record of three decisions, each with an owner and a date, and a reason to revisit live sharing after a month. Teams comparing Claude with other workplace models can use the [Claude, ChatGPT, Gemini, Qwen and DeepSeek comparison](/blog/claude-vs-chatgpt-vs-gemini-vs-qwen-vs-deepseek) as a rollout hand-off.

## A sanctioned tool still needs a setting

Giving a team a sanctioned tool is the right response to [shadow AI risk](/blog/shadow-ai-business-risk-europe). A sanctioned tool that gains new features is a second step, and defaults govern it until a person decides. When Claude edits cells or rearranges a board, a human still decides what goes into the file and what leaves it; see [human-in-the-loop design](/blog/ai-agent-autonomy-human-in-the-loop) for where a review step belongs. If the rollout becomes business-critical, keep a small [automation continuity plan](/blog/ai-automation-outage-recovery-plan) as well.

## Frequently asked questions

### What did Anthropic launch on 10 November 2026?

Claude Whiteboards and Claude Sheets, both in beta, and Claude Data, the generally available form of the earlier Claude Dashboards. Certified queries and live sharing in Claude Data are in beta. All three are available on Pro, Max, Ultra, Team and Enterprise plans.

### Are they on for our organization already?

On Team plans, yes, all three are on by default, as are Claude Data's two beta features. On Enterprise plans, Whiteboards and Sheets are off until an owner turns them on, and Claude Data turns on by default on 19 or 20 November 2026, depending on which Anthropic page you read, unless an owner has already saved a setting.

### Why do two Enterprise dates appear for Claude Data?

Anthropic's admin guide read on 16 November said 19 November. The announcement, the Claude Data help article and the feature page said 20 November. The pages did not explain the difference. Current help pages point to 20 November, but saving a deliberate setting before the earlier date was a prudent control for the historical source set.

### What does live sharing do?

In Claude Data, a shared dashboard normally loads data through each viewer's own connections. With live sharing, which is in beta, it runs on the owner's access, and people the owner shares it with see those results even without access to the source. Anthropic advises checking what a dashboard shows before sharing it this way.

### Can people outside the organization join a board or a sheet?

Only if an owner allows it. Inviting named outside people by email depends on the setting Email invitations outside your organization, which is on by default for Team and off for Enterprise. Sharing by public link depends on a separate External sharing setting. Turning one on does not turn on the other.

### Can we turn the features off?

Yes. Owners can turn templates off under Organization settings, Artifacts, and turning a template off does not affect artifacts already made from it. Turning the whole Artifacts switch off is stronger: nobody can open, edit, download or share artifacts, and existing links stop working until it is turned back on. Nothing is deleted.

### Can we limit the features to a pilot group?

On Enterprise plans, yes, through custom roles, with the organization setting as the master switch. Users without the Artifacts capability can still open, comment on and enter data into artifacts shared with them, up to the Contributor level.

### Who can certify a query in Claude Data?

The help article says a data team can certify queries and that anyone with write access to a Data artifact can certify. Editing a certified query removes its certification. To switch certified queries on, an admin chooses a marketplace and a plugin, and a Git-backed plugin routes changes through pull request review.

### Do Sheets and Whiteboards replace Excel and Miro?

Not at launch, by Anthropic's own description. Sheets offers simple spreadsheet functionality for now, with the current help page stating at least 200,000 filled cells and a list of features not yet supported, and Anthropic points to export or to Claude for Excel for heavier work. Whiteboards exports to PNG and can send to partner tools such as Miro.

### Is it safe to put client data in them?

That depends on your data, your contract and the controls above, and the help pages do not settle it. The Commercial Terms do not mention beta features, and the Service Specific Terms describe beta services as possibly unsuitable for production use and provided as is. Sheets does not yet support HIPAA, CMEK or zero data retention, Whiteboards is not available to HIPAA-ready organizations, and the pages give no region or retention statements for these features. For personal data subject to GDPR, check whether your controller–processor agreement (Article 28) covers them, and take advice.

## Sources

- [Claude Whiteboards, Claude Sheets, and Claude Data, Anthropic, 10 November 2026](https://claude.com/resources/articles/sheets-whiteboards-data)
- [Get started with Claude Data, Claude Help Center](https://support.claude.com/en/articles/17454700-get-started-with-claude-data)
- [Get started with Claude Sheets, Claude Help Center](https://support.claude.com/en/articles/18324300-get-started-with-claude-sheets)
- [Get started with Claude Whiteboards, Claude Help Center](https://support.claude.com/en/articles/18324319-get-started-with-claude-whiteboards)
- [Artifacts admin guide for Team and Enterprise plans, Claude Help Center](https://support.claude.com/en/articles/16994751-artifacts-admin-guide-for-team-and-enterprise-plans)
- [Share artifacts, Claude Help Center](https://support.claude.com/en/articles/9547008-share-artifacts)
- [Service Specific Terms, Anthropic, effective 31 August 2026](https://assets.claude.com/baadf203001a6976ba854062110e8b6ab5eed0c3.pdf)
- [Commercial Terms of Service, Anthropic](https://assets.claude.com/cbc0cee5a5580ef30c81ccf745ef439aa7c47921.pdf)
- [Query the Activity Feed, Claude Platform documentation](https://platform.claude.com/docs/en/manage-claude/compliance-activity-feed)
- [Artifacts, Claude feature page](https://claude.com/features/artifacts)

[Discuss your automation project →](/contacts)
