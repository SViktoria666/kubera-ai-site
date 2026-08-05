"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { FormEvent, useEffect, useRef, useState } from "react";
import type { AiAssistantApiResponse, AiAssistantWidgetProps } from "@/components/ai/types";
import { buildAssistantConversationMemory } from "@/lib/ai/conversation-memory";
import { detectAssistantLocaleFromText, getAssistantUiCopy, normalizeAssistantLocale } from "@/lib/ai/assistant-localization";
import type { AssistantLeadDraft, AssistantLocale, AssistantMessage } from "@/lib/ai/types";
import type { JourneyAnalyticsContext } from "@/lib/analytics/journey-types";
import { buildCurrentPageContext, getPageLanguage, trackUmamiEvent } from "@/lib/analytics";
import { buildJourneyAnalyticsContext } from "@/lib/analytics/journey";

type AssistantSessionPhase = "closed" | "active" | "waiting_for_response" | "collecting_contacts" | "submitting_lead" | "transient_error" | "completed";
type AssistantErrorCategory = "network" | "server" | "malformed" | "validation" | "unknown";
type RetrySource = "manual" | "auto";

type AssistantRequestPayload = {
  context: {
    locale?: AssistantLocale;
    currentPath: string;
    page_path: string;
    page_language: string;
    page_type: string;
    country_market?: string;
    service_slug?: string;
    article_slug?: string;
    case_slug?: string;
    conversationMemory: ReturnType<typeof buildAssistantConversationMemory>;
  };
  messages: AssistantMessage[];
  lead: AssistantLeadDraft;
  submissionCompleted: boolean;
  analyticsContext?: JourneyAnalyticsContext;
};

type PendingTurn = {
  sessionId: string;
  locale: AssistantLocale;
  pageContext: ReturnType<typeof buildCurrentPageContext>;
  requestPayload: AssistantRequestPayload;
  hadContactData: boolean;
  usedRetry: boolean;
};

type AssistantErrorState = {
  category: AssistantErrorCategory;
  retryable: boolean;
  message: string;
};

const maxStoredMessages = 80;
const maxRequestMessages = 20;
const assistantFooterGap = 20;
const assistantLiftRootMargin = "0px 0px 200px 0px";

const copy = {
  en: {
    welcome: "Hi! I’m the Kubera AI Assistant. I can help you find the right AI automation solution for your business. What would you like to improve or automate?",
    placeholder: "Type your message",
    send: "Send",
    retry: "Retry",
    temporaryError: "Sorry - I had a temporary connection issue. Your conversation is still here. Please try again.",
  },
  ru: {
    welcome: "Здравствуйте! Я Kubera AI Assistant. Помогу подобрать подходящее AI-решение для вашего бизнеса. Что вы хотите улучшить или автоматизировать?",
    placeholder: "Введите сообщение",
    send: "Отправить",
    retry: "Повторить",
    temporaryError: "Извините, произошла временная ошибка соединения. Диалог сохранён. Попробуйте еще раз.",
  },
  es: {
    welcome: "Hola. Soy Kubera AI Assistant. Puedo ayudarte a encontrar la mejor solucion de automatizacion con IA para tu negocio. ¿Que te gustaria mejorar o automatizar?",
    placeholder: "Escribe tu mensaje",
    send: "Enviar",
    retry: "Reintentar",
    temporaryError: "Lo siento - hubo un problema temporal de conexion. Tu conversacion sigue aqui. Intentalo de nuevo.",
  },
} as const;

function getBrowserLocale() {
  if (typeof navigator === "undefined") {
    return undefined;
  }

  const language = navigator.language.split("-")[0];
  return language || undefined;
}

function resolveAssistantLocale(pathname: string): AssistantLocale {
  const routeLanguage = getPageLanguage(pathname);
  const browserLocale = getBrowserLocale();
  return normalizeAssistantLocale(routeLanguage !== "en" ? routeLanguage : browserLocale, "en");
}

function getCopy(locale: AssistantLocale) {
  return getAssistantUiCopy(locale);
}

function getWelcomeMessage(locale: AssistantLocale) {
  return getCopy(locale).welcome;
}

function getTemporaryErrorMessage(locale: AssistantLocale) {
  return getCopy(locale).temporaryError;
}

function getPlaceholder(locale: AssistantLocale) {
  return getCopy(locale).placeholder;
}

function getSendLabel(locale: AssistantLocale) {
  return getCopy(locale).send;
}

function getRetryLabel(locale: AssistantLocale) {
  return getCopy(locale).retry;
}

function createSessionId() {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }

  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function trimMessages(messages: AssistantMessage[]) {
  if (messages.length <= maxStoredMessages) {
    return messages;
  }

  return messages.slice(-maxStoredMessages);
}

function hasLeadContactData(lead: AssistantLeadDraft) {
  return Boolean(lead.name || lead.company || lead.email || lead.telegram || lead.whatsapp);
}

function getConversationStage(phase: AssistantSessionPhase, submitted: boolean) {
  if (submitted || phase === "completed") {
    return "submitted";
  }

  if (phase === "collecting_contacts" || phase === "submitting_lead") {
    return "contact_collection";
  }

  if (phase === "closed") {
    return "initial";
  }

  return "exploring";
}

function buildRequestPayload(params: {
  locale: AssistantLocale;
  pageContext: ReturnType<typeof buildCurrentPageContext>;
  pathname: string;
  messages: AssistantMessage[];
  lead: AssistantLeadDraft;
  submitted: boolean;
}) {
  const conversationMemory = buildAssistantConversationMemory(params.messages, params.lead, {
    currentPath: params.pathname,
    locale: params.locale,
    country: params.pageContext.country_market,
    visitorIntent:
      params.pageContext.page_type === "pricing"
        ? "pricing"
        : params.pageContext.page_type === "contacts"
          ? "contact"
        : params.pageContext.page_type === "services"
          ? "services"
          : "unknown",
  }, params.submitted);

  return {
    context: {
      locale: params.locale,
      currentPath: params.pathname,
      ...params.pageContext,
      conversationMemory,
    },
    messages: params.messages.slice(-maxRequestMessages),
    lead: params.lead,
    submissionCompleted: params.submitted,
    analyticsContext: buildJourneyAnalyticsContext({
      conversionPage: params.pathname,
    }) || undefined,
  };
}

function createRequestFailure(category: AssistantErrorCategory, retryable: boolean, message: string) {
  return { category, retryable, message };
}

function classifyFailure(error: unknown, status?: number) {
  if (error && typeof error === "object" && "category" in error && "message" in error) {
    const typed = error as AssistantErrorState;
    return typed;
  }

  if (typeof error === "object" && error !== null && "name" in error && String((error as { name?: unknown }).name) === "AbortError") {
    return createRequestFailure("network", true, "Request was interrupted");
  }

  if (typeof status === "number") {
    if (status >= 500 || status === 429 || status === 408) {
      return createRequestFailure("server", true, "Temporary upstream error");
    }

    if (status >= 400) {
      return createRequestFailure("validation", false, "Invalid assistant response");
    }
  }

  return createRequestFailure("unknown", true, "Temporary assistant error");
}

export function AiAssistantWidget({ enabled }: AiAssistantWidgetProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [footerLift, setFooterLift] = useState(0);
  const [sessionPhase, setSessionPhase] = useState<AssistantSessionPhase>("closed");
  const [sessionLocale, setSessionLocale] = useState<AssistantLocale>("en");
  const [sessionId, setSessionId] = useState("");
  const [messages, setMessages] = useState<AssistantMessage[]>([]);
  const [lead, setLead] = useState<AssistantLeadDraft>({});
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorState, setErrorState] = useState<AssistantErrorState | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const widgetRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const messagesRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const activeRequestRef = useRef(0);
  const isOpenRef = useRef(false);
  const hasStartedRef = useRef(false);
  const hasTrackedContactStepRef = useRef(false);
  const hasTrackedContactResumedRef = useRef(false);
  const hasTrackedSubmittedRef = useRef(false);
  const pendingTurnRef = useRef<PendingTurn | null>(null);

  useEffect(() => {
    isOpenRef.current = isOpen;
  }, [isOpen]);

  useEffect(() => {
    messagesRef.current?.scrollTo({ top: messagesRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, isOpen, isLoading]);

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
      const baseBottom = Number.parseFloat(window.getComputedStyle(widget).getPropertyValue("--ai-assistant-base-bottom"));
      const buttonHeight = button.getBoundingClientRect().height;

      if (footerRect.top >= viewportHeight) {
        setFooterLift(0);
        return;
      }

      const requiredLift = viewportHeight - footerRect.top + assistantFooterGap - (Number.isFinite(baseBottom) ? baseBottom : 0);
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

  function clearSessionState() {
    activeRequestRef.current += 1;
    pendingTurnRef.current = null;
    hasStartedRef.current = false;
    hasTrackedContactStepRef.current = false;
    hasTrackedContactResumedRef.current = false;
    hasTrackedSubmittedRef.current = false;
    setSessionPhase("closed");
    setSessionId("");
    setSessionLocale("en");
    setMessages([]);
    setLead({});
    setInput("");
    setIsLoading(false);
    setErrorState(null);
    setSubmitted(false);
  }

  function startFreshSession() {
    clearSessionState();
    const locale = resolveAssistantLocale(pathname || "/");
    const nextSessionId = createSessionId();

    setSessionLocale(locale);
    setSessionId(nextSessionId);
    setSessionPhase("active");
    setMessages([
      {
        role: "assistant",
        content: getWelcomeMessage(locale),
      },
    ]);
  }

  function closeAssistant() {
    const hadActiveConversation =
      messages.length > 1 ||
      Boolean(input.trim()) ||
      Boolean(Object.keys(lead).length) ||
      submitted ||
      isLoading ||
      Boolean(errorState);

    activeRequestRef.current += 1;

    if (hadActiveConversation) {
      trackUmamiEvent("assistant_closed_with_active_conversation", {
        ...buildCurrentPageContext(),
        conversation_stage: getConversationStage(sessionPhase, submitted),
      });
    }

    trackUmamiEvent("ai_assistant_closed", {
      ...buildCurrentPageContext(),
      conversation_stage: submitted ? "submitted" : "exploring",
    });

    clearSessionState();
    setIsOpen(false);
  }

  async function executeTurn(turn: PendingTurn, source: RetrySource | null = null) {
    const requestId = ++activeRequestRef.current;
    const currentPhase = turn.hadContactData ? "submitting_lead" : "waiting_for_response";
    const shouldTrackContactResumed = source === "manual" || source === "auto";

    pendingTurnRef.current = {
      ...turn,
      usedRetry: turn.usedRetry || source !== null,
    };

    setErrorState(null);
    setSessionPhase(currentPhase);
    setIsLoading(true);

    if (source === "manual") {
      trackUmamiEvent("assistant_retry_clicked", {
        ...turn.pageContext,
        conversation_stage: getConversationStage(currentPhase, turn.requestPayload.submissionCompleted),
      });
    }

    if (shouldTrackContactResumed && turn.hadContactData && !hasTrackedContactResumedRef.current) {
      hasTrackedContactResumedRef.current = true;
      trackUmamiEvent("assistant_contact_collection_resumed", {
        ...turn.pageContext,
        conversation_stage: "contact_collection",
      });
    }

    const attempts = source === "manual" ? 2 : 2;
    let failure: AssistantErrorState | null = null;

    for (let attempt = 0; attempt < attempts; attempt += 1) {
      try {
        const response = await fetch("/api/assistant", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(turn.requestPayload),
        });

        const contentType = response.headers.get("content-type") || "";
        if (!contentType.toLowerCase().includes("application/json")) {
          throw createRequestFailure(response.status >= 500 || response.status === 408 || response.status === 429 ? "server" : "malformed", response.status >= 500 || response.status === 408 || response.status === 429, "Assistant response was not JSON");
        }

        const data = (await response.json()) as AiAssistantApiResponse;

        if (!response.ok || !data.ok || !data.message) {
          throw createRequestFailure(response.status >= 500 || response.status === 408 || response.status === 429 ? "server" : "validation", response.status >= 500 || response.status === 408 || response.status === 429, data.error || "Assistant response was invalid");
        }

        if (requestId !== activeRequestRef.current || !isOpenRef.current) {
          return;
        }

        const nextLead = data.lead || {};
        setSessionLocale(normalizeAssistantLocale(data.locale, turn.locale));
        const nextSubmitted = submitted || Boolean(data.submitted);
        const nextPhase = nextSubmitted ? "completed" : hasLeadContactData(nextLead) ? "collecting_contacts" : "active";

        setLead(nextLead);
        setSubmitted(nextSubmitted);
        setSessionPhase(nextPhase);
        setMessages((current) => [...current, data.message as AssistantMessage]);

        if (hasLeadContactData(nextLead) && !hasTrackedContactStepRef.current) {
          hasTrackedContactStepRef.current = true;
          trackUmamiEvent("assistant_contact_collection_started", {
            ...turn.pageContext,
            conversation_stage: "contact_collection",
          });
          trackUmamiEvent("ai_assistant_contact_step_started", {
            ...turn.pageContext,
            conversation_stage: "contact_collection",
          });
        }

        if (nextSubmitted && !hasTrackedSubmittedRef.current) {
          hasTrackedSubmittedRef.current = true;
          trackUmamiEvent("ai_assistant_submitted", {
            ...turn.pageContext,
            submission_completed: true,
            conversation_stage: "submitted",
          });
        }

        if (failure) {
          trackUmamiEvent("assistant_retry_success", {
            ...turn.pageContext,
            conversation_stage: getConversationStage(nextPhase, nextSubmitted),
            error_category: failure.category,
          });
        }

        pendingTurnRef.current = null;
        setIsLoading(false);
        return;
      } catch (error) {
        if (requestId !== activeRequestRef.current || !isOpenRef.current) {
          return;
        }

        failure = classifyFailure(error, typeof error === "object" && error && "status" in error ? Number((error as { status?: unknown }).status) : undefined);

        if (failure.retryable && attempt + 1 < attempts) {
          pendingTurnRef.current = {
            ...turn,
            usedRetry: true,
          };

          await new Promise((resolve) => window.setTimeout(resolve, 400));
          continue;
        }

        break;
      }
    }

    if (requestId !== activeRequestRef.current || !isOpenRef.current) {
      return;
    }

    const nextFailure = failure || createRequestFailure("unknown", true, "Temporary assistant error");
    setSessionPhase("transient_error");
    setErrorState({
      category: nextFailure.category,
      retryable: nextFailure.retryable,
      message: getTemporaryErrorMessage(sessionLocale),
    });

    trackUmamiEvent("assistant_error", {
      ...turn.pageContext,
      conversation_stage: getConversationStage("transient_error", turn.requestPayload.submissionCompleted),
      error_category: nextFailure.category,
      retryable: nextFailure.retryable,
    });
    setIsLoading(false);
  }

  async function handleRetry() {
    const turn = pendingTurnRef.current;
    if (!turn || isLoading) {
      return;
    }

    await executeTurn(turn, "manual");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const content = input.trim();
    if (!content || isLoading) {
      return;
    }

    const pageContext = buildCurrentPageContext();
    const requestLocale = detectAssistantLocaleFromText(content, sessionLocale || resolveAssistantLocale(pathname || "/"));
    setSessionLocale(requestLocale);
    const userMessage: AssistantMessage = { role: "user", content };
    const nextMessages = trimMessages([...messages, userMessage]);
    const nextLead = lead;
    const nextSubmitted = submitted;
    const nextRequestPayload = buildRequestPayload({
      locale: requestLocale,
      pageContext,
      pathname: pathname || "/",
      messages: nextMessages,
      lead: nextLead,
      submitted: nextSubmitted,
    });
    const hadContactData = hasLeadContactData(nextLead);
    const nextPhase: AssistantSessionPhase = nextSubmitted ? "completed" : hadContactData ? "submitting_lead" : "waiting_for_response";

    if (!hasStartedRef.current) {
      hasStartedRef.current = true;
      trackUmamiEvent("ai_assistant_started", {
        ...pageContext,
        conversation_stage: getConversationStage(nextPhase, nextSubmitted),
      });
    }

    trackUmamiEvent("ai_assistant_message_sent", {
      ...pageContext,
      conversation_stage: getConversationStage(nextPhase, nextSubmitted),
    });

    setMessages(nextMessages);
    setInput("");
    setErrorState(null);
    setSessionPhase(nextPhase);

    const pendingTurn: PendingTurn = {
      sessionId,
      locale: requestLocale,
      pageContext,
      requestPayload: nextRequestPayload,
      hadContactData,
      usedRetry: false,
    };

    pendingTurnRef.current = pendingTurn;
    await executeTurn(pendingTurn);
  }

  if (!enabled) {
    return null;
  }

  const uiCopy = getCopy(sessionLocale);

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
          if (isOpen) {
            return;
          }

          startFreshSession();
          setIsOpen(true);
          trackUmamiEvent("ai_assistant_opened", {
            ...buildCurrentPageContext(),
            conversation_stage: "initial",
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

        {errorState ? (
          <div className="ai-assistant-error" role="alert">
            <span>{errorState.message}</span>
            <button className="ai-assistant-error-retry" type="button" onClick={handleRetry} disabled={isLoading}>
              {getRetryLabel(sessionLocale)}
            </button>
          </div>
        ) : null}

        <form className="ai-assistant-form" onSubmit={handleSubmit}>
          <input
            aria-label="Message for AI assistant"
            disabled={isLoading}
            maxLength={1200}
            onChange={(event) => setInput(event.target.value)}
            placeholder={getPlaceholder(sessionLocale)}
            ref={inputRef}
            type="text"
            value={input}
          />
          <button type="submit" disabled={isLoading || !input.trim()} aria-label={getSendLabel(sessionLocale)}>
            {getSendLabel(sessionLocale)}
          </button>
        </form>
      </aside>
    </div>
  );
}
