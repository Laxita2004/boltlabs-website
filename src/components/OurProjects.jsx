import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import sample1 from "../assets/sample1.jpg";
import sample2 from "../assets/sample2.jpg";
import sample3 from "../assets/sample3.jpg";

const projects = [
  {
    title: "Project 1",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: sample1,
  },
  {
    title: "Project 2",
    desc: "Ut enim ad minim veniam, quis nostrud exercitation.",
    img: sample2,
  },
  {
    title: "Project 3",
    desc: "Duis aute irure dolor in reprehenderit in voluptate.",
    img: sample3,
  },
];

export default function StackedCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % projects.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.95,
    }),
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleNext = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % projects.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex flex-col items-center justify-center px-6 py-12">
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-white mb-12 text-center max-w-3xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Our <span className="text-teal-400">Projects</span>
      </motion.h2>


      <div className="relative w-full max-w-5xl h-[400px] rounded-3xl shadow-2xl overflow-hidden bg-gray-700 bg-opacity-30 backdrop-blur-lg">
        <AnimatePresence custom={direction} initial={false}>
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-full rounded-3xl overflow-hidden"
          >
            <img
              src={projects[current].img}
              alt={projects[current].title}
              className="w-full h-full object-cover brightness-75"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white z-10">
              <h3 className="text-3xl font-bold mb-2">{projects[current].title}</h3>
              <p className="text-base md:text-lg max-w-xl">{projects[current].desc}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-teal-500/80 text-white p-2 rounded-full z-20 transition"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-teal-500/80 text-white p-2 rounded-full z-20 transition"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Navigation dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {projects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > current ? 1 : -1);
                setCurrent(idx);
              }}
              className={`w-3.5 h-3.5 rounded-full transition-all duration-300 border border-white ${idx === current
                ? "bg-teal-400 scale-110"
                : "bg-white/30"
                }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
