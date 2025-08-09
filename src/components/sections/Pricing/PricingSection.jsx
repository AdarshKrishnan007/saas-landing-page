import React from "react";
import PricingCard from "./PricingCard";
import BenefitSection from "../Benefit/BenefitSection";

const PricingSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-white to-green-50">
      <BenefitSection />
      <div className="py-16 text-center mb-8 px-4">
        <h2 className="text-3xl font-bold">Choose Plan That’s Right For You</h2>
        <p className="text-gray-500 mt-2">
          Choose plan that works best for you, feel free to contact us
        </p>

        <div className="flex flex-wrap justify-center mt-6 gap-3 bg-white shadow-lg p-3 rounded-xl w-fit mx-auto">
          <button className="px-5 py-2 bg-white text-gray-700 shadow-md rounded-lg transition-all duration-300 hover:bg-green-500 hover:text-white">
            Bill Monthly
          </button>
          <button className="px-5 py-2 bg-green-500 text-white shadow-md rounded-lg transition-all duration-300 hover:bg-green-600">
            Bill Yearly
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid sm:grid-cols-1 md:grid-cols-3 gap-8 px-4">
        <PricingCard
          title="Free"
          subtitle="Have a go and test your superpowers"
          price="0"
          features={[
            "2 Users",
            "2 Files",
            "Public Share & Comments",
            "Chat Support",
            "New income apps",
          ]}
          buttonText="Signup for free"
          buttonColor="bg-green-500"
        />

        <div className="md:transform md:scale-110 shadow-xl rounded-2xl md:my-0 my-4">
          <PricingCard
            title="Pro"
            subtitle="Experiment the power of infinite possibilities"
            price="8"
            saveText="Save $50 a year"
            features={[
              "4 Users",
              "All apps",
              "Unlimited editable exports",
              "Folders and collaboration",
              "All incoming apps",
            ]}
            buttonText="Go to pro"
            buttonColor="bg-green-500"
          />
        </div>

        <PricingCard
          title="Business"
          subtitle="Unveil new superpowers and join the Design League"
          price="16"
          features={[
            "All the features of pro plan",
            "Account success Manager",
            "Single Sign-On (SSO)",
            "Co-conception program",
            "Collaboration-Soon",
          ]}
          buttonText="Goto Business"
          buttonColor="bg-green-500"
        />
      </div>
    </section>
  );
};

export default PricingSection;
