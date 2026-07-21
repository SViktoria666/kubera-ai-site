import type { Metadata } from "next";
import { LandingPageDesignCountryPage } from "@/components/services/LandingPageDesignPage";
import { landingPageDesignCountryPages } from "@/content/services/landing-page-design";
import { siteConfig } from "@/content/site";

const content = landingPageDesignCountryPages.pt;

export const metadata: Metadata = {
  title: content.seoTitle,
  description: content.metaDescription,
  alternates: {
    canonical: content.path,
    languages: {
      "x-default": "/services/portugal/landing-page-design",
      "en-US": "/services/portugal/landing-page-design",
      "pt-PT": "/pt/services/portugal/landing-page-design",
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

export default function LandingPageDesignPortugalPt() {
  return <LandingPageDesignCountryPage content={content} />;
}
