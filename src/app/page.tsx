import ScrollUp from "@/components/Common/ScrollUp";
import HeroCarousel from "@/components/HeroCarousel";
import WhyUs from "@/components/WhyUs";
import VisionMission from "@/components/VisionMission";
import AboutCollege from "@/components/AboutCollege";
import SchoolSpirit from "@/components/NAACSection";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Arun Muchhala International College of Hotel Management | Excellence in Education",
  description: "Nurturing global leaders through academic excellence, character building, and holistic growth.",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <HeroCarousel />
      <WhyUs />
      <VisionMission />
      <AboutCollege />
      <SchoolSpirit />
      <Contact />
    </>
  );
}
