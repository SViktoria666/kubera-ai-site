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
        "AI-powered WhatsApp automation for businesses in Spain. Automate customer replies, booking confirmations, and lead qualification with a 24/7 AI assistant.",
      canonical: "https://www.kubera-automation.com/en/solutions/spain/whatsapp-automation",
      type: "service",
    },
    hero: {
      label: "WhatsApp Automation · Spain",
      title: "WhatsApp Automation for Businesses in Spain",
      subtitle:
        "In Spain, WhatsApp is not a secondary channel - for most consumers it is the default way to contact a business, ahead of phone or email. Kubera AI builds AI-powered WhatsApp systems that qualify leads, confirm bookings, and answer customer questions instantly, in a market where slow replies are noticed immediately. Best fit for independent retailers and local shops, small and mid-size hospitality businesses, real estate agencies and individual agents, clinics and beauty/wellness studios, service businesses, and e-commerce brands selling to Spanish customers.",
      trustLine: "Built on WhatsApp Business API · GDPR-compliant infrastructure · Designed for Spanish SMBs",
      primaryCta: {
        title: "Book a strategy call",
        description: "Start with one workflow and define the fallback rules before anything is built.",
        href: "/contacts",
      },
      secondaryCta: {
        title: "See how it works",
        description: "Review the service hub before scoping the workflow.",
        href: "/services",
      },
      previewNodes: ["Website / Landing Page", "WhatsApp Business API", "AI Assistant", "CRM", "Email Follow-up", "Analytics Dashboard"],
    },
    problems: [
      {
        title: "Consumers compare and switch fast on WhatsApp",
        description: "A slow reply sends the prospect straight to a competitor's chat window.",
      },
      {
        title: "Evening and weekend volume spikes",
        description: "Spanish consumer behavior skews toward evening and weekend inquiries, exactly when many small businesses are least staffed.",
      },
      {
        title: "No structured lead capture",
        description: "Conversations happen in WhatsApp but never reach a CRM, so leads are lost or followed up inconsistently.",
      },
      {
        title: "Inconsistent answers across staff",
        description: "Different employees give different information, creating confusion and a weaker brand impression.",
      },
      {
        title: "Repetitive questions dominate staff time",
        description: "Hours, pricing, availability, and location questions repeat daily, pulling staff away from higher-value work.",
      },
    ],
    problemSolution: [
      {
        problem: "Fast-switching consumer behavior",
        automation: "AI assistant replies instantly on WhatsApp Business API",
        result: "Can help reduce response time from hours to seconds",
      },
      {
        problem: "Evening/weekend volume spikes",
        automation: "24/7 AI assistant absorbs off-hours inquiries",
        result: "Designed to reduce missed inquiries outside business hours",
      },
      {
        problem: "Leads not captured",
        automation: "Automatic lead capture into CRM with tagging",
        result: "Supports more consistent lead follow-up",
      },
      {
        problem: "Inconsistent answers",
        automation: "Centralized AI knowledge base",
        result: "May improve consistency of customer communication",
      },
      {
        problem: "Repetitive questions",
        automation: "AI handles FAQs, pricing, hours, availability",
        result: "Designed to reduce staff workload on routine inquiries",
      },
    ],
    architecture: {
      title: "Recommended automation architecture",
      description:
        "Website / Landing Page captures initial interest and routes visitors to WhatsApp. WhatsApp Business API is the primary communication channel. The AI Assistant answers questions, qualifies leads, handles bookings, and escalates complex cases to a human. CRM Integration logs every conversation automatically, Email Follow-up covers leads that do not convert immediately, Internal Notifications alert staff when human handoff is needed, and the Analytics Dashboard shows response times, conversion rates, and conversation volume.",
      flow: ["Website / Landing Page", "WhatsApp Business API", "AI Assistant", "CRM Integration", "Email Follow-up", "Internal Notifications", "Analytics Dashboard"],
      notes: [
        "Website forms can trigger the same workflow as a WhatsApp enquiry.",
        "The AI Assistant handles classification, drafting and routing, not unchecked final decisions.",
        "CRM remains the source of truth for leads, status and follow-up ownership.",
        "Email and analytics close the loop with confirmations, summaries and performance tracking.",
      ],
    },
    modules: [
      {
        title: "AI WhatsApp Assistant",
        description: "Handles inbound messages, FAQs, and lead qualification in Spanish.",
        bullets: ["Spanish language handling", "Inbox triage", "Lead qualification"],
      },
      {
        title: "Booking & Availability Module",
        description: "Lets customers check and request bookings directly in chat.",
        bullets: ["Availability prompts", "Booking requests", "Calendar handoff"],
      },
      {
        title: "CRM Sync Module",
        description: "Pushes every WhatsApp lead into the CRM with context and tags.",
        bullets: ["Automatic logging", "Tagging", "Context sync"],
      },
      {
        title: "Human Handoff Module",
        description: "Detects complex conversations and routes them to staff.",
        bullets: ["Escalation rules", "Staff alerts", "Fallback handling"],
      },
      {
        title: "Off-Hours Coverage Module",
        description: "Maintains response capability during evenings and weekends.",
        bullets: ["24/7 coverage", "Missed inquiry recovery", "Queue protection"],
      },
      {
        title: "Reporting Module",
        description: "Weekly summary of conversation volume, response times, and conversion.",
        bullets: ["Conversation volume", "Response times", "Conversion summary"],
      },
    ],
    results: [
      {
        title: "Faster response times",
        description: "Can help reduce response time from hours to seconds.",
      },
      {
        title: "Reduced off-hours misses",
        description: "Designed to reduce missed inquiries outside business hours.",
      },
      {
        title: "More consistent lead capture",
        description: "Supports more consistent lead follow-up and CRM logging.",
      },
      {
        title: "More consistent communication",
        description: "May improve consistency of customer communication through a centralized AI knowledge base.",
      },
      {
        title: "Lower routine workload",
        description: "Designed to reduce staff workload on repetitive questions.",
      },
      {
        title: "Better coverage during peak hours",
        description: "Helps maintain response capability during the evening and weekend peaks common in Spain.",
      },
    ],
    services: [
      {
        title: "AI Assistants",
        description: "Core engine behind the WhatsApp automation.",
        href: "/services",
      },
      {
        title: "WhatsApp Automation",
        description: "Full WhatsApp Business API integration and workflow build.",
        href: "/services",
      },
      {
        title: "CRM Automation",
        description: "Connects WhatsApp conversations to the client's CRM.",
        href: "/services",
      },
      {
        title: "Customer Support Automation",
        description: "Structures human handoff and escalation logic.",
        href: "/services",
      },
    ],
    cases: [
      {
        title: "AI assistant for service-business customer inquiries",
        description: "Closest-fit case for WhatsApp-heavy support and lead handling.",
        href: "/cases/customer-communications",
      },
      {
        title: "WhatsApp lead qualification -> CRM architecture",
        description: "Good proxy for lead capture, qualification and CRM logging.",
        href: "/cases/real-estate-rentals",
      },
      {
        title: "Off-hours and weekend coverage automation for consumer-facing SMBs",
        description: "Useful for booking, request handling and peak-hour response patterns.",
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
      {
        title: "What Is AI Automation?",
        description: "A practical explanation of the operational model behind these systems.",
        href: "/blog/what-is-ai-automation",
      },
    ],
    faq: [
      {
        question: "What is WhatsApp automation for a business?",
        answer:
          "WhatsApp automation uses an AI assistant connected to the WhatsApp Business API to handle customer messages automatically - answering questions, qualifying leads, and routing complex cases to staff.",
      },
      {
        question: "Is this compliant with WhatsApp's business policies?",
        answer:
          "Yes. Kubera AI builds on the official WhatsApp Business API, which is the approved channel for business automation at scale.",
      },
      {
        question: "Can it handle the evening and weekend message volume typical in Spain?",
        answer:
          "Yes, the assistant operates 24/7, which is particularly relevant given how much consumer inquiry traffic arrives outside standard office hours.",
      },
      {
        question: "Will customers know they're talking to an AI?",
        answer:
          "Yes. Kubera AI labels the assistant clearly as an AI assistant rather than presenting it as a human.",
      },
      {
        question: "Can the AI assistant escalate to a real person?",
        answer:
          "Yes. The system is designed with human handoff logic so staff are notified when a conversation needs personal attention.",
      },
      {
        question: "How long does implementation take?",
        answer:
          "Most WhatsApp automation setups can be implemented within a few weeks, depending on the complexity of the required workflows.",
      },
      {
        question: "Will this replace my customer service staff?",
        answer:
          "No. It is designed to handle repetitive, high-volume questions, freeing staff to focus on complex or high-value interactions.",
      },
      {
        question: "What CRM systems can this integrate with?",
        answer:
          "The automation can be connected to most common CRM platforms used by Spanish SMBs; exact integrations are confirmed during the strategy call.",
      },
    ],
    cta: {
      label: "Final CTA",
      title: "Turn WhatsApp Into a 24/7 Sales Channel",
      body: "See how Kubera AI can design a WhatsApp automation system for your business in Spain.",
      primary: {
        title: "Book a strategy call",
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
      title: "Hospitality Automation for Hotels & Guesthouses in Spain | Kubera AI",
      description:
        "AI automation for hotels, guesthouses, and apartment hotels in Spain. Automate booking inquiries, guest communication, and reporting with Kubera AI.",
      canonical: "https://www.kubera-automation.com/en/solutions/spain/hospitality-automation",
      type: "service",
    },
    hero: {
      label: "Hospitality Automation · Spain",
      title: "Hospitality Automation for Hotels and Guesthouses in Spain",
      subtitle:
        "From booking inquiries to guest follow-up, Kubera AI builds automation systems that help independent hotels and guesthouses in Spain respond faster and run leaner operations. Best suited for independent hotels, boutique hotels, apartment hotels and aparthotels, guest houses and B&Bs, small hotel groups, and vacation rental management companies.",
      trustLine: "Built for independent hospitality businesses · WhatsApp + CRM integration · GDPR-compliant infrastructure",
      primaryCta: {
        title: "Book a strategy call",
        description: "Start with one workflow and define fallback rules before anything is built.",
        href: "/contacts",
      },
      secondaryCta: {
        title: "See how it works",
        description: "Review the service hub before scoping the workflow.",
        href: "/services",
      },
      previewNodes: ["Booking / Website", "WhatsApp", "AI Assistant", "PMS / CRM", "Email Follow-up", "Analytics Dashboard"],
    },
    problems: [
      {
        title: "Booking inquiries arrive across too many channels",
        description: "WhatsApp, email, Booking.com messages, and phone calls all need separate handling - nothing is centralized.",
      },
      {
        title: "Front desk staff are overloaded with repetitive questions",
        description: "Check-in times, parking, amenities, and availability questions consume time that could go to guests on-site.",
      },
      {
        title: "Slow replies reduce conversion",
        description: "Prospective guests comparing multiple properties often book wherever they get the fastest, clearest answer.",
      },
      {
        title: "Guest communication after booking is inconsistent",
        description: "Pre-arrival information, upsells, and post-stay follow-up are inconsistent or skipped entirely.",
      },
      {
        title: "Limited visibility into inquiry-to-booking performance",
        description: "Owners often do not know how many inquiries convert, or where leads are lost.",
      },
    ],
    problemSolution: [
      {
        problem: "Multi-channel inquiries",
        automation: "Unified AI assistant across WhatsApp and web chat",
        result: "Can help centralize guest communication",
      },
      {
        problem: "Front desk overload",
        automation: "AI handles FAQs and routine booking questions",
        result: "Designed to reduce repetitive front-desk workload",
      },
      {
        problem: "Slow inquiry replies",
        automation: "Instant AI response to booking inquiries",
        result: "May improve inquiry-to-booking conversion",
      },
      {
        problem: "Inconsistent guest communication",
        automation: "Automated pre-arrival and post-stay sequences",
        result: "Supports more consistent guest experience",
      },
      {
        problem: "No performance visibility",
        automation: "Reporting dashboard on inquiries and conversions",
        result: "Helps automate visibility into booking funnel performance",
      },
    ],
    architecture: {
      title: "Recommended automation architecture",
      description:
        "Website / Landing Page captures booking inquiries. WhatsApp / Telegram is the primary guest communication channel. The AI Assistant answers inquiries, checks availability, and qualifies booking requests. CRM stores guest data, inquiry status, and booking history. Email Follow-up handles pre-arrival info and post-stay review requests, Internal Notifications alert front desk for confirmed bookings or issues, and the Analytics Dashboard tracks inquiry volume, conversion rate, and response time.",
      flow: ["Website / Landing Page", "WhatsApp / Telegram", "AI Assistant", "PMS / CRM", "Email Follow-up", "Internal Notifications", "Analytics Dashboard"],
      notes: [
        "Website forms, booking engines and WhatsApp can all trigger the same guest workflow.",
        "The AI Assistant handles first response, drafting and routing, not unchecked final decisions.",
        "PMS and CRM stay synchronized so guest history and ownership remain visible.",
        "Notifications and analytics close the loop with confirmations, summaries and performance tracking.",
      ],
    },
    modules: [
      {
        title: "AI Booking Assistant",
        description: "Answers availability, pricing, and amenity questions in real time.",
        bullets: ["Instant first reply", "Multi-language handling", "Exception routing"],
      },
      {
        title: "WhatsApp Guest Channel",
        description: "Centralizes guest messages from inquiry to check-out.",
        bullets: ["Unified messaging", "Message history", "Guest continuity"],
      },
      {
        title: "CRM for Guest Data",
        description: "Tracks each guest's inquiry, booking, and stay history.",
        bullets: ["Guest records", "Source tagging", "Stay history"],
      },
      {
        title: "Pre-Arrival Sequencer",
        description: "Sends automated check-in instructions and upsell offers.",
        bullets: ["Arrival info", "Upsell prompts", "Timing rules"],
      },
      {
        title: "Post-Stay Follow-up",
        description: "Automated review requests and rebooking offers.",
        bullets: ["Review prompts", "Rebooking offers", "Follow-up timing"],
      },
      {
        title: "Booking Funnel Reporting",
        description: "Dashboard showing inquiry-to-booking conversion.",
        bullets: ["Inquiry volume", "Conversion rate", "Funnel visibility"],
      },
    ],
    results: [
      {
        title: "Faster response times",
        description: "Can help reduce response time to booking inquiries.",
      },
      {
        title: "Lower front-desk workload",
        description: "Designed to reduce repetitive front-desk workload.",
      },
      {
        title: "Higher booking conversion",
        description: "May improve inquiry-to-booking conversion rates.",
      },
      {
        title: "More consistent guest communication",
        description: "Supports more consistent pre-arrival and post-stay guest communication.",
      },
      {
        title: "Better funnel visibility",
        description: "Helps centralize guest communication across channels and expose performance data.",
      },
      {
        title: "More staff time for service",
        description: "Typical setups free staff time for in-person guest service.",
      },
    ],
    services: [
      {
        title: "AI Assistants",
        description: "Core engine behind the guest communication system.",
        href: "/services",
      },
      {
        title: "WhatsApp Automation",
        description: "Full guest messaging flow across WhatsApp and related channels.",
        href: "/services",
      },
      {
        title: "Booking Automation",
        description: "Structured booking confirmations and reservation handling.",
        href: "/services",
      },
      {
        title: "CRM Automation",
        description: "Stores guest history, inquiry status, and booking data.",
        href: "/services",
      },
      {
        title: "Reporting & Analytics Automation",
        description: "Tracks inquiry volume, response time, and conversion metrics.",
        href: "/services",
      },
    ],
    cases: [
      {
        title: "Hospitality booking assistant on WhatsApp",
        description: "The closest-fit case for booking, guest communication and service operations.",
        href: "/cases/hotels-restaurants",
      },
      {
        title: "Guest inquiry -> AI qualification -> CRM architecture",
        description: "Useful proxy for omnichannel communication and triage patterns.",
        href: "/cases/customer-communications",
      },
      {
        title: "Pre-arrival and post-stay guest communication sequence",
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
        question: "Can this replace my booking engine?",
        answer:
          "No. It works alongside your existing booking engine or PMS, handling inquiry communication and guest follow-up rather than payment processing.",
      },
      {
        question: "Does it work with Booking.com or Airbnb messages?",
        answer:
          "Channel integrations are assessed individually; the architecture is designed to centralize messages from supported channels into one system.",
      },
      {
        question: "Can the AI assistant check real-time availability?",
        answer:
          "Yes, when connected to your booking system or PMS, the assistant can reference live availability data.",
      },
      {
        question: "Is this suitable for a single guesthouse, or only larger hotels?",
        answer:
          "It is designed for independent hotels, guesthouses, and small hotel groups - not only large chains.",
      },
      {
        question: "How does guest data stay secure?",
        answer:
          "The system runs on GDPR-compliant infrastructure with controlled access to guest data.",
      },
      {
        question: "Will guests know they're messaging an AI?",
        answer:
          "Yes, the assistant is presented transparently as an AI assistant, with human handoff available.",
      },
      {
        question: "What languages can the assistant communicate in?",
        answer:
          "The assistant can be configured for Spanish, English, and other languages relevant to your guest base.",
      },
      {
        question: "How is success measured after launch?",
        answer:
          "Through the reporting dashboard tracking inquiry volume, response times, and conversion to confirmed bookings.",
      },
    ],
    cta: {
      label: "Final CTA",
      title: "Automate Guest Communication, Not Guest Experience",
      body: "Let Kubera AI design a hospitality automation system for your property in Spain.",
      primary: {
        title: "Book a strategy call",
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
      title: "Real Estate Automation for Agencies in Spain | Kubera AI",
      description:
        "AI automation for real estate agencies in Spain. Automate lead qualification, viewing scheduling, and follow-up with Kubera AI's AI assistants.",
      canonical: "https://www.kubera-automation.com/en/solutions/spain/real-estate-automation",
      type: "service",
    },
    hero: {
      label: "Real Estate Automation · Spain",
      title: "Real Estate Automation for Agencies in Spain",
      subtitle:
        "Property inquiries move fast. Kubera AI builds AI-powered systems that qualify leads, schedule viewings, and keep agents focused on closing - not chasing. Best suited for independent real estate agencies, individual real estate agents, property management companies, new-build and development sales teams, and short-term rental agencies handling owner and tenant inquiries.",
      trustLine: "Built for independent agencies and agents · CRM-integrated · GDPR-compliant infrastructure",
      primaryCta: {
        title: "Book a strategy call",
        description: "Start with one workflow and define the fallback rules before anything is built.",
        href: "/contacts",
      },
      secondaryCta: {
        title: "See how it works",
        description: "Review the service hub before scoping the workflow.",
        href: "/services",
      },
      previewNodes: ["Property Site", "WhatsApp", "AI Assistant", "CRM", "Calendar", "Analytics"],
    },
    problems: [
      {
        title: "Property inquiries arrive faster than agents can respond",
        description: "Portals like Idealista generate volume that overwhelms manual follow-up.",
      },
      {
        title: "Unqualified leads waste agent time",
        description: "Agents spend hours on inquiries that never convert because qualification happens too late or not at all.",
      },
      {
        title: "Viewing scheduling is manual and error-prone",
        description: "Coordinating availability between buyers, sellers, and agents by phone or message is slow.",
      },
      {
        title: "Leads go cold without structured follow-up",
        description: "Without a system, agents forget to follow up at the right intervals.",
      },
      {
        title: "No centralized view of pipeline performance",
        description: "Agency owners cannot easily see which listings generate the most qualified leads.",
      },
    ],
    problemSolution: [
      {
        problem: "High inquiry volume",
        automation: "AI assistant responds instantly to portal and WhatsApp inquiries",
        result: "Can help reduce response time to new inquiries",
      },
      {
        problem: "Unqualified leads",
        automation: "AI qualification flow (budget, timeline, property type)",
        result: "Designed to reduce time spent on low-fit leads",
      },
      {
        problem: "Manual viewing scheduling",
        automation: "Automated scheduling synced with agent calendars",
        result: "May improve viewing scheduling efficiency",
      },
      {
        problem: "Cold leads",
        automation: "Automated follow-up sequences at set intervals",
        result: "Supports more consistent lead nurturing",
      },
      {
        problem: "No pipeline visibility",
        automation: "CRM + reporting dashboard",
        result: "Helps automate visibility into lead and listing performance",
      },
    ],
    architecture: {
      title: "Recommended automation architecture",
      description:
        "Website / Landing Page captures inquiries from listings and ads. WhatsApp / Telegram is the primary channel for buyer and tenant communication. The AI Assistant qualifies leads before agent involvement. CRM stores lead profile, qualification data, and listing interest. Email Follow-up nurtures leads that are not ready to view immediately, Internal Notifications alert agents when a qualified lead is ready, and the Analytics Dashboard tracks lead volume, qualification rate, and conversion by listing.",
      flow: ["Website / Landing Page", "WhatsApp / Telegram", "AI Assistant", "CRM", "Email Follow-up", "Internal Notifications", "Analytics Dashboard"],
      notes: [
        "Portals, forms and WhatsApp can all feed the same property workflow.",
        "The AI Assistant handles qualification, drafting and routing, not unchecked final decisions.",
        "CRM keeps pipeline ownership and buyer history visible to the team.",
        "Calendar and analytics close the loop with appointments, summaries and performance tracking.",
      ],
    },
    modules: [
      {
        title: "AI Lead Qualification Assistant",
        description: "Pre-qualifies inquiries on budget, timeline, and property type.",
        bullets: ["Budget capture", "Timeline capture", "Property type filtering"],
      },
      {
        title: "WhatsApp Inquiry Channel",
        description: "Centralizes buyer and tenant messages.",
        bullets: ["Unified communication", "Fast replies", "Thread continuity"],
      },
      {
        title: "Viewing Scheduler",
        description: "Automates booking of property viewings.",
        bullets: ["Calendar prompts", "Confirmation logic", "Reminder flows"],
      },
      {
        title: "CRM Pipeline",
        description: "Tracks every lead from first contact to closing.",
        bullets: ["Status updates", "Source tagging", "Contact records"],
      },
      {
        title: "Follow-up Sequencer",
        description: "Nurtures leads not ready to act immediately.",
        bullets: ["Stage-based messaging", "Delay rules", "Re-engagement"],
      },
      {
        title: "Listing Performance Reporting",
        description: "Shows which listings generate the most qualified leads.",
        bullets: ["Lead quality", "Listing performance", "Pipeline visibility"],
      },
    ],
    results: [
      {
        title: "Faster response to inquiries",
        description: "Can help ensure every listing inquiry gets an immediate first touch instead of waiting in inboxes.",
      },
      {
        title: "Cleaner buyer qualification",
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
      {
        title: "More consistent follow-up",
        description: "Supports more consistent lead follow-up over time.",
      },
      {
        title: "More time for higher-value conversations",
        description: "Typical setups allow agents to focus on higher-value, qualified conversations.",
      },
    ],
    services: [
      {
        title: "AI Assistants",
        description: "Pre-qualifies inquiries before agent involvement.",
        href: "/services",
      },
      {
        title: "Lead Generation Automation",
        description: "Supports portal and WhatsApp lead intake.",
        href: "/services",
      },
      {
        title: "Booking Automation",
        description: "Automates viewing scheduling.",
        href: "/services",
      },
      {
        title: "CRM Automation",
        description: "Tracks every lead from first contact to closing.",
        href: "/services",
      },
      {
        title: "Marketing Automation",
        description: "Nurtures leads that are not ready to view immediately.",
        href: "/services",
      },
    ],
    cases: [
      {
        title: "AI lead qualification assistant for property inquiries",
        description: "The closest-fit case for buyer handling, viewings and follow-up automation.",
        href: "/cases/real-estate-rentals",
      },
      {
        title: "Inquiry -> qualification -> viewing scheduling architecture",
        description: "Useful proxy for triage, response and routing logic across channels.",
        href: "/cases/customer-communications",
      },
      {
        title: "Real estate CRM and follow-up automation",
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
        question: "Can the AI assistant qualify leads before an agent speaks with them?",
        answer:
          "Yes, the assistant is designed to gather budget, timeline, and property preferences before handing the lead to an agent.",
      },
      {
        question: "Does this integrate with property portals like Idealista?",
        answer:
          "Integration depends on the portal's available channels (such as email or WhatsApp notifications); this is assessed during the strategy call.",
      },
      {
        question: "Can it schedule property viewings automatically?",
        answer:
          "Yes, when connected to agent calendars, the assistant can propose and confirm viewing times.",
      },
      {
        question: "Will this replace my agents?",
        answer:
          "No. It is designed to handle inquiry intake and qualification so agents spend their time on viewings and closing.",
      },
      {
        question: "How is lead data stored?",
        answer:
          "Lead and qualification data is stored in your CRM on GDPR-compliant infrastructure.",
      },
      {
        question: "Can the system handle both buyers and sellers?",
        answer:
          "Yes, separate qualification flows can be built for buyer, tenant, and seller inquiries.",
      },
      {
        question: "What languages does the assistant support?",
        answer:
          "The assistant can be configured for Spanish, English, and other languages relevant to your client base.",
      },
      {
        question: "How long does setup take?",
        answer:
          "Most real estate automation setups can be implemented within a few weeks depending on CRM and portal integrations required.",
      },
    ],
    cta: {
      label: "Final CTA",
      title: "Spend Less Time Qualifying, More Time Closing",
      body: "Let Kubera AI build a lead automation system for your real estate agency in Spain.",
      primary: {
        title: "Book a strategy call",
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
