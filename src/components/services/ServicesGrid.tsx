import type { ServiceItem } from "@/content/types";

export function ServicesGrid({ services }: { services: ServiceItem[] }) {
  return (
    <div className="grid">
      {services.map((service) => (
        <article className="card" key={service.title}>
          <h2>{service.title}</h2>
          <p className="muted">{service.description}</p>
        </article>
      ))}
    </div>
  );
}

