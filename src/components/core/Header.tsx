"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LanguageSwitcher } from "@/components/core/LanguageSwitcher";
import { navItems } from "@/content/en/navigation";
import { ruNavItems } from "@/content/ru/navigation";
import { getAssetByName } from "@/content/assets";

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const logo = getAssetByName("kubera-logo-main");
  const isRu = pathname.startsWith("/ru");
  const nav = isRu ? ruNavItems : navItems;
  const ctaHref = isRu ? "/ru/kontakty" : "/contacts";
  const ctaLabel = isRu ? "Обсудить мой проект" : "Discuss my project";

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="header-topline">
          <a href={isRu ? "/ru" : "/"} aria-label="Kubera AI home" className="header-logo">
            <span className="header-logo-mark" aria-hidden="true">
              {logo ? <Image src={logo.localPath} alt="" width={320} height={180} priority /> : null}
            </span>
            <span className="header-brand-copy">
              <strong>KUBERA AI</strong>
              <span>Living Systems. Smart Automation.</span>
            </span>
          </a>
          <div className="header-mobile-tools">
            <LanguageSwitcher />
            <button className="menu-toggle" type="button" aria-label="Toggle navigation" aria-expanded={isMenuOpen} onClick={() => setIsMenuOpen((open) => !open)}>
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
        <nav aria-label="Main navigation" className={`main-nav${isMenuOpen ? " is-open" : ""}`}>
          {nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className={`header-actions${isMenuOpen ? " is-open" : ""}`}>
          <LanguageSwitcher />
          <a className="button" href={ctaHref}>
            {ctaLabel}
          </a>
        </div>
      </div>
    </header>
  );
}
