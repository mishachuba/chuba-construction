"use client";

import { useCallback, useEffect, useState } from "react";
import { X } from "lucide-react";
import {
  ProjectGallery,
  type GalleryMedia,
} from "@/components/ProjectGallery";

type ProjectGalleryWithLightboxProps = {
  media: readonly GalleryMedia[];
  title: string;
};

export function ProjectGalleryWithLightbox({
  media,
  title,
}: ProjectGalleryWithLightboxProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const closeLightbox = useCallback(() => {
    setIsOpen(false);
  }, []);

  const openLightbox = useCallback(
    (event: React.MouseEvent | React.KeyboardEvent) => {
      if (
        "target" in event &&
        (event.target as HTMLElement).closest("button")
      ) {
        return;
      }
      setIsOpen(true);
    },
    [],
  );

  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLightbox();
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, closeLightbox]);

  return (
    <>
      <div
        role="button"
        tabIndex={0}
        aria-label={`Open ${title} gallery`}
        onClick={openLightbox}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            openLightbox(event);
          }
        }}
        className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2"
      >
        <ProjectGallery
          media={media}
          title={title}
          index={index}
          onIndexChange={setIndex}
        />
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-[100]"
          role="dialog"
          aria-modal="true"
          aria-label={`${title} gallery`}
        >
          <button
            type="button"
            className="absolute inset-0 bg-brand-navy/90"
            aria-label="Close gallery"
            onClick={closeLightbox}
          />

          <button
            type="button"
            onClick={closeLightbox}
            className="fixed top-3 right-3 z-[120] flex h-10 w-10 items-center justify-center rounded-full border-2 border-white/90 bg-brand-navy/40 text-white backdrop-blur-sm transition hover:border-white hover:bg-brand-navy/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 md:top-4 md:right-4 md:h-11 md:w-11"
            aria-label="Close gallery"
          >
            <X className="h-6 w-6 drop-shadow-md" aria-hidden="true" />
          </button>

          <p className="fixed top-3 left-3 z-[120] max-w-[calc(100%-5rem)] rounded-full bg-brand-navy/80 px-3 py-1 text-sm font-medium text-white shadow-sm md:top-4 md:left-4">
            {title}
          </p>

          <div className="relative z-[105] flex h-full w-full items-center justify-center md:px-4">
            <div className="h-full w-full md:h-auto md:max-h-[90vh] md:max-w-lg md:overflow-hidden md:rounded-xl md:shadow-2xl">
              <ProjectGallery
                media={media}
                title={title}
                index={index}
                onIndexChange={setIndex}
                variant="lightbox"
                className="relative h-full w-full overflow-hidden bg-black md:aspect-[3/4] md:h-auto md:max-h-[90vh]"
                imageSizes="100vw"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
