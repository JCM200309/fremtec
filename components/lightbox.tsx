import React, { useEffect } from "react";

type Img = { src: string; alt: string };

type Props = {
  images: Img[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

export default function Lightbox({ images, index, onClose, onPrev, onNext }: Props) {
  const img = images[index];

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, onPrev, onNext]);

  // bloquear scroll del body cuando está abierto
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      onMouseDown={onClose}
    >
      <div
        className="relative w-full max-w-6xl"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Cerrar"
          onClick={onClose}
          className="absolute -top-12 right-0 text-white/90 hover:text-white text-3xl"
        >
          ✕
        </button>

        <div className="relative bg-black rounded-2xl overflow-hidden">
          <img
            src={img.src}
            alt={img.alt}
            className="w-full max-h-[82vh] object-contain select-none"
            draggable={false}
          />

          <button
            type="button"
            aria-label="Anterior"
            onClick={onPrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/15 hover:bg-white/25 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl"
          >
            ‹
          </button>

          <button
            type="button"
            aria-label="Siguiente"
            onClick={onNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/15 hover:bg-white/25 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl"
          >
            ›
          </button>

          <div className="absolute bottom-0 left-0 right-0 bg-black/40 text-white px-4 py-3 text-sm">
            <div className="flex items-center justify-between gap-3">
              <span className="truncate">{img.alt}</span>
              <span className="opacity-80 tabular-nums">
                {index + 1} / {images.length}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
