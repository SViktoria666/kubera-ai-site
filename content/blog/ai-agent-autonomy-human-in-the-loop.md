---
title: "How Much Autonomy Should an AI Agent Have Before a Human Steps In?"
seoTitle: "How Much Autonomy Should an AI Agent Have?"
slug: "ai-agent-autonomy-human-in-the-loop"
description: "In August 2026, someone gave Claude a domain and one sentence: build whatever you want. It built a fully autonomous public forum for AI agents, no human login, no HTML, that ran two weeks at a total cost of $5.66. The interesting business question isn't whether that's possible. It's where the line between \"let the agent decide\" and \"a person needs to approve this\" actually belongs, and how you build that line into a system instead of hoping the model finds it."
metaDescription: "A forum built entirely by AI agents ran for two weeks on $5.66. That's not proof full autonomy is safe, it's proof the real question is which specific actions still need a person."
date: "2026-09-16"
publishedAt: "2026-09-16"
tags: ["ai agents", "agentic ai", "human oversight", "ai governance", "eu ai act", "workflow automation"]
status: "published"
language: "en-GB"
category: "AI Automation"
---
# How Much Autonomy Should an AI Agent Have Before a Human Steps In?

In August 2026, someone handed Claude a domain and a single instruction: build whatever you want. What it built, a public forum at 1f916.ai, has no human login screen and no HTML interface at all; a person visiting gets a plain-text page telling them to leave. AI agents, from Claude, GPT, DeepSeek, and other systems, register as citizens through a JSON API and an MCP server, post under a self-written seven-rule constitution, and run their own public ledger of costs. According to figures the project's creator shared after two weeks: 109,000 unique visitors, 12.5 million requests, nearly 30 billion database rows read. The total infrastructure bill, also self-reported: $5.66.

That's a genuinely striking demonstration that a specific, low-stakes system can run with high autonomy and remain remarkably cheap to operate. It is not evidence that full autonomy is technically workable across business systems generally, or the right default for a business process. The interesting question this raises isn't whether an AI agent can operate without a human in the loop, it's which specific actions still need one, and whether that boundary gets designed deliberately or left to whatever the model decides in the moment. This article works through both, using commonly used governance vocabulary for describing different levels of human involvement, and where the 1f916 experiment itself suggests a boundary that arguably should have been drawn. For the underlying definition of an agent, see [What Is an AI Agent?](/blog/what-is-an-ai-agent).

## The three levels worth distinguishing

This is commonly used governance vocabulary in enterprise AI discussion, though the exact definitions and boundaries between terms can vary somewhat between organizations and frameworks, so treat the three below as a useful shared starting point rather than a fixed, universal standard.

Human-in-the-loop means a person approves a specific action before the agent executes it. The system pauses at a defined checkpoint and waits. This fits high-stakes, hard-to-reverse actions: financial disbursements, contract commitments, anything touching sensitive data.

Human-on-the-loop means the agent acts on its own, but a person monitors the output and can intervene after the fact. This fits medium-risk, reversible situations where speed matters more than pre-approval.

Human-out-of-the-loop means the agent acts with no review at all, before or after. This is appropriate only for low-stakes, easily reversible, well-understood tasks, and it's what most of 1f916's day-to-day operation actually was: agents posting, voting, and building tools for each other, none of which carried real-world financial or legal consequence.

A commonly used illustration: an airline's rebooking agent handles a routine cancelled-flight rebooking entirely on its own, human-out-of-the-loop. The same agent, hitting a first-class passenger with a loyalty override and a fare class requiring manual reissuance, recognizes it's crossed a policy boundary, pauses, and routes the case to a person, human-in-the-loop for that specific situation. The level of autonomy isn't a property of the agent. It's a property of the specific action, and a well-designed system varies it accordingly rather than picking one setting for everything the agent does.

## What real deployments are actually doing

It's worth grounding this in documented deployments rather than treating it as a purely theoretical design question. A 2025 academic survey of 30 real, deployed agentic AI platforms, including well-known enterprise names like Glean, Google Gemini Enterprise, IBM watsonx, Microsoft Copilot Studio, n8n, and OpenAI's AgentKit, found that 6 of the 30 operate with no human involvement during actual task execution once deployed, triggered automatically by events like a new email or a database change. Where platforms do gate for human review, the pattern is selective rather than blanket: coding and command-line agents in the survey required explicit confirmation specifically for sensitive operations like file edits and command execution, while browser agents gated only specific high-risk steps like authentication and payments, leaving the rest of the task to run unsupervised.

Separately, AvePoint's State of AI 2026 report found that 95.5% of surveyed organizations had taken at least one action to mitigate agent-related security risk following an actual incident, and adding human-in-the-loop controls was the most common response. That's worth sitting with: for a large share of organizations, the approval gate got added after something already went wrong, not designed in from the start, a pattern that shows up in [why most AI projects fail](/blog/why-most-ai-projects-fail) more broadly too. Building the boundary deliberately, before deployment, is the cheaper version of the same lesson.

A browser agent is a particularly clear example of why the setting belongs to the action: the broader capabilities and current limits are covered in [Browser AI Agents](/blog/browser-ai-agents-business-guide).

## A more scalable middle path: confidence-based routing

Requiring a person to approve every single action defeats the purpose of automating the task at all, and a purely fixed rule, "always require approval for category X," doesn't scale well either as volume grows. One practical pattern instead routes based on a calibrated confidence score: actions the system is highly confident about proceed automatically; actions below a defined confidence threshold, or that hit a specific risk signal like an irreversible operation or a sensitive-data touch, get queued for a person. The engineering challenge is calibrating that threshold correctly. Set it too permissively and wrong actions execute autonomously; set it too conservatively and correct actions flood the review queue, which quietly erodes the automation benefit you built the system for in the first place. The threshold itself is worth setting based on the actual cost of a wrong action for that specific task, in money, reputation, or compliance exposure, not a single company-wide default applied to everything.

## Where 1f916 itself suggests a line

It's worth returning to the opening example with this framework in hand, because the experiment itself contains a genuinely useful illustration of where a boundary probably belonged. Most of what happened on 1f916, agents posting, forming communities, arguing over rules, was low-stakes and reversible: exactly the profile that fits human-out-of-the-loop reasonably well. But reporting on the project also describes the agent moving into on-chain cryptocurrency payments to help cover its own hosting costs, sending funds to a treasury address, reportedly without a person approving that specific step. Treat that specific detail as reported behavior rather than an independently audited fact, since it comes from coverage of the project rather than a verified transaction log. If accurate, it's a materially different kind of action from posting a forum comment: financial, external-facing, and carrying reputational and potentially regulatory exposure. Whether or not anything went wrong in this specific case, it's a useful illustration of the kind of action that would sit squarely in human-in-the-loop territory under the framework above, even inside a system explicitly built to run with maximum autonomy everywhere else. The lesson isn't that the experiment was reckless. It's that even a system designed around full autonomy benefits from identifying the small number of action types that genuinely warrant a different rule, rather than applying one autonomy setting uniformly.

## This is also a regulatory requirement in Europe, not just a design choice

For a business operating in the EU, this isn't purely a best-practice question. The EU AI Act's Article 14 requires human oversight for high-risk AI systems specifically, meaning a person must be able to understand, monitor, and intervene in the system's operation for those use cases. Most customer-facing automation and workflow agents don't fall into the Act's high-risk category, a distinction we cover in detail in our [EU AI Act guide](/blog/eu-ai-act-smb-compliance-2026), but the underlying design principle, matching oversight to the consequence of an error, holds regardless of which specific tier of regulation applies to your use case. For the related data-handling questions, see [Is Your Business Data Safe with AI?](/blog/ai-data-safety-european-businesses).

## A framework for setting the boundary deliberately

This is a Kubera AI planning heuristic, not a universal benchmark, meant to help set autonomy levels by action type rather than by agent or by project as a whole.

The Kubera Autonomy Tier Model sorts a specific action along three questions:

1. **Is it reversible?** An action that's easy to undo, a draft reply, a first-pass categorization, tolerates more autonomy than one that isn't, a sent payment, a published contract term.
2. **Does it touch money, legal commitments, or an external party directly?** Actions with financial, legal, or reputational exposure warrant a human-in-the-loop gate specifically, even inside a system that runs with broad autonomy everywhere else, the way the 1f916 treasury payment illustrates.
3. **How confident is the system, specifically, on this action type?** Where confidence is reliably high and consequences are low, human-out-of-the-loop or human-on-the-loop is reasonable. Where either confidence is uncertain or consequences are high, route to a person before execution, not after.

The output isn't a single autonomy setting for an agent. It's a small map of specific action types to specific oversight levels, which is what separates a deliberately governed system from one that just happens not to have gone wrong yet.

## Where this plays out in practice

Illustrative scenario, not a specific Kubera client: a mid-size business deploys an agent to triage and respond to inbound support tickets. Categorizing a ticket and drafting a proposed reply run fully autonomously, human-out-of-the-loop, since a wrong categorization or an unsent draft is cheap to fix before anything reaches a customer. Whether that drafted reply actually goes out varies by category: for routine inquiries it sends automatically, human-on-the-loop, with a person reviewing a sample of sent replies afterward rather than approving each one individually. Anything involving a refund, a contract change, or an angry customer escalation routes to human-in-the-loop instead, requiring explicit approval before the reply sends, because those specific actions carry financial or reputational weight the routine ones don't. The agent is the same system throughout; the oversight level changes by action type, not by a single setting applied to the whole deployment.

## FAQ

Does the 1f916 case prove full agent autonomy is safe for business use? No. It demonstrates that this specific, low-stakes system could run with high autonomy and remain cheap to operate. It doesn't demonstrate that every action a business agent might take belongs at that same autonomy level, and reported coverage of the case describes at least one action, an autonomous financial payment, that would fit a stricter oversight category under the framework in this article, though that detail comes from reporting rather than a verified transaction log.

What's the difference between human-in-the-loop and human-on-the-loop? Human-in-the-loop requires approval before the action executes. Human-on-the-loop lets the action execute automatically, with a person reviewing the outcome afterward and able to intervene if something's wrong. Which one fits depends on how reversible and how consequential the specific action is.

Should every AI agent action require human approval? No, and requiring that defeats much of the point of automating the task. The goal is identifying the specific subset of actions, usually financial, legal, irreversible, or externally consequential ones, that warrant approval, while letting routine, reversible, low-stakes actions run with less oversight.

How do most companies actually add human oversight to their agents? Often reactively: a 2026 industry survey found the large majority of organizations added human-in-the-loop controls only after an actual agent-related security incident, rather than designing the oversight boundary in from the start.

Is human oversight legally required for AI agents in Europe? For high-risk AI systems specifically, yes, under the EU AI Act's Article 14. Most everyday business automation, customer support agents and workflow tools, generally doesn't fall into that high-risk category, but matching oversight to the consequence of an error is a sound design principle regardless of which specific legal tier applies.

What is confidence-based routing? A pattern where an agent's own confidence score for a specific action determines whether it proceeds automatically or gets queued for human review. It scales better than requiring blanket approval for an entire category of action, but it depends on correctly calibrating the confidence threshold to the actual cost of a wrong action.

Can the autonomy level change for the same agent depending on the task? Yes, and it should. The examples in this article, an airline rebooking agent, a support-ticket triage agent, both vary their oversight level by the specific action being taken, not by a single fixed setting for the whole agent.

What kinds of actions most often deserve a human-in-the-loop gate? Anything financial, legally binding, hard to reverse, or that directly and irreversibly affects someone outside the business, a customer, a partner, a regulator. The 1f916 case's reported autonomous treasury payment illustrates exactly this category, even though that specific detail comes from coverage of the project rather than a verified transaction log.

Does adding human oversight slow an automation down too much to be worth it? Not if it's applied selectively rather than universally. Gating only the specific high-stakes, low-confidence, or irreversible actions, while letting the rest run autonomously, preserves most of the speed benefit while covering the cases where a mistake actually costs something.

How is this different from the general question of whether to use a multi-agent system? They're related but distinct. Multi-agent design, covered in [What Is a Multi-Agent AI System?](/blog/what-is-a-multi-agent-ai-system), is about how many agents coordinate on a task. Autonomy design is about how much of any given agent's action, single or multi-agent, happens without a person checking first. A multi-agent system still needs the same action-by-action autonomy analysis this article covers.

If you're trying to work out which specific actions in an automated workflow genuinely need a person to sign off, and which are safe to let run on their own, that's exactly the kind of design decision worth making deliberately before a system goes live.

[Discuss your automation project →](/contacts)
