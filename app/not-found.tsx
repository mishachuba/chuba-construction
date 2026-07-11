import Link from "next/link";
import { CallTextLink } from "@/components/CallLink";

export default function NotFound() {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-20 text-center">
      <h1 className="text-4xl font-bold text-brand-navy">Page Not Found</h1>
      <p className="mt-4 max-w-md text-warm-700">
        Sorry, we couldn&apos;t find the page you&apos;re looking for.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center rounded-lg bg-cta px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-cta-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cta focus-visible:ring-offset-2"
      >
        Back to Home
      </Link>
      <p className="mt-6 text-sm text-warm-700">
        Need help? Call{" "}
        <CallTextLink className="font-medium text-brand-navy underline-offset-4 hover:underline" />
      </p>
    </main>
  );
}
