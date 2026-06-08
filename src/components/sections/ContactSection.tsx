import { ContactForm } from "@/components/forms/ContactForm";

export function ContactSection({ locale }: { locale: "en" | "ru" }) {
  const isRu = locale === "ru";

  return (
    <main className="section">
      <div className="container contact-layout">
        <div>
          <p className="eyebrow">Living Systems. Smart Automation.</p>
          <h1 className="section-title">{isRu ? "Расскажите о вашем бизнесе." : "Tell us about your business."}</h1>
          <div className="contact-links">
            <a className="contact-link" href="mailto:hello@kubera-automation.com">
              hello@kubera-automation.com <span>↗</span>
            </a>
            <a className="contact-link" href="https://t.me/kubera_automation">
              Telegram <span>@kubera_automation</span>
            </a>
            <a className="contact-link" href="https://wa.me/37253841877">
              WhatsApp <span>+37253841877</span>
            </a>
          </div>
        </div>
        <ContactForm locale={locale} />
      </div>
    </main>
  );
}
