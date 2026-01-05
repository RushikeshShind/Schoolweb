import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Examination | AMICHM",
  description: "Examination information and schedules",
};

export default function Examination() {
  return (
    <section className="relative bg-white pt-[120px] pb-16 md:pt-[150px] md:pb-20 lg:pt-[180px] lg:pb-28">
      <div className="container">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-3xl font-bold text-black sm:text-4xl lg:text-5xl">
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Examination</span>
          </h1>
          <div className="mx-auto h-1 w-24 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full" />
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl bg-gradient-to-br from-orange-50 to-white p-8 md:p-12 shadow-lg border border-orange-100">
            <h2 className="mb-6 text-2xl font-bold text-black">Examination Cell</h2>

            <div className="space-y-6">
              <div className="rounded-xl bg-white p-6 shadow-md border-l-4 border-primary">
                <h3 className="mb-3 text-xl font-bold text-black">Examination Pattern</h3>
                <p className="text-body-color">
                  All examinations are conducted as per the guidelines and schedule of the University of Mumbai.
                </p>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-md border-l-4 border-primary">
                <h3 className="mb-3 text-xl font-bold text-black">Important Information</h3>
                <ul className="list-disc list-inside space-y-2 text-body-color">
                  <li>Semester-wise examination system</li>
                  <li>Internal and external assessment</li>
                  <li>Practical examinations for all major subjects</li>
                  <li>Regular class tests and assignments</li>
                </ul>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-md border-l-4 border-primary">
                <h3 className="mb-3 text-xl font-bold text-black">Exam Schedules</h3>
                <p className="text-body-color">
                  Examination schedules will be announced as per University of Mumbai notifications. Students are advised to regularly check the notice board and college website for updates.
                </p>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-md border-l-4 border-primary">
                <h3 className="mb-3 text-xl font-bold text-black">Contact Examination Cell</h3>
                <p className="text-body-color">
                  For any examination-related queries, please contact the college office during working hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
