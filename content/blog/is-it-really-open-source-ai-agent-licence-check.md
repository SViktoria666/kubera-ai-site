---
title: "Is It Really Open Source? A Licence Check for AI Agent and Automation Tools"
slug: "is-it-really-open-source-ai-agent-licence-check"
description: "\"Open\" is on every agent tool's homepage, but the licence file often says something different. This guide sorts popular AI agent and automation tools on a five-rung ladder, shows what each rung lets you do for your own company and for clients, and covers licence changes, abandoned projects and the EU AI Act's narrow open-source exemptions."
seoTitle: "Is It Really Open Source? A Licence Check for AI Agent and Automation Tools"
metaDescription: "n8n, OpenClaw, Hermes, Dify, Open WebUI, Flowise and Llama all say \"open\". Which licences are, which are not, and what it means for your business."
date: "2026-11-13"
publishedAt: "2026-11-13"
tags: ["AI agents", "open source", "software licensing", "AI governance", "AI automation"]
status: "published"
language: "en-GB"
category: "AI Automation"
---

# Is It Really Open Source? A Licence Check for AI Agent and Automation Tools

Short answer. Only some of the popular agent and automation tools are open source in the formal sense. OpenClaw and Hermes Agent use the MIT licence. n8n calls itself “fair-code” and says it is not open source. Dify and Open WebUI use Apache or BSD licences with extra conditions. Flowise stayed under an Apache licence while its maintainers announced the project’s wind-down. For a company that uses a tool only for its own work, most of these differences do not matter. They matter a lot if you build for clients, host for several customers, rebrand a tool, or plan to depend on it for years. This article gives a five-rung openness ladder, a use-case table, a licence-history warning and a half-hour check you can run before you commit. It is general information, not legal advice. Licence texts change, so read the file in the version you actually install.

## What “open source” formally means

The [Open Source Initiative (OSI) defines open source through its Open Source Definition](https://opensource.org/osd). One of its criteria forbids discriminating against a field of endeavour, which is why a licence that bans commercial hosting cannot be open source. In 2024 OSI also published version 1.0 of its [Open Source AI Definition](https://opensource.org/ai). For AI systems it asks for three things: data information, meaning enough detail about training data that a skilled person could build a substantially equivalent system; the complete code used to train and run the system; and the model parameters. A model whose weights are published under an MIT licence therefore does not automatically meet that definition.

Two words cause most of the confusion.

- Source-available means you can read the code, but the licence restricts what you may do with it.
- Open weights means you can download a model’s parameters, under whatever terms the publisher chose. It says nothing about code or training data.

## The Kubera Openness Ladder

This is a planning tool from our own practice, not an official classification. It sorts agent and automation software by what the licence file actually gives you, from most to least freedom.

| Rung | What it means | Examples from this check |
| --- | --- | --- |
| 1. Plain open source | An OSI-style licence such as MIT, with no extra conditions | OpenClaw, Hermes Agent, Langflow |
| 2. Open core | Open licence for most code, a separate commercial licence for some folders or features | Activepieces, Flowise |
| 3. Open licence plus extra conditions | A known licence text with added clauses on hosting or branding | Dify, Open WebUI |
| 4. Fair-code or source-available | Readable and usable, but with a commercial restriction written into the licence | n8n |
| 5. Closed service | No source code, you rent access | Hosted-only products |

Rungs 1 and 2 are normally open source for the open part. Rung 3 sits in between. Rung 4 is not open source and does not claim to be.

## What each tool’s licence says

We read the licence text itself, or the vendor’s own licence page, for OpenClaw, Hermes Agent, Dify and Open WebUI. For Langflow, Activepieces, Flowise and n8n we checked the repository or documentation and note where a component-specific licence needs separate review. A licence applies to the repository and version you check, and folders such as `ee` or `enterprise` can carry different terms. Dates are as of 13 November 2026.

| Tool | Licence | Rung | Notes |
| --- | --- | --- | --- |
| OpenClaw | MIT, copyright OpenClaw Foundation | 1 | Repository package metadata and the project’s licence identify MIT. The project says it has no paid tier, hosted service or token |
| Hermes Agent (Nous Research) | MIT | 1 | Official repository LICENSE is MIT |
| Langflow | MIT | 1 | Official repository metadata identifies MIT; check bundled components separately |
| Activepieces | MIT for the core | 2 | Its docs say enterprise features in the `ee` folders need a commercial licence for self-hosted use |
| Flowise | Apache 2.0 for the core. The enterprise directory has a separate commercial licence | 2 | The open-source part remains Apache 2.0; the project’s wind-down creates a maintenance risk |
| Dify | “Dify Open Source License”, Apache 2.0 with added conditions | 3 | No multi-tenant use without written authorisation, and the frontend logo and copyright must stay |
| Open WebUI | Open WebUI License, BSD-3-Clause with a branding clause since v0.6.6 | 3 | Branding restrictions apply to larger deployments; code up to v0.6.5 stays BSD-3-Clause |
| n8n | Sustainable Use License 1.0, plus an Enterprise licence for `.ee.` files | 4 | n8n’s own docs say it does not call itself open source |

Five points deserve a closer look.

OpenClaw and Hermes are the cleanest cases. The [OpenClaw package metadata](https://github.com/openclaw/openclaw/blob/main/package.json) identifies MIT, and the [Hermes Agent LICENSE](https://github.com/NousResearch/hermes-agent/blob/main/LICENSE) is the standard MIT text. OpenClaw’s public project materials say there is no enterprise edition and no paid version; verify the current repository and distribution before relying on that commercial description.

n8n says it is not open source. Its [community licence documentation](https://docs.n8n.io/hosting/community-edition-features/) states that OSI open source licences cannot include limitations on use, so “we do not call ourselves open source”, and that it uses a fair-code model. The licence permits use for your own internal business purposes or for non-commercial or personal use, subject to its terms. The next section covers what that means for agencies.

Dify is the one most reviews gloss over. Its [repository licence](https://github.com/langgenius/dify/blob/main/LICENSE) says that unless explicitly authorised in writing, you may not use the source code to operate a multi-tenant environment, and that one tenant corresponds to one workspace. It also says you may not remove or modify the logo or copyright information in the Dify frontend. Those extra conditions are why the label “Apache 2.0” alone is incomplete.

Open WebUI changed twice. Its [official licence documentation](https://docs.openwebui.com/getting-started/license/) says code up to v0.6.5 remains BSD-3-Clause and that v0.6.6+ has a branding-protection clause. The current [LICENSE](https://github.com/open-webui/open-webui/blob/main/LICENSE) limits branding changes above 50 users in a rolling 30-day period unless written permission or an enterprise licence applies. A contributor licence agreement also applies to new contributions under the updated terms.

Activepieces is open core. The core is MIT, and enterprise features sit in separate folders under a commercial licence. [Its enterprise documentation](https://www.activepieces.com/docs/install/configure-operate/enterprise-edition) lists features that require the enterprise edition, so do not assume every directory in a checkout has the same rights.

## What you may do: a use-case table

Answers follow the licence text or the vendor’s statement. Where the text leaves room for interpretation, we say so.

| Use case | MIT tools (OpenClaw, Hermes) | Dify | Open WebUI | n8n |
| --- | --- | --- | --- | --- |
| Run it inside your own company | Yes | Yes | Yes | Yes |
| Consulting: build and maintain it for a client | Yes | Yes | Yes | Yes, per n8n’s FAQ, but confirm the model |
| Separate installation that each client runs for itself | Yes | Likely yes, check the multi-tenant clause | Yes | Reported as acceptable, confirm in writing |
| Managed hosting: one shared instance where many customers log in | Yes | No, without written authorisation | Yes, with branding kept | Not without a commercial agreement, according to the licence terms |
| Rename and rebrand the tool | Yes, keep the licence notice | No, frontend logo must stay | Only where the licence permits it | Not as a product, according to the licence terms |
| Resale or white-label of access | Yes | No, for multi-tenant | Branding must stay | Not without a commercial agreement |
| Embed it inside your own product | Yes | Check the licence | Check the licence | Needs n8n’s Embed or commercial licence |

On n8n and agencies, the four rows differ. n8n’s [licensing FAQ](https://docs.n8n.io/hosting/community-edition-features/) distinguishes consulting, setup and maintenance from offering a hosted instance where customers log in. Several agency guides conclude that a separate instance per client plus consulting is fine, while customer access to your instance needs a commercial licence. The boundary can be fact-specific. We did not treat an independent summary as stronger than n8n’s own terms, so if your model involves hosting or reselling n8n, get n8n’s answer in writing first.

## Licences change, and so does the project

The licence in a repository today is not a promise about next year. The tools in this article show three patterns.

| Pattern | Example | What happened |
| --- | --- | --- |
| Relicensing | n8n | Launched in 2019 under Apache 2.0 with the Commons Clause, moved to its own Sustainable Use License in March 2022, according to public project history and independent comparison |
| Relicensing in steps | Open WebUI | MIT, then BSD-3, then a custom licence with a branding clause within about four months in 2025 |
| Licence stays, project stops | Flowise | Apache 2.0 code, but the maintainers announced a wind-down in July 2026 |

The Flowise case is the most useful for a mid-size business. Workday acquired Flowise in August 2025. The [Flowise wind-down notice](https://github.com/FlowiseAI/Flowise/discussions/6727) says the Apache 2.0 code is yours to keep building on and encourages teams to fork it. We found the announced wind-down, but do not treat secondary reports of an exact archive date as proof that GitHub has already marked the repository archived. The point is general: an open licence lets you keep and fork the code, but it does not give you a maintainer.

Two protections are cheap. Dify’s licence says the vendor may adjust its terms, and Open WebUI requires a contributor agreement, so assume vendors can relicense future versions. Pin the version you deploy and save a copy of the licence file, with the date, next to it.

For a cost comparison, [how to read AI agent pricing](/blog/how-to-read-ai-agent-pricing) helps separate licence, hosting and model bills.

## Models are a separate ladder

An agent tool is only half of the stack. The model behind it has its own licence, and “open” there usually means open weights. Always read the model card of the exact checkpoint.

| Model family | Licence as reported | What to watch |
| --- | --- | --- |
| OpenAI gpt-oss | Apache 2.0 plus the gpt-oss usage policy, per [OpenAI’s model card](https://openai.com/index/introducing-gpt-oss/) | Read the policy as well as the licence |
| DeepSeek V4 | MIT, per the V4-Pro model card on Hugging Face | Later V4 checkpoints have their own LICENSE files, so check the one you download |
| Gemma 4 | Apache 2.0, per Google’s launch post and model card | Confirm the exact checkpoint and current terms |
| Qwen, Mistral | Varies by release or model | Read the model card for the exact checkpoint |
| Llama | Meta’s own community licence | Monthly-user threshold, acceptable-use policy and, for some multimodal releases, EU-specific terms |

For European businesses, Llama needs special attention. Meta’s [Llama licence and acceptable-use materials](https://www.llama.com/llama-downloads/) contain release-specific terms. Do not extrapolate an EU restriction or a threshold from one Llama checkpoint to every model in the family. If your company is headquartered in the EU and you want a multimodal Llama model, read the current policy for the exact release before deployment.

The same caution applies to DeepSeek and Gemma: an official model card or repository LICENSE for one checkpoint is not proof for every later checkpoint. OpenAI’s gpt-oss documentation describes the models as open-weight under Apache 2.0 plus a usage policy, which is materially different from saying that the whole surrounding service is open source.

## The EU AI Act: the open-source exemptions are narrow

A common assumption is that open-source tools sit outside the AI Act. That is only partly true. The legal text is [Regulation (EU) 2024/1689 on EUR-Lex](https://eur-lex.europa.eu/eli/reg/2024/1689/oj/eng); use the consolidated version applicable to your date and jurisdiction. These are practical summaries, not legal advice.

Article 2(12) excludes certain systems released under free and open-source licences, unless they are placed on the market or put into service as high-risk systems or as a system covered by Article 5 (prohibited practices) or Article 50 (transparency duties). Article 50 covers chatbot disclosures and deepfake labelling, so an agent that talks to customers is not exempt just because the code is MIT. We explained those duties in [EU AI Act after the Omnibus](/blog/eu-ai-act-after-omnibus-2-december-2026).

Article 53(2) relieves providers of general-purpose AI models from specified documentation and downstream-information obligations if the model is released under a free and open-source licence with public weights, architecture and usage information. The exemption does not apply to models with systemic risk, and the copyright-policy and training-content-summary duties still apply. The exact scope depends on the current legal text and the model’s status; a permissive software licence alone does not settle it.

The Commission’s reading is that a licence should not restrict the original provider’s use or charge for the model, although some limited restrictions may be permitted. The Act does not define “open source” in the same way as OSI’s software definition, so licences with commercial-scale thresholds, such as some model community licences, need legal review. We found analysis, not a ruling, for borderline licence questions.

For a company that deploys tools rather than builds models, the practical message is simple: a licence is one factor among others and does not decide your duties on its own. It does not change your duties as a deployer. A customer-facing agent needs its disclosure whether it runs on MIT code or on a closed service. For agents that act on behalf of customers, see [customers’ AI agents arriving on your site](/blog/customers-ai-agents-identity-permissions-liability).

## The half-hour licence check

Run this before you adopt a tool for anything beyond a quick test.

1. Find the licence file. Open the repository’s `LICENSE` file, not the homepage. Note the licence name and the version or date.
2. Place it on the ladder. Plain OSI licence (rung 1), open core (2), extra conditions (3), fair-code (4).
3. Look for the three clauses that matter. Hosting for others, branding or logo, and anything saying files in a folder are under a different licence.
4. Match it to your use case in the table above. Internal use is rarely a problem. Client delivery, hosting and rebranding are where tools differ.
5. Check who can change it. Is it a company, a foundation, or a single maintainer? Is there a contributor agreement that allows relicensing?
6. Check the maintenance. Date of the last release, how many maintainers, and whether security fixes are published. This is where Flowise shows the gap.
7. Write it down. Keep the licence text and date with the version you deploy.

For the data your agents will touch, see [AI data safety for European businesses](/blog/ai-data-safety-european-businesses). If you are unsure what an agent is, [what agentic AI is](/blog/what-is-agentic-ai) covers the basics. For permission boundaries, [AI agent autonomy and human-in-the-loop](/blog/ai-agent-autonomy-human-in-the-loop) is the companion guide.

When you turn a licence decision into a business case, [how to measure the ROI of AI automation](/blog/how-to-measure-roi-ai-automation) gives you a way to record the implementation and supervision cost as well.

## Illustrative scenario

A 30-person marketing agency in the Netherlands, with all details invented for illustration. It wants to run AI agents and automations for twelve clients and is choosing between three set-ups.

| Option | What the agency plans | What the licence check says |
| --- | --- | --- |
| A. One shared n8n instance, clients get logins | Host and charge monthly access | Likely needs a commercial agreement with n8n, since customers log into a hosted instance |
| B. Separate n8n instance per client, agency builds and maintains | Charge for setup and maintenance | In line with n8n’s consulting position, but the agency asks n8n to confirm in writing |
| C. MIT agent such as Hermes on a server per client | Build and run it for each client | Licence allows it. Agency checks maintenance and security instead, and the model licence |

The agency picks B for its automation work and C for a small agent project, writes the licence names and dates into its project files, and adds a line to client contracts saying which third-party licences apply. The decision took an afternoon.

## Frequently asked questions

### Is n8n open source?

No, by the formal definition. n8n calls its model fair-code and its documentation says it does not call itself open source. You can read, run and modify the code for your own internal business purposes, but the Sustainable Use License limits commercial hosting and resale.

### Can an agency use n8n for client work?

According to n8n’s own FAQ and licence materials, you may charge clients for building, setting up and maintaining workflows. Offering a hosted instance where clients log in is where a commercial licence comes in. Because the text leaves room for interpretation, confirm your model with n8n in writing.

### Are OpenClaw and Hermes Agent really open source?

Both use the MIT licence, which is an OSI-approved open source licence. The OpenClaw package metadata identifies MIT, and Hermes Agent’s repository LICENSE states MIT. Whether a project is well maintained and secure is a separate question.

### What is wrong with Dify’s licence?

Nothing, if you use it for your own company or build it for clients as separate workspaces. It is based on Apache 2.0 with two added conditions: no multi-tenant use without written authorisation, and the frontend logo and copyright must stay.

### Does an open licence mean the tool is safe to depend on?

No. The licence tells you what you may do with the code. It says nothing about maintenance. Flowise stayed under Apache 2.0 while its maintainers announced a wind-down, which shows why a fork and security-owner plan matter.

### Can a vendor change the licence later?

Yes, for future versions, and several have. n8n moved to its own licence in 2022, and Open WebUI changed its terms in 2025. Code already released under an earlier licence generally stays under it where the project says so. Pin the version you use and keep a copy of its licence.

### Is an open-weights model the same as an open-source model?

No. Open weights means you can download the parameters under the publisher’s terms. OSI’s Open Source AI Definition also asks for training data information and the code used to train and run the system.

### Can EU companies use Llama?

Usually, subject to the exact release terms. Meta’s licence and acceptable-use materials are release-specific and may contain conditions that matter to EU companies, especially for multimodal models. Read the policy for the specific release before you build on it.

### Does the EU AI Act exempt open-source tools?

Only partly. Article 2(12) provides a limited open-source exclusion, but Articles 5 and 50 and high-risk uses remain relevant. Article 53(2) relieves some model-provider documentation duties for qualifying open models, but not for systemic-risk models. Check the current legal text and your role.

## Sources

- [Open Source AI Definition 1.0, Open Source Initiative](https://opensource.org/ai)
- [Open Source AI Definition FAQ, Open Source Initiative](https://opensource.org/ai/faq)
- [n8n fair-code and community licence documentation](https://docs.n8n.io/hosting/community-edition-features/)
- [n8n LICENSE.md](https://github.com/n8n-io/n8n/blob/master/LICENSE.md)
- [What the n8n Sustainable Use License allows, SSD Nodes](https://www.ssdnodes.com/blog/n8n-license/)
- [Hosting n8n for customers: what the license allows, NordFlux](https://nordflux.com/blog/n8n-license/)
- [OpenClaw LICENSE and package metadata, GitHub](https://github.com/openclaw/openclaw/blob/main/package.json)
- [OpenClaw, official site](https://openclaw.ai/)
- [Hermes Agent LICENSE, GitHub](https://github.com/NousResearch/hermes-agent/blob/main/LICENSE)
- [Hermes Agent, official site, Nous Research](https://hermes-agent.nousresearch.com/)
- [Dify license, GitHub](https://github.com/langgenius/dify/blob/main/LICENSE)
- [Dify “Open Source” License, OSI license-discuss](https://lists.opensource.org/pipermail/license-discuss_lists.opensource.org/2025-October/005475.html)
- [Open WebUI license and FAQ](https://docs.openwebui.com/getting-started/license/)
- [Open WebUI LICENSE, GitHub](https://github.com/open-webui/open-webui/blob/main/LICENSE)
- [Activepieces license documentation](https://www.activepieces.com/docs/install/configure-operate/enterprise-edition)
- [Flowise enterprise LICENSE](https://github.com/FlowiseAI/Flowise/blob/main/packages/server/src/enterprise/LICENSE.md)
- [The Future of Flowise, FlowiseAI](https://github.com/FlowiseAI/Flowise/discussions/6727)
- [Llama licence and downloads, Meta](https://www.llama.com/llama-downloads/)
- [gpt-oss model card and terms, OpenAI](https://openai.com/index/introducing-gpt-oss/)
- [Gemma model terms and documentation, Google](https://ai.google.dev/gemma/terms)
- [DeepSeek model releases and licences](https://huggingface.co/deepseek-ai)
- [Open-weight model licences, Vercel](https://vercel.com/blog/open-source-models)
- [Open weights vs open source, GeoToolbox](https://geotoolbox.com/open-weights-vs-open-source/)
- [Regulation (EU) 2024/1689, EUR-Lex](https://eur-lex.europa.eu/eli/reg/2024/1689/oj/eng)
- [Commission guidance on navigating the AI Act](https://digital-strategy.ec.europa.eu/en/faqs/navigating-ai-act)
- [What open source developers need to know about the EU AI Act, Linux Foundation Europe](https://linuxfoundation.eu/newsroom/what-open-source-developers-need-to-know-about-the-eu-ai-act)
- [The EU AI Act: application to open-source projects, Orrick](https://www.orrick.com/en/Insights/2024/08/The-EU-AI-Act-Application-to-Open-Source-Projects)
- [Article 53, EU AI Act navigator, Mishcon de Reya](https://www.mishcon.com/news/article-53-of-the-eu-ai-act)

[Discuss your automation project →](/contacts)
