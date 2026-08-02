"use client";

import Image from "next/image";
import { FormEvent, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import type { AiAssistantApiResponse, AiAssistantWidgetProps } from "@/components/ai/types";
import { buildAssistantConversationMemory } from "@/lib/ai/conversation-memory";
import type { AssistantLeadDraft, AssistantLocale, AssistantMessage } from "@/lib/ai/types";
import { buildCurrentPageContext, trackUmamiEvent } from "@/lib/analytics";

const assistantStorageKey = "kubera-ai-assistant-state-v2";
const maxStoredMessages = 60;
const maxRequestMessages = 20;

const initialMessages: AssistantMessage[] = [
  {
    role: "assistant",
    content: "Hi, I’m Kubera AI Assistant. Tell me what you’d like to automate or improve, and I’ll help you find the best fit.",
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

function trimMessages(messages: AssistantMessage[]) {
  if (messages.length <= maxStoredMessages) {
    return messages;
  }

  return messages.slice(-maxStoredMessages);
}

function readStoredConversationState() {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const raw = window.sessionStorage.getItem(assistantStorageKey);
    if (!raw) {
      return null;
    }

    const parsed = JSON.parse(raw) as {
      messages?: AssistantMessage[];
      lead?: AssistantLeadDraft;
      submitted?: boolean;
    };

    if (!Array.isArray(parsed.messages)) {
      return null;
    }

    return {
      messages: parsed.messages,
      lead: parsed.lead || {},
      submitted: Boolean(parsed.submitted),
    };
  } catch {
    return null;
  }
}

function saveStoredConversationState(state: { messages: AssistantMessage[]; lead: AssistantLeadDraft; submitted: boolean }) {
  if (typeof window === "undefined") {
    return;
  }

  try {
    window.sessionStorage.setItem(
      assistantStorageKey,
      JSON.stringify({
        messages: trimMessages(state.messages),
        lead: state.lead,
        submitted: state.submitted,
      }),
    );
  } catch {
    // Ignore storage failures; the widget should keep working without persistence.
  }
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
  const [hasHydrated, setHasHydrated] = useState(false);
  const widgetRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const messagesRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const activeRequestRef = useRef(0);
  const isOpenRef = useRef(false);
  const hasStartedRef = useRef(false);
  const hasTrackedContactStepRef = useRef(false);
  const hasTrackedSubmittedRef = useRef(false);

  useEffect(() => {
    isOpenRef.current = isOpen;
  }, [isOpen]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const stored = readStoredConversationState();
    if (stored) {
      setMessages(stored.messages.length ? trimMessages(stored.messages) : [...initialMessages]);
      setLead(stored.lead);
      setSubmitted(stored.submitted);
      hasStartedRef.current = stored.messages.some((message) => message.role === "user");
      hasTrackedSubmittedRef.current = stored.submitted;
      hasTrackedContactStepRef.current = Boolean(stored.lead.email || stored.lead.telegram || stored.lead.whatsapp || stored.lead.name || stored.lead.company);
    }

    setHasHydrated(true);
  }, []);

  useEffect(() => {
    if (!hasHydrated) {
      return;
    }

    saveStoredConversationState({ messages, lead, submitted });
  }, [hasHydrated, lead, messages, submitted]);

  function closeAssistant() {
    activeRequestRef.current += 1;
    const wasSubmitted = submitted;
    setIsOpen(false);
    trackUmamiEvent("ai_assistant_closed", {
      ...buildCurrentPageContext(),
      conversation_stage: wasSubmitted ? "submitted" : "exploring",
    });
  }

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

    const requestId = ++activeRequestRef.current;
    const userMessage: AssistantMessage = { role: "user", content };
    const nextMessages = [...messages, userMessage];
    const pageContext = buildCurrentPageContext();

    if (!hasStartedRef.current) {
      hasStartedRef.current = true;
      trackUmamiEvent("ai_assistant_started", {
        ...pageContext,
        conversation_stage: submitted ? "submitted" : "exploring",
      });
    }

    trackUmamiEvent("ai_assistant_message_sent", {
      ...pageContext,
      conversation_stage: submitted ? "submitted" : "exploring",
    });
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
            ...pageContext,
            conversationMemory: buildAssistantConversationMemory(nextMessages, lead, {
              currentPath: pathname || "/",
              locale: getBrowserLocale() as AssistantLocale | undefined,
              country: pageContext.country_market,
              visitorIntent: pageContext.page_type === "pricing" ? "pricing" : pageContext.page_type === "contacts" ? "contact" : pageContext.page_type === "services" ? "services" : "unknown",
            }),
          },
          messages: nextMessages.slice(-maxRequestMessages),
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

      if (requestId !== activeRequestRef.current || !isOpenRef.current) {
        return;
      }

      const nextLead = data.lead || {};
      const hadContactData = Boolean(nextLead.name || nextLead.company || nextLead.email || nextLead.telegram || nextLead.whatsapp);

      setLead(nextLead);
      setSubmitted((current) => current || Boolean(data.submitted));
      setMessages((current) => [...current, data.message as AssistantMessage]);

      if (hadContactData && !hasTrackedContactStepRef.current) {
        hasTrackedContactStepRef.current = true;
        trackUmamiEvent("ai_assistant_contact_step_started", {
          ...buildCurrentPageContext(),
          conversation_stage: "contact_collection",
        });
      }

      if (Boolean(data.submitted) && !hasTrackedSubmittedRef.current) {
        hasTrackedSubmittedRef.current = true;
        trackUmamiEvent("ai_assistant_submitted", {
          ...buildCurrentPageContext(),
          submission_completed: true,
          conversation_stage: "submitted",
        });
      }
    } catch {
      if (requestId !== activeRequestRef.current || !isOpenRef.current) {
        return;
      }

      setError(assistantUnavailableMessage);
    } finally {
      if (requestId === activeRequestRef.current) {
        setIsLoading(false);
      }
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
        onClick={() => {
          setIsOpen(true);
          trackUmamiEvent("ai_assistant_opened", {
            ...buildCurrentPageContext(),
            conversation_stage: submitted ? "submitted" : "initial",
          });
        }}
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
          <div className="ai-assistant-panel-brand">
            <span className="ai-assistant-panel-mark" aria-hidden="true">
              <Image alt="" className="ai-assistant-panel-mark-image" height={797} src="/images/ai-assistant/kubera-ai-mascot.png" width={512} />
            </span>
            <div>
              <strong>Kubera AI Assistant</strong>
            </div>
          </div>
          <button type="button" aria-label="Close Kubera AI assistant" onClick={closeAssistant}>
            <span aria-hidden="true">{"\u00d7"}</span>
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
