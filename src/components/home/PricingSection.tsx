"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, Sparkles, ShieldCheck, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

interface PricingSectionProps {
  onOpenBooking: (planName: string) => void;
}

export default function PricingSection({ onOpenBooking }: PricingSectionProps) {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "one-time">("monthly");

  const plans = [
    {
      name: "Shorts & Reels Pack",
      badge: "Fast Growth",
      priceMonthly: "$1,490",
      priceOneTime: "$1,790",
      period: "/ month",
      description: "Ideal for creators & brands wanting consistent viral short-form content across TikTok, IG & Shorts.",
      features: [
        "10x Vertical Edits (9:16 format)",
        "Dynamic Animated Subtitles & SFX",
        "48-Hour Turnaround per clip",
        "Pattern Interrupts & B-Roll Sync",
        "2 Rounds of Revisions per clip",
        "Dedicated Slack Channel",
      ],
      highlight: false,
    },
    {
      name: "YouTube & Shorts Growth",
      badge: "Most Popular",
      priceMonthly: "$2,990",
      priceOneTime: "$3,490",
      period: "/ month",
      description: "Complete YouTube channel management + vertical clips to maximize reach and watch time.",
      features: [
        "4x Long-Form YouTube Edits (Up to 15 min)",
        "12x Vertical Reels Extracted & Edited",
        "4x Custom Click-Worthy Thumbnails",
        "Full DaVinci Resolve Color Grade",
        "Unlimited Revisions",
        "Dedicated Lead Editor & Producer",
      ],
      highlight: true,
    },
    {
      name: "Enterprise Dedicated Suite",
      badge: "High-Volume Ads",
      priceMonthly: "$4,990",
      priceOneTime: "$5,990",
      period: "/ month",
      description: "Full post-production department for high-growth agencies, e-commerce ads, & media companies.",
      features: [
        "Unlimited Short & Long-Form Editing",
        "Priority 24-48h Rush Delivery",
        "2D/3D Motion Graphics & VFX Suite",
        "Commercial License Music & SFX",
        "Dedicated 2-Editor Team + Colorist",
        "Custom Frame.io Workflow Suite",
      ],
      highlight: false,
    },
  ];

  return (
    <section id="pricing" className="relative py-28 bg-[#070A1E] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header: Comes down from top */}
        <AnimatedSection direction="down" duration={0.8} className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-xs font-semibold text-purple-300">
            <Sparkles className="w-3.5 h-3.5 text-pink-400" />
            <span>TRANSPARENT PRICING PACKAGES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Simple Investment, <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-purple-400 to-pink-500">Unmatched ROI</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            No hidden fees, no long contracts. Pick a monthly retainer or a one-time project batch.
          </p>

          {/* Monthly vs One-time Toggle */}
          <div className="pt-4 flex items-center justify-center">
            <div className="p-1 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center gap-1 backdrop-blur-md">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`relative px-5 py-2 rounded-xl text-xs font-bold transition duration-300 ${
                  billingCycle === "monthly" ? "text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                {billingCycle === "monthly" && (
                  <motion.div
                    layoutId="pricingCycle"
                    className="absolute inset-0 bg-gradient-to-r from-sky-400 via-purple-600 to-pink-600 rounded-xl shadow-md"
                  />
                )}
                <span className="relative z-10 flex items-center gap-1">
                  Monthly Retainer <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px]">Save 15%</span>
                </span>
              </button>

              <button
                onClick={() => setBillingCycle("one-time")}
                className={`relative px-5 py-2 rounded-xl text-xs font-bold transition duration-300 ${
                  billingCycle === "one-time" ? "text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                {billingCycle === "one-time" && (
                  <motion.div
                    layoutId="pricingCycle"
                    className="absolute inset-0 bg-gradient-to-r from-sky-400 via-purple-600 to-pink-600 rounded-xl shadow-md"
                  />
                )}
                <span className="relative z-10">One-Time Project Batch</span>
              </button>
            </div>
          </div>
        </AnimatedSection>

        {/* Pricing Cards Grid with Left, Scale-up, Right Animations */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => {
            const cardDirection = idx === 0 ? "left" : idx === 1 ? "scale" : "right";

            return (
              <AnimatedSection
                key={plan.name}
                direction={cardDirection}
                delay={idx * 0.15}
                duration={0.8}
                className="h-full"
              >
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`relative rounded-3xl p-8 flex flex-col justify-between h-full transition-all duration-300 ${
                    plan.highlight
                      ? "bg-[#0F143D] border-2 border-sky-400/80 shadow-[0_0_50px_rgba(56,189,248,0.25)] lg:-translate-y-4"
                      : "bg-[#0D1233] border border-white/10 hover:border-white/20"
                  }`}
                >
                  {plan.highlight && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-sky-400 via-purple-600 to-pink-500 text-white text-[11px] font-extrabold uppercase tracking-widest shadow-md">
                      {plan.badge}
                    </div>
                  )}

                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                        {!plan.highlight && (
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-white/5 text-purple-300">
                            {plan.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-400 mt-2 min-h-[36px]">{plan.description}</p>
                    </div>

                    <div className="pt-2 flex items-baseline gap-1">
                      <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                        {billingCycle === "monthly" ? plan.priceMonthly : plan.priceOneTime}
                      </span>
                      <span className="text-xs text-slate-400 font-semibold">{plan.period}</span>
                    </div>

                    <div className="pt-4 border-t border-white/10 space-y-3">
                      {plan.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                          <div className="mt-0.5 w-4 h-4 rounded-full bg-sky-500/20 flex items-center justify-center text-sky-400 flex-shrink-0">
                            <Check className="w-3 h-3" />
                          </div>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-8">
                    <button
                      onClick={() => onOpenBooking(plan.name)}
                      className={`w-full py-3.5 px-6 rounded-xl font-bold text-xs uppercase tracking-widest transition flex items-center justify-center gap-2 ${
                        plan.highlight
                          ? "bg-gradient-to-r from-sky-400 via-purple-600 to-pink-500 text-white shadow-lg shadow-purple-600/40 hover:opacity-95"
                          : "bg-white/10 hover:bg-white/15 text-slate-200"
                      }`}
                    >
                      <span>Select Package</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Guarantee Banner scaling up */}
        <AnimatedSection direction="scale" delay={0.3} duration={0.6} className="mt-12">
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-emerald-400 flex-shrink-0" />
              <div>
                <span className="font-bold text-white block">100% Risk-Free Guarantee</span>
                <span>If you aren&apos;t wowed by your first cut, we will re-edit it for free or refund your first draft.</span>
              </div>
            </div>
            <button
              onClick={() => onOpenBooking("Custom Enterprise Plan")}
              className="text-sky-400 font-bold hover:underline whitespace-nowrap"
            >
              Need a Custom Scale Contract? &rarr;
            </button>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}
