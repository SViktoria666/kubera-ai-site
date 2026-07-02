import type { IndustrySolution } from "./industry-solutions";

export const italyIndustrySolutions: IndustrySolution[] = [
  {
    locale: "en",
    country: "italy",
    countryLabel: "Italy",
    industry: "fashion-boutique-automation",
    industryLabel: "Fashion Boutique Automation",
    url: "/en/solutions/italy/fashion-boutique-automation",
    seo: {
      title: "AI Automation for Independent Fashion Boutiques in Italy | Kubera AI",
      description:
        "AI automation for independent fashion boutiques in Italy. Automate VIP WhatsApp communication, appointment booking, and post-purchase follow-up with Kubera AI.",
      canonical: "https://www.kubera-automation.com/en/solutions/italy/fashion-boutique-automation",
      type: "service",
    },
    hero: {
      label: "Fashion Boutique Automation - Italy",
      title: "I Tuoi Clienti VIP Scrivono su WhatsApp. Chi Risponde Quando Sei in Negozio?",
      subtitle:
        "Italian independent fashion boutiques are the heart of European fashion retail. But while the big brands have dedicated teams, a 2-to-5 person boutique often handles VIP WhatsApp messages between customers on the shop floor. Kubera AI builds automated systems that manage VIP communication, track preferences, and send new collection updates without adding staff.",
      trustLine: "Built for independent boutiques - luxury retailers - multi-brand shops - small fashion retail teams in Italy",
      primaryCta: {
        title: "Book a strategy call",
        description: "Map your current client communication and show where automation can help without losing the personal touch.",
        href: "/contacts",
      },
      secondaryCta: {
        title: "See how it works",
        description: "Review the service hub before scoping the workflow.",
        href: "/services",
      },
      previewNodes: ["WhatsApp / Instagram DM / Website", "AI Customer Communication Assistant", "Client Identification", "CRM", "Private Shopping Booking", "LTV Dashboard"],
    },
    problems: [
      {
        title: "VIP WhatsApp messages arrive while staff are serving in-store customers",
        description: "Late replies can damage the client relationship.",
      },
      {
        title: "New collection arrivals are not communicated systematically",
        description: "The right clients do not always hear about new pieces that match their style.",
      },
      {
        title: "Client preferences live in someone's memory",
        description: "Purchase history and style notes are not accessible to everyone on the team.",
      },
      {
        title: "Private shopping appointments are chaotic",
        description: "Booking happens through back-and-forth WhatsApp messages instead of a clean system.",
      },
      {
        title: "Post-purchase follow-up is inconsistent",
        description: "There is no structured follow-up after a sale to maintain the relationship.",
      },
    ],
    problemSolution: [
      {
        problem: "VIP WhatsApp messages arrive while staff are busy",
        automation: "AI acknowledges immediately and routes complex cases to the owner",
        result: "Can help preserve the personal relationship even during busy store hours",
      },
      {
        problem: "New arrivals are not matched to the right clients",
        automation: "Style-matched notifications go to relevant clients automatically",
        result: "Supports more targeted new-collection communication",
      },
      {
        problem: "Preferences are not searchable",
        automation: "Client preference CRM logs every purchase and note automatically",
        result: "Makes client history accessible to the whole team",
      },
      {
        problem: "Appointments are managed manually",
        automation: "Private shopping booking happens directly in conversation",
        result: "Reduces appointment chaos and back-and-forth",
      },
      {
        problem: "Post-purchase follow-up is rare",
        automation: "Day 3 satisfaction check and Day 14 complementary suggestion run automatically",
        result: "Helps drive repeat purchases and stronger loyalty",
      },
    ],
    architecture: {
      title: "Recommended automation architecture",
      description:
        "WhatsApp / Instagram DM / Website feeds the workflow. AI Customer Communication Assistant handles initial response. Client Identification checks the CRM. Personalised Response uses purchase history. New Arrival Notifications are style-matched. Private Shopping Appointment Booking runs automatically. Post-Purchase Follow-up covers Day 3 and Day 14, VIP Re-engagement runs seasonally, and the Client LTV Dashboard shows top clients and spend.",
      flow: [
        "WhatsApp / Instagram DM / Website",
        "AI Customer Communication Assistant",
        "Client Identification (CRM lookup)",
        "Personalised Response",
        "New Arrival Notifications",
        "Private Shopping Appointment Booking",
        "Post-Purchase Follow-up",
        "VIP Re-engagement",
        "Client LTV Dashboard",
      ],
      notes: [
        "The system keeps the touchpoints personal while removing repetitive manual work.",
        "Client preferences are visible to the whole team in the CRM.",
        "Appointment booking and follow-up are standardised without feeling generic.",
        "Analytics show which clients and collections generate the most revenue.",
      ],
    },
    modules: [
      {
        title: "WhatsApp VIP Communication",
        description: "Every client message gets an immediate warm response.",
        bullets: ["Instant acknowledgement", "Complex requests routed", "Routine questions automated"],
      },
      {
        title: "Style-Matched New Arrival Notifications",
        description: "New collection updates go to clients who buy similar styles.",
        bullets: ["Purchase history", "Personalised alerts", "Targeted suggestions"],
      },
      {
        title: "Client Preference CRM",
        description: "Every purchase, preference, and interaction is logged automatically.",
        bullets: ["Purchase history", "Style notes", "Accessible team-wide"],
      },
      {
        title: "Private Shopping Booking",
        description: "Clients can book private appointments directly in WhatsApp.",
        bullets: ["No back-and-forth", "Confirmation", "Reminder"],
      },
      {
        title: "Post-Purchase Sequence",
        description: "Day 3 satisfaction check, Day 14 complementary suggestion, Day 60 seasonal re-engagement.",
        bullets: ["Day 3", "Day 14", "Day 60"],
      },
      {
        title: "VIP Client Analytics",
        description: "Dashboard tracks annual spend, purchase frequency, and appointment conversion.",
        bullets: ["Annual spend", "Purchase frequency", "Appointment conversion"],
      },
    ],
    results: [
      {
        title: "More consistent VIP communication",
        description: "Clients get a quick, professional response even when staff are busy in-store.",
      },
      {
        title: "Better new-collection conversion",
        description: "Targeted messages reach the clients most likely to care about the arrival.",
      },
      {
        title: "Cleaner client memory",
        description: "Preferences and purchase history are visible to everyone, not just in one person's head.",
      },
      {
        title: "More private shopping revenue",
        description: "Appointment booking becomes predictable and easier to manage.",
      },
      {
        title: "Stronger repeat purchase rate",
        description: "Structured follow-up keeps the relationship active after the sale.",
      },
      {
        title: "Better visibility into top clients",
        description: "The dashboard shows who drives the most revenue per year.",
      },
    ],
    services: [
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
        title: "CRM Automation",
        description: "Sync leads, contacts, and pipeline without manual entry.",
        href: "/services",
      },
      {
        title: "Booking Automation",
        description: "Appointment scheduling and confirmation flows.",
        href: "/services",
      },
    ],
    cases: [
      {
        title: "VIP client WhatsApp system for fashion retailer",
        description: "Closest-fit case for VIP communication and client tracking.",
        href: "/cases/customer-communications",
      },
      {
        title: "New arrival notification automation with style matching",
        description: "Relevant architecture example for collection updates and segmentation.",
        href: "/cases/content-marketing",
      },
      {
        title: "Private shopping appointment booking flow",
        description: "Useful for booking and follow-up logic.",
        href: "/cases/ecommerce-logistics",
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
        description: "A practical explanation of the operational model behind these systems.",
        href: "/blog/what-is-ai-automation",
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
        question: "What does it cost?",
        answer:
          "Fashion boutique automation starts at EUR2,500-EUR4,500. Monthly support starts from EUR149-EUR249/month.",
      },
      {
        question: "How fast is ROI?",
        answer: "New arrival notification campaigns typically generate additional sales within the first month.",
      },
      {
        question: "How long does implementation take?",
        answer: "3-4 weeks including CRM setup and communication flow configuration.",
      },
      {
        question: "Will it feel personal or automated to my clients?",
        answer: "Messages are personalised with client name, purchase history, and style preferences.",
      },
      {
        question: "Can it handle both WhatsApp and Instagram DMs?",
        answer: "WhatsApp Business API is the primary channel. Instagram DM integration is assessed during the strategy call.",
      },
      {
        question: "What languages can the assistant use?",
        answer: "Italian as primary, English for international clients, and others configured on request.",
      },
      {
        question: "Do I need to import my existing client list?",
        answer: "Yes. Kubera helps structure and import existing client data during setup.",
      },
      {
        question: "Will this work for a small boutique with 1 to 3 staff?",
        answer: "Yes. It is specifically designed for boutiques where the owner is also the primary client relationship manager.",
      },
    ],
    cta: {
      label: "Final CTA",
      title: "Your clients deserve the personal touch. Automation makes sure they get it, even when you're with someone else.",
      body: "Kubera AI keeps the boutique experience personal while removing the repetitive communication load.",
      primary: {
        title: "Book a strategy call",
        description: "Map your client communication and show where automation can help most.",
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
    country: "italy",
    countryLabel: "Italy",
    industry: "dental-clinic-automation",
    industryLabel: "Dental Clinic Automation",
    url: "/en/solutions/italy/dental-clinic-automation",
    seo: {
      title: "AI Automation for Dental Clinics in Italy | Kubera AI",
      description:
        "AI automation for dental clinics in Italy. Reduce no-shows, automate appointment booking, and re-engage patients with Kubera AI.",
      canonical: "https://www.kubera-automation.com/en/solutions/italy/dental-clinic-automation",
      type: "service",
    },
    hero: {
      label: "Dental Clinic Automation - Italy",
      title: "Il 20% degli Appuntamenti Non Si Presenta. E la Tua Segreteria Risponde Ancora a Mano.",
      subtitle:
        "Italian private dental clinics lose revenue every day for three reasons: patients do not show up without notice, appointment requests arrive outside office hours, and reception is overloaded with repetitive questions. Kubera AI builds automated systems that reduce no-shows, manage 24/7 booking, and keep patients engaged between treatments.",
      trustLine: "Built for private dental clinics - multi-chair practices - specialist practices - patient communication teams in Italy",
      primaryCta: {
        title: "Book a strategy call",
        description: "Map your current patient communication and show where automation can improve the biggest bottlenecks.",
        href: "/contacts",
      },
      secondaryCta: {
        title: "See how it works",
        description: "Review the service hub before scoping the workflow.",
        href: "/services",
      },
      previewNodes: ["WhatsApp / Website / Instagram", "AI Patient Communication Assistant", "Appointment Booking", "No-Show Reminder", "CRM", "Practice Analytics Dashboard"],
    },
    problems: [
      {
        title: "No-shows and last-minute cancellations are too common",
        description: "Each missed appointment directly reduces revenue.",
      },
      {
        title: "Appointment requests arrive after hours",
        description: "The clinic reopens on Monday and the patient may already have called a competitor.",
      },
      {
        title: "The receptionist spends too much time on routine calls",
        description: "Booking, insurance questions, and opening hours can consume several hours each day.",
      },
      {
        title: "Recall visits are not systematically followed up",
        description: "Patients who completed treatment should return, but no one triggers the follow-up consistently.",
      },
      {
        title: "CRM data is incomplete",
        description: "Patient history is spread across paper files and scheduling software.",
      },
    ],
    problemSolution: [
      {
        problem: "No-shows and cancellations are common",
        automation: "Automated reminders are sent 48h and 24h before the appointment",
        result: "Can help reduce missed appointments",
      },
      {
        problem: "Evening enquiries sit unanswered",
        automation: "AI responds within 3 minutes and books directly in the conversation",
        result: "Helps capture new patient demand outside office hours",
      },
      {
        problem: "Reception handles too many routine calls",
        automation: "FAQ and booking flows are automated",
        result: "Frees receptionist time for in-clinic patient care",
      },
      {
        problem: "Recall follow-up is inconsistent",
        automation: "Recall runs automatically at 6 or 12 months",
        result: "Supports better patient retention and continuity of care",
      },
      {
        problem: "Patient records are fragmented",
        automation: "CRM stores patient history and appointment data automatically",
        result: "Improves visibility into patient communication and history",
      },
    ],
    architecture: {
      title: "Recommended automation architecture",
      description:
        "WhatsApp / Website / Instagram feeds the workflow. AI Patient Communication Assistant responds and qualifies. Appointment Booking runs 24/7. Pre-Visit Patient Form goes out digitally. No-Show Reminder is sent 48h and 24h before. Post-Visit Follow-up runs on Day 3. Recall Sequence triggers at 6 or 12 months, New Patient Re-engagement reaches leads that have not booked, and the Practice Analytics Dashboard tracks booking and no-show performance.",
      flow: [
        "WhatsApp / Website / Instagram",
        "AI Patient Communication Assistant",
        "Appointment Booking",
        "Pre-Visit Patient Form",
        "No-Show Reminder",
        "Post-Visit Follow-up",
        "Recall Sequence",
        "New Patient Re-engagement",
        "Practice Analytics Dashboard",
      ],
      notes: [
        "Patients can book at any hour without waiting for the receptionist to answer.",
        "Reminder and recall flows reduce missed appointments and help fill the calendar.",
        "Patient data is centralised so history is not split across paper and software.",
        "The receptionist keeps control of complex or sensitive questions while automation handles routine work.",
      ],
    },
    modules: [
      {
        title: "24/7 Appointment Booking",
        description: "Patients can request and confirm appointments via WhatsApp at any hour.",
        bullets: ["Availability", "Confirmation", "No missed weekend enquiries"],
      },
      {
        title: "No-Show Reduction",
        description: "Reminder logic runs 48h and 24h before the appointment.",
        bullets: ["48h reminder", "24h confirmation", "Follow-up flags"],
      },
      {
        title: "Pre-Visit Digital Form",
        description: "Health updates, insurance details, and reason for visit are collected before the appointment.",
        bullets: ["Health updates", "Insurance details", "Visit reason"],
      },
      {
        title: "Recall System",
        description: "Recall messages are sent at the patient-specific interval.",
        bullets: ["6 months", "12 months", "Patient protocol"],
      },
      {
        title: "Post-Visit Follow-up",
        description: "Care instructions and satisfaction checks are sent after procedures.",
        bullets: ["Day 3", "Care instructions", "Satisfaction check"],
      },
      {
        title: "Practice Analytics",
        description: "Dashboard tracks bookings, no-show rate, recall response, and new patient conversion.",
        bullets: ["Bookings", "No-show rate", "Recall response", "New patient conversion"],
      },
    ],
    results: [
      {
        title: "Lower no-show loss",
        description: "Structured reminder flows can materially reduce missed appointments.",
      },
      {
        title: "More after-hours bookings",
        description: "Patients who enquire in the evening can book immediately instead of waiting until Monday.",
      },
      {
        title: "Less receptionist load",
        description: "Routine calls move to automation, freeing time for in-clinic patient care.",
      },
      {
        title: "More recall visits",
        description: "Automated recall helps bring existing patients back on time.",
      },
      {
        title: "Cleaner patient records",
        description: "Patient history and appointment data are easier to access.",
      },
      {
        title: "Better practice visibility",
        description: "The dashboard shows booking and no-show performance clearly.",
      },
    ],
    services: [
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
        title: "CRM Automation",
        description: "Sync leads, contacts, and pipeline without manual data entry.",
        href: "/services",
      },
    ],
    cases: [
      {
        title: "No-show reduction system for private dental practice",
        description: "Closest-fit case for appointment reminders and patient communication.",
        href: "/cases/medical-clinics-dental",
      },
      {
        title: "Automated recall system for dental clinic",
        description: "Relevant architecture example for recall and follow-up.",
        href: "/cases/customer-communications",
      },
      {
        title: "24/7 appointment booking via WhatsApp",
        description: "Useful for booking logic and after-hours response.",
        href: "/cases/beauty-health",
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
        description: "A practical explanation of the operational model behind these systems.",
        href: "/blog/what-is-ai-automation",
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
        question: "What does it cost?",
        answer:
          "Dental practice automation starts at EUR2,500-EUR4,500. Monthly support starts from EUR149-EUR249/month.",
      },
      {
        question: "How fast is ROI?",
        answer:
          "No-show reduction typically delivers measurable revenue recovery within the first 30 days.",
      },
      {
        question: "How long does implementation take?",
        answer: "3-4 weeks including practice management software integration.",
      },
      {
        question: "Does it integrate with our practice management software?",
        answer: "Kubera assesses integration options during the strategy call.",
      },
      {
        question: "Will patients know they are interacting with AI?",
        answer: "The assistant is presented transparently. Sensitive or complex medical questions are routed to staff immediately.",
      },
      {
        question: "Can it handle patient health information securely?",
        answer: "Yes. The system is built on GDPR-compliant infrastructure with controlled access to sensitive data.",
      },
      {
        question: "What languages does it support?",
        answer: "Italian as primary, with English, French, and other languages for international patients.",
      },
      {
        question: "Can it manage multiple practitioners and chairs?",
        answer: "Yes. Calendar management is configured per practitioner.",
      },
    ],
    cta: {
      label: "Final CTA",
      title: "Ogni appuntamento mancato è fatturato perso. Kubera AI costruisce il sistema che lo previene.",
      body: "Kubera AI helps dental clinics reduce no-shows and keep the schedule full without adding front desk load.",
      primary: {
        title: "Book a strategy call",
        description: "Map your patient communication and show where automation can help most.",
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
    country: "italy",
    countryLabel: "Italy",
    industry: "boutique-hotel-automation",
    industryLabel: "Boutique Hotel Automation",
    url: "/en/solutions/italy/boutique-hotel-automation",
    seo: {
      title: "AI Automation for Boutique Hotels and B&Bs in Italy | Kubera AI",
      description:
        "AI automation for boutique hotels and B&Bs in Italy. Automate guest communication, no-show reminders, upsells, and post-stay review requests with Kubera AI.",
      canonical: "https://www.kubera-automation.com/en/solutions/italy/boutique-hotel-automation",
      type: "service",
    },
    hero: {
      label: "Boutique Hotel Automation - Italy",
      title: "I Tuoi Ospiti Scrivono a Mezzanotte. Il Tuo Competitor Risponde Prima di Te.",
      subtitle:
        "Italian boutique hotels and B&Bs manage thousands of enquiries from German, American, Chinese, and local travellers, often outside business hours and in different languages. Kubera AI builds automated guest communication systems that respond 24/7 in multiple languages, reduce no-shows, and turn every checkout into a rebooking opportunity.",
      trustLine: "Built for boutique hotels - B&Bs - guesthouses - small hotel groups in Italy",
      primaryCta: {
        title: "Book a strategy call",
        description: "Map your guest communication and identify where automation can help most.",
        href: "/contacts",
      },
      secondaryCta: {
        title: "See how it works",
        description: "Review the service hub before scoping the workflow.",
        href: "/services",
      },
      previewNodes: ["Booking.com / Airbnb / TripAdvisor / Direct", "Multilingual AI Guest Assistant", "Booking Confirmation", "No-Show Reminder", "CRM", "Seasonal Analytics"],
    },
    problems: [
      {
        title: "Guests enquire at night and expect a fast response",
        description: "By the time staff reply the next morning, the guest may already have booked elsewhere.",
      },
      {
        title: "No-show rates remain high without reminders",
        description: "Non-refundable bookings still need systematic communication to reduce loss.",
      },
      {
        title: "Pre-arrival information is inconsistent",
        description: "Parking, check-in, WiFi, and local tips are often sent manually.",
      },
      {
        title: "Upsell opportunities are not systematically offered",
        description: "Late check-out, breakfast, and local experiences are usually mentioned too late or too informally.",
      },
      {
        title: "Review requests are rare",
        description: "TripAdvisor and Google profiles do not get the review volume they should.",
      },
    ],
    problemSolution: [
      {
        problem: "Late-night enquiries wait until morning",
        automation: "AI responds within 3 minutes in the guest's language",
        result: "Can help capture bookings before the guest books elsewhere",
      },
      {
        problem: "No-show risk is not managed systematically",
        automation: "Reminders are sent 48h and 24h before arrival",
        result: "Supports lower no-show and cancellation loss",
      },
      {
        problem: "Pre-arrival communication is manual",
        automation: "Pre-arrival pack is sent automatically 3 days before arrival",
        result: "Reduces repetitive guest questions",
      },
      {
        problem: "Upsells are offered too late",
        automation: "Upsell sequence is sent 5 days before arrival",
        result: "Creates a structured path for extra revenue",
      },
      {
        problem: "Review requests are missed",
        automation: "Review request is sent automatically 24h after checkout",
        result: "Helps increase reviews and visibility",
      },
    ],
    architecture: {
      title: "Recommended automation architecture",
      description:
        "Booking.com / Airbnb / TripAdvisor / Direct feeds the workflow. Multilingual AI Guest Assistant handles IT, EN, DE, and FR. Booking Confirmation is instant. No-Show Reminder runs at 48h and 24h. Pre-Arrival Pack is sent 3 days before arrival. Pre-Arrival Upsell goes out 5 days before arrival. Check-in Instructions are sent on the morning of arrival. Post-Stay Review Request runs 24h after checkout. Rebooking Offer follows 30 days later, and the Guest History CRM + Seasonal Analytics dashboard tracks performance.",
      flow: [
        "Booking.com / Airbnb / TripAdvisor / Direct",
        "Multilingual AI Guest Assistant (IT / EN / DE / FR)",
        "Booking Confirmation",
        "No-Show Reminder",
        "Pre-Arrival Pack",
        "Pre-Arrival Upsell",
        "Check-in Instructions",
        "Post-Stay Review Request",
        "Rebooking Offer",
        "Guest History CRM + Seasonal Analytics",
      ],
      notes: [
        "The system keeps guest communication multilingual and timely.",
        "No-show and upsell sequences are timed automatically around arrival.",
        "Guest history remains visible in CRM for repeat-guest recognition.",
        "Seasonal analytics show booking channel and language performance.",
      ],
    },
    modules: [
      {
        title: "Multilingual Instant Response",
        description: "Every enquiry is answered within 3 minutes in the guest's language.",
        bullets: ["Italian", "English", "German", "French"],
      },
      {
        title: "No-Show Reduction",
        description: "Reminder logic runs 48h and 24h before arrival.",
        bullets: ["48h reminder", "24h reminder", "Confirmation flags"],
      },
      {
        title: "Pre-Arrival Guest Experience",
        description: "Check-in instructions, local recommendations, and parking details are sent automatically.",
        bullets: ["Instructions", "Local tips", "Parking", "WiFi"],
      },
      {
        title: "Pre-Arrival Upsell",
        description: "Late check-out, breakfast, and local experience offers are sent before arrival.",
        bullets: ["Late check-out", "Breakfast", "Experiences"],
      },
      {
        title: "Post-Stay Engagement",
        description: "Review requests and rebooking offers are sent after the stay.",
        bullets: ["TripAdvisor", "Google", "Rebooking"],
      },
      {
        title: "Seasonal Analytics",
        description: "Dashboard tracks enquiries, conversion, no-show rate, upsell revenue, and direct vs OTA bookings.",
        bullets: ["Enquiries", "Conversion", "No-show rate", "Direct bookings"],
      },
    ],
    results: [
      {
        title: "Faster replies in the guest's language",
        description: "Guests get a response before they book elsewhere.",
      },
      {
        title: "Lower no-show risk",
        description: "Reminders reduce loss from missing check-ins and cancellations.",
      },
      {
        title: "More consistent guest information",
        description: "Pre-arrival details go out at the right time every time.",
      },
      {
        title: "More upsell revenue",
        description: "Offers arrive before arrival, when conversion is higher.",
      },
      {
        title: "More reviews",
        description: "Automated review requests improve the chance of receiving feedback.",
      },
      {
        title: "Better seasonal visibility",
        description: "The dashboard shows which channels and languages produce the best bookings.",
      },
    ],
    services: [
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
    ],
    cases: [
      {
        title: "No-show reduction and pre-arrival upsell for Italian B&B",
        description: "Closest-fit case for guest communication and reminder flows.",
        href: "/cases/hotels-restaurants",
      },
      {
        title: "Multilingual guest communication automation",
        description: "Relevant architecture example for multi-language guest handling.",
        href: "/cases/customer-communications",
      },
      {
        title: "Post-stay review and rebooking sequence",
        description: "Useful for review collection and repeat-stay logic.",
        href: "/cases/landing-page-gpt-nti",
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
        description: "A practical explanation of the operational model behind these systems.",
        href: "/blog/what-is-ai-automation",
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
        question: "What does it cost?",
        answer:
          "Hotel automation packages start at EUR2,500-EUR4,000 setup. Monthly support starts from EUR149-EUR249/month.",
      },
      {
        question: "How fast is ROI?",
        answer:
          "No-show reduction and upsell revenue typically show measurable impact within the first full month.",
      },
      {
        question: "How long does implementation take?",
        answer: "3-4 weeks including channel integration and multilingual setup.",
      },
      {
        question: "Can it integrate with Booking.com and Airbnb?",
        answer: "Integration is assessed individually based on available notification and API channels.",
      },
      {
        question: "How many languages can it handle?",
        answer: "Italian, English, German, and French as standard, with additional languages on request.",
      },
      {
        question: "Will guests know they are talking to AI?",
        answer: "The assistant is presented as an automated guest service. Complex requests go to a human immediately.",
      },
      {
        question: "Does it work for a 4-room B&B as well as a 30-room hotel?",
        answer: "Yes. The system scales from very small properties upward.",
      },
      {
        question: "Can it handle seasonal closures?",
        answer: "Yes. The system can be paused, updated, and reactivated to match the operating calendar.",
      },
    ],
    cta: {
      label: "Final CTA",
      title: "I turisti internazionali scelgono chi risponde prima. Con Kubera AI, sei tu.",
      body: "Kubera AI makes guest communication work 24/7, in any language, so the property team can focus on the stay itself.",
      primary: {
        title: "Book a strategy call",
        description: "Map your guest communication and show where automation can help most.",
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
