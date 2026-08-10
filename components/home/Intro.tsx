import Image from "next/image";
import React from "react";

const data = [
  {
    url: "/STL logo.png",
    name: "Streams Tech LTD.",
    designation: "UX/UI Engineer L2",
  },
  {
    url: "/TLU.jpeg",
    name: "Tallinn University",
    designation: "Masters in HCI",
  },
];

const Intro = () => {
  return (
    <section className="container px-6 sm:px-10 md:px-16 lg:px-[120px]">
      <div className="py-8 sm:py-10 lg:py-12 flex flex-col lg:flex-row items-start scroll-in gap-8 sm:gap-12 lg:gap-[100px]">
        {/* Left Section */}
        <div className="flex flex-col gap-3 max-w-full lg:max-w-[760px] text-monochrome110">
          {/* Start */}
          <div className="flex items-center gap-2">
            <div className="w-1 h-7 bg-matcha20 shrink-0"></div>
            <p className="font-medium text-lg sm:text-xl">
              To cover my full bases,
            </p>
          </div>
          {/* Intro */}
          <p className="font-normal text-lg sm:text-xl">
            I also work as a{" "}
            <span className="font-medium text-matchaBase">
              Front-end developer
            </span>{" "}
            and a{" "}
            <span className="font-medium text-[#8D7347]">
              Creative content writer
            </span>
            .
          </p>
          {/* Desc */}
          <p className="font-normal text-lg sm:text-xl">
            The way I have seen design that it&apos;s a very subjective and
            customized process. One must know the crowd and blend into them to
            create a near perfect and delightful design solution for them. And
            being an empath, I see myself striving for just that.
          </p>
          {/* Conclusion */}
          <p className="font-normal text-lg sm:text-xl">
            As I do so, you will also find me hanging around outdoors or
            nearby any exhibitions, concerts or literary scenes.
          </p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-6 w-full lg:max-w-[340px] text-monochrome90">
          <div className="flex items-center gap-3">
            {/* Pulse Animation */}
            <div className="max-w-7 w-full h-7 relative shrink-0">
              <div className="w-2 h-2 rounded-full bg-monochrome90 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1]"></div>
              <div className="w-7 h-7 rounded-full bg-matchaBad absolute top-0 left-0 animate-scaleFade"></div>
            </div>
            <p className="font-medium text-sm sm:text-base leading-[21.6px]">
              Exploring new opportunities
            </p>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-6">
            {data.map((item) => (
              <div
                key={item.name}
                className="flex items-center px-3 gap-4"
              >
                <Image
                  src={item.url}
                  width={40}
                  height={45}
                  alt="softeko"
                  className="shrink-0"
                />
                <div className="flex flex-col font-medium">
                  <h4 className="text-black text-lg sm:text-xl">
                    {item.name}
                  </h4>
                  <p className="text-sm sm:text-base leading-[21.6px]">
                    {item.designation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
