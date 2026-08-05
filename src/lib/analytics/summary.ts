import type { JourneyAnalyticsContext, JourneyPageType } from "@/lib/analytics/journey-types";

const pageLanguageLabels: Record<JourneyAnalyticsContext["pageLanguage"], string> = {
  en: "Английский",
  ru: "Русский",
  es: "Испанский",
  other: "Не указано",
};

const pageTypeLabels: Record<JourneyPageType, string> = {
  home: "Главная",
  services: "Услуги",
  country_landing: "Лендинг по стране",
  industry_solution: "Отраслевое решение",
  use_case: "Сценарий",
  case: "Кейс",
  blog: "Блог",
  pricing: "Цены",
  calculator: "Калькулятор",
  contacts: "Контакты",
  how_we_work: "Как мы работаем",
  demo: "Демо",
  other: "Другое",
};

function clean(value: string | undefined | null) {
  const text = String(value ?? "").replace(/\s+/g, " ").trim();
  return text || "Не указано";
}

function formatDuration(seconds: number) {
  const total = Math.max(0, Math.round(seconds));
  const hours = Math.floor(total / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  const secs = total % 60;

  const parts: string[] = [];
  if (hours > 0) {
    parts.push(`${hours} ч`);
  }
  if (minutes > 0 || hours > 0) {
    parts.push(`${minutes} мин`);
  }
  parts.push(`${secs} сек`);
  return parts.join(" ");
}

function formatPages(pages: string[]) {
  if (!pages.length) {
    return "Не указано";
  }

  return pages.slice(0, 6).join(", ");
}

function resolveTrafficSource(context: JourneyAnalyticsContext) {
  const utmSource = clean(context.utm.source);
  if (utmSource !== "Не указано") {
    return utmSource;
  }

  if (context.initialReferrer && context.initialReferrer !== "direct") {
    return context.initialReferrer;
  }

  return "Прямой заход";
}

function resolveActions(context: JourneyAnalyticsContext) {
  const actions: string[] = [];
  if (context.signals.assistantOpened) actions.push("Открыл AI-ассистента");
  if (context.signals.assistantStarted) actions.push("Начал диалог с AI-ассистентом");
  if (context.signals.calculatorUsed) actions.push("Использовал калькулятор");
  if (context.signals.calculatorCompleted) actions.push("Завершил калькулятор");
  if (context.signals.pricingViewed) actions.push("Просмотрел цены");
  if (context.signals.caseViewed) actions.push("Просмотрел кейсы");
  if (context.signals.blogViewed) actions.push("Просмотрел блог");
  if (context.signals.whatsappClicked) actions.push("Нажал WhatsApp");
  if (context.signals.telegramClicked) actions.push("Нажал Telegram");
  if (context.signals.emailClicked) actions.push("Нажал email");

  return actions.length ? actions : ["Не указано"];
}

function resolveCategories(context: JourneyAnalyticsContext) {
  const labels = context.pageCategoriesVisited.map((category) => pageTypeLabels[category]).filter(Boolean);
  return labels.length ? labels.join(", ") : "Не указано";
}

export function buildJourneySummary(context: JourneyAnalyticsContext) {
  const geo = [clean(context.geo?.country), clean(context.geo?.region)]
    .filter((value) => value !== "Не указано")
    .join(", ");

  return [
    "История посещения сайта",
    `Источник: ${resolveTrafficSource(context)}`,
    `Реферер: ${clean(context.initialReferrer)}`,
    `Первая страница: ${clean(context.landingPage)}`,
    `Страница заявки: ${clean(context.conversionPage)}`,
    `Последняя страница: ${clean(context.lastPage)}`,
    `Просмотрено страниц: ${Math.max(0, Math.round(context.pageViews))}`,
    `Активное время на сайте: ${formatDuration(context.activeSeconds)}`,
    `Язык сайта: ${pageLanguageLabels[context.pageLanguage]}`,
    `Категории страниц: ${resolveCategories(context)}`,
    geo ? `Страна/регион: ${geo}` : null,
    `Пути: ${formatPages(context.uniquePages)}`,
    "",
    "Действия:",
    ...resolveActions(context).map((action) => `— ${action}`),
  ]
    .filter((line) => line !== null)
    .join("\n");
}

export function buildTelegramJourneySummary(context: JourneyAnalyticsContext) {
  return [
    "До обращения на сайте",
    "",
    `Источник: ${resolveTrafficSource(context)}`,
    `Первая страница: ${clean(context.landingPage)}`,
    `Страница заявки: ${clean(context.conversionPage)}`,
    `Просмотрено страниц: ${Math.max(0, Math.round(context.pageViews))}`,
    `⏱ Активное время: ${formatDuration(context.activeSeconds)}`,
    `Калькулятор: ${context.signals.calculatorUsed ? "Да" : "Нет"}`,
    `AI-ассистент: ${context.signals.assistantOpened || context.signals.assistantStarted ? "Да" : "Нет"}`,
  ].join("\n");
}
