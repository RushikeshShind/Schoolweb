import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NAAC | AMICHM",
  description: "NAAC Accreditation details for Arun Muchhala International College of Hotel Management",
};

export default function NAAC() {
  return (
    <section className="relative bg-white pt-[120px] pb-16 md:pt-[150px] md:pb-20 lg:pt-[180px] lg:pb-28">
      <div className="container">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-3xl font-bold text-black sm:text-4xl lg:text-5xl">
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">NAAC Accreditation</span>
          </h1>
          <div className="mx-auto h-1 w-24 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full" />
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl bg-gradient-to-br from-orange-50 to-white p-8 md:p-12 shadow-lg border border-orange-100">
            <div className="mb-8 text-center">
              <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-orange-600 shadow-lg">
                <svg className="h-12 w-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h2 className="mb-4 text-2xl font-bold text-black">NAAC Accredited Institution</h2>
              <p className="text-base text-body-color">
                We are proud to be accredited by the National Assessment and Accreditation Council (NAAC)
              </p>
            </div>

            <div className="space-y-6">
              <div className="rounded-xl bg-white p-6 shadow-md border-l-4 border-primary">
                <h3 className="mb-3 text-xl font-bold text-black">About NAAC</h3>
                <p className="text-body-color">
                  The National Assessment and Accreditation Council (NAAC) is an autonomous body established by the University Grants Commission (UGC) of India to assess and accredit institutions of higher education in the country.
                </p>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-md border-l-4 border-primary">
                <h3 className="mb-3 text-xl font-bold text-black">Our Commitment to Quality</h3>
                <p className="text-body-color">
                  Our NAAC accreditation reflects our dedication to maintaining the highest standards of quality education, infrastructure, and student support services in hotel management education.
                </p>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-md border-l-4 border-primary">
                <h3 className="mb-3 text-xl font-bold text-black">Quality Indicators</h3>
                <ul className="list-disc list-inside space-y-2 text-body-color">
                  <li>Curriculum and Teaching-Learning</li>
                  <li>Research and Professional Development</li>
                  <li>Infrastructure and Learning Resources</li>
                  <li>Student Support and Progression</li>
                  <li>Governance and Leadership</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
