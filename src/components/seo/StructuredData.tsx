import { enServices } from "@/content/en/services";
import { siteConfig } from "@/content/site";

export function StructuredData() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}${siteConfig.logo}`,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    sameAs: siteConfig.sameAs,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: siteConfig.email,
        telephone: siteConfig.phone,
        availableLanguage: ["English", "Russian", "Spanish"],
        areaServed: "Europe",
      },
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: ["en", "ru", "es"],
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
    },
  };

  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI business automation and digital workforce systems",
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: "Europe",
    serviceType: "AI automation, CRM integration, lead processing, n8n-ready workflow systems",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Kubera AI automation services",
      itemListElement: enServices.map((serviceItem) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: serviceItem.title,
          description: serviceItem.description,
        },
      })),
    },
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What does Kubera AI do?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Kubera AI builds digital workforce systems, lead automation, CRM workflows, customer communication automations, and n8n-ready business process systems.",
        },
      },
      {
        "@type": "Question",
        name: "How can I contact Kubera AI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Kubera AI can be contacted by email at hello@kubera-automation.com, on Telegram at @kubera_automation, or on WhatsApp at +37253841877.",
        },
      },
    ],
  };

  return (
    <>
      {[organization, website, service, faq].map((entity, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(entity) }} />
      ))}
    </>
  );
}
