import React, { useState } from "react";
import logo from "../assets/logobolt.svg";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="relative bg-[#141e28] text-white px-6 py-4 shadow-lg z-50 overflow-hidden">
            {/* Decorative Background Shapes */}
            <div className="absolute top-[-50px] right-[-80px] w-64 h-64 bg-[#33febf] opacity-10 rounded-full blur-3xl z-0"></div>
            <div className="absolute bottom-[-60px] left-[-60px] w-52 h-52 bg-white opacity-5 rounded-full blur-2xl z-0"></div>

            <div className="container mx-auto flex items-center justify-between relative z-10">
                {/* Logo */}
                <div className="flex-shrink-0">
                    <img src={logo} alt="logo-icon" className="h-10 w-auto" />
                </div>

                {/* Center Nav Links */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 bg-white/5 backdrop-blur-md px-8 py-3 rounded-full shadow-md border border-[#33febf]/20 space-x-6">
                    <a href="#home" className="hover:text-[#33febf] font-medium transition-all duration-300">
                        Home
                    </a>
                    <a href="#about" className="hover:text-[#33febf] font-medium transition-all duration-300">
                        About
                    </a>
                    <a href="#contact" className="hover:text-[#33febf] font-medium transition-all duration-300">
                        Contact
                    </a>
                    <a href="#team" className="hover:text-[#33febf] font-medium transition-all duration-300">
                        Team
                    </a>
                </div>

                {/* Right Side Buttons */}
                <div className="flex items-center space-x-4">
                    <button className="hidden md:block bg-gradient-to-r from-[#33febf] to-[#2be0aa] text-[#141e28] px-5 py-2 rounded-full text-sm font-semibold transition-all hover:scale-105 hover:shadow-lg">
                        Sign In
                    </button>
                    <button
                        onClick={toggleMenu}
                        className="md:hidden text-2xl focus:outline-none text-white"
                    >
                        {isOpen ? "✕" : "☰"}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden mt-4 bg-[#1e2a38]/90 backdrop-blur-md rounded-xl py-6 px-5 space-y-4 shadow-lg z-10 relative">
                    <a href="#home" className="block text-white hover:text-[#33febf] font-medium transition">
                        Home
                    </a>
                    <a href="#about" className="block text-white hover:text-[#33febf] font-medium transition">
                        About
                    </a>
                    <a href="#contact" className="block text-white hover:text-[#33febf] font-medium transition">
                        Contact
                    </a>
                    <a href="#team" className="block text-white hover:text-[#33febf] font-medium transition">
                        Team
                    </a>
                    <button className="w-full bg-gradient-to-r from-[#33febf] to-[#2be0aa] text-[#141e28] py-2 rounded-full font-semibold hover:shadow-md hover:scale-105 transition">
                        Sign In
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
