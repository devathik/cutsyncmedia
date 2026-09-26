"use client";

import React from "react";
import { motion } from "framer-motion";
import { Video, Eye, Clock, ThumbsUp } from "lucide-react";

export default function StatsSection() {
  const stats = [
    {
      number: "500+",
      label: "Videos Edited & Delivered",
      sublabel: "Shorts, YouTube & Commercials",
      icon: Video,
      color: "from-sky-400 to-blue-600",
    },
    {
      number: "50M+",
      label: "Total Organic Views",
      sublabel: "Across TikTok, IG & YouTube",
      icon: Eye,
      color: "from-purple-400 to-pink-600",
    },
    {
      number: "48h",
      label: "Average Turnaround",
      sublabel: "With Rush Delivery Option",
      icon: Clock,
      color: "from-pink-400 to-red-600",
    },
    {
      number: "99.4%",
      label: "Client Retention Rate",
      sublabel: "Based on 50+ Ongoing Retainers",
      icon: ThumbsUp,
      color: "from-emerald-400 to-teal-600",
    },
  ];

  return (
    <section className="relative py-20 bg-[#070A1E] border-y border-white/[0.08] overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-sky-500/5 via-purple-500/5 to-pink-500/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative p-6 rounded-3xl bg-[#0D1233] border border-white/10 hover:border-sky-400/40 transition duration-300 shadow-xl flex flex-col justify-between group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${stat.color} p-0.5 shadow-md`}>
                    <div className="w-full h-full bg-[#0D1233] rounded-[14px] flex items-center justify-center text-white">
                      <Icon className="w-6 h-6 text-sky-400 group-hover:text-white transition" />
                    </div>
                  </div>

                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </div>

                <div>
                  <div className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-sky-400 group-hover:to-pink-500 transition-all">
                    {stat.number}
                  </div>
                  <div className="text-sm font-bold text-slate-200 mt-1">{stat.label}</div>
                  <div className="text-xs text-slate-400 mt-0.5">{stat.sublabel}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
