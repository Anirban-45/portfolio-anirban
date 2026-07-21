import React from "react";


const jobExp = [
  {
    name: "Streams Tech LTD.",
    currentDesignation: "UI/UX Engineer L2",
    joinedAs: "",
    startDate: "Apr 2025",
    endDate: "Aug 2025",
    workedOn:
      "Designed an application to manage apartment committees. Worked with Developers on a Satellite based agricultural application to monitor and ﬁnance farmlands",
  },
  {
    name: "Softeko",
    currentDesignation: "Senior UI/UX Designer",
    joinedAs: "",
    startDate: "Sept 2024",
    endDate: "Jan 2025",
    workedOn:
      "Built an invoice generator web app now used by 1,000+ monthly, making invoicing simpler for small businesses.",
  },
  {
    name: "Safewheel LTD.",
    currentDesignation: "Product Designer",
    joinedAs: "UX/UI Designer",
    startDate: "Mar 2023",
    endDate: "May 2024",
    workedOn:
      "Led the design of a health-focused e-commerce site, improving customer engagement and flow. Updated UI components to strengthen brand identity and smooth out navigation, Formulating information architecture. ",
  },
  {
    name: "Lily Social Commerce LTD.",
    currentDesignation: "UX Designer",
    joinedAs: "",
    startDate: "Jan 2023",
    endDate: "Mar 2023",
    workedOn:
      "Developed a custom clothing web app, earning 88% positive user feedback. Designed responsive components that cut mobile load times by 20%. Worked with developers to turn designs into React components, parsing backend api to make the web artifact dynamic.",
  },
  {
    name: "Innova Solutions (Jatayat)",
    currentDesignation: "UX/UI Designer",
    joinedAs: "",
    startDate: "Jan 2022",
    endDate: "May 2022",
    workedOn:
      "Designed a vehicle accessibility app prototype, with 70% of early testers giving positive feedback. Performed usability audits to catch design issues early, helping smooth the user journey.",
  },
  {
    name: "Kernel Technologies",
    currentDesignation: "Mobile UX Designer",
    joinedAs: "FrontEnd Developer Intern",
    startDate: "Feb 2021",
    endDate: "Nov 2022",
    workedOn:
      "Built a course management platform prototype that made onboarding faster and courses easier to access. Frontend Website development with JavaScript and JSX Element. Rest API integration and Data pipelining on Mongo",
  },
];
const ExperienceJob = () => {
  return (
    <div className="w-full flex flex-col items-start justify-center gap-9 text-monochrome90">
      {/* Experience Body Card */}
      {jobExp.map((job, index) => (
        <div
          key={index}
          className="w-full flex items-start justify-between gap-12 pb-8 border-b border-b-monochrome30"
        >
          <div className="max-w-[520px] flex flex-col items-start gap-3 font-semibold text-[32px] leading-[40.32px]">
            <h3>{job.name}</h3>
            {job.joinedAs ? (
              <p className=" text-matcha60 font-medium text-[16px] leading-[21.6px]">
                Joined as {job.joinedAs}
              </p>
            ) : (
              ""
            )}
          </div>
          <div className=" lg:max-w-[680px] w-full flex flex-col items-start justify-center gap-6">
            <div className=" flex flex-col items-start justify-center gap-2">
              <h4 className=" font-semibold text-[24px] leading-[30.2px]">
                {job.currentDesignation}
              </h4>
              <p className="font-medium text-[16px] leading-[21.6px] text-[#636363]">
                {job.startDate} - {job.endDate}
              </p>
            </div>
            <ul className="list-disc pl-5 font-medium text-[16px] leading-[21.6px] text-[#636363] space-y-2">
              {job.workedOn
                .split(". ")
                .filter(Boolean)
                .map((item, i) => (
                  <li key={i}>
                    {item.endsWith(".") ? item : `${item}.`}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceJob;
