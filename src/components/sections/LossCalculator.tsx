"use client";

import Link from "next/link";
import { useEffect, useId, useMemo, useRef, useState } from "react";
import { buildCurrentPageContext, trackUmamiEvent } from "@/lib/analytics";

const leadValues = [5, 15, 30, 60];
const lostValues = [10, 20, 30, 40];
const dealValues = [200, 500, 1500, 5000];

export function LossCalculator({ locale }: { locale: "en" | "ru" }) {
  const [leadIndex, setLeadIndex] = useState(1);
  const [lostIndex, setLostIndex] = useState(1);
  const [dealIndex, setDealIndex] = useState(1);
  const isRu = locale === "ru";
  const hasStartedRef = useRef(false);
  const hasTrackedViewRef = useRef(false);

  useEffect(() => {
    if (hasTrackedViewRef.current) {
      return;
    }

    hasTrackedViewRef.current = true;
    trackUmamiEvent("calculator_viewed", {
      ...buildCurrentPageContext(),
      calculator_id: "loss-calculator",
    });
  }, []);

  const result = useMemo(() => {
    const lostClients = Math.round(leadValues[leadIndex] * 31 * (lostValues[lostIndex] / 100));
    const monthlyLoss = lostClients * dealValues[dealIndex];
    return { lostClients, monthlyLoss, yearlyLoss: monthlyLoss * 12 };
  }, [dealIndex, leadIndex, lostIndex]);

  function markStarted() {
    if (hasStartedRef.current) {
      return;
    }

    hasStartedRef.current = true;
    trackUmamiEvent("calculator_started", {
      ...buildCurrentPageContext(),
      calculator_id: "loss-calculator",
    });
  }

  return (
    <section className="section loss-calculator section-dark">
      <div className="container">
        <p className="eyebrow">{isRu ? "Калькулятор потерь" : "Loss Calculator"}</p>
        <h2 className="section-title">{isRu ? "Сколько денег теряет ваш бизнес без автоматизации?" : "How much is your business losing without automation?"}</h2>
        <p className="lead">{isRu ? "Передвиньте слайдеры — и вы увидите реальные цифры" : "Move the sliders — and see the real numbers"}</p>
        <div className="calculator-panel">
          <div className="slider-box">
            <Slider
              label={isRu ? "Сколько заявок вы получаете в день?" : "How many leads do you receive per day?"}
              value={leadIndex}
              onChange={(value) => {
                markStarted();
                setLeadIndex(value);
              }}
              labels={["5", "15", "30+", "60+"]}
            />
            <Slider
              label={isRu ? "Сколько заявок теряется без ответа?" : "How many leads are lost without a response?"}
              value={lostIndex}
              onChange={(value) => {
                markStarted();
                setLostIndex(value);
              }}
              labels={["10%", "20%", "30%", "40%"]}
            />
            <Slider
              label={isRu ? "Средний чек одной сделки" : "Average deal value"}
              value={dealIndex}
              onChange={(value) => {
                markStarted();
                setDealIndex(value);
              }}
              labels={["€200", "€500", "€1 500", "€5 000+"]}
            />
          </div>
          <div className="loss-result">
            <h3>{isRu ? "Ваши потери" : "Your losses"}</h3>
            <span className="loss-number">€{result.monthlyLoss.toLocaleString("en-US")}</span>
            <p className="muted">{isRu ? "в месяц уходит мимо кассы" : "lost every month"}</p>
            <span className="loss-number" style={{ fontSize: "3rem" }}>
              {result.lostClients}
            </span>
            <p className="muted">{isRu ? "потерянных клиентов в месяц" : "lost clients per month"}</p>
            <strong>€{result.yearlyLoss.toLocaleString("en-US")}</strong>
            <p className="muted">{isRu ? "потерь за год" : "lost per year"}</p>
            <Link
              className="button"
              href={isRu ? "/ru/kontakty" : "/contacts"}
              data-analytics-event="calculator_result_cta_clicked"
              data-analytics-placement="calculator"
              data-analytics-calculator-id="loss-calculator"
              data-analytics-cta-id="calculator-result-contact"
              data-analytics-extra-events="primary_cta_click,calculator_completed"
            >
              {isRu ? "➜ Обсудить мой проект" : "➜ Discuss my project"}
            </Link>
            <p className="muted">{isRu ? "Бесплатная консультация · Без обязательств" : "Free consultation · No obligations"}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Slider({ label, value, labels, onChange }: { label: string; value: number; labels: string[]; onChange: (value: number) => void }) {
  const inputId = useId();
  return (
    <div className="slider-row">
      <label htmlFor={inputId}>{label}</label>
      <input
        id={inputId}
        type="range"
        min={0}
        max={3}
        value={value}
        aria-valuetext={labels[value]}
        onChange={(event) => onChange(Number(event.target.value))}
      />
      <div className="range-labels">
        {labels.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </div>
  );
}
