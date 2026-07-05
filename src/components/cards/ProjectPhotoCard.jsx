import Image from "next/image";
import Link from "next/link";
import { ZoomIn, ArrowUpRight } from "lucide-react";

export default function ProjectPhotoCard({ photo, className = "", style, onClick, href }) {
  const Tag = href ? Link : "button";
  const tagProps = href ? { href } : { type: "button", onClick };
  const Icon = href ? ArrowUpRight : ZoomIn;

  return (
    <Tag
      {...tagProps}
      className={`group relative block w-full animate-fade-up text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 ${className}`}
      style={style}
    >
      <div className="relative aspect-4/5 w-full overflow-hidden rounded-xl">
        <Image
          src={photo.image}
          alt=""
          fill
          sizes="(min-width: 1024px) 25vw, 50vw"
          className="object-cover transition-transform duration-700 ease-premium group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-secondary-900/0 transition-colors duration-300 group-hover:bg-secondary-900/20" />

        <span className="absolute bottom-4 right-4 flex size-9 shrink-0 items-center justify-center rounded-full bg-white/15 text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 ease-premium group-hover:opacity-100">
          <Icon className="size-4" aria-hidden="true" />
        </span>
      </div>
    </Tag>
  );
}
