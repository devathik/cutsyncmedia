"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play, Eye, Sparkles, Film, Award, Volume2, VolumeX } from "lucide-react";

export interface ProjectData {
  id: string;
  title: string;
  category: string;
  client: string;
  views: string;
  duration: string;
  software: string[];
  description: string;
  videoUrl?: string; // YouTube embed or MP4 source
  thumbnailUrl: string;
}

interface VideoModalProps {
  project: ProjectData | null;
  onClose: () => void;
  onOpenBooking: (serviceName: string) => void;
}

export default function VideoModal({ project, onClose, onOpenBooking }: VideoModalProps) {
  const [muted, setMuted] = useState(false);

  if (!project) return null;

  // Determine if video is YouTube or direct MP4 stream
  const isYouTube = project.videoUrl?.includes("youtube.com") || project.videoUrl?.includes("youtu.be");

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Dark blur background */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#060919]/90 backdrop-blur-2xl"
        />

        {/* Modal Body */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 30 }}
          className="relative w-full max-w-4xl bg-[#0D1233] border border-white/10 rounded-2xl overflow-hidden shadow-[0_0_80px_rgba(56,189,248,0.25)] z-10 my-auto"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-slate-900/80 text-white/80 hover:text-white border border-white/10 hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Video Player Section */}
          <div className="relative aspect-video w-full bg-black overflow-hidden group">
            {project.videoUrl ? (
              isYouTube ? (
                <iframe
                  src={`${project.videoUrl}?autoplay=1&rel=0&modestbranding=1`}
                  title={project.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              ) : (
                <video
                  src={project.videoUrl}
                  autoPlay
                  controls
                  loop
                  muted={muted}
                  playsInline
                  className="w-full h-full object-cover"
                />
              )
            ) : (
              /* Fallback Animated Video Simulation if videoUrl is mock */
              <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900">
                <img
                  src={project.thumbnailUrl}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1233] via-black/40 to-transparent" />
                <div className="absolute flex flex-col items-center justify-center text-center p-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-sky-400 via-purple-600 to-pink-500 p-0.5 flex items-center justify-center shadow-lg shadow-pink-500/50 mb-3 animate-pulse">
                    <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center">
                      <Play className="w-7 h-7 text-sky-400 fill-current ml-1" />
                    </div>
                  </div>
                  <span className="text-white font-bold text-lg">{project.title}</span>
                  <span className="text-sky-300 text-xs mt-1">High-Definition Portfolio Preview</span>
                </div>
              </div>
            )}
          </div>

          {/* Content Details Below Video */}
          <div className="p-6 sm:p-8 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/30">
                    {project.category}
                  </span>
                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    <Eye className="w-3.5 h-3.5 text-pink-400" />
                    {project.views}
                  </span>
                  <span className="text-xs text-slate-400">• {project.duration}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">{project.title}</h3>
                <p className="text-xs text-purple-300 font-medium">Client: {project.client}</p>
              </div>

              <button
                onClick={() => {
                  onClose();
                  onOpenBooking(project.category);
                }}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-400 via-purple-600 to-pink-500 text-white font-semibold text-xs tracking-wider uppercase flex items-center gap-2 hover:opacity-90 transition shadow-lg shadow-purple-500/30"
              >
                <Sparkles className="w-4 h-4" />
                Book Similar Edit
              </button>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">{project.description}</p>

            <div className="pt-2 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <span className="text-slate-400 font-medium">Toolkit Used:</span>
                {project.software.map((sw, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300 font-mono text-[11px]"
                  >
                    {sw}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-1 text-emerald-400 font-medium">
                <Award className="w-4 h-4" />
                <span>100% Color Graded &amp; Audio Synced by CutSync</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
