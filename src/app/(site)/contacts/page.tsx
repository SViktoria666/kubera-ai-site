import type { Metadata } from "next";
import { ContactSection } from "@/components/sections/ContactSection";
import { createPageMetadata } from "@/content/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Contact",
  description: "Contact Kubera AI by email, Telegram, or WhatsApp to discuss AI automation, CRM workflows, lead processing, and digital workforce systems.",
  path: "/contacts",
  locale: "en",
});

export default function ContactsPage() {
  return <ContactSection locale="en" />;
}
