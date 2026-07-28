import Link from "next/link";
import { VideoShowcaseCard } from "@/components/sections/VideoShowcaseCard";

type PricingPackage = {
  badge?: string;
  description: string;
  features: string[];
  href: string;
  label: string;
  name: string;
  price: string;
};

const content: Record<
  "en" | "ru",
  {
    eyebrow: string;
    note: string;
    subtitle: string;
    title: string;
    packages: PricingPackage[];
  }
> = {
  en: {
    eyebrow: "PRICING PACKAGES",
    title: "Choose the Right Automation Package",
    subtitle: "Transparent pricing. Fixed scope. No hidden costs.",
    note: "Need something custom? We'll prepare a tailored solution after a free automation audit.",
    packages: [
      {
        name: "Starter",
        price: "€1190–1790",
        description: "Basic automation for small businesses.",
        features: [
          "Up to 3 automated business workflows",
          "Email automation",
          "WhatsApp or Telegram integration",
          "Basic data and notification flows",
          "Delivery: 1–2 weeks",
        ],
        href: "/contacts",
        label: "Discuss My Project",
      },
      {
        name: "Standard",
        badge: "Most Popular",
        price: "From €2490",
        description: "Complete automation for growing teams.",
        features: [
          "Up to 5 automated business workflows",
          "Email + WhatsApp or Telegram integration",
          "CRM integration",
          "AI Assistant setup",
          "Delivery: 2–4 weeks",
        ],
        href: "/contacts",
        label: "Discuss My Project",
      },
      {
        name: "Premium",
        price: "From €4990",
        description: "Full automation layer for complex operations.",
        features: [
          "5+ business workflows",
          "AI agents and advanced integrations",
          "Analytics and reporting dashboards",
          "Multi-step automation architecture",
          "Delivery: 4–8 weeks",
        ],
        href: "/contacts",
        label: "Discuss My Project",
      },
    ],
  },
  ru: {
    eyebrow: "ПАКЕТЫ АВТОМАТИЗАЦИИ",
    title: "Выберите пакет автоматизации для вашего бизнеса",
    subtitle: "Прозрачные цены. Понятный объём работ. Без скрытых платежей.",
    note: "Не нашли подходящий пакет? Подготовим индивидуальное решение после бесплатного аудита автоматизации.",
    packages: [
      {
        name: "Starter",
        price: "€1190–1790",
        description: "Базовая автоматизация для малого бизнеса.",
        features: [
          "До 3 автоматизированных бизнес-процессов",
          "Автоматизация email",
          "Интеграция WhatsApp или Telegram",
          "Базовые потоки данных и уведомлений",
          "Срок: 1–2 недели",
        ],
        href: "/ru/kontakty",
        label: "Обсудить проект",
      },
      {
        name: "Standard",
        badge: "Популярный выбор",
        price: "От €2490",
        description: "Комплексная автоматизация для растущих команд.",
        features: [
          "До 5 автоматизированных бизнес-процессов",
          "Интеграция email + WhatsApp или Telegram",
          "Интеграция CRM",
          "Настройка AI-ассистента",
          "Срок: 2–4 недели",
        ],
        href: "/ru/kontakty",
        label: "Обсудить проект",
      },
      {
        name: "Premium",
        price: "От €4990",
        description: "Полный слой автоматизации для сложных операций.",
        features: [
          "5+ бизнес-процессов",
          "AI-агенты и продвинутые интеграции",
          "Аналитика и отчётные дашборды",
          "Многошаговая архитектура автоматизации",
          "Срок: 4–8 недель",
        ],
        href: "/ru/kontakty",
        label: "Обсудить проект",
      },
    ],
  },
};

export function PricingPackages({ locale }: { locale: "en" | "ru" }) {
  const section = content[locale];
  const demoMedia = {
    aspectRatio: "16 / 9",
    ariaLabel: locale === "ru" ? "Демонстрация AI-автоматизации Kubera AI" : "Kubera AI automation workflow demo",
    mp4Src: "/videos/home-automation-demo.mp4",
    posterSrc: "/images/video-posters/home-automation-demo.webp",
    webmSrc: "/videos/home-automation-demo.webm",
  };

  return (
    <section className="section pricing-packages section-dark">
      <div className="container">
        <div className="pricing-packages-top">
          <div className="pricing-packages-intro">
            <p className="eyebrow">{section.eyebrow}</p>
            <h2 className="section-title">{section.title}</h2>
            <p className="lead">{section.subtitle}</p>
          </div>
          <div className="pricing-packages-visual">
            <VideoShowcaseCard {...demoMedia} />
          </div>
        </div>
        <div className="pricing-packages-grid">
          {section.packages.map((item) => {
            const featured = item.name === "Standard";

            return (
              <article className={`pricing-card${featured ? " pricing-card--featured" : ""}`} key={item.name}>
                <div className="pricing-card-head">
                  <div className="pricing-card-topline">
                    <h3>{item.name}</h3>
                    {item.badge ? <span className="pricing-badge">{item.badge}</span> : null}
                  </div>
                  <div className="pricing-price">{item.price}</div>
                  <p className="pricing-description">{item.description}</p>
                </div>
                <ul className="pricing-features">
                  {item.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <Link className="button pricing-card-button" href={item.href}>
                  {item.label}
                </Link>
              </article>
            );
          })}
        </div>
        <p className="pricing-note muted">{section.note}</p>
      </div>
    </section>
  );
}
