import React from "react";
import FeatureCard1 from "./FeatureCard1";
import FeatureCard2 from "./FeatureCard2";
import FeatureCard3 from "./FeatureCard3";

export default function Features() {
  return (
    <section className="px-8 py-16 ">
      <div className="max-w-5xl mx-auto text-center md:text-left grid md:grid-cols-3 gap-6 items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-800">
            Our Features you cab get
          </h2>
        </div>
        <div>
          <p className="text-gray-600">
            We offer a variety of interesting features that can help increase
            your productivity at work and manage your project easily
          </p>
        </div>
        <div className="flex md:justify-end justify-center">
          <button className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600">
            Get Started
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-12 grid md:grid-cols-3 gap-8">
        <FeatureCard1 />
        <FeatureCard2 />
        <FeatureCard3 />
      </div>
    </section>
  );
}
