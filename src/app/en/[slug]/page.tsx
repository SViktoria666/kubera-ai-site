import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CountryPage } from "@/components/geo/CountryPage";
import { countries } from "@/content/countries/countries";
import { createPageMetadata } from "@/content/seo";

type Params = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return countries.map((country) => ({ slug: country.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const country = countries.find((item) => item.slug === slug);

  if (!country) {
    return {};
  }

  return createPageMetadata({
    title: country.metaTitle,
    description: country.metaDescription,
    path: `/en/${country.slug}`,
    locale: "en",
  });
}

export default async function EnCountryRoute({ params }: Params) {
  const { slug } = await params;
  const country = countries.find((item) => item.slug === slug);

  if (!country) {
    notFound();
  }

  return <CountryPage country={country} />;
}
