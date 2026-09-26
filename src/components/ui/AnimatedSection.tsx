"use client";

import React from "react";
import { motion } from "framer-motion";

interface AnimatedSectionProps {
  children: React.ReactNode;
  direction?: "left" | "right" | "up" | "down" | "scale" | "scale-up";
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

export default function AnimatedSection({
  children,
  direction = "up",
  delay = 0,
  duration = 0.7,
  className = "",
  once = true,
}: AnimatedSectionProps) {
  const getVariants = () => {
    switch (direction) {
      case "left":
        return {
          hidden: { opacity: 0, x: -80, scale: 0.95 },
          visible: { opacity: 1, x: 0, scale: 1 },
        };
      case "right":
        return {
          hidden: { opacity: 0, x: 80, scale: 0.95 },
          visible: { opacity: 1, x: 0, scale: 1 },
        };
      case "scale":
      case "scale-up":
        return {
          hidden: { opacity: 0, scale: 0.75, y: 30 },
          visible: { opacity: 1, scale: 1, y: 0 },
        };
      case "down":
        return {
          hidden: { opacity: 0, y: -60, scale: 0.95 },
          visible: { opacity: 1, y: 0, scale: 1 },
        };
      case "up":
      default:
        return {
          hidden: { opacity: 0, y: 60, scale: 0.95 },
          visible: { opacity: 1, y: 0, scale: 1 },
        };
    }
  };

  return (
    <motion.div
      variants={getVariants()}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.2 }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // Smooth cubic-bezier cinematic curve
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
