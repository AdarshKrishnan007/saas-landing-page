import React from "react";

export default function FeatureCard2() {
  return (
    <div className="bg-white p-6 rounded-2xl ">
      <img
        src="/assets/images/feature-card-img2.png"
        alt="Cloud Storage"
        className="w-full h-70 object-contain"
      />
      <h3 className="text-lg font-semibold mt-4">Cloud Storage</h3>
      <p className="text-gray-600 text-sm mt-2">
        No need to worry about storage because we provide storage up to 2 TB
      </p>
    </div>
  );
}
