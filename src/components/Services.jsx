import React from "react";
import { AppWindow, Headphones, Users, Gem, Zap, Briefcase, LayoutDashboard } from "lucide-react";
import Card from "./Card.jsx";

export default function ServicesGrid() {
  const services = [
    {
      icon: <LayoutDashboard size={20} />, // Project Management
      title: "Project Management",
      subtitle: "30 options available",
    },
    {
      icon: <AppWindow size={20} />, // Web & Mobile
      title: "Web & Mobile Development",
      subtitle: "40 options available",
    },
    {
      icon: <Headphones size={20} />, // Customer Support
      title: "Customer Support",
      subtitle: "17 options available",
    },
    {
      icon: <Users size={20} />, // HR
      title: "Human Resources",
      subtitle: "21 options available",
    },
    {
      icon: <Gem size={20} />, // Design
      title: "Design & Creatives",
      subtitle: "13 options available",
    },
    {
      icon: <Zap size={20} />, // Marketing
      title: "Marketing & Communication",
      subtitle: "27 options available",
    },
    {
      icon: <Briefcase size={20} />, // Biz Dev
      title: "Business Development",
      subtitle: "22 options available",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 py-16 px-6 md:px-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-10">
        Save Time <span className="text-teal-400">Managing</span> Your Business
        <br /> With Our <span className="text-teal-400">Best Services</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <Card
            key={index}
            icon={service.icon}
            title={service.title}
            subtitle={service.subtitle}
          />
        ))}
      </div>
    </div>
  );
}
