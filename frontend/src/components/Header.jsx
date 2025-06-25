import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";
import {
  FaHome,
  FaInfoCircle,
  FaUsers,
  FaPhone,
  FaUserCircle,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinkBase =
    "flex items-center gap-2 text-sm px-4 py-2 rounded-md transition-all";
  const activeClasses =
    "bg-gradient-to-r from-[#33FEBF] to-[#0ff] text-white shadow-md";
  const inactiveClasses =
    "text-gray-200 hover:bg-gradient-to-r hover:from-[#33FEBF] hover:to-[#0ff] hover:text-white";

  const navItems = [
    { to: "/", label: "HOME", icon: <FaHome /> },
    { to: "/about", label: "ABOUT US", icon: <FaInfoCircle /> },
    { to: "/team", label: "OUR TEAM", icon: <FaUsers /> },
    { to: "/contact", label: "CONTACT US", icon: <FaPhone /> },
  ];

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-[#0e1a24]/80 border-b border-gray-700 shadow-sm"
    >
      {/* OUTER WRAPPER WITH PADDING */}
      <div className="w-full px-4 md:px-6 py-3">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-[160px] h-[50px] flex items-center justify-center">
              <img
                src={logo}
                alt="BoltLab Logo"
                className="h-26 w-auto -mt-6"
              />
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex bg-gray-800 rounded-full px-5 py-2 space-x-4 items-center shadow-inner border border-gray-700">
            {navItems.map(({ to, label, icon }) => (
              <NavLink
                key={to}
                to={to}
                end={to === "/"}
                className={({ isActive }) =>
                  `${navLinkBase} ${
                    isActive ? activeClasses : inactiveClasses
                  }`
                }
              >
                {icon}
                <span>{label}</span>
              </NavLink>
            ))}
          </nav>

          {/* Sign In */}
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `hidden md:flex items-center space-x-2 text-sm font-semibold px-5 py-2 rounded-full transition-all ${
                isActive
                  ? "bg-gradient-to-r from-green-400 to-teal-500 text-white shadow-lg"
                  : "text-green-400 hover:bg-green-600 hover:text-white"
              }`
            }
          >
            <FaUserCircle className="text-xl" />
            <span>SIGN IN</span>
          </NavLink>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-200 text-2xl cursor-pointer"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 py-4 bg-[#0e1a24] border-t border-gray-700 space-y-3">
          {navItems.map(({ to, label, icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `${navLinkBase} ${
                  isActive ? activeClasses : inactiveClasses
                }`
              }
            >
              {icon}
              <span>{label}</span>
            </NavLink>
          ))}

          <NavLink
            to="/login"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-lg transition-all ${
                isActive
                  ? "bg-green-500 text-white shadow-md"
                  : "text-green-400 hover:bg-green-600 hover:text-white"
              }`
            }
          >
            <FaUserCircle className="text-xl" />
            <span>SIGN IN</span>
          </NavLink>
        </div>
      )}
    </motion.header>
  );
}
