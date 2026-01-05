const NewsLatterBox = () => {
  return (
    <div className="relative z-10 rounded-2xl bg-white p-8 shadow-lg border border-orange-100 sm:p-11 lg:p-8 xl:p-11">
      <h3 className="mb-4 text-2xl leading-tight font-bold text-black">
        Stay Updated
      </h3>
      <p className="border-body-color/25 text-body-color mb-11 border-b pb-11 text-base leading-relaxed">
        Subscribe to our newsletter to receive the latest news, event updates, and
        academic announcements from St. Jude's.
      </p>
      <div>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          className="border-stroke text-body-color focus:border-primary mb-4 w-full rounded-xl border bg-orange-50/30 px-6 py-3 text-base outline-none transition-all shadow-sm"
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="border-stroke text-body-color focus:border-primary mb-4 w-full rounded-xl border bg-orange-50/30 px-6 py-3 text-base outline-none transition-all shadow-sm"
        />
        <input
          type="submit"
          value="Subscribe"
          className="bg-primary shadow-lg hover:bg-primary/90 mb-5 flex w-full cursor-pointer items-center justify-center rounded-full px-9 py-4 text-base font-bold text-white duration-300 active:scale-95 transition-all"
        />
        <p className="text-body-color text-center text-xs leading-relaxed">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>

      <div>
        <span className="absolute top-7 left-2">
          <svg
            width="57"
            height="65"
            viewBox="0 0 57 65"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.5"
              d="M0.407629 15.9573L39.1541 64.0714L56.4489 0.160793L0.407629 15.9573Z"
              fill="url(#paint0_linear_1028_600)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1028_600"
                x1="-18.3187"
                y1="55.1044"
                x2="37.161"
                y2="15.3509"
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  stopColor="#FF6600"
                  stopOpacity="0.62"
                />
                <stop
                  offset="1"
                  stopColor="#FF6600"
                  stopOpacity="0"
                />
              </linearGradient>
            </defs>
          </svg>
        </span>

        <span className="absolute bottom-24 left-1.5">
          <svg
            width="39"
            height="32"
            viewBox="0 0 39 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.5"
              d="M14.7137 31.4215L38.6431 4.24115L6.96581e-07 0.624124L14.7137 31.4215Z"
              fill="url(#paint1_linear_1028_601)"
            />
            <defs>
              <linearGradient
                id="paint1_linear_1028_601"
                x1="39.1948"
                y1="38.335"
                x2="10.6982"
                y2="10.2511"
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  stopColor="#FF6600"
                  stopOpacity="0.62"
                />
                <stop
                  offset="1"
                  stopColor="#FF6600"
                  stopOpacity="0"
                />
              </linearGradient>
            </defs>
          </svg>
        </span>

        <span className="absolute top-[140px] right-2">
          <svg
            width="38"
            height="38"
            viewBox="0 0 38 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.5"
              d="M10.6763 35.3091C23.3976 41.6367 38.1681 31.7045 37.107 17.536C36.1205 4.3628 21.9407 -3.46901 10.2651 2.71063C-2.92254 9.69061 -2.68321 28.664 10.6763 35.3091Z"
              fill="url(#paint2_linear_1028_602)"
            />
            <defs>
              <linearGradient
                id="paint2_linear_1028_602"
                x1="-0.571054"
                y1="-37.1717"
                x2="28.7937"
                y2="26.7564"
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  stopColor="#FF6600"
                  stopOpacity="0.62"
                />
                <stop
                  offset="1"
                  stopColor="#FF6600"
                  stopOpacity="0"
                />
              </linearGradient>
            </defs>
          </svg>
        </span>

        <span className="absolute top-0 right-0">
          <svg
            width="162"
            height="91"
            viewBox="0 0 162 91"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.3">
              <path
                opacity="0.45"
                d="M1 89.9999C8 77.3332 27.7 50.7999 50.5 45.9999C79 39.9999 95 41.9999 106 30.4999C117 18.9999 126 -3.50014 149 -3.50014C172 -3.50014 187 4.99986 200.5 -8.50014C214 -22.0001 210.5 -46.0001 244 -37.5001C270.8 -30.7001 307.167 -45 322 -53"
                stroke="url(#paint3_linear_1028_603)"
              />
            </g>
            <defs>
              <linearGradient
                id="paint3_linear_1028_603"
                x1="291.35"
                y1="12.1032"
                x2="179.211"
                y2="237.617"
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  offset="0.328125"
                  stopColor="#FF6600"
                />
                <stop
                  offset="1"
                  stopColor="#FF6600"
                  stopOpacity="0"
                />
              </linearGradient>
            </defs>
          </svg>
        </span>
      </div>
    </div>
  );
};

export default NewsLatterBox;
