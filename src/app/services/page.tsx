import type { Metadata } from "next";
import { ServicesGrid } from "@/components/services/ServicesGrid";
import { enServices } from "@/content/en/services";

export const metadata: Metadata = {
  title: "Services",
  description: "Digital workforce services tailored to your business.",
};

export default function ServicesPage() {
  return (
    <main className="section">
      <div className="container">
        <p className="eyebrow">Services</p>
        <h1>Digital workforce tailored to your business.</h1>
        <p className="lead">Choose your direction. Kubera AI will turn it into a working automation system.</p>
        <ServicesGrid services={enServices} />
      </div>
    </main>
  );
}

