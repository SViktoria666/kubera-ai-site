import type { ServiceItem } from "@/content/types";
import { getAssetByName } from "@/content/assets";

export function ServicesGrid({ services }: { services: ServiceItem[] }) {
  return (
    <div className="grid">
      {services.map((service) => {
        const asset = service.assetName ? getAssetByName(service.assetName) : undefined;

        return (
          <article className="card" key={service.title}>
            {asset ? <img src={asset.localPath} alt="" aria-hidden="true" width={44} height={44} style={{ objectFit: "contain" }} /> : null}
            <h2>{service.title}</h2>
            <p className="muted">{service.description}</p>
          </article>
        );
      })}
    </div>
  );
}
