"use client";

/**
 * Minimal intro curtain: the page background and a single hairline that
 * fills as the page loads. Timing lives in <PageLoader />.
 */
const Preloader = ({
  progress,
  exiting,
}: {
  progress: number;
  exiting: boolean;
}) => {
  const pct = Math.min(100, Math.round(progress));

  return (
    <div
      className={`fixed inset-0 z-[10000] flex h-screen w-screen items-center justify-center bg-background transition-opacity duration-[600ms] ease-out motion-reduce:transition-none ${
        exiting ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="h-px w-[120px] overflow-hidden bg-monochrome110/15">
        <div
          className="h-full bg-matcha60 transition-[width] duration-300 ease-out motion-reduce:transition-none"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
};

export default Preloader;
