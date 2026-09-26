"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Send, Sparkles, ShieldCheck, Clock, CheckCircle2 } from "lucide-react";
import confetti from "canvas-confetti";
import AnimatedSection from "@/components/ui/AnimatedSection";

interface CTABannerProps {
  onOpenBooking: () => void;
}

export default function CTABanner({ onOpenBooking }: CTABannerProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.8 },
      });
    } catch {}
  };

  return (
    <section className="relative py-28 bg-[#070A1E] overflow-hidden">
      {/* Background Animated Gradient Aura */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-gradient-to-r from-sky-600/30 via-purple-600/30 to-pink-600/30 blur-3xl opacity-40"
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection direction="scale" duration={0.9}>
          <div className="relative rounded-3xl p-8 sm:p-14 bg-gradient-to-br from-[#0F143D] to-[#0A0D2A] border border-white/20 shadow-[0_0_80px_rgba(124,58,237,0.3)] overflow-hidden text-center space-y-8">
            
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-xs font-semibold text-sky-300 border border-white/15"
            >
              <Sparkles className="w-3.5 h-3.5 text-pink-400" />
              <span>READY TO SCALE YOUR VIDEO CONTENT?</span>
            </motion.div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Let&apos;s Cut Your Next <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-purple-400 to-pink-500">
                Viral Video Hit
              </span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Stop losing views to dull edits. Book a 15-minute consultation or drop your work email below to receive a free sample video review from our lead editor.
            </p>

            <div className="max-w-md mx-auto">
              {submitted ? (
                <div className="p-4 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-sm font-semibold flex items-center justify-center gap-2 animate-bounce">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <span>Thank you! We&apos;ll email you within 2 hours.</span>
                </div>
              ) : (
                <form onSubmit={handleQuickSubmit} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    required
                    placeholder="Enter your work email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-5 py-3.5 rounded-xl bg-slate-900/90 border border-white/20 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-sky-400 via-purple-600 to-pink-500 text-white font-bold text-xs uppercase tracking-wider hover:opacity-95 shadow-lg shadow-purple-600/40 flex items-center justify-center gap-2 transition hover:scale-105"
                  >
                    <Send className="w-4 h-4" />
                    <span>Get Free Audit</span>
                  </button>
                </form>
              )}
            </div>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold flex items-center gap-2 transition hover:scale-105"
              >
                <Calendar className="w-4 h-4 text-sky-400" />
                Schedule 1-on-1 Call Directly
              </button>

              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4 text-pink-400" />
                Response in &lt; 2 Hours
              </span>

              <span className="flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                No Long-Term Contracts
              </span>
            </div>

          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
