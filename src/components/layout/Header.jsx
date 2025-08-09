import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full ">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-3xl font-bold text-green-600">Biccas</div>

        <nav className="hidden md:flex space-x-8 text-sm font-medium">
          <a href="#" className="text-black font-semibold">
            Home
          </a>
          <a href="#" className="text-gray-500 hover:text-black">
            Product
          </a>
          <a href="#" className="text-gray-500 hover:text-black">
            FAQ
          </a>
          <a href="#" className="text-gray-500 hover:text-black">
            Blog
          </a>
          <a href="#" className="text-gray-500 hover:text-black">
            About Us
          </a>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <button className="text-gray-600 hover:bg-green-600 hover:text-black text-sm px-3 py-1 rounded">
            Login
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-white text-sm px-4 py-2 rounded-md shadow-sm">
            Sign Up
          </button>
        </div>

        <button
          className="md:hidden flex items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-6 py-4 space-y-4 shadow-md">
          <a href="#" className="block text-black font-semibold">
            Home
          </a>
          <a href="#" className="block text-gray-500 hover:text-black">
            Product
          </a>
          <a href="#" className="block text-gray-500 hover:text-black">
            FAQ
          </a>
          <a href="#" className="block text-gray-500 hover:text-black">
            Blog
          </a>
          <a href="#" className="block text-gray-500 hover:text-black">
            About Us
          </a>
          <div className="pt-4 flex flex-col space-y-2">
            <button className="text-gray-600 hover:bg-green-600 hover:text-black text-sm px-3 py-1 rounded">
              Login
            </button>
            <button className="bg-green-500 hover:bg-green-600 text-white text-sm px-4 py-2 rounded-md shadow-sm">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
