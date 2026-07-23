import { siteConfig } from "@/content/site";
import { roLandingConfig } from "@/content/ro-landing";

export function ROLandingJsonLd() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Reverse Osmosis Water Filter Installation",
    description: roLandingConfig.seo.description,
    url: roLandingConfig.url,
    provider: {
      "@type": "GeneralContractor",
      name: siteConfig.name,
      telephone: siteConfig.phoneE164,
      url: siteConfig.url,
      address: {
        "@type": "PostalAddress",
        addressLocality: siteConfig.address.city,
        addressRegion: siteConfig.address.state,
        addressCountry: "US",
      },
    },
    areaServed: siteConfig.serviceAreas.map((area) => ({
      "@type": "City",
      name: area,
    })),
    offers: {
      "@type": "Offer",
      name: roLandingConfig.promo.label,
      price: "300",
      priceCurrency: "USD",
      description: roLandingConfig.promo.disclaimer,
      url: roLandingConfig.url,
      eligibleRegion: {
        "@type": "Place",
        name: "East Bay, California",
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
    />
  );
}
