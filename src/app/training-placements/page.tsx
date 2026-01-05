import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Training & Placements | AMICHM",
  description: "Career opportunities and placement assistance for our students",
};

export default function TrainingPlacements() {
  return (
    <section className="relative bg-white pt-[120px] pb-16 md:pt-[150px] md:pb-20 lg:pt-[180px] lg:pb-28">
      <div className="container">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-3xl font-bold text-black sm:text-4xl lg:text-5xl">
            Training & <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Placements</span>
          </h1>
          <div className="mx-auto h-1 w-24 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full" />
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl bg-gradient-to-br from-orange-50 to-white p-8 md:p-12 shadow-lg border border-orange-100">
            <h2 className="mb-6 text-2xl font-bold text-black">Industrial Training & Placement Cell</h2>
            <p className="mb-6 text-base leading-relaxed text-body-color">
              Our dedicated Training & Placement Cell works tirelessly to provide students with the best career opportunities in the hospitality industry.
            </p>

            <div className="grid gap-6 md:grid-cols-2 mt-8">
              {[
                { title: "Industry Partnerships", icon: "🤝" },
                { title: "Internship Programs", icon: "📋" },
                { title: "Campus Placements", icon: "🎓" },
                { title: "Career Guidance", icon: "💼" },
              ].map((item, index) => (
                <div key={index} className="rounded-xl bg-white p-6 shadow-md border-l-4 border-primary">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="text-lg font-bold text-black">{item.title}</h3>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 rounded-xl bg-gradient-to-r from-orange-100 to-orange-50 border-l-4 border-primary">
              <p className="text-body-color">
                <strong>Note:</strong> Detailed information about our training programs and placement statistics will be updated soon. Please contact the office for more information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
