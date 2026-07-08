import { Mail, MapPin, Clock } from "lucide-react";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/forms/ContactForm";
import { COMPANY_EMAIL, COMPANY_ADDRESS } from "@/constants/company";

const DETAILS = [
  { icon: Mail, label: "Email", value: COMPANY_EMAIL },
  { icon: MapPin, label: "Address", value: COMPANY_ADDRESS },
];

export default function ContactSection({ background = "surface" }) {
  return (
    <section className={`py-24 lg:py-32 ${background === "white" ? "bg-white" : "bg-surface"}`}>
      <Container className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div className="flex flex-col gap-10">
          <SectionHeading
            eyebrow="Get In Touch"
            title="Request your free quote"
            description="Fill out the form and our team will follow up within one business day with pricing and scheduling."
          />

          <ul className="flex flex-col gap-5">
            {DETAILS.map((detail) => {
              const Icon = detail.icon;
              return (
                <li key={detail.label} className="flex items-start gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary-500/10 text-primary-600">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-text-light">
                      {detail.label}
                    </p>
                    <p className="font-display text-base font-medium text-secondary-900">
                      {detail.value}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="glass-panel rounded-2xl p-8 shadow-card lg:p-10">
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
