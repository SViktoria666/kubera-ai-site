import type { UseCaseFaqItem, UseCaseLinkCard } from "@/content/use-cases/ai-voice-agents-home-services";

type UseCaseWorkflowStep = {
  description?: string;
  title: string;
};

export const realEstateLeadAutomation = {
  seo: {
    title: "Real Estate Lead Automation | AI Follow-Up and CRM Integration - Kubera AI",
    description:
      "Kubera AI builds custom automation systems for real estate agencies and brokerages - inquiry capture, lead qualification, CRM updates, follow-up and viewing scheduling across configured channels.",
    canonical: "https://www.kubera-automation.com/use-cases/real-estate-lead-automation",
    ogTitle: "Real Estate Lead Automation - Custom AI Systems for Agencies and Brokerages",
    ogDescription:
      "Slow follow-up loses real estate leads. Kubera AI automates inquiry capture, qualification, CRM updates and viewing scheduling - built around your existing stack.",
    h1: "Real Estate Lead Automation: Capture, Qualify and Follow Up Faster",
  },
  hero: {
    title: "Real Estate Lead Automation: Capture, Qualify and Follow Up Faster",
    lead:
      "In real estate, delayed responses can reduce the chance of continuing the conversation - especially when prospects contact several agencies at the same time. Kubera AI designs and integrates custom automation systems that capture inquiries from configured channels, qualify prospects against defined criteria, update the CRM automatically, and start follow-up - helping reduce the gap between inquiry and first contact while your team is on a call, in a viewing, or out of the office.",
    trustLine:
      "This is not a generic CRM add-on or a website chatbot. It is a custom-built system connecting your inquiry sources, communication channels and business tools into one coordinated workflow, typically orchestrated through n8n.",
    ctaLabel: "Discuss your automation project",
    ctaHref: "/contacts",
    secondaryCtaLabel: "Book a strategy call",
  },
  workflowPreview: {
    kicker: "Recommended flow",
    title: "Real estate lead journey",
    steps: [
      "Inquiry arrives",
      "Workflow layer",
      "Deduplication",
      "CRM update",
      "Qualification logic",
    ],
    outcomeLabel: "Outcome block",
    outcomeTitle: "Faster lead handling",
    outcomeDetail: "Inquiry capture, qualification, routing and scheduling stay connected in one workflow.",
    bottomLabels: ["Routing and follow-up", "Scheduling and reporting"] as [string, string],
  },
  whoThisIsFor: `This service is designed for real estate agencies, brokerages and property-management teams where lead volume is meaningful enough that manual follow-up creates gaps - missed inquiries, slow response, inconsistent CRM data, or agents spending time on administrative work instead of qualified prospects.

It fits well for:

- Real estate agencies handling inquiries from multiple portals, website forms and messaging channels
- Brokerages with multi-agent teams where lead routing and assignment are done manually
- Property-management companies managing rental inquiries at scale
- Development sales teams handling new-project launches with high inquiry volume
- Rental businesses where initial qualification (budget, timeline, requirements) is repetitive and time-consuming

It is not the right fit for individual agents with a small, personally managed pipeline, where a well-configured CRM alone may be sufficient. If the volume and complexity don't justify a custom system, Kubera AI will say so during discovery.`,
  whatTheServiceIs: `Kubera AI designs and integrates a lead automation system that connects inquiry sources - website forms, property portals, chat widgets, email, WhatsApp, SMS - to qualification logic, CRM updates, agent routing and follow-up workflows.

The system does not replace the agent's judgment. It handles the administrative layer: capturing inquiries the moment they arrive, running them through defined qualification criteria, populating the CRM with structured data, assigning leads to the right agent, and triggering follow-up messages through the appropriate channel.

What the client receives:

- Inquiry capture from configured sources connected to a single workflow
- Qualification logic built around the agency's own criteria (budget, location, property type, timeline, buyer vs. renter)
- Automatic CRM record creation or update with structured lead data
- Lead routing and agent assignment based on defined rules
- Follow-up sequences across email, SMS or messaging channels
- Viewing or consultation scheduling connected to the agent's calendar
- Reporting on lead volume, response time and pipeline status

Standard CRM automation usually covers only the processes available inside that CRM. A custom integration can connect external inquiry sources, messaging channels, qualification logic and scheduling around it - handling the full journey from first inquiry to booked viewing without manual intervention for routine cases.`,
  commonBusinessProblems: `- Slow inquiry response, with leads contacted hours or days after they first reached out
- Inquiries lost across channels - some come through the portal, some through the website form, some through WhatsApp - with no single capture point
- Manual lead qualification, where agents spend time on initial questions that could be handled automatically
- Inconsistent CRM data, with records created late, partially filled, or duplicated
- No lead routing logic, so new inquiries sit in a shared inbox until someone picks them up
- Poor follow-up consistency, with some leads receiving multiple touchpoints and others receiving none
- No visibility into pipeline status - how many leads came in, how many were contacted, how many converted to a viewing
- Agent overload during launches, when inquiry volume spikes and the team can't respond fast enough
- Manual viewing scheduling, with back-and-forth email or message threads to confirm a time`,
  manualVsAiComparison: `| Manual or fragmented process | Kubera AI implementation |
| --- | --- |
| Inquiries arrive across multiple channels and are checked manually | All configured inquiry sources feed into a single workflow; every lead is captured and logged |
| Agents manually qualify each new lead with initial questions | Qualification logic runs automatically based on the agency's criteria; structured data lands in the CRM |
| CRM updated manually, hours after the inquiry | CRM record created or updated automatically at the moment of inquiry |
| Lead routing done manually or by whoever checks the inbox first | Routing rules assign leads to the right agent based on location, type, language or availability |
| Follow-up depends on the individual agent's habits | Follow-up sequences triggered automatically at defined intervals across selected channels |
| Viewing scheduling handled through back-and-forth messages | Scheduling logic connects to the agent's calendar and offers available slots directly |
| No consistent reporting on inquiry-to-viewing conversion | Pipeline data available from CRM and workflow logs |`,
  useCases: `### 1. Multi-channel inquiry capture
Trigger: Inquiry submitted via website form, property portal, email or messaging channel.
Automated steps: Workflow captures the inquiry, normalises the data fields, checks for duplicate CRM records, creates or updates the lead record.
Systems involved: Inquiry source integrations, n8n, CRM.
AI role: Optional - extracting key fields from unstructured messages (e.g., WhatsApp text or email body).
Human approval/escalation: Duplicate or conflicting records flagged for agent review.
Business outcome: Configured inquiries logged consistently, without relying on manual entry.

### 2. Automated lead qualification
Trigger: New lead record created in CRM.
Automated steps: System sends a qualification message via the appropriate channel (email, SMS or WhatsApp Business API), collects responses, updates the CRM with structured answers (budget range, preferred area, property type, timeline, buy or rent). Automated messaging is enabled only for permitted channels and where the business has an appropriate legal basis or consent.
Systems involved: n8n, CRM, messaging channel.
AI role: Conversation handling for open-ended responses; structured field extraction.
Human approval/escalation: Leads that don't respond after defined attempts are flagged for agent follow-up.
Business outcome: Agents receive pre-qualified leads with structured data, rather than raw inquiries.

### 3. Lead routing and agent assignment
Trigger: Lead qualification complete or new lead above a defined priority threshold.
Automated steps: System applies routing rules (service area, language, property type, agent workload), assigns the lead to the appropriate agent, notifies the agent via Slack, email or SMS.
Systems involved: n8n, CRM, notification channel.
AI role: Optional - scoring or prioritisation based on defined signals, where relevant data is available.
Human approval/escalation: High-value or complex leads flagged for manager review before assignment.
Business outcome: Leads routed to the right agent based on defined rules, without manual triage - where the required agent data is available in the system.

### 4. Automated follow-up sequences
Trigger: Lead assigned but viewing not yet booked.
Automated steps: System sends follow-up messages at defined intervals across configured channels, stops the sequence when the lead responds or books. Automated messaging is enabled only for permitted channels and where the business has an appropriate legal basis or consent.
Systems involved: n8n, CRM, email/SMS/WhatsApp Business API.
AI role: Message personalisation based on lead data and property interest.
Human approval/escalation: Agent notified if lead responds with a complex query outside the automated flow.
Business outcome: Consistent follow-up without relying on individual agent discipline.

### 5. Viewing scheduling
Trigger: Lead expresses interest in a viewing.
Automated steps: System presents available time slots from the agent's calendar, confirms the booking, sends confirmation to both lead and agent, creates a calendar event - where the calendar tool supports API access for reading availability and creating events.
Systems involved: n8n, calendar tool, CRM, messaging channel.
AI role: Optional - conversational scheduling via chat or messaging.
Human approval/escalation: Agent can review and adjust confirmed bookings; conflicting or ambiguous bookings flagged for manual resolution.
Business outcome: Fewer scheduling back-and-forth exchanges for routine viewing requests.

### 6. Portal or campaign lead intake
Trigger: New lead submitted via a property portal or paid campaign landing page.
Automated steps: Webhook or API receives the lead, maps fields to CRM structure, triggers qualification or welcome message within a defined time window. Automated messaging is enabled only for permitted channels and where the business has an appropriate legal basis or consent.
Systems involved: n8n, portal API or webhook, CRM, messaging channel.
AI role: Optional field extraction or initial message drafting.
Human approval/escalation: Portal leads below a defined completeness threshold held for agent review.
Business outcome: Portal and campaign leads treated with the same speed and consistency as direct inquiries.

### 7. Pipeline and response-time reporting
Trigger: Daily or weekly schedule.
Automated steps: System pulls lead volume, response times, follow-up completion and viewing conversion from CRM and workflow logs, generates a summary report.
Systems involved: n8n, CRM, reporting dashboard or shared document.
AI role: Optional summary generation.
Human approval/escalation: Manager reviews; no automated action taken from the report itself.
Business outcome: Visibility into where leads are dropping out of the pipeline.`,
  workflowSection: {
    title: "Target Workflow",
    lead: "The exact architecture is adapted during discovery based on the agency's inquiry sources, CRM, communication channels and team structure.",
    steps: [
      { title: "Inquiry arrives", description: "website form / portal / email / WhatsApp / SMS / chat widget" },
      { title: "Workflow layer", description: "n8n or equivalent orchestration" },
      { title: "Deduplication and data normalisation" },
      { title: "CRM record created or updated" },
      { title: "Qualification logic", description: "automated questions or AI-assisted extraction" },
      { title: "Lead scoring and routing rules", description: "scoring optional - depends on available data and business need" },
      { title: "Agent assignment and notification" },
      { title: "Follow-up sequence triggered", description: "email / SMS / WhatsApp" },
      { title: "Viewing or consultation scheduling", description: "calendar integration" },
      { title: "Human review or escalation where required" },
      { title: "Pipeline reporting and logging" },
    ] satisfies UseCaseWorkflowStep[],
  },
  automationModules: `- Inquiry source mapping and channel integration
- Lead capture and deduplication workflow
- Qualification logic and conversation design
- CRM integration and field mapping
- Lead routing and agent assignment rules
- Follow-up sequence design and configuration
- Calendar and scheduling integration
- Reporting dashboard or pipeline summary
- Error handling, logging and monitoring
- Documentation of the full workflow
- Team training and handover
- Post-launch support and adjustments`,
  implementationProcess: `### 1. Discovery
Inquiry sources, current CRM setup, agent structure, follow-up process and reporting needs are reviewed.

### 2. Process Mapping
The existing lead journey is documented from first inquiry to booked viewing, including where it currently breaks down.

### 3. Architecture Design
The automation system is designed around the agency's actual channels, CRM and team structure.

### 4. Tool Selection
Orchestration, CRM integrations, messaging channels and calendar tools are selected based on the existing stack and requirements.

### 5. Build and Integration
Workflows, CRM connections, messaging channels and scheduling logic are built and tested.

### 6. Testing
Test leads are run through every defined scenario - new inquiry, portal lead, unresponsive lead, high-priority lead, viewing request - before go-live.

### 7. Controlled Launch
The system is typically rolled out with one channel or lead type first, then expanded once the process is confirmed stable.

### 8. Monitoring and Support
Lead flow, CRM data quality and follow-up completion are monitored after launch, with adjustments made as patterns emerge.`,
  toolAndPlatformOptions: `| Layer | Possible tools | Purpose | Selection considerations |
| --- | --- | --- | --- |
| Orchestration | n8n | Workflow logic, routing, scheduling | Self-hosted vs. cloud; existing infrastructure |
| CRM | HubSpot, Pipedrive, Follow Up Boss, Salesforce, Zoho CRM | Lead records, pipeline, agent assignment | Existing CRM in use; API access; field structure |
| AI model | OpenAI, Claude | Field extraction, message drafting, qualification | Response quality, cost per call, data sensitivity |
| Messaging | WhatsApp Business API, Twilio (SMS), Gmail, Outlook | Follow-up and qualification | Channels the leads actually use; consent and legal-basis requirements |
| Scheduling | Calendly, Google Calendar, Acuity Scheduling | Viewing and consultation booking | Agent calendar tool already in use |
| Data | Airtable, PostgreSQL, Google Sheets | Lead tracking, reporting | Reporting needs; existing data tools |
| Forms / intake | Website forms, chat widgets, portal webhooks | Inquiry capture | Channels in use; webhook or API availability |

The final stack depends on the agency's existing tools, available APIs, inquiry volume and team structure. Integration feasibility - particularly for property portals and third-party platforms - is confirmed during discovery based on available API access. Kubera AI recommends a specific stack after that assessment.`,
  security: `Lead data flows through defined, documented channels. Access to CRM and messaging integrations is scoped to what each workflow step requires, and credentials are separated by system.

Follow-up messaging is enabled only where the business has an appropriate legal basis for contacting leads through the selected channels. Data retention and regional hosting requirements - including EU hosting options where technically available - are assessed during discovery.

Compliance requirements, including applicable data-protection regulations, are the client's responsibility and are reviewed as part of the discovery process. Kubera AI does not provide legal compliance guarantees.`,
  expectedBusinessImpact: `The business case for lead automation in real estate is largely about speed and consistency. Delayed responses can reduce the chance of continuing the conversation, especially when prospects contact several agencies at the same time. Follow-up that happens automatically and consistently is less dependent on individual agent habits or workload.

A well-configured system means configured inquiries are captured and routed, CRM records are more complete and current, and the agent's time is spent on qualified prospects and viewings rather than data entry and initial qualification calls.

The exact business impact depends on inquiry volume, lead value, current response time, conversion rate, team size and implementation scope.`,
  whyKuberaAi: `Generic CRM automations handle simple sequences. What breaks down in practice is everything around them - inquiries arriving through channels the CRM doesn't connect to, qualification logic that doesn't match how the agency actually works, routing rules that can't account for language or specialisation, follow-up that stops when a lead replies with something unexpected.

Kubera AI builds the system around the agency's actual process, not a template. The result is an architecture that connects real inquiry sources, applies real qualification criteria, routes to the right agents, and routes defined edge cases to a fallback or human review - with documentation, monitoring and support included from day one.`,
  pricingLogic: `Kubera AI does not publish fixed prices, since scope varies significantly by agency size and complexity. Pricing is driven by:

- Number of inquiry channels and integrations
- CRM complexity and field mapping requirements
- Number of qualification and routing logic branches
- Messaging channels configured for follow-up
- Calendar and scheduling integration
- Reporting and dashboard requirements
- Ongoing monitoring and support

Three cost components apply separately:

- Platform subscription fees (CRM, messaging, calendar tools) - paid directly to the respective providers
- Usage fees (AI model calls, SMS volume, API calls) - variable based on lead volume
- Implementation fee - for design, build, integration and testing
- Optional ongoing support - for monitoring, adjustments and maintenance after launch`,
  midCta: {
    eyebrow: "Mid-page CTA",
    title: "Map your current lead journey and see where inquiries are being lost.",
    body: "Book a strategy call to map your current lead process and identify what can be automated first.",
    primaryLabel: "Book a strategy call",
    primaryHref: "/contacts",
  },
  relatedServices: [
    {
      title: "Customer Communications",
      description: "Review the service category behind inquiry handling and follow-up systems.",
      href: "/services",
    },
    {
      title: "Sales & Leads",
      description: "See the lead qualification and routing service path used in intake workflows.",
      href: "/services",
    },
    {
      title: "Internal Processes",
      description: "Explore the operational automation service category that supports routing and reporting.",
      href: "/services",
    },
    {
      title: "Landing Page with GPT/NTI",
      description: "See the existing lead-capture service category used for inbound conversion systems.",
      href: "/services",
    },
  ] satisfies UseCaseLinkCard[],
  relevantDemoCases: [
    {
      title: "Sales & Leads",
      description: "/cases/sales-leads",
      href: "/cases/sales-leads",
    },
    {
      title: "Customer Communications",
      description: "/cases/customer-communications",
      href: "/cases/customer-communications",
    },
    {
      title: "Real Estate Rentals",
      description: "/cases/real-estate-rentals",
      href: "/cases/real-estate-rentals",
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
      title: "How AI Automation Saves Time",
      description: "/blog/how-ai-automation-saves-time",
      href: "/blog/how-ai-automation-saves-time",
    },
  ] satisfies UseCaseLinkCard[],
  faq: [
    {
      question: "How much does a real estate lead automation system cost?",
      answer:
        "Cost depends on the number of inquiry channels, CRM complexity, qualification logic, messaging channels and reporting requirements. Kubera AI provides a scoped estimate after a discovery call, separate from platform subscription and usage fees.",
    },
    {
      question: "How long does implementation take?",
      answer:
        "A focused implementation - one or two inquiry channels, one CRM, basic qualification and follow-up - typically takes less time than a multi-channel system with complex routing and reporting. Kubera AI provides a timeline after discovery.",
    },
    {
      question: "Which CRMs can you integrate with?",
      answer:
        "Potential integrations include HubSpot, Pipedrive, Follow Up Boss and other supported CRMs. Feasibility depends on API access, permissions and the existing data structure - confirmed during discovery.",
    },
    {
      question: "Can you integrate with property portals?",
      answer:
        "Portal integration depends on whether the portal offers an API or webhook. Some do; some don't. This is confirmed during discovery rather than assumed in advance.",
    },
    {
      question: "Will the system work across WhatsApp, email and SMS?",
      answer:
        "Yes, where the business has appropriate access and legal basis for each channel. Multi-channel follow-up is configured based on the channels the agency's leads actually use.",
    },
    {
      question: "Can leads be routed to different agents automatically?",
      answer:
        "Yes. Routing rules are configured based on the agency's own criteria - service area, language, property type, agent availability, or other defined signals.",
    },
    {
      question: "What happens if a lead sends an unexpected reply?",
      answer:
        "The system is designed with fallback logic for responses outside the expected qualification flow. Leads with complex or ambiguous replies are flagged for agent follow-up rather than handled incorrectly by the automation.",
    },
    {
      question: "Is lead data secure?",
      answer:
        "Lead data flows through documented, access-controlled integrations. Data-protection and consent requirements are reviewed during discovery. Kubera AI does not provide legal compliance guarantees.",
    },
    {
      question: "Do we still need agents?",
      answer:
        "Yes. The system handles the administrative and repetitive layer - capture, qualification, CRM updates, follow-up scheduling. Agents handle relationships, viewings, negotiations and decisions.",
    },
    {
      question: "Can the system scale during a high-volume launch period?",
      answer:
        "The architecture is designed with volume in mind. Additional capacity requirements are discussed during discovery and factored into platform selection.",
    },
  ] satisfies UseCaseFaqItem[],
  finalCta: {
    title:
      "Real estate leads are time-sensitive. A system that captures and routes configured inquiry sources, qualifies automatically and follows up consistently gives the team more time for the work that actually requires an agent - and helps reduce leads lost to slow response or manual gaps.",
    body:
      "Book a strategy call to discuss your current lead process and what a custom automation system would look like for your agency.",
    primaryLabel: "Book a strategy call",
    primaryHref: "/contacts",
  },
};
