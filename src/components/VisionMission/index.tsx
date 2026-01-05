const VisionMission = () => {
  return (
    <section className="relative bg-white py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          {/* Vision */}
          <div className="w-full px-4 lg:w-1/2">
            <div className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-2xl mb-8 lg:mb-0 lg:mr-4 border border-orange-100">
              {/* Decorative gradient */}
              <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600" />

              <div className="mb-6 flex items-center">
                <div className="mr-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-orange-600 shadow-lg">
                  <svg
                    className="h-8 w-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-black sm:text-4xl">
                  Our Vision
                </h2>
              </div>

              <p className="text-lg leading-relaxed text-body-color">
                Our vision is to nurture skilled, socially conscious hoteliers of exceptional caliber, capable of driving national progress.
              </p>

              {/* Background decoration */}
              <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-gradient-to-br from-orange-100 to-orange-200 opacity-30 blur-2xl transition-all duration-300 group-hover:scale-125" />
            </div>
          </div>

          {/* Mission */}
          <div className="w-full px-4 lg:w-1/2">
            <div className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-2xl lg:ml-4 border border-orange-100">
              {/* Decorative gradient */}
              <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400" />

              <div className="mb-6 flex items-center">
                <div className="mr-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-orange-600 to-orange-400 shadow-lg">
                  <svg
                    className="h-8 w-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-black sm:text-4xl">
                  Our Mission
                </h2>
              </div>

              <p className="text-lg leading-relaxed text-body-color">
                Our mission is to deliver top-tier education and guidance, supported by industry partnerships and cutting-edge infrastructure.
              </p>

              {/* Background decoration */}
              <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-gradient-to-br from-orange-200 to-orange-100 opacity-30 blur-2xl transition-all duration-300 group-hover:scale-125" />
            </div>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-orange-200 rounded-full blur-3xl opacity-20 -z-10" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-orange-300 rounded-full blur-3xl opacity-15 -z-10" />
    </section>
  );
};

export default VisionMission;
