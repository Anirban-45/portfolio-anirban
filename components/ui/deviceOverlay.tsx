"use client";

import { useEffect, useState } from "react";

export default function DeviceOverlay() {
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      const isSmallScreen = window.innerWidth < 1024 || window.innerHeight < 700;
      setShowOverlay(isSmallScreen);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const handleDesktopModeHelp = () => {
    alert(
      "To switch to desktop mode, open your browser menu and choose 'Request Desktop Site' or 'Desktop site'."
    );
  };

  if (!showOverlay) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center px-6">
			<div className="font-generalSans w-[90vw] h-[90vh] rounded-2xl bg-background p-6 text-center shadow-2xl flex justify-center items-center">
				<div className="max-w-[400px] mx-auto">
					<h2 className="font-plusJakartaSans text-2xl font-semibold text-neutral-900">
	          Better on a larger screen
	        </h2>
	        <p className="mt-3 text-base leading-6 text-neutral-600">
	          This site is better experienced through a larger device.
	        </p>

	        <div className="mt-6 flex flex-col gap-3">
	          <button
	            onClick={handleDesktopModeHelp}
	            className=" bg-primary px-4 py-3 text-sm font-medium text-white transition hover:bg-neutral-800"
	          >
	            How to switch to desktop mode
	          </button>

	          <button
	            onClick={() => setShowOverlay(false)}
	            className=" border border-neutral-300 px-4 py-3 text-sm font-medium text-neutral-700 transition hover:bg-neutral-50"
	          >
	            Continue anyway
	          </button>
	        </div>
				</div>

      </div>
    </div>
  );
}
