import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: `Privacy Policy | ${siteConfig.name}`,
  description: `Privacy policy for ${siteConfig.name}. Learn how we collect, use, and protect your personal information.`,
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-brand-navy sm:text-4xl">
        Privacy Policy
      </h1>
      <p className="mt-2 text-sm text-warm-700">
        Last updated: {siteConfig.privacy.lastUpdated}
      </p>

      <div className="prose-custom mt-10 space-y-8 text-warm-800">
        <section>
          <h2 className="text-xl font-bold text-brand-navy">Introduction</h2>
          <p className="mt-3 leading-relaxed">
            {siteConfig.name} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;)
            operates the website{" "}
            <a
              href={siteConfig.url}
              className="text-brand-blue underline-offset-4 hover:underline"
            >
              {siteConfig.url}
            </a>
            . This Privacy Policy explains how we collect, use, disclose, and
            safeguard your information when you visit our website or submit a
            contact form.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-brand-navy">
            Information We Collect
          </h2>
          <p className="mt-3 leading-relaxed">
            When you submit our contact or quote request form, we collect:
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-6">
            <li>Full name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Zip code</li>
            <li>Project message or inquiry details</li>
          </ul>
          <p className="mt-3 leading-relaxed">
            We may also collect standard technical data automatically, such as
            browser type, device type, and pages visited, if analytics tools are
            enabled (see Third-Party Services below).
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-brand-navy">
            How We Use Your Information
          </h2>
          <ul className="mt-3 list-disc space-y-1 pl-6">
            <li>Respond to your inquiry and provide project quotes</li>
            <li>Communicate with you about scheduling and services</li>
            <li>Improve our website and customer experience</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-brand-navy">
            Contact Form &amp; Email Routing
          </h2>
          <p className="mt-3 leading-relaxed">
            Form submissions are processed through Web3Forms, a third-party form
            handling service. Your submission data is transmitted securely to
            Web3Forms and then forwarded to our business email at{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-brand-blue underline-offset-4 hover:underline"
            >
              {siteConfig.email}
            </a>
            . We do not sell your contact information to third parties.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-brand-navy">Cookies</h2>
          <p className="mt-3 leading-relaxed">
            This website does not currently use cookies for tracking or
            advertising. If we enable Google Analytics or similar services in
            the future, those tools may set cookies to collect anonymous usage
            data. We will update this policy if our cookie practices change.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-brand-navy">
            Third-Party Services
          </h2>
          <p className="mt-3 leading-relaxed">
            We may use the following third-party services:
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-6">
            <li>
              <strong>Web3Forms</strong> — processes contact form submissions
            </li>
            <li>
              <strong>Vercel</strong> — hosts and delivers the website
            </li>
            <li>
              <strong>Google Analytics / Google Tag Manager</strong> (optional,
              not active by default) — website usage analytics
            </li>
          </ul>
          <p className="mt-3 leading-relaxed">
            Each third-party service has its own privacy policy governing how
            they handle data.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-brand-navy">Data Retention</h2>
          <p className="mt-3 leading-relaxed">
            We retain contact form submissions and related correspondence for
            as long as needed to respond to your inquiry, provide services,
            maintain business records, and comply with legal requirements.
            Typically, inquiry data is retained for up to three years unless a
            longer period is required by law or ongoing business relationship.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-brand-navy">
            California Privacy Rights (CCPA)
          </h2>
          <p className="mt-3 leading-relaxed">
            If you are a California resident, you have the following rights under
            the California Consumer Privacy Act (CCPA), as amended by the
            California Privacy Rights Act (CPRA):
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>
              <strong>Right to Know:</strong> You may request details about the
              personal information we have collected about you, including
              categories of data, sources, purposes, and third parties with whom
              it is shared.
            </li>
            <li>
              <strong>Right to Delete:</strong> You may request deletion of
              personal information we have collected, subject to certain legal
              exceptions.
            </li>
            <li>
              <strong>Right to Correct:</strong> You may request correction of
              inaccurate personal information.
            </li>
            <li>
              <strong>Right to Opt-Out of Sale/Sharing:</strong> We do not sell
              or share your personal information for cross-context behavioral
              advertising.
            </li>
            <li>
              <strong>Right to Non-Discrimination:</strong> We will not
              discriminate against you for exercising your privacy rights.
            </li>
          </ul>
          <p className="mt-3 leading-relaxed">
            To exercise these rights, contact us at{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-brand-blue underline-offset-4 hover:underline"
            >
              {siteConfig.email}
            </a>{" "}
            or call{" "}
            <a
              href={`tel:${siteConfig.phone}`}
              className="text-brand-blue underline-offset-4 hover:underline"
            >
              {siteConfig.phoneDisplay}
            </a>
            . We will verify your request and respond within the timeframe
            required by law.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-brand-navy">Security</h2>
          <p className="mt-3 leading-relaxed">
            We use reasonable administrative and technical measures to protect
            your information. However, no method of transmission over the
            Internet is 100% secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-brand-navy">
            Changes to This Policy
          </h2>
          <p className="mt-3 leading-relaxed">
            We may update this Privacy Policy from time to time. Changes will be
            posted on this page with an updated &quot;Last updated&quot; date.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-brand-navy">Contact Us</h2>
          <p className="mt-3 leading-relaxed">
            If you have questions about this Privacy Policy, contact us:
          </p>
          <ul className="mt-3 space-y-1">
            <li>
              Email:{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-brand-blue underline-offset-4 hover:underline"
              >
                {siteConfig.email}
              </a>
            </li>
            <li>
              Phone:{" "}
              <a
                href={`tel:${siteConfig.phone}`}
                className="text-brand-blue underline-offset-4 hover:underline"
              >
                {siteConfig.phoneDisplay}
              </a>
            </li>
            <li>
              Location: {siteConfig.address.city}, {siteConfig.address.state}
            </li>
          </ul>
        </section>
      </div>

      <div className="mt-12 border-t border-warm-200 pt-8">
        <Link
          href="/"
          className="text-brand-blue underline-offset-4 hover:underline"
        >
          &larr; Back to Home
        </Link>
      </div>
    </main>
  );
}
