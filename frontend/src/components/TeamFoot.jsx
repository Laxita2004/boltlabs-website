import React from 'react'
import { motion } from "framer-motion";

const TeamFoot = () => {
  return (
    <div className="bg-[#141e28] py-20 px-4 flex items-center justify-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-40 h-40 bg-[#33febf]/20 rounded-full blur-2xl animate-ping" />
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-teal-500/20 rounded-full blur-2xl animate-pulse" />

      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }} 
        transition={{ duration: 0.8 }}
        className="max-w-4xl w-full text-center space-y-10 relative z-10"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">Want to join our innovative minds?</h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">We're looking for passionate, curious, and driven individuals to join our team. Whether you're a designer, developer, strategist, or innovator—there’s a place for you here.</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button 
            whileHover={{ scale: 1.07 }}
            className="bg-[#33febf] text-[#141e28] font-semibold px-7 py-3 rounded-xl shadow hover:bg-teal-300 transition"
          >View Open Positions</motion.button>
          <motion.button 
            whileHover={{ scale: 1.07 }}
            className="border border-[#33febf] text-[#33febf] font-semibold px-7 py-3 rounded-xl hover:bg-[#1f2a38] transition"
          >Learn About Culture</motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default TeamFoot
