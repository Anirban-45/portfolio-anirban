"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Preloader from "@/components/Preloader";
import { getLenis } from "@/components/LenisScroll";

/** Minimum time the loader stays up, so it never just flickers. */
const MIN_VISIBLE = 700;
/** Hard ceiling — never hold the page hostage to a slow image. */
const MAX_VISIBLE = 5000;
/** Must match the exit transition in <Preloader />. */
const EXIT_MS = 600;

const SESSION_KEY = "anirban:intro-played";

/**
 * First-visit intro loader for the homepage.
 *
 * Adds `app-ready` to <html> when the page is revealed — the hero entrance
 * animations in globals.css key off that class, so they fire in sync with
 * the curtain lifting instead of playing behind it.
 */
export default function PageLoader() {
  const pathname = usePathname();
  const [active, setActive] = useState(false);
  const [exiting, setExiting] = useState(false);
  const [progress, setProgress] = useState(0);
  const decided = useRef(false);

  useEffect(() => {
    if (decided.current) return;
    decided.current = true;

    const isHome = pathname === "/";
    const alreadyPlayed =
      typeof window !== "undefined" &&
      window.sessionStorage.getItem(SESSION_KEY) === "1";
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!isHome || alreadyPlayed || reduced) {
      document.documentElement.classList.add("app-ready");
      return;
    }

    setActive(true);
    document.documentElement.classList.add("intro-locked");
    getLenis()?.stop();

    const started = Date.now();
    let ready = false;
    let finished = false;

    // Ease toward 90% while loading, then snap to 100 on ready.
    const tick = window.setInterval(() => {
      setProgress((p) => (ready ? 100 : p + (90 - p) * 0.08 + 0.6));
    }, 90);

    const finish = () => {
      if (finished) return;
      finished = true;
      ready = true;
      setProgress(100);

      const wait = Math.max(0, MIN_VISIBLE - (Date.now() - started));
      window.setTimeout(() => {
        setExiting(true);
        document.documentElement.classList.add("app-ready");
        window.setTimeout(() => {
          setActive(false);
          document.documentElement.classList.remove("intro-locked");
          window.sessionStorage.setItem(SESSION_KEY, "1");
          const lenis = getLenis();
          lenis?.start();
          lenis?.scrollTo(0, { immediate: true });
        }, EXIT_MS);
      }, wait);
    };

    if (document.readyState === "complete") finish();
    else window.addEventListener("load", finish, { once: true });

    const cap = window.setTimeout(finish, MAX_VISIBLE);

    return () => {
      window.clearInterval(tick);
      window.clearTimeout(cap);
      window.removeEventListener("load", finish);
    };
  }, [pathname]);

  if (!active) return null;
  return <Preloader progress={progress} exiting={exiting} />;
}
