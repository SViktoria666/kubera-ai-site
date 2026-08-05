export type JourneyPageLanguage = "en" | "ru" | "es" | "other";

export type JourneyPageType =
  | "home"
  | "services"
  | "country_landing"
  | "industry_solution"
  | "use_case"
  | "case"
  | "blog"
  | "pricing"
  | "calculator"
  | "contacts"
  | "how_we_work"
  | "demo"
  | "other";

export type JourneyUtm = {
  source: string;
  medium: string;
  campaign: string;
  term: string;
  content: string;
};

export type JourneySignals = {
  calculatorUsed: boolean;
  calculatorCompleted: boolean;
  assistantOpened: boolean;
  assistantStarted: boolean;
  pricingViewed: boolean;
  caseViewed: boolean;
  blogViewed: boolean;
  whatsappClicked: boolean;
  telegramClicked: boolean;
  emailClicked: boolean;
};

export type JourneyGeo = {
  country?: string;
  region?: string;
};

export type JourneyAnalyticsContext = {
  journeyId: string;
  sessionStartedAt: string;
  activeSeconds: number;
  landingPage: string;
  conversionPage: string;
  lastPage: string;
  currentPage?: string;
  previousPage?: string;
  pageViews: number;
  uniquePages: string[];
  pageCategoriesVisited: JourneyPageType[];
  pageLanguage: JourneyPageLanguage;
  initialReferrer: string;
  utm: JourneyUtm;
  signals: JourneySignals;
  geo?: JourneyGeo;
};
