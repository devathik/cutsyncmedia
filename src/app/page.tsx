"use client";

import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import Hero from "@/components/home/Hero";
import ClientMarquee from "@/components/home/ClientMarquee";
import ServicesSection from "@/components/home/ServicesSection";
import FeaturedWork from "@/components/home/FeaturedWork";
import ProcessSection from "@/components/home/ProcessSection";
import StatsSection from "@/components/home/StatsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import PricingSection from "@/components/home/PricingSection";
import FAQSection from "@/components/home/FAQSection";
import CTABanner from "@/components/home/CTABanner";
import BookingModal from "@/components/ui/BookingModal";
import VideoModal, { ProjectData } from "@/components/ui/VideoModal";

export default function HomePage() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingService, setBookingService] = useState("Free Consultation Call");
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  const handleOpenBooking = (serviceName?: string) => {
    if (serviceName) setBookingService(serviceName);
    setBookingOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-[#090D28] text-white selection:bg-pink-500 selection:text-white">
      {/* Magnetic Custom Cursor */}
      <CustomCursor />

      {/* Navigation Bar */}
      <Navbar onOpenBooking={() => handleOpenBooking("Header Consultation")} />

      {/* Main Home Page Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero
          onOpenBooking={() => handleOpenBooking("Hero Consultation")}
          onSelectProject={(proj) => setSelectedProject(proj)}
        />

        {/* 2. Client Marquee */}
        <ClientMarquee />

        {/* 3. Services Overview */}
        <ServicesSection onOpenBooking={(service) => handleOpenBooking(service)} />

        {/* 4. Featured Work Showcase */}
        <FeaturedWork
          onSelectProject={(proj) => setSelectedProject(proj)}
          onOpenBooking={() => handleOpenBooking("Custom Video Project")}
        />

        {/* 5. How We Work (Process Timeline) */}
        <ProcessSection />

        {/* 6. Live Performance Stats */}
        <StatsSection />

        {/* 7. Client Testimonials */}
        <TestimonialsSection />

        {/* 8. Pricing & Packages */}
        <PricingSection onOpenBooking={(plan) => handleOpenBooking(plan)} />

        {/* 9. FAQ Accordion */}
        <FAQSection />

        {/* 10. High-Converting CTA Banner */}
        <CTABanner onOpenBooking={() => handleOpenBooking("CTA Consultation")} />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={() => handleOpenBooking("Footer Booking")} />

      {/* Booking & Consultation Modal */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        defaultService={bookingService}
      />

      {/* Lightbox Video Player Modal */}
      <VideoModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenBooking={(service) => handleOpenBooking(service)}
      />
    </div>
  );
}
