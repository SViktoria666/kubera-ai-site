import type { IndustrySolution } from "./industry-solutions";

export const irelandIndustrySolutions: IndustrySolution[] = [
  {
    locale: "en",
    country: "ireland",
    countryLabel: "Ireland",
    industry: "tech-startup-automation",
    industryLabel: "Tech Startup Automation",
    url: "/en/solutions/ireland/tech-startup-automation",
    seo: {
      title: "AI Automation for Tech Startups and SaaS Companies in Ireland | Kubera AI",
      description:
        "AI automation for tech startups and SaaS companies in Ireland. Qualify leads faster, book demos automatically, sync CRM updates, and reduce SDR admin with Kubera AI.",
      canonical: "https://www.kubera-automation.com/en/solutions/ireland/tech-startup-automation",
      type: "service",
    },
    hero: {
      label: "Tech Startup Automation - Ireland",
      title: "You're Losing Leads While Your Team Answers Emails",
      subtitle:
        "Irish tech startups and SaaS companies run on lead velocity. Every hour a new demo request sits unanswered is an hour the prospect is evaluating your competitor. Kubera AI builds automated sales and support systems that respond instantly, qualify leads, and push them into your CRM without adding headcount. Built for SaaS companies, tech startups, B2B software teams, and scale-ups in Ireland.",
      trustLine: "Built for SaaS companies - tech startups - B2B software teams - scale-ups in Ireland",
      primaryCta: {
        title: "Book a strategy call",
        description: "Map your current lead flow and identify where automation adds the most value.",
        href: "/contacts",
      },
      secondaryCta: {
        title: "See how it works",
        description: "Review the service hub before scoping the workflow.",
        href: "/services",
      },
      previewNodes: ["Website / Product Trial", "AI Lead Qualification Assistant", "CRM", "Calendar Sync", "Email Follow-up", "Analytics Dashboard"],
    },
    problems: [
      {
        title: "Inbound demo requests sit too long before anyone replies",
        description: "Demo requests often sit in an inbox for 3-8 hours before a response, while the prospect keeps evaluating alternatives.",
      },
      {
        title: "Too many leads never get a follow-up",
        description: "A large share of leads never receive a second touch after the first contact, so interest decays before sales can act.",
      },
      {
        title: "CRM data stays incomplete",
        description: "Calls, emails, and qualification notes are not logged consistently, so the CRM is only partially useful.",
      },
      {
        title: "Follow-up depends on rep memory",
        description: "The follow-up sequence changes depending on whether the rep remembers to send it.",
      },
      {
        title: "Onboarding lacks a standard flow",
        description: "New customer onboarding is handled differently each time instead of following one repeatable process.",
      },
    ],
    problemSolution: [
      {
        problem: "Inbound demo requests sit in an inbox",
        automation: "AI responds in under 2 minutes and starts qualification immediately",
        result: "Can help reduce response time from hours to minutes",
      },
      {
        problem: "Leads never receive a follow-up",
        automation: "Automated post-contact follow-up sequence is triggered every time",
        result: "Supports more consistent follow-up and fewer missed opportunities",
      },
      {
        problem: "CRM is half-empty",
        automation: "Every interaction is written to the CRM automatically",
        result: "Creates a more complete pipeline record",
      },
      {
        problem: "Rep-dependent follow-up",
        automation: "Demo follow-up is triggered automatically after the conversation",
        result: "Reduces reliance on manual memory and individual discipline",
      },
      {
        problem: "Too much SDR admin",
        automation: "Qualification, scheduling, reminders, and logging are automated",
        result: "Frees SDR time for conversations instead of admin",
      },
    ],
    architecture: {
      title: "Recommended automation architecture",
      description:
        "Website / LinkedIn / Product Trial captures inbound interest. The AI Lead Qualification Assistant asks about budget, use case, team size, and timeline. CRM stores the lead, score, and tags. Demo Booking syncs the calendar. Pre-demo sequences send reminders automatically, post-demo follow-up is AI-triggered, onboarding begins on deal close, and the Analytics Dashboard tracks response time, conversion rate, and pipeline movement.",
      flow: [
        "Website / LinkedIn / Product Trial",
        "AI Lead Qualification Assistant",
        "CRM",
        "Demo Booking",
        "Pre-demo sequence",
        "Post-demo follow-up",
        "Onboarding trigger",
        "Analytics Dashboard",
      ],
      notes: [
        "The assistant qualifies leads in the same session rather than passing every enquiry to a rep.",
        "CRM remains the source of truth for lead status, pipeline stage, and ownership.",
        "Calendar sync removes back-and-forth while keeping the rep in control of meeting availability.",
        "Onboarding automation starts only after the deal closes, so the sales flow and customer flow stay separate.",
      ],
    },
    modules: [
      {
        title: "Inbound Lead Qualifier",
        description: "Engages every inbound lead within 2 minutes and asks qualifying questions.",
        bullets: ["Budget", "Use case", "Team size"],
      },
      {
        title: "Demo Booking Flow",
        description: "Lets qualified leads choose a time slot directly in the conversation.",
        bullets: ["Calendar sync", "Instant confirmation", "Reminder automation"],
      },
      {
        title: "CRM Sync",
        description: "Writes every interaction to the CRM without manual entry.",
        bullets: ["Lead creation", "Scoring", "Tagging"],
      },
      {
        title: "Post-Demo Follow-Up",
        description: "Runs a timed sequence after every demo with summaries and next steps.",
        bullets: ["Day 1 summary", "Day 3 case study", "Day 7 question", "Day 14 nudge"],
      },
      {
        title: "Customer Onboarding Flow",
        description: "Triggers onboarding tasks, welcome messages, and internal handoff when a deal closes.",
        bullets: ["Welcome sequence", "Internal tasks", "Onboarding checklist"],
      },
      {
        title: "Pipeline Reporting",
        description: "Weekly report on lead sources, conversion rates, demo-to-close ratio, and response time.",
        bullets: ["Lead source tracking", "Stage conversion", "Response timing"],
      },
    ],
    results: [
      {
        title: "Faster contact with demo-ready prospects",
        description: "Responding in minutes instead of hours helps the team speak only to qualified leads.",
      },
      {
        title: "More consistent follow-up",
        description: "Automated sequences reduce the chance that interested leads go cold after first contact.",
      },
      {
        title: "Cleaner CRM data",
        description: "Every interaction is captured automatically, improving forecasting and pipeline visibility.",
      },
      {
        title: "Less SDR admin",
        description: "Qualification, scheduling, reminders, and logging are handled by the workflow instead of manually.",
      },
      {
        title: "Standardised onboarding",
        description: "Onboarding starts from a repeatable trigger when the deal closes.",
      },
      {
        title: "Better visibility into funnel performance",
        description: "The dashboard shows exactly where leads convert and where they drop off.",
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
        title: "CRM Automation",
        description: "Sync leads, contacts, and pipeline without manual data entry.",
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
        title: "AI lead qualification assistant for B2B SaaS",
        description: "Closest-fit case for lead qualification and CRM sync.",
        href: "/cases/sales-leads",
      },
      {
        title: "Automated demo booking flow with CRM sync",
        description: "Relevant architecture example for demo handling and lead capture.",
        href: "/cases/customer-communications",
      },
      {
        title: "Post-demo follow-up sequence automation",
        description: "Useful for timing, follow-up, and handoff logic.",
        href: "/cases/internal-processes",
      },
      {
        title: "Landing page + AI + CRM lead automation",
        description: "Closest-fit system example for product-led lead capture.",
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
          "Setup starts at EUR3,000-EUR5,000 for a standard lead qualification and CRM automation system. Monthly support starts from EUR249/month. Exact scope is confirmed during the strategy call.",
      },
      {
        question: "How fast is ROI?",
        answer:
          "Most clients see operational impact within the first 30 days: faster response times and fewer missed leads. Revenue impact depends on pipeline size and current conversion rates.",
      },
      {
        question: "How long does implementation take?",
        answer: "3-5 weeks for a standard setup including CRM integration, qualification flow, and follow-up sequences.",
      },
      {
        question: "Do I need to replace my CRM?",
        answer: "No. Kubera connects to your existing CRM, including HubSpot, Pipedrive, Salesforce, and others.",
      },
      {
        question: "Can Kubera work with my existing tools?",
        answer: "Yes. If your tools have an API or webhook, they can be connected into the workflow.",
      },
      {
        question: "Will this replace my SDR?",
        answer: "No. It replaces the admin work your SDR does so they can focus on conversations.",
      },
      {
        question: "Does it work for B2B or B2C?",
        answer: "Primarily B2B. If you are selling software or services to businesses, the architecture is directly applicable.",
      },
      {
        question: "What if a lead asks something the AI cannot handle?",
        answer: "The system detects out-of-scope questions and routes to a human immediately.",
      },
    ],
    cta: {
      label: "Final CTA",
      title: "Your competitors are already responding faster than you.",
      body: "Every hour your lead qualification runs on manual processes, you're losing deals to companies that respond in 2 minutes. Kubera AI builds the system that makes that your competitor's problem, not yours.",
      primary: {
        title: "Book a strategy call",
        description: "Map your current lead flow and show exactly what to automate first.",
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
    country: "ireland",
    countryLabel: "Ireland",
    industry: "real-estate-automation",
    industryLabel: "Real Estate Automation",
    url: "/en/solutions/ireland/real-estate-automation",
    seo: {
      title: "AI Automation for Real Estate Agencies in Ireland | Kubera AI",
      description:
        "AI automation for real estate agencies in Ireland. Respond to enquiries faster, qualify buyers automatically, schedule viewings, and keep CRM data up to date.",
      canonical: "https://www.kubera-automation.com/en/solutions/ireland/real-estate-automation",
      type: "service",
    },
    hero: {
      label: "Real Estate Automation - Ireland",
      title: "50+ Enquiries a Day. One Agent Answering Them All.",
      subtitle:
        "Dublin's property market moves fast. Buyers on Daft.ie and MyHome.ie submit enquiries at 10pm on a Saturday and expect a response before they book a viewing elsewhere. Kubera AI builds automated systems that respond instantly, qualify buyers, schedule viewings, and follow up so agents close more deals without working more hours. Built for independent estate agencies, individual agents, property management companies, and new-build sales teams in Ireland.",
      trustLine: "Built for independent estate agencies - individual agents - property management companies - new-build sales teams in Ireland",
      primaryCta: {
        title: "Book a strategy call",
        description: "Map your current enquiry flow and identify where automation adds the most value.",
        href: "/contacts",
      },
      secondaryCta: {
        title: "See how it works",
        description: "Review the service hub before scoping the workflow.",
        href: "/services",
      },
      previewNodes: ["Daft.ie / MyHome.ie / Website / WhatsApp", "AI Enquiry Response", "Lead Qualification", "CRM", "Viewing Scheduler", "Listing Dashboard"],
    },
    problems: [
      {
        title: "Enquiries arrive after hours",
        description: "Daft.ie and MyHome.ie enquiries often arrive at night or on weekends, when no one responds until the next working day.",
      },
      {
        title: "Too many leads are unqualified",
        description: "A large share of inbound leads are not ready to move forward because they lack budget, timeline, or intent.",
      },
      {
        title: "Viewing scheduling is repetitive",
        description: "Every appointment can require several back-and-forth messages before it is confirmed.",
      },
      {
        title: "Follow-up is inconsistent",
        description: "After a viewing, many agencies do not send a structured follow-up sequence.",
      },
      {
        title: "CRM updates are manual",
        description: "Lead and viewing data is updated manually whenever someone remembers to log it.",
      },
    ],
    problemSolution: [
      {
        problem: "After-hours enquiries wait until Monday",
        automation: "AI responds within 3 minutes, including evenings and weekends",
        result: "Can help reduce response time from hours to minutes",
      },
      {
        problem: "Unqualified leads consume agent time",
        automation: "AI qualifies buyers in chat using budget, timeline, property type, and area",
        result: "Supports better filtering before an agent gets involved",
      },
      {
        problem: "Scheduling requires long back-and-forth",
        automation: "Buyers book a viewing slot directly in the conversation",
        result: "Reduces the number of messages needed to confirm a viewing",
      },
      {
        problem: "No structured follow-up after viewings",
        automation: "Automated day 1, day 3, and day 7 follow-up sequence",
        result: "Helps keep buyers engaged after the viewing",
      },
      {
        problem: "CRM updates happen manually",
        automation: "Lead and viewing data are updated automatically after every interaction",
        result: "Creates a cleaner record of listing and buyer activity",
      },
    ],
    architecture: {
      title: "Recommended automation architecture",
      description:
        "Daft.ie / MyHome.ie / Website / WhatsApp captures enquiry traffic. AI Enquiry Response replies instantly. Lead Qualification checks budget, timeline, property type, and area. CRM stores the lead, tagging and assignment happen automatically, Viewing Scheduler syncs to the agent calendar, reminders and post-viewing follow-up run on schedule, hot lead notifications alert the agent, and the Listing Performance Dashboard tracks enquiry, qualification, and viewing rates.",
      flow: [
        "Daft.ie / MyHome.ie / Website / WhatsApp",
        "AI Enquiry Response",
        "Lead Qualification",
        "CRM",
        "Viewing Scheduler",
        "Viewing Reminder",
        "Post-Viewing Follow-up Sequence",
        "Agent Notification",
        "Listing Performance Dashboard",
      ],
      notes: [
        "The same enquiry flow works across portals, website forms, and WhatsApp.",
        "The agent stays in control of viewings and negotiations while automation handles the repetitive coordination.",
        "The CRM is updated after every interaction so listing performance stays visible.",
        "Weekend and evening coverage are included because that is when many high-intent enquiries arrive.",
      ],
    },
    modules: [
      {
        title: "Instant Enquiry Response",
        description: "Replies to every enquiry immediately, including evening and weekend submissions.",
        bullets: ["Portal replies", "Website replies", "Always-on coverage"],
      },
      {
        title: "Buyer Qualification Flow",
        description: "Asks the right questions before an agent gets involved.",
        bullets: ["Budget", "Timeline", "Property type", "Area"],
      },
      {
        title: "Viewing Scheduler",
        description: "Lets qualified buyers choose a slot directly in chat.",
        bullets: ["Calendar sync", "Confirmation", "24-hour reminder"],
      },
      {
        title: "Post-Viewing Follow-up",
        description: "Runs a timed sequence after each viewing to keep the lead warm.",
        bullets: ["Day 1", "Day 3", "Day 7"],
      },
      {
        title: "Vendor Communication",
        description: "Sends automated viewing confirmations and feedback summaries to vendors.",
        bullets: ["Vendor updates", "Viewing confirmation", "Feedback summary"],
      },
      {
        title: "Listing Analytics",
        description: "Shows which listings generate qualified enquiries and which do not.",
        bullets: ["Qualification rate", "Viewing rate", "Offer rate"],
      },
    ],
    results: [
      {
        title: "Faster responses on portal enquiries",
        description: "Responding in minutes instead of the next working day helps agencies capture more active buyers.",
      },
      {
        title: "Better lead filtering",
        description: "Agents spend more time with qualified buyers and less time chasing people who are only browsing.",
      },
      {
        title: "Less scheduling overhead",
        description: "Buyers book viewings directly, cutting down the number of coordination messages.",
      },
      {
        title: "More consistent follow-up",
        description: "Automated sequences keep the conversation going after the viewing.",
      },
      {
        title: "Cleaner CRM records",
        description: "Every enquiry, qualification answer, and viewing update is captured automatically.",
      },
      {
        title: "Better listing visibility",
        description: "The dashboard shows which listings are converting and which need attention.",
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
        title: "WhatsApp Automation",
        description: "Automated flows on WhatsApp Business API.",
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
        title: "Post-viewing follow-up sequence for property agents",
        description: "Useful for follow-up timing and handoff logic.",
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
        answer: "A standard real estate automation setup typically runs EUR3,000-EUR5,000 setup plus EUR249/month support.",
      },
      {
        question: "How fast is ROI?",
        answer: "In most cases, one additional closed transaction covers the annual cost of the system.",
      },
      {
        question: "How long does implementation take?",
        answer: "3-5 weeks including CRM integration and qualification flow setup.",
      },
      {
        question: "Do I need to replace my CRM?",
        answer: "No. Kubera connects to your existing system, including PropertyPal, Salesforce, HubSpot, or a custom setup.",
      },
      {
        question: "Can Kubera work with Daft.ie and MyHome.ie?",
        answer: "Integration depends on the portal's available notification channels and is assessed during the strategy call.",
      },
      {
        question: "Will agents still handle viewings?",
        answer: "Yes. Agents handle viewings and negotiations. The system handles everything before and after.",
      },
      {
        question: "Does it work for lettings as well as sales?",
        answer: "Yes. Qualification flows can be configured for tenants and landlords separately.",
      },
      {
        question: "What happens if a buyer asks something complex?",
        answer: "The AI flags it and routes to an agent immediately. Complex queries always go to a human.",
      },
    ],
    cta: {
      label: "Final CTA",
      title: "Stop losing Saturday night enquiries to agencies with faster responses.",
      body: "Kubera AI builds the system that responds before your competitor does, every time, including weekends.",
      primary: {
        title: "Book a strategy call",
        description: "Map your enquiry flow and show where automation can remove the biggest leaks.",
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
    country: "ireland",
    countryLabel: "Ireland",
    industry: "recruitment-automation",
    industryLabel: "Recruitment Automation",
    url: "/en/solutions/ireland/recruitment-automation",
    seo: {
      title: "AI Automation for Recruitment Agencies in Ireland | Kubera AI",
      description:
        "AI automation for recruitment agencies in Ireland. Acknowledge applications instantly, pre-screen candidates, schedule interviews, and keep clients updated.",
      canonical: "https://www.kubera-automation.com/en/solutions/ireland/recruitment-automation",
      type: "service",
    },
    hero: {
      label: "Recruitment Automation - Ireland",
      title: "500 Applications. One Recruiter. Something Has to Give.",
      subtitle:
        "Irish recruitment agencies are running at full capacity. Tech, pharma, financial services - the roles are there, the fees are real, but the manual work of screening, communicating, and coordinating is eating into everything. Kubera AI builds automated candidate and client communication systems that let recruiters do what they are paid for: place people. Built for independent recruitment agencies, executive search firms, specialist tech and pharma recruiters, and contract recruitment desks in Ireland.",
      trustLine: "Built for independent recruitment agencies - executive search firms - specialist tech/pharma recruiters - contract recruitment desks in Ireland",
      primaryCta: {
        title: "Book a strategy call",
        description: "Map your current process and identify where automation makes the biggest difference.",
        href: "/contacts",
      },
      secondaryCta: {
        title: "See how it works",
        description: "Review the service hub before scoping the workflow.",
        href: "/services",
      },
      previewNodes: ["Job Board / LinkedIn / Referral / Direct", "Application Acknowledgement", "Pre-Screening Questions", "CRM", "Interview Scheduling", "Client Update Sequence"],
    },
    problems: [
      {
        title: "Candidates expect same-day acknowledgement",
        description: "Applications arrive 24/7 and applicants expect to hear back quickly.",
      },
      {
        title: "Manual CV screening takes too long",
        description: "Pre-screening large volumes of CVs manually can take days per role.",
      },
      {
        title: "Candidates ghost between stages",
        description: "Follow-up is inconsistent, so candidates disappear before the process finishes.",
      },
      {
        title: "Clients do not get regular updates",
        description: "Hiring managers stop calling when they do not get a clear pipeline update.",
      },
      {
        title: "Interview scheduling is repetitive",
        description: "Booking a single interview can require several messages back and forth.",
      },
    ],
    problemSolution: [
      {
        problem: "Applications arrive around the clock",
        automation: "Application acknowledgement is sent in minutes",
        result: "Can help reduce the time candidates wait for a first response",
      },
      {
        problem: "CV screening takes 2-3 days per role",
        automation: "Pre-screening questions are sent automatically on receipt",
        result: "Frees recruiter time from first-pass admin",
      },
      {
        problem: "Interview booking requires many messages",
        automation: "Candidate chooses a slot directly in chat",
        result: "Reduces scheduling friction",
      },
      {
        problem: "Clients lack regular updates",
        automation: "Weekly automated update is sent to the hiring manager",
        result: "Supports more consistent client communication",
      },
      {
        problem: "Contractors fall off the radar",
        automation: "Re-engagement starts 4 weeks before contract end",
        result: "Helps keep the contractor base active",
      },
    ],
    architecture: {
      title: "Recommended automation architecture",
      description:
        "Job Board / LinkedIn / Referral / Direct sends candidates into the workflow. Application Acknowledgement confirms receipt instantly. Pre-Screening Questions gather fit signals and Candidate Scoring and Tagging write to the CRM. Interview Scheduling syncs the calendar, Interview Confirmation and Preparation Pack goes out automatically, Post-Interview Follow-up runs after each stage, Client Update Sequence keeps hiring managers informed, Offer Stage Coordination supports the decision phase, and Contractor Re-engagement runs before placement end.",
      flow: [
        "Job Board / LinkedIn / Referral / Direct",
        "Application Acknowledgement",
        "Pre-Screening Questions",
        "Candidate Scoring and Tagging",
        "Interview Scheduling",
        "Interview Confirmation + Preparation Pack",
        "Post-Interview Follow-up",
        "Client Update Sequence",
        "Offer Stage Coordination",
        "Contractor Re-engagement",
      ],
      notes: [
        "Recruiters focus on relationships and offers while the workflow handles the admin.",
        "Candidate communication stays structured at every stage so drop-off is lower.",
        "The CRM stores role-specific scoring and status updates automatically.",
        "Client updates run on a weekly cadence so hiring managers do not have to chase progress.",
      ],
    },
    modules: [
      {
        title: "Application Acknowledgement",
        description: "Every applicant gets an immediate confirmation and next-step message.",
        bullets: ["Instant reply", "Next steps", "No manual chasing"],
      },
      {
        title: "AI Pre-Screening",
        description: "Sends role-specific questions, scores answers, and tags candidate fit.",
        bullets: ["Role questions", "Scoring", "Recruiter summary"],
      },
      {
        title: "Interview Scheduler",
        description: "Shortlisted candidates book their own interview slot from the recruiter's calendar.",
        bullets: ["Calendar sync", "Confirmation", "Preparation pack"],
      },
      {
        title: "Stage Follow-up",
        description: "Automated follow-up after interview, assessment, and second round stages.",
        bullets: ["Candidate follow-up", "Internal notification", "Nothing missed"],
      },
      {
        title: "Client Communication",
        description: "Weekly pipeline updates keep hiring managers informed without recruiter effort.",
        bullets: ["Weekly update", "Role status", "Candidates in process"],
      },
      {
        title: "Contractor Re-engagement",
        description: "Automated re-engagement starts before a contractor's end date.",
        bullets: ["Extension ask", "New roles", "Referrals"],
      },
    ],
    results: [
      {
        title: "Faster screening",
        description: "Recruiters spend less time on first-pass admin and more time on real conversations.",
      },
      {
        title: "Less ghosting",
        description: "Consistent communication at each stage keeps candidates engaged.",
      },
      {
        title: "Better client retention",
        description: "Hiring managers stay informed without having to ask for status updates.",
      },
      {
        title: "More placements per recruiter",
        description: "One recruiter can spend more time on active placement work because the workflow handles the admin load.",
      },
      {
        title: "Cleaner pipeline visibility",
        description: "Open roles, stage movement, and drop-off points are easier to track.",
      },
      {
        title: "Higher contractor reactivation",
        description: "The system reaches contractors before the contract ends, rather than after the fact.",
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
        title: "AI pre-screening system for high-volume roles",
        description: "Closest-fit case for candidate screening and scoring.",
        href: "/cases/hr-hiring",
      },
      {
        title: "Automated interview scheduling with CRM sync",
        description: "Relevant architecture example for booking and follow-up.",
        href: "/cases/internal-processes",
      },
      {
        title: "Contractor re-engagement automation",
        description: "Useful for lifecycle timing and reactivation logic.",
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
        answer: "A standard recruitment automation setup starts at EUR3,000-EUR5,000. Monthly support starts from EUR249/month.",
      },
      {
        question: "How fast is ROI?",
        answer: "Typically one or two additional placements per month cover the full annual cost.",
      },
      {
        question: "How long does implementation take?",
        answer: "4-5 weeks including CRM integration and workflow setup.",
      },
      {
        question: "Do I need to replace my ATS or CRM?",
        answer: "No. Kubera integrates with your existing tools, including Bullhorn, Vincere, HubSpot, and others.",
      },
      {
        question: "Will this work for both permanent and contract recruitment?",
        answer: "Yes. Separate workflows can be built for each model.",
      },
      {
        question: "Can Kubera work with LinkedIn InMail or job board notifications?",
        answer: "It depends on the available APIs and notification channels. This is assessed during the strategy call.",
      },
      {
        question: "Will candidates know they are interacting with AI?",
        answer: "The system is presented transparently, and complex or sensitive conversations are routed to a recruiter immediately.",
      },
      {
        question: "Can it handle multiple open roles simultaneously?",
        answer: "Yes. Each role can have its own qualification criteria and communication flow.",
      },
    ],
    cta: {
      label: "Final CTA",
      title: "Your best candidates are deciding between you and a recruiter who responds faster.",
      body: "Kubera AI builds the system that keeps candidates engaged from application to offer automatically.",
      primary: {
        title: "Book a strategy call",
        description: "Map your current process and show where automation makes the biggest difference.",
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
