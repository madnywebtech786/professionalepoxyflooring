"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

export default function FAQAccordion({ items, className = "" }) {
  const [openId, setOpenId] = useState(items[0]?.id ?? null);

  return (
    <div className={`flex flex-col divide-y divide-border ${className}`}>
      {items.map((item) => {
        const isOpen = openId === item.id;

        return (
          <div key={item.id} className="py-2">
            <button
              type="button"
              onClick={() => setOpenId(isOpen ? null : item.id)}
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${item.id}`}
              className="flex w-full items-center justify-between gap-6 py-4 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
            >
              <span className="font-display text-base font-semibold text-secondary-900 sm:text-lg">
                {item.question}
              </span>
              <span
                className={`flex size-8 shrink-0 items-center justify-center rounded-full bg-primary-500/10 text-primary-600 transition-transform duration-300 ease-premium ${
                  isOpen ? "rotate-45" : ""
                }`}
                aria-hidden="true"
              >
                <Plus className="size-4" />
              </span>
            </button>

            <div
              id={`faq-panel-${item.id}`}
              className={`grid overflow-hidden transition-all duration-300 ease-premium ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="max-w-3xl pb-5 text-sm leading-relaxed text-text-light sm:text-base">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
