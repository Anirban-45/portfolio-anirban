import Image from "next/image";

type DribbbleItem = {
  id: string;
  href: string;
  src: string;
  alt: string;
};

type MarqueeRowProps = {
  items: DribbbleItem[];
  direction?: "left" | "right";
};

const MarqueeRow = ({ items, direction = "left" }: MarqueeRowProps) => {
  const animationClass =
    direction === "left" ? "animate-marquee-left" : "animate-marquee-right";

  return (
    <div className="group overflow-hidden">
      <div
        className={`flex w-max gap-4 sm:gap-6 ${animationClass} group-hover:pause-animation`}
      >
        {[...items, ...items].map((item, idx) => (
          <a
            key={`${item.id}-${idx}`}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="block rounded-xl p-1 sm:p-[6px] overflow-hidden border-2 border-neutral-800 hover:border-[#C1FB88] transition-colors"
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={320}
              height={280}
              className="h-[120px] w-[180px] sm:h-[150px] sm:w-[214px] lg:h-[168px] lg:w-60 object-cover rounded"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

const dribbbleShots: DribbbleItem[] = [
  {
    id: "shot-1",
    href: "https://dribbble.com/shots/27031683-SEO-Analytics-and-Audit-Dashboard",
    src: "/work/Shot-1.png",
    alt: "SEO Analytics and Audit Dashboard",
  },
  {
    id: "shot-2",
    href: "https://dribbble.com/shots/27030595-Elo-health-Estonian-Medical-System-Application",
    src: "/work/Shot-2.png",
    alt: "Elo-health: Estonian Medical System Application",
  },
  {
    id: "shot-3",
    href: "https://dribbble.com/shots/27028267-Gumdrop-space-An-Ambient-Workshop-Experiment",
    src: "/work/Shot-3.png",
    alt: "Gumdrop-space: An Ambient Workspace Experiment",
  },
  {
    id: "shot-4",
    href: "https://dribbble.com/shots/27028204-Queryix-Prop-Survey-Dashboard",
    src: "/work/Shot-4.png",
    alt: "Gumdrop-space: An Ambient Workspace Experiment",
  },
  {
    id: "shot-5",
    href: "https://dribbble.com/shots/26100591-Paypiller-Digital-Finance-application",
    src: "/work/Shot-5.png",
    alt: "Gumdrop-space: An Ambient Workspace Experiment",
  },
  {
    id: "shot-6",
    href: "https://dribbble.com/shots/25789549-Return-portal-design-for-Bevy",
    src: "/work/Shot-6.png",
    alt: "Gumdrop-space: An Ambient Workspace Experiment",
  },
  {
    id: "shot-7",
    href: "https://dribbble.com/shots/25770334-Housing-Application",
    src: "/work/Shot-7.png",
    alt: "Housing Application",
  },
];

const dribbbleShots2: DribbbleItem[] = [
  {
    id: "shot-8",
    href: "https://dribbble.com/shots/25766485-GeoSWMM-Landing-Page-Redesign",
    src: "/work/Shot-8.png",
    alt: "SEO Analytics and Audit Dashboard",
  },
  {
    id: "shot-9",
    href: "https://dribbble.com/shots/25766430-File-compression-app-Branding",
    src: "/work/Shot-9.png",
    alt: "Elo-health: Estonian Medical System Application",
  },
  {
    id: "shot-10",
    href: "https://dribbble.com/shots/25661186-Real-Estate-Company-Landing",
    src: "/work/Shot-10.png",
    alt: "Gumdrop-space: An Ambient Workspace Experiment",
  },
  {
    id: "shot-11",
    href: "https://dribbble.com/shots/25574650-Meeting-Platform-For-IT-Bee",
    src: "/work/Shot-11.png",
    alt: "Gumdrop-space: An Ambient Workspace Experiment",
  },
  {
    id: "shot-12",
    href: "https://dribbble.com/shots/25574641-Help-FAQ-Pages-Furnitide",
    src: "/work/Shot-12.png",
    alt: "Gumdrop-space: An Ambient Workspace Experiment",
  },
  {
    id: "shot-13",
    href: "https://dribbble.com/shots/25574494-Taskmark-List-Maker",
    src: "/work/Shot-13.png",
    alt: "Gumdrop-space: An Ambient Workspace Experiment",
  },
  {
    id: "shot-14",
    href: "https://dribbble.com/shots/23757835-Testimonial-Page-Abroad-Studies-Website",
    src: "/work/Shot-14.png",
    alt: "Housing Application",
  },
];

const WorkShotScroller = () => {
  return (
    <section className="pb-12 sm:pb-16 pt-6 space-y-4 sm:space-y-6 px-6 sm:px-0">
      <h2 className="text-center text-3xl sm:text-4xl lg:text-[48px] leading-[1.2] font-semibold text-matcha20 scroll-in">
        My Other Works
      </h2>
      <p className="pb-2 text-center text-base sm:text-lg lg:text-[20px] leading-[1.4] font-regular text-monochrome20 scroll-in">
        Check out some of my other projects and concepts on Dribbble!
      </p>
      <div className="scroll-in scroll-in-right">
        <MarqueeRow items={dribbbleShots} direction="left" />
      </div>
      <div className="scroll-in scroll-in-left">
        <MarqueeRow items={dribbbleShots2} direction="right" />
      </div>
    </section>
  );
};

export default WorkShotScroller;
