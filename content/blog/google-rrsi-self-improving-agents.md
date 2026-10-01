---
title: "What Google's RRSI Teaches About Building Good AI Agents"
seoTitle: "What Google's RRSI Teaches About Building Good AI Agents"
slug: "google-rrsi-self-improving-agents"
description: "On September 21, 2026, Google Cloud AI Research published an open framework called RRSI that lets an AI agent's surrounding system improve itself, with one strict condition: a change only counts if it still works on tasks it has never seen. Two of the four methods it was tested against failed that condition and ended up, on average, doing worse than no change at all on unseen tasks. That's a sharper business lesson than the headline benchmark number."
metaDescription: "Google's new RRSI framework doesn't make AI models smarter. It makes the system around them better, and only keeps changes that survive cases it's never seen. That discipline is the real lesson."
date: "2026-10-02"
publishedAt: "2026-10-02"
tags: ["AI agents", "AI research", "agent evaluation", "AI automation", "AI governance"]
status: "published"
language: "en-GB"
category: "AI Automation"
---
# What Google's RRSI Teaches About Building Good AI Agents

On September 21, 2026, researchers from Google Cloud AI Research, working with UNC-Chapel Hill, Stanford, and Washington University in St. Louis, published an open-source framework called RRSI, for Regularized Recursive Self-Improvement of Agent Harnesses. It's a genuinely interesting piece of AI engineering, and it's been covered online with a headline number: under RRSI, Claude Opus 4.8's score on a coding benchmark called Terminal-Bench 2.1 rose from 74.2% to 80.2%. That number is accurate. It's also the least interesting part of the story, and the part that actually matters for anyone evaluating AI automation for a business has nothing to do with Claude specifically.

## What RRSI actually does

Start with what it doesn't do: RRSI does not retrain or change the underlying AI model. The model's weights stay completely frozen throughout. What RRSI improves is what the paper calls the harness, which is everything built around that frozen model: the prompts it's given, the tools it can call, how it manages memory and context, and the control logic that decides what it does next. A lot of what separates a mediocre AI agent from a genuinely capable one isn't the model underneath, it's the quality of this surrounding system, and engineering teams have increasingly tried to automate the process of improving it, having an AI propose edits to its own harness and keeping whichever version scores best.

That automated loop has a well-documented failure mode, and it's the actual problem RRSI was built to solve. An edit can look like a real improvement because it scores well on the specific tasks used to test it, while actually just having learned the quirks of those particular tasks rather than anything genuinely useful. The gain shows up clearly on the tasks you measured and quietly disappears, or reverses, on anything else. RRSI addresses this with a set of deliberate constraints on both sides of the process: a shrinking budget on how many changes can be bundled into one edit, a "leakage critic" that screens out and rejects changes that look suspiciously tailored to the exact benchmark rather than genuinely useful in general, a noise floor that refuses to treat a small, possibly random fluctuation as a real win, a cost rule that only accepts a change if its benefit justifies whatever extra computation it costs, and a pruning step that removes anything that stops earning its place over time.

## The evidence that actually matters

Here's the part the headline number leaves out. Researchers tested the harness changes not just on the benchmark they were developed against, Terminal-Bench 2.1, but on a second, completely different coding benchmark, SWE-bench Verified, that the harness was never evolved to handle. If the 74.2% to 80.2% gain had been the kind of overfitting RRSI was designed to prevent, it would have shown up only on Terminal-Bench and vanished or reversed on the unseen benchmark. Instead, the improvement carried over: SWE-bench Verified rose too, from 82.0% to 83.8%. Across eight benchmarks spanning coding, agentic workplace tasks, and engineering design, all six held-out evaluations improved, with none regressing, which is specifically the outcome a harness that had merely memorized its training tasks would fail to produce.

The comparison that makes this genuinely convincing is against four other published harness-improvement methods tested under the same conditions. All four looked competitive or better on the benchmark they were directly optimized against. Once tested on tasks none of them had seen, the picture flipped: two of the four methods finished below the unevolved baseline on aggregate out-of-distribution performance, meaning that, averaged across the unseen tasks, their "improvements" did worse than making no change at all. Only RRSI's constrained approach held up consistently across the unseen tasks. The researchers also re-ran the method with a completely different AI model, Gemini 3.5 Flash, and got the same pattern, and they found that a harness built around one model still improved results on a different, weaker model that had no part in developing it, evidence that the resulting harness can transfer beyond the model used to develop it, at least in the settings tested, rather than a trick that happens to work for one specific AI system.

## The pattern this confirms for any business automation

This is worth connecting directly to something we've written about in a different context entirely. In [The Template Automation Trap](/blog/template-automation-trap), we covered why a pre-built automation that looks like it's working, handling the obvious case smoothly, can still be failing your business quietly, because it was never tested against the specific situations that actually make your business different from a generic template. RRSI's entire reason for existing is the same observation, stated with academic precision: a result that looks great on the case you can see tells you very little about what happens on the cases you haven't checked. Two of the four methods Google tested against are a direct, measured demonstration of exactly the risk that article describes: confident-looking success on the visible benchmark, followed by aggregate out-of-distribution performance below the unevolved baseline.

It's also a clean, concrete illustration of the discipline we argue for in [How Much Autonomy Should an AI Agent Have?](/blog/ai-agent-autonomy-human-in-the-loop). RRSI is, in a real sense, a self-improving system, but every single change it makes has to pass a verifiable check, a unit test, a simulator, or a structured judging process, before it's allowed to stick, and the model itself is never touched at all. That's bounded self-improvement with a human-designed gate at every step, not an AI quietly rewriting itself unsupervised. The lesson generalizes well beyond this specific framework: a self-improving or self-optimizing system is only as trustworthy as the discipline governing what's allowed to survive, not how impressive its best result looks.

## What this actually means if you're not Google

Nobody reading this needs to install RRSI. It's a research framework that requires its own infrastructure, a defined set of tasks to test against, an automated way to score success, and a separate held-out set that's never used during development, which is a serious engineering setup most businesses have no reason to build themselves. What's worth taking from it is the standard it sets, and the question worth asking whoever builds automation for you: not "does this work on the case you showed me," but "what happens on the cases that weren't part of the demo." A vendor or integrator who can answer that question with actual held-out testing, rather than a confident shrug, is doing something close to what separates RRSI from the two methods that quietly made things worse.

## Where this plays out in practice

Illustrative scenario, not a specific Kubera client: a mid-size business is shown an AI customer-support agent that handles every demo question smoothly, and the vendor's own benchmark numbers look strong. Before committing, the business asks the integrator to run the same system against a set of real, messy past tickets that were never used to build or tune the demo, including the odd edge cases that make up a meaningful share of actual support volume. The polished version performs clearly worse on those held-out cases than it did on the demo, which is the exact gap RRSI's regularizers exist to catch in a research setting, and it's the same gap a business can catch on its own, with its own real cases, before signing off on an automation rather than after.

## FAQ

Does RRSI make AI models smarter? No. The underlying model's weights never change. RRSI improves the system built around the model, the prompts, tools, memory, and control logic, while the model itself stays completely frozen.

Is the Terminal-Bench improvement from 74.2% to 80.2% the main finding? It's the attention-grabbing number, but the more important finding is that the gain also transferred to a second benchmark the harness was never evolved against, and that two competing methods failed this exact test, finishing below the unevolved baseline on average across unseen tasks.

Should my business use RRSI directly? Almost certainly not as a drop-in tool. It's a research framework requiring its own evolve-and-held-out testing infrastructure. What matters for a business is the underlying discipline, insisting that any automation be checked against cases it wasn't built around, not the specific framework.

Is this specific to Claude or Anthropic? No. The researchers also tested the same method independently with a different AI model, Gemini 3.5 Flash, and got the same pattern, which is part of why the result is convincing rather than an artifact of one specific model.

How does this relate to the "template automation trap" you've written about? Directly. Both describe the same risk: a result that looks good on the visible, tested case tells you little about what happens on your actual, different situations. RRSI's comparison against four competing methods is essentially a controlled experiment proving that exact point.

What should I ask a vendor building AI automation for my business? Ask what happens on cases that weren't part of the demo or pilot, ideally your own real, messy historical examples rather than ones the vendor selected. A vendor who can show tested performance on genuinely held-out cases is doing the business equivalent of what RRSI's regularizers enforce automatically.

Is this peer-reviewed research? As of this writing, it's a recently published preprint, posted to [arXiv](https://arxiv.org/abs/2609.24972) and accompanied by [open-source code on GitHub](https://github.com/google-research/rrsi), not yet formally published through peer review. The methodology and results are documented in detail, but it's worth treating as a very recent, credible research result rather than settled, established practice.

Does a harness improvement like this cost more to run? Not necessarily. One of RRSI's specific findings is that its regularized approach produced a harness using fewer policy tokens per trial than the less disciplined methods it was compared against, roughly 30% fewer by the paper's own measurement, precisely because it penalizes complexity that doesn't earn a genuine, measured benefit.

Why does this matter for a mid-size business rather than just AI researchers? Because the underlying problem, not the specific framework, is universal. Any AI agent, workflow, or automation can look like it's working because it handles the visible, obvious cases well, while quietly failing on the cases that make your business specific. That's true whether the system was built by Google's research team or a local automation vendor.

Where can I read the original research? It's published on [arXiv](https://arxiv.org/abs/2609.24972) under the title "RRSI: Regularized Recursive Self-Improvement of Agent Harnesses," with accompanying [code on GitHub](https://github.com/google-research/rrsi), for anyone wanting the full technical detail behind the summary in this article.

If you're evaluating an AI agent or automation for your business and want to know how it actually performs on your specific, real-world edge cases rather than just the demo, that's exactly the kind of testing worth doing before committing to a build.

[Discuss your automation project →](/contacts)
