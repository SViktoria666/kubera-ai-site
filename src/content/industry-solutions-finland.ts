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

export const finlandIndustrySolutions: IndustrySolution[] = [
  {
    locale: "en",
    country: "finland",
    countryLabel: "Finland",
    industry: "saas-startup-automation",
    industryLabel: "SaaS Startup Automation",
    url: "/en/solutions/finland/saas-startup-automation",
    seo: {
      title: "AI Automation for SaaS Startups in Finland | Kubera AI",
      description:
        "AI automation for SaaS startups in Finland. Automate lead qualification, demo booking, trial onboarding, churn detection, and revenue reporting with Kubera AI.",
      canonical: "https://www.kubera-automation.com/en/solutions/finland/saas-startup-automation",
      type: "service",
    },
    hero: {
      label: "SaaS Startup Automation · Finland",
      title: "Finland Builds World-Class SaaS. Now Automate the Sales Engine Behind It.",
      subtitle:
        "Finland's startup ecosystem — shaped by Nokia's legacy, Slush's energy, and Supercell's success — produces strong technical products. But the commercial infrastructure behind them is often still manual: leads qualified by email, demos booked over Slack, CRM updated when someone has time. Kubera AI builds the automation layer that makes Finnish SaaS commercial processes as robust as the products they support.",
      trustLine: "Built for B2B SaaS companies · Tech startups · Scale-ups in Helsinki and the Nordics · Companies expanding from Finland to EU markets",
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
      previewNodes: ["Website / Trial / LinkedIn / Referral", "AI Lead Qualifier", "Demo Booking", "CRM", "Trial Onboarding", "Analytics Dashboard"],
    },
    problems: [
      {
        title: "Demo requests are answered too slowly",
        description: "Response times of 4-6 hours give prospects time to move on.",
      },
      {
        title: "Trial onboarding is not structured",
        description: "Trial sign-ups convert poorly without a clear automated sequence.",
      },
      {
        title: "Demo follow-up depends on rep discipline",
        description: "Post-demo communication is inconsistent and easy to miss.",
      },
      {
        title: "CRM data is out of date",
        description: "Pipeline forecasting becomes guesswork when updates are manual.",
      },
      {
        title: "Churn signals appear too late",
        description: "Teams notice churn only after users have already dropped off.",
      },
    ],
    problemSolution: [
      {
        problem: "Slow demo response",
        automation: "Instant lead response in under 3 minutes",
        result: "Higher attendance rates from faster follow-up",
      },
      {
        problem: "Unstructured trial onboarding",
        automation: "14-day automated onboarding sequence",
        result: "Supports better activation and conversion",
      },
      {
        problem: "Inconsistent post-demo follow-up",
        automation: "5-step automated follow-up sequence",
        result: "Improves consistency across the funnel",
      },
      {
        problem: "Manual CRM updates",
        automation: "Real-time CRM sync after every interaction",
        result: "More reliable forecasting and pipeline data",
      },
      {
        problem: "Late churn detection",
        automation: "Churn risk flagged at Day 7",
        result: "Early re-engagement before accounts go cold",
      },
    ],
    architecture: {
      title: "Recommended automation architecture",
      description:
        "Website / Trial / LinkedIn / Referral routes inbound interest to an AI Lead Qualifier. Demo Booking syncs calendars. CRM stores score, source, and use case tag. Trial Onboarding runs on Day 1, 3, 7, and 14. Post-Demo Follow-up handles the next five touches. Closed deals trigger Onboarding, churn risk triggers re-engagement, and the Analytics Dashboard tracks leads, demos, and deals by source.",
      flow: [
        "Website / Trial / LinkedIn / Referral",
        "AI Lead Qualifier",
        "Demo Booking (calendar sync)",
        "CRM (score, source, use case tag)",
        "Trial Onboarding (Day 1, 3, 7, 14)",
        "Post-Demo Follow-up (5-step)",
        "Closed -> Onboarding Trigger",
        "Churn Risk Detection -> Re-engagement",
        "Analytics Dashboard",
      ],
      notes: [
        "In English for international leads, Finnish for local.",
        "Hot leads go directly to a senior rep.",
        "Personalised onboarding uses company name and use case.",
        "Weekly automated reporting keeps the team aligned.",
      ],
    },
    modules: [
      {
        title: "Instant Lead Response",
        description: "Every demo request or inbound lead receives a response in under 3 minutes.",
        bullets: ["English for international leads", "Finnish for local leads", "Fast first response"],
      },
      {
        title: "AI Qualification",
        description: "Qualifies problem, team size, current tool, timeline, and budget.",
        bullets: ["Lead scoring", "Senior rep routing", "Qualification summary"],
      },
      {
        title: "Demo Booking",
        description: "Qualified leads book directly in the conversation with calendar sync.",
        bullets: ["Calendar sync", "Confirmation", "1-hour reminder"],
      },
      {
        title: "Trial Onboarding",
        description: "Day 1, 3, 7, and 14 onboarding sequence with personalised messages.",
        bullets: ["Day 1 welcome", "Day 7 feature highlight", "Day 14 upgrade nudge"],
      },
      {
        title: "Churn Risk Detection",
        description: "Flags trials that have not completed key actions by Day 7.",
        bullets: ["Risk trigger", "Re-engagement", "Recovery of at-risk trials"],
      },
      {
        title: "Revenue Analytics",
        description: "Tracks trials, demos, closes, churn, and MRR by channel, cohort, and rep.",
        bullets: ["Channel attribution", "Cohort reporting", "Weekly automated report"],
      },
    ],
    results: [
      {
        title: "Faster demo response",
        description: "Higher attendance rates when prospects receive a same-day response.",
      },
      {
        title: "Better trial conversion",
        description: "A structured onboarding sequence can lift trial-to-paid conversion at scale.",
      },
      {
        title: "Earlier churn intervention",
        description: "Churn signals can be flagged before the account is lost.",
      },
      {
        title: "More reliable CRM data",
        description: "Automatic updates improve pipeline forecasting and decision-making.",
      },
      {
        title: "Clear channel attribution",
        description: "Teams can see which acquisition sources produce the best leads and deals.",
      },
      {
        title: "More consistent revenue ops",
        description: "Commercial processes become as robust as the product itself.",
      },
    ],
    services: saasServices,
    cases: saasCases,
    reading: saasReading,
    faq: [
      {
        question: "What does it cost?",
        answer: "€3,000-€5,000 setup + €249/month support.",
      },
      {
        question: "How fast is ROI?",
        answer: "Onboarding impact is measurable within one full trial cohort, usually 14-30 days.",
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
        question: "Can it handle Finnish and English?",
        answer: "Yes. Language is configured per user segment.",
      },
      {
        question: "We're pre-revenue - is this too early?",
        answer: "Below 20 inbound leads per month, it is probably too early. Above that, the ROI case is clear.",
      },
      {
        question: "Does Kubera understand SaaS metrics?",
        answer: "Yes - trial conversion, MRR, churn, and expansion revenue.",
      },
      {
        question: "Can it integrate with our product analytics?",
        answer: "Yes. Usage-based triggers can be built on Mixpanel, Amplitude, or custom events.",
      },
    ],
    cta: {
      label: "Final CTA",
      title: "Finland's SaaS products are world-class. The sales automation behind them should be too.",
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
    country: "finland",
    countryLabel: "Finland",
    industry: "real-estate-automation",
    industryLabel: "Real Estate Automation",
    url: "/en/solutions/finland/real-estate-automation",
    seo: {
      title: "AI Automation for Real Estate Agencies in Finland | Kubera AI",
      description:
        "AI automation for real estate agencies in Finland. Automate lead response, qualification, viewing scheduling, and follow-up with Kubera AI.",
      canonical: "https://www.kubera-automation.com/en/solutions/finland/real-estate-automation",
      type: "service",
    },
    hero: {
      label: "Real Estate Automation · Finland",
      title: "Helsinki's Property Market Is Competitive. The Agency That Responds First Books the Viewing.",
      subtitle:
        "Finnish property buyers are digitally sophisticated and comparison-shop across multiple agencies. An enquiry on Etuovi or Oikotie that goes unanswered for 4 hours is an enquiry that converts somewhere else. Kubera AI builds automated lead response, qualification, and follow-up systems for Finnish estate agencies that ensure no enquiry is ever ignored — including evenings and weekends.",
      trustLine: "Built for independent estate agencies · Individual agents · Property management companies in Helsinki, Espoo, Tampere, and Turku",
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
      previewNodes: ["Etuovi / Oikotie / Website", "AI Response", "Qualification", "CRM", "Viewing Scheduler", "Listing Analytics"],
    },
    problems: [
      {
        title: "Lead response is delayed",
        description: "Response depends on agent availability, not buyer urgency.",
      },
      {
        title: "Viewing scheduling is manual",
        description: "Each appointment can require 4-6 messages before it is confirmed.",
      },
      {
        title: "Follow-up is inconsistent",
        description: "After a viewing, the structured 3-step sequence rarely happens.",
      },
      {
        title: "Weekend enquiries go cold",
        description: "Evening and weekend leads often wait until Monday morning.",
      },
      {
        title: "CRM data is unreliable",
        description: "Pipeline data is often guesswork rather than a live source of truth.",
      },
    ],
    problemSolution: [
      {
        problem: "Slow response to Etuovi and Oikotie leads",
        automation: "AI replies within 3 minutes in Finnish or English",
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
        "Etuovi / Oikotie / Website routes inbound property enquiries into AI Response. Qualification captures budget, timeline, type, and area. CRM stores the lead, score, and source. Viewing Scheduler manages appointments. Post-Viewing Sequence handles the three-step follow-up. Seller Updates keep owners informed, and Listing Analytics shows enquiry and conversion performance.",
      flow: [
        "Etuovi / Oikotie / Website",
        "AI Response (FI + EN)",
        "Qualification (budget, timeline, type, area)",
        "CRM (tagged, scored)",
        "Viewing Scheduler",
        "Post-Viewing Sequence (3-step)",
        "Seller Updates",
        "Listing Analytics",
      ],
      notes: [
        "Immediate, professional replies in Finnish or English within 3 minutes.",
        "Agents still handle viewings and negotiations.",
        "Separate flows can be configured for rentals and sales.",
        "Weekly reporting keeps listing performance visible.",
      ],
    },
    modules: [
      {
        title: "Instant Response",
        description: "Immediate, professional reply in Finnish or English within 3 minutes.",
        bullets: ["Fast first response", "Language detection", "Weekend coverage"],
      },
      {
        title: "Qualification",
        description: "Captures budget, loan pre-approval, preferred area, property type, and timeline.",
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
        question: "Does it work with Etuovi or Oikotie?",
        answer: "Integration is assessed per portal and confirmed during the strategy call.",
      },
      {
        question: "Can it handle Finnish and English?",
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
      title: "Finnish buyers move fast. Kubera AI makes sure you move faster.",
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
  {
    locale: "en",
    country: "finland",
    countryLabel: "Finland",
    industry: "recruitment-automation",
    industryLabel: "Recruitment Automation",
    url: "/en/solutions/finland/recruitment-automation",
    seo: {
      title: "AI Automation for Recruitment Agencies in Finland | Kubera AI",
      description:
        "AI automation for recruitment agencies in Finland. Automate acknowledgements, pre-screening, interview scheduling, client updates, and placement analytics with Kubera AI.",
      canonical: "https://www.kubera-automation.com/en/solutions/finland/recruitment-automation",
      type: "service",
    },
    hero: {
      label: "Recruitment Automation · Finland",
      title: "Finland's Tech and Cleantech Talent Market Moves Fast. Your Recruitment Process Should Too.",
      subtitle:
        "Finnish recruitment agencies — especially those serving the tech, gaming, and cleantech sectors — compete against global employers and agencies for a small talent pool. The agency that acknowledges applications fastest, screens most efficiently, and communicates most clearly with candidates wins the placement. Kubera AI builds the automated infrastructure that gives your recruiters that edge.",
      trustLine: "Built for tech and engineering recruitment · Cleantech and sustainability recruitment · Finnish generalist agencies · Contract recruitment desks",
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
      previewNodes: ["LinkedIn / Duunitori / Direct", "Bilingual Acknowledgement", "AI Pre-Screening", "Candidate Scoring", "Interview Scheduling", "Placement Analytics"],
    },
    problems: [
      {
        title: "Manual screening takes too long",
        description: "Tech and gaming roles can receive 200-400 applications and take days to screen.",
      },
      {
        title: "Candidates ghost when follow-up is slow",
        description: "Passive candidates move on if the process is not fast and clear.",
      },
      {
        title: "Bilingual communication is inconsistent",
        description: "English-language roles require comfortable bilingual handling.",
      },
      {
        title: "Client reporting is time-consuming",
        description: "Structured client updates take time when they are written manually.",
      },
      {
        title: "Sourcing performance is unclear",
        description: "Teams lack visibility into which channels produce the best placements.",
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
        "LinkedIn / Duunitori / Direct sends applicants into Bilingual Acknowledgement. AI Pre-Screening scores answers and builds Candidate Scoring in the CRM. Interview Scheduling handles booking. Stage Follow-up keeps candidates informed. Client Weekly Update automates reporting, Contractor Re-engagement triggers 4 weeks before contract end, and Placement Analytics tracks sourcing and fill performance.",
      flow: [
        "LinkedIn / Duunitori / Direct",
        "Bilingual Acknowledgement (FI + EN)",
        "AI Pre-Screening",
        "Candidate Scoring (CRM)",
        "Interview Scheduling",
        "Stage Follow-up",
        "Client Weekly Update",
        "Contractor Re-engagement",
        "Placement Analytics",
      ],
      notes: [
        "Finnish and English are handled with automatic language detection.",
        "Recruiters stay focused on sourcing, relationships, and closing.",
        "Client updates follow a structured weekly format.",
        "Contractor follow-up runs before the assignment ends.",
      ],
    },
    modules: [
      {
        title: "Bilingual Acknowledgement",
        description: "Every application is acknowledged immediately in Finnish or English based on detected language.",
        bullets: ["Automatic language detection", "Immediate acknowledgement", "Candidate experience"],
      },
      {
        title: "AI Pre-Screening",
        description: "Role-specific questions are sent automatically and scored against role criteria.",
        bullets: ["Structured screening", "Ranked summary", "Recruiter review"],
      },
      {
        title: "Interview Scheduler",
        description: "Shortlisted candidates self-book directly from the recruiter's calendar.",
        bullets: ["Self-booking", "Confirmation", "Prep notes"],
      },
      {
        title: "Client Pipeline Reports",
        description: "Automated weekly update to each client with applications, screening, shortlist, and interview status.",
        bullets: ["Weekly report", "Consistent format", "Zero manual drafting"],
      },
      {
        title: "Contractor Re-engagement",
        description: "Automated outreach runs 4 weeks before contract end for extension, new roles, or referrals.",
        bullets: ["Pre-expiry outreach", "Extension prompts", "Referral follow-up"],
      },
      {
        title: "Placement Analytics",
        description: "Dashboard tracks sourcing channel performance, time-to-fill, and client retention.",
        bullets: ["Channel performance", "Time-to-fill", "Client retention"],
      },
    ],
    results: [
      {
        title: "More roles handled per recruiter",
        description: "Automating pre-screening can increase capacity without adding hours.",
      },
      {
        title: "Fewer candidate drop-offs",
        description: "Consistent communication reduces ghosting at offer stage.",
      },
      {
        title: "Better client retention",
        description: "Structured weekly updates support renewals and exclusive mandates.",
      },
      {
        title: "More accurate pipeline data",
        description: "CRM updates after every interaction keep the funnel current.",
      },
      {
        title: "Better sourcing insight",
        description: "The team can see which channels drive the best placements.",
      },
      {
        title: "More efficient contract follow-up",
        description: "Contractor re-engagement becomes systematic instead of forgotten.",
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
        question: "Finnish and English?",
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
      title: "Finland's tech talent pool is small and competitive. Be the agency that responds first and follows up best.",
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
];
