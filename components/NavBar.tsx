"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import NavLogo from "./NavLogo";
import { Button } from "./ui/button";
import { LucideSquareArrowOutUpRight } from "lucide-react";
import { useRouter } from "next/navigation";
import NavLink from "./NavLink";
import CtaButton from "./ui/ctaButton";

const NavBar = () => {
  const [isSidebarActive] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!isSidebarActive) {
      const body = document.body;
      let lastScroll = 0;

      window.addEventListener("scroll", () => {
        const currentScroll = window.scrollY;
        if (currentScroll <= 0) {
          body.classList.remove("scroll-up");
        }

        if (
          currentScroll > lastScroll &&
          !body.classList.contains("scroll-down")
        ) {
          body.classList.remove("scroll-up");
          body.classList.add("scroll-down");
        }

        if (
          currentScroll < lastScroll &&
          body.classList.contains("scroll-down")
        ) {
          body.classList.add("scroll-up");
          body.classList.remove("scroll-down");
        }

        lastScroll = currentScroll;
      });
    } else {
      document.body.classList.toggle("scroll-down");
    }
    return () => {};
  }, [isSidebarActive]);

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleNavigate = (path: string) => {
    setIsMobileMenuOpen(false);
    router.push(path);
  };

  return (
    <>
      <header className="flex flex-col py-4 fixed top-0 w-full z-50 bg-background/95 transition-all duration-500">
        <nav className="w-full container flex items-center justify-between gap-4 sm:gap-6 lg:gap-10 px-6 sm:px-10 md:px-16 lg:px-[120px] mx-auto">
          <div>
            <Link href={"/"}>
              <NavLogo />
            </Link>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 lg:gap-[52px]">
            {/* Desktop links — hidden below lg */}
            <div className="hidden lg:flex items-center gap-8 font-plusJakartaSans text-link">
              <NavLink href="/work">Work</NavLink>
              <NavLink href="/about-me">About Me</NavLink>
              <Button
                variant={"resume"}
                className="text-base flex items-center gap-2 p-0 font-plusJakartaSans"
                onClick={() =>
                  window.open(
                    "https://www.dropbox.com/scl/fi/ddf6opz8hcs16cg569kz0/CV_Anirban_2026.pdf?rlkey=nc2q719oewusyz0b5wk7n9l4o&st=ylqtfr33&dl=0",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
              >
                Resume
                <LucideSquareArrowOutUpRight width={20} height={20} />
              </Button>
            </div>

            {/* CTA — visible at all breakpoints */}
            <CtaButton onClick={() => router.push("/contact")}>
              Let&apos;s Connect!
            </CtaButton>

            {/* Animated hamburger — only below lg */}
            <button
              type="button"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="lg:hidden relative flex items-center justify-center h-11 w-11 shrink-0"
            >
              <span className="relative w-6 h-5 flex flex-col justify-between">
                <span
                  className={`block h-[2px] w-full bg-monochrome110 rounded-full transition-all duration-300 ease-out origin-center ${
                    isMobileMenuOpen ? "translate-y-[9px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`block h-[2px] w-full bg-monochrome110 rounded-full transition-all duration-300 ease-out ${
                    isMobileMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`block h-[2px] w-full bg-monochrome110 rounded-full transition-all duration-300 ease-out origin-center ${
                    isMobileMenuOpen ? "-translate-y-[9px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </nav>

        {/* Mobile/tablet menu panel — now part of header's own flow, expands vertically */}
        <div
          className={`lg:hidden w-full overflow-hidden transition-all duration-300 ease-out ${
            isMobileMenuOpen ? "max-h-[420px] opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"
          }`}
        >
          <div className="w-full border-t border-monochrome90/10">
            <div className="flex flex-col gap-6 px-6 sm:px-10 pt-6 pb-2 font-plusJakartaSans">
              <button
                type="button"
                onClick={() => handleNavigate("/work")}
                className="text-left text-lg font-medium"
              >
                Work
              </button>
              <button
                type="button"
                onClick={() => handleNavigate("/about-me")}
                className="text-left text-lg font-medium"
              >
                About Me
              </button>
              <button
                type="button"
                onClick={() =>
                  window.open(
                    "https://www.dropbox.com/scl/fi/ddf6opz8hcs16cg569kz0/CV_Anirban_2026.pdf?rlkey=nc2q719oewusyz0b5wk7n9l4o&st=ylqtfr33&dl=0",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
                className="flex items-center gap-2 text-left text-lg font-semibold text-matchaBase"
              >
                Resume
                <LucideSquareArrowOutUpRight width={18} height={18} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Backdrop — sits behind the header/menu, in front of page content */}
      <div
        onClick={() => setIsMobileMenuOpen(false)}
        className={`lg:hidden fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ease-out ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />
    </>
  );
};

export default NavBar;
