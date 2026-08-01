'use client'
import React from "react";
import { Button } from "../ui/button";
import { LucideMail } from "lucide-react";
import HighFive from "./HighFive";



const Contact = () => {
  return (
    <section className="w-full bg-matchaBad text-monochrome00 rounded-tr-[60px] rounded-tl-[60px] relative">
      <div className=" absolute bg-monochrome110 w-full h-full -z-10"></div>
      <div className="container px-[120px] py-[124px] flex flex-col items-center justify-center gap-[52px]">
        {/* Graphic */}
        <div className="h-[180px] w-[180px] rounded-full bg-monochrome00 relative scroll-in scroll-d1">
          <HighFive
            styleProps={
              "absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            }
          />
        </div>
        {/* Text */}
        <h3 className="text-5xl text-center text-monochrome90 font-semibold leading-[60.5px] scroll-in scroll-d2">
          Tell me about your
          <br />
          <span className=" text-matchaBase">Next project</span>
        </h3>
        {/* Buttons */}
        <div className=" flex items-center justify-center gap-8 leading-[22.7px] scroll-in scroll-d3">
          <Button
            className="flex items-center gap-5 rounded-none px-7 h-12 font-medium text-lg text-monochrome00 bg-monochrome90 hover:text-monochrome90 hover:bg-monochrome00 font-plusJakartaSans"
            onClick={() => window.open("mailto:anirban.tasfin.azad@gmail.com", "_blank")}
          >
            <LucideMail className="!size-6" />
            <p>Email Me</p>
          </Button>
          <Button
            className="rounded-none px-7 h-12 font-medium text-lg text-monochrome90 bg-monochrome00 border-[1.5px] border-monochrome90 hover:text-monochrome00 hover:bg-monochrome90 font-plusJakartaSans"
            onClick={() => window.open("https://wa.me/8801926214838", "_blank")}
          >
            Direct Message
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
