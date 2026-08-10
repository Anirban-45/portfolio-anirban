"use client";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Footer = () => {
  const pathname = usePathname();

  const defaultPages = ["/", "/about-me", "/my-approach", "/work"];
  const defaultStyle = "bg-monochrome110 text-monochrome00";

  return (
    <footer
      className={`px-6 sm:px-10 md:px-16 lg:px-[120px] pt-16 sm:pt-20 lg:pt-[84px] pb-10 sm:pb-14 lg:pb-[56px] ${
        defaultPages.includes(pathname)
          ? "bg-monochrome00 text-monochrome90"
          : defaultStyle
      }`}
    >
      <div className="container flex flex-col gap-8 sm:gap-10">
        {/* Top - Salutations */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-0">
          <div className="flex flex-col gap-2 sm:gap-[10px] font-semibold text-3xl sm:text-4xl lg:text-5xl">
            <div className="flex items-center justify-start gap-4 sm:gap-6">
              <div className="w-12 h-12 sm:w-[60px] sm:h-[60px] rounded-full shrink-0">
                <Image
                  src="/testimonials/Pieter_profile3.png"
                  width={64}
                  height={64}
                  alt="Anirban"
                />
              </div>
              <h2>Thank You</h2>
            </div>
            <div>
              <h2
                className={`${
                  defaultPages.includes(pathname)
                    ? "text-matchaBase"
                    : "text-matcha20"
                }`}
              >
                for stopping by
              </h2>
            </div>
          </div>

          <div
            className={`flex flex-row md:flex-col items-start md:items-end font-medium text-base sm:text-lg lg:text-xl font-plusJakartaSans gap-4 sm:gap-6 flex-wrap ${
              defaultPages.includes(pathname)
                ? "text-monochrome90"
                : "text-monochrome00"
            }`}
          >
            <button
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Back to top
            </button>
            <Link href={"/"}>Writeups</Link>
            <button
              onClick={() =>
                window.open(
                  "https://www.dropbox.com/scl/fi/ddf6opz8hcs16cg569kz0/CV_Anirban_2026.pdf?rlkey=nc2q719oewusyz0b5wk7n9l4o&st=ylqtfr33&dl=0",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              Resume
            </button>
          </div>
        </div>

        {/* Horizontal Line */}
        <div className="w-full bg-[#6B6B6B]">
          <hr className="h-[1.5px]" />
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-4 sm:gap-6 lg:gap-10">
          <Button
            variant={"common"}
            onClick={() =>
              navigator.clipboard.writeText("anirban.tasfin.azad@gmail.com")
            }
            className={`text-sm sm:text-base lg:text-lg font-semibold flex items-center justify-center font-plusJakartaSans h-11 sm:h-12 px-4 sm:px-7 break-all sm:break-normal ${
              defaultPages.includes(pathname)
                ? "text-monochrome90 border-[2px] border-monochrome90"
                : "text-monochrome00 bg-monochrome110 border-[1.5px] border-monochrome00"
            }`}
          >
            anirban.tasfin.azad@gmail.com
          </Button>
          <Button
            variant={"common"}
            onClick={() => window.open("tel:+37254619445")}
            className={`text-sm sm:text-base lg:text-lg font-semibold flex items-center justify-center font-plusJakartaSans h-11 sm:h-12 px-4 sm:px-7 ${
              defaultPages.includes(pathname)
                ? "text-monochrome90 border-[2px] border-monochrome90"
                : "text-monochrome00 bg-monochrome110 border-[1.5px] border-monochrome00"
            }`}
          >
            +372 546 19445
          </Button>
        </div>

        {/* Bottom - Copyright & Socials */}
        <div className="flex flex-col sm:flex-row items-start justify-between gap-8 mt-5 font-semibold">
          <div className="order-2 sm:order-1 flex flex-col items-start justify-start gap-3 sm:gap-4">
            <div
              className={`text-lg sm:text-xl font-plusJakartaSans ${
                defaultPages.includes(pathname)
                  ? "text-matchaBase"
                  : "text-matcha20"
              }`}
            >
              Version
            </div>
            <div className="font-plusJakartaSans text-sm sm:text-base">
              &copy; {new Date().getFullYear()} Anirban Tasfin Azad
            </div>
          </div>

          <div className="order-1 sm:order-2 flex flex-col items-start justify-start gap-3 sm:gap-4">
            <div
              className={`text-lg sm:text-xl font-plusJakartaSans ${
                defaultPages.includes(pathname)
                  ? "text-matchaBase"
                  : "text-matcha20"
              }`}
            >
              Socials
            </div>
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 font-plusJakartaSans text-sm sm:text-base">
              <Link href={"https://www.instagram.com/qitzuphyn/"}>
                Instagram
              </Link>
              <Link href={"https://linkedin.com/in/anirban-tasfin-azad/"}>
                LinkedIn
              </Link>
              <Link href={"https://dribbble.com/qitzuphyn"}>Dribbble</Link>
              <Link href={"https://github.com/Anirban-45/"}>GitHub</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
