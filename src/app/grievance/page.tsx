import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grievance | AMICHM",
  description: "Student grievance redressal system",
};

export default function Grievance() {
  return (
    <section className="relative bg-white pt-[120px] pb-16 md:pt-[150px] md:pb-20 lg:pt-[180px] lg:pb-28">
      <div className="container">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-3xl font-bold text-black sm:text-4xl lg:text-5xl">
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Grievance Redressal</span>
          </h1>
          <div className="mx-auto h-1 w-24 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full" />
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl bg-gradient-to-br from-orange-50 to-white p-8 md:p-12 shadow-lg border border-orange-100">
            <h2 className="mb-6 text-2xl font-bold text-black">Student Grievance Redressal Cell</h2>

            <div className="space-y-6">
              <div className="rounded-xl bg-white p-6 shadow-md border-l-4 border-primary">
                <h3 className="mb-3 text-xl font-bold text-black">Purpose</h3>
                <p className="text-body-color">
                  The Student Grievance Redressal Cell has been constituted to address and resolve complaints and grievances of students in a fair and transparent manner.
                </p>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-md border-l-4 border-primary">
                <h3 className="mb-3 text-xl font-bold text-black">Types of Grievances</h3>
                <ul className="list-disc list-inside space-y-2 text-body-color">
                  <li>Academic matters</li>
                  <li>Examination related issues</li>
                  <li>Infrastructure and facilities</li>
                  <li>Administrative procedures</li>
                  <li>Any other college-related concerns</li>
                </ul>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-md border-l-4 border-primary">
                <h3 className="mb-3 text-xl font-bold text-black">How to Submit a Grievance</h3>
                <p className="mb-4 text-body-color">
                  Students can submit their grievances through:
                </p>
                <ul className="list-disc list-inside space-y-2 text-body-color">
                  <li>Written application to the Grievance Redressal Cell</li>
                  <li>Email to the college administration</li>
                  <li>Grievance box located at the college premises</li>
                  <li>Direct meeting with cell members during office hours</li>
                </ul>
              </div>

              <div className="rounded-xl bg-gradient-to-r from-orange-100 to-orange-50 p-6 border-l-4 border-primary">
                <h3 className="mb-3 text-xl font-bold text-black">Confidentiality Assured</h3>
                <p className="text-body-color">
                  All grievances will be treated with utmost confidentiality and will be addressed promptly. The college is committed to providing a safe and supportive environment for all students.
                </p>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-md border-l-4 border-primary">
                <h3 className="mb-3 text-xl font-bold text-black">Contact Information</h3>
                <div className="space-y-2 text-body-color">
                  <p>📧 Email: amichmtp@gmail.com</p>
                  <p>📞 Phone: 022-2597 3939 / 1199 / 0354</p>
                  <p>🕐 Office Hours: Monday - Saturday, 9:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
