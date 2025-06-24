import React, { useState, useRef, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
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
import { BarChart2, Settings, LogOut, User as UserIcon } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const userMenuRef = useRef(null);
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleUserMenu = () => setIsUserMenuOpen(!isUserMenuOpen);

  // Close user menu on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setIsUserMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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

  const handleLogout = () => {
    setIsUserMenuOpen(false);
    navigate('/login');
  };

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

        {/* Auth Section */}
        <div className="hidden md:flex items-center">
          <div className="relative" ref={userMenuRef}>
            <button onClick={toggleUserMenu} className="focus:outline-none">
              <FaUserCircle className="text-3xl text-teal-400 hover:text-teal-300 transition-colors" />
            </button>
            {isUserMenuOpen && (
              <div className="absolute right-0 mt-3 w-64 bg-[#1F2937] rounded-xl shadow-2xl overflow-hidden z-50 ring-1 ring-white/10">
                <div className="p-4 border-b border-gray-700/50">
                  <div className="flex items-center">
                    <div className="p-2 bg-teal-500/80 rounded-full">
                      <UserIcon className="h-6 w-6 text-white" />
                    </div>
                    <div className="ml-4">
                      <p className="font-semibold text-white">John Doe</p>
                      <p className="text-sm text-gray-400">john@example.com</p>
                    </div>
                  </div>
                </div>
                <nav className="p-2">
                  <Link
                    to="/dashboard"
                    onClick={() => setIsUserMenuOpen(false)}
                    className="flex items-center p-3 rounded-lg hover:bg-gray-700/50 transition-colors"
                  >
                    <BarChart2 className="h-5 w-5 text-gray-400" />
                    <div className="ml-3">
                      <p className="text-sm font-semibold text-white">User Dashboard</p>
                      <p className="text-xs text-gray-400">Service history & status</p>
                    </div>
                  </Link>
                  <Link
                    to="/edit-profile"
                    onClick={() => setIsUserMenuOpen(false)}
                    className="flex items-center p-3 rounded-lg hover:bg-gray-700/50 transition-colors"
                  >
                    <Settings className="h-5 w-5 text-gray-400" />
                    <div className="ml-3">
                      <p className="text-sm font-semibold text-white">Edit Profile</p>
                      <p className="text-xs text-gray-400">Update your information</p>
                    </div>
                  </Link>
                </nav>
                <div className="p-2 border-t border-gray-700/50">
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center p-3 rounded-lg hover:bg-gray-700/50 text-red-500 hover:text-red-400 transition-colors"
                  >
                    <LogOut className="h-5 w-5" />
                    <span className="ml-3 text-sm font-semibold">Logout</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
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
          <div className="border-t border-gray-700 pt-3 space-y-2">
              <Link
                to="/dashboard"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-2 text-gray-200 hover:bg-[#33FEBF] hover:text-white rounded-md"
              >
                <BarChart2 className="h-5 w-5" />
                <span>Dashboard</span>
              </Link>
              <Link
                to="/edit-profile"
                onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-2 text-gray-200 hover:bg-[#33FEBF] hover:text-white rounded-md"
              >
                <Settings className="h-5 w-5" />
                  <span>Edit Profile</span>
              </Link>
                <button
                onClick={handleLogout}
                className="w-full flex items-center gap-3 px-4 py-2 text-red-500 hover:bg-red-500 hover:text-white rounded-md"
              >
                <LogOut className="h-5 w-5" />
                <span>Logout</span>
              </button>
          </div>
        </div>
      )}
    </header>
  );
}