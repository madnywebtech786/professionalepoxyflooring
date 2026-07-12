import { WhatsappIcon } from "@/components/ui/SocialIcons";
import { COMPANY_PHONE_HREF } from "@/constants/company";

const WHATSAPP_NUMBER = COMPANY_PHONE_HREF.replace(/\D/g, "");
const WHATSAPP_MESSAGE = "Hi! I'd like a free quote for epoxy flooring.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed right-4 bottom-4 z-40 flex items-center sm:right-6 sm:bottom-6"
    >
      <span
        className="absolute inset-0 rounded-full bg-[#25D366] opacity-70 animate-pulse-ring"
        aria-hidden="true"
      />
      <span className="relative flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,0.45)] transition-transform duration-300 ease-premium group-hover:scale-105 sm:size-15">
        <WhatsappIcon className="size-7" aria-hidden="true" />
      </span>

      {/* Label flyout on hover — large screens only */}
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-lg bg-secondary-900 px-3 py-1.5 text-xs font-semibold text-white opacity-0 shadow-card transition-all duration-200 ease-premium group-hover:opacity-100 lg:block">
        Chat on WhatsApp
      </span>
    </a>
  );
}
