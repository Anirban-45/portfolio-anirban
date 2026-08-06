"use client";

import { Clock } from "lucide-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useEffect, useState } from "react";

interface ComingSoonModalProps {
  open: boolean;
  onCloseAction: () => void;
}

export function ComingSoonModal({ open, onCloseAction }: ComingSoonModalProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (open) {
      requestAnimationFrame(() => setVisible(true));
    } else {
      setVisible(false);
    }
  }, [open]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) onCloseAction();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open, onCloseAction]);

  if (!open) return null;

  return (
    <div
      className={`fixed inset-0 z-[2000] flex items-center justify-center transition-opacity duration-500 ease-out ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className="absolute inset-0 bg-[#0D0D0C]/60 backdrop-blur-sm"
        onClick={onCloseAction}
      />

      <div
        className={`relative w-[90%] max-w-[520px] border border-monochrome110/10 bg-monochrome00 p-8 pt-12 shadow-2xl transition-all duration-500 ease-out ${
          visible ? "translate-y-0 scale-100 opacity-100" : "translate-y-3 scale-95 opacity-0"
        }`}
      >
        <div className="mb-6 flex flex-col items-center text-center">
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-matcha20">
            <Clock className="text-monochrome110" />
          </div>
          <h2 className="font-plusJakartaSans text-2xl font-semibold text-monochrome110">
            New video coming soon
          </h2>
          <p className="mt-5 text-base text-gray-600">
						Hi! I'm currently working on a new intro video for my journey as a
						designer. Check back soon to watch it here.
          </p>
        </div>

        {/* Video frame with Lottie animation */}
        <div className="relative aspect-video w-full overflow-hidden border-2 border-monochrome30 py-[-10px] rounded-lg bg-monochrome20">
          <DotLottieReact
            src="https://lottie.host/e01a62c5-2d8f-4cbb-9eb5-ef455704b3da/fN3V2XbbhW.lottie"
            autoplay
            loop
            className="h-full w-full object-contain"
          />
        </div>

        <button
          type="button"
          onClick={onCloseAction}
          className="w-full px-9 py-3 h-11 rounded-none hover:bg-monochrome90 bg-monochrome110 text-monochrome00 font-semibold tracking-[5%] text-base font-plusJakartaSans mt-6"
        >
          GOT IT
        </button>
      </div>
    </div>
  );
}
