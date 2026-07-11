import Image from "next/image";
import { siteConfig } from "@/content/site";
import { Button } from "@/components/ui";
import { CallLink } from "@/components/CallLink";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[70vh] items-center justify-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <Image
        src={siteConfig.hero.backgroundImage}
        alt={siteConfig.hero.backgroundAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div
        className="absolute inset-0 bg-brand-navy/70"
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <h1
          id="hero-heading"
          className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
        >
          {siteConfig.hero.headline}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-warm-100 sm:text-xl">
          {siteConfig.hero.tagline}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="#contact" variant="primary" className="min-w-[160px] px-6 py-3 text-base">
            Get a Free Quote
          </Button>
          <CallLink
            variant="outline"
            className="min-w-[160px] border-white px-6 py-3 text-base text-white hover:bg-white hover:text-brand-navy"
          >
            Call {siteConfig.phoneDisplay}
          </CallLink>
        </div>
      </div>
    </section>
  );
}
