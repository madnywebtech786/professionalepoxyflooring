import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactSection from "@/components/sections/contact/ContactSection";
import { COMPANY_PHONE, COMPANY_PHONE_HREF } from "@/constants/company";
import { Phone } from "lucide-react";

export const metadata = {
  title: "Contact Us | Free Calgary Epoxy Flooring Quote",
  description:
    "Request a free, no obligation quote for flake, quartz, or metallic epoxy flooring in Calgary and area. Call us directly or fill out the contact form and we'll follow up within one business day.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us | Free Calgary Epoxy Flooring Quote",
    description:
      "Request a free, no obligation quote for flake, quartz, or metallic epoxy flooring in Calgary and area.",
    url: "/contact",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Free Calgary Epoxy Flooring Quote",
    description:
      "Request a free, no obligation quote for flake, quartz, or metallic epoxy flooring in Calgary and area.",
  },
};

export default function ContactPage() {
  return (
    <main className="flex flex-1 flex-col">
      <section className="relative isolate overflow-hidden bg-white pt-40 pb-20 lg:pt-48 lg:pb-24">
        <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(47,168,230,0.14),transparent_45%),radial-gradient(circle_at_85%_10%,rgba(12,35,68,0.10),transparent_40%)]" />
          <div className="absolute left-1/2 top-1/4 h-144 w-xl -translate-x-1/2 rounded-full bg-primary-200/25 blur-3xl animate-drift" />
        </div>

        <Container className="flex flex-col gap-14">
          <div className="flex animate-fade-up flex-wrap items-center justify-end gap-4 border-b border-border pb-4">
            <a
              href={COMPANY_PHONE_HREF}
              className="flex items-center gap-2 text-sm font-semibold text-secondary-800 transition-colors duration-200 hover:text-primary-600"
            >
              <Phone className="size-4" aria-hidden="true" />
              {COMPANY_PHONE}
            </a>
          </div>

          <SectionHeading
            eyebrow="Contact Us"
            title="Let's talk about your floor"
            description="Have a question or ready to get started? Reach out below and our team will get back to you shortly."
          />
        </Container>
      </section>

      <ContactSection background="white" />
    </main>
  );
}
