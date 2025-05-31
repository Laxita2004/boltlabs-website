import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  const [direction, setDirection] = useState(1); // 1 for next slide

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % projects.length);
    }, 3000); // change slide every 3 seconds

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center px-4 py-10 ">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-left ">
        Our <span className="text-teal-400">Projects</span>
      </h2><br />

      {/* Container that changes width on hover */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className="relative w-[90%] max-w-6xl h-96 overflow-hidden rounded-xl shadow-lg bg-gray-800"
      >
        <AnimatePresence custom={direction} initial={false}>
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5 }}
            // Add translate on hover here
            whileHover={{ x: 20 }}
            className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-xl"
          >
            <img
              src={projects[current].img}
              alt={projects[current].title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4 text-white text-center">
              <h3 className="font-semibold text-xl">{projects[current].title}</h3>
              <p className="text-sm">{projects[current].desc}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
