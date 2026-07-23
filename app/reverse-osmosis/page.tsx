import type { Metadata } from "next";
import { siteConfig } from "@/content/site";
import { roLandingConfig } from "@/content/ro-landing";
import { ROLandingPage } from "@/components/ROLandingPage";
import { ROLandingJsonLd } from "@/components/ROLandingJsonLd";

export const metadata: Metadata = {
  title: roLandingConfig.seo.title,
  description: roLandingConfig.seo.description,
  keywords: [...roLandingConfig.seo.keywords],
  alternates: {
    canonical: roLandingConfig.path,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: roLandingConfig.url,
    siteName: siteConfig.name,
    title: roLandingConfig.seo.title,
    description: roLandingConfig.seo.description,
    images: [
      {
        url: siteConfig.reverseOsmosis.image,
        width: 1200,
        height: 630,
        alt: siteConfig.reverseOsmosis.imageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: roLandingConfig.seo.title,
    description: roLandingConfig.seo.description,
    images: [siteConfig.reverseOsmosis.image],
  },
};

export default function ReverseOsmosisPage() {
  return (
    <>
      <ROLandingJsonLd />
      <ROLandingPage />
    </>
  );
}
