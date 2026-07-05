import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { TEAM_MEMBERS } from "@/constants/team";

function getInitials(name) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function AboutTeam() {
  return (
    <section className="relative overflow-hidden bg-surface py-24 lg:py-32">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_90%_10%,rgba(47,168,230,0.10),transparent_45%)]"
        aria-hidden="true"
      />

      <Container className="relative flex flex-col gap-14">
        <SectionHeading
          eyebrow="The Team"
          title="The people behind every install"
          description="A small, senior crew. No subcontractor roulette, no rotating faces on your job site."
          align="center"
          className="mx-auto"
        />

        <div className="hud-panel overflow-hidden rounded-2xl shadow-card">
          <div className="flex items-center justify-between border-b border-primary-900/10 px-6 py-3 sm:px-8">
            <span className="font-mono-hud text-[10px] uppercase text-text-light">
              roster.sys // {String(TEAM_MEMBERS.length).padStart(2, "0")}_active
            </span>
            <span className="flex items-center gap-1.5 font-mono-hud text-[10px] uppercase text-primary-600">
              <span className="size-1.5 rounded-full bg-primary-500" aria-hidden="true" />
              on duty
            </span>
          </div>

          <div className="divide-y divide-primary-900/10">
            {TEAM_MEMBERS.map((member, index) => (
              <div
                key={member.id}
                className="group relative flex animate-fade-up items-center gap-5 px-6 py-6 transition-colors duration-300 ease-premium hover:bg-primary-500/5 sm:gap-8 sm:px-8"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <span
                  className="pointer-events-none absolute inset-y-0 left-0 w-0.5 scale-y-0 bg-primary-500 transition-transform duration-300 ease-premium group-hover:scale-y-100"
                  aria-hidden="true"
                />

                <span className="font-mono-hud shrink-0 text-xs text-primary-600/60 sm:w-14">
                  {member.code}
                </span>

                <span className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-primary-500/10 font-display text-lg font-semibold text-primary-600 transition-colors duration-300 ease-premium group-hover:bg-primary-500 group-hover:text-white">
                  {getInitials(member.name)}
                </span>

                <div className="flex min-w-0 flex-1 flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
                  <h3 className="font-display text-base font-semibold text-secondary-900 sm:w-48 sm:shrink-0">
                    {member.role}
                  </h3>
                  <p className="text-sm leading-relaxed text-text-light sm:flex-1">{member.bio}</p>
                </div>

                <span
                  className="hidden shrink-0 rounded-full border border-primary-500/20 px-3 py-1 font-mono-hud text-[9px] uppercase text-primary-600/70 opacity-0 transition-opacity duration-300 ease-premium group-hover:opacity-100 sm:inline-block"
                  aria-hidden="true"
                >
                  clear
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
