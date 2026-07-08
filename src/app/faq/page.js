import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQBrowser from "@/components/sections/faq/FAQBrowser";
import CTABanner from "@/components/sections/CTABanner";
import { FAQS } from "@/constants/faqs";

export const metadata = {
  title: "Epoxy Flooring FAQ | Calgary Pricing, Installation & Warranty",
  description:
    "Answers to common questions about epoxy flooring cost, installation time, maintenance, and warranties for residential, commercial, and industrial projects in Calgary.",
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: "Epoxy Flooring FAQ | Calgary Pricing, Installation & Warranty",
    description:
      "Answers to common questions about epoxy flooring cost, installation time, maintenance, and warranties in Calgary.",
    url: "/faq",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Epoxy Flooring FAQ | Calgary Pricing, Installation & Warranty",
    description:
      "Answers to common questions about epoxy flooring cost, installation time, maintenance, and warranties in Calgary.",
  },
};

export default function FAQPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <main className="flex flex-1 flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative isolate overflow-hidden bg-white pt-40 pb-20 lg:pt-48 lg:pb-24">
        <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(47,168,230,0.14),transparent_45%),radial-gradient(circle_at_85%_10%,rgba(12,35,68,0.10),transparent_40%)]" />
          <div className="absolute left-1/2 top-1/4 h-144 w-xl -translate-x-1/2 rounded-full bg-primary-200/25 blur-3xl animate-drift" />
        </div>

        <Container className="flex flex-col gap-14">
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently asked questions"
            description="Everything you need to know about pricing, installation, maintenance, and warranties for Calgary epoxy flooring projects. Search or browse by category."
          />
        </Container>
      </section>

      <section className="bg-white pb-24 lg:pb-32 mt-10">
        <Container>
          <FAQBrowser />
        </Container>
      </section>

      <CTABanner />
    </main>
  );
}
