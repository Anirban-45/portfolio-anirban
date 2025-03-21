"use client";

import { useState, useEffect } from "react";

const Preloader = ({ onFinish }: { onFinish: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [isFadingIn, setIsFadingIn] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Start fade-in on mount
    setIsFadingIn(true);

    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(interval);

          // Start fade-out animation
          setIsFadingOut(true);

          // Wait for fade-out animation to complete before calling onFinish
          setTimeout(() => onFinish(), 1200); // Adjust timing to match animation duration
          return 100;
        }
        return oldProgress + Math.random() * 10; // Increase progress
      });
    }, 200);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div
      className={`h-screen w-screen fixed inset-0 bg-background flex flex-col items-start justify-between text-background transition-all duration-1000 
        ${isFadingIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        ${isFadingOut ? "opacity-0 translate-y-10" : ""}
      `}
    >
      {/* Horizontal line at the top */}
      <hr />
      <div className="flex flex-col items-start justify-center gap-10 ml-6">
        {/* Spinner Animation */}
        <div className="scale-[2] ml-6">
          <div className="sk-swing">
            <div className="sk-swing-dot bg-monochrome110"></div>
            <div className="sk-swing-dot bg-monochrome110"></div>
          </div>
        </div>

        {/* Welcome text */}
        <h1 className="text-[102px] font-semibold mt-4 text-monochrome110">- Welcome!</h1>
      </div>

      {/* Progress Bar */}
      <div className="w-full max-w-full relative bottom-0">
        {/* Percentage */}
        <p className="text-3xl m-6 font-generalSans text-monochrome110">
          {Math.round(progress)}%
        </p>
        <div className="h-2 bg-monochrome110">
          <div
            className="h-2 bg-[#ABCD99] rounded-none transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
