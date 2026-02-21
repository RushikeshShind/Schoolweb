"use client";

import { useModal } from "@/context/ModalContext";
import AdmissionForm from "../AdmissionForm";

export default function AdmissionInquiryModal() {
  const { isAdmissionModalOpen, closeAdmissionModal } = useModal();

  if (!isAdmissionModalOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-md transition-opacity" 
        onClick={closeAdmissionModal}
      ></div>

      {/* Modal Content */}
      <div className="relative w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-2xl dark:bg-gray-800 animate-fadeInUp">
        {/* Decorative Header */}
        <div className="bg-gradient-to-r from-primary to-orange-600 p-8 text-white relative">
          <h2 className="text-3xl font-extrabold tracking-tight">Admission Inquiry</h2>
          <p className="text-white/80 text-lg mt-2 font-medium">Academic Session 2025-26</p>
          <button 
            onClick={closeAdmissionModal}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all text-white"
            aria-label="Close modal"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.3} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-8 max-h-[75vh] overflow-y-auto scrollbar-hide">
          <AdmissionForm />
        </div>
      </div>
    </div>
  );
}
