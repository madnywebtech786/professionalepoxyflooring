import AboutHero from "@/components/sections/about/AboutHero";
import AboutStory from "@/components/sections/about/AboutStory";
import AboutMissionVision from "@/components/sections/about/AboutMissionVision";
import AboutTeam from "@/components/sections/about/AboutTeam";
import CTABanner from "@/components/sections/CTABanner";

export const metadata = {
  title: "About Us | Calgary Epoxy Flooring Contractor",
  description:
    "Meet the licensed Calgary team behind our residential, commercial, and industrial epoxy flooring installations, built on craftsmanship, precision, and long term accountability.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us | Calgary Epoxy Flooring Contractor",
    description:
      "Meet the licensed Calgary team behind our residential, commercial, and industrial epoxy flooring installations.",
    url: "/about",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Calgary Epoxy Flooring Contractor",
    description:
      "Meet the licensed Calgary team behind our residential, commercial, and industrial epoxy flooring installations.",
  },
};

export default function AboutPage() {
  return (
    <main className="flex flex-1 flex-col">
      <AboutHero />
      <AboutStory />
      <AboutMissionVision />
      <AboutTeam />
      <CTABanner />
    </main>
  );
}
