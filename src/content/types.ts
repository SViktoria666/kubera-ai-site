export type ServiceItem = {
  title: string;
  description: string;
  assetName?: string;
  planned?: boolean;
};

export type WorkflowStep = {
  title: string;
  description: string;
};

export type CountryPageContent = {
  country: string;
  slug: string;
  metaTitle: string;
  metaDescription: string;
  heading: string;
  summary: string;
  sections: Array<{
    title: string;
    body: string;
  }>;
};

export type SiteAsset = {
  name: string;
  sourceUrl: string;
  localPath: string;
  usage: string;
  notes: string;
};

export type BlogPostMeta = {
  slug: string;
  locale: "en" | "ru";
  title: string;
  description: string;
  category: string;
  tags: string[];
  author: string;
  publishedAt: string;
  updatedAt?: string;
  draft: boolean;
};
