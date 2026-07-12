import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { siteConfig } from "@/content/site";
import { SectionHeading } from "@/components/ui";

export function Services() {
  return (
    <section
      id="services"
      className="bg-white py-16 sm:py-20"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="services-heading"
          title="Our Services"
          subtitle={siteConfig.servicesSubtitle}
        />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {siteConfig.services.map((service) => (
            <article
              key={service.id}
              className="overflow-hidden rounded-xl border border-warm-200 bg-warm-50 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative aspect-[16/10]">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-brand-navy">
                  {service.title}
                </h3>
                <ul className="mt-4 space-y-2">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-warm-800"
                    >
                      <CheckCircle
                        className="mt-0.5 h-4 w-4 shrink-0 text-brand-teal-dark"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
