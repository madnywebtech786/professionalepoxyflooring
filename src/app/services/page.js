import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import CTABanner from "@/components/sections/CTABanner";
import { SERVICES } from "@/constants/services";

export const metadata = {
  title: "Epoxy Flooring Services Calgary | Flake, Quartz & Metallic",
  description:
    "Explore our flake, quartz, and metallic epoxy flooring systems for Calgary garages, hospitals, restaurants, and showrooms. Get a free quote today.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Epoxy Flooring Services Calgary | Flake, Quartz & Metallic",
    description:
      "Explore our flake, quartz, and metallic epoxy flooring systems for Calgary garages, hospitals, restaurants, and showrooms. Get a free quote today.",
    url: "/services",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Epoxy Flooring Services Calgary | Flake, Quartz & Metallic",
    description:
      "Explore our flake, quartz, and metallic epoxy flooring systems for Calgary garages, hospitals, restaurants, and showrooms. Get a free quote today.",
  },
};

export default function ServicesPage() {
  return (
    <main className="flex flex-1 flex-col">
      <section className="relative isolate overflow-hidden bg-white pt-36 pb-20 lg:pt-44 lg:pb-24">
        <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(47,168,230,0.14),transparent_45%),radial-gradient(circle_at_85%_10%,rgba(12,35,68,0.10),transparent_40%)]" />
          <div className="absolute left-1/2 top-1/4 h-144 w-xl -translate-x-1/2 rounded-full bg-primary-200/25 blur-3xl animate-drift" />
        </div>

        <Container className="flex flex-col gap-8">
          <div className="flex animate-fade-up flex-wrap items-center justify-between gap-4 border-b border-border pb-4">
            <div className="flex items-center gap-2.5">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary-500 opacity-75" aria-hidden="true" />
                <span className="relative inline-flex size-2 rounded-full bg-primary-500" aria-hidden="true" />
              </span>
              <span className="font-mono-hud text-[11px] uppercase text-text-light">
                service_catalog.sys // 03_systems
              </span>
            </div>
          </div>

          <div className="flex max-w-3xl flex-col gap-6">
            <Badge className="animate-fade-down">Our Services</Badge>
            <h1 className="font-display text-balance text-5xl font-semibold leading-[1.05] tracking-tight text-secondary-900 sm:text-6xl lg:text-[4.25rem] animate-fade-up">
              Three epoxy systems. Every floor covered.
            </h1>
            <p className="max-w-xl text-balance text-lg leading-relaxed text-text-light animate-fade-up" style={{ animationDelay: "80ms" }}>
              From slip resistant garage floors to hygienic hospital corridors to showroom grade metallic finishes, we match the right system to your Calgary space, traffic, and budget.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white pb-24 lg:pb-32">
        <Container className="flex flex-col gap-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {SERVICES.map((service, index) => {
              const Icon = service.icon;

              return (
                <Link
                  key={service.id}
                  href={`/services/${service.slug}`}
                  className="group relative flex animate-fade-up flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-soft transition-all duration-300 ease-premium hover:-translate-y-1.5 hover:shadow-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative aspect-4/3 w-full overflow-hidden">
                    <Image
                      src={service.image}
                      alt={`${service.title} installation example in Calgary`}
                      fill
                      sizes="(min-width: 1024px) 33vw, 90vw"
                      className="object-cover transition-transform duration-700 ease-premium group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-secondary-900/70 via-secondary-900/0 to-transparent" />
                    <span className="glass-panel absolute left-5 top-5 flex size-12 items-center justify-center rounded-xl text-primary-600 shadow-glow">
                      <Icon className="size-6" aria-hidden="true" />
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col gap-4 p-7">
                    <span className="font-mono-hud text-[10px] uppercase text-primary-600/70">
                      System {String(index + 1).padStart(2, "0")}
                    </span>
                    <h2 className="font-display text-xl font-semibold leading-tight tracking-tight text-secondary-900">
                      {service.title}
                    </h2>
                    <p className="text-sm leading-relaxed text-text-light">
                      {service.shortDescription}
                    </p>

                    <ul className="flex flex-col gap-2 border-t border-border pt-4">
                      {service.bestFor.slice(0, 3).map((item) => (
                        <li key={item.id} className="flex items-center gap-2 text-xs font-medium text-secondary-800">
                          <Check className="size-3.5 shrink-0 text-primary-600" aria-hidden="true" />
                          {item.label}
                        </li>
                      ))}
                    </ul>

                    <span className="mt-auto flex items-center gap-2 pt-2 text-sm font-semibold text-primary-600">
                      View Service Details
                      <ArrowRight className="size-4 transition-transform duration-300 ease-premium group-hover:translate-x-1" aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      <CTABanner />
    </main>
  );
}
