import { ArrowUpRight, Phone } from "lucide-react";
import Container from "@/components/layout/Container";
import { COMPANY_PHONE, COMPANY_PHONE_HREF } from "@/constants/company";

export default function CTABanner() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <Container>
        <div className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-3xl bg-secondary-900 px-8 py-14 sm:px-12 sm:py-16 lg:px-20 lg:py-24">
          <div
            className="pointer-events-none absolute -right-20 top-1/2 hidden size-100 -translate-y-1/2 rounded-full border border-white/10 sm:block lg:size-128"
            aria-hidden="true"
          >
            <div className="absolute inset-6 rounded-full border border-white/10" />
            <div className="absolute inset-12 rounded-full border border-white/10" />
            <div className="absolute inset-18 rounded-full border border-white/10" />
            <div className="absolute inset-24 rounded-full border border-white/10" />
          </div>
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_50%,rgba(47,168,230,0.22),transparent_55%)]"
            aria-hidden="true"
          />

          <div className="relative flex flex-col gap-8 lg:max-w-lg">
            <h2 className="font-display text-balance text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Ready to see what your floor could look like?
            </h2>
            <p className="max-w-xl text-balance text-base leading-relaxed text-secondary-200 lg:text-lg">
              Tell us about your space and get a free, no obligation quote. Most Calgary area estimates are delivered within 24 hours.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="/contact"
                className="group inline-flex h-14 items-center justify-between gap-3 rounded-full bg-white pl-6 pr-2 text-sm font-semibold whitespace-nowrap text-secondary-900 transition-all duration-300 ease-premium hover:-translate-y-0.5 hover:shadow-glow focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400"
              >
                Request a Quote
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary-500 text-white transition-transform duration-300 ease-premium group-hover:rotate-45">
                  <ArrowUpRight className="size-4.5" aria-hidden="true" />
                </span>
              </a>

              <a
                href={COMPANY_PHONE_HREF}
                className="group inline-flex h-14 items-center justify-between gap-3 rounded-full border border-white/20 bg-white/5 pl-6 pr-2 text-sm font-semibold whitespace-nowrap text-white transition-all duration-300 ease-premium hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400"
              >
                Call {COMPANY_PHONE}
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white/15 text-white transition-transform duration-300 ease-premium group-hover:rotate-45">
                  <Phone className="size-4" aria-hidden="true" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
