"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { LanguageSwitcher } from "@/components/core/LanguageSwitcher";
import { navItems } from "@/content/en/navigation";
import { ruNavItems } from "@/content/ru/navigation";
import { getAssetByName } from "@/content/assets";

export function Header() {
  const pathname = usePathname();
  const logo = getAssetByName("kubera-logo-main");
  const isRu = pathname.startsWith("/ru");
  const nav = isRu ? ruNavItems : navItems;
  const ctaHref = isRu ? "/ru/kontakty" : "/contacts";
  const ctaLabel = isRu ? "Обсудить мой проект" : "Discuss my project";

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href={isRu ? "/ru" : "/"} aria-label="Kubera AI home" className="header-logo">
          {logo ? (
            <Image src={logo.localPath} alt="Kubera AI" width={180} height={108} priority />
          ) : (
            <strong>KUBERA AI</strong>
          )}
        </a>
        <nav aria-label="Main navigation" className="main-nav">
          {nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <LanguageSwitcher />
          <a className="button" href={ctaHref}>
            {ctaLabel}
          </a>
        </div>
      </div>
    </header>
  );
}
