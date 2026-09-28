"use client";

import React from "react";
import Logo from "@/components/ui/Logo";
import { YoutubeIcon, InstagramIcon, TwitterIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

interface FooterProps {
  onOpenBooking: () => void;
}

export default function Footer({ onOpenBooking }: FooterProps) {
  const socials = [
    { name: "YouTube", icon: YoutubeIcon, href: "#" },
    { name: "Instagram", icon: InstagramIcon, href: "#" },
    { name: "Twitter / X", icon: TwitterIcon, href: "#" },
    { name: "LinkedIn", icon: LinkedinIcon, href: "#" },
  ];

  return (
    <footer className="relative bg-black border-t border-white/10 text-slate-400 overflow-hidden pt-20 pb-12">
      {/* Decorative Large Background Wordmark Backdrop */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none select-none text-[12vw] font-black text-white/[0.03] tracking-tighter uppercase whitespace-nowrap">
        CutSync Media
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-6">
            <Logo size="lg" />
            <p className="text-sm text-slate-300 max-w-sm leading-relaxed">
              CutSync Media is a premium video post-production agency. We transform raw footage into retention-engineered YouTube videos, viral reels, and high-converting commercial ads.
            </p>

            <div className="flex items-center gap-3">
              {socials.map((soc) => {
                const Icon = soc.icon;
                return (
                  <a
                    key={soc.name}
                    href={soc.href}
                    aria-label={soc.name}
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-gradient-to-tr hover:from-sky-400 hover:via-purple-600 hover:to-pink-500 hover:border-transparent transition duration-300 shadow-md"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Navigation</h3>
            <ul className="space-y-2.5 text-xs">
              {["Services", "Portfolio", "How It Works", "Pricing", "Testimonials", "FAQ"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s+/g, "")}`}
                    className="hover:text-sky-400 transition-colors flex items-center gap-1 group"
                  >
                    <span>{item}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Offered */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Editing Suite</h3>
            <ul className="space-y-2.5 text-xs">
              {[
                "Short-Form & Reels",
                "YouTube Video Edits",
                "Commercial Ads",
                "2D/3D Motion Graphics",
                "Cinematic Film Cut",
                "DaVinci Color Grading",
              ].map((service) => (
                <li key={service}>
                  <button
                    onClick={onOpenBooking}
                    className="hover:text-pink-400 transition-colors text-left cursor-pointer"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Get in Touch</h3>
            <ul className="space-y-3 text-xs">
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-400" />
                <a href="mailto:hello@cutsyncmedia.com" className="hover:text-white transition">
                  hello@cutsyncmedia.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-purple-400" />
                <a href="tel:+18005552887" className="hover:text-white transition">
                  +1 (800) 555-CUTS
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-pink-400 mt-0.5" />
                <span>Post-Production Studio HQ<br />Los Angeles &amp; Remote Global</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} CutSync Media. All Rights Reserved. Crafted for high performance.
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-300 transition">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition">Terms of Service</a>
            <a href="#" className="hover:text-slate-300 transition">Security &amp; Frame.io NDAs</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
