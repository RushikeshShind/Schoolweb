"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const whyUsData = [
  {
    id: 1,
    title: "Industry-Focused Learning",
    description: "Our experienced faculty make learning easy, practical, and engaging, ensuring students build strong fundamentals with hands-on exposure to real hospitality environments.",
    icon: (
      <svg className="h-6 w-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Expert Faculty & Strong Mentorship",
    description: "At AMICHM, our dedicated faculty go beyond textbooks, guiding students personally and professionally to help them grow with confidence, discipline, and industry-ready skills.",
    icon: (
      <svg className="h-6 w-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Industry Exposure & Placements",
    description: "The college management regularly brings renowned chefs, hospitality leaders, and industry experts from across India, placing AMICHM students among the top choices in hotel placement interviews.",
    icon: (
      <svg className="h-6 w-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
];

const stats = [
  { id: 1, value: 2500, label: "Students Worldwide", suffix: "+" },
  { id: 2, value: 150, label: "Expert Teachers", suffix: "+" },
  { id: 3, value: 25, label: "Years Excellence", suffix: "+" },
  { id: 4, value: 100, label: "University Placement", suffix: "%" },
];

const useCounter = (end: number, duration: number = 2000, start = 0) => {
  const [count, setCount] = useState(start);
  const countRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * (end - start) + start));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      }
    };

    animationFrame = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, start, isVisible]);

  return { count, countRef };
};

const CounterItem = ({ item }: { item: typeof stats[0] }) => {
  const { count, countRef } = useCounter(item.value);

  return (
    <div ref={countRef} className="text-center group">
      <div className="relative inline-block">
        <div className="text-4xl lg:text-5xl font-bold text-black font-serif z-10 relative">
          {count}
          {item.suffix}
        </div>
        <div className="absolute bottom-1 left-0 w-full h-3 bg-yellow-300 opacity-60 -z-10 transform skew-x-12"></div>
      </div>
      <p className="mt-3 text-sm font-medium text-gray-600 uppercase tracking-wide">
        {item.label}
      </p>
    </div>
  );
};

const WhyUs = () => {
  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 mb-24">
          
          {/* Left Content */}
          <div className="w-full lg:w-1/2">
            <span className="inline-block py-1 px-3 mb-6 text-xs font-semibold tracking-widest text-orange-600 uppercase bg-orange-50 rounded-full">
              Why Choose AMICHM?
            </span>
            <h2 className="mb-8 text-4xl lg:text-5xl font-bold text-black font-serif leading-tight">
              Where Passion Meets Professional Excellence.<br />
            </h2>
            
            <div className="space-y-8 mb-10">
              {whyUsData.map((item) => (
                <div key={item.id} className="flex gap-5">
                   <div className="flex-shrink-0 mt-1">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-50 text-orange-600 border border-orange-100">
                        {item.icon}
                      </div>
                   </div>
                   <div>
                      <h3 className="text-xl font-bold text-black mb-2">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed text-sm lg:text-base">{item.description}</p>
                   </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 text-sm font-bold text-white uppercase bg-black rounded-full hover:bg-gray-800 transition-colors">
                Explore More →
              </button>
              <button className="px-8 py-4 text-sm font-bold text-black uppercase bg-transparent border border-gray-200 rounded-full hover:bg-gray-50 transition-colors">
                Get a Quote →
              </button>
            </div>
          </div>

          {/* Right Images (Overlapping) */}
          <div className="w-full lg:w-1/2 relative min-h-[500px] lg:min-h-[600px]">
             {/* Main Back Image (School Building) */}
            <div className="absolute top-0 right-0 w-4/5 h-4/5 rounded-3xl overflow-hidden shadow-2xl z-10">
              <Image 
                src="/images/why-us/school-building.png"
                alt="Modern School Building"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Overlapping Front Image (Student) */}
            <div className="absolute bottom-0 left-0 w-3/5 h-3/5 rounded-3xl overflow-hidden shadow-2xl border-[8px] border-white z-20">
              <Image
                src="/images/why-us/students-learning.png"
                alt="Students Learning"
                fill
                className="object-cover"
              />
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-10 right-10 w-20 h-20 bg-yellow-300 rounded-full blur-3xl opacity-20 z-0"></div>
            <div className="absolute bottom-10 left-10 w-32 h-32 bg-orange-400 rounded-full blur-3xl opacity-20 z-0"></div>
          </div>

        </div>

        {/* Stats Section - Bottom Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 border-t border-gray-100">
          {stats.map((stat) => (
             <CounterItem key={stat.id} item={stat} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyUs;
