import React, { useState } from "react";
import { motion } from "framer-motion";
import { LayoutDashboard, AppWindow, Headphones, Users, Gem, Zap, Briefcase } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Services() {
  const services = [
    {
      icon: <LayoutDashboard size={28} />,
      title: "Project Management",
      subtitle: "30 options available",
      color: "teal",
    },
    {
      icon: <AppWindow size={28} />,
      title: "Web & Mobile Development",
      subtitle: "40 options available",
      color: "cyan",
    },
    {
      icon: <Headphones size={28} />,
      title: "Customer Support",
      subtitle: "17 options available",
      color: "emerald",
    },
    {
      icon: <Users size={28} />,
      title: "Human Resources",
      subtitle: "21 options available",
      color: "blue",
    },
    {
      icon: <Gem size={28} />,
      title: "Design & Creatives",
      subtitle: "13 options available",
      color: "purple",
    },
    {
      icon: <Zap size={28} />,
      title: "Marketing & Communication",
      subtitle: "27 options available",
      color: "amber",
    },
    {
      icon: <Briefcase size={28} />,
      title: "Business Development",
      subtitle: "22 options available",
      color: "indigo",
    },
  ];

  const colorMap = {
    teal: { bg: "from-teal-600/10 to-teal-900/20", text: "text-teal-400", shadow: "hover:shadow-teal-500/30" },
    cyan: { bg: "from-cyan-600/10 to-cyan-900/20", text: "text-cyan-400", shadow: "hover:shadow-cyan-500/30" },
    emerald: { bg: "from-emerald-600/10 to-emerald-900/20", text: "text-emerald-400", shadow: "hover:shadow-emerald-500/30" },
    blue: { bg: "from-blue-600/10 to-blue-900/20", text: "text-blue-400", shadow: "hover:shadow-blue-500/30" },
    purple: { bg: "from-purple-600/10 to-purple-900/20", text: "text-purple-400", shadow: "hover:shadow-purple-500/30" },
    amber: { bg: "from-amber-600/10 to-amber-900/20", text: "text-amber-400", shadow: "hover:shadow-amber-500/30" },
    indigo: { bg: "from-indigo-600/10 to-indigo-900/20", text: "text-indigo-400", shadow: "hover:shadow-indigo-500/30" },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 px-6 md:px-12 font-sans">
      <h2 className="text-3xl md:text-5xl font-extrabold text-center text-white mb-16">
        Save Time <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">Managing</span> Your Business
        <br /> With Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">Best Services</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <ScrollReveal key={service.title} delay={index * 0.15}>
            <Card
              icon={service.icon}
              title={service.title}
              subtitle={service.subtitle}
            />
          </ScrollReveal>
        ))}
      </div>

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
            Save Time <motion.span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                backgroundSize: '200% 200%'
              }}
            >
              Managing
            </motion.span> Your Business
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Streamline your operations with our comprehensive services tailored to your business needs
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
                  stiffness: 100
                }}
                viewport={{ once: true, margin: "-50px" }}
                className="group relative h-full"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Gradient Background */}
                <motion.div 
                  className={`absolute -inset-0.5 rounded-xl bg-gradient-to-br ${color.bg} opacity-80 group-hover:opacity-100 blur-md transition-all duration-500`}
                  animate={{
                    scale: hoveredCard === index ? 1.05 : 1
                  }}
                />
                
                {/* Main Card */}
                <motion.div 
                  className={`relative h-full bg-gray-800/60 backdrop-blur-sm border border-gray-700/30 hover:border-transparent rounded-xl p-6 transition-all duration-300 ${color.shadow} group-hover:shadow-xl overflow-hidden`}
                  animate={{
                    scale: hoveredCard === index ? 1.02 : 1
                  }}
                >
                  {/* Icon */}
                  <motion.div
                    className={`w-14 h-14 bg-gradient-to-br from-${service.color}-50 to-${service.color}-100 rounded-xl flex items-center justify-center mb-5 ${color.text}`}
                    animate={{
                      rotate: hoveredCard === index ? [0, 5, -5, 0] : 0,
                      scale: hoveredCard === index ? [1, 1.1, 1] : 1
                    }}
                    transition={{
                      duration: 0.6
                    }}
                  >
                    <motion.div
                      animate={{
                        scale: hoveredCard === index ? [1, 1.2, 1] : 1,
                        rotate: hoveredCard === index ? [0, 5, 0] : 0
                      }}
                      transition={{
                        duration: 0.8,
                        times: [0, 0.2, 1]
                      }}
                    >
                      {React.cloneElement(service.icon, {
                        className: `${service.icon.props.className} transition-all duration-300`
                      })}
                    </motion.div>
                  </motion.div>

                  {/* Content */}
                  <motion.h3 
                    className={`text-xl font-bold text-white mb-3 group-hover:text-${service.color}-400 transition-colors`}
                    animate={{
                      color: hoveredCard === index ? colorMap[service.color].text : "#ffffff"
                    }}
                  >
                    {service.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-sm text-gray-300 mb-6 leading-relaxed"
                    animate={{
                      opacity: hoveredCard === index ? 1 : 0.9
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
                            y: Math.random() * 40 - 20
                          }}
                          animate={{ 
                            opacity: [0, 0.8, 0],
                            scale: [0, 1, 0],
                            x: Math.random() * 80 - 40,
                            y: Math.random() * 80 - 40
                          }}
                          transition={{ 
                            duration: 1.5,
                            delay: i * 0.1,
                            repeat: Infinity,
                            repeatDelay: 2
                          }}
                          className={`absolute w-1.5 h-1.5 rounded-full bg-${service.color}-400/80`}
                          style={{
                            left: `${50 + (Math.random() * 20 - 10)}%`,
                            top: `${50 + (Math.random() * 20 - 10)}%`
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

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              background: "linear-gradient(45deg, #0d9488, #0891b2)"
            }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate('/login')}
            className="px-10 py-4 rounded-full bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-semibold text-lg shadow-lg shadow-cyan-500/20 hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 relative overflow-hidden"
          >
            <span className="relative z-10 cursor-pointer">Explore All Services</span>
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-teal-600 to-cyan-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ opacity: 0 }}
            />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}