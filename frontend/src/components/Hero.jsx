import { motion } from "framer-motion";
import { FaBolt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="min-h-screen flex items-center bg-white text-[#141E28]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Empowering{" "}
            <span className="text-[#33FEBF] relative inline-block">
              Local Businesses
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#33FEBF] scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-300"></span>
            </span>{" "}
            with Tech
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mb-8 text-gray-600">
            We bridge the gap between ambition and execution by providing
            customized technical solutions that help your business thrive in the
            digital age.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => navigate("/login")}
              className="bg-[#33FEBF] text-black px-6 py-3 rounded-full font-semibold border-2 border-[#141E28] transition-all duration-300 hover:bg-white hover:text-[#141E28] hover:shadow-[0_0_20px_rgba(51,254,191,0.4)]"
            >
              Get Started
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
