import type { Metadata } from "next";
import { CommercialServicePage } from "@/components/services/CommercialServicePage";
import { siteConfig } from "@/content/site";
import { netherlandsLandingPageDesignPage } from "@/content/service-pages/netherlands-landing-page-design";

export async function generateMetadata(): Promise<Metadata> {
  const content = netherlandsLandingPageDesignPage;

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

export default function NetherlandsLandingPageDesignRoute() {
  return <CommercialServicePage content={netherlandsLandingPageDesignPage} />;
}
