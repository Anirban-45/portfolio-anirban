import React from "react";

const CtaButton = ({ onClick, children }: { onClick?: () => void; children: React.ReactNode }) => {
  return (
    <div className="group relative inline-block cta-button">
      <button
        onClick={onClick}
        className="relative px-7 py-2 text-monochrome90 text-base font-semibold font-plusJakartaSans bg-transparent border-2 border-[#606060] rounded-none 
        transition-all duration-500 ease-in-out hover:bg-monochrome90 hover:text-[#E1F0D6] hover:shadow-lg hover:border-2 hover:border-monochrome90"
      >
        {children}
        <span
          className="absolute inset-0 pointer-events-none animate-dots"
          style={{
            backgroundImage: `linear-gradient(to right, #ABCD99 0px, #ABCD99 10px, transparent 10px, transparent 6px),
                              linear-gradient(to bottom, #ABCD99 0px, #ABCD99 10px, transparent 10px, transparent 6px)`,
            backgroundSize: "12px 3px, 3px 12px",
            backgroundRepeat: "repeat-x, repeat-y",
            backgroundPosition: "bottom left, top right",
            position: "absolute",
            width: "100%",
            height: "100%",
            transform: "translate(7px, 7px)",
          }}
        />
      </button>
    </div>
  );
};

export default CtaButton;