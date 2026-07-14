import {
  MapPin,
  Star,
  Facebook,
  Instagram,
  ExternalLink,
} from "lucide-react";
import { siteConfig } from "@/content/site";
import { SectionHeading } from "@/components/ui";

function SocialIcon({ icon }: { icon: string }) {
  switch (icon) {
    case "google":
      return <MapPin className="h-6 w-6" aria-hidden="true" />;
    case "yelp":
      return <Star className="h-6 w-6" aria-hidden="true" />;
    case "facebook":
      return <Facebook className="h-6 w-6" aria-hidden="true" />;
    case "instagram":
      return <Instagram className="h-6 w-6" aria-hidden="true" />;
    case "nextdoor":
      return <ExternalLink className="h-6 w-6" aria-hidden="true" />;
    default:
      return <ExternalLink className="h-6 w-6" aria-hidden="true" />;
  }
}

export function SocialProof() {
  return (
    <section
      className="bg-white py-16 sm:py-20"
      aria-labelledby="social-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="social-heading"
          title="Connect With Us"
          subtitle={siteConfig.social.heading}
        />
        <div className="flex flex-wrap items-center justify-center gap-4">
          {siteConfig.social.links.map((link) => {
            const isPlaceholder = link.href === "#";
            const className =
              "flex items-center gap-2 rounded-lg border border-warm-200 bg-warm-50 px-5 py-3 text-sm font-medium text-brand-navy transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2";

            if (isPlaceholder) {
              return (
                <span
                  key={link.name}
                  className={`${className} cursor-not-allowed opacity-60`}
                  aria-label={`${link.name} (link coming soon)`}
                >
                  <SocialIcon icon={link.icon} />
                  {link.name}
                </span>
              );
            }

            return (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${className} hover:border-brand-teal hover:bg-brand-teal/10`}
                aria-label={`${link.name} (opens in new tab)`}
              >
                <SocialIcon icon={link.icon} />
                {link.name}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
