import { motion } from "framer-motion";
import React from "react";

export default function ScrollReveal({
  children,
  delay = 0,
  duration = 0.8,
  direction = "up", // 'up', 'down', 'left', 'right'
  className = "",
  style = {},
  easing = [0.25, 0.1, 0.25, 1], // Custom easing curve
  staggerChildren = 0, // Delay between children animations
}) {
  // Determine initial transform based on direction
  const getInitialTransform = () => {
    switch (direction) {
      case 'up':
        return { y: distance };
      case 'down':
        return { y: -distance };
      case 'left':
        return { x: distance };
      case 'right':
        return { x: -distance };
      case 'zoom':
        return { scale: 0.9 };
      default:
        return {};
    }
  };

  const variants = {
    initial: {
      ...getInitialTransform(),
      opacity: opacityEffect ? 0 : 1,
      scale: scaleEffect ? 0.95 : 1,
    },
    animate: {
      y: 0,
      x: 0,
      scale: 1,
      opacity: 1,
      transition: {
        duration,
        delay,
        ease: easing,
        staggerChildren,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once, amount: viewportAmount }}
      variants={variants}
      className={`${className}`}
      style={{ 
        ...style, 
        willChange: "transform, opacity",
        transformStyle: "preserve-3d", // For better hardware acceleration
      }}
    >
      {children}
    </motion.div>
  );
}