"use client";

import { useState, FormEvent } from "react";
import { Phone, Mail, MapPin, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { CallTextLink } from "@/components/CallLink";
import { siteConfig } from "@/content/site";
import { SectionHeading } from "@/components/ui";

type FormStatus = "idle" | "loading" | "success" | "error";

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  zip?: string;
  message?: string;
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePhone(phone: string): boolean {
  const digits = phone.replace(/\D/g, "");
  return digits.length >= 10;
}

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<FormErrors>({});
  const [errorMessage, setErrorMessage] = useState("");

  const validate = (formData: FormData): FormErrors => {
    const newErrors: FormErrors = {};
    const name = (formData.get("name") as string)?.trim();
    const email = (formData.get("email") as string)?.trim();
    const phone = (formData.get("phone") as string)?.trim();
    const zip = (formData.get("zip") as string)?.trim();
    const message = (formData.get("message") as string)?.trim();

    if (!name) newErrors.name = "Full name is required";
    if (!email) newErrors.email = "Email is required";
    else if (!validateEmail(email)) newErrors.email = "Enter a valid email";
    if (!phone) newErrors.phone = "Phone is required";
    else if (!validatePhone(phone)) newErrors.phone = "Enter a valid phone number";
    if (!zip) newErrors.zip = "Zip code is required";
    else if (!/^\d{5}(-\d{4})?$/.test(zip)) newErrors.zip = "Enter a valid zip code";
    if (!message) newErrors.message = "Message is required";

    return newErrors;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Honeypot check
    if (formData.get("botcheck")) return;

    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    if (!accessKey || accessKey === "your_access_key_here") {
      setStatus("error");
      setErrorMessage(
        "Contact form is not configured yet. Please call or text us directly."
      );
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New inquiry from ${formData.get("name")}`,
          from_name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          zip: formData.get("zip"),
          message: formData.get("message"),
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMessage(result.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please try again or call us directly.");
    }
  };

  const inputClasses =
    "w-full rounded-lg border border-warm-300 bg-white px-4 py-2.5 text-warm-900 placeholder:text-warm-300 focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/30";
  const errorClasses = "mt-1 text-sm text-red-600";

  return (
    <section
      id="contact"
      className="bg-white py-16 sm:py-20"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="contact-heading"
          title="Contact & Quote Request"
          subtitle="Tell us about your project and we'll get back to you promptly."
        />

        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-5">
          <div className="space-y-6 lg:col-span-2">
            <div className="flex items-start gap-3">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-brand-teal-dark" aria-hidden="true" />
              <div>
                <p className="font-semibold text-brand-navy">Phone</p>
                <CallTextLink className="text-warm-700 underline-offset-4 hover:text-brand-navy hover:underline">
                  {siteConfig.phoneDisplay}
                </CallTextLink>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-brand-teal-dark" aria-hidden="true" />
              <div>
                <p className="font-semibold text-brand-navy">Email</p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-warm-700 underline-offset-4 hover:text-brand-navy hover:underline"
                >
                  {siteConfig.email}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-teal-dark" aria-hidden="true" />
              <div>
                <p className="font-semibold text-brand-navy">Office</p>
                <p className="text-warm-700">
                  {siteConfig.address.city}, {siteConfig.address.state}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            {status === "success" ? (
              <div
                className="flex items-start gap-3 rounded-lg border border-green-200 bg-green-50 p-6"
                role="status"
              >
                <CheckCircle className="h-6 w-6 shrink-0 text-green-600" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-green-800">Message sent!</p>
                  <p className="mt-1 text-green-700">
                    Thank you for reaching out. We will contact you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="mt-3 text-sm font-medium text-green-800 underline-offset-4 hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {/* Honeypot — hidden from users */}
                <div className="absolute -left-[9999px]" aria-hidden="true">
                  <label htmlFor="botcheck">Leave empty</label>
                  <input type="text" id="botcheck" name="botcheck" tabIndex={-1} autoComplete="off" />
                </div>

                <div>
                  <label htmlFor="name" className="mb-1 block text-sm font-medium text-brand-navy">
                    Full Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    autoComplete="name"
                    className={inputClasses}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className={errorClasses} role="alert">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="email" className="mb-1 block text-sm font-medium text-brand-navy">
                      Email <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      autoComplete="email"
                      className={inputClasses}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className={errorClasses} role="alert">
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-1 block text-sm font-medium text-brand-navy">
                      Phone <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      autoComplete="tel"
                      className={inputClasses}
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? "phone-error" : undefined}
                    />
                    {errors.phone && (
                      <p id="phone-error" className={errorClasses} role="alert">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="zip" className="mb-1 block text-sm font-medium text-brand-navy">
                    Zip Code <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="zip"
                    name="zip"
                    required
                    autoComplete="postal-code"
                    inputMode="numeric"
                    className={`${inputClasses} max-w-xs`}
                    aria-invalid={!!errors.zip}
                    aria-describedby={errors.zip ? "zip-error" : undefined}
                  />
                  {errors.zip && (
                    <p id="zip-error" className={errorClasses} role="alert">
                      {errors.zip}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="mb-1 block text-sm font-medium text-brand-navy">
                    Message <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className={inputClasses}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                  />
                  {errors.message && (
                    <p id="message-error" className={errorClasses} role="alert">
                      {errors.message}
                    </p>
                  )}
                </div>

                {status === "error" && errorMessage && (
                  <div
                    className="flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 p-4 text-red-800"
                    role="alert"
                  >
                    <AlertCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
                    <p>{errorMessage}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex w-full items-center justify-center rounded-lg bg-cta px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-cta-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cta focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" aria-hidden="true" />
                      Sending…
                    </>
                  ) : (
                    "Send Inquiry"
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
