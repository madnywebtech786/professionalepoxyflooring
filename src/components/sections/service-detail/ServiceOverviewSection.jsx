import Container from "@/components/layout/Container";
import { resolveIcon } from "@/lib/iconMap";

export default function ServiceOverviewSection({ service }) {
  return (
    <section className="relative overflow-hidden bg-surface py-24 lg:py-32">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(47,168,230,0.10),transparent_45%)]"
        aria-hidden="true"
      />

      <Container className="relative grid gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
        <div className="flex flex-col gap-6">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary-600">
            <span className="h-px w-6 bg-primary-500" aria-hidden="true" />
            Overview
          </span>
          <h2 className="font-display text-balance text-3xl font-semibold leading-tight tracking-tight text-secondary-900 sm:text-4xl">
            What is {service.title.toLowerCase()}?
          </h2>
          <p className="text-balance text-base leading-relaxed text-text-light sm:text-lg">
            {service.fullDescription}
          </p>
        </div>

        <div className="hud-panel relative flex flex-col overflow-hidden rounded-2xl shadow-card">
          <div className="flex items-center justify-between border-b border-primary-900/10 px-6 py-4">
            <span className="text-xs font-semibold uppercase tracking-[0.12em] text-text-light">
              Best For
            </span>
            <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-primary-600">
              <span className="size-1.5 rounded-full bg-primary-500" aria-hidden="true" />
              {service.bestFor.length} matched
            </span>
          </div>

          <ul className="divide-y divide-primary-900/10">
            {service.bestFor.map((item, index) => {
              const Icon = resolveIcon(item.icon);
              return (
                <li
                  key={item.id}
                  className="group flex animate-fade-up items-center gap-4 px-6 py-4 transition-colors duration-300 ease-premium hover:bg-primary-500/5"
                  style={{ animationDelay: `${index * 70}ms` }}
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary-500/10 text-primary-600 transition-colors duration-300 ease-premium group-hover:bg-primary-500 group-hover:text-white">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-semibold text-secondary-800">{item.label}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
}
