import React from "react";
import intro from "../assets/intro.png";

export default function DigitalPartnerCard() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center px-6 md:px-12 py-24">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Left text section */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400 italic">
              Digital Partner
            </span>{" "}
            in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400 italic">
              Growth.
            </span>
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Providing powerful tech and creative solutions tailored for small businesses.
            From stunning websites and mobile apps to strategic media marketing and
            reliable tech support — we help you grow online without the overwhelm.
            Whether you're launching or scaling, we bring big-agency expertise with a
            personal touch, so you can focus on what matters: your business.
          </p>
          <div>
            <button className="mt-4 px-6 py-3 rounded-full bg-teal-500 hover:bg-teal-400 transition text-white text-sm font-semibold shadow-lg">
              Let’s Grow Together
            </button>
          </div>
        </div>

        {/* Right image section */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-md">
            <div className="absolute inset-0 rounded-3xl bg-teal-500 blur-3xl opacity-20 animate-pulse" />
            <img
              src={intro}
              alt="Team working illustration"
              className="relative z-10 w-full h-auto object-contain rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}