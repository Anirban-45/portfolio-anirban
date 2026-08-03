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
    <section className="container px-[120px]">
      <div className="py-12 flex items-start scroll-in gap-[100px]">
        {/* Left Section */}
        <div className="flex flex-col gap-3 max-w-[760px] text-monochrome110">
          {/* Start */}
          <div className="flex items-center gap-2">
            <div className="w-1 h-7 bg-matcha20"></div>
            <p className=" font-medium text-xl">To cover my full bases,</p>
          </div>
          {/* Intro */}
          <p className=" font-normal text-xl ">
            I also work as a{" "}
            <span className=" font-medium text-matchaBase">
              Front-end developer
            </span>{" "}
            and a{" "}
            <span className="font-medium text-[#8D7347]">
              Creative content writer
            </span>
            .
          </p>
          {/* Desc */}
          <p className="font-normal text-xl ">
            The way I have seen design that it's a very subjective and
            customized process. One must know the crowd and blend into them to
            create a near perfect and delightful design solution for them. And
            being an empath, I see myself striving for just that.
          </p>
          {/* Conclusion */}
          <p className="font-normal text-xl ">
            As I do so, you will also find me hanging around outdoors or nearby
            any exhibitions, concerts or literary scenes.
          </p>
        </div>
        {/* Right Section */}
        <div className="flex flex-col gap-6 max-w-[340px] text-monochrome90">
          <div className="flex items-center gap-3">
            {/* Pulse Animation */}
            <div className="max-w-7 w-full h-7 relative">
              <div className=" w-2 h-2 rounded-full bg-monochrome90 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1]"></div>
              <div className="w-7 h-7 rounded-full bg-matchaBad absolute top-0 left-0 animate-scaleFade"></div>
            </div>
            <p className=" font-medium text-base leading-[21.6px]">
              Exploring new opportunities
            </p>
          </div>
          <div className="flex flex-col gap-6">
            {data.map((data) => (
              <div key={data.name} className="flex items-center px-3 gap-4">
                <Image src={data.url} width={40} height={45} alt="softeko" />
                <div className="flex flex-col font-medium">
                  <h4 className="text-black text-xl">{data.name}</h4>
                  <p className="  text-base leading-[21.6px]">
                    {data.designation}
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
