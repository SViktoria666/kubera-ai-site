import type { CountryPageContent } from "@/content/types";

const countryData = [
  {
    slugBase: "spain",
    country: "Spain",
    focus: "WhatsApp lead automation, hospitality workflows, real estate requests, and CRM follow-up for Spanish teams.",
    heading: "AI automation for companies operating in Spain",
  },
  {
    slugBase: "portugal",
    country: "Portugal",
    focus: "lead capture, multilingual customer messaging, booking workflows, and CRM automation for Portuguese businesses.",
    heading: "AI workflow automation for Portugal-based businesses",
  },
  {
    slugBase: "germany",
    country: "Germany",
    focus: "structured CRM processes, document workflows, internal approvals, and reliable automation for German operations.",
    heading: "Business process automation for German companies",
  },
  {
    slugBase: "italy",
    country: "Italy",
    focus: "customer communication, booking flows, ecommerce notifications, and sales follow-up for Italian companies.",
    heading: "AI automation systems for businesses in Italy",
  },
  {
    slugBase: "france",
    country: "France",
    focus: "client messaging, lead qualification, CRM workflows, and reporting automations for French service teams.",
    heading: "Digital workforce automation for France",
  },
  {
    slugBase: "netherlands",
    country: "Netherlands",
    focus: "operations automation, CRM handoffs, ecommerce workflows, and lead routing for Dutch companies.",
    heading: "AI and workflow automation for the Netherlands",
  },
  {
    slugBase: "belgium",
    country: "Belgium",
    focus: "multilingual lead processing, customer support workflows, and CRM automation for Belgian businesses.",
    heading: "Business automation for companies in Belgium",
  },
  {
    slugBase: "austria",
    country: "Austria",
    focus: "sales process automation, guest messaging, service reminders, and CRM pipelines for Austrian teams.",
    heading: "AI automation services for Austria",
  },
  {
    slugBase: "switzerland",
    country: "Switzerland",
    focus: "secure process automation, client communication, financial workflows, and CRM operations for Swiss companies.",
    heading: "Secure AI workflow automation for Switzerland",
  },
  {
    slugBase: "ireland",
    country: "Ireland",
    focus: "lead qualification, support automation, internal workflows, and CRM follow-up for Irish growth teams.",
    heading: "AI business automation for Ireland",
  },
  {
    slugBase: "cyprus",
    country: "Cyprus",
    focus: "real estate requests, hospitality communication, booking reminders, and lead automation for Cyprus-based teams.",
    heading: "Automation systems for businesses in Cyprus",
  },
  {
    slugBase: "finland",
    country: "Finland",
    focus: "structured internal processes, customer support workflows, reporting, and CRM automation for Finnish companies.",
    heading: "AI workflow automation for Finland",
  },
  {
    slugBase: "lithuania",
    country: "Lithuania",
    focus: "sales automation, ecommerce notifications, logistics workflows, and CRM integrations for Lithuanian businesses.",
    heading: "Business automation systems for Lithuania",
  },
  {
    slugBase: "latvia",
    country: "Latvia",
    focus: "lead processing, customer communication, booking workflows, and operational automation for Latvian companies.",
    heading: "AI automation for businesses in Latvia",
  },
  {
    slugBase: "sweden",
    country: "Sweden",
    focus: "customer messaging, internal approvals, reporting workflows, and CRM automation for Swedish teams.",
    heading: "AI-powered business automation for Sweden",
  },
  {
    slugBase: "poland",
    country: "Poland",
    focus: "lead routing, ecommerce operations, logistics notifications, and CRM workflow automation for Polish companies.",
    heading: "Automation services for companies in Poland",
  },
  {
    slugBase: "estonia",
    country: "Estonia",
    focus: "digital-first operations, Telegram and WhatsApp lead flows, CRM integrations, and n8n-ready automation.",
    heading: "AI automation systems for Estonia",
  },
  {
    slugBase: "denmark",
    country: "Denmark",
    focus: "service workflows, lead qualification, customer support automation, and CRM systems for Danish companies.",
    heading: "Business automation for Denmark-based teams",
  },
] as const;

export const countries: CountryPageContent[] = countryData.map(({ slugBase, country, focus, heading }) => ({
  country,
  slug: `${slugBase}-automation`,
  metaTitle: `${country} AI Automation and CRM Workflow Services`,
  metaDescription: `Kubera AI builds ${focus}`,
  heading,
  summary: `Kubera AI designs digital workforce systems for ${country}: ${focus}`,
  sections: [
    {
      title: "Who this helps",
      body: `Companies in ${country} that lose leads, repeat manual tasks, or need faster customer communication across sales and operations.`,
    },
    {
      title: "What we automate",
      body: "Lead handling, customer communication, internal processes, CRM workflows, reporting systems, reminders, and document flows.",
    },
    {
      title: "Integration readiness",
      body: "Built with server-side form processing, future n8n webhooks, secure environment boundaries, monitoring, and scalable deployment on Vercel.",
    },
  ],
}));
