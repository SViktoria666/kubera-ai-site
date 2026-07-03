import type { IndustrySolution } from "./industry-solutions";

const sharedServices = [
  {
    title: "AI Assistants",
    description: "24/7 conversational AI trained on your business.",
    href: "/services",
  },
  {
    title: "WhatsApp Automation",
    description: "Automated flows on WhatsApp Business API.",
    href: "/services",
  },
  {
    title: "Booking Automation",
    description: "Appointment scheduling and confirmation flows.",
    href: "/services",
  },
  {
    title: "Marketing Automation",
    description: "Follow-up sequences, re-engagement, upsells.",
    href: "/services",
  },
  {
    title: "CRM Automation",
    description: "Sync leads, contacts, and pipeline without manual data entry.",
    href: "/services",
  },
  {
    title: "Reporting & Analytics Automation",
    description: "Automated dashboards and performance reports.",
    href: "/services",
  },
];

const hotelReading = [
  {
    title: "How AI Automation Saves 20+ Hours Per Week for Small Businesses",
    description: "A practical guide to the first workflows that free up real time.",
    href: "/blog/how-ai-automation-saves-time",
  },
  {
    title: "What Is AI Automation?",
    description: "A practical explanation of the operational model behind these systems.",
    href: "/blog/what-is-ai-automation",
  },
  {
    title: "AI Agent vs Chatbot",
    description: "A comparison for teams deciding how much intelligence the workflow actually needs.",
    href: "/blog/ai-agent-vs-chatbot",
  },
];

const hotelCases = [
  {
    title: "No-show reduction system for boutique hotel",
    description: "Closest-fit case for booking, reminder, and guest communication workflows.",
    href: "/cases/hotels-restaurants",
  },
  {
    title: "Pre-arrival upsell automation",
    description: "Relevant architecture example for upsell timing and guest follow-up.",
    href: "/cases/customer-communications",
  },
  {
    title: "Post-stay review and rebooking sequence",
    description: "Useful for review collection and repeat-guest logic.",
    href: "/cases/landing-page-gpt-nti",
  },
];

const realEstateServices = [
  {
    title: "AI Assistants",
    description: "24/7 conversational AI trained on your business.",
    href: "/services",
  },
  {
    title: "Lead Generation Automation",
    description: "Capture, qualify, and route inbound leads.",
    href: "/services",
  },
  {
    title: "Booking Automation",
    description: "Appointment scheduling and confirmation flows.",
    href: "/services",
  },
  {
    title: "CRM Automation",
    description: "Sync leads, contacts, and pipeline without manual data entry.",
    href: "/services",
  },
  {
    title: "Marketing Automation",
    description: "Follow-up sequences, re-engagement, upsells.",
    href: "/services",
  },
  {
    title: "Reporting & Analytics Automation",
    description: "Automated dashboards and performance reports.",
    href: "/services",
  },
];

const realEstateReading = [
  {
    title: "What Is AI Automation?",
    description: "A practical explanation of the operational model behind these systems.",
    href: "/blog/what-is-ai-automation",
  },
  {
    title: "AI Agent vs Chatbot",
    description: "A comparison for teams deciding how much intelligence the workflow actually needs.",
    href: "/blog/ai-agent-vs-chatbot",
  },
  {
    title: "Claude vs ChatGPT vs Gemini vs Qwen vs DeepSeek",
    description: "Useful context for teams evaluating the model layer behind multilingual workflows.",
    href: "/blog/claude-vs-chatgpt-vs-gemini-vs-qwen-vs-deepseek",
  },
];

const realEstateCases = [
  {
    title: "Luxury real estate lead qualification system",
    description: "Closest-fit case for international buyer qualification and CRM sync.",
    href: "/cases/real-estate-rentals",
  },
  {
    title: "International buyer follow-up sequence",
    description: "Relevant architecture example for long-cycle buyer nurturing.",
    href: "/cases/sales-leads",
  },
  {
    title: "Multilingual property enquiry response automation",
    description: "Useful for enquiry handling and first-response timing.",
    href: "/cases/customer-communications",
  },
];

const clinicServices = [
  {
    title: "AI Assistants",
    description: "24/7 conversational AI trained on your business.",
    href: "/services",
  },
  {
    title: "WhatsApp Automation",
    description: "Automated flows on WhatsApp Business API.",
    href: "/services",
  },
  {
    title: "Booking Automation",
    description: "Appointment scheduling and confirmation flows.",
    href: "/services",
  },
  {
    title: "Marketing Automation",
    description: "Follow-up sequences, re-engagement, upsells.",
    href: "/services",
  },
  {
    title: "CRM Automation",
    description: "Sync leads, contacts, and pipeline without manual data entry.",
    href: "/services",
  },
  {
    title: "Reporting & Analytics Automation",
    description: "Automated dashboards and performance reports.",
    href: "/services",
  },
];

const clinicReading = [
  {
    title: "What Is AI Automation?",
    description: "A practical explanation of the operational model behind these systems.",
    href: "/blog/what-is-ai-automation",
  },
  {
    title: "What Is an AI Agent?",
    description: "Useful context for deciding when a workflow needs an assistant versus a full agent layer.",
    href: "/blog/what-is-an-ai-agent",
  },
  {
    title: "How AI Automation Saves 20+ Hours Per Week for Small Businesses",
    description: "A practical guide to the first workflows that free up real time.",
    href: "/blog/how-ai-automation-saves-time",
  },
];

const clinicCases = [
  {
    title: "No-show reduction system for private clinic",
    description: "Closest-fit case for appointment reminders and patient communication.",
    href: "/cases/medical-clinics-dental",
  },
  {
    title: "Patient communication automation",
    description: "Relevant architecture example for multilingual patient support.",
    href: "/cases/customer-communications",
  },
  {
    title: "Preventive care recall automation",
    description: "Useful for recall logic and patient follow-up sequences.",
    href: "/cases/beauty-health",
  },
];

export const switzerlandIndustrySolutions: IndustrySolution[] = [
  {
    locale: "en",
    country: "switzerland",
    countryLabel: "Switzerland",
    industry: "luxury-hotel-automation",
    industryLabel: "Luxury Hotel Automation",
    url: "/en/solutions/switzerland/luxury-hotel-automation",
    seo: {
      title: "AI Automation for Luxury Boutique Hotels and Chalets in Switzerland | Kubera AI",
      description:
        "AI automation for luxury boutique hotels and chalets in Switzerland. Automate guest communication, upsells, reviews, rebooking, and VIP concierge workflows with Kubera AI.",
      canonical: "https://www.kubera-automation.com/en/solutions/switzerland/luxury-hotel-automation",
      type: "service",
    },
    hero: {
      label: "Luxury Hotel Automation - Switzerland",
      title: "Your VIP Guests Expect Instant, Personalised Responses. At 2am. In Their Language.",
      subtitle:
        "Swiss luxury hotels and chalets attract some of the most demanding guests in the world - executives, HNW individuals, and international travellers who spend CHF 1,000-5,000+ per night and expect concierge-level service at every touchpoint. Kubera AI builds AI-powered guest communication systems that respond instantly in any language, remember guest preferences, and systematically capture upsell revenue - 24/7. Built for luxury boutique hotels, alpine chalets and ski resorts, 5-star guesthouses, and small luxury hotel groups in Switzerland.",
      trustLine: "Built for luxury boutique hotels, alpine chalets, 5-star guesthouses, and small luxury hotel groups in Switzerland",
      primaryCta: {
        title: "Book a strategy call",
        description: "Map your current guest communication and show what a luxury-grade AI concierge system looks like.",
        href: "/contacts",
      },
      secondaryCta: {
        title: "See how it works",
        description: "Review the service hub before scoping the workflow.",
        href: "/services",
      },
      previewNodes: ["Luxury Website / Email / WhatsApp", "AI Guest Concierge", "Booking Confirmation", "Preference Capture", "Upsell Sequence", "Guest CRM"],
    },
    problems: [
      {
        title: "VIP guests enquire at midnight in multiple languages",
        description: "No one replies until the morning, and the guest may already be talking to another property.",
      },
      {
        title: "Premium services are only offered if staff remember",
        description: "Private chef, helicopter transfer, spa, and wine selection are easy to miss when the team is busy.",
      },
      {
        title: "Guest preference data is trapped in files or memory",
        description: "Dietary requirements, room preferences, and previous stay notes are not accessible to everyone.",
      },
      {
        title: "No-show and cancellation loss is expensive",
        description: "Even a small number of missed luxury bookings creates a meaningful revenue gap.",
      },
      {
        title: "Post-stay rebooking is not systematic",
        description: "Repeat visits and review requests are left to chance instead of a repeatable sequence.",
      },
    ],
    problemSolution: [
      {
        problem: "Midnight multilingual enquiries",
        automation: "AI concierge replies within minutes in the guest's language",
        result: "Can help capture bookings before guests move to another property",
      },
      {
        problem: "Premium services are offered inconsistently",
        automation: "Structured pre-arrival upsell sequence goes out automatically",
        result: "Creates a reliable path for additional revenue per booking",
      },
      {
        problem: "Preferences are scattered",
        automation: "Guest preference capture writes to CRM for future stays",
        result: "Makes guest history accessible across the whole team",
      },
      {
        problem: "Luxury no-shows and cancellations cost too much",
        automation: "Confirmation and reminder sequence runs before arrival",
        result: "Supports fewer missed high-value bookings",
      },
      {
        problem: "Rebooking and reviews are ad hoc",
        automation: "Post-stay follow-up triggers review and rebooking requests automatically",
        result: "Helps build repeat business and review volume",
      },
    ],
    architecture: {
      title: "Recommended automation architecture",
      description:
        "Direct Enquiry / Email / WhatsApp / Referral routes guest interest into one flow. Multilingual AI Concierge handles first response in EN / DE / FR / IT / RU / AR / ZH. Enquiry Qualification captures dates, group size, and preferences. Booking Confirmation and Welcome Communication go out automatically. Preference Capture collects pre-stay details. Pre-Arrival Luxury Services Offer suggests private chef, helicopter transfer, spa, and wine selection. Arrival Sequence runs on the day of check-in. Post-Stay Engagement sends a review request and rebooking offer, and VIP Guest CRM + Seasonal Analytics keeps the team informed.",
      flow: [
        "Direct Enquiry / Email / WhatsApp / Referral",
        "Multilingual AI Concierge",
        "Enquiry Qualification",
        "Booking Confirmation + Welcome Communication",
        "Preference Capture",
        "Pre-Arrival Luxury Services Offer",
        "Arrival Sequence",
        "Post-Stay Engagement",
        "VIP Guest CRM + Seasonal Analytics",
      ],
      notes: [
        "The AI concierge handles first response and structured qualification, while the human team still owns the in-person luxury experience.",
        "Guest preference data remains available to the whole property team for repeat stays.",
        "Upsell offers are timed before arrival, when guests are most receptive.",
        "Review requests and rebooking prompts run automatically after departure.",
      ],
    },
    modules: [
      {
        title: "24/7 Multilingual Concierge",
        description: "Answers enquiries in seven languages at any hour with a luxury-appropriate tone.",
        bullets: ["EN / DE / FR / IT / RU / AR / ZH", "Luxury tone", "Instant response"],
      },
      {
        title: "Guest Preference Capture",
        description: "Sends a pre-arrival questionnaire and stores the answers in the guest CRM.",
        bullets: ["Dietary requirements", "Pillow firmness", "Room temperature", "Occasion"],
      },
      {
        title: "Luxury Services Pre-Offer",
        description: "Offers private chef, helicopter transfer, spa, and wine selection before arrival.",
        bullets: ["Private chef", "Helicopter transfer", "Spa treatment", "Wine selection"],
      },
      {
        title: "Confirmation and Arrival Sequence",
        description: "Sends confirmation, weather, packing, and check-in details on a timed schedule.",
        bullets: ["Day 7", "Day 3", "Day 1", "Arrival day"],
      },
      {
        title: "Post-Stay VIP Engagement",
        description: "Automatically asks for reviews and sends rebooking offers after checkout.",
        bullets: ["48h review request", "30 day rebooking", "90 day trigger"],
      },
      {
        title: "Guest Analytics",
        description: "Tracks nationality, upsell conversion, average spend, repeat rate, and review volume.",
        bullets: ["Nationality by season", "Upsell conversion", "Repeat visits", "Review rate"],
      },
    ],
    results: [
      {
        title: "More upsell revenue per booking",
        description: "Structured offers can turn a stay into a higher-value booking without extra front desk time.",
      },
      {
        title: "More repeat visits",
        description: "Automated rebooking prompts make it more likely that guests return for another stay.",
      },
      {
        title: "Higher review volume",
        description: "A consistent review request sequence helps increase TripAdvisor, Google, and Forbes-style visibility.",
      },
      {
        title: "Faster first response",
        description: "Guests receive a professional reply in their language before they book elsewhere.",
      },
      {
        title: "Better preference memory",
        description: "The team sees guest history in one place instead of relying on notes or memory.",
      },
      {
        title: "Clearer booking performance data",
        description: "The dashboard shows which seasons, guest types, and offers produce the strongest revenue.",
      },
    ],
    services: sharedServices,
    cases: hotelCases,
    reading: hotelReading,
    faq: [
      {
        question: "What does it cost?",
        answer:
          "Luxury hotel automation starts at EUR5,000-EUR8,000 given the multilingual and personalisation requirements. Monthly support starts from EUR399/month.",
      },
      {
        question: "How fast is ROI?",
        answer: "One successful upsell conversion campaign per season typically covers the implementation cost.",
      },
      {
        question: "How long does implementation take?",
        answer: "5-6 weeks for a full luxury-grade setup.",
      },
      {
        question: "Can it handle 7 languages simultaneously?",
        answer: "Yes. Language detection and response quality is high across European and major international languages.",
      },
      {
        question: "Will it feel personal or automated to our guests?",
        answer: "When configured correctly with guest preference data, it feels attentive - not automated. Tone is calibrated for the luxury segment.",
      },
      {
        question: "Does it integrate with our PMS?",
        answer: "Integration is assessed per PMS during the strategy call.",
      },
      {
        question: "Can it handle concierge-type requests?",
        answer: "The AI can take and route requests such as restaurant reservations and helicopter booking. Complex fulfilment still goes to your concierge team.",
      },
      {
        question: "Is guest data handled securely?",
        answer: "Yes. GDPR-compliant and Swiss data protection compliant infrastructure.",
      },
    ],
    cta: {
      label: "Final CTA",
      title: "Switzerland's luxury guests expect the best before they arrive, not just during the stay.",
      body: "Kubera AI builds the digital concierge system that delivers that - in seven languages, 24 hours a day.",
      primary: {
        title: "Book a strategy call",
        description: "Discuss your current guest communication and automation opportunities.",
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
    country: "switzerland",
    countryLabel: "Switzerland",
    industry: "real-estate-automation",
    industryLabel: "Luxury Real Estate Automation",
    url: "/en/solutions/switzerland/real-estate-automation",
    seo: {
      title: "AI Automation for Luxury Real Estate Agencies in Switzerland | Kubera AI",
      description:
        "AI automation for luxury real estate agencies in Switzerland. Automate multilingual enquiries, qualification, viewing scheduling, follow-up, and CRM updates with Kubera AI.",
      canonical: "https://www.kubera-automation.com/en/solutions/switzerland/real-estate-automation",
      type: "service",
    },
    hero: {
      label: "Luxury Real Estate Automation - Switzerland",
      title: "A CHF 5 Million Property Buyer Expects a Response Before Lunch. Your Team May Not Be Available.",
      subtitle:
        "Swiss luxury real estate - Geneva lakefront, Zurich Goldkuste, Verbier chalets - attracts international buyers with real capital and high expectations. Middle Eastern families, Asian investors, and European HNW individuals enquire across time zones, in multiple languages, on timelines that do not match Zurich office hours. Kubera AI builds multilingual enquiry and follow-up systems that ensure every serious buyer gets a professional response the moment they reach out. Built for luxury property agencies, private wealth real estate advisors, investment property specialists, and international buyer desks in Geneva, Zurich, Basel, and Verbier.",
      trustLine: "Built for luxury property agencies, private wealth real estate advisors, investment property specialists, and international buyer desks in Switzerland",
      primaryCta: {
        title: "Book a strategy call",
        description: "Map your current buyer journey and show where automation has the highest impact.",
        href: "/contacts",
      },
      secondaryCta: {
        title: "See how it works",
        description: "Review the service hub before scoping the workflow.",
        href: "/services",
      },
      previewNodes: ["Website / Portals / WhatsApp", "AI Buyer Response", "Qualification", "Viewing Scheduler", "CRM", "Analytics Dashboard"],
    },
    problems: [
      {
        title: "International buyers enquire outside office hours",
        description: "A Monday morning reply is too late when the buyer already contacted three agencies on Friday night.",
      },
      {
        title: "No one covers every language",
        description: "Enquiries arrive in English, German, French, Arabic, and Mandarin, but the team cannot cover them all consistently.",
      },
      {
        title: "First response is generic",
        description: "A high-value buyer expects the first message to be personal, specific, and fast.",
      },
      {
        title: "Viewing scheduling takes too many emails",
        description: "Time zones and complex calendars create unnecessary back-and-forth before a viewing is fixed.",
      },
      {
        title: "Long-cycle follow-up is inconsistent",
        description: "Luxury buyers may need 12 to 24 months before they buy, but manual follow-up is hard to sustain that long.",
      },
    ],
    problemSolution: [
      {
        problem: "After-hours enquiries arrive while the office is closed",
        automation: "AI sends a professional response within minutes in the buyer's language",
        result: "Can help keep the conversation alive before the buyer moves on",
      },
      {
        problem: "The team cannot cover every language reliably",
        automation: "One system handles EN / DE / FR / IT / AR / ZH responses",
        result: "Creates a consistent first response across markets",
      },
      {
        problem: "First response is generic",
        automation: "The system personalises the response to the property and the apparent intent",
        result: "Improves the tone of the first touchpoint",
      },
      {
        problem: "Viewing scheduling is fragmented",
        automation: "Buyer selects a slot directly from a timezone-aware link",
        result: "Reduces scheduling friction for both the buyer and the agent",
      },
      {
        problem: "Follow-up depends on agent discipline",
        automation: "A 12-touch sequence runs over 90 days automatically",
        result: "Supports more consistent long-cycle pipeline nurturing",
      },
    ],
    architecture: {
      title: "Recommended automation architecture",
      description:
        "Website / Referral / LinkedIn / Property Portal routes inbound interest into one flow. Multilingual AI Response handles EN / DE / FR / IT / AR / ZH. Buyer Qualification captures budget, citizenship, timeline, property criteria, and financing. CRM stores nationality, language, budget band, and buyer type. Viewing Scheduler shows timezone-aware availability. Due Diligence Information Pack sends templated guidance on Lex Koller, tax, and residency. Long-Cycle Follow-up runs over 90 days, Agent Notification flags hot leads, and Pipeline Analytics tracks enquiry quality and conversion.",
      flow: [
        "Website / Referral / LinkedIn / Property Portal",
        "Multilingual AI Response",
        "Buyer Qualification",
        "CRM",
        "Viewing Scheduler",
        "Due Diligence Information Pack",
        "Long-Cycle Follow-up",
        "Agent Notification",
        "Pipeline Analytics",
      ],
      notes: [
        "The first response is personalised and multilingual, while the agent takes over for viewings and negotiations.",
        "Buyer history and qualification details remain in the CRM for the whole team.",
        "The follow-up sequence keeps long-cycle prospects warm without manual chasing.",
        "Legal and tax FAQ answers stay templated and routed to advisors when the question needs expert handling.",
      ],
    },
    modules: [
      {
        title: "24/7 Multilingual Enquiry Response",
        description: "Responds in the buyer's language within minutes and sets the relationship tone immediately.",
        bullets: ["EN / DE / FR / IT / AR / ZH", "Fast response", "Personal tone"],
      },
      {
        title: "Buyer Qualification",
        description: "Captures budget, financing, citizenship, residency intent, property type, and timeline.",
        bullets: ["Budget", "Timeline", "Citizenship", "Financing"],
      },
      {
        title: "Lex Koller FAQ Handler",
        description: "Provides templated general information on Swiss buyer restrictions with a legal disclaimer.",
        bullets: ["Templated info", "Legal disclaimer", "Advisor routing"],
      },
      {
        title: "Timezone-Aware Viewing Scheduler",
        description: "Lets buyers pick a viewing slot in their own local time zone.",
        bullets: ["Timezone logic", "Calendar sync", "Instant confirmation"],
      },
      {
        title: "Long-Cycle Follow-up",
        description: "Runs a 12-touch sequence over 90 days with listings, updates, and nudges.",
        bullets: ["12 touches", "90 days", "New listings", "Market updates"],
      },
      {
        title: "Pipeline Analytics",
        description: "Tracks enquiries by nationality, language, qualification rate, viewing conversion, and time-to-offer.",
        bullets: ["Nationality", "Language", "Qualification rate", "Time to offer"],
      },
    ],
    results: [
      {
        title: "Faster international response",
        description: "Serious buyers receive a professional response before the relationship goes cold.",
      },
      {
        title: "More qualified viewings",
        description: "Agents spend more time with buyers who actually match the brief and budget.",
      },
      {
        title: "More consistent long-cycle follow-up",
        description: "A 90-day sequence keeps property options in front of the buyer without manual chasing.",
      },
      {
        title: "Cleaner CRM data",
        description: "Every interaction is logged automatically, improving visibility on pipeline stage and buyer intent.",
      },
      {
        title: "Less scheduling friction",
        description: "Time-zone-aware booking removes unnecessary back-and-forth before a viewing is confirmed.",
      },
      {
        title: "Better luxury buyer coverage",
        description: "The team can handle more international enquiries without adding admin headcount.",
      },
    ],
    services: realEstateServices,
    cases: realEstateCases,
    reading: realEstateReading,
    faq: [
      {
        question: "What does it cost?",
        answer:
          "Swiss luxury real estate automation starts at EUR5,000-EUR8,000 given multilingual and long-cycle requirements. Monthly support starts from EUR399/month.",
      },
      {
        question: "How fast is ROI?",
        answer: "One additional transaction from improved international responsiveness typically covers the full annual cost.",
      },
      {
        question: "How long does implementation take?",
        answer: "5-7 weeks for full multilingual setup with long-cycle follow-up configuration.",
      },
      {
        question: "Which languages can it handle?",
        answer: "English, German, French, Italian as standard. Arabic and Mandarin require additional configuration - assessed during the strategy call.",
      },
      {
        question: "Can it explain Lex Koller restrictions accurately?",
        answer: "It provides templated, general information with an explicit disclaimer to seek legal advice. It is not a legal advisor.",
      },
      {
        question: "Does it integrate with Swiss property portals?",
        answer: "Integration is assessed per portal during the strategy call.",
      },
      {
        question: "Is buyer data handled to Swiss and GDPR standards?",
        answer: "Yes. Both GDPR and Swiss nDSG compliance are part of the architecture.",
      },
      {
        question: "Can it work for both sales and rental?",
        answer: "Yes. Separate flows can be built for each model.",
      },
    ],
    cta: {
      label: "Final CTA",
      title: "Your best international buyers expect a response before your office opens.",
      body: "Kubera AI makes sure they get one.",
      primary: {
        title: "Book a strategy call",
        description: "Discuss your current buyer journey and automation opportunities.",
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
    country: "switzerland",
    countryLabel: "Switzerland",
    industry: "private-clinic-automation",
    industryLabel: "Private Medical Clinic Automation",
    url: "/en/solutions/switzerland/private-clinic-automation",
    seo: {
      title: "AI Automation for Private Medical Clinics in Switzerland | Kubera AI",
      description:
        "AI automation for private medical clinics in Switzerland. Automate multilingual appointment booking, reminders, follow-up, and recall management with Kubera AI.",
      canonical: "https://www.kubera-automation.com/en/solutions/switzerland/private-clinic-automation",
      type: "service",
    },
    hero: {
      label: "Private Medical Clinic Automation - Switzerland",
      title: "Ihre Patienten Erwarten CHF 1000/Tag Service - Auch bei der Terminvereinbarung.",
      subtitle:
        "Schweizer Privatkliniken bedienen anspruchsvolle Patienten aus der ganzen Welt - und der erste Eindruck entsteht oft nicht bei der Behandlung, sondern bei der Terminanfrage. Wenn eine Anfrage auf Arabisch um 22 Uhr am Montag eingeht und erst Mittwoch beantwortet wird, hat der Patient bereits eine Klinik in Deutschland gebucht. Kubera AI baut mehrsprachige Patientenkommunikationssysteme, die 24/7 professionell antworten und jeden Touchpoint vor und nach dem Besuch automatisch verwalten.",
      trustLine: "Built for private clinics, specialist practices, and patient-focused healthcare teams in Switzerland",
      primaryCta: {
        title: "Book a strategy call",
        description: "Map your current patient journey and show what a modern private clinic communication system looks like.",
        href: "/contacts",
      },
      secondaryCta: {
        title: "See how it works",
        description: "Review the service hub before scoping the workflow.",
        href: "/services",
      },
      previewNodes: ["Website / WhatsApp / Email", "AI Patient Assistant", "Appointment Booking", "Reminder Flow", "Patient CRM", "Practice Analytics"],
    },
    problems: [
      {
        title: "International patients enquire outside office hours",
        description: "A next-day reply is too late when the patient books another clinic overnight.",
      },
      {
        title: "Reception spends hours on booking calls and emails",
        description: "Time that could go to in-clinic patient care is lost to repetitive scheduling work.",
      },
      {
        title: "No-shows are expensive",
        description: "A missed slot can cost hundreds or even thousands of francs in lost revenue.",
      },
      {
        title: "Preparation instructions are forgotten",
        description: "Fasting rules, medication instructions, and document requests are sometimes sent too late or not at all.",
      },
      {
        title: "Recall and follow-up are not systematic",
        description: "Preventive screenings and post-visit follow-up depend on individual staff discipline.",
      },
    ],
    problemSolution: [
      {
        problem: "International enquiries arrive after hours",
        automation: "AI responds within minutes in the patient's language",
        result: "Can help capture appointments before the patient books elsewhere",
      },
      {
        problem: "Booking consumes reception time",
        automation: "Patients self-book inside the conversation flow",
        result: "Reduces repetitive scheduling load for the front desk",
      },
      {
        problem: "No-show reminders are inconsistent",
        automation: "Reminders run at 72h, 48h, and 24h before the appointment",
        result: "Supports lower no-show loss and better slot utilisation",
      },
      {
        problem: "Pre-visit instructions are manual",
        automation: "The system sends a pre-visit pack five days before the appointment",
        result: "Patients arrive better prepared and staff answer fewer repetitive questions",
      },
      {
        problem: "Recall depends on memory",
        automation: "Protocol-based recall triggers run automatically",
        result: "Keeps preventive care patients active without manual chasing",
      },
    ],
    architecture: {
      title: "Recommended automation architecture",
      description:
        "Website / WhatsApp / Email / Referral routes patient interest into one system. Multilingual AI Patient Assistant handles DE / FR / EN / IT / AR. Appointment Request and Booking captures the request and slot. Insurance and Document Collection runs before the visit. No-Show Reminders are sent at 72h / 48h / 24h. Pre-Visit Preparation Information covers fasting, medication, and what to bring. Post-Visit Follow-up runs at Day 3 and Day 14. Recall Sequence follows the clinical protocol, and Patient CRM + Practice Analytics keeps the practice team informed.",
      flow: [
        "Website / WhatsApp / Email / Referral",
        "Multilingual AI Patient Assistant",
        "Appointment Request and Booking",
        "Insurance and Document Collection",
        "No-Show Reminders",
        "Pre-Visit Preparation Information",
        "Post-Visit Follow-up",
        "Recall Sequence",
        "Patient CRM + Practice Analytics",
      ],
      notes: [
        "The assistant handles appointment requests and routine communication, while medical questions route to clinical staff immediately.",
        "Preparation and reminder messages are timed automatically so patients arrive ready.",
        "The CRM keeps communication history in one place for the practice team.",
        "Recall flows stay aligned to the clinic protocol instead of individual staff memory.",
      ],
    },
    modules: [
      {
        title: "24/7 Multilingual Appointment Booking",
        description: "Patients request appointments in their language at any hour and receive confirmation automatically.",
        bullets: ["DE / FR / EN / IT / AR", "Instant booking", "Language-aware replies"],
      },
      {
        title: "Document and Insurance Collection",
        description: "Collects insurance cards, documents, and medication lists before the visit.",
        bullets: ["Insurance card", "Documents", "Medication list"],
      },
      {
        title: "No-Show Reduction",
        description: "Sends a structured reminder sequence before every appointment.",
        bullets: ["72h reminder", "48h reminder", "24h reminder"],
      },
      {
        title: "Pre-Visit Preparation",
        description: "Automatically sends fasting instructions, medication guidance, and what to bring.",
        bullets: ["Fasting", "Medication", "What to bring"],
      },
      {
        title: "Post-Visit Follow-up",
        description: "Runs Day 3 and Day 14 follow-up with a medical escalation path.",
        bullets: ["Day 3", "Day 14", "Medical flagging"],
      },
      {
        title: "Recall Management",
        description: "Triggers annual check-up and preventive screening reminders per protocol.",
        bullets: ["Annual check-up", "Preventive screening", "Protocol triggers"],
      },
    ],
    results: [
      {
        title: "Fewer no-shows",
        description: "Structured reminders help reduce expensive empty slots in the calendar.",
      },
      {
        title: "More after-hours bookings",
        description: "International patients can book before they move to another clinic.",
      },
      {
        title: "Lower reception workload",
        description: "Routine booking calls and emails are handled automatically instead of manually.",
      },
      {
        title: "Better patient preparation",
        description: "Patients receive the right information at the right time and arrive ready.",
      },
      {
        title: "More consistent follow-up",
        description: "The clinic can standardise post-visit and recall communication across physicians.",
      },
      {
        title: "Better visibility into patient communication",
        description: "The dashboard shows where appointments come from, where no-shows happen, and where recall wins occur.",
      },
    ],
    services: clinicServices,
    cases: clinicCases,
    reading: clinicReading,
    faq: [
      {
        question: "What does it cost?",
        answer:
          "Private clinic automation starts at EUR4,000-EUR8,000 depending on size and specialties. Monthly support starts from EUR249-EUR399/month.",
      },
      {
        question: "How fast is ROI?",
        answer: "No-show reduction alone typically delivers measurable revenue recovery within the first month.",
      },
      {
        question: "How long does implementation take?",
        answer: "5-6 weeks including practice management software integration and multilingual configuration.",
      },
      {
        question: "Which languages can it handle?",
        answer: "German, French, Italian, English as standard. Arabic and other languages on request.",
      },
      {
        question: "Is patient data handled securely?",
        answer: "Yes. GDPR-compliant and Swiss nDSG-compliant infrastructure. Sensitive health data is handled with appropriate access controls.",
      },
      {
        question: "Will patients know they are interacting with AI?",
        answer: "The assistant is transparent. Medical questions and complex situations are routed to clinical staff immediately.",
      },
      {
        question: "Can it integrate with our practice management software?",
        answer: "Integration is assessed per system during the strategy call.",
      },
      {
        question: "Can it manage multiple physicians with different specialties?",
        answer: "Yes. Separate booking flows and preparation instructions can be configured per physician and specialty.",
      },
    ],
    cta: {
      label: "Final CTA",
      title: "Ihre Patienten erwarten Schweizer Qualität bei jedem Kontaktpunkt - auch digitalen.",
      body: "Kubera AI baut das Patientenkommunikationssystem, das dieser Erwartung gerecht wird.",
      primary: {
        title: "Book a strategy call",
        description: "Discuss your current patient journey and automation opportunities.",
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
