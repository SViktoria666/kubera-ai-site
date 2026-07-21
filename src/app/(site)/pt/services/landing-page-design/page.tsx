import type { Metadata } from "next";
import { LandingPageDesignHubPage } from "@/components/services/LandingPageDesignPage";
import { landingPageDesignHubPages } from "@/content/services/landing-page-design";
import { siteConfig } from "@/content/site";

const content = landingPageDesignHubPages.pt;

export const metadata: Metadata = {
  title: content.seoTitle,
  description: content.metaDescription,
  alternates: {
    canonical: content.path,
    languages: {
      "x-default": "/services/landing-page-design",
      "en-US": "/services/landing-page-design",
      "pt-PT": "/pt/services/landing-page-design",
    },
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

export default function LandingPageDesignHubPt() {
  return <LandingPageDesignHubPage content={content} />;
}
