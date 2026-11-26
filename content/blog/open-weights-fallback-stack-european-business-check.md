---
title: "Open-Weight AI Fallback: Licence, Cost and Hardware Check for 15 Models"
slug: "open-weights-fallback-stack-european-business-check"
description: "Which open-weight models can a European business keep and use at work? Licence, storage, hardware and cost compared for text, image, video, voice, music and speech."
seoTitle: "Open-Weight AI Fallback: Licence, Cost and Hardware Check for 15 Models"
metaDescription: "Which open-weight models can a European business keep and use at work? Licence, storage, hardware and cost compared for text, image, video, voice, music and speech."
excerpt: "Weights on a disk are not yet a working fallback. We compare licence, size, hardware and cost for 15 open-weight model families before a price change or retirement forces the question."
date: "2026-11-27"
publishedAt: "2026-11-27"
tags: ["AI models", "AI governance", "Data Safety", "AI Automation"]
status: "published"
language: "en-GB"
category: "AI Automation"
---

# Open-Weight AI Fallback: Licence, Cost and Hardware Check for 15 Models

A tool your team uses every day can change terms with a few weeks of notice. A price step arrives, a model is retired, a plan is merged into another one. Teams that depend on one hosted model feel it in the same week: the content calendar slips, the support drafts stop, the weekly report has no author.

As of 26 November 2026, DeepSeek routes all V4-Pro requests to V4.1-Flash from 14 September 2026 and bills them at Flash rates, with no date given for a V4.1-Pro. Anyone who had tuned prompts to the retired model had to retest. A copy of an open-weight model you hold does not change when a vendor changes its catalogue.

A list of 24 Hugging Face repositories has been circulating, covering language, image, video, voice, music and speech recognition. The idea is reasonable: download the weights while they are available. This article checks the list as a business reader would: what each model is, whether you may use it at work, how large it is, what hardware it needs, what it costs to run, and how to keep it current. This article is not legal advice.

## The position: weights on a disk are not a working fallback

A fallback has five parts. The licence decides whether you may use the weights for your business. The files must be complete and verified. The hardware decides whether they run. A quality test decides whether the output is good enough. A written runbook decides whether a colleague can switch over on a bad day.

The list names fifteen model families. The 24 repositories come from counting each language model three times (original weights, GGUF conversion, abliterated build) plus the image, video, voice, music and speech models.

Kubera AI planning heuristic, not a universal benchmark. It is not a validated method. We call it the Fallback Readiness Ladder and use it to decide whether a model deserves disk space and an owner.

| Rung | Question | Evidence to keep |
| --- | --- | --- |
| 1 Rights | May our company use this for paid work in our market? | Licence text and repository revision |
| 2 Bytes | Do we hold a verified copy of every file the model needs? | File list, sizes and checksums |
| 3 Hardware | Can we own or rent a machine that runs it? | Named machine and measured memory use |
| 4 Quality | Does it pass ten of our own real tasks? | Saved inputs and reviewed outputs |
| 5 Runbook | Can a colleague switch over in one afternoon? | One page with owner and steps |

A model that fails rung 1 should not occupy a place in the stack, however good the demo looks. A model that passes rungs 1 and 2 but has no owner at rung 5 is a download, not a fallback.

The runbook should also say what happens when the primary service fails; [the AI automation outage recovery plan](/blog/ai-automation-outage-recovery-plan) covers that first-hour response.

## Open-weight is not the same as open-source

The Open Source Initiative defines open-source AI in its Open Source AI Definition 1.0 as a system made available with the code, the data information and the parameters needed to study and modify it, under terms the Initiative approves. Weights alone cover one of those components.

Most releases on the list publish weights and inference code. Some use Apache 2.0 or MIT, which are approved licences. Others use custom community or research licences that restrict commercial use, company size or territory. Calling all of them open-source hides the difference that matters for a business. Our article on [checking whether an AI agent is really open source](/blog/is-it-really-open-source-ai-agent-licence-check) shows how to read such claims. For a fallback, ask the narrower question: does the licence let us run this for our own paid work, today, in the EU?

For the separate transparency question when a model generates synthetic audio or other media, see [the EU AI Act after the Omnibus](/blog/eu-ai-act-after-omnibus-2-december-2026).

## Can you download and store them without deploying?

Technically yes. Downloading is a file transfer. The hf download command accepts `--include` patterns, so you can fetch one model file instead of a whole repository, and a dry-run option to list sizes first. The files can sit on a NAS or object store without running.

Legally, it depends on the licence. Apache 2.0 and MIT licences allow you to hold and use copies. Gated repositories ask you to accept terms and use an access token, and accepting is itself an agreement. Research licences allow evaluation but require a separate licence for business use. The HunyuanVideo 1.5 licence states that it does not apply in the European Union. Storing the file does not change those conditions.

## All 15 families in one table

Figures are as reported in the sources listed at the end, as of 26 November 2026. Memory figures are reported measurements or vendor statements, not requirements, and your own test may differ. The last column shows how far we checked the licence ourselves.

| Model | Task | Licence as published | Size reported | Memory reported | Licence checked against |
| --- | --- | --- | --- | --- | --- |
| Qwen3.8-27B | Text | Apache 2.0 | 15 to 22 GB for Q4 and Q6 files | A 24 GB card holds Q4 in community tests | Model card |
| Qwen3.8-Flash-Next | Text | qwen-community-1.0, gated | Not stated | Not stated, examples use four GPUs | Card tag, text not read |
| GLM-5.3-Flash | Text | MIT | About 328 GB in FP8, community figure | NVIDIA serves it on eight H100 GPUs | Vendor documentation |
| DeepSeek V4.1 Flash | Text | MIT | 475 to 510 GB, sources differ | NVIDIA recipes use eight GB200 GPUs | Repository listing |
| Qwen-Image 2.1 | Image | Qwen Research License, non-commercial | About 33 GB in bf16, community figure | About 15 GB quantised, community figure | Clauses quoted in coverage |
| MOSS-Image Base | Image | Apache 2.0 | Not stated | 11 to 28 GB in community reports | Third-party listing |
| FLUX.3 Klein | Image | FLUX Kommunity License, gated | 11.2 GB generator in BF16 | 8 GB for the INT8 build, per the vendor | Secondary reports |
| Wan 2.2 A14B | Video | Apache 2.0 | Not stated | Official command needs 80 GB, community build about 20 GB | Model card |
| HunyuanVideo 1.5 | Video | Tencent Hunyuan Community License, excludes the EU | 338 GB for the whole repository | About 14 GB with offloading, reported | Licence text copy |
| LTX-2.5 | Video | LTX-2.x Community License, gated | About 66 GiB for quickstart files | 16 GB minimum, per the vendor | Licence text copy |
| Fish Audio S2 Pro | Voice | Fish Audio Research License | About 12 GB in bf16, community figure | About 24 GB, 12 GB in FP8, community | Licence text |
| Qwen3-TTS 1.7B Base | Voice | Apache 2.0 | 4.5 GB | 6 to 8 GB, community guides | Model card and preprint |
| ACE-Step 1.5 | Music | MIT | Not stated | Under 4 GB, per the card | Model card |
| YuE2 | Music | CC BY-NC 4.0 | About 4 GB in INT8, community | 24 GB in BF16, about 7.5 GB in INT8 | Third-party listings |
| Whisper Large v3 Turbo | Speech | MIT | About 1.6 GB | About 6 GB, per the card | Model card |

Reading the table by rung 1, our provisional assessment of the licences as published is this. Eight can be used commercially as published: Qwen3.8-27B, GLM-5.3-Flash, DeepSeek V4.1 Flash, MOSS-Image Base, Wan 2.2, Qwen3-TTS, ACE-Step 1.5 and Whisper. Three are conditional: Qwen3.8-Flash-Next, FLUX.3 Klein and LTX-2.5. Four are not suitable for commercial work in Europe without a separate agreement: Qwen-Image 2.1, HunyuanVideo 1.5, Fish Audio S2 Pro and YuE2. This is an 8/3/4 provisional classification, not a substitute for reading the applicable licence before deployment.

## What we read in the original text, and what we did not

The last column matters. We read the Fish Audio licence in its original form: research and non-commercial use is free, and commercial use, defined to include internal business operations, needs a written licence. We read the HunyuanVideo 1.5 licence through a copy of the file and the Hugging Face repository history: its territory excludes the European Union, the United Kingdom and South Korea, and its first line says it does not apply there. We read the LTX-2 Community License through the file published on a Lightricks repository: entities with annual revenue of at least ten million dollars need a paid commercial licence. For Qwen-Image 2.1, the clauses that define non-commercial as research or evaluation only are quoted in several analyses of the Hugging Face file.

We could not open three original texts. FLUX.3 Klein reports its terms as free commercial use below five million dollars of revenue including affiliates, but we saw this only in the model card summary and press coverage. The Qwen Community License 1.0 for Flash-Next shows a clause with thresholds of 100 million monthly users or 20 million dollars of monthly revenue in a third-party copy, while other commentary describes a separate licence for some assistant and API businesses with no threshold. Those accounts differ, so read the file in the gated repository. Press reports that the licence may not qualify for the EU AI Act open-source exemption are unconfirmed. The 8/3/4 classification above is therefore a planning assessment: conditional or insufficiently verified licences require confirmation before commercial deployment.

## Language models: three different machines

Qwen3.8-27B is the one a normal workstation can run. Community GGUF conversions at Q4_K_M are about 15.4 to 15.7 GB and Q6_K about 20.6 to 22.4 GB, so a 24 GB card is a reasonable starting point, and a machine with 32 GB of unified memory can try Q5 or Q6.

Qwen3.8-Flash-Next has a 125B main model plus 51B of N-gram embedding parameters and 6B active per token, per its README, which says the embedding table can be offloaded to host memory. The card gives no memory figure.

GLM-5.3-Flash has 320B parameters with 18B active. Active parameters say little about memory, because all 320B must be held somewhere. Community figures run from about 93 GB for a one-bit GGUF to about 200 GB at Q4 and 328 GB for native FP8.

DeepSeek V4.1 Flash has a 552B backbone, 8B active when reading and 16B when writing, and a context of up to one million tokens. The repository with the 1017 suffix is the weight update dated 17 October 2026, which the vLLM recipe recommends, and the September launch release stays available. For most mid-size European companies, the two largest models are rented-server options, not office-machine options.

### GGUF and abliterated builds

A GGUF file is a model file format used by llama.cpp and tools built on it. It can contain quantised or non-quantised weights; the format name alone does not tell you the precision or memory requirement. Third parties make many conversions, the original licence still applies, and quality and memory use depend on the particular file. An abliterated build is a copy altered to remove refusal behaviour. We explain these because they appear on the list, and we do not recommend them for business use: unknown third parties make the changes, the model no longer behaves as its vendor tested it, and you cannot easily show a customer or auditor what you run.

Weight-file size alone also does not determine runtime memory. Runtime overhead, context length, KV cache, framework requirements and concurrent inference can add substantially to the memory needed. Treat every memory figure here as a starting point for a measured test, not a hardware guarantee.

## Image and video: the licence is the bottleneck

Qwen-Image 2.1 has a 7B visual generator and a separate 8B text encoder, and is licensed for research and evaluation only. The first Qwen-Image was released under Apache 2.0, so the tighter terms belong to version 2.1. MOSS-Image Base is a 5B Apache 2.0 base checkpoint meant for fine-tuning, so expect to tune it. FLUX.3 Klein has 5.6B parameters, was released on 15 October 2026, and Black Forest Labs also publishes EU-specific commercial terms for larger users.

Wan 2.2 A14B (text-to-video and image-to-video) is Apache 2.0 and produces five-second clips at 480P and 720P. HunyuanVideo 1.5 has 8.3B parameters, and its licence territory excludes the EU. The Hugging Face repository also carries a flag that disallows EU access in the gating settings. LTX-2.5 has 22B parameters and is free for commercial use below the revenue threshold, with fine-tune transfers possibly needing a paid licence.

## Voice, music and speech: where small models do real work

Whisper Large v3 Turbo, with 809M parameters, MIT licence, about 6 GB of memory and a download of about 1.6 GB, is the easiest rung-5 success on the list. Qwen3-TTS 1.7B Base clones a voice from about three seconds of audio across ten languages, including German, French, Spanish and Italian. An identifiable voice recording is personal data under GDPR, but it is not automatically special-category biometric data; that depends on whether it is processed to uniquely identify someone or otherwise falls within the applicable biometric-data rules. Employee consent is not automatically a valid GDPR legal basis, because employment relationships can make consent insufficiently freely given. Synthetic-audio disclosure duties also depend on the applicable circumstances. Use voices only after checking the legal basis, permissions and disclosure requirements.

Fish Audio S2 Pro covers more than 80 languages but needs a commercial licence for business use. ACE-Step 1.5 is MIT; its card says it was trained on licensed, royalty-free and synthetic music, which is a vendor claim, so a company that publishes generated music should ask its own adviser about output rights. YuE2 is non-commercial.

## Cost: own hardware, rented GPUs, an API or hybrid infrastructure

The cheapest option per token is rarely the one that gives you continuity, so compare four routes on what each protects.

| Route | What you pay | Reported figure as of November 2026 | What it protects |
| --- | --- | --- | --- |
| Own hardware | Purchase, power, maintenance | RTX 5090 street price above 5,000 euros in the EU, RTX PRO 6000 Blackwell listed by NVIDIA at 13,250 dollars | More infrastructure control and the ability to keep a tested local copy, while model and software licences still apply |
| Rented GPU | Hourly rate | RTX 5090 from 0.78 dollars per hour, RTX PRO 6000 from 1.72 to 5.50 dollars per hour, H100 from 4.50 to 6.16 dollars per GPU-hour | Fast start, no purchase |
| API | Per token | DeepSeek V4.1 Flash output 0.60 dollars per million tokens off-peak, double at peak | Lowest cost at low volume |
| Hybrid | A local small model plus rented or API capacity for larger or burst workloads | Depends on routing and utilization | A tested local fallback with flexible overflow capacity |

A rough calculation, treating euro and dollar as equal as a simplifying assumption rather than a current exchange rate, and ignoring power and the rest of the computer: a 5,000 card divided by 0.78 per hour is about 6,400 hours, or about 267 days of continuous use. For office-hours use of about 176 hours a month, that is about three years. An eight-GPU H100 node at the quoted rates costs about 36 to 49 dollars per hour, so 176 hours cost roughly 6,300 to 8,700 dollars. Rental prices also move: one provider raised its RTX PRO 6000 rate from 2.09 to 2.49 dollars on 9 October 2026.

The units behind an API quote deserve the same care as the hardware arithmetic; [the AI agent pricing guide](/blog/how-to-read-ai-agent-pricing) explains how to compare them.

That GPU-only break-even calculation is not a full total-cost-of-ownership estimate. Electricity, maintenance, storage, engineering time, monitoring and utilization can change the result materially. API pricing, rented capacity and hardware economics are workload-specific; APIs are not always cheaper, and self-hosting is not automatically cheaper.

The honest summary: for small models such as Whisper, Qwen3-TTS and Qwen3.8-27B, owning a workstation can pay back. For the 320B and 552B models, an API is cheaper at normal volumes and a rented server is the fallback. Owning weights is insurance, and insurance has a premium.

## Updating models and keeping earlier versions

Models change. A newer version can improve quality, change the licence or disappear from the repository, as the Qwen-Image licence change shows. Downloaded weights do not automatically improve through ordinary usage. Updates happen when you deliberately download a new checkpoint, change inference software, fine-tune a model, or add and refresh a retrieval-augmented generation (RAG) index; those are different changes with different testing and rollback implications. A fallback needs a version policy.

Pin the revision. Download with a named revision hash, not "latest", and record it with the licence text.
Keep the previous version until the new one passes your ten saved tasks.
Test first, swap second. Run old and new on the same inputs, compare the outputs, and write down the difference.
Re-read the licence for each new version before the download, since terms can differ between versions.
Keep checksums and a copy off the machine that runs the model.

Version-pin the inference software too, record any fine-tuning dataset or adapter, and test RAG retrieval separately from model output. A rollback should name the checkpoint, software version, configuration and index snapshot, not just a model family.

DeepSeek shows why: the September release and the 17 October update both exist side by side, and the vendor recommends one. A team that keeps both can compare and roll back.

This is also a roadmap decision rather than a one-time download; [the AI roadmap guide](/blog/how-to-build-an-ai-roadmap) shows how to give the test, owner and rollback a place in the wider implementation plan.

## Illustrative scenario, not a specific Kubera client

Imagine a European training-content company with about 60 staff. It uses a hosted language model for drafting, a hosted image tool for course visuals and a hosted voice service for narration. We describe the design intent here, not a measured result.

The company starts with the cheapest rungs. It puts Whisper Large v3 Turbo on an office workstation for transcripts, Qwen3-TTS for narration with voices from staff who signed a consent form, and Qwen3.8-27B at Q4 on a 24 GB GPU for first drafts. It stores MOSS-Image Base with its licence text and tests it on ten course visuals before deciding whether to fund a GPU. Each model gets an owner, a one-page runbook and a quarterly test. The design intent is that a price change on one hosted service becomes a scheduled decision instead of an emergency.

## Where data protection fits

Running a model on your own machine changes the data-protection picture but does not remove it. If a hosted service processes personal data subject to GDPR on your behalf, you need a controller–processor agreement (Article 28) with that provider. Self-hosting can remove the processor from that flow, while staff, voice recordings and customer transcripts remain personal data. Our guides on [AI data safety for European businesses](/blog/ai-data-safety-european-businesses) and [shadow AI risk](/blog/shadow-ai-business-risk-europe) cover the policy side. A downloaded model nobody owns is itself shadow AI.

For a business considering a more independent regional stack, [the sovereign AI guide for Europe](/blog/sovereign-ai-europe-mistral-guide) puts the infrastructure question alongside the model and contract questions.

## How Kubera AI can help

Kubera AI [designs and builds AI automations for European businesses](/services), and we work in writing. For a fallback review, you send an inventory of the tools and models you use. We return a Fallback Readiness Ladder assessment for each, a shortlist of models that pass rung 1 for your market and company size, a draft runbook, and a build plan for the automations that should switch over. We do not install unreviewed models on your systems, and we do not recommend abliterated builds.

## FAQ

### Is it legal to download these models and keep them without using them?

For Apache 2.0 and MIT models, holding a copy is permitted under the licence. For gated repositories, you accept terms to download, and they apply to the copy. For research licences, holding is possible, but business use needs a separate licence. This is general information, not legal advice.

### Can a 320B or 552B model run on one gaming PC?

Not at useful quality without very large combined memory, in the sources we reviewed. GLM-5.3-Flash has community reports of a roughly 93 GB one-bit GGUF and larger Q4 and FP8 files; DeepSeek V4.1 Flash is documented on eight-GPU nodes. Runtime overhead, context length, KV cache and concurrent inference still need to be measured for the exact build.

### Why does Qwen-Image 2.1 not count as a commercial fallback?

Its licence defines non-commercial as research or evaluation only and requires a separate commercial licence. The earlier Qwen-Image was Apache 2.0.

### Can a company in the EU use HunyuanVideo 1.5?

Its licence states that it does not apply in the European Union. Without a written agreement from Tencent, treat it as unavailable for business use.

### What does gated mean on Hugging Face?

You log in, accept the publisher's conditions and, for scripted downloads, use a token with gated-repository access. Acceptance is often automatic, but the conditions then bind you.

### Are abliterated builds a good way to get fewer refusals?

We do not recommend them for business use. Third parties alter them, they are not the model the vendor tested, and they are hard to defend to a customer or auditor.

### Does self-hosting remove my GDPR duties?

No. It can remove a processor from a data flow, so a controller–processor agreement (Article 28) may not be needed for that flow, but the personal data you handle remains subject to GDPR. Ask your data-protection adviser.

### Is the 24-repository list a complete fallback stack?

It is a useful starting inventory. It mixes models you can use commercially with models you cannot, and it has no owners, tests or runbooks.

## Sources

Licences and model cards, accessed 26 November 2026. Items marked community or secondary are not vendor statements. The original 24-repository inventory was not independently rechecked in full; the classifications and measurements above retain their stated confidence limits.

Open Source AI Definition 1.0: https://opensource.org/ai/open-source-ai-definition
Qwen3.8-27B card: https://huggingface.co/Qwen/Qwen3.8-27B
Qwen3.8-Flash-Next card: https://huggingface.co/qwen/qwen3.8-flash-next
Qwen3.8-Flash-Next README: https://raw.githubusercontent.com/QwenLM/Qwen3.8-Flash-Next/main/README.md
Qwen Community License 1.0 text copy, third party: https://ollama.com/dlasher/qwen3.8-flash-next-instruct-125B-A6B:Q4_K_M/blobs/9fc8eea719a2
Press report on Qwen terms and the EU AI Act: https://thenextweb.com/news/qwen38-flash-next-qwen4-architecture-open-licence-ai-act
GLM-5.3-Flash on NVIDIA NIM: https://docs.api.nvidia.com/nim/reference/z-ai-glm-5-3-flash
GLM-5.3-Flash sizes, community: https://codersera.com/blog/how-to-run-glm-5-3-flash-locally-2026/
DeepSeek V4.1 Flash, Docker Hub: https://hub.docker.com/r/ai/deepseek-v4.1-flash
DeepSeek V4.1 Flash, NVIDIA recipe: https://docs.nvidia.com/dynamo/dev/recipes/deepseek-v4-1-flash
DeepSeek V4.1 Flash, vLLM recipe: https://recipes.vllm.ai/deepseek-ai/DeepSeek-V4.1-Flash
DeepSeek rerouting and pricing, press: https://thenextweb.com/news/deepseek-v4-1-flash-launch-v4-pro-retired-price-cut
Qwen-Image 2.1 licence clauses, secondary: https://www.creativeainews.com/articles/qwen-image-2-1-research-license-commercial-use-2026/
Qwen-Image 2.1 sizes, community: https://openclawdc.com/blog/can-i-run-qwen-image-2-1-locally/
MOSS-Image Base listing: https://comfyui-wiki.com/models/moss-image/moss-image-base
FLUX.3 Klein page: https://bfl.ai/models/flux-3-image-klein
Black Forest Labs EU commercial terms: https://bfl.ai/legal/eu-self-hosted-commercial-license-terms
Wan 2.2 T2V A14B card: https://huggingface.co/Wan-AI/Wan2.2-T2V-A14B
HunyuanVideo 1.5 card: https://huggingface.co/tencent/HunyuanVideo-1.5
HunyuanVideo 1.5 technical report, arXiv preprint: https://arxiv.org/abs/2511.18870
LTX-2 Community License file: https://huggingface.co/Lightricks/LTX-2.3/blob/main/LICENSE
LTX-2.5: https://huggingface.co/Lightricks/LTX-2.5
Fish Audio S2 Pro licence: https://huggingface.co/fishaudio/s2-pro/blob/main/LICENSE.md
Qwen3-TTS 1.7B Base: https://huggingface.co/Qwen/Qwen3-TTS-12Hz-1.7B-Base
Qwen3-TTS technical report, arXiv preprint: https://arxiv.org/abs/2601.15621
ACE-Step 1.5: https://github.com/ACE-Step/ACE-Step-1.5
YuE2-3B: https://huggingface.co/m-a-p/yue2-3b
Whisper Large v3 Turbo: https://huggingface.co/openai/whisper-large-v3-turbo
GPU purchase and rental prices, secondary: https://www.thundercompute.com/blog/nvidia-rtx-pro-6000-pricing and https://www.thundercompute.com/blog/nvidia-rtx-5090-pricing
RTX 5090 EU street price: https://www.guru3d.com/story/geforce-rtx-5090-street-prices-in-eu-now-exceed/
RTX PRO 6000 NVIDIA listing price: https://www.pcgameshardware.de/Grafikkarten-Grafikkarte-97980/News/RTX-Pro-6000-Preis-13250-US-Dollar-1545247/
H100 on-demand rates, secondary: https://fourweekmba.com/ai-nvidia-says-gpu-rents-rose-8-gpu-h100s-list-at-4-50-6-16/

[Discuss your automation project →](/contacts)
