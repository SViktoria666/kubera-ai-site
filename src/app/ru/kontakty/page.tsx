import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Контакты",
  description: "Связаться с командой Kubera AI.",
};

export default function RuContactsPage() {
  return (
    <main className="section">
      <div className="container">
        <p className="eyebrow">Контакты</p>
        <h1>Расскажите о вашем бизнесе.</h1>
        <p className="lead">Email: hello@kubera-automation.com · WhatsApp: +37253841877 · Telegram: @kubera_automation</p>
        <ContactForm locale="ru" />
      </div>
    </main>
  );
}

