---
title: "Kimi K3: Moonshot AI's Open-Weight Model for Business"
slug: "kimi-k3-open-weight-model-guide"
description: "Kimi, from the Beijing lab Moonshot AI, is the other major Chinese open-weight model family getting attention this year. Its newest flagship is enormous and genuinely capable, but its self-hosting story is still settling. Here's what that means in practice for a European business deciding what to do with it."
seoTitle: "Kimi K3: Moonshot AI's Open-Weight Model for Business"
metaDescription: "Kimi K3 is Moonshot AI's largest open-weight model yet. Here's what it actually offers, what self-hosting requires today, and where the older K2.6 may be the safer bet."
date: "2026-08-12"
publishedAt: "2026-08-12"
tags: ["ai models", "open-weight models", "self-hosted ai", "business automation", "cost optimization", "data sovereignty"]
status: "published"
language: "en-GB"
category: "AI Automation"
---

If you read our piece on [MiniMax M3](/blog/minimax-m3-open-weight-model-guide), you've likely also come across Kimi, the open-weight model family from the Beijing lab Moonshot AI. The natural assumption is that it's basically the same story with a different name: another large Chinese lab, another set of downloadable weights, another round of impressive-looking benchmarks.

That assumption is mostly right, but Kimi has its own specific wrinkle worth understanding before you decide anything. Moonshot released its newest flagship, Kimi K3, on July 16, 2026, with full open weights following on July 27. At 2.8 trillion parameters, it's the largest open-weight model released so far, and at the time of writing its self-hosting path is still genuinely unsettled: hardware estimates from different sources vary widely, and the license terms were only finalized in the last few weeks. Moonshot's own previous flagship, Kimi K2.6, is a full generation more mature and may be the more practical choice for a business that wants to self-host something today rather than next quarter.

This article covers what K3 actually is, the real gap between using it through the API and self-hosting it, what its license requires, what's known and not yet fully settled about how it handles data, and why the older K2.6 is worth keeping on the table.

## What Kimi actually is

Moonshot AI was founded in Beijing in March 2023 and has shipped a fast cadence of models since: Kimi K2 in July 2025, an update called K2.5 in January 2026 that added native vision, K2.6 in April 2026, and now K3 in July 2026, roughly doubling the parameter count of its predecessor. Each release has kept the same general mixture-of-experts approach while extending context length, multimodal support, and agentic capability.

K3 is a 2.8-trillion-parameter mixture-of-experts model, with a relatively small fraction of those parameters active for any given token, a 1-million-token context window, native vision input, and an always-on "thinking mode" aimed at longer, more deliberate reasoning tasks. Moonshot's own technical report is fairly direct about where K3 lands: it states that the model's overall performance still trails the two strongest proprietary systems, Claude Fable 5 and GPT-5.6 Sol, while consistently outperforming every other model in its evaluation suite. Artificial Analysis scored K3 at 57 on its Intelligence Index shortly after launch, which is consistent with that framing. Worth noting: leaderboard rankings on services like this shift quickly as new models and configurations are added, so the score itself is more durable and useful here than any specific rank we could quote. Keep in mind the market has kept moving since launch generally: newer releases from other labs mean any specific comparison in this article reflects a point in time, not a permanent standing.

## Kimi K3 specifications

| Spec | Kimi K3 |
| --- | --- |
| Total parameters | About 2.8 trillion |
| Active parameters per token | 104 billion |
| Context window | Up to 1 million tokens |
| Multimodal input | Text and native vision |
| API pricing | $3.00 per million input tokens, $0.30 for cached input, $15.00 per million output tokens |
| Weights available | Yes, released July 27, 2026 |
| License | Custom Kimi K3 License, terms recently finalized |

## Two ways to run it, and the gap is unusually wide right now

The API path works the same way it does for most frontier models: an API key, an OpenAI-compatible endpoint, and no infrastructure of your own to manage. On Moonshot's published rates, K3 costs meaningfully more per token than its own predecessor K2.6 or MiniMax M3, though it remains well below several flagship closed models on standard pricing. We go into how these token costs add up in practice in [How Much Does AI Automation Cost in 2026?](/blog/how-much-does-ai-automation-cost). As with any pricing comparison in this space, treat this as a snapshot: rates change often, and it's worth checking Moonshot's current published pricing before budgeting a project around it.

The self-hosting path is real, but production-grade deployment of K3 is genuinely heavy infrastructure. Moonshot's own guidance points to supernode-class configurations of at least 64 accelerators working together, reflecting the communication demands of routing each token through 16 of the model's 896 experts. Experimental community deployments have reported reduced hardware footprints through quantization, offloading, and other techniques, but these should be treated as proof-of-concept setups rather than established production configurations, and Moonshot has not published an official minimum. If self-hosting K3 specifically is on your roadmap, plan around the production guidance rather than the smaller experimental numbers you may see circulating, and expect more field-tested guidance to emerge over the next few months as the ecosystem catches up.

## Why K2.6 may be the more practical self-hosting choice today

This is worth naming directly rather than glossing over: if your business wants to self-host a Kimi model now, not once K3's ecosystem matures, K2.6 is the better-documented option. It's a full trillion-parameter model with 32 billion active parameters, a smaller and more established footprint than K3's 2.8 trillion, and a modified MIT license with clearly stated commercial thresholds. It also benefits from the more mature K2 deployment ecosystem, which has been building tooling, hosting recipes, and community experience since the original K2 release in mid-2025, while K3's self-hosting tooling is still newer. K2.6 also scores well on independent coding benchmarks in its own right, even if it sits behind K3 on Moonshot's more recent internal comparisons.

None of this means K3 should be dismissed. It's a meaningfully more capable model on paper, particularly for long-context and agentic tasks, and its ecosystem will likely catch up quickly given how fast Moonshot has shipped over the past year. But if the immediate goal is a self-hosted deployment with a well-understood hardware footprint and licensing precedent, K2.6 is the lower-risk starting point, with an upgrade path to K3 once its self-hosting story settles.

## The same framework applies here

We introduced a short filter when covering MiniMax M3 for deciding whether self-hosting an open-weight model is worth the operational overhead at all, and it applies just as directly to Kimi. This is a Kubera AI planning heuristic, not a universal benchmark, meant to shortcut the decision rather than replace a proper infrastructure assessment.

The Kubera Open-Weight Deployment Filter asks four questions:

Does your use case require data to stay inside infrastructure you control? If yes, self-hosting is worth evaluating regardless of which open-weight model you pick. If no, the hosted API is almost always simpler and cheaper to start with.
Is your usage volume high and sustained, not occasional? Self-hosted infrastructure has a fixed cost whether you use it or not. Below a certain steady volume, API pricing usually wins on cost even before counting engineering time.
Do you already have, or are you willing to build, the technical capacity to operate multi-GPU infrastructure? For K3 specifically, this also means tolerating some uncertainty in the current hardware guidance rather than a fully settled playbook.
Does your business fall under the license's commercial threshold, and are you prepared to meet its conditions? Worth checking regardless of which path you take, and more important if you're building a product on top of the model rather than using it internally.

If the honest answers land mostly on "no," the API is the right starting point for either K2.6 or K3, and self-hosting can be revisited once volume or data requirements justify it.

## The licensing detail worth reading before you commit

K2.6 ships under a Modified MIT License: standard MIT terms with one added condition. If you deploy the model or a derivative in a commercial product exceeding 100 million monthly active users or generating more than $20 million in monthly revenue, you need to display "Kimi K2.6" prominently in the product interface. For the large majority of SMBs, that threshold is well out of reach, but it's worth knowing it exists before scaling a product built on it.

K3 ships under a different, more detailed document: the Kimi K3 License, not Modified MIT. It permits free commercial use, including running, modifying, fine-tuning, redistributing, and selling products built on the model, but it attaches two specific conditions worth understanding before you build on it. First, if your business, together with its affiliates, operates a "Model as a Service" business, meaning you give third parties inference or fine-tuning access with meaningful control over inputs or parameters, and your aggregate group revenue exceeds $20 million over any trailing 12 months, you need a separate commercial agreement with Moonshot before commercial use. Second, any commercial product exceeding 100 million monthly active users or $20 million in monthly revenue needs to display "Kimi K3" prominently in its interface, the same branding condition as K2.6. Purely internal use that's never exposed to third parties is exempt from both conditions, as is use through Moonshot's own products or its certified inference partners. For most SMBs running internal automation or building a customer-facing product well under these thresholds, neither condition is likely to bind, but the Model as a Service clause specifically is worth checking if your business resells or wraps inference access for others.

On data used for training, Moonshot publishes different terms for its consumer and developer products, and it's worth not assuming the same policy applies across both. Kimi's consumer Help Center describes a process where a user can request, by email, that their content stop being used for model training, processed within 30 days of identity verification, though only at the account level rather than per conversation. Separately, the Kimi OpenPlatform terms for API and business customers note that a business wanting restrictions on how its content is used for training can contact Moonshot to discuss enterprise arrangements. If training use matters for your organization, the reliable path is to review the current OpenPlatform terms for the specific API product you're using and get written confirmation or enterprise terms from Moonshot before sending anything sensitive through it, rather than assuming a policy based on the consumer product or general commentary.

## What's actually known about data handling

This is worth being precise about rather than repeating secondhand claims either way, because the picture is genuinely more layered than a single answer. Moonshot AI operates more than one entity and product: the international developer API, known as the OpenPlatform, is run by Moonshot AI Pte. Ltd. in Singapore, and its published privacy policy states that servers are situated in Singapore, with personal data processed and stored there. Separately, the consumer-facing Kimi chat app is operated by Beijing Moonshot Technology Co., Ltd., whose own privacy policy states compliance with China's Personal Information Protection Law and Data Security Law. These are two different products, run by two different entities, under two different sets of terms, and public commentary online sometimes collapses them into a single claim about "where Kimi data goes," which oversimplifies a genuinely more nuanced situation.

The practical takeaway: which policy applies depends on which specific product or endpoint you're using, whether that's the OpenPlatform API directly, the Kimi.com consumer app, or a third-party inference host such as Together AI or Fireworks AI that lists K3 or K2.6 under its own separate terms. Before sending personal or regulated data through any of these, the sensible step is the same one we'd recommend for any AI vendor: read the specific, current privacy documentation for the exact product you're using, check international transfer language and retention terms, and don't assume the answer based on where the company was founded. Self-hosting the open weights sidesteps this question entirely, since inference then runs on infrastructure you control and no request data needs to leave it. We cover the broader version of this question in [Is Your Business Data Safe with AI?](/blog/ai-data-safety-european-businesses).

## Pros and cons for a European SMB

| Consideration | What it looks like in practice |
| --- | --- |
| Cost, via API | K3 is priced above K2.6 and MiniMax M3, though still well below several flagship closed models on standard rates |
| Cost, self-hosted | K2.6 has an established, more predictable hardware and cost picture; K3's is still settling |
| Capability | K3 shows strong results on an independent leaderboard and several vendor benchmarks, though full independent verification is still limited this soon after release |
| Context and multimodality | 1 million tokens and native vision on K3 are genuinely useful for large codebases and long documents |
| Licensing | Both models use modified or custom licenses with commercial thresholds, not permissive open source; K3's terms are newer and worth reading directly |
| Data handling | Genuinely layered across products and entities; check the specific policy for whichever endpoint you use, or self-host to remove the question |
| Ecosystem maturity | K2.6 benefits from the more mature K2 deployment ecosystem built up since mid-2025; K3's self-hosting playbook is still forming |

## Where Kimi fits against the alternatives

Kimi sits alongside MiniMax and DeepSeek as one of several Chinese labs shipping large open-weight models on a fast release cadence this year, and the general trade-off is similar across the group: meaningfully lower API cost than several closed flagship models, a genuine self-hosting option for businesses with the infrastructure and reason to use it, and licensing and ecosystem maturity that need to be checked case by case rather than assumed. Compared with closed, hosted-only models like Claude and GPT, which we cover in [Claude vs ChatGPT vs Gemini vs Qwen vs DeepSeek](/blog/claude-vs-chatgpt-vs-gemini-vs-qwen-vs-deepseek), Kimi's specific edge is long-context and agentic task performance, at the cost of a less established ecosystem and, for K3 specifically, real near-term uncertainty about the self-hosting path.

## What we would actually choose

For a business that wants to test a capable model for long-context coding or knowledge work through a hosted API, without a specific reason to avoid third-party infrastructure, K3's API is a reasonable option to evaluate alongside your existing tools, with the usual caveat to verify current pricing and benchmark claims yourself. For a business that specifically wants to self-host a Kimi model now, K2.6 is the more practical starting point given its clearer hardware picture and license precedent, with K3 worth revisiting once its ecosystem catches up. For a business with a genuine data-handling requirement, the right first step isn't picking a model at all, it's reading the specific privacy terms for whichever Kimi product or endpoint is actually in scope, since the answer depends on which entity and product you're using, not on Moonshot's country of origin alone.

## FAQ

**Is Kimi K3 free to use?** The API is paid, at published per-token rates. The weights are free to download and use commercially under the Kimi K3 License, which permits most commercial use but requires a separate agreement with Moonshot if your business operates a Model as a Service offering above a $20 million revenue threshold, and requires displaying "Kimi K3" prominently if your product exceeds 100 million monthly users or $20 million in monthly revenue.

**Can I self-host Kimi K3 today?** Yes, technically, the weights are released. But the hardware guidance is still unsettled: Moonshot recommends large production clusters, and independent estimates for smaller setups vary considerably. If you want a more predictable self-hosting path right now, K2.6 is the better-documented option.

**What's the difference between Kimi K2.6 and Kimi K3?** K2.6 is a 1-trillion-parameter model with 32 billion active parameters, released in April 2026, and it benefits from the more mature K2 deployment ecosystem built up since the original K2 release in mid-2025. K3, released in July 2026, is a 2.8-trillion-parameter model with a larger context window and native vision, more capable on paper but with a less mature self-hosting playbook.

**Does Kimi's API send my data to China?** It's more layered than a yes or no answer. The developer API, the OpenPlatform, is operated by a Singapore entity whose privacy policy names Singapore-based servers. The separate consumer chat app is operated by a Beijing entity under Chinese data protection law. Which policy applies depends on which specific product you use, so it's worth checking the current terms for your exact use case rather than assuming either answer.

**Is Kimi K3 better than MiniMax M3?** They're not directly comparable in a simple way. K3 is significantly larger and shows strong results on an independent leaderboard, but M3's self-hosting requirements and licensing are somewhat better documented at this point. We plan to cover a direct comparison separately once both models' ecosystems have had more time to mature.

**How much does the Kimi K3 API cost?** Published rates are $3.00 per million input tokens, $0.30 for cached input, and $15.00 per million output tokens. Pricing changes fairly often in this market, so check Moonshot's current rates before budgeting.

**Are Kimi K3's benchmark results reliable?** Moonshot's own technical report is fairly candid: it states K3's overall performance still trails Claude Fable 5 and GPT-5.6 Sol, while consistently outperforming other models in its evaluation suite. Artificial Analysis scored K3 at 57 on its Intelligence Index shortly after launch, consistent with that framing, though leaderboard rankings shift quickly as new models are added, so treat any specific rank you see as a snapshot rather than a fixed position.

**What license does Kimi K2.6 use?** A Modified MIT license: standard MIT terms, with one added requirement to display "Kimi K2.6" prominently if a commercial deployment exceeds 100 million monthly active users or $20 million in monthly revenue. Most SMBs fall well under that threshold. Kimi K3 uses a separate, more detailed license with an additional condition for businesses that resell inference access at scale.

**Does Moonshot use my API data to train its models?** Moonshot publishes different terms for its consumer and developer products, and businesses should not assume the same training policy applies across both. If training use matters for your organization, review the current OpenPlatform terms for the exact API product and obtain written confirmation or enterprise terms from Moonshot before sending sensitive data.

**Should my business wait for Kimi K3's self-hosting ecosystem to mature?** If self-hosting is time-sensitive, K2.6 is the more practical choice today. If you're not in a hurry and want the more capable model, it's reasonable to start with K3's API now and revisit self-hosting once the hardware guidance settles.

If you're weighing Kimi against other open-weight or closed models for a specific automation project, or trying to work out whether self-hosting makes sense for your situation, that's exactly the kind of decision worth mapping out before committing engineering time to either path.

[Discuss your automation project →](/contacts)
