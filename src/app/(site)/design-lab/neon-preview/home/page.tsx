import type { Metadata } from "next";
import { HomeDesignPrototype } from "@/components/design-lab/HomeDesignPrototype";

export const metadata: Metadata = {
  title: "Kubera Neon Home Preview",
  robots: { index: false, follow: false, nocache: true },
};

export default function NeonHomePreviewPage() {
  return (
    <div className="neon-preview neon-preview-home">
      <HomeDesignPrototype />
    </div>
  );
}
