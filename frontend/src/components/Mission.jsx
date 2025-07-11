import { motion } from "framer-motion";

const Mission = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#F9FAFB] to-white text-[#141E28]">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Our <span className="text-[#33FEBF]">Mission</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 md:p-16 shadow-xl max-w-5xl mx-auto relative overflow-hidden border-l-4 border-[#33FEBF]"
        >
          <p className="text-lg mb-6 text-gray-700 leading-relaxed">
            At <strong className="text-[#141E28]">Bolt Labs</strong>, we believe
            technology should be an{" "}
            <strong className="text-[#141E28]">accelerator</strong>, not a
            barrier. Many local businesses have the vision and drive to grow but
            lack the technical expertise to build the tools they need.
          </p>
          <p className="text-lg mb-6 text-gray-700 leading-relaxed">
            We provide{" "}
            <strong className="text-[#141E28]">customized technical support</strong>{" "}
            to local businesses. Whether it's a web platform, automation tool, or
            digital strategy, our domain-specific teams deliver solutions that fit
            seamlessly into your operations—helping you{" "}
            <strong className="text-[#141E28]">
              scale smarter, faster, and more efficiently
            </strong>.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            We're not just service providers; we're your{" "}
            <strong className="text-[#141E28]">
              long-term technology partners
            </strong>{" "}
            committed to your success.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Mission;
