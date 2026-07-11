import type { UseCaseFaqItem, UseCaseLinkCard } from "@/content/use-cases/ai-voice-agents-home-services";

type WorkflowStep = {
  title: string;
  description?: string;
};

export const aiReceptionistSalonsSpas = {
  seo: {
    title: "AI Receptionist for Salons and Spas | Booking and Communication Automation — Kubera AI",
    description:
      "Kubera AI designs and integrates AI-assisted receptionist systems for salons, spas and beauty businesses — call handling, appointment booking, reminders, rebooking and follow-up built around your existing tools.",
    canonical: "https://www.kubera-automation.com/use-cases/ai-receptionist-salons-spas",
    ogTitle: "AI Receptionist for Salons and Spas — Booking and Communication Automation",
    ogDescription:
      "Missed calls and manual scheduling cost salons and spas booked appointments. Kubera AI configures AI-assisted receptionist systems connected to your booking tool, calendar and communication channels.",
    h1: "AI Receptionist for Salons and Spas: Handle More Bookings Without Missing Calls",
  },
  hero: {
    title: "AI Receptionist for Salons and Spas: Handle More Bookings Without Missing Calls",
    lead:
      "For salons, spas and beauty businesses, a missed call during a busy treatment slot is often a missed booking — and a client who calls back later may have already booked elsewhere. At the same time, receptionists handling calls, walk-ins and checkout simultaneously can't always give every inquiry the attention it needs.",
    trustLine:
      "Kubera AI designs and integrates AI-assisted receptionist systems for salons, spas, nail studios, wellness centres and aesthetic studios — handling appointment inquiries, booking, reminders, rebooking and follow-up through configured channels, so the front desk team can focus on clients who are in the room.",
    ctaLabel: "Discuss your automation project",
    ctaHref: "/contacts",
    secondaryCtaLabel: "Book a strategy call",
  },
  workflowPreview: {
    kicker: "Recommended flow",
    title: "Salon booking flow",
    steps: ["Client enquiry", "Communication platform", "Workflow layer", "Enquiry classification", "Availability check"],
    outcomeLabel: "Outcome block",
    outcomeTitle: "Handled within scope",
    outcomeDetail: "Routine requests move through the configured administrative flow while complaints and exceptions are escalated.",
    bottomLabels: ["Escalation built in", "Logging and monitoring enabled"] as [string, string],
  },
  whoThisIsFor: `This service is designed for salon, spa and beauty businesses where call volume and booking coordination are creating operational strain — missed calls, double-bookings, inconsistent reminders or time spent on administrative tasks during client-facing hours.

It fits well for:

- Hair salons, beauty salons and nail studios where the reception desk handles calls and walk-ins simultaneously during busy periods
- Spas and wellness centres with a range of treatment types and staff specialisations that make scheduling more complex than a basic calendar allows
- Aesthetic studios where consultations and treatment appointments require different booking logic
- Multi-location beauty businesses where booking coordination across sites is managed manually or inconsistently
- Businesses with a high rebooking rate where follow-up and rebooking outreach are not currently systematic

It is not the right fit for very small studios with low call volume, where a simple booking link or a basic scheduling app may already be sufficient. If the current volume doesn't justify a custom-integrated system, Kubera AI will say so during discovery.`,
  whatTheServiceIs: `Kubera AI selects, configures and integrates an AI-assisted receptionist system that connects appointment inquiries, booking logic, reminder workflows, rebooking outreach and customer follow-up — typically orchestrated through n8n — and built around the business's existing booking platform, communication channels and service structure.

Kubera AI does not own a proprietary voice or booking platform. The value is in the system design: how an inquiry is answered, how availability is checked, where booking is confirmed, what reminders go out and when, and how the system hands off to a human when the situation requires it.

What the client receives:

- AI-assisted call or chat handling for defined inquiry types (booking, rescheduling, general information)
- Appointment booking logic connected to the supported booking platform or calendar
- Reminder and confirmation workflows via configured channels (SMS, email, or WhatsApp Business API where applicable)
- Rebooking outreach for lapsed or completed appointments
- Follow-up workflows for clients who enquired but did not book
- Escalation logic routing complex, sensitive or exceptional situations to a human staff member
- Interaction logging and monitoring
- Documentation of the full system

Integration with specific salon booking platforms depends on API availability. Not every booking system supports external integration — this is assessed during discovery. Kubera AI does not claim support for every salon software in advance.`,
  commonBusinessProblems: `- Missed calls during busy treatment slots with no consistent process for following up
- Manual booking prone to double-bookings, scheduling gaps or errors when multiple staff share a calendar
- Reminder workflows inconsistent or absent, contributing to no-shows and last-minute cancellations
- Rebooking not systematically offered after completed appointments, leaving repeat business to chance
- Follow-up not sent to clients who enquired but didn't book the first time
- After-hours inquiries going unanswered until the next business day
- WhatsApp Business API messages and website inquiries handled manually and inconsistently
- Reception staff splitting attention between in-person clients and phone calls during peak hours
- No visibility into missed-call volume, booking conversion or no-show rate
- Multi-location booking managed separately at each site with no consolidated view`,
  manualVsAiComparison: `| Manual or fragmented process | Kubera AI implementation |
| --- | --- |
| Calls during treatment slots go unanswered or to voicemail | AI-assisted handling manages defined inquiry types during configured hours; exceptional situations escalated to staff |
| Booking done manually per call with no availability check integration | Booking logic checks availability and confirms appointments where the booking platform integration is supported |
| Reminders sent manually or not at all | Reminder and confirmation workflows triggered automatically at defined intervals via configured channels |
| Rebooking left to the client to initiate | Rebooking outreach triggered after a completed appointment at a defined interval, via configured channel |
| Follow-up for unbooked enquiries depends on staff memory | Follow-up sequence triggered automatically for enquiries that did not convert to a booking |
| After-hours enquiries ignored until morning | Configured after-hours response acknowledges the enquiry and provides next steps |
| No consistent data on missed calls or booking outcomes | Interaction logging provides visibility into enquiry volume, booking rate and escalation frequency |`,
  useCases: `### 1. Appointment inquiry and booking
Trigger: Client calls or submits an enquiry via a configured channel (phone, website form, chat, or WhatsApp Business API).
Automated steps: System identifies the enquiry as a booking request, checks availability for the requested service and staff member where the booking integration is supported, offers available slots, confirms the appointment.
Systems involved: Telephony or chat platform, booking system or calendar, n8n.
AI role: Conversational enquiry handling and slot suggestion within the configured scope.
Human approval/escalation: Requests involving complex scheduling, specific staff preferences not resolvable automatically, or client complaints routed to a staff member. The system does not override manual scheduling decisions.
Business outcome: Appointment enquiries handled consistently for defined service types during configured hours, without requiring reception staff to step away from in-person clients.

### 2. Reminder and confirmation workflow
Trigger: Upcoming appointment within a defined time window (e.g., 48 hours and 24 hours before).
Automated steps: Reminder sent via configured channel (SMS, email or WhatsApp Business API); client response (confirm, reschedule, cancel) processed; appointment status updated in the booking system where supported.
Systems involved: n8n, booking system or calendar, SMS, email or WhatsApp Business API. Automated messaging enabled only where the business has an appropriate legal basis or consent for client communication.
AI role: Optional — personalising reminder content based on appointment type or service.
Human approval/escalation: Cancellations within a short time window or unusual responses flagged for staff review.
Business outcome: More consistent reminder delivery and confirmation collection without manual effort for each appointment.

### 3. Rebooking outreach
Trigger: Appointment marked as completed in the booking system, or a defined interval since the client's last visit has passed.
Automated steps: Outreach message sent via configured channel inviting the client to rebook; available slots offered or booking link provided.
Systems involved: Booking system, n8n, SMS, email or WhatsApp Business API. Automated messaging enabled only where the business has an appropriate legal basis or consent.
AI role: Optional — personalising outreach based on service type or visit history.
Human approval/escalation: Clients who do not respond after defined attempts are not contacted repeatedly by the automated system — the list is flagged for staff review rather than escalated automatically.
Business outcome: More systematic rebooking outreach without relying on staff to initiate contact for every lapsed client.

### 4. Missed-call follow-up
Trigger: Inbound call not answered or dropped before the enquiry is completed.
Automated steps: Follow-up message sent via SMS or WhatsApp Business API with a booking link or callback offer. Automated messaging enabled only where the business has an appropriate legal basis or consent.
Systems involved: Telephony platform, n8n, SMS or WhatsApp Business API.
AI role: Message drafting based on call context.
Human approval/escalation: None for a standard follow-up message; responses requiring a detailed conversation routed to staff.
Business outcome: A way to re-engage enquiries that would otherwise go uncontacted, where messaging is permitted.

### 5. After-hours enquiry handling
Trigger: Enquiry received outside defined business hours via configured channel.
Automated steps: Acknowledgement sent confirming receipt and providing next steps (booking link, expected response time, or both).
Systems involved: n8n, configured enquiry channel, SMS or email.
AI role: Message drafting based on configured business information.
Human approval/escalation: Staff reviews after-hours enquiries at the start of the next business day.
Business outcome: Clients who enquire after hours receive a timely acknowledgement rather than silence, with expectations set correctly.

### 6. Rescheduling requests
Trigger: Client contacts the business to reschedule an existing appointment.
Automated steps: System identifies the existing booking, offers alternative available slots within the configured service type, confirms the new booking and updates the booking system where supported.
Systems involved: Telephony or chat platform, booking system, n8n.
AI role: Conversational rescheduling flow within defined scope.
Human approval/escalation: Rescheduling requests involving complaints, unusual circumstances or scheduling conflicts not resolvable automatically are routed to staff.
Business outcome: Reduced back-and-forth for straightforward rescheduling requests.

### 7. General enquiry handling
Trigger: Client enquiry about services, pricing, location, hours or availability of a specific staff member.
Automated steps: System responds from configured business information for defined question types.
Systems involved: Chat or telephony platform, configured knowledge base or business information, n8n.
AI role: Response generation from configured information sources only.
Human approval/escalation: Questions outside the configured scope, complaints or sensitive situations escalated to staff immediately.
Business outcome: Consistent responses to common administrative enquiries without staff involvement for defined question types.`,
  workflowSection: {
    title: "Target Workflow / Recommended Architecture",
    lead: "The exact architecture is adapted during discovery based on the business's booking platform, communication channels and service structure.",
    steps: [
      { title: "Client enquiry arrives", description: "Phone / website form / chat / SMS / WhatsApp Business API" },
      { title: "Communication platform", description: "Telephony or chat" },
      { title: "Workflow layer", description: "Typically orchestrated through n8n" },
      { title: "Enquiry classification", description: "Booking / rescheduling / general / complaint / exceptional" },
      { title: "Complaint or exceptional enquiry check", description: "Defined complaints and exceptional situations are escalated to staff" },
      { title: "Configured administrative handling logic", description: "For enquiries inside the approved automation scope" },
      { title: "Booking-system availability check", description: "Where integration is supported" },
      { title: "Appointment confirmed and logged" },
      { title: "Client confirmation through a configured permitted channel", description: "Where consent or another appropriate legal basis is in place" },
      { title: "Reminder, rebooking and follow-up workflows", description: "Triggered only at defined intervals" },
      { title: "Logging, monitoring and reporting" },
    ] satisfies WorkflowStep[],
  },
  automationModules: `- Booking process mapping (enquiry types, service structure, staff availability logic, reminder workflow)
- AI-assisted call or chat handling configuration for defined enquiry types
- Appointment booking logic and booking platform integration (where a supported API is available)
- Reminder and confirmation workflow design and configuration
- Rebooking outreach workflow
- Missed-call follow-up workflow
- After-hours enquiry handling
- Rescheduling workflow
- General enquiry handling for configured question types
- Escalation logic and routing to staff
- Interaction logging and monitoring
- Error handling and fallback paths
- Reporting on enquiry volume, booking outcomes and escalation rates
- Documentation of the full system
- Staff training and handover
- Post-launch stabilisation period
- Optional ongoing support — for monitoring, adjustments and additions after stabilisation`,
  implementationProcess: `### 1. Discovery
Current call volume, existing booking platform, service structure, staff availability logic, reminder process and communication channels are reviewed. Integration feasibility for the booking system is assessed.

### 2. Process Mapping
Front desk and booking workflow documented from enquiry arrival to confirmed appointment, including reminder timing, rebooking logic and escalation paths.

### 3. Architecture Design
System designed around the business's actual service types, scheduling rules and communication preferences.

### 4. Tool Selection
Voice AI platform (if applicable), telephony, booking integration, messaging channels and orchestration selected based on the existing stack.

### 5. Build and Integration
Workflows built, integrations connected, booking logic implemented, channels configured.

### 6. Testing
System tested across all defined enquiry types, including rescheduling, cancellations, after-hours enquiries and escalation triggers. Booking logic verified against real availability before go-live.

### 7. Controlled Launch
System launched on one channel or enquiry type first, with monitoring active from day one and scope expanded only after the initial configuration is confirmed stable.

### 8. Monitoring and Support
Enquiry logs, booking outcomes, reminder response rates and escalation frequency monitored after launch. Adjustments made as patterns emerge.`,
  toolAndPlatformOptions: `| Layer | Possible tools | Purpose | Selection considerations |
| --- | --- | --- | --- |
| Voice AI | Retell AI, Vapi, OpenAI Realtime API | AI-assisted call handling | Latency, voice quality, language support, pricing model |
| Telephony | Twilio, Vonage | Call routing and number provisioning | Existing phone setup, call volume, regional availability |
| Orchestration | n8n | Workflow logic, routing, scheduling | Self-hosted vs. cloud; existing infrastructure |
| Booking / Calendar | Google Calendar, Calendly, Acuity Scheduling, supported booking platforms | Appointment availability and confirmation | Booking platform in use; API availability — confirmed during discovery |
| Messaging | SMS providers, Gmail, Outlook, WhatsApp Business API | Reminders, confirmations, rebooking, follow-up | Channels the business currently uses; consent and legal-basis requirements |
| CRM | Supported CRM platforms | Client records and interaction logging | CRM in use; API access |
| AI model | OpenAI, ElevenLabs | Response generation, voice quality, personalisation | Data sensitivity, cost per call, language support |
| Reporting | Databases, dashboards | Enquiry volume, booking rate, escalation frequency | Reporting needs; existing data tools |

Integration with specific salon or spa booking platforms — including widely used software in the industry — depends on API availability and the specific system version and configuration in use. This is confirmed during discovery. Kubera AI does not claim support for every booking platform in advance.`,
  security: `Client enquiries and booking data flow through documented, access-controlled integrations. API credentials are separated by system and scoped to what each workflow step requires.

Automated messaging — reminders, rebooking outreach, follow-up — is enabled only where the business has an appropriate legal basis or consent for client communication via the configured channels. Messaging consent and legal basis are reviewed as part of discovery before any automated client communication is enabled.

Call recording, if applicable, is configured in accordance with the business's own policies and the legal requirements of the relevant jurisdiction, assessed during discovery.

Data retention, regional hosting options — including EU hosting where technically available — and applicable data-protection requirements are assessed during discovery. Kubera AI does not provide legal or regulatory compliance guarantees.`,
  expectedBusinessImpact: `For salons and spas, the operational case for AI-assisted reception is straightforward: calls that go unanswered during busy hours, enquiries that receive no follow-up and clients who are not systematically invited to rebook represent bookings that could have been captured with a better-connected process.

A well-configured system means more enquiries are handled during configured hours, reminders go out consistently, and rebooking outreach happens without relying on staff to initiate it manually for every completed appointment.

The exact business impact depends on current call volume, enquiry mix, no-show rate, rebooking frequency, staff cost and implementation scope.`,
  whyKuberaAi: `A booking link handles one narrow step in the client journey. A configured AI receptionist system connects the whole administrative flow — enquiry handling, booking confirmation, reminders, rebooking and follow-up — with escalation paths for the situations that need a human, and monitoring so problems are visible rather than silent.

Kubera AI designs the system around the business's actual service structure and scheduling logic, not a generic template. Because the architecture is not tied to a single platform, it can generally be adapted as the booking tool or communication channels change — though the extent of rework depends on the specific systems involved.`,
  pricingLogic: `Kubera AI does not publish fixed prices, since scope varies by business size, service complexity and channel configuration. Pricing is driven by:

- Number of workflows configured (booking, reminders, rebooking, follow-up, after-hours)
- Booking platform integration complexity and API availability
- Voice AI and telephony configuration, if applicable
- Number of communication channels
- Reporting and monitoring setup
- Optional ongoing support

Three cost components apply separately:

- Platform subscription fees (voice AI, telephony, booking platform, messaging) — paid directly to the respective providers
- Usage fees (call minutes, AI model calls, SMS or WhatsApp Business API volume) — variable based on client enquiry volume
- Implementation fee — for system design, integration, testing and post-launch stabilisation
- Optional ongoing support — for monitoring, adjustments and additions after the stabilisation period`,
  midCta: {
    eyebrow: "Mid-page CTA",
    title: "Map your current booking and reception workflow and identify what can be handled automatically.",
    body: "Book a strategy call to map your current booking process and see what can be automated first.",
    primaryLabel: "Book a strategy call",
    primaryHref: "/contacts",
  },
  relatedServices: [
    {
      title: "Customer Communications",
      description: "Chat agents, newsletters, lead processing 24/7.",
      href: "/services",
    },
    {
      title: "Beauty & Health",
      description: "Client booking, reminders, post-visit feedback.",
      href: "/services",
    },
    {
      title: "Sales & Leads",
      description: "Lead qualification, follow-up, CRM integration.",
      href: "/services",
    },
    {
      title: "Internal Processes",
      description: "Reporting, approvals, routine automation.",
      href: "/services",
    },
  ] satisfies UseCaseLinkCard[],
  relevantDemoCases: [
    {
      title: "Beauty & Health",
      description: "Closest relevant demo case in the beauty and health category.",
      href: "/cases/beauty-health",
    },
    {
      title: "Customer Communications",
      description: "Relevant architecture example for inbound communication handling.",
      href: "/cases/customer-communications",
    },
    {
      title: "Sales & Leads",
      description: "Related automation example for lead intake and follow-up.",
      href: "/cases/sales-leads",
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
      question: "How much does an AI receptionist system for a salon or spa cost?",
      answer:
        "Cost depends on the number of workflows configured, booking platform integration complexity, voice AI and telephony setup, and channel configuration. Kubera AI provides a scoped estimate after a discovery call, separate from platform subscription and usage fees.",
    },
    {
      question: "How long does implementation take?",
      answer:
        "A focused implementation covering appointment booking and reminders typically takes less time than a full system including rebooking, after-hours handling, multi-location coordination and reporting. Kubera AI provides a timeline after discovery.",
    },
    {
      question: "Can you integrate with our current booking software?",
      answer:
        "Integration depends on API availability for the specific booking platform and version in use. Some salon and spa booking tools have accessible APIs; others have limited or no external integration capability. This is assessed during discovery rather than assumed in advance.",
    },
    {
      question: "Can the system send reminders and rebooking messages automatically?",
      answer:
        "Yes, where the business has an appropriate legal basis or consent for client communication via the configured channels. Messaging consent and legal basis are reviewed as part of discovery before any automated client messaging is enabled.",
    },
    {
      question: "What happens if the AI can't handle a call or enquiry?",
      answer:
        "A defined fallback path routes the enquiry to a human staff member or an existing process. Escalation logic is built and tested before launch — exceptional situations, complaints and anything outside the defined scope go to staff, not to a dead end.",
    },
    {
      question: "Will the system handle every type of enquiry?",
      answer:
        "No. The system handles defined enquiry types within the configured scope. Complaints, sensitive client situations, exceptional scheduling requests and anything outside the configured categories are escalated to staff.",
    },
    {
      question: "Who pays for the platform fees?",
      answer:
        "Platform subscription and usage fees — voice AI, telephony, messaging, booking platform — are paid directly to the respective providers. These are separate from Kubera AI's implementation fee.",
    },
    {
      question: "Can the system work across multiple locations?",
      answer:
        "Multi-location configuration is more complex and depends on how booking and staff availability are structured across sites. This is assessed during discovery and factored into the architecture design.",
    },
    {
      question: "Is client data secure?",
      answer:
        "Client enquiry and booking data flows through documented, access-controlled integrations with credentials scoped by system. Data retention and applicable data-protection requirements are assessed during discovery. Kubera AI does not provide legal or regulatory compliance guarantees.",
    },
    {
      question: "Does this replace the reception team?",
      answer:
        "No. The system handles defined administrative enquiry types during configured hours. Reception staff remain responsible for in-person client interactions, complex or sensitive situations, exceptional scheduling decisions and anything outside the configured automation scope.",
    },
  ] satisfies UseCaseFaqItem[],
  finalCta: {
    title:
      "Reception gaps — missed calls, inconsistent reminders, no rebooking outreach — are common in busy salons and spas, and they tend to grow as the business gets busier rather than resolve themselves. A well-configured system handles the routine administrative layer consistently, so the team can focus on the clients in the room.",
    body:
      "Book a strategy call to discuss your current booking process and what an AI-assisted receptionist system would look like for your business.",
    primaryLabel: "Book a strategy call",
    primaryHref: "/contacts",
  },
};
