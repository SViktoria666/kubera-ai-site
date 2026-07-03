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
    description: "Sync leads, contacts, and pipeline without manual entry.",
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
    title: "No-show reduction for mountain lodge",
    description: "Closest relevant demo case for guest messaging and reminder flows.",
    href: "/cases/hotels-restaurants",
  },
  {
    title: "Pre-arrival upsell automation for ski chalet",
    description: "Relevant architecture example for guest upsell timing and communication.",
    href: "/cases/customer-communications",
  },
  {
    title: "Post-stay review and summer re-engagement sequence",
    description: "Useful for review collection and repeat-guest logic.",
    href: "/cases/landing-page-gpt-nti",
  },
];

const dentalReading = [
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
    title: "What Is an AI Agent?",
    description: "Useful context for deciding when a workflow needs an assistant versus a full agent layer.",
    href: "/blog/what-is-an-ai-agent",
  },
];

const dentalCases = [
  {
    title: "No-show reduction for private dental practice",
    description: "Closest relevant demo case for appointment reminders and patient communication.",
    href: "/cases/medical-clinics-dental",
  },
  {
    title: "Automated recall system",
    description: "Relevant architecture example for recall and preventive care follow-up.",
    href: "/cases/customer-communications",
  },
  {
    title: "24/7 WhatsApp booking",
    description: "Useful for patient booking and after-hours conversion flows.",
    href: "/cases/beauty-health",
  },
];

const realEstateReading = [
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

const realEstateCases = [
  {
    title: "AI lead qualification for residential agency",
    description: "Closest relevant demo case for property lead qualification and CRM sync.",
    href: "/cases/real-estate-rentals",
  },
  {
    title: "Automated viewing scheduling with CRM sync",
    description: "Relevant architecture example for booking and follow-up timing.",
    href: "/cases/sales-leads",
  },
  {
    title: "Post-viewing follow-up sequence",
    description: "Useful for follow-up logic and buyer nurturing.",
    href: "/cases/customer-communications",
  },
];

export const austriaIndustrySolutions: IndustrySolution[] = [
  {
    locale: "en",
    country: "austria",
    countryLabel: "Austria",
    industry: "boutique-hotel-automation",
    industryLabel: "Boutique Hotel Automation",
    url: "/en/solutions/austria/boutique-hotel-automation",
    seo: {
      title: "AI Automation for Boutique Hotels and Ski Chalets in Austria | Kubera AI",
      description:
        "AI automation for boutique hotels and ski chalets in Austria. Automate guest communication, no-show reduction, upsells, and review requests with Kubera AI.",
      canonical: "https://www.kubera-automation.com/en/solutions/austria/boutique-hotel-automation",
      type: "service",
    },
    hero: {
      label: "Boutique Hotel Automation · Austria",
      title: "Ski Season Brings 10x the Volume. Your Front Desk Doesn't Scale 10x.",
      subtitle:
        "Austrian boutique hotels and ski chalets face one of hospitality's most extreme seasonality patterns — near-empty in November, overwhelmed in January. Guests arrive from Germany, Russia, the UK, and China, expecting instant responses at 10pm in their own language. Kubera AI builds automated guest communication systems that handle the winter peak without breaking your team — and keep the off-season profitable too.",
      trustLine: "Built for: Boutique hotels · Ski chalets and mountain lodges · Family-run Gasthöfe · Small hotel groups in Tirol, Salzburg, Vorarlberg, and Steiermark",
      primaryCta: {
        title: "Book a strategy call",
        description: "Map your guest communication and identify what to automate first.",
        href: "/contacts",
      },
      secondaryCta: {
        title: "See how it works",
        description: "Review the service hub before scoping the workflow.",
        href: "/services",
      },
      previewNodes: ["Booking.com / Airbnb / Direct / Phone", "Multilingual AI Guest Assistant", "Booking Confirmation", "No-Show Reminders", "Guest CRM", "Seasonal Analytics"],
    },
    problems: [
      {
        title: "Evening enquiries go unanswered",
        description: "German and British guests enquire at 9pm and book a competitor's chalet before morning.",
      },
      {
        title: "Peak season volume overwhelms staff",
        description: "Ski season creates 10x normal enquiry volume that cannot be handled manually.",
      },
      {
        title: "No-show risk remains high",
        description: "Even on deposits, 15-20% no-show rates still happen on last-minute bookings.",
      },
      {
        title: "Pre-arrival information is inconsistent",
        description: "Parking, ski rental, and check-in information are sent manually and unevenly.",
      },
      {
        title: "Off-season rebooking is missing",
        description: "Summer re-engagement is non-existent even when winter guests would return.",
      },
    ],
    problemSolution: [
      {
        problem: "Overnight booking enquiries",
        automation: "Multilingual AI replies within 3 minutes",
        result: "The property stays responsive in every language, at any hour",
      },
      {
        problem: "High peak-season volume",
        automation: "24/7 AI handles volume while staff handle exceptions",
        result: "Front desk capacity scales without adding headcount",
      },
      {
        problem: "No-show exposure",
        automation: "48h and 24h reminders before arrival",
        result: "Fewer missed bookings and less lost revenue",
      },
      {
        problem: "Inconsistent guest prep",
        automation: "Automated pre-arrival pack sent 3 days before arrival",
        result: "Guests arrive informed and happier from the first moment",
      },
      {
        problem: "Weak off-season marketing",
        automation: "Automated rebooking campaign for summer season",
        result: "Improves repeat stays and seasonal occupancy",
      },
    ],
    architecture: {
      title: "Recommended automation architecture",
      description:
        "Booking.com / Airbnb / Direct / Phone routes guest enquiries into the Multilingual AI Guest Assistant. Booking Confirmation happens instantly. No-Show Reminders run at 48h and 24h. Pre-Arrival Pack is sent 3 days before arrival. Upsell Offers go out 5 days before arrival. Check-in Instructions arrive on the morning of arrival. Post-Stay Review Request runs 24h after check-out. Off-Season Re-engagement Campaign supports the summer season, and the Guest CRM with Seasonal Analytics keeps the team informed.",
      flow: [
        "Booking.com / Airbnb / Direct / Phone",
        "Multilingual AI Guest Assistant (DE / EN / RU / FR)",
        "Booking Confirmation (instant)",
        "No-Show Reminders (48h + 24h)",
        "Pre-Arrival Pack (3 days before)",
        "Upsell Offers (5 days before)",
        "Check-in Instructions (morning of arrival)",
        "Post-Stay Review Request (24h after check-out)",
        "Off-Season Re-engagement Campaign",
        "Guest CRM + Seasonal Analytics",
      ],
      notes: [
        "Staff still deliver the in-person hospitality experience.",
        "The system handles every digital touchpoint automatically.",
        "Seasonal flows are configured per operating period.",
        "Complex requests are routed to the front desk immediately.",
      ],
    },
    modules: [
      {
        title: "Multilingual Instant Response",
        description: "Every enquiry is answered within 3 minutes in German, English, Russian, or French.",
        bullets: ["24/7 coverage", "Peak-season handling", "Transparent AI"],
      },
      {
        title: "No-Show Reduction",
        description: "48h and 24h reminders are sent before arrival for every booking.",
        bullets: ["Structured reminders", "Arrival details", "Confirmation requests"],
      },
      {
        title: "Pre-Arrival Guest Pack",
        description: "3 days before arrival, guests receive parking, ski rental, lift pass, and WiFi information.",
        bullets: ["Parking info", "Local recommendations", "Arrival confidence"],
      },
      {
        title: "Pre-Arrival Upsell",
        description: "5 days before arrival, guests receive offers for ski guiding, spa, dinner, and equipment rental.",
        bullets: ["Upsell timing", "Excited guests", "Revenue uplift"],
      },
      {
        title: "Post-Stay Engagement",
        description: "A review request is sent 24h after check-out, followed by a rebooking offer later.",
        bullets: ["TripAdvisor links", "Google links", "Repeat-stay campaigns"],
      },
      {
        title: "Seasonal Analytics",
        description: "Dashboard tracks occupancy, no-show rate, upsell revenue, and winter vs summer performance.",
        bullets: ["Occupancy by language", "Upsell revenue per booking", "Seasonal comparison"],
      },
    ],
    results: [
      {
        title: "Lower no-show losses",
        description: "Automated reminders reduce lost revenue from missed bookings.",
      },
      {
        title: "More upsell revenue",
        description: "Relevant offers arrive before the stay, not too late at check-in.",
      },
      {
        title: "More reviews",
        description: "Automatic post-stay requests build TripAdvisor and Google visibility.",
      },
      {
        title: "Better summer occupancy",
        description: "Winter guests can be rebooked for hiking and cycling season.",
      },
      {
        title: "Less front desk strain",
        description: "Peak season volume is handled without drowning the team.",
      },
      {
        title: "Better multilingual coverage",
        description: "Guests can be answered in their preferred language immediately.",
      },
    ],
    services: sharedServices,
    cases: hotelCases,
    reading: hotelReading,
    faq: [
      {
        question: "What does it cost?",
        answer: "Hotel automation starts at €2,500-€4,000 setup. Monthly support from €149-€249/month.",
      },
      {
        question: "How fast is ROI?",
        answer: "No-show reduction and upsell revenue typically show measurable impact within the first full month of operation.",
      },
      {
        question: "How long does implementation take?",
        answer: "3-4 weeks including channel integration and multilingual setup.",
      },
      {
        question: "Can it integrate with Booking.com and Airbnb?",
        answer: "Channel integrations are assessed individually and confirmed during the strategy call.",
      },
      {
        question: "How many languages can it handle?",
        answer: "German, English, Russian, and French as standard. Others on request.",
      },
      {
        question: "Will guests know they're talking to AI?",
        answer: "The assistant is transparent. Complex requests go to the front desk immediately.",
      },
      {
        question: "Does it work for a 5-room chalet and a 30-room hotel?",
        answer: "Yes. The system scales from very small properties upward.",
      },
      {
        question: "Can it handle summer and winter seasons differently?",
        answer: "Yes. Seasonal flows and offers are configured per operating period.",
      },
    ],
    cta: {
      label: "Final CTA",
      title: "Die Skisaison dauert 12 Wochen. Jede Buchung, jedes Upsell, jede Bewertung zählt.",
      body: "Kubera AI builds the system that uses these opportunities automatically - in every language, at every hour.",
      primary: {
        title: "Book a strategy call",
        description: "Talk through your guest communication workflow and timing.",
        href: "/contacts",
      },
      secondary: {
        title: "Browse services",
        description: "Review the full service stack before implementation.",
        href: "/services",
      },
    },
  },
  {
    locale: "en",
    country: "austria",
    countryLabel: "Austria",
    industry: "dental-clinic-automation",
    industryLabel: "Dental Clinic Automation",
    url: "/en/solutions/austria/dental-clinic-automation",
    seo: {
      title: "AI Automation for Dental Clinics in Austria | Kubera AI",
      description:
        "AI automation for dental clinics in Austria. Automate appointment booking, no-show reminders, recall, and patient communication with Kubera AI.",
      canonical: "https://www.kubera-automation.com/en/solutions/austria/dental-clinic-automation",
      type: "service",
    },
    hero: {
      label: "Dental Clinic Automation · Austria",
      title: "Ihre Praxis verliert täglich Umsatz durch No-Shows und unbeantworte Abendanfragen.",
      subtitle:
        "Österreichische Privatpraxen — besonders in Wien, Graz und Salzburg — stehen vor denselben Herausforderungen: Patienten erscheinen nicht zum Termin, Anfragen nach Praxisschluss bleiben unbeantwortet, und die Rezeption verbringt Stunden mit Terminbuchungen, die automatisiert werden könnten. Kubera AI baut Patientenkommunikationssysteme, die das ändern.",
      trustLine: "Built for: Private dental practices · Specialist dental clinics · Multi-location dental groups in Vienna, Graz, Linz, and Salzburg",
      primaryCta: {
        title: "Book a strategy call",
        description: "Map your patient communication and identify what to automate first.",
        href: "/contacts",
      },
      secondaryCta: {
        title: "See how it works",
        description: "Review the service hub before scoping the workflow.",
        href: "/services",
      },
      previewNodes: ["WhatsApp / Website / Telephone", "AI Patient Assistant", "24/7 Appointment Booking", "Pre-Visit Digital Form", "Practice Analytics Dashboard", "Recall Sequence"],
    },
    problems: [
      {
        title: "No-shows create daily revenue loss",
        description: "15-25% no-show rates leave chairs empty and money on the table.",
      },
      {
        title: "After-hours requests wait until Monday",
        description: "Evening and weekend appointment requests go unanswered until the next business day.",
      },
      {
        title: "Recall is not systematic",
        description: "Check-ups and cleanings are not proactively rebooked per protocol.",
      },
      {
        title: "Pre-visit information is inconsistent",
        description: "Fasting and medication instructions are sometimes forgotten.",
      },
      {
        title: "Reception capacity is wasted",
        description: "2-3 hours/day are spent on booking calls that could be automated.",
      },
    ],
    problemSolution: [
      {
        problem: "Missed appointments",
        automation: "48h and 24h reminders are sent automatically",
        result: "Fewer no-shows and more predictable chair utilisation",
      },
      {
        problem: "After-hours enquiries",
        automation: "AI patient assistant replies within 3 minutes",
        result: "Patients can book before competitors answer",
      },
      {
        problem: "Recall gaps",
        automation: "Recall triggers run automatically per clinical protocol",
        result: "Patients return for check-ups and cleaning",
      },
      {
        problem: "Manual pre-visit admin",
        automation: "Digital forms and pre-visit packs are sent automatically",
        result: "Patients arrive prepared and reception saves time",
      },
      {
        problem: "Reception overload",
        automation: "Self-booking via WhatsApp conversation",
        result: "Reception time shifts back to in-clinic care",
      },
    ],
    architecture: {
      title: "Recommended automation architecture",
      description:
        "WhatsApp / Website / Telephone routes patient enquiries to the AI Patient Assistant. 24/7 Appointment Booking handles scheduling. Pre-Visit Digital Form collects information before arrival. No-Show Reminders run at 48h and 24h. Pre-Visit Preparation Information goes out automatically. Post-Visit Follow-up runs on Day 3 and Day 14. Recall Sequence runs per clinical protocol, and the Practice Analytics Dashboard tracks performance.",
      flow: [
        "WhatsApp / Website / Telephone",
        "AI Patient Assistant (DE + EN)",
        "24/7 Appointment Booking",
        "Pre-Visit Digital Form",
        "No-Show Reminders (48h + 24h)",
        "Pre-Visit Preparation Information",
        "Post-Visit Follow-up (Day 3 + Day 14)",
        "Recall Sequence (per clinical protocol)",
        "Practice Analytics Dashboard",
      ],
      notes: [
        "Reception time is redirected toward in-clinic care.",
        "Medical questions are routed to the dentist immediately.",
        "Separate booking flows can be configured per provider.",
        "All communication remains transparent and compliant.",
      ],
    },
    modules: [
      {
        title: "24/7 Appointment Booking",
        description: "Patients request appointments at any hour and the AI confirms availability and books the slot.",
        bullets: ["Instant scheduling", "Basic information capture", "Slot confirmation"],
      },
      {
        title: "No-Show Reduction",
        description: "48h reminder with appointment details and 24h confirmation request.",
        bullets: ["Automatic reminders", "Reduced no-shows", "Flagged follow-up"],
      },
      {
        title: "Pre-Visit Digital Form",
        description: "A digital form is sent 2 days before arrival to capture health and insurance details.",
        bullets: ["Health update form", "Insurance details", "Medication list"],
      },
      {
        title: "Recall Management",
        description: "6-month or 12-month recall triggers run per patient protocol in German or English.",
        bullets: ["Protocol-based recall", "Language options", "Automatic outreach"],
      },
      {
        title: "Post-Visit Follow-up",
        description: "Day 3 and Day 14 follow-up supports recovery, check-ins, and medical questions.",
        bullets: ["Recovery check-in", "Medical routing", "Satisfaction check"],
      },
      {
        title: "Practice Analytics",
        description: "Monthly report covers appointment sources, no-show rate, recall response, and conversion.",
        bullets: ["Appointment sources", "No-show rate", "Recall response rate"],
      },
    ],
    results: [
      {
        title: "Lower no-show losses",
        description: "Automatic reminders reduce the revenue lost to missed appointments.",
      },
      {
        title: "More after-hours bookings",
        description: "Patients can book before competitors answer on the next business day.",
      },
      {
        title: "Better recall compliance",
        description: "Systematic recall keeps existing patients active.",
      },
      {
        title: "Less receptionist load",
        description: "Booking calls are reduced and more time goes back to patient care.",
      },
      {
        title: "More prepared patients",
        description: "Digital forms and pre-visit packs reduce day-of confusion.",
      },
      {
        title: "Clearer practice metrics",
        description: "Analytics reveal source performance and no-show trends.",
      },
    ],
    services: sharedServices,
    cases: dentalCases,
    reading: dentalReading,
    faq: [
      {
        question: "Was kostet das?",
        answer: "Setup ab €2,500-€4,500. Monatlicher Support ab €149-€249.",
      },
      {
        question: "Wie schnell ist der ROI?",
        answer: "No-show-Reduktion zeigt innerhalb des ersten Monats messbare Wirkung.",
      },
      {
        question: "Wie lange dauert die Implementierung?",
        answer: "3-4 Wochen inklusive Praxissoftware-Integration.",
      },
      {
        question: "Funktioniert es mit unserer Praxissoftware?",
        answer: "Integration wird im Strategiegespräch bewertet.",
      },
      {
        question: "Werden Patienten wissen, dass es KI ist?",
        answer: "Ja - transparent. Medizinische Fragen werden sofort an den Zahnarzt weitergeleitet.",
      },
      {
        question: "DSGVO-konform?",
        answer: "Ja.",
      },
      {
        question: "Mehrere Behandler und Stühle?",
        answer: "Ja - separate Buchungsflüsse pro Behandler.",
      },
      {
        question: "Deutsch und Englisch?",
        answer: "Ja, beide Sprachen konfigurierbar.",
      },
    ],
    cta: {
      label: "Final CTA",
      title: "Jeder unbesetzte Stuhl durch einen No-Show ist vermeidbarer Umsatzverlust.",
      body: "Kubera AI builds the system that prevents that automatically, around the clock.",
      primary: {
        title: "Book a strategy call",
        description: "Talk through your patient communication workflow and timing.",
        href: "/contacts",
      },
      secondary: {
        title: "Browse services",
        description: "Review the full service stack before implementation.",
        href: "/services",
      },
    },
  },
  {
    locale: "en",
    country: "austria",
    countryLabel: "Austria",
    industry: "real-estate-automation",
    industryLabel: "Real Estate Automation",
    url: "/en/solutions/austria/real-estate-automation",
    seo: {
      title: "AI Automation for Real Estate Agencies in Austria | Kubera AI",
      description:
        "AI automation for real estate agencies in Austria. Automate lead response, qualification, viewing scheduling, and follow-up with Kubera AI.",
      canonical: "https://www.kubera-automation.com/en/solutions/austria/real-estate-automation",
      type: "service",
    },
    hero: {
      label: "Real Estate Automation · Austria",
      title: "Wiener Immobilienmarkt: 80 Anfragen pro Woche. Ein Makler, der alles manuell bearbeitet.",
      subtitle:
        "Der österreichische Immobilienmarkt — vor allem Wien, Salzburg und Graz — ist aktiv und international. Käufer kommen aus Deutschland, der Schweiz und Osteuropa, schreiben auf immowelt.at und willhaben.at und erwarten schnelle Antworten. Kubera AI baut automatisierte Leadqualifikations- und Follow-up-Systeme, die Maklern erlauben, sich auf Abschlüsse zu konzentrieren — nicht auf E-Mails.",
      trustLine: "Built for: Independent estate agencies · Individual Makler · Property management firms in Vienna, Graz, Salzburg, and Innsbruck",
      primaryCta: {
        title: "Book a strategy call",
        description: "Map your enquiry flow and identify what to automate first.",
        href: "/contacts",
      },
      secondaryCta: {
        title: "See how it works",
        description: "Review the service hub before scoping the workflow.",
        href: "/services",
      },
      previewNodes: ["willhaben.at / immowelt.at / Website", "KI Sofortantwort", "Käufer-/Mieterqualifizierung", "CRM", "Besichtigungsplanung", "Inserat-Analytics"],
    },
    problems: [
      {
        title: "Leads arrive outside working hours",
        description: "Response time depends on the broker's availability, not on buyer urgency.",
      },
      {
        title: "Too many leads are unqualified",
        description: "A large share of enquiries are the wrong budget, wrong area, or wrong timeline.",
      },
      {
        title: "Viewing scheduling is manual",
        description: "Each appointment can take 5-7 emails before it is confirmed.",
      },
      {
        title: "Post-viewing follow-up is inconsistent",
        description: "Structured follow-up after a viewing is often missing.",
      },
      {
        title: "CRM data is unreliable",
        description: "Manual updates make pipeline data incomplete and hard to trust.",
      },
    ],
    problemSolution: [
      {
        problem: "Weekend and evening enquiries",
        automation: "AI replies within 3 minutes in German or English",
        result: "The first responder gets the viewing request",
      },
      {
        problem: "Unqualified leads",
        automation: "Conversation-based qualification by budget and timeline",
        result: "Agents spend time only on serious buyers and tenants",
      },
      {
        problem: "Long booking chains",
        automation: "Buyer picks a viewing slot directly in chat",
        result: "Fewer emails and faster confirmation",
      },
      {
        problem: "Missing follow-up",
        automation: "Day 1 / Day 3 / Day 7 automated sequence",
        result: "Better conversion support after the viewing",
      },
      {
        problem: "Manual CRM updates",
        automation: "CRM auto-updated after every interaction",
        result: "Reliable pipeline data and listing reporting",
      },
    ],
    architecture: {
      title: "Recommended automation architecture",
      description:
        "willhaben.at / immowelt.at / Website routes inbound property enquiries into KI Sofortantwort. Käufer-/Mieterqualifizierung captures budget, financing status, location, property type, and timeline. CRM stores the lead, score, and source. Besichtigungsplanung manages appointments. Post-Besichtigung Follow-up handles the three-step sequence. Verkäufer-Updates keep owners informed, and Inserat-Analytics shows enquiry and conversion performance.",
      flow: [
        "willhaben.at / immowelt.at / Website",
        "KI Sofortantwort (DE + EN)",
        "Käufer-/Mieterqualifizierung",
        "CRM (getaggt, bewertet)",
        "Besichtigungsplanung",
        "Post-Besichtigung Follow-up (3-stufig)",
        "Verkäufer-Updates (automatisiert)",
        "Inserat-Analytics",
      ],
      notes: [
        "Instant replies in German or English within 3 minutes.",
        "Agents still handle viewings and negotiations.",
        "Separate flows can be configured for purchase and rental.",
        "Dashboard clarifies which listings generate qualified demand.",
      ],
    },
    modules: [
      {
        title: "Sofortantwort",
        description: "Every enquiry receives a professional reply in German or English within 3 minutes.",
        bullets: ["Fast first response", "Language detection", "Weekend coverage"],
      },
      {
        title: "Qualifizierung",
        description: "Captures budget, financing status, preferred area, property type, and timeline.",
        bullets: ["Conversation qualification", "Lead scoring", "Agent routing"],
      },
      {
        title: "Besichtigungsplanung",
        description: "Qualified buyers select a viewing slot directly from the agent calendar.",
        bullets: ["Calendar sync", "Confirmation", "Reminder"],
      },
      {
        title: "Post-Besichtigung Follow-up",
        description: "Day 1, Day 3, and Day 7 automated follow-up sequence.",
        bullets: ["Follow-up timing", "Personalised prompts", "Conversion support"],
      },
      {
        title: "Verkäufer-Updates",
        description: "Automated viewing confirmations and feedback to property owners.",
        bullets: ["Owner notifications", "Viewing summaries", "Reduced admin"],
      },
      {
        title: "Inserat-Analytics",
        description: "Enquiries, qualification rate, viewings, and offers per listing.",
        bullets: ["Listing performance", "Portal performance", "Offer tracking"],
      },
    ],
    results: [
      {
        title: "Faster response wins more viewings",
        description: "The first responder typically gets the booking request.",
      },
      {
        title: "Less admin per appointment",
        description: "Direct calendar booking removes repeated back-and-forth emails.",
      },
      {
        title: "Better lead quality",
        description: "Agents spend less time on unqualified leads and more on serious buyers.",
      },
      {
        title: "Structured follow-up",
        description: "A consistent three-step sequence supports post-viewing conversion.",
      },
      {
        title: "Clearer pipeline data",
        description: "Auto-updated CRM keeps the pipeline current and reviewable.",
      },
      {
        title: "Better listing visibility",
        description: "Teams can see which portals and listings generate qualified buyers.",
      },
    ],
    services: sharedServices,
    cases: realEstateCases,
    reading: realEstateReading,
    faq: [
      {
        question: "Was kostet das?",
        answer: "Setup ab €2,000-€4,000. Support ab €149-€249/Monat.",
      },
      {
        question: "ROI?",
        answer: "Eine zusätzliche Transaktion deckt die Jahreskosten.",
      },
      {
        question: "Implementierungsdauer?",
        answer: "3-4 Wochen.",
      },
      {
        question: "Integration mit willhaben.at?",
        answer: "Wird im Strategiegespräch bewertet.",
      },
      {
        question: "Deutsch und Englisch?",
        answer: "Ja.",
      },
      {
        question: "DSGVO?",
        answer: "Ja.",
      },
      {
        question: "Kauf und Miete?",
        answer: "Beide - separate Flows.",
      },
      {
        question: "Behalten Makler die Besichtigungen?",
        answer: "Ja. Das System übernimmt alles davor und danach.",
      },
    ],
    cta: {
      label: "Final CTA",
      title: "Österreichische Käufer entscheiden sich für den Makler, der zuerst und professionell antwortet.",
      body: "Kubera AI sorgt dafür, dass Sie das sind.",
      primary: {
        title: "Book a strategy call",
        description: "Talk through your property workflow and timing.",
        href: "/contacts",
      },
      secondary: {
        title: "Browse services",
        description: "Review the full service stack before implementation.",
        href: "/services",
      },
    },
  },
];
