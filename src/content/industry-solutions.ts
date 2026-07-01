export type IndustrySolutionProblem = {
  title: string;
  description: string;
};

export type IndustrySolutionMatrixItem = {
  problem: string;
  automation: string;
  result: string;
};

export type IndustrySolutionModule = {
  title: string;
  description: string;
  bullets: string[];
};

export type IndustrySolutionResult = {
  title: string;
  description: string;
};

export type IndustrySolutionLink = {
  title: string;
  description: string;
  href: string;
};

export type IndustrySolutionFaq = {
  question: string;
  answer: string;
};

export type IndustrySolution = {
  locale: "en";
  country: string;
  countryLabel: string;
  industry: string;
  industryLabel: string;
  url: string;
  seo: {
    title: string;
    description: string;
    canonical: string;
    type: "website" | "service";
  };
  hero: {
    label: string;
    title: string;
    subtitle: string;
    trustLine: string;
    primaryCta: IndustrySolutionLink;
    secondaryCta: IndustrySolutionLink;
    previewNodes: string[];
  };
  problems: IndustrySolutionProblem[];
  problemSolution: IndustrySolutionMatrixItem[];
  architecture: {
    title: string;
    description: string;
    flow: string[];
    notes: string[];
  };
  modules: IndustrySolutionModule[];
  results: IndustrySolutionResult[];
  services: IndustrySolutionLink[];
  cases: IndustrySolutionLink[];
  reading: IndustrySolutionLink[];
  faq: IndustrySolutionFaq[];
  cta: {
    label: string;
    title: string;
    body: string;
    primary: IndustrySolutionLink;
    secondary: IndustrySolutionLink;
  };
};

export const industrySolutions: IndustrySolution[] = [
  {
    locale: "en",
    country: "spain",
    countryLabel: "Spain",
    industry: "whatsapp-automation",
    industryLabel: "WhatsApp Automation",
    url: "/en/solutions/spain/whatsapp-automation",
    seo: {
      title: "WhatsApp Automation for Businesses in Spain | Kubera AI",
      description:
        "Build AI-powered WhatsApp automation for Spanish businesses. Automate customer messages, lead qualification, CRM updates and follow-ups with Kubera AI.",
      canonical: "https://www.kubera-automation.com/en/solutions/spain/whatsapp-automation",
      type: "website",
    },
    hero: {
      label: "Industry Solution Pages",
      title: "WhatsApp Automation for Businesses in Spain",
      subtitle:
        "Designed for Spanish businesses that need faster replies, cleaner lead routing and less manual follow-up across WhatsApp, forms and CRM systems.",
      trustLine: "Built around human review, existing tools and scalable automation architecture.",
      primaryCta: {
        title: "Discuss the project",
        description: "Start with one workflow and define the fallback rules before anything is built.",
        href: "/contacts",
      },
      secondaryCta: {
        title: "View Spain GEO page",
        description: "Open the existing Spain market page for broader location context.",
        href: "/automatizacion-ia-espana",
      },
      previewNodes: ["Website / Form", "WhatsApp", "AI Assistant", "CRM", "Email", "Analytics"],
    },
    problems: [
      {
        title: "Replies arrive too slowly",
        description: "WhatsApp enquiries are checked by hand, so the first response often depends on who is online.",
      },
      {
        title: "Leads are not qualified consistently",
        description: "Sales teams lose time triaging the same questions instead of moving good leads forward.",
      },
      {
        title: "CRM updates happen late",
        description: "Important contact details and next steps stay in chat threads instead of a system of record.",
      },
      {
        title: "Handoffs break down",
        description: "A message may need sales, support or booking follow-up, but the owner is not always obvious.",
      },
      {
        title: "No visibility into messaging performance",
        description: "Teams can see messages, but not response times, resolution rate or where requests stall.",
      },
    ],
    problemSolution: [
      {
        problem: "WhatsApp enquiries arrive after hours or during busy periods.",
        automation: "AI Assistant captures intent, creates the right task and routes the message to the correct queue.",
        result: "Faster first response and fewer dropped opportunities.",
      },
      {
        problem: "Sales teams repeat the same qualification questions manually.",
        automation: "The workflow asks structured follow-up questions and scores the lead before handoff.",
        result: "Cleaner qualification and less time spent on low-fit enquiries.",
      },
      {
        problem: "CRM records are updated later or not at all.",
        automation: "Conversation data is written back to CRM automatically with source and status tags.",
        result: "Cleaner records and fewer follow-up mistakes.",
      },
      {
        problem: "Booking and sales follow-up depends on one person's memory.",
        automation: "The workflow triggers reminders, confirmation messages and next-step tasks automatically.",
        result: "More reliable handoffs and more consistent follow-through.",
      },
    ],
    architecture: {
      title: "Recommended automation architecture",
      description:
        "A practical stack for WhatsApp-heavy businesses: capture the request once, let AI classify it, and move it into the right system without manual copying.",
      flow: ["Website / Form", "WhatsApp / Telegram", "AI Assistant", "CRM", "Email", "Analytics"],
      notes: [
        "Website forms can trigger the same workflow as a WhatsApp enquiry.",
        "The AI Assistant handles classification, drafting and routing, not unchecked final decisions.",
        "CRM remains the source of truth for leads, status and follow-up ownership.",
        "Email and analytics close the loop with confirmations, summaries and performance tracking.",
      ],
    },
    modules: [
      {
        title: "AI Assistant",
        description: "Classifies incoming messages, drafts replies and decides which route the request should take next.",
        bullets: ["Intent detection", "Draft responses", "Exception routing"],
      },
      {
        title: "CRM Automation",
        description: "Creates or updates records so the team never has to copy chat details by hand.",
        bullets: ["Lead creation", "Status updates", "Source tagging"],
      },
      {
        title: "WhatsApp / Telegram Automation",
        description: "Keeps conversations moving with structured replies, handoffs and follow-up prompts.",
        bullets: ["Channel routing", "Follow-up triggers", "Message history"],
      },
      {
        title: "Lead Qualification",
        description: "Filters low-fit enquiries early so the team spends time on leads that match the offer.",
        bullets: ["Fit scoring", "Question flow", "Priority queues"],
      },
      {
        title: "Booking / Sales Flow",
        description: "Turns interested leads into next steps with confirmation and scheduling logic.",
        bullets: ["Appointment prompts", "Sales handoff", "Reminder logic"],
      },
      {
        title: "Analytics / Reporting",
        description: "Measures response speed, resolution rate and where the workflow needs tuning.",
        bullets: ["Response time", "Resolution rate", "Queue visibility"],
      },
    ],
    results: [
      {
        title: "Potential faster response times",
        description: "Can help reduce first-response delays by routing enquiries immediately instead of waiting for manual review.",
      },
      {
        title: "Potentially cleaner CRM data",
        description: "Can help keep records aligned with live conversations so the team is not working from stale information.",
      },
      {
        title: "Less repetitive manual work",
        description: "Can help reduce the time spent on copying messages, tagging leads and writing the same follow-ups.",
      },
      {
        title: "Better queue visibility",
        description: "Can help teams see where requests are stuck and which workflows need attention.",
      },
    ],
    services: [
      {
        title: "Customer Communications",
        description: "Use the existing service hub to map WhatsApp, email and chat workflows into one operating model.",
        href: "/services",
      },
      {
        title: "Sales & Leads",
        description: "Explore lead qualification, routing and follow-up systems in the current services page.",
        href: "/services",
      },
      {
        title: "Internal Processes",
        description: "Use the services hub to review automation for handoffs, reporting and task coordination.",
        href: "/services",
      },
    ],
    cases: [
      {
        title: "Service Company - Finland",
        description: "An omnichannel communication and triage system that is a good proxy for WhatsApp-heavy customer operations.",
        href: "/cases/customer-communications",
      },
      {
        title: "Real Estate & Rentals",
        description: "A closest-fit case for lead handling, booking requests and follow-up automation.",
        href: "/cases/real-estate-rentals",
      },
      {
        title: "Hotels & Restaurants",
        description: "Useful for booking, request handling and time-sensitive customer communication patterns.",
        href: "/cases/hotels-restaurants",
      },
    ],
    reading: [
      {
        title: "How AI Automation Saves 20+ Hours Per Week for Small Businesses",
        description: "A practical guide to the first workflows that free up real time.",
        href: "/blog/how-ai-automation-saves-time",
      },
      {
        title: "What Is an AI Agent?",
        description: "Useful context for deciding when a workflow needs an assistant versus a full agent layer.",
        href: "/blog/what-is-an-ai-agent",
      },
      {
        title: "AI Agent vs Chatbot",
        description: "A comparison for teams deciding how much intelligence the workflow actually needs.",
        href: "/blog/ai-agent-vs-chatbot",
      },
    ],
    faq: [
      {
        question: "What does WhatsApp automation mean for a business in Spain?",
        answer:
          "It means incoming messages can be classified, routed and logged automatically instead of being handled only by manual inbox checking. The result is a more consistent process across sales, support and booking flows.",
      },
      {
        question: "Do we need the WhatsApp Business API?",
        answer:
          "In most production setups, yes. The API is the reliable path for structured automation, message delivery and system integration.",
      },
      {
        question: "Can this connect to our CRM?",
        answer:
          "Yes. The architecture is designed to write lead status, conversation context and follow-up tasks into the CRM so the team keeps one source of truth.",
      },
      {
        question: "Does AI make final decisions without review?",
        answer:
          "No. The recommended model uses AI for classification, drafting and routing, while exceptions still move to a human owner.",
      },
      {
        question: "Can the workflow support Spanish and English messages?",
        answer:
          "Yes. The workflow can detect language, route the request correctly and keep the customer experience consistent in both languages.",
      },
      {
        question: "What happens when the AI is unsure?",
        answer:
          "The workflow should escalate to a person instead of guessing. That keeps the system safe and prevents low-quality automation from creating errors.",
      },
      {
        question: "Is this only useful for one industry?",
        answer:
          "No. The same pattern can support hospitality, real estate, retail and any business that gets repeat enquiries through WhatsApp or similar channels.",
      },
    ],
    cta: {
      label: "Final CTA",
      title: "Want to map the right automation workflow?",
      body:
        "Start with one real process. We can map the message flow, define fallback rules and outline the system before anything is built.",
      primary: {
        title: "Contact Kubera AI",
        description: "Go to the existing contact page for project discussion.",
        href: "/contacts",
      },
      secondary: {
        title: "Explore services",
        description: "Review the current service hub before scoping the workflow.",
        href: "/services",
      },
    },
  },
  {
    locale: "en",
    country: "spain",
    countryLabel: "Spain",
    industry: "hospitality-automation",
    industryLabel: "Hospitality Automation",
    url: "/en/solutions/spain/hospitality-automation",
    seo: {
      title: "Hospitality Automation for Businesses in Spain | Kubera AI",
      description:
        "Automate guest messages, booking confirmations, upsells and review requests for Spanish hotels and vacation rentals with AI automation.",
      canonical: "https://www.kubera-automation.com/en/solutions/spain/hospitality-automation",
      type: "service",
    },
    hero: {
      label: "Industry Solution Pages",
      title: "Hospitality Automation for Hotels and Vacation Rentals in Spain",
      subtitle:
        "Built for Spanish hospitality teams that need faster guest responses, fewer missed bookings and cleaner handoffs across WhatsApp, email, PMS and CRM systems.",
      trustLine: "Designed for seasonal volume, multilingual guests and human-in-the-loop service.",
      primaryCta: {
        title: "Discuss the project",
        description: "Start with one workflow and define fallback rules before anything is built.",
        href: "/contacts",
      },
      secondaryCta: {
        title: "View Spain GEO page",
        description: "Open the existing Spain market page for broader location context.",
        href: "/automatizacion-ia-espana",
      },
      previewNodes: ["Booking / Website", "WhatsApp", "AI Assistant", "PMS / CRM", "Notifications", "Analytics"],
    },
    problems: [
      {
        title: "Guest responses arrive too slowly",
        description: "Guest questions often sit in inboxes until a staff member has time to reply.",
      },
      {
        title: "Seasonal volume creates bottlenecks",
        description: "Peak periods force teams to handle a much higher message load without proportional headcount.",
      },
      {
        title: "Booking questions are repetitive",
        description: "Availability, check-in, parking, upgrades and policy questions take time away from real service moments.",
      },
      {
        title: "Guest details live in too many places",
        description: "Reservation notes, WhatsApp threads and CRM data are not always synchronized.",
      },
      {
        title: "Review follow-up is inconsistent",
        description: "Post-stay requests and loyalty messages are often handled manually or skipped entirely.",
      },
    ],
    problemSolution: [
      {
        problem: "Guest messages arrive before and during busy service windows.",
        automation: "AI Assistant captures the request, classifies it and routes it to the right queue instantly.",
        result: "Faster guest response without adding pressure to the front desk.",
      },
      {
        problem: "Staff repeat the same booking and policy explanations all day.",
        automation: "The workflow answers routine questions and keeps the conversation moving with structured prompts.",
        result: "Less repetitive work and more time for high-value guest moments.",
      },
      {
        problem: "Upsell opportunities are easy to miss in manual communication.",
        automation: "The workflow triggers pre-arrival and in-stay offers based on reservation context.",
        result: "More consistent upsell and add-on conversion.",
      },
      {
        problem: "Post-stay review requests depend on staff memory.",
        automation: "The system sends review and repeat-guest follow-up automatically after check-out.",
        result: "More consistent reputation management and retention.",
      },
    ],
    architecture: {
      title: "Recommended hospitality automation architecture",
      description:
        "A practical stack for hotels and rentals: capture every inquiry, answer routine questions instantly and keep the team focused on exceptions and service moments.",
      flow: ["Booking / Website", "WhatsApp", "AI Assistant", "PMS / CRM", "Notifications", "Analytics"],
      notes: [
        "Website forms, booking engines and WhatsApp can all trigger the same guest workflow.",
        "The AI Assistant handles first response, drafting and routing, not unchecked final decisions.",
        "PMS and CRM stay synchronized so guest history and ownership remain visible.",
        "Notifications and analytics close the loop with confirmations, summaries and performance tracking.",
      ],
    },
    modules: [
      {
        title: "Guest Messaging Assistant",
        description: "Responds to standard guest questions and keeps service requests organized.",
        bullets: ["Instant first reply", "Multi-language handling", "Exception routing"],
      },
      {
        title: "Booking / Reservation Automation",
        description: "Turns inquiries into confirmations, reminders and structured next steps.",
        bullets: ["Availability flow", "Confirmation logic", "Reminder prompts"],
      },
      {
        title: "Upsell and Pre-arrival Flow",
        description: "Uses reservation context to trigger relevant offers and guest preparation messages.",
        bullets: ["Upgrade offers", "Arrival info", "Ancillary services"],
      },
      {
        title: "PMS / CRM Sync",
        description: "Writes guest data back to the system of record so nothing is trapped in chat threads.",
        bullets: ["Guest records", "Status updates", "Ownership tracking"],
      },
      {
        title: "Review and Loyalty Automation",
        description: "Automates post-stay review requests and repeat-guest nurturing.",
        bullets: ["Review prompts", "Return-stay sequences", "Follow-up timing"],
      },
      {
        title: "Analytics / Reporting",
        description: "Shows response speed, request volume and where the guest journey needs improvement.",
        bullets: ["Response time", "Resolution rate", "Channel visibility"],
      },
    ],
    results: [
      {
        title: "Potential faster guest response times",
        description: "Can help reduce wait times by routing common questions immediately instead of after manual review.",
      },
      {
        title: "Potentially fewer missed bookings",
        description: "Can help keep new inquiries moving through the booking path instead of stalling in inboxes.",
      },
      {
        title: "More consistent guest communication",
        description: "Can help standardize pre-arrival, in-stay and post-stay messaging across the team.",
      },
      {
        title: "Better review generation and retention",
        description: "Can help automate the follow-up that encourages reviews and repeat visits.",
      },
    ],
    services: [
      {
        title: "Customer Communications",
        description: "Use the existing service hub to map guest communication across WhatsApp, email and chat.",
        href: "/services",
      },
      {
        title: "Internal Processes",
        description: "Review automation for handoffs, reporting and team coordination.",
        href: "/services",
      },
      {
        title: "Sales & Leads",
        description: "Connect guest inquiries and upsell flows to a cleaner pipeline.",
        href: "/services",
      },
    ],
    cases: [
      {
        title: "Hotels & Restaurants",
        description: "The closest-fit case for booking, guest communication and service operations.",
        href: "/cases/hotels-restaurants",
      },
      {
        title: "Service Company - Finland",
        description: "Useful proxy for omnichannel communication and triage patterns.",
        href: "/cases/customer-communications",
      },
      {
        title: "Real Estate & Rentals",
        description: "Relevant where guest stays and rentals overlap with booking workflows.",
        href: "/cases/real-estate-rentals",
      },
    ],
    reading: [
      {
        title: "How AI Automation Saves 20+ Hours Per Week for Small Businesses",
        description: "A practical guide to the first workflows that free up real time.",
        href: "/blog/how-ai-automation-saves-time",
      },
      {
        title: "What Is AI Automation?",
        description: "Useful context for understanding the operational model behind these systems.",
        href: "/blog/what-is-ai-automation",
      },
      {
        title: "AI Agent vs Chatbot",
        description: "A comparison for teams deciding how much intelligence the workflow actually needs.",
        href: "/blog/ai-agent-vs-chatbot",
      },
    ],
    faq: [
      {
        question: "Can this work for hotels, vacation rentals and boutique stays?",
        answer:
          "Yes. The same automation pattern can support hotels, vacation rentals, resorts and smaller hospitality operators that need consistent guest communication.",
      },
      {
        question: "Can you connect booking engines and PMS tools?",
        answer:
          "Yes. The workflow can be designed to sync with booking systems and the PMS or CRM the business already uses.",
      },
      {
        question: "Can guests be handled in multiple languages?",
        answer:
          "Yes. The workflow can detect language and respond in the guest's preferred language while keeping the process consistent.",
      },
      {
        question: "Does the system replace staff at the front desk?",
        answer:
          "No. It removes repetitive admin so the team can focus on service, exceptions and high-value guest interactions.",
      },
      {
        question: "Can it handle review requests automatically?",
        answer:
          "Yes. Review follow-up and repeat-guest sequences can be triggered automatically after check-out.",
      },
      {
        question: "How fast can this be implemented?",
        answer:
          "Most focused projects can go live in 2-4 weeks once scope, fallback rules and connected systems are clear.",
      },
    ],
    cta: {
      label: "Final CTA",
      title: "Want to map hospitality automation for your property or group?",
      body:
        "Start with one real guest process. We can map the message flow, define fallback rules and outline the system before anything is built.",
      primary: {
        title: "Contact Kubera AI",
        description: "Go to the existing contact page for project discussion.",
        href: "/contacts",
      },
      secondary: {
        title: "Explore services",
        description: "Review the current service hub before scoping the workflow.",
        href: "/services",
      },
    },
  },
  {
    locale: "en",
    country: "spain",
    countryLabel: "Spain",
    industry: "real-estate-automation",
    industryLabel: "Real Estate Automation",
    url: "/en/solutions/spain/real-estate-automation",
    seo: {
      title: "Real Estate Automation for Businesses in Spain | Kubera AI",
      description:
        "Automate property inquiries, multilingual follow-up, viewing scheduling and CRM updates for Spanish real estate teams with AI automation.",
      canonical: "https://www.kubera-automation.com/en/solutions/spain/real-estate-automation",
      type: "service",
    },
    hero: {
      label: "Industry Solution Pages",
      title: "Real Estate Automation for Agencies and Developers in Spain",
      subtitle:
        "Built for Spanish real estate teams handling international buyer demand across WhatsApp, email, web forms and CRM systems.",
      trustLine: "Designed to keep inquiries moving, records clean and viewing requests organized.",
      primaryCta: {
        title: "Discuss the project",
        description: "Start with one workflow and define the fallback rules before anything is built.",
        href: "/contacts",
      },
      secondaryCta: {
        title: "View Spain GEO page",
        description: "Open the existing Spain market page for broader location context.",
        href: "/automatizacion-ia-espana",
      },
      previewNodes: ["Property Portal", "WhatsApp", "AI Assistant", "CRM", "Calendar", "Analytics"],
    },
    problems: [
      {
        title: "Property inquiries arrive slowly into the pipeline",
        description: "Enquiries from portals, forms and WhatsApp can sit untouched until someone manually reviews them.",
      },
      {
        title: "Buyer qualification is inconsistent",
        description: "The same questions get asked repeatedly, but not always in the same order or with the same detail.",
      },
      {
        title: "Viewing scheduling creates back-and-forth",
        description: "Calendar coordination takes time and often delays the handoff from interest to appointment.",
      },
      {
        title: "CRM updates are delayed",
        description: "Critical buyer context is trapped in chat history instead of being written into the system of record.",
      },
      {
        title: "International follow-up is hard to keep consistent",
        description: "Multilingual buyers need prompt, coordinated follow-up that manual teams struggle to maintain.",
      },
    ],
    problemSolution: [
      {
        problem: "Property leads arrive from portals, web forms and WhatsApp at the same time.",
        automation: "AI Assistant captures each inquiry, classifies it and creates the right CRM record instantly.",
        result: "Faster first response and less lead leakage.",
      },
      {
        problem: "Agents repeat the same qualification questions manually.",
        automation: "The workflow asks structured follow-up questions and scores the buyer before handoff.",
        result: "Cleaner qualification and more time spent on serious buyers.",
      },
      {
        problem: "Viewing coordination depends on manual calendar work.",
        automation: "The workflow sends scheduling prompts and confirmation messages automatically.",
        result: "Less admin and quicker movement from inquiry to viewing.",
      },
      {
        problem: "International follow-up is difficult to keep consistent.",
        automation: "The system sends multilingual sequences aligned to the buyer's intent and stage.",
        result: "More reliable follow-through across domestic and international leads.",
      },
    ],
    architecture: {
      title: "Recommended real estate automation architecture",
      description:
        "A practical stack for agencies and developers: capture every inquiry, qualify the buyer, and move the opportunity into the right stage without manual copying.",
      flow: ["Property Portal", "WhatsApp", "AI Assistant", "CRM", "Calendar", "Analytics"],
      notes: [
        "Portals, forms and WhatsApp can all feed the same property workflow.",
        "The AI Assistant handles qualification, drafting and routing, not unchecked final decisions.",
        "CRM keeps pipeline ownership and buyer history visible to the team.",
        "Calendar and analytics close the loop with appointments, summaries and performance tracking.",
      ],
    },
    modules: [
      {
        title: "Inquiry Intake",
        description: "Captures leads from portals, forms and chat into a single workflow.",
        bullets: ["Multi-source capture", "Lead normalization", "Instant logging"],
      },
      {
        title: "Buyer Qualification",
        description: "Asks the right questions and separates serious buyers from general interest.",
        bullets: ["Intent scoring", "Budget context", "Timeline capture"],
      },
      {
        title: "Viewing Scheduling",
        description: "Turns interest into appointments without endless back-and-forth.",
        bullets: ["Calendar prompts", "Confirmation logic", "Reminder flows"],
      },
      {
        title: "CRM Sync",
        description: "Writes inquiry, intent and ownership details back to the CRM.",
        bullets: ["Status updates", "Contact records", "Source tagging"],
      },
      {
        title: "Multilingual Follow-up",
        description: "Keeps the buyer journey moving in the right language and at the right stage.",
        bullets: ["Language-aware sequences", "Stage-based messaging", "Human handoff"],
      },
      {
        title: "Pipeline Analytics",
        description: "Measures response times, conversion stages and where leads are stalling.",
        bullets: ["Response time", "Viewing conversion", "Stage visibility"],
      },
    ],
    results: [
      {
        title: "Potential faster response to inquiries",
        description: "Can help ensure every listing inquiry gets an immediate first touch instead of waiting in inboxes.",
      },
      {
        title: "Potentially cleaner buyer qualification",
        description: "Can help the team spend more time with serious buyers and less time on low-intent leads.",
      },
      {
        title: "More reliable viewing coordination",
        description: "Can help reduce the admin overhead around scheduling, reminders and confirmation messages.",
      },
      {
        title: "Stronger CRM hygiene and visibility",
        description: "Can help keep pipeline data aligned with actual buyer conversations and next steps.",
      },
    ],
    services: [
      {
        title: "Sales & Leads",
        description: "Use the current services page to map qualification, routing and follow-up systems.",
        href: "/services",
      },
      {
        title: "Customer Communications",
        description: "Review automation for WhatsApp, email and buyer communication workflows.",
        href: "/services",
      },
      {
        title: "Internal Processes",
        description: "Connect the handoffs, approvals and reporting that keep the pipeline moving.",
        href: "/services",
      },
    ],
    cases: [
      {
        title: "Real Estate & Rentals",
        description: "The closest-fit case for buyer handling, viewings and follow-up automation.",
        href: "/cases/real-estate-rentals",
      },
      {
        title: "Service Company - Finland",
        description: "Useful proxy for triage, response and routing logic across channels.",
        href: "/cases/customer-communications",
      },
      {
        title: "Sales & Leads",
        description: "Relevant for qualification and pipeline management patterns.",
        href: "/cases/sales-leads",
      },
    ],
    reading: [
      {
        title: "How AI Automation Saves 20+ Hours Per Week for Small Businesses",
        description: "A practical guide to the first workflows that free up real time.",
        href: "/blog/how-ai-automation-saves-time",
      },
      {
        title: "What Is an AI Agent?",
        description: "Useful context for deciding when a workflow needs an assistant versus a full agent layer.",
        href: "/blog/what-is-an-ai-agent",
      },
      {
        title: "AI Agent vs Chatbot",
        description: "A comparison for teams deciding how much intelligence the workflow actually needs.",
        href: "/blog/ai-agent-vs-chatbot",
      },
    ],
    faq: [
      {
        question: "Can this connect to our CRM and property pipeline?",
        answer:
          "Yes. The workflow can write records, update stages and keep the team aligned with live buyer conversations.",
      },
      {
        question: "Can it handle multilingual international buyers?",
        answer:
          "Yes. The workflow can detect language and keep the response and follow-up consistent across buyer markets.",
      },
      {
        question: "Can viewing scheduling be automated?",
        answer:
          "Yes. Appointment prompts, confirmations and reminder messages can be handled automatically.",
      },
      {
        question: "Does the system replace the agent?",
        answer:
          "No. It removes repetitive admin and speeds up the early-stage process so agents can focus on serious buyers.",
      },
      {
        question: "Can the workflow support portal leads and web forms?",
        answer:
          "Yes. Portal submissions, forms and WhatsApp messages can all feed the same intake flow.",
      },
      {
        question: "How fast can implementation happen?",
        answer:
          "Most focused projects can go live in 2-4 weeks once scope, fallback rules and connected systems are clear.",
      },
    ],
    cta: {
      label: "Final CTA",
      title: "Want to map real estate automation for your agency or development team?",
      body:
        "Start with one real process. We can map the lead flow, define fallback rules and outline the system before anything is built.",
      primary: {
        title: "Contact Kubera AI",
        description: "Go to the existing contact page for project discussion.",
        href: "/contacts",
      },
      secondary: {
        title: "Explore services",
        description: "Review the current service hub before scoping the workflow.",
        href: "/services",
      },
    },
  },
  {
    locale: "en",
    country: "portugal",
    countryLabel: "Portugal",
    industry: "tourism-automation",
    industryLabel: "Tourism Automation",
    url: "/en/solutions/portugal/tourism-automation",
    seo: {
      title: "Tourism Automation for Businesses in Portugal | Kubera AI",
      description:
        "Automate guest messaging, booking confirmations, upsells and post-stay communication for Portuguese tourism businesses with AI automation.",
      canonical: "https://www.kubera-automation.com/en/solutions/portugal/tourism-automation",
      type: "service",
    },
    hero: {
      label: "Industry Solution Pages",
      title: "Tourism Automation for Hospitality Businesses in Portugal",
      subtitle:
        "Built for Portuguese hotels, resorts, rentals and tour operators that need multilingual guest communication without extra headcount.",
      trustLine: "Seasonal demand, WhatsApp-first communication and multilingual service are built in.",
      primaryCta: {
        title: "Discuss the project",
        description: "Start with one workflow and define fallback rules before anything is built.",
        href: "/contacts",
      },
      secondaryCta: {
        title: "View Portugal GEO page",
        description: "Open the existing Portugal market page for broader location context.",
        href: "/en/portugal-automation",
      },
      previewNodes: ["Booking / Website", "WhatsApp", "AI Assistant", "Reservation System", "Guest Notifications", "Analytics"],
    },
    problems: [
      {
        title: "Seasonal peaks overload small teams",
        description: "Demand surges create long message queues and pressure on the front desk or reservations team.",
      },
      {
        title: "Guest questions repeat all day",
        description: "Check-in, parking, WiFi, timing and local information consume time that does not need human judgment.",
      },
      {
        title: "Multilingual communication is hard to keep consistent",
        description: "Portuguese hospitality businesses often serve guests in English, French and German at the same time.",
      },
      {
        title: "Upsell opportunities are missed",
        description: "Pre-arrival and in-stay add-on offers often depend on staff memory and timing.",
      },
      {
        title: "Review requests get forgotten",
        description: "Post-stay communication is usually manual, inconsistent or dropped when the team is busy.",
      },
    ],
    problemSolution: [
      {
        problem: "Guest inquiries spike during peak tourist periods.",
        automation: "AI Assistant captures the request, classifies it and routes it to the right response path immediately.",
        result: "Less pressure on the team and faster first response.",
      },
      {
        problem: "Staff spend hours answering the same hospitality questions.",
        automation: "The workflow provides routine answers and keeps the conversation structured without losing context.",
        result: "Less repetitive work and more time for service moments.",
      },
      {
        problem: "Guests expect communication in their own language.",
        automation: "The workflow detects language and keeps the message flow consistent across key guest markets.",
        result: "Better guest experience and fewer communication gaps.",
      },
      {
        problem: "Follow-up after check-out depends on manual memory.",
        automation: "The system sends review and repeat-guest sequences automatically after the stay ends.",
        result: "More consistent reputation management and retention.",
      },
    ],
    architecture: {
      title: "Recommended tourism automation architecture",
      description:
        "A practical stack for hospitality teams: capture every inquiry, answer routine questions instantly and keep the team focused on service and exceptions.",
      flow: ["Booking / Website", "WhatsApp", "AI Assistant", "Reservation System", "Guest Notifications", "Analytics"],
      notes: [
        "Website forms, booking flows and WhatsApp all feed the same tourism workflow.",
        "The AI Assistant handles first response, drafting and routing, not unchecked final decisions.",
        "Reservation systems stay aligned so guest context and ownership remain visible.",
        "Notifications and analytics close the loop with confirmations, summaries and performance tracking.",
      ],
    },
    modules: [
      {
        title: "Guest Communication Assistant",
        description: "Answers routine guest questions and keeps the service queue organized.",
        bullets: ["Instant first reply", "Language handling", "Exception routing"],
      },
      {
        title: "Booking Confirmation Flow",
        description: "Automates confirmations, reminders and practical guest instructions.",
        bullets: ["Confirmation logic", "Reminder timing", "Arrival details"],
      },
      {
        title: "Upsell and Pre-arrival Automation",
        description: "Triggers relevant offers and guest preparation messages at the right time.",
        bullets: ["Upgrade offers", "Ancillary services", "Arrival sequence"],
      },
      {
        title: "Reservation Sync",
        description: "Keeps the system of record aligned with live guest conversations.",
        bullets: ["Guest records", "Status updates", "Ownership tracking"],
      },
      {
        title: "Review and Retention Flow",
        description: "Automates post-stay review requests and repeat-guest follow-up.",
        bullets: ["Review prompts", "Return-stay sequences", "Timing rules"],
      },
      {
        title: "Analytics / Reporting",
        description: "Shows response times, request volume and where the guest journey stalls.",
        bullets: ["Response time", "Resolution rate", "Queue visibility"],
      },
    ],
    results: [
      {
        title: "Potential faster guest response times",
        description: "Can help reduce wait times by routing common requests immediately instead of after manual review.",
      },
      {
        title: "Potentially fewer missed bookings",
        description: "Can help keep inquiries moving through the booking path instead of stalling in inboxes.",
      },
      {
        title: "More consistent guest communication",
        description: "Can help standardize pre-arrival, in-stay and post-stay messaging across the team.",
      },
      {
        title: "Better review generation and retention",
        description: "Can help automate the follow-up that encourages reviews and repeat visits.",
      },
    ],
    services: [
      {
        title: "Customer Communications",
        description: "Use the existing service hub to map guest communication across WhatsApp, email and chat.",
        href: "/services",
      },
      {
        title: "Internal Processes",
        description: "Review automation for handoffs, reporting and team coordination.",
        href: "/services",
      },
      {
        title: "Sales & Leads",
        description: "Connect guest inquiries and upsell flows to a cleaner pipeline.",
        href: "/services",
      },
    ],
    cases: [
      {
        title: "Hotels & Restaurants",
        description: "The closest-fit case for booking, guest communication and service operations.",
        href: "/cases/hotels-restaurants",
      },
      {
        title: "Service Company - Finland",
        description: "Useful proxy for omnichannel communication and triage patterns.",
        href: "/cases/customer-communications",
      },
      {
        title: "Real Estate & Rentals",
        description: "Relevant where guest stays and rentals overlap with booking workflows.",
        href: "/cases/real-estate-rentals",
      },
    ],
    reading: [
      {
        title: "How AI Automation Saves 20+ Hours Per Week for Small Businesses",
        description: "A practical guide to the first workflows that free up real time.",
        href: "/blog/how-ai-automation-saves-time",
      },
      {
        title: "What Is AI Automation?",
        description: "Useful context for understanding the operational model behind these systems.",
        href: "/blog/what-is-ai-automation",
      },
      {
        title: "AI Agent vs Chatbot",
        description: "A comparison for teams deciding how much intelligence the workflow actually needs.",
        href: "/blog/ai-agent-vs-chatbot",
      },
    ],
    faq: [
      {
        question: "Can this work for hotels, rentals and tour operators?",
        answer:
          "Yes. The same automation pattern can support hotels, vacation rentals and tourism operators with high guest message volume.",
      },
      {
        question: "Can it handle seasonal spikes without extra staff?",
        answer:
          "Yes. The workflow is designed to absorb high volume periods and keep routine requests moving without proportional headcount.",
      },
      {
        question: "Can guests be handled in multiple languages?",
        answer:
          "Yes. The workflow can detect language and keep the response and follow-up consistent across key guest markets.",
      },
      {
        question: "Can the system handle review requests automatically?",
        answer:
          "Yes. Review follow-up and repeat-guest sequences can be triggered automatically after check-out.",
      },
      {
        question: "Does this replace the front desk?",
        answer:
          "No. It removes repetitive admin so the team can focus on service, exceptions and guest experience.",
      },
      {
        question: "How fast can implementation happen?",
        answer:
          "Most focused projects can go live in 2-4 weeks once scope, fallback rules and connected systems are clear.",
      },
    ],
    cta: {
      label: "Final CTA",
      title: "Want to map tourism automation for your property or operator group?",
      body:
        "Start with one real guest process. We can map the message flow, define fallback rules and outline the system before anything is built.",
      primary: {
        title: "Contact Kubera AI",
        description: "Go to the existing contact page for project discussion.",
        href: "/contacts",
      },
      secondary: {
        title: "Explore services",
        description: "Review the current service hub before scoping the workflow.",
        href: "/services",
      },
    },
  },
  {
    locale: "en",
    country: "portugal",
    countryLabel: "Portugal",
    industry: "real-estate-automation",
    industryLabel: "Real Estate Automation",
    url: "/en/solutions/portugal/real-estate-automation",
    seo: {
      title: "Real Estate Automation for Businesses in Portugal | Kubera AI",
      description:
        "Automate multilingual property inquiries, buyer qualification, viewing scheduling and follow-up for Portuguese real estate teams with AI automation.",
      canonical: "https://www.kubera-automation.com/en/solutions/portugal/real-estate-automation",
      type: "service",
    },
    hero: {
      label: "Industry Solution Pages",
      title: "Real Estate Automation for Agencies and Developers in Portugal",
      subtitle:
        "Built for Portuguese agencies handling international buyer demand in Lisbon, Porto, Cascais, Algarve and beyond.",
      trustLine: "Keep every inquiry moving, every lead recorded and every viewing request organized.",
      primaryCta: {
        title: "Discuss the project",
        description: "Start with one workflow and define fallback rules before anything is built.",
        href: "/contacts",
      },
      secondaryCta: {
        title: "View Portugal GEO page",
        description: "Open the existing Portugal market page for broader location context.",
        href: "/en/portugal-automation",
      },
      previewNodes: ["Property Site", "WhatsApp", "AI Assistant", "CRM", "Calendar", "Analytics"],
    },
    problems: [
      {
        title: "Property inquiries arrive with inconsistent speed",
        description: "Messages from portals, forms and WhatsApp can sit untouched until someone manually reviews them.",
      },
      {
        title: "Buyer qualification is not systematic",
        description: "The team repeats the same questions but not always in the same order or with the same detail.",
      },
      {
        title: "Viewing scheduling creates unnecessary back-and-forth",
        description: "Calendar coordination slows the handoff from interest to appointment.",
      },
      {
        title: "CRM updates are delayed",
        description: "Critical buyer context remains trapped in chat history instead of being written into the CRM.",
      },
      {
        title: "International follow-up is hard to keep consistent",
        description: "Multilingual buyers need prompt, coordinated follow-up that manual teams struggle to maintain.",
      },
    ],
    problemSolution: [
      {
        problem: "Property leads arrive from portals, web forms and WhatsApp at the same time.",
        automation: "AI Assistant captures each inquiry, classifies it and creates the right CRM record instantly.",
        result: "Faster first response and less lead leakage.",
      },
      {
        problem: "Agents repeat the same qualification questions manually.",
        automation: "The workflow asks structured follow-up questions and scores the buyer before handoff.",
        result: "Cleaner qualification and more time spent on serious buyers.",
      },
      {
        problem: "Viewing coordination depends on manual calendar work.",
        automation: "The workflow sends scheduling prompts and confirmation messages automatically.",
        result: "Less admin and quicker movement from inquiry to viewing.",
      },
      {
        problem: "International follow-up is difficult to keep consistent.",
        automation: "The system sends multilingual sequences aligned to the buyer's intent and stage.",
        result: "More reliable follow-through across domestic and international leads.",
      },
    ],
    architecture: {
      title: "Recommended real estate automation architecture",
      description:
        "A practical stack for agencies and developers: capture every inquiry, qualify the buyer and move the opportunity into the right stage without manual copying.",
      flow: ["Property Site", "WhatsApp", "AI Assistant", "CRM", "Calendar", "Analytics"],
      notes: [
        "Property portals, forms and WhatsApp can all feed the same intake workflow.",
        "The AI Assistant handles qualification, drafting and routing, not unchecked final decisions.",
        "CRM keeps pipeline ownership and buyer history visible to the team.",
        "Calendar and analytics close the loop with appointments, summaries and performance tracking.",
      ],
    },
    modules: [
      {
        title: "Inquiry Intake",
        description: "Captures leads from portals, forms and chat into a single workflow.",
        bullets: ["Multi-source capture", "Lead normalization", "Instant logging"],
      },
      {
        title: "Buyer Qualification",
        description: "Asks the right questions and separates serious buyers from general interest.",
        bullets: ["Intent scoring", "Budget context", "Timeline capture"],
      },
      {
        title: "Viewing Scheduling",
        description: "Turns interest into appointments without endless back-and-forth.",
        bullets: ["Calendar prompts", "Confirmation logic", "Reminder flows"],
      },
      {
        title: "CRM Sync",
        description: "Writes inquiry, intent and ownership details back to the CRM.",
        bullets: ["Status updates", "Contact records", "Source tagging"],
      },
      {
        title: "Multilingual Follow-up",
        description: "Keeps the buyer journey moving in the right language and at the right stage.",
        bullets: ["Language-aware sequences", "Stage-based messaging", "Human handoff"],
      },
      {
        title: "Pipeline Analytics",
        description: "Measures response times, conversion stages and where leads are stalling.",
        bullets: ["Response time", "Viewing conversion", "Stage visibility"],
      },
    ],
    results: [
      {
        title: "Potential faster response to inquiries",
        description: "Can help ensure every listing inquiry gets an immediate first touch instead of waiting in inboxes.",
      },
      {
        title: "Potentially cleaner buyer qualification",
        description: "Can help the team spend more time with serious buyers and less time on low-intent leads.",
      },
      {
        title: "More reliable viewing coordination",
        description: "Can help reduce the admin overhead around scheduling, reminders and confirmation messages.",
      },
      {
        title: "Stronger CRM hygiene and visibility",
        description: "Can help keep pipeline data aligned with actual buyer conversations and next steps.",
      },
    ],
    services: [
      {
        title: "Sales & Leads",
        description: "Use the current services page to map qualification, routing and follow-up systems.",
        href: "/services",
      },
      {
        title: "Customer Communications",
        description: "Review automation for WhatsApp, email and buyer communication workflows.",
        href: "/services",
      },
      {
        title: "Internal Processes",
        description: "Connect the handoffs, approvals and reporting that keep the pipeline moving.",
        href: "/services",
      },
    ],
    cases: [
      {
        title: "Real Estate & Rentals",
        description: "The closest-fit case for buyer handling, viewings and follow-up automation.",
        href: "/cases/real-estate-rentals",
      },
      {
        title: "Service Company - Finland",
        description: "Useful proxy for triage, response and routing logic across channels.",
        href: "/cases/customer-communications",
      },
      {
        title: "Sales & Leads",
        description: "Relevant for qualification and pipeline management patterns.",
        href: "/cases/sales-leads",
      },
    ],
    reading: [
      {
        title: "How AI Automation Saves 20+ Hours Per Week for Small Businesses",
        description: "A practical guide to the first workflows that free up real time.",
        href: "/blog/how-ai-automation-saves-time",
      },
      {
        title: "What Is an AI Agent?",
        description: "Useful context for deciding when a workflow needs an assistant versus a full agent layer.",
        href: "/blog/what-is-an-ai-agent",
      },
      {
        title: "AI Agent vs Chatbot",
        description: "A comparison for teams deciding how much intelligence the workflow actually needs.",
        href: "/blog/ai-agent-vs-chatbot",
      },
    ],
    faq: [
      {
        question: "Can this connect to our CRM and property pipeline?",
        answer:
          "Yes. The workflow can write records, update stages and keep the team aligned with live buyer conversations.",
      },
      {
        question: "Can it handle multilingual international buyers?",
        answer:
          "Yes. The workflow can detect language and keep the response and follow-up consistent across buyer markets.",
      },
      {
        question: "Can viewing scheduling be automated?",
        answer:
          "Yes. Appointment prompts, confirmations and reminder messages can be handled automatically.",
      },
      {
        question: "Does the system replace the agent?",
        answer:
          "No. It removes repetitive admin and speeds up the early-stage process so agents can focus on serious buyers.",
      },
      {
        question: "Can the workflow support portal leads and web forms?",
        answer:
          "Yes. Portal submissions, forms and WhatsApp messages can all feed the same intake flow.",
      },
      {
        question: "How fast can implementation happen?",
        answer:
          "Most focused projects can go live in 2-4 weeks once scope, fallback rules and connected systems are clear.",
      },
    ],
    cta: {
      label: "Final CTA",
      title: "Want to map real estate automation for your agency or development team?",
      body:
        "Start with one real process. We can map the lead flow, define fallback rules and outline the system before anything is built.",
      primary: {
        title: "Contact Kubera AI",
        description: "Go to the existing contact page for project discussion.",
        href: "/contacts",
      },
      secondary: {
        title: "Explore services",
        description: "Review the current service hub before scoping the workflow.",
        href: "/services",
      },
    },
  },
];

export function getIndustrySolutionByRoute(country: string, industry: string) {
  return industrySolutions.find((solution) => solution.country === country && solution.industry === industry) ?? null;
}

export function getIndustrySolutionStaticParams() {
  return industrySolutions.map((solution) => ({
    country: solution.country,
    industry: solution.industry,
  }));
}
