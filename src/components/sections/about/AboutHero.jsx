import { ShieldCheck, MapPin } from "lucide-react";
import Container from "@/components/layout/Container";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import Badge from "@/components/ui/Badge";
import { ABOUT_SYSTEM_LOG, ABOUT_METRICS, ABOUT_MISSION } from "@/constants/about";

export default function AboutHero() {
  return (
    <section className="relative isolate overflow-hidden bg-white pt-36 pb-20 lg:pt-44 lg:pb-24">
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(47,168,230,0.14),transparent_45%),radial-gradient(circle_at_85%_10%,rgba(12,35,68,0.10),transparent_40%)]" />
        <div className="absolute left-1/2 top-1/4 h-144 w-xl -translate-x-1/2 rounded-full bg-primary-200/25 blur-3xl animate-drift" />
      </div>

      <Container className="flex flex-col gap-14">
        {/* System status strip */}
        <div className="hidden animate-fade-up flex-wrap items-center justify-between gap-4 border-b border-border pb-4 sm:flex">
          <div className="flex items-center gap-2.5">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary-500 opacity-75" aria-hidden="true" />
              <span className="relative inline-flex size-2 rounded-full bg-primary-500" aria-hidden="true" />
            </span>
            <span className="font-mono-hud text-[11px] uppercase text-text-light">
              company_profile.sys // about
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

        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
          <div className="flex flex-col justify-center gap-8">
            <Badge icon={ShieldCheck} className="animate-fade-down" style={{ animationDelay: "0ms" }}>
              About Professional Epoxy Flooring
            </Badge>

            <h1
              className="font-display text-balance text-5xl font-semibold leading-[1.05] tracking-tight text-secondary-900 sm:text-6xl lg:text-[4.25rem] animate-fade-up"
              style={{ animationDelay: "80ms" }}
            >
              The Calgary crew behind{" "}
              <span className="relative inline-block whitespace-nowrap text-primary-600">
                your next floor
                <svg
                  className="absolute -bottom-2 left-0 w-full"
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
              {ABOUT_MISSION}
            </p>
          </div>

          {/* HUD console visual */}
          <div
            className="hud-panel relative flex animate-scale-in flex-col overflow-hidden rounded-2xl shadow-card"
            style={{ animationDelay: "220ms" }}
          >
            <div className="flex items-center justify-between border-b border-primary-900/10 px-6 py-4">
              <span className="font-mono-hud text-[10px] uppercase text-text-light">
                OPS // coverage_scan
              </span>
              <span className="flex items-center gap-1.5 font-mono-hud text-[10px] uppercase text-primary-600">
                <span className="size-1.5 rounded-full bg-primary-500" aria-hidden="true" />
                live
              </span>
            </div>

            {/* Radar visual fills the vertical space */}
            <div className="relative flex flex-1 items-center justify-center overflow-hidden px-8 py-10">
              <div
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(47,168,230,0.14),transparent_65%)]"
                aria-hidden="true"
              />
              <div className="relative flex size-56 items-center justify-center sm:size-64">
                <div className="absolute inset-0 rounded-full border border-primary-500/20" aria-hidden="true" />
                <div className="absolute inset-8 rounded-full border border-primary-500/25" aria-hidden="true" />
                <div className="absolute inset-16 rounded-full border border-primary-500/30" aria-hidden="true" />

                {/* Rotating sweep */}
                <div
                  className="absolute inset-0 animate-spin-slow"
                  style={{
                    background:
                      "conic-gradient(from 0deg, rgba(47,168,230,0.35), transparent 35%)",
                    borderRadius: "9999px",
                    maskImage: "radial-gradient(circle, transparent 0%, black 1%)",
                  }}
                  aria-hidden="true"
                />

                <div className="relative flex size-14 items-center justify-center rounded-full bg-primary-500 text-white shadow-glow">
                  <MapPin className="size-6" aria-hidden="true" />
                </div>

                <span className="absolute top-2 left-1/2 -translate-x-1/2 rounded-full bg-white px-2 py-0.5 font-mono-hud text-[9px] text-secondary-700 shadow-soft">
                  N
                </span>
              </div>
            </div>

            {/* Metric footer strip */}
            <div className="grid grid-cols-3 divide-x divide-primary-900/10 border-t border-primary-900/10">
              {ABOUT_METRICS.map((metric) => (
                <div key={metric.id} className="flex flex-col gap-1 px-4 py-5 text-center">
                  <span className="font-mono-hud text-[9px] uppercase text-primary-600/70">
                    {metric.code}
                  </span>
                  <p className="font-display text-xl font-semibold text-secondary-900 sm:text-2xl">
                    <AnimatedCounter value={metric.value} suffix={metric.suffix} />
                  </p>
                  <p className="text-[10px] leading-tight text-text-light">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
