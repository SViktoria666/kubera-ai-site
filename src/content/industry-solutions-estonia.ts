import type { IndustrySolution } from "./industry-solutions";

export const estoniaIndustrySolutions: IndustrySolution[] = [
  {
    locale: "en",
    country: "estonia",
    countryLabel: "Estonia",
    industry: "e-commerce-automation",
    industryLabel: "E-commerce Automation",
    url: "/en/solutions/estonia/e-commerce-automation",
    seo: {
      title: "AI Automation for E-commerce Businesses in Estonia | Kubera AI",
      description:
        "AI automation for e-commerce businesses in Estonia. Automate customer support, cart recovery, returns, and post-purchase follow-up with Kubera AI.",
      canonical: "https://www.kubera-automation.com/en/solutions/estonia/e-commerce-automation",
      type: "service",
    },
    hero: {
      label: "E-commerce Automation - Estonia",
      title: "Your Support Team Is Answering 'Where Is My Order?' All Day. There's a Better Use of Their Time.",
      subtitle:
        "Estonian e-commerce businesses are scaling fast, but support volume scales faster than headcount. Kubera AI builds automated customer support, order management, and re-engagement systems that handle the repetitive load so your team handles exceptions, not queues. Built for Shopify and WooCommerce stores, DTC brands, multi-channel sellers, and subscription e-commerce businesses in Estonia and the Baltics.",
      trustLine: "Built for Shopify and WooCommerce stores - DTC brands - multi-channel sellers - subscription e-commerce businesses in Estonia and the Baltics",
      primaryCta: {
        title: "Book a strategy call",
        description: "Audit your current e-commerce flows and identify where automation has the most commercial impact.",
        href: "/contacts",
      },
      secondaryCta: {
        title: "See how it works",
        description: "Review the service hub before scoping the workflow.",
        href: "/services",
      },
      previewNodes: ["Shopify / WooCommerce / Custom Store", "AI Customer Support", "Order Status Module", "Returns & Exchange Flow", "CRM", "Support Analytics Dashboard"],
    },
    problems: [
      {
        title: "Most tickets are order status questions",
        description: "Support teams spend their day answering the same tracking question over and over again.",
      },
      {
        title: "Cart abandonment stays high without recovery",
        description: "Without an automated sequence, abandoned carts never get a second chance.",
      },
      {
        title: "Returns and exchanges are handled manually",
        description: "Refund and exchange requests turn into long email threads instead of structured flows.",
      },
      {
        title: "Post-purchase follow-up is minimal",
        description: "Many stores rely on a single confirmation email and nothing after that.",
      },
      {
        title: "Support response times get slow during peak periods",
        description: "During busy periods, customers wait 24 to 48 hours and leave negative reviews.",
      },
    ],
    problemSolution: [
      {
        problem: "Order status questions dominate support",
        automation: "AI responds instantly with a tracking link",
        result: "Can help reduce repetitive support load",
      },
      {
        problem: "Cart abandonment is not recovered",
        automation: "3-step recovery sequence at 1h, 24h, and 72h",
        result: "Supports recovery of otherwise lost revenue",
      },
      {
        problem: "Returns are handled by manual email threads",
        automation: "Structured return request flow with routing",
        result: "Reduces back-and-forth and keeps requests organised",
      },
      {
        problem: "Follow-up stops after the confirmation email",
        automation: "Automated post-purchase sequence with review, upsell, and loyalty triggers",
        result: "Helps drive repeat purchase and review collection",
      },
      {
        problem: "Peak-period response time is too slow",
        automation: "24/7 AI support across WhatsApp and web chat",
        result: "Can reduce response time to within 2 minutes",
      },
    ],
    architecture: {
      title: "Recommended automation architecture",
      description:
        "Shopify / WooCommerce / Custom Store feeds the workflow. AI Customer Support handles WhatsApp and web chat. Order Status Module syncs tracking data in real time. Returns & Exchange Flow structures request handling. Cart Abandonment Recovery runs the 3-step sequence. Post-Purchase Sequence sends review, upsell, and loyalty triggers. CRM stores customer history and LTV data, and the Support & Sales Analytics Dashboard tracks ticket volume, recovery rate, and sequence performance.",
      flow: [
        "Shopify / WooCommerce / Custom Store",
        "AI Customer Support (WhatsApp + Web Chat)",
        "Order Status Module",
        "Returns & Exchange Flow",
        "Cart Abandonment Recovery",
        "Post-Purchase Sequence",
        "CRM",
        "Support & Sales Analytics Dashboard",
      ],
      notes: [
        "The assistant handles routine order and support questions while complex issues route to the team.",
        "Returns and exchanges remain structured so the customer does not need to repeat the same details.",
        "Customer history is stored in the CRM for repeat purchase and LTV tracking.",
        "Recovery and post-purchase sequences are timed automatically so support does not rely on manual follow-up.",
      ],
    },
    modules: [
      {
        title: "Order Status Assistant",
        description: "Answers 'where is my order?' requests with an instant tracking link.",
        bullets: ["24/7 support", "Tracking link", "Order lookup"],
      },
      {
        title: "Cart Abandonment Recovery",
        description: "Runs a three-message sequence after cart abandonment.",
        bullets: ["1 hour reminder", "24 hour social proof", "72 hour incentive"],
      },
      {
        title: "Returns & Exchange Flow",
        description: "Collects the return reason, order number, and preferred resolution in one structured request.",
        bullets: ["Structured form", "Automated routing", "No back-and-forth"],
      },
      {
        title: "Post-Purchase Sequence",
        description: "Automates review requests, product tips, upsells, and loyalty check-ins.",
        bullets: ["Review request", "Upsell trigger", "Loyalty trigger"],
      },
      {
        title: "VIP Customer Detection",
        description: "Flags high-value customers automatically for a personalised communication track.",
        bullets: ["Order value", "Purchase frequency", "VIP routing"],
      },
      {
        title: "Support Analytics",
        description: "Weekly report on ticket volume, response time, resolution rate, and recovery performance.",
        bullets: ["Ticket volume", "Response time", "Recovery rate"],
      },
    ],
    results: [
      {
        title: "Lower routine support load",
        description: "Order status and simple support requests can be handled automatically around the clock.",
      },
      {
        title: "More recovered carts",
        description: "A structured follow-up sequence gives abandoned carts a second chance.",
      },
      {
        title: "More efficient returns handling",
        description: "Customers submit the right information up front, reducing manual processing time.",
      },
      {
        title: "Better repeat purchase activity",
        description: "Post-purchase follow-up keeps customers engaged after the first order.",
      },
      {
        title: "Fewer slow-response reviews",
        description: "Faster support during peak periods reduces the chance of negative feedback.",
      },
      {
        title: "Clearer customer and revenue visibility",
        description: "The dashboard shows which products and campaigns produce the most repeat buyers.",
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
        title: "Customer Support Automation",
        description: "Tiered support with AI first, human second.",
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
        title: "AI customer support assistant for online retailer",
        description: "Closest-fit case for e-commerce support and order handling.",
        href: "/cases/ecommerce-logistics",
      },
      {
        title: "Cart abandonment recovery sequence",
        description: "Relevant architecture example for recovery and follow-up timing.",
        href: "/cases/customer-communications",
      },
      {
        title: "Post-purchase loyalty automation",
        description: "Useful for review collection and retention logic.",
        href: "/cases/content-marketing",
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
          "E-commerce automation packages start at EUR2,500-EUR4,000 setup depending on the modules needed. Monthly support starts from EUR249/month.",
      },
      {
        question: "How fast is ROI?",
        answer:
          "Cart abandonment recovery typically shows measurable revenue impact within the first 30 days. Support cost reduction is visible immediately.",
      },
      {
        question: "How long does implementation take?",
        answer: "3-4 weeks for a standard setup including platform integration, cart recovery, and post-purchase flows.",
      },
      {
        question: "Do I need to replace my e-commerce platform?",
        answer: "No. Kubera integrates with Shopify, WooCommerce, and others via native APIs.",
      },
      {
        question: "Can Kubera work with my existing email tool (Klaviyo, Mailchimp)?",
        answer: "Yes. The workflow can work alongside your existing email tool or replace manual sequences within it.",
      },
      {
        question: "Does this work for both physical products and digital goods?",
        answer: "Yes. Flows are configured based on product type and order structure.",
      },
      {
        question: "Will customers know they are talking to AI?",
        answer: "The assistant is clearly presented as AI. Complex issues are routed to a human.",
      },
      {
        question: "Can it handle multiple languages?",
        answer: "Yes. The assistant can be configured for Estonian, English, Russian, and other relevant languages.",
      },
    ],
    cta: {
      label: "Final CTA",
      title: "Every unanswered cart abandonment is revenue your competitor collects instead.",
      body: "Kubera AI builds the system that recovers it automatically, 24/7, in any language.",
      primary: {
        title: "Book a strategy call",
        description: "Audit your current e-commerce flows and map the best automation priorities.",
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
    country: "estonia",
    countryLabel: "Estonia",
    industry: "saas-startup-automation",
    industryLabel: "SaaS Startup Automation",
    url: "/en/solutions/estonia/saas-startup-automation",
    seo: {
      title: "AI Automation for SaaS Startups in Estonia | Kubera AI",
      description:
        "AI automation for SaaS startups in Estonia. Qualify leads, book demos, automate onboarding, and reduce CRM admin with Kubera AI.",
      canonical: "https://www.kubera-automation.com/en/solutions/estonia/saas-startup-automation",
      type: "service",
    },
    hero: {
      label: "SaaS Startup Automation - Estonia",
      title: "Estonia Has Built World-Class Tech. Now Automate the Sales Process Behind It.",
      subtitle:
        "Skype, Wise, Bolt - Estonia punches above its weight in global tech. But most Estonian SaaS startups are still qualifying leads manually, following up inconsistently, and updating CRMs by hand. Kubera AI is Tallinn-based and builds the automation systems that let your commercial team focus on growth, not admin. Built for SaaS companies, B2B software startups, tech scale-ups, and Estonian e-Residency companies doing international sales.",
      trustLine: "Built for SaaS companies - B2B software startups - tech scale-ups - Estonian e-Residency companies doing international sales",
      primaryCta: {
        title: "Book a strategy call",
        description: "Map your funnel and identify where automation has the highest impact.",
        href: "/contacts",
      },
      secondaryCta: {
        title: "See how it works",
        description: "Review the service hub before scoping the workflow.",
        href: "/services",
      },
      previewNodes: ["Website / Trial Sign-up / Ads / LinkedIn", "AI Lead Qualifier", "Demo Booking", "CRM", "Churn Risk Detection", "Analytics Dashboard"],
    },
    problems: [
      {
        title: "Trial sign-ups do not convert well",
        description: "Many trial users never receive a proper onboarding sequence.",
      },
      {
        title: "Demo requests sit unanswered",
        description: "A delay of a few hours gives prospects time to move on to another vendor.",
      },
      {
        title: "Post-demo follow-up is inconsistent",
        description: "The next step depends on whether the rep remembers to send it.",
      },
      {
        title: "CRM data is unreliable",
        description: "The pipeline is out of date because updates are not written in real time.",
      },
      {
        title: "Churn is noticed too late",
        description: "Usage-based signals are not turned into re-engagement actions quickly enough.",
      },
    ],
    problemSolution: [
      {
        problem: "Trial users do not receive structured onboarding",
        automation: "14-day onboarding flow starts automatically on sign-up",
        result: "Helps improve early-stage engagement",
      },
      {
        problem: "Demo requests sit unanswered",
        automation: "AI responds within 3 minutes and books the demo in the same conversation",
        result: "Can help reduce lead loss during the highest-intent stage",
      },
      {
        problem: "Post-demo follow-up is sporadic",
        automation: "5-step automated follow-up sequence runs after each demo",
        result: "Supports consistent next-step communication",
      },
      {
        problem: "CRM updates are manual",
        automation: "Every touchpoint is logged to the CRM in real time",
        result: "Improves pipeline accuracy and forecasting",
      },
      {
        problem: "Churn risk is discovered too late",
        automation: "Usage patterns trigger re-engagement automatically",
        result: "Helps recover trials before they expire",
      },
    ],
    architecture: {
      title: "Recommended automation architecture",
      description:
        "Website / Trial Sign-up / Ads / LinkedIn captures inbound interest. AI Lead Qualifier checks budget, use case, and team size. Demo Booking syncs the calendar. CRM stores tagged and scored leads. Trial Onboarding Sequence runs on Day 1, 3, 7, and 14. Post-Demo Follow-up runs after every demo. Closed Won triggers onboarding. Churn Risk Detection starts re-engagement, and the Analytics Dashboard tracks lead, demo, and close performance.",
      flow: [
        "Website / Trial Sign-up / Ads / LinkedIn",
        "AI Lead Qualifier",
        "Demo Booking",
        "CRM",
        "Trial Onboarding Sequence",
        "Post-Demo Follow-up",
        "Closed Won -> Onboarding Trigger",
        "Churn Risk Detection -> Re-engagement",
        "Analytics Dashboard",
      ],
      notes: [
        "Sales picks up the conversation only when the lead is demo-ready.",
        "Trial onboarding is structured so the customer knows what to do next.",
        "CRM remains the system of record for qualification score, source, and stage.",
        "Usage-based triggers help the team re-engage before churn becomes permanent.",
      ],
    },
    modules: [
      {
        title: "Trial Onboarding Flow",
        description: "Day 1, Day 3, Day 7, and Day 14 messages are personalised automatically.",
        bullets: ["Welcome", "Use case prompt", "Feature highlight", "Upgrade nudge"],
      },
      {
        title: "Demo Booking System",
        description: "Qualified leads can book a demo directly in the AI conversation.",
        bullets: ["Calendar sync", "Confirmation", "1-hour reminder"],
      },
      {
        title: "Lead Qualification",
        description: "AI asks what problem the prospect is solving, their team size, tool stack, and timeline.",
        bullets: ["Problem", "Team size", "Current tool", "Decision timeline"],
      },
      {
        title: "CRM Integration",
        description: "Every touchpoint is logged without manual entry.",
        bullets: ["Sign-up", "Qualification", "Demo date", "Demo outcome"],
      },
      {
        title: "Churn Risk Detection",
        description: "Usage-based re-engagement starts when a trial user stalls.",
        bullets: ["Usage patterns", "Re-engagement trigger", "Save trials"],
      },
      {
        title: "Revenue Analytics",
        description: "Weekly dashboard shows trials, demos, conversion, churn, deal size, and channel attribution.",
        bullets: ["Trials started", "Demos booked", "Demo-to-close", "Channel attribution"],
      },
    ],
    results: [
      {
        title: "Higher trial engagement",
        description: "A structured onboarding flow gives new users a clear next step.",
      },
      {
        title: "Faster demo response",
        description: "Responding in minutes rather than hours keeps high-intent prospects in the pipeline.",
      },
      {
        title: "More consistent follow-up",
        description: "The team no longer depends on memory for post-demo outreach.",
      },
      {
        title: "Cleaner CRM records",
        description: "Real-time logging improves forecasting and deal visibility.",
      },
      {
        title: "Lower churn risk",
        description: "Usage-triggered re-engagement helps recover trials before they expire.",
      },
      {
        title: "Better channel attribution",
        description: "The dashboard shows which channels create the strongest pipeline.",
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
        description: "Closest-fit case for demo qualification and lead routing.",
        href: "/cases/sales-leads",
      },
      {
        title: "Automated demo booking flow with CRM sync",
        description: "Relevant architecture example for pipeline handling.",
        href: "/cases/customer-communications",
      },
      {
        title: "Churn risk detection and re-engagement flow",
        description: "Useful for usage-triggered follow-up logic.",
        href: "/cases/internal-processes",
      },
      {
        title: "Landing page + AI + CRM lead automation",
        description: "Closest-fit system example for product-led growth.",
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
          "SaaS automation setups start at EUR3,000-EUR5,000. Monthly support starts from EUR249/month.",
      },
      {
        question: "How fast is ROI?",
        answer:
          "Onboarding sequence improvements are measurable within one full trial cohort, typically 14 to 30 days.",
      },
      {
        question: "How long does implementation take?",
        answer: "3-5 weeks depending on CRM complexity and the number of modules.",
      },
      {
        question: "Do I need to replace my CRM?",
        answer: "No. Kubera integrates with HubSpot, Pipedrive, Salesforce, Intercom, and others.",
      },
      {
        question: "Can this work with our existing product analytics (Mixpanel, Amplitude)?",
        answer: "Yes. Usage-based triggers can be built on top of existing analytics events.",
      },
      {
        question: "Does Kubera understand SaaS-specific metrics?",
        answer: "Yes. The team works with SaaS clients and understands trial conversion, MRR, churn, and expansion revenue logic.",
      },
      {
        question: "Can it handle multilingual users?",
        answer: "Yes. The system can respond in Estonian, English, Russian, and other languages.",
      },
      {
        question: "We're pre-revenue - is this too early for us?",
        answer: "It depends on lead volume. Below 20 inbound leads per month, it is probably too early. Above that, the ROI case is clear.",
      },
    ],
    cta: {
      label: "Final CTA",
      title: "Estonia built Skype and Wise. Your sales process should be just as good as your product.",
      body: "Kubera AI is Tallinn-based and builds the automation infrastructure that scales with your commercial ambitions.",
      primary: {
        title: "Book a strategy call",
        description: "Map your funnel and show exactly where automation has the highest impact.",
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
    country: "estonia",
    countryLabel: "Estonia",
    industry: "real-estate-automation",
    industryLabel: "Real Estate Automation",
    url: "/en/solutions/estonia/real-estate-automation",
    seo: {
      title: "AI Automation for Real Estate Agencies in Estonia | Kubera AI",
      description:
        "AI automation for real estate agencies in Estonia and the Baltics. Respond in Estonian, Russian, and English, qualify leads, and schedule viewings automatically.",
      canonical: "https://www.kubera-automation.com/en/solutions/estonia/real-estate-automation",
      type: "service",
    },
    hero: {
      label: "Real Estate Automation - Estonia",
      title: "Tallinn's Property Market Moves Fast. Your Response Time Needs to Match.",
      subtitle:
        "Baltic real estate agencies face a specific challenge: buyers and tenants enquire in Estonian, Russian, and English, often after hours, and expect a fast, professional response. Kubera AI is based in Tallinn and builds multilingual enquiry and qualification systems that keep your agents focused on closings, not admin. Built for independent estate agencies, individual agents, property management companies, and agencies serving international buyers in Estonia, Latvia, and Lithuania.",
      trustLine: "Built for independent estate agencies - individual agents - property management companies - agencies serving international buyers in Estonia, Latvia, and Lithuania",
      primaryCta: {
        title: "Book a strategy call",
        description: "Map your current enquiry flow and show what multilingual automation looks like in practice.",
        href: "/contacts",
      },
      secondaryCta: {
        title: "See how it works",
        description: "Review the service hub before scoping the workflow.",
        href: "/services",
      },
      previewNodes: ["KV.ee / City24.ee / Website / Direct WhatsApp", "AI Multilingual Response", "Buyer / Tenant Qualification", "CRM", "Viewing Scheduler", "Listing Dashboard"],
    },
    problems: [
      {
        title: "Enquiries arrive in three languages",
        description: "Agents can only respond professionally in one or two languages, so some leads wait too long.",
      },
      {
        title: "Weekend and evening enquiries go unanswered",
        description: "The market is active outside office hours, but replies often wait until Monday.",
      },
      {
        title: "Unqualified leads take up too much time",
        description: "Agents waste time on prospects with the wrong budget or no real intent.",
      },
      {
        title: "Viewing scheduling takes multiple messages",
        description: "A single appointment can take 4 to 6 messages to confirm.",
      },
      {
        title: "International buyers need more patience and follow-up",
        description: "Foreign buyers often need more touchpoints and clearer process information.",
      },
    ],
    problemSolution: [
      {
        problem: "Enquiries arrive in three languages",
        automation: "AI detects language and responds in Estonian, Russian, or English",
        result: "Supports professional communication regardless of language",
      },
      {
        problem: "Weekend and evening enquiries wait until Monday",
        automation: "AI responds within 3 minutes, 24/7",
        result: "Can help improve response time during the highest-intent period",
      },
      {
        problem: "Unqualified leads consume agent time",
        automation: "Buyer and tenant qualification asks budget, timeline, type, and area",
        result: "Reduces time spent on low-intent leads",
      },
      {
        problem: "Viewing scheduling is manual",
        automation: "Buyer picks a slot directly in conversation",
        result: "Cuts down back-and-forth and speeds up booking",
      },
      {
        problem: "International buyers need more follow-up",
        automation: "Extended follow-up sequence for international buyers",
        result: "Helps keep foreign leads engaged through the decision process",
      },
    ],
    architecture: {
      title: "Recommended automation architecture",
      description:
        "KV.ee / City24.ee / Website / Direct WhatsApp feeds the workflow. AI Multilingual Response handles ET, RU, and EN. Buyer / Tenant Qualification captures budget, timeline, type, and area. CRM stores the lead and language tags. Viewing Scheduler books appointments, Viewing Reminder goes out 24 hours before, Post-Viewing Follow-up runs on Day 1, Day 3, and Day 7, International Buyer Track extends the sequence for foreign buyers, and the Listing Performance Dashboard tracks enquiry and conversion rates.",
      flow: [
        "KV.ee / City24.ee / Website / Direct WhatsApp",
        "AI Multilingual Response (ET / RU / EN)",
        "Buyer / Tenant Qualification",
        "CRM",
        "Viewing Scheduler",
        "Viewing Reminder",
        "Post-Viewing Follow-up",
        "International Buyer Track",
        "Listing Performance Dashboard",
      ],
      notes: [
        "The workflow responds in the language of the first message.",
        "Agents keep control over viewings and negotiations while automation handles the repetitive coordination.",
        "International buyers get a longer follow-up sequence to reflect slower decision cycles.",
        "CRM updates stay in sync so listing performance can be measured properly.",
      ],
    },
    modules: [
      {
        title: "Multilingual Enquiry Response",
        description: "Detects Estonian, Russian, or English and answers in the same language.",
        bullets: ["Language detection", "Same-language response", "24/7 coverage"],
      },
      {
        title: "Buyer and Tenant Qualification",
        description: "Separate qualification flows for buyers, tenants, and landlords.",
        bullets: ["Budget", "Timeline", "Property type", "Area"],
      },
      {
        title: "Viewing Scheduler",
        description: "Lets the prospect pick a time slot directly in chat.",
        bullets: ["Calendar sync", "Confirmation", "24-hour reminder"],
      },
      {
        title: "International Buyer Track",
        description: "Extended follow-up sequence for international buyers.",
        bullets: ["Extra touchpoints", "Process info", "Decision support"],
      },
      {
        title: "Vendor Communication",
        description: "Automated viewing confirmations and post-viewing feedback to property owners.",
        bullets: ["Vendor updates", "Feedback summary", "Owner visibility"],
      },
      {
        title: "Listing Analytics",
        description: "Dashboard on enquiries, qualification rate, viewings booked, and offers received.",
        bullets: ["Qualification rate", "Viewing bookings", "Offers received"],
      },
    ],
    results: [
      {
        title: "Better multilingual coverage",
        description: "Customers can get a professional response in the language they used first.",
      },
      {
        title: "Faster weekend response",
        description: "Prospects do not have to wait until Monday to get a first reply.",
      },
      {
        title: "Less time spent on unqualified leads",
        description: "Agents spend more time on serious buyers and tenants.",
      },
      {
        title: "Shorter scheduling cycles",
        description: "Viewing booking moves from back-and-forth messages to a single structured flow.",
      },
      {
        title: "Better international follow-up",
        description: "Longer-touch sequences help foreign buyers stay engaged.",
      },
      {
        title: "Clearer listing performance visibility",
        description: "The dashboard shows which listings and portals are producing the best leads.",
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
        title: "Lead Generation Automation",
        description: "Capture, qualify, and route inbound leads.",
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
          "Real estate automation packages start at EUR2,500-EUR4,500 setup. Monthly support starts from EUR149-EUR249/month.",
      },
      {
        question: "How fast is ROI?",
        answer: "In most cases, one or two additional closings per year cover the full cost.",
      },
      {
        question: "How long does implementation take?",
        answer: "3-4 weeks including multilingual setup and CRM integration.",
      },
      {
        question: "Which languages can the system handle?",
        answer: "Estonian, Russian, and English as standard. Other languages on request.",
      },
      {
        question: "Does it work with KV.ee or City24.ee?",
        answer: "Integration depends on available notification channels and is assessed during the strategy call.",
      },
      {
        question: "Will agents still handle viewings?",
        answer: "Yes. The system handles everything before and after. Agents handle the viewing and the negotiation.",
      },
      {
        question: "Can it handle both sales and rental enquiries?",
        answer: "Yes. Separate qualification flows can be built for each.",
      },
      {
        question: "Is the system GDPR compliant?",
        answer: "Yes. It is built on GDPR-compliant infrastructure with controlled access to personal data.",
      },
    ],
    cta: {
      label: "Final CTA",
      title: "The Baltic property market speaks three languages. Your agency should too - 24/7.",
      body: "Kubera AI is based in Tallinn and builds multilingual real estate automation for Baltic agencies.",
      primary: {
        title: "Book a strategy call",
        description: "Map your current enquiry flow and show what multilingual automation looks like in practice.",
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
