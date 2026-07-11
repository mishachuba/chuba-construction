import Link from "next/link";
import { siteConfig } from "@/content/site";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  ariaLabel?: string;
}

const variantClasses = {
  primary:
    "bg-cta text-white hover:bg-cta-hover focus-visible:ring-cta",
  secondary:
    "bg-brand-navy text-white hover:bg-brand-blue focus-visible:ring-brand-navy",
  outline:
    "border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white focus-visible:ring-brand-navy",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  ariaLabel,
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

  const isExternal =
    href.startsWith("http") ||
    href.startsWith("tel:") ||
    href.startsWith("sms:") ||
    href.startsWith("mailto:");

  if (isExternal) {
    return (
      <a
        href={href}
        className={`${baseClasses} ${variantClasses[variant]} ${className}`}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      aria-label={ariaLabel}
    >
      {children}
    </Link>
  );
}

export function SectionHeading({
  id,
  title,
  subtitle,
  className = "",
}: {
  id?: string;
  title: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div className={`mb-10 text-center ${className}`}>
      <h2
        id={id}
        className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl"
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-3 max-w-2xl text-lg text-warm-700">{subtitle}</p>
      )}
    </div>
  );
}
