"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, MessageSquare } from "lucide-react";
import { siteConfig } from "@/content/site";
import { Button } from "@/components/ui";

export function Header() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-warm-200 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={scrollToTop}
          className="shrink-0 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2"
          aria-label={`${siteConfig.name} — scroll to top`}
        >
          <Image
            src="/Header_Logo.png"
            alt={`${siteConfig.name} logo`}
            width={220}
            height={60}
            priority
            className="h-10 w-auto sm:h-12"
          />
        </button>

        {/* Desktop actions */}
        <div className="hidden items-center gap-3 md:flex">
          <Button
            href={`tel:${siteConfig.phone}`}
            variant="secondary"
            ariaLabel={`Call ${siteConfig.phoneDisplay}`}
          >
            <Phone className="mr-1.5 h-4 w-4" aria-hidden="true" />
            Call
          </Button>
          <Button
            href={`sms:${siteConfig.phone}`}
            variant="secondary"
            ariaLabel={`Text ${siteConfig.phoneDisplay}`}
          >
            <MessageSquare className="mr-1.5 h-4 w-4" aria-hidden="true" />
            Text
          </Button>
          <Button href="#contact" variant="primary">
            Quote
          </Button>
        </div>

        {/* Mobile: Quote only (Call/Text in bottom bar) */}
        <div className="md:hidden">
          <Button href="#contact" variant="primary" className="px-3 py-2">
            Quote
          </Button>
        </div>
      </div>

      {/* Mobile: compact horizontal nav */}
      <nav
        className="border-t border-warm-100 bg-white md:hidden"
        aria-label="Mobile navigation"
      >
        <ul className="flex gap-1 overflow-x-auto px-4 py-2 scrollbar-none">
          {siteConfig.navigation.map((item) => (
            <li key={item.href} className="shrink-0">
              <Link
                href={item.href}
                className="block whitespace-nowrap rounded-lg px-3 py-1.5 text-xs font-medium text-warm-800 transition-colors hover:bg-warm-100 hover:text-brand-navy"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Desktop navigation */}
      <nav
        className="hidden border-t border-warm-100 bg-white md:block"
        aria-label="Main navigation"
      >
        <ul className="mx-auto flex max-w-7xl justify-center gap-1 px-4 py-2 sm:px-6 lg:px-8">
          {siteConfig.navigation.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-warm-800 transition-colors hover:bg-warm-100 hover:text-brand-navy"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
