"use client";

import React from "react";

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
}

export default function Logo({ className = "", iconOnly = false, size = "md" }: LogoProps) {
  const sizeClasses = {
    sm: { icon: 28, text: "text-lg", subtext: "text-[10px]" },
    md: { icon: 36, text: "text-2xl", subtext: "text-xs" },
    lg: { icon: 48, text: "text-3xl", subtext: "text-sm" },
    xl: { icon: 64, text: "text-4xl", subtext: "text-base" },
  }[size];

  return (
    <div className={`flex items-center gap-3 select-none group cursor-pointer ${className}`}>
      {/* Icon: C-Shaped Play Button with Gradient */}
      <div className="relative flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-sky-400 via-purple-600 to-pink-500 blur-sm opacity-60 group-hover:opacity-100 transition duration-300"></div>
        <svg
          width={sizeClasses.icon}
          height={sizeClasses.icon}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative drop-shadow-md"
        >
          <defs>
            <linearGradient id="cutsyncGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="50%" stopColor="#7C3AED" />
              <stop offset="100%" stopColor="#DB2777" />
            </linearGradient>
            <linearGradient id="glowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#60A5FA" />
              <stop offset="100%" stopColor="#C026D3" />
            </linearGradient>
          </defs>

          {/* Camera Viewfinder Bracket Corners */}
          <path d="M 22 28 L 22 18 L 32 18" stroke="url(#cutsyncGrad)" strokeWidth="4" strokeLinecap="round" />
          <path d="M 78 28 L 78 18 L 68 18" stroke="url(#cutsyncGrad)" strokeWidth="4" strokeLinecap="round" />
          <path d="M 22 72 L 22 82 L 32 82" stroke="url(#cutsyncGrad)" strokeWidth="4" strokeLinecap="round" />
          <path d="M 78 72 L 78 82 L 68 82" stroke="url(#cutsyncGrad)" strokeWidth="4" strokeLinecap="round" />

          {/* Outer 'C' Circular Arc */}
          <path
            d="M 68 28 A 32 32 0 1 0 68 72"
            stroke="url(#cutsyncGrad)"
            strokeWidth="8"
            strokeLinecap="round"
          />

          {/* Play Triangle in Center */}
          <path
            d="M 45 36 L 66 50 L 45 64 Z"
            fill="url(#cutsyncGrad)"
            className="transition-transform duration-300 group-hover:scale-110 origin-center"
          />
        </svg>
      </div>

      {!iconOnly && (
        <div className="flex flex-col justify-center leading-none">
          <div className="flex items-center">
            <span className={`font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-sky-200 ${sizeClasses.text}`}>
              Cut
            </span>
            <span className={`font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-purple-400 to-pink-500 ${sizeClasses.text}`}>
              Sync
            </span>
          </div>
          <span className={`font-medium tracking-[0.28em] uppercase text-purple-400/90 ${sizeClasses.subtext} mt-0.5`}>
            media
          </span>
        </div>
      )}
    </div>
  );
}
