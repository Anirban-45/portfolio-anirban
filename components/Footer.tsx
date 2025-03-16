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
      className={`px-[120px] pt-[84px] pb-[56px] ${
        defaultPages.includes(pathname)
          ? "bg-monochrome00 text-monochrome90"
          : defaultStyle
      }`}
    >
      <div className="container flex flex-col gap-10">
        {/* Top - Salutaions */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-[10px] font-semibold text-5xl">
            <div className="flex items-center justify-start gap-6">
              {" "}
              <div className="w-[60px] h-[60px] rounded-full">
                <Image
                  src="/testimonials/Pieter_profile3.png"
                  width={64}
                  height={64}
                  alt="Anirban"
                />
              </div>
              <h2 className="">Thank You</h2>
            </div>
            <div>
              <h2
                className={` ${
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
            className={`flex flex-col items-end font-medium text-xl font-plusJakartaSans gap-6 
                defaultPages.includes(pathname)
                  ? 'text-monochrome00'
                  : 'text-monochrome90'
              }`}
          >
            <button onClick={() => window.scrollTo(0, 0)}>Back to top</button>
            <Link href={"/"}>Writeups</Link>
            <button
              onClick={() =>
                window.open(
                  "https://www.dropbox.com/scl/fi/mo95bg3ecu3g90scei2rf/Resume_Anirban_Tasfin_Azad.pdf?rlkey=i43ihe8n5g6lbjsatm82rszry&st=n8hw4ykj&dl=0"
                )
              }
            >
              Resume
            </button>
          </div>
        </div>
        {/* Horizontal Line */}
        <div className="w-full ">
          <hr className="bg-[#6B6B6B] h-[1px]" />
        </div>
        {/* Buttons */}
        <div className="flex items-center justify-start gap-10 ">
          <Button
            variant={"common"}
            onClick={() => navigator.clipboard.writeText("anirban.tasfin.azad@gmail.com")}
            className={`text-lg font-semibold flex items-center font-plusJakartaSans h-12 px-7 ${
              defaultPages.includes(pathname)
                ? "text-monochrome90 border-[2px] border-monochrome90 "
                : "text-monochrome00 bg-monochrome110 border-[1.5px] border-monochrome00 "
            }`}
          >
            {"anirban.tasfin.azad@gmail.com"}
          </Button>
          <Button
            variant={"common"}
            onClick={() => window.open("tel:+8801926214838")}
            className={`text-lg font-semibold flex items-center font-plusJakartaSans h-12 px-7 ${
              defaultPages.includes(pathname)
                ? "text-monochrome90 border-[2px] border-monochrome90 "
                : "text-monochrome00 bg-monochrome110 border-[1.5px] border-monochrome00 "
            }`}
          >{`+880 192 621 4838`}</Button>
        </div>
        {/* Bottom - Copyright & Socials */}
        <div className="flex items-center justify-between mt-5 font-semibold">
          <div className="flex flex-col items-start justify-start gap-4">
            <div
              className={`text-xl font-plusJakartaSans ${
                defaultPages.includes(pathname)
                  ? "text-matchaBase"
                  : "text-matcha20"
              }`}
            >
              Version
            </div>
            <div className="font-plusJakartaSans">&copy; {new Date().getFullYear()} Anirban Tasfin Azad</div>
          </div>
          <div className="flex flex-col items-start justify-start gap-4 ">
            <div
              className={`text-xl font-plusJakartaSans ${
                defaultPages.includes(pathname)
                  ? "text-matchaBase"
                  : "text-matcha20"
              }`}
            >
              Socials
            </div>
            <div className="flex items-center justify-around gap-6 font-plusJakartaSans">
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
