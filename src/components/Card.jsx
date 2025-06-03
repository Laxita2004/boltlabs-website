import React from "react";
import { motion } from "framer-motion";

export default function Card({ icon, title, subtitle, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{ once: true, amount: 0.3 }}
      className="group relative rounded-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
    >
      {/* Gradient Border Wrapper */}
      <div className="absolute inset-0 rounded-xl p-[2px] bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm z-0" />

      {/* Card Content */}
      <div className="relative z-10 bg-white rounded-xl shadow-md p-6 hover:shadow-xl hover:ring-1 hover:ring-teal-400">
        <div className="w-10 h-10 bg-gray-100 rounded-md flex items-center justify-center mb-4 text-teal-600">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
        <p className="text-sm text-gray-500">{subtitle}</p>
      </div>
    </motion.div>
  );
}
