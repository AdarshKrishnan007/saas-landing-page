import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0F172A] text-white pb-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm text-gray-400 px-3 py-8">
        <div>
          <h3 className="text-green-400 text-3xl font-bold">Biccas</h3>
          <p className="mt-2">Get started now try our product</p>
          <div className="relative mt-4 w-full max-w-xs">
            <input
              type="email"
              placeholder="Enter your email here"
              className="w-full px-4 pr-14 py-2 rounded-full bg-transparent border border-gray-300 focus:outline-none text-black placeholder-gray-500"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-green-500 w-7 h-7 rounded-full flex items-center justify-center hover:bg-green-400">
              <img
                src="/assets/svg/right-arrow-svgrepo-com.svg"
                alt="arrow icon"
                className="h-4 w-4 filter invert"
              />
            </button>
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold">Support</h4>
          <ul className="mt-3 space-y-2">
            <li>Help centre</li>
            <li>Account information</li>
            <li>About</li>
            <li>Contact us</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold">Help and Solution</h4>
          <ul className="mt-3 space-y-2">
            <li>Talk to support</li>
            <li>Support docs</li>
            <li>System status</li>
            <li>Covid response</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold">Product</h4>
          <ul className="mt-3 space-y-2">
            <li>Update</li>
            <li>Security</li>
            <li>Beta test</li>
            <li>Pricing product</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-white-500 text-xs space-y-3 md:space-y-0 pt-4">
        <p className="text-center">© 2022 Biccas Inc. All rights reserved</p>
        <p className="text-center">Terms and Conditions • Privacy Policy</p>
      </div>
    </footer>
  );
};

export default Footer;
