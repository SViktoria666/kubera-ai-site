import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contacts",
  description: "Contact Kubera AI automation team.",
};

export default function ContactsPage() {
  return (
    <main className="section">
      <div className="container">
        <p className="eyebrow">Contacts</p>
        <h1>Tell us about your business.</h1>
        <p className="lead">Email: hello@kubera-automation.com · WhatsApp: +37253841877 · Telegram: @kubera_automation</p>
        <ContactForm locale="en" />
      </div>
    </main>
  );
}

