---
title: "Your Customers' AI Agents Are Arriving: Identity, Permissions and Who Pays When an Agent Buys Wrong"
slug: "customers-ai-agents-identity-permissions-liability"
description: "Meta's Muse, Grok Bot and Instinct already browse and buy for real people, some of them without saying who they are. The volumes are still tiny, but the rules you set now decide what happens when they are not. This guide covers identity, permissions, a small agent door policy and the open question of who pays for a wrong purchase."
seoTitle: "Your Customers' AI Agents Are Arriving: Identity, Permissions and Who Pays"
metaDescription: "Customers' AI agents now visit shops and booking sites. What is real, how to tell agents apart, what to allow, and who pays when an agent buys the wrong thing."
date: "2026-11-11"
publishedAt: "2026-11-11"
tags: ["AI agents", "agentic commerce", "AI governance", "AI security", "GDPR", "payments"]
status: "published"
language: "en-GB"
category: "AI Automation"
---

# Your Customers' AI Agents Are Arriving: Identity, Permissions and Who Pays When an Agent Buys Wrong

Short answer. AI agents that shop, book and manage accounts for your customers are real and already on the open web, but they are still rare. DoorDash's chief executive said on 29 October that third-party agents had placed “maybe several hundred orders in total”, against 993 million orders in the quarter. The risk for a mid-size business is not volume. It is that some of these agents do not announce themselves, that the standards for identifying them are drafts, and that nobody has yet settled who pays when an agent buys the wrong thing. This article separates what is confirmed from what is vendor claim, explains the three kinds of agent visitor, gives a four-lane Agent Door Policy you can set up in a week, and sorts “wrong purchase” into three cases with different payers. It is general information, not legal advice.

If you sell online, take bookings or run a customer portal, you have a new kind of visitor: software that acts for a customer. Unlike browser agents inside your own company, this agent belongs to the customer, you did not choose it, and you may not know it is there.

## What is actually arriving, and how much

The numbers are small, and the sources are of different quality. Here is what we found, with its status.

| Fact | Source type | Status |
|---|---|---|
| Meta launched the Muse agent in the US on 8 September 2026 | Reported by multiple outlets | Confirmed by reporting |
| Amazon blocked Muse from shopping on 20 September, citing its Conditions of Use | Reported via GeekWire and The Verge | Confirmed by reporting, Amazon statement quoted |
| DoorDash: “maybe several hundred orders in total” from third-party agents, against 993 million total orders in Q3 | Earnings call of 29 October, reported by TechCrunch | Confirmed, but DoorDash did not name the agents or explain how it counted |
| Grok Bot stopped signing its requests around 9 October 2026 | Fingerprint press release, 6 November | Vendor claim |
| Muse, Instinct and Grok Bot can be detected without help from their makers | Fingerprint press release | Vendor claim |
| 93% of merchants say the AI or agent provider should cover the loss when an agent chooses wrongly | PYMNTS Intelligence report, September 2026 | Survey of 60 US retail merchants in the sample described by PYMNTS, not Europe |

None of the claims about how Muse, Grok Bot or Instinct behave were tested by us or by an independent technical audit. Fingerprint sells bot detection, so it has a commercial interest, and Amazon and Meta are parties to their own dispute. DoorDash's count is the company's own statement on an earnings call. Two of these points deserve a note. The DoorDash figure covers the whole period since the agents have been “up and running”, and FourWeekMBA's arithmetic puts even 1,000 orders at about eight seconds of DoorDash's average third-quarter order flow. That shows adoption is early, not that it will stay small. And the PYMNTS number is a US merchant opinion from a small sample, so treat it as a signal of how merchants feel, not as a legal or European fact.

## Three kinds of agent visitor

The useful split is by how much you can know about the visitor.

### Signed agents

They prove who they are cryptographically. The main open mechanism is [Web Bot Auth](https://datatracker.ietf.org/doc/draft-ietf-webbotauth-httpsig-protocol/), an IETF Internet-Draft in which an agent signs its HTTP requests and points to a public key directory. The current working-group document is `draft-ietf-webbotauth-httpsig-protocol-01`, last updated 29 October 2026; it is an active draft, not a finished standard. According to WorkOS, Cloudflare and AWS already verify signatures. Cloudflare has a “signed agents” category, and AWS WAF labels requests as verified or not.

### Declared but unsigned agents

They say what they are, for example in the user agent string, but you cannot verify it. Amazon's Conditions of Use, updated on 14 August 2026, require agents to write “Agent/[agent name]” in the user agent of every request, according to reporting on the Muse block.

### Undeclared agents

They look like a person in a browser. Amazon told GeekWire that Muse did not identify itself, and Meta says Muse has no visibility into passwords or payment methods. Fingerprint says Muse “provides no verifiable identity” and alters its browser fingerprint, and that Instinct logs in with human credentials without Web Bot Auth. These are vendor and press claims, not an independent audit.

What changed in October is that the signed group is getting smaller in one important case. Fingerprint says Grok Bot used to announce itself by signing with Web Bot Auth and stopped around 9 October. If that is right, the agent from the biggest names is not a reliable signer, and a policy that only lets in signed agents will miss real customers.

## The Personal Agent Protocol: useful, early, and silent on payment and blame

The most visible attempt to fix identity from the customer's side is the [Personal Agent Protocol](https://sierra.ai/blog/poppy), nicknamed Poppy, from Sierra and Meta. They announced it on 6 October. What is known from the sources we read:

- It is a draft. Sierra's own post confirms draft 0.1 on 9 October. The official [Poppy changelog](https://personalagentprotocol.org/docs/changelog) now records version 0.3 published on 4 November, frozen at its versioned documentation, with draft 0.4 in progress. It remains pre-1.0 and may change in backward-incompatible ways.
- How it works. A business publishes a small file, `/.well-known/poppy.json`, saying how agents can reach it: through its website, its APIs or its own agent. The agent identifies itself and can start as a guest. The customer signs in on the company's own page through OAuth and chooses read-only or write access.
- What it does not cover. Payments are outside the announced core specification. The independent tracker does not identify a liability or dispute rule, and Sierra describes the project as a draft being developed toward 1.0.

[Descope's Envoy](https://www.descope.com/press-release/envoy), announced on 4 November, is an example of a vendor building on it. According to Descope's press release, Envoy lets a business accept agents as users with their own identity, with permissions defined through Rich Authorization Requests, for example “can browse and order but cannot change account settings or payment methods”. The customer and the agent stay separate in every token and log entry, so access can be revoked without signing the customer out, and sensitive actions go to the customer for approval. The press release does not give pricing or a general availability date.

For a mid-size business the practical reading is: do not build to a draft that changes every ten days. Know what it is, ask your platform or identity provider what it plans to support, and design your own rules so they map onto it later. The rules in the next section do.

## Who pays when an agent buys wrong: three different cases

“Wrong purchase” is three problems, and each has a different payer. The sources we read are law-firm and industry commentary on payment rules, not court decisions, so check your own case with a lawyer.

| Case | Example | Who bears it, on current commentary |
|---|---|---|
| A. Unauthorised | The agent was hijacked, or credentials were stolen | Payment rules on unauthorised transactions apply, so the cardholder's bank is the first line for refunds. Merchants face chargeback exposure |
| B. Authorised mistake | The customer's agent bought the wrong size or the wrong product within its permission | Law-firm commentary says this is still an authorised transaction under PSD2 and the incoming PSR, so the refund protection for unauthorised payments is unlikely to apply. It then turns on your terms of sale, consumer law and the facts |
| C. Your error | Your price, stock or product data was wrong and the agent relied on it | You, under ordinary consumer law, as with any wrong listing |

Three details matter here.

Case B is the grey zone. One firm notes that if an agent buys the wrong item while still inside the formal boundaries of its mandate, the dispute may not count as fraud in the traditional sense. Another says there is “no clean reason code” in the chargeback system to mark an agent error as different from a legitimate purchase. Nobody has built a standard split of cost for it yet. The PYMNTS finding that 93% of surveyed merchants want the agent provider to pay is an expectation, not a rule.

Strong customer authentication still applies to payment transactions within the PSD2 framework. [PSD2 Article 97](https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=CELEX%3A32015L2366) requires strong customer authentication for specified remote electronic payments, but whether it is required and when an exemption applies depends on the specific payment. Payments started by an agent are not exempt just because software starts them, and how one authentication can cover later payments is still being discussed.

Consumer rules still apply, with exceptions. The [Consumer Rights Directive](https://eur-lex.europa.eu/eli/dir/2011/83/oj/eng) provides a 14-day right of withdrawal for many distance contracts, subject to Article 16 exceptions such as personalised goods, sealed hygiene goods once opened, and some services on a fixed date. The right does not disappear merely because software clicked buy, and mandatory consumer protections cannot be overridden by a term saying otherwise. National implementation and the facts still matter.

Who ends up carrying cases B and C depends on the law where you sell, your contract terms and the circumstances of the purchase. Commentary suggests they tend to stay between you and your customer rather than move to the bank, which is why clear terms matter. Case A is shared with the bank and the card network. Take legal advice for your own markets.

## The Kubera Agent Door Policy

This is a planning tool from our own practice, not a standard. It sets what an agent may do by two things: how well you can identify it, and how much damage the action can do. Define four lanes, from least to most risky.

| Lane | What the agent can do | Example |
|---|---|---|
| 1. Read | See public catalogue, stock status, prices, delivery and returns policy | Agent checks whether a jacket is in stock in size M |
| 2. Quote | Request a price, shipping quote or availability hold | Agent asks for a delivery date to a specific postcode |
| 3. Prepare | Fill a basket, prepare a booking, apply a voucher, without paying | Agent builds the order and stops at checkout |
| 4. Commit | Pay, change an address, change payment details, cancel | Agent completes checkout |

Now cross it with the three visitor types. A sensible default:

| Visitor | Read | Quote | Prepare | Commit |
|---|---|---|---|---|
| Signed and customer-authorised | Yes | Yes | Yes | Yes, after the customer confirms. Once you trust your setup you may waive this below a limit you choose |
| Declared, unsigned | Yes | Yes | Yes, guest basket only | No. Hand the customer a link to confirm |
| Undeclared | Rate-limited | Rate-limited | No | No, and flag for review |
| Known hostile | No | No | No | No |

Three rules sit behind the table.

- The commit lane starts with a human step for every order. Even a trusted agent hands the customer a confirmation. That is the cheapest way to stay out of case B. Only after you have seen how agent orders behave should you consider waiving it below a small limit, and only for signed agents. A confirmation does not eliminate consumer rights, payment disputes or the possibility that the transaction is challenged.
- Never let an agent change payment details or account settings. Envoy's own example puts these out of reach by default, and so should you.
- Never expose a reusable card. Keep stored card data away from any agent session. PYMNTS notes in its report that businesses can keep reusable card details away from AI apps.

An undeclared agent that behaves like a customer is a customer's tool. The aim is not to block it, but to give it the same lanes as a declared agent, slowly, and to keep it out of lane 4 until a person confirms. The shared-computer caveat in [the Grok Bot guide](/blog/grok-bot-explained-ai-agent-team-cost) is a useful reminder that an agent label does not by itself create a security boundary.

## A one-week setup

- Day 1: look. Check your CDN or web firewall for signed agent labels, look in your logs for user agent strings containing “agent”, and ask your security vendor whether it detects unsigned agents.
- Day 2: fix the read lane. Make sure stock, price, delivery time and returns policy are on the page in plain text and structured data. Agents that cannot read your shop will go to a competitor's. Wrong data here creates case C.
- Day 3: set the commit rule. Decide how the customer confirms, for example by email or SMS link, and require it for every order started by a non-human session. Revisit limits later.
- Day 4: update your terms of sale. State that orders placed through an agent are treated as placed by the customer, that the customer is responsible for the agent's instructions within the permissions given, and how returns work. Have your lawyer check how this fits consumer law in your country. Do not use the wording to contract out of mandatory consumer protections.
- Day 5: log what matters. Record the agent's declared name, whether it was signed, what scope the customer granted and who approved each commit. If a dispute comes, that is your evidence.
- Day 6: write the one-page policy from the lane table, with an owner.
- Day 7: ask your platform. If you run on Shopify, WooCommerce or similar, ask what agent support is planned and what is switched on by default. One report says Shopify let Muse into every store the day after Amazon blocked it.

For your own staff's AI tools, see [shadow AI risk](/blog/shadow-ai-business-risk-europe), and for where approval steps belong, [AI agent autonomy and human-in-the-loop](/blog/ai-agent-autonomy-human-in-the-loop). The [AI agent security guide](/blog/ai-agents-taking-orders-from-other-agents) applies the same command, data and signal distinction to agents working together. For data-handling controls, see [AI data safety for European businesses](/blog/ai-data-safety-european-businesses).

## The disclosure side

Agents are expected to tell people when they speak for a customer. Under [EU AI Act Article 50](https://eur-lex.europa.eu/eli/reg/2024/1689/2026-07-27/eng), the provider must design direct-interaction systems such as AI agents to inform people they are interacting with AI, subject to the statutory obviousness exception. The [Commission's Article 50 guidance](https://digital-strategy.ec.europa.eu/en/policies/guidelines-ai-transparency-obligations) explains the scope and says the obligations apply from 2 August 2026. The agent's disclosure of who it acts for is a practical guidance point, not a new allocation of payment liability. We explained the wider dates in [EU AI Act after the Omnibus](/blog/eu-ai-act-after-omnibus-2-december-2026), and the broader building blocks in [what agentic AI is](/blog/what-is-agentic-ai).

## Illustrative scenario

A 60-person online retailer of outdoor gear in Poland, with all details invented for illustration. A week of log review finds about forty non-human sessions a day. A few are signed agents, about half declare themselves without signing, and the rest are undeclared. The retailer lets the first two read, quote and fill a guest basket, rate-limits the undeclared sessions, and requires an email confirmation before any checkout started by a non-human session.

Later one customer's agent buys the wrong tent size for a trip. The order was started by an agent, confirmed by the customer through the email link, and shipped. Because the customer confirmed and the terms say so, the retailer treats it as an ordinary return within the withdrawal period. The log shows the agent name, scope and approver. The confirmation does not decide every legal issue: the applicable withdrawal exception, conformity rights, payment dispute and national rules still need to be assessed. Without the confirmation step, the retailer would be arguing over who authorised the order.

## What not to do

- Do not block all agents. Amazon can afford a block as one of the largest shops. A mid-size shop that blocks everything also blocks customers who use an assistant. And do not trust the user agent string alone: it is easy to fake.
- Do not build to a draft protocol now. Poppy moved from 0.1 to 0.3 in under a month, and draft 0.4 is in progress. Wait for 1.0 or let your platform do it.

## Frequently asked questions

### Are customers' AI agents a real thing yet?

Yes, but still small. DoorDash's chief executive said third-party agents placed “maybe several hundred orders in total” against 993 million orders in the quarter. Other platforms report similar low volumes, though much of the concern is about what happens when adoption grows.

### How can I tell whether a visitor is an AI agent?

Three ways: a cryptographic signature (Web Bot Auth), a declared name in the user agent string, or detection by a security vendor. Signed agents are the easiest and, according to Fingerprint, some prominent agents have stopped signing, so you cannot rely on signatures alone.

### Should I block AI agents?

Not by default. Amazon blocked Meta's Muse on 20 September, but it is one of the world's largest shops. For a mid-size business, a better approach is to let agents read and prepare, and to keep the final purchase behind a customer confirmation.

### What is the Personal Agent Protocol?

An open draft standard from Sierra and Meta for how a customer's AI agent signs in to a business and what it may do there. Sierra published draft 0.1 on 9 October; version 0.3 was published on 4 November and draft 0.4 is in progress, which the official changelog records. It is not a finished standard, it does not cover payments in the announced core, and we found no statement in it that allocates liability.

### Do I need to implement it now?

No. It is still a draft and changing. Ask your platform or identity provider what it plans to support. Descope's Envoy is one example of a vendor that has built on it, announced on 4 November.

### Who pays if a customer's agent buys the wrong item?

It depends on the case. If the payment was unauthorised, payment rules and the bank apply first. If the agent made a mistake within its permission, law-firm commentary says it may count as an authorised payment, so it falls to your terms of sale and consumer law. If your own listing was wrong, the error is yours. None of these categories automatically determines the final allocation in every jurisdiction.

### Does strong customer authentication still apply to agent payments in the EU?

Payment transactions remain within the PSD2 framework. Strong customer authentication can apply to electronic remote payments, but the exact requirement and any exemption depend on the transaction and payment flow. There is no blanket agent exemption.

### Does the right of withdrawal apply to orders placed by an agent?

In general, EU rules on distance contracts apply to the consumer's order whoever or whatever clicked buy. The right has exceptions, such as made-to-order goods, and details differ by country. Check the rules where you sell.

### What is the first thing a mid-size business should do?

Look at your logs and firewall for agent traffic, make your stock, price and returns data readable, and add a customer confirmation step before any order started by a non-human session. The rest can follow.

## Sources

- [Meta and Sierra Build Standard for How Personal Agents Interact With Businesses](https://www.pymnts.com/news/artificial-intelligence/2026/meta-and-sierra-build-standard-for-how-personal-agents-interact-with-businesses/), PYMNTS
- [Sierra announces Personal Agent Protocol](https://sierra.ai/blog/poppy), The Next Web / Sierra source
- [Poppy Personal Agent Protocol changelog](https://personalagentprotocol.org/docs/changelog), protocol status
- [Meta and Sierra Publish Draft 0.1 of Personal Agent Protocol](https://auditcommons.org/news/personal-agent-protocol-draft/), Audit Commons
- [Descope Unveils Envoy](https://www.descope.com/press-release/envoy), press release, 4 November 2026
- [Descope launches Envoy](https://siliconangle.com/2026/11/04/descope-launches-envoy-to-let-consumer-apps-accept-personal-ai-agents-as-users/), SiliconANGLE
- [Fingerprint: how to detect Grok Bot](https://fingerprint.com/blog/how-to-detect-grok-bot/), 6 November 2026; the broader Muse and Instinct detection claim remains a vendor claim
- [DoorDash said it's only received several hundred orders from AI agents](https://techcrunch.com/2026/10/30/doordash-said-its-only-received-several-hundred-orders-from-ai-agents/), TechCrunch
- [Amazon, DoorDash CEOs Say Few Shoppers Buy Through AI Agents](https://fourweekmba.com/ai-amazon-doordash-ceos-say-few-shoppers-buy-through-ai-agents/), FourWeekMBA
- [Amazon Blocks Meta's Muse AI Agent](https://www.techrepublic.com/de/article/news-amazon-blocks-meta-muse/), TechRepublic
- [Amazon blocks Meta's Muse from shopping](https://www.geekwire.com/2026/amazon-blocks-meta-muse-from-shopping/), GeekWire / reporting
- [Amazon blocks Meta's Muse](https://thenewstack.io/amazon-meta-muse-block/), The New Stack
- [Web Bot Auth: how to identify AI agents](https://workos.com/blog/web-bot-auth-identify-ai-agents), WorkOS
- [AI Makes the Holiday Shopping List but Who Gets the Sale?](https://www.pymnts.com/artificial-intelligence/2026/ai-makes-the-holiday-shopping-list-but-who-gets-the-sale/), PYMNTS Intelligence report
- [The agentic commerce liability gap](https://forkast.news/the-agentic-commerce-liability-gap-who-pays-when-the-agent-buys-wrong/), Forkast
- [Agentic Payments: a new challenge for Europe's payments ecosystem](https://www.osborneclarke.com/insights/agentic-payments-new-challenge-europes-payments-ecosystem), Osborne Clarke
- [The Agentic Commerce Opportunity and its Regulatory Compliance](https://www.dematteis.com/insights/agentic-commerce-opportunity-regulatory-compliance), De Matteis Law
- AI agents force payments industry to verify intent, CFOtech (source URL not confirmed; retained as an attributed secondary source)

[Discuss your automation project →](/contacts)
