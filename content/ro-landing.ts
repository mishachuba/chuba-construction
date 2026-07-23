import { siteConfig } from "@/content/site";

export const roLandingConfig = {
  path: "/reverse-osmosis",
  url: `${siteConfig.url}/reverse-osmosis`,
  seo: {
    title:
      "Reverse Osmosis Installation East Bay | $300 Special | Chuba Construction",
    description:
      "Professional reverse osmosis water filter installation in Walnut Creek & the East Bay. Licensed GC #993336. $300 undersink install special — drain, faucet & setup. Call 925-322-1106.",
    keywords: [
      "Reverse osmosis installation East Bay",
      "Reverse osmosis water filter Walnut Creek",
      "Undersink reverse osmosis installer Contra Costa County",
      "Water filtration installation Lafayette",
      "Reverse osmosis system install Danville",
      "Chuba Construction reverse osmosis",
    ],
  },
  hero: {
    badge: "East Bay Reverse Osmosis Installation Special",
    headline: "Clean, great-tasting water at your kitchen sink",
    subheadline:
      "Professional undersink reverse osmosis installation for East Bay homeowners — $300 flat. Licensed, bonded & insured general contractor.",
    image: siteConfig.reverseOsmosis.image,
    imageAlt: siteConfig.reverseOsmosis.imageAlt,
  },
  promo: {
    price: "$300",
    label: "Undersink reverse osmosis install special",
    includes: [
      "Undersink unit mounting & secure placement",
      "Drain line connection",
      "Dedicated filtered-water faucet",
      "System test & walkthrough",
    ],
    addOn: {
      label: "Countertop hole drilling (if required)",
      price: "+$150",
    },
    disclaimer:
      "Pricing covers professional installation only. The reverse osmosis system is purchased separately — we help you choose the right unit for your home.",
  },
  steps: [
    {
      step: "1",
      title: "Call or request a quote",
      description:
        "Tell us your city, sink setup, and whether you already have a reverse osmosis unit or need help choosing one.",
    },
    {
      step: "2",
      title: "We confirm fit & schedule",
      description:
        "We verify undersink space, faucet placement, and any countertop drilling needs — then book your install.",
    },
    {
      step: "3",
      title: "Professional install — typically same day",
      description:
        "Our licensed crew mounts your system, connects the drain, installs the faucet, and tests everything before we leave.",
    },
  ],
  trust: [
    { label: "Licensed", value: "CA #993336" },
    { label: "Experience", value: "10+ years East Bay" },
    { label: "Business type", value: "Family-owned GC" },
    { label: "Coverage", value: "Bonded & insured" },
  ],
  faq: [
    {
      question: "What does the $300 reverse osmosis installation special include?",
      answer:
        "It covers professional undersink installation: mounting the reverse osmosis unit, connecting the drain line, installing a dedicated filtered-water faucet, and testing the system. The reverse osmosis unit itself is purchased separately.",
    },
    {
      question: "Do I need to buy the reverse osmosis system before you install?",
      answer:
        "Yes — you purchase the system (or we can advise on models before you buy). Popular options include undersink tankless systems like the Waterdrop G3P600 or countertop units like the AquaTru Classic.",
    },
    {
      question: "What areas do you serve?",
      answer: `We install reverse osmosis systems in ${siteConfig.serviceAreas.join(", ")}, and surrounding East Bay communities in Contra Costa County.`,
    },
    {
      question: "How long does installation take?",
      answer:
        "Most undersink reverse osmosis installs take about 45–90 minutes, depending on your cabinet layout and whether countertop drilling is needed.",
    },
    {
      question: "When is countertop drilling needed?",
      answer:
        "If the faucet has to go through the countertop, we can drill for an additional $150.",
    },
    {
      question: "Are you licensed for this work?",
      answer: `Yes. Chuba Construction is a licensed California general contractor (${siteConfig.licenseDisplay}), fully bonded and insured.`,
    },
  ],
  contact: {
    heading: "Get Your Reverse Osmosis Install Quote",
    subtitle:
      "Tell us your city and sink setup — we'll confirm pricing and schedule your East Bay installation.",
    defaultMessage:
      "I'm interested in the East Bay Reverse Osmosis Installation Special ($300). Please contact me with availability.",
    subjectPrefix: "Reverse Osmosis Install Inquiry",
  },
  campaignUtm: {
    facebook: "?utm_source=facebook&utm_medium=paid&utm_campaign=ro-east-bay-2026",
    instagram: "?utm_source=instagram&utm_medium=paid&utm_campaign=ro-east-bay-2026",
    nextdoor: "?utm_source=nextdoor&utm_medium=paid&utm_campaign=ro-east-bay-2026",
  },
} as const;

export type ROLandingConfig = typeof roLandingConfig;
