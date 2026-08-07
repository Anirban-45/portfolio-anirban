import React from "react";
import WorkCard from "./WorkCard";
import WorkShotScroller from "./WorkShotScroller"


const workData = [
	{
    workTitle: "Paphos Museum Web",
    workHead:
      "A Digitization of evolving Heritage Aspects in Paphos Archaeological Museum",
    clientName: "Cyprus Dept Antiquities",
    workDesc:
      "An interactive digital heritage platform for the Paphos Archaeological Museum that combines immersive virtual exhibitions and historical storytelling with seamless online ticketing and event management.",
    projectType: "Website/Heritage Platform",
    workImageURL: "/work-paphosweb.jpg",
    href: "/paphos-web",
	},
	{
    workTitle: "Sky Harvest",
    workHead: "Satellite-Verified survey, Tracking & Financial Aid Management for Farms",
    clientName: "Streams Tech LTD.",
    workDesc:
      "Sky Harvest manages financing for farmers, connecting them to investors that understands their farmlands potential. The lands are surveyed by agents and verified by satellite technology.",
    projectType: "Website/SAAS",
    workImageURL: "/work-skyharvest.png",
    href: "/skyharvest",
  },
  {
    workTitle: "invoicegenerator.biz",
    workHead:
      "A Website and Dashboard For maintaining your invoices and inventories",
    clientName: "SOFTEKO",
    workDesc:
      "invoicegenerator is an EMD website catering for multiple purpose of invoices including a dashboard for management, shelving & analysis.",
    projectType: "Website/SAAS",
    workImageURL: "/work-invoicegen.png",
    href: "/invoice-generator",
  },
  {
    workTitle: "Songjog Caregiver",
    workHead:
      "AN Application to Find Helpful Caregivers And a way to Empower them",
    clientName: "Sonjog Foundation",
    workDesc:
      "Songjog Caregiver is a platform that connects care receivers with qualified caregivers, offering features like caregiver selection, booking appointments and, customized care plans.",
    projectType: "App/SAAS",
    workImageURL: "/work-songjog.png",
    href: "/songjog",
  },
  {
    workTitle: "Beditor",
    workHead: "A Customizable Software For Casual and Creative Writing",
    clientName: "Personal project",
    workDesc:
      "A user friendly minimal writing tool That I have worked and designed for casual text documents and literature.",
    projectType: "Desktop Application",
    workImageURL: "/work-beditor.png",
    href: "/beditor",
  },
  {
    workTitle: "Safewheel Redesign",
    workHead: "Your Go-to-go Telemedicine & Healthcare Services ",
    clientName: "Safewheel LTD.",
    workDesc:
      "Safewheel is a healthcare E-commerce platform which cares about more than just products. It broadens to encompass a knowledge ecosystem and community.",
    projectType: "E-commerce Website/App",
    workImageURL: "/work-safewheel.png",
    href: "/safewheel",
  },
];


const WorkContainer = () => {
  return (
    <section className="w-full bg-monochrome110 text-monochrome00 ">
      <div className="container relative z-10">
        <div className=" absolute px-[160px] grid grid-cols-7 h-full w-full -z-10">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="custom-border" />
          ))}
          <div className="custom-border border-r" />
        </div>
        <div className="p-[120px] flex flex-col items-center justify-center gap-[180px]">
          {workData.map((work) => (
            <WorkCard
              key={work.workTitle}
              workTitle={work.workTitle}
              workHead={work.workHead}
              clientName={work.clientName}
              workDesc={work.workDesc}
              projectType={work.projectType}
              workImageURL={work.workImageURL}
              href={work.href}
            />
          ))}
				</div>
        <WorkShotScroller/>
      </div>
    </section>
  );
};

export default WorkContainer;
