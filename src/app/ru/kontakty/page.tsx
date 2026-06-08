import type { Metadata } from "next";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Контакты",
  description: "",
};

export default function RuContactsPage() {
  return <ContactSection locale="ru" />;
}
