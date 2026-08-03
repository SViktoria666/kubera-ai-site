import { ContactForm } from "@/components/forms/ContactForm";
import { siteConfig } from "@/content/site";

export function ContactSection({ locale }: { locale: "en" | "ru" }) {
  const isRu = locale === "ru";

  return (
    <main className="section">
      <div className="container contact-layout">
        <div>
          <h1 className="section-title">{isRu ? "Расскажите о вашем бизнесе." : "Tell us about your business."}</h1>
          <div className="contact-links">
            <a
              className="contact-link"
              href={`mailto:${siteConfig.email}`}
              aria-label={`Email Kubera AI at ${siteConfig.email}`}
              data-analytics-event="email_click"
              data-analytics-placement="contacts"
              data-analytics-contact-method="email"
            >
              <span className="contact-link-main">
                <ContactIcon type="email" />
                {siteConfig.email}
              </span>
              <span>↗</span>
            </a>
            <a
              className="contact-link"
              href={siteConfig.telegramUrl}
              data-analytics-event="telegram_click"
              data-analytics-placement="contacts"
              data-analytics-contact-method="telegram"
            >
              <span className="contact-link-main">
                <ContactIcon type="telegram" />
                Telegram
              </span>
              <span>@kubera_automation</span>
            </a>
            <a
              className="contact-link"
              href="https://wa.me/37253841877"
              data-analytics-event="whatsapp_click"
              data-analytics-placement="contacts"
              data-analytics-contact-method="whatsapp"
            >
              <span className="contact-link-main">
                <ContactIcon type="whatsapp" />
                WhatsApp
              </span>
              <span>+37253841877</span>
            </a>
          </div>
        </div>
        <ContactForm locale={locale} />
      </div>
    </main>
  );
}

function ContactIcon({ type }: { type: "email" | "telegram" | "whatsapp" }) {
  if (type === "email") {
    return (
      <svg className="contact-icon" viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M4 7l8 6 8-6" />
      </svg>
    );
  }

  if (type === "telegram") {
    return (
      <svg className="contact-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M21 4L3 11l7 2 2 7 3-5 5 4 1-15z" />
      </svg>
    );
  }

  return (
    <svg className="contact-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 19l1-3a8 8 0 1 1 3 2z" />
      <path d="M9 8c1 4 3 6 7 7" />
    </svg>
  );
}
