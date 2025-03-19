"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const CustomCursor = () => {
  const pathname = usePathname();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [hoverText, setHoverText] = useState("");
  const [visible, setVisible] = useState(false);
  let hideTimeout: NodeJS.Timeout | null = null;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement | null;
      if (target && target.hasAttribute("data-hover-text")) {
        setHoverText(target.getAttribute("data-hover-text") || "");
        setIsHovered(true);
        if (hideTimeout) clearTimeout(hideTimeout); // Prevent hiding
        setTimeout(() => setVisible(true), 10);
      }
    };

    const handleMouseLeave = (e: Event) => {
      // Add a small delay before hiding to prevent flickering
      hideTimeout = setTimeout(() => {
        setVisible(false);
        setTimeout(() => {
          setIsHovered(false);
          setHoverText("");
        }, 200);
      }, 10); // Tiny delay to catch fast movements
    };

    const handleClick = () => {
      setVisible(false);
      setTimeout(() => {
        setIsHovered(false);
      }, 50);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mousedown", handleClick);

    const attachHoverListeners = () => {
      const hoverableElements = document.querySelectorAll("[data-hover-text]");
      hoverableElements.forEach((element) => {
        element.addEventListener("mouseenter", handleMouseEnter);
        element.addEventListener("mouseleave", handleMouseLeave);
      });
    };

    attachHoverListeners();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mousedown", handleClick);
      const hoverableElements = document.querySelectorAll("[data-hover-text]");
      hoverableElements.forEach((element) => {
        element.removeEventListener("mouseenter", handleMouseEnter);
        element.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [pathname]);

  return (
    <div
      className={`fixed pointer-events-none z-[1000] transition-opacity duration-200 ease-out ${
        visible ? "opacity-100 scale-100" : "opacity-0 scale-95"
      }`}
      style={{
        top: position.y,
        left: position.x + 24, // 1rem (16px) gap from cursor
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
