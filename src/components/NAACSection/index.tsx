const NAACSection = () => {
  return (
    <section className="relative bg-white py-16 md:py-20 lg:py-28">
      <div className="container">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-black sm:text-4xl lg:text-5xl">
            Vibrant <span className="text-primary">Campus Spirit</span>
          </h2>
          <div className="mx-auto h-1 w-24 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full" />
        </div>

        {/* Content */}
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl bg-white p-8 md:p-12 shadow-2xl border border-orange-100">
            <div className="mb-8 text-center">
              <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-orange-600 shadow-lg">
                <svg
                  className="h-12 w-12 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="mb-4 text-2xl font-bold text-black md:text-3xl">
                Life Beyond the Classroom
              </h3>
              <p className="text-base leading-relaxed text-body-color md:text-lg">
                At St. Jude's, we celebrate diversity and encourage students to explore their
                passions. Our vibrant campus life is a blend of sports, arts, environmental clubs,
                and leadership programs, creating memories that last a lifetime.
              </p>
            </div>

            {/* Image Gallery Placeholder */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                { label: "Sports Day", icon: "🏆" },
                { label: "Arts Festival", icon: "🎨" },
                { label: "Science Fair", icon: "🔬" }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="group relative aspect-video overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                >
                  <div className="h-full w-full bg-gradient-to-br from-orange-200 to-orange-300 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl mb-2">{item.icon}</div>
                      <p className="mt-2 text-sm text-black font-semibold">{item.label}</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              ))}
            </div>

            {/* Info Box */}
            <div className="mt-8 rounded-xl bg-gradient-to-r from-orange-50 to-orange-100 p-6 border-l-4 border-primary">
              <div className="flex items-start">
                <svg
                  className="mr-3 h-6 w-6 text-primary flex-shrink-0 mt-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  />
                </svg>
                <div>
                  <h4 className="mb-2 text-lg font-bold text-black">A Nurturing Community</h4>
                  <p className="text-base text-body-color">
                    The St. Jude's family is a supportive network of students, teachers, and parents.
                    Together, we foster an environment of mutual respect, where every voice is
                    heard and every achievement is celebrated with pride.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-orange-200 rounded-full blur-3xl opacity-20 -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-300 rounded-full blur-3xl opacity-15 -z-10" />
    </section>
  );
};

export default NAACSection;
