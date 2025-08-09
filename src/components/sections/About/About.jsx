import React from "react";

const About = () => {
  return (
    <section class="bg-[#0F172A] text-white py-16 px-6">
      <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 class="text-3xl font-bold leading-snug">
            People are Saying
            <br /> About DoWhith
          </h2>
          <p class="text-gray-400 mt-4 max-w-md">
            Everything you need to accept payment and grow your money or manage
            anywhere on planet
          </p>
          <div class="w-20 h-20 ">
            <svg
              width="60"
              height="60"
              viewBox="0 0 40 40"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 10 L15 10 L12 30 L7 30 Z" fill="#D1D5DB" />
              <path d="M22 10 L27 10 L24 30 L19 30 Z" fill="#D1D5DB" />
            </svg>
          </div>

          <p class="text-gray-400 mt-3 max-w-md ">
            I am very helped by this E-wallet application, my days are very easy
            to use this application and it’s very helpful in my life, even I can
            pay in a short time
          </p>
          <p class="mt-4 text-gray-300">– Aria Zinanrio</p>

          <div class="flex items-center space-x-3 mt-6">
            <div class="w-12 h-12">
              <img
                src="/assets/images/FirstImg.jpg"
                alt="user"
                class="w-full h-full rounded-full object-cover object-[80%_40%]"
              />
            </div>
            <div class="w-12 h-12">
              <img
                src="/assets/images/SecondImg.jpg"
                alt="user"
                class="w-full h-full rounded-full object-cover object-[40%_40%]"
              />
            </div>
            <div class="w-12 h-12">
              <img
                src="/assets/images/ThirdImg.jpg"
                alt="user"
                class="w-full h-full rounded-full object-fill object-[40%_40%]"
              />
            </div>
            <div class="w-12 h-12">
              <img
                src="/assets/images/AmandaYoung-Img.jpg"
                alt="user"
                class="w-full h-full rounded-full object-cover object-[55%_40%]"
              />
            </div>
            <div class="w-12 h-12">
              <img
                src="/assets/svg/play-circle-o-svgrepo-com.svg"
                alt="user"
                class="w-full h-full filter invert"
              />
            </div>
          </div>
        </div>

        <div class="bg-[#1E293B] p-8 rounded-lg shadow-lg">
          <div class="text-center">
            <div class="flex justify-center mb-4">
              <img
                src="/assets/icons/AED-icon.png"
                alt="Engagement"
                className="h-10 w-10"
              />
            </div>
            <h3 class="text-2xl font-semibold">Get Started</h3>
          </div>

          <form class="mt-6 space-y-4">
            <div>
              <label for="email" class="block text-sm mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                class="w-full px-4 py-2 rounded-md text-black focus:outline-none"
              />
            </div>
            <div>
              <label for="message" class="block text-sm mb-1">
                Message
              </label>
              <textarea
                id="message"
                placeholder="What are you say ?"
                class="w-full px-4 py-2 rounded-md text-black focus:outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              class="w-full bg-green-500 text-black py-2 rounded-md font-medium hover:bg-green-400"
            >
              Request Demo
            </button>
            <p class="text-center text-gray-400 text-sm">or Start Free Trial</p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default About;
