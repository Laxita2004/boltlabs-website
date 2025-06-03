import React from "react";
import { LayoutDashboard, AppWindow, Headphones, Users, Gem, Zap, Briefcase } from "lucide-react";
import Card from "./Card.jsx";
import ScrollReveal from "./ScrollReveal.jsx";

export default function ServicesGrid() {
  const services = [
    {
      icon: <LayoutDashboard size={22} className="text-teal-400" />,
      title: "Project Management",
      subtitle: "30 options available",
    },
    {
      icon: <AppWindow size={22} className="text-teal-400" />,
      title: "Web & Mobile Development",
      subtitle: "40 options available",
    },
    {
      icon: <Headphones size={22} className="text-teal-400" />,
      title: "Customer Support",
      subtitle: "17 options available",
    },
    {
      icon: <Users size={22} className="text-teal-400" />,
      title: "Human Resources",
      subtitle: "21 options available",
    },
    {
      icon: <Gem size={22} className="text-teal-400" />,
      title: "Design & Creatives",
      subtitle: "13 options available",
    },
    {
      icon: <Zap size={22} className="text-teal-400" />,
      title: "Marketing & Communication",
      subtitle: "27 options available",
    },
    {
      icon: <Briefcase size={22} className="text-teal-400" />,
      title: "Business Development",
      subtitle: "22 options available",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 px-6 md:px-12 font-sans">
      <h2 className="text-3xl md:text-5xl font-extrabold text-center text-white mb-16">
        Save Time <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">Managing</span> Your Business
        <br /> With Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">Best Services</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <ScrollReveal key={index} delay={index * 0.15}>
            <Card
              icon={service.icon}
              title={service.title}
              subtitle={service.subtitle}
            />
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
