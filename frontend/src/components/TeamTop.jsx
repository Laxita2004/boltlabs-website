import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const Counter = ({ target }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = target;
    const duration = 1000;
    const stepTime = Math.max(10, Math.floor(duration / end));

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [target]);

  return <>{count}+</>;
};

const TeamTop = () => {
  return (
    <div className="bg-[#141e28] relative min-h-[80vh] flex items-center justify-center px-4 overflow-hidden">
      {/* Decorative Polygons */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-teal-500/20 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-[#33febf]/20 rounded-full blur-2xl animate-ping" />

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl w-full bg-[#1f2a38] rounded-3xl shadow-2xl p-10 text-center relative z-10"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#33febf] to-teal-400 mb-6 animate-gradient">
          OUR TEAM
        </h1>
        <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-12">
          Meet the talented individuals who drive our mission forward with passion, expertise, and innovation.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { title: "Team Members", value: 21 },
            { title: "Departments", value: 5 },
            { title: "Clients", value: 10 },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 0px 20px rgba(51, 254, 191, 0.6)",
              }}
              className="bg-[#141e28] border border-[#33febf] rounded-2xl p-6 text-white shadow-xl backdrop-blur-md transition duration-300"
            >
              <p className="text-lg font-medium mb-2">{item.title}</p>
              <span className="text-4xl font-bold text-[#33febf]">
                <Counter target={item.value} />
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default TeamTop;
