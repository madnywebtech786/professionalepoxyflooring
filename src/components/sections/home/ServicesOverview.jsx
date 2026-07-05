import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { SERVICES } from "@/constants/services";

export default function ServicesOverview() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <Container className="flex flex-col gap-20">
        <SectionHeading
          eyebrow="What We Do"
          title="Which epoxy system is right for your space?"
          description="Garage, warehouse, restaurant kitchen, or showroom, each environment wears a floor differently. We install flake, quartz, and metallic epoxy systems and help you match the right one to your traffic, budget, and Calgary climate."
          align="center"
          className="mx-auto"
        />

        <div className="flex flex-col gap-20 lg:gap-28">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            const reversed = index % 2 === 1;

            return (
              <article
                key={service.id}
                className={`grid animate-fade-up gap-10 lg:grid-cols-2 lg:items-center lg:gap-16 ${
                  reversed ? "lg:[&>*:first-child]:order-2" : ""
                }`}
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <div className="relative mx-auto w-full max-w-lg lg:mx-0 lg:max-w-none">
                  <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl shadow-card">
                    <div
                      className="pointer-events-none absolute -inset-6 -z-10 rounded-4xl bg-primary-300/25 blur-2xl"
                      aria-hidden="true"
                    />
                    <Image
                      src={service.image}
                      alt={`${service.title} installation example in Calgary`}
                      fill
                      sizes="(min-width: 1024px) 45vw, 90vw"
                      className="object-cover"
                    />
                  </div>

                  <div className="glass-panel absolute -top-5 -left-5 flex size-16 items-center justify-center rounded-xl text-primary-600 shadow-glow">
                    <Icon className="size-7" aria-hidden="true" />
                  </div>
                </div>

                <div className="flex flex-col gap-6">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-600">
                    Service {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-balance text-2xl font-semibold leading-tight tracking-tight text-secondary-900 sm:text-3xl">
                    {service.title}
                  </h3>
                  <p className="text-balance text-base leading-relaxed text-text-light">
                    {service.fullDescription}
                  </p>

                  <ul className="grid gap-3 sm:grid-cols-2">
                    {service.benefits.slice(0, 4).map((benefit) => (
                      <li key={benefit.id} className="flex items-start gap-2.5 text-sm text-secondary-800">
                        <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary-500/10 text-primary-600">
                          <Check className="size-3" aria-hidden="true" />
                        </span>
                        {benefit.title}
                      </li>
                    ))}
                  </ul>

                  <Button
                    href={`/services/${service.slug}`}
                    variant="secondary"
                    size="md"
                    icon={ArrowRight}
                    className="w-fit"
                  >
                    View Service Details
                  </Button>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
