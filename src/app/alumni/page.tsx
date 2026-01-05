import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alumni | AMICHM",
  description: "Connect with AMICHM alumni network",
};

export default function Alumni() {
  return (
    <section className="relative bg-white pt-[120px] pb-16 md:pt-[150px] md:pb-20 lg:pt-[180px] lg:pb-28">
      <div className="container">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-3xl font-bold text-black sm:text-4xl lg:text-5xl">
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Alumni</span>
          </h1>
          <div className="mx-auto h-1 w-24 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full" />
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl bg-gradient-to-br from-orange-50 to-white p-8 md:p-12 shadow-lg border border-orange-100">
            <h2 className="mb-6 text-2xl font-bold text-black">Alumni Network</h2>

            <div className="space-y-6">
              <div className="rounded-xl bg-white p-6 shadow-md border-l-4 border-primary">
                <h3 className="mb-3 text-xl font-bold text-black">Our Pride</h3>
                <p className="text-body-color">
                  Our alumni are our pride and have achieved remarkable success across the hospitality industry globally. They work in prestigious hotels, restaurants, cruise lines, and hospitality organizations worldwide.
                </p>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-md border-l-4 border-primary">
                <h3 className="mb-3 text-xl font-bold text-black">Alumni Association</h3>
                <p className="text-body-color">
                  The AMICHM Alumni Association serves as a platform for our graduates to stay connected with the college and with each other. Through various events and initiatives, we maintain strong bonds with our alumni community.
                </p>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-md border-l-4 border-primary">
                <h3 className="mb-3 text-xl font-bold text-black">Benefits for Alumni</h3>
                <ul className="list-disc list-inside space-y-2 text-body-color">
                  <li>Networking opportunities</li>
                  <li>Career guidance and mentorship</li>
                  <li>Access to college facilities</li>
                  <li>Participation in college events</li>
                  <li>Continuing education programs</li>
                </ul>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-md border-l-4 border-primary">
                <h3 className="mb-3 text-xl font-bold text-black">Stay Connected</h3>
                <p className="text-body-color">
                  If you are an alumnus of AMICHM, we would love to hear from you. Please contact us to update your information and stay connected with your alma mater.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
