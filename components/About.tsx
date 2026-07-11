import { siteConfig } from "@/content/site";
import { SectionHeading } from "@/components/ui";

export function About() {
  return (
    <section
      id="about"
      className="bg-warm-100 py-16 sm:py-20"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading id="about-heading" title="About Us" />
        <div className="space-y-4 text-lg leading-relaxed text-warm-800">
          {siteConfig.about.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>
        <p className="mt-6 text-center text-sm font-medium text-brand-navy">
          {siteConfig.licenseDisplay} &bull; {siteConfig.address.city},{" "}
          {siteConfig.address.state}
        </p>
      </div>
    </section>
  );
}
