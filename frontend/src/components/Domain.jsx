import React from 'react'
import profile from '../assets/profile.png'
import iot from '../assets/iot.png'
import management from '../assets/management.png'
import socialmedia from '../assets/social-media.png'
import software from '../assets/software-engineer.png'
import curve from '../assets/curve.png'
import customercare from '../assets/customer-service.png'
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';


const domains = [
    { img: software, title: "Web-Development", desc: "Building web solutions that are clean, efficient, and user-first." },
    { img: curve, title: "Graphics", desc: "Shaping ideas into visuals that speak louder than words." },
    { img: iot, title: "Internet of Things", desc: "Connecting the physical and digital to create smarter experiences." },
    { img: management, title: "Management", desc: "Driving clarity, coordination, and execution across every initiative." },
    { img: socialmedia, title: "Social Media", desc: "Telling impactful stories through powerful visuals and sound." },
    { img: customercare, title: "Customer Care", desc: "Here to listen, support, and deliver a seamless experience for every user." },
];

function slugify(title) {
  return title.toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9-]/g, '');
}

const Domain = () => {
    return (
        <div className="bg-[#141e28] py-24 px-4 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-[#33febf]/10 blur-3xl" />
            <div className="max-w-6xl w-full text-center relative z-10">
                <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#33febf] to-teal-400 mb-4">Our Domains</h1>
                <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-14">From technology to strategy, our domains represent the pillars of our excellence and innovation</p>

                <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {domains.map((d, i) => (
                        <Link to={`/team/${slugify(d.title)}`} key={i} className="block">
                          <motion.div
                              whileHover={{ y: -8, scale: 1.05 }}
                              className="bg-[#1f2a38] border border-[#33febf] rounded-2xl p-6 shadow-lg text-white backdrop-blur-md hover:shadow-xl transition relative group overflow-hidden"
                          >
                              <div className="absolute inset-0 group-hover:bg-[#33febf]/5 transition" />
                              <img src={d.img} alt={d.title} className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-[#33febf]" />
                              <h2 className="text-xl font-semibold text-[#33febf] mb-2">{d.title}</h2>
                              <p className="text-gray-300 text-sm">{d.desc}</p>
                          </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};


export default Domain;

