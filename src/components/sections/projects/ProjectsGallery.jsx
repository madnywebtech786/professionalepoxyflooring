"use client";

import { useState } from "react";
import ProjectPhotoCard from "@/components/cards/ProjectPhotoCard";
import ImageLightbox from "@/components/ui/ImageLightbox";
import { PROJECT_GALLERY } from "@/constants/projects";

const DESKTOP_COLUMN_OFFSET = ["lg:mt-20", "lg:mt-0", "lg:mt-20"];

function toColumns(items, columnCount) {
  return Array.from({ length: columnCount }, (_, col) =>
    items.filter((_, index) => index % columnCount === col)
  );
}

export default function ProjectsGallery() {
  const [activeIndex, setActiveIndex] = useState(null);

  const mobileColumns = toColumns(PROJECT_GALLERY, 2);
  const desktopColumns = toColumns(PROJECT_GALLERY, 3);

  function openLightbox(photo) {
    setActiveIndex(PROJECT_GALLERY.findIndex((item) => item.id === photo.id));
  }

  return (
    <div className="flex flex-col gap-10">
      {/* Mobile: plain 2-column grid */}
      <div className="grid grid-cols-2 gap-4 lg:hidden">
        {mobileColumns.map((column, colIndex) => (
          <div key={colIndex} className="flex flex-col gap-4">
            {column.map((photo, rowIndex) => (
              <ProjectPhotoCard
                key={photo.id}
                photo={photo}
                onClick={() => openLightbox(photo)}
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
                onClick={() => openLightbox(photo)}
                style={{ animationDelay: `${(colIndex * 2 + rowIndex) * 90}ms` }}
              />
            ))}
          </div>
        ))}
      </div>

      <ImageLightbox
        items={PROJECT_GALLERY}
        activeIndex={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={setActiveIndex}
      />
    </div>
  );
}
