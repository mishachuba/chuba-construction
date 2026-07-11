"use client";

import { Phone } from "lucide-react";
import { siteConfig } from "@/content/site";
import { getTelHref, handleCallClick } from "@/lib/phone";

const variantClasses = {
  primary:
    "bg-cta text-white hover:bg-cta-hover focus-visible:ring-cta",
  secondary:
    "bg-brand-navy text-white hover:bg-brand-blue focus-visible:ring-brand-navy",
  outline:
    "border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white focus-visible:ring-brand-navy",
};

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
  const baseClasses =
    "inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

  return (
    <a
      href={getTelHref()}
      onClick={handleCallClick}
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
  return (
    <a
      href={getTelHref()}
      onClick={handleCallClick}
      className={className}
    >
      {children ?? siteConfig.phoneDisplay}
    </a>
  );
}
