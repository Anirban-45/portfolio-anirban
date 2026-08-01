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
  key: string;
};

const WorkCard = ({
  workTitle,
  workHead,
  clientName,
  workDesc,
  projectType,
  workImageURL,
  href,
  key,
}: workDataProps) => {
  const router = useRouter();

  const handleNavigation = (href: string) => {
    router.push(`work/${href}`); // Navigate to /dashboard
  };
  return (
    <div key={key} className="flex items-start justify-center gap-9 text-white scroll-in">
      {/* Left Section */}
      <div className="flex flex-col items-start justify-center gap-6 flex-[7]">
        <div className=" flex items-center justify-center gap-6">
          {/* Work Title */}
          <div className=" w-[60px] h-[60px] bg-monochrome00 p-4 rounded-2xl">
            <Image src="/layout.png" height={28} width={28} alt="icon-layout" />
          </div>
          <h4 className=" text-2xl leading-[32.4px] font-medium">
            <span className=" font-semibold pr-2">Project:</span>
            {workTitle}
          </h4>
        </div>
        {/* Work Head */}
        <div className=" text-[44px] leading-[59.4px] font-medium text-matcha20 uppercase ">
          <span>{workHead}</span>
        </div>
        {/* Client Name */}
        <div className=" flex items-center justify-center gap-6">
          <div className=" w-[52px] h-[52px] flex items-center justify-center p-3 bg-monochrome90 rounded-[32px]">
            <Image
              src="/UsersThree.png"
              width={26.25}
              height={19.25}
              alt="user-icon"
            />
          </div>
          <h4 className=" text-2xl leading-[32.4px] font-medium">
            <span className="font-semibold pr-2">Clients:</span>
            {clientName}
          </h4>
        </div>
        {/* Work Description */}
        <p className=" font-medium text-lg leading-[24.3px]">{workDesc}</p>
      </div>
      {/* Right Section */}
      <div className="flex flex-col items-start justify-center gap-6 flex-[11]">
        {/* Work Image */}
        <div className="">
          <Image
            src={workImageURL}
            width={720}
            height={540}
            alt={""}
            className="rounded-[8px]"
          />
        </div>
        {/* Work Type */}
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center justify-center gap-6">
            <div className=" w-12 h-12 rounded-full bg-monochrome90 flex items-center justify-center">
              <Image
                src="/FolderSimple.png"
                width={24}
                height={24}
                alt="folder-icon"
              />
            </div>
            <h4 className=" text-xl leading-[2px] font-medium">
              <span className=" font-semibold pr-2">Project Type:</span>
              {projectType}
            </h4>
          </div>
          <Button
            variant={'common'}
            className="h-full rounded-[100px] px-8 py-[14px] font-semibold text-base leading-[20.16px] font-plusJakartaSans"
            onClick={()=>handleNavigation(href)}
          >
            View Case Study
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
