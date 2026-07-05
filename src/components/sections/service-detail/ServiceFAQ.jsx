import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQAccordion from "@/components/ui/FAQAccordion";

export default function ServiceFAQ({ service }) {
  return (
    <section className="bg-surface py-24 lg:py-32">
      <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <SectionHeading
          eyebrow="FAQ"
          title="Common questions"
          description={`Answers to what clients ask most before booking ${service.title.toLowerCase()}.`}
        />

        <div className="rounded-2xl border border-border bg-white px-6 shadow-soft sm:px-8">
          <FAQAccordion items={service.faqs} />
        </div>
      </Container>
    </section>
  );
}
