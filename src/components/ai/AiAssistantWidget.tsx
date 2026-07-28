"use client";

import Image from "next/image";
import { FormEvent, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import type { AiAssistantApiResponse, AiAssistantWidgetProps } from "@/components/ai/types";
import type { AssistantLeadDraft, AssistantMessage } from "@/lib/ai/types";

const initialMessages: AssistantMessage[] = [
  {
    role: "assistant",
    content: "Tell me what you want to automate or improve first.",
  },
];

const assistantUnavailableMessage = "Assistant is temporarily unavailable. Please try again later.";
const assistantFooterGap = 20;
const assistantLiftRootMargin = "0px 0px 200px 0px";

function getBrowserLocale() {
  if (typeof navigator === "undefined") {
    return undefined;
  }

  const language = navigator.language.split("-")[0];
  return language || undefined;
}

export function AiAssistantWidget({ enabled }: AiAssistantWidgetProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [footerLift, setFooterLift] = useState(0);
  const [messages, setMessages] = useState<AssistantMessage[]>(initialMessages);
  const [lead, setLead] = useState<AssistantLeadDraft>({});
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const widgetRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const messagesRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    messagesRef.current?.scrollTo({ top: messagesRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, isOpen]);

  useEffect(() => {
    if (isOpen && !isLoading) {
      inputRef.current?.focus();
    }
  }, [isOpen, isLoading, messages]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const footer = document.querySelector<HTMLElement>(".site-footer");
    if (!footer) {
      setFooterLift(0);
      return;
    }

    let rafId = 0;
    let cleanupObservers: (() => void) | null = null;

    const updateFooterLift = () => {
      rafId = 0;

      const widget = widgetRef.current;
      const button = buttonRef.current;
      if (!widget || !button) {
        setFooterLift(0);
        return;
      }

      const footerRect = footer.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const baseBottom = Number.parseFloat(
        window.getComputedStyle(widget).getPropertyValue("--ai-assistant-base-bottom"),
      );
      const buttonHeight = button.getBoundingClientRect().height;

      if (footerRect.top >= viewportHeight) {
        setFooterLift(0);
        return;
      }

      const requiredLift =
        viewportHeight - footerRect.top + assistantFooterGap - (Number.isFinite(baseBottom) ? baseBottom : 0);
      const maxLift = Math.max(0, viewportHeight - buttonHeight - (Number.isFinite(baseBottom) ? baseBottom : 0) - assistantFooterGap);
      setFooterLift(Math.max(0, Math.min(requiredLift, maxLift)));
    };

    const scheduleUpdate = () => {
      if (rafId) {
        return;
      }

      rafId = window.requestAnimationFrame(updateFooterLift);
    };

    const attachActiveObservers = () => {
      window.addEventListener("scroll", scheduleUpdate, { passive: true });
      window.addEventListener("resize", scheduleUpdate);
      window.visualViewport?.addEventListener("resize", scheduleUpdate);

      const footerResizeObserver = new ResizeObserver(scheduleUpdate);
      footerResizeObserver.observe(footer);

      cleanupObservers = () => {
        window.removeEventListener("scroll", scheduleUpdate);
        window.removeEventListener("resize", scheduleUpdate);
        window.visualViewport?.removeEventListener("resize", scheduleUpdate);
        footerResizeObserver.disconnect();
      };
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          scheduleUpdate();
          if (!cleanupObservers) {
            attachActiveObservers();
          }
        } else {
          setFooterLift(0);
          cleanupObservers?.();
          cleanupObservers = null;
        }
      },
      {
        root: null,
        threshold: 0,
        rootMargin: assistantLiftRootMargin,
      },
    );

    observer.observe(footer);
    scheduleUpdate();

    return () => {
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
      cleanupObservers?.();
      observer.disconnect();
    };
  }, [pathname, enabled]);

  if (!enabled) {
    return null;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const content = input.trim();
    if (!content || isLoading) {
      return;
    }

    const userMessage: AssistantMessage = { role: "user", content };
    const nextMessages = [...messages, userMessage];
    setMessages(nextMessages);
    setInput("");
    setError("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          context: {
            locale: getBrowserLocale(),
            currentPath: pathname || "/",
          },
          messages: nextMessages,
          lead,
          submissionCompleted: submitted,
        }),
      });
      const contentType = response.headers.get("content-type") || "";

      if (!contentType.toLowerCase().includes("application/json")) {
        throw new Error(assistantUnavailableMessage);
      }

      const data = (await response.json()) as AiAssistantApiResponse;

      if (!response.ok || !data.ok || !data.message) {
        throw new Error(data.error || assistantUnavailableMessage);
      }

      setLead(data.lead || {});
      setSubmitted((current) => current || Boolean(data.submitted));
      setMessages((current) => [...current, data.message as AssistantMessage]);
    } catch {
      setError(assistantUnavailableMessage);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div
      ref={widgetRef}
      className={`ai-assistant-widget${isOpen ? " is-open" : ""}`}
      style={{ ["--ai-assistant-footer-lift" as string]: `${footerLift}px` }}
    >
      <button
        className="ai-assistant-button"
        type="button"
        aria-label="Open Kubera AI assistant"
        aria-expanded={isOpen}
        aria-controls="kubera-ai-assistant-panel"
        ref={buttonRef}
        onClick={() => setIsOpen((open) => !open)}
      >
        <span className="ai-assistant-button-visual" aria-hidden="true">
          <Image
            alt=""
            fill
            src="/images/ai-assistant/kubera-ai-mascot.png"
            sizes="(max-width: 560px) 80px, (max-width: 900px) 96px, 108px"
          />
        </span>
      </button>

      <aside
        id="kubera-ai-assistant-panel"
        className="ai-assistant-panel"
        aria-label="Kubera AI assistant"
        aria-hidden={!isOpen}
      >
        <div className="ai-assistant-panel-header">
          <div>
            <strong>Kubera AI Assistant</strong>
          </div>
          <button type="button" aria-label="Close AI assistant" onClick={() => setIsOpen(false)}>
            x
          </button>
        </div>

        <div className="ai-assistant-messages" ref={messagesRef}>
          {messages.map((message, index) => (
            <div className={`ai-assistant-message is-${message.role}`} key={`${message.role}-${index}`}>
              {message.content}
            </div>
          ))}
          {isLoading ? <div className="ai-assistant-message is-assistant">...</div> : null}
        </div>

        {error ? <p className="ai-assistant-error">{error}</p> : null}

        <form className="ai-assistant-form" onSubmit={handleSubmit}>
          <input
            aria-label="Message for AI assistant"
            disabled={isLoading}
            maxLength={1200}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Type your message"
            ref={inputRef}
            type="text"
            value={input}
          />
          <button type="submit" disabled={isLoading || !input.trim()} aria-label="Send message">
            Send
          </button>
        </form>
      </aside>
    </div>
  );
}
