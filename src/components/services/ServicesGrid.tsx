import Link from "next/link";
import { getAssetByName } from "@/content/assets";
import type { ServiceItem } from "@/content/types";

export function ServicesGrid({ services }: { services: ServiceItem[] }) {
  return (
    <div className="services-grid">
      {services.map((service) => {
        const asset = service.assetName ? getAssetByName(service.assetName) : undefined;
        const content = (
          <>
            {asset ? <img className="service-icon" src={asset.localPath} alt="" aria-hidden="true" /> : null}
            <h2>
              {service.title}
              {service.planned ? <span className="gold-gradient-text"> · new</span> : null}
            </h2>
            <p className="muted">{service.description}</p>
          </>
        );

        return service.href ? (
          <Link
            key={service.title}
            className="service-card service-card--link"
            href={service.href}
            aria-label={`${service.title}. Open service page`}
          >
            {content}
          </Link>
        ) : (
          <article className="service-card" key={service.title}>
            {content}
          </article>
        );
      })}
    </div>
  );
}
