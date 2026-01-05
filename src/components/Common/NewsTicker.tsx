"use client";
import React from "react";

const newsItems = [
  "NEW APRIL/MAY 2025 EXAMINATION RESULTS PUBLISHED",
  "NIRF REPORT 2025 - ARUN MUCHHALA INTERNATIONAL GROUP RANKED AMONG TOP INSTITUTIONS",
  "AU PASS PERCENTAGE DURING 'NOV/DEC' 2024 IS 95.01% (AFTER REVALUATION)",
  "ADMISSIONS OPEN FOR THE ACADEMIC YEAR 2025-26 - APPLY NOW",
];

const NewsTicker = () => {
  return (
    <div className="bg-black/90 text-white py-2 overflow-hidden flex items-center border-b border-white/10 group">
      <div className="bg-primary text-black px-4 py-1 font-bold text-xs sm:text-sm uppercase tracking-wider relative z-10 shrink-0">
        News
      </div>
      <div className="relative flex-1">
        <div className="animate-marquee whitespace-nowrap flex space-x-12 hover:[animation-play-state:paused]">
          {newsItems.concat(newsItems).map((item, index) => (
            <div key={index} className="flex items-center space-x-4">
              <span className="inline-block w-2 h-2 bg-primary rounded-full"></span>
              <span className="text-xs sm:text-sm font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsTicker;
