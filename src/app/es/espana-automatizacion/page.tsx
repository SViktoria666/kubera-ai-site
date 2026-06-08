import type { Metadata } from "next";
import { CountryPage } from "@/components/geo/CountryPage";
import { spanishSpainPage } from "@/content/countries/spanish-spain";

export const metadata: Metadata = {
  title: spanishSpainPage.metaTitle,
  description: spanishSpainPage.metaDescription,
  alternates: {
    canonical: "/es/espana-automatizacion",
  },
};

export default function SpainSpanishPage() {
  return <CountryPage country={spanishSpainPage} />;
}

