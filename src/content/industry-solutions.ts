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

