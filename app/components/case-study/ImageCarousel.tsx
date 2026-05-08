"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useRef, useState, useMemo } from "react";

const PARALLAX_FACTOR = 0.1;

const EMBLA_OPTIONS = {
  loop: true,
  align: "center" as const,
  slidesToScroll: 1,
  containScroll: false as const,
  watchSlides: true,
};

export default function ImageCarousel({ images, title }: { images: string[]; title: string }) {
  // Memoize plugins to prevent re-initialization on every render
  const plugins = useMemo(() => [Autoplay({ delay: 5000, stopOnInteraction: true })], []);
  
  const [emblaRef, emblaApi] = useEmblaCarousel(EMBLA_OPTIONS, plugins);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onParallax = useCallback(() => {
    if (!emblaApi) return;
    const progress = emblaApi.scrollProgress();
    const snaps = emblaApi.scrollSnapList();
    const slidesInView = emblaApi.slidesInView();

    slidesInView.forEach((i) => {
      if (snaps[i] === undefined) return;

      let distance = progress - snaps[i];
      const loop = emblaApi.internalEngine().options.loop;

      if (loop) {
        if (distance > 0.5) distance -= 1;
        if (distance < -0.5) distance += 1;
      }

      const absDist = Math.min(1, Math.abs(distance));
      const inner = slideRefs.current[i];
      if (inner) {
        const offset = distance * PARALLAX_FACTOR * 100;
        const scale = 1 - absDist * 0.08;
        const opacity = 1 - absDist * 0.5;

        inner.style.transform = `translateX(${offset}%) scale(${scale})`;
        inner.style.opacity = `${opacity}`;
      }
    });

    // Reset others
    emblaApi.slideNodes().forEach((_, i) => {
      if (!slidesInView.includes(i)) {
        const inner = slideRefs.current[i];
        if (inner) {
          inner.style.transform = '';
          inner.style.opacity = '0'; // Keep hidden when not in view for smoother transitions
        }
      }
    });
  }, [emblaApi]);

  const [snapCount, setSnapCount] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const updateSnaps = () => {
      const currentSnaps = emblaApi.scrollSnapList();
      setSnapCount(currentSnaps.length);
      onSelect();
      onParallax();
    };

    updateSnaps();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", updateSnaps);
    emblaApi.on("scroll", onParallax);
    emblaApi.on("resize", updateSnaps);
    
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", updateSnaps);
      emblaApi.off("scroll", onParallax);
      emblaApi.off("resize", updateSnaps);
    };
  }, [emblaApi, onSelect, onParallax]);

  return (
    <div style={{ position: "relative", width: "100%", padding: "0 clamp(1rem, 3vw, 4rem)" }}>
      <div ref={emblaRef} style={{ overflow: "hidden", borderRadius: "1rem" }}>
        <div style={{ display: "flex", userSelect: "none" }}>
          {images.map((src, i) => (
            <div
              key={i}
              style={{
                flex: "0 0 calc(clamp(280px, 45vw, 520px) * 1.5397)",
                minWidth: 0,
                paddingRight: "16px",
                boxSizing: "content-box",
                overflow: "hidden",
                height: "clamp(280px, 45vw, 520px)",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: "100%",
                  borderRadius: "0.75rem",
                  border: "1px solid rgba(0,0,0,0.06)",
                  overflow: "hidden",
                  position: "relative",
                  background: "#f8fafc",
                }}
              >
                <div
                  ref={(el) => {
                    slideRefs.current[i] = el;
                  }}
                  style={{
                    willChange: "transform",
                    height: "100%",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={src}
                    alt={`${title} screenshot ${i + 1}`}
                    width={1512}
                    height={982}
                    style={{
                      display: "block",
                      width: "110%",
                      maxWidth: "110%",
                      height: "100%",
                      position: "absolute",
                      top: "0",
                      left: "-5%",
                      objectFit: "cover",
                    }}
                    priority={i < 2}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={scrollPrev}
        aria-label="Previous slide"
        style={{
          position: "absolute",
          top: "50%",
          left: "12px",
          transform: "translateY(-50%)",
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.9)",
          border: "1px solid rgba(0,0,0,0.08)",
          boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 2,
        }}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M10 12L6 8l4-4" stroke="var(--color-text-dark)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button
        onClick={scrollNext}
        aria-label="Next slide"
        style={{
          position: "absolute",
          top: "50%",
          right: "12px",
          transform: "translateY(-50%)",
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.9)",
          border: "1px solid rgba(0,0,0,0.08)",
          boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 2,
        }}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M6 4l4 4-4 4" stroke="var(--color-text-dark)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {snapCount > 1 && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "8px",
            padding: "20px 0 0",
          }}
        >
          {Array.from({ length: snapCount }).map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              style={{
                width: selectedIndex === i ? "24px" : "8px",
                height: "8px",
                borderRadius: "4px",
                background: selectedIndex === i ? "var(--color-accent)" : "rgba(0,0,0,0.15)",
                border: "none",
                cursor: "pointer",
                transition: "width 0.3s ease, background-color 0.3s ease",
                padding: 0,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
