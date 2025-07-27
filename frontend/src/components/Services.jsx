import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  AppWindow,
  Users,
  Gem,
  Zap,
  Server,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Services() {
  const services = [
    {
      icon: <LayoutDashboard size={28} />,
      title: "Software Development Solutions",
      description:
        "Custom applications built with modern technologies for scale and performance.",
      subtitle: "Get Service",
      color: "teal",
    },
    {
      icon: <AppWindow size={28} />,
      title: "Digital Presence Management",
      description:
        "Manage, optimize, and grow your brand across digital platforms.",
      subtitle: "Get Service",
      color: "cyan",
    },
    {
      icon: <Users size={28} />,
      title: "Brand Identity Design",
      description:
        "Craft a memorable and professional brand with our creative experts.",
      subtitle: "Get Service",
      color: "emerald",
    },
    {
      icon: <Server size={28} />,
      title: "Embedded Systems & IoT Solutions",
      description:
        "Smart device integration and real-time hardware-software solutions.",
      subtitle: "Get Service",
      color: "blue",
    },
    {
      icon: <Gem size={28} />,
      title: "Design & Creatives",
      description:
        "Visual design for web, mobile, and print — creative that converts.",
      subtitle: "Get Service",
      color: "purple",
    },
    {
      icon: <Zap size={28} />,
      title: "Technical Assistance & Support",
      description:
        "On-demand help and infrastructure support tailored to your tech needs.",
      subtitle: "Get Service",
      color: "amber",
    },
  ];

  const colorMap = {
    teal: {
      bg: "from-teal-600/10 to-teal-900/20",
      text: "text-teal-400",
      shadow: "hover:shadow-teal-500/30",
    },
    cyan: {
      bg: "from-cyan-600/10 to-cyan-900/20",
      text: "text-cyan-400",
      shadow: "hover:shadow-cyan-500/30",
    },
    emerald: {
      bg: "from-emerald-600/10 to-emerald-900/20",
      text: "text-emerald-400",
      shadow: "hover:shadow-emerald-500/30",
    },
    blue: {
      bg: "from-blue-600/10 to-blue-900/20",
      text: "text-blue-400",
      shadow: "hover:shadow-blue-500/30",
    },
    purple: {
      bg: "from-purple-600/10 to-purple-900/20",
      text: "text-purple-400",
      shadow: "hover:shadow-purple-500/30",
    },
    amber: {
      bg: "from-amber-600/10 to-amber-900/20",
      text: "text-amber-400",
      shadow: "hover:shadow-amber-500/30",
    },
    indigo: {
      bg: "from-indigo-600/10 to-indigo-900/20",
      text: "text-indigo-400",
      shadow: "hover:shadow-indigo-500/30",
    },
  };

  const [hoveredCard, setHoveredCard] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 px-6 md:px-12 font-sans">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Save Time{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
              Managing
            </span>{" "}
            Your Business
            <br /> With Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
              Best Services
            </span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Streamline your operations with our comprehensive services tailored
            to your business needs
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const color = colorMap[service.color];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ y: -15 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
                viewport={{ once: true, margin: "-50px" }}
                className="group relative h-full cursor-pointer"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Gradient Background */}
                <motion.div
                  className={`absolute -inset-0.5 rounded-xl bg-gradient-to-br ${color.bg} opacity-80 group-hover:opacity-100 blur-md transition-all duration-500`}
                  animate={{
                    scale: hoveredCard === index ? 1.05 : 1,
                  }}
                />

                {/* Main Card */}
                <motion.div
                  className={`relative h-full bg-gray-800/60 backdrop-blur-sm border border-gray-700/30 hover:border-transparent rounded-xl p-6 transition-all duration-300 ${color.shadow} group-hover:shadow-xl overflow-hidden`}
                  animate={{
                    scale: hoveredCard === index ? 1.02 : 1,
                  }}
                >
                  {/* Icon */}
                  <motion.div
                    className={`w-14 h-14 bg-gradient-to-br from-${service.color}-50 to-${service.color}-100 rounded-xl flex items-center justify-center mb-5 ${color.text}`}
                    animate={{
                      rotate: hoveredCard === index ? [0, 5, -5, 0] : 0,
                      scale: hoveredCard === index ? [1, 1.1, 1] : 1,
                    }}
                    transition={{
                      duration: 0.6,
                    }}
                  >
                    {React.cloneElement(service.icon)}
                  </motion.div>

                  {/* Content */}
                  <motion.h3
                    className={`text-xl font-bold text-white mb-3 group-hover:text-${service.color}-400 transition-colors`}
                  >
                    {service.title}
                  </motion.h3>

                  <motion.p className="text-sm text-gray-300 mb-2 leading-relaxed">
                    {service.description}
                  </motion.p>

                  <motion.p
                    className={`text-sm z-50 mt-4 font-semibold underline underline-offset-4 cursor-pointer transition-colors ${color.text} hover:opacity-90`}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      const token = localStorage.getItem("token");
                      navigate(token ? "/user-dashboard?section=new-request" : "/login");
                    }}
                  >
                    {service.subtitle}
                  </motion.p>

                  {/* Particle Effects */}
                  {hoveredCard === index && (
                    <div className="absolute inset-0 overflow-hidden rounded-xl pointer-events-none">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{
                            opacity: 0,
                            scale: 0,
                            x: Math.random() * 40 - 20,
                            y: Math.random() * 40 - 20,
                          }}
                          animate={{
                            opacity: [0, 0.8, 0],
                            scale: [0, 1, 0],
                            x: Math.random() * 80 - 40,
                            y: Math.random() * 80 - 40,
                          }}
                          transition={{
                            duration: 1.5,
                            delay: i * 0.1,
                            repeat: Infinity,
                            repeatDelay: 2,
                          }}
                          className={`absolute w-1.5 h-1.5 rounded-full bg-${service.color}-400/80`}
                          style={{
                            left: `${50 + (Math.random() * 20 - 10)}%`,
                            top: `${50 + (Math.random() * 20 - 10)}%`,
                          }}
                        />
                      ))}
                    </div>
                  )}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
