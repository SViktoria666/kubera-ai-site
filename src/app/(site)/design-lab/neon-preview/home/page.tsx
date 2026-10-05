import type { Metadata } from "next";
import { HomeDesignPrototype } from "@/components/design-lab/HomeDesignPrototype";
import { NeonPreviewShell } from "@/components/design-lab/NeonPreviewShell";

export const metadata: Metadata = {
  title: "Kubera Neon Home Preview",
  robots: { index: false, follow: false, nocache: true },
};

export default function NeonHomePreviewPage() {
  return (
    <NeonPreviewShell className="neon-preview-home">
      <HomeDesignPrototype />
    </NeonPreviewShell>
  );
}
