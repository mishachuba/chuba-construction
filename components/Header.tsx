"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Phone, MessageSquare } from "lucide-react";
import { siteConfig } from "@/content/site";
import { Button } from "@/components/ui";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMenuOpen(false);
  };

  const closeMenu = () => setMenuOpen(false);

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

        <div className="flex items-center gap-2 sm:gap-3">
          {/* Desktop: Call, Text, Quote */}
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

          {/* Hamburger menu — all screen sizes */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg p-2 text-brand-navy hover:bg-warm-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2"
            aria-expanded={menuOpen}
            aria-controls="site-nav-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Hamburger dropdown */}
      {menuOpen && (
        <nav
          id="site-nav-menu"
          className="border-t border-warm-200 bg-white"
          aria-label="Site navigation"
        >
          <ul className="mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
            {siteConfig.navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={closeMenu}
                  className="block rounded-lg px-3 py-3 text-sm font-medium text-brand-navy hover:bg-warm-100 md:py-2.5"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
