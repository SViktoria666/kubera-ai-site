"use client";

import { FormEvent, useState } from "react";

export function ContactForm({ locale }: { locale: "en" | "ru" }) {
  const [status, setStatus] = useState<"idle" | "submitting" | "sent" | "error">("idle");
  const isRu = locale === "ru";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const formData = new FormData(event.currentTarget);
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
        website: formData.get("website"),
      }),
    });

    setStatus(response.ok ? "sent" : "error");
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input className="input" name="name" placeholder={isRu ? "Ваше имя" : "Your name"} required />
      <input className="input" name="email" type="email" placeholder={isRu ? "Ваш Email" : "Your Email"} required />
      <input className="input" name="whatsapp" type="tel" placeholder="WhatsApp" />
      <input className="input" name="telegram" placeholder="Telegram" />
      <input className="input" name="company" placeholder={isRu ? "Компания" : "Company"} />
      <textarea className="textarea" name="message" placeholder={isRu ? "Расскажите о вашем бизнесе" : "Tell us about your business"} />
      <input className="honeypot" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <button className="button" type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? (isRu ? "Отправка..." : "Sending...") : isRu ? "Отправить" : "Send"}
      </button>
      {status === "sent" && <p className="muted">{isRu ? "Заявка принята." : "Request received."}</p>}
      {status === "error" && <p className="muted">{isRu ? "Не удалось отправить." : "Could not send the request."}</p>}
    </form>
  );
}
