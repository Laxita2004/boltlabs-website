import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from '../assets/logobolt.svg';
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
    "flex items-center gap-2 text-sm px-4 py-2 rounded-md transition-colors duration-200";
  const activeClasses = "bg-[#33FEBF] text-white shadow-md";
  const inactiveClasses = "text-gray-200 hover:bg-[#33FEBF] hover:text-white";

  const navItems = [
    { to: "/", label: "HOME", icon: <FaHome /> },
    { to: "/about", label: "ABOUT US", icon: <FaInfoCircle /> },
    { to: "/team", label: "OUR TEAM", icon: <FaUsers /> },
    { to: "/contact", label: "CONTACT US", icon: <FaPhone /> },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0e1a24] shadow-md px-0 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center">
          <div className="w-[160px] h-[50px]  text-green-400 flex items-center justify-center text-sm font-bold">
            <img src={logo} alt="BoltLab Logo" className="h-32 w-32 -mt-8" />
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex bg-gray-700 rounded-full px-6 py-2 space-x-6 items-center shadow-inner">
          {navItems.map(({ to, label, icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={({ isActive }) =>
                `${navLinkBase} ${isActive ? activeClasses : inactiveClasses}`
              }
            >
              {icon}
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-200 text-2xl">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Sign In */}
        <NavLink
          to="/signup"
          className={({ isActive }) =>
            `hidden md:flex items-center space-x-2 text-sm font-semibold px-3 py-1 rounded-lg transition-colors duration-200 ${isActive
              ? "bg-green-500 text-white shadow-md"
              : "text-green-400 hover:bg-green-600 hover:text-white"
            }`
          }
        >
          <FaUserCircle className="text-xl" />
          <span>SIGN UP</span>
        </NavLink>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 mt-2 bg-[#0e1a24] border-t border-gray-700 space-y-3">
          {navItems.map(({ to, label, icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              onClick={() => setMenuOpen(false)} // close menu on click
              className={({ isActive }) =>
                `${navLinkBase} ${isActive ? activeClasses : inactiveClasses}`
              }
            >
              {icon}
              <span>{label}</span>
            </NavLink>
          ))}
          {/* Sign In for mobile */}
          <NavLink
            to="/signup"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-lg transition-colors duration-200 ${isActive
                ? "bg-green-500 text-white shadow-md"
                : "text-green-400 hover:bg-green-600 hover:text-white"
              }`
            }
          >
            <FaUserCircle className="text-xl" />
            <span>SIGN UP</span>
          </NavLink>
        </div>
      )}
    </header>
  );
}