"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import TestimonialQuote from "./TestimonialQuote";
import { LucideArrowRight, LucideArrowLeft } from "lucide-react";

type Testimonial = {
  desc: string;
  url: string;
  author: string;
  designation: string;
  company: string;
};

const testimonials: Testimonial[] = [
	// {
 //    desc: "Anirban combines design sensitivity with implementation awareness. That made discussions with engineering much smoother and helped reduce back-and-forth during delivery.",
 //    url: "/testimonials/Julia.jpg",
 //    author: "Julia Schitzer",
 //    designation: "Unesco Chair in DCH in MENA",
 //    company: "UNESCO",
 //  },
	{
    desc: "Anirban combines design sensitivity with implementation awareness. That made discussions with engineering much smoother and helped reduce back-and-forth during delivery.",
    url: "/testimonials/Hatim.jpg",
    author: "Hatim Lachyab",
    designation: "QA Engineer",
    company: "Bolt",
	},
	{
    desc: "I am very happy with the work that Anirban Has done in Safewheel. I love the design, and the understanding of technology could be a huge asset for any Startup. He really brings out a great dynamics within any team composition.",
    url: "/testimonials/Pieter_profile1.png",
    author: "Faysal Islam",
    designation: "Co-Founder",
    company: "Safewheel",
  },
	{
    desc: "He has a sharp eye for product detail and can move from user needs to interface decisions very quickly. His Tenure was very effective for our in-house product. Working with him always felt structured, and deligating tasks to him made my life much easier.",
    url: "/testimonials/Raselvai.jpg",
    author: "Md. Shahnewaz Rasel",
    designation: "Director, Business Intel.",
    company: "Streams Tech",
  },
  {
    desc: "Anirban is a sincere and responsive person when it comes to his responsibilities. I used to work with him during our internships. I was amazed how well he is able to grasp a user story, simply by just looking at the products business model. A 10/10 guy to work with.",
    url: "/testimonials/Pieter_profile2.png",
    author: "Najish Mahmood",
    designation: "Software Engineer",
    company: "TherapBD",
  },
];

const chunkArray = <T,>(array: T[], size: number): T[][] => {
  const result: T[][] = [];

  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }

  return result;
};

const Testimonials = (): React.JSX.Element => {
  const [currentPage, setCurrentPage] = useState<number>(0);

  const slides = useMemo<Testimonial[][]>(() => chunkArray(testimonials, 2), []);

  const handlePrev = (): void => {
    setCurrentPage((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = (): void => {
    setCurrentPage((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full bg-monochrome110 text-monochrome00 overflow-hidden">
      <div className="container relative z-10">
        <div className="absolute px-[160px] grid grid-cols-7 h-full w-full -z-10">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="custom-border" />
          ))}
          <div className="custom-border border-r" />
        </div>

        <div className="flex flex-col gap-12 items-center justify-center px-6 md:px-12 xl:px-[120px] pt-[60px] pb-20">
          <div className="w-full flex items-center justify-between gap-6 scroll-in scroll-d1">
            <h3 className="self-start font-semibold text-[32px] md:text-[40px] leading-[50.4px]">
              Testimonials
            </h3>

            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                aria-label="Previous testimonials"
                className="w-12 h-12 rounded-full border border-white/20 text-white hover:bg-white/10 transition"
              >
              <LucideArrowLeft
                width={20}
                height={20}
                className=" m-auto "
              />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next testimonials"
                className="w-12 h-12 rounded-full border border-white/20 text-white hover:bg-white/10 transition"
              >
              <LucideArrowRight
                width={20}
                height={20}
                className=" m-auto "
              />
              </button>
            </div>
          </div>

          <div className="w-full overflow-hidden scroll-in scroll-d2">
            <div
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{
                transform: `translateX(-${currentPage * 100}%)`,
              }}
            >
              {slides.map((slide, slideIndex) => (
                <div
                  key={slideIndex}
                  className="min-w-full grid grid-cols-1 xl:grid-cols-2 gap-9"
                >
                  {slide.map((testimonial, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-start justify-center gap-6 px-[32px] md:px-[42px] py-[40px] md:py-[51px] bg-monochrome90 relative w-full"
                    >
                      <TestimonialQuote styleProps="absolute top-0 left-0" />

                      <p className="font-medium text-lg md:text-xl">
                        {testimonial.desc}
                      </p>

                      <div className="flex items-center gap-6">
                        <div className="w-16 h-16 rounded-full overflow-hidden">
                          <Image
                            src={testimonial.url}
                            width={64}
                            height={64}
                            alt={testimonial.author}
                          />
                        </div>

                        <div className="flex flex-col items-start justify-center gap-2">
                          <h4 className="text-white text-xl md:text-2xl font-semibold">
                            {testimonial.author}
                          </h4>
                          <p className="text-[#CACACA] text-base md:text-xl font-medium">
                            {testimonial.designation},{" "}
                            <span>{testimonial.company}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}

                  {slide.length === 1 && <div className="hidden xl:block" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
