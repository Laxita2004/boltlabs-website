import React from "react";
import { Link } from "react-router-dom";
import {
  FaTwitter,
  FaLinkedinIn,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import logo from "../assets/logo.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-[#141e28] text-white pt-12 pb-6 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & Description */}
        <div>
          <div className="flex items-center mb-4">
            <img src={logo} alt="BoltLabs Logo" className="h-10" />
          </div>
          <p className="text-gray-300 mb-6 text-sm">
            Empowering local businesses with cutting-edge technology solutions since 2025.
          </p>
          <div className="flex space-x-3">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-[#33FEBF] p-2 rounded-full hover:bg-[#1da1f2] transition-colors"><FaTwitter className="text-[#141e28]" size={20} /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-[#33FEBF] p-2 rounded-full hover:bg-[#0077b5] transition-colors"><FaLinkedinIn className="text-[#141e28]" size={20} /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-[#33FEBF] p-2 rounded-full hover:bg-[#1877f3] transition-colors"><FaFacebook className="text-[#141e28]" size={20} /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-[#33FEBF] p-2 rounded-full hover:bg-[#e4405f] transition-colors"><FaInstagram className="text-[#141e28]" size={20} /></a>
          </div>
        </div>
        {/* Company Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Company</h3>
          <ul className="space-y-2 text-gray-300">
            <li><Link to="/about" className="hover:text-[#33FEBF] transition">About Us</Link></li>
            <li><Link to="/careers" className="hover:text-[#33FEBF] transition">Careers</Link></li>
            <li><Link to="/case-studies" className="hover:text-[#33FEBF] transition">Case Studies</Link></li>
            <li><Link to="/blog" className="hover:text-[#33FEBF] transition">Blog</Link></li>
          </ul>
        </div>
        {/* Services Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Services</h3>
          <ul className="space-y-2 text-gray-300">
            <li><Link to="/services/web-development" className="hover:text-[#33FEBF] transition">Web Development</Link></li>
            <li><Link to="/services/app-development" className="hover:text-[#33FEBF] transition">App Development</Link></li>
          </ul>
        </div>
        {/* Contact Info */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Contact</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <a href="mailto:hello@boltlabs.in" className="hover:text-[#33FEBF] transition">hello@boltlabs.in</a>
            </li>
            <li>
              <a href="tel:+9196466xxxxx" className="hover:text-[#33FEBF] transition">+91-96466xxxxx</a>
            </li>
            <li>
              <Link to="/contact" className="hover:text-[#33FEBF] transition">Visit Us</Link>
            </li>
            <li>
              <Link to="/support" className="hover:text-[#33FEBF] transition">Support</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-10 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
        &copy; {currentYear} BoltLabs. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
