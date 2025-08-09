import React from "react";

const HeroRight = () => {
  return (
    <div className="relative w-full max-w-sm mx-auto py-10">
      <div className="relative bg-[#52BD94] rounded-2xl flex justify-center items-center overflow-hidden">
        <img
          src="/assets/images/Hero-section-left-img.png"
          alt="User"
          className="relative w-49 h-49 object-cover rounded-xl"
        />
      </div>

      <div className="absolute top-5 left-0 -translate-x-6 bg-white shadow-md rounded-xl px-4 py-3 w-[190px]">
        <p className="text-gray-500 text-sm">Enter amount</p>
        <div className="flex items-center justify-between mt-1">
          <span className="font-semibold text-gray-800">$450.00</span>
          <button className="ml-4 bg-green-500 hover:bg-green-600 text-white text-xs px-3 py-1 rounded-lg">
            Send
          </button>
        </div>
      </div>

      <div className="absolute top-[48%] left-0 -translate-x-6 bg-indigo-500 rounded-lg p-2 shadow-md flex items-center justify-center">
        <img
          src="/assets/svg/tick-svgrepo-com.svg"
          alt="Checkmark"
          className="w-5 h-5 filter invert"
        />
      </div>

      <div className="absolute bottom-5 left-0 -translate-x-6 bg-white flex items-center gap-3 shadow-md rounded-xl px-6 py-4 ">
        <div>
          <p className="text-sm font-medium text-gray-600">Total Income</p>
          <p className="font-bold text-gray-900">$245.00</p>
        </div>
        <svg
          className="w-5 h-5 text-green-500"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M3 3h2v14H3V3zm4 4h2v10H7V7zm4-4h2v14h-2V3zm4 8h2v6h-2v-6z" />
        </svg>
      </div>

      <div className="absolute bottom-5 right-0 translate-x-6 bg-orange-500 p-2 rounded-xl shadow-md flex items-center justify-center">
        <img
          src="/assets/svg/message-bubble-2-svgrepo-com.svg"
          alt="Chat"
          className="w-5 h-5 filter invert"
        />
      </div>

      <div className="absolute top-5 right-0 translate-x-6 bg-yellow-500 p-2 rounded-xl shadow-md flex items-center justify-center">
        <img
          src="/assets/svg/stack-coins-svgrepo-com.svg"
          alt="Note"
          className="w-5 h-5 filter invert"
        />
      </div>

      <div className="absolute right-0 top-[55%] translate-x-8 -translate-y-1/2 rounded-xl p-4">
        <img
          src="/assets/images/credit-img.png"
          alt="Note"
          className="w-[9rem] h-[10rem]"
        />
      </div>
    </div>
  );
};

export default HeroRight;
