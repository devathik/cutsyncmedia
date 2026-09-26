"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Send, CheckCircle2, Video, Sparkles, Clock, ShieldCheck } from "lucide-react";
import confetti from "canvas-confetti";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export default function BookingModal({ isOpen, onClose, defaultService = "YouTube & Shorts Package" }: BookingModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: defaultService,
    budget: "$1,000 - $3,000",
    details: "",
    rawFootageLink: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    
    // Trigger confetti burst
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#38BDF8", "#7C3AED", "#DB2777"],
      });
    } catch {
      // fallback if confetti fails
    }
  };

  const resetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={resetAndClose}
          className="fixed inset-0 bg-[#070A1A]/80 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-[#0F1436]/90 border border-white/10 rounded-2xl p-6 sm:p-8 shadow-[0_0_50px_rgba(109,40,217,0.3)] z-10 overflow-hidden"
        >
          {/* Accent glow elements */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-pink-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-sky-500/20 rounded-full blur-3xl pointer-events-none" />

          {/* Close button */}
          <button
            onClick={resetAndClose}
            className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {submitted ? (
            <div className="py-10 text-center flex flex-col items-center justify-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-sky-400 via-purple-600 to-pink-500 p-0.5 flex items-center justify-center shadow-lg shadow-purple-500/40 animate-pulse">
                <div className="w-full h-full bg-[#0F1436] rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-sky-400" />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white">Consultation Request Received!</h3>
              <p className="text-slate-300 max-w-md text-sm leading-relaxed">
                Thank you, <span className="text-sky-300 font-semibold">{formData.name || "there"}</span>! Our lead editor will review your project requirements and get back to you within <span className="text-pink-400 font-semibold">2 hours</span>.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row gap-3 w-full justify-center">
                <a
                  href="https://calendly.com"
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 via-purple-600 to-pink-600 text-white font-semibold text-sm flex items-center justify-center gap-2 hover:opacity-90 transition shadow-lg shadow-purple-500/30"
                >
                  <Calendar className="w-4 h-4" />
                  Pick a Instant 15-Min Call Time
                </a>
                <button
                  onClick={resetAndClose}
                  className="px-6 py-3 rounded-xl bg-white/10 text-slate-300 font-semibold text-sm hover:bg-white/15 transition"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div className="flex items-center gap-2 text-sky-400 text-xs font-semibold uppercase tracking-widest mb-1">
                <Sparkles className="w-4 h-4" />
                <span>Start Your Video Project</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Book Your Free <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-purple-400 to-pink-500">Consultation</span>
              </h2>
              <p className="text-slate-400 text-sm mt-1">
                Tell us about your project vision, timeline, or footage. We&apos;ll build a customized post-production strategy.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Alex Rivera"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-900/80 border border-slate-700/80 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Work Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="alex@brand.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-900/80 border border-slate-700/80 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Primary Editing Service</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-slate-900/80 border border-slate-700/80 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition"
                    >
                      <option value="Shorts & Reels Editing">Short-Form & Reels (TikTok / IG / Shorts)</option>
                      <option value="YouTube Video Production">YouTube Video Editing & Thumbnails</option>
                      <option value="Commercial & Ad Edits">Commercial & Brand Ads</option>
                      <option value="Motion Graphics & VFX">2D/3D Motion Graphics & VFX</option>
                      <option value="Cinematic & Wedding Films">Cinematic & Wedding Films</option>
                      <option value="Color Grading & Audio Sync">Color Grading & Audio Mastering</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Estimated Monthly Budget</label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full bg-slate-900/80 border border-slate-700/80 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition"
                    >
                      <option value="Under $1,000">Under $1,000 / mo</option>
                      <option value="$1,000 - $3,000">$1,000 - $3,000 / mo</option>
                      <option value="$3,000 - $7,000">$3,000 - $7,000 / mo</option>
                      <option value="$7,000+">$7,000+ / mo (Dedicated Suite)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Project Goals / Raw Footage Link (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about video length, posting frequency, desired style reference (e.g. Alex Hormozi style, cinematic vlog, corporate ad)..."
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    className="w-full bg-slate-900/80 border border-slate-700/80 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    NDAs Available on Request
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-sky-400" />
                    Response in &lt; 2 hours
                  </span>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-sky-400 via-purple-600 to-pink-500 text-white font-bold text-sm tracking-wide flex items-center justify-center gap-2 hover:opacity-95 shadow-lg shadow-purple-600/30 transition duration-200"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Consultation Request</span>
                </button>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
