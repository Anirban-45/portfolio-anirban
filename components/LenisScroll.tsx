"use client";
import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Module-level handle so other client components (e.g. CaseStudyOutline)
 * can drive programmatic scrolling through Lenis instead of fighting it
 * with native `scrollIntoView`.
 */
let lenisInstance: Lenis | null = null;
export const getLenis = () => lenisInstance;

export default function LenisScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1, // Adjust scroll speed
      easing: (t) => 1 - Math.pow(1 - t, 4.2),
    //   touchMultiplier: 2,
    });

    lenisInstance = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      lenisInstance = null;
    };
  }, []);

  return <>{children}</>;
}
