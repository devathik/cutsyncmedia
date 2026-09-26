"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorVariant, setCursorVariant] = useState<"default" | "hover" | "video">("default");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run on desktop/fine-pointer devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    setIsVisible(true);

    const onMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isVideoHover = target.closest("[data-cursor='play']") || target.closest(".video-card");
      const isHoverable = target.closest("a, button, input, select, textarea, [data-cursor='hover']");

      if (isVideoHover) {
        setCursorVariant("video");
      } else if (isHoverable) {
        setCursorVariant("hover");
      } else {
        setCursorVariant("default");
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden md:block">
      {/* Center dot */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-sky-400 rounded-full shadow-[0_0_10px_#38BDF8]"
        animate={{
          x: mousePosition.x - 5,
          y: mousePosition.y - 5,
          scale: cursorVariant === "hover" ? 0 : cursorVariant === "video" ? 0 : 1,
          opacity: cursorVariant === "default" ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 1000, damping: 50, mass: 0.1 }}
      />

      {/* Main Outer Ring / Play Badge */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-sky-400/50 flex items-center justify-center font-bold uppercase tracking-wider text-[10px]"
        animate={{
          x: mousePosition.x - (cursorVariant === "video" ? 36 : cursorVariant === "hover" ? 24 : 18),
          y: mousePosition.y - (cursorVariant === "video" ? 36 : cursorVariant === "hover" ? 24 : 18),
          width: cursorVariant === "video" ? 72 : cursorVariant === "hover" ? 48 : 36,
          height: cursorVariant === "video" ? 72 : cursorVariant === "hover" ? 48 : 36,
          backgroundColor:
            cursorVariant === "video"
              ? "rgba(109, 40, 217, 0.9)"
              : cursorVariant === "hover"
              ? "rgba(56, 189, 248, 0.15)"
              : "rgba(11, 15, 44, 0.2)",
          borderColor:
            cursorVariant === "video"
              ? "#DB2777"
              : cursorVariant === "hover"
              ? "#38BDF8"
              : "rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(4px)",
          boxShadow:
            cursorVariant === "video"
              ? "0 0 25px rgba(219, 39, 119, 0.6)"
              : cursorVariant === "hover"
              ? "0 0 15px rgba(56, 189, 248, 0.4)"
              : "0 0 0px transparent",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 28 }}
      >
        {cursorVariant === "video" && (
          <div className="flex flex-col items-center justify-center text-white">
            <svg className="w-5 h-5 fill-current ml-0.5" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
            <span className="text-[8px] tracking-widest mt-0.5">PLAY</span>
          </div>
        )}
      </motion.div>
    </div>
  );
}
