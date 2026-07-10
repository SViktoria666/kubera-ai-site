export type UseCaseLinkCard = {
  title: string;
  description: string;
  href: string;
};

export type UseCaseFaqItem = {
  question: string;
  answer: string;
};

export const aiVoiceAgentsHomeServices = {
  seo: {
    title: "AI Voice Agents for Home Services | Call Automation - Kubera AI",
    description:
      "Kubera AI configures and integrates AI voice agents for home services - HVAC, plumbing, electrical and more. Call handling, booking and CRM automation built around your existing systems.",
    canonical: "https://www.kubera-automation.com/use-cases/ai-voice-agents-home-services",
    ogTitle: "AI Voice Agents for Home Services - Call Handling and Booking Automation",
    ogDescription:
      "Missed and mishandled calls can cost home service businesses booked jobs. Kubera AI configures and integrates AI voice agents connected to your CRM and calendar.",
    h1: "AI Voice Agents for Home Services: Handle More Calls and Automate Booking",
  },
  hero: {
    title: "AI Voice Agents for Home Services: Handle More Calls and Automate Booking",
    lead:
      "For HVAC, plumbing, electrical, roofing, cleaning and pest-control businesses, calls that go unanswered or poorly handled can mean lost jobs. Kubera AI designs, configures and integrates AI voice agents that can answer incoming calls, qualify the request, help with booking, and update your CRM - built around the tools you already use.",
    trustLine:
      "A standalone voice platform is only one layer of the solution. Kubera AI connects it to the business's scheduling, CRM, escalation and reporting processes, with human handoff built in for calls that need it.",
    ctaLabel: "Discuss your automation project",
    ctaHref: "/contacts",
    secondaryCtaLabel: "Book a strategy call",
  },
  whoThisIsFor: `This service is built for home service businesses that already handle a meaningful volume of inbound calls - enough that missed calls, after-hours gaps, or inconsistent booking are a recurring operational problem, not an occasional inconvenience.

It fits well for:

- HVAC, plumbing and electrical companies fielding both routine and time-sensitive calls
- Roofing, cleaning and pest-control businesses with seasonal or high-volume call spikes
- Multi-location or multi-technician operations where call routing and CRM consistency break down manually
- Businesses already using a CRM or scheduling tool that calls aren't being connected to properly

It is not the right fit for very low call volumes, where a simple answering service or a basic scheduling widget may already be enough. If your business takes a handful of calls a day and booking is already manageable, a custom-integrated AI voice system is likely more infrastructure than you need. Kubera AI will say so directly during discovery if that's the case.`,
  whatTheServiceIs: `Kubera AI selects, configures and integrates a voice AI platform - depending on the existing stack, for example Retell AI or a comparable provider - together with the telephony layer, the client's CRM or field-service platform, and calendar or booking system, into one coordinated workflow, typically orchestrated through n8n.

Kubera AI does not own a proprietary voice model. The value is in the architecture: how a call is answered, how it's qualified, where it routes, what gets logged, what requires human approval, and how the system fails safely when something goes wrong.

What the client receives:

- A configured voice agent connected to a phone number or existing line
- Qualification logic tailored to the business's own service types and priorities
- Integration with the CRM or field-service system already in use
- Booking logic connected to the calendar or scheduling tool in use
- Escalation rules for calls that should go to a human, including time-sensitive and safety-related situations
- Logging, monitoring and a documented fallback process

A generic voice AI subscription typically answers calls without knowledge of a specific business's service area, technician availability, or CRM requirements. That gap is what the integration work is designed to close.`,
  commonBusinessProblems: `- Missed calls during peak hours, on job sites, or after hours, with no consistent way to capture the lead
- Calls outside business hours going to voicemail, with slow or no follow-up
- Slow lead response, where a competitor books the job before your team calls back
- Manual appointment booking, prone to double-booking or scheduling errors
- Inconsistent qualification, so technicians arrive underprepared or the wrong job gets prioritized
- Inconsistent CRM updates, with call details logged late, incompletely, or not at all
- Time-sensitive calls mixed with routine calls, with no clear process for separating them
- Lack of reporting on call volume, missed-call rate, or booking outcomes
- No fallback process when the phone system, CRM, or calendar integration fails
- Front-desk overload, especially during multi-technician dispatch days or seasonal demand spikes`,
  manualVsAiComparison: `| Manual or fragmented process | Kubera AI implementation |
| --- | --- |
| Calls go to voicemail after hours or during busy periods | AI voice agent can answer calls during configured hours, with defined escalation rules for time-sensitive situations |
| Front desk manually asks qualification questions each call | Voice agent follows structured qualification logic tailored to your service categories |
| Booking is checked and entered manually into a calendar or CRM | Booking logic can check availability and update the connected calendar or CRM where the integration is supported |
| Call details logged inconsistently or after delay | Call summary and structured data logged automatically after each call |
| Time-sensitive and routine calls handled with the same process | Triage logic separates call types based on rules defined with the client, with human handoff for anything safety-related |
| Little visibility into missed-call volume or outcomes | Reporting generated from available call and booking data |
| System failures (missed integration, CRM error) go unnoticed | Logging and monitoring flag failures, with a defined fallback path |`,
  useCases: `### 1. After-hours call capture and next-day booking
Trigger: Inbound call outside business hours.
Automated steps: AI agent answers, collects service details and contact information, checks calendar availability where supported, offers a time slot.
Systems involved: Telephony platform, n8n, calendar/booking tool, CRM.
AI role: Conversational qualification and slot suggestion.
Human approval/escalation: Time-sensitive or safety-related keywords trigger transfer to an on-call number.
Business outcome: Fewer after-hours leads lost to voicemail.

### 2. Safety-related and time-sensitive call handling
Trigger: Inbound call describing a situation such as a gas smell, active leak, electrical hazard, or similar.
Automated steps: The agent follows a client-approved script to give immediate safety instructions if defined (e.g., advising the caller to contact emergency services for life-threatening situations) and transfers the call to a human without delay.
Systems involved: Telephony platform, n8n, CRM, SMS/Slack alert to on-call staff.
AI role: Recognizing defined trigger phrases and following a pre-approved script - the AI does not assess the severity of the danger or make safety judgments itself.
Human approval/escalation: Mandatory immediate human handoff. The AI voice agent does not replace emergency services or a trained dispatcher, and does not make the final call on how a safety-related situation is handled.
Business outcome: Faster routing of time-sensitive calls to a person, without the AI attempting to resolve them.

### 3. Routine booking and CRM update
Trigger: Inbound call for a standard service request (maintenance, inspection, routine repair).
Automated steps: Agent qualifies the request, checks availability where supported, books the appointment, updates the CRM record.
Systems involved: Telephony platform, n8n, CRM, calendar.
AI role: Conversational booking and data capture.
Human approval/escalation: Flagged for review if data is incomplete or the booking can't be confirmed automatically.
Business outcome: Reduced manual data entry and booking errors.

### 4. Missed-call follow-up via SMS
Trigger: Call not answered or dropped before qualification completes.
Automated steps: System can send an SMS follow-up with a booking link or callback offer.
Systems involved: Telephony platform, SMS provider, n8n, CRM.
AI role: Message drafting based on call context.
Human approval/escalation: SMS follow-up is enabled only where the business has an appropriate legal basis or consent for messaging, and after the messaging approach has been reviewed as part of discovery.
Business outcome: A way to re-engage leads that would otherwise go untouched, where messaging is permitted.

### 5. Multi-technician dispatch routing
Trigger: Booking confirmed for a specific service type or area.
Automated steps: System checks technician availability and service area against defined rules, assigns the job, notifies the technician.
Systems involved: CRM/field-service platform, n8n, calendar, Slack or SMS.
AI role: Matching logic based on defined rules, not open-ended judgment.
Human approval/escalation: Dispatcher reviews edge cases such as overlapping jobs or unclear service areas.
Business outcome: More consistent technician scheduling with less manual coordination.

### 6. Call reporting and quality review
Trigger: End of day or week.
Automated steps: System compiles available call volume, booking rate, and escalation counts into a report.
Systems involved: n8n, database, reporting dashboard.
AI role: Summarization of call outcomes from logged data.
Human approval/escalation: Manager reviews the report; no automated action is taken based on it.
Business outcome: Better visibility into call handling performance.

### 7. Seasonal call-volume surge handling
Trigger: A rise in inbound call volume (e.g., storm season, heatwave).
Automated steps: Agent handles increased volume using the same qualification and booking logic; overflow beyond configured capacity is queued or routed to a fallback.
Systems involved: Telephony platform, n8n, CRM.
AI role: Consistent handling of calls within configured limits.
Human approval/escalation: Overflow beyond defined capacity alerts a manager.
Business outcome: A more consistent process for handling demand spikes, subject to platform and staffing limits.`,
  targetWorkflow: [
    "Incoming call",
    "   ->",
    "Telephony platform",
    "   ->",
    "AI voice agent",
    "   ->",
    "n8n workflow layer",
    "   ->",
    "Validation and business rules (service type, urgency, service area)",
    "   ->",
    "Classification (routine vs. time-sensitive vs. follow-up)",
    "   ->",
    "CRM / field-service system update, where supported",
    "   ->",
    "Calendar / booking update, where supported",
    "   ->",
    "Human approval or escalation where required (safety-related transfer, incomplete data)",
    "   ->",
    "Customer confirmation (SMS/email, where permitted) and internal notification",
    "   ->",
    "Logging, alerts and reporting",
  ],
  automationModules: `- Call-handling process mapping
- Voice agent configuration and conversation design
- Qualification and triage logic, including safety-related call scripts approved by the client
- CRM and field-service system integration
- Calendar and booking integration
- Escalation and human-handoff rules
- SMS/email follow-up workflows (messaging approach and consent basis reviewed during discovery)
- Logging and error handling
- Reporting dashboard
- Documentation of the full workflow
- Team training on escalation handling
- Post-launch monitoring and support`,
  implementationProcess: `### 1. Discovery
Current call volume, existing phone system, CRM/field-service tool, booking process, and safety/escalation procedures are reviewed.

### 2. Process Mapping
Existing call flow, however manual, is documented, including where it breaks down.

### 3. Architecture Design
Workflow is designed around the client's actual systems.

### 4. Tool Selection
Voice AI platform, telephony provider, and integration points are selected based on the client's stack, budget and volume.

### 5. Build and Integration
n8n workflows, CRM/calendar connections, and voice agent logic are built and connected.

### 6. Testing
Test calls are run across routine, time-sensitive and edge-case scenarios before go-live.

### 7. Controlled Launch
The system is typically rolled out gradually - for example, handling a subset of call types or hours first - rather than switching all call handling at once.

### 8. Monitoring and Support
Call outcomes, escalation frequency and failures are monitored after launch, with adjustments made as needed.

Failures during testing or early launch are handled by routing calls to a human fallback (existing staff or answering service) while the issue is diagnosed and corrected.`,
  toolAndPlatformOptions: `| Layer | Possible tools | Purpose | Selection considerations |
| --- | --- | --- | --- |
| Voice AI | Retell AI, Vapi, OpenAI Realtime API, ElevenLabs | Conversational voice handling | Latency, voice quality, pricing model, language support |
| Telephony | Twilio, Vonage | Call routing and number provisioning | Existing phone number, call volume, regional availability |
| CRM / Field Service | Jobber, ServiceTitan, Housecall Pro, HubSpot, Pipedrive, Salesforce | Job and customer record management | Existing client stack, API access, data structure |
| Booking / Calendar | Google Calendar, Calendly, Acuity Scheduling | Appointment scheduling | Technician calendars, availability logic, existing booking tool |
| Orchestration | n8n | Workflow logic, validation, routing | Self-hosted vs. cloud, existing automation infrastructure |
| Messaging | SMS providers, Gmail, Outlook | Follow-up and confirmation | Deliverability, consent requirements, existing communication channels |
| Reporting | Databases, dashboards | Call and booking visibility | Reporting needs, data retention requirements |

The final stack depends on the client's existing systems, required integrations, available APIs, expected call volume, and budget. Kubera AI recommends a specific stack after discovery rather than presenting every tool as interchangeable. Not every CRM or field-service platform is supported by default - integration feasibility is assessed based on API access and permissions.`,
  security: `The system is designed around controlled data flows: access to CRM and calendar data is scoped to what the workflow requires, credentials are separated by system, and call interactions are logged for review and troubleshooting.

Human approval is built into escalations and any action outside standard qualification and booking logic. Fallback paths are defined for cases where the AI agent cannot complete the call or an integration fails.

Call recording, data retention, and regional hosting considerations - including EU or regional hosting options where technically available - are assessed during discovery based on the client's requirements and the platforms selected. Compliance requirements, including any applicable telemarketing, messaging-consent, or call-recording regulations, are assessed during discovery and remain subject to the client's own legal review. Kubera AI does not provide legal compliance guarantees.`,
  expectedBusinessImpact: `For home service businesses, the operational case for better call handling is straightforward: calls that go unanswered or take too long to follow up on tend to result in lost jobs, because customers in this category often contact more than one provider.

A well-configured system means more calls are answered, qualified and booked consistently - without adding front-desk headcount. CRM data stays current without manual entry. Time-sensitive calls reach a person faster. And the team has reporting to see what's actually happening with inbound volume.

The exact business impact depends on process volume, current labor cost, lead value, conversion rate, platform fees, call volume and implementation scope.`,
  whyKuberaAi: `Most voice AI vendors sell a platform. Kubera AI builds the system around your business - the calls you actually receive, the CRM you already use, the way your team handles escalations - and connects the right tools to that reality.

The result is a system built with validation, logging, human-in-the-loop escalation and a controlled rollout. Changes are tested before they go live. Integrations are documented. The team knows what the fallback is. And if your stack changes later, the architecture is designed to adapt rather than be replaced from scratch.`,
  pricingLogic: `Kubera AI does not publish fixed prices, since implementation scope varies by business. Pricing is driven by:

- Number of call-handling workflows (e.g., routine booking, safety-related triage, follow-up)
- Number of integrations (CRM, calendar, telephony, messaging)
- Expected call volume
- Complexity of qualification and escalation logic
- Reporting and dashboard requirements
- Ongoing monitoring and support needs

Three cost components apply separately:

- Platform subscription fees (voice AI, telephony, CRM) - paid directly to the respective providers
- Usage fees (call minutes, AI model usage) - variable based on volume
- Implementation fee - for design, build, integration and testing
- Optional ongoing support - for monitoring, adjustments and maintenance after launch`,
  midCta: {
    eyebrow: "Mid-page CTA",
    title: "Map your current call-handling workflow and identify what can be automated first.",
    body: "Book a strategy call to map your current call handling and see what can be automated first.",
    primaryLabel: "Book a strategy call",
    primaryHref: "/contacts",
  },
  relatedServices: [
    {
      title: "Customer Communications",
      description: "See the service category behind inbound call handling and customer follow-up systems.",
      href: "/services",
    },
    {
      title: "Sales & Leads",
      description: "Review the lead qualification and CRM integration service path used in intake workflows.",
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
      title: "Customer Communications",
      description: "/cases/customer-communications",
      href: "/cases/customer-communications",
    },
    {
      title: "Sales & Leads",
      description: "/cases/sales-leads",
      href: "/cases/sales-leads",
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
      title: "How AI Automation Saves Time",
      description: "/blog/how-ai-automation-saves-time",
      href: "/blog/how-ai-automation-saves-time",
    },
  ] satisfies UseCaseLinkCard[],
  faq: [
    {
      question: "How much does an AI voice agent implementation for a home service business cost?",
      answer:
        "Cost depends on call volume, number of integrations (CRM, calendar, telephony), and the complexity of qualification and escalation logic. Kubera AI provides a scoped estimate after a discovery call, separate from ongoing platform subscription and usage fees.",
    },
    {
      question: "How long does implementation take?",
      answer:
        "Timelines vary with scope. A single-workflow implementation, such as after-hours call capture, typically takes less time than a full system covering triage, booking, CRM integration and reporting. Kubera AI provides a project timeline after discovery.",
    },
    {
      question: "Will this work with our existing CRM or field-service software?",
      answer:
        "Integration feasibility depends on API access and permissions for your specific platform. Kubera AI assesses this during discovery rather than guaranteeing support for every system in advance.",
    },
    {
      question: "How are emergency or safety-related calls handled?",
      answer:
        "The AI agent is designed to recognize defined trigger phrases and follow a client-approved script, then hand off to a person immediately. It does not assess the severity of a safety situation and does not replace emergency services or a trained dispatcher - escalation rules are designed together with the client.",
    },
    {
      question: "Can the system send follow-up text messages automatically?",
      answer:
        "Yes, where the business has an appropriate legal basis or consent for SMS messaging. This is reviewed as part of discovery before any automated messaging is enabled.",
    },
    {
      question: "What happens if the AI agent can't handle a call?",
      answer:
        "A defined fallback path routes the call to a human or an existing answering process. This is built and tested before launch.",
    },
    {
      question: "Who pays for the voice AI and telephony platform fees?",
      answer:
        "Platform subscription and usage fees are paid directly to the respective providers. These are separate from Kubera AI's implementation fee.",
    },
    {
      question: "Is call data secure?",
      answer:
        "The system is designed around controlled data flows, credential separation and logging. Specific security and compliance requirements, including call-recording and messaging regulations, are assessed during discovery based on your jurisdiction and platforms used.",
    },
    {
      question: "Can the system scale if our call volume increases seasonally?",
      answer:
        "The architecture can be designed with volume increases in mind, though platform usage fees will scale with call volume and any overflow beyond configured capacity is routed to a fallback. This is discussed during discovery.",
    },
    {
      question: "Do you provide the AI voice technology yourselves?",
      answer:
        "No. Kubera AI selects, configures and integrates third-party voice AI, telephony and CRM platforms into a coordinated system. Kubera AI does not own a proprietary voice model.",
    },
  ] satisfies UseCaseFaqItem[],
  finalCta: {
    title: "Missed and mishandled calls are a common operational problem for home service businesses, and one that can often be reduced through better call handling and follow-up. If calls are going unanswered, poorly qualified, or inconsistently logged in your CRM, the next step is a conversation about what your current process actually looks like.",
    body:
      "Book a strategy call to discuss whether an AI voice agent system fits your business, and what it would take to implement.",
    primaryLabel: "Book a strategy call",
    primaryHref: "/contacts",
  },
};
