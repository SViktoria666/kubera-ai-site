"use client";

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
  const [messages, setMessages] = useState<AssistantMessage[]>(initialMessages);
  const [lead, setLead] = useState<AssistantLeadDraft>({});
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const messagesRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesRef.current?.scrollTo({ top: messagesRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, isOpen]);

  if (!enabled) {
    return null;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const content = input.trim();
    if (!content || isLoading || submitted) {
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
      setSubmitted(Boolean(data.submitted));
      setMessages((current) => [...current, data.message as AssistantMessage]);
    } catch {
      setError(assistantUnavailableMessage);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className={`ai-assistant-widget${isOpen ? " is-open" : ""}`}>
      <button className="ai-assistant-button" type="button" aria-label="Open AI assistant" aria-expanded={isOpen} onClick={() => setIsOpen((open) => !open)}>
        AI
      </button>

      <aside className="ai-assistant-panel" aria-label="Kubera AI assistant" aria-hidden={!isOpen}>
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
            disabled={isLoading || submitted}
            maxLength={1200}
            onChange={(event) => setInput(event.target.value)}
            placeholder={submitted ? "Request sent" : "Type your message"}
            type="text"
            value={input}
          />
          <button type="submit" disabled={isLoading || submitted || !input.trim()} aria-label="Send message">
            Send
          </button>
        </form>
      </aside>
    </div>
  );
}
