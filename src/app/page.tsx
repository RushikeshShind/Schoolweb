import ScrollUp from "@/components/Common/ScrollUp";
import HeroVideo from "@/components/HeroVideo";
import AdmissionInquiryModal from "@/components/AdmissionInquiryModal";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Arun Muchhala International College of Hotel Management | Excellence in Education",
  description: "Nurturing global leaders through academic excellence, character building, and holistic growth.",
};

export default function Home() {
  return (
    <main className="h-screen overflow-hidden">
      <ScrollUp />
      <HeroVideo />
      <AdmissionInquiryModal />
    </main>
  );
}
