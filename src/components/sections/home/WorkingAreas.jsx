import { MapPin } from "lucide-react";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { WORKING_AREAS } from "@/constants/areas";

const ORBIT_POSITIONS = [
  { top: "8%", left: "50%" },
  { top: "28%", left: "84%" },
  { top: "70%", left: "80%" },
  { top: "90%", left: "42%" },
  { top: "62%", left: "17%" },
  { top: "22%", left: "20%" },
];

export default function WorkingAreas() {
  const [hub, ...surrounding] = WORKING_AREAS;

  return (
    <section className="bg-surface py-24 lg:py-32">
      <Container className="grid gap-16 lg:grid-cols-2 lg:items-center">
        <div className="flex flex-col gap-8">
          <SectionHeading
            eyebrow="Service Area"
            title="Do we cover your town? Probably, yes"
            description="Based in Calgary, AB, our crews regularly work throughout these communities and can usually schedule a free assessment within days of your call."
          />

          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {WORKING_AREAS.map((area, index) => (
              <li
                key={area}
                className={`group flex animate-fade-up items-center gap-2 rounded-lg border px-4 py-3 text-sm font-medium transition-all duration-300 ease-premium hover:-translate-y-0.5 hover:border-primary-300 hover:shadow-soft ${
                  index === 0
                    ? "border-primary-500 bg-primary-500 text-white"
                    : "border-border bg-white text-secondary-800"
                }`}
                style={{ animationDelay: `${index * 60}ms` }}
              >
                <MapPin
                  className={`size-4 shrink-0 transition-transform duration-300 group-hover:scale-110 ${
                    index === 0 ? "text-white" : "text-primary-500"
                  }`}
                  aria-hidden="true"
                />
                {area}
              </li>
            ))}
          </ul>
        </div>

        <div className="glass-panel glass-shine relative aspect-square w-full overflow-hidden rounded-2xl shadow-card">
          <div
            className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(47,168,230,0.25),transparent_60%)]"
            aria-hidden="true"
          />

          {/* Radius rings */}
          <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
            <div className="absolute size-[85%] rounded-full border border-primary-500/25" />
            <div className="absolute size-[60%] rounded-full border border-primary-500/30" />
            <div className="absolute size-[35%] rounded-full border border-primary-500/35" />
          </div>

          {/* Surrounding area nodes */}
          {surrounding.map((area, index) => {
            const position = ORBIT_POSITIONS[index] ?? ORBIT_POSITIONS[0];
            return (
              <div
                key={area}
                className="glass-panel absolute flex -translate-x-1/2 -translate-y-1/2 animate-scale-in items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-semibold text-secondary-800 shadow-soft"
                style={{ top: position.top, left: position.left, animationDelay: `${index * 100 + 200}ms` }}
              >
                <span className="size-1.5 shrink-0 rounded-full bg-primary-500" aria-hidden="true" />
                {area}
              </div>
            );
          })}

          {/* Calgary hub marker */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative flex flex-col items-center gap-2">
              <div className="flex size-16 items-center justify-center rounded-full bg-primary-500 text-white shadow-glow animate-float">
                <MapPin className="size-8" aria-hidden="true" />
              </div>
              <span className="glass-panel rounded-full px-3 py-1 font-display text-xs font-semibold text-secondary-900 shadow-soft">
                {hub}
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
