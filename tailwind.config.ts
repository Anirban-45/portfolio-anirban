import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import type { PluginAPI } from "tailwindcss/types/config";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        generalSans: "var(--font-general-sans)",
        plusJakartaSans: "var(--font-plus-jakarta-sans)",
      },
      backgroundImage: {
        "hero-pattern": "url('/heroBackground.png')",
        "hero-line": "url('/home/hero-line.svg')",
      },
      screens: {
        sc1366: "1366px",
        sc1248: "1248px",
      },
      container: {
        center: true,
        screens: {
          sm: "100%",
          md: "100%",
          lg: "100%",
          xl: "1440px",
        },
      },
      keyframes: {
        scaleFade: {
          "0%": {
            transform: "scale(0.25)",
            opacity: "0.25",
            transformOrigin: "center",
          },
          "100%": {
            transform: "scale(.75)",
            opacity: "0.5",
            transformOrigin: "center",
          },
        },
        "marquee-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-right": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        mouseMove: {
          "0%": { transform: "translateY(-10%)", transformOrigin: "center" },
          "100%": { transform: "translateY(10%)", transformOrigin: "center" },
        },
      },
      animation: {
        scaleFade: "scaleFade 1.5s ease-in-out infinite",
        mouseMove: "mouseMove 1s ease-in-out infinite alternate",
        "marquee-left": "marquee-left 35s linear infinite",
        "marquee-right": "marquee-right 35s linear infinite",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsla(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        link: "hsla(var(--link))",
        monochrome00: "hsl(var(--monochrome-00))",
        monochrome30: "hsl(var(--monochrome-30))",
        monochrome90: "hsl(var(--monochrome-90))",
        monochrome110: "hsl(var(--monochrome-110))",
        matcha20: "hsl(var(--matcha-20))",
        matcha60: "hsl(var(--matcha-60))",
        matchaBad: "hsl(var(--matcha-bad))",
        matchaContent: "hsl(var(--matcha-content))",
        matchaBase: "hsl(var(--matcha-base))",
        linkSelected: "hsl(var(--link-selected))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function ({ addUtilities }: PluginAPI) {
      addUtilities({
        ".pause-animation": {
          "animation-play-state": "paused",
        },
      });
    },
  ],
} satisfies Config;
