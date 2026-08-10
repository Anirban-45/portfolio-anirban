import Image from "next/image";
import React from "react";

type FigureProps = {
  url: string;
  width: number;
  height: number;
  alt: string;
  title: string;
};

const Figure = ({ url, width, height, alt, title }: FigureProps) => {
  return (
    <div className="flex flex-col gap-2 self-center">
      <div className="overflow-x-auto">
        <Image
          src={url}
          alt={alt}
          width={width}
          height={height}
          className="max-w-none"
        />
      </div>
      <h5 className=" text-sm font-medium tracking-[2%] self-end">
        Fig: {title}
      </h5>
    </div>
  );
};

export default Figure;
