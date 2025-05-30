import React from "react";
import { Bell, Headphones, Target } from "lucide-react";
import pentagon from "../../assets/pentagon.png";

export default function WhyChooseUs() {
  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center px-6 py-16">
      <div className="flex flex-col md:flex-row items-center w-full max-w-6xl gap-10">
        {/* Left with Pentagon Image */}
        <div className="relative w-72 h-72 md:w-96 md:h-96 flex-shrink-0">
          <img
            src={pentagon}
            alt="Pentagon shape"
            className="w-full h-full object-contain"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-medium text-black leading-snug">
              Why <br /> Choose <br /> Us?
            </h2>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex flex-col gap-8 text-gray-300">
          {[
            {
              icon: <Bell size={28} />,
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            },
            {
              icon: <Headphones size={28} />,
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            },
            {
              icon: <Target size={28} />,
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            },
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <div className="text-teal-400">{item.icon}</div>
              <p className="max-w-md text-sm md:text-base">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
