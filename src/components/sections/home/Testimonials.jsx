import { Quote, Star } from "lucide-react";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { TESTIMONIALS } from "@/constants/testimonials";

const CARD_CLASS =
  "glass-shine-hover group relative flex animate-fade-up flex-col gap-6 rounded-2xl border border-border bg-white p-6 shadow-soft transition-colors duration-500 ease-premium hover:border-secondary-900 hover:bg-secondary-900";

const TEXT_CLASSES = {
  avatar:
    "flex size-10 items-center justify-center rounded-full bg-surface text-xs font-semibold text-secondary-900 transition-colors duration-500 ease-premium group-hover:bg-white/15 group-hover:text-white",
  quote:
    "size-8 shrink-0 text-secondary-900/15 transition-colors duration-500 ease-premium group-hover:text-white/40",
  body: "flex-1 text-sm leading-relaxed text-secondary-900 transition-colors duration-500 ease-premium group-hover:text-white",
  name: "font-display text-sm font-semibold text-secondary-900 transition-colors duration-500 ease-premium group-hover:text-white",
  role: "text-xs text-text-light transition-colors duration-500 ease-premium group-hover:text-white/70",
  star: "size-3.5 fill-primary-500 text-primary-500 transition-colors duration-500 ease-premium group-hover:fill-white group-hover:text-white",
};

function getInitials(name) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-144 w-xl -translate-x-1/2 rounded-full bg-primary-100/40 blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative flex flex-col gap-14">
        <SectionHeading
          eyebrow="Testimonials"
          title="Don't take our word for it"
          description="Real feedback from real Calgary projects, the reason most of our work comes from referrals."
          align="center"
          className="mx-auto"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={CARD_CLASS}
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <div className="flex items-center justify-between">
                <span className={TEXT_CLASSES.avatar}>{getInitials(testimonial.name)}</span>
                <Quote className={TEXT_CLASSES.quote} aria-hidden="true" />
              </div>

              <p className={TEXT_CLASSES.body}>&ldquo;{testimonial.quote}&rdquo;</p>

              <div className="flex flex-col gap-2">
                <div className="flex gap-0.5" aria-label={`${testimonial.rating} out of 5 stars`}>
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className={TEXT_CLASSES.star} aria-hidden="true" />
                  ))}
                </div>
                <p className={TEXT_CLASSES.name}>{testimonial.name}</p>
                <p className={TEXT_CLASSES.role}>{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
