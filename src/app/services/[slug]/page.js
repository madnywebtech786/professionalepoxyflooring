import { notFound } from "next/navigation";
import ServiceHero from "@/components/sections/service-detail/ServiceHero";
import ServiceOverviewSection from "@/components/sections/service-detail/ServiceOverviewSection";
import ServiceBenefits from "@/components/sections/service-detail/ServiceBenefits";
import ServiceProcess from "@/components/sections/service-detail/ServiceProcess";
import ServiceGallery from "@/components/sections/service-detail/ServiceGallery";
import ServiceFAQ from "@/components/sections/service-detail/ServiceFAQ";
import RelatedServices from "@/components/sections/service-detail/RelatedServices";
import CTABanner from "@/components/sections/CTABanner";
import { SERVICES, getServiceBySlug } from "@/constants/services";
import { COMPANY_NAME, COMPANY_PHONE, COMPANY_URL } from "@/constants/company";
import { WORKING_AREAS } from "@/constants/areas";

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: "Service Not Found" };
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: service.keywords,
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      images: [service.image],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: service.metaTitle,
      description: service.metaDescription,
      images: [service.image],
    },
    alternates: {
      canonical: `/services/${service.slug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const index = SERVICES.findIndex((item) => item.slug === slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: service.title,
        description: service.fullDescription,
        provider: {
          "@type": "LocalBusiness",
          name: COMPANY_NAME,
          telephone: COMPANY_PHONE,
          url: COMPANY_URL,
        },
        areaServed: WORKING_AREAS.map((area) => ({
          "@type": "City",
          name: area,
        })),
        serviceType: service.title,
        audience: service.bestFor.map((item) => item.label).join(", "),
      },
      {
        "@type": "FAQPage",
        mainEntity: service.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "/" },
          { "@type": "ListItem", position: 2, name: "Services", item: "/services" },
          { "@type": "ListItem", position: 3, name: service.title, item: `/services/${service.slug}` },
        ],
      },
    ],
  };

  return (
    <main className="flex flex-1 flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServiceHero service={service} index={index} total={SERVICES.length} />
      <ServiceOverviewSection service={service} />
      <ServiceBenefits service={service} />
      <ServiceProcess service={service} />
      <ServiceGallery service={service} />
      <ServiceFAQ service={service} />
      <RelatedServices currentSlug={service.slug} />
      <CTABanner />
    </main>
  );
}
