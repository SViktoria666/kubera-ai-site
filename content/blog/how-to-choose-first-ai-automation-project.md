---
title: "How to Choose Your First AI Automation Project"
slug: "how-to-choose-first-ai-automation-project"
description: "Knowing which processes are worth automating is one thing. Deciding which one to build first - when you have two or three credible candidates - is a different and harder question. This framework makes that decision systematic."
seoTitle: "How to Choose Your First AI Automation Project: A Decision Framework for Service Businesses"
metaDescription: "You have a shortlist of automation candidates. Now which one goes first? This scoring framework helps service business owners make that decision systematically before spending a euro on development."
date: "2026-08-03"
publishedAt: "2026-08-03"
tags: ["ai automation", "project selection", "service business", "roi", "workflow automation", "business systems"]
status: "published"
language: "en-GB"
category: "AI Automation"
---

# How to Choose Your First AI Automation Project

## This Article Picks Up Where the Process List Leaves Off

If you have already identified the processes in your business that are worth considering for automation - whether through experience, research, or the [7 Business Processes Every Service Business Should Automate First](/blog/business-processes-to-automate-first) - you have likely arrived at a shortlist. Two or three candidates that all seem reasonable. Maybe more.

Now the harder question: which one goes first?

This is not the same question as "which processes are worth automating." That question produces a list. This question requires a decision - one that takes your specific candidates, your specific business context, and your specific constraints, and produces a defensible answer with a clear rationale.

This article provides a scoring framework for making that decision. It is structured around five dimensions that reflect the factors most commonly associated with a successful first project. Each candidate on your shortlist gets scored; the scores produce a ranking; the ranking guides - but does not mechanically determine - your decision.

The goal is to move from instinct to a structured comparison you can explain, defend, and revisit.

## Why the First Project Shapes Everything That Follows

Every AI automation programme has to begin with a specific process. That first project does more than produce its own ROI - it shapes what comes next.

A well-executed first project generates three compounding assets:

Process documentation. Writing the complete specification for the first automation - every step, every decision branch, every exception and escalation - produces a document that is valuable regardless of what the system does. It captures institutional knowledge and creates a template for the second and third projects.

Integration infrastructure. The connections built for the first automation - CRM, booking system, communication channels, workflow platform - can be reused at lower marginal cost. The second automation is cheaper partly because the first established the plumbing.

Measurement discipline. The habit of baselining a process before deployment, and tracking performance against that baseline after, makes every subsequent ROI calculation more credible. For the full measurement approach, see [How to Measure ROI from AI Automation](/blog/how-to-measure-roi-ai-automation).

Starting with a simpler, well-chosen project can help an organisation build reusable infrastructure and operating discipline before attempting more complex automation. The most visible or most painful process on your shortlist is often not the most suitable first candidate - and this framework exists to make that determination systematic rather than instinctive.

A first automation project succeeds when the process is sufficiently clear, measurable, connected to the right systems, and low enough in operational risk to learn safely. The purpose of project selection is to identify that combination before development begins.

## The Kubera Project Selection Framework

The Kubera Project Selection Framework is a practical evaluation model developed to help service businesses compare candidate automation projects consistently. The criteria below combine process-design principles, implementation requirements, and practical planning considerations. They are guidance, not universal industry benchmarks.

Each candidate process is scored from 1 to 3 on five dimensions. The total score out of 15 determines the recommendation tier. The scoring supports judgment - it does not replace security, compliance, financial, or technical assessment.

Score each candidate independently before comparing.

### Dimension 1: Process Volume

What it assesses: Whether the process runs frequently enough that an improvement can be measured against a baseline within a reasonable evaluation period.

A process that runs twice a month may require many months of data before results are interpretable. A process that runs 200 times a month produces a signal much faster - and a faster signal means faster decisions about whether to expand, adjust, or revisit.

Score:

| Score | Description |
| --- | --- |
| 1 - Weak | Runs infrequently; a meaningful baseline would require an extended evaluation period |
| 2 - Partial | Moderate frequency; results are measurable but evaluation will take longer |
| 3 - Strong | Runs frequently enough that baseline comparison is straightforward within an initial evaluation period |

### Dimension 2: Process Documentation

What it assesses: Whether the correct logic for this process already exists in written, consistent form - and whether that form reflects how the process actually runs.

An automation system executes the specification it is given. If the process logic is undocumented, the specification has to be created before anything can be built - which is preparation work, not a blocker, but it adds time and scope. If different team members would describe the process differently, the specification work becomes larger still.

Score:

| Score | Description |
| --- | --- |
| 1 - Weak | Logic is not documented; significant disagreement or variation in how different team members describe the process |
| 2 - Partial | Steps are partially described; main path is documented but decision branches, exceptions, and edge cases are not |
| 3 - Strong | Process is fully specified: inputs, outputs, every decision branch, exceptions, and escalation paths are documented and consistently followed |

### Dimension 3: Measurability of Outcome

What it assesses: Whether there is a specific, primary metric the automation is intended to improve - and whether a clean baseline can be established before deployment.

A process without a measurable outcome cannot be evaluated. You will not know whether the automation is working, whether it justifies continuation, or what to improve. The business case for the next project rests on the evidence from the first.

Score:

| Score | Description |
| --- | --- |
| 1 - Weak | No clear primary metric; outcome is diffuse, difficult to attribute, or impossible to baseline independently |
| 2 - Partial | An indirect or proxy metric exists; attribution requires assumptions |
| 3 - Strong | A single, primary metric is directly attributable to this process, is measurable today without new systems, and can serve as a clean comparison baseline |

### Dimension 4: Risk Level

What it assesses: The operational consequence if the automation produces an incorrect output during the learning period - before the system has been fully validated.

Every new automation requires a supervised deployment phase where outputs are reviewed. The question is how costly it is if an error occurs before that review catches it. This dimension also determines how long and intensive the supervised deployment phase needs to be.

Score:

| Score | Description |
| --- | --- |
| 1 - Weak (High risk) | Actions are irreversible, involve sensitive communications, carry legal exposure, or errors could damage significant client relationships before being caught |
| 2 - Partial (Medium risk) | Errors may cause friction or require correction, but recovery is straightforward and the impact is limited |
| 3 - Strong (Low risk) | Errors are immediately visible, easily corrected, cause no lasting damage, and do not affect sensitive relationships or data |

For most smaller service businesses, a low-to-medium-risk process is usually the safer first candidate. High-risk processes are not inappropriate for automation - but they require more developed operational infrastructure, more mature integration tooling, and more experience with how the system behaves before expanding its autonomy.

### Dimension 5: Integration Readiness

What it assesses: Whether the systems this process touches have accessible, reliable connections - and whether the underlying data is clean enough to act on.

Integration gaps are a frequent source of scope expansion and implementation delay. A booking system that "should" have an API is different from one with a tested, documented API and confirmed access credentials. A CRM that "mostly" has good data is different from one whose fields are consistently populated and whose records are reliably up to date.

Score:

| Score | Description |
| --- | --- |
| 1 - Weak | Key systems have no API or require significant custom development; data quality issues require substantial pre-work |
| 2 - Partial | Most integrations are accessible but one or two require workarounds, additional development, or data preparation |
| 3 - Strong | All required integrations are available through standard connectors, credentials are confirmed, and data quality is sufficient to act on reliably |

For the platform comparison that underlies the integration decision - n8n, Make, Zapier - see [n8n vs Make vs Zapier](/blog/n8n-vs-make-vs-zapier).

## The Scoring Matrix

Once each candidate has been scored on all five dimensions, complete this matrix:

| Dimension | Candidate A | Candidate B | Candidate C |
| --- | --- | --- | --- |
| Volume (1-3) |  |  |  |
| Documentation (1-3) |  |  |  |
| Measurability (1-3) |  |  |  |
| Risk (1-3) |  |  |  |
| Integration readiness (1-3) |  |  |  |
| Total (5-15) |  |  |  |

Scoring tiers:

| Total score | Recommendation |
| --- | --- |
| 13-15 | Strong first-project candidate - proceed to full readiness assessment and implementation planning |
| 9-12 | Viable after defined preparation work - identify which dimensions scored low and address those gaps before building |
| 5-8 | Do not select as the first project - too many preparation requirements to manage alongside a first implementation |

Important qualifications:

A score of 13-15 indicates a strong candidate against these five dimensions. It does not mean the process is ready to automate without further assessment. Security review, compliance obligations, implementation cost, and technical feasibility still need to be evaluated.

A score of 5-8 does not mean the process should never be automated. It means other processes on the shortlist should be prioritised first, and preparation work should continue in parallel.

Where two candidates score equally, favour the one with higher documentation and measurability scores - these are the dimensions most directly linked to specification quality and evaluation rigour.

## Applying the Framework: Two Candidates, One Decision

This is an illustrative scenario reflecting the type of evaluation service businesses work through when comparing shortlisted candidates. It does not represent a specific Kubera AI client.

Business: A ten-person professional services firm with two candidate processes.

Candidate A: Proposal follow-up sequences. Partners send proposals and manually follow up inconsistently. Some follow up the same day; others wait a week or more. The business believes some proposals go cold through inattention rather than genuine disinterest.

Candidate B: New client onboarding sequence. When a client signs, a standard set of steps should happen: welcome message, document delivery, access setup, first check-in. Currently executed informally; quality depends on the account manager.

Scoring:

| Dimension | Candidate A - Proposal follow-up | Candidate B - Client onboarding |
| --- | --- | --- |
| Volume | 2 - ~30 proposals/month; moderate | 1 - ~8 new clients/month; lower frequency |
| Documentation | 1 - No defined follow-up logic; each partner does it differently | 2 - Steps exist in a shared document, but not consistently followed |
| Measurability | 2 - Proposal conversion trackable; attribution requires assumptions | 3 - Onboarding completion rate is directly trackable |
| Risk | 2 - Poorly timed follow-up may create friction | 3 - Welcome and document-delivery errors are low-stakes and immediately visible |
| Integration | 2 - CRM has proposal tracking but stages inconsistently updated | 3 - New client CRM trigger is reliable; email and task integrations are standard |
| Total | 9 | 12 |

The decision: Candidate B - client onboarding - is the stronger first candidate at 12 versus 9. Despite lower volume, it scores more consistently across the dimensions that most affect implementation reliability.

Candidate A (proposal follow-up) is a more commercially compelling problem to solve, but it requires documentation work (defining the correct follow-up logic), CRM data quality work (ensuring proposal stages are reliably updated), and attribution design (isolating the impact of follow-up timing from other conversion factors). It is a better second or third project, after the first has established the infrastructure and operating discipline.

## When No Candidate Clears the Threshold

If every candidate on your shortlist scores below 9, that is useful information rather than a problem. It typically means one of two things:

The processes need preparation work first. The most common preparation requirements are documentation (writing a complete process specification) and data quality (cleaning CRM records or resolving inconsistent field naming). Both have independent value regardless of whether automation follows. Once that work is done, re-run the framework.

The shortlist needs expanding. The candidates evaluated may not be the best automation starting points for the business. Revisiting [7 Business Processes Every Service Business Should Automate First](/blog/business-processes-to-automate-first) with fresh eyes may surface a more appropriate starting candidate that was initially overlooked.

Neither outcome means automation is not appropriate for the business. It means the starting point has not yet been identified.

## After the Decision: The First Steps

Once a candidate has been selected:

1. Document the process fully. Every step, every decision branch, every exception, every escalation path. This is the specification the automation will be built from. It should be reviewed by everyone who currently handles the process before any build begins.

2. Establish the baseline. Measure the current state of the primary outcome metric before any automation exists. If this requires manual counting or system queries, do that work before the build starts - not after.

3. Assess compliance requirements. Any process handling personal data subject to GDPR requires an appropriate controller-processor arrangement with AI providers, data minimisation in the automation design, and consideration of applicable electronic-marketing rules for outbound communications. Processes involving sensitive personal data, high-risk processing, or solely automated decisions with legal or similarly significant effects may require additional safeguards and potentially a Data Protection Impact Assessment before deployment. For the full compliance framework, see [Is Your Business Data Safe with AI?](/blog/ai-data-safety-european-businesses). [Implementation cost](/blog/how-much-does-ai-automation-cost) also needs to be understood before deployment.

4. Build with supervision first. New automations should begin with a controlled validation or supervised deployment phase appropriate to the risk level of the process. Remove approval gates step by step, as each step demonstrates consistent correct performance - not on a calendar schedule.

5. Maintain a shortlist of future candidates. While the first project is in supervised deployment, keep a ranked shortlist of the next candidates based on this framework. Do not commit full build capacity to the next implementation until the first has reached a defined stability threshold.

## Frequently Asked Questions

1. Do I need to score every process in my business, or just the obvious candidates? Start with your obvious candidates - the processes that already feel like they should be automated. If none of them clear the 9-point threshold, expand the shortlist using [7 Business Processes Every Service Business Should Automate First](/blog/business-processes-to-automate-first) as a reference for what well-suited candidates typically look like.

2. What if two candidates score the same total? Use the individual dimension scores to break the tie. Favour the candidate with higher scores on Documentation and Measurability - these dimensions are most directly linked to specification quality and the ability to evaluate results. If both are equal on those dimensions, choose the lower-risk candidate.

3. Should I start with the process that has the highest potential ROI? Not necessarily, and especially not for the first project. High-ROI processes are often high-ROI because they are complex, high-volume, and deeply integrated - characteristics that also make them harder to automate reliably as a first attempt. A more modest but well-chosen first project creates more durable value by building the operational foundation for what follows. For the ROI evaluation methodology, see [How to Measure ROI from AI Automation](/blog/how-to-measure-roi-ai-automation).

4. How long does the preparation work for a Dimension 2 score typically take? The preparation required depends on what is missing: a process that needs its decision logic documented is different from one requiring a full CRM data clean. The right question is whether the gap can be addressed within a proportionate preparation phase without requiring major process redesign. If it can, the preparation work is worth doing. If the preparation alone would be a multi-month project, another candidate may be a more practical starting point.

5. Can I use this framework for processes beyond the initial seven commonly recommended? Yes. The framework applies to any candidate process regardless of category. The five dimensions are process-agnostic - they assess structural characteristics that affect implementation success, not the nature of the work itself.

6. Who should complete the scoring - the business owner or a technical person? The operational dimensions - Volume, Documentation, Measurability, and Risk - can be assessed by whoever knows the process best, typically the business owner or operations lead. Integration readiness and implementation feasibility require technical validation before the final decision is made: API availability, data access, security requirements, and hosting considerations need verified, not assumed. A combined assessment across both perspectives produces the most reliable result.

7. What is the biggest risk if I choose the wrong first project? The direct financial cost of a misaligned first project matters, but a significant risk is the erosion of internal confidence and appetite to fund a better-selected second attempt. When an early project underperforms, the conclusion often drawn - sometimes incorrectly - is that AI automation does not work for this type of business. A well-chosen first project avoids that conclusion and builds the credibility that makes the next one easier to commission.

8. Is this framework compatible with the AI Automation Readiness Assessment? Yes, and the two are designed to work in sequence. The [AI Automation Readiness: Is Your Business Ready?](/blog/ai-automation-readiness) framework evaluates whether your business environment is ready to support automation in general - process documentation, data quality, ownership, integrations. The Kubera Project Selection Framework assumes that context and focuses specifically on comparing multiple candidate processes to identify which one goes first.

## Conclusion: A Decision, Not a Discovery

Choosing the first automation project is not primarily about discovering which process is most valuable. It is about deciding which process, given your current readiness, constraints, and shortlist, gives you the best combination of implementability, measurability, and compounding return on the operational assets the project creates.

The Kubera Project Selection Framework makes that decision structured. Score each candidate honestly. Follow the tiers. Take the preparation requirements seriously when a candidate scores below the threshold - the preparation work is not a delay, it is the project.

The first project does not need to be the most impressive one. It needs to be the one that builds the foundation for everything that follows.

## Working With Kubera AI

Kubera AI can help European service businesses work through the project selection decision - applying the scoring framework to their specific candidate processes, identifying where preparation work is needed, and scoping implementations with measurable outcomes defined before any development begins.

If you want to compare your shortlisted processes and identify the right starting point, we can help you run the evaluation before any budget is committed.

[Discuss your automation project →](/contacts)
