import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaLayerGroup, FaBolt, FaChartLine } from "react-icons/fa";

const Benefits = () => {
  const benefits = [
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: "Local Understanding",
      description:
        "We know your market intimately and build solutions that resonate with your local customers.",
    },
    {
      icon: <FaLayerGroup className="text-2xl" />,
      title: "Full Ownership",
      description:
        "From concept to launch and beyond, we handle every aspect of your project.",
    },
    {
      icon: <FaBolt className="text-2xl" />,
      title: "Lightning Fast",
      description:
        "Our agile approach delivers working solutions in weeks, not months.",
    },
    {
      icon: <FaChartLine className="text-2xl" />,
      title: "Growth Focused",
      description:
        "Every solution is designed with scalability and future expansion in mind.",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-[#0e1a24] text-3xl md:text-4xl font-bold text-center mb-12"
        >
          What makes <span className="text-[#33FEBF]">us stand out</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all hover:-translate-y-2 border border-gray-100"
            >
              <div className="w-14 h-14 rounded-full bg-[#33FEBF1A] flex items-center justify-center mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-[#0e1a24] text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;