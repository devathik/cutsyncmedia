"use client";

import React from "react";
import { motion } from "framer-motion";
import { YoutubeIcon } from "@/components/ui/BrandIcons";
import { Smartphone, Flame, Wand2, Film, Sliders, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";

interface ServicesSectionProps {
  onOpenBooking: (serviceName: string) => void;
}

export default function ServicesSection({ onOpenBooking }: ServicesSectionProps) {
  const services = [
    {
      id: "short-form",
      title: "Short-Form & Reels",
      badge: "Viral Pacing",
      icon: Smartphone,
      gradient: "from-sky-400 to-blue-600",
      description:
        "High-retention edits for TikTok, IG Reels, and Shorts. Packed with dynamic captions, sound effects, B-roll overlays, and pattern interrupts.",
      deliverables: ["Custom Animated Subtitles", "Sound Effects & Audio Leveling", "Pattern Interrupts & B-Roll", "9:16 Vertical Optimization"],
    },
    {
      id: "youtube",
      title: "YouTube Video Editing",
      badge: "Retention Engineered",
      icon: YoutubeIcon,
      gradient: "from-red-500 to-purple-600",
      description:
        "Engaging long-form editing that boosts Average View Duration and click-through rates. Includes story arc pacing, motion graphics, and chaptering.",
      deliverables: ["Pacing & Story Arc Sculpting", "Custom Lower Thirds & Intro", "B-Roll & Graphic Overlay Sync", "Clickable Thumbnail Concept"],
    },
    {
      id: "commercial-ads",
      title: "Commercial & Ad Edits",
      badge: "High-ROI Converting",
      icon: Flame,
      gradient: "from-amber-400 to-pink-600",
      description:
        "Performance-focused ad cuts for Meta, TikTok, and YouTube Ads engineered to grab attention in the first 3 seconds and drive sales.",
      deliverables: ["Hook Variation Testing", "Strong CTA & Text Overlays", "UGC & Product Reel Editing", "Multiple Aspect Ratio Export"],
    },
    {
      id: "motion-graphics",
      title: "2D/3D Motion Graphics",
      badge: "Cinematic Polish",
      icon: Wand2,
      gradient: "from-purple-500 to-pink-600",
      description:
        "Elevate your video quality with custom After Effects animated titles, lower thirds, 3D logo reveals, callouts, and data visualization.",
      deliverables: ["Custom Kinetic Typography", "3D Object & Product Callouts", "Logo Reveal & Stinger Transitions", "Explainer & Map Animations"],
    },
    {
      id: "cinematic-films",
      title: "Cinematic & Wedding Films",
      badge: "Emotional Storytelling",
      icon: Film,
      gradient: "from-emerald-400 to-teal-600",
      description:
        "Breathtaking highlight films for weddings, brand events, and documentaries. Multi-cam sync, atmospheric soundscapes, and cinematic pacing.",
      deliverables: ["Multi-Cam Audio & Video Sync", "Speeches & Audio Mastering", "Story-Driven Highlight Reel", "Full Speech & Ceremony Cut"],
    },
    {
      id: "color-audio",
      title: "Color Grading & Audio Sync",
      badge: "Hollywood Quality",
      icon: Sliders,
      gradient: "from-cyan-400 to-purple-600",
      description:
        "DaVinci Resolve studio color grading and audio mastering. Look creation, LUT development, skin tone correction, and immersive sound design.",
      deliverables: ["DaVinci Resolve Color Grade", "Skin Tone & Lighting Balancing", "Dialogue Cleanup & Noise Reduction", "Custom SFX & Atmospheric Audio"],
    },
  ];

  return (
    <section id="services" className="relative py-28 bg-[#090D28] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-sky-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-xs font-semibold text-purple-300">
            <Sparkles className="w-3.5 h-3.5 text-pink-400" />
            <span>OUR POST-PRODUCTION SUITE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Post-Production Services Built to <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-purple-400 to-pink-500">Go Viral</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Whether you need daily high-converting short-form reels or full 4K documentary editing, our specialized editors deliver broadcast-quality cuts.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative p-8 rounded-3xl bg-[#0E1338]/80 border border-white/[0.08] hover:border-sky-500/50 hover:bg-[#121845] transition-all duration-300 shadow-lg hover:shadow-[0_0_35px_rgba(56,189,248,0.15)] flex flex-col justify-between"
              >
                {/* Glow pill behind icon */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} p-0.5 shadow-md`}>
                      <div className="w-full h-full bg-[#0E1338] rounded-[14px] flex items-center justify-center text-white group-hover:bg-transparent transition duration-300">
                        <Icon className="w-7 h-7 text-sky-400 group-hover:text-white transition" />
                      </div>
                    </div>

                    <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-white/5 border border-white/10 text-sky-300">
                      {service.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Deliverables List */}
                  <div className="pt-4 border-t border-white/10 space-y-2">
                    <div className="text-xs font-semibold text-purple-300 uppercase tracking-wider mb-2">
                      Key Deliverables:
                    </div>
                    {service.deliverables.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action CTA */}
                <div className="pt-6">
                  <button
                    onClick={() => onOpenBooking(service.title)}
                    className="w-full py-3 px-4 rounded-xl bg-white/[0.05] hover:bg-gradient-to-r hover:from-sky-400 hover:to-pink-500 text-slate-200 hover:text-white font-semibold text-xs tracking-wider uppercase transition-all duration-300 border border-white/10 hover:border-transparent flex items-center justify-center gap-2"
                  >
                    <span>Request Quote</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
