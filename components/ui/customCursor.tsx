"use client";
import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";

interface CustomCursorProps {
  hoverText: string;
}

const CustomCursor: React.FC<CustomCursorProps> = ({ hoverText }) => {
  const pathname = usePathname();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleOver = useCallback((e: MouseEvent) => {
    const target = (e.target as HTMLElement)?.closest("[data-hover]");
    if (target) setIsHovered(true);
  }, []);

  const handleOut = useCallback((e: MouseEvent) => {
    const target = (e.target as HTMLElement)?.closest("[data-hover]");
    if (target) setIsHovered(false);
  }, []);

  useEffect(() => {
    document.addEventListener("mouseover", handleOver);
    document.addEventListener("mouseout", handleOut);
    return () => {
      document.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mouseout", handleOut);
    };
  }, [handleOver, handleOut]);

  // Reset cursor state on every route change
  useEffect(() => {
    setIsHovered(false);
  }, [pathname]);

  return (
    <div
      className="fixed pointer-events-none z-[1000]"
      style={{
        top: position.y,
        left: position.x + 24,
      }}
    >
      <div
        className={`absolute w-[116px] rounded-md border border-[#A4A4A4]/30 bg-[#FDFBF7] px-3 py-1 font-plusJakartaSans text-base font-medium text-monochrome90 shadow-md transition-[opacity,transform] duration-300 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] ${
          isHovered
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 translate-y-1"
        }`}
        aria-hidden={!isHovered}
      >
        {hoverText}
      </div>
    </div>
  );
};

export default CustomCursor;
