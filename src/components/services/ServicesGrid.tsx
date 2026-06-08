import type { ServiceItem } from "@/content/types";
import { getAssetByName } from "@/content/assets";

export function ServicesGrid({ services }: { services: ServiceItem[] }) {
  return (
    <div className="services-grid">
      {services.map((service) => {
        const asset = service.assetName ? getAssetByName(service.assetName) : undefined;

        return (
          <article className="service-card" key={service.title}>
            {asset ? <img className="service-icon" src={asset.localPath} alt="" aria-hidden="true" /> : null}
            <h2>
              {service.title}
              {service.planned ? <span className="gold-gradient-text"> · new</span> : null}
            </h2>
            <p className="muted">{service.description}</p>
          </article>
        );
      })}
    </div>
  );
}
