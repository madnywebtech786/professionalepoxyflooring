import Container from "@/components/layout/Container";
import { ABOUT_MISSION_STATEMENT, ABOUT_VISION_STATEMENT } from "@/constants/about";

const CORES = [
  { ...ABOUT_MISSION_STATEMENT, theme: "light" },
  { ...ABOUT_VISION_STATEMENT, theme: "dark" },
];

export default function AboutMissionVision() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(47,168,230,0.10),transparent_45%)]"
        aria-hidden="true"
      />

      <Container className="relative flex flex-col gap-10">
        {/* Console header */}
        <div className="flex animate-fade-up flex-wrap items-center justify-between gap-4 border-b border-border pb-4">
          <div className="flex items-center gap-2.5">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary-500 opacity-75" aria-hidden="true" />
              <span className="relative inline-flex size-2 rounded-full bg-primary-500" aria-hidden="true" />
            </span>
            <span className="font-mono-hud text-[11px] uppercase text-text-light">
              directive.core // dual_read
            </span>
          </div>
          <span className="font-mono-hud text-[11px] uppercase text-text-light">
            SYNC <span className="text-primary-600">100%</span>
          </span>
        </div>

        {/* Dual-core panel */}
        <div className="relative grid overflow-hidden rounded-4xl shadow-card lg:grid-cols-2">
          {/* Corner brackets frame the whole console */}
          <span className="hud-corner top-0 left-0 z-10 border-t-2 border-l-2 rounded-tl-lg" aria-hidden="true" />
          <span className="hud-corner top-0 right-0 z-10 border-t-2 border-r-2 rounded-tr-lg" aria-hidden="true" />
          <span className="hud-corner bottom-0 left-0 z-10 border-b-2 border-l-2 rounded-bl-lg" aria-hidden="true" />
          <span className="hud-corner bottom-0 right-0 z-10 border-b-2 border-r-2 rounded-br-lg" aria-hidden="true" />

          {/* Connecting node at the seam (desktop) */}
          <div
            className="pointer-events-none absolute top-1/2 left-1/2 z-10 hidden size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-500 shadow-glow lg:block"
            aria-hidden="true"
          >
            <span className="absolute inset-0 animate-pulse-ring rounded-full border border-primary-400" />
          </div>

          {CORES.map((core, index) => {
            const Icon = core.icon;
            const isDark = core.theme === "dark";

            return (
              <div
                key={core.eyebrow}
                className={`relative flex animate-fade-up flex-col gap-8 overflow-hidden p-8 sm:p-10 lg:p-14 ${
                  isDark ? "bg-secondary-900" : "bg-surface"
                }`}
                style={{ animationDelay: `${index * 140}ms` }}
              >
                {isDark && (
                  <>
                    <div
                      className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(47,168,230,0.22),transparent_50%)]"
                      aria-hidden="true"
                    />
                    <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.06]" aria-hidden="true">
                      <defs>
                        <pattern id="mv-grid-dark" width="40" height="40" patternUnits="userSpaceOnUse">
                          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ffffff" strokeWidth="1" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#mv-grid-dark)" />
                    </svg>
                  </>
                )}

                <div className="relative flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span
                      className={`flex size-14 shrink-0 items-center justify-center rounded-xl ring-1 ${
                        isDark
                          ? "bg-primary-500/15 text-primary-300 ring-primary-400/20"
                          : "bg-primary-500/10 text-primary-600 ring-primary-500/15"
                      }`}
                    >
                      <Icon className="size-7" aria-hidden="true" />
                    </span>
                    <div className="flex flex-col gap-1">
                      <span
                        className={`text-xs font-semibold uppercase tracking-[0.2em] ${
                          isDark ? "text-primary-300" : "text-primary-600"
                        }`}
                      >
                        {core.eyebrow}
                      </span>
                      <span className={`font-mono-hud text-[10px] uppercase ${isDark ? "text-secondary-400" : "text-text-light"}`}>
                        {core.code}
                      </span>
                    </div>
                  </div>
                  <span
                    className={`hidden font-mono-hud text-[28px] font-bold leading-none sm:block lg:text-[40px] ${
                      isDark ? "text-white/5" : "text-secondary-900/5"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <p
                  className={`relative text-balance font-display text-2xl font-semibold leading-tight tracking-tight sm:text-3xl ${
                    isDark ? "text-white" : "text-secondary-900"
                  }`}
                >
                  {core.statement}
                </p>

                <div
                  className={`relative mt-auto flex flex-col gap-3 border-t pt-6 ${
                    isDark ? "border-white/10" : "border-border"
                  }`}
                >
                  {core.points.map((point) => {
                    const PointIcon = point.icon;
                    return (
                      <div key={point.id} className="flex items-center gap-3">
                        <span
                          className={`flex size-8 shrink-0 items-center justify-center rounded-lg ring-1 ${
                            isDark ? "bg-white/5 text-primary-300 ring-white/10" : "bg-primary-500/10 text-primary-600 ring-primary-500/10"
                          }`}
                        >
                          <PointIcon className="size-4" aria-hidden="true" />
                        </span>
                        <span className={`text-sm font-medium ${isDark ? "text-secondary-200" : "text-secondary-800"}`}>
                          {point.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
