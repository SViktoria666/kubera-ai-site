import type { IndustrySolution } from "./industry-solutions";

const saasServices = [
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
    title: "CRM Automation",
    description: "Sync leads, contacts, and pipeline without manual entry.",
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
    title: "Reporting & Analytics Automation",
    description: "Automated dashboards and performance reports.",
    href: "/services",
  },
];

const saasReading = [
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

const saasCases = [
  {
    title: "AI lead qualification for SaaS startup",
    description: "Closest relevant demo case for lead qualification and CRM sync.",
    href: "/cases/sales-leads",
  },
  {
    title: "Trial onboarding and customer communication",
    description: "Relevant architecture example for onboarding and follow-up sequences.",
    href: "/cases/customer-communications",
  },
  {
    title: "Revenue operations and internal workflow automation",
    description: "Useful for CRM hygiene, reporting, and internal process logic.",
    href: "/cases/internal-processes",
  },
  {
    title: "Landing page lead automation",
    description: "Useful for conversion and routing flows around demand capture.",
    href: "/cases/landing-page-gpt-nti",
  },
];

const recruitmentServices = [
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
    description: "Sync leads, contacts, and pipeline without manual entry.",
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

const recruitmentReading = [
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

const recruitmentCases = [
  {
    title: "High-volume pre-screening for recruitment agency",
    description: "Closest relevant demo case for candidate screening and scoring.",
    href: "/cases/hr-hiring",
  },
  {
    title: "Automated weekly client pipeline report",
    description: "Relevant architecture example for client communication and reporting.",
    href: "/cases/internal-processes",
  },
  {
    title: "Candidate communication automation",
    description: "Useful for follow-up timing and dropout reduction.",
    href: "/cases/customer-communications",
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
    description: "Sync leads, contacts, and pipeline without manual entry.",
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
    title: "How AI Automation Saves 20+ Hours Per Week for Small Businesses",
    description: "A practical guide to the first workflows that free up real time.",
    href: "/blog/how-ai-automation-saves-time",
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

export const swedenIndustrySolutions: IndustrySolution[] = [
  {
    locale: "en",
    country: "sweden",
    countryLabel: "Sweden",
    industry: "saas-startup-automation",
    industryLabel: "SaaS Startup Automation",
    url: "/en/solutions/sweden/saas-startup-automation",
    seo: {
      title: "AI Automation for SaaS Startups in Sweden | Kubera AI",
      description:
        "AI automation for SaaS startups in Sweden. Automate lead qualification, demo booking, trial onboarding, churn detection, and revenue reporting with Kubera AI.",
      canonical: "https://www.kubera-automation.com/en/solutions/sweden/saas-startup-automation",
      type: "service",
    },
    hero: {
      label: "SaaS Startup Automation · Sweden",
      title: "Sweden Produced Spotify, Klarna, and Skype. Your Sales Process Should Be as Good as Your Product.",
      subtitle:
        "Swedish SaaS companies lead European product innovation. But behind many of them, the commercial process still runs on manual work: leads qualified by email, demos booked over LinkedIn DM, CRM updated monthly. Kubera AI builds the automation layer that makes Swedish SaaS commercial operations as efficient and scalable as the products themselves.",
      trustLine: "Built for B2B SaaS companies · Stockholm and Malmö startups · Swedish scale-ups expanding into EU markets · Remote-first Swedish tech companies",
      primaryCta: {
        title: "Book a strategy call",
        description: "Map your funnel and identify what to automate first.",
        href: "/contacts",
      },
      secondaryCta: {
        title: "See how it works",
        description: "Review the service hub before scoping the workflow.",
        href: "/services",
      },
      previewNodes: ["Website / Product Trial / LinkedIn / Referral", "AI Lead Qualifier", "Demo Booking", "CRM", "Trial Onboarding", "Revenue Analytics"],
    },
    problems: [
      {
        title: "Demo requests are answered too slowly",
        description: "Average response time is 3-6 hours, so prospects evaluate alternatives first.",
      },
      {
        title: "Trial conversions are too low",
        description: "Trials do not have a structured onboarding sequence beyond the welcome email.",
      },
      {
        title: "Post-demo follow-up varies by rep",
        description: "There is no standardised process to move prospects forward consistently.",
      },
      {
        title: "CRM data is unreliable",
        description: "Pipeline decisions are made on gut feeling because the CRM is not current.",
      },
      {
        title: "Churn is noticed too late",
        description: "Accounts are seen as lost only after invoice failure or inactivity.",
      },
    ],
    problemSolution: [
      {
        problem: "Slow demo response",
        automation: "Response in under 3 minutes for every inbound lead",
        result: "Higher attendance rates from faster follow-up",
      },
      {
        problem: "Unstructured trial onboarding",
        automation: "14-day automated onboarding sequence",
        result: "Supports better activation and conversion",
      },
      {
        problem: "Inconsistent post-demo follow-up",
        automation: "Standardised 5-step automated sequence",
        result: "Improves consistency across the funnel",
      },
      {
        problem: "Manual CRM updates",
        automation: "Real-time automatic updates after each interaction",
        result: "More reliable forecasting and pipeline data",
      },
      {
        problem: "Late churn detection",
        automation: "Churn risk flagged at Day 7 inactivity",
        result: "Early re-engagement before accounts go cold",
      },
    ],
    architecture: {
      title: "Recommended automation architecture",
      description:
        "Website / Product Trial / LinkedIn / Referral routes inbound interest into AI Lead Qualifier. Demo Booking syncs the calendar. CRM stores score, source, and use case tags. Trial Onboarding runs on Day 1, 3, 7, and 14. Post-Demo Sequence handles the next five touches. Deal Closed triggers Customer Onboarding. Churn Risk triggers re-engagement, and Revenue Analytics shows performance by source.",
      flow: [
        "Website / Product Trial / LinkedIn / Referral",
        "AI Lead Qualifier (company size, use case, stack, timeline, budget)",
        "Demo Booking",
        "CRM (scored, tagged by source and use case)",
        "Trial Onboarding (Day 1, 3, 7, 14)",
        "Post-Demo Sequence (5 steps)",
        "Deal Closed -> Customer Onboarding Trigger",
        "Churn Risk -> Re-engagement",
        "Revenue Analytics",
      ],
      notes: [
        "English or Swedish based on the user segment.",
        "Hot leads go directly to a senior rep.",
        "Personalised onboarding uses company name and use case.",
        "Weekly reports cover cohort, close, and churn performance.",
      ],
    },
    modules: [
      {
        title: "Sub-3-Minute Lead Response",
        description: "Every inbound lead receives a professional response in under 3 minutes.",
        bullets: ["English or Swedish", "Fast first response", "Lead capture"],
      },
      {
        title: "AI Qualification",
        description: "Qualifies problem statement, company size, current tool, timeline, and budget range.",
        bullets: ["Scored routing", "Senior rep handoff", "Qualification summary"],
      },
      {
        title: "Demo Booking",
        description: "Calendar link in the conversation with self-booking and reminders.",
        bullets: ["Calendar sync", "Confirmation", "1-hour reminder"],
      },
      {
        title: "Trial Onboarding",
        description: "14-day sequence with personalised actions and prompts.",
        bullets: ["Day 1 welcome", "Day 7 feature highlight", "Day 14 upgrade prompt"],
      },
      {
        title: "Churn Risk Detection",
        description: "Flags users who do not complete key actions by Day 7.",
        bullets: ["Inactivity trigger", "Re-engagement", "Retention support"],
      },
      {
        title: "Commercial Analytics",
        description: "Weekly reporting on trial cohort performance, demo attendance, close rate, churn, and MRR by source.",
        bullets: ["Source attribution", "Cohort reporting", "Weekly reporting"],
      },
    ],
    results: [
      {
        title: "Faster demo response",
        description: "Minutes instead of hours improves the chance of booking the meeting.",
      },
      {
        title: "Better trial conversion",
        description: "A structured onboarding sequence lifts trial-to-paid conversion.",
      },
      {
        title: "Earlier churn intervention",
        description: "Churn can be flagged before invoice failure or full inactivity.",
      },
      {
        title: "More reliable CRM data",
        description: "Automatic updates improve forecasting and decision-making.",
      },
      {
        title: "Clear channel attribution",
        description: "Teams can see which sources generate the highest-quality leads.",
      },
      {
        title: "More scalable commercial ops",
        description: "Sales processes become as robust as the product itself.",
      },
    ],
    services: saasServices,
    cases: saasCases,
    reading: saasReading,
    faq: [
      {
        question: "What does it cost?",
        answer: "€3,000-€5,000 + €249/month.",
      },
      {
        question: "How fast is ROI?",
        answer: "Onboarding impact is measurable within one trial cohort, usually 14-30 days.",
      },
      {
        question: "How long does implementation take?",
        answer: "3-5 weeks.",
      },
      {
        question: "Do I need to replace my CRM?",
        answer: "No. We integrate with HubSpot, Pipedrive, Salesforce, and others.",
      },
      {
        question: "Can it handle Swedish and English?",
        answer: "Yes. Language is configured per user segment.",
      },
      {
        question: "We're pre-revenue - is this too early?",
        answer: "Below 20 inbound leads/month, it is probably too early. Above that, the ROI case is clear.",
      },
      {
        question: "Does Kubera understand SaaS metrics?",
        answer: "Yes - MRR, trial conversion, churn, and expansion revenue.",
      },
      {
        question: "Can it integrate with product analytics?",
        answer: "Yes. Mixpanel, Amplitude, or custom events can be used for usage-based triggers.",
      },
    ],
    cta: {
      label: "Final CTA",
      title: "Sweden's SaaS products are world-class. Your commercial automation should match.",
      body: "Book a strategy call to map your funnel and identify the first workflows to automate.",
      primary: {
        title: "Book a strategy call",
        description: "Talk through your funnel and timeline.",
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
    country: "sweden",
    countryLabel: "Sweden",
    industry: "recruitment-automation",
    industryLabel: "Recruitment Automation",
    url: "/en/solutions/sweden/recruitment-automation",
    seo: {
      title: "AI Automation for Recruitment Agencies in Sweden | Kubera AI",
      description:
        "AI automation for recruitment agencies in Sweden. Automate acknowledgements, pre-screening, interview scheduling, client updates, and placement analytics with Kubera AI.",
      canonical: "https://www.kubera-automation.com/en/solutions/sweden/recruitment-automation",
      type: "service",
    },
    hero: {
      label: "Recruitment Automation · Sweden",
      title: "Sweden's Talent Market Is Tight. The Agency That Communicates Best Wins the Placement.",
      subtitle:
        "Swedish recruitment agencies compete for candidates in one of Europe's strongest labour markets — tech, cleantech, life sciences, and finance. Candidates expect a fast, professional first response and consistent communication throughout the process. Kubera AI builds the automated candidate communication and client reporting systems that give your recruiters the capacity to deliver that at scale.",
      trustLine: "Built for tech and engineering recruiters · Cleantech and sustainability recruitment · Stockholm generalist agencies · Swedish executive search firms",
      primaryCta: {
        title: "Book a strategy call",
        description: "Map your recruitment process and identify what to automate first.",
        href: "/contacts",
      },
      secondaryCta: {
        title: "See how it works",
        description: "Review the service hub before scoping the workflow.",
        href: "/services",
      },
      previewNodes: ["LinkedIn / Jobbsafari / Arbetsförmedlingen / Direct", "Bilingual Acknowledgement", "AI Pre-Screening", "Candidate Scoring", "Interview Scheduling", "Placement Analytics"],
    },
    problems: [
      {
        title: "Manual screening takes too long",
        description: "Tech roles can receive 300-500 applications and take days to screen.",
      },
      {
        title: "Candidate communication is inconsistent",
        description: "Slow follow-up causes candidates to ghost during the process.",
      },
      {
        title: "Bilingual communication is uneven",
        description: "English-first recruitment needs more consistency across the team.",
      },
      {
        title: "Client reporting is manual",
        description: "Structured weekly updates are time-consuming when written by hand.",
      },
      {
        title: "Sourcing performance is unclear",
        description: "The team lacks visibility into which channels create the best placements.",
      },
    ],
    problemSolution: [
      {
        problem: "Large application volumes",
        automation: "Acknowledgements and pre-screening run automatically",
        result: "Recruiters can screen faster and more consistently",
      },
      {
        problem: "Slow candidate communication",
        automation: "Stage-by-stage follow-up sequence",
        result: "Lower ghosting and better candidate experience",
      },
      {
        problem: "Manual interview scheduling",
        automation: "Self-booking interview flow",
        result: "Less back-and-forth for recruiters and candidates",
      },
      {
        problem: "Manual client updates",
        automation: "Automated weekly client pipeline report",
        result: "Structured updates without recurring admin work",
      },
      {
        problem: "No source performance data",
        automation: "Placement analytics dashboard",
        result: "Clear visibility into what channels produce results",
      },
    ],
    architecture: {
      title: "Recommended automation architecture",
      description:
        "LinkedIn / Jobbsafari / Arbetsförmedlingen / Direct sends applicants into Bilingual Acknowledgement. AI Pre-Screening scores answers and builds Candidate Scoring in the CRM. Interview Scheduling handles booking. Stage Follow-up keeps candidates informed. Client Weekly Report automates reporting, Contractor Re-engagement triggers 4 weeks before contract end, and Placement Analytics tracks sourcing and fill performance.",
      flow: [
        "LinkedIn / Jobbsafari / Arbetsförmedlingen / Direct",
        "Bilingual Acknowledgement (SV + EN)",
        "AI Pre-Screening",
        "Candidate Scoring (CRM)",
        "Interview Scheduling",
        "Stage Follow-up",
        "Client Weekly Report",
        "Contractor Re-engagement",
        "Placement Analytics",
      ],
      notes: [
        "Swedish and English are handled with automatic language detection.",
        "Recruiters stay focused on sourcing, relationships, and closing.",
        "Client updates follow a structured weekly format.",
        "Contractor follow-up runs before the assignment ends.",
      ],
    },
    modules: [
      {
        title: "Bilingual Response",
        description: "Swedish and English acknowledgements are sent automatically.",
        bullets: ["Automatic language detection", "Immediate acknowledgement", "Candidate experience"],
      },
      {
        title: "AI Pre-Screening",
        description: "Role-specific questions are sent automatically and scored against criteria.",
        bullets: ["Structured screening", "Ranked summary", "Recruiter review"],
      },
      {
        title: "Self-Booking",
        description: "Shortlisted candidates book directly from the recruiter's calendar.",
        bullets: ["Self-booking", "Confirmation", "Prep notes"],
      },
      {
        title: "Client Reports",
        description: "Automated weekly pipeline updates for each client.",
        bullets: ["Weekly report", "Structured format", "Zero manual drafting"],
      },
      {
        title: "Contractor Re-engagement",
        description: "Automated outreach runs 4 weeks before contract end.",
        bullets: ["Pre-expiry outreach", "Extension prompts", "Referral follow-up"],
      },
      {
        title: "Analytics",
        description: "Dashboard tracks time-to-fill, source quality, client retention, and margin per placement.",
        bullets: ["Channel performance", "Time-to-fill", "Client retention"],
      },
    ],
    results: [
      {
        title: "More roles handled per recruiter",
        description: "Automating pre-screening increases capacity without adding hours.",
      },
      {
        title: "Fewer candidate drop-offs",
        description: "Consistent communication reduces ghosting at the offer stage.",
      },
      {
        title: "Better client retention",
        description: "Structured weekly updates support renewals and repeat mandates.",
      },
      {
        title: "More accurate pipeline data",
        description: "Automatic updates keep the CRM current after every interaction.",
      },
      {
        title: "Better sourcing insight",
        description: "Teams can see which channels drive the best placements.",
      },
      {
        title: "More efficient contractor follow-up",
        description: "Re-engagement becomes systematic instead of forgotten.",
      },
    ],
    services: recruitmentServices,
    cases: recruitmentCases,
    reading: recruitmentReading,
    faq: [
      {
        question: "What does it cost?",
        answer: "€2,500-€4,500 + €249/month.",
      },
      {
        question: "How fast is ROI?",
        answer: "One additional placement can cover the annual cost.",
      },
      {
        question: "How long does implementation take?",
        answer: "3-5 weeks.",
      },
      {
        question: "ATS?",
        answer: "We integrate with Bullhorn, Vincere, TeamTailor.",
      },
      {
        question: "Swedish and English?",
        answer: "Yes.",
      },
      {
        question: "Candidates know it's AI?",
        answer: "Yes - it is transparent. Complex cases are routed to a recruiter.",
      },
      {
        question: "Permanent and contract?",
        answer: "Both.",
      },
      {
        question: "GDPR?",
        answer: "Yes.",
      },
    ],
    cta: {
      label: "Final CTA",
      title: "Sweden's candidates expect fast, clear communication. Kubera AI delivers it at scale.",
      body: "Book a strategy call to map your recruitment process and identify the biggest automation wins.",
      primary: {
        title: "Book a strategy call",
        description: "Talk through your hiring workflow and timeline.",
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
    country: "sweden",
    countryLabel: "Sweden",
    industry: "real-estate-automation",
    industryLabel: "Real Estate Automation",
    url: "/en/solutions/sweden/real-estate-automation",
    seo: {
      title: "AI Automation for Real Estate Agencies in Sweden | Kubera AI",
      description:
        "AI automation for real estate agencies in Sweden. Automate lead response, qualification, viewing scheduling, and follow-up with Kubera AI.",
      canonical: "https://www.kubera-automation.com/en/solutions/sweden/real-estate-automation",
      type: "service",
    },
    hero: {
      label: "Real Estate Automation · Sweden",
      title: "Stockholm's Property Market Is One of Europe's Most Competitive. Your Response Time Reflects Your Agency.",
      subtitle:
        "Swedish property buyers are informed, digital-first, and comparison-shopping across multiple agencies simultaneously. An enquiry on Hemnet or Booli that waits 3 hours for a response is an enquiry that books a viewing with whoever responded first. Kubera AI builds the automated response, qualification, and follow-up infrastructure that ensures your agency is always first.",
      trustLine: "Built for Swedish estate agencies (mäklare) · Independent agents · Property management companies in Stockholm, Gothenburg, and Malmö",
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
      previewNodes: ["Hemnet / Booli / Website", "AI Response", "Qualification", "CRM", "Viewing Scheduler", "Listing Analytics"],
    },
    problems: [
      {
        title: "Response times vary too much",
        description: "Hemnet and Booli enquiries often wait until the agent is free.",
      },
      {
        title: "Viewing scheduling is manual",
        description: "Each booking can require multiple messages to coordinate.",
      },
      {
        title: "Post-viewing follow-up is inconsistent",
        description: "A structured follow-up sequence is rarely sent every time.",
      },
      {
        title: "Foreign buyers need English support",
        description: "International buyers need clear communication in English.",
      },
      {
        title: "CRM data is updated by hand",
        description: "The pipeline is a guess when every update is manual.",
      },
    ],
    problemSolution: [
      {
        problem: "Slow response to Hemnet and Booli leads",
        automation: "AI replies within 3 minutes in Swedish or English",
        result: "The first responder gets the viewing request",
      },
      {
        problem: "Manual qualification",
        automation: "Conversation-based qualification by budget, timeline, and type",
        result: "Agents speak only with qualified buyers",
      },
      {
        problem: "Back-and-forth scheduling",
        automation: "Buyer picks a slot directly in chat",
        result: "Fewer messages to confirm each viewing",
      },
      {
        problem: "No structured follow-up",
        automation: "Day 1 / Day 3 / Day 7 sequence",
        result: "Better post-viewing conversion support",
      },
      {
        problem: "Manual CRM updates",
        automation: "CRM auto-updated after every interaction",
        result: "Reliable pipeline data and reporting",
      },
    ],
    architecture: {
      title: "Recommended automation architecture",
      description:
        "Hemnet / Booli / Website routes inbound property enquiries into AI Response. Qualification captures budget, timeline, area, and type. CRM stores the lead, score, and source. Viewing Scheduler manages appointments. Post-Viewing Follow-up handles the three-step sequence. Seller Updates keep owners informed, and Listing Analytics shows enquiry and conversion performance.",
      flow: [
        "Hemnet / Booli / Website",
        "AI Response (SV + EN)",
        "Qualification",
        "CRM",
        "Viewing Scheduler",
        "Post-Viewing Follow-up",
        "Seller Updates",
        "Listing Analytics",
      ],
      notes: [
        "Immediate, professional replies in Swedish or English within 3 minutes.",
        "Agents still handle viewings and negotiations.",
        "Separate flows can be configured for rentals and sales.",
        "Weekly reporting keeps listing performance visible.",
      ],
    },
    modules: [
      {
        title: "Instant Response",
        description: "Immediate, professional reply in Swedish or English within 3 minutes.",
        bullets: ["Fast first response", "Language detection", "Weekend coverage"],
      },
      {
        title: "Qualification",
        description: "Captures budget, loan approval, preferred area, property type, and timeline.",
        bullets: ["Qualification by conversation", "Lead scoring", "Agent routing"],
      },
      {
        title: "Viewing Scheduler",
        description: "Direct booking from the agent calendar in the conversation.",
        bullets: ["Calendar sync", "Confirmation", "24-hour reminder"],
      },
      {
        title: "Post-Viewing Follow-up",
        description: "Day 1, Day 3, and Day 7 automated follow-up sequence.",
        bullets: ["Follow-up timing", "Personalised prompts", "Conversion support"],
      },
      {
        title: "Seller Updates",
        description: "Automated viewing confirmations and updates to property owners.",
        bullets: ["Owner notifications", "Viewing summaries", "Reduced admin"],
      },
      {
        title: "Listing Analytics",
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
        description: "Direct calendar booking removes repeated back-and-forth messages.",
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
    services: realEstateServices,
    cases: realEstateCases,
    reading: realEstateReading,
    faq: [
      {
        question: "What does it cost?",
        answer: "€2,000-€4,000 setup + €149-€249/month.",
      },
      {
        question: "How fast is ROI?",
        answer: "One additional closing typically covers the annual cost.",
      },
      {
        question: "How long does implementation take?",
        answer: "3-4 weeks.",
      },
      {
        question: "Does it work with Hemnet or Booli?",
        answer: "Integration is assessed per portal and confirmed during the strategy call.",
      },
      {
        question: "Can it handle Swedish and English?",
        answer: "Yes. Language is detected automatically.",
      },
      {
        question: "Do agents still handle viewings?",
        answer: "Yes. The system handles everything before and after the viewing.",
      },
      {
        question: "Rentals and sales?",
        answer: "Both - separate flows can be configured.",
      },
      {
        question: "GDPR compliant?",
        answer: "Yes.",
      },
    ],
    cta: {
      label: "Final CTA",
      title: "Swedish buyers expect a fast, professional response. Kubera AI makes sure that's always yours.",
      body: "Book a strategy call to map your enquiry flow and identify the fastest wins.",
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
