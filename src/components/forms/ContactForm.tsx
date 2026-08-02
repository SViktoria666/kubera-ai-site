"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { buildCurrentPageContext, trackUmamiEvent } from "@/lib/analytics";

export function ContactForm({ locale }: { locale: "en" | "ru" }) {
  const [status, setStatus] = useState<"idle" | "submitting" | "sent" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const isRu = locale === "ru";
  const hasOpenedRef = useRef(false);
  const hasStartedRef = useRef(false);

  useEffect(() => {
    if (hasOpenedRef.current) {
      return;
    }

    hasOpenedRef.current = true;
    trackUmamiEvent("contact_form_opened", {
      ...buildCurrentPageContext(),
      form_id: "contact_form",
    });
  }, []);

  function markStarted() {
    if (hasStartedRef.current) {
      return;
    }

    hasStartedRef.current = true;
    trackUmamiEvent("contact_form_started", {
      ...buildCurrentPageContext(),
      form_id: "contact_form",
    });
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage("");
    markStarted();

    trackUmamiEvent("contact_form_submitted", {
      ...buildCurrentPageContext(),
      form_id: "contact_form",
    });

    const formData = new FormData(event.currentTarget);
    const whatsapp = String(formData.get("whatsapp") || "").trim();
    const telegram = String(formData.get("telegram") || "").trim();

    if (whatsapp && !/^\+?[0-9][0-9\s().-]{5,58}$/.test(whatsapp)) {
      setStatus("error");
      setErrorMessage(isRu ? "Проверьте формат WhatsApp номера." : "Please check the WhatsApp phone format.");
      trackUmamiEvent("contact_form_error", {
        ...buildCurrentPageContext(),
        form_id: "contact_form",
        completion_state: "validation",
      });
      return;
    }

    if (telegram && !/^@?[a-zA-Z0-9_]{5,32}$/.test(telegram)) {
      setStatus("error");
      setErrorMessage(isRu ? "Проверьте формат Telegram username." : "Please check the Telegram username format.");
      trackUmamiEvent("contact_form_error", {
        ...buildCurrentPageContext(),
        form_id: "contact_form",
        completion_state: "validation",
      });
      return;
    }

    setStatus("submitting");

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        locale,
        name: formData.get("name"),
        email: formData.get("email"),
        whatsapp: formData.get("whatsapp"),
        telegram: formData.get("telegram"),
        company: formData.get("company"),
        message: formData.get("message"),
        page: window.location.pathname,
        website: formData.get("website"),
      }),
    });

    if (response.ok) {
      setStatus("sent");
      event.currentTarget.reset();
      trackUmamiEvent("contact_form_success", {
        ...buildCurrentPageContext(),
        form_id: "contact_form",
      });
      return;
    }

    const responsePayload = await response.json().catch(() => null);
    setStatus("error");
    trackUmamiEvent("contact_form_error", {
      ...buildCurrentPageContext(),
      form_id: "contact_form",
      completion_state: "delivery_error",
    });
    setErrorMessage(
      response.status === 502 || response.status === 503
        ? isRu
          ? "Отправка временно недоступна. Попробуйте позже."
          : "Contact delivery is temporarily unavailable. Please try again later."
        : typeof responsePayload?.error === "string"
          ? responsePayload.error
          : isRu
            ? "Не удалось отправить. Проверьте обязательные поля."
            : "Could not send. Please check the required fields.",
    );
  }

  return (
    <form
      className="form"
      onSubmit={handleSubmit}
      onFocusCapture={markStarted}
      onPointerDownCapture={markStarted}
    >
      <input className="input" name="name" placeholder={isRu ? "Ваше имя" : "Your name"} required />
      <input className="input" name="email" type="email" placeholder={isRu ? "Ваш Email" : "Your Email"} required />
      <input
        className="input"
        name="whatsapp"
        type="tel"
        placeholder="WhatsApp"
        pattern="^\+?[0-9][0-9\s().-]{5,58}$"
        title={isRu ? "Введите номер WhatsApp в международном формате" : "Enter a WhatsApp number in international format"}
      />
      <input
        className="input"
        name="telegram"
        placeholder="Telegram"
        pattern="^@?[a-zA-Z0-9_]{5,32}$"
        title={isRu ? "Введите Telegram username, например @kubera_automation" : "Enter a Telegram username, for example @kubera_automation"}
      />
      <input className="input" name="company" placeholder={isRu ? "Компания" : "Company"} required />
      <textarea className="textarea" name="message" placeholder={isRu ? "Расскажите о вашем бизнесе" : "Tell us about your business"} required />
      <input className="honeypot" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <button className="button" type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? (isRu ? "Отправка..." : "Sending...") : isRu ? "Отправить" : "Send"}
      </button>
      {status === "sent" && <p className="muted">{isRu ? "Заявка принята." : "Request received."}</p>}
      {status === "error" && <p className="muted">{errorMessage || (isRu ? "Не удалось отправить." : "Could not send the request.")}</p>}
    </form>
  );
}
