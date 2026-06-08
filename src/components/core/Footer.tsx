export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <strong>KUBERA AI</strong>
        </div>
        <div className="footer-links">
          <a className="footer-link" href="mailto:hello@kubera-automation.com">
            <FooterIcon type="email" />
            <span>hello@kubera-automation.com</span>
          </a>
          <a className="footer-link" href="https://t.me/kubera_automation">
            <FooterIcon type="telegram" />
            <span>Telegram</span>
          </a>
          <a className="footer-link" href="https://wa.me/37253841877">
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
