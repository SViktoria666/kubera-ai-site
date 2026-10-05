import type { Metadata } from "next";
import { NeonPreviewShell } from "@/components/design-lab/NeonPreviewShell";
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
    <NeonPreviewShell className="neon-preview-geo">
      <GeoPage page={page} />
    </NeonPreviewShell>
  );
}
