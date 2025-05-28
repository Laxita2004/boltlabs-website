import React from "react";
import {
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPhone,
  FaFax,
  FaMapMarkerAlt,
} from "react-icons/fa";
import logo from "../../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-[#101820] text-white">
      {/* Top section */}
      <div className="container mx-auto px-4 py-8 md:flex justify-between items-center border-b border-gray-700">
        {/* Logo and tagline */}
        <div className="mb-6 md:mb-0">
          <img src={logo} alt="Bolt Labs Logo" className="h-12 mb-2" />
          <p className="text-sm text-teal-400 italic">Create. Innovate. Bolt</p>
        </div>

        {/* Contact Info */}
        <div className="text-sm space-y-2">
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt /> <span>Lorem Ipsum</span>
          </div>
          <div className="flex items-center gap-2">
            <FaPhone /> <a href="tel:1234567890">(123) 456-7890</a>
          </div>
          <div className="flex items-center gap-2">
            <FaFax /> <a href="fax:1234567890">(123) 456-7890</a>
          </div>
        </div>

        {/* Social Media */}
        <div className="text-sm mt-6 md:mt-0">
          <p className="mb-2">Social Media</p>
          <div className="flex gap-4 text-lg">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between text-xs">
        <div className="flex gap-4 mb-2 md:mb-0">
          <a href="/about" className="hover:underline">ABOUT US</a>
          <a href="/contact" className="hover:underline">CONTACT US</a>
          <a href="/team" className="hover:underline">OUR TEAM</a>
        </div>
        <p>Copyright © 2025 BoltLabs</p>
      </div>
    </footer>
  );
}
