import React from "react";

export default function FeatureCard3() {
  return (
    <div className="bg-white p-6 rounded-2xl ">
      <img
        src="/assets/images/feature-card-img3.png"
        alt="Daily Analytics"
        className="w-full h-70 object-contain"
      />
      <h3 className="text-lg font-semibold mt-4">Daily Analytics</h3>
      <p className="text-gray-600 text-sm mt-2">
        We always provide useful information to make it easier for you every day
      </p>
    </div>
  );
}
