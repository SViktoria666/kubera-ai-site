import type { Metadata } from "next";
import { NeonPreviewShell } from "@/components/design-lab/NeonPreviewShell";
import { CommercialServicePage } from "@/components/services/CommercialServicePage";
import { germanyLandingPageDesignPage } from "@/content/service-pages/germany-landing-page-design";

export const metadata: Metadata = {
  title: "Kubera Neon Landing-page Preview",
  robots: { index: false, follow: false, nocache: true },
};

export default function NeonLandingPagePreviewPage() {
  return (
    <NeonPreviewShell className="neon-preview-landing-page">
      <CommercialServicePage content={germanyLandingPageDesignPage} neonPreview />
    </NeonPreviewShell>
  );
}
