import React from "react";

const BackgroundEllipses = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute top-[-200px] left-[-200px] w-[400px] h-[400px] bg-[#52BDAA] rounded-full blur-[120px] opacity-40"></div>

      <div className="absolute bottom-[-150px] right-[-150px] w-[300px] h-[300px] bg-[#54BE96] rounded-full blur-[100px] opacity-50"></div>

      <div className="absolute top-[40%] left-[25%] w-[500px] h-[500px] bg-[#e0dfff] rounded-full blur-[150px] opacity-40"></div>
    </div>
  );
};

export default BackgroundEllipses;
