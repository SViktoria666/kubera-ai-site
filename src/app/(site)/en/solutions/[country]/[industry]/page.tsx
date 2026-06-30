import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { IndustrySolutionTemplate } from "@/components/industry-solutions/IndustrySolutionTemplate";
import { getIndustrySolutionByRoute, getIndustrySolutionStaticParams } from "@/content/industry-solutions";
import { siteConfig } from "@/content/site";

type SchemaRecord = {
  "@id"?: string;
  "@type"?: string;
  [key: string]: unknown;
};

type Params = {
  params: Promise<{
    country: string;
    industry: string;
  }>;
};

function buildSchemas(country: string, industry: string): SchemaRecord[] {
  const solution = getIndustrySolutionByRoute(country, industry);

  if (!solution) {
    return [];
  }

  const canonical = solution.seo.canonical;

  return [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${canonical}#webpage`,
      url: canonical,
      name: solution.seo.title,
      description: solution.seo.description,
      inLanguage: "en-US",
      isPartOf: {
        "@id": `${siteConfig.url}#website`,
      },
      publisher: {
        "@id": `${siteConfig.url}#organization`,
      },
      mainEntity: {
        "@id": `${canonical}#service`,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${canonical}#service`,
      name: solution.seo.title,
      serviceType: `${solution.industryLabel} for ${solution.countryLabel}`,
      areaServed: solution.countryLabel,
      provider: {
        "@type": "Organization",
        name: siteConfig.name,
        url: siteConfig.url,
      },
      url: canonical,
      description: solution.seo.description,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": `${canonical}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteConfig.url,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: `${siteConfig.url}/services`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: solution.seo.title,
          item: canonical,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${canonical}#faq`,
      mainEntity: solution.faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ];
}

export function generateStaticParams() {
  return getIndustrySolutionStaticParams();
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { country, industry } = await params;
  const solution = getIndustrySolutionByRoute(country, industry);

  if (!solution) {
    return {};
  }

  return {
    title: solution.seo.title.replace(/ \| Kubera AI$/, ""),
    description: solution.seo.description,
    alternates: {
      canonical: solution.seo.canonical,
    },
    openGraph: {
      title: solution.seo.title,
      description: solution.seo.description,
      url: solution.seo.canonical,
      siteName: siteConfig.name,
      type: "website",
      locale: "en_US",
      images: [{ url: siteConfig.defaultOgImage }],
    },
    twitter: {
      card: "summary_large_image",
      title: solution.seo.title,
      description: solution.seo.description,
      images: [siteConfig.defaultOgImage],
    },
  };
}

export default async function IndustrySolutionPage({ params }: Params) {
  const { country, industry } = await params;
  const solution = getIndustrySolutionByRoute(country, industry);

  if (!solution) {
    notFound();
  }

  const schemas = buildSchemas(country, industry).map((schema) => (
    <script
      key={schema["@id"] ?? `${schema["@type"]}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  ));

  return <IndustrySolutionTemplate solution={solution} schemas={schemas} />;
}

export const dynamicParams = false;
