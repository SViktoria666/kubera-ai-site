"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const commercialLandingPageRoutes = new Set([
  "/services/landing-page-design",
  "/pt/services/landing-page-design",
  "/services/portugal/landing-page-design",
  "/pt/services/portugal/landing-page-design",
]);

const commercialRoutePairs: Record<string, { en: string; pt: string }> = {
  "/services/landing-page-design": {
    en: "/services/landing-page-design",
    pt: "/pt/services/landing-page-design",
  },
  "/pt/services/landing-page-design": {
    en: "/services/landing-page-design",
    pt: "/pt/services/landing-page-design",
  },
  "/services/portugal/landing-page-design": {
    en: "/services/portugal/landing-page-design",
    pt: "/pt/services/portugal/landing-page-design",
  },
  "/pt/services/portugal/landing-page-design": {
    en: "/services/portugal/landing-page-design",
    pt: "/pt/services/portugal/landing-page-design",
  },
};

export function LanguageSwitcher() {
  const pathname = usePathname();
  const isEnglishOnlyPage = pathname.startsWith("/en/solutions/") || pathname.startsWith("/use-cases/");
  const isLandingPageDesignPage = commercialLandingPageRoutes.has(pathname);

  if (isLandingPageDesignPage) {
    const isPortuguesePage = pathname.startsWith("/pt/");
    const routePair = commercialRoutePairs[pathname];

    return (
      <div aria-label="Available language" className="language-switcher">
        {isPortuguesePage ? (
          <>
            <Link className="lang-button" href={routePair.en}>
              EN
            </Link>
            <span aria-current="page" className="lang-button is-current">
              PT
            </span>
          </>
        ) : (
          <>
            <span aria-current="page" className="lang-button is-current">
              EN
            </span>
            <Link className="lang-button" href={routePair.pt}>
              PT
            </Link>
          </>
        )}
      </div>
    );
  }

  if (isEnglishOnlyPage) {
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
