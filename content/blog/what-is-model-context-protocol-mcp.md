---
title: "What Is MCP (Model Context Protocol), and Why It Matters for Your Business"
slug: "what-is-model-context-protocol-mcp"
description: "An AI agent that can chat but can't actually check a calendar, update a CRM record, or pull real data is only doing half the job. MCP is the open standard now solving that specific problem, and it's moved from experimental to genuinely mainstream faster than most infrastructure standards do."
seoTitle: "What Is MCP (Model Context Protocol)? A Business Guide"
metaDescription: "MCP is the open standard helping AI agents connect to business systems through a common integration protocol instead of rebuilding the client-side connection pattern for every tool."
date: "2026-09-04"
publishedAt: "2026-09-04"
tags: ["mcp", "ai agents", "business systems", "workflow automation", "integrations", "ai automation"]
status: "published"
language: "en-GB"
category: "AI Automation"
---

An [AI agent](/blog/what-is-an-ai-agent) that can hold a good conversation but can't actually check your calendar, look up an order status, or update a CRM record is only doing half the job. For a long time, giving an AI system that kind of real access meant custom integration work for every single tool, one connector for the CRM, another for the calendar, another for the internal database, each one built and maintained separately. The Model Context Protocol, MCP, is the open standard built to solve exactly that problem, and it's moved from an experimental release to something genuinely mainstream faster than most technical standards manage.

This article covers what MCP actually is, how quickly it's actually been adopted, what it means for security and data governance, and how to think about whether it matters for your business right now.

## What MCP actually is

MCP gives AI models a standardized protocol for connecting to external tools and data sources, instead of a different custom integration for every pairing of AI system and business tool. We defined this briefly in our [AI automation glossary](/blog/ai-automation-glossary); this article goes into what it actually means for a business deciding whether to act on it. Before MCP, connecting an AI agent to your calendar, your CRM, and your internal knowledge base meant building and maintaining three separate, bespoke connections. With MCP, a tool exposes a standard MCP server once, and an MCP-compatible AI system can interact with it through that same protocol, the way a USB port works with any compatible device rather than needing a different cable for every manufacturer, subject to whatever authentication, permissions, and specific capabilities that server actually supports.

It's worth being direct about what this does and doesn't remove. MCP standardizes the connection interface, but it doesn't eliminate integration work on its own. Authentication and identity, permission scoping, mapping a business's specific actions to the tools the server exposes, error handling, and ongoing monitoring are all real work that still needs doing, and the protocol's own maintainers have pointed to authorization specifically as one of the areas where implementers have spent the most integration time. What MCP removes is the need to build a separate, custom client-side connection for every individual AI system and tool pairing, which is a real and meaningful reduction in duplicated engineering effort, just not the same thing as "no integration work."

Anthropic released MCP as an open standard in November 2024. In December 2025, Anthropic donated the protocol to the Agentic AI Foundation, a directed fund under the Linux Foundation co-founded by Anthropic, Block, and OpenAI, moving governance to a vendor-neutral, community process rather than a single company's product roadmap. That's a genuinely important detail for any business wondering whether adopting MCP means locking into one AI vendor: it doesn't, and the major AI providers, including Anthropic, OpenAI, and Google, along with Microsoft, all support it natively.

## How fast this has actually moved

It's worth grounding this in the protocol's own published numbers rather than vendor hype, since the growth here is genuinely unusual even by AI-industry standards. By December 9, 2025, when Anthropic donated the protocol to the Agentic AI Foundation, monthly SDK downloads had reached 97 million, alongside more than 10,000 active public MCP servers. Growth didn't stop there: by July 2026, Tier 1 SDK downloads were running at close to half a billion per month, with the TypeScript and Python SDKs each having passed 1 billion in cumulative downloads.

On July 28, 2026, the protocol's maintainers shipped a major specification update making the protocol core stateless, making remote MCP servers substantially easier to scale behind ordinary HTTP infrastructure without sticky sessions or shared session state, since any request can now reach any server instance behind a standard load balancer. Remote MCP servers themselves aren't new, the maintainers note they've existed for more than a year, but this update removed a real scaling constraint alongside enterprise-focused features including managed authorization and hardened authentication designed to close specific security gaps identified in earlier versions of the protocol. Companies building on the update publicly, including Cloudflare, Figma, and the observability platform Honeycomb, describe this as removing a real friction point for running agent infrastructure at production scale. Honeycomb specifically reported that close to 20% of its monthly interactive queries are now made by AI agents rather than people, a genuine, attributed data point about how far agent-driven usage has already progressed for at least one real company, not a projection.

On the more cautious, verifiable side: Gartner has projected that up to 40% of enterprise applications may include task-specific AI agents by the end of 2026, up from less than 5% in 2025, which is directly relevant here since those agents need a way to actually connect to the tools they're meant to act on, which is precisely what MCP standardizes. Separately, Stacklok, a company focused on AI and software supply chain security, surveyed software-industry technical leaders in December 2025 and found 45% already reporting limited or broad production use of MCP servers, with 64% naming security concerns and requirements as their top obstacle to adopting it further, worth noting as a single vendor-conducted survey rather than an economy-wide statistic, but a genuine, sourced signal that adoption and security concerns are rising together rather than one crowding out the other.

## What Eurostat's data shows, and what it doesn't

Eurostat doesn't track MCP or agent-connectivity infrastructure specifically, and no EU-wide statistic exists yet for this particular layer of AI adoption. What Eurostat does show is the broader baseline MCP adoption sits on top of: 20.0% of EU enterprises with 10 or more employees used AI technologies in 2025, concentrated in information and communication (62.52%) and professional, scientific, and technical services (40.43%). MCP adoption specifically is reasonable to treat as an emerging layer within that broader figure, most relevant to businesses that have already adopted an AI agent and are now running into the integration problem MCP addresses, rather than a separate adoption curve of its own.

For context: how this looks in the US market

Since a lot of the concrete, attributed MCP adoption examples come from US and US-headquartered technology companies, it's worth being explicit about that rather than letting it blend into a claim about Europe. A visible pattern among B2B software vendors, many of them US-based, is the addition of MCP support so customers can use their products through AI-agent workflows rather than being limited to the vendor's own interface. Companies including Figma, Sentry, and Linear have shipped MCP support along these lines, and the pattern across the case studies we could verify is straightforward: vendors that expose their data through an MCP server let their customers' AI agents interact with that data directly, which is increasingly part of how software gets used day to day, alongside a traditional user interface rather than instead of one.

None of that automatically transfers to a European business evaluating MCP for internal use rather than as a SaaS vendor. The relevant question for most European mid-size businesses isn't whether to build an MCP server for others to use, it's whether the tools you already rely on, your CRM, calendar, or internal systems, already support MCP, and whether that's enough to justify connecting an AI agent to them now rather than waiting.

## Security and governance: the part that actually matters most

Multiple sources tracking enterprise MCP deployment describe security as the defining requirement in how businesses are actually rolling this out, and it's worth taking that seriously rather than treating MCP as a plug-and-play convenience. An MCP server that connects an AI agent to a CRM or database is granting that agent real access to real systems, which means the same access-control discipline that applies to any employee or integration needs to apply here too: scoped permissions rather than blanket access, and a clear record of what the AI system can see and do.

The practical recommendation that shows up consistently across early enterprise deployments is to start with read-only access to your most-used data, and only expand to systems that let the AI take actions, updating a record, sending a message, once the access pattern has been tested and validated. Where personal data is processed through an MCP connection, the roles of your business, the party operating the MCP server, the AI provider, and the underlying tool provider need to be worked out from the actual processing and contracts involved, not assumed from a single fixed pattern: a provider processing personal data on your business's behalf will generally require an Article 28 arrangement, but MCP itself doesn't determine those GDPR roles, and a given deployment may involve more than one processor or a provider acting as controller for its own separate purposes. We cover this in more depth in [Is Your Business Data Safe with AI?](/blog/ai-data-safety-european-businesses). MCP itself is an integration protocol, not an AI system in the sense the EU AI Act regulates, but the AI agent using it, and what that agent is authorized to do once connected, is what any compliance review should actually focus on.

## A framework for deciding if this matters for your business

This is a Kubera AI planning heuristic, not a universal benchmark, meant to help decide whether MCP is worth acting on now rather than treat it as something every business needs immediately.

The Kubera MCP Readiness Filter asks four questions:

Do you already have an AI agent or assistant in use that's limited by an inability to connect to your real tools? If the current bottleneck is genuinely "the AI can't act on our systems," MCP is solving a problem you actually have. If you don't yet have an agent in production, this is a reason to revisit the question once you do, not before.
Do the tools you rely on already support MCP, or would someone need to build a custom server? MCP already has native support across major AI clients, including ChatGPT, Claude, Cursor, Gemini, Microsoft Copilot, and VS Code, and a growing number of software vendors and developer platforms now expose MCP servers or MCP-compatible integrations for their own products. If the specific tool you rely on doesn't yet, the cost-benefit changes meaningfully, since you'd be building the integration layer yourself rather than adopting an existing one.
Do you have, or are you willing to build, the access-governance discipline this requires? Scoped permissions, an audit trail of what the AI can access, and a deliberate read-only-first rollout are not optional extras, they're what distinguishes a well-run MCP deployment from a genuine security risk.
Is bespoke integration cost already a recurring pain point? If your business has already paid to build and maintain multiple custom AI-to-tool connections, MCP's standardization is solving a cost problem you've already felt, not a theoretical one.

If the honest answers land mostly on "not yet," this is worth revisiting as your AI agent use matures, rather than something to force into place ahead of an actual need.

## Where this shows up in practice

Illustrative scenario, not a specific Kubera client: a mid-size business already using an AI agent for internal support questions finds that the agent can answer policy questions well but can't actually check a colleague's calendar to schedule a meeting or pull a customer's order status from the CRM, forcing staff to do that lookup manually after the agent's response. Connecting the agent to the calendar and CRM through their existing MCP servers, starting with read-only access and expanding to scheduling actions once that access pattern is validated, closes that gap without a custom integration project for either system.

## FAQ

**Is MCP an Anthropic-only technology?** No, not anymore. Anthropic created it and released it as an open standard in November 2024, then donated it to the Agentic AI Foundation, a vendor-neutral body under the Linux Foundation, in December 2025. OpenAI, Google, and Microsoft all support it natively alongside Anthropic.

**Do we need MCP if we don't have an AI agent yet?** Not urgently. MCP solves the problem of connecting an existing AI agent to real tools and data. If you don't have an agent in production yet, this is worth revisiting once you do, rather than adopting ahead of an actual need.

**Is MCP secure?** It can be, but security depends entirely on how access is configured, not on the protocol itself. The consistent recommendation across early enterprise deployments is scoped, read-only access to start, expanding to actions only once that access pattern is tested, along with clear audit trails of what any connected AI system can see and do.

**Does GDPR apply to an MCP-connected AI agent?** Yes, if the agent processes personal data through that connection. The specific roles, whether your business, the MCP server operator, the AI provider, or the underlying tool provider is acting as controller or processor for a given piece of processing, need to be worked out from the actual data flow and contracts rather than assumed. A provider processing personal data on your business's behalf will generally need an Article 28 arrangement, but MCP itself doesn't fix those roles in advance.

**Does the EU AI Act regulate MCP itself?** MCP is an integration protocol, not an AI system in the sense the Act regulates. What matters for compliance is the AI agent using the connection and what it's authorized to do, not the protocol itself.

**Do our existing tools already support MCP?** Major AI clients, including ChatGPT, Claude, Cursor, Gemini, Microsoft Copilot, and VS Code, already support MCP natively, and a growing number of software vendors expose MCP servers for their own products given how quickly enterprise customers have started asking for it. Whether your specific CRM, calendar, or other tool does yet is worth checking directly with the vendor rather than assuming either way.

**What's the biggest risk in adopting MCP for our business?** Granting an AI agent broader access than it needs, too early, without scoped permissions or an audit trail. The read-only-first approach that shows up consistently in early enterprise deployments exists specifically to manage this risk.

**How is MCP different from just using an API directly?** An API is a specific, custom way for two particular systems to communicate. MCP is a standardized layer on top of that idea, letting any MCP-compatible AI system use any MCP-compatible tool without a bespoke integration for each pairing.

**Should a mid-size business build its own MCP server, or just use ones that already exist?** For most mid-size businesses, using existing MCP servers already built by your CRM, calendar, or other tool vendors is the practical starting point. Building your own MCP server matters more if you're a software vendor whose own customers want AI-agent access to your product.

**How does MCP relate to multi-agent systems?** They solve different problems. MCP standardizes how any single agent connects to tools and data; a multi-agent system is about coordinating multiple agents on a task. The two can work together, agents in a multi-agent system connecting to tools via MCP, but adopting MCP doesn't require a multi-agent architecture, and most businesses will use it with a single agent. We cover the multi-agent question separately in [What Is a Multi-Agent AI System?](/blog/what-is-a-multi-agent-ai-system).

If you're trying to work out whether your business has actually hit the integration bottleneck MCP is meant to solve, or is being sold infrastructure ahead of an actual need, that's exactly the kind of assessment worth doing before committing engineering time to it.

[Discuss your automation project →](/contacts)
