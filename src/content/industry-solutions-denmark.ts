import type { IndustrySolution } from "./industry-solutions";

export const denmarkIndustrySolutions: IndustrySolution[] = [
  {
    locale: "en",
    country: "denmark",
    countryLabel: "Denmark",
    industry: "boutique-hotel-automation",
    industryLabel: "Boutique Hotel Automation",
    url: "/en/solutions/denmark/boutique-hotel-automation",
    seo: {
      title: "AI Automation for Boutique Hotels and Vacation Rentals in Denmark | Kubera AI",
      description:
        "AI automation for boutique hotels and vacation rentals in Denmark. Automate guest communication, no-show reminders, upsells, reviews, and rebooking with Kubera AI.",
      canonical: "https://www.kubera-automation.com/en/solutions/denmark/boutique-hotel-automation",
      type: "service",
    },
    hero: {
      label: "Boutique Hotel Automation - Denmark",
      title: "Your Guests Are Booking Elsewhere While You're Answering Emails",
      subtitle:
        "Danish boutique hotels and vacation rentals lose bookings every evening. Guests compare three properties, message all three at 9pm, and book whichever responds first. Kubera AI builds automated guest communication systems that respond instantly, reduce no-shows, and turn one-time guests into repeat visitors without adding front desk hours. Built for boutique hotels, vacation rentals, B&Bs, guesthouses, and small hotel groups in Denmark.",
      trustLine: "Built for boutique hotels - vacation rentals - B&Bs - guesthouses - small hotel groups in Denmark",
      primaryCta: {
        title: "Book a strategy call",
        description: "Map your current guest communication and identify where automation adds the most commercial impact.",
        href: "/contacts",
      },
      secondaryCta: {
        title: "See how it works",
        description: "Review the service hub before scoping the workflow.",
        href: "/services",
      },
      previewNodes: ["Booking.com / Airbnb / Direct Website / Phone", "AI Guest Communication Assistant", "Booking Confirmation", "No-Show Reminder", "CRM", "Analytics Dashboard"],
    },
    problems: [
      {
        title: "Guests expect late-night replies",
        description: "Booking enquiries arrive at 9pm and guests expect a reply before midnight.",
      },
      {
        title: "No-show and cancellation risk is too high",
        description: "Without structured reminders, a meaningful share of bookings result in no-shows or last-minute cancellations.",
      },
      {
        title: "Pre-arrival information is inconsistent",
        description: "Parking, check-in instructions, and WiFi details are often sent manually or forgotten.",
      },
      {
        title: "Upsell opportunities are missed",
        description: "Late check-out, breakfast upgrades, and local extras are not offered systematically.",
      },
      {
        title: "Post-stay review requests are not sent",
        description: "Reviews are often missed, which hurts direct bookings and visibility.",
      },
    ],
    problemSolution: [
      {
        problem: "Late-night booking enquiries wait until morning",
        automation: "AI responds within 3 minutes with availability and key details",
        result: "Can help capture bookings before the guest chooses another property",
      },
      {
        problem: "No-show risk is not actively managed",
        automation: "Reminder messages are sent 48h and 24h before arrival",
        result: "Supports lower no-show and cancellation loss",
      },
      {
        problem: "Pre-arrival information is manual",
        automation: "Pre-arrival pack is sent automatically 3 days before arrival",
        result: "Reduces repetitive front desk questions",
      },
      {
        problem: "Upsells are left to chance",
        automation: "Upsell sequence is sent 5 days before arrival",
        result: "Creates a structured path for extra revenue",
      },
      {
        problem: "Reviews are asked for verbally at checkout",
        automation: "Review request is sent automatically 24h after check-out",
        result: "Helps increase review volume and direct-booking visibility",
      },
    ],
    architecture: {
      title: "Recommended automation architecture",
      description:
        "Booking.com / Airbnb / Direct Website / Phone routes guest enquiries into one flow. AI Guest Communication Assistant responds instantly, Booking Confirmation goes out automatically, No-Show Reminder runs at 48h and 24h, Pre-Arrival Pack is sent 3 days before arrival, Upsell Sequence triggers 5 days before arrival, Check-in Instructions go out on arrival day, Post-Stay Review Request is sent 24h after check-out, Rebooking Offer runs 30 days after check-out, and Guest History CRM + Analytics Dashboard keeps the property team informed.",
      flow: [
        "Booking.com / Airbnb / Direct Website / Phone",
        "AI Guest Communication Assistant",
        "Booking Confirmation",
        "No-Show Reminder",
        "Pre-Arrival Pack",
        "Upsell Sequence",
        "Check-in Instructions",
        "Post-Stay Review Request",
        "Rebooking Offer",
        "Guest History CRM + Analytics Dashboard",
      ],
      notes: [
        "All guest channels are centralised in one communication flow.",
        "The communication layer automates reminders, check-in support, and rebooking follow-up.",
        "The CRM stores guest history so the team can see repeat visitors and preferences.",
        "Analytics show which channels and periods drive the most direct bookings.",
      ],
    },
    modules: [
      {
        title: "Instant Enquiry Response",
        description: "Replies to every booking enquiry within 3 minutes with availability and pricing.",
        bullets: ["Availability", "Pricing", "Key details"],
      },
      {
        title: "No-Show Reduction",
        description: "Sends reminders 48h and 24h before arrival and prompts guests to confirm details.",
        bullets: ["48h reminder", "24h reminder", "Confirmation prompt"],
      },
      {
        title: "Pre-Arrival Guest Pack",
        description: "Sends check-in instructions, parking, local tips, WiFi code, and breakfast times automatically.",
        bullets: ["Check-in", "Parking", "WiFi", "Breakfast times"],
      },
      {
        title: "Pre-Arrival Upsell",
        description: "Offers late check-out, early check-in, breakfast upgrades, and local experiences before arrival.",
        bullets: ["Late check-out", "Early check-in", "Breakfast upgrade", "Local experiences"],
      },
      {
        title: "Post-Stay Engagement",
        description: "Automates review requests and rebooking offers after departure.",
        bullets: ["Google reviews", "TripAdvisor reviews", "Rebooking offer"],
      },
      {
        title: "Channel Reporting",
        description: "Monthly dashboard tracks enquiries, conversion, no-show rate, upsell revenue, and direct booking percentage.",
        bullets: ["Enquiry volume", "Conversion", "No-show rate", "Direct bookings"],
      },
    ],
    results: [
      {
        title: "More direct bookings",
        description: "Faster replies help capture guests before they book elsewhere.",
      },
      {
        title: "Lower no-show risk",
        description: "Structured reminders can reduce loss from no-shows and last-minute cancellations.",
      },
      {
        title: "More consistent guest communication",
        description: "Every guest gets the same pre-arrival and check-in information at the right time.",
      },
      {
        title: "More upsell revenue",
        description: "Helpful automated offers capture revenue that front desk staff do not always have time to ask for.",
      },
      {
        title: "More reviews",
        description: "Automated review requests are more reliable than asking verbally at checkout.",
      },
      {
        title: "Clearer booking performance data",
        description: "The dashboard shows which channels and periods produce the strongest direct bookings.",
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
          "No-show reduction and upsell revenue typically deliver measurable results within the first full month.",
      },
      {
        question: "How long does implementation take?",
        answer: "3-4 weeks including channel integration and communication flow setup.",
      },
      {
        question: "Can it integrate with Booking.com and Airbnb?",
        answer: "Channel integrations are assessed individually based on available notification and API options.",
      },
      {
        question: "Do I need to replace my PMS (Property Management System)?",
        answer: "No. Kubera works alongside your existing PMS and handles the communication layer, not the booking engine.",
      },
      {
        question: "Can it respond in Danish, English, and German?",
        answer: "Yes. The system can be configured to detect and respond in any relevant guest language.",
      },
      {
        question: "Will guests know they are communicating with AI?",
        answer: "The assistant is presented transparently. Complex requests are routed to front desk immediately.",
      },
      {
        question: "Does it handle cancellation requests?",
        answer: "The system can acknowledge cancellations and route to your team for policy application.",
      },
    ],
    cta: {
      label: "Final CTA",
      title: "Every empty room from a no-show or missed upsell is preventable.",
      body: "Kubera AI builds the system that captures that revenue automatically, from first enquiry to rebooking offer.",
      primary: {
        title: "Book a strategy call",
        description: "Map your guest communication and show where automation has the biggest commercial impact.",
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
    country: "denmark",
    countryLabel: "Denmark",
    industry: "recruitment-automation",
    industryLabel: "Recruitment Automation",
    url: "/en/solutions/denmark/recruitment-automation",
    seo: {
      title: "AI Automation for Recruitment Agencies in Denmark | Kubera AI",
      description:
        "AI automation for recruitment agencies in Denmark. Automate acknowledgements, candidate screening, interview scheduling, and client updates with Kubera AI.",
      canonical: "https://www.kubera-automation.com/en/solutions/denmark/recruitment-automation",
      type: "service",
    },
    hero: {
      label: "Recruitment Automation - Denmark",
      title: "Denmark's Labour Market Is Tight. The Agencies That Fill Roles Fastest Win the Fee.",
      subtitle:
        "Danish recruitment agencies operate in one of Europe's most competitive talent markets. Tech, renewable energy, pharma, and maritime roles are premium, but manual candidate processing is the bottleneck. Kubera AI builds automated candidate screening, scheduling, and client communication systems that let recruiters close more roles in the same working week. Built for independent recruitment agencies, executive search firms, tech and engineering recruitment desks, and contract recruitment in Denmark.",
      trustLine: "Built for independent recruitment agencies - executive search firms - tech and engineering recruitment desks - contract recruitment in Denmark",
      primaryCta: {
        title: "Book a strategy call",
        description: "Map your recruitment workflow and identify where automation has the highest commercial impact.",
        href: "/contacts",
      },
      secondaryCta: {
        title: "See how it works",
        description: "Review the service hub before scoping the workflow.",
        href: "/services",
      },
      previewNodes: ["LinkedIn / Jobindex / Ofir / Direct Application", "Application Acknowledgement", "AI Pre-Screening", "CRM", "Interview Scheduling", "Placement Analytics Dashboard"],
    },
    problems: [
      {
        title: "High-volume roles produce too many applications",
        description: "A single role can generate 300 to 500 applications and screening takes days.",
      },
      {
        title: "Candidates ghost between stages",
        description: "Follow-up is inconsistent, so candidates disappear between screening and interview.",
      },
      {
        title: "Scheduling takes too many messages",
        description: "Booking interviews often requires 5 to 8 messages back and forth.",
      },
      {
        title: "Clients do not get regular updates",
        description: "Hiring managers stop calling when pipeline communication is not structured.",
      },
      {
        title: "CRM data is not kept current",
        description: "Historical data becomes stale because updates happen manually and irregularly.",
      },
    ],
    problemSolution: [
      {
        problem: "Applications pile up faster than recruiters can read them",
        automation: "Applications are acknowledged within minutes and pre-screening starts automatically",
        result: "Can help reduce first-response lag",
      },
      {
        problem: "Candidates ghost between screening and interview",
        automation: "Automated candidate communication keeps the process moving",
        result: "Supports better candidate retention through the funnel",
      },
      {
        problem: "Interview booking requires long email chains",
        automation: "Candidate picks a slot directly in chat",
        result: "Reduces scheduling friction",
      },
      {
        problem: "Client updates are irregular",
        automation: "Automated weekly update goes to the hiring manager",
        result: "Improves client confidence and visibility",
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
        "LinkedIn / Jobindex / Ofir / Direct Application feeds the workflow. Application Acknowledgement confirms receipt instantly. AI Pre-Screening asks role-specific questions and scores candidates. Candidate Scoring and Tagging writes to CRM. Interview Scheduling syncs the calendar. Interview Confirmation + Prep Pack goes out automatically. Post-Interview Follow-up handles candidate and client messages. Offer Stage Coordination manages the final step, Contractor Re-engagement starts before contract end, and the Placement Analytics Dashboard tracks performance.",
      flow: [
        "LinkedIn / Jobindex / Ofir / Direct Application",
        "Application Acknowledgement",
        "AI Pre-Screening",
        "Candidate Scoring and Tagging",
        "Interview Scheduling",
        "Interview Confirmation + Prep Pack",
        "Post-Interview Follow-up",
        "Offer Stage Coordination",
        "Contractor Re-engagement",
        "Placement Analytics Dashboard",
      ],
      notes: [
        "Recruiters stay focused on relationships, interviews, and offers.",
        "The workflow handles acknowledgements, screening, scheduling, and client updates.",
        "Candidate communication remains structured so drop-off is lower.",
        "CRM records stay current without manual data entry after every interaction.",
      ],
    },
    modules: [
      {
        title: "Instant Acknowledgement",
        description: "Every application gets a same-day confirmation within minutes.",
        bullets: ["Instant reply", "Role-specific messaging", "No manual chasing"],
      },
      {
        title: "AI Pre-Screening",
        description: "Role-specific questions are sent automatically and answers are scored.",
        bullets: ["Role questions", "Scoring", "Candidate ranking"],
      },
      {
        title: "Interview Scheduler",
        description: "Shortlisted candidates self-book from the recruiter's calendar.",
        bullets: ["Calendar sync", "Confirmation", "Prep pack"],
      },
      {
        title: "Stage Follow-up",
        description: "Automated messages go to candidates and internal notifications go to recruiters after each stage.",
        bullets: ["Candidate follow-up", "Recruiter notification", "No missed handoffs"],
      },
      {
        title: "Client Communication",
        description: "Weekly pipeline updates keep hiring managers informed without recruiter effort.",
        bullets: ["Weekly update", "Pipeline status", "Client visibility"],
      },
      {
        title: "Contractor Re-engagement",
        description: "Automated outreach begins before a contractor's assignment ends.",
        bullets: ["Extension possibility", "New opportunities", "Referrals"],
      },
    ],
    results: [
      {
        title: "Faster screening",
        description: "Recruiters spend less time on first-pass admin and more time on serious candidates.",
      },
      {
        title: "Less ghosting",
        description: "Consistent communication keeps candidates engaged between stages.",
      },
      {
        title: "Better client retention",
        description: "Regular updates make clients feel informed and supported.",
      },
      {
        title: "More placements per recruiter",
        description: "Automation frees up time so recruiters can close more roles in the same working week.",
      },
      {
        title: "Cleaner CRM records",
        description: "Every candidate interaction is logged automatically.",
      },
      {
        title: "Higher contractor reactivation",
        description: "The system reaches contractors before the end of the contract rather than after the fact.",
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
        title: "High-volume pre-screening automation for tech recruitment",
        description: "Closest-fit case for candidate screening and ranking.",
        href: "/cases/hr-hiring",
      },
      {
        title: "Automated interview scheduling with CRM sync",
        description: "Relevant architecture example for interview booking and follow-up.",
        href: "/cases/internal-processes",
      },
      {
        title: "Contractor re-engagement sequence",
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
        answer:
          "Recruitment automation starts at EUR3,000-EUR5,000 setup. Monthly support starts from EUR249/month.",
      },
      {
        question: "How fast is ROI?",
        answer: "One additional placement per month typically covers the full annual cost.",
      },
      {
        question: "How long does implementation take?",
        answer: "4-5 weeks including CRM integration and workflow configuration.",
      },
      {
        question: "Do I need to replace my ATS?",
        answer: "No. Kubera integrates with Bullhorn, Vincere, TeamTailor, and other ATS tools.",
      },
      {
        question: "Can it handle Danish and English separately?",
        answer: "Yes. Communication flows can be configured per language based on role or client.",
      },
      {
        question: "Will candidates know they are interacting with AI?",
        answer: "The system is transparent. Complex or sensitive conversations are routed to a recruiter.",
      },
      {
        question: "Can it handle both permanent and contract recruitment?",
        answer: "Yes. Separate workflows can be built for each model.",
      },
      {
        question: "Does it work for niche roles like engineers or cleantech specialists?",
        answer: "Yes. Pre-screening questions are configured per role and can be as specific as needed.",
      },
    ],
    cta: {
      label: "Final CTA",
      title: "Denmark's best candidates are deciding between three agencies. The one that responds best gets the placement.",
      body: "Kubera AI builds the communication system that makes that agency yours.",
      primary: {
        title: "Book a strategy call",
        description: "Map your recruitment workflow and show where automation has the biggest commercial impact.",
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
    country: "denmark",
    countryLabel: "Denmark",
    industry: "cleantech-automation",
    industryLabel: "Cleantech Automation",
    url: "/en/solutions/denmark/cleantech-automation",
    seo: {
      title: "AI Automation for Cleantech SMEs in Denmark | Kubera AI",
      description:
        "AI automation for cleantech SMEs in Denmark. Automate project reporting, stakeholder communication, compliance alerts, and client onboarding with Kubera AI.",
      canonical: "https://www.kubera-automation.com/en/solutions/denmark/cleantech-automation",
      type: "service",
    },
    hero: {
      label: "Cleantech Automation - Denmark",
      title: "Denmark Leads the World in Renewable Energy. The SMEs Behind It Are Still Running on Spreadsheets.",
      subtitle:
        "Denmark's cleantech ecosystem is world-class - Vestas, Orsted, and hundreds of specialist SMEs in wind, solar, and energy efficiency. But many of those SMEs still coordinate projects in spreadsheets, write EU grant reports manually, and track stakeholder communication in email threads. Kubera AI builds workflow and reporting automation that lets cleantech SMEs scale operations without scaling admin headcount. Built for cleantech startups and SMEs, renewable energy suppliers, energy efficiency consultancies, and sustainability project managers in Denmark and the Nordics.",
      trustLine: "Built for cleantech startups and SMEs - renewable energy suppliers - energy efficiency consultancies - sustainability project managers in Denmark and the Nordics",
      primaryCta: {
        title: "Book a strategy call",
        description: "Map your current project workflows and identify what to automate first.",
        href: "/contacts",
      },
      secondaryCta: {
        title: "See how it works",
        description: "Review the service hub before scoping the workflow.",
        href: "/services",
      },
      previewNodes: ["New Project / Grant / Client", "Project Onboarding Flow", "Stakeholder Communication Schedule", "EU Reporting Data Collection", "CRM", "Project Analytics Dashboard"],
    },
    problems: [
      {
        title: "EU grant reporting consumes too much time",
        description: "Manual data collection and formatting can take 20 to 30 hours every month.",
      },
      {
        title: "Stakeholder updates are inconsistent",
        description: "Investors, partners, and clients do not receive updates on a defined schedule.",
      },
      {
        title: "Client onboarding is reinvented for every project",
        description: "The team repeats the same setup steps instead of following a standard process.",
      },
      {
        title: "Internal tasks fall through the cracks",
        description: "Project coordination happens in email threads instead of a structured workflow.",
      },
      {
        title: "Compliance deadlines are easy to miss",
        description: "Deadlines sit in shared calendars or spreadsheets that are not always maintained.",
      },
    ],
    problemSolution: [
      {
        problem: "Grant reporting takes 20-30 hours per month",
        automation: "Data is collected automatically and formatted for review",
        result: "Can help recover a meaningful block of billable or delivery time",
      },
      {
        problem: "Stakeholder updates are sent inconsistently",
        automation: "Updates go out automatically on a defined schedule",
        result: "Supports more reliable communication with clients and partners",
      },
      {
        problem: "Client onboarding is different every project",
        automation: "Standard onboarding workflow is triggered on contract sign",
        result: "Reduces friction and avoids reinventing the process each time",
      },
      {
        problem: "Internal tasks fall through the cracks",
        automation: "Tasks are assigned, tracked, and escalated automatically",
        result: "Improves project visibility and ownership",
      },
      {
        problem: "Compliance deadlines are tracked manually",
        automation: "Alerts are triggered 30, 14, and 7 days before deadline",
        result: "Helps prevent missed submissions",
      },
    ],
    architecture: {
      title: "Recommended automation architecture",
      description:
        "New Project / Grant / Client starts the workflow. Project Onboarding Flow standardises the setup. Task Assignment + Internal Coordination routes work internally. Stakeholder Communication Schedule sends weekly or monthly updates automatically. EU Reporting Data Collection gathers required data for review. Compliance Deadline Alerts trigger before deadlines, Project Completion + Client Sign-off Flow closes the loop, Post-Project Review Trigger prompts learning, and the CRM + Project Analytics Dashboard keeps performance visible.",
      flow: [
        "New Project / Grant / Client",
        "Project Onboarding Flow",
        "Task Assignment + Internal Coordination",
        "Stakeholder Communication Schedule",
        "EU Reporting Data Collection",
        "Compliance Deadline Alerts",
        "Project Completion + Client Sign-off Flow",
        "Post-Project Review Trigger",
        "CRM + Project Analytics Dashboard",
      ],
      notes: [
        "The workflow is designed for project-based cleantech businesses with recurring reporting and stakeholder communication.",
        "Standard onboarding reduces the time spent recreating the same setup for every project.",
        "Compliance alerts are scheduled ahead of the deadline rather than relying on manual calendar checks.",
        "Project analytics keep budget, status, and risk visible in one place.",
      ],
    },
    modules: [
      {
        title: "Project Onboarding",
        description: "Triggers a standard checklist, kick-off booking, and client welcome when a project is confirmed.",
        bullets: ["Documents requested", "Team assigned", "Kick-off booked"],
      },
      {
        title: "Stakeholder Communication",
        description: "Sends automated weekly or monthly updates to investors, partners, and clients.",
        bullets: ["Scheduled updates", "Template-based", "Review before send"],
      },
      {
        title: "EU Reporting Assistant",
        description: "Collects required data points and formats them into a report template for review.",
        bullets: ["Data collection", "Report formatting", "Review step"],
      },
      {
        title: "Compliance Deadline Tracking",
        description: "Tracks renewals and filing deadlines with 30, 14, and 7 day alerts.",
        bullets: ["Deadline alerts", "No missed submissions", "Renewal tracking"],
      },
      {
        title: "Sales Pipeline",
        description: "Captures, qualifies, and tracks project enquiries in CRM with automated follow-up.",
        bullets: ["Enquiry capture", "Follow-up", "Pipeline visibility"],
      },
      {
        title: "Project Analytics",
        description: "Dashboard shows active projects, budget vs actual, team utilisation, and milestone completion.",
        bullets: ["Status tracking", "Budget vs actual", "Team utilisation"],
      },
    ],
    results: [
      {
        title: "Less reporting overhead",
        description: "EU reporting data collection and formatting take far less manual time.",
      },
      {
        title: "More reliable stakeholder updates",
        description: "Communication runs on a schedule instead of depending on memory.",
      },
      {
        title: "Standardised onboarding",
        description: "Every new project starts the same way, which reduces friction and confusion.",
      },
      {
        title: "Better task visibility",
        description: "Internal tasks are assigned and tracked automatically so fewer items are missed.",
      },
      {
        title: "Lower compliance risk",
        description: "Deadline alerts reduce the chance of missed submissions or renewals.",
      },
      {
        title: "Clearer project and pipeline data",
        description: "Management can see which projects are on budget, on schedule, and at risk.",
      },
    ],
    services: [
      {
        title: "Workflow Automation",
        description: "Multi-step process automation across tools.",
        href: "/services",
      },
      {
        title: "Internal Process Automation",
        description: "Document flows, task routing, team coordination.",
        href: "/services",
      },
      {
        title: "Reporting & Analytics Automation",
        description: "Automated dashboards and performance reports.",
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
        title: "EU reporting automation for sustainability consultancy",
        description: "Closest-fit case for reporting and stakeholder communication workflows.",
        href: "/cases/finance-documents",
      },
      {
        title: "Project onboarding workflow automation",
        description: "Relevant architecture example for standardised setup and task routing.",
        href: "/cases/internal-processes",
      },
      {
        title: "Compliance deadline tracking system",
        description: "Useful for deadline alerts and process visibility.",
        href: "/cases/transport-logistics",
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
          "Cleantech operations automation starts at EUR3,000-EUR6,000 depending on scope. Monthly support starts from EUR249-EUR399/month.",
      },
      {
        question: "How fast is ROI?",
        answer:
          "EU reporting automation typically pays for itself within 3 to 4 months of recovered team time.",
      },
      {
        question: "How long does implementation take?",
        answer: "4-6 weeks for a full operations setup. Simpler onboarding-only workflows can be live in 2-3 weeks.",
      },
      {
        question: "Do I need to replace our existing project management tool?",
        answer: "No. Kubera integrates with Notion, Asana, Monday.com, Jira, and others via API or native integrations.",
      },
      {
        question: "Can it handle EU grant reporting for Horizon Europe or other specific programmes?",
        answer: "The system is configured for your specific reporting requirements during setup.",
      },
      {
        question: "Does it work for both product and service-based cleantech companies?",
        answer: "Yes. The architecture adapts to project-based, product-based, or consulting models.",
      },
      {
        question: "Is this relevant for companies outside Denmark?",
        answer: "Yes. The same system applies to cleantech SMEs across Sweden, Finland, Germany, and the Netherlands.",
      },
      {
        question: "Can it help with investor reporting as well as EU reporting?",
        answer: "Yes. Investor update templates and schedules are a standard module.",
      },
    ],
    cta: {
      label: "Final CTA",
      title: "Denmark is building the world's cleantech future. Your operations should be as efficient as your technology.",
      body: "Kubera AI builds the workflow and reporting automation that gives cleantech SMEs their admin hours back.",
      primary: {
        title: "Book a strategy call",
        description: "Map your current project workflows and show what to automate first.",
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
