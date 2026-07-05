"use client";

import { useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function ImageLightbox({ items, activeIndex, onClose, onNavigate }) {
  const touchStartX = useRef(null);
  const isOpen = activeIndex !== null;
  const activeItem = isOpen ? items[activeIndex] : null;

  const goPrev = useCallback(() => {
    onNavigate((activeIndex - 1 + items.length) % items.length);
  }, [activeIndex, items.length, onNavigate]);

  const goNext = useCallback(() => {
    onNavigate((activeIndex + 1) % items.length);
  }, [activeIndex, items.length, onNavigate]);

  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";

    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") goPrev();
      if (event.key === "ArrowRight") goNext();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onClose, goPrev, goNext]);

  if (!isOpen || !activeItem) return null;

  function handleTouchStart(event) {
    touchStartX.current = event.touches[0].clientX;
  }

  function handleTouchEnd(event) {
    if (touchStartX.current === null) return;
    const delta = event.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 50) {
      if (delta > 0) goPrev();
      else goNext();
    }
    touchStartX.current = null;
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Project photo viewer"
      className="fixed inset-0 z-100 flex flex-col bg-secondary-900/95 backdrop-blur-md animate-scale-in"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="flex items-center justify-between px-6 py-5 sm:px-10">
        <span className="font-mono-hud text-[10px] uppercase text-primary-300">
          {String(activeIndex + 1).padStart(2, "0")} of {String(items.length).padStart(2, "0")}
        </span>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close image viewer"
          className="flex size-11 shrink-0 items-center justify-center rounded-full border border-white/15 text-white transition-colors duration-200 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400"
        >
          <X className="size-5" aria-hidden="true" />
        </button>
      </div>

      <div className="relative flex flex-1 items-center justify-center px-4 pb-6 sm:px-16">
        <button
          type="button"
          onClick={goPrev}
          aria-label="Previous image"
          className="absolute left-2 top-1/2 z-10 flex size-11 -translate-y-1/2 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white backdrop-blur-sm transition-colors duration-200 hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400 sm:left-6"
        >
          <ChevronLeft className="size-5" aria-hidden="true" />
        </button>

        <div className="relative  h-full w-full max-w-6xl overflow-hidden rounded-2xl shadow-hover">
          <Image
            key={activeItem.image}
            src={activeItem.image}
            alt=""
            fill
            sizes="(min-width: 1024px) 80vw, 90vw"
            className="object-contain"
            priority
          />
        </div>

        <button
          type="button"
          onClick={goNext}
          aria-label="Next image"
          className="absolute right-2 top-1/2 z-10 flex size-11 -translate-y-1/2 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white backdrop-blur-sm transition-colors duration-200 hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400 sm:right-6"
        >
          <ChevronRight className="size-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
