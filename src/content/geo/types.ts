export type GeoLocale = "en" | "es";

export type GeoCatalogItem = {
  country: string;
  fileName: string;
  locale: GeoLocale;
  route: string;
  relatedRoutes: string[];
};

export type GeoFaqItem = {
  question: string;
  answer: string;
};

export type GeoCta = {
  headline: string;
  body: string;
  primary: string;
  secondary: string;
};

export type GeoParsedSection = {
  title: string;
  blocks: string[];
};

export type GeoPageData = {
  country: string;
  fileName: string;
  locale: GeoLocale;
  route: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  sections: GeoParsedSection[];
  faq: GeoFaqItem[];
  cta: GeoCta | null;
  relatedRoutes: string[];
  raw: string;
};
