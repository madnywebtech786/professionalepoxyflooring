import { ArrowRight } from "lucide-react";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import ProjectPhotoCard from "@/components/cards/ProjectPhotoCard";
import { PROJECT_GALLERY } from "@/constants/projects";

const PREVIEW_COUNT = 6;
const DESKTOP_COLUMN_OFFSET = ["lg:mt-20", "lg:mt-0", "lg:mt-20"];

function toColumns(items, columnCount) {
  return Array.from({ length: columnCount }, (_, col) =>
    items.filter((_, index) => index % columnCount === col)
  );
}

export default function FeaturedProjects() {
  const previewPhotos = PROJECT_GALLERY.slice(0, PREVIEW_COUNT);
  const mobileColumns = toColumns(previewPhotos, 2);
  const desktopColumns = toColumns(previewPhotos, 3);

  return (
    <section className="bg-white py-24 lg:py-32">
      <Container className="flex flex-col gap-14">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Our Work"
            title="See the finish before you commit"
            description="Real garages, warehouses, and commercial floors we've installed across Calgary and area. Browse the full gallery before you request a quote."
          />
          <Button href="/projects" variant="secondary" size="md" icon={ArrowRight} className="w-fit shrink-0">
            View All
          </Button>
        </div>

        {/* Mobile: plain 2-column grid */}
        <div className="grid grid-cols-2 gap-4 lg:hidden">
          {mobileColumns.map((column, colIndex) => (
            <div key={colIndex} className="flex flex-col gap-4">
              {column.map((photo, rowIndex) => (
                <ProjectPhotoCard
                  key={photo.id}
                  photo={photo}
                  href="/projects"
                  style={{ animationDelay: `${(colIndex * 2 + rowIndex) * 90}ms` }}
                />
              ))}
            </div>
          ))}
        </div>

        {/* Desktop: 3 columns with staggered vertical offsets */}
        <div className="hidden lg:grid lg:grid-cols-3 lg:gap-6">
          {desktopColumns.map((column, colIndex) => (
            <div
              key={colIndex}
              className={`flex flex-col gap-6 ${DESKTOP_COLUMN_OFFSET[colIndex % DESKTOP_COLUMN_OFFSET.length]}`}
            >
              {column.map((photo, rowIndex) => (
                <ProjectPhotoCard
                  key={photo.id}
                  photo={photo}
                  href="/projects"
                  style={{ animationDelay: `${(colIndex * 2 + rowIndex) * 90}ms` }}
                />
              ))}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
