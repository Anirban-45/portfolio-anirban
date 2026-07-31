"use client";

import { useCallback, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { getLenis } from "@/components/LenisScroll";

type Item = { id: string; title: string };

/** How early (px) the footer should start fading the rail out. */
const FOOTER_LEAD = 240;

/**
 * Medium-style section rail.
 *
 * Auto-discovers every `<ProjectPara>` on the page via the
 * `data-outline-title` attribute, so there is no list to maintain.
 * Renders nothing on pages with fewer than two sections, and fades out
 * while the cover image is on screen or the footer is approaching.
 */
export default function CaseStudyOutline() {
  const [items, setItems] = useState<Item[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [atCover, setAtCover] = useState(true);
  const [nearFooter, setNearFooter] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>("[data-outline-title]")
    ).filter((n) => n.id);

    if (nodes.length < 2) {
      setItems([]);
      setActiveId(null);
      return;
    }

    setItems(nodes.map((n) => ({ id: n.id, title: n.dataset.outlineTitle! })));

    // The observer is only a cheap trigger; positions are re-read live so we
    // never act on stale geometry.
    const recompute = () => {
      const line = window.innerHeight * 0.3;
      let current = nodes[0];
      for (const n of nodes) {
        if (n.getBoundingClientRect().top <= line) current = n;
      }
      setActiveId(current.id);
    };

    const io = new IntersectionObserver(recompute, {
      rootMargin: "-15% 0px -70% 0px",
      threshold: 0,
    });
    nodes.forEach((n) => io.observe(n));

    // Sections shift as images decode; keep the active dash honest.
    const ro = new ResizeObserver(recompute);
    ro.observe(document.body);

    recompute();

    return () => {
      io.disconnect();
      ro.disconnect();
    };
  }, [pathname]);

  // Visibility boundaries: hide over the cover image and near the footer.
  useEffect(() => {
    const cover = document.querySelector<HTMLElement>(
      '[data-outline-boundary="top"]'
    );
    const footer = document.querySelector<HTMLElement>("footer");

    // No cover on this page? Then there is nothing to hide behind.
    setAtCover(Boolean(cover));
    setNearFooter(false);

    const observers: IntersectionObserver[] = [];

    if (cover) {
      const coverIo = new IntersectionObserver(
        ([entry]) => setAtCover(entry.isIntersecting),
        { threshold: 0 }
      );
      coverIo.observe(cover);
      observers.push(coverIo);
    }

    if (footer) {
      // Growing the root's bottom edge makes the footer register as
      // "intersecting" while it is still below the fold.
      const footerIo = new IntersectionObserver(
        ([entry]) => setNearFooter(entry.isIntersecting),
        { threshold: 0, rootMargin: `0px 0px ${FOOTER_LEAD}px 0px` }
      );
      footerIo.observe(footer);
      observers.push(footerIo);
    }

    return () => observers.forEach((o) => o.disconnect());
  }, [pathname, items.length]);

  const go = useCallback((id: string) => {
    const lenis = getLenis();
    if (lenis) {
      lenis.scrollTo(`#${id}`, { offset: -120, duration: 1.1 });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    window.history.replaceState(null, "", `#${id}`);
  }, []);

  // Smooth-scroll to a deep link (/work/paphos-web#research) once mounted.
  useEffect(() => {
    if (items.length < 2) return;
    const hash = window.location.hash.slice(1);
    if (!hash) return;
    if (!items.some((i) => i.id === hash)) return;
    const t = window.setTimeout(() => go(hash), 300);
    return () => window.clearTimeout(t);
  }, [items, go]);

  if (items.length < 2) return null;

  const hidden = atCover || nearFooter;

  return (
    <nav
      aria-label="Case study sections"
      aria-hidden={hidden}
      inert={hidden ? true : undefined}
      className={`group hidden sc1248:flex fixed right-8 top-1/2 -translate-y-1/2 z-40 flex-col items-end gap-1.5 transition-all duration-500 ease-out motion-reduce:transition-none ${
        hidden
          ? "pointer-events-none opacity-0 translate-x-3"
          : "opacity-100 translate-x-0"
      }`}
    >
      {items.map((item) => {
        const active = item.id === activeId;
        return (
          <button
            key={item.id}
            type="button"
            onClick={() => go(item.id)}
            aria-current={active ? "true" : undefined}
            title={item.title}
            className="flex items-center justify-end gap-2 rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-matcha60"
          >
            <span
              className={`whitespace-nowrap font-plusJakartaSans text-xs opacity-0 translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 motion-reduce:transition-none ${
                active ? "text-matcha60 font-medium" : "text-[#B2B2AF]"
              }`}
            >
              {item.title}
            </span>
            <span
              className={`h-[2px] rounded-full transition-all duration-300 motion-reduce:transition-none ${
                active
                  ? "w-5 bg-matcha60"
                  : "w-3 bg-monochrome30 group-hover:w-4"
              }`}
            />
          </button>
        );
      })}
    </nav>
  );
}
