"use client";

import { useState } from "react";

export default function AdmissionForm() {
  const [isLoading, setIsLoading] = useState(false);
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
        setResult({ success: false, message: data.message, eligible: false });
      }
    } catch (error) {
      setResult({ success: false, message: "Something went wrong. Please try again.", eligible: false });
    } finally {
      setIsLoading(false);
    }
  };

  if (result) {
    return (
      <div className={`text-center py-12 px-6 rounded-2xl border ${result.success ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"} animate-fadeInUp`}>
        <div className={`mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full ${result.success ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}`}>
          {result.success ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
        </div>
        <h3 className={`text-2xl font-bold mb-4 ${result.success ? "text-green-800" : "text-red-800"}`}>
          {result.success ? "Form Submitted Successfully!" : "Not Eligible"}
        </h3>
        <p className={`text-lg mb-8 ${result.success ? "text-green-700" : "text-red-700"}`}>
          {result.message}
        </p>
        <button
          onClick={() => setResult(null)}
          className="px-8 py-3 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl"
        >
          Check Again
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Candidate Name</label>
          <input
            type="text"
            name="candidate_name"
            required
            value={formData.candidate_name}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-300 bg-gray-50 px-5 py-3.5 outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/10 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            placeholder="Enter full name"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Candidate Mobile</label>
          <input
            type="tel"
            name="candidate_mobile"
            required
            pattern="[0-9]{10}"
            value={formData.candidate_mobile}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-300 bg-gray-50 px-5 py-3.5 outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/10 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            placeholder="10-digit number"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Email Address</label>
        <input
          type="email"
          name="candidate_email"
          required
          value={formData.candidate_email}
          onChange={handleChange}
          className="w-full rounded-xl border border-gray-300 bg-gray-50 px-5 py-3.5 outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/10 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          placeholder="yourname@example.com"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Parent/Guardian Mobile</label>
        <input
          type="tel"
          name="parent_mobile"
          required
          pattern="[0-9]{10}"
          value={formData.parent_mobile}
          onChange={handleChange}
          className="w-full rounded-xl border border-gray-300 bg-gray-50 px-5 py-3.5 outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/10 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          placeholder="Emergency contact number"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Residential Address</label>
        <input
          type="text"
          name="residential_address"
          required
          value={formData.residential_address}
          onChange={handleChange}
          className="w-full rounded-xl border border-gray-300 bg-gray-50 px-5 py-3.5 outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/10 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          placeholder="Complete street address"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">12th Score (%)</label>
          <input
            type="number"
            name="twelfth_percentage"
            step="0.01"
            min="0"
            max="100"
            required
            value={formData.twelfth_percentage}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-300 bg-gray-50 px-5 py-3.5 outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/10 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            placeholder="e.g. 85.5"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Passing Year</label>
          <input
            type="number"
            name="year_of_passing"
            required
            min="2020"
            max="2026"
            value={formData.year_of_passing}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-300 bg-gray-50 px-5 py-3.5 outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/10 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Educational Board</label>
          <select
            name="twelfth_board"
            required
            value={formData.twelfth_board}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-300 bg-gray-50 px-5 py-3.5 outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/10 dark:bg-gray-800 dark:border-gray-700 dark:text-white appearance-none"
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

      <div className="pt-6">
        <button
          type="submit"
          disabled={isLoading}
          className="w-full rounded-xl bg-primary py-4 text-white font-bold text-lg shadow-xl hover:bg-primary-dark transition-all transform hover:-translate-y-1 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <span className="flex items-center justify-center gap-3">
              <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Checking Eligibility...
            </span>
          ) : (
            "Validate & Submit Inquiry"
          )}
        </button>
      </div>
    </form>
  );
}
