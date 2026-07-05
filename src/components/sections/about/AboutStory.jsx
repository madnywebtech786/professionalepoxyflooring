import Image from "next/image";
import { ABOUT_STORY } from "@/constants/about";

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

export default function AboutStory() {
  return (
    <section className="relative overflow-hidden bg-surface py-24 lg:py-32">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(47,168,230,0.10),transparent_45%)]"
        aria-hidden="true"
      />

      <div className="mx-auto grid w-full max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center lg:gap-12 lg:px-10">
        {/* Copy */}
        <div className="flex flex-col gap-6 lg:order-2">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary-600">
            <span className="h-px w-6 bg-primary-500" aria-hidden="true" />
            {ABOUT_STORY.eyebrow}
          </span>
          <h2 className="font-display text-balance text-3xl font-semibold leading-tight tracking-tight text-secondary-900 sm:text-4xl lg:text-5xl">
            {ABOUT_STORY.title}
          </h2>
          {ABOUT_STORY.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-balance text-base leading-relaxed text-text-light sm:text-lg">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Visual / scan frame */}
        <div className="relative mx-auto w-full max-w-lg lg:order-1 lg:mx-0 lg:max-w-none">
          <div className="hud-panel relative aspect-4/5 w-full overflow-hidden rounded-2xl p-3 shadow-card animate-scale-in">
            <div
              className="pointer-events-none absolute -inset-8 -z-10 rounded-[2.5rem] bg-primary-300/20 blur-3xl"
              aria-hidden="true"
            />

            <div className="relative h-full w-full overflow-hidden rounded-xl">
              <Image
                src="/images/about-side.webp"
                alt="Early days of the Professional Epoxy Flooring crew on a Calgary job site"
                fill
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover"
              />

              <div className="pointer-events-none absolute inset-0" aria-hidden="true">
                <div className="absolute inset-x-0 h-1/3 animate-scan bg-gradient-to-b from-transparent via-primary-400/25 to-transparent" />
              </div>

              <div className="absolute bottom-3 left-3 rounded-md bg-secondary-900/70 px-2.5 py-1 font-mono-hud text-[10px] text-white backdrop-blur-sm">
                ARCHIVE // ORIGIN
              </div>
            </div>

            <HudCorners />
          </div>
        </div>
      </div>
    </section>
  );
}
