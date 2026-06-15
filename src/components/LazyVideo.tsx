import { useEffect, useRef, useState } from "react";

interface LazyVideoProps {
  src: string;
  poster?: string;
  className?: string;
  /** Show native playback controls (used in the lightbox). */
  controls?: boolean;
  /** Autoplay (muted, looping) once the video scrolls into view. */
  autoPlay?: boolean;
}

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  typeof window.matchMedia === "function" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * A video that does not download until it is about to enter the viewport
 * (preload="none" + IntersectionObserver). Autoplay is suppressed for visitors
 * who prefer reduced motion. This keeps multi-MB videos off the initial load.
 */
const LazyVideo = ({ src, poster, className, controls = false, autoPlay = false }: LazyVideoProps) => {
  const ref = useRef<HTMLVideoElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setActive(true);
          io.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el || !active) return;
    if (!el.getAttribute("src")) el.setAttribute("src", src);
    if (autoPlay && !prefersReducedMotion()) {
      el.play().catch(() => {
        /* autoplay can be blocked by the browser — that's fine */
      });
    }
  }, [active, src, autoPlay]);

  return (
    <video
      ref={ref}
      poster={poster}
      className={className}
      muted
      loop
      playsInline
      controls={controls}
      preload="none"
    />
  );
};

export default LazyVideo;
