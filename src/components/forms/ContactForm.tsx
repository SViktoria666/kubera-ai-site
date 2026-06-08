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
        messengerType: formData.get("messengerType"),
        messengerId: formData.get("messengerId"),
        message: formData.get("message"),
      }),
    });

    setStatus(response.ok ? "sent" : "error");
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input className="input" name="name" placeholder={isRu ? "Ваше имя" : "Your name"} required />
      <input className="input" name="email" type="email" placeholder={isRu ? "Ваш Email" : "Your Email"} required />
      <select className="select" name="messengerType" defaultValue="telegram" required>
        <option value="telegram">Telegram</option>
        <option value="whatsapp">WhatsApp</option>
      </select>
      <input className="input" name="messengerId" placeholder="Username or phone number" required />
      <textarea className="textarea" name="message" placeholder={isRu ? "Расскажите о вашем бизнесе" : "Tell us about your business"} />
      <button className="button" type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? (isRu ? "Отправка..." : "Sending...") : isRu ? "Отправить" : "Send"}
      </button>
      {status === "sent" && <p className="muted">{isRu ? "Заявка принята." : "Request received."}</p>}
      {status === "error" && <p className="muted">{isRu ? "Не удалось отправить." : "Could not send the request."}</p>}
    </form>
  );
}

