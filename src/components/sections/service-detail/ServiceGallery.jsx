import Image from "next/image";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ServiceGallery({ service }) {
  return (
    <section className="bg-white py-24 lg:py-32">
      <Container className="flex flex-col gap-16">
        <SectionHeading
          eyebrow="Gallery"
          title={`${service.title} in action`}
          description="A look at the finish, texture, and quality clients can expect."
          align="center"
          className="mx-auto"
        />

        <div className="grid gap-5 sm:grid-cols-3">
          {service.gallery.map((image, index) => (
            <div
              key={image}
              className="group relative aspect-4/5 animate-fade-up overflow-hidden rounded-2xl shadow-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Image
                src={image}
                alt={`${service.title} example ${index + 1}`}
                fill
                sizes="(min-width: 1024px) 30vw, 90vw"
                className="object-cover transition-transform duration-700 ease-premium group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-secondary-900/60 via-secondary-900/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
