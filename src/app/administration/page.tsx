import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Administration | Arun Muchhala International College of Hotel Management",
  description: "Administration and management of Arun Muchhala International College of Hotel Management",
};

export default function Administration() {
  return (
    <section className="relative bg-white pt-[120px] pb-16 md:pt-[150px] md:pb-20 lg:pt-[180px] lg:pb-28">
      <div className="container">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-3xl font-bold text-black sm:text-4xl lg:text-5xl">
            <span className="text-primary">Administration</span>
          </h1>
          <div className="mx-auto h-1 w-24 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full" />
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl bg-gradient-to-br from-orange-50 to-white p-8 md:p-12 shadow-lg border border-orange-100">
            <h2 className="mb-6 text-2xl font-bold text-black">School Administration</h2>

            <div className="space-y-6">
              <div className="rounded-xl bg-white p-6 shadow-md border-l-4 border-primary">
                <h3 className="mb-3 text-xl font-bold text-black">Leadership</h3>
                <div className="space-y-2 text-body-color">
                  <p><strong>Principal:</strong> Dr. Michael Jude</p>
                  <p><strong>Trust:</strong> St. Jude's Educational Foundation</p>
                </div>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-md border-l-4 border-primary">
                <h3 className="mb-3 text-xl font-bold text-black">Office Hours</h3>
                <p className="text-body-color">Monday - Friday: 8:00 AM - 4:00 PM</p>
                <p className="text-body-color">Saturday: 9:00 AM - 1:00 PM</p>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-md border-l-4 border-primary">
                <h3 className="mb-3 text-xl font-bold text-black">Contact Information</h3>
                <div className="space-y-2 text-body-color">
                  <p>📞 Phone: +1 (555) 123-4567</p>
                  <p>✉️ Email: info@stjudesinternational.com</p>
                  <p>📍 Address: 123 Education Excellence Way, Knowledge Park, City - 123456</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
