import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle,
  Droplets,
  MapPin,
  Shield,
  Wrench,
} from "lucide-react";
import { siteConfig } from "@/content/site";
import { roLandingConfig } from "@/content/ro-landing";
import { CallLink } from "@/components/CallLink";
import { ROContactForm } from "@/components/ROContactForm";
import { Button } from "@/components/ui";

export function ROLandingPage() {
  const { hero, promo, steps, trust, faq } = roLandingConfig;
  const ro = siteConfig.reverseOsmosis;

  return (
    <main>
      {/* Hero */}
      <section
        className="relative overflow-hidden bg-brand-navy py-16 sm:py-24"
        aria-labelledby="ro-hero-heading"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div>
            <p className="mb-4 inline-block rounded-full bg-cta px-4 py-1.5 text-sm font-semibold text-white">
              {hero.badge}
            </p>
            <h1
              id="ro-hero-heading"
              className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              {hero.headline}
            </h1>
            <p className="mt-4 text-lg text-warm-100 sm:text-xl">
              {hero.subheadline}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <CallLink variant="primary" className="px-6 py-3 text-base">
                Call {siteConfig.phoneDisplay}
              </CallLink>
              <Button
                href="#ro-quote"
                variant="outline"
                className="border-white px-6 py-3 text-base text-white hover:bg-white hover:text-brand-navy"
              >
                Get Free Quote
              </Button>
            </div>

            <p className="mt-6 flex items-center gap-2 text-sm text-warm-200">
              <Shield className="h-4 w-4 shrink-0" aria-hidden="true" />
              {siteConfig.licenseDisplay} · Bonded · Insured
            </p>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-2xl">
            <Image
              src={hero.image}
              alt={hero.imageAlt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Promo pricing */}
      <section
        className="bg-white py-16 sm:py-20"
        aria-labelledby="ro-promo-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2
              id="ro-promo-heading"
              className="text-3xl font-bold text-brand-navy sm:text-4xl"
            >
              {promo.label}
            </h2>
            <p className="mt-2 text-5xl font-bold text-cta sm:text-6xl">
              {promo.price}
            </p>
            <p className="mt-4 text-warm-700">{promo.disclaimer}</p>
          </div>

          <div className="mx-auto mt-10 grid max-w-4xl gap-8 md:grid-cols-2">
            <div className="rounded-xl border border-warm-200 bg-warm-50 p-6">
              <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-brand-navy">
                <CheckCircle
                  className="h-5 w-5 text-brand-teal-dark"
                  aria-hidden="true"
                />
                What&apos;s included
              </h3>
              <ul className="space-y-2">
                {promo.includes.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-warm-800"
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

            <div className="rounded-xl border-2 border-cta bg-cta-light p-6">
              <h3 className="mb-2 text-lg font-bold text-brand-navy">
                Optional add-on
              </h3>
              <div className="flex items-center justify-between gap-4">
                <span className="text-warm-800">{promo.addOn.label}</span>
                <span className="text-xl font-bold text-cta">
                  {promo.addOn.price}
                </span>
              </div>
              <div className="mt-6 border-t border-cta/30 pt-6">
                <CallLink variant="primary" className="w-full py-3">
                  Book Install — {siteConfig.phoneDisplay}
                </CallLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section
        className="bg-warm-100 py-16 sm:py-20"
        aria-labelledby="ro-benefits-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2
            id="ro-benefits-heading"
            className="mb-10 text-center text-3xl font-bold text-brand-navy sm:text-4xl"
          >
            Why East Bay homeowners choose RO
          </h2>
          <ul className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
            {ro.benefits.map((benefit) => (
              <li
                key={benefit}
                className="flex items-start gap-3 rounded-lg border border-warm-200 bg-white p-4"
              >
                <Droplets
                  className="mt-0.5 h-5 w-5 shrink-0 text-brand-teal-dark"
                  aria-hidden="true"
                />
                <span className="text-warm-800">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How it works */}
      <section
        className="bg-white py-16 sm:py-20"
        aria-labelledby="ro-steps-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2
            id="ro-steps-heading"
            className="mb-10 text-center text-3xl font-bold text-brand-navy sm:text-4xl"
          >
            How it works
          </h2>
          <ol className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
            {steps.map((item) => (
              <li
                key={item.step}
                className="rounded-xl border border-warm-200 bg-warm-50 p-6 text-center"
              >
                <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-brand-navy text-lg font-bold text-white">
                  {item.step}
                </span>
                <h3 className="mt-4 font-bold text-brand-navy">{item.title}</h3>
                <p className="mt-2 text-sm text-warm-700">{item.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Configuration options */}
      <section
        className="bg-warm-100 py-16 sm:py-20"
        aria-labelledby="ro-config-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2
            id="ro-config-heading"
            className="mb-10 text-center text-3xl font-bold text-brand-navy sm:text-4xl"
          >
            We install the system that fits your home
          </h2>
          <div className="mx-auto grid max-w-4xl gap-4 md:grid-cols-3">
            {ro.configurations.map((config) => (
              <div
                key={config.title}
                className="rounded-lg border border-warm-200 bg-white p-5"
              >
                <h3 className="flex items-center gap-2 font-semibold text-brand-navy">
                  <Wrench className="h-4 w-4 text-brand-teal-dark" aria-hidden="true" />
                  {config.title}
                </h3>
                <p className="mt-2 text-sm text-warm-700">{config.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust + service area */}
      <section
        className="bg-white py-16 sm:py-20"
        aria-labelledby="ro-trust-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2
            id="ro-trust-heading"
            className="mb-10 text-center text-3xl font-bold text-brand-navy sm:text-4xl"
          >
            Licensed local contractor you can trust
          </h2>
          <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {trust.map((item) => (
              <div
                key={item.label}
                className="rounded-lg border border-warm-200 bg-warm-50 p-4 text-center"
              >
                <p className="text-sm font-medium text-warm-700">{item.label}</p>
                <p className="mt-1 font-bold text-brand-navy">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-10 max-w-2xl text-center">
            <p className="flex items-center justify-center gap-2 font-semibold text-brand-navy">
              <MapPin className="h-5 w-5 text-brand-teal-dark" aria-hidden="true" />
              Service areas
            </p>
            <p className="mt-2 text-warm-700">
              {siteConfig.serviceAreas.join(" · ")}
            </p>
            <Link
              href="/"
              className="mt-4 inline-block text-sm font-medium text-brand-blue underline-offset-4 hover:underline"
            >
              View all Chuba Construction services →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        className="bg-warm-100 py-16 sm:py-20"
        aria-labelledby="ro-faq-heading"
      >
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2
            id="ro-faq-heading"
            className="mb-10 text-center text-3xl font-bold text-brand-navy sm:text-4xl"
          >
            RO installation FAQ
          </h2>
          <div className="space-y-3">
            {faq.map((item) => (
              <details
                key={item.question}
                className="group overflow-hidden rounded-lg border border-warm-200 bg-white"
              >
                <summary className="cursor-pointer px-5 py-4 text-base font-semibold text-brand-navy marker:content-none hover:bg-warm-50 [&::-webkit-details-marker]:hidden">
                  {item.question}
                </summary>
                <div className="border-t border-warm-100 px-5 pb-4 pt-2">
                  <p className="text-warm-700">{item.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <ROContactForm />
    </main>
  );
}
