import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { resolveIcon } from "@/lib/iconMap";

export default function ServiceBenefits({ service }) {
  return (
    <section className="bg-white py-24 lg:py-32">
      <Container className="flex flex-col gap-16">
        <SectionHeading
          eyebrow="Benefits"
          title={`Why choose ${service.title.toLowerCase()}`}
          description="Every benefit below is built into the system itself, not an upsell, not an afterthought."
          align="center"
          className="mx-auto"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {service.benefits.map((benefit, index) => {
            const Icon = resolveIcon(benefit.icon);
            return (
              <div
                key={benefit.id}
                className="group relative flex animate-fade-up flex-col gap-4 rounded-2xl border border-border bg-white p-7 shadow-soft transition-all duration-300 ease-premium hover:-translate-y-1 hover:border-primary-300 hover:shadow-hover"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary-500/10 text-primary-600 transition-colors duration-300 ease-premium group-hover:bg-primary-500 group-hover:text-white">
                  <Icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="font-display text-lg font-semibold leading-tight text-secondary-900">
                  {benefit.title}
                </h3>
                <p className="text-sm leading-relaxed text-text-light">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
