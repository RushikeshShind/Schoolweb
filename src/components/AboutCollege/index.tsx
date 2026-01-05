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
          <div className="-mx-4 flex flex-wrap">
            {[
              {
                icon: "📚",
                title: "Excellent Academics",
                description: "Consistently high results and a curriculum that promotes critical thinking",
              },
              {
                icon: "🌐",
                title: "Global Perspective",
                description: "Preparing students for a multicultural world through diverse programs",
              },
              {
                icon: "⚡",
                title: "Innovation & Tech",
                description: "Modern campus with high-tech laboratories and digital classrooms",
              },
              {
                icon: "🤝",
                title: "Values Based",
                description: "An atmosphere that fosters integrity, respect, and social responsibility",
              },
            ].map((feature, index) => (
              <div key={index} className="w-full px-4 md:w-1/2 lg:w-1/4">
                <div className="group mb-8 rounded-xl bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-orange-600 shadow-lg transition-transform duration-300 group-hover:scale-110 text-3xl">
                    {feature.icon}
                  </div>
                  <h4 className="mb-2 text-lg font-bold text-black">{feature.title}</h4>
                  <p className="text-sm text-body-color">{feature.description}</p>
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
