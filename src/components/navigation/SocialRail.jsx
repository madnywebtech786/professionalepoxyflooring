import { FacebookIcon, InstagramIcon, TiktokIcon } from "@/components/ui/SocialIcons";
import { SOCIAL_LINKS } from "@/constants/company";

const SOCIALS = [
  { key: "tiktok", label: "TikTok", href: SOCIAL_LINKS.tiktok, icon: TiktokIcon },
  { key: "instagram", label: "Instagram", href: SOCIAL_LINKS.instagram, icon: InstagramIcon },
  { key: "facebook", label: "Facebook", href: SOCIAL_LINKS.facebook, icon: FacebookIcon },
];

function SocialLink({ social }) {
  const Icon = social.icon;

  return (
    <a
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={social.label}
      className="group relative flex size-8 shrink-0 items-center justify-center rounded-full text-secondary-700 transition-all duration-300 ease-premium hover:bg-secondary-900 hover:text-white sm:size-9 lg:size-10"
    >
      <Icon className="size-4 transition-transform duration-300 ease-premium group-hover:scale-110 sm:size-4.5" aria-hidden="true" />

      {/* Label flyout on hover — large screens only */}
      <span className="pointer-events-none absolute right-full top-1/2 mr-3 hidden -translate-y-1/2 whitespace-nowrap rounded-lg bg-secondary-900 px-3 py-1.5 text-xs font-semibold text-white opacity-0 shadow-card transition-all duration-200 ease-premium group-hover:opacity-100 lg:block">
        {social.label}
      </span>
    </a>
  );
}

export default function SocialRail() {
  return (
    <div
      className="fixed inset-y-0 right-2 z-40 flex items-center sm:right-4 lg:right-6"
      aria-label="Social media"
    >
      <div className="bg-white relative flex flex-col items-center gap-0.5 rounded-full p-1.5 shadow-card sm:gap-1 sm:p-2">
        {SOCIALS.map((social) => (
          <SocialLink key={social.key} social={social} />
        ))}
        <span
          className="pointer-events-none absolute left-1/2 top-2 bottom-2 -z-10 w-px -translate-x-1/2 bg-linear-to-b from-transparent via-primary-300/40 to-transparent"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
