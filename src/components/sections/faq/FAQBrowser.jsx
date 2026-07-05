"use client";

import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { FAQS, FAQ_CATEGORIES } from "@/constants/faqs";

export default function FAQBrowser() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [query, setQuery] = useState("");

  const filteredFaqs = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return FAQS.filter((faq) => {
      const matchesCategory = activeCategory === "All" || faq.category === activeCategory;
      const matchesQuery =
        normalizedQuery.length === 0 ||
        faq.question.toLowerCase().includes(normalizedQuery) ||
        faq.answer.toLowerCase().includes(normalizedQuery);
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  const groupedFaqs = useMemo(() => {
    return FAQ_CATEGORIES.map((category) => ({
      category,
      items: filteredFaqs.filter((faq) => faq.category === category),
    })).filter((group) => group.items.length > 0);
  }, [filteredFaqs]);

  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col gap-6">
        <div className="relative w-full max-w-xl">
          <Search
            className="pointer-events-none absolute left-4 top-1/2 size-4.5 -translate-y-1/2 text-text-light"
            aria-hidden="true"
          />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search questions..."
            aria-label="Search frequently asked questions"
            className="h-12 w-full rounded-xl border border-border bg-white pl-11 pr-11 text-sm text-secondary-900 outline-none transition-colors duration-200 placeholder:text-text-light/70 focus:border-primary-400 focus:ring-2 focus:ring-primary-100"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="Clear search"
              className="absolute right-3 top-1/2 flex size-6 -translate-y-1/2 items-center justify-center rounded-full text-text-light transition-colors duration-200 hover:bg-surface hover:text-secondary-900"
            >
              <X className="size-4" aria-hidden="true" />
            </button>
          )}
        </div>

        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter FAQs by category">
          {["All", ...FAQ_CATEGORIES].map((category) => {
            const isActive = category === activeCategory;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                aria-pressed={isActive}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-300 ease-premium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 ${
                  isActive
                    ? "border-secondary-900 bg-secondary-900 text-white shadow-glow"
                    : "border-border bg-white text-secondary-700 hover:border-primary-300 hover:text-primary-600"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      {groupedFaqs.length === 0 ? (
        <p className="py-16 text-center text-sm text-text-light">
          No questions match your search. Try a different keyword or category.
        </p>
      ) : (
        <div className="flex flex-col gap-14">
          {groupedFaqs.map((group) => (
            <div key={group.category} className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <h2 className="font-display text-xl font-semibold text-secondary-900 sm:text-2xl">
                  {group.category}
                </h2>
                <span className="font-mono-hud text-[10px] uppercase text-primary-600/70">
                  {String(group.items.length).padStart(2, "0")}
                </span>
              </div>
              <div className="rounded-2xl border border-border bg-white px-6 shadow-soft sm:px-8">
                <FAQAccordion key={`${group.category}-${query}`} items={group.items} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
