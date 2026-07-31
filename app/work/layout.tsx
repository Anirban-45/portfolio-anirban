import CaseStudyOutline from "@/components/projects/CaseStudyOutline";

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      {/* Renders nothing on /work itself — that page has no ProjectPara sections. */}
      <CaseStudyOutline />
    </>
  );
}
