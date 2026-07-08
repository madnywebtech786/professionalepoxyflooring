import { FacebookIcon, InstagramIcon, TiktokIcon } from "@/components/ui/SocialIcons";
import { SOCIAL_LINKS } from "@/constants/company";

const SOCIALS = [
  { key: "tiktok", label: "TikTok", href: SOCIAL_LINKS.tiktok, icon: TiktokIcon },
  { key: "instagram", label: "Instagram", href: SOCIAL_LINKS.instagram, icon: InstagramIcon },
  { key: "facebook", label: "Facebook", href: SOCIAL_LINKS.facebook, icon: FacebookIcon },
];

function SocialLink({ social, orientation }) {
  const Icon = social.icon;
  const flyoutClass =
    orientation === "vertical"
      ? "right-full mr-3 top-1/2 -translate-y-1/2"
      : "bottom-full mb-2 left-1/2 -translate-x-1/2";

  return (
    <a
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={social.label}
      className="group relative flex size-10 shrink-0 items-center justify-center rounded-full text-secondary-700 transition-all duration-300 ease-premium hover:bg-secondary-900 hover:text-white sm:size-9 lg:size-10"
    >
      <Icon className="size-4.5 transition-transform duration-300 ease-premium group-hover:scale-110" aria-hidden="true" />

      {/* Label flyout on hover — large screens only */}
      <span
        className={`pointer-events-none absolute hidden whitespace-nowrap rounded-lg bg-secondary-900 px-3 py-1.5 text-xs font-semibold text-white opacity-0 shadow-card transition-all duration-200 ease-premium group-hover:opacity-100 lg:block ${flyoutClass}`}
      >
        {social.label}
      </span>
    </a>
  );
}

export default function SocialRail() {
  return (
    <>
      {/* Desktop / tablet — vertical rail floating center-right */}
      <div
        className="fixed inset-y-0 right-4 z-40 hidden items-center sm:flex lg:right-6"
        aria-label="Social media"
      >
        <div className="hud-panel relative flex flex-col items-center gap-1 rounded-full p-2 shadow-card">
          {SOCIALS.map((social) => (
            <SocialLink key={social.key} social={social} orientation="vertical" />
          ))}
          <span
            className="pointer-events-none absolute left-1/2 top-2 bottom-2 -z-10 w-px -translate-x-1/2 bg-linear-to-b from-transparent via-primary-300/40 to-transparent"
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Mobile — compact horizontal pill docked bottom-right, thumb-reachable */}
      <div className="fixed right-4 bottom-4 z-40 sm:hidden" aria-label="Social media">
        <div className="hud-panel relative flex items-center gap-1 rounded-full p-1.5 shadow-card">
          {SOCIALS.map((social) => (
            <SocialLink key={social.key} social={social} orientation="horizontal" />
          ))}
          <span
            className="pointer-events-none absolute left-2 right-2 top-1/2 -z-10 h-px -translate-y-1/2 bg-linear-to-r from-transparent via-primary-300/40 to-transparent"
            aria-hidden="true"
          />
        </div>
      </div>
    </>
  );
}
