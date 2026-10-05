import type { Metadata } from "next";
import { GeoPage } from "@/components/geo/GeoPage";
import { getGeoPageByRoute } from "@/content/geo/loader";

export const metadata: Metadata = {
  title: "Kubera Neon GEO Preview",
  robots: { index: false, follow: false, nocache: true },
};

export default function NeonGeoPreviewPage() {
  const page = getGeoPageByRoute("/ai-automation-germany");

  if (!page) {
    throw new Error("Germany GEO data is unavailable for the protected preview.");
  }

  return (
    <div className="neon-preview neon-preview-geo">
      <GeoPage page={page} />
    </div>
  );
}
