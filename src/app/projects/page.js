import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectsGallery from "@/components/sections/projects/ProjectsGallery";
import CTABanner from "@/components/sections/CTABanner";

export const metadata = {
  title: "Epoxy Flooring Projects | Calgary Portfolio",
  description:
    "Browse recent flake, quartz, and metallic epoxy flooring installations across residential, commercial, and industrial spaces in Calgary and area.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Epoxy Flooring Projects | Calgary Portfolio",
    description:
      "Browse recent flake, quartz, and metallic epoxy flooring installations across residential, commercial, and industrial spaces in Calgary and area.",
    url: "/projects",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Epoxy Flooring Projects | Calgary Portfolio",
    description:
      "Browse recent flake, quartz, and metallic epoxy flooring installations across residential, commercial, and industrial spaces in Calgary and area.",
  },
};

export default function ProjectsPage() {
  return (
    <main className="flex flex-1 flex-col">
      <section className="relative isolate overflow-hidden bg-white pt-36 pb-20 lg:pt-44 lg:pb-24">
        <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(47,168,230,0.14),transparent_45%),radial-gradient(circle_at_85%_10%,rgba(12,35,68,0.10),transparent_40%)]" />
          <div className="absolute left-1/2 top-1/4 h-144 w-xl -translate-x-1/2 rounded-full bg-primary-200/25 blur-3xl animate-drift" />
        </div>

        <Container className="flex flex-col gap-14">
          <div className="flex animate-fade-up flex-wrap items-center justify-between gap-4 border-b border-border pb-4">
            <div className="flex items-center gap-2.5">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary-500 opacity-75" aria-hidden="true" />
                <span className="relative inline-flex size-2 rounded-full bg-primary-500" aria-hidden="true" />
              </span>
              <span className="font-mono-hud text-[11px] uppercase text-text-light">
                project_archive.sys // portfolio
              </span>
            </div>
          </div>

          <SectionHeading
            eyebrow="Our Work"
            title="Recent transformations"
            description="A look at the floors we've engineered for Calgary area homes, businesses, and warehouses. Click any photo to view it full screen."
          />
        </Container>
      </section>

      <section className="bg-white py-24 lg:py-32">
        <Container>
          <ProjectsGallery />
        </Container>
      </section>

      <CTABanner />
    </main>
  );
}
