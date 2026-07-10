import type { UseCaseFaqItem, UseCaseLinkCard } from "@/content/use-cases/ai-voice-agents-home-services";

type WorkflowBranchStep = {
  description?: string;
  title: string;
};

type WorkflowBranch = {
  label: string;
  steps: WorkflowBranchStep[];
};

type WorkflowStep = {
  branches?: WorkflowBranch[];
  description?: string;
  title: string;
};

export const aiCustomerSupportEcommerce = {
  seo: {
    title: "AI Customer Support for E-commerce | Custom Integration — Kubera AI",
    description:
      "Kubera AI builds custom AI customer support systems for online stores — order questions, product information, escalation and CRM integration across configured channels.",
    canonical: "https://www.kubera-automation.com/use-cases/ai-customer-support-ecommerce",
    ogTitle: "AI Customer Support for E-commerce — Custom-Built, Not a Generic Chatbot",
    ogDescription:
      "E-commerce support queues grow with order volume. Kubera AI builds custom AI support systems connected to your store data, CRM and support tools — with human escalation built in.",
    h1: "AI Customer Support for E-commerce: Handle More Tickets Without Expanding the Team",
  },
  hero: {
    title: "AI Customer Support for E-commerce: Handle More Tickets Without Expanding the Team",
    lead:
      "Support volume in e-commerce grows with order volume. Order status questions, delivery inquiries, return requests and product questions arrive in volume — and most of them follow predictable patterns that don't require a human agent to handle from scratch every time.",
    trustLine:
      "Kubera AI designs and integrates custom AI customer support systems for online stores — connected to your store data, knowledge base, CRM and support tools — so routine inquiries are handled consistently and your support team focuses on the cases that actually need human judgment.",
    ctaLabel: "Discuss your automation project",
    ctaHref: "/contacts",
    secondaryCtaLabel: "Book a strategy call",
  },
  workflowPreview: {
    kicker: "Recommended flow",
    title: "AI support queue",
    steps: ["Customer inquiry", "Channel intake", "Workflow layer", "Classification", "Data retrieval"],
    outcomeLabel: "Outcome block",
    outcomeTitle: "Handled by scope",
    outcomeDetail: "Defined inquiries receive a configured response path while exceptions are escalated.",
    bottomLabels: ["Human escalation built in", "Logging and monitoring enabled"] as [string, string],
  },
  whoThisIsFor: `This service is designed for online stores where support volume has reached a point where the team spends a significant portion of their time on repetitive, answerable inquiries — and where the cost of that time is worth addressing with a custom system.

It fits well for:

- Shopify or WooCommerce stores where order status, shipping and return questions make up a large share of the support queue
- DTC brands handling customer questions across multiple channels (website chat, email, WhatsApp Business API) without a consistent first-response process
- Online stores with a product catalogue large enough that agents spend time looking up information that could be surfaced automatically
- E-commerce teams where support volume spikes seasonally and adding temporary headcount is either impractical or expensive
- Multilingual stores serving customers in more than one language where consistent first-response across languages is difficult to maintain manually

It is not the right fit for stores with very low ticket volume, where a well-configured helpdesk tool may already be sufficient. It is also not a replacement for the support team — the system handles defined, routine cases; human agents remain responsible for escalations, disputes, sensitive situations and anything outside the defined automation scope.`,
  whatTheServiceIs: `Kubera AI designs and integrates an AI-assisted customer support system that connects to the store's data sources — order management, product catalogue, knowledge base, return policies — and handles defined inquiry types through configured channels, with human escalation built into the architecture.

The AI component accesses only the data it is configured to access. It does not have open access to customer accounts, payment data or administrative store functions. Sensitive actions — refunds, account changes, order modifications — require human approval before execution.

What the client receives:

- AI support agent configured to handle defined inquiry types (order status, shipping, returns, product questions)
- Integration with the store platform to retrieve order and fulfilment data for configured inquiries
- Knowledge base or product information integration, typically via a vector database
- CRM or helpdesk integration so every interaction is logged and escalations land in the right queue
- Escalation logic routing complex, sensitive or out-of-scope inquiries to a human agent
- Configured channel deployment (website chat, email, WhatsApp Business API, or others assessed during discovery)
- Monitoring, logging and error handling for every interaction path
- Documentation of the full system

The difference between a generic chatbot and a custom-integrated system is access to real data. A generic chatbot answers from a script. A custom system retrieves the customer's actual order status, checks the configured return policy, and escalates when the answer requires a human.`,
  commonBusinessProblems: `- Order status questions dominate the queue, with agents manually checking the store or fulfilment system for information the customer could receive automatically
- First response times are slow, particularly outside business hours or during peak periods
- Inconsistent answers to the same question depending on which agent responds
- Return and refund requests handled manually with no consistent first-response process
- Product questions require agents to look up catalogue information that could be surfaced from a connected knowledge base
- Support channels disconnected from CRM, so customer history is not available to the agent handling the ticket
- Multilingual inquiries handled inconsistently, with some languages receiving slower or lower-quality responses
- Seasonal volume spikes create backlogs that are difficult to staff for without adding permanent headcount
- No visibility into what customers are asking, making it difficult to identify knowledge-base gaps or recurring issues
- Human agents spending time on low-complexity tickets that follow a predictable pattern`,
  manualVsAiComparison: `| Manual or fragmented process | Kubera AI implementation |
| --- | --- |
| Agent manually checks store system to answer order status question | AI retrieves order data from configured source and responds within the defined scope |
| Return requests answered inconsistently depending on the agent | Return policy responses follow a consistent, configured logic; complex cases escalated to human |
| First response only available during business hours | AI handles first response for defined inquiry types during configured hours |
| Each agent looks up product information separately | AI surfaces product information from connected knowledge base for defined query types |
| Support channel not connected to CRM | Every AI interaction logged to CRM or helpdesk; escalations routed to the right queue |
| Multilingual inquiries routed to available agent regardless of language | AI responds in configured languages; escalation logic accounts for language where defined |
| No data on what customers are asking | Interaction logs provide visibility into inquiry types, volumes and escalation rates |
| Sensitive actions (refunds, account changes) handled without a consistent process | Sensitive actions require human approval before execution; not handled autonomously |`,
  useCases: `### 1. Order status and tracking inquiries
Trigger: Customer inquiry about order status, shipping progress or delivery timing.
Automated steps: AI identifies the inquiry type, retrieves order and tracking data from configured store and fulfilment sources, responds with current status.
Systems involved: Store platform API, fulfilment or tracking API, n8n, AI model, support channel.
AI role: Query classification, data retrieval, response generation within defined scope.
Human approval/escalation: Inquiries where order data is unavailable, ambiguous or involves a dispute are escalated to a human agent.
Business outcome: Faster first response on a high-volume, repetitive inquiry type without agent involvement for standard cases.

### 2. Return and refund information
Trigger: Customer inquiry about return eligibility, process or refund status.
Automated steps: AI retrieves relevant policy from the configured knowledge base, checks order data where applicable, provides a policy-consistent response.
Systems involved: Knowledge base, store platform API, n8n, AI model, support channel.
AI role: Policy lookup and response generation based on configured rules.
Human approval/escalation: Refund execution, exceptions to policy, or disputed cases are escalated to a human agent and require human approval before any financial action.
Business outcome: Consistent first response to return inquiries; human time reserved for cases requiring judgment or authorisation.

### 3. Product information and pre-purchase questions
Trigger: Customer question about product specifications, compatibility, availability or alternatives.
Automated steps: AI retrieves relevant product information from the configured knowledge base or product catalogue, responds within the scope of available data.
Systems involved: Knowledge base or vector database, product catalogue, n8n, AI model, support channel.
AI role: Semantic search and response generation from configured product data.
Human approval/escalation: Questions outside the scope of available product data, or involving specific advice the AI is not configured to give, are escalated to a human.
Business outcome: Product questions answered consistently without requiring agent lookup time for standard information.

### 4. Multilingual first response
Trigger: Inquiry received in a language other than the primary support language.
Automated steps: Language detected; AI responds in the detected language using configured knowledge base and store data, within the same defined scope as the primary-language flow.
Systems involved: AI model with multilingual capability, knowledge base, store platform API, support channel.
AI role: Language detection, response generation in configured languages.
Human approval/escalation: Inquiries in languages outside the configured set, or where translation confidence is low, are flagged and routed to a human.
Business outcome: More consistent first response across configured languages without requiring multilingual agents for every inquiry type.

### 5. Ticket triage and routing
Trigger: New support ticket received via configured channel.
Automated steps: AI classifies the inquiry type, assigns a priority level based on defined rules, routes to the appropriate queue or agent, adds context from CRM and order history.
Systems involved: Support platform (e.g., Zendesk, Gorgias, Freshdesk), CRM, store API, n8n, AI model.
AI role: Classification, prioritisation and context enrichment.
Human approval/escalation: All routing decisions can be reviewed; high-priority or sensitive tickets flagged for immediate human attention.
Business outcome: Support queue organised by inquiry type and priority rather than arrival order; agents have order context before responding.

### 6. Post-resolution follow-up
Trigger: Support ticket marked as resolved.
Automated steps: Follow-up message sent to customer after a defined interval to confirm resolution; response logged in CRM or helpdesk.
Systems involved: Support platform, CRM, n8n, messaging channel. Automated messaging enabled only where the business has an appropriate legal basis or consent.
AI role: Optional — personalising follow-up message based on ticket context.
Human approval/escalation: Negative follow-up responses or unresolved cases reopened and routed to a human agent.
Business outcome: Systematic resolution confirmation without manual follow-up effort.`,
  workflowSection: {
    title: "Target Workflow / Recommended Architecture",
    lead: "The exact architecture is adapted during discovery based on the store's support channels, data sources and existing helpdesk setup.",
    steps: [
      { title: "Customer inquiry arrives", description: "website chat / email / WhatsApp Business API" },
      { title: "Channel integration and intake" },
      { title: "Workflow layer", description: "n8n, typically orchestrated" },
      { title: "Inquiry classification", description: "order status / return / product / other" },
      { title: "Data retrieval", description: "store API / knowledge base / CRM / order tracking" },
      { title: "AI response generation within configured scope" },
      {
        title: "Scope check",
        description: "Within defined automation boundary?",
        branches: [
          {
            label: "YES",
            steps: [
              {
                title: "Response sent and interaction logged",
                description: "Defined inquiries receive the configured response path",
              },
            ],
          },
          {
            label: "NO",
            steps: [
              {
                title: "Escalation to human agent with context",
                description: "Out-of-scope, sensitive or disputed cases are routed safely",
              },
              {
                title: "Human agent handles escalation",
                description: "The human takes over the case and resolves it directly",
              },
            ],
          },
        ],
      },
      { title: "Logging, monitoring and reporting" },
    ] satisfies WorkflowStep[],
  },
  automationModules: `- Current support process mapping (inquiry types, volumes, channels)
- AI support agent configuration and scope definition
- Knowledge base setup or integration (product information, policies, FAQs)
- Store platform integration for order and fulfilment data retrieval
- CRM or helpdesk integration and ticket logging
- Escalation logic and human handoff design
- Multilingual configuration where required
- Channel deployment (website chat, email, WhatsApp Business API, or others confirmed during discovery)
- Interaction logging and monitoring
- Error handling for data retrieval failures and out-of-scope inquiries
- Reporting on inquiry types, escalation rates and response patterns
- Documentation of the full system
- Team training on escalation handling and system management
- Post-launch stabilisation period
- Optional ongoing support — for monitoring, scope adjustments and additions after stabilisation`,
  implementationProcess: `### 1. Discovery
Current support volume, inquiry types, channels, helpdesk setup, store platform and CRM are reviewed. Scope of automation is defined collaboratively with the client.

### 2. Process Mapping
Support flow documented from inquiry arrival to resolution, including where current process creates delays or inconsistencies.

### 3. Architecture Design
AI support system designed around the store's actual data sources, inquiry types and escalation requirements.

### 4. Tool Selection
AI model, vector database, helpdesk integration and channel configuration selected based on the existing stack and requirements.

### 5. Knowledge Base Preparation
Product information, policies and FAQs structured for retrieval. This step requires client input and content review.

### 6. Build and Integration
AI agent configured, integrations built, escalation logic implemented, channels connected.

### 7. Testing
System tested against real inquiry types across all defined categories, including edge cases and escalation triggers. Scope boundaries verified.

### 8. Controlled Launch
System typically launched on one channel or inquiry type first, with full monitoring active before scope is expanded.

### 9. Monitoring and Support
Interaction logs, escalation rates and response quality monitored after launch. Adjustments made as inquiry patterns emerge.`,
  toolAndPlatformOptions: `| Layer | Possible tools | Purpose | Selection considerations |
| --- | --- | --- | --- |
| Orchestration | n8n | Workflow logic, routing, escalation | Self-hosted vs. cloud; existing infrastructure |
| AI model | OpenAI, Claude | Response generation, classification, multilingual | Response quality, context window, cost per call, data sensitivity |
| Knowledge base | Pinecone, Weaviate, Qdrant | Product and policy information retrieval | Data volume, update frequency, retrieval accuracy requirements |
| Store platform | Shopify API, WooCommerce API | Order status, fulfilment data, product catalogue | Platform in use; API access and rate limits |
| Helpdesk / support | Zendesk, Gorgias, Freshdesk, Intercom | Ticket management, agent queue, escalation routing | Support tool in use; API access |
| CRM | HubSpot, Pipedrive, Salesforce | Customer history, interaction logging | CRM in use; API access |
| Channels | Website chat, email (Gmail/Outlook), WhatsApp Business API | Customer-facing communication | Channels in use; consent and legal-basis requirements |
| Reporting | Databases, dashboards | Interaction volume, escalation rate, inquiry types | Reporting needs; existing data tools |

The final stack depends on the store's existing tools, support channels and data sources. Integration feasibility for specific platforms is confirmed during discovery based on available API access. Not every helpdesk or store platform is supported by default.`,
  security: `The AI support system accesses only the data it is explicitly configured to retrieve — order data for the specific customer inquiry, product information from the knowledge base, and policy content. It does not have broad access to customer accounts, payment systems or store administration.

Sensitive actions — refunds, account modifications, order cancellations — are not executed autonomously. These require human approval within the defined workflow.

All interactions are logged for review, quality monitoring and audit purposes. Access to integration credentials is scoped by system and separated by workflow step.

Channel deployment, data retention and regional hosting requirements — including EU hosting options where technically available — are assessed during discovery. Data-protection and compliance requirements remain the client's responsibility. Kubera AI does not provide legal compliance guarantees.`,
  expectedBusinessImpact: `For e-commerce businesses, a meaningful share of support volume typically consists of inquiry types that follow consistent patterns — order status, returns, product questions. Handling these consistently and at lower cost per interaction is the primary operational benefit of a well-configured AI support system.

The result is a support team that spends more time on the inquiries that actually require judgment — disputes, complex situations, relationship-sensitive cases — and less time on lookups and templated responses.

The exact business impact depends on current support volume, ticket mix, cost per agent hour, escalation rate, channel configuration and implementation scope.`,
  whyKuberaAi: `A generic chatbot answers from a fixed script and escalates everything it doesn't recognise. A custom-integrated system retrieves the customer's actual order data, applies the configured policy, responds in the right language, and escalates with full context already attached to the ticket.

The difference is in the integration work: connecting the AI to the real data sources, defining the scope boundaries carefully, building escalation paths that work in practice, and monitoring the system after launch so the scope can be adjusted as inquiry patterns change.

Kubera AI builds the system around the store's actual support process — not a template — with documentation, monitoring and a defined escalation design from day one.`,
  pricingLogic: `Kubera AI does not publish fixed prices, since scope varies significantly by store size, ticket volume and channel configuration. Pricing is driven by:

- Number of inquiry types configured for automation
- Number of channels deployed
- Knowledge base setup and integration complexity
- Store platform and helpdesk integrations
- Multilingual configuration requirements
- Reporting and monitoring setup
- Optional ongoing support

Three cost components apply separately:

- Platform subscription fees (AI model, helpdesk tool, vector database, CRM) — paid directly to the respective providers
- Usage fees (AI model calls, API calls) — variable based on ticket and query volume
- Implementation fee — for system design, knowledge base setup, integration, testing and post-launch stabilisation
- Optional ongoing support — for monitoring, scope adjustments and additions after the stabilisation period`,
  midCta: {
    eyebrow: "Mid-page CTA",
    title: "Map your current support queue and identify which inquiry types can be handled automatically.",
    body: "Book a strategy call to discuss your current support process and what a custom AI support system would look like for your store.",
    primaryLabel: "Book a strategy call",
    primaryHref: "/contacts",
  },
  relatedServices: [
    {
      title: "Customer Communications",
      description: "See the service category behind inbound support and customer follow-up systems.",
      href: "/services",
    },
    {
      title: "E-commerce",
      description: "Review the service category aligned with store operations and customer journeys.",
      href: "/services",
    },
    {
      title: "Internal Processes",
      description: "Explore the operational automation service category that supports routing and reporting.",
      href: "/services",
    },
    {
      title: "Sales & Leads",
      description: "See the intake and CRM service path used in conversion-adjacent workflows.",
      href: "/services",
    },
  ] satisfies UseCaseLinkCard[],
  relevantDemoCases: [
    {
      title: "E-commerce & Logistics",
      description: "/cases/ecommerce-logistics",
      href: "/cases/ecommerce-logistics",
    },
    {
      title: "Customer Communications",
      description: "/cases/customer-communications",
      href: "/cases/customer-communications",
    },
    {
      title: "Internal Processes",
      description: "/cases/internal-processes",
      href: "/cases/internal-processes",
    },
  ] satisfies UseCaseLinkCard[],
  recommendedReading: [
    {
      title: "What Is an AI Agent?",
      description: "/blog/what-is-an-ai-agent",
      href: "/blog/what-is-an-ai-agent",
    },
    {
      title: "AI Agent vs. Chatbot",
      description: "/blog/ai-agent-vs-chatbot",
      href: "/blog/ai-agent-vs-chatbot",
    },
    {
      title: "What Is AI Automation?",
      description: "/blog/what-is-ai-automation",
      href: "/blog/what-is-ai-automation",
    },
  ] satisfies UseCaseLinkCard[],
  faq: [
    {
      question: "How much does an AI customer support system for an e-commerce store cost?",
      answer:
        "Cost depends on the number of inquiry types configured, channels deployed, knowledge base complexity and integration requirements. Kubera AI provides a scoped estimate after a discovery call, separate from platform subscription and usage fees.",
    },
    {
      question: "How long does implementation take?",
      answer:
        "A focused implementation covering two or three inquiry types on one channel typically takes less time than a multi-channel, multilingual system with a large knowledge base. Kubera AI provides a timeline after discovery.",
    },
    {
      question: "Will the AI have access to our customers' account or payment data?",
      answer:
        "The AI accesses only the data it is explicitly configured to retrieve for defined inquiry types — typically order status and policy information. It does not have broad access to customer accounts, payment systems or store administration.",
    },
    {
      question: "Can the AI process refunds automatically?",
      answer:
        "No. Refunds and other financial actions require human approval before execution. The AI can provide policy-consistent information about the return or refund process and route the request to the right queue, but does not act on financial decisions autonomously.",
    },
    {
      question: "Which support platforms can you integrate with?",
      answer:
        "Potential integrations include Zendesk, Gorgias, Freshdesk and Intercom. Integration feasibility depends on API access and the helpdesk tool's data structure — confirmed during discovery rather than assumed in advance.",
    },
    {
      question: "Can the system handle multiple languages?",
      answer:
        "Yes, where the selected AI model supports the required languages. Multilingual configuration is assessed during discovery based on the languages the store's customers actually use.",
    },
    {
      question: "What happens when the AI can't answer a question?",
      answer:
        "Out-of-scope inquiries are escalated to a human agent with full interaction context attached. The system is designed so that escalation paths are defined and tested before launch — the AI does not attempt to answer questions outside its configured scope.",
    },
    {
      question: "Who pays for the AI model and platform fees?",
      answer:
        "Platform subscription and usage fees — AI model, helpdesk tool, vector database — are paid directly to the respective providers. These are separate from Kubera AI's implementation fee.",
    },
    {
      question: "Is customer interaction data secure?",
      answer:
        "All interactions are logged through access-controlled integrations with credentials scoped by system. Data-protection requirements and regional hosting options are assessed during discovery. Kubera AI does not provide legal compliance guarantees.",
    },
    {
      question: "Does this replace our support team?",
      answer:
        "No. The system handles defined, routine inquiry types. Human agents remain responsible for escalations, disputes, sensitive situations and anything outside the defined automation scope. The goal is to reduce the volume of repetitive, low-complexity tickets the team handles manually.",
    },
  ] satisfies UseCaseFaqItem[],
  finalCta: {
    title:
      "Support volume grows with order volume — and so does the cost of handling every ticket manually. A well-configured AI support system handles the predictable, repetitive cases consistently, so the team has capacity for the situations that actually require human judgment.",
    body:
      "Book a strategy call to discuss your current support process and what a custom AI support system would look like for your store.",
    primaryLabel: "Book a strategy call",
    primaryHref: "/contacts",
  },
};
