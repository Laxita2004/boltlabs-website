import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-[#141E28] to-gray-900 text-white relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-[#33FEBF]/10 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#33FEBF]/10 translate-y-1/2 -translate-x-1/2"></div>

      {/* Content */}
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
         className="text-3xl md:text-4xl font-extrabold mb-6"
        >
          Ready to Transform Your Business?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-lg max-w-2xl mx-auto mb-8 text-white/90"
        >
          Let's build the perfect tech solution tailored to your unique needs.
        </motion.p>

        <motion.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          href="./login"
          className="inline-block bg-[#33FEBF] text-[#141E28] px-8 py-3 rounded-full font-bold border-2 border-[#33FEBF] hover:shadow-[0_0_20px_rgba(51,254,191,0.4)] transition-all hover:-translate-y-1"
        >
          Get Started Today
        </motion.a>
      </div>
    </section>
  );
};

export default CTA;
