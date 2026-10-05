import type { Metadata } from "next";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Kubera Neon Contacts Preview",
  robots: { index: false, follow: false, nocache: true },
};

export default function NeonContactsPreviewPage() {
  return (
    <div className="neon-preview neon-preview-contacts">
      <ContactSection locale="en" />
    </div>
  );
}
