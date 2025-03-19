"use client";
import { useState, useEffect } from "react";

interface CustomCursorProps {
  hoverText: string; // Define hoverText as a string
}

const CustomCursor: React.FC<CustomCursorProps> = ({ hoverText }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Update the cursor's position
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => {
      setVisible(true);
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    // Check hover state dynamically based on mouse position
    const handleHoverState = () => {
      const hoveredElement = document.querySelector("[data-hover]:hover");
      setIsHovered(!!hoveredElement);
    };

    // Add event listeners for mouse move and hover states
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Check hover state regularly
    const intervalId = setInterval(handleHoverState, 50);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      clearInterval(intervalId); // Clean up the interval
    };
  }, []);

  return (
    <div
      className={`fixed pointer-events-none z-[1000] transition-opacity duration-200 ease-out transform ${
        visible ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-1"
      }`}
      style={{
        top: position.y,
        left: position.x + 24, // Keeps 1.5rem gap from cursor
      }}
    >
      {isHovered && (
        <div className="absolute bg-[#FDFBF7] text-monochrome90 text-base font-medium px-3 py-1 border-[1px] border-[#A4A4A4] border-opacity-30 rounded-md shadow-md transition-all duration-200 ease-out w-[116px] font-plusJakartaSans">
          {hoverText}
        </div>
      )}
    </div>
  );
};

export default CustomCursor;