import { motion } from "framer-motion";
import React from "react";

export default function ScrollReveal({
  children,
  delay = 0,
  duration = 0.8,
  direction = "up", // 'up', 'down', 'left', 'right'
  style = {},
  className = "",
}) {
  // Determine initial transform based on direction
  const variants = {
    initial: {
      opacity: 0,
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
      scale: 0.95,
    },
    animate: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration,
        ease: [0.25, 0.1, 0.25, 1],
        delay,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      variants={variants}
      className={`rounded-lg shadow-lg bg-slate-900/90 backdrop-blur-md ${className}`}
      style={{ ...style, willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
}
