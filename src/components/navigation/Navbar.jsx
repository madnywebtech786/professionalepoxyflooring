"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import { NAV_LINKS } from "@/constants/navigation";
import { SERVICES } from "@/constants/services";
import { COMPANY_NAME, COMPANY_PHONE, COMPANY_PHONE_HREF } from "@/constants/company";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  function closeMobileMenu() {
    setIsMobileOpen(false);
    setIsMobileServicesOpen(false);
  }

  return (
    <>
    <header
      className={`fixed inset-x-0 top-10 z-50 transition-all duration-300 ease-premium ${
        isScrolled
          ? "border-b border-border bg-white/80 shadow-soft backdrop-blur-lg"
          : "bg-transparent"
      }`}
    >
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="relative flex h-12 w-36 shrink-0 items-center" aria-label={COMPANY_NAME}>
          <Image
            src="/images/logo.png"
            alt={COMPANY_NAME}
            fill
            priority
            sizes="144px"
            className="object-contain object-left"
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) =>
            link.label === "Services" ? (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <Link
                  href={link.href}
                  className="flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium text-secondary-700 transition-colors duration-200 hover:text-primary-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
                  aria-expanded={isServicesOpen}
                >
                  {link.label}
                  <ChevronDown className="size-3.5" aria-hidden="true" />
                </Link>

                {isServicesOpen && (
                  <div className="absolute left-1/2 top-full w-64 -translate-x-1/2 rounded-xl border border-border bg-white p-2 shadow-card animate-fade-down">
                    {SERVICES.map((service) => (
                      <Link
                        key={service.id}
                        href={`/services/${service.slug}`}
                        className="block rounded-lg px-4 py-3 text-sm font-medium text-secondary-800 transition-colors duration-200 hover:bg-secondary-900 hover:text-white"
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-4 py-2 text-sm font-medium text-secondary-700 transition-colors duration-200 hover:text-primary-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={COMPANY_PHONE_HREF}
            className="flex items-center gap-2 text-sm font-semibold text-secondary-800 transition-colors duration-200 hover:text-primary-600"
          >
            <Phone className="size-4" aria-hidden="true" />
            {COMPANY_PHONE}
          </a>
          <Button href="/contact" variant="primary" size="md">
            Get Free Quote
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setIsMobileOpen((open) => !open)}
          aria-label="Toggle menu"
          aria-expanded={isMobileOpen}
          className="relative flex size-10 items-center justify-center rounded-lg text-secondary-800 lg:hidden"
        >
          <span
            className={`absolute transition-all duration-200 ${isMobileOpen ? "scale-75 opacity-0" : "scale-100 opacity-100"}`}
          >
            <Menu className="size-6" />
          </span>
          <span
            className={`absolute transition-all duration-200 ${isMobileOpen ? "scale-100 opacity-100" : "scale-75 opacity-0"}`}
          >
            <X className="size-6" />
          </span>
        </button>
      </Container>
    </header>

    {/* Backdrop — always mounted, opacity-driven */}
    <div
      onClick={closeMobileMenu}
      aria-hidden="true"
      className={`fixed inset-0 z-40 bg-secondary-900/50 backdrop-blur-sm transition-opacity duration-300 ease-premium lg:hidden ${
        isMobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    />

    {/* Drawer — always mounted, translate-driven */}
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
      className={`fixed inset-y-0 right-0 z-50 flex w-full max-w-none flex-col bg-white shadow-hover transition-transform duration-350 ease-premium sm:w-1/2 sm:max-w-none lg:hidden ${
        isMobileOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex h-20 shrink-0 items-center justify-between border-b border-border px-6">
        <span className="relative flex h-10 w-32 shrink-0 items-center">
          <Image
            src="/images/logo.png"
            alt={COMPANY_NAME}
            fill
            sizes="128px"
            className="object-contain object-left"
          />
        </span>
        <button
          type="button"
          onClick={closeMobileMenu}
          aria-label="Close menu"
          className="flex size-10 items-center justify-center rounded-lg text-secondary-800 transition-colors duration-200 hover:bg-surface"
        >
          <X className="size-6" />
        </button>
      </div>

      <div className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-4">
        {NAV_LINKS.map((link) =>
          link.label === "Services" ? (
            <div key={link.href} className="flex flex-col">
              <button
                type="button"
                onClick={() => setIsMobileServicesOpen((open) => !open)}
                aria-expanded={isMobileServicesOpen}
                className="flex items-center justify-between rounded-lg px-4 py-3 text-left text-base font-medium text-secondary-800 hover:bg-surface"
              >
                {link.label}
                <ChevronDown
                  className={`size-4 shrink-0 transition-transform duration-300 ease-premium ${
                    isMobileServicesOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>

              <div
                className={`grid overflow-hidden transition-all duration-300 ease-premium ${
                  isMobileServicesOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="flex flex-col gap-1 overflow-hidden pl-4">
                  {SERVICES.map((service) => (
                    <Link
                      key={service.id}
                      href={`/services/${service.slug}`}
                      className="rounded-lg px-4 py-2.5 text-sm text-text-light hover:bg-surface hover:text-primary-600"
                      onClick={closeMobileMenu}
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-4 py-3 text-base font-medium text-secondary-800 hover:bg-surface"
              onClick={closeMobileMenu}
            >
              {link.label}
            </Link>
          )
        )}
      </div>

      <div className="flex shrink-0 flex-col gap-3 border-t border-border p-4">
        <a
          href={COMPANY_PHONE_HREF}
          className="flex items-center justify-center gap-2 text-sm font-semibold text-secondary-800 hover:text-primary-600"
        >
          <Phone className="size-4" aria-hidden="true" />
          {COMPANY_PHONE}
        </a>
        <Button href="/contact" variant="primary" size="md" className="w-full" onClick={closeMobileMenu}>
          Get Free Quote
        </Button>
      </div>
    </div>
    </>
  );
}
