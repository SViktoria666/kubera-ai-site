import type { IndustrySolution } from "./industry-solutions";

export const belgiumIndustrySolutions: IndustrySolution[] = [
  {
    locale: "en",
    country: "belgium",
    countryLabel: "Belgium",
    industry: "multilingual-automation",
    industryLabel: "Multilingual Automation",
    url: "/en/solutions/belgium/multilingual-automation",
    seo: {
      title: "Multilingual AI Automation for Businesses in Belgium | Kubera AI",
      description:
        "Multilingual AI automation for Belgian businesses. Respond professionally in Dutch, French, German, and English with one system from Kubera AI.",
      canonical: "https://www.kubera-automation.com/en/solutions/belgium/multilingual-automation",
      type: "service",
    },
    hero: {
      label: "Multilingual Automation - Belgium",
      title: "Belgium Has Three Languages and One Business. Your AI Should Speak All of Them.",
      subtitle:
        "Belgian businesses face a challenge that does not exist anywhere else in Europe: serving customers in Dutch, French, and German, often in the same city. Kubera AI builds multilingual automation systems that respond professionally in any language, 24/7, without separate teams for each. Built for service businesses in Brussels, Antwerp, Liege, and Ghent, as well as retail, hospitality, professional services, and any Belgian SME serving customers in multiple languages.",
      trustLine: "Built for service businesses - retail - hospitality - professional services - multilingual Belgian SMEs",
      primaryCta: {
        title: "Book a strategy call",
        description: "Assess your current language coverage and where automation can help most.",
        href: "/contacts",
      },
      secondaryCta: {
        title: "See how it works",
        description: "Review the service hub before scoping the workflow.",
        href: "/services",
      },
      previewNodes: ["Website / WhatsApp / Phone / Email", "Language Detection", "AI Response", "CRM", "Follow-up Sequence", "Analytics Dashboard"],
    },
    problems: [
      {
        title: "Different languages get different service quality",
        description: "Dutch-speaking and French-speaking customers can receive different experiences depending on staff language skills.",
      },
      {
        title: "Staff waste time translating or switching languages",
        description: "Instead of serving customers, people spend time translating messages or switching language contexts.",
      },
      {
        title: "After-hours enquiries sit unanswered",
        description: "Messages in the wrong language wait until the right speaker arrives the next morning.",
      },
      {
        title: "Websites are often only in one or two languages",
        description: "French-speaking customers may simply move on to a competitor with a better multilingual presence.",
      },
      {
        title: "CRM data does not show language performance",
        description: "The team cannot tell which language segment drives the most revenue.",
      },
    ],
    problemSolution: [
      {
        problem: "Different service quality by language group",
        automation: "AI responds in the detected language immediately",
        result: "Can help standardise customer experience across languages",
      },
      {
        problem: "Staff spend time translating",
        automation: "One multilingual system handles response and follow-up",
        result: "Reduces repetitive translation work",
      },
      {
        problem: "After-hours enquiries wait until morning",
        automation: "24/7 language coverage keeps all tracks active",
        result: "Helps capture enquiries outside business hours",
      },
      {
        problem: "CRM has no language field",
        automation: "Every contact is tagged by language, region, and source",
        result: "Improves segmentation and reporting",
      },
      {
        problem: "No language-specific performance data",
        automation: "Language-segment dashboard tracks response time and conversion by language",
        result: "Supports better staffing and marketing decisions",
      },
    ],
    architecture: {
      title: "Recommended automation architecture",
      description:
        "Website / WhatsApp / Phone / Email feeds the workflow. Language Detection automatically identifies the language. AI Response in Detected Language handles NL, FR, DE, and EN. Lead Qualification happens in the same language, CRM stores language, region, and segment tags, Follow-up Sequence continues in the customer language, Human Handoff routes to the correct speaker, and the Language-Segment Analytics Dashboard shows performance by language.",
      flow: [
        "Website / WhatsApp / Phone / Email",
        "Language Detection",
        "AI Response in Detected Language (NL / FR / DE / EN)",
        "Lead Qualification",
        "CRM",
        "Follow-up Sequence",
        "Human Handoff",
        "Language-Segment Analytics Dashboard",
      ],
      notes: [
        "Response, follow-up, and later communication all stay in the same language track.",
        "Human handoff routes to the correct language speaker when needed.",
        "CRM tags language, region, and source so reporting is usable.",
        "Language dashboards help the business see which communities need more coverage.",
      ],
    },
    modules: [
      {
        title: "Language Detection and Routing",
        description: "Analyses each inbound message and routes it to the correct language track.",
        bullets: ["NL", "FR", "DE", "EN"],
      },
      {
        title: "Multilingual Lead Qualification",
        description: "Asks qualification questions in the customer language and logs the answers.",
        bullets: ["Qualification", "CRM logging", "Hot lead routing"],
      },
      {
        title: "Multilingual Follow-up Sequences",
        description: "Post-enquiry and re-engagement flows run in the detected or preferred language.",
        bullets: ["Follow-up", "Nurture", "Re-engagement"],
      },
      {
        title: "24/7 After-Hours Coverage",
        description: "All language tracks remain active outside business hours.",
        bullets: ["After-hours support", "Same response quality", "Always on"],
      },
      {
        title: "Language-Segment CRM",
        description: "Tags every contact by language, region, and source.",
        bullets: ["Language", "Region", "Source"],
      },
      {
        title: "Language Performance Dashboard",
        description: "Monthly reporting on enquiries, response time, conversion, and revenue by language.",
        bullets: ["Response time", "Conversion", "Revenue by language"],
      },
    ],
    results: [
      {
        title: "More consistent service across languages",
        description: "Customers receive the same quality regardless of the language they use.",
      },
      {
        title: "Less translation overhead",
        description: "Routine communication is handled automatically in the customer language.",
      },
      {
        title: "Better after-hours coverage",
        description: "The business can respond in every language 24/7.",
      },
      {
        title: "Cleaner CRM segmentation",
        description: "Language tags make it possible to understand which segments perform best.",
      },
      {
        title: "Better cross-regional coverage",
        description: "Brussels, Wallonia, Flanders, and the German community can all be served properly.",
      },
      {
        title: "Better marketing and staffing decisions",
        description: "The dashboard shows where response quality and revenue differ by language.",
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
        description: "Sync leads, contacts, and pipeline without manual data entry.",
        href: "/services",
      },
      {
        title: "Customer Support Automation",
        description: "Tiered support with AI first, human second.",
        href: "/services",
      },
    ],
    cases: [
      {
        title: "Multilingual customer qualification system for Brussels service business",
        description: "Closest-fit case for language-aware service routing.",
        href: "/cases/customer-communications",
      },
      {
        title: "Dutch/French/English after-hours AI coverage",
        description: "Relevant architecture example for multilingual coverage.",
        href: "/cases/landing-page-gpt-nti",
      },
      {
        title: "Language-segment analytics dashboard",
        description: "Useful for language-based reporting and segmentation.",
        href: "/cases/internal-processes",
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
          "Multilingual automation starts at EUR3,500-EUR6,000 depending on the number of languages and channels. Monthly support starts from EUR249-EUR399/month.",
      },
      {
        question: "How fast is ROI?",
        answer:
          "Businesses underserving one language community typically see enquiry growth from that segment within the first 60 days.",
      },
      {
        question: "How long does implementation take?",
        answer: "4-6 weeks for a full multilingual setup including all language tracks and CRM integration.",
      },
      {
        question: "Can it really respond accurately in Dutch, French, German, and English?",
        answer: "Yes. The system is built on large language models that operate well across major European languages.",
      },
      {
        question: "Do I need separate systems for each language?",
        answer: "No. One system handles all languages and routes by detected language automatically.",
      },
      {
        question: "What if a customer switches languages mid-conversation?",
        answer: "The system detects the switch and adapts. If the switch is ambiguous, it asks for clarification.",
      },
      {
        question: "Can it be configured for formal vs informal tone per language?",
        answer: "Yes. Register and formality are configured per language during setup.",
      },
      {
        question: "Is this GDPR compliant?",
        answer: "Yes. It is built on GDPR-compliant infrastructure with controlled data handling across all language tracks.",
      },
    ],
    cta: {
      label: "Final CTA",
      title: "Belgium's market speaks three languages. Your business communication should too - automatically.",
      body: "Kubera AI builds the multilingual automation infrastructure that no other AI agency in Europe specialises in for the Belgian market.",
      primary: {
        title: "Book a strategy call",
        description: "Map your current language coverage and identify where automation can help most.",
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
    country: "belgium",
    countryLabel: "Belgium",
    industry: "real-estate-automation",
    industryLabel: "Real Estate Automation",
    url: "/en/solutions/belgium/real-estate-automation",
    seo: {
      title: "AI Automation for Real Estate Agencies in Belgium | Kubera AI",
      description:
        "AI automation for Belgian real estate agencies. Respond in Dutch, French, English, and German, qualify buyers, and schedule viewings automatically.",
      canonical: "https://www.kubera-automation.com/en/solutions/belgium/real-estate-automation",
      type: "service",
    },
    hero: {
      label: "Real Estate Automation - Belgium",
      title: "Brussels International Buyers Expect Instant Responses in Their Language. Most Belgian Agencies Cannot Deliver.",
      subtitle:
        "The Brussels real estate market is unlike any other in Europe - EU officials, diplomats, expats, and local buyers all compete for the same properties, communicating in different languages and at different hours. Kubera AI builds multilingual enquiry, qualification, and follow-up systems that give Belgian agencies the capacity to serve international buyers properly, without adding staff for every language. Built for independent estate agencies, international property consultants, Brussels expat market specialists, and agencies in Antwerp, Ghent, and Liege handling mixed language markets.",
      trustLine: "Built for independent estate agencies - international property consultants - Brussels expat market specialists - mixed language agencies",
      primaryCta: {
        title: "Book a strategy call",
        description: "Map your enquiry flow and show where multilingual automation can add the most value.",
        href: "/contacts",
      },
      secondaryCta: {
        title: "See how it works",
        description: "Review the service hub before scoping the workflow.",
        href: "/services",
      },
      previewNodes: ["Immovlan / Immoweb / Direct Website / Referral", "Multilingual AI Response", "Buyer Qualification", "CRM", "Viewing Scheduler", "Listing Dashboard"],
    },
    problems: [
      {
        title: "International buyers expect immediate responses in their language",
        description: "EU officials, diplomats, and expats often enquire in English and expect an instant reply.",
      },
      {
        title: "Different language groups receive different response times",
        description: "Dutch-speaking and French-speaking buyers can get different service quality depending on staff availability.",
      },
      {
        title: "Multiple portals create fragmented enquiry handling",
        description: "Immovlan, Immoweb, and direct enquiries all arrive in separate systems.",
      },
      {
        title: "Viewing scheduling is repetitive",
        description: "A single appointment can take 5 to 8 messages to confirm across different time zones.",
      },
      {
        title: "Post-viewing follow-up is inconsistent",
        description: "International buyers usually need more touches before making a decision.",
      },
    ],
    problemSolution: [
      {
        problem: "English enquiries wait for the next available speaker",
        automation: "AI responds immediately in English",
        result: "Can help capture high-intent international buyers sooner",
      },
      {
        problem: "Portals are not centralised",
        automation: "All channels are centralised in one AI system",
        result: "Simplifies enquiry management and follow-up",
      },
      {
        problem: "Viewing booking takes many messages",
        automation: "Buyer picks a slot directly in conversation",
        result: "Reduces scheduling friction",
      },
      {
        problem: "International buyer follow-up is inconsistent",
        automation: "7-touch follow-up sequence runs automatically",
        result: "Supports longer decision cycles",
      },
      {
        problem: "CRM updates are manual",
        automation: "CRM is updated automatically and tagged by language and buyer type",
        result: "Improves pipeline visibility",
      },
    ],
    architecture: {
      title: "Recommended automation architecture",
      description:
        "Immovlan / Immoweb / Direct Website / Referral feeds the workflow. Multilingual AI Response handles NL, FR, EN, and DE. Buyer Qualification captures budget, timeline, property type, and purchase reason. CRM stores language tags and buyer type. Viewing Scheduler syncs the calendar. Post-Viewing Follow-up runs an extended sequence for international buyers. Vendor Communication keeps owners updated, and the Listing Performance Dashboard tracks language and conversion performance.",
      flow: [
        "Immovlan / Immoweb / Direct Website / Referral",
        "Multilingual AI Response (NL / FR / EN / DE)",
        "Buyer Qualification",
        "CRM",
        "Viewing Scheduler",
        "Post-Viewing Follow-up",
        "Vendor Communication",
        "Listing Performance Dashboard",
      ],
      notes: [
        "The workflow supports all major Belgian language tracks in one system.",
        "International buyers get a longer follow-up sequence to reflect slower decision cycles.",
        "CRM tags language and buyer type so agents can see what is working.",
        "Listing dashboards show which channels and language segments produce the strongest leads.",
      ],
    },
    modules: [
      {
        title: "Multilingual Enquiry Response",
        description: "Responds instantly in Dutch, French, English, or German.",
        bullets: ["NL", "FR", "EN", "DE"],
      },
      {
        title: "Buyer Qualification",
        description: "Asks budget, timeline, property type, and purchase reason in the buyer's language.",
        bullets: ["Budget", "Timeline", "Property type", "Purchase reason"],
      },
      {
        title: "Viewing Scheduler",
        description: "Buyer selects an available slot directly in the conversation.",
        bullets: ["Calendar sync", "Confirmation", "24-hour reminder"],
      },
      {
        title: "International Buyer Follow-up",
        description: "Extended follow-up sequence for expats, diplomats, and EU officials.",
        bullets: ["Day 1", "Day 3", "Day 7", "Day 14", "Day 30"],
      },
      {
        title: "Vendor Updates",
        description: "Automated viewing confirmations and feedback summaries to property owners.",
        bullets: ["Viewing confirmation", "Feedback summary", "Owner visibility"],
      },
      {
        title: "Pipeline Analytics",
        description: "Dashboard on enquiries, qualification rate, viewing conversion, offer rate, and time-to-close.",
        bullets: ["Language", "Buyer type", "Conversion", "Time-to-close"],
      },
    ],
    results: [
      {
        title: "Faster replies in the buyer's language",
        description: "International buyers get an immediate professional response instead of waiting for staff availability.",
      },
      {
        title: "More consistent handling across regions",
        description: "Agents do not need separate manual processes for Dutch, French, English, and German buyers.",
      },
      {
        title: "Lower scheduling overhead",
        description: "Viewing booking moves from long email threads to a single structured flow.",
      },
      {
        title: "Better follow-up for international buyers",
        description: "Longer touch sequences keep cross-border buyers engaged through the decision process.",
      },
      {
        title: "Cleaner CRM records",
        description: "Language and buyer type tags make pipeline data more useful.",
      },
      {
        title: "Better listing performance visibility",
        description: "The dashboard shows which portals, languages, and regions drive the best leads.",
      },
    ],
    services: [
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
    ],
    cases: [
      {
        title: "AI enquiry qualification for residential sales agency",
        description: "Closest-fit case for buyer qualification and lead handling.",
        href: "/cases/real-estate-rentals",
      },
      {
        title: "Automated viewing scheduling with CRM sync",
        description: "Relevant architecture example for appointment handling.",
        href: "/cases/sales-leads",
      },
      {
        title: "International buyer follow-up sequence",
        description: "Useful for multilingual follow-up and handoff logic.",
        href: "/cases/customer-communications",
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
          "Real estate multilingual automation starts at EUR3,500-EUR5,500. Monthly support starts from EUR249/month.",
      },
      {
        question: "How fast is ROI?",
        answer: "One additional transaction from an underserved language segment typically covers the annual cost.",
      },
      {
        question: "How long does implementation take?",
        answer: "4-5 weeks including multilingual setup, portal integration, and CRM connection.",
      },
      {
        question: "Which portals can it integrate with?",
        answer: "Immovlan, Immoweb, and direct website channels are assessed individually based on available channels.",
      },
      {
        question: "Can it handle both Dutch and French regions within the same agency?",
        answer: "Yes. The system is designed for exactly this use case.",
      },
      {
        question: "Will agents still conduct viewings?",
        answer: "Yes. The system handles everything before and after. Agents handle viewings and negotiations.",
      },
      {
        question: "Is it GDPR compliant?",
        answer: "Yes. Built on GDPR-compliant infrastructure with full data handling documentation.",
      },
      {
        question: "Can it handle rental as well as sales?",
        answer: "Yes. Separate qualification flows can be built for buyers, tenants, and landlords.",
      },
    ],
    cta: {
      label: "Final CTA",
      title: "Belgian buyers expect professional service in their language. Kubera AI delivers it automatically.",
      body: "Kubera AI builds the multilingual automation infrastructure that lets Belgian agencies compete at EU level.",
      primary: {
        title: "Book a strategy call",
        description: "Map your current enquiry flow and show what multilingual automation can improve.",
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
    country: "belgium",
    countryLabel: "Belgium",
    industry: "recruitment-automation",
    industryLabel: "Recruitment Automation",
    url: "/en/solutions/belgium/recruitment-automation",
    seo: {
      title: "AI Automation for Recruitment Agencies in Belgium | Kubera AI",
      description:
        "AI automation for Belgian recruitment agencies. Automate multilingual acknowledgements, screening, interview scheduling, and client updates with Kubera AI.",
      canonical: "https://www.kubera-automation.com/en/solutions/belgium/recruitment-automation",
      type: "service",
    },
    hero: {
      label: "Recruitment Automation - Belgium",
      title: "Brussels Recruitment Is EU-Scale. Your Back-Office Shouldn't Be the Bottleneck.",
      subtitle:
        "Belgian recruitment agencies, especially those serving Brussels EU institutions, international companies, and the federal government, handle multilingual high-volume candidate pipelines that quickly overwhelm manual processes. Kubera AI builds automated candidate screening, multilingual communication, and client update systems that let recruiters focus on relationships and placements, not admin. Built for independent recruitment agencies, EU-facing search firms, Brussels international talent desks, and Belgian specialist recruiters in pharma, legal, and tech.",
      trustLine: "Built for independent recruitment agencies - EU-facing search firms - Brussels international talent desks - specialist recruiters",
      primaryCta: {
        title: "Book a strategy call",
        description: "Map your multilingual candidate flow and identify where automation helps most.",
        href: "/contacts",
      },
      secondaryCta: {
        title: "See how it works",
        description: "Review the service hub before scoping the workflow.",
        href: "/services",
      },
      previewNodes: ["Stepstone / LinkedIn / Indeed / Direct Application", "Multilingual Acknowledgement", "AI Pre-Screening", "CRM", "Interview Scheduling", "Placement Analytics"],
    },
    problems: [
      {
        title: "Applications arrive in multiple languages",
        description: "Dutch, French, and English applications all arrive at once, and not every recruiter speaks all three.",
      },
      {
        title: "Candidates ghost between stages",
        description: "Inconsistent follow-up leads to drop-off between screening and interview.",
      },
      {
        title: "Client companies want regular updates",
        description: "EU institutions and multinationals expect structured weekly communication.",
      },
      {
        title: "Interview scheduling is repetitive",
        description: "A single booking can take 6 to 8 messages back and forth.",
      },
      {
        title: "CRM data is unreliable",
        description: "Pipeline data becomes stale because updates are entered manually and irregularly.",
      },
    ],
    problemSolution: [
      {
        problem: "Applications come in Dutch, French, and English",
        automation: "Applications are acknowledged immediately in the detected language",
        result: "Helps create a professional first impression across language groups",
      },
      {
        problem: "Candidates ghost between screening and interview",
        automation: "Automated stage follow-up keeps the process moving",
        result: "Supports better candidate retention through the funnel",
      },
      {
        problem: "Interview scheduling takes too many messages",
        automation: "Candidate picks a slot directly in chat",
        result: "Reduces scheduling friction",
      },
      {
        problem: "Client updates are irregular",
        automation: "Automated weekly update goes to the hiring manager",
        result: "Improves client confidence and retention",
      },
      {
        problem: "CRM records fall behind",
        automation: "CRM is updated automatically after every candidate interaction",
        result: "Improves pipeline visibility and accuracy",
      },
    ],
    architecture: {
      title: "Recommended automation architecture",
      description:
        "Stepstone / LinkedIn / Indeed / Direct Application feeds the workflow. Multilingual Acknowledgement handles NL, FR, and EN. AI Pre-Screening asks role-specific questions and scores candidates. Candidate Scoring and Tagging writes to CRM. Interview Scheduling syncs the calendar. Stage Follow-up handles candidate communication, Client Update Sequence sends multilingual updates, Offer Coordination manages the final step, Contractor Re-engagement starts before contract end, and Placement Analytics tracks performance.",
      flow: [
        "Stepstone / LinkedIn / Indeed / Direct Application",
        "Multilingual Acknowledgement (NL / FR / EN)",
        "AI Pre-Screening",
        "Candidate Scoring and Tagging",
        "Interview Scheduling",
        "Stage Follow-up",
        "Client Update Sequence",
        "Offer Coordination",
        "Contractor Re-engagement",
        "Placement Analytics",
      ],
      notes: [
        "One system handles all major Belgian language tracks in parallel.",
        "Recruiters remain focused on relationships, interviews, and offers.",
        "Client updates run on a defined cadence so managers do not have to chase progress.",
        "CRM tagging by language profile keeps pipeline data useful.",
      ],
    },
    modules: [
      {
        title: "Multilingual Acknowledgement",
        description: "Every application is acknowledged immediately in the candidate's language.",
        bullets: ["NL", "FR", "EN"],
      },
      {
        title: "AI Pre-Screening",
        description: "Role-specific questions are sent automatically and answers are scored.",
        bullets: ["Role questions", "Scoring", "Candidate ranking"],
      },
      {
        title: "Interview Scheduler",
        description: "Shortlisted candidates self-book from the recruiter's calendar.",
        bullets: ["Calendar sync", "Confirmation", "Prep notes"],
      },
      {
        title: "Multilingual Client Updates",
        description: "Automated weekly pipeline updates go to client companies in their preferred language.",
        bullets: ["Weekly updates", "Preferred language", "Structured reporting"],
      },
      {
        title: "Contractor Re-engagement",
        description: "Four weeks before contract end the system reaches out automatically.",
        bullets: ["Extension possibility", "New roles", "Referrals"],
      },
      {
        title: "Language and Placement Analytics",
        description: "Dashboard shows which language segments, clients, and roles generate the most placements.",
        bullets: ["Language segment", "Client repeat business", "Fastest roles"],
      },
    ],
    results: [
      {
        title: "Better multilingual coverage",
        description: "Candidates get communication in the language they used first.",
      },
      {
        title: "Less ghosting",
        description: "Consistent stage follow-up keeps candidates engaged.",
      },
      {
        title: "Higher client confidence",
        description: "Structured updates help multinationals and public-sector clients feel informed.",
      },
      {
        title: "More placements per recruiter",
        description: "Automation frees time from admin so recruiters can close more roles.",
      },
      {
        title: "Cleaner CRM records",
        description: "Every candidate interaction is logged automatically.",
      },
      {
        title: "Stronger contractor reactivation",
        description: "The system reaches contractors before the assignment ends.",
      },
    ],
    services: [
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
    ],
    cases: [
      {
        title: "Multilingual pre-screening system for Brussels recruitment agency",
        description: "Closest-fit case for multilingual candidate screening.",
        href: "/cases/hr-hiring",
      },
      {
        title: "EU client weekly update automation",
        description: "Relevant architecture example for client communication.",
        href: "/cases/internal-processes",
      },
      {
        title: "Contractor re-engagement in three languages",
        description: "Useful for lifecycle messaging and reactivation.",
        href: "/cases/customer-communications",
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
          "Belgian recruitment automation starts at EUR3,500-EUR5,500 given multilingual requirements. Monthly support starts from EUR249-EUR399/month.",
      },
      {
        question: "How fast is ROI?",
        answer: "One additional placement from improved language coverage typically covers the full annual cost.",
      },
      {
        question: "How long does implementation take?",
        answer: "5-6 weeks for a full multilingual setup including language tracks and CRM integration.",
      },
      {
        question: "Can it handle Dutch, French, and English simultaneously?",
        answer: "Yes. All three language tracks can run in parallel from one system.",
      },
      {
        question: "Does it work with our existing ATS?",
        answer: "Yes. Kubera integrates with Bullhorn, Vincere, TeamTailor, and others.",
      },
      {
        question: "Will candidates know they are interacting with AI?",
        answer: "The system is transparent. Sensitive conversations are routed to a recruiter immediately.",
      },
      {
        question: "Can it handle permanent and contract separately?",
        answer: "Yes. Separate workflows can be built per engagement type.",
      },
      {
        question: "Is it compliant with Belgian and GDPR data requirements?",
        answer: "Yes. All data handling is GDPR-compliant with a full audit trail.",
      },
    ],
    cta: {
      label: "Final CTA",
      title: "Belgium's recruitment market is multilingual and demanding. Your agency's communication system should match.",
      body: "Kubera AI builds the multilingual automation infrastructure that lets Belgian recruiters compete at EU level.",
      primary: {
        title: "Book a strategy call",
        description: "Map your multilingual candidate flow and show where automation can help most.",
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
