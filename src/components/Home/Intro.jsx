import React from "react";
import intro from "../../assets/intro.png";

export default function DigitalPartnerCard() {
  return (
    <div className="w-full min-h-screen bg-gray-900 p-0 m-0">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 items-center">
        {/* Left text section */}
        <div className="px-6 py-10 md:px-16 md:py-20">
          <h2 className="text-3xl md:text-5xl font-semibold mb-6 text-white">
            Your <span className="text-teal-400 italic">Digital Partner</span><br /> in <span className="text-teal-400 italic">Growth.</span>
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Providing powerful tech and creative solutions tailored for small businesses. From stunning websites and mobile apps to strategic media marketing and reliable tech support — we help you grow online without the overwhelm. Whether you're launching or scaling, we bring big-agency expertise with a personal touch, so you can focus on what matters: your business.
          </p>
        </div>

        {/* Right image/illustration section */}
        <div className="flex justify-center items-center px-6">
          <img
            src={intro}
            alt="Team working illustration"
            className="w-3/4 h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}
