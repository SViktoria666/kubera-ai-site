import type { Metadata } from "next";
import { CommercialServicePage } from "@/components/services/CommercialServicePage";
import { siteConfig } from "@/content/site";
import { polandLandingPageDesignPage } from "@/content/service-pages/poland-landing-page-design";

export async function generateMetadata(): Promise<Metadata> {
  const content = polandLandingPageDesignPage;

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

export default function PolandLandingPageDesignRoute() {
  return <CommercialServicePage content={polandLandingPageDesignPage} />;
}
