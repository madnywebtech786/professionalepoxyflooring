import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Phone } from "lucide-react";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { COMPANY_PHONE, COMPANY_PHONE_HREF } from "@/constants/company";

export default function ServiceHero({ service, index, total }) {
  const Icon = service.icon;

  return (
    <section className="relative isolate overflow-hidden bg-white pt-40 pb-16 lg:pt-48 lg:pb-20">
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(47,168,230,0.14),transparent_45%),radial-gradient(circle_at_85%_10%,rgba(12,35,68,0.10),transparent_40%)]" />
        <div className="absolute left-1/2 top-1/4 h-144 w-xl -translate-x-1/2 rounded-full bg-primary-200/25 blur-3xl animate-drift" />
      </div>

      <Container className="flex flex-col gap-14">
    

        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="flex flex-col gap-8">
            <Badge icon={Icon} className="animate-fade-down">
              {service.heroTagline}
            </Badge>

            <h1
              className="font-display text-balance text-5xl font-semibold leading-[1.05] tracking-tight text-secondary-900 sm:text-6xl lg:text-[4rem] animate-fade-up"
              style={{ animationDelay: "80ms" }}
            >
              {service.title}
            </h1>

            <p
              className="max-w-xl text-balance text-lg leading-relaxed text-text-light animate-fade-up"
              style={{ animationDelay: "160ms" }}
            >
              {service.shortDescription}
            </p>

            <div
              className="flex flex-col gap-4 sm:flex-row sm:items-center animate-fade-up"
              style={{ animationDelay: "220ms" }}
            >
              <Button href="/contact" variant="primary" size="lg">
                Get a Free Quote
              </Button>
              <a
                href={COMPANY_PHONE_HREF}
                className="group inline-flex items-center justify-center gap-2 text-sm font-semibold text-secondary-800 transition-colors duration-200 hover:text-primary-600"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-border transition-colors duration-200 group-hover:border-primary-300 group-hover:bg-primary-50">
                  <Phone className="size-4" aria-hidden="true" />
                </span>
                Call {COMPANY_PHONE}
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg lg:mx-0 lg:max-w-none">
            <div className="hud-panel relative aspect-4/3 w-full overflow-hidden rounded-2xl p-3 shadow-card animate-scale-in" style={{ animationDelay: "120ms" }}>
              <div
                className="pointer-events-none absolute -inset-8 -z-10 rounded-[2.5rem] bg-primary-300/20 blur-3xl"
                aria-hidden="true"
              />

              <div className="relative h-full w-full overflow-hidden rounded-xl">
                <Image
                  src={service.image}
                  alt={`${service.title} finished floor in a Calgary area home or business`}
                  fill
                  priority
                  sizes="(min-width: 1024px) 55vw, 90vw"
                  className="object-cover"
                />

                <div className="pointer-events-none absolute inset-0" aria-hidden="true">
                  <div className="absolute inset-x-0 h-1/3 animate-scan bg-gradient-to-b from-transparent via-primary-400/25 to-transparent" />
                </div>

              </div>

              <span className="hud-corner top-0 left-0 border-t-2 border-l-2 rounded-tl-md" aria-hidden="true" />
              <span className="hud-corner top-0 right-0 border-t-2 border-r-2 rounded-tr-md" aria-hidden="true" />
              <span className="hud-corner bottom-0 left-0 border-b-2 border-l-2 rounded-bl-md" aria-hidden="true" />
              <span className="hud-corner bottom-0 right-0 border-b-2 border-r-2 rounded-br-md" aria-hidden="true" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
