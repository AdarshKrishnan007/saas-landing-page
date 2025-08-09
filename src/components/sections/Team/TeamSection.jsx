import React from "react";

const TeamSection = () => {
  return (
    <section className="text-center py-12">
      <h2 className="text-3xl font-semibold mb-8">
        More than 25,000 teams use Collabs
      </h2>

      <div className="flex justify-center flex-wrap gap-12 text-gray-400">
        <div className="flex items-center gap-4">
          <img
            src="/assets/svg/unsplash-fill-svgrepo-com.svg"
            alt="Unsplash"
            className="h-10"
            style={{
              filter:
                "invert(42%) sepia(0%) saturate(0%) hue-rotate(178deg) brightness(92%) contrast(89%)",
            }}
          />
          <span className="text-lg">Unsplash</span>
        </div>

        <div className="flex items-center gap-4">
          <img
            src="/assets/svg/notion-svgrepo-com.svg"
            alt="Notion"
            className="h-10"
            style={{
              filter:
                "invert(42%) sepia(0%) saturate(0%) hue-rotate(178deg) brightness(92%) contrast(89%)",
            }}
          />
          <span className="text-lg">Notion</span>
        </div>

        <div className="flex items-center gap-4">
          <img
            src="/assets/svg/intercom-svgrepo-com.svg"
            alt="Intercom"
            className="h-10"
            style={{
              filter:
                "invert(42%) sepia(0%) saturate(0%) hue-rotate(178deg) brightness(92%) contrast(89%)",
            }}
          />
          <span className="text-lg">INTERCOM</span>
        </div>

        <div className="flex items-center gap-4">
          <img
            src="/assets/svg/descript-seeklogo.svg"
            alt="Descript"
            className="h-10"
            style={{
              filter:
                "invert(42%) sepia(0%) saturate(0%) hue-rotate(178deg) brightness(92%) contrast(89%)",
            }}
          />
          <span className="text-lg">descript</span>
        </div>

        <div className="flex items-center gap-4">
          <img
            src="/assets/svg/grammarly-svgrepo-com.svg"
            alt="Grammarly"
            className="h-10"
            style={{
              filter:
                "invert(42%) sepia(0%) saturate(0%) hue-rotate(178deg) brightness(92%) contrast(89%)",
            }}
          />
          <span className="text-lg">grammarly</span>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
