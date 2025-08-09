import React from "react";

const PartnerSupportSection = () => {
  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:py-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
        <div className="flex-1">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 leading-snug">
            How we support our <br className="hidden sm:block" />
            partner all over the world
          </h2>

          <p className="text-gray-500 mb-8 text-sm sm:text-base">
            SaaS has become a common delivery model for many business
            applications, including office software, messaging software, payroll
            processing, database management, and more.
          </p>

          <div className="flex flex-wrap gap-6 sm:gap-10">
            <div>
              <div className="flex text-yellow-400 mb-2 text-lg sm:text-xl">
                ★ ★ ★ ★ ★
              </div>
              <p className="font-semibold text-sm sm:text-base">
                4.9{" "}
                <span className="text-gray-500 font-normal">/ 5 rating</span>
              </p>
              <p className="text-gray-500 text-xs sm:text-sm">databricks</p>
            </div>

            <div>
              <div className="flex text-yellow-400 mb-2 text-lg sm:text-xl">
                ★ ★ ★ ★ <span className="text-gray-300">★</span>
              </div>
              <p className="font-semibold text-sm sm:text-base">
                4.8{" "}
                <span className="text-gray-500 font-normal">/ 5 rating</span>
              </p>
              <p className="text-gray-500 text-xs sm:text-sm">Chainalysis</p>
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-8 sm:gap-10">
          {[
            {
              icon: "/assets/icons/publishing-icon.png",
              title: "Publishing",
              text: "Plan, collaborate, and publish your content that drives meaningful engagement and growth for your brand.",
            },
            {
              icon: "/assets/icons/Analytics-icon.png",
              title: "Analytics",
              text: "Analyze your performance and create beautiful, insightful reports.",
            },
            {
              icon: "/assets/icons/engagement-icon.png",
              title: "Engagement",
              text: "Quickly navigate and engage with your audience effectively.",
            },
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="bg-white p-3 rounded shadow-md flex-shrink-0">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="h-6 w-6 object-contain"
                />
              </div>
              <div>
                <h4 className="font-bold text-base sm:text-lg">{item.title}</h4>
                <p className="text-gray-500 text-sm sm:text-base">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerSupportSection;
