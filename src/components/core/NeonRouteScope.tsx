"use client";

import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useState, type ReactNode } from "react";
import { AiAssistantWidget } from "@/components/ai/AiAssistantWidget";

type NeonRouteScopeProps = {
  children: ReactNode;
  assistantEnabled: boolean;
};

/**
 * Protected local/preview-only Neon scope. The query flag is intentionally
 * absent from production navigation, sitemap, and canonical URLs. It wraps
 * the existing shell without changing content, structure, or geometry.
 */
export function NeonRouteScope({ children, assistantEnabled }: NeonRouteScopeProps) {
  const pathname = usePathname();
  const [enabled, setEnabled] = useState(false);
  const [needsAssistantFallback, setNeedsAssistantFallback] = useState(false);

  useLayoutEffect(() => {
    const isNeonReview = new URLSearchParams(window.location.search).get("neon") === "1";
    setEnabled(isNeonReview);
    if (isNeonReview) {
      setNeedsAssistantFallback(!document.querySelector(".ai-assistant-widget"));
    } else {
      setNeedsAssistantFallback(false);
    }
  }, [pathname]);

  useEffect(() => {
    if (!enabled) return;

    const preservePreviewNavigation = () => {
      document.querySelectorAll<HTMLAnchorElement>("a[href]").forEach((anchor) => {
        const rawHref = anchor.getAttribute("href");
        if (!rawHref || rawHref.startsWith("#") || rawHref.startsWith("mailto:") || rawHref.startsWith("tel:")) return;

        const url = new URL(anchor.href, window.location.href);
        if (url.origin !== window.location.origin || url.pathname.startsWith("/_next/") || url.pathname.startsWith("/api/")) return;

        url.searchParams.set("neon", "1");
        const previewHref = `${url.pathname}${url.search}${url.hash}`;
        if (rawHref !== previewHref) anchor.setAttribute("href", previewHref);
      });
    };

    preservePreviewNavigation();
    const observer = new MutationObserver(preservePreviewNavigation);
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [enabled, pathname]);

  if (!enabled) return <>{children}</>;

  return (
    <div className="neon-preview neon-preview-sitewide" data-neon-scope="local-review">
      {children}
      {needsAssistantFallback ? <AiAssistantWidget enabled /> : null}
    </div>
  );
}
