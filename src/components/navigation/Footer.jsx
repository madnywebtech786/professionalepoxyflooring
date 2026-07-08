import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import Container from "@/components/layout/Container";
import { FacebookIcon, InstagramIcon, TiktokIcon } from "@/components/ui/SocialIcons";
import { NAV_LINKS } from "@/constants/navigation";
import { SERVICES } from "@/constants/services";
import {
  COMPANY_NAME,
  COMPANY_PHONE,
  COMPANY_PHONE_HREF,
  COMPANY_EMAIL,
  COMPANY_ADDRESS,
  SOCIAL_LINKS,
} from "@/constants/company";

const SOCIALS = [
  { key: "facebook", label: "Facebook", href: SOCIAL_LINKS.facebook, icon: FacebookIcon },
  { key: "instagram", label: "Instagram", href: SOCIAL_LINKS.instagram, icon: InstagramIcon },
  { key: "tiktok", label: "TikTok", href: SOCIAL_LINKS.tiktok, icon: TiktokIcon },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-secondary-900 pt-20">
      <Container className="grid gap-12 pb-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-4 sm:col-span-2 lg:col-span-1">
          <span className="font-display text-xl font-semibold text-white">{COMPANY_NAME}</span>
          <p className="text-sm leading-relaxed text-secondary-300">
            Calgary's epoxy flooring specialists, delivering premium residential,
            commercial, and industrial coatings across Alberta.
          </p>
          <div className="flex gap-3 pt-2">
            {SOCIALS.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.key}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex size-9 items-center justify-center rounded-lg bg-white/5 text-secondary-200 transition-colors duration-200 hover:bg-primary-500 hover:text-white"
                >
                  <Icon className="size-4" aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-secondary-400">
            Company
          </h3>
          <ul className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-secondary-300 transition-colors duration-200 hover:text-primary-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-secondary-400">
            Services
          </h3>
          <ul className="flex flex-col gap-3">
            {SERVICES.slice(0, 5).map((service) => (
              <li key={service.id}>
                <Link
                  href={`/services/${service.slug}`}
                  className="text-sm text-secondary-300 transition-colors duration-200 hover:text-primary-300"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-secondary-400">
            Contact
          </h3>
          <ul className="flex flex-col gap-3 text-sm text-secondary-300">
            <li className="flex items-start gap-3">
              <Phone className="size-4 shrink-0 text-primary-400" aria-hidden="true" />
              <a href={COMPANY_PHONE_HREF} className="hover:text-primary-300">
                {COMPANY_PHONE}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="size-4 shrink-0 text-primary-400" aria-hidden="true" />
              <a href={`mailto:${COMPANY_EMAIL}`} className="hover:text-primary-300">
                {COMPANY_EMAIL}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="size-4 shrink-0 text-primary-400" aria-hidden="true" />
              <span>{COMPANY_ADDRESS}</span>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10 py-6">
        <Container className="flex flex-col items-center gap-2 text-xs text-secondary-400 sm:flex-row sm:justify-between">
          <p>
            © {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-primary-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary-300">
              Terms of Service
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
