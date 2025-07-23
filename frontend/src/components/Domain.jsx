import profile from "../assets/profile.png";
import iot from "../assets/iot.png";
import management from "../assets/management.png";
import socialmedia from "../assets/social-media.png";
import software from "../assets/software-engineer.png";
import curve from "../assets/curve.png";
import customercare from "../assets/customer-service.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import slugify from "slugify";

const domains = [
  {
    img: software,
    title: "Software Development",
    desc: "Developing reliable, scalable, and efficient software systems tailored to user needs.",
  },
  {
    img: curve,
    title: "Graphics Design",
    desc: "Transforming ideas into intuitive and engaging digital experiences with impactful visuals.",
  },
  {
    img: iot,
    title: "Internet of Things (IoT)",
    desc: "Creating smart ecosystems by connecting devices, data, and people seamlessly.",
  },
  {
    img: management,
    title: "PR & Lead Generation",
    desc: "Strategizing, organizing, and executing initiatives with precision and clarity.",
  },
  {
    img: socialmedia,
    title: "Digital Marketing",
    desc: "Amplifying brand voice through optimized content, SEO, and social campaigns.",
  },
  {
    img: customercare,
    title: "Technical Support",
    desc: "Delivering expert assistance to ensure seamless experiences for clients and users.",
  },
];

const Domain = () => {
  return (
    <div className="bg-[#0e1721] py-24 px-4 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-[#33febf]/10 blur-3xl" />

      <div className="max-w-7xl w-full text-center relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#33febf] to-teal-400 mb-4">
          Our Core Domains
        </h1>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-14">
          We specialize in diverse fields, driving innovation and delivering
          high-impact solutions.
        </p>

        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {domains.map((d, i) => {
            const slug = slugify(d.title);
            return (
              <Link key={i} to={`/team/${slug}`} className="group">
                <motion.div
                  whileHover={{ y: -8, scale: 1.05 }}
                  className="bg-[#1f2a38] border border-[#33febf] rounded-2xl p-6 shadow-lg text-white backdrop-blur-md hover:shadow-xl transition relative overflow-hidden group"
                >
                  <div className="absolute inset-0 group-hover:bg-[#33febf]/5 transition" />

                  {/* Icon Container */}
                  <div className="relative w-24 h-24 mx-auto mb-4 flex items-center justify-center rounded-full bg-[#33febf]/15 border-2 border-[#33febf] shadow-md p-2">
                    <img
                      src={d.img}
                      alt={d.title}
                      className="w-16 h-16 object-contain z-10 filter invert brightness-0"
                    />
                    <div className="absolute inset-0 rounded-full group-hover:ring-4 group-hover:ring-[#33febf]/40 transition" />
                  </div>

                  <h2 className="text-xl font-semibold text-[#33febf] mb-2">
                    {d.title}
                  </h2>
                  <p className="text-gray-300 text-sm">{d.desc}</p>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Domain;
