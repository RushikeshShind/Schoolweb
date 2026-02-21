"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useModal } from "@/context/ModalContext";

const HeroVideo = () => {
  const { openAdmissionModal } = useModal();

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 h-full w-full object-cover"
      >
        <source
          src="/IMG_9386.MOV"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Multi-layered cinematic overlay */}
      <div className="absolute inset-0 z-0">
        {/* Main dark overlay with lower opacity for video clarity */}
        <div className="absolute inset-0 bg-black/30" />
        
        {/* Top gradient for header readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-transparent" />
        
        {/* Bottom gradient for footer/info readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
        
        {/* Side vignettes for focus on center content */}
        <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_40%,rgba(0,0,0,0.4)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex h-full items-center justify-center text-center">
        <div className="container px-4">
          <div className="max-w-[900px] mx-auto">
            <span className="mb-4 inline-block text-lg font-semibold text-primary uppercase tracking-[4px] animate-fadeInUp">
              Admission open for 2025
            </span>
            <h1 className="mb-8 text-4xl font-extrabold leading-tight text-white sm:text-6xl md:text-7xl lg:text-8xl tracking-tight animate-fadeInUp animation-delay-200">
              Shape Your <span className="text-primary">Future</span> With Excellence
            </h1>
            <p className="mb-12 text-lg text-white/80 sm:text-xl md:text-2xl font-light max-w-[700px] mx-auto leading-relaxed animate-fadeInUp animation-delay-400">
              Arun Muchhala International College of Hotel Management - where passion meets professional expertise in the heart of global hospitality.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fadeInUp animation-delay-600">
              <button
                onClick={openAdmissionModal}
                className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-primary px-8 py-4 text-base font-bold text-white transition-all hover:bg-white hover:text-primary md:px-12 md:py-5 cursor-pointer"
              >
                Apply for Admission
                <svg
                  className="w-5 h-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
              <Link
                href="/courses"
                className="rounded-full border-2 border-white/30 bg-white/5 px-8 py-4 text-base font-bold text-white backdrop-blur-md hover:bg-white hover:text-black transition-all md:px-12 md:py-5"
              >
                Explore Programmes
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Minimal Bottom Info (Optional) */}
      <div className="absolute bottom-10 left-0 w-full z-10 hidden md:block">
        <div className="container px-4 flex justify-between items-end border-t border-white/10 pt-6">
          <div className="text-white/60 text-sm">
            <p className="font-bold text-white uppercase mb-1">Location</p>
            <p>Ghodbunder Road, Thane, Maharashtra</p>
          </div>
          <div className="flex gap-10">
            <div className="text-white/60 text-sm text-right">
              <p className="font-bold text-white uppercase mb-1">Call Us</p>
              <p>+91 123 456 7890</p>
            </div>
            <div className="text-white/60 text-sm text-right">
              <p className="font-bold text-white uppercase mb-1">Email</p>
              <p>info@muchhalacollege.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroVideo;
