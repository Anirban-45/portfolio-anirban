"use client";

import { LucideMouse } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { ComingSoonModal } from "../ui/comingSoonModal";
// import HeroSVG from "./HeroSVG";

const Hero = () => {
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  return (
    <section className="w-full min-h-[92vh] lg:h-[92vh] text-monochrome90 bg-hero-pattern bg-cover bg-center relative">
	    <div
	      className="absolute w-full bottom-0 px-6 lg:px-[120px] hero-in"
	      style={{ animationDelay: "520ms" }}
	    >
	      <div className="container px-0 lg:px-[120px] h-auto lg:h-28 py-4 lg:py-0 flex flex-row items-center justify-between gap-2">
	        <p className="text-black font-normal text-sm lg:text-base leading-[21.6px]">
	          Tallinn, Estonia
	        </p>
	        <LucideMouse
	          width={28}
	          height={38}
	          className="animate-mouseMove lg:w-9 lg:h-12"
	        />
	        <p className="text-black font-normal text-sm lg:text-base leading-[21.6px]">
	          [Scroll Down]
	        </p>
	      </div>
	    </div>

      <div className="container px-6 lg:px-[120px] pt-32 lg:pt-[184px] pb-40 lg:pb-[253px] min-h-full lg:h-full">
        <div className="flex flex-col lg:flex-row h-full items-center justify-center gap-10 lg:gap-[100px] relative">
          <div className="relative hero-in" style={{ animationDelay: "120ms" }}>
            <Image
              src="/hero-avatar.png"
              width={160}
              height={160}
              alt="hero-avatar"
              className="py-4 lg:py-[31.5px] w-[120px] lg:w-[160px] h-auto"
              priority
            />{" "}
            <Image
              src="/hero-quadrant.png"
              width={76.5}
              height={68}
              className="hidden lg:block absolute -top-[5%] -left-[20%] -translate-x-1/2 -translate-y-1/2 origin-bottom-right animate-swing"
              alt="hero-quadrant"
            />
          </div>
          <h1
            className="relative max-w-[700px] font-[550] text-[32px] lg:text-[48px] leading-[1.25] lg:leading-[60.48px] text-center lg:text-left hero-in"
            style={{ animationDelay: "260ms" }}
          >
            <button
              type="button"
              onClick={() => setDemoModalOpen(true)}
              className="group relative lg:absolute isolate overflow-hidden border-2 border-black rounded-full py-1.5 px-4 mb-4 lg:mb-0 mx-auto lg:mx-0 lg:-top-[40%] lg:left-[19.2%] lg:-translate-x-1/2 lg:translate-y-1/2 flex justify-center items-center gap-3 transition-colors duration-300"
            >
              <span
                aria-hidden="true"
                className="absolute inset-0 -z-10 origin-left scale-x-0 bg-matcha20 transition-transform duration-300 ease-out group-hover:scale-x-100"
              />
              <Image
                src="/play-polygon.svg"
                width={10}
                height={18}
                alt="play-polygon"
                className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5"
              />
              <p className="relative z-10 font-semibold uppercase text-sm lg:text-base align-middle transition-colors duration-300">
                Watch my demo video
              </p>
            </button>

            <span className="block font-semibold text-[40px] lg:text-[72px] leading-[1.1] lg:leading-[90.72px] pb-2 lg:pb-3">
              Hello, I am Anirban. <br />
            </span>
            And I work as a <span className="text-[#7C9C6A]">UI/UX</span> and{" "}
            <br />
            <span className="text-[#9A7E6F]">Product Designer</span>.
            <Image
              src="/hero-whisker-lg.png"
              width={60}
              height={67.5}
              alt="hero-whisker-lg"
              className="hidden lg:block absolute -bottom-[5%] -left-[4%] -translate-x-1/2 translate-y-1/2"
            />
            <Image
              src="/hero-whisker-sm.png"
              width={36}
              height={40.6}
              alt="hero-whisker-lg"
              className="hidden lg:block absolute -top-[54%] left-[42%] -translate-x-1/2 translate-y-1/2"
            />
            <Image
              src="/hero-saturn.png"
              width={60}
              height={44.2}
              alt="hero-saturn"
              className="hidden lg:block absolute -bottom-[25%] right-[17%] translate-x-1/2 translate-y-1/2"
            />
            <Image
              src="/hero-asterisk.png"
              width={32}
              height={36}
              alt="hero-asterisk"
              className="hidden lg:block absolute -top-[25%] -right-[12%] translate-x-1/2 -translate-y-1/2"
            />
          </h1>
        </div>
      </div>

      <ComingSoonModal
        open={demoModalOpen}
        onCloseAction={() => setDemoModalOpen(false)}
      />
    </section>
  );
};

export default Hero;
