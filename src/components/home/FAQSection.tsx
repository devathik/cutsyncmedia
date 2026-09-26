"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How fast is your standard turnaround time?",
      answer:
        "For short-form reels and TikTok edits, our standard turnaround is 24 to 48 hours per clip. For long-form YouTube videos (10-20 min), turnaround is typically 48 to 72 hours. Rush 24-hour delivery is also available for enterprise plans.",
    },
    {
      question: "How do we send raw footage and brand assets to your team?",
      answer:
        "We provide a dedicated Frame.io & Google Drive folder for your account. You simply drag and drop your raw camera files, audio tracks, logo SVGs, or style reference links. Frame.io also allows you to leave timestamped notes on video drafts.",
    },
    {
      question: "What video editing software & plugins do you use?",
      answer:
        "Our post-production suite relies on Adobe Premiere Pro for cutting, After Effects for 2D/3D motion graphics & visual FX, and DaVinci Resolve Studio for Hollywood-grade color grading and audio mastering.",
    },
    {
      question: "What if I need revisions on a video cut?",
      answer:
        "We offer unlimited revisions on all monthly retainer plans. You can leave precise timestamped comments directly on the video playback line in Frame.io, and our editors will revise and re-export your video within 24 hours.",
    },
    {
      question: "Do you supply licensed music, SFX, and stock footage?",
      answer:
        "Yes! All of our packages include full commercial licensing for epidemic sound/artlist audio, sound effects, motion graphics templates, and high-definition 4K stock footage.",
    },
    {
      question: "Is there a minimum monthly contract term?",
      answer:
        "No minimum lock-in! Our monthly retainers run on a month-to-month basis. You can pause, upgrade, or cancel your retainer anytime with 7 days notice.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-28 bg-[#090D28] overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <AnimatedSection direction="down" duration={0.8} className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-xs font-semibold text-sky-300">
            <HelpCircle className="w-3.5 h-3.5 text-pink-400" />
            <span>GOT QUESTIONS? WE&apos;VE GOT ANSWERS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-purple-400 to-pink-500">Questions</span>
          </h2>
          <p className="text-slate-300 text-base">
            Everything you need to know about our post-production process, file transfers, and editing guarantees.
          </p>
        </AnimatedSection>

        {/* Accordion List with Staggered Left & Right Entrance */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            const animDir = idx % 2 === 0 ? "left" : "right";

            return (
              <AnimatedSection
                key={idx}
                direction={animDir}
                delay={idx * 0.08}
                duration={0.6}
              >
                <div className="rounded-2xl bg-[#0E1338] border border-white/10 overflow-hidden transition-all duration-300 hover:border-sky-400/40">
                  <button
                    onClick={() => toggleFAQ(idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-white hover:text-sky-300 transition-colors"
                  >
                    <span className="text-base sm:text-lg">{faq.question}</span>
                    <div
                      className={`w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-sky-400 transition-transform duration-300 ${
                        isOpen ? "rotate-180 bg-sky-500/20" : ""
                      }`}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-4">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

      </div>
    </section>
  );
}
