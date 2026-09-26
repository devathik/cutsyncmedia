"use client";

import React from "react";
import { motion } from "framer-motion";
import { UploadCloud, Layers, Wand2, Sliders, CheckCircle2, Clock, Sparkles } from "lucide-react";

export default function ProcessSection() {
  const steps = [
    {
      step: "01",
      title: "RAW Footage & Briefing",
      subtitle: "Seamless File Transfer",
      icon: UploadCloud,
      description:
        "Upload your raw camera footage or phone videos to our secure Frame.io / Google Drive suite. Share your style references or brand guidelines in under 5 minutes.",
      time: "Day 1",
    },
    {
      step: "02",
      title: "Rough Cut & Pacing Sculpt",
      subtitle: "Story Curation",
      icon: Layers,
      description:
        "Our senior editors trim out dead air, construct a high-retention storyline, and sync video to beat transitions for maximum engagement.",
      time: "Day 1-2",
    },
    {
      step: "03",
      title: "Motion, Subtitles & SFX",
      subtitle: "Visual Magic",
      icon: Wand2,
      description:
        "We inject custom animated kinetic captions, sound effects, B-roll overlays, pattern interrupts, and 2D/3D graphics to keep viewers hooked.",
      time: "Day 2",
    },
    {
      step: "04",
      title: "Color Grade & Audio Master",
      subtitle: "Hollywood Finish",
      icon: Sliders,
      description:
        "Your footage is passed to our DaVinci Resolve suite for node color grading, skin tone correction, background noise cleanup, and sound leveling.",
      time: "Day 2",
    },
    {
      step: "05",
      title: "Delivery & Frame.io Notes",
      subtitle: "100% Satisfaction Guarantee",
      icon: CheckCircle2,
      description:
        "Receive your polished 4K video. Need a tweak? Leave time-stamped comments directly on Frame.io for lightning-fast revisions.",
      time: "Final 48h",
    },
  ];

  return (
    <section id="process" className="relative py-28 bg-[#090D28] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-xs font-semibold text-purple-300">
            <Sparkles className="w-3.5 h-3.5 text-pink-400" />
            <span>THE CUTSYNC WORKFLOW</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            From Raw Footage to <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-purple-400 to-pink-500">Viral Masterpiece</span> in 5 Steps
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Our streamlined post-production pipeline delivers studio-quality edits without the headaches or long turnaround times.
          </p>
        </div>

        {/* Timeline Pipeline */}
        <div className="relative">
          {/* Central Connecting Gradient Line for Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-10 bottom-10 w-1 bg-gradient-to-b from-sky-400 via-purple-600 to-pink-500 -translate-x-1/2 rounded-full opacity-40" />

          <div className="space-y-12 lg:space-y-16">
            {steps.map((item, idx) => {
              const Icon = item.icon;
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className={`relative flex flex-col lg:flex-row items-center ${
                    isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Left or Right Content Box */}
                  <div className="w-full lg:w-1/2 p-4 sm:p-6">
                    <div className="relative p-8 rounded-3xl bg-[#0E1338] border border-white/10 hover:border-sky-500/40 transition duration-300 shadow-xl space-y-4 group">
                      <div className="flex items-center justify-between">
                        <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-pink-500">
                          {item.step}
                        </span>
                        <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-white/5 border border-white/10 text-sky-300 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {item.time}
                        </span>
                      </div>

                      <div>
                        <div className="text-xs font-semibold text-pink-400 uppercase tracking-wider">
                          {item.subtitle}
                        </div>
                        <h3 className="text-xl font-bold text-white mt-1 group-hover:text-sky-300 transition-colors">
                          {item.title}
                        </h3>
                      </div>

                      <p className="text-sm text-slate-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Circle Node Icon */}
                  <div className="my-4 lg:my-0 lg:absolute lg:left-1/2 lg:-translate-x-1/2 z-10 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-sky-400 via-purple-600 to-pink-500 p-0.5 shadow-lg shadow-purple-600/40">
                      <div className="w-full h-full bg-[#090D28] rounded-[14px] flex items-center justify-center text-white">
                        <Icon className="w-6 h-6 text-sky-400" />
                      </div>
                    </div>
                  </div>

                  {/* Empty Spacer Column for Desktop */}
                  <div className="hidden lg:block lg:w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
