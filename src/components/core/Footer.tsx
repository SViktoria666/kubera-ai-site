import Link from "next/link";
import { siteConfig } from "@/content/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="footer-legal">
            <strong>Kubera Digital OÜ</strong>
            <span>/</span>
            <span>Registry code 17524486</span>
          </span>
        </div>
        <div className="footer-links">
          <Link className="footer-link" href="/blog">
            <span>Blog</span>
          </Link>
          <Link className="footer-link" href="/ru/blog">
            <span>Блог</span>
          </Link>
          <a
            className="footer-link"
            href={`mailto:${siteConfig.email}`}
            aria-label={`Email Kubera AI at ${siteConfig.email}`}
            data-matomo-event="contact_click"
            data-matomo-category="Contact"
            data-matomo-action="Email"
            data-matomo-label={siteConfig.email}
          >
            <FooterIcon type="email" />
            <span>{siteConfig.email}</span>
          </a>
          <a
            className="footer-link"
            href={siteConfig.telegramUrl}
            data-matomo-event="contact_click"
            data-matomo-category="Contact"
            data-matomo-action="Telegram"
            data-matomo-label="Footer Telegram"
          >
            <FooterIcon type="telegram" />
            <span>Telegram</span>
          </a>
          <a
            className="footer-link"
            href="https://wa.me/37253841877"
            data-matomo-event="contact_click"
            data-matomo-category="Contact"
            data-matomo-action="WhatsApp"
            data-matomo-label="Footer WhatsApp"
          >
            <FooterIcon type="whatsapp" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

function FooterIcon({ type }: { type: "email" | "telegram" | "whatsapp" }) {
  if (type === "email") {
    return (
      <svg className="footer-icon" viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M4 7l8 6 8-6" />
      </svg>
    );
  }

  if (type === "telegram") {
    return (
      <svg className="footer-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M21 4L3 11l7 2 2 7 3-5 5 4 1-15z" />
      </svg>
    );
  }

  return (
    <svg className="footer-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 19l1-3a8 8 0 1 1 3 2z" />
      <path d="M9 8c1 4 3 6 7 7" />
    </svg>
  );
}
