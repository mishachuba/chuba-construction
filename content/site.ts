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
  servicesSubtitle: "Serving Walnut Creek & Bay Area",
  hero: {
    headline: "Repair, remodel, new build, we can do it all.",
    tagline:
      "Licensed. Bonded. Insured. Lic #993336",
    backgroundImage:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1920&q=80",
    backgroundAlt:
      "Sunlit residential kitchen remodel with warm wood cabinetry and custom finishes",
  },
  about: {
    paragraphs: [
      "Chuba Construction is a family-owned general contractor proudly serving the East Bay and surrounding areas for 10+ years. What started as a father-and-son team has grown into a trusted local company known for reliable work, clear communication, and fair pricing. We treat every project like it's our own home, and we're committed to doing the job right.",
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
    subheading: "Real photos and videos",
    items: [
      {
        title: "Bathroom remodel",
        media: [
          {
            type: "image",
            src: "/projects/bathroom-remodel/1.png",
            alt: "Bathroom remodel — vanity, toilet, and tub with stone tile",
          },
          {
            type: "image",
            src: "/projects/bathroom-remodel/2.png",
            alt: "Bathroom remodel — wide view of vanity and shower area",
          },
          {
            type: "image",
            src: "/projects/bathroom-remodel/3.png",
            alt: "Bathroom remodel — tub and stone tile shower surround",
          },
          {
            type: "video",
            src: "/projects/bathroom-remodel/video.mov",
            alt: "Bathroom remodel — project walkthrough video",
            poster: "/projects/bathroom-remodel/1.png",
          },
        ],
      },
      {
        title: "Deck construction",
        media: [
          {
            type: "image",
            src: "/projects/deck-construction/1.png",
            alt: "Deck construction — covered porch with stairs and railing",
          },
          {
            type: "image",
            src: "/projects/deck-construction/2.png",
            alt: "Deck construction — walkway with clear roof and wood railing",
          },
          {
            type: "image",
            src: "/projects/deck-construction/3.png",
            alt: "Deck construction — deck, stairs, and covered entry",
          },
          {
            type: "video",
            src: "/projects/deck-construction/video.mov",
            alt: "Deck construction — project walkthrough video",
            poster: "/projects/deck-construction/1.png",
          },
        ],
      },
      {
        title: "Landscaping & concrete",
        media: [
          {
            type: "image",
            src: "/projects/landscaping-concrete/1.png",
            alt: "Landscaping and concrete — front yard steps and drought-tolerant garden",
          },
          {
            type: "image",
            src: "/projects/landscaping-concrete/2.png",
            alt: "Landscaping and concrete — front yard with river rock and concrete walkway",
          },
          {
            type: "image",
            src: "/projects/landscaping-concrete/3.png",
            alt: "Landscaping and concrete — backyard with turf, patio, and stepping stones",
          },
          {
            type: "image",
            src: "/projects/landscaping-concrete/4.png",
            alt: "Landscaping and concrete — backyard lawn with concrete borders",
          },
          {
            type: "video",
            src: "/projects/landscaping-concrete/video.mov",
            alt: "Landscaping and concrete — project walkthrough video",
            poster: "/projects/landscaping-concrete/video-poster.png",
          },
        ],
      },
      {
        title: "Custom sauna",
        media: [
          {
            type: "image",
            src: "/projects/custom-sauna/1.png",
            alt: "Custom sauna — exterior with wood door and sliding window",
          },
          {
            type: "image",
            src: "/projects/custom-sauna/2.png",
            alt: "Custom sauna — interior benches and wood paneling",
          },
          {
            type: "image",
            src: "/projects/custom-sauna/3.png",
            alt: "Custom sauna — interior with heater and tiered benches",
          },
          {
            type: "image",
            src: "/projects/custom-sauna/4.png",
            alt: "Custom sauna — heater with stone surround and heat guard",
          },
          {
            type: "image",
            src: "/projects/custom-sauna/5.png",
            alt: "Custom sauna — changing room with bench and accessories",
          },
          {
            type: "video",
            src: "/projects/custom-sauna/video.mov",
            alt: "Custom sauna — project walkthrough video",
            poster: "/projects/custom-sauna/1.png",
          },
        ],
      },
    ],
  },
  reverseOsmosis: {
    heading: "Home Upgrade Idea",
    subheading:
      "Install reverse osmosis water filter",
    benefits: [
      "Removes common contaminants including lead, chlorine, PFAS, arsenic, nitrates, microplastics, and dissolved solids",
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
    image: "/ro-filter-system.png",
    imageAlt:
      "Tankless reverse osmosis water filtration system with dedicated faucet",
    pricing: {
      heading: "East Bay RO Installation Special",
      items: [
        { label: "Basic undersink unit installation and faucet", price: "$300" },
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
      {
        name: "Google Business",
        href: "https://maps.app.goo.gl/HrHiMezgTLzqJ2a2A",
        icon: "google" as const,
      },
      {
        name: "Yelp",
        href: "https://www.yelp.com/biz/chuba-construction-walnut-creek",
        icon: "yelp" as const,
      },
      {
        name: "Facebook",
        href: "https://www.facebook.com/chubaconstruction/",
        icon: "facebook" as const,
      },
      {
        name: "Instagram",
        href: "https://www.instagram.com/chubaconstruction/",
        icon: "instagram" as const,
      },
      {
        name: "Nextdoor",
        href: "https://nextdoor.com/page/chuba-construction-walnut-creek-ca",
        icon: "nextdoor" as const,
      },
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
        "Start dates depend on project scope and our current schedule. After we review your project, we will give you a realistic timeline. Smaller jobs are often scheduled within a week; larger remodels may require more lead time.",
    },
  ],
  navigation: [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Home Upgrade Idea", href: "#ro-systems" },
    { label: "About", href: "#about" },
    { label: "Connect With Us", href: "#connect-with-us" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],
  seo: {
    title:
      "Chuba Construction | General Contractor Walnut Creek & Bay Area CA",
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
