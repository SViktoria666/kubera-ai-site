import type { Metadata } from "next";
import { CountryPage } from "@/components/geo/CountryPage";
import { spanishSpainPage } from "@/content/countries/spanish-spain";
import { createPageMetadata } from "@/content/seo";

export const metadata: Metadata = createPageMetadata({
  title: spanishSpainPage.metaTitle,
  description: spanishSpainPage.metaDescription,
  path: "/es/espana-automatizacion",
  locale: "es",
});

export default function SpainSpanishPage() {
  return <CountryPage country={spanishSpainPage} />;
}
