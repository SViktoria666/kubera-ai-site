---
title: "AI Model Releases in 2026: What Changed for Businesses"
seoTitle: "2026 AI Model Update: GPT, Claude, Gemini and Kimi"
slug: "2026-ai-model-update-gpt-claude-gemini-kimi"
description: "OpenAI, Anthropic, Google, and Moonshot AI shipped a rapid sequence of major models and variants between April and September 2026. This isn't another \"which AI platform should I pick\" comparison, it's a dated release tracker: what changed for businesses, what stayed flat, who can generate images and video versus only understand them, and what's genuinely usable inside the EU right now."
metaDescription: "Four labs shipped a rapid sequence of major models between April and September 2026. Here's what actually changed for businesses, what stayed flat, and what works in Europe."
date: "2026-09-11"
publishedAt: "2026-09-11"
tags: ["ai models", "gpt", "claude", "gemini", "kimi", "business automation", "eu ai"]
status: "published"
language: "en-GB"
category: "AI Automation"
---
# AI Model Releases in 2026: What Changed for Businesses

Between April and September 2026, OpenAI, Anthropic, Google, and Moonshot AI released a rapid sequence of major models and model variants. Keeping track of this as a business owner, rather than as someone whose job is to track AI releases, has become genuinely difficult, and most coverage of it is noticeably stale within weeks. This article is dated deliberately, current as of mid-September 2026, and organized by lab, followed by the comparisons that actually matter for a business decision: which models can generate images and video versus only understand them, what genuinely improved versus what stayed flat, and which models you can actually deploy inside the EU today without a data-residency problem.

This is a release tracker, not a buying guide: if you're weighing which platform to actually adopt, [Claude vs ChatGPT vs Gemini vs Qwen vs DeepSeek](/blog/claude-vs-chatgpt-vs-gemini-vs-qwen-vs-deepseek) covers that broader comparison, including vendors not in this update. This article covers what's shipped since across the four most active labs specifically, not a restatement of that comparison. We've also covered several of these models individually elsewhere, including [MiniMax M3](/blog/minimax-m3-open-weight-model-guide) and [Kimi K3](/blog/kimi-k3-open-weight-model-guide).

## OpenAI

OpenAI's release pace this year has been unusually fast, and the cadence tells its own story about competitive pressure in the field.

GPT-5.5 shipped April 23 to 24 as an interim update to the 5.x line.

GPT-Realtime, a new generation of voice models for natural spoken interaction, arrived in ChatGPT Voice in early July.

GPT-5.6, released in three variants, Sol, Terra, and Luna, on July 9, was positioned around getting more intelligence per token, better price-to-performance, and more compute on demand for harder tasks. Sol specifically emphasized coding, science, and cybersecurity, alongside what OpenAI described as its most advanced safety stack at the time. GPT-5.6 reached Microsoft's EU Data Zone at launch, worth noting given what comes next.

GPT-6 Astra, released September 3, is the current flagship. The most significant thing about it from a business standpoint: it's the first OpenAI model to cross the "Critical" cybersecurity threshold under the company's own Preparedness Framework, meaning that, per OpenAI's own disclosure, it can identify previously unknown security flaws and develop new exploitation methods across well-protected systems without step-by-step human guidance. OpenAI's own materials report a perfect score on ExploitBench, one of its internal cybersecurity evaluations. The company has restricted advanced offensive capability in the public version and is expanding access to vetted defenders through a separate program.

On image and video: OpenAI's image line moved from GPT Image 1 to GPT Image 1.5 in December 2025 and to GPT Image 2 in April 2026, which introduced an autoregressive, reasoning-based approach rather than the diffusion approach behind the older DALL-E models, alongside faster generation and cheaper API pricing. On video, the picture has genuinely shifted: Sora 2 added synchronized dialogue and sound effects in late 2025, but OpenAI discontinued the standalone Sora web and app experience on April 26, 2026, and the Sora API itself is scheduled to shut down entirely on September 24, 2026. OpenAI is discontinuing its own Sora product and API, meaning businesses should not treat Sora as a long-term standalone video-generation platform; check OpenAI's current documentation for how, or whether, video generation is offered going forward.

## Anthropic

Claude Opus 4.8, released May 28, shifted emphasis toward reliability: Anthropic reported the model catching roughly four times more of its own coding errors before they went unnoticed compared with Opus 4.7.

Claude Fable 5 and Mythos 5, released June 9, introduced Anthropic's Mythos tier, positioned above Opus. Both share the same underlying model; Fable 5 runs with safety classifiers that route cybersecurity, biology and chemistry, and model-distillation-related requests to the less capable Opus instead, while Mythos 5 runs without those restrictions and is limited to vetted organizations under Project Glasswing. On June 12, three days after launch, the US Department of Commerce ordered Anthropic to suspend both models for all non-US users on national security grounds; Anthropic complied by taking both models offline worldwide. The directive was lifted June 30, and Fable 5 returned to worldwide availability July 1, priced at $10 per million input tokens and $50 per million output tokens, with mandatory 30-day data retention and no zero-data-retention option, including on EU-specific endpoints. Mythos 5 remains restricted to vetted organizations.

Claude Sonnet 5, released in the June-to-July window, is described by Anthropic as the most agentic model in the Sonnet line, with performance approaching Opus 4.8 at a substantially lower price, adding multi-step planning, tool use across browsers and a terminal, and self-checking without explicit prompting.

Claude Opus 5 followed in July as the flagship Opus update.

Claude Fable 5.1 and Mythos 5.1, released September 1, are the most recent pair. Fable 5.1 is Anthropic's most capable generally available model, built for complex reasoning, long-running agents, coding, multi-step research, and large documents, with a 1-million-token context window and up to 128,000 tokens of output. Mythos 5.1 remains access-restricted; its existence was first exposed on March 26 through draft blog posts left in a public database, before Anthropic formally disclosed it on April 7 and confirmed it would route through Project Glasswing rather than general release. On Microsoft Foundry, Fable 5.1 currently ships with no EU data zone option and mandatory 30-day retention, a genuine gap for any EU business with data-residency requirements.

On image and video: Claude does not have native raster image generation, and this hasn't changed across any of the releases above. Anthropic documents Claude as vision-capable, meaning it can read and reason about images you give it, but it doesn't produce photorealistic image files the way GPT Image or Google's models do. What Claude does well instead is generate SVG and code-based visuals through Artifacts, editable, infinitely scalable diagrams, logos, and interactive components, which is a genuinely different capability from pixel-based image generation, not a lesser version of it. Claude has no video generation capability at all.

## Google

Google's releases this year are best understood as an ecosystem of separate, specialized models under the Gemini and related brand names, rather than one model doing everything.

Gemini 3.1, released in April, is the reasoning and general-purpose model: deep conversation, writing, autonomous agent control, and complex coding.

Gemini 3.1 Flash Image, better known as Nano Banana 2, is a separate image-generation model that had actually reached developers earlier, on February 26, 2026, as a fast, cheaper alternative to the earlier Nano Banana Pro that matched much of its quality at roughly half the price. Nano Banana 2 quickly took the top spot on independent text-to-image leaderboards including Artificial Analysis's Image Arena.

Flash TTS, released alongside Gemini 3.1, is Google's separate speech-generation model, handling emotional, natural-sounding audio output.

Gemini 3.5 Flash, announced at Google I/O in May, was the conference's headline reasoning and agentic model, reportedly running at four times the token-generation speed of other frontier models at the time. It's worth being specific here too: 3.5 Flash accepts image, video, and audio as input, but doesn't generate images itself, that capability sits with the separate Nano Banana line.

Gemini 3.6 Flash, 3.5 Flash-Lite, and 3.5 Flash Cyber all shipped together on July 21. The lead model, 3.6 Flash, targets coding, information-heavy work, multimodal tasks, and agentic use cases. Worth noting: Gemini's flagship Pro tier hasn't been updated since February 2026, even as the Flash line has iterated rapidly; Google has separately announced it's begun large-scale pretraining for Gemini 4.

On image and video: Google's native media generation is genuinely the strongest and most continuous of the four labs covered here, precisely because it's a family of dedicated models rather than one general model doing everything. Nano Banana 2 and Nano Banana Pro handle images. Google's video model, currently Veo 3.1, handles video generation natively, with strong temporal consistency and synchronized audio, and is widely cited as one of the more capable video models available in 2026 regardless of vendor.

## Moonshot AI, Kimi

Kimi K2.5, released January 27, is a mixture-of-experts model with 1 trillion total parameters and roughly 32 billion active, natively multimodal across vision and language, with instant and thinking modes and agentic capability including a multi-sub-agent "swarm" feature for deep research.

Kimi K2.6, released April 20, targeted long-horizon engineering work specifically: support for more than 4,000 tool calls, sessions running over 12 hours, and an agent cluster supporting up to 300 parallel sub-agents, each capable of up to 4,000 steps.

Kimi K2.7 Code, released June 12, specialized in programming and became, per Moonshot, the first open-weight model built into GitHub Copilot's model picker.

Kimi K3, released July 16 with weights following on July 27, is the current flagship: 2.8 trillion total parameters with 104 billion active per token, a 1-million-token context window, and Kimi Delta Attention, a hybrid linear-attention mechanism aimed at faster long-context decoding. We cover K3's licensing, self-hosting requirements, and data-handling questions in detail in our [Kimi K3 guide](/blog/kimi-k3-open-weight-model-guide).

On image and video: every model in the K2 and K3 line is natively multimodal for input, meaning it can see and reason over images and video, screenshots, UI mockups, video demonstrations, without a bolted-on separate vision model. None of them generate images or video as output. If a workflow needs Kimi's coding and reasoning strength alongside actual image or video generation, that generation step needs to come from a different model entirely.

## Who can actually draw, and who can't

This is worth a direct table, since "multimodal" gets used loosely enough in coverage of these releases that it's easy to assume a model can produce images or video when it can only understand them.

| Model family | Understands images and video | Generates images | Generates video |
| --- | --- | --- | --- |
| GPT / OpenAI | Yes | Yes, GPT Image 2 | Sora is being discontinued as OpenAI's own video product; check current documentation for what, if anything, replaces it |
| Claude / Anthropic | Yes | No native raster generation; produces SVG and code-based visuals instead | No |
| Google ecosystem / Gemini + Nano Banana + Veo | Yes, via Gemini | Yes, via the separate Nano Banana 2 and Nano Banana Pro models | Yes, via the separate Veo 3.1 model |
| Kimi / Moonshot | Yes | No | No |

The practical takeaway: Google's ecosystem is currently the only one of the four with a genuinely continuous, native image-and-video generation offering, spread across its Gemini, Nano Banana, and Veo model families rather than a single model. OpenAI still generates images natively but is discontinuing Sora as its own video product. Claude and Kimi are both strong at understanding visual input for reasoning and coding tasks, but neither will produce an image or video file for you, and that hasn't changed across any release covered in this article.

## What actually got better, and what stayed flat

Not every release moved every capability forward, and it's worth being specific about which is which rather than treating each announcement as uniform progress.

Genuinely, measurably different: cybersecurity capability at the frontier moved sharply with GPT-6 Astra crossing OpenAI's own Critical threshold, and with Anthropic's Mythos line, per its own disclosures, demonstrating exploit-finding capability that outperforms humans on certain tasks. Long-context handling also moved meaningfully across the board, with Claude Fable 5.1, Gemini's line, and Kimi K3 all operating with context windows around or above 1 million tokens, a genuine jump from where most frontier models sat a year earlier.

Continuing steadily rather than jumping: general coding and agentic tool-use capability improved incrementally release to release across all four labs, without a single obvious step-change the way cybersecurity capability had one with Astra specifically.

Flat, or reset rather than improved: Google's flagship Gemini Pro tier hasn't shipped an update since February 2026, even as Flash-tier models iterated repeatedly, an unusual gap worth watching given the announced Gemini 4 pretraining. Claude's lack of native image generation is unchanged across every release in this window. And OpenAI's video strategy did not simply improve: the company is retiring the standalone Sora product and API, so businesses should verify OpenAI's current video-generation offering rather than assume Sora remains a long-term platform.

## EU deployment considerations as of September 2026

This is worth its own section, because "available globally" and "usable under EU data-residency requirements" have turned out to be different things for several of the models above. Availability, data residency, and retention policies can change independently of a model's underlying capability, sometimes within weeks, so treat the specifics below as a snapshot worth re-verifying against current documentation before any deployment decision.

Anthropic's Fable 5 and Mythos 5 were pulled entirely from worldwide access between June 12 and July 1, 2026, under a US export-control order, before being restored. Separately, on Microsoft's Foundry platform, Fable 5.1 has been reported as currently shipping with no EU data zone option, Anthropic-hosted only, with mandatory 30-day data retention rather than a zero-data-retention option some EU businesses specifically need. GPT-6 Astra has been reported with a similar gap on the same platform, launching with Global Standard and US Data Zone options only and no EU Data Zone at launch. GPT-5.6, by contrast, did reach the EU Data Zone at its July launch, a useful reminder that this varies release to release rather than being a fixed policy either way. Verify the exact hosting product, region, and retention terms directly with the specific cloud platform you're using before treating any of this as settled, since these details are exactly the kind that shift on their own timeline, separate from the model itself.

There's also a live regulatory development worth flagging: the EU's cybersecurity agency, ENISA, confirmed in September 2026 that it has been granted access to both Mythos 5 and GPT-6 Astra and is actively testing them, following Anthropic's own April disclosure that Mythos-class models could outperform humans at finding and exploiting security vulnerabilities. Neither the Commission nor Anthropic has clarified exactly which configuration ENISA is testing, and it's genuinely too early to know what that testing will conclude, but it's a concrete sign that EU regulators are moving to independently verify vendor claims about these models rather than relying on the vendors' own disclosures. We cover the broader EU compliance picture for AI generally in our [EU AI Act guide](/blog/eu-ai-act-smb-compliance-2026), and the separate [AI data-safety guide](/blog/ai-data-safety-european-businesses) covers the GDPR and data-residency questions that sit alongside it.

The Chinese-developed Kimi models raise a different question, data handling and jurisdiction rather than export control, which we cover in detail in our dedicated [Kimi K3 guide](/blog/kimi-k3-open-weight-model-guide) rather than repeating here.

## A framework for staying current without chasing every release

This is a Kubera AI planning heuristic, not a universal benchmark, meant to help a business avoid two opposite failure modes: ignoring genuine capability jumps, or rebuilding around every announcement.

The Kubera Model Currency Filter asks three questions before switching or adding a model based on a new release:

Does the specific capability that improved actually matter for what you're doing? A cybersecurity capability jump matters enormously for a security team and not at all for a business using AI for customer support drafting. Match the headline to your actual use case before reacting to it.

Is the model actually available where and how you need it? As the EU section above shows, a model being announced globally doesn't mean it's deployable under your specific data-residency or compliance requirements yet. Check current, specific documentation rather than the launch announcement.

What does switching cost you against what it gains? Given how quickly this landscape moves, as covered in [What Is Agentic AI?](/blog/what-is-agentic-ai) and elsewhere, a model that's marginally better on a benchmark you don't specifically need is rarely worth a migration on its own.

## FAQ

### Which of these models is best overall?

There isn't a single answer that holds across use cases. Google currently leads on native image and video generation, OpenAI's Astra leads on a specific, narrow cybersecurity capability most businesses don't need, and Claude and Kimi both lead on different flavors of long-context reasoning and coding. Match the question to your actual task rather than looking for one universal winner.

### Can any of these models generate video natively right now?

Google's Veo 3.1 does, natively and continuously, as part of the broader Gemini ecosystem. OpenAI is discontinuing its own Sora product and API, with the API shutting down September 24, 2026, so it shouldn't be treated as a long-term standalone video-generation platform; check OpenAI's current documentation for what, if anything, it offers instead. Claude and Kimi don't generate video at all.

### Why doesn't Claude generate images the way GPT and Gemini do?

Anthropic hasn't built native raster image generation into Claude. It's vision-capable, meaning it can read and reason about images, and it can produce SVG and code-based visuals through Artifacts, but that's a different capability from generating a photorealistic image file.

### What happened with Claude Fable 5 and Mythos 5 in June 2026?

The US Department of Commerce ordered Anthropic to suspend both models for all non-US users on national security grounds, three days after their June 9 launch. Anthropic complied worldwide. The order was lifted June 30, and Fable 5 returned to general availability July 1; Mythos 5 remains restricted to vetted organizations.

### Is GPT-6 Astra available in the EU?

It's available to EU users through ChatGPT and the API, but on Microsoft's Foundry platform it currently lacks an EU Data Zone deployment option, meaning a business needing to guarantee EU-only data processing for compliance purposes has a genuine gap to account for as of this writing.

### Is it true that GPT-6 Astra can find and exploit security vulnerabilities on its own?

That's OpenAI's own disclosure, not an outside claim: the company states Astra meets its "Critical" cybersecurity threshold, meaning it can identify previously unknown flaws and develop exploits across hardened systems without step-by-step human guidance. OpenAI has restricted the most advanced version of this capability in the public release.

### Should my business switch models every time one of these labs ships something new?

Generally no. Match a specific new capability to a specific need you actually have, and check that the model is genuinely deployable under your compliance requirements, before treating a new release as a reason to switch.

### Are Kimi's models safe to use for a European business?

That depends on which specific product and data flow you're using, the same question that applies to any AI vendor. We go through this in detail, including the data-residency nuances specific to Moonshot's different products, in our [Kimi K3 guide](/blog/kimi-k3-open-weight-model-guide).

### Should I worry about GPT-6 Astra's cybersecurity capability if I'm not a security team?

Probably not directly. The Critical classification affects how OpenAI restricts and monitors advanced offensive use of the model; for most business use cases outside security research, it doesn't change how the model behaves. It's worth knowing about mainly because it signals how seriously labs are now treating capability disclosure generally.

### Why did Gemini's flagship Pro tier stop updating while Flash kept shipping?

Google hasn't explained the gap publicly beyond announcing that pretraining has begun for Gemini 4. It's worth treating the current Pro tier as due for a generational update rather than assuming it reflects Google's latest capability the way the Flash line does.

If you're trying to work out which of these models, if any, actually changes what your business should be doing, that's exactly the kind of assessment worth doing against your specific tasks rather than the headlines each release generates.

[Discuss your automation project →](/contacts)
