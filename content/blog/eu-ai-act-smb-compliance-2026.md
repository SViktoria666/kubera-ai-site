---
title: "EU AI Act 2026: What SMBs Actually Need to Do Now"
slug: "eu-ai-act-smb-compliance-2026"
description: "A lot of business owners heard that the EU AI Act's deadline was pushed back and assumed the whole thing can wait until 2027. That assumption is only partly right, and the part that's wrong is the part most likely to affect a business already running AI tools today."
seoTitle: "EU AI Act 2026: What SMBs Actually Need to Do Now"
metaDescription: "The EU AI Act deadline moved. Here is what changed, what still applies from August 2, 2026, and what your business can safely ignore."
date: "2026-08-07"
publishedAt: "2026-08-07"
tags: ["eu ai act", "compliance", "gdpr", "smb", "ai automation", "transparency"]
status: "published"
language: "en-GB"
category: "AI Automation"
---

# EU AI Act 2026: What SMBs Actually Need to Do Now

A version of this conversation has been happening in a lot of European businesses this year. Someone reads that the EU AI Act's high-risk rules got delayed by more than a year, and the takeaway becomes: we can put this off until 2027, no need to think about it now.

That conclusion feels reasonable. It is also incomplete, and the gap between "delayed" and "fully off the table" is exactly where a business can end up out of compliance without realizing it. The rules that got pushed back are the heaviest ones, built for hiring tools, credit scoring, and biometric identification. But two other obligations, ones far more likely to touch a typical service business running a chatbot or using AI tools day to day, were never delayed at all. One of them has technically applied since February 2025.

This article sorts out what actually changed, what is still due on schedule, and what that means in practice if you are running or planning AI automation this year.

## What changed, and what didn't

In November 2025, the European Commission proposed a set of amendments to the AI Act known as the Digital Omnibus on AI. Those amendments were adopted and entered into force on 27 July 2026, according to the European Commission's AI Office page. The centerpiece is a postponement of the high-risk system rules, originally due 2 August 2026, now pushed to 2 December 2027 for most categories.

What the Omnibus did not touch: the AI literacy duty, in force since February 2025, and the transparency duty, due on the original 2 August 2026 date. Those apply to a much wider slice of everyday business automation than the high-risk tier ever did.

| Obligation | Original deadline | Deadline after the Digital Omnibus | Typically relevant to SMB automation |
|---|---|---|---|
| Prohibited AI practices | 2 February 2025 | Unchanged | Rarely - covers manipulation and social scoring, not typical business automation |
| AI literacy duty, Article 4 | 2 February 2025 | Unchanged | Yes - applies to any staff using AI tools in their work |
| Transparency duty, Article 50 | 2 August 2026 | Unchanged | Yes - applies whenever a customer interacts with an AI system, such as a chatbot or voice agent |
| General-purpose AI model obligations | 2 August 2025 | Unchanged | Indirect - mainly affects the labs building the models, not businesses using them |
| High-risk systems, Annex III | 2 August 2026 | 2 December 2027 | Rare - mainly hiring, credit scoring, and biometric identification tools |
| High-risk AI embedded in regulated products, Annex I | 2 August 2027 | 2 August 2028 | Rare - medical devices, industrial machinery, vehicles |

The row generating most of the anxious headlines, high-risk Annex III systems, is the one that just moved by sixteen months. The two rows most likely to touch an ordinary service business were never on that clock.

## What this means if you're planning AI automation in 2026

If your business is building or expanding AI automation this year, the practical takeaway is that the postponement changes very little about what to actually do. A customer-facing chatbot or voice agent still needs to disclose that it is automated, starting now, not in 2027. Staff using AI tools still need a basic, documented understanding of what those tools do and where their limits are, a requirement that has technically been in force for over a year already. The parts of the Act that were delayed mostly concern a narrow set of use cases, hiring decisions, credit scoring, biometric identification, that most service businesses were never going to build in the first place.

We treat this the same way we treat any operational readiness question: figure out which obligations genuinely apply before scoping the build, not after it ships. That's a smaller exercise than most compliance checklists make it sound, and it usually takes less time than picking the automation platform.

## A quick way to check what applies to you

| If your business... | Then you probably need... |
|---|---|
| Uses ChatGPT, Claude, or similar tools internally | AI literacy documentation, Article 4 |
| Runs a customer-facing AI chatbot | A transparency notice, Article 50 |
| Uses an AI voice agent for calls | A spoken disclosure at the start of the call, Article 50 |
| Automates CV screening or candidate ranking | A closer look at Annex III high-risk rules |
| Uses AI for scheduling, internal workflows, or content drafting | AI literacy documentation only, in most cases |
| Uses AI in credit decisions or biometric identification | Full Annex III review, deadline now 2 December 2027 |

For most businesses running customer service, scheduling, or workflow automation, the honest answer lands in the top rows of that table, not the bottom ones.

## A more structured way to sort it out

The table above covers the common cases. For anything less obvious, we use a short filter with clients to get to a working answer without wading through the Act's full risk taxonomy. This is a Kubera AI planning heuristic, not a formal legal test, and it is not a substitute for legal advice on a specific system.

The Kubera AI Act Applicability Filter asks four questions, in order:

Are you building or selling an AI system, or using one someone else built? Most SMBs are deployers, not providers. Providers, the companies developing and placing AI systems on the market, carry the heaviest obligations.
Does any AI system in your business make or materially shape a decision about a person's access to a job, credit, education, or an essential public service? If the honest answer is no, the high-risk tier almost certainly does not apply.
Does any AI system interact directly with customers or the public in a way where they might not immediately realize they are dealing with AI? If yes, the Article 50 transparency duty applies now, independent of everything else on this list.
Is anyone on your team actually using AI tools day to day? If yes, the Article 4 AI literacy duty already applies to you, whether or not it has been written down anywhere.

## The obligation almost everyone already has and hasn't documented

Article 4 requires that staff and anyone acting on a company's behalf have a sufficient level of AI literacy to use AI systems responsibly, understanding their capabilities and limitations. This has applied since February 2025, and it was not affected by the Digital Omnibus.

In practice, for most SMBs this does not mean formal certification. It typically means being able to show, if asked, that the business has a basic, written understanding of which AI tools it uses, what they are used for, and who is responsible for checking their output before it reaches a customer. A short internal document naming the tools in use, their purpose, and an accountable person is generally treated as reasonable evidence of this, though the exact bar has not been tested extensively in practice yet.

## The obligation that lands on schedule this August

Article 50 requires that where people interact with an AI system, and it is not obvious from the context that they are doing so, they must be informed clearly and at the latest at the point of first interaction. Unlike the high-risk rules, this was not part of the Digital Omnibus delay.

For a business running a chatbot, a voice agent answering the phone, or automated outbound messages, this generally translates into something simple: a short, upfront statement that the customer is speaking with an automated system. For a voice agent, that typically means the first sentence of the call. For a chat widget, it typically means a label near the input box rather than something buried in a terms page. It does not require a legal disclaimer of any particular length, but it does need to happen before or at the first interaction, not after.

This is also the piece of the Act most likely to matter for anything Kubera builds involving AI agents that talk to customers directly, whether through chat or voice.

## Why the high-risk tier rarely applies to typical SMB automation

The Annex III high-risk categories cover a specific list: biometric identification, critical infrastructure, education and vocational training access, employment and worker management, access to essential services including credit scoring, law enforcement, migration and border control, and the administration of justice. If none of your automated workflows touch one of these areas directly, in a way that materially affects a decision about a person, the high-risk obligations were unlikely to apply to you even before the December 2027 postponement.

Where this does matter is automation touching hiring. An automated CV screening or candidate ranking workflow is a plausible high-risk use case under Annex III, now with a compliance deadline of 2 December 2027 rather than 2 August 2026. The European Parliament's Think Tank briefing on the Digital Omnibus makes clear this is a deferral, not a removal, of the obligation. The sensible response to more time is generally to keep building toward the requirement, not to set it aside.

## Penalties, and why the SME structure matters

The Act carries a tiered penalty structure, with the highest tier reserved for prohibited practices and reaching well into the tens of millions of euros or a percentage of global turnover for large organisations. For SMEs and startups, the Act applies the lower of the fixed amount or the percentage, rather than defaulting to the higher figure that applies to large enterprises, alongside simplified technical documentation requirements in some categories.

None of this changes the practical priority for most SMBs, which is the transparency and literacy duties already in force, not the high-risk penalty structure that will matter mainly to businesses building hiring, credit, or biometric tools.

## Where this overlaps with GDPR

The AI Act and GDPR are separate regulations, and compliance with one does not automatically satisfy the other. Where an automated workflow processes personal data, GDPR's existing requirements, including the controller-processor relationship under Article 28 where a third-party AI provider is involved, continue to apply on top of anything the AI Act requires. We go into that overlap in more depth in [Is Your Business Data Safe with AI?](/blog/ai-data-safety-european-businesses), which is worth reading alongside this one if your automation handles customer data.

This article is not legal advice. The Digital Omnibus amendments are recent, and guidance from national authorities is still developing in several member states. For any workflow touching hiring, credit, or biometric data specifically, a conversation with a lawyer familiar with the current text is worth the cost before deployment, not after.

## A short checklist for this quarter

Write down which AI tools your business actually uses, what each is used for, and who owns oversight of the output. This addresses the Article 4 literacy duty directly.
If any customer-facing workflow uses a chatbot, voice agent, or AI-generated messaging, add a clear, upfront statement that the customer is interacting with an automated system.
Check whether any current or planned automation touches hiring, credit decisions, or biometric identification. If so, treat the December 2027 deadline as a planning horizon, not a reason to deprioritize it.
Confirm your AI vendors, including any workflow or model providers, have published their own AI Act positioning. You remain responsible for how you use their tools even if you did not build the underlying model.

This kind of gap-mapping is close to what we walk through in the [Kubera Readiness Audit](/blog/ai-automation-readiness) before scoping a new automation project, since compliance readiness and operational readiness tend to surface the same documentation gaps.

## FAQ

**Does the EU AI Act apply to my small business if I only use tools like ChatGPT or Claude?** Yes, in the sense that you are a deployer under the Act. The obligations on deployers are narrower than those on the labs building the models, but the AI literacy duty and, where relevant, the transparency duty still apply to how you use those tools.

**Is the August 2, 2026 deadline still real?** Partly. The transparency duty under Article 50 and the AI literacy duty under Article 4 remain on their original timelines. The high-risk system obligations under Annex III, which generated most of the deadline coverage, were postponed to 2 December 2027.

**What is the Digital Omnibus, and did it cancel the AI Act?** No. It is a targeted amendment package, adopted and in force since 27 July 2026, that mainly postpones the high-risk compliance timeline and makes some other simplifications. The core structure of the Act, including the prohibited practices and transparency rules, is unchanged.

**Do I need to register anywhere if I am not building high-risk AI?** Generally no. Registration and conformity assessment obligations apply to high-risk systems and their providers. Most SMBs using AI for customer service, scheduling, or internal workflows fall outside that tier.

**What counts as a high-risk AI system for a typical SMB?** The most common way an SMB touches this category is automation involved in hiring or candidate screening. Most customer service, content, and workflow automation does not fall into Annex III.

**Do I need to tell customers they are talking to an AI chatbot?** Yes, under Article 50, if it is not already obvious from the context. This applies now, not from a delayed date.

**What is the AI literacy requirement, and how do I comply with it?** It requires that people using AI systems on the business's behalf have a reasonable understanding of what the tool does and its limitations. In practice, most SMBs address this with a short internal document listing tools, purposes, and an accountable owner.

**What are the penalties if my business is not compliant?** The Act uses a tiered structure with reduced caps for SMEs and startups compared to large enterprises. The heaviest penalties apply to prohibited practices and high-risk violations, not to gaps in documentation for lower-risk use.

**Does the AI Act apply to me if my business is based outside the EU?** Yes, if your AI system's output is used in the EU or you place a system on the EU market, the Act applies regardless of where your business is headquartered, similar to how GDPR reaches beyond EU borders.

**How does the AI Act relate to GDPR?** They are separate regulations that often apply to the same automation. Personal data processed by an AI system remains subject to GDPR independently of whatever the AI Act requires.

**Do voice AI agents need a different kind of disclosure than chatbots?** The underlying duty is the same, informing the person at first interaction, but the practical delivery differs. A voice agent typically needs a spoken statement early in the call rather than a written label.

**Where can I get authoritative updates as this keeps changing?** The European Commission's AI Act policy page is the primary source and is updated as implementation progresses. Guidance from national authorities is still developing in several member states as of mid-2026.

If you are not sure which of these obligations actually touch your current or planned automation, that is exactly the kind of question worth working through before a project starts, not after it ships.

[Discuss your automation project →](/contacts)
