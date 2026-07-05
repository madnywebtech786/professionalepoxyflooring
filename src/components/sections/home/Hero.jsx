import Image from "next/image";
import { ArrowRight, PlayCircle, ShieldCheck } from "lucide-react";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { HERO_STATS } from "@/constants/stats";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-white pt-36 pb-24 lg:pt-44 lg:pb-32">
      {/* Ambient background mesh */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(47,168,230,0.14),transparent_45%),radial-gradient(circle_at_85%_10%,rgba(12,35,68,0.10),transparent_40%),radial-gradient(circle_at_50%_100%,rgba(47,168,230,0.08),transparent_50%)]" />
        <div className="absolute left-1/2 top-1/3 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-primary-200/30 blur-3xl animate-drift" />
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.35]"
          aria-hidden="true"
        >
          <defs>
            <pattern id="hero-grid" width="56" height="56" patternUnits="userSpaceOnUse">
              <path
                d="M 56 0 L 0 0 0 56"
                fill="none"
                stroke="rgba(15,61,109,0.06)"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      <Container className="grid gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        {/* Left column — copy */}
        <div className="flex flex-col gap-8">
          <Badge icon={ShieldCheck} className="animate-fade-down" style={{ animationDelay: "0ms" }}>
            Licensed &amp; Insured Calgary Epoxy Specialists
          </Badge>

          <h1
            className="font-display text-balance text-4.5xl font-semibold leading-[1.05] tracking-tight text-secondary-900 sm:text-6xl lg:text-[4.25rem] animate-fade-up"
            style={{ animationDelay: "80ms" }}
          >
            Calgary epoxy flooring built to{" "}
            <span className="relative inline-block text-primary-600">
              outlast the winter
              <svg
                className="absolute -bottom-2 left-0 hidden w-full sm:block"
                viewBox="0 0 300 12"
                fill="none"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M2 9.5C60 3 180 3 298 9.5"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  className="text-primary-300"
                />
              </svg>
            </span>
          </h1>

          <p
            className="max-w-xl text-balance text-lg leading-relaxed text-text-light animate-fade-up"
            style={{ animationDelay: "160ms" }}
          >
            Professional Epoxy Flooring installs flake, quartz, and metallic
            epoxy systems for garages, warehouses, and commercial floors across
            Calgary and area. Licensed installers, a firm quote before we start,
            and a finish built for Alberta's freeze and thaw cycles.
          </p>

          <div
            className="flex flex-col gap-4 sm:flex-row sm:items-center animate-fade-up"
            style={{ animationDelay: "240ms" }}
          >
            <Button href="/contact" variant="primary" size="lg" icon={ArrowRight}>
              Get Free Quote
            </Button>
            <Button href="/projects" variant="secondary" size="lg" icon={PlayCircle}>
              View Projects
            </Button>
          </div>

          {/* Trust badges */}
          <dl
            className="mt-4 grid grid-cols-2 gap-6 border-t border-border pt-8 sm:grid-cols-4 animate-fade-up"
            style={{ animationDelay: "320ms" }}
          >
            {HERO_STATS.map((stat) => (
              <div key={stat.id} className="flex flex-col gap-1">
                <dt className="order-2 text-xs font-medium uppercase tracking-wide text-text-light">
                  {stat.label}
                </dt>
                <dd className="order-1 font-display text-3xl font-semibold text-secondary-900">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Right column — glass visual */}
        <div
          className="relative mx-auto w-full max-w-md lg:max-w-none animate-scale-in"
          style={{ animationDelay: "200ms" }}
        >
          <div className="glass-panel glass-shine relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-card">
            {/* Poured-resin gradient blob */}
            <div
              className="absolute -inset-10 bg-[conic-gradient(from_140deg_at_50%_50%,#0f3d6d_0deg,#2fa8e6_120deg,#eef7ff_200deg,#0c2344_300deg,#0f3d6d_360deg)] opacity-70 blur-2xl animate-gradient-pan [background-size:200%_200%]"
              aria-hidden="true"
            />
            <Image
              src="/images/hero-side.webp"
              alt="Glossy epoxy resin floor finish"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="relative object-cover mix-blend-luminosity opacity-90"
            />
          </div>

          {/* Floating glass stat card */}
          <div
            className="glass-panel absolute -bottom-8 -left-6 flex items-center gap-4 rounded-xl px-5 py-4 shadow-glow animate-float"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="flex size-11 items-center justify-center rounded-lg bg-primary-500/10 text-primary-600">
              <ShieldCheck className="size-6" aria-hidden="true" />
            </div>
            <div>
              <p className="font-display text-lg font-semibold text-secondary-900">
                10-Year Warranty
              </p>
              <p className="text-xs text-text-light">On every installation</p>
            </div>
          </div>

          <div
            className="glass-panel absolute -top-6 -right-4 rounded-xl px-4 py-3 text-center shadow-card animate-float-slow"
            aria-hidden="true"
          >
            <p className="font-display text-2xl font-semibold text-primary-600">4.9★</p>
            <p className="text-[11px] font-medium text-text-light">Client Rating</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
