import React, { useState, useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { User, LogOut, Settings, LayoutDashboard, Home } from "lucide-react";
import logo from "../../assets/logo.png";

export default function DashboardHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  const userName = localStorage.getItem("userName") || "User";
  const userEmail = localStorage.getItem("userEmail") || "";

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  // close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full z-50 bg-[#0e1a24]/80 backdrop-blur border-b border-gray-700"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="BoltLab" className="h-10 w-auto" />
        </Link>

        {/* User Dropdown */}
        <div className="relative" ref={menuRef}>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center gap-3 px-4 py-2 bg-[#1F2937] rounded-full text-white hover:bg-[#2d3748] transition"
          >
            <User className="h-5 w-5 text-teal-300" />
            <span className="hidden sm:block font-medium">{userName}</span>
          </button>

          {isMenuOpen && (
            <div className="absolute right-0 mt-2 w-60 bg-[#1F2937] border border-gray-700 rounded-xl shadow-lg z-50">
              <div className="p-4 border-b border-gray-600">
                <p className="text-sm font-semibold text-white">{userName}</p>
                <p className="text-xs text-gray-400 truncate">{userEmail}</p>
              </div>
              <div className="p-2 space-y-1">
                <Link
                  to="/user-dashboard"
                  className="flex items-center gap-3 px-4 py-2 rounded-lg text-white hover:bg-[#2d3748] transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <LayoutDashboard className="h-4 w-4 text-gray-300" />
                  <span>User Dashboard</span>
                </Link>
                <Link
                  to="/edit-profile"
                  className="flex items-center gap-3 px-4 py-2 rounded-lg text-white hover:bg-[#2d3748] transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Settings className="h-4 w-4 text-gray-300" />
                  <span>Edit Profile</span>
                </Link>
                <Link
                  to="/"
                  className="flex items-center gap-3 px-4 py-2 rounded-lg text-white hover:bg-[#2d3748] transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Home className="h-4 w-4 text-gray-300" />
                  <span>Back To Home</span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-3 px-4 py-2 rounded-lg text-red-500 hover:bg-red-600 hover:text-white transition"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Logout</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.header>
  );
}