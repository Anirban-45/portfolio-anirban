"use client";
import { useEffect } from "react";
import Lenis from "lenis";

export default function LenisScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1, // Adjust scroll speed
      easing: (t) => 1 - Math.pow(1 - t, 4.2), 
    //   touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}