import { Metadata } from "next";

export const metadata: Metadata = {
  title: "B.Sc. in Hospitality Studies | AMICHM",
  description: "Three years full time Degree Course affiliated to Mumbai University",
};

export default function BScHospitality() {
  return (
    <section className="relative bg-white pt-[120px] pb-16 md:pt-[150px] md:pb-20 lg:pt-[180px] lg:pb-28">
      <div className="container">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-6 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 p-8 md:p-12 shadow-2xl">
            <h1 className="mb-3 text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl">
              SAI SHIVA EDUCATIONAL TRUST'S
            </h1>
            <h2 className="mb-3 text-xl font-bold text-orange-50 sm:text-2xl md:text-3xl">
              ARUN MUCHHALA INTERNATIONAL COLLEGE OF HOTEL MANAGEMENT
            </h2>
            <p className="text-lg text-white/90 font-medium">
              NAAC ACCREDITED | AFFILIATED TO UNIVERSITY OF MUMBAI
            </p>
          </div>
        </div>

        {/* Course Overview */}
        <div className="mb-12 rounded-2xl bg-gradient-to-br from-orange-50 to-white p-8 md:p-10 shadow-lg border border-orange-100">
          <h2 className="mb-6 text-3xl font-bold text-black">
            Course: <span className="text-primary">B.Sc. In Hospitality Studies</span>
          </h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <svg className="mr-3 h-6 w-6 text-primary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <p className="text-lg"><strong>Duration:</strong> Three years full time Degree Course affiliated to Mumbai University.</p>
              </div>
            </div>
            <div className="flex items-start">
              <svg className="mr-3 h-6 w-6 text-primary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <p className="text-lg"><strong>Eligibility:</strong> HSC or Equivalent with minimum 45% marks (40% for SC/ST) in any Stream.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Rules for Admission */}
        <div className="mb-12">
          <h2 className="mb-6 text-3xl font-bold text-black">
            Rules For <span className="text-primary">Admission</span>
          </h2>
          <div className="rounded-xl bg-white p-6 md:p-8 shadow-lg border-l-4 border-primary">
            <p className="mb-4 text-base leading-relaxed text-body-color">
              Qualified candidates seeking admission to the Degree Course shall submit their Application Form complete in all respects, along with attested copies of the documents, to the Principal. Applications must reach the Principal before 5.00 p.m. on the last date as declared by University of Mumbai.
            </p>
            <p className="mb-4 text-base leading-relaxed text-body-color">
              Merit list of all applicants registered will be prepared after due verification of admission forms and put up on the notice board. A specific date will be mentioned for the shortlisted candidates to report for detailed scrutiny of their applications.
            </p>
            <p className="text-base leading-relaxed text-body-color">
              If the candidate fails to report, his/her candidature will be considered as null and void and admission will be offered to the next candidate on the waiting list. The candidate called for detailed scrutiny of the application must produce the following certificates in original along with true copies at the time of scrutiny. In case all the required relevant original documents are not produced, the candidate will lose his/her claim for admission and his/her request for extension of the date will not be entertained under any circumstances.
            </p>
          </div>
        </div>

        {/* Documents Required */}
        <div className="mb-12">
          <h2 className="mb-6 text-3xl font-bold text-black">
            Documents <span className="text-primary">Required</span>
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Statement of marks and passing certificate of S.S.C. Examination / or equivalent.",
              "Statement of marks and Passing certificate of H.S.C. Examination or its equivalent.",
              "Caste Certificate (in case of Reserved Categories) 12th Leaving Certificate of the college last attended.",
              "Medical Fitness certificate in the given format.",
              "Gap certificate, in case of educational gap period.",
              "Migration Certificate and Verification report from parent University / Board for student other than Maharashtra State Board of Secondary and Higher Secondary Examination.",
            ].map((doc, index) => (
              <div key={index} className="flex items-start rounded-lg bg-orange-50 p-4 border border-orange-100">
                <span className="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                  {index + 1}
                </span>
                <p className="text-sm text-body-color">{doc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Payment of Fees */}
        <div className="mb-12">
          <h2 className="mb-6 text-3xl font-bold text-black">
            Payment of <span className="text-primary">Fees</span>
          </h2>
          <div className="rounded-xl bg-white p-6 md:p-8 shadow-lg border-l-4 border-primary">
            <p className="mb-6 text-base leading-relaxed text-body-color">
              All fees are payable in advance and should be paid at the time of admission. All fees are to be paid in cash or by cheque/demand draft in favour of <strong>Arun Muchhala International College of Hotel Management</strong>.
            </p>

            <h3 className="mb-4 text-xl font-bold text-black">REFUND OF FEES WILL BE AS PER THE RULES OF UNIVERSITY OF MUMBAI:</h3>
            <div className="space-y-3">
              <div className="flex items-start rounded-lg bg-orange-50 p-4 border border-orange-100">
                <svg className="mr-3 h-5 w-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="text-sm text-body-color"><strong>During admission period:</strong> Administrative charges Rs 5000/-</p>
              </div>
              <div className="flex items-start rounded-lg bg-orange-50 p-4 border border-orange-100">
                <svg className="mr-3 h-5 w-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="text-sm text-body-color"><strong>Beginning of academic session:</strong> No Refund</p>
              </div>
              <div className="flex items-start rounded-lg bg-orange-50 p-4 border border-orange-100">
                <svg className="mr-3 h-5 w-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="text-sm text-body-color"><strong>Non Fulfillment of eligibility:</strong> No Refund</p>
              </div>
            </div>
          </div>
        </div>

        {/* Admission Forms */}
        <div className="mb-12">
          <h2 className="mb-6 text-3xl font-bold text-black">
            Admission <span className="text-primary">Forms</span>
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {/* Second Year Form */}
            <div className="rounded-xl bg-gradient-to-br from-orange-50 to-white p-6 shadow-lg border border-orange-100">
              <h3 className="mb-4 text-xl font-bold text-black">Second Year Admission Form</h3>
              <p className="mb-4 text-sm text-body-color font-semibold">INSTRUCTIONS:</p>
              <ul className="mb-6 space-y-2 text-sm text-body-color">
                <li className="flex items-start">
                  <span className="mr-2">1.</span>
                  <span>Completed Form should be submitted to Administration Office along with Marksheet xerox copy of Semester-I & II.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">2.</span>
                  <span>Anti-Ragging Cell duly completed.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">3.</span>
                  <span>Admission Processing Fees of Rs. 500/- (Rupees Five Hundred Only) by Cash / DD drawn in favour of Arun Muchhala International College of Hotel Management payable at Mumbai.</span>
                </li>
              </ul>
              <button className="w-full rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-3 text-base font-semibold text-white transition-all hover:shadow-lg hover:scale-105">
                📄 Download Admission Form
              </button>
            </div>

            {/* Third Year Form */}
            <div className="rounded-xl bg-gradient-to-br from-orange-50 to-white p-6 shadow-lg border border-orange-100">
              <h3 className="mb-4 text-xl font-bold text-black">Third Year Admission Form</h3>
              <p className="mb-4 text-sm text-body-color font-semibold">INSTRUCTIONS:</p>
              <ul className="mb-6 space-y-2 text-sm text-body-color">
                <li className="flex items-start">
                  <span className="mr-2">1.</span>
                  <span>Completed Form should be submitted to Administration Office along with Marksheet xerox copy of Semester-I, II, III & IV.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">2.</span>
                  <span>Anti-Ragging Cell duly completed.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">3.</span>
                  <span>Admission Processing Fees of Rs. 500/- (Rupees Five Hundred Only) by Cash / DD drawn in favour of Arun Muchhala International College of Hotel Management payable at Mumbai.</span>
                </li>
              </ul>
              <button className="w-full rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-3 text-base font-semibold text-white transition-all hover:shadow-lg hover:scale-105">
                📄 Download Admission Form
              </button>
            </div>
          </div>
        </div>

        {/* Syllabus Section */}
        <div className="mb-12">
          <h2 className="mb-6 text-3xl font-bold text-black text-center">
            SYLLABUS - <span className="text-primary">AS PRESCRIBED BY UNIVERSITY OF MUMBAI</span>
          </h2>

          {/* First Semester */}
          <div className="mb-8 rounded-xl bg-white p-6 md:p-8 shadow-lg border-l-4 border-primary">
            <h3 className="mb-6 text-2xl font-bold text-black">First Semester</h3>
            <div className="grid gap-3 md:grid-cols-2">
              {[
                "Food Production & Patisserie - I",
                "Food & Beverage Service - I",
                "Front Office - I",
                "Housekeeping - I",
                "Rooms Division Management- I",
                "Communication Skill - I (English & French)",
                "Information Technology",
                "Food Safety & Nutrition",
              ].map((subject, index) => (
                <div key={index} className="flex items-center rounded-lg bg-orange-50 p-3 border border-orange-100">
                  <span className="mr-3 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <p className="text-sm font-medium text-body-color">{subject}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Program Outcomes */}
          <div className="mb-8 rounded-xl bg-gradient-to-br from-orange-50 to-white p-6 md:p-8 shadow-lg border border-orange-100">
            <h3 className="mb-6 text-2xl font-bold text-black">Program and Course Outcomes</h3>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                    <th className="p-3 text-left rounded-tl-lg">Category</th>
                    <th className="p-3 text-left rounded-tr-lg">Outcomes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-orange-100">
                  <tr className="bg-white">
                    <td className="p-3 font-semibold text-body-color">Program Outcome</td>
                    <td className="p-3 text-body-color">
                      <ul className="list-disc list-inside space-y-1">
                        <li>Interpret the fundamental principles of essential hospitality & hotel management functions.</li>
                        <li>Recognize the importance & scope of skilled, friendly guest service for stakeholders.</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="bg-orange-50">
                    <td className="p-3 font-semibold text-body-color">Program Specific Outcome</td>
                    <td className="p-3 text-body-color">
                      Employment in hospitality sectors such as hotels, restaurants, cruise ships, airlines, and catering.
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-3 font-semibold text-body-color">Food Production & Patisserie-I</td>
                    <td className="p-3 text-body-color">
                      <ul className="list-disc list-inside space-y-1">
                        <li>Inculcate the right attitude, basic knowledge, and technical skills in culinary arts.</li>
                        <li>Introduce various kitchen equipment and utensils.</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="bg-orange-50">
                    <td className="p-3 font-semibold text-body-color">Food and Beverage Service - I</td>
                    <td className="p-3 text-body-color">
                      <ul className="list-disc list-inside space-y-1">
                        <li>Identify the role of the Food and Beverage Service department and its organization structure.</li>
                        <li>Understand "moments of truth" in guest interactions.</li>
                        <li>Describe responsibilities of beverage service staff and summarize techniques for serving beverages.</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-3 font-semibold text-body-color">Front Office Semester – I</td>
                    <td className="p-3 text-body-color">
                      <ul className="list-disc list-inside space-y-1">
                        <li>Introduce the students to the Hotel & Tourism Industry.</li>
                        <li>Understand the appropriate organization structures and duties in the Front Office and related departments.</li>
                        <li>Develop, prepare guest relations and evaluate practical aspect with guests.</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="bg-orange-50">
                    <td className="p-3 font-semibold text-body-color">Housekeeping Semester - I</td>
                    <td className="p-3 text-body-color">
                      <ul className="list-disc list-inside space-y-1">
                        <li>Identify the role of the housekeeping department and explain its organization structure.</li>
                        <li>List the basic cleaning equipments, cleaning agents and explain their use.</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-3 font-semibold text-body-color">Communication Skills</td>
                    <td className="p-3 text-body-color">
                      <ul className="list-disc list-inside space-y-1">
                        <li>Developing and adapting speaking and achieve listening skills and strategies.</li>
                        <li>Using grammar (French & English) accurately and appropriately.</li>
                        <li>To be able to understand and speak basic French.</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="bg-orange-50">
                    <td className="p-3 font-semibold text-body-color">Information Technology</td>
                    <td className="p-3 text-body-color">
                      To equip the student with the theory inputs with respect to understanding the fundamentals of computers and necessary skills to operate the generic applications.
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-3 font-semibold text-body-color">Food Safety & Nutrition</td>
                    <td className="p-3 text-body-color">
                      <ul className="list-disc list-inside space-y-1">
                        <li>Learn about the importance of hygiene & sanitation in the catering industry.</li>
                        <li>Understand function, sources & deficiency of nutrients.</li>
                        <li>Gain knowledge about maintenance of good health.</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="mx-auto max-w-3xl rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 p-8 md:p-12 shadow-2xl">
            <h3 className="mb-4 text-2xl font-bold text-white md:text-3xl">
              Ready to Start Your Journey?
            </h3>
            <p className="mb-6 text-lg text-white/90">
              Join Arun Muchhala International College of Hotel Management and embark on an exciting career in hospitality.
            </p>
            <button className="rounded-lg bg-white px-8 py-4 text-base font-bold text-primary transition-all hover:shadow-2xl hover:scale-105">
              Apply Now for 2025-2026
            </button>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-orange-200 rounded-full blur-3xl opacity-20 -z-10" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-orange-300 rounded-full blur-3xl opacity-15 -z-10" />
    </section>
  );
}
