import React from "react";


const design = [
  {
    type: "Theoretic",
    desc: "Color psychology, Heuristics, Design principles, Visual hierarchy, WCAG 2.1",
  },
  {
    type: "Tools",
    desc: "Figma, Whimsical, Miro, Maze, Zeplin, Protopie, Jitter, Lucid Chart.",
  },
  {
    type: "Techniques",
    desc: "User stories, Competitive research, Ethnographic research, User flows, Wireframing, Prototyping, Journey maps, Design systems, Gamification.",
  },
];

const tech = [
  {
    type: "Languages",
    desc: "C, C#, Python, JavaScript",
  },
  {
    type: "Frameworks & Services",
    desc: "React, Next, Firebase, MySQL, Mongo, AWS, GDscript.",
  },
  {
    type: "Collaborative",
    desc: "Git, Notion, Slack, Jira, Trello, Air table.",
  },
];

const ExperienceSkill = () => {
  return (
    <div className=" flex flex-col items-start justify-center gap-6 text-monochrome90 scroll-in">
      <h3 className=" font-semibold text-[32px] leading-[40.32px]">Skills</h3>
      <div className=" flex flex-col items-start justify-center gap-3">
        <h4 className=" font-semibold text-[24px] leading-[30.24px]">Design</h4>
        <div className=" flex flex-col items-start justify-center gap-2 font-plusJakartaSans">
          {design.map((data) => (
            <p
              key={data.type}
              className=" text-[#656565] font-semibold text-[16px] leading-[21.6px] max-w-[680px]"
            >
              <span className=" text-matchaBase font-semibold text-[16px] leading-[21.6px]">
                {data.type}
              </span>{" "}
              - {data.desc}
            </p>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-start justify-center gap-3">
        <h4 className=" font-semibold text-[24px] leading-[30.24px]">Tech</h4>
        <div className=" flex flex-col items-start justify-center gap-2 font-plusJakartaSans">
          {tech.map((data) => (
            <p
              key={data.type}
              className=" text-[#656565] font-semibold text-[16px] leading-[21.6px] max-w-[680px]"
            >
              <span className=" text-matchaBase font-semibold text-[16px] leading-[21.6px]">
                {data.type}
              </span>{" "}
              - {data.desc}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceSkill;
