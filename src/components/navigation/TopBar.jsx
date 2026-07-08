import { Mail, Phone } from "lucide-react";
import Container from "@/components/layout/Container";
import { COMPANY_PHONE, COMPANY_PHONE_HREF, COMPANY_EMAIL } from "@/constants/company";

export default function TopBar() {
  return (
    <div className="fixed inset-x-0 top-0 z-50 h-10 border-b border-white/10 bg-secondary-900">
      <Container className="flex h-full items-center justify-end gap-6 sm:justify-between">
        <span className="hidden items-center gap-2 font-mono-hud text-[11px] uppercase tracking-[0.08em] text-secondary-300 sm:flex">
          <span className="relative flex size-1.5">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary-400 opacity-75" aria-hidden="true" />
            <span className="relative inline-flex size-1.5 rounded-full bg-primary-400" aria-hidden="true" />
          </span>
          Licensed &amp; Insured — Serving Calgary &amp; Area
        </span>

        <div className="flex items-center gap-5 text-[13px] font-medium text-secondary-200">
          <a
            href={COMPANY_PHONE_HREF}
            className="group flex items-center gap-1.5 transition-colors duration-200 hover:text-primary-300"
          >
            <Phone className="size-3.5 text-primary-400 transition-transform duration-200 group-hover:scale-110" aria-hidden="true" />
            <span className="hidden sm:inline">{COMPANY_PHONE}</span>
          </a>
          <span className="hidden h-3.5 w-px bg-white/15 sm:block" aria-hidden="true" />
          <a
            href={`mailto:${COMPANY_EMAIL}`}
            className="group flex items-center gap-1.5 transition-colors duration-200 hover:text-primary-300"
          >
            <Mail className="size-3.5 text-primary-400 transition-transform duration-200 group-hover:scale-110" aria-hidden="true" />
            <span className="hidden md:inline">{COMPANY_EMAIL}</span>
          </a>
        </div>
      </Container>
    </div>
  );
}
