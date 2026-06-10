import type { GeoCatalogItem } from "./types";

export const geoCatalog = [
  {
    country: "Germany",
    fileName: "germany.md",
    locale: "en",
    route: "/ai-automation-germany",
    relatedRoutes: ["/ai-automation-netherlands", "/ai-automation-austria", "/ai-automation-switzerland"],
  },
  {
    country: "Netherlands",
    fileName: "netherlands.md",
    locale: "en",
    route: "/ai-automation-netherlands",
    relatedRoutes: ["/ai-automation-belgium", "/ai-automation-germany", "/ai-automation-denmark"],
  },
  {
    country: "Portugal",
    fileName: "portugal.md",
    locale: "en",
    route: "/ai-automation-portugal",
    relatedRoutes: ["/automatizacion-ia-espana", "/ai-automation-france", "/ai-automation-ireland"],
  },
  {
    country: "Estonia",
    fileName: "estonia.md",
    locale: "en",
    route: "/ai-automation-estonia",
    relatedRoutes: ["/ai-automation-latvia", "/ai-automation-lithuania", "/ai-automation-finland"],
  },
  {
    country: "Spain",
    fileName: "spain.md",
    locale: "es",
    route: "/automatizacion-ia-espana",
    relatedRoutes: ["/ai-automation-portugal", "/ai-automation-france", "/ai-automation-italy"],
  },
  {
    country: "France",
    fileName: "france.md",
    locale: "en",
    route: "/ai-automation-france",
    relatedRoutes: ["/ai-automation-belgium", "/ai-automation-switzerland", "/automatizacion-ia-espana"],
  },
  {
    country: "Italy",
    fileName: "italy.md",
    locale: "en",
    route: "/ai-automation-italy",
    relatedRoutes: ["/ai-automation-austria", "/ai-automation-switzerland", "/automatizacion-ia-espana"],
  },
  {
    country: "Belgium",
    fileName: "belgium.md",
    locale: "en",
    route: "/ai-automation-belgium",
    relatedRoutes: ["/ai-automation-netherlands", "/ai-automation-france", "/ai-automation-germany"],
  },
  {
    country: "Austria",
    fileName: "austria.md",
    locale: "en",
    route: "/ai-automation-austria",
    relatedRoutes: ["/ai-automation-germany", "/ai-automation-switzerland", "/ai-automation-italy"],
  },
  {
    country: "Switzerland",
    fileName: "switzerland.md",
    locale: "en",
    route: "/ai-automation-switzerland",
    relatedRoutes: ["/ai-automation-germany", "/ai-automation-austria", "/ai-automation-france"],
  },
  {
    country: "Ireland",
    fileName: "ireland.md",
    locale: "en",
    route: "/ai-automation-ireland",
    relatedRoutes: ["/ai-automation-netherlands", "/ai-automation-denmark", "/ai-automation-france"],
  },
  {
    country: "Cyprus",
    fileName: "cyprus.md",
    locale: "en",
    route: "/ai-automation-cyprus",
    relatedRoutes: ["/ai-automation-italy", "/ai-automation-france", "/ai-automation-ireland"],
  },
  {
    country: "Finland",
    fileName: "finland.md",
    locale: "en",
    route: "/ai-automation-finland",
    relatedRoutes: ["/ai-automation-sweden", "/ai-automation-estonia", "/ai-automation-denmark"],
  },
  {
    country: "Sweden",
    fileName: "sweden.md",
    locale: "en",
    route: "/ai-automation-sweden",
    relatedRoutes: ["/ai-automation-denmark", "/ai-automation-finland", "/ai-automation-estonia"],
  },
  {
    country: "Denmark",
    fileName: "denmark.md",
    locale: "en",
    route: "/ai-automation-denmark",
    relatedRoutes: ["/ai-automation-sweden", "/ai-automation-germany", "/ai-automation-netherlands"],
  },
  {
    country: "Poland",
    fileName: "poland.md",
    locale: "en",
    route: "/ai-automation-poland",
    relatedRoutes: ["/ai-automation-germany", "/ai-automation-lithuania", "/ai-automation-estonia"],
  },
  {
    country: "Lithuania",
    fileName: "lithuania.md",
    locale: "en",
    route: "/ai-automation-lithuania",
    relatedRoutes: ["/ai-automation-latvia", "/ai-automation-estonia", "/ai-automation-poland"],
  },
  {
    country: "Latvia",
    fileName: "latvia.md",
    locale: "en",
    route: "/ai-automation-latvia",
    relatedRoutes: ["/ai-automation-lithuania", "/ai-automation-estonia", "/ai-automation-poland"],
  },
] as const satisfies readonly GeoCatalogItem[];

export const geoRoutes = geoCatalog.map((item) => item.route);

export function getGeoCatalogItemByRoute(route: string) {
  return geoCatalog.find((item) => item.route === route) ?? null;
}
