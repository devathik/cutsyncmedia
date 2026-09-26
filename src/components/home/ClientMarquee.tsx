"use client";

import React from "react";
import { YoutubeIcon } from "@/components/ui/BrandIcons";
import { Tv, Flame, Award, Film, PlayCircle, Globe, Video } from "lucide-react";

export default function ClientMarquee() {
  const clients = [
    { name: "Apex Media", icon: YoutubeIcon, stat: "1.2M Subs" },
    { name: "Vanguard Tech", icon: Globe, stat: "B2B SaaS Ads" },
    { name: "Nomad Vlogs", icon: PlayCircle, stat: "10M+ Shorts Views" },
    { name: "Aura Fitness", icon: Flame, stat: "100+ Reels" },
    { name: "Starlight Weddings", icon: Film, stat: "Cinematic 4K" },
    { name: "TechOverhaul", icon: Tv, stat: "450k Subs" },
    { name: "Quantum Agency", icon: Award, stat: "High-ROI Ads" },
    { name: "Luxe Lifestyle", icon: Video, stat: "2.8M Views" },
  ];

  return (
    <section className="relative py-10 bg-[#070A1E] border-y border-white/[0.08] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-6 text-center">
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
          Trusted By High-Growth Creators, Agencies &amp; Global Brands
        </p>
      </div>

      <div className="relative flex overflow-x-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <div className="animate-marquee flex gap-12 whitespace-nowrap py-2">
          {[...clients, ...clients].map((client, idx) => {
            const Icon = client.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3 px-5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-sky-500/40 hover:bg-white/[0.06] transition-all duration-300 group cursor-default"
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-sky-500/20 to-purple-500/20 flex items-center justify-center text-sky-400 group-hover:scale-110 transition-transform">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-sm font-bold text-slate-200 group-hover:text-white transition-colors">
                    {client.name}
                  </span>
                  <span className="block text-[10px] text-purple-300 font-medium">{client.stat}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
