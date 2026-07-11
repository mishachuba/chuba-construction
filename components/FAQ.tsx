"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { siteConfig } from "@/content/site";
import { SectionHeading } from "@/components/ui";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="bg-warm-100 py-16 sm:py-20"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading id="faq-heading" title="Frequently Asked Questions" />
        <div className="space-y-3">
          {siteConfig.faq.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <div
                key={item.question}
                className="overflow-hidden rounded-lg border border-warm-200 bg-white"
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    onClick={() => toggle(index)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold text-brand-navy hover:bg-warm-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-teal"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                  >
                    {item.question}
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-brand-blue transition-transform ${isOpen ? "rotate-180" : ""}`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className="px-5 pb-4"
                >
                  <p className="text-warm-700">{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
