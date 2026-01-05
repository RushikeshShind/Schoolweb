import { Metadata } from "next";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact Us | Arun Muchhala International College of Hotel Management",
  description: "Get in touch with Arun Muchhala International College of Hotel Management",
};

export default function ContactUs() {
  return (
    <>
      <section className="relative bg-white pt-[120px] pb-8 md:pt-[150px] lg:pt-[180px]">
        <div className="container">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-3xl font-bold text-black sm:text-4xl lg:text-5xl">
              Contact <span className="text-primary">Us</span>
            </h1>
            <div className="mx-auto h-1 w-24 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full" />
          </div>
        </div>
      </section>
      <Contact />
    </>
  );
}
