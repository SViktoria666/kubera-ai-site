"use client";

import { FormEvent, useState } from "react";

type ServiceLeadFormProps = {
  buttonLabel: string;
  pagePath: string;
  fields: {
    adSpendLabel: string;
    adSpendOptions: string[];
    emailLabel: string;
    nameLabel: string;
    websiteLabel: string;
  };
};

type FormState = "idle" | "submitting" | "sent" | "error";

export function ServiceLeadForm({ buttonLabel, pagePath, fields }: ServiceLeadFormProps) {
  const [state, setState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage("");

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const website = String(formData.get("websiteUrl") || "").trim();
    const adSpend = String(formData.get("adSpend") || "").trim();
    const honeypot = String(formData.get("website") || "").trim();

    if (honeypot) {
      return;
    }

    if (!name) {
      setState("error");
      setErrorMessage("Introduza o nome.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setState("error");
      setErrorMessage("Introduza um email válido.");
      return;
    }

    if (website) {
      try {
        // Accepts domains typed with or without protocol.
        const normalizedWebsite = website.startsWith("http://") || website.startsWith("https://") ? website : `https://${website}`;
        new URL(normalizedWebsite);
      } catch {
        setState("error");
        setErrorMessage("Introduza uma URL válida do site.");
        return;
      }
    }

    if (!adSpend) {
      setState("error");
      setErrorMessage("Escolha o investimento mensal em publicidade.");
      return;
    }

    setState("submitting");

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        locale: "pt",
        page: pagePath,
        name,
        email,
        company: "Pedido de auditoria de landing page",
        message: [
          `URL do site atual: ${website || "Não indicado"}`,
          `Investimento mensal em publicidade: ${adSpend}`,
          "Serviço: Design de Landing Pages para Empresas em Portugal",
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
    setErrorMessage(typeof payload?.error === "string" ? payload.error : "Não foi possível enviar o pedido.");
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
          <input className="input" name="websiteUrl" type="text" inputMode="url" autoComplete="url" placeholder="https://www.exemplo.pt" />
        </label>

        <label className="service-form-field service-form-field--full">
          <span>{fields.adSpendLabel}</span>
          <select className="select" name="adSpend" defaultValue="" required>
            <option value="" disabled>
              Selecione uma opção
            </option>
            {fields.adSpendOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      </div>

      <input className="honeypot" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <button className="button service-form-button" type="submit" disabled={state === "submitting"}>
        {state === "submitting" ? "A enviar..." : buttonLabel}
      </button>

      <p className="service-form-status" aria-live="polite">
        {state === "sent" ? "Recebemos o seu pedido. Vamos responder brevemente." : state === "error" ? errorMessage : " "}
      </p>
    </form>
  );
}
