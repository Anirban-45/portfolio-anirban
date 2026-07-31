import React from "react";

type ProjectInfoProps = {
  overview: string;
  role: string;
  duration: string;
  team?: string;
  client?: string;
  tools?: string;
  desc?: string;
};

const ProjectInfo = ({
  overview,
  role,
  duration,
  team,
  client,
  tools,
  desc,
}: ProjectInfoProps) => {
  return (
    <div className=" flex items-start justify-between gap-12">
      <div className="flex flex-[32] flex-col gap-4">
        <h3 className=" text-2xl font-semibold text-matcha60">
          Project Overview
        </h3>
        <p className="text-monochrome90 text-lg leading-[1.5] whitespace-pre-wrap">{overview}</p>
      </div>
      <aside className="flex flex-[18] flex-col gap-4">
        <h3 className=" text-2xl font-semibold text-matcha60">
          Project Details
        </h3>
        <div className="flex flex-col items-start justify-center gap-3 text-monochrome90">
          <div className="flex flex-col gap-.5 text-lg leading-[1.5] ">
            <p>
              <span className="font-medium">Role: </span>
              {role}
            </p>
            <p>
              <span className="font-medium">Duration: </span>
              {duration}
            </p>
            {team && (
              <p>
                <span className="font-medium">Team: </span>
                {team}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-.5">
            {client && (
              <p>
                <span className="font-medium">Client: </span>
                {client}
              </p>
            )}
            {tools && (
              <p>
                <span className="font-medium">Tools: </span>
                {tools}
              </p>
            )}
            {desc && <p>{desc}</p>}
          </div>
        </div>
      </aside>
    </div>
  );
};

export default ProjectInfo;
