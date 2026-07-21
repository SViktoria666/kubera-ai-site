"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LanguageSwitcher } from "@/components/core/LanguageSwitcher";
import { navItems } from "@/content/en/navigation";
import { getAssetByName } from "@/content/assets";
import { ptNavItems } from "@/content/pt/navigation";
import { ruNavItems } from "@/content/ru/navigation";
import { siteConfig } from "@/content/site";

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const logo = getAssetByName("kubera-logo-main");
  const isRu = pathname.startsWith("/ru");
  const isPt = pathname.startsWith("/pt");
  const nav = isRu ? ruNavItems : isPt ? ptNavItems : navItems;
  const ctaHref = isRu ? "/ru/kontakty" : "/contacts";
  const ctaLabel = isRu ? "Обсудить проект" : isPt ? "Falar sobre o meu projeto" : "Discuss my project";
  const brandSubtitle = siteConfig.description;
  const headerClassName = `site-header${isRu ? " site-header-ru" : ""}`;
  const navLabel = isRu ? "Основная навигация" : isPt ? "Navegação principal" : "Main navigation";
  const menuLabel = isRu ? "Открыть меню" : isPt ? "Abrir menu" : "Toggle navigation";

  const isActiveNavItem = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (typeof document === "undefined") {
      return;
    }

    document.documentElement.lang = isRu ? "ru" : isPt ? "pt-PT" : "en";
  }, [isPt, isRu, pathname]);

  return (
    <header className={headerClassName} lang={isRu ? "ru" : isPt ? "pt-PT" : "en"}>
      <div className="container header-inner">
        <div className="header-topline">
          <Link href={isRu ? "/ru" : "/"} aria-label="Kubera AI home" className="header-logo">
            <span className="header-logo-mark" aria-hidden="true">
              {logo ? <Image src={logo.localPath} alt="" width={1536} height={1024} priority /> : null}
            </span>
            <span className="header-brand-copy">
              <strong>KUBERA AI</strong>
              <span lang="en" translate="no">
                {brandSubtitle}
              </span>
            </span>
          </Link>
          <div className="header-mobile-tools">
            <LanguageSwitcher />
            <button
              className="menu-toggle"
              type="button"
              aria-label={menuLabel}
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
        <nav aria-label={navLabel} className={`main-nav${isMenuOpen ? " is-open" : ""}`}>
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-link${isActiveNavItem(item.href) ? " is-active" : ""}`}
              aria-current={isActiveNavItem(item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className={`header-actions${isMenuOpen ? " is-open" : ""}`}>
          <LanguageSwitcher />
          <Link className="button" href={ctaHref}>
            {ctaLabel}
          </Link>
        </div>
      </div>
    </header>
  );
}
