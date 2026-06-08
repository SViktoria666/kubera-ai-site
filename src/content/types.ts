export type ServiceItem = {
  title: string;
  description: string;
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

