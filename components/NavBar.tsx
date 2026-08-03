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
      // document.querySelector("body").style.overflow = "hidden";
      document.body.classList.toggle("scroll-down");
    }
    console.log(isSidebarActive);
    return () => {
      // document.querySelector("body").style.overflow = "auto";
    };
  }, [isSidebarActive]);
  return (
    <header
      className={`flex py-4 fixed top-0 w-full z-50 bg-background/95 transition-all duration-500`}
    >
      <nav className="container flex items-center justify-between gap-10 px-[120px] mx-auto">
        <div>
          <Link href={"/"} className="">
            <NavLogo />
          </Link>
        </div>
        <div className="flex items-center gap-[52px]">
          <div className="text-link flex items-center gap-8 font-plusJakartaSans">
            <NavLink href="/work">Work</NavLink>
            <NavLink href="/about-me">About Me</NavLink>
            <Button
              variant={"resume"}
              className="text-base flex items-center gap-2 p-0 font-plusJakartaSans"
              onClick={() =>
                window.open(
                  "https://www.dropbox.com/scl/fi/ddf6opz8hcs16cg569kz0/CV_Anirban_2026.pdf?rlkey=nc2q719oewusyz0b5wk7n9l4o&st=ylqtfr33&dl=0", "_blank", "noopener,noreferrer"
                )
              }
            >
              Resume
              <LucideSquareArrowOutUpRight width={20} height={20} />
            </Button>
          </div>
          <CtaButton
            onClick={() => router.push("/contact")}
          >
            Let's Connect!
          </CtaButton>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
