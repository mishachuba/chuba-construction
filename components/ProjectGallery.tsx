"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type GalleryMedia =
  | {
      readonly type: "image";
      readonly src: string;
      readonly alt: string;
    }
  | {
      readonly type: "video";
      readonly src: string;
      readonly alt: string;
      readonly poster?: string;
    };

type ProjectGalleryProps = {
  media: readonly GalleryMedia[];
  title: string;
  className?: string;
  imageSizes?: string;
  index?: number;
  onIndexChange?: (index: number) => void;
  variant?: "inline" | "lightbox";
};

export function ProjectGallery({
  media,
  title,
  className = "relative aspect-[3/4] overflow-hidden bg-warm-200",
  imageSizes = "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw",
  index: controlledIndex,
  onIndexChange,
  variant = "inline",
}: ProjectGalleryProps) {
  const [internalIndex, setInternalIndex] = useState(0);
  const index = controlledIndex ?? internalIndex;
  const touchStartX = useRef<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const count = media.length;
  const hasMultiple = count > 1;
  const isLightbox = variant === "lightbox";

  const goTo = useCallback(
    (nextIndex: number) => {
      const next = (nextIndex + count) % count;
      if (onIndexChange) {
        onIndexChange(next);
      } else {
        setInternalIndex(next);
      }
    },
    [count, onIndexChange],
  );

  useEffect(() => {
    videoRefs.current.forEach((video, videoIndex) => {
      if (!video || videoIndex === index) return;
      video.pause();
    });
  }, [index]);

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

  const navButtonClass = isLightbox
    ? "absolute top-1/2 left-2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white/90 bg-transparent text-white transition hover:border-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 md:left-4 md:h-12 md:w-12"
    : "absolute top-1/2 left-1.5 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white/90 bg-transparent text-white transition hover:border-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 sm:left-2 sm:h-10 sm:w-10";

  const navButtonRightClass = isLightbox
    ? "absolute top-1/2 right-2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white/90 bg-transparent text-white transition hover:border-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 md:right-4 md:h-12 md:w-12"
    : "absolute top-1/2 right-1.5 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white/90 bg-transparent text-white transition hover:border-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 sm:right-2 sm:h-10 sm:w-10";

  return (
    <div
      className={className}
      onTouchStart={hasMultiple ? handleTouchStart : undefined}
      onTouchEnd={hasMultiple ? handleTouchEnd : undefined}
      onKeyDown={hasMultiple ? handleKeyDown : undefined}
      tabIndex={hasMultiple ? 0 : undefined}
      aria-roledescription={hasMultiple ? "carousel" : undefined}
      aria-label={hasMultiple ? `${title} gallery` : undefined}
    >
      <div
        className={`flex h-full ${hasMultiple ? "transition-transform duration-300 ease-out" : ""}`}
        style={hasMultiple ? { transform: `translateX(-${index * 100}%)` } : undefined}
      >
        {media.map((item, itemIndex) => (
          <div key={item.src} className="relative h-full w-full shrink-0">
            {item.type === "video" ? (
              <video
                key={item.src}
                ref={(element) => {
                  videoRefs.current[itemIndex] = element;
                }}
                src={item.src}
                poster={item.poster}
                controls
                playsInline
                preload="none"
                className="h-full w-full object-cover"
                aria-label={item.alt}
              />
            ) : (
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes={imageSizes}
                className="object-cover"
                priority={itemIndex === 0 && variant === "inline"}
              />
            )}
          </div>
        ))}
      </div>

      {hasMultiple && (
        <>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              goTo(index - 1);
            }}
            className={navButtonClass}
            aria-label="Previous slide"
          >
            <ChevronLeft
              className={`drop-shadow-md ${isLightbox ? "h-6 w-6" : "h-5 w-5"}`}
              aria-hidden="true"
            />
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              goTo(index + 1);
            }}
            className={navButtonRightClass}
            aria-label="Next slide"
          >
            <ChevronRight
              className={`drop-shadow-md ${isLightbox ? "h-6 w-6" : "h-5 w-5"}`}
              aria-hidden="true"
            />
          </button>

          <div
            className="absolute right-0 bottom-2 left-0 z-10 flex justify-center gap-1.5"
            role="tablist"
            aria-label="Gallery navigation"
          >
            {media.map((item, dotIndex) => (
              <button
                key={item.src}
                type="button"
                role="tab"
                aria-selected={dotIndex === index}
                aria-label={
                  item.type === "video"
                    ? `Video ${dotIndex + 1} of ${count}`
                    : `Photo ${dotIndex + 1} of ${count}`
                }
                onClick={(event) => {
                  event.stopPropagation();
                  goTo(dotIndex);
                }}
                className={`h-2 w-2 rounded-full transition ${
                  dotIndex === index
                    ? "scale-110 bg-white"
                    : "bg-white/50 hover:bg-white/80"
                }`}
              />
            ))}
          </div>

          <span
            className={`absolute top-2 z-10 rounded-full bg-brand-navy/70 px-2 py-0.5 text-xs font-medium text-white ${
              isLightbox ? "left-2" : "right-2"
            }`}
          >
            {index + 1}/{count}
          </span>
        </>
      )}
    </div>
  );
}
