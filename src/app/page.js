import PageLoader from "@/components/ui/PageLoader";
import Hero from "@/components/sections/home/Hero";
import AboutPreview from "@/components/sections/home/AboutPreview";
import ServicesOverview from "@/components/sections/home/ServicesOverview";
import WhyChooseUs from "@/components/sections/home/WhyChooseUs";
import Process from "@/components/sections/home/Process";
import FeaturedProjects from "@/components/sections/home/FeaturedProjects";
import WorkingAreas from "@/components/sections/home/WorkingAreas";
import Testimonials from "@/components/sections/home/Testimonials";
import CTABanner from "@/components/sections/CTABanner";
import ContactSection from "@/components/sections/contact/ContactSection";

export const metadata = {
  title: "Calgary Epoxy Flooring Contractor | Garage, Commercial & Industrial",
  description:
    "Professional Epoxy Flooring installs flake, quartz, and metallic epoxy systems across Calgary, Airdrie, Cochrane, Okotoks, Chestermere, and Strathmore. Get a free quote today.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Calgary Epoxy Flooring Contractor | Garage, Commercial & Industrial",
    description:
      "Professional Epoxy Flooring installs flake, quartz, and metallic epoxy systems across Calgary and surrounding communities.",
    url: "/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calgary Epoxy Flooring Contractor | Garage, Commercial & Industrial",
    description:
      "Professional Epoxy Flooring installs flake, quartz, and metallic epoxy systems across Calgary and surrounding communities.",
  },
};

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <PageLoader />
      <Hero />
      <AboutPreview />
      <ServicesOverview />
      <WhyChooseUs />
      <Process />
      <FeaturedProjects />
      <WorkingAreas />
      <Testimonials />
      <CTABanner />
      <ContactSection />
    </main>
  );
}
