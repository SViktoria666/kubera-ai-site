"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/content/site";

export function Footer() {
  const pathname = usePathname();
  const isRu = pathname.startsWith("/ru");
  const isPt = pathname.startsWith("/pt");
  const blogLabel = isRu ? "Блог" : isPt ? "Blogue" : "Blog";
  const telegramLabel = isRu ? "Телеграм" : isPt ? "Telegram" : "Telegram";
  const whatsappLabel = isRu ? "Вотсап" : isPt ? "WhatsApp" : "WhatsApp";

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
          <Link className="footer-link" href={isRu ? "/ru/blog" : "/blog"}>
            <span>{blogLabel}</span>
          </Link>
          <a className="footer-link" href="mailto:hello@kubera-automation.com">
            <FooterIcon type="email" />
            <span>hello@kubera-automation.com</span>
          </a>
          <a className="footer-link" href={siteConfig.telegramUrl}>
            <FooterIcon type="telegram" />
            <span>{telegramLabel}</span>
          </a>
          <a className="footer-link" href="https://wa.me/37253841877">
            <FooterIcon type="whatsapp" />
            <span>{whatsappLabel}</span>
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
