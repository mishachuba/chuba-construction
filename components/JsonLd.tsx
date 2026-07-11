import { siteConfig } from "@/content/site";

export function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: siteConfig.name,
    url: siteConfig.url,
    telephone: `+1-${siteConfig.phoneDisplay}`,
    email: siteConfig.email,
    image: `${siteConfig.url}/Header_Logo.png`,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      addressCountry: "US",
    },
    areaServed: siteConfig.serviceAreas.map((area) => ({
      "@type": "City",
      name: area,
    })),
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "license",
      name: `California Contractor License #${siteConfig.licenseNumber}`,
    },
    sameAs: siteConfig.social.links.map((link) => link.href).filter((href) => href !== "#"),
    knowsAbout: [
      "Home remodeling",
      "Kitchen remodeling",
      "Bathroom remodeling",
      "ADU construction",
      "Deck building",
      "Reverse osmosis water filtration",
      "Handyman services",
    ],
    priceRange: "$$",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
