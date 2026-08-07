"use client";

import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";


const works = [
  {
    url: "/work-paphosweb.jpg",
    pageUrl: "/work/paphos-web",
    name: "Paphos Museum Web",
    type: "Website",
    year: "2026",
    description:
      "The new look, guide and branding for Paphos Archaelogical Museum. It introduces the museum, provides access to it's collections and tells Cypruses history like never before.",
  },
  {
    url: "/work-invoicegen.png",
    pageUrl: "/work/invoice-generator",
    name: "invoicegenerator.biz",
    type: "Website/SaaS",
    year: "2025",
    description:
      "invoicegenerator.biz is an Exact Match Domain website catering for multiple purpose of invoices including dashboard for management, shelving & analysis.",
  },
];

const RecentWork = () => {
  const router = useRouter();

  const onViewMore = () => {
    router.push("/work");
  };
  const onWorkClick = (pageUrl: string) => {
    router.push(pageUrl);
  };
  return (
    <section className="w-full bg-monochrome110 text-monochrome00 ">
      <div className="container relative z-10">
        <div className=" absolute px-[160px] grid grid-cols-7 h-full w-full -z-10">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="custom-border" />
          ))}
          <div className="custom-border border-r" />
        </div>
        <div className="flex flex-col items-center gap-16 px-[120px] py-[60px]">
          {/* Title */}
          <h2 className=" self-start font-semibold text-[64px] leading-[80.6px] scroll-in">
            My recent works
          </h2>
          {/* Works */}
          <div className="flex items-center justify-between gap-10 w-full scroll-in scroll-d1">
            {works.map((work) => (
              <div
                data-hover
                key={work.name}
                className="flex flex-col items-center justify-start gap-6 max-w-[50%] hover:cursor-pointer w-full"
                onClick={() => onWorkClick(work.pageUrl)}
              >
                <Image
                  src={work.url}
                  width={580}
                  height={435}
                  alt={work.name}
                  className="rounded-[8px]"
                />
                <div className="flex items-center justify-between w-full">
                  <h4 className="text-[28px] leading-[37.8px] font-medium">
                    {work.name}
                  </h4>
                  <div className="flex items-center gap-3 text-xl font-medium">
                    <div className="px-4 py-1 border-2 border-monochrome00 rounded-[30px] text-monochrome00">
                      <p className="text-[20px]">{work.type}</p>
                    </div>
                    <div className="px-4 py-1 border-2 border-monochrome00 bg-monochrome00 rounded-[30px] text-monochrome90">
                      <p className="text-[20px]">{work.year}</p>
                    </div>
                  </div>
                </div>
                <p className="w-full text-lg font-medium">{work.description}</p>
              </div>
            ))}
          </div>
          {/* Button */}
          <Button
            onClick={() => onViewMore()}
            variant={"default"}
            className=" w-fit h-14 px-9 py-4 text-lg font-semibold font-plusJakartaSans bg-monochrome110 border-monochrome00 border-2 rounded-none hover:bg-monochrome00 hover:text-monochrome90 "
          >
            VIEW MORE
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RecentWork;
