"use client";

import React from "react";
import { motion } from "framer-motion";
import { Play, Sparkles, ArrowRight, ShieldCheck, Flame, Scissors, Star, Layers, Eye } from "lucide-react";
import { ProjectData } from "@/components/ui/VideoModal";
import AnimatedSection from "@/components/ui/AnimatedSection";

interface HeroProps {
  onOpenBooking: () => void;
  onSelectProject: (project: ProjectData) => void;
}

export default function Hero({ onOpenBooking, onSelectProject }: HeroProps) {
  const heroProject: ProjectData = {
    id: "hero-showreel",
    title: "CutSync 2026 Cinematic Showreel",
    category: "Agency Showreel",
    client: "Global Brands & Creators",
    views: "2.4M+",
    duration: "1:45",
    software: ["Premiere Pro", "After Effects", "DaVinci Resolve"],
    description:
      "A high-octane montage highlighting our best commercial edits, motion graphic sequences, color grading, and viral short-form cuts.",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  };

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-black">
      {/* Dynamic Animated Gradient Aurora Blobs Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            y: [0, -40, 0],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 left-1/4 w-[650px] h-[650px] bg-sky-600/20 rounded-full blur-[160px]"
        />
        <motion.div
          animate={{
            scale: [1.3, 1, 1.3],
            x: [0, -60, 0],
            y: [0, 60, 0],
            rotate: [0, -90, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 -right-20 w-[600px] h-[600px] bg-purple-600/25 rounded-full blur-[170px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            x: [0, 40, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-20 left-10 w-[550px] h-[550px] bg-pink-600/20 rounded-full blur-[160px]"
        />

        {/* Grid lines background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column */}
          <AnimatedSection direction="left" duration={0.8} className="lg:col-span-7 space-y-8 text-center lg:text-left">
            {/* Tagline Pill */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.12] backdrop-blur-md text-xs font-semibold text-sky-300 shadow-inner"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <Scissors className="w-3.5 h-3.5 text-pink-400" />
              <span>PREMIUM VIDEO EDITING &amp; MOTION GRAPHICS AGENCY</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ x: -60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-6xl xl:text-7xl font-extrabold text-white tracking-tight leading-[1.08]"
            >
              We Cut. <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-purple-400 to-pink-500 drop-shadow-[0_0_35px_rgba(219,39,119,0.4)]">
                You Shine.
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed"
            >
              We transform raw footage into captivating, retention-engineered videos that dominate social algorithms, elevate brands, and convert viewers into loyal clients.
            </motion.p>

            {/* Buttons in Signature Branding Colors */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-sky-400 via-purple-600 to-pink-500 text-white font-bold text-sm uppercase tracking-wider shadow-[0_0_35px_rgba(124,58,237,0.5)] hover:shadow-[0_0_50px_rgba(219,39,119,0.7)] hover:scale-[1.05] active:scale-[0.98] transition duration-300 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Book Free Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onSelectProject(heroProject)}
                data-cursor="play"
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/15 text-slate-200 font-semibold text-sm flex items-center justify-center gap-3 backdrop-blur-md transition duration-300 hover:border-sky-400/50 hover:scale-[1.03] cursor-pointer"
              >
                <div className="w-7 h-7 rounded-full bg-sky-500/20 flex items-center justify-center text-sky-400 border border-sky-400/40">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </div>
                <span>Watch 2026 Showreel</span>
              </button>
            </motion.div>

            {/* Proof Badges */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-400 border-t border-white/10"
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {["1507003211169-0a1dd7228f2d", "1534528741775-53994a69daeb", "1500648767791-00dcc994a43e"].map((id, i) => (
                    <img
                      key={i}
                      src={`https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=80&q=80`}
                      alt="Client avatar"
                      className="w-7 h-7 rounded-full border-2 border-black object-cover"
                    />
                  ))}
                </div>
                <div>
                  <div className="flex text-amber-400 text-[10px]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current" />
                    ))}
                  </div>
                  <span className="font-semibold text-slate-200">50+ Creators &amp; Brands</span>
                </div>
              </div>

              <div className="h-4 w-px bg-white/10 hidden sm:block" />

              <div className="flex items-center gap-1.5 text-slate-300">
                <Flame className="w-4 h-4 text-pink-500" />
                <span><strong className="text-white font-bold">500M+</strong> Views Generated</span>
              </div>

              <div className="h-4 w-px bg-white/10 hidden sm:block" />

              <div className="flex items-center gap-1.5 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>48-Hour Turnaround</span>
              </div>
            </motion.div>
          </AnimatedSection>

          {/* Right Column: Parallax Card on Pure Black */}
          <AnimatedSection direction="right" duration={0.9} delay={0.2} className="lg:col-span-5 relative flex justify-center">
            <motion.div
              whileHover={{ scale: 1.03, rotate: 0.5 }}
              onClick={() => onSelectProject(heroProject)}
              data-cursor="play"
              className="video-card relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden bg-neutral-950 border border-white/15 shadow-[0_0_50px_rgba(56,189,248,0.25)] group cursor-pointer transition-all duration-500"
            >
              <img
                src={heroProject.thumbnailUrl}
                alt="Showreel Preview"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-75 transition-opacity" />

              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/15 text-[11px] font-semibold text-sky-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  REC 4K • 60 FPS
                </span>

                <span className="px-3 py-1 rounded-full bg-pink-500/20 backdrop-blur-md border border-pink-500/40 text-[11px] font-semibold text-pink-300 flex items-center gap-1">
                  <Layers className="w-3 h-3" />
                  VFX + COLOR
                </span>
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.25 }}
                  className="w-20 h-20 rounded-full bg-gradient-to-tr from-sky-400 via-purple-600 to-pink-500 p-0.5 shadow-[0_0_40px_rgba(219,39,119,0.8)] group-hover:shadow-[0_0_60px_rgba(56,189,248,0.9)] transition-shadow duration-300"
                >
                  <div className="w-full h-full bg-black/90 rounded-full flex items-center justify-center backdrop-blur-md">
                    <Play className="w-8 h-8 text-white fill-current ml-1" />
                  </div>
                </motion.div>
              </div>

              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/[0.06] backdrop-blur-xl border border-white/15 space-y-1">
                <div className="flex items-center justify-between text-xs text-sky-300 font-medium">
                  <span>SHOWREEL 2026</span>
                  <span className="flex items-center gap-1">
                    <Eye className="w-3.5 h-3.5 text-pink-400" /> 2.4M Views
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white leading-tight">Master Cinematic Reel</h3>
                <p className="text-xs text-slate-300">Click to play with full audio &amp; breakdown</p>
              </div>
            </motion.div>

            {/* Sub Floating Mini Widget 1 */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 p-3.5 rounded-2xl bg-neutral-950/95 border border-sky-400/40 backdrop-blur-xl shadow-2xl z-20"
            >
              <div className="w-10 h-10 rounded-xl bg-sky-500/20 flex items-center justify-center text-sky-400 border border-sky-400/40">
                <Scissors className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">Retention Optimized</div>
                <div className="text-[10px] text-emerald-400 font-semibold">+84% Average Watch Time</div>
              </div>
            </motion.div>

            {/* Sub Floating Mini Widget 2 */}
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 hidden sm:flex items-center gap-3 p-3.5 rounded-2xl bg-neutral-950/95 border border-pink-500/40 backdrop-blur-xl shadow-2xl z-20"
            >
              <div className="w-10 h-10 rounded-xl bg-pink-500/20 flex items-center justify-center text-pink-400 border border-pink-500/40">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">Ultra-Crisp 4K</div>
                <div className="text-[10px] text-purple-300 font-semibold">DaVinci Color Pipeline</div>
              </div>
            </motion.div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
}
