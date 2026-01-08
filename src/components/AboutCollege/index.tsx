import Image from "next/image";

const AboutCollege = () => {
  return (
    <section className="bg-white py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="border-b border-gray-200 pb-16 md:pb-20 lg:pb-28">
          {/* Section Header */}
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-black sm:text-4xl lg:text-5xl">
              About <span className="text-primary">Arun Muchhala International College of Hotel Management</span>
            </h2>
            <div className="mx-auto h-1 w-24 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full" />
          </div>

          {/* Main Content */}
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mb-12 rounded-2xl bg-white p-8 md:p-12 shadow-lg border border-orange-100">
                <p className="mb-6 text-base leading-relaxed text-body-color md:text-lg">
                  Arun Muchhala International College of Hotel Management stands as a beacon of excellence in education. Our educational approach is distinctive and unparalleled, dedicated to upholding the highest global standards of academic prowess. In preparation for the demanding global business landscape, our faculty, comprised of industry experts, collaborates closely with students.
                </p>

                <p className="mb-6 text-base leading-relaxed text-body-color md:text-lg">
                  Hospitality is a domain that offers abundant opportunities for personal fulfillment alongside meeting guests' needs—an inherently challenging task that isn't for everyone. However, with proper training and mental preparedness, individuals can navigate the challenges with a smile. Our three-year BSc Hospitality Studies program not only imparts technical knowledge but also instills resilience, ensuring that our students are equipped to face industry challenges head-on.
                </p>

                <div className="my-8 rounded-xl bg-orange-50 p-6 shadow-md border-l-4 border-primary">
                  <h3 className="mb-3 text-xl font-bold text-black md:text-2xl">
                    Our comprehensive
                  </h3>
                  <p className="text-base leading-relaxed text-body-color md:text-lg">
                    Our comprehensive Hotel Management courses and diverse activities aim to cultivate both technical and managerial acumen among students while fostering a genuine passion for the profession. Our esteemed faculty members not only impart knowledge but also share their invaluable experiences, keeping students abreast of industry trends and developments.
                  </p>
                </div>

                <p className="mb-6 text-base leading-relaxed text-body-color md:text-lg">
                  At Arun Muchhala International College of Hotel Management, we measure our success by the achievements of our students. We aspire for their success to serve as a benchmark for others, inspiring future generations in the field.
                </p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="-mx-4 flex flex-wrap justify-center">
            {[
              {
                icon: "/Strong.gif",
                title: "Strong Academic Foundation",
                description: "Expert faculty at AMICHM make learning simple, practical, and engaging, helping students build strong hospitality fundamentals with ease.",
              },
              {
                icon: "/Industry.gif",
                title: "Industry Exposure",
                description: "Regular interaction with renowned chefs, hospitality leaders, and industry experts from across India keeps students updated with the latest industry trends.",
              },
              {
                icon: "/career.gif",
                title: "Career-Focused Training",
                description: "Our curriculum is designed to prepare students for real hotel environments, making them top choices in hospitality placement interviews.",
              },
              {
                icon: "/award.gif",
                title: "Award-Winning Excellence",
                description: "Recipient of the Mid-Day Excellence in Education Award for Excellence in Hotel Management Education, reflecting our commitment to quality and success.",
              },
            ].map((feature, index) => (
              <div key={index} className="w-full px-4 sm:w-1/2 lg:w-1/4">
                <div className="group mb-8 flex flex-col items-center text-center rounded-2xl bg-white p-10 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-gray-50 h-full">
                  <div className="mb-8 flex h-40 w-40 items-center justify-center transition-transform duration-500 group-hover:scale-110">
                    <Image 
                      src={feature.icon} 
                      alt={feature.title}
                      width={160}
                      height={160}
                      className="object-contain"
                      unoptimized={true}
                    />
                  </div>
                  <h4 className="mb-4 text-xl font-bold text-black leading-tight">{feature.title}</h4>
                  <p className="text-sm leading-relaxed text-body-color">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Success Statement */}
          <div className="mt-8 text-center">
            <div className="mx-auto max-w-3xl rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 p-8 shadow-2xl">
              <p className="text-lg font-semibold text-white md:text-xl">
                At Arun Muchhala International College of Hotel Management, we measure our success by the character
                and achievements of our students. We inspire them to be visionary leaders
                who make a positive impact on the world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCollege;
