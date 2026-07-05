import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { PROCESS_STEPS } from "@/constants/process";

export default function Process() {
  return (
    <section className="bg-surface py-24 lg:py-32">
      <Container className="flex flex-col gap-16">
        <SectionHeading
          eyebrow="Our Process"
          title="What happens after you call us"
          description="A proven five step workflow, from the first walkthrough to a floor you can drive on, that keeps every project on schedule and defect free."
          align="center"
        />

        <div className="mx-auto flex w-full max-w-3xl flex-col">
          {PROCESS_STEPS.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === PROCESS_STEPS.length - 1;

            return (
              <div
                key={step.id}
                className="group relative grid animate-fade-up grid-cols-[auto_1fr] gap-x-6 sm:grid-cols-[auto_1fr_auto] sm:gap-x-8"
                style={{ animationDelay: `${index * 110}ms` }}
              >
                <div className="flex flex-col items-center">
                  <div className="relative z-10 flex size-14 shrink-0 items-center justify-center rounded-full bg-white text-primary-600 shadow-card ring-1 ring-border transition-all duration-300 ease-premium group-hover:bg-primary-500 group-hover:text-white group-hover:shadow-glow">
                    <Icon className="size-6" aria-hidden="true" />
                  </div>
                  {!isLast && (
                    <div
                      className="my-2 w-px flex-1 border-l-2 border-dotted border-primary-200"
                      aria-hidden="true"
                    />
                  )}
                </div>

                <div className={`flex flex-col gap-1.5 ${isLast ? "pb-0" : "pb-10"} pt-1.5`}>
                  <span className="font-display text-xs font-semibold tracking-[0.2em] text-primary-500">
                    STEP {step.step}
                  </span>
                  <h3 className="font-display text-xl font-semibold text-secondary-900">
                    {step.title}
                  </h3>
                  <p className="max-w-md text-sm leading-relaxed text-text-light">
                    {step.description}
                  </p>
                </div>

                <span
                  className="pointer-events-none col-start-2 row-start-1 hidden self-start font-display text-7xl font-bold leading-none text-secondary-900/5 transition-colors duration-300 ease-premium group-hover:text-primary-500/10 sm:col-start-3 sm:block lg:text-8xl"
                  aria-hidden="true"
                >
                  {step.step}
                </span>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
