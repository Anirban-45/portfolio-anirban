import React from "react";

const CtaButton = ({ onClick, children }: { onClick?: () => void; children: React.ReactNode }) => {
  return (
    <button
      onClick={onClick}
      className="relative px-7 py-2 text-monochrome90 text-base font-semibold font-plusJakartaSans bg-transparent border-2 border-[#606060] rounded-none transition-all duration-500 ease-in-out hover:bg-monochrome90 hover:text-background"
    >
      {children}
      <span
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #ABCD99 0px, #ABCD99 10px, transparent 10px, transparent 6px),
                      linear-gradient(to bottom, #ABCD99 0px, #ABCD99 10px, transparent 10px, transparent 6px)`,
          backgroundSize: "12px 3px, 3px 12px",
          backgroundRepeat: "repeat-x, repeat-y",
          backgroundPosition: "bottom left, top right", // Start position for each stroke
          position: "absolute",
          width: "100%",
          height: "100%",
          content: '""',
          transform: "translate(7px, 7px)", // Slight offset for correct positioning
          animation: "dotPropagate 3s linear infinite", // Animation applied here
        }}
      />
    </button>
  );
};

export default CtaButton;