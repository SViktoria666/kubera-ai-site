import type { Metadata } from "next";
import { CommercialServicePage } from "@/components/services/CommercialServicePage";
import { portugalLandingPageDesignPage } from "@/content/service-pages/portugal-landing-page-design";
import { siteConfig } from "@/content/site";

export async function generateMetadata(): Promise<Metadata> {
  const content = portugalLandingPageDesignPage;

  return {
    title: { absolute: content.seoTitle },
    description: content.metaDescription,
    alternates: {
      canonical: content.canonical,
    },
    openGraph: {
      title: content.seoTitle,
      description: content.metaDescription,
      url: content.canonical,
      siteName: siteConfig.name,
      type: "website",
      locale: "en_US",
      images: [{ url: siteConfig.defaultOgImage }],
    },
    twitter: {
      card: "summary_large_image",
      title: content.seoTitle,
      description: content.metaDescription,
      images: [siteConfig.defaultOgImage],
    },
  };
}

export default function PortugalLandingPageDesignRoute() {
  return <CommercialServicePage content={portugalLandingPageDesignPage} />;
}
