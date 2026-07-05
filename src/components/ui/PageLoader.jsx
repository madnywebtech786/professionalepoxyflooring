"use client";

import { useEffect, useState } from "react";

const READOUT_STEPS = ["INITIALIZING", "MIXING RESIN", "LEVELING", "CURED"];
const MARK_LETTERS = ["P", "E", "F"];

export default function PageLoader() {
  const [phase, setPhase] = useState("entering");
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined" && sessionStorage.getItem("pef-loader-seen")) {
      setPhase("done");
      return;
    }

    document.body.style.overflow = "hidden";

    const enterTimer = window.setTimeout(() => setPhase("active"), 60);
    const stepTimers = READOUT_STEPS.map((_, i) =>
      window.setTimeout(() => setStep(i), 320 + i * 320)
    );
    const exitTimer = window.setTimeout(() => setPhase("exiting"), 1900);
    const doneTimer = window.setTimeout(() => {
      setPhase("done");
      document.body.style.overflow = "";
      sessionStorage.setItem("pef-loader-seen", "1");
    }, 2650);

    return () => {
      window.clearTimeout(enterTimer);
      stepTimers.forEach(window.clearTimeout);
      window.clearTimeout(exitTimer);
      window.clearTimeout(doneTimer);
      document.body.style.overflow = "";
    };
  }, []);

  if (phase === "done") return null;

  const isExiting = phase === "exiting";
  const lettersIn = phase === "active" || isExiting;
  const wordmarkIn = lettersIn && (step >= 1 || isExiting);
  const underlineIn = lettersIn && (step >= 2 || isExiting);

  return (
    <div
      role="status"
      aria-label="Page loading"
      className={`fixed inset-0 z-100 overflow-hidden ${isExiting ? "pointer-events-none" : ""}`}
    >
      {/* Left door panel */}
      <div
        className="absolute inset-y-0 left-0 w-1/2 bg-white transition-transform duration-700 ease-premium"
        style={{ transform: isExiting ? "translateX(-100%)" : "translateX(0)" }}
      >
        <DoorAmbience side="left" />
      </div>

      {/* Right door panel */}
      <div
        className="absolute inset-y-0 right-0 w-1/2 bg-white transition-transform duration-700 ease-premium"
        style={{ transform: isExiting ? "translateX(100%)" : "translateX(0)" }}
      >
        <DoorAmbience side="right" />
      </div>

      {/* Centered content — fades/lifts out just ahead of the doors parting */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center gap-8 transition-all duration-500 ease-premium"
        style={{
          opacity: isExiting ? 0 : 1,
          transform:
            phase === "entering"
              ? "translateY(14px) scale(0.96)"
              : isExiting
                ? "translateY(-10px) scale(1.04)"
                : "translateY(0) scale(1)",
        }}
      >
        {/* Poured-letter wordmark */}
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-end" aria-hidden="true">
            {MARK_LETTERS.map((letter, i) => (
              <span
                key={letter}
                className="relative overflow-hidden font-display text-8xl font-bold tracking-tight sm:text-9xl"
                style={{
                  color: "transparent",
                  WebkitTextStroke: "1.5px #2fa8e6",
                  textStroke: "1.5px #2fa8e6",
                  transitionProperty: "clip-path, transform",
                  transitionDuration: "700ms",
                  transitionTimingFunction: "var(--ease-premium)",
                  transitionDelay: `${i * 140}ms`,
                  clipPath: lettersIn ? "inset(0 0 0% 0)" : "inset(0 0 100% 0)",
                  transform: lettersIn ? "translateY(0)" : "translateY(18%)",
                }}
              >
                {letter}
                {/* Resin gloss sweeping through the outline as it settles — clipped to the letter shape itself */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-linear-to-b from-white via-primary-200/80 to-transparent bg-clip-text"
                  style={{
                    WebkitTextStroke: "1.5px transparent",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                    transform: lettersIn ? "translateY(100%)" : "translateY(-10%)",
                    transition: "transform 650ms var(--ease-premium)",
                    transitionDelay: `${i * 140 + 80}ms`,
                  }}
                >
                  {letter}
                </span>
              </span>
            ))}
          </div>

          <p
            className="font-sans text-[12px] md:text-[14px] lg:text-base font-bold uppercase tracking-[0.42em] text-[#0c2344] transition-all duration-500 ease-premium"
            style={{
              opacity: wordmarkIn ? 1 : 0,
              transform: wordmarkIn ? "translateY(0)" : "translateY(6px)",
            }}
          >
            Professional Epoxy Flooring
          </p>

          {/* Leveling bar — draws left to right beneath the wordmark */}
          <span
            className="h-0.75 rounded-full bg-linear-to-r from-primary-600 via-primary-400 to-primary-200 transition-all ease-premium"
            style={{
              width: underlineIn ? "13rem" : "0rem",
              opacity: underlineIn ? 1 : 0,
              transitionDuration: "550ms",
            }}
          />
        </div>

        {/* Readout strip */}
        <div className="flex items-center gap-2">
          <span className="relative flex size-1.5">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary-500 opacity-75" aria-hidden="true" />
            <span className="relative inline-flex size-1.5 rounded-full bg-primary-500" aria-hidden="true" />
          </span>
          <span className="font-mono-hud text-[11px] uppercase text-text-light">
            {READOUT_STEPS[step]}
          </span>
        </div>
      </div>
    </div>
  );
}

function DoorAmbience({ side }) {
  const edgeClass = side === "left" ? "right-0" : "left-0";
  const glowPosition = side === "left" ? "85% 50%" : "15% 50%";

  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at ${glowPosition}, rgba(47,168,230,0.12), transparent 55%)`,
        }}
      />
      <svg className="absolute inset-0 h-full w-full opacity-35" aria-hidden="true">
        <defs>
          <pattern id={`loader-grid-${side}`} width="44" height="44" patternUnits="userSpaceOnUse">
            <path d="M 44 0 L 0 0 0 44" fill="none" stroke="rgba(15,61,109,0.05)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#loader-grid-${side})`} />
      </svg>
      {/* Seam glow at the door edge */}
      <div className={`absolute inset-y-0 ${edgeClass} w-px bg-linear-to-b from-transparent via-primary-300/60 to-transparent`} />
    </div>
  );
}
