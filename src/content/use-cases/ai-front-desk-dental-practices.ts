import type { UseCaseFaqItem, UseCaseLinkCard } from "@/content/use-cases/ai-voice-agents-home-services";

type WorkflowStep = {
  branches?: WorkflowBranch[];
  description?: string;
  title: string;
};

type WorkflowBranch = {
  label: string;
  steps: Array<{
    description?: string;
    title: string;
  }>;
};

export const aiFrontDeskDentalPractices = {
  seo: {
    title: "AI Front Desk for Dental Practices | Appointment and Communication Automation — Kubera AI",
    description:
      "Kubera AI designs and integrates AI-assisted front desk systems for dental practices — appointment booking, patient reminders, inquiry handling and administrative workflows built around your existing systems.",
    canonical: "https://www.kubera-automation.com/use-cases/ai-front-desk-dental-practices",
    ogTitle: "AI Front Desk Automation for Dental Practices — Custom-Built, Not a Generic Chatbot",
    ogDescription:
      "Front desk overload, missed calls and manual scheduling slow dental practices down. Kubera AI builds AI-assisted systems for appointment booking, reminders and patient communication — with human staff in control.",
    h1: "AI Front Desk Automation for Dental Practices: Less Admin, More Patient Time",
  },
  hero: {
    title: "AI Front Desk Automation for Dental Practices: Less Admin, More Patient Time",
    lead:
      "Dental front desk teams spend a significant portion of their day on tasks that follow predictable patterns — answering appointment inquiries, confirming bookings, sending reminders, handling rescheduling requests and updating patient records. When call volume is high or staff capacity is stretched, these tasks create delays, missed calls and administrative backlogs that affect both patient experience and practice efficiency.",
    trustLine:
      "Kubera AI designs and integrates AI-assisted front desk systems for dental practices — connecting appointment booking, patient communication, recall workflows and administrative processes into a coordinated system built around the tools the practice already uses, with human staff remaining in control of clinical decisions and sensitive patient interactions.",
    ctaLabel: "Discuss your automation project",
    ctaHref: "/contacts",
    secondaryCtaLabel: "Book a strategy call",
  },
  workflowPreview: {
    kicker: "Recommended flow",
    title: "Front desk workflow",
    steps: ["Patient inquiry arrives", "Communication platform", "Workflow layer", "Inquiry classification", "Decision branch"],
    outcomeLabel: "Outcome block",
    outcomeTitle: "Administrative handling with human control",
    outcomeDetail: "Routine administrative inquiries are handled consistently while clinical and urgent cases escalate to staff.",
    bottomLabels: ["Scheduling and patient updates", "Logging and monitoring"] as [string, string],
  },
  whoThisIsFor: `This service is designed for dental practices and dental groups where front desk workload — calls, scheduling, reminders and administrative coordination — is creating operational strain that affects patient experience or staff capacity.

It fits well for:

- Independent dental practices where the front desk team handles high call volume alongside in-person patients
- Dental groups and multi-location clinics where scheduling coordination across locations is managed manually
- Orthodontic and cosmetic dentistry practices with longer patient journeys requiring multiple appointment types and recall workflows
- Practices that have outgrown a basic booking widget and need scheduling logic connected to the actual practice management system
- Practices experiencing high no-show rates where reminder and confirmation workflows are inconsistent

It is not the right fit for practices where a simple online booking tool already covers the scheduling gap adequately. If the current volume and complexity don't justify a custom-integrated system, Kubera AI will say so during discovery.

Human staff remain responsible for all clinical decisions, sensitive patient conversations and situations that require professional judgment. The system supports the administrative layer — it does not replace licensed dental staff.`,
  whatTheServiceIs: `Kubera AI designs and integrates an AI-assisted front desk system that connects appointment booking, patient communication, recall scheduling and administrative workflows — typically orchestrated through n8n — and configured around the practice's existing systems, scheduling rules and communication channels.

The system is not a clinical tool. It handles the administrative and communication layer: answering appointment inquiries, checking availability, sending reminders, routing calls and updating records. Clinical decisions, treatment discussions and sensitive patient situations remain with qualified staff.

What the client receives:

- AI-assisted call handling or chat inquiry management for defined inquiry types (booking, rescheduling, general information)
- Appointment booking logic connected to the practice's scheduling system where a supported integration is available
- Patient reminder and confirmation workflows via configured channels (SMS, email, or both)
- Recall workflow automation for defined patient recall intervals
- Escalation logic routing clinical questions, complaints and sensitive situations to a human staff member
- CRM or patient record integration for logging interactions, where supported
- Monitoring, logging and error handling
- Documentation of the full system

Security and compliance requirements — including any applicable healthcare data regulations — are assessed during discovery and are subject to the practice's own legal and compliance review. Kubera AI does not provide HIPAA or other regulatory compliance guarantees.`,
  commonBusinessProblems: `- High call volume during peak hours with front desk staff unable to answer every call while managing in-person patients
- Missed calls going to voicemail with inconsistent follow-up
- Manual appointment booking prone to double-bookings or scheduling gaps
- Reminder workflows managed manually, leading to inconsistent patient confirmation and higher no-show rates
- Recall outreach not automated, with patients due for check-ups not contacted systematically
- Rescheduling requests handled through back-and-forth calls that take more time than necessary
- General inquiries mixed with urgent clinical calls, with no consistent triage process
- Administrative tasks — record updates, confirmation logging — done manually after every patient interaction
- No visibility into missed-call volume, booking conversion or reminder response rates
- Multi-location coordination done manually, with scheduling and communication inconsistent across sites`,
  manualVsAiComparison: `| Manual or fragmented process | Kubera AI implementation |
| --- | --- |
| Calls during busy periods go unanswered or to voicemail | AI-assisted call handling can manage defined inquiry types during configured hours; urgent or clinical calls escalated immediately |
| Appointment booking done manually per call | Booking logic checks availability and schedules appointments for defined appointment types where the scheduling system integration is supported |
| Reminders sent manually or through a disconnected tool | Reminder and confirmation workflows triggered automatically at defined intervals via configured channels |
| Recall outreach done manually from a list | Recall workflow identifies patients due for contact based on defined intervals and sends outreach via configured channels |
| Rescheduling handled through back-and-forth calls | Rescheduling requests handled via configured channel with availability check, where supported |
| Clinical and administrative calls handled with the same process | Triage logic separates administrative inquiries from clinical or urgent situations; clinical calls go directly to staff |
| No systematic data on missed calls or booking outcomes | Interaction logging provides visibility into inquiry volume, escalation frequency and booking outcomes |`,
  useCases: `### 1. Appointment inquiry and booking
Trigger: Patient calls or submits an inquiry via a configured channel (phone, website form, or chat).
Automated steps: System identifies the inquiry as an appointment request, checks availability for the requested appointment type where the scheduling integration is supported, offers available slots, confirms the booking.
Systems involved: Telephony or chat platform, scheduling system (where a supported API is available), n8n, CRM or patient record system.
AI role: Conversational inquiry handling and slot suggestion within the configured scope.
Human approval/escalation: Appointment types requiring clinical assessment or pre-screening are not booked automatically — these are routed to staff. Complex scheduling situations flagged for manual review.
Business outcome: Appointment inquiries handled consistently for defined appointment types without requiring staff to step away from in-person patients.

### 2. Reminder and confirmation workflow
Trigger: Upcoming appointment within a defined time window (e.g., 48 hours and 24 hours before).
Automated steps: Reminder sent via configured channel (SMS, email or both); patient response (confirm, reschedule, cancel) processed; appointment status updated in the scheduling system where supported.
Systems involved: n8n, scheduling system, SMS or email provider. Automated messaging enabled only where the practice has an appropriate legal basis or consent for patient communication.
AI role: Optional — personalising reminder content based on appointment type.
Human approval/escalation: Cancellations within a defined time window or unusual responses flagged for staff review.
Business outcome: More consistent reminder delivery and confirmation collection without manual staff effort for each appointment.

### 3. Recall outreach
Trigger: Patient record shows a defined recall interval has been reached (e.g., six-month check-up due).
Automated steps: Outreach message sent via configured channel; patient response processed; appointment offered if patient confirms interest.
Systems involved: Patient record or CRM, n8n, SMS or email provider, scheduling system. Automated messaging enabled only where the practice has an appropriate legal basis or consent for patient contact.
AI role: Optional — personalising outreach message based on patient record data.
Human approval/escalation: Patients who do not respond after defined attempts are flagged for staff follow-up rather than contacted repeatedly by the automated system.
Business outcome: More systematic recall outreach without relying on manual list-working by staff.

### 4. Rescheduling requests
Trigger: Patient contacts the practice to reschedule an existing appointment.
Automated steps: System identifies the existing booking, offers alternative available slots within the configured appointment type, confirms the new booking, updates the scheduling system where supported.
Systems involved: Telephony or chat platform, scheduling system, n8n.
AI role: Conversational rescheduling flow within defined scope.
Human approval/escalation: Rescheduling requests involving clinical considerations, complaints or unusual circumstances routed to staff.
Business outcome: Reduced back-and-forth for straightforward rescheduling requests.

### 5. General inquiry handling
Trigger: Patient inquiry about practice location, hours, services offered, pricing or preparation instructions.
Automated steps: System identifies the inquiry type and responds from configured practice information.
Systems involved: Chat or telephony platform, knowledge base or configured practice information, n8n.
AI role: Response generation from configured information sources only.
Human approval/escalation: Inquiries involving clinical questions, treatment recommendations or complaints routed immediately to staff. The system does not provide clinical information or advice.
Business outcome: Consistent responses to common administrative inquiries without staff involvement for defined question types.

### 6. Call triage and routing
Trigger: Inbound call received.
Automated steps: System identifies the nature of the inquiry (appointment, general information, clinical question, complaint, urgent situation) based on defined triggers, routes accordingly.
Systems involved: Telephony platform, n8n.
AI role: Inquiry classification based on defined categories and trigger phrases.
Human approval/escalation: Clinical questions, complaints, urgent situations and anything outside defined administrative categories are transferred to staff immediately. The system does not assess clinical urgency — that judgment remains with qualified staff.
Business outcome: Administrative calls handled at the first point of contact; clinical and urgent calls reach staff without delay.

### 7. New patient intake
Trigger: New patient inquiry or first-appointment booking.
Automated steps: System collects basic contact and appointment-type information via configured channel, creates a preliminary record in the practice management system where supported, sends confirmation and any required pre-appointment information.
Systems involved: Website form or chat, practice management system where a supported API is available, n8n, email or SMS.
AI role: Guided information collection within a defined intake form structure.
Human approval/escalation: New patient records reviewed by staff before the appointment; clinical history and treatment planning remain entirely with qualified staff.
Business outcome: New patient administrative intake completed before the first appointment without requiring a dedicated staff call.`,
  workflowSection: {
    title: "Target Workflow / Recommended Architecture",
    lead: "The exact architecture is adapted during discovery based on the practice's scheduling system, communication channels, patient volume and compliance requirements.",
    steps: [
      { title: "Patient inquiry arrives", description: "phone / website form / chat / SMS" },
      { title: "Communication platform", description: "telephony or chat" },
      { title: "Workflow layer", description: "n8n, typically orchestrated" },
      { title: "Inquiry classification", description: "appointment / reminder / recall / general / clinical / urgent" },
      {
        title: "Decision branch: clinical or urgent?",
        branches: [
          {
            label: "CLINICAL OR URGENT",
            steps: [
              {
                title: "Immediate transfer to staff",
                description: "Clinical questions, complaints and urgent situations are transferred without delay",
              },
            ],
          },
          {
            label: "ADMINISTRATIVE",
            steps: [
              { title: "Configured handling logic" },
              { title: "Scheduling-system check where supported" },
              { title: "Patient record or CRM update where supported" },
              { title: "Patient confirmation through a permitted configured channel" },
              { title: "Staff notification where required" },
            ],
          },
        ],
      },
      { title: "Logging, monitoring and reporting" },
    ] satisfies WorkflowStep[],
  },
  automationModules: `- Front desk process mapping (inquiry types, call volume, scheduling workflow, recall process)
- AI-assisted call or chat handling configuration for defined administrative inquiry types
- Appointment booking logic and scheduling system integration (where a supported API is available)
- Reminder and confirmation workflow design and configuration
- Recall outreach workflow
- Rescheduling workflow
- Call triage and routing logic
- New patient intake workflow
- Patient record or CRM integration (where supported)
- Escalation logic and clinical call routing
- Interaction logging and monitoring
- Error handling and fallback paths
- Reporting on inquiry volume, booking outcomes and escalation rates
- Documentation of the full system
- Staff training on escalation handling and system oversight
- Post-launch stabilisation period
- Optional ongoing support — for monitoring, adjustments and additions after stabilisation`,
  implementationProcess: `### 1. Discovery
Current call volume, scheduling system, practice management software, communication channels, reminder process and recall workflow are reviewed. Compliance and data-handling requirements are discussed.

### 2. Process Mapping
Front desk workflow documented from inquiry arrival to appointment confirmation, including escalation paths and clinical boundaries.

### 3. Architecture Design
System designed around the practice's actual scheduling logic, patient communication preferences and compliance requirements.

### 4. Tool Selection
Voice AI platform (if applicable), telephony, scheduling integration, messaging channels and orchestration selected based on the existing stack.

### 5. Build and Integration
Workflows built, integrations connected, escalation logic implemented, channels configured.

### 6. Testing
System tested across all defined inquiry types including clinical-trigger and escalation scenarios. Scope boundaries and transfer logic verified before go-live.

### 7. Controlled Launch
System launched on one channel or inquiry type first, with monitoring active from day one and scope expanded only after the initial configuration is confirmed stable.

### 8. Monitoring and Support
Interaction logs, escalation rates and scheduling accuracy monitored after launch. Adjustments made as patterns emerge.`,
  toolAndPlatformOptions: `| Layer | Possible tools | Purpose | Selection considerations |
| --- | --- | --- | --- |
| Voice AI | Retell AI, Vapi, OpenAI Realtime API | AI-assisted call handling | Latency, voice quality, language support, pricing model |
| Telephony | Twilio, Vonage | Call routing and number provisioning | Existing phone setup, call volume, regional availability |
| Orchestration | n8n | Workflow logic, routing, scheduling | Self-hosted vs. cloud; existing infrastructure |
| Scheduling / Practice management | Open Dental API, supported dental systems | Appointment availability and booking | API availability for the specific system in use — confirmed during discovery |
| Messaging | SMS providers, Gmail, Outlook | Reminders, confirmations, recall outreach | Consent requirements; channels the practice currently uses |
| CRM / Patient records | Practice management system or CRM where supported | Interaction logging, patient record updates | API access; data sensitivity requirements |
| AI model | OpenAI, Claude | Inquiry classification, response generation | Response quality, data sensitivity, cost per call |
| Reporting | Databases, dashboards | Interaction volume, escalation rate, booking outcomes | Reporting needs; existing data tools |

Integration with specific dental practice management systems — including widely used platforms — depends on API availability and permissions for the specific system version and configuration in use. This is assessed during discovery. Kubera AI does not claim support for every dental practice management platform.`,
  security: `Dental practices handle sensitive patient information. The system is designed around controlled data flows: access to patient records and scheduling data is scoped to what each workflow step requires, and credentials are separated by system.

The AI component is not given open access to patient health records. It retrieves only the specific data fields required for the defined administrative workflow — typically appointment availability and basic contact information.

Human staff remain responsible for all clinical decisions, treatment planning, clinical questions and any interaction involving patient health information beyond basic scheduling.

Security architecture, data retention, access controls and applicable healthcare data regulation requirements — including any regional or national requirements relevant to the practice's jurisdiction — are assessed during discovery and are subject to the practice's own legal and compliance review. Kubera AI does not provide HIPAA, GDPR or other regulatory compliance guarantees.

Call recording, if applicable, is configured in accordance with the practice's own policies and legal requirements, assessed during discovery.`,
  expectedBusinessImpact: `For dental practices, the primary operational benefit of a well-configured front desk automation system is reduced administrative load on staff during high-volume periods — fewer calls handled manually, more consistent reminder delivery, and more systematic recall outreach.

Staff time freed from repetitive administrative tasks can be redirected to in-person patient interactions, treatment coordination and the situations that genuinely require human involvement.

The exact business impact depends on current call volume, appointment mix, no-show rate, staff cost, recall list size and implementation scope.`,
  whyKuberaAi: `Front desk automation in a dental practice is not a generic deployment. The scheduling logic, the escalation boundaries, the reminder timing and the compliance considerations are all specific to the practice's setup, patient base and jurisdiction.

Kubera AI designs the system around the practice's actual workflows — not a template — with clinical boundaries defined from the start, escalation paths tested before launch, and monitoring in place from day one. The result is a system the front desk team can rely on, with clear handoff points between what the system handles and what stays with staff.`,
  pricingLogic: `Kubera AI does not publish fixed prices, since scope varies by practice size, scheduling system complexity and channel configuration. Pricing is driven by:

- Number of workflows configured (booking, reminders, recall, triage, new patient intake)
- Scheduling system integration complexity and API availability
- Voice AI and telephony configuration, if applicable
- Number of communication channels
- Compliance and data-handling assessment requirements
- Reporting and monitoring setup
- Optional ongoing support

Three cost components apply separately:

- Platform subscription fees (voice AI, telephony, messaging, scheduling system) — paid directly to the respective providers
- Usage fees (call minutes, AI model calls, SMS volume) — variable based on patient inquiry volume
- Implementation fee — for system design, integration, testing and post-launch stabilisation
- Optional ongoing support — for monitoring, adjustments and additions after the stabilisation period`,
  midCta: {
    eyebrow: "Mid-page CTA",
    title: "Map your current front desk workflow and identify which administrative tasks can be handled automatically.",
    body: "Book a strategy call to discuss your current front desk workflow and what an AI-assisted system would look like for your practice.",
    primaryLabel: "Book a strategy call",
    primaryHref: "/contacts",
  },
  relatedServices: [
    {
      title: "Customer Communications",
      description: "See the service category behind inbound communication and patient follow-up systems.",
      href: "/services",
    },
    {
      title: "Internal Processes",
      description: "Review the operational automation service category used for routing and reporting.",
      href: "/services",
    },
    {
      title: "Medical Clinics & Dental",
      description: "Use the existing service category aligned with clinic and dental workflows.",
      href: "/services",
    },
    {
      title: "Sales & Leads",
      description: "See the intake and CRM service path used in booking-adjacent workflows.",
      href: "/services",
    },
  ] satisfies UseCaseLinkCard[],
  relevantDemoCases: [
    {
      title: "Medical Clinics & Dental",
      description: "/cases/medical-clinics-dental",
      href: "/cases/medical-clinics-dental",
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
      title: "How AI Automation Saves Time",
      description: "/blog/how-ai-automation-saves-time",
      href: "/blog/how-ai-automation-saves-time",
    },
  ] satisfies UseCaseLinkCard[],
  faq: [
    {
      question: "How much does an AI front desk system for a dental practice cost?",
      answer:
        "Cost depends on the number of workflows configured, scheduling system integration complexity, voice AI and telephony setup, and channel configuration. Kubera AI provides a scoped estimate after a discovery call, separate from platform subscription and usage fees.",
    },
    {
      question: "How long does implementation take?",
      answer:
        "A focused implementation covering appointment booking and reminders typically takes less time than a full system including recall, triage, new patient intake and multi-location coordination. Kubera AI provides a timeline after discovery.",
    },
    {
      question: "Can you integrate with our practice management system?",
      answer:
        "Integration depends on API availability for the specific system and version in use. Some dental practice management platforms have accessible APIs; others have limited or no external integration capability. This is assessed during discovery rather than assumed in advance.",
    },
    {
      question: "Is the system HIPAA compliant?",
      answer:
        "Compliance requirements — including HIPAA and any other applicable healthcare data regulations — are assessed during discovery and are subject to the practice's own legal and compliance review. Kubera AI designs the system with controlled data flows and access scoping, but does not provide HIPAA or other regulatory compliance guarantees.",
    },
    {
      question: "Will the AI give clinical advice or answer clinical questions?",
      answer:
        "No. The system is configured to handle administrative inquiry types only. Clinical questions, treatment discussions and any inquiry requiring professional judgment are escalated immediately to staff. The system does not provide clinical advice.",
    },
    {
      question: "What happens if a patient calls with an urgent situation?",
      answer:
        "Escalation logic is designed with the client before launch. Calls involving defined urgency triggers — pain, swelling, injury, or other client-defined indicators — are transferred to staff without delay. The system does not assess clinical urgency; that judgment remains with qualified staff.",
    },
    {
      question: "Can the system send reminders and recall messages automatically?",
      answer:
        "Yes, where the practice has an appropriate legal basis or consent for patient communication via the configured channels. Messaging consent and legal basis are reviewed as part of discovery before any automated patient communication is enabled.",
    },
    {
      question: "Who pays for the platform fees?",
      answer:
        "Platform subscription and usage fees — voice AI, telephony, messaging, scheduling system — are paid directly to the respective providers. These are separate from Kubera AI's implementation fee.",
    },
    {
      question: "Does this replace our front desk staff?",
      answer:
        "No. The system handles defined administrative inquiry types. Front desk staff remain responsible for clinical boundaries, sensitive patient interactions, complex scheduling situations and all decisions requiring professional judgment. The goal is to reduce repetitive administrative load, not to replace the team.",
    },
    {
      question: "Can the system work across multiple locations?",
      answer:
        "Multi-location configuration is more complex and depends on how scheduling and patient records are structured across locations. This is assessed during discovery and factored into the architecture design.",
    },
  ] satisfies UseCaseFaqItem[],
  finalCta: {
    title:
      "Front desk teams in busy dental practices spend a significant portion of their day on administrative tasks that follow predictable patterns. A well-configured automation system handles the routine layer consistently — freeing staff for the patient interactions that actually benefit from human attention.",
    body: "Book a strategy call to discuss your current front desk workflow and what an AI-assisted system would look like for your practice.",
    primaryLabel: "Book a strategy call",
    primaryHref: "/contacts",
  },
};
