"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles, PhoneCall, PlayCircle, Scissors } from "lucide-react";
import Logo from "@/components/ui/Logo";

interface NavbarProps {
  onOpenBooking: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "How It Works", href: "#process" },
    { name: "Pricing", href: "#pricing" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#090D28]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <Logo size={scrolled ? "sm" : "md"} />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-sm font-medium text-slate-300 hover:text-white transition-colors py-1 group"
              >
                <span>{link.name}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-sky-400 via-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full rounded-full" />
              </a>
            ))}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#portfolio"
              className="text-xs font-semibold text-slate-300 hover:text-sky-300 flex items-center gap-1.5 transition-colors"
            >
              <PlayCircle className="w-4 h-4 text-purple-400" />
              Showreel
            </a>

            <button
              onClick={onOpenBooking}
              className="relative group p-[1px] rounded-xl overflow-hidden font-semibold text-xs tracking-wider uppercase transition-transform active:scale-95"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-sky-400 via-purple-600 to-pink-500 transition-all group-hover:opacity-90" />
              <span className="relative px-5 py-2.5 rounded-[11px] bg-[#0B0F2C] text-white flex items-center gap-2 group-hover:bg-transparent transition duration-300">
                <Sparkles className="w-3.5 h-3.5 text-sky-400 group-hover:text-white transition" />
                <span>Book Consultation</span>
              </span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={onOpenBooking}
              className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-gradient-to-r from-sky-400 to-purple-600 text-white"
            >
              Consult
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white rounded-lg bg-white/5 border border-white/10"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-30 bg-[#070A1E]/98 backdrop-blur-2xl md:hidden pt-24 px-6 flex flex-col justify-between pb-10"
          >
            <div className="space-y-6">
              <div className="text-xs font-semibold text-purple-400 uppercase tracking-widest flex items-center gap-2">
                <Scissors className="w-4 h-4" />
                <span>Navigation Menu</span>
              </div>

              <div className="flex flex-col space-y-4">
                {navLinks.map((link, i) => (
                  <motion.a
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-2xl font-bold text-slate-200 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-sky-400 hover:to-pink-500 transition-colors"
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-sky-400 via-purple-600 to-pink-500 text-white font-bold text-sm tracking-wide shadow-lg shadow-purple-600/30 flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4" />
                Book Free Consultation
              </button>

              <p className="text-center text-xs text-slate-500">
                © {new Date().getFullYear()} CutSync Media. All Rights Reserved.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
