import React, { useEffect, useMemo, useRef, useState } from "react";

type Img = { src: string; alt: string };

type Props = {
  images: Img[];
  className?: string;

  showDots?: boolean;
  showArrows?: boolean;
  autoplay?: boolean;
  intervalMs?: number;

  // Control visual
  aspectClassName?: string; // ej: "h-[520px]"
  fit?: "cover" | "contain";
};

export default function ImageCarousel({
  images,
  className = "",
  showDots = true,
  showArrows = true,
  autoplay = false,
  intervalMs = 3500,
  aspectClassName = "h-[460px] md:h-[620px]",
  fit = "cover",
}: Props) {
  const [index, setIndex] = useState(0);

  const count = images.length;
  const hasMany = count > 1;

  const goTo = (i: number) => {
    if (!hasMany) return;
    setIndex((i + count) % count);
  };

  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  // autoplay
  useEffect(() => {
    if (!autoplay || !hasMany) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % count);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [autoplay, intervalMs, count, hasMany]);

  // Swipe mobile
  const startX = useRef<number | null>(null);
  const deltaX = useRef<number>(0);

  const onTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
    deltaX.current = 0;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (startX.current == null) return;
    deltaX.current = e.touches[0].clientX - startX.current;
  };

  const onTouchEnd = () => {
    if (startX.current == null) return;

    const threshold = 50;
    const dx = deltaX.current;

    if (dx > threshold) prev();
    if (dx < -threshold) next();

    startX.current = null;
    deltaX.current = 0;
  };

  const trackStyle = useMemo(
    () => ({ transform: `translateX(-${index * 100}%)` }),
    [index]
  );

  const objectClass =
    fit === "contain"
      ? "object-contain bg-black"
      : "object-cover";

  return (
    <div className={`relative w-full ${className}`}>
      <div
        className={`overflow-hidden rounded-2xl shadow-md ${aspectClassName}`}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="flex h-full w-full transition-transform duration-500 ease-out"
          style={trackStyle}
        >
          {images.map((img, i) => (
            <div key={i} className="min-w-full h-full">
              <img
                src={img.src}
                alt={img.alt}
                className={`w-full h-full ${objectClass} select-none`}
                draggable={false}
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>

      {showArrows && hasMany && (
        <>
          <button
            type="button"
            aria-label="Anterior"
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black rounded-full w-10 h-10 shadow flex items-center justify-center"
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Siguiente"
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black rounded-full w-10 h-10 shadow flex items-center justify-center"
          >
            ›
          </button>
        </>
      )}

      {showDots && hasMany && (
        <div className="mt-4 flex items-center justify-center gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Ir a imagen ${i + 1}`}
              onClick={() => goTo(i)}
              className={`h-2.5 rounded-full transition-all ${
                i === index ? "w-8 bg-primary" : "w-2.5 bg-gray-300"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
