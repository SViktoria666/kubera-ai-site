"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type LanguageSwitcherProps = {
  className?: string;
};

export function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const isEnglishOnlyPage = pathname.startsWith("/en/solutions/") || pathname.startsWith("/use-cases/");
  const rootClassName = `language-switcher${className ? ` ${className}` : ""}`;

  if (isEnglishOnlyPage) {
    return (
      <div aria-label="Available language" className={rootClassName}>
        <span aria-current="page" className="lang-button is-current">
          EN
        </span>
      </div>
    );
  }

  return (
    <div aria-label="Language switcher" className={rootClassName}>
      <Link className="lang-button" href="/">
        EN
      </Link>
      <Link className="lang-button" href="/ru">
        RU
      </Link>
    </div>
  );
}
