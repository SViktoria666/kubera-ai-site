import type { CountryPageContent } from "@/content/types";

const countryNames = [
  ["spain", "Spain"],
  ["portugal", "Portugal"],
  ["germany", "Germany"],
  ["italy", "Italy"],
  ["france", "France"],
  ["netherlands", "Netherlands"],
  ["belgium", "Belgium"],
  ["austria", "Austria"],
  ["switzerland", "Switzerland"],
  ["ireland", "Ireland"],
  ["cyprus", "Cyprus"],
  ["finland", "Finland"],
  ["lithuania", "Lithuania"],
  ["latvia", "Latvia"],
  ["sweden", "Sweden"],
  ["poland", "Poland"],
  ["estonia", "Estonia"],
  ["denmark", "Denmark"],
] as const;

export const countries: CountryPageContent[] = countryNames.map(([slugBase, country]) => ({
  country,
  slug: `${slugBase}-automation`,
  metaTitle: `${country} Business Automation Services`,
  metaDescription: `AI workflow automation, lead processing, CRM integration, and n8n-ready systems for companies in ${country}.`,
  heading: `Business automation in ${country}`,
  summary: `Kubera AI prepares secure, scalable automation systems for companies operating in ${country}.`,
  sections: [
    {
      title: "Automation scope",
      body: "Lead handling, customer communication, internal processes, CRM workflows, and reporting systems.",
    },
    {
      title: "Integration readiness",
      body: "Built with server-side form processing, future n8n webhooks, monitoring, and secure environment boundaries.",
    },
    {
      title: "AEO-ready content",
      body: "Structured metadata and schema are reserved for future answer-engine and search expansion.",
    },
  ],
}));

