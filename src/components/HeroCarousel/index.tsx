"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import NewsTicker from "../Common/NewsTicker";

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      subtitle: "Admission open for 2025",
      title: "Begin Your Engineering Journey with Arun Muchhala International Group",
      description: "Nurturing global leaders through academic excellence and innovation.",
      image: "/images/hero/1.jpg",
    },
    {
      id: 2,
      subtitle: "Join the Future Leaders",
      title: "Global Excellence in Education",
      description: "Innovative Learning Environments and World-Class Faculty",
      image: "/images/hero/2.jpg",
    },
    {
      id: 3,
      subtitle: "Beyond the Classroom",
      title: "Nurturing Talent & Innovation",
      description: "Comprehensive Growth through Sports, Arts, and Technology",
      image: "/images/hero/3.jpg",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section
      id="home"
      className="relative z-10 bg-white pt-[130px] md:pt-[150px] lg:pt-[160px]"
    >
      {/* News Ticker */}
      <NewsTicker />

      <div className="relative w-full">
        {/* Carousel Container */}
        <div className="relative h-[450px] md:h-[600px] lg:h-[700px] w-full overflow-hidden">
          {/* Slides */}
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
                }`}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40" />
              </div>

              {/* Content */}
              <div className="relative z-20 flex h-full items-center container px-4 sm:px-6 lg:px-8">
                <div className="max-w-[800px] text-left">
                  <span className="mb-4 inline-block text-xl font-bold text-primary sm:text-2xl md:text-3xl animate-fadeInUp">
                    {slide.subtitle}
                  </span>
                  <h1 className="mb-6 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-7xl animate-fadeInUp animation-delay-200">
                    {slide.title}
                  </h1>
                  <p className="mb-8 text-lg text-white/90 sm:text-xl md:text-2xl animate-fadeInUp animation-delay-400 font-medium">
                    {slide.description}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 z-30 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition-all hover:bg-white/20"
            aria-label="Previous slide"
          >
            <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 z-30 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition-all hover:bg-white/20"
            aria-label="Next slide"
          >
            <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Action Cards (Desktop Only / Floating Over Bottom) */}
        <div className="absolute -bottom-16 left-0 w-full z-50 hidden md:block">
          <div className="container">
            <div className="flex justify-center gap-6">
              {/* Card 1 */}
              <Link href="/admission-enquiry" className="group flex flex-col items-center justify-center bg-[#000066] p-8 text-white transition-all hover:bg-primary w-1/3 rounded-sm shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:-translate-y-2 duration-300">
                <div className="mb-4 text-primary group-hover:text-white transition-colors">
                  <svg className="h-14 w-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <span className="text-xl font-bold uppercase text-center tracking-wider">Admission Enquiry</span>
              </Link>
              {/* Card 2 */}
              <Link href="/campus-tour" className="group flex flex-col items-center justify-center bg-[#000066] p-8 text-white transition-all hover:bg-primary w-1/3 rounded-sm shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:-translate-y-2 duration-300">
                <div className="mb-4 text-primary group-hover:text-white transition-colors">
                  <svg className="h-14 w-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <span className="text-xl font-bold uppercase text-center tracking-wider">360° Campus Tour</span>
              </Link>
              {/* Card 3 */}
              <Link href="/programmes" className="group flex flex-col items-center justify-center bg-[#000066] p-8 text-white transition-all hover:bg-primary w-1/3 rounded-sm shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:-translate-y-2 duration-300">
                <div className="mb-4 text-primary group-hover:text-white transition-colors">
                  <svg className="h-14 w-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l9-5-9-5-9 5 9 5zm0 0v6m0 0l4-2.223M12 20l-4-2.223" />
                  </svg>
                </div>
                <span className="text-xl font-bold uppercase text-center tracking-wider">Programmes Offered</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Action Cards */}
      <div className="md:hidden bg-white py-8 px-4 flex flex-col gap-4">
        <Link href="/admission-enquiry" className="flex items-center gap-4 bg-[#000066] p-4 text-white rounded-lg">
          <div className="text-primary shrink-0">
            <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <span className="text-lg font-bold uppercase">Admission Enquiry</span>
        </Link>
        <Link href="/campus-tour" className="flex items-center gap-4 bg-[#000066] p-4 text-white rounded-lg">
          <div className="text-primary shrink-0">
            <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
          </div>
          <span className="text-lg font-bold uppercase">360° Campus Tour</span>
        </Link>
        <Link href="/programmes" className="flex items-center gap-4 bg-[#000066] p-4 text-white rounded-lg">
          <div className="text-primary shrink-0">
            <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l9-5-9-5-9 5 9 5zm0 0v6m0 0l4-2.223M12 20l-4-2.223" />
            </svg>
          </div>
          <span className="text-lg font-bold uppercase">Programmes Offered</span>
        </Link>
      </div>
    </section>
  );
};

export default HeroCarousel;
