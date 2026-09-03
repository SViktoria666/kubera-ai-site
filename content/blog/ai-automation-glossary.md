---
title: "AI Automation Glossary for Business Owners"
slug: "ai-automation-glossary"
description: "A vendor call full of \"agentic RAG orchestration\" and \"fine-tuned multi-agent workflows\" isn't a sign you're behind, it's a sign the industry hasn't bothered to explain itself in plain language. Here's a working glossary of the terms that actually matter for a business owner evaluating AI automation."
seoTitle: "AI Automation Glossary for Business Owners"
metaDescription: "RAG, agentic AI, fine-tuning, open weight, controller-processor. A plain-language glossary of AI automation terms, written for business owners, not engineers."
date: "2026-08-26"
publishedAt: "2026-08-26"
tags: ["ai automation", "glossary", "rag", "agentic ai", "gdpr", "business systems"]
status: "published"
language: "en-GB"
category: "AI Automation"
---

# AI Automation Glossary for Business Owners

Sit through a few AI vendor calls and the jargon piles up fast: agentic AI, RAG, fine-tuning, open weight, orchestration, guardrails, context window. Some of it describes genuinely different technical approaches that matter for your decision. Some of it is marketing dressing on a fairly simple feature. Not knowing which is which makes it hard to ask the right questions, or to notice when a vendor is using a precise-sounding term loosely.

This isn't a small problem. Eurostat's most recent enterprise survey found that among EU businesses that had considered using AI but hadn't adopted it, the most common reason, cited by 70.9% of them, was a lack of relevant expertise, ahead of legal uncertainty and data protection concerns. A working vocabulary is a genuine, if unglamorous, part of closing that gap.

This glossary is organized by category rather than alphabetically, so related terms sit near each other. Each entry is written for a business owner deciding whether and how to automate something, not for an engineer building it.

## How to use this glossary in a vendor conversation

Before the definitions, a short practical note. When a vendor or consultant uses one of these terms, three questions tend to cut through most of the jargon: What does this term actually mean my system will or won't do? What's the simpler alternative, and why isn't that being used instead? What does this specific capability change about the cost or timeline? A precise term used correctly usually has a clear, one-sentence answer to all three. A term being used mostly for effect usually doesn't.

## The basics: how AI models work

**Large language model (LLM).** The underlying AI system trained on large amounts of text that generates human-like language. Claude, GPT, and Gemini are all LLMs. Most "AI automation" tools are built on top of one or more LLMs rather than being a fundamentally different kind of technology.

**Token.** The basic unit an LLM processes text in, roughly three-quarters of a word on average in English, though this varies. Model pricing is generally quoted per million tokens, and understanding this is the difference between a vendor's pricing table making sense or not.

**Context window.** The maximum amount of text, measured in tokens, a model can consider at once, including both what you send it and what it generates back. A larger context window lets a model work with longer documents or conversations without losing track of earlier information.

**Prompt.** The instruction or question given to an AI model. "Prompt engineering" refers to writing these instructions carefully to get more reliable, useful output, a real skill, though less mysterious than it's sometimes made to sound.

**Fine-tuning.** Further training an existing model on a specific, narrower set of data to adjust its behavior for a particular task. This is different from giving a model access to your documents at the time of the question, which is what retrieval-augmented generation, below, does instead. Fine-tuning changes the model itself; retrieval gives the model information without changing it.

**Hallucination.** When an AI model generates information that sounds plausible but isn't accurate, a citation that doesn't exist, a fact that's simply wrong. This is a genuine, ongoing limitation of how these models work, not an occasional bug, and it's a central reason systems handling anything factual need a way to verify or ground their answers, as covered in retrieval-augmented generation below.

**Open weight.** A model whose underlying parameters are published and downloadable, letting a business run it on its own infrastructure. This is often confused with "open source," but the two aren't the same: an open-weight model can still carry a restrictive license on commercial use. We go through what this distinction means in practice in our guides to [MiniMax M3](/blog/minimax-m3-open-weight-model-guide) and [Kimi K3](/blog/kimi-k3-open-weight-model-guide), two current open-weight models with meaningfully different licensing terms.

**Self-hosting.** Running a model on infrastructure your business controls, rather than through a provider's hosted API. For models you want to operate independently on your own infrastructure, this generally requires access to the model weights, most commonly through an open-weight model or a specific commercial or on-premises license from the provider, and it trades a real infrastructure and engineering commitment for more control over where data is processed.

## Systems and architecture

**AI agent.** A system that uses an LLM to take actions toward a goal, not just answer a question, generally by using tools, calling other systems, and making a sequence of decisions rather than producing one response. We go through what actually distinguishes an agent from a simple chatbot in [AI Agent vs Chatbot](/blog/ai-agent-vs-chatbot).

**Agentic AI.** A broader term for AI systems designed to operate with some autonomy, planning and executing multi-step tasks rather than responding to single prompts. It overlaps heavily with "AI agent" and is often used interchangeably with it in vendor content; we cover the distinction in more depth in [What Is Agentic AI?](/blog/what-is-agentic-ai).

**Multi-agent system.** An architecture where multiple AI agents, often with different roles or specializations, coordinate to complete a task that would be harder for a single agent to handle alone. This adds real complexity and is worth evaluating carefully against whether a single well-built agent would do the job.

**Retrieval-augmented generation (RAG).** A technique where a system retrieves relevant information from your own documents or data at the moment of a question, and has the model base its answer on that retrieved material rather than on general training knowledge alone. This is the mechanism behind most "AI knowledge base" and internal search tools, and it's one of the main practical ways to ground factual, business-facing answers in company-controlled sources, although retrieval alone does not eliminate hallucinations. We cover how this is actually built, including the additional quality-control layers it needs, in [How to Build an Internal Knowledge Base with AI](/blog/internal-knowledge-base-ai).

**Orchestration.** The layer that coordinates multiple steps, tools, or agents in an automated workflow, deciding what happens in what order and handling errors or handoffs along the way. In practice this is often what a workflow automation platform is actually doing under the hood.

**Model Context Protocol (MCP).** An open standard that lets AI models connect to external tools and data sources in a consistent way, rather than each integration being built from scratch. It's increasingly how AI agents connect to business tools like calendars, databases, or internal systems. For the business-case version of why that matters, see [What Is MCP (Model Context Protocol)? A Business Guide](/blog/what-is-model-context-protocol-mcp).

**API (application programming interface).** The technical channel through which one piece of software, including an AI model, communicates with another. When a vendor says their tool "connects via API," this is what they mean, a defined way for systems to talk to each other.

**Webhook.** A way for one system to automatically notify another when something happens, a new form submission, a new order, without either side having to constantly check for updates. Webhooks are a common building block underneath workflow automation.

## Automation and workflow tools

**Workflow automation.** Connecting steps across different tools so a process runs automatically instead of requiring manual action at each stage. This existed before AI, and adding an AI step, drafting a reply, classifying a request, doesn't automatically make an existing workflow automation tool an "AI platform," even when vendors market it that way.

**No-code / low-code.** Tools that let someone build an automated workflow through a visual interface rather than writing code. [n8n, Make, and Zapier](/blog/n8n-vs-make-vs-zapier) are all in this category. "Low-code" generally allows some custom code for edge cases; "no-code" aims to avoid it entirely.

**Fair-code.** A licensing model, used by n8n specifically, that sits between open source and fully proprietary: the source is visible and self-hosting is permitted, but commercial resale of the platform itself is restricted. Worth knowing since it's often described loosely as "open source," which isn't quite accurate.

**Trigger.** The event that starts an automated workflow, a new email arriving, a form being submitted, a scheduled time being reached. Every automation has at least one.

**Integration.** A connection between two systems that lets data or actions pass between them, a CRM and an email tool, a calendar and a booking system. Most automation projects are, underneath the AI terminology, largely about building reliable integrations.

## Compliance and data terms

**GDPR (General Data Protection Regulation).** The EU's core data protection law, governing how personal data can be collected, processed, and stored. It applies to any AI automation that touches personal data, which is most customer-facing automation.

**Controller and processor.** GDPR defines the controller and processor roles, while Article 28 governs the processor relationship and the contractual requirements that go with it. The controller is the business deciding why and how personal data is processed, your business, in most automation setups, while the processor carries out that processing on the controller's instructions, typically your AI vendor or workflow platform. A written agreement covering this relationship is a standard requirement, not an optional extra. We go through this in more depth in [Is Your Business Data Safe with AI?](/blog/ai-data-safety-european-businesses).

**Special category data.** Under GDPR Article 9, certain kinds of personal data, health information, in particular, require a stricter legal basis to process than ordinary personal data. This matters directly for any automation touching medical, biometric, or similarly sensitive information.

**EU AI Act.** The EU's regulation specifically governing AI systems, layered on top of GDPR rather than replacing it. Its obligations phase in over several years and vary by how the AI system is used, not by the fact that AI is involved at all. We cover what currently applies and what's been delayed in our [EU AI Act guide](/blog/eu-ai-act-smb-compliance-2026).

**Transparency duty (Article 50).** The specific EU AI Act requirement that a person interacting with an AI system be informed of that, where it isn't already obvious, most commonly relevant for customer-facing chatbots and voice agents.

**High-risk AI system.** A category under the EU AI Act covering specific AI use cases in areas such as employment, creditworthiness assessment, and certain biometric applications, among others, that carries stricter obligations than general-purpose automation. Most customer service or workflow automation doesn't fall into this category, but it's worth checking deliberately rather than assuming.

## Business and vendor terms

**Model provider.** The company that builds and offers access to an AI model, Anthropic, OpenAI, and Google among them. This is a different role from a workflow platform or automation vendor, who typically builds on top of a model provider's technology rather than building the underlying model itself.

**Inference.** The process of a trained AI model actually generating a response to a given input, as opposed to the earlier process of training the model. API pricing is generally pricing for inference, not training, which is one reason the cost model in [How Much Does AI Automation Cost in 2026?](/blog/how-much-does-ai-automation-cost) matters so much.

**Business Solution Provider (BSP).** A category specific to messaging platforms like WhatsApp, a company that handles the technical integration between a business's systems and the messaging platform's infrastructure, in exchange for its own fee on top of the platform's rates.

**SaaS (software as a service).** Software delivered through a hosted subscription rather than installed and run on your own infrastructure. Most AI automation tools are SaaS by default, with self-hosting as a separate, more involved option where it's available at all.

## For context: why this vocabulary is spreading so fast in the US

Since a lot of this terminology originates in US technology and venture capital coverage before reaching European business content, it's worth being explicit about that path rather than assuming the words arrived with equal weight everywhere. In the US, terms like "agentic AI" and "AI agent" moved from technical papers into mainstream business and investment vocabulary quickly, largely because US enterprise software vendors adopted the language in product marketing at scale, and business press covering AI investment picked it up from there. That's a real pattern worth understanding, since it explains why the terminology can feel more settled and confident in US-facing content than the underlying technology's maturity always justifies.

The practical benefit for a business owner, in the US or Europe, of learning this vocabulary isn't abstract. It's the difference between evaluating a vendor's actual proposal and taking their framing of it at face value, and between scoping a project accurately versus paying for capability you don't need, or missing a genuine capability gap because the term used to describe it sounded like something simpler you already understood.

## FAQ

**Do I need to understand all of these terms to buy AI automation software?** No, but understanding the handful relevant to your specific project, generally the ones describing what the system actually does and how your data is handled, makes it much easier to evaluate a vendor's claims and ask useful questions.

**What's the difference between AI and AI automation?** AI generally refers to the underlying model or technology. AI automation refers to using that technology as part of a structured, often multi-step business process, frequently combining an AI model with workflow tools, integrations, and triggers.

**Is "agentic AI" just a buzzword for chatbots?** Not quite, though the terms do get blurred in marketing. A chatbot generally responds to messages; an agent takes actions and makes a sequence of decisions toward a goal. Whether a specific product genuinely does the second thing or is a chatbot with agentic branding is worth checking directly.

**What's the most important term to understand before signing a vendor contract?** Probably controller and processor, since it determines who's responsible for what regarding any personal data the automation touches, and it's the term most likely to have real legal weight if something goes wrong.

**Why does "open weight" matter if I'm not planning to self-host?** It may matter less for a hosted API deployment, because API use is generally governed by the provider's service terms rather than automatically by the downloadable-weight license. The weight license becomes especially important if you plan to download, self-host, modify, redistribute, or build directly on the model weights.

**Is fine-tuning the same as giving an AI system my company's documents?** No. Fine-tuning changes the model itself through additional training. Giving a system your documents to reference at the time of a question, without changing the model, is retrieval-augmented generation, a different and generally more practical approach for most business use cases.

**Does GDPR apply to AI automation the same way it applies to regular software?** Yes, in the sense that GDPR applies to any processing of personal data regardless of the technology involved. AI automation doesn't get a separate, lighter standard, and the EU AI Act adds obligations on top of GDPR rather than instead of it.

**What does "hallucination" actually mean in practice for my business?** It means an AI system can state something confidently that isn't true, a wrong fact, a citation that doesn't exist. For any customer-facing or decision-supporting automation, this is a reason to build in verification or grounding, not something to assume away.

**Is no-code automation less capable than automation built by a developer?** Not necessarily for many common business workflows, though it has real limits for complex logic or unusual edge cases. The right choice depends on the specific workflow's complexity, not a general rule that custom code is always more capable.

**How often do these terms actually change meaning?** More often than most reference content admits. Terms like "agentic AI" are still settling into consistent usage across the industry, so it's worth checking how a specific vendor is using a term rather than assuming it matches this glossary or any other source exactly.

If a vendor conversation has you wondering whether a term is doing real technical work or just sounding impressive, that's exactly the kind of question worth working through before signing anything.

[Discuss your automation project →](/contacts)
