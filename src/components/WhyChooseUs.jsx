import React from "react";
import { Bell, Headphones, Target } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function WhyChooseUs() {
  const items = [
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
  ];

  return (
    <div className="relative bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-900 py-16 px-6 md:px-12">
      {/* Background decorative shape */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-teal-400 to-cyan-500 opacity-20 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left: Heading with subtle geometric overlay */}
        <div className="relative flex-shrink-0 w-72 md:w-96 h-72 md:h-96 flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-cyan-500 opacity-20 rounded-3xl transform rotate-12 scale-110" />
          <h2 className="relative text-white text-5xl md:text-6xl font-extrabold leading-tight text-center md:text-left drop-shadow-lg">
            Why <br /> Choose <br /> Us?
          </h2>
        </div>
        {/* Right: Icons + text list */}
        <div className="flex flex-col gap-8 md:gap-12 text-gray-300 max-w-xl">
          {items.map((item, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.2} direction="right" duration={0.9}>
              <div className="flex items-start gap-6 group cursor-default">
                <div className="text-teal-400 mt-1 transition-transform group-hover:scale-110">
                  {item.icon}
                </div>
                <p className="text-base leading-relaxed">{item.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
