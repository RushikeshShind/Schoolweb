"use client";
import React, { useState, useEffect } from "react";

const videoData = [
  {
    id: "mpeAL5mRuCA",
    title: "Official Introduction",
    subtitle: "Welcome to Arun Muchhala International College",
  },
  {
    id: "iG876qwm-40",
    title: "Excellence Awards",
    subtitle: "Excellence in Hotel Management Education",
  },
  {
    id: "mdGUeZRQIpk",
    title: "NAAC Recognition",
    subtitle: "Showcasing our commitment to quality standards",
  },
];

const NAACSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const nextVideo = () => {
    setCurrentIndex((prev) => (prev + 1) % videoData.length);
    setIsPlaying(true);
  };

  const prevVideo = () => {
    setCurrentIndex((prev) => (prev - 1 + videoData.length) % videoData.length);
    setIsPlaying(true);
  };

  const currentVideo = videoData[currentIndex];

  if (!isLoaded) return null;

  return (
    <section className="relative overflow-hidden bg-white pb-24 md:pb-32">
      <div className="container px-4 mx-auto">
        
        {/* Section Title & Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 px-4">
          <div className="max-w-2xl">
            <h2 className="text-5xl lg:text-7xl font-black text-black tracking-tight leading-none mb-4 font-serif">
              AMICHM <span className="text-orange-500">CAMPUS</span>
            </h2>
            <div className="flex items-center gap-4">
               <div className="h-1 w-20 bg-orange-500 flex-shrink-0" />
               <p className="text-lg font-medium text-gray-400 uppercase tracking-widest">Experience the Excellence</p>
            </div>
          </div>
        </div>

        <div className="relative group">
          {/* Main Content Layout */}
          <div className="flex flex-col lg:flex-row items-stretch gap-0 bg-black rounded-[40px] overflow-hidden shadow-[0_50px_100px_-20px_rgba(255,107,0,0.25)]">
            
            {/* Left Column: Information Display */}
            <div className="w-full lg:w-1/4 p-10 lg:p-14 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-between order-1">
               <div className="space-y-6">
                 <div className="text-orange-500 font-bold tracking-tighter text-6xl opacity-20">0{currentIndex + 1}</div>
                 <h3 className="text-3xl font-bold text-white leading-tight">{currentVideo.title}</h3>
                 <p className="text-gray-400 text-sm leading-relaxed">{currentVideo.subtitle}</p>
               </div>
               
               <div className="mt-12">
                  <button 
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="flex items-center gap-4 text-white group/btn"
                  >
                    <div className="w-14 h-14 rounded-full border-2 border-orange-500 flex items-center justify-center transition-all duration-300 group-hover/btn:bg-orange-500">
                       {isPlaying ? (
                         <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd"/></svg>
                       ) : (
                         <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"/></svg>
                       )}
                    </div>
                    <span className="font-bold tracking-widest uppercase text-xs">{isPlaying ? "Pause" : "Play Now"}</span>
                  </button>
               </div>
            </div>

            {/* Middle Column: Video Player */}
            <div className="w-full lg:w-[65%] relative aspect-video order-2">
               <iframe
                key={currentVideo.id}
                src={`https://www.youtube.com/embed/${currentVideo.id}?autoplay=${isPlaying ? 1 : 0}&mute=1&controls=0&rel=0&modestbranding=1&iv_load_policy=3&showinfo=0`}
                title={currentVideo.title}
                className="absolute inset-0 h-full w-full object-cover"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              {/* Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 pointer-events-none" />
            </div>

            {/* Right Column: High-End Controls (Matches Reference) */}
            <div className="w-full lg:w-[10%] bg-zinc-900 border-l border-white/10 flex lg:flex-col items-center justify-center p-8 lg:p-0 gap-10 order-3">
               
               {/* Arrow Up / Prev */}
               <button 
                onClick={prevVideo}
                className="w-12 h-12 rounded-full bg-white/5 hover:bg-orange-500 transition-all duration-300 flex items-center justify-center text-white"
               >
                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7"/></svg>
               </button>

               {/* Custom Indicator */}
               <div className="flex flex-col items-center">
                  <div className="text-2xl font-black text-white">0{currentIndex + 1}</div>
                  <div className="h-20 w-[2px] bg-white/10 my-4 relative">
                     <div 
                        className="absolute top-0 left-0 w-full bg-orange-500 transition-all duration-500"
                        style={{ height: `${((currentIndex + 1) / videoData.length) * 100}%` }}
                     />
                  </div>
                  <div className="text-sm font-bold text-gray-500 tracking-tighter">0{videoData.length}</div>
               </div>

               {/* Arrow Down / Next */}
               <button 
                onClick={nextVideo}
                className="w-12 h-12 rounded-full bg-white/5 hover:bg-orange-500 transition-all duration-300 flex items-center justify-center text-white group/next"
               >
                 <svg className="w-5 h-5 transition-transform group-hover/next:translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7"/></svg>
               </button>

            </div>

          </div>

          {/* Exterior Floating Text for "Unique" feel */}
          <div className="hidden lg:block absolute -right-20 top-1/2 -rotate-90 text-[100px] font-black text-gray-50 opacity-[0.03] select-none pointer-events-none uppercase tracking-tighter whitespace-nowrap">
             CAMPUS LIFE • AMICHM
          </div>
        </div>

      </div>
    </section>
  );
};

export default NAACSection;

