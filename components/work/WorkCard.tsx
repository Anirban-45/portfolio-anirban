"use client";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

type workDataProps = {
  workTitle: string;
  workHead: string;
  clientName: string;
  workDesc: string;
  projectType: string;
  workImageURL: string;
  href: string;
};

const WorkCard = ({
  workTitle,
  workHead,
  clientName,
  workDesc,
  projectType,
  workImageURL,
  href,
}: workDataProps) => {
  const router = useRouter();

  const handleNavigation = (href: string) => {
    router.push(`work/${href}`);
  };

  return (
    <div className="flex flex-col lg:flex-row items-start justify-center gap-8 lg:gap-9 text-white scroll-in w-full">
      {/* Left Section */}
      <div className="flex flex-col items-start justify-center gap-4 sm:gap-6 flex-[7] w-full">
        <div className="flex items-center justify-center gap-4 sm:gap-6">
          <div className="w-12 h-12 sm:w-[60px] sm:h-[60px] bg-monochrome00 p-3 sm:p-4 rounded-2xl shrink-0">
            <Image
              src="/layout.png"
              height={28}
              width={28}
              alt="icon-layout"
              className="w-full h-full"
            />
          </div>
          <h4 className="text-lg sm:text-xl lg:text-2xl leading-[1.35] lg:leading-[32.4px] font-medium">
            <span className="font-semibold pr-2">Project:</span>
            {workTitle}
          </h4>
        </div>

        {/* Work Head */}
        <div className="text-2xl sm:text-3xl lg:text-[44px] leading-[1.25] lg:leading-[59.4px] font-medium text-matcha20 uppercase">
          <span>{workHead}</span>
        </div>

        {/* Client Name */}
        <div className="flex items-center justify-center gap-4 sm:gap-6">
          <div className="w-10 h-10 sm:w-[52px] sm:h-[52px] flex items-center justify-center p-2.5 sm:p-3 bg-monochrome90 rounded-[32px] shrink-0">
            <Image
              src="/UsersThree.png"
              width={26.25}
              height={19.25}
              alt="user-icon"
            />
          </div>
          <h4 className="text-lg sm:text-xl lg:text-2xl leading-[1.35] lg:leading-[32.4px] font-medium">
            <span className="font-semibold pr-2">Clients:</span>
            {clientName}
          </h4>
        </div>

        {/* Work Description */}
        <p className="font-medium text-base sm:text-lg leading-[1.4] lg:leading-[24.3px]">
          {workDesc}
        </p>
      </div>

      {/* Right Section */}
      <div className="flex flex-col items-start justify-center gap-4 sm:gap-6 flex-[11] w-full">
        {/* Work Image */}
        <div className="w-full">
          <Image
            src={workImageURL}
            width={720}
            height={540}
            alt={workTitle}
            className="rounded-[8px] w-full h-auto"
          />
        </div>

        {/* Work Type */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0 w-full">
          <div className="flex items-center justify-center gap-4 sm:gap-6">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-monochrome90 flex items-center justify-center shrink-0">
              <Image
                src="/FolderSimple.png"
                width={24}
                height={24}
                alt="folder-icon"
              />
            </div>
            <h4 className="text-base sm:text-lg lg:text-xl leading-[1.4] font-medium">
              <span className="font-semibold pr-2">Project Type:</span>
              {projectType}
            </h4>
          </div>
          <Button
            variant={"common"}
            className="w-full sm:w-auto h-auto rounded-[100px] px-6 sm:px-8 py-3 sm:py-[14px] font-semibold text-sm sm:text-base leading-[20.16px] font-plusJakartaSans"
            onClick={() => handleNavigation(href)}
          >
            View Case Study
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
