import React from "react";

const workTags = [
  { name: "Case Study" },
  { name: "UI Design" },
  { name: "Interaction Design" },
  { name: "UX Research" },
  { name: "Information Architecture" },
  { name: "UX Design" },
];

const WorkHeader = () => {
  return (
    <section className="w-full">
      <div className="container px-6 sm:px-10 md:px-16 lg:px-[120px] py-12 sm:py-16 lg:py-[80px] flex flex-col items-start justify-center gap-4 sm:gap-6 scroll-in">
        <h2 className="font-semibold text-3xl sm:text-5xl lg:text-[60px] leading-[1.25] lg:leading-[75.6px] text-monochrome90 scroll-in scroll-d1">
          My <span className="text-matcha60">Work</span> Projects
        </h2>
        <div className="flex flex-col gap-6 sm:gap-8 scroll-in scroll-d2">
          <p className="font-medium text-lg sm:text-xl lg:text-2xl leading-[1.4] lg:leading-[32.4px] text-[#6C6258] scroll-in scroll-d1">
            These are a few projects I have worked on. If you look into them
            you gradually see my growth. Beginner or intermediate, I am quite
            proud of each and every one of them.
          </p>
          <div className="flex flex-wrap items-center justify-start gap-3 sm:gap-4 scroll-in scroll-d2">
            {workTags.map((tag, index) => (
              <div
                key={index}
                className="border-[1.5px] border-matchaBase px-3 sm:px-4 py-1 rounded-[30px]"
              >
                <p className="text-matchaBase text-sm sm:text-base font-normal leading-[21.6px]">
                  {tag.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkHeader;
