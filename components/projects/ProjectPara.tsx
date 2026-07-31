"use client";

interface ProjectParaProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  /** Override the auto-generated anchor id (rarely needed). */
  id?: string;
}

const slugify = (s: string) =>
  s
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const ProjectPara: React.FC<ProjectParaProps> = ({
  title,
  children,
  className = "",
  id,
}) => {
  return (
    <section
      id={id ?? slugify(title)}
      data-outline-title={title}
      className={`scroll-mt-[120px] flex flex-col gap-4 items-start justify-center text-lg leading-[1.5] text-[#474747] ${className}`}
    >
      <h3 className="!text-2xl font-semibold text-matcha60">{title}</h3>
      {children}
    </section>
  );
};

export default ProjectPara;
