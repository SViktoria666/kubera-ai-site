"use client";

import Link from "next/link";

export function LanguageSwitcher() {
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
