export type ServicePageFaqItem = {
  question: string;
  answer: string;
};

export type ServicePagePackage = {
  name: string;
  price: string;
  includes: string[];
};

export type ServicePageProcessStep = {
  title: string;
  body: string;
};

export type ServicePageContent = {
  canonical: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  hero: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    primaryCta: string;
    primaryCtaHref: string;
    secondaryCta: string;
    secondaryCtaHref: string;
    trustStrip: string;
  };
  problem: {
    paragraphs: string[];
  };
  whatYouGet: {
    intro: string;
    items: string[];
    closing: string;
  };
  workingWithKuberaAi: {
    intro: string;
    paragraphs: string[];
  };
  keyBenefits: {
    items: Array<{
      title: string;
      body: string;
    }>;
  };
  howWeWork: {
    intro: string;
    steps: ServicePageProcessStep[];
  };
  packages: {
    note?: string;
    items: ServicePagePackage[];
  };
  whatsNotIncluded: {
    paragraph: string;
  };
  faq: ServicePageFaqItem[];
  finalCta: {
    headline: string;
    subtext: string;
    primaryButton: string;
    primaryHref: string;
    secondaryLink: string;
    secondaryHref: string;
  };
  footerTrustBlock: string;
};
