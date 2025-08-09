import React from "react";

const PricingCard = ({
  title,
  subtitle,
  price,
  saveText,
  features,
  buttonText,
  buttonColor,
  highlight,
}) => {
  return (
    <div
      className={`relative rounded-2xl shadow-lg p-6 flex flex-col items-center text-center transition-colors duration-300
    ${
      highlight
        ? "bg-[#54BD95] text-white hover:bg-[#54BD95]"
        : "bg-white text-gray-800 hover:bg-[#54BD95] hover:text-white"
    }`}
    >
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-sm mt-1">{subtitle}</p>

      <div className="mt-4">
        <span className="text-4xl font-bold">${price}</span>
        {saveText && (
          <p
            className={`text-xs mt-1 ${
              highlight
                ? "bg-green-600 text-white"
                : "bg-green-100 text-green-600"
            } px-3 py-1 rounded-full`}
          >
            {saveText}
          </p>
        )}
      </div>

      <ul
        className={`mt-6 space-y-3 p-4 rounded-lg ${
          highlight ? "bg-white/10 text-white" : "bg-gray-100 text-gray-700"
        }`}
      >
        {features.map((feature, index) => (
          <li
            key={index}
            className="flex items-center gap-2 p-2 rounded-lg transition-colors duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-6 w-6 fill-green-500"
            >
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 
             10 10-4.48 10-10S17.52 2 12 2zm-1.41 
             14.09L6.7 12.2l1.41-1.41 2.48 
             2.48 5.3-5.3 1.41 1.41-6.71 6.71z"
              />
            </svg>
            <span>{feature}</span>
          </li>
        ))}

        <button
          className={`mt-6 px-5 py-2 rounded-xl font-medium transition-colors duration-300
    ${
      highlight
        ? "bg-white text-green-600 shadow-md hover:bg-[#54BD95] hover:text-white"
        : `${buttonColor} text-green-600 bg-white shadow-md hover:bg-[#54BD95] hover:text-white`
    }`}
        >
          {buttonText}
        </button>
      </ul>
    </div>
  );
};

export default PricingCard;
