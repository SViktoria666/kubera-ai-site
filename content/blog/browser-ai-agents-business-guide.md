---
title: "Browser AI Agents in 2026: What Claude, ChatGPT, and Perplexity Actually Offer Your Business"
slug: "browser-ai-agents-business-guide"
description: "A browser agent can click through a booking portal, fill in a form, or extract data from a website with no API, the same way a person would. The category has moved fast enough that a major product mentioned in coverage from a few months ago no longer exists. Here's an honest look at what's actually live as of this writing, what the real evidence shows, and what to check before building around any of it."
seoTitle: "Browser AI Agents in 2026: What Claude, ChatGPT, and Perplexity Offer"
metaDescription: "Claude in Chrome, Perplexity Comet, and a fast-changing field of browser agents now click, fill forms, and navigate websites for you. Here's what's actually live, and what already died."
date: "2026-09-09"
publishedAt: "2026-09-09"
tags: ["browser agents", "ai agents", "agentic ai", "claude", "chatgpt", "perplexity", "ai automation"]
status: "published"
language: "en-GB"
category: "AI Automation"
---

# Browser AI Agents in 2026: What Claude, ChatGPT, and Perplexity Actually Offer Your Business

A browser agent is an AI system that operates a real web browser on your behalf, clicking buttons, filling in forms, reading pages, and navigating multi-step processes, the way a person would, rather than calling an API behind the scenes. This is a specific application of the broader [AI Agent](/blog/what-is-an-ai-agent) category we define in our [AI Automation Glossary](/blog/ai-automation-glossary). For businesses whose key systems are web-based and don't expose a usable API, procurement portals, client extranets, legacy booking systems, this is a genuinely new capability. It's also a category that has moved unusually fast, fast enough that a major product covered widely just months ago no longer exists by the time this article is being read.

This article covers what's actually live right now, what happened to the products that aren't, what the real evidence shows about how well any of this works, and the security and compliance questions worth asking before building around it.

## What a browser agent actually is

This is a different capability from an AI system that can search the web or read a page you paste in. A browser agent controls an actual browser session, clicking, typing, scrolling, and navigating between pages, which means it can complete a multi-step task on a site that has no API at all: booking an appointment through a web portal, filling out a supplier form, or pulling data from a dashboard that only exists as a web interface. We cover what distinguishes this kind of active, tool-using system from a standard chatbot in [AI Agent vs Chatbot](/blog/ai-agent-vs-chatbot).

## The landscape right now, and what already didn't survive it

It's worth being direct about how much this category has already consolidated, because it changes how a business should think about committing to any single product in it. Google's Project Mariner, an early entrant in this space, was discontinued on May 4, 2026, with Google saying its technology moved into other Google products, including Gemini Agent and related agentic browsing work, rather than continuing as a standalone product. OpenAI's standalone Atlas browser, launched in October 2025, was retired even faster: OpenAI announced its shutdown on July 9, 2026, and Atlas stopped working entirely on August 9, 2026. OpenAI's own framing was that its browser-based agentic capabilities were moving into ChatGPT and Codex generally, rather than into one specific standalone replacement product, with the desktop app as one way to access the deeper browser-agent functionality going forward. Bookmarks, browser history, and open tabs didn't transfer automatically for anyone who had adopted it.

What's actually live as of this writing: Perplexity's Comet, a standalone Chromium-based browser with an AI assistant and a full agent mode, which initially launched behind Perplexity's $200-a-month Max tier, became free for everyone in October 2025, and expanded to iOS in March 2026. Anthropic's Claude in Chrome, a browser extension rather than a standalone browser, available across paid Claude tiers, takes a more conservative default posture, discussed below. Microsoft shut down its general Copilot Mode in Edge on May 13, 2026; the current product is Browse with Copilot, running specifically in Microsoft Edge rather than across browsers, currently rolling out to Microsoft 365 Premium subscribers in the US.

The practical lesson from the Mariner and Atlas shutdowns isn't that browser agents don't work, both were retired in favor of folding the same capability into an existing product rather than because the underlying idea failed. It's that this specific product category, a dedicated browser built around an AI agent, has already proven less durable than the underlying capability itself, and a business building automation around one of these tools should plan for the interface it's built on to change.

## What the evidence actually shows about capability

Benchmark comparisons circulate widely in this space, and it's worth citing them with an important caveat attached. On OSWorld, a benchmark testing AI systems on realistic desktop and browser tasks, Anthropic's own system card reports Claude Sonnet 4.6 reaching a 72.5% score on OSWorld-Verified as of February 2026, close to typical human performance on the same benchmark at the time. OpenAI has separately reported its Operator product scoring roughly 38% on an earlier version of OSWorld. These are two historical data points from different benchmark cuts, not a direct, apples-to-apples ranking, since OSWorld-Verified and the earlier OSWorld version aren't the same test, and it's worth not treating the gap between them as a clean head-to-head result. Treat the 72.5% figure itself as a dated snapshot rather than the current state of the art too: this is a fast-moving field, and newer results have already surpassed it by the time this article is being read. More importantly, researchers at UC Berkeley demonstrated in 2026 that several widely used agent benchmarks, including ones cited in this space, can themselves be gamed, with an agent scoring well by exploiting the benchmark's scoring pattern rather than genuinely completing the underlying task. The practical takeaway is to judge a browser agent on how it performs on your actual, specific tasks, not on a leaderboard score, which is a pattern worth applying to most agent benchmarks generally, not just this one.

## The security problem that's specific to browser agents

This is worth treating as a genuine, current risk rather than a hypothetical one. Researchers presented findings at the Agents in the Wild Workshop at ICLR in April 2026, with the research page updated April 15 and UW News publishing coverage on June 30, 2026, testing seven agentic browsers, including ChatGPT Atlas, Chrome with Gemini, Claude in Chrome, and Perplexity Comet. The researchers demonstrated a working, successful cross-origin data theft attack specifically against Atlas, in which malicious content embedded in a webpage caused the agent to leak sensitive information from a different site the user had open. For Chrome with Gemini, Claude in Chrome, and Comet, they identified the underlying preconditions that could make a similar attack possible if a prompt injection attempt succeeds, rather than a demonstrated successful attack in each case, an important distinction worth not blurring. Their stated conclusion was blunt: browser agents, as a category, weren't yet ready for unsupervised public use. This is a specific instance of a broader risk category sometimes called prompt injection, where content on a page the agent reads can contain instructions the agent follows without the user intending it to, and it's worth treating any browser agent with the same caution you'd apply to running unfamiliar code, not the same casual trust you'd extend to a search engine.

## Enterprise controls differ meaningfully between products

For a business actually deploying one of these tools, the administrative and compliance posture matters as much as raw capability, and the products differ substantially here. Perplexity's Comet Enterprise is SOC 2 Type II and HIPAA compliant, with MDM deployment, browser policy controls, and agent-specific admin controls, and Perplexity states that enterprise data isn't used for model training. As of September 9, 2026, Claude in Chrome is disabled by default for Enterprise organizations and doesn't currently support zero data retention at all, though Anthropic has said this will switch to enabled by default on September 10, 2026 unless an administrator has already disabled it, worth checking against current documentation given how close that change is. This zero-data-retention gap is specific to Claude in Chrome and Claude Cowork; it isn't the same issue Comet faces, since Comet's confirmed privacy model is built around training exclusion and admin policy controls rather than the zero-data-retention mechanism Claude offers elsewhere in its product line. A business with strict data-retention requirements specifically needs to evaluate that gap for Claude in Chrome directly, rather than assuming it applies identically across both products. Neither posture is right or wrong in the abstract, but they represent genuinely different starting points for a compliance review, and it's worth checking each vendor's current admin documentation directly rather than assuming parity across products marketed as similar.

## If full control matters more than a consumer product

Everything above concerns consumer and enterprise-tier products from the major AI labs. For a business that needs full control over the browser automation layer itself, self-hosted, on infrastructure it owns, that's a different category of solution, and we cover one specific example in depth in [OpenClaw for Business](/blog/openclaw-for-business), which includes native browser automation via Playwright as part of a broader self-hosted agent infrastructure. The trade-off is the same one that applies to self-hosting any AI infrastructure: more control and no dependency on a vendor's product roadmap, in exchange for owning the security hardening and maintenance that a managed product otherwise handles for you.

## What's specific to Europe here

Beyond the general GDPR considerations that apply to any AI system processing personal data, autonomous, action-taking agents raise a compliance question regulators have only recently started addressing directly. Spain's data protection authority, the AEPD, published detailed guidance on February 18, 2026 addressing agentic AI specifically from a personal-data-protection standpoint, and legal analysts have noted its reasoning is relevant well beyond Spain since it's grounded directly in the GDPR text that applies EU-wide. The specific wrinkle a browser agent adds is that it interacts with third-party websites on your behalf, sites your business doesn't control and that weren't necessarily built with automated agents in mind, which is a distinct question from the more familiar controller-processor relationship you have with your own AI vendor. We cover that more familiar relationship in [Is Your Business Data Safe with AI?](/blog/ai-data-safety-european-businesses); the browser-agent-specific question, what happens on a third-party site your agent navigates, is newer ground and worth a specific compliance conversation rather than assuming your existing AI vendor agreement covers it.

## For context: how this looks in the US market

Since most of the concrete adoption commentary in this space comes from US-based coverage, it's worth being explicit about that rather than letting it blend into a claim about Europe. In the US, the clearest interest in browser agents comes from teams whose daily work runs through web portals that were never built with an API: procurement, compliance, and finance teams navigating supplier and vendor portals, and support teams working across web-based tools that don't connect to each other directly. The pattern across the commentary we could verify, rather than any specific adoption statistic, is that the appeal is strongest wherever a business already depends on a web-based system it doesn't control and can't get an API for, which is a genuinely common situation rather than a niche one.

None of that automatically transfers to a European business. Which specific browsers and agent products get enterprise budget, and how EU-specific compliance requirements shape vendor selection, are likely to diverge from the US pattern given the regulatory considerations above.

## A framework for evaluating whether to build on this now

This is a Kubera AI planning heuristic, not a universal benchmark, meant to account for how unusually fast this specific category has moved rather than treat it like a settled technology choice.

The Kubera Browser Agent Adoption Filter asks four questions:

Does the task genuinely require clicking through a web interface, or is there an API you're overlooking? Browser automation is the right tool when no API exists. Where one does, a direct integration is generally more reliable and lower-maintenance than automating the visual interface.

Can you tolerate the product you build on changing or disappearing? Given that two major products in this category have already been discontinued within roughly a year of launch, building a critical process around any single vendor's browser agent carries real platform risk. Favor approaches you could migrate off of without rebuilding from scratch.

Have you reviewed the specific security posture, not just the marketing, for the product you're considering? The University of Washington findings above didn't affect every product tested equally. Check current, vendor-specific documentation and independent research rather than assuming all browser agents carry the same risk profile.

Does your compliance posture require specific certifications or data-retention guarantees? Enterprise controls vary substantially between products right now, as the comparison above shows. This is worth confirming before rollout, not after.

If the honest answers raise real concerns on questions 2 through 4, a narrower pilot on a low-stakes task is a more sensible starting point than committing a critical process to this category today.

## Where this plays out in practice

Illustrative scenario, not a specific Kubera client: a mid-size business regularly needs to check order status across a supplier's web portal that has no API, currently done manually by a staff member. Piloting a browser agent for this single, well-scoped, repetitive task, with human review of the results before they're acted on, tests the approach on a genuinely low-stakes process before any decision to expand it further. If the vendor's product changes or is discontinued, as has already happened twice in this category, the business has lost a pilot, not a critical operational dependency.

## FAQ

**Is a browser agent the same as a chatbot with web search?** No. A chatbot with search reads and summarizes web content. A browser agent actively controls a browser session, clicking, filling forms, and navigating multi-step processes, which is a meaningfully different and more capable, and more risky, category of action.

**Why did Google and OpenAI both discontinue their browser products?** Both retired the standalone product while continuing the underlying browser-agent work elsewhere. Google said Project Mariner's technology was moving into other Google products, including Gemini Agent and related agentic browsing work. OpenAI said Atlas was being deprecated as browser-based agentic capabilities moved into ChatGPT and Codex. In both cases the standalone product disappeared, while the underlying capability continued.

**Are browser agents safe to use on any website?** Not without caution. Academic security research presented in April 2026 demonstrated a successful, working data-theft attack against Atlas via malicious content embedded in a webpage, and identified the underlying preconditions for similar attacks in several other agentic browsers if a prompt injection attempt succeeds. Treat this category with the caution you'd apply to running unfamiliar code.

**Which browser agent has the best enterprise compliance posture?** It depends what you need. Perplexity's Comet Enterprise offers SOC 2 Type II and HIPAA compliance with MDM deployment and admin controls. As of September 9, 2026, Claude in Chrome is disabled by default for enterprise accounts and doesn't currently support zero data retention, though Anthropic says that will switch to enabled by default on September 10, 2026 unless an administrator disables it. Check each vendor's current documentation for your specific requirements rather than assuming equivalence.

**Should we build a critical business process around a browser agent right now?** Given how quickly this category has already changed, a narrow pilot on a low-stakes, well-scoped task is a more sensible starting point than committing a critical process to any single product today.

**How is this different from OpenClaw's browser automation?** The products covered in this article are consumer and enterprise-tier offerings from major AI labs, run on infrastructure those vendors control. OpenClaw, which we cover separately, is self-hosted infrastructure you run and control yourself, trading a managed product's convenience for full control over the automation layer and its security posture.

**Do benchmark scores tell us which browser agent is actually best?** Treat them as a rough signal, not a reliable ranking. Researchers have shown that some of the benchmarks used to compare these systems can themselves be gamed, so testing a candidate product on your own specific tasks is more reliable than comparing leaderboard scores.

**Does GDPR treat a browser agent differently from a regular AI chatbot?** The core GDPR obligations are similar, but a browser agent adds a specific wrinkle: it interacts with third-party websites your business doesn't control, which is a different question from your controller-processor relationship with your own AI vendor. Spain's data protection authority has published early, detailed guidance on autonomous AI agents specifically, relevant beyond Spain since it's grounded in GDPR text that applies EU-wide.

**What kind of tasks are the best fit for a browser agent?** Repetitive, well-scoped tasks on websites with no usable API, checking a status page, filling a routine form, extracting data from a dashboard, are the strongest fit. Complex, high-stakes, or judgment-heavy tasks are a weaker fit given both the current accuracy gap on hard tasks and the security considerations above.

**Will the product we pick still exist in a year?** No one can guarantee that, and the recent history of this category, two major discontinuations within about a year, suggests planning for that possibility rather than assuming otherwise. Favor an approach you could migrate away from without a full rebuild.

If you're weighing whether a browser agent genuinely fits a specific task in your business, or whether a more durable integration approach would serve you better, that's exactly the kind of assessment worth doing before building around a product in a category this young.

[Discuss your automation project →](/contacts)
