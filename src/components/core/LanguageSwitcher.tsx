"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function LanguageSwitcher() {
  const pathname = usePathname();
  const isEnglishSolutionPage = pathname.startsWith("/en/solutions/");

  if (isEnglishSolutionPage) {
    return (
      <div aria-label="Available language" className="language-switcher">
        <span aria-current="page" className="lang-button is-current">
          EN
        </span>
      </div>
    );
  }

  return (
    <div aria-label="Language switcher" className="language-switcher">
      <Link className="lang-button" href="/">
        EN
      </Link>
      <Link className="lang-button" href="/ru">
        RU
      </Link>
    </div>
  );
}
