import { LucideMouse } from "lucide-react";
import Image from "next/image";
import React from "react";
// import HeroSVG from "./HeroSVG";

const Hero = () => {
  return (
    <section className=" w-full h-[92vh] text-monochrome90 bg-hero-pattern bg-cover bg-center relative">
      {/* <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-0">
        <HeroSVG />
      </div> */}
      <div className=" absolute w-full bottom-0 px-[120px] hero-in" style={{ animationDelay: "520ms" }}>
        <div className="container px-[120px] h-28 flex items-center justify-between">
          <p className="text-black font-normal text-base leading-[21.6px]">
            Tallinn, Estonia
          </p>
          <LucideMouse width={36} height={48} className=" animate-mouseMove" />
          <p className="text-black font-normal text-base leading-[21.6px]">
            [Scroll Down]
          </p>
        </div>
      </div>
      <div className=" container px-[120px] pt-[184px] pb-[253px] h-full">
        <div className="flex h-full items-center justify-center gap-[100px] relative">
          <div className=" relative hero-in" style={{ animationDelay: "120ms" }}>
            <Image
              src="/hero-avatar.png"
              width={160}
              height={160}
              alt="hero-avatar"
              className="py-[31.5px]"
              priority
            />{" "}
            <Image
              src="/hero-quadrant.png"
              width={76.5}
              height={68}
              className="absolute -top-[5%] -left-[20%] -translate-x-1/2 -translate-y-1/2 origin-bottom-right animate-swing"
              alt="hero-quadrant"
            />
          </div>
					<h1 className=" relative max-w-[700px] font-[550] text-[48px] leading-[60.48px] hero-in" style={{ animationDelay: "260ms" }}>
						<button className="absolute border-2 border-black rounded-full py-1.5 px-4 -top-[40%] left-[19.2%] -translate-x-1/2 translate-y-1/2 flex justify-center gap-3">
							<Image
								src="/play-polygon.svg"
								width={10}
        				height={18}
								alt="play-polygon"
							/>
							<p className="font-semibold uppercase text-base align-middle">Watch my demo video</p>
						</button>
            <span className=" font-semibold text-[72px] leading-[90.72px] pb-3">
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
              className="absolute -bottom-[5%] -left-[4%] -translate-x-1/2 translate-y-1/2"
            />
            <Image
            	src="/hero-whisker-sm.png"
	            width={36}
	            height={40.6}
	            alt="hero-whisker-lg"
	            className="absolute -top-[54%] left-[42%] -translate-x-1/2 translate-y-1/2"
            />
            <Image
              src="/hero-saturn.png"
              width={60}
              height={44.2}
              alt="hero-saturn"
              className="absolute -bottom-[25%] right-[17%] translate-x-1/2 translate-y-1/2"
            />
            <Image
              src="/hero-asterisk.png"
              width={32}
              height={36}
              alt="hero-asterisk"
              className="absolute -top-[25%] -right-[12%] translate-x-1/2 -translate-y-1/2"
            />
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
