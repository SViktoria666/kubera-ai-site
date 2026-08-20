---
title: "AI Automation for Specific Industries: Dental, Real Estate, Accounting, and E-commerce"
slug: "ai-automation-industries-europe"
description: "Most AI automation content treats every business the same. A dental practice, a real estate agency, an accounting firm, and an e-commerce store each face different compliance rules, different task patterns, and different starting points. Here's what genuinely differs, industry by industry."
seoTitle: "AI Automation by Industry: Dental, Real Estate, Accounting, E-commerce"
metaDescription: "Generic AI automation advice misses what actually differs by industry. Here's what genuinely applies to dental, real estate, accounting, and e-commerce businesses in Europe."
date: "2026-08-21"
publishedAt: "2026-08-21"
tags: ["ai automation", "dental", "real estate", "accounting", "e-commerce", "gdpr", "aml", "eprivacy"]
status: "published"
language: "en-GB"
category: "AI Automation"
---

# AI Automation for Specific Industries: Dental, Real Estate, Accounting, and E-commerce

Most AI automation advice is written as if every business faces the same decision. It doesn't. A dental practice handles special-category health data under GDPR. A real estate agency is, under the EU's anti-money-laundering framework, among the categories of obliged entities. An accounting firm carries professional confidentiality and, often, its own AML obligations that vary by service and country. An e-commerce business answers to consumer protection law and ePrivacy rules in ways a service business never touches. Treating these four as interchangeable "just automate your customer communication" cases misses what actually matters for each one.

This article goes through all four, what the real EU adoption data shows for each sector, what compliance genuinely requires, where automation tends to pay off first, and where it doesn't.

## What Eurostat's data actually shows, by sector

Before getting into each industry, it's worth grounding this in real numbers rather than the vendor-blog statistics that circulate for each vertical. Eurostat's most recent enterprise survey found that 20.0% of EU enterprises with 10 or more employees used AI technologies in 2025, up from 13.5% in 2024. Adoption varies sharply by sector.

| Sector | Share of EU enterprises using AI, 2025 |
| --- | ---: |
| Information and communication | 62.52% |
| Professional, scientific, and technical activities | 40.43% |
| Real estate activities | 24.82% |
| All other sectors, including retail and construction | Below 25%, ranging down to 10.79% for construction |

Accounting and bookkeeping firms fall within Eurostat's "professional, scientific, and technical activities" category, the second-highest-adopting sector in the EU. Real estate is tracked separately and sits close to the EU-wide average. Eurostat doesn't break out dental practices specifically, they sit within the broader human health category, which falls into the lower-adoption bracket alongside most non-digital-native sectors. E-commerce isn't a single NACE category either, since it cuts across retail and various service sectors, but Eurostat's retail trade data shows meaningfully high use of AI specifically for marketing and sales tasks within that sector. None of this is a verdict on whether automation is worth it for any specific business, but it's a genuine, sourced picture of where each of these four industries currently sits, rather than the unlabeled "X% of businesses in this industry use AI" figures that circulate in vendor content. The compliance side of each of these sectors touches personal data in different ways, and we go through the general GDPR picture in [Is Your Business Data Safe with AI?](/blog/ai-data-safety-european-businesses) before this article gets into what's specific to each industry.

## A framework for finding where to start

This is a Kubera AI planning heuristic, not a universal benchmark, meant to help identify a starting point within any of these four industries rather than treat "automate the business" as a single decision. If you're still deciding what belongs on the shortlist in the first place, [7 Business Processes Every Service Business Should Automate First](/blog/business-processes-to-automate-first) is the broader starting map, and [How to Choose Your First AI Automation Project](/blog/how-to-choose-first-ai-automation-project) covers how to pick the first build once you have that list.

The Kubera Vertical Automation Priority Framework plots any candidate task on two axes: how repetitive and high-volume it is, and how regulatorily sensitive it is.

- High volume, low sensitivity: the strongest starting point in any of these four industries. Appointment scheduling, routine status updates, basic document collection. Automate first.
- High volume, high sensitivity: worth automating, but with a human review step built in rather than full autonomy. Insurance pre-screening in dental, lead qualification involving financial details in real estate, first-pass data entry in accounting.
- Low volume, low sensitivity: rarely worth the setup cost on its own, though it can piggyback on infrastructure built for a higher-volume task.
- Low volume, high sensitivity: leave this with a person. The judgment and liability involved usually outweigh any time saved.

This axis, task volume and regulatory sensitivity, matters far more than industry labels alone. A high-volume, low-sensitivity task in any of these four sectors is a reasonable starting point; a low-volume, high-sensitivity one generally isn't, regardless of which industry it sits in. If you're weighing this against cost and expected payback, [How to Measure ROI from AI Automation](/blog/how-to-measure-roi-ai-automation) is the right companion framework.

### Dental practices

The clearest, most consistently discussed automation opportunity in dental practices is front-desk and scheduling work: appointment booking, confirmation, rescheduling, and recall outreach to patients due for a checkup. These are high-volume, largely predictable interactions, and they tend to be the first thing dental practices automate, generally through a voice agent or chat-based booking system connected to the practice management software, rather than a full clinical AI deployment. For the phone side of that workflow, see [Voice AI Agents for European Businesses](/blog/voice-ai-agents-european-businesses).

The compliance picture here is genuinely stricter than in the other three industries, because dental records involve health data, a special category under GDPR. Processing health data requires both an appropriate lawful basis under Article 6 and an applicable condition under Article 9(2), such as explicit consent where appropriate or another condition relevant to the specific healthcare context, not consent alone by default. This article does not offer GDPR or medical-compliance guarantees for dental or healthcare automation, and any deployment touching patient health data needs review by someone qualified in both GDPR and the relevant national healthcare regulation, which varies by EU member state.

| Task | Typical fit for automation | Compliance consideration |
| --- | --- | --- |
| Appointment scheduling and confirmation | Strong, high volume, low judgment required | May involve ordinary personal data, but appointment details can also reveal health information depending on what is collected |
| Recall and reactivation outreach | Strong, repetitive and high volume | Needs a documented legal basis for outreach messaging |
| Insurance or treatment plan pre-screening | Moderate, useful with human review | Touches health data, Article 9 applies |
| Clinical diagnosis or treatment recommendations | Not a fit for general business automation | Regulated medical decision-making, outside this article's scope entirely |

Illustrative scenario, not a specific Kubera client: a multi-chair dental practice automates appointment booking and recall outreach through a voice agent connected to its scheduling software, with clear disclosure that callers are speaking with an automated system. Insurance pre-screening remains automated up to a point, then hands off to front-desk staff for anything involving a judgment call. This pattern, automate the high-volume scheduling layer, keep a human in the loop for anything touching health data specifics, is the one that shows up most consistently across dental automation deployments.

### Real estate

Real estate automation tends to concentrate around lead response and qualification: responding quickly to inbound property inquiries, scheduling viewings, and following up with prospects who haven't converted yet. Speed matters more here than in most industries, since a slow response to a property inquiry often means the prospect has already contacted a competing agency.

The compliance detail specific to real estate that's easy to miss: under the EU anti-money-laundering framework, estate agents are among the categories of obliged entities, carrying due diligence and reporting obligations on certain transactions, separate from GDPR, with the exact scope and implementation depending on the transaction type and applicable national rules, including a specific threshold that applies to higher-value rental intermediation. This doesn't block using AI for lead response or scheduling, but it does mean an automation workflow shouldn't be designed as if real estate were a purely marketing-and-scheduling business. Any part of the process touching buyer identity verification or transaction due diligence sits with the AML obligations specifically, not general data protection alone.

| Task | Typical fit for automation | Compliance consideration |
| --- | --- | --- |
| Inbound inquiry response and viewing scheduling | Strong, high volume, time-sensitive | Standard GDPR, consent for marketing follow-up |
| Lead qualification and follow-up sequencing | Strong, repetitive | Standard GDPR |
| Buyer identity verification or due diligence support | Not a fit for general automation without specific compliance design | Covered by EU AML obliged-entity rules, with specifics depending on transaction type |
| Property description and listing generation | Moderate, useful as a drafting aid | Advertising and consumer protection rules on accuracy still apply to the final listing |

Illustrative scenario, not a specific Kubera client: a mid-size real estate agency automates first-response messaging and viewing scheduling for inbound inquiries across its listings, with a person still handling every buyer conversation once a viewing is booked. The automation compresses response time from hours to minutes without touching any part of the transaction that falls under AML due diligence.

### Accounting and bookkeeping firms

Accounting automation concentrates on the parts of the workflow that are genuinely repetitive: document collection from clients, first-pass data entry and categorization, routine client communication about missing documents or upcoming deadlines, and structured reporting. It's less commonly used, and for good reason, for judgment calls: tax positions, audit opinions, or anything requiring professional sign-off.

Accountants in most EU countries carry professional confidentiality obligations, and auditors, external accountants, and tax advisers are also covered by the EU anti-money-laundering framework as obliged entities. The exact obligations, professional confidentiality rules, and implementation details depend on the specific services provided and applicable national rules, so this is worth confirming against your own national accounting regulator rather than assumed to be uniform across the EU. As with dental, this article does not offer legal or regulatory compliance guarantees for accounting automation.

| Task | Typical fit for automation | Compliance consideration |
| --- | --- | --- |
| Document collection and reminder sequencing | Strong, high volume, low judgment | Standard GDPR |
| First-pass data entry and categorization | Strong, with review before finalization | Standard GDPR, accuracy remains the firm's responsibility |
| Routine client status updates | Strong | Standard GDPR |
| Tax position judgment or audit sign-off | Not a fit for automation | Professional liability sits with the qualified accountant, not the tool |

Illustrative scenario, not a specific Kubera client: a mid-size accounting firm automates document collection reminders and first-pass categorization of client receipts ahead of tax season, with every categorized entry reviewed by a bookkeeper before it enters the client's books. The automation reduces the manual chasing that consumes the most staff time during peak season, without touching the judgment calls that carry professional liability.

### E-commerce

E-commerce automation is the most mature of the four, largely because the underlying tasks, customer support, order status inquiries, cart recovery, and product recommendations, are naturally high-volume and well-suited to structured automation. It's also the industry where the EU's consumer protection framework applies most directly and continuously, since every automated customer interaction is still a commercial communication subject to the same rules as a human-staffed one.

Several distinct compliance layers apply to e-commerce automation, and it's worth keeping them separate rather than treating them as one general obligation. Consumer protection rules govern how automated systems can present pricing, availability, and returns information, the same standard that applies to a human-staffed process. Marketing automation specifically intersects with ePrivacy rules on consent for tracking and electronic communications, a separate framework from GDPR that's worth checking alongside it. Where a customer-facing chat or voice tool interacts directly with people, the EU AI Act's Article 50 transparency duty is the relevant obligation for disclosing that they're talking with an AI system, not a general e-commerce rule. The EU's Digital Services Act adds further transparency and accountability obligations, but only for businesses that fall within its specific scope, generally online platforms and intermediary services rather than every online store by default, so whether it applies to a given e-commerce business depends on the specific service it provides, not the fact that it sells online.

| Task | Typical fit for automation | Compliance consideration |
| --- | --- | --- |
| Order status and shipping inquiries | Strong, high volume, low judgment | Standard GDPR |
| Cart recovery and marketing follow-up | Strong, but needs a documented legal basis | Electronic marketing rules under ePrivacy and applicable national law; consent or another permitted basis may depend on the channel and circumstances |
| Product recommendations | Strong | Standard GDPR, plus accuracy expectations under consumer protection rules |
| Pricing, returns, or legal-notice generation | Moderate, needs review before publishing | Consumer protection rules on accuracy apply to the final output |

Illustrative scenario, not a specific Kubera client: a mid-size e-commerce retailer automates order-status replies and abandoned-cart follow-up messaging, with a documented legal basis under ePrivacy for the marketing messages and human review of any pricing or promotional copy the automation drafts before it goes live. The support-side automation handles the bulk of routine inquiry volume, while judgment-heavy customer complaints route to a person.

## For context: how this looks in the US market

Since much of the automation content for these four industries is written from a US vantage point, it's worth being explicit about that rather than letting it blend into claims about Europe. Across all four sectors, US case studies concentrate on the same pattern: high-volume, structured, low-judgment tasks, scheduling, routine follow-up, first-pass document handling, automated first. Staffing shortages in sectors like dental and accounting are frequently cited as a driver of faster US adoption specifically in front-office and administrative roles, and e-commerce automation in the US has been pushed by the same customer-expectation pressure toward instant response that applies in Europe.

None of that automatically transfers to a European business. Regulatory frameworks differ meaningfully, GDPR and the EU AI Act have no direct US equivalent, and the AML obliged-entity status that applies to European real estate and accounting firms works differently under US rules. US adoption patterns are a useful directional signal for which tasks tend to automate well, not evidence of what compliance a European business in the same industry needs to meet.

## FAQ

**Which of these four industries has the clearest automation ROI?** E-commerce tends to have the most mature, well-documented automation patterns, since its core tasks are naturally high-volume and low-judgment. That doesn't mean it has the highest ROI for every business, the right starting point depends on your own task volume and regulatory sensitivity, not the industry label alone.

**Is AI automation GDPR-compliant for dental practices?** This isn't something any article can guarantee, since it depends on the specific system, data flow, and legal basis used. Dental data involves special-category health data, which requires both an appropriate lawful basis under GDPR Article 6 and an applicable condition under Article 9(2), not consent alone by default. Any deployment touching patient health data needs review by someone qualified in GDPR and the relevant national healthcare regulation.

**Do real estate agents need to worry about anything beyond GDPR when automating?** Yes. Under the EU anti-money-laundering framework, estate agents are among the categories of obliged entities, which is separate from and in addition to GDPR, with the exact scope depending on the transaction type and applicable national rules. Automation touching buyer identity verification or transaction due diligence needs to account for this specifically.

**Can accounting firms automate client communication without breaching confidentiality?** Routine communication, document requests, deadline reminders, status updates, is generally a reasonable fit. Anything involving client financial detail or judgment calls needs the same professional confidentiality consideration it would get from a person, and AML obligations may also apply depending on the specific service and country.

**What's the safest place to start in any of these four industries?** Look for tasks that are both high-volume and low-sensitivity: scheduling, routine reminders, first-pass status updates. These show up as a strong starting point across all four industries and carry the least compliance complexity to get right.

**Does the EU AI Act apply to automation in these industries?** For most of the automation described here, customer-facing chat or voice tools, the main relevant obligation is the Article 50 transparency duty, informing people they're interacting with an AI system where it isn't already obvious. We cover this in more depth in our [EU AI Act 2026: What SMBs Actually Need to Do Now](/blog/eu-ai-act-smb-compliance-2026). High-risk obligations under the Act are unlikely to apply to most of the tasks described in this article, though hiring-related automation in any of these industries would need a closer look.

**Is e-commerce automation different from other customer service automation?** The underlying tools are often similar, but e-commerce carries specific additional layers: consumer protection rules on how automated systems present pricing and product information, and ePrivacy consent requirements for marketing automation like cart-recovery messaging.

**Should a small practice or firm in any of these industries bother with automation?** The right lens is task volume and repetition, not company size. A small dental practice or accounting firm with a high volume of similar, predictable interactions can see real value; a larger one with mostly varied, judgment-heavy work may get less out of the same automation.

**Which of these four industries has the strictest compliance requirements?** Dental is one of the most compliance-sensitive of the four because health data receives special-category protection under GDPR. Real estate and accounting add substantial AML and professional obligations of their own, so the practical compliance burden still depends on the workflow and jurisdiction.

**How is this different from general business process automation content?** General automation content usually treats every business as interchangeable. The compliance layer, GDPR special categories for health data, AML obliged-entity status for real estate and accounting, consumer protection and ePrivacy for e-commerce, genuinely differs by industry, and getting that wrong is a bigger risk than picking the wrong software.

If you're trying to work out which tasks in your specific practice, agency, firm, or store are worth automating first, and what compliance actually applies to your situation, that's exactly the kind of assessment worth doing before committing to a build. If your broader automation readiness is still fuzzy, [AI Automation Readiness: Is Your Business Ready?](/blog/ai-automation-readiness) is the right checkpoint before you spend.

[Discuss your automation project →](/contacts)
