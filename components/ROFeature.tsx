import Image from "next/image";
import { Droplets, CheckCircle } from "lucide-react";
import { siteConfig } from "@/content/site";
import { roLandingConfig } from "@/content/ro-landing";
import { SectionHeading, Button } from "@/components/ui";

export function ROFeature() {
  const ro = siteConfig.reverseOsmosis;

  return (
    <section
      id="ro-systems"
      className="bg-white py-16 sm:py-20"
      aria-labelledby="ro-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="ro-heading"
          title={ro.heading}
          subtitle={ro.subheading}
        />

        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <div className="relative mb-8 aspect-[1024/863] overflow-hidden rounded-xl bg-white">
              <Image
                src={ro.image}
                alt={ro.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain"
              />
            </div>

            <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-brand-navy">
              <Droplets className="h-5 w-5 text-brand-teal-dark" aria-hidden="true" />
              Why Reverse Osmosis?
            </h3>
            <ul className="space-y-2">
              {ro.benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-start gap-2 text-warm-800"
                >
                  <CheckCircle
                    className="mt-0.5 h-4 w-4 shrink-0 text-brand-teal-dark"
                    aria-hidden="true"
                  />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="mb-4 text-xl font-bold text-brand-navy">
                Configuration Options
              </h3>
              <div className="space-y-4">
                {ro.configurations.map((config) => (
                  <div
                    key={config.title}
                    className="rounded-lg border border-warm-200 bg-warm-50 p-4"
                  >
                    <h4 className="font-semibold text-brand-navy">
                      {config.title}
                    </h4>
                    <p className="mt-1 text-sm text-warm-700">
                      {config.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border-2 border-cta bg-cta-light p-6">
              <h3 className="text-xl font-bold text-brand-navy">
                {ro.pricing.heading}
              </h3>
              <ul className="mt-4 space-y-2">
                {ro.pricing.items.map((item) => (
                  <li
                    key={item.label}
                    className="flex items-center justify-between gap-4 text-warm-800"
                  >
                    <span>{item.label}</span>
                    <span className="shrink-0 text-lg font-bold text-cta">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-warm-700">{ro.pricing.note}</p>
              <div className="mt-6">
                <Button href={roLandingConfig.path} variant="primary" className="w-full sm:w-auto">
                  View Reverse Osmosis Install Special →
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
