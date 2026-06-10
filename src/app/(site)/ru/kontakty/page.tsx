import type { Metadata } from "next";
import { ContactSection } from "@/components/sections/ContactSection";
import { createPageMetadata } from "@/content/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Контакты",
  description: "Свяжитесь с Kubera AI по email, Telegram или WhatsApp, чтобы обсудить AI-автоматизацию, CRM, обработку лидов и цифровых сотрудников.",
  path: "/ru/kontakty",
  locale: "ru",
});

export default function RuContactsPage() {
  return <ContactSection locale="ru" />;
}
