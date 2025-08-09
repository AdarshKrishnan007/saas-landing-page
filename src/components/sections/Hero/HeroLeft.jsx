import React from "react";

const HeroLeft = () => {
  return (
    <div className="text-center max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
        We’re here to <br />
        Increase your <br />
        Productivity
      </h1>

      <div className="my-6 py-4">
        <svg
          className="mx-auto w-full max-w-lg h-auto"
          viewBox="0 0 180 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 20 Q90 0, 180 20"
            stroke="url(#grad)"
            strokeWidth="4"
            fill="transparent"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient
              id="grad"
              x1="0"
              y1="0"
              x2="180"
              y2="0"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4ade80" /> {/* green-400 */}
              <stop offset="1" stopColor="#86efac" /> {/* green-300 */}
            </linearGradient>
          </defs>
        </svg>
      </div>

      <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
        Let’s make your work more organized and easy using the Taskio Dashboard
        with many of the latest features for managing work every day.
      </p>

      <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
        <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full text-sm sm:text-base font-medium">
          Try free trial
        </button>
        <button className="flex items-center justify-center gap-2 text-sm sm:text-base text-gray-700 hover:text-black">
          <span className="p-1">
            <img
              src="/assets/svg/play-circle-svgrepo-com.svg"
              alt=""
              className="w-10 h-10"
            />
          </span>
          View Demo
        </button>
      </div>
    </div>
  );
};

export default HeroLeft;
