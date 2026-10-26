---
title: "How to Read an AI Agent Price List: A Buyer's Guide"
seoTitle: "How to Read an AI Agent Price List: A Buyer's Guide"
slug: "how-to-read-ai-agent-pricing"
description: "AI agent quotes now mix seats, credits, tokens and outcomes, and two quotes that look similar can produce very different invoices. This guide explains what each pricing unit really measures, where the surprises sit, and how a mid-size European business can compare quotes on a like-for-like basis before signing."
metaDescription: "AI agents are priced per seat, action, token or outcome. See what each unit means, where bills surprise buyers, and a five-step test for comparing quotes."
date: "2026-10-12"
publishedAt: "2026-10-12"
tags: ["AI agent pricing", "AI automation", "AI credits", "usage-based pricing", "European business", "ROI"]
status: "published"
language: "en-GB"
category: "AI Automation"
---
# How to Read an AI Agent Price List: Seats, Credits, Tokens and Outcomes

A quote for software used to be a licence fee and a number of users. A quote for an AI agent may price the same capability per seat, per action, per conversation, per credit or per resolved case, and often two or three of those at once. For a mid-size business that is mostly good news, because it can start small and pay in line with use. It also means two quotes that look alike can produce very different invoices once the agent is live, and the difference usually sits in a definition that is easy to skim past.

This is a buyer's guide to reading the price list, not to what a project costs in total, which we cover in [How Much Does AI Automation Cost in 2026?](/blog/how-much-does-ai-automation-cost), or how an agent compares with a hire, which is the subject of [AI Automation vs Hiring](/blog/ai-automation-vs-hiring-comparison). It is general information, not financial advice. Vendor figures were read from public pages in October 2026 and such pages change, so check the current version before relying on a number.

For a worked example that connects usage, CRM handling and payback for an Instagram workflow, read [AI-Powered Social Inbox: Turn Instagram DMs and Comments Into Paying Customers](/blog/ai-social-inbox-instagram-dms-comments).

## Why quotes look so different now

[Deloitte's 2026 technology predictions](https://www.deloitte.com/us/en/insights/industry/technology/technology-media-and-telecom-predictions/2026/saas-ai-agents.html), published in November 2025, say subscriptions and seat-based licensing "could give way to hybrid approaches that blend usage- and outcome-based pricing". Deloitte says standard practices could take years to emerge, if they ever do. These are predictions, not measurements, and so is the Gartner forecast it cites, that by 2030 at least 40% of enterprise SaaS spend will shift toward usage-, agent- or outcome-based pricing.

What a buyer can observe today is vendors offering several models at once. Salesforce is a clear example. According to a SaaStr review published in February 2026, it launched per-conversation pricing in October 2024, added consumption credits in May 2025 and added per-user licences in late 2025, and all three now run side by side. The practical reading is that vendors are unsure which unit best matches value, so buyers are asked to choose.

## For context: the US and UK evidence

Most of the data on this shift comes from the US and UK, and Deloitte expects other regions to follow, possibly one to two years later. A survey published by [Cruxy in April 2026](https://itbrief.news/story/saas-chiefs-expect-pricing-shift-as-ai-threatens-sales) asked 300 B2B software chief executives in the UK and US about pricing. It found that 97% were likely to retire seat-based pricing, framed over a two-year horizon, while 94% said seat-based pricing still reflects the value of their product today. The two figures answer different questions, one about intention and one about the present, so they are not a contradiction. Cruxy published the survey, we could not find a methodology note, and it reports expectations, not actions, so we treat it as company-published research and a signal of direction.

We did not find EU-wide data on how European buyers are choosing among these models. A European buyer should expect to meet all of them in quotes.

## Six units you will meet

The same agent can be counted in six ways, and each has a different failure mode.

| Unit | What is counted | Example from a public price list | Where the bill can surprise you |
| --- | --- | --- | --- |
| Seat | Named users with access | Salesforce lists Agentforce add-ons from $125 per user per month, with unmetered usage for employee-facing agents | Seats can be bought for people who rarely use the agent, and fewer seats may be needed as agents do more |
| Conversation | One customer exchange | Salesforce lists $2 per conversation, described as suited to customer-facing agents | Long or repeated exchanges, and what counts as one conversation |
| Action or credit | A step the agent takes, converted into credits | Salesforce sells 100,000 Flex Credits for $500, and a standard action uses 20 credits, which is $0.10 | Different action types use different numbers of credits, and one task can take many actions |
| Token | Text processed by a language model | Anthropic bills per million tokens, with input and output priced separately | Output costs more than input, and long context adds up |
| Execution | One run of an automation workflow | n8n counts a full workflow run as one execution however many steps it has | Cheap for long workflows, costly for many tiny runs |
| Outcome | A result such as a resolved case | Intercom lists Fin from $0.99 per outcome, and its help documentation sets $9.99 for a qualification in Fin for Sales | Which events count as an outcome, and seat fees that sit alongside |

Prices in the table are US dollars from vendor pages. A European invoice may add VAT and currency conversion.

A few details from those pages show how the units behave. Start with the Salesforce conversion, because credits and actions are not the same unit. A pack of 100,000 Flex Credits costs $500, so one credit costs $0.005. A standard action uses 20 credits, which is $0.10, and a pack therefore covers 5,000 standard actions. Salesforce's [official rate card](https://www.salesforce.com/en-us/wp-content/uploads/sites/4/assets/pdf/agentforce/Flex-Credits-Rate-Card-08.31.2026.pdf), updated in August 2026, sets other rates, such as 30 credits for a voice action and 2, 4 or 16 for a prompt depending on its tier. The $0.10 figure is therefore the price of one kind of action, not of every step an agent takes.

The per-user prices are not interchangeable with credits either. According to the [pricing page](https://www.salesforce.com/agentforce/pricing/), the $5 per user per month licence requires Flex Credits, so it is not a full price. The add-ons from $125 include unmetered usage for employees, and Agentforce Max editions from $550 include the add-on and 2.75 million Flex Credits per organisation per year. Conversations at $2 suit customer-facing agents and are not supported in the same organisation as Flex Credits. The page does not say whether Flex Credits can be combined with the add-ons or editions, which is a question for the account executive. These price points cover different users and bundles, so a buyer should not average them.

Microsoft Copilot Studio meters in Copilot Credits, with a classic answer at 1 credit, a generative answer at 2 and an agent action at 5. On the [n8n pricing page](https://n8n.io/pricing/) the Starter plan at €20 per month, billed annually, includes 2,500 executions, and the Pro plan at €50 includes 10,000. An execution is a single run of the whole workflow regardless of the number of steps, which is why [n8n vs Make vs Zapier](/blog/n8n-vs-make-vs-zapier) is partly a comparison of units and not only of features.

Primary sources for the figures above: [Deloitte](https://www.deloitte.com/us/en/insights/industry/technology/technology-media-and-telecom-predictions/2026/saas-ai-agents.html), [Salesforce's announcement](https://www.businesswire.com/news/home/20250515332990/en/Salesforce-Introduces-New-Flexible-Agentforce-Pricing-to-Accelerate-the-Digital-Labor-Revolution), [Salesforce pricing](https://www.salesforce.com/agentforce/pricing/), the [Salesforce Flex Credits rate card](https://www.salesforce.com/en-us/wp-content/uploads/sites/4/assets/pdf/agentforce/Flex-Credits-Rate-Card-08.31.2026.pdf), SaaStr review, Cruxy survey coverage, [Intercom pricing](https://www.intercom.com/pricing), [Intercom Fin AI Agent outcomes](https://www.intercom.com/help/en/articles/8205718-fin-ai-agent-outcomes), [Microsoft Copilot Studio billing](https://learn.microsoft.com/en-us/microsoft-copilot-studio/requirements-messages-management), [Microsoft managing Copilot Credits capacity](https://learn.microsoft.com/en-us/power-platform/admin/manage-copilot-studio-copilot-credits-capacity), [n8n pricing](https://n8n.io/pricing/) and [Anthropic API pricing](https://platform.claude.com/docs/en/about-claude/pricing).

## The definition decides the bill

Every unit in the table depends on a definition, and the definition may sit outside the price page. [Intercom's pricing page](https://www.intercom.com/pricing) lists Fin from $0.99 per outcome without saying what qualifies, but its [help documentation](https://www.intercom.com/help/en/articles/8205718-fin-ai-agent-outcomes) does. A resolution is counted when no further help is requested after Fin's last answer. It can be confirmed by the customer, or assumed when the customer leaves without asking for more. Only one outcome is charged per conversation, a resolution that is reopened is deducted, failed attempts are not billed, and a handoff is billable only when it comes from a configured procedure, not from Fin's default escalation behaviour. This is documentation a buyer should read, because an assumed resolution is billed even if the customer left unhappy.

Other vendors set the rate and leave the meaning of a unit to the order form. Salesforce's announcement says customers pay for the exact actions the agent performs, and its rate card sets credits per usage type, but the buyer still needs to see which of their own tasks fall into which type. Deloitte makes the same point: outcome-based models need agreed definitions of an agent, a task and an outcome.

Before comparing numbers, ask each vendor to write down in the contract what counts as one unit, with two or three worked examples from your own process. An outcome price of €1 means little until you know whether a case that the agent closes and the customer reopens the next day is charged once, twice or not at all.

## Why agent bills move from month to month

A seat is predictable. An agent that reasons its way through a task is not, because its path changes the units used, and Deloitte notes that agents may take novel or inefficient paths. The vendor pages show the mechanics:

One interaction can trigger several meters. [Microsoft's documentation](https://learn.microsoft.com/en-us/microsoft-copilot-studio/requirements-messages-management) gives an example of a single complex prompt costing 12 Copilot Credits, made up of 10 for tenant grounding and 2 for the answer. Reasoning-capable models add a second meter, billed per 1,000 tokens.
Tokens are not priced alike. [Anthropic's pricing page](https://platform.claude.com/docs/en/about-claude/pricing) states that input and output tokens are priced separately, that output costs more, and that tool definitions count as input. Web search adds $10 per 1,000 searches plus tokens.
Discounts exist but need design. The same page lists 50% off for batch processing of non-urgent work and a low price for cached input, which help only if the workflow is built to use them.

The consequence is that a single average figure hides the range. A buyer needs a low case, an expected case and a high case, which the framework below builds in.

## The edges of the contract

The price per unit is only half of the quote. The other half is what happens at the edges.

| Edge | Question to ask | What public pages show |
| --- | --- | --- |
| Overage | What happens when usage passes the plan | Salesforce states no overage penalty, with excess billed monthly in arrears at the contracted rate. Microsoft applies enforcement at 125% of prepaid capacity for tenants on its prepaid capacity model, after which custom agents are disabled until capacity is increased or reset |
| Rollover | Do unused credits carry over | Salesforce states that unused Flex Credits do not roll over to later subscription terms |
| Minimums | Is there a floor on spend | Intercom's public pricing and help pages state that a minimum monthly commitment may apply, for example 50 outcomes for standalone Fin; exact terms depend on the product and contract |
| Included allowance | What is in the base price | Salesforce's Agentforce Max editions include an annual credit allowance per organisation |
| Price changes | Can the unit price or the unit definition change mid-term | Not shown on public pages, so it must be asked |

The two overage rules illustrate the point. One is a billing surprise, the other is a service interruption. The Microsoft rule is documented for the prepaid capacity model and applies at tenant level. It does not interrupt a conversation in progress, but later attempts to invoke the agent are rejected. Pay-as-you-go billing, which charges overage to an Azure subscription, avoids enforcement for agent flows, and a pay-as-you-go environment can set its own limit with a hard stop. The documentation does not say that pay-as-you-go removes the tenant-level 125% rule in general, so ask which rule applies to your setup. An agent switched off in a busy week is a different risk from a higher invoice, and the two need different safeguards.

## A framework for comparing quotes

This is a Kubera AI planning heuristic, not a validated method. It is meant to put different quotes onto one footing before you choose between them.

The Kubera Quote Test has five steps:

| Step | Question to ask | What to do | Example output |
| --- | --- | --- | --- |
| 1. Name the unit | What exactly is being counted | Get a written definition with worked examples from your own process | One definition per quote |
| 2. Size the volume | How many units will our process use | Count real cases from a month of your own data, and estimate units per case from a pilot | Cases per month and units per case |
| 3. Stress the variance | What happens at low, expected and high use | Calculate three cases, changing volume, units per case and success rate together | A table of three monthly costs per quote |
| 4. Check the edges | What happens at the limits | Read overage, rollover, minimum and price change terms | A list of risks with an owner for each |
| 5. Compare cost per task handled | What does one task cost once every task is counted, including those people finish | Divide vendor charges plus human handling cost by all tasks handled, whoever finishes them | One all-in figure per task for each quote |

Step 5 is the one most often skipped, and it needs two separate metrics with fixed definitions. The first is vendor cost per task the agent completes: the vendor charges divided by the tasks the agent finished. It describes what the vendor's unit costs and is useful for checking a quote. The second is all-in cost per task handled: vendor charges plus the cost of human handling for escalated tasks, divided by all tasks handled, whether the agent or a person finished them. Compare quotes on the second metric, with the same denominator for every quote, because the first leaves out the work that people still do. Implementation, integration and maintenance should be added to the numerator as a share of their cost. The method for that side is covered in [How to Measure ROI from AI Automation](/blog/how-to-measure-roi-ai-automation).

## Where this plays out in practice

Illustrative scenario, not a specific Kubera client: a mid-size European distributor wants an agent to handle inbound customer enquiries. It expects about 3,000 enquiries a month and receives three quotes. All figures below are invented to show the method and are not market prices.

Quote A is a flat €2,400 per month for up to 3,500 enquiries, then €0.90 for each additional enquiry.
Quote B charges €0.08 per action. The agent uses between 8 and 20 actions per enquiry, depending on complexity.
Quote C charges €1.20 per enquiry the agent resolves without a person, plus a €300 platform fee per month.

The firm builds three cases. The low case is 2,500 enquiries with 8 actions each and 50% resolved. The expected case is 3,000 enquiries with 12 actions each and 65% resolved. The high case is 4,000 enquiries with 20 actions each and 80% resolved.

| Quote | Low case | Expected case | High case |
| --- | --- | --- | --- |
| A, flat fee | €2,400 | €2,400 | €2,760 |
| B, per action | €1,600 | €2,880 | €6,400 |
| C, per resolved enquiry | €1,800 | €2,640 | €4,140 |

No quote is cheapest in every case. Quote B is cheapest in the low case and Quote A in the expected and high cases. Quote B's cost is four times higher in the high case than in the low case, while Quote A moves by 15%. Quote C rises when the agent performs better, because it charges for each resolution.

This table shows vendor charges only, and the next step is to apply the two metrics from Step 5. Assume, for illustration, that each enquiry a person handles costs the firm €5 in staff time, and that all three quotes use an agent that performs equally, so the same enquiries are escalated under each quote.

| Metric | Quote | Low case | Expected case | High case |
| --- | --- | --- | --- | --- |
| Vendor cost per enquiry the agent resolves | A | €1.92 | €1.23 | €0.86 |
| Vendor cost per enquiry the agent resolves | B | €1.28 | €1.48 | €2.00 |
| Vendor cost per enquiry the agent resolves | C | €1.44 | €1.35 | €1.29 |
| All-in cost per enquiry handled | A | €3.46 | €2.55 | €1.69 |
| All-in cost per enquiry handled | B | €3.14 | €2.71 | €2.60 |
| All-in cost per enquiry handled | C | €3.22 | €2.63 | €2.04 |

The two metrics answer different questions. Quote C's cost per resolved enquiry falls from €1.44 to €1.29 as it resolves more, while its total bill rises from €1,800 to €4,140. The all-in figure includes the staff time for enquiries the agent does not resolve, which is €6,250 in the low case and €4,000 in the high case under these assumptions. Because the escalated work is the same under each quote, it does not change the ranking, but in the expected case vendor charges differ by at most €480 while staff time is €5,250. In this scenario the resolution rate matters more than the choice of pricing unit.

Even the all-in table is a first-stage comparison. It leaves out implementation, integration, monitoring and maintenance, and it assumes equal agent performance, which a pilot would need to confirm. The final choice should not rest on this table alone.

The firm then asks which risk it can carry. A flat fee suits a team that values a predictable budget, a per-action price suits uncertain volume watched closely, and an outcome price suits a team that can define a resolution precisely.

## What a partner can do about this

An implementation partner is useful here for a reason that has little to do with negotiation. Unit consumption is a design property of the workflow as much as a vendor's rate card. A project can test these choices in a pilot:

Log the units used for every task from day one, so the pilot produces the units-per-case figure that Step 2 needs.
Route routine cases through a fixed workflow and keep reasoning steps for exceptions, since a fixed step is easier to price.
Set a spending limit and an alert, so a change in volume shows before it becomes an invoice.
Decide in advance when the agent hands over to a person. How far an agent should act alone is covered in [How Much Autonomy Should an AI Agent Have Before a Human Steps In?](/blog/ai-agent-autonomy-human-in-the-loop).

These are design options to test, not measured savings. They fit best with a project that starts from a clear process, which is also the main reason projects stall, as we explain in [Why Most AI Projects Fail Before They Deliver Any ROI](/blog/why-most-ai-projects-fail).

Security controls belong in the operating cost and ownership model too; [the October 2026 vulnerability wave](/blog/vulnerability-wave-october-2026-ai-automation-security) explains the patching and secret-rotation work behind a reliable AI stack.

## FAQ

**Which is cheaper, seat-based, usage-based or outcome-based pricing?** None of them is cheaper in every case. The scenario above shows the cheapest quote changing between low and high use. The answer depends on your volume, your units per case and how well the agent performs, so compare the three-case table, not the headline rate.

**What is an AI credit?** A vendor-defined unit that bundles actions or model usage into one number. Its value depends on the credit price and on the credits each feature consumes, so ask for the rate table and a worked example from your own process.

**Why does the same agent cost a different amount each month?** Usage-based bills follow the number of cases, the steps per case and the model used. Steps per case are harder to predict than volume because agents may take inefficient paths. A pilot with logged units per case reduces the uncertainty.

**Is outcome-based pricing safer for the buyer?** It can feel safer because you pay only for results, but it depends on the definition of a result. Some vendors deduct reopened cases, as Intercom documents, and some count an assumed resolution when a customer simply leaves, so check both. Outcome pricing also does not cover the staff cost of cases the agent cannot resolve, and the bill can rise as the agent improves.

**What counts as a resolution or an action in a quote?** This varies by vendor, and the definition may be in help documentation, not on the price page. Intercom, for example, counts a resolution as confirmed or assumed, charges one outcome per conversation and deducts reopened resolutions. Read that documentation, then put the definition and three worked examples from your own process into the contract.

**Will per-seat pricing disappear?** The evidence does not say so yet. A company-published survey of UK and US executives found most expect to retire it while almost all say it still reflects value, and Deloitte expects hybrids. Assume quotes will mix units for some years.

**How do we forecast usage before buying?** Run a short pilot on real cases, log the units used for each, and calculate low, expected and high cases from that log. A vendor's average will not reflect your own mix of simple and complex cases.

**What should we ask the vendor before signing?** Ask for the unit definition with examples, the overage and rollover rules, the notice period for price or definition changes, any minimum commitment, what happens to the agent when capacity runs out, and whether model costs are included or billed on top.

**Does this change if we build on a workflow platform instead of buying a packaged agent?** The units change but the method does not. A platform may count executions and bill the model separately, so you add the two. Who will run and maintain the build is covered in [How to Implement AI Without Hiring More Employees](/blog/implement-ai-without-hiring).

If you are comparing quotes for an AI agent and want to work out which unit fits your volume, your process and the risk your team can carry, that is design work worth doing before you sign anything.

[Discuss your automation project →](/contacts)
