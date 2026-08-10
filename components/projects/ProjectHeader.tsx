import React from "react";

type ProjectHeaderProps = {
  title: string;
  shortDesc: string;
};

const ProjectHeader = ({ title, shortDesc }: ProjectHeaderProps) => {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-2">
        {/* Pulse Animation */}
        <div className="max-w-7 w-full h-7 relative">
          <div className="w-2 h-2 rounded-full bg-monochrome90 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1]"></div>
          <div className="w-7 h-7 rounded-full bg-matchaBad absolute top-0 left-0 animate-scaleFade"></div>
        </div>
        <p className="font-medium text-base sm:text-lg leading-[1.4] sm:leading-[21.6px]">
          Project Title
        </p>
      </div>
      <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-medium tracking-normal leading-[1.2] lg:leading-normal text-monochrome110">
        {title}
      </h2>
      <h4 className="font-medium text-base sm:text-lg text-[#636363]">
        {shortDesc}
      </h4>
    </div>
  );
};

export default ProjectHeader;
