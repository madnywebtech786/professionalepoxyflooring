import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { SERVICES } from "@/constants/services";

export default function RelatedServices({ currentSlug }) {
  const otherServices = SERVICES.filter((service) => service.slug !== currentSlug);

  if (otherServices.length === 0) return null;

  return (
    <section className="bg-white py-24 lg:py-32">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="Explore More"
          title="Other flooring systems"
          description="Not quite the right fit? Compare our other epoxy systems to find the best match for your space."
          align="center"
          className="mx-auto"
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {otherServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.id}
                href={`/services/${service.slug}`}
                className="group relative flex animate-fade-up flex-col overflow-hidden rounded-2xl border border-border shadow-soft transition-all duration-300 ease-premium hover:-translate-y-1.5 hover:shadow-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative aspect-16/10 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={`${service.title} example`}
                    fill
                    sizes="(min-width: 1024px) 45vw, 90vw"
                    className="object-cover transition-transform duration-700 ease-premium group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-secondary-900/80 via-secondary-900/20 to-transparent" />
                  <span className="glass-panel absolute left-5 top-5 flex size-11 items-center justify-center rounded-lg text-primary-600">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-5">
                    <h3 className="font-display text-lg font-semibold text-white">{service.title}</h3>
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-transform duration-300 ease-premium group-hover:rotate-45">
                      <ArrowUpRight className="size-4" aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
