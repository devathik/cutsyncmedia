"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Eye, Scissors, ExternalLink } from "lucide-react";
import { ProjectData } from "@/components/ui/VideoModal";
import AnimatedSection from "@/components/ui/AnimatedSection";

interface FeaturedWorkProps {
  onSelectProject: (project: ProjectData) => void;
  onOpenBooking: () => void;
}

export default function FeaturedWork({ onSelectProject, onOpenBooking }: FeaturedWorkProps) {
  const [activeFilter, setActiveFilter] = useState("All");

  const portfolioItems: ProjectData[] = [
    {
      id: "project-1",
      title: "Neon Cyberpunk Product Ad",
      category: "Ads",
      client: "Aura Tech Headphones",
      views: "1.8M",
      duration: "0:45",
      software: ["After Effects", "Premiere Pro", "Octane render"],
      description:
        "High-energy 3D motion graphics product commercial featuring 3D text tracking, synthwave audio sync, and punchy color grade.",
      thumbnailUrl:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: "project-2",
      title: "Hormozi-Style Viral Short",
      category: "Reels",
      client: "Alex Fitness Brand",
      views: "3.2M",
      duration: "0:58",
      software: ["Premiere Pro", "CapCut Pro", "DaVinci"],
      description:
        "Fast-paced vertical reel edited for maximum retention: animated kinetic captions, sound effects, emojis, and snappy jump-cuts.",
      thumbnailUrl:
        "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: "project-3",
      title: "Tokyo Cinematic Vlog Master",
      category: "YouTube",
      client: "Lost In Travel Co.",
      views: "940K",
      duration: "14:20",
      software: ["DaVinci Resolve", "Premiere Pro"],
      description:
        "Cinematic travel documentary with custom LUT color grade, immersive binaural ambient sound design, and smooth seamless transitions.",
      thumbnailUrl:
        "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: "project-4",
      title: "Iceland Luxury Wedding Film",
      category: "Cinematic",
      client: "Kristin & Mark",
      views: "450K",
      duration: "6:15",
      software: ["Premiere Pro", "Izotope RX", "DaVinci"],
      description:
        "Breathtaking 4K drone & ground footage wedding highlight film. Multi-mic audio sync, emotional story arc, and filmic grain grading.",
      thumbnailUrl:
        "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: "project-5",
      title: "SaaS Platform Launch Video",
      category: "Ads",
      client: "FlowMetrics AI",
      views: "1.1M",
      duration: "1:15",
      software: ["After Effects", "Cinema 4D"],
      description:
        "Clean, corporate 2D motion graphics explainer showing UI animations, vector illustrations, and upbeat voiceover sync.",
      thumbnailUrl:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: "project-6",
      title: "Podcast Shorts Pack (10x Edits)",
      category: "Reels",
      client: "The Growth Mindset Podcast",
      views: "4.5M",
      duration: "0:30",
      software: ["Premiere Pro", "Descript"],
      description:
        "High-yield podcast clip extraction, multi-speaker framing, highlight hook, and custom brand color subtitles.",
      thumbnailUrl:
        "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
  ];

  const categories = ["All", "Reels", "YouTube", "Ads", "Cinematic"];

  const filteredProjects =
    activeFilter === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <section id="portfolio" className="relative py-28 bg-black overflow-hidden border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <AnimatedSection direction="left" duration={0.8} className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-semibold text-sky-300">
              <Scissors className="w-3.5 h-3.5 text-pink-400" />
              <span>FEATURED WORK SHOWCASE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Edits That Captivate &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-purple-400 to-pink-500">Convert</span>
            </h2>
            <p className="text-slate-300 text-base">
              Explore our recent video post-production projects across YouTube, TikTok, high-converting commercial ads, and wedding films.
            </p>
          </div>

          {/* Filter Tabs in Brand Gradient */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-neutral-950 border border-white/10 backdrop-blur-md">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`relative px-4 py-2 rounded-xl text-xs font-semibold transition duration-300 cursor-pointer ${
                  activeFilter === cat
                    ? "text-white"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {activeFilter === cat && (
                  <motion.div
                    layoutId="activeFilterTab"
                    className="absolute inset-0 bg-gradient-to-r from-sky-400 via-purple-600 to-pink-500 rounded-xl shadow-lg shadow-purple-600/30"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Video Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                onClick={() => onSelectProject(project)}
                data-cursor="play"
                className="video-card group relative rounded-3xl overflow-hidden bg-neutral-950 border border-white/10 hover:border-sky-400/50 transition-all duration-500 shadow-xl cursor-pointer flex flex-col"
              >
                <div className="relative aspect-video w-full overflow-hidden bg-black">
                  <img
                    src={project.thumbnailUrl}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />

                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-black/80 backdrop-blur-md text-sky-400 border border-white/10">
                      {project.category}
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-black/60 backdrop-blur-md text-slate-300">
                      {project.duration}
                    </span>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-sky-400 via-purple-600 to-pink-500 p-0.5 shadow-lg shadow-pink-500/50 scale-90 group-hover:scale-100 transition-transform duration-300">
                      <div className="w-full h-full bg-black rounded-full flex items-center justify-center text-white">
                        <Play className="w-6 h-6 fill-current ml-0.5" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                      <span className="text-purple-300 font-medium">{project.client}</span>
                      <span className="flex items-center gap-1 text-slate-400">
                        <Eye className="w-3.5 h-3.5 text-pink-400" />
                        {project.views}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5">
                      {project.software.slice(0, 2).map((sw, i) => (
                        <span key={i} className="px-2 py-0.5 rounded bg-white/5 text-[10px] text-slate-300 border border-white/5">
                          {sw}
                        </span>
                      ))}
                    </div>

                    <span className="text-sky-400 font-medium group-hover:translate-x-1 transition-transform flex items-center gap-1">
                      Play Reel <ExternalLink className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Banner */}
        <AnimatedSection direction="scale" delay={0.2} className="mt-16 text-center">
          <p className="text-slate-400 text-sm mb-4">
            Need a custom edit format or specific brand style reference?
          </p>
          <button
            onClick={onOpenBooking}
            className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-sky-400 via-purple-600 to-pink-500 text-white font-bold text-xs uppercase tracking-widest hover:opacity-95 shadow-lg shadow-purple-600/30 transition hover:scale-105 cursor-pointer"
          >
            Request Custom Portfolio Demo
          </button>
        </AnimatedSection>

      </div>
    </section>
  );
}
