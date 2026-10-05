import type { Metadata } from "next";
import { IndustrySolutionTemplate } from "@/components/industry-solutions/IndustrySolutionTemplate";
import { getIndustrySolutionByRoute } from "@/content/industry-solutions";

export const metadata: Metadata = {
  title: "Kubera Neon Commercial Preview",
  robots: { index: false, follow: false, nocache: true },
};

export default function NeonCommercialPreviewPage() {
  const solution = getIndustrySolutionByRoute("germany", "whatsapp-automation");

  if (!solution) {
    throw new Error("Germany WhatsApp solution data is unavailable for the protected preview.");
  }

  return (
    <div className="neon-preview neon-preview-commercial">
      <IndustrySolutionTemplate solution={solution} schemas={[]} />
    </div>
  );
}
