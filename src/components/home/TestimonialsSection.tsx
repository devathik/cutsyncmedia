"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight, Sparkles, CheckCircle2 } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      quote:
        "CutSync Media completely revolutionized our YouTube channel. Their retention pacing and kinetic motion graphics boosted our average watch time by 62%, taking us from 40k to 350k subscribers in under 5 months!",
      author: "Marcus Vance",
      title: "Founder & Lead Creator, TechOverhaul",
      views: "+310% Channel Growth",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    },
    {
      id: 2,
      quote:
        "Finding an editing team that understands viral TikTok hooks is nearly impossible — until we hired CutSync. They edit 15 vertical reels for us every week, and 3 of them hit over 1 Million views last month alone.",
      author: "Elena Rostova",
      title: "CMO, Nomad Vlogs & Apparel",
      views: "12.4M Reels Views",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    },
    {
      id: 3,
      quote:
        "Our Meta ad ROAS jumped from 1.8x to 4.2x after switching our commercial cuts to CutSync Media. Their 48-hour turnaround speed allows us to test new hook variations every single week.",
      author: "David Chen",
      title: "Head of Growth, Vanguard SaaS",
      views: "4.2x Ad ROAS",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="relative py-28 bg-[#090D28] overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-xs font-semibold text-sky-300">
            <Sparkles className="w-3.5 h-3.5 text-pink-400" />
            <span>CLIENT REVIEWS &amp; CASE STUDIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Loved by Top <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-purple-400 to-pink-500">Creators &amp; Brands</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            See how our retention-engineered post-production helps creators build audiences and brands scale revenue.
          </p>
        </div>

        {/* Testimonial Card Slider */}
        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="relative p-8 sm:p-12 rounded-3xl bg-[#0E1338] border border-white/10 shadow-[0_0_50px_rgba(124,58,237,0.2)] space-y-8"
            >
              <div className="flex items-center justify-between">
                <div className="flex text-amber-400 gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>

                <Quote className="w-12 h-12 text-purple-500/30" />
              </div>

              <p className="text-lg sm:text-2xl text-slate-100 font-medium leading-relaxed italic">
                &ldquo;{current.quote}&rdquo;
              </p>

              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <img
                    src={current.avatar}
                    alt={current.author}
                    className="w-14 h-14 rounded-full object-cover border-2 border-sky-400"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-white">{current.author}</h3>
                    <p className="text-xs text-purple-300">{current.title}</p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{current.views}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Nav Controls */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    currentIndex === i ? "w-8 bg-sky-400" : "w-2.5 bg-white/20"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={prevTestimonial}
                className="p-3 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-3 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
