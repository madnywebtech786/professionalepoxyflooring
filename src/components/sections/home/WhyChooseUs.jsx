import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { WHY_CHOOSE_US } from "@/constants/whyChooseUs";

const SPAN_CLASSES = {
  featured: "sm:col-span-2 sm:row-span-2",
  wide: "sm:col-span-2",
  full: "sm:col-span-4",
  default: "",
};

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-secondary-900 py-24 lg:py-32">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(47,168,230,0.25),transparent_45%),radial-gradient(circle_at_10%_100%,rgba(47,168,230,0.12),transparent_40%)]"
        aria-hidden="true"
      />
      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.06]" aria-hidden="true">
        <defs>
          <pattern id="why-grid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#ffffff" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#why-grid)" />
      </svg>

      <Container className="relative flex flex-col gap-14">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Why Calgary homeowners and businesses hire us"
          description="Licensed, insured, and on site for every step of the job, here is what sets an installed floor apart from a weekend DIY kit."
          align="center"
          className="[&_h2]:text-white [&_p]:text-secondary-200 [&_span]:text-primary-300"
        />

        <div className="grid auto-rows-[minmax(11rem,auto)] gap-5 sm:grid-cols-4">
          {WHY_CHOOSE_US.map((item, index) => {
            const Icon = item.icon;
            const isFeatured = item.span === "featured";
            const isFull = item.span === "full";

            return (
              <div
                key={item.id}
                className={`group relative flex animate-fade-up overflow-hidden rounded-2xl p-7 transition-all duration-300 ease-premium hover:-translate-y-1 ${
                  SPAN_CLASSES[item.span]
                } ${isFull ? "flex-col items-start gap-6 sm:flex-row sm:items-center" : "flex-col justify-between"} ${
                  isFeatured
                    ? "bg-linear-to-br from-primary-500 to-primary-700 shadow-glow"
                    : "border border-white/10 bg-white/5 backdrop-blur-sm hover:border-primary-400/40 hover:bg-white/10"
                }`}
                style={{ animationDelay: `${index * 90}ms` }}
              >
                {isFeatured && (
                  <div
                    className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/15 blur-2xl"
                    aria-hidden="true"
                  />
                )}

                <div
                  className={`flex size-12 shrink-0 items-center justify-center rounded-lg transition-colors duration-300 ${
                    isFeatured
                      ? "bg-white/20 text-white"
                      : "bg-primary-500/20 text-primary-300 group-hover:bg-primary-500 group-hover:text-white"
                  }`}
                >
                  <Icon className="size-6" aria-hidden="true" />
                </div>

                {isFeatured ? (
                  <div className="flex flex-col gap-2">
                    <p className="font-display text-6xl font-semibold tracking-tight text-white lg:text-7xl">
                      {item.stat}
                    </p>
                    <p className="text-sm font-medium uppercase tracking-wide text-white/80">
                      {item.statLabel}
                    </p>
                    <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/85">
                      {item.description}
                    </p>
                  </div>
                ) : isFull ? (
                  <div className="flex flex-1 flex-col gap-1.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
                    <h3 className="font-display text-lg font-semibold text-white sm:shrink-0">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-secondary-200 sm:max-w-xl sm:text-right">
                      {item.description}
                    </p>
                  </div>
                ) : (
                  <div className="flex flex-col gap-2">
                    <h3 className="font-display text-lg font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-secondary-200">
                      {item.description}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
