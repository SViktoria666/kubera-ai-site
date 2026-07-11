import { caseStudies } from "./cases";
import { countries } from "./countries/countries";
import { industrySolutions, type IndustrySolution } from "./industry-solutions";

export type InternalLinkCard = {
  title: string;
  description: string;
  href: string;
};

export type InternalLinkGroup = {
  title: string;
  description: string;
  links: InternalLinkCard[];
};

type RouteGroup = {
  title: string;
  description: string;
  routes: string[];
};

const solutionLookup = new Map(industrySolutions.map((solution) => [solution.url, solution] as const));
const countryLookup = new Map(countries.map((country) => [country.slug.replace(/-automation$/, ""), country] as const));

const useCaseLinkCatalog: Record<string, InternalLinkCard> = {
  "/use-cases/ai-voice-agents-home-services": {
    title: "AI Voice Agents for Home Services",
    description: "Call handling, booking and CRM automation for service businesses.",
    href: "/use-cases/ai-voice-agents-home-services",
  },
  "/use-cases/real-estate-lead-automation": {
    title: "Real Estate Lead Automation",
    description: "Lead capture, qualification and follow-up automation for agencies.",
    href: "/use-cases/real-estate-lead-automation",
  },
  "/use-cases/n8n-ecommerce-automation": {
    title: "n8n E-commerce Automation",
    description: "Custom n8n workflows for store, fulfilment, support and reporting.",
    href: "/use-cases/n8n-ecommerce-automation",
  },
  "/use-cases/ai-customer-support-ecommerce": {
    title: "AI Customer Support for E-commerce",
    description: "Support automation for product questions, order status and routine helpdesk work.",
    href: "/use-cases/ai-customer-support-ecommerce",
  },
  "/use-cases/ai-front-desk-dental-practices": {
    title: "AI Front Desk for Dental Practices",
    description: "Administrative call handling, booking and reminders for dental practices.",
    href: "/use-cases/ai-front-desk-dental-practices",
  },
  "/use-cases/ai-client-intake-law-firms": {
    title: "AI Client Intake for Law Firms",
    description: "Administrative intake and consultation booking for legal teams.",
    href: "/use-cases/ai-client-intake-law-firms",
  },
  "/use-cases/ai-receptionist-salons-spas": {
    title: "AI Receptionist for Salons and Spas",
    description: "Reception, booking and rebooking automation for salons and spas.",
    href: "/use-cases/ai-receptionist-salons-spas",
  },
};

const homeUseCaseRoutes = [
  "/use-cases/ai-voice-agents-home-services",
  "/use-cases/real-estate-lead-automation",
  "/use-cases/n8n-ecommerce-automation",
  "/use-cases/ai-customer-support-ecommerce",
  "/use-cases/ai-front-desk-dental-practices",
];

const servicesUseCaseRoutes = [
  "/use-cases/ai-voice-agents-home-services",
  "/use-cases/real-estate-lead-automation",
  "/use-cases/n8n-ecommerce-automation",
  "/use-cases/ai-customer-support-ecommerce",
  "/use-cases/ai-front-desk-dental-practices",
  "/use-cases/ai-client-intake-law-firms",
  "/use-cases/ai-receptionist-salons-spas",
];

const useCaseRelatedRoutes: Record<string, string[]> = {
  "ai-voice-agents-home-services": [
    "/use-cases/ai-front-desk-dental-practices",
    "/use-cases/ai-receptionist-salons-spas",
    "/use-cases/real-estate-lead-automation",
  ],
  "real-estate-lead-automation": [
    "/use-cases/ai-voice-agents-home-services",
    "/use-cases/ai-client-intake-law-firms",
    "/use-cases/ai-customer-support-ecommerce",
  ],
  "n8n-ecommerce-automation": [
    "/use-cases/ai-customer-support-ecommerce",
    "/use-cases/real-estate-lead-automation",
  ],
  "ai-customer-support-ecommerce": [
    "/use-cases/n8n-ecommerce-automation",
    "/use-cases/ai-voice-agents-home-services",
  ],
  "ai-front-desk-dental-practices": [
    "/use-cases/ai-voice-agents-home-services",
    "/use-cases/ai-receptionist-salons-spas",
  ],
  "ai-client-intake-law-firms": [
    "/use-cases/ai-voice-agents-home-services",
    "/use-cases/real-estate-lead-automation",
  ],
  "ai-receptionist-salons-spas": [
    "/use-cases/ai-front-desk-dental-practices",
    "/use-cases/ai-voice-agents-home-services",
  ],
};

const useCaseIndustrySolutionRoutes: Record<string, string[]> = {
  "ai-voice-agents-home-services": [
    "/en/solutions/spain/whatsapp-automation",
    "/en/solutions/portugal/whatsapp-automation",
    "/en/solutions/spain/hospitality-automation",
    "/en/solutions/france/hospitality-automation",
    "/en/solutions/belgium/multilingual-automation",
  ],
  "real-estate-lead-automation": [
    "/en/solutions/spain/real-estate-automation",
    "/en/solutions/portugal/real-estate-automation",
    "/en/solutions/ireland/real-estate-automation",
    "/en/solutions/switzerland/real-estate-automation",
    "/en/solutions/cyprus/real-estate-automation",
  ],
  "n8n-ecommerce-automation": [
    "/en/solutions/netherlands/e-commerce-automation",
    "/en/solutions/estonia/e-commerce-automation",
    "/en/solutions/poland/e-commerce-automation",
    "/en/solutions/lithuania/e-commerce-automation",
    "/en/solutions/netherlands/logistics-automation",
  ],
  "ai-customer-support-ecommerce": [
    "/en/solutions/netherlands/e-commerce-automation",
    "/en/solutions/estonia/e-commerce-automation",
    "/en/solutions/poland/e-commerce-automation",
    "/en/solutions/lithuania/e-commerce-automation",
    "/en/solutions/netherlands/logistics-automation",
  ],
  "ai-front-desk-dental-practices": [
    "/en/solutions/germany/dental-automation",
    "/en/solutions/italy/dental-clinic-automation",
    "/en/solutions/austria/dental-clinic-automation",
    "/en/solutions/switzerland/private-clinic-automation",
  ],
  "ai-client-intake-law-firms": [
    "/en/solutions/germany/legal-tech-automation",
    "/en/solutions/belgium/multilingual-automation",
    "/en/solutions/germany/whatsapp-automation",
  ],
  "ai-receptionist-salons-spas": [
    "/en/solutions/spain/whatsapp-automation",
    "/en/solutions/france/whatsapp-automation",
    "/en/solutions/belgium/multilingual-automation",
    "/en/solutions/spain/hospitality-automation",
    "/en/solutions/italy/boutique-hotel-automation",
  ],
};

const caseUseCaseRoutes: Record<string, string[]> = {
  "customer-communications": [
    "/use-cases/ai-voice-agents-home-services",
    "/use-cases/ai-customer-support-ecommerce",
    "/use-cases/ai-client-intake-law-firms",
  ],
  "sales-leads": [
    "/use-cases/real-estate-lead-automation",
    "/use-cases/ai-client-intake-law-firms",
    "/use-cases/ai-voice-agents-home-services",
  ],
  "internal-processes": [
    "/use-cases/n8n-ecommerce-automation",
    "/use-cases/ai-customer-support-ecommerce",
    "/use-cases/ai-front-desk-dental-practices",
  ],
  "real-estate-rentals": ["/use-cases/real-estate-lead-automation"],
  "ecommerce-logistics": [
    "/use-cases/n8n-ecommerce-automation",
    "/use-cases/ai-customer-support-ecommerce",
  ],
  "medical-clinics-dental": ["/use-cases/ai-front-desk-dental-practices"],
  "beauty-health": ["/use-cases/ai-receptionist-salons-spas"],
};

const solutionUseCaseRoutes: Record<string, string[]> = {
  "whatsapp-automation": [
    "/use-cases/ai-voice-agents-home-services",
    "/use-cases/ai-customer-support-ecommerce",
    "/use-cases/ai-receptionist-salons-spas",
  ],
  "multilingual-automation": [
    "/use-cases/ai-client-intake-law-firms",
    "/use-cases/ai-customer-support-ecommerce",
    "/use-cases/ai-receptionist-salons-spas",
  ],
  "hospitality-automation": [
    "/use-cases/ai-voice-agents-home-services",
    "/use-cases/ai-customer-support-ecommerce",
  ],
  "boutique-hotel-automation": [
    "/use-cases/ai-voice-agents-home-services",
    "/use-cases/ai-customer-support-ecommerce",
  ],
  "luxury-hotel-automation": [
    "/use-cases/ai-voice-agents-home-services",
    "/use-cases/ai-customer-support-ecommerce",
  ],
  "real-estate-automation": ["/use-cases/real-estate-lead-automation"],
  "e-commerce-automation": [
    "/use-cases/n8n-ecommerce-automation",
    "/use-cases/ai-customer-support-ecommerce",
  ],
  "logistics-automation": ["/use-cases/n8n-ecommerce-automation"],
  "dental-automation": ["/use-cases/ai-front-desk-dental-practices"],
  "dental-clinic-automation": ["/use-cases/ai-front-desk-dental-practices"],
  "private-clinic-automation": ["/use-cases/ai-front-desk-dental-practices"],
  "legal-tech-automation": ["/use-cases/ai-client-intake-law-firms"],
  "retail-automation": ["/use-cases/ai-customer-support-ecommerce"],
};

export const solutionHubRoute = "/en/solutions";

export const homeFeaturedSolutionRoutes = [
  "/en/solutions/spain/hospitality-automation",
  "/en/solutions/germany/dental-automation",
  "/en/solutions/netherlands/e-commerce-automation",
  "/en/solutions/ireland/recruitment-automation",
  "/en/solutions/switzerland/luxury-hotel-automation",
  "/en/solutions/poland/e-commerce-automation",
  "/en/solutions/sweden/saas-startup-automation",
  "/en/solutions/cyprus/real-estate-automation",
];

export const servicesFeaturedSolutionRoutes = [
  "/en/solutions/spain/hospitality-automation",
  "/en/solutions/portugal/tourism-automation",
  "/en/solutions/germany/dental-automation",
  "/en/solutions/netherlands/e-commerce-automation",
  "/en/solutions/ireland/recruitment-automation",
  "/en/solutions/estonia/saas-startup-automation",
  "/en/solutions/denmark/cleantech-automation",
  "/en/solutions/belgium/multilingual-automation",
  "/en/solutions/italy/fashion-boutique-automation",
  "/en/solutions/switzerland/luxury-hotel-automation",
  "/en/solutions/poland/e-commerce-automation",
  "/en/solutions/finland/saas-startup-automation",
  "/en/solutions/sweden/recruitment-automation",
  "/en/solutions/austria/boutique-hotel-automation",
  "/en/solutions/lithuania/e-commerce-automation",
  "/en/solutions/latvia/real-estate-automation",
  "/en/solutions/cyprus/real-estate-automation",
];

export const solutionHubClusters: RouteGroup[] = [
  {
    title: "Real Estate Automation",
    description: "Lead qualification, inquiry handling, and viewing-booking workflows for property teams.",
    routes: [
      "/en/solutions/spain/real-estate-automation",
      "/en/solutions/portugal/real-estate-automation",
      "/en/solutions/ireland/real-estate-automation",
      "/en/solutions/switzerland/real-estate-automation",
    ],
  },
  {
    title: "Recruitment Automation",
    description: "Candidate intake, screening, scheduling, and recruiter handoff for hiring teams.",
    routes: [
      "/en/solutions/ireland/recruitment-automation",
      "/en/solutions/belgium/recruitment-automation",
      "/en/solutions/poland/recruitment-automation",
      "/en/solutions/finland/recruitment-automation",
    ],
  },
  {
    title: "E-commerce Automation",
    description: "Support, order-status, returns, and post-purchase workflows for online stores.",
    routes: [
      "/en/solutions/netherlands/e-commerce-automation",
      "/en/solutions/estonia/e-commerce-automation",
      "/en/solutions/poland/e-commerce-automation",
      "/en/solutions/lithuania/e-commerce-automation",
    ],
  },
  {
    title: "Hospitality / Hotel Automation",
    description: "Guest messaging, booking inquiries, check-in comms, and review follow-up.",
    routes: [
      "/en/solutions/spain/hospitality-automation",
      "/en/solutions/france/hospitality-automation",
      "/en/solutions/italy/boutique-hotel-automation",
      "/en/solutions/switzerland/luxury-hotel-automation",
    ],
  },
  {
    title: "SaaS / Startup Automation",
    description: "Trial nurturing, onboarding, customer success, and internal operational workflows.",
    routes: [
      "/en/solutions/estonia/saas-startup-automation",
      "/en/solutions/finland/saas-startup-automation",
      "/en/solutions/sweden/saas-startup-automation",
      "/en/solutions/ireland/tech-startup-automation",
    ],
  },
  {
    title: "Dental / Medical Automation",
    description: "Appointment booking, intake, reminders, and patient follow-up for clinics.",
    routes: [
      "/en/solutions/germany/dental-automation",
      "/en/solutions/italy/dental-clinic-automation",
      "/en/solutions/austria/dental-clinic-automation",
      "/en/solutions/switzerland/private-clinic-automation",
    ],
  },
  {
    title: "WhatsApp / Multilingual Communication",
    description: "Fast chat handling and multilingual lead capture for markets where messaging is the primary channel.",
    routes: [
      "/en/solutions/spain/whatsapp-automation",
      "/en/solutions/france/whatsapp-automation",
      "/en/solutions/germany/whatsapp-automation",
      "/en/solutions/belgium/multilingual-automation",
    ],
  },
  {
    title: "Logistics / Cleantech / Operations",
    description: "Shipment updates, exception handling, routing, approvals, and internal handoffs.",
    routes: [
      "/en/solutions/netherlands/logistics-automation",
      "/en/solutions/denmark/cleantech-automation",
      "/en/solutions/germany/legal-tech-automation",
      "/en/solutions/belgium/multilingual-automation",
    ],
  },
];

const relatedSolutionRoutesByIndustry: Record<string, string[]> = {
  "whatsapp-automation": [
    "/en/solutions/spain/whatsapp-automation",
    "/en/solutions/france/whatsapp-automation",
    "/en/solutions/germany/whatsapp-automation",
    "/en/solutions/netherlands/whatsapp-automation",
    "/en/solutions/portugal/whatsapp-automation",
    "/en/solutions/belgium/multilingual-automation",
  ],
  "multilingual-automation": [
    "/en/solutions/belgium/multilingual-automation",
    "/en/solutions/spain/whatsapp-automation",
    "/en/solutions/france/whatsapp-automation",
    "/en/solutions/germany/whatsapp-automation",
    "/en/solutions/netherlands/whatsapp-automation",
  ],
  "hospitality-automation": [
    "/en/solutions/spain/hospitality-automation",
    "/en/solutions/france/hospitality-automation",
    "/en/solutions/italy/boutique-hotel-automation",
    "/en/solutions/austria/boutique-hotel-automation",
    "/en/solutions/switzerland/luxury-hotel-automation",
    "/en/solutions/cyprus/boutique-hotel-automation",
  ],
  "boutique-hotel-automation": [
    "/en/solutions/italy/boutique-hotel-automation",
    "/en/solutions/austria/boutique-hotel-automation",
    "/en/solutions/spain/hospitality-automation",
    "/en/solutions/france/hospitality-automation",
    "/en/solutions/switzerland/luxury-hotel-automation",
    "/en/solutions/cyprus/boutique-hotel-automation",
  ],
  "luxury-hotel-automation": [
    "/en/solutions/switzerland/luxury-hotel-automation",
    "/en/solutions/spain/hospitality-automation",
    "/en/solutions/france/hospitality-automation",
    "/en/solutions/italy/boutique-hotel-automation",
    "/en/solutions/austria/boutique-hotel-automation",
    "/en/solutions/cyprus/boutique-hotel-automation",
  ],
  "real-estate-automation": [
    "/en/solutions/spain/real-estate-automation",
    "/en/solutions/portugal/real-estate-automation",
    "/en/solutions/ireland/real-estate-automation",
    "/en/solutions/switzerland/real-estate-automation",
    "/en/solutions/poland/real-estate-automation",
    "/en/solutions/cyprus/real-estate-automation",
  ],
  "recruitment-automation": [
    "/en/solutions/ireland/recruitment-automation",
    "/en/solutions/belgium/recruitment-automation",
    "/en/solutions/poland/recruitment-automation",
    "/en/solutions/finland/recruitment-automation",
    "/en/solutions/sweden/recruitment-automation",
    "/en/solutions/cyprus/recruitment-automation",
  ],
  "e-commerce-automation": [
    "/en/solutions/netherlands/e-commerce-automation",
    "/en/solutions/estonia/e-commerce-automation",
    "/en/solutions/poland/e-commerce-automation",
    "/en/solutions/lithuania/e-commerce-automation",
    "/en/solutions/latvia/e-commerce-automation",
  ],
  "saas-startup-automation": [
    "/en/solutions/estonia/saas-startup-automation",
    "/en/solutions/finland/saas-startup-automation",
    "/en/solutions/sweden/saas-startup-automation",
    "/en/solutions/ireland/tech-startup-automation",
  ],
  "tech-startup-automation": [
    "/en/solutions/ireland/tech-startup-automation",
    "/en/solutions/estonia/saas-startup-automation",
    "/en/solutions/finland/saas-startup-automation",
    "/en/solutions/sweden/saas-startup-automation",
  ],
  "dental-automation": [
    "/en/solutions/germany/dental-automation",
    "/en/solutions/italy/dental-clinic-automation",
    "/en/solutions/austria/dental-clinic-automation",
    "/en/solutions/switzerland/private-clinic-automation",
  ],
  "dental-clinic-automation": [
    "/en/solutions/italy/dental-clinic-automation",
    "/en/solutions/austria/dental-clinic-automation",
    "/en/solutions/germany/dental-automation",
    "/en/solutions/switzerland/private-clinic-automation",
  ],
  "private-clinic-automation": [
    "/en/solutions/switzerland/private-clinic-automation",
    "/en/solutions/germany/dental-automation",
    "/en/solutions/italy/dental-clinic-automation",
    "/en/solutions/austria/dental-clinic-automation",
  ],
  "tourism-automation": [
    "/en/solutions/portugal/tourism-automation",
    "/en/solutions/spain/hospitality-automation",
    "/en/solutions/france/hospitality-automation",
    "/en/solutions/italy/boutique-hotel-automation",
  ],
  "retail-automation": [
    "/en/solutions/france/retail-automation",
    "/en/solutions/netherlands/e-commerce-automation",
    "/en/solutions/poland/e-commerce-automation",
    "/en/solutions/lithuania/e-commerce-automation",
  ],
  "logistics-automation": [
    "/en/solutions/netherlands/logistics-automation",
    "/en/solutions/denmark/cleantech-automation",
    "/en/solutions/estonia/e-commerce-automation",
    "/en/solutions/poland/e-commerce-automation",
  ],
  "cleantech-automation": [
    "/en/solutions/denmark/cleantech-automation",
    "/en/solutions/netherlands/logistics-automation",
    "/en/solutions/estonia/saas-startup-automation",
    "/en/solutions/sweden/saas-startup-automation",
  ],
  "legal-tech-automation": [
    "/en/solutions/germany/legal-tech-automation",
    "/en/solutions/switzerland/private-clinic-automation",
    "/en/solutions/netherlands/logistics-automation",
    "/en/solutions/belgium/multilingual-automation",
  ],
  "fashion-boutique-automation": [
    "/en/solutions/italy/fashion-boutique-automation",
    "/en/solutions/spain/hospitality-automation",
    "/en/solutions/france/retail-automation",
    "/en/solutions/cyprus/boutique-hotel-automation",
  ],
};

const caseRelatedRoutes: Record<string, string[]> = {
  "customer-communications": [
    "/en/solutions/belgium/multilingual-automation",
    "/en/solutions/spain/whatsapp-automation",
    "/en/solutions/france/whatsapp-automation",
    "/en/solutions/germany/whatsapp-automation",
    "/en/solutions/cyprus/boutique-hotel-automation",
  ],
  "sales-leads": [
    "/en/solutions/poland/real-estate-automation",
    "/en/solutions/switzerland/real-estate-automation",
    "/en/solutions/cyprus/real-estate-automation",
    "/en/solutions/ireland/real-estate-automation",
    "/en/solutions/latvia/real-estate-automation",
  ],
  "internal-processes": [
    "/en/solutions/denmark/cleantech-automation",
    "/en/solutions/sweden/saas-startup-automation",
    "/en/solutions/finland/saas-startup-automation",
    "/en/solutions/belgium/recruitment-automation",
    "/en/solutions/cyprus/recruitment-automation",
  ],
  "hr-hiring": [
    "/en/solutions/ireland/recruitment-automation",
    "/en/solutions/belgium/recruitment-automation",
    "/en/solutions/poland/recruitment-automation",
    "/en/solutions/finland/recruitment-automation",
    "/en/solutions/sweden/recruitment-automation",
    "/en/solutions/cyprus/recruitment-automation",
  ],
  "content-marketing": [
    "/en/solutions/italy/fashion-boutique-automation",
    "/en/solutions/france/retail-automation",
    "/en/solutions/netherlands/e-commerce-automation",
    "/en/solutions/poland/e-commerce-automation",
  ],
  "finance-documents": [
    "/en/solutions/germany/legal-tech-automation",
    "/en/solutions/switzerland/private-clinic-automation",
    "/en/solutions/denmark/cleantech-automation",
  ],
  "ecommerce-logistics": [
    "/en/solutions/netherlands/e-commerce-automation",
    "/en/solutions/poland/e-commerce-automation",
    "/en/solutions/estonia/e-commerce-automation",
    "/en/solutions/lithuania/e-commerce-automation",
    "/en/solutions/latvia/e-commerce-automation",
  ],
  "education-online-schools": [
    "/en/solutions/finland/saas-startup-automation",
    "/en/solutions/sweden/saas-startup-automation",
    "/en/solutions/estonia/saas-startup-automation",
  ],
  "real-estate-rentals": [
    "/en/solutions/spain/real-estate-automation",
    "/en/solutions/portugal/real-estate-automation",
    "/en/solutions/ireland/real-estate-automation",
    "/en/solutions/switzerland/real-estate-automation",
    "/en/solutions/cyprus/real-estate-automation",
  ],
  "hotels-restaurants": [
    "/en/solutions/spain/hospitality-automation",
    "/en/solutions/france/hospitality-automation",
    "/en/solutions/italy/boutique-hotel-automation",
    "/en/solutions/switzerland/luxury-hotel-automation",
    "/en/solutions/austria/boutique-hotel-automation",
    "/en/solutions/cyprus/boutique-hotel-automation",
  ],
  "transport-logistics": [
    "/en/solutions/netherlands/logistics-automation",
    "/en/solutions/denmark/cleantech-automation",
    "/en/solutions/poland/e-commerce-automation",
    "/en/solutions/lithuania/e-commerce-automation",
  ],
  "beauty-health": [
    "/en/solutions/italy/dental-clinic-automation",
    "/en/solutions/austria/dental-clinic-automation",
    "/en/solutions/switzerland/private-clinic-automation",
  ],
  "medical-clinics-dental": [
    "/en/solutions/germany/dental-automation",
    "/en/solutions/italy/dental-clinic-automation",
    "/en/solutions/austria/dental-clinic-automation",
    "/en/solutions/switzerland/private-clinic-automation",
  ],
  "auto-business-car-rentals": [
    "/en/solutions/netherlands/logistics-automation",
    "/en/solutions/denmark/cleantech-automation",
    "/en/solutions/germany/legal-tech-automation",
  ],
  "landing-page-gpt-nti": [
    "/en/solutions/belgium/multilingual-automation",
    "/en/solutions/spain/hospitality-automation",
    "/en/solutions/italy/boutique-hotel-automation",
    "/en/solutions/switzerland/luxury-hotel-automation",
    "/en/solutions/cyprus/boutique-hotel-automation",
  ],
};

const blogRelatedRoutes: Record<string, string[]> = {
  "what-is-ai-automation": [
    "/en/solutions/spain/hospitality-automation",
    "/en/solutions/germany/dental-automation",
    "/en/solutions/poland/e-commerce-automation",
    "/en/solutions/ireland/recruitment-automation",
  ],
  "how-ai-automation-saves-time": [
    "/en/solutions/netherlands/e-commerce-automation",
    "/en/solutions/austria/dental-clinic-automation",
    "/en/solutions/sweden/recruitment-automation",
    "/en/solutions/cyprus/boutique-hotel-automation",
  ],
  "what-is-an-ai-agent": [
    "/en/solutions/finland/saas-startup-automation",
    "/en/solutions/switzerland/real-estate-automation",
    "/en/solutions/belgium/multilingual-automation",
  ],
  "ai-agent-vs-chatbot": [
    "/en/solutions/spain/whatsapp-automation",
    "/en/solutions/france/whatsapp-automation",
    "/en/solutions/belgium/multilingual-automation",
    "/en/solutions/cyprus/boutique-hotel-automation",
  ],
  "claude-code-vs-openai-codex": [],
  "notebooklm-vs-notion-ai": [],
  "claude-vs-chatgpt-vs-gemini-vs-qwen-vs-deepseek": [
    "/en/solutions/finland/saas-startup-automation",
    "/en/solutions/sweden/saas-startup-automation",
    "/en/solutions/estonia/saas-startup-automation",
  ],
  "implement-ai-without-hiring": [
    "/en/solutions/estonia/saas-startup-automation",
    "/en/solutions/finland/saas-startup-automation",
    "/en/solutions/sweden/saas-startup-automation",
    "/en/solutions/ireland/tech-startup-automation",
  ],
  "why-most-ai-projects-fail": [
    "/en/solutions/estonia/saas-startup-automation",
    "/en/solutions/finland/saas-startup-automation",
    "/en/solutions/sweden/saas-startup-automation",
  ],
};

function buildUseCaseLinks(routes: string[]) {
  return routes
    .map((route) => useCaseLinkCatalog[route] ?? null)
    .filter((item): item is InternalLinkCard => item !== null);
}

function resolveSolution(route: string) {
  return solutionLookup.get(route) ?? null;
}

function titleForSolution(solution: IndustrySolution) {
  return `${solution.countryLabel} ${solution.industryLabel}`;
}

function solutionCard(solution: IndustrySolution): InternalLinkCard {
  return {
    title: titleForSolution(solution),
    description: solution.seo.description,
    href: solution.url,
  };
}

export function getSolutionByRoute(route: string) {
  return resolveSolution(route);
}

export function getCountryBySolutionCountry(countrySlug: string) {
  return countryLookup.get(countrySlug) ?? null;
}

export function getCountryGeoRoute(countrySlug: string) {
  return `/en/${countrySlug}-automation`;
}

export function getSolutionHubLinkCard() {
  return {
    title: "View all industry solutions",
    description: "Browse the full internal hub of commercial solution pages.",
    href: solutionHubRoute,
  };
}

export function buildSolutionLinks(routes: string[]) {
  return routes
    .map((route) => {
      const solution = resolveSolution(route);
      return solution ? solutionCard(solution) : null;
    })
    .filter((item): item is InternalLinkCard => item !== null);
}

export function getCountrySolutionLinks(countrySlug: string) {
  return industrySolutions.filter((solution) => solution.country === countrySlug).map(solutionCard);
}

export function getCountrySolutionHubCard(countrySlug: string): InternalLinkCard {
  const country = getCountryBySolutionCountry(countrySlug);
  const countryLabel = country?.country ?? `${countrySlug.charAt(0).toUpperCase()}${countrySlug.slice(1)}`;

  return {
    title: `${countryLabel} AI Automation Overview`,
    description: `Open the ${countryLabel} GEO page for the broader country context and market overview.`,
    href: getCountryGeoRoute(countrySlug),
  };
}

export function getSolutionRelatedLinks(solution: IndustrySolution) {
  const routes = relatedSolutionRoutesByIndustry[solution.industry] ?? [];
  const cards = buildSolutionLinks(routes).filter((item) => item.href !== solution.url);
  return cards.slice(0, 4);
}

export function getSolutionUseCaseLinks(solution: IndustrySolution) {
  return buildUseCaseLinks(solutionUseCaseRoutes[solution.industry] ?? []);
}

export function getUseCaseRelatedLinks(slug: string) {
  return buildUseCaseLinks(useCaseRelatedRoutes[slug] ?? []);
}

export function getUseCaseIndustrySolutionLinks(slug: string) {
  return buildSolutionLinks(useCaseIndustrySolutionRoutes[slug] ?? []);
}

export function getCaseSolutionLinks(slug: string) {
  return buildSolutionLinks(caseRelatedRoutes[slug] ?? []);
}

export function getCaseUseCaseLinks(slug: string) {
  return buildUseCaseLinks(caseUseCaseRoutes[slug] ?? []);
}

export function getBlogSolutionLinks(slug: string) {
  return buildSolutionLinks(blogRelatedRoutes[slug] ?? []);
}

export function getHomeFeaturedSolutionLinks() {
  return buildSolutionLinks(homeFeaturedSolutionRoutes);
}

export function getServicesFeaturedSolutionLinks() {
  return buildSolutionLinks(servicesFeaturedSolutionRoutes);
}

export function getHomeFeaturedUseCaseLinks() {
  return buildUseCaseLinks(homeUseCaseRoutes);
}

export function getServicesFeaturedUseCaseLinks() {
  return buildUseCaseLinks(servicesUseCaseRoutes);
}

export function getSolutionHubClusters() {
  return solutionHubClusters.map((group) => ({
    ...group,
    links: buildSolutionLinks(group.routes),
  }));
}

export function getCountrySolutionBuckets() {
  return countries.map((country) => {
    const countrySlug = country.slug.replace(/-automation$/, "");
    return {
      country,
      geoLink: getCountrySolutionHubCard(countrySlug),
      solutions: getCountrySolutionLinks(countrySlug),
    };
  });
}

export function getSolutionHubItems() {
  return industrySolutions.map(solutionCard);
}
