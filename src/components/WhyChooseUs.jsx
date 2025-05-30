import React from "react";
import { Bell, Headphones, Target } from "lucide-react";
import pentagon from "../assets/pentagon.svg";

export default function WhyChooseUs() {
  return (
    <div className="bg-gray-900 py-10 md:py-10 flex items-center justify-center px-6 top-0"
    >
      <div className="flex flex-col md:flex-row items-center w-full max-w-6xl gap-8 md:gap-50">
        {/* Left with Pentagon Image */}
        <div className="relative w-72 h-72 md:w-96 md:h-96 flex-shrink-0">
          <img
            src={pentagon}
            alt="Pentagon shape"
            className="w-28vh h-28vh object-contain"
          //
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-black leading-snug">
              Why <br /> Choose <br /> Us?
            </h2>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex flex-col gap-8 md:gap-10 text-gray-300">
          {[
            {
              icon: <Bell size={28} />,
              text: "We prioritize prompt communication and streamlined processes so you’re always in the loop.",
            },
            {
              icon: <Headphones size={28} />,
              text: "Our support team is here to help with any questions, providing reliable solutions around the clock.",
            },
            {
              icon: <Target size={28} />,
              text: "We focus on results, tailoring every service to meet your unique business goals and challenges.",
            },
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <div className="text-teal-400 mt-1">{item.icon}</div>
              <p className="max-w-md text-sm md:text-base leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
