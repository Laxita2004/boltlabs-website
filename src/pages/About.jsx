import React from 'react'; 
import { motion } from "framer-motion";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Mission from "../components/Mission";
import Process from "../components/Process";
import Benefits from "../components/Benefits";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import ParticleBackground from "../components/ParticleBackground";

const About = () => {
  return (
    <div className="relative bg-white text-dark overflow-x-hidden">
      <ParticleBackground />
      <Header />
      <main>
        <Hero />
        <Mission />
        <Process />
        <Benefits />
        <CTA />
      </main>
    </div>
  );
};

export default About;
