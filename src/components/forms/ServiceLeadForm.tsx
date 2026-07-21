"use client";

import { FormEvent, useState } from "react";

type ServiceLeadFormProps = {
  buttonLabel: string;
  fields: {
    emailLabel: string;
    nameLabel: string;
    needLabel: string;
    needOptions: string[];
    successMessage: string;
    websiteLabel: string;
  };
  locale?: "en" | "pt";
  pagePath: string;
};

type FormState = "idle" | "submitting" | "sent" | "error";

export function ServiceLeadForm({ buttonLabel, pagePath, fields, locale = "en" }: ServiceLeadFormProps) {
  const [state, setState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const ui = {
    placeholder: locale === "pt" ? "Selecione uma opção" : "Select an option",
    invalidName: locale === "pt" ? "Introduza o nome." : "Enter a name.",
    invalidEmail: locale === "pt" ? "Introduza um email válido." : "Enter a valid email.",
    invalidWebsite: locale === "pt" ? "Introduza uma URL válida do site." : "Enter a valid website URL.",
    invalidNeed: locale === "pt" ? "Escolha uma opção." : "Choose an option.",
    genericError: locale === "pt" ? "Não foi possível enviar o pedido." : "Could not send the request.",
    submitting: locale === "pt" ? "A enviar..." : "Sending...",
  };

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage("");

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const website = String(formData.get("websiteUrl") || "").trim();
    const need = String(formData.get("need") || "").trim();
    const honeypot = String(formData.get("website") || "").trim();

    if (honeypot) {
      return;
    }

    if (!name) {
      setState("error");
      setErrorMessage(ui.invalidName);
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setState("error");
      setErrorMessage(ui.invalidEmail);
      return;
    }

    if (website) {
      try {
        const normalizedWebsite = website.startsWith("http://") || website.startsWith("https://") ? website : `https://${website}`;
        new URL(normalizedWebsite);
      } catch {
        setState("error");
        setErrorMessage(ui.invalidWebsite);
        return;
      }
    }

    if (!need) {
      setState("error");
      setErrorMessage(ui.invalidNeed);
      return;
    }

    setState("submitting");

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        locale,
        page: pagePath,
        name,
        email,
        company: locale === "pt" ? "Pedido de design de landing page" : "Landing page design request",
        need,
        message: [
          `${fields.needLabel}: ${need}`,
          `${fields.websiteLabel}: ${website || (locale === "pt" ? "Não indicado" : "Not provided")}`,
          `${locale === "pt" ? "Serviço" : "Service"}: ${locale === "pt" ? "Design de Landing Pages" : "Landing Page Design"}`,
        ].join("\n"),
        website: honeypot,
      }),
    });

    if (response.ok) {
      setState("sent");
      event.currentTarget.reset();
      return;
    }

    const payload = await response.json().catch(() => null);
    setState("error");
    setErrorMessage(typeof payload?.error === "string" ? payload.error : ui.genericError);
  }

  return (
    <form className="form service-form" onSubmit={handleSubmit}>
      <div className="service-form-grid">
        <label className="service-form-field">
          <span>{fields.nameLabel}</span>
          <input className="input" name="name" autoComplete="name" required />
        </label>

        <label className="service-form-field">
          <span>{fields.emailLabel}</span>
          <input className="input" name="email" type="email" autoComplete="email" required />
        </label>

        <label className="service-form-field service-form-field--full">
          <span>{fields.websiteLabel}</span>
          <input
            className="input"
            name="websiteUrl"
            type="text"
            inputMode="url"
            autoComplete="url"
            placeholder={locale === "pt" ? "https://www.exemplo.pt" : "https://www.example.com"}
          />
        </label>

        <label className="service-form-field service-form-field--full">
          <span>{fields.needLabel}</span>
          <select className="select" name="need" defaultValue="" required>
            <option value="" disabled>
              {ui.placeholder}
            </option>
            {fields.needOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      </div>

      <input className="honeypot" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <button className="button service-form-button" type="submit" disabled={state === "submitting"}>
        {state === "submitting" ? ui.submitting : buttonLabel}
      </button>

      <p className="service-form-status" aria-live="polite">
        {state === "sent" ? fields.successMessage : state === "error" ? errorMessage : " "}
      </p>
    </form>
  );
}
