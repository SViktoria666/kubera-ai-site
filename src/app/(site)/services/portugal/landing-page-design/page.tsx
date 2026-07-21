import type { Metadata } from "next";
import { CommercialServicePage } from "@/components/services/CommercialServicePage";
import { landingPageDesignPortugalContent } from "@/content/services/portugal/landing-page-design";
import { siteConfig } from "@/content/site";

const content = landingPageDesignPortugalContent;
const pageTitle = content.seoTitle.replace(/\s*\|\s*Kubera AI$/, "");

export const metadata: Metadata = {
  title: pageTitle,
  description: content.metaDescription,
  alternates: {
    canonical: content.path,
  },
  openGraph: {
    title: content.seoTitle,
    description: content.metaDescription,
    url: `${siteConfig.url}${content.path}`,
    siteName: siteConfig.name,
    locale: "pt_PT",
    type: "website",
    images: [{ url: siteConfig.defaultOgImage }],
  },
  twitter: {
    card: "summary_large_image",
    title: content.seoTitle,
    description: content.metaDescription,
    images: [siteConfig.defaultOgImage],
  },
};

export default function LandingPageDesignPortugal() {
  return <CommercialServicePage content={content} />;
}
