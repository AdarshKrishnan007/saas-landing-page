import React from "react";
// import { CheckCircleIcon } from "@heroicons/react/24/solid";

export default function BenefitSection() {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
            What Benifit Will <br /> You Get
          </h2>
          <ul className="space-y-5">
            {[
              "Free Consulting With Experet Saving Money",
              "Online Banking",
              "Investment Report Every Month",
              "Saving Money For The Future",
              "Online Transaction",
            ].map((text, index) => (
              <li key={index} className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-6 w-6 fill-green-500"
                >
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 
           10 10-4.48 10-10S17.52 2 12 2zm-1.41 
           14.09L6.7 12.2l1.41-1.41 2.48 
           2.48 5.3-5.3 1.41 1.41-6.71 6.71z"
                  />
                </svg>

                <span className="text-gray-800 font-medium">{text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative w-full max-w-[600px] mx-auto">
          <img
            src="/assets/images/Laptop-img.png"
            alt="Laptop"
            className="rounded-lg w-full h-auto"
          />

          {/* Top Right Card */}
          <div
            className="absolute -right-4 px-3 py-2 md:px-4 md:py-2 bg-white flex items-center gap-2 md:gap-3 rounded-lg shadow-md"
            style={{ top: "-2.25rem" }}
          >
            <div>
              <p className="text-xs md:text-sm font-medium text-gray-600">
                Total Income
              </p>
              <p className="text-sm md:text-base font-bold text-gray-900">
                $245.00
              </p>
            </div>
            <svg
              className="w-4 h-4 md:w-5 md:h-5 text-green-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M3 3h2v14H3V3zm4 4h2v10H7V7zm4-4h2v14h-2V3zm4 8h2v6h-2v-6z" />
            </svg>
          </div>

          {/* Top Left Profile */}
          <div className="absolute top-10 left-2 md:left-4 bg-white shadow-lg rounded-lg px-3 py-2 md:px-4 md:py-2 flex items-center gap-2 md:gap-3">
            <img
              src="/assets/images/AmandaYoung-Img.jpg"
              alt="Amanda Young"
              className="w-8 h-8 md:w-10 md:h-10 rounded-full"
            />
            <div>
              <p className="text-xs md:text-sm font-bold text-gray-900">
                Amanda Young
              </p>
              <p className="text-[10px] md:text-xs text-gray-500">
                Expert Saving Money
              </p>
            </div>
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-green-500 flex items-center justify-center">
              <img
                src="/assets/svg/comment-svgrepo-com.svg"
                alt=""
                className="w-4 h-4 md:w-6 md:h-6 filter invert"
              />
            </div>
          </div>

          {/* Bottom Left Message */}
          <div
            className="absolute bg-white shadow-lg rounded-lg px-3 py-2 md:px-4 md:py-2 flex items-center gap-2 md:gap-3"
            style={{ left: "-0.25rem", bottom: "-1rem" }}
          >
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white-500 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="36"
                viewBox="0 0 24 24"
                aria-hidden="true"
                role="img"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10.2"
                  fill="none"
                  stroke="#10B981"
                  strokeWidth="1.6"
                />

                <path
                  d="M7.5 12.5l2.2 2.2 6.0-6.0"
                  fill="none"
                  stroke="#10B981"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p className="text-xs md:text-sm font-medium text-gray-800">
              Money Transfer Successful
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
