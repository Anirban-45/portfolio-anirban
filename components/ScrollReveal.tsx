"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Global driver for the `.scroll-in` utility class.
 *
 * Mounted once in the root layout. Watches every element carrying
 * `.scroll-in` and adds `.is-in` when it enters the viewport, which is what
 * triggers the CSS animation. Nothing to wire up per element — you just add
 * the class in your markup.
 *
 *   <h2 className="scroll-in">…</h2>
 *   <p className="scroll-in scroll-d2">…</p>
 *
 * Elements added later (client-side navigation, conditional renders, list
 * items) are picked up automatically via MutationObserver.
 */

// Fires when the element's top edge has risen this far past the fold.
const ROOT_MARGIN = "0px 0px -12% 0px";
const THRESHOLD = 0.05;

const ScrollReveal = () => {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;

    // Only hide elements once we know JS is running, so the content stays
    // visible if this script ever fails to load.
    root.classList.add("js-reveal");

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      document
        .querySelectorAll<HTMLElement>(".scroll-in")
        .forEach((el) => el.classList.add("is-in"));
      return () => root.classList.remove("js-reveal");
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          const repeats = el.classList.contains("scroll-in-repeat");

          if (entry.isIntersecting) {
            el.classList.add("is-in");
            if (!repeats) observer.unobserve(el);
          } else if (repeats) {
            // Only reset once it has left downward, so scrolling up past an
            // element doesn't make it flicker.
            if (entry.boundingClientRect.top > 0) el.classList.remove("is-in");
          }
        });
      },
      { rootMargin: ROOT_MARGIN, threshold: THRESHOLD }
    );

    const observed = new WeakSet<Element>();

    const scan = () => {
      document.querySelectorAll<HTMLElement>(".scroll-in").forEach((el) => {
        if (observed.has(el)) return;
        observed.add(el);

        // Anything already on screen at mount (above the fold) reveals
        // immediately rather than waiting for a scroll that may never come.
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add("is-in");
          if (!el.classList.contains("scroll-in-repeat")) return;
        }

        observer.observe(el);
      });
    };

    scan();

    const mutationObserver = new MutationObserver(() => scan());
    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
      root.classList.remove("js-reveal");
    };
  }, [pathname]);

  return null;
};

export default ScrollReveal;
