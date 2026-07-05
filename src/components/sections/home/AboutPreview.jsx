import Image from "next/image";
import { ArrowRight, ShieldCheck, Users2, Wrench, CalendarCheck } from "lucide-react";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { ABOUT_SYSTEM_LOG, ABOUT_METRICS, ABOUT_PILLARS } from "@/constants/about";

const TRUST_POINTS = [
  { id: "licensed", label: "Licensed & insured", icon: ShieldCheck },
  { id: "crews", label: "In-house crews", icon: Users2 },
  { id: "warranty", label: "10-year warranty", icon: Wrench },
  { id: "scheduling", label: "Same-week scheduling", icon: CalendarCheck },
];

function HudCorners() {
  return (
    <>
      <span className="hud-corner top-0 left-0 border-t-2 border-l-2 rounded-tl-md" aria-hidden="true" />
      <span className="hud-corner top-0 right-0 border-t-2 border-r-2 rounded-tr-md" aria-hidden="true" />
      <span className="hud-corner bottom-0 left-0 border-b-2 border-l-2 rounded-bl-md" aria-hidden="true" />
      <span className="hud-corner bottom-0 right-0 border-b-2 border-r-2 rounded-br-md" aria-hidden="true" />
    </>
  );
}

export default function AboutPreview() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(47,168,230,0.10),transparent_45%),radial-gradient(circle_at_90%_80%,rgba(15,111,159,0.08),transparent_45%)]"
        aria-hidden="true"
      />

      <Container>
        {/* System status strip */}
        <div className="mb-14 hidden animate-fade-up flex-wrap items-center justify-between gap-4 border-b border-border pb-4 sm:flex">
          <div className="flex items-center gap-2.5">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary-500 opacity-75" aria-hidden="true" />
              <span className="relative inline-flex size-2 rounded-full bg-primary-500" aria-hidden="true" />
            </span>
            <span className="font-mono-hud text-[11px] uppercase text-text-light">
              company_profile.sys
            </span>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {ABOUT_SYSTEM_LOG.map((item) => (
              <span key={item.id} className="font-mono-hud text-[11px] uppercase text-text-light">
                {item.label} <span className="text-secondary-800">{item.value}</span>
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-16 lg:grid-cols-2 lg:items-center lg:gap-12">
          {/* Visual / scan frame */}
          <div className="relative mx-auto w-full max-w-lg lg:mx-0 lg:max-w-none">
            <div className="relative">
              <div className="hud-panel relative aspect-4/5 w-full overflow-hidden rounded-2xl p-3 shadow-card animate-scale-in">
                <div
                  className="pointer-events-none absolute -inset-8 -z-10 rounded-[2.5rem] bg-primary-300/20 blur-3xl"
                  aria-hidden="true"
                />

                <div className="relative h-full w-full overflow-hidden rounded-xl">
                  <Image
                    src="/images/about-side.webp"
                    alt="Our epoxy flooring team on-site"
                    fill
                    sizes="(min-width: 1024px) 40vw, 90vw"
                    className="object-cover"
                  />

                  {/* Scan sweep overlay */}
                  <div className="pointer-events-none absolute inset-0" aria-hidden="true">
                    <div className="absolute inset-x-0 h-1/3 animate-scan bg-gradient-to-b from-transparent via-primary-400/25 to-transparent" />
                  </div>

                  {/* Reticle */}
                  <div
                    className="pointer-events-none absolute top-4 right-4 flex size-9 items-center justify-center"
                    aria-hidden="true"
                  >
                    <span className="absolute inline-flex size-full animate-pulse-ring rounded-full border border-primary-300" />
                    <span className="size-2.5 rounded-full border-2 border-white bg-primary-500 shadow-glow" />
                  </div>

                  <div className="absolute bottom-3 left-3 rounded-md bg-secondary-900/70 px-2.5 py-1 font-mono-hud text-[10px] text-white backdrop-blur-sm">
                    FEED // ON-SITE_01
                  </div>
                </div>

                <HudCorners />
              </div>

              {/* Metric readouts anchored to the frame */}
              <div className="hud-panel absolute -top-5 -right-5 flex flex-col gap-0.5 rounded-lg px-4 py-3 text-center shadow-glow animate-float">
                <p className="font-display text-2xl font-semibold text-primary-600">
                  <AnimatedCounter value={ABOUT_METRICS[0].value} suffix={ABOUT_METRICS[0].suffix} />
                </p>
                <p className="font-mono-hud text-[9px] uppercase text-text-light">
                  {ABOUT_METRICS[0].label}
                </p>
              </div>

              <div
                className="hud-panel absolute bottom-8 -left-6 flex flex-col gap-0.5 rounded-lg px-4 py-3 text-center shadow-card animate-float-slow"
                style={{ animationDelay: "0.5s" }}
              >
                <p className="font-display text-2xl font-semibold text-secondary-900">
                  <AnimatedCounter value={ABOUT_METRICS[1].value} suffix={ABOUT_METRICS[1].suffix} />
                </p>
                <p className="font-mono-hud text-[9px] uppercase text-text-light">
                  {ABOUT_METRICS[1].label}
                </p>
              </div>

              <div
                className="hud-panel absolute -bottom-5 right-8 flex flex-col gap-0.5 rounded-lg px-4 py-3 text-center shadow-card animate-float"
                style={{ animationDelay: "1s" }}
              >
                <p className="font-display text-2xl font-semibold text-primary-600">
                  <AnimatedCounter value={ABOUT_METRICS[2].value} suffix={ABOUT_METRICS[2].suffix} />
                </p>
                <p className="font-mono-hud text-[9px] uppercase text-text-light">
                  {ABOUT_METRICS[2].label}
                </p>
              </div>

              {/* Connector traces (decorative, desktop only) */}
              <svg
                className="pointer-events-none absolute -right-16 -top-10 hidden size-24 lg:block"
                viewBox="0 0 100 100"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M10 90 L10 30 Q10 10 30 10 L90 10"
                  stroke="var(--color-primary-300)"
                  strokeWidth="1.5"
                  strokeDasharray="4 5"
                  className="animate-trace"
                  style={{ "--trace-length": 160 }}
                />
              </svg>
            </div>
          </div>

          {/* Copy */}
          <div className="flex flex-col gap-8">
            <SectionHeading
              eyebrow="Who We Are"
              title={
                <>
                  A Calgary crew that answers{" "}
                  <span className="text-primary-600">the phone</span>
                </>
              }
              description="Professional Epoxy Flooring is a licensed, insured epoxy flooring contractor based in Calgary. We combine industrial grade materials with meticulous surface preparation so your floor holds up to Alberta winters, not just the showroom photos. Every project, residential, commercial, or industrial, gets the same standard of craftsmanship and a project lead you can actually reach."
            />

            {/* Pillars grid */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {ABOUT_PILLARS.map((pillar, index) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.id}
                    className="group relative animate-fade-up rounded-xl border border-border bg-surface/60 p-4 transition-all duration-300 ease-premium hover:-translate-y-1 hover:border-primary-300 hover:shadow-soft"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary-500/10 text-primary-600 transition-colors duration-300 group-hover:bg-primary-500 group-hover:text-white">
                        <Icon className="size-4.5" aria-hidden="true" />
                      </span>
                      <p className="font-display text-sm font-semibold text-secondary-900">
                        {pillar.title}
                      </p>
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-text-light">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-wrap gap-x-8 gap-y-4 border-t border-border pt-6">
              {TRUST_POINTS.map((point) => {
                const Icon = point.icon;
                return (
                  <div key={point.id} className="flex items-center gap-2.5">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary-500/10 text-primary-600">
                      <Icon className="size-4.5" aria-hidden="true" />
                    </span>
                    <span className="text-sm font-medium text-secondary-800">{point.label}</span>
                  </div>
                );
              })}
            </div>

            <Button href="/about" variant="secondary" size="md" icon={ArrowRight} className="w-fit">
              Read Our Story
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
