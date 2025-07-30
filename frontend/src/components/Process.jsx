import { motion } from "framer-motion";
import { FaSearch, FaLightbulb, FaRocket } from "react-icons/fa";

const steps = [
  {
    icon: <FaSearch className="text-3xl text-[#33FEBF]" />, // Use literal color for JIT-safe
    step: "01",
    title: "Discover Needs",
    description:
      "Our team conducts in-depth consultations to understand your unique business challenges and goals.",
  },
  {
    icon: <FaLightbulb className="text-3xl text-[#33FEBF]" />,
    step: "02",
    title: "Design Solution",
    description:
      "We craft a tailored tech strategy with mockups and prototypes for your approval.",
  },
  {
    icon: <FaRocket className="text-3xl text-[#33FEBF]" />,
    step: "03",
    title: "Deliver Impact",
    description:
      "Our experts build, implement, and provide ongoing support for your solution.",
  },
];

const Process = () => {
  return (
    <section className="py-20 bg-[#141E28] text-white">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Our <span className="text-[#33FEBF]">Process</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-[#33FEBF1A] hover:border-[#33FEBF] transition-all hover:-translate-y-2 shadow-md hover:shadow-[0_0_20px_rgba(51,254,191,0.4)] relative overflow-hidden"
            >
              <div className="absolute top-4 right-6 text-4xl font-bold text-[#33FEBF1A] select-none pointer-events-none">
                {step.step}
              </div>
              <div className="mb-6">{step.icon}</div>
              <h3 className="text-xl font-bold mb-4">{step.title}</h3>
              <p className="text-white text-opacity-80 text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
