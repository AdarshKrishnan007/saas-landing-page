import React from "react";

export default function FeatureCard1() {
  return (
    <div className="bg-white p-6 rounded-2xl ">
      <img
        src="/assets/images/feature-card-img1.png"
        alt="Collaboration"
        className="w-full h-70 object-contain"
      />
      <h3 className="text-lg font-semibold mt-4">Collaboration Teams</h3>
      <p className="text-gray-600 text-sm mt-2">
        Here you can handle projects together with team virtually
      </p>
    </div>
  );
}
