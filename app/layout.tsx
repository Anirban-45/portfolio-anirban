import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import LenisScroll from "@/components/LenisScroll";
import CustomCursor from "@/components/ui/customCursor";
import localFont from "next/font/local";
import DeviceOverlay from '@/components/ui/deviceOverlay'
import PageLoader from "@/components/PageLoader";
import ScrollReveal from "@/components/ScrollReveal";

// NOTE: not exported — Next only allows a fixed set of exports from a layout.
const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});
const generalSans = localFont({
  src: [{ path: "../public/fonts/GeneralSans-Variable.ttf", style: "normal" }],
  variable: "--font-general-sans",
});
export const metadata: Metadata = {
  title: "Anirban - UI/UX & Product Designer",
  description: "This is my portfolio for my UX and Product Design work.",
  icons: "/favicon.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
		<html lang="en">
      <body
        className={`${plusJakartaSans.variable} ${generalSans.variable} antialiased bg-background`}
			>
				<DeviceOverlay />
        <PageLoader />
        <ScrollReveal />
        <LenisScroll>
          <NavBar />
          <div id="lenis-root">{children}</div>
          <CustomCursor hoverText="See Project" />
          <Footer />
        </LenisScroll>
      </body>
    </html>
  );
}
