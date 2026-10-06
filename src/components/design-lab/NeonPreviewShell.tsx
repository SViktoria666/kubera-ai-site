"use client";

import { useEffect, useState, type ReactNode } from "react";
import { AiAssistantWidget } from "@/components/ai/AiAssistantWidget";

type NeonPreviewShellProps = {
  children: ReactNode;
  className: string;
};

/**
 * Local-only review harness. Production shell behavior remains controlled by
 * AI_ASSISTANT_ENABLED; this wrapper makes compatibility review possible even
 * when the local owner-review server has that environment flag disabled.
 */
export function NeonPreviewShell({ children, className }: NeonPreviewShellProps) {
  const [needsAssistantFallback, setNeedsAssistantFallback] = useState(false);

  useEffect(() => {
    setNeedsAssistantFallback(!document.querySelector(".ai-assistant-widget"));
  }, []);

  return (
    <>
      <div className={`neon-preview ${className}`}>{children}</div>
      {needsAssistantFallback ? <AiAssistantWidget enabled /> : null}
    </>
  );
}
