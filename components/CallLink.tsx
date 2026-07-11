"use client";

import { useEffect, useRef, useState } from "react";
import { Phone, ChevronDown } from "lucide-react";
import { siteConfig } from "@/content/site";
import {
  getCallHref,
  getFaceTimeAudioHref,
  getTelHref,
  isAppleCallMenuDevice,
} from "@/lib/phone";

const variantClasses = {
  primary:
    "bg-cta text-white hover:bg-cta-hover focus-visible:ring-cta",
  secondary:
    "bg-brand-navy text-white hover:bg-brand-blue focus-visible:ring-brand-navy",
  outline:
    "border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white focus-visible:ring-brand-navy",
};

function useCallHref(): string {
  const [href, setHref] = useState(getTelHref);

  useEffect(() => {
    setHref(getCallHref());
  }, []);

  return href;
}

interface CallLinkProps {
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  children: React.ReactNode;
  showIcon?: boolean;
  ariaLabel?: string;
}

export function CallLink({
  variant = "secondary",
  className = "",
  children,
  showIcon = false,
  ariaLabel = `Call ${siteConfig.phoneDisplay}`,
}: CallLinkProps) {
  const href = useCallHref();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showCallMenu, setShowCallMenu] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setShowCallMenu(isAppleCallMenuDevice());
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [menuOpen]);

  const baseClasses =
    "inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

  if (showCallMenu) {
    return (
      <div ref={containerRef} className="relative inline-flex">
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className={`${baseClasses} ${variantClasses[variant]} ${className}`}
          aria-label={ariaLabel}
          aria-expanded={menuOpen}
          aria-haspopup="true"
        >
          {showIcon && (
            <Phone className="mr-1.5 h-4 w-4" aria-hidden="true" />
          )}
          {children}
          <ChevronDown
            className={`ml-1 h-4 w-4 transition-transform ${menuOpen ? "rotate-180" : ""}`}
            aria-hidden="true"
          />
        </button>

        {menuOpen && (
          <div
            role="menu"
            className="absolute right-0 top-full z-50 mt-2 min-w-[220px] overflow-hidden rounded-lg border border-warm-200 bg-white py-1 shadow-lg"
          >
            <a
              role="menuitem"
              href={getFaceTimeAudioHref()}
              onClick={() => setMenuOpen(false)}
              className="block px-4 py-2.5 text-sm font-medium text-brand-navy hover:bg-warm-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-teal"
            >
              Call with FaceTime
            </a>
            <a
              role="menuitem"
              href={getTelHref()}
              onClick={() => setMenuOpen(false)}
              className="block px-4 py-2.5 text-sm font-medium text-brand-navy hover:bg-warm-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-teal"
            >
              Call with Phone
            </a>
          </div>
        )}
      </div>
    );
  }

  return (
    <a
      href={href}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      aria-label={ariaLabel}
    >
      {showIcon && (
        <Phone className="mr-1.5 h-4 w-4" aria-hidden="true" />
      )}
      {children}
    </a>
  );
}

export function CallTextLink({
  className = "",
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  const href = useCallHref();

  return (
    <a href={href} className={className}>
      {children ?? siteConfig.phoneDisplay}
    </a>
  );
}
