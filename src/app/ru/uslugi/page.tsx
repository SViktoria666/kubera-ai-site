import type { Metadata } from "next";
import { ServicesGrid } from "@/components/services/ServicesGrid";
import { ruServices } from "@/content/ru/services";

export const metadata: Metadata = {
  title: "Услуги",
  description: "Цифровые сотрудники под задачи вашего бизнеса.",
};

export default function RuServicesPage() {
  return (
    <main className="section">
      <div className="container">
        <p className="eyebrow">Услуги</p>
        <h1>Цифровые сотрудники под задачи вашего бизнеса.</h1>
        <ServicesGrid services={ruServices} />
      </div>
    </main>
  );
}

