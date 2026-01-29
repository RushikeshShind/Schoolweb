
"use client";

import { useState, useEffect } from "react";

export default function AdmissionInquiryModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(1); // For multi-step feel if needed, but single page is fine for this length
  const [formData, setFormData] = useState({
    candidate_name: "",
    candidate_mobile: "",
    candidate_email: "",
    parent_mobile: "",
    residential_address: "",
    twelfth_percentage: "",
    year_of_passing: new Date().getFullYear(),
    twelfth_board: "",
    college_id: 1,
  });
  const [result, setResult] = useState<{
    success: boolean;
    message: string;
    eligible?: boolean;
  } | null>(null);

  // Show modal automatically after 2 seconds on first visit (mocking "every visitor")
  useEffect(() => {
    const timer = setTimeout(() => {
      // Check session storage to avoid annoying refreshers during dev, 
      // but user asked "when every visitor show in landing screen", 
      // so we might just show it every time or check a flag.
      // For "Best UI", usually we show it once per session.
      const hasSeen = sessionStorage.getItem("hasSeenAdmissionModal");
      if (!hasSeen) {
        setIsOpen(true);
        sessionStorage.setItem("hasSeenAdmissionModal", "true");
      }
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setResult(null);

    try {
      const response = await fetch("https://school-fbxa.onrender.com/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setResult({ success: true, message: data.message, eligible: true });
      } else {
        // API returns success: false for both server errors AND eligibility failures.
        // We distinguish mainly by the message or if we had a specific code.
        // The prompt says "Success (But Not Eligible)" returns success: false.
        setResult({ success: false, message: data.message, eligible: false });
      }
    } catch (error) {
        setResult({ success: false, message: "Something went wrong. Please try again.", eligible: false });
    } finally {
      setIsLoading(false);
    }
  };

  const closeModal = () => setIsOpen(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={closeModal}
      ></div>

      {/* Modal Content */}
      <div className="relative w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl dark:bg-gray-800 animate-fadeInUp">
        {/* Decorative Header */}
        <div className="bg-gradient-to-r from-orange-500 to-red-600 p-6 text-white text-center">
          <h2 className="text-2xl font-bold">Admission Inquiry 2024-25</h2>
          <p className="text-orange-100 text-sm mt-1">Check your eligibility instantly!</p>
          <button 
            onClick={closeModal}
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-8 max-h-[80vh] overflow-y-auto">
          {result ? (
            <div className={`text-center py-8 px-4 rounded-xl border ${result.success ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"}`}>
              <div className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full ${result.success ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}`}>
                {result.success ? (
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                   </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                )}
              </div>
              <h3 className={`text-xl font-bold ${result.success ? "text-green-800" : "text-red-800"}`}>
                {result.success ? "Congratulations!" : "Not Eligible"}
              </h3>
              <p className={`mt-2 ${result.success ? "text-green-700" : "text-red-700"}`}>
                {result.message}
              </p>
              <button 
                onClick={closeModal}
                className="mt-6 px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Candidate Name</label>
                  <input
                    type="text"
                    name="candidate_name"
                    required
                    value={formData.candidate_name}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Candidate Mobile</label>
                  <input
                    type="tel"
                    name="candidate_mobile"
                    required
                    pattern="[0-9]{10}"
                    value={formData.candidate_mobile}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder="9876543210"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</label>
                <input
                  type="email"
                  name="candidate_email"
                  required
                  value={formData.candidate_email}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Parent Mobile</label>
                  <input
                    type="tel"
                    name="parent_mobile"
                    required
                    pattern="[0-9]{10}"
                    value={formData.parent_mobile}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder="Parent's Number"
                  />
              </div>

              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Residential Address</label>
                <input
                  type="text"
                  name="residential_address"
                  required
                  value={formData.residential_address}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  placeholder="Full Address"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                 <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">12th Percentage (%)</label>
                  <input
                    type="number"
                    name="twelfth_percentage"
                    step="0.01"
                    min="0"
                    max="100"
                    required
                    value={formData.twelfth_percentage}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder="e.g. 82.5"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Year of Passing</label>
                  <input
                    type="number"
                    name="year_of_passing"
                    required
                    min="2020"
                    max="2026"
                    value={formData.year_of_passing}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Board</label>
                  <select
                    name="twelfth_board"
                    required
                    value={formData.twelfth_board}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  >
                    <option value="">Select Board</option>
                    <option value="HSC">HSC (State Board)</option>
                    <option value="CBSE">CBSE</option>
                    <option value="ICSE">ICSE</option>
                    <option value="IB">IB</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full rounded-lg bg-orange-600 py-3 text-white font-semibold shadow-lg hover:bg-orange-700 hover:shadow-xl transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Checking Eligibility...
                    </span>
                  ) : (
                    "Check Eligibility & Submit"
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
