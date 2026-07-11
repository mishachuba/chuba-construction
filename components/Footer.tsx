import Link from "next/link";
import { siteConfig } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-warm-200 bg-brand-navy text-white">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-warm-200">
            &copy; {year} {siteConfig.name}
          </p>
          <p className="text-sm text-warm-200">{siteConfig.licenseDisplay}</p>
          <Link
            href="/privacy"
            className="text-sm text-brand-teal underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
