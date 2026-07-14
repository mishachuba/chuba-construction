"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

type GalleryImage = {
  readonly src: string;
  readonly alt: string;
};

type ProjectGalleryProps = {
  images: readonly GalleryImage[];
  title: string;
};

export function ProjectGallery({ images, title }: ProjectGalleryProps) {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const count = images.length;
  const hasMultiple = count > 1;

  const goTo = useCallback(
    (nextIndex: number) => {
      setIndex((nextIndex + count) % count);
    },
    [count],
  );

  const handleTouchStart = (event: React.TouchEvent) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event: React.TouchEvent) => {
    if (touchStartX.current === null) return;

    const delta = touchStartX.current - event.changedTouches[0].clientX;
    if (Math.abs(delta) > 40) {
      goTo(delta > 0 ? index + 1 : index - 1);
    }
    touchStartX.current = null;
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (!hasMultiple) return;

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goTo(index - 1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      goTo(index + 1);
    }
  };

  return (
    <div
      className="relative aspect-[3/4] overflow-hidden bg-warm-200"
      onTouchStart={hasMultiple ? handleTouchStart : undefined}
      onTouchEnd={hasMultiple ? handleTouchEnd : undefined}
      onKeyDown={hasMultiple ? handleKeyDown : undefined}
      tabIndex={hasMultiple ? 0 : undefined}
      aria-roledescription={hasMultiple ? "carousel" : undefined}
      aria-label={hasMultiple ? `${title} photos` : undefined}
    >
      <div
        className={`flex h-full ${hasMultiple ? "transition-transform duration-300 ease-out" : ""}`}
        style={hasMultiple ? { transform: `translateX(-${index * 100}%)` } : undefined}
      >
        {images.map((image, imageIndex) => (
          <div key={image.src} className="relative h-full w-full shrink-0">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover"
              priority={imageIndex === 0}
            />
          </div>
        ))}
      </div>

      {hasMultiple && (
        <>
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            className="absolute top-1/2 left-1.5 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-brand-navy shadow-md transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal sm:left-2 sm:h-10 sm:w-10"
            aria-label="Previous photo"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={() => goTo(index + 1)}
            className="absolute top-1/2 right-1.5 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-brand-navy shadow-md transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal sm:right-2 sm:h-10 sm:w-10"
            aria-label="Next photo"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>

          <div
            className="absolute right-0 bottom-2 left-0 flex justify-center gap-1.5"
            role="tablist"
            aria-label="Photo navigation"
          >
            {images.map((image, dotIndex) => (
              <button
                key={image.src}
                type="button"
                role="tab"
                aria-selected={dotIndex === index}
                aria-label={`Photo ${dotIndex + 1} of ${count}`}
                onClick={() => goTo(dotIndex)}
                className={`h-2 w-2 rounded-full transition ${
                  dotIndex === index
                    ? "scale-110 bg-white"
                    : "bg-white/50 hover:bg-white/80"
                }`}
              />
            ))}
          </div>

          <span className="absolute top-2 right-2 rounded-full bg-brand-navy/70 px-2 py-0.5 text-xs font-medium text-white">
            {index + 1}/{count}
          </span>
        </>
      )}
    </div>
  );
}
