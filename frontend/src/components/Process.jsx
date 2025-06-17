import { motion } from "framer-motion";
import { FaSearch, FaLightbulb, FaRocket } from "react-icons/fa";
import React from "react";

const Process = () => {
  const steps = [
    {
      icon: <FaSearch className="text-3xl text-accent" />,
      title: "Discover Needs",
      description:
        "Our team conducts in-depth consultations to understand your unique business challenges and goals.",
    },
    {
      icon: <FaLightbulb className="text-3xl text-accent" />,
      title: "Design Solution",
      description:
        "We craft a tailored tech strategy with mockups and prototypes for your approval.",
    },
    {
      icon: <FaRocket className="text-3xl text-accent" />,
      title: "Deliver Impact",
      description:
        "Our experts build, implement, and provide ongoing support for your solution.",
    },
  ];

  return (
    <section className="py-20 bg-dark text-white">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Our <span className="text-accent">Process</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-accent/10 hover:border-accent/30 transition-all hover:-translate-y-2 hover:shadow-glow relative overflow-hidden"
            >
              <div className="absolute top-4 right-6 text-4xl font-bold text-accent/10">
                0{index + 1}
              </div>
              <div className="mb-6">{step.icon}</div>
              <h3 className="text-xl font-bold mb-4">{step.title}</h3>
              <p className="text-white/80">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;