import { NextResponse, type NextRequest } from "next/server";
import { legacyGeoRoutes, normalizeGeoRoute } from "@/content/geo/routes";

const CANONICAL_HOST = "www.kubera-automation.com";

const legacyPathRedirects: Record<string, string> = {
  "/en-services": "/services",
  "/en-kontakty": "/contacts",
  "/es/espana-automatizacion": "/automatizacion-ia-espana",
  ...Object.fromEntries(legacyGeoRoutes.map((route) => [route, normalizeGeoRoute(route)])),
};

export function middleware(request: NextRequest) {
  const { hostname, pathname } = request.nextUrl;
  const isManagedDomain = hostname === "kubera-automation.com" || hostname === CANONICAL_HOST;

  if (!isManagedDomain) {
    return NextResponse.next();
  }

  const canonicalUrl = request.nextUrl.clone();
  canonicalUrl.protocol = "https:";
  canonicalUrl.hostname = CANONICAL_HOST;
  canonicalUrl.port = "";
  canonicalUrl.pathname = legacyPathRedirects[pathname] ?? pathname;

  const isCanonicalHost = hostname === CANONICAL_HOST;
  const isCanonicalPath = canonicalUrl.pathname === pathname;
  const isHttps = request.nextUrl.protocol === "https:";

  if (isCanonicalHost && isCanonicalPath && isHttps) {
    return NextResponse.next();
  }

  return NextResponse.redirect(canonicalUrl, 301);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
