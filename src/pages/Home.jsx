import React from "react";
import Header from "../components/layout/Header";
import BackgroundEllipses from "../components/layout/BackgroundEllipses";
import HeroLeft from "../components/sections/Hero/HeroLeft";
import HeroRight from "../components/sections/Hero/HeroRight";
import TeamSection from "../components/sections/Team/TeamSection";

const Home = () => {
  return (
    <div className="relative min-h-screen ">
      <BackgroundEllipses />

      <div className="relative z-10 p-10">
        <Header />
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-center px-6 py-12 max-w-7xl mx-auto space-y-10 lg:space-y-0">
        <div className="flex-1 text-center lg:text-left">
          <HeroLeft />
        </div>
        <div className="flex-1 flex justify-center">
          <HeroRight />
        </div>
      </div>
      <TeamSection />
    </div>
  );
};

export default Home;
