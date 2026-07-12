export const siteConfig = {
  name: "Chuba Construction",
  tagline: "General Contractor",
  url: "https://chubaconstruction.com",
  phone: "9253221106",
  phoneDisplay: "925-322-1106",
  phoneE164: "+19253221106",
  email: "chubaconstruction@gmail.com",
  licenseNumber: "993336",
  licenseDisplay: "CA License #993336",
  address: {
    city: "Walnut Creek",
    state: "CA",
    region: "Contra Costa County",
  },
  serviceAreas: [
    "Walnut Creek",
    "Concord",
    "Lafayette",
    "Orinda",
    "Danville",
    "Pleasant Hill",
    "Moraga",
    "greater East Bay",
  ],
  servicesSubtitle: "Serving Walnut Creek & East Bay",
  hero: {
    headline: "Repair, remodel, new build – we can do it all.",
    tagline:
      "Licensed, bonded, insured, family-owned, and fairly priced.",
    backgroundImage:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1920&q=80",
    backgroundAlt:
      "Sunlit residential kitchen remodel with warm wood cabinetry and custom finishes",
  },
  about: {
    paragraphs: [
      "Chuba Construction is a family-owned general contractor proudly serving the East Bay and surrounding areas for 10+ years. What started as a father-and-son team has grown into a trusted local company known for reliable work, clear communication, and fair pricing.",
      "We treat every project like it's our own home. Licensed, bonded, and fully insured, we're committed to doing the job right the first time.",
    ],
  },
  services: [
    {
      id: "core",
      title: "Core Services",
      items: [
        "Home repairs & renovations",
        "Kitchen & bathroom remodels",
        "Drywall, painting & finish carpentry",
        "Additions, ADUs, & prefab homes",
      ],
      image:
        "https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=800&q=80",
      imageAlt: "Modern kitchen renovation in progress",
    },
    {
      id: "exterior",
      title: "Exterior & Outdoor",
      items: [
        "Deck, fence & exterior work",
        "Landscaping, paving & concrete",
        "Backyard storage & organization",
        "Outdoor sauna installation",
      ],
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      imageAlt: "Custom deck and outdoor living space",
    },
    {
      id: "upgrades",
      title: "Home Upgrades & Installs",
      items: [
        "Reverse osmosis water filtration",
        "Awnings, screens, shades & blinds",
        "Rooftop solar systems",
        "Custom projects — just ask",
      ],
      image:
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
      imageAlt: "Rooftop solar panel installation on a residential home",
    },
  ],
  projects: {
    heading: "Recent Projects",
    subheading: "Sample project styles",
    items: [
      {
        title: "Kitchen remodel",
        image:
          "https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=800&q=80",
        alt: "Placeholder — kitchen remodeling style reference",
      },
      {
        title: "Bathroom renovation",
        image:
          "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&q=80",
        alt: "Placeholder — bathroom renovation style reference",
      },
      {
        title: "Deck construction",
        image:
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
        alt: "Placeholder — deck construction style reference",
      },
      {
        title: "Home addition",
        image:
          "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
        alt: "Placeholder — home addition style reference",
      },
      {
        title: "Exterior painting",
        image:
          "https://images.unsplash.com/photo-1605276374101-dee2a786ed80?w=800&q=80",
        alt: "Placeholder — exterior painting style reference",
      },
      {
        title: "Landscaping & concrete",
        image:
          "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
        alt: "Placeholder — landscaping and concrete style reference",
      },
      {
        title: "ADU build",
        image:
          "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
        alt: "Placeholder — accessory dwelling unit style reference",
      },
      {
        title: "Finish carpentry",
        image:
          "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
        alt: "Placeholder — finish carpentry style reference",
      },
    ],
  },
  reverseOsmosis: {
    heading: "Reverse Osmosis Water Filtration",
    subheading:
      "Cleaner, better-tasting water for your home",
    benefits: [
      "Removes common contaminants including lead, chlorine, PFAS, and dissolved solids",
      "Saves money compared to bottled water over time",
      "Reduces plastic waste from single-use bottles",
      "Improves taste for drinking, cooking, and coffee",
    ],
    configurations: [
      {
        title: "Countertop vs. Undersink",
        description:
          "Countertop units like the AquaTru Classic sit on your counter and need no permanent installation. Undersink systems like the Waterdrop G3P600 mount beneath the sink for a cleaner look and higher daily capacity.",
      },
      {
        title: "Tanked vs. Tankless",
        description:
          "Tanked systems store filtered water for instant flow. Tankless systems filter on demand — great when space is limited under the sink.",
      },
      {
        title: "Alkaline vs. Non-Alkaline",
        description:
          "Standard RO produces neutral-pH water. Alkaline remineralization filters add minerals back for a smoother taste — ask us which option fits your household.",
      },
    ],
    image:
      "https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80",
    imageAlt:
      "Clear glasses of fresh drinking water on a wooden kitchen counter",
    pricing: {
      heading: "East Bay RO Installation Special",
      items: [
        { label: "Basic undersink installation", price: "$300" },
        {
          label: "Countertop hole drilling (if required)",
          price: "+$150",
        },
        {
          label: "Electrical outlet upgrade (if required)",
          price: "+$150",
        },
      ],
      note: "Pricing covers professional installation. System purchase is separate — we can help you choose the right unit.",
    },
  },
  social: {
    heading: "Find us on your favorite platform",
    links: [
      { name: "Google Business", href: "#", icon: "google" as const },
      { name: "Yelp", href: "#", icon: "yelp" as const },
      { name: "Facebook", href: "#", icon: "facebook" as const },
      { name: "Instagram", href: "#", icon: "instagram" as const },
      { name: "Nextdoor", href: "#", icon: "nextdoor" as const },
    ],
  },
  faq: [
    {
      question: "Are you licensed, bonded, and insured?",
      answer:
        "Yes. Chuba Construction is a licensed California general contractor (License #993336), fully bonded, and insured. We are happy to provide proof of insurance upon request.",
    },
    {
      question: "What areas do you serve?",
      answer:
        "We serve Walnut Creek, Concord, Lafayette, Orinda, Danville, Pleasant Hill, Moraga, and the greater East Bay in Contra Costa County and surrounding areas.",
    },
    {
      question: "How do I get a quote?",
      answer:
        "Call or text us at 925-322-1106, or fill out the contact form on this page with your project details and zip code. We will follow up to discuss scope, timeline, and pricing.",
    },
    {
      question: "Do you handle small repairs and handyman jobs?",
      answer:
        "Yes. We take on projects of all sizes — from single repairs and handyman tasks to full kitchen and bathroom remodels, additions, and new builds.",
    },
    {
      question: "What is included in the RO installation special?",
      answer:
        "Our East Bay RO Installation Special covers professional undersink installation for $300. If countertop drilling is required, add $150. If an electrical outlet upgrade is needed, add $150. The RO system itself is purchased separately.",
    },
    {
      question: "How soon can you start my project?",
      answer:
        "Start dates depend on project scope and our current schedule. After we review your project, we will give you a realistic timeline. Smaller jobs are often scheduled within a few weeks; larger remodels may require more lead time.",
    },
  ],
  navigation: [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "RO Systems", href: "#ro-systems" },
    { label: "About", href: "#about" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],
  seo: {
    title:
      "Chuba Construction | General Contractor Walnut Creek & East Bay CA",
    description:
      "Licensed, bonded & insured general contractor in Walnut Creek, CA. Kitchen & bathroom remodeling, ADU builder, deck construction, handyman services & RO water filtration across Contra Costa County and the East Bay.",
    keywords: [
      "General Contractor Walnut Creek",
      "Handyman East Bay CA",
      "Kitchen Remodeling Walnut Creek",
      "Bathroom Remodeling Walnut Creek",
      "ADU Builder East Bay",
      "Deck Builder Contra Costa County",
    ],
  },
  privacy: {
    lastUpdated: "July 11, 2026",
  },
} as const;

export type SiteConfig = typeof siteConfig;
