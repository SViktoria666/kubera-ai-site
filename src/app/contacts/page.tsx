import type { Metadata } from "next";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contact",
  description: "",
};

export default function ContactsPage() {
  return <ContactSection locale="en" />;
}
