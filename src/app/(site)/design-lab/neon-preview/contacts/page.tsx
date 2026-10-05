import type { Metadata } from "next";
import { NeonPreviewShell } from "@/components/design-lab/NeonPreviewShell";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Kubera Neon Contacts Preview",
  robots: { index: false, follow: false, nocache: true },
};

export default function NeonContactsPreviewPage() {
  return (
    <NeonPreviewShell className="neon-preview-contacts">
      <ContactSection locale="en" />
    </NeonPreviewShell>
  );
}
