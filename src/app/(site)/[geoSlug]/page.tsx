import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GeoPage } from "@/components/geo/GeoPage";
import { getGeoPageByRoute, getGeoPageRoutes } from "@/content/geo/loader";
import { siteConfig } from "@/content/site";

type Params = {
  params: Promise<{ geoSlug: string }>;
};

export function generateStaticParams() {
  return getGeoPageRoutes()
    .filter((route) => route !== "/automatizacion-ia-espana")
    .map((route) => ({ geoSlug: route.replace(/^\//, "") }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { geoSlug } = await params;
  const route = `/${geoSlug}`;
  const page = getGeoPageByRoute(route);

  if (!page) {
    return {};
  }

  const canonical = `${siteConfig.url}${page.route}`;

  return {
    title: page.seoTitle,
    description: page.metaDescription,
    alternates: {
      canonical: page.route,
      languages: {
        "x-default": "/locations",
        ...(page.locale === "es"
          ? { "es-ES": page.route }
          : { "en-US": page.route }),
      },
    },
    openGraph: {
      title: page.seoTitle,
      description: page.metaDescription,
      url: canonical,
      siteName: siteConfig.name,
      locale: page.locale === "es" ? "es_ES" : "en_US",
      type: "website",
      images: [{ url: siteConfig.defaultOgImage }],
    },
    twitter: {
      card: "summary_large_image",
      title: page.seoTitle,
      description: page.metaDescription,
      images: [siteConfig.defaultOgImage],
    },
  };
}

export default async function GeoRoutePage({ params }: Params) {
  const { geoSlug } = await params;
  const page = getGeoPageByRoute(`/${geoSlug}`);

  if (!page) {
    notFound();
  }

  return <GeoPage page={page} />;
}
