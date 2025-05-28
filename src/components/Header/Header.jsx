import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaInfoCircle,
  FaUsers,
  FaPhone,
  FaUserCircle,
} from "react-icons/fa";
import logo from "../../assets/logo.png"; // Adjust the path as necessary

export default function Header() {
  const navLinkBase =
    "flex flex-col items-center text-xs px-3 py-1 rounded-lg transition-colors duration-200";

  const activeClasses = "bg-[#33FEBF] text-white shadow-md";
  const inactiveClasses = "text-gray-200 hover:bg-[#33FEBF] hover:text-white";

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0e1a24] shadow-md px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center">
          <img src={logo} alt="Bolt Labs Logo" className="h-12 md:h-14 w-auto" />
        </NavLink>

        {/* Navigation */}
        <nav className="bg-gray-700 rounded-full px-6 py-2 flex space-x-6 items-center shadow-inner">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `${navLinkBase} ${isActive ? activeClasses : inactiveClasses}`
            }
          >
            <FaHome className="text-lg" />
            <span>HOME</span>
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${navLinkBase} ${isActive ? activeClasses : inactiveClasses}`
            }
          >
            <FaInfoCircle className="text-lg" />
            <span>ABOUT US</span>
          </NavLink>

          <NavLink
            to="/team"
            className={({ isActive }) =>
              `${navLinkBase} ${isActive ? activeClasses : inactiveClasses}`
            }
          >
            <FaUsers className="text-lg" />
            <span>OUR TEAM</span>
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${navLinkBase} ${isActive ? activeClasses : inactiveClasses}`
            }
          >
            <FaPhone className="text-lg" />
            <span>CONTACT US</span>
          </NavLink>
        </nav>

        {/* Sign In */}
        <NavLink
          to="/signin"
          className={({ isActive }) =>
            `flex items-center space-x-2 text-sm font-semibold px-3 py-1 rounded-lg transition-colors duration-200 ${isActive ? "bg-green-500 text-white shadow-md" : "text-green-400 hover:bg-green-600 hover:text-white"
            }`
          }
        >
          <FaUserCircle className="text-xl" />
          <span>SIGN IN</span>
        </NavLink>
      </div>
    </header>
  );
}
