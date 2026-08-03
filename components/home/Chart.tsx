"use client";

import { useRef, useState, useEffect } from "react";
import {
  Area,
  AreaChart,
  ReferenceLine,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

const chartData = [
  { category: "Front-end Development", level: 0.1 },
  { category: "UX Research", level: 0.3 },
  { category: "UI Design", level: 0.65 },
  { category: "UX Design", level: 0.8 },
  { category: "Product Strategy", level: 0.65 },
  { category: "Brand Design", level: 0.35 },
  { category: "Product Management", level: 0.2 },
  { category: "", level: 0.1 },
];

export function Chart() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (reducedMotion.matches) {
      setPlay(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setPlay(true);
        observer.disconnect();
      },
      {
        threshold: 0.35,
      }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={wrapRef}
      className="w-full h-[330px] rounded-lg relative flex flex-col"
    >
      <div className="absolute left-0 top-[35%] text-monochrome110 font-plusJakartaSans text-lg">
        Done enough <br /> to work
      </div>

      <div className="absolute left-0 bottom-[12%] text-monochrome110 font-plusJakartaSans text-lg">
        Know enough <br /> to hang
      </div>

      <ResponsiveContainer className="self-end" width="90%" height="100%">
        <AreaChart
          data={chartData}
          margin={{ top: 40, right: 20, left: 44, bottom: 40 }}
        >
          <defs>
            <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#E9A545" stopOpacity={0.3} />
              <stop offset="100%" stopColor="#E9A545" stopOpacity={0} />
            </linearGradient>
          </defs>

          <XAxis
            dataKey="category"
            axisLine={false}
            tickLine={false}
            padding={{ left: 20, right: 20 }}
            tick={{
              fontSize: 16,
              width: 10,
              fill: "#383838",
              textAnchor: "right",
              fontFamily: "Plus Jakarta Sans",
            }}
            interval={0}
            height={50}
            orientation="top"
          />

          <YAxis hide domain={[0, 1]} />
          <ReferenceLine y={0.7} stroke="#C4C4C4" strokeWidth={1} />
          <ReferenceLine y={0.1} stroke="#C4C4C4" strokeWidth={1} />

          <Area
            type="monotone"
            dataKey="level"
            stroke="#E9A545"
            fill="url(#colorGradient)"
            strokeWidth={3}
            strokeLinecap="round"
            isAnimationActive={play}
            animationBegin={200}
            animationDuration={1400}
            animationEasing="ease-out"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
