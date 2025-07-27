import { Link } from "react-router-dom";
import {
  FaWhatsapp,
  FaLinkedinIn,
  // FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import logo from "../assets/logo.png";


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#141e28] text-white pt-16 pb-10 px-6 relative overflow-hidden">
      <div
        className="absolute bottom-0 right-0 w-40 h-40 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at bottom right, #33FEBF33 0%, transparent 70%)",
          zIndex: 0,
        }}
      />

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <img src={logo} alt="BoltLabs Logo" className="w-40 h-auto mb-4" />
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              Empowering local businesses with cutting-edge technology solutions
              since 2025.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://whatsapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#33FEBF] p-2 rounded-full hover:opacity-90 transition-colors"
              >
                <FaWhatsapp className="text-[#141e28]" size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#33FEBF] p-2 rounded-full hover:opacity-90 transition-colors"
              >
                <FaLinkedinIn className="text-[#141e28]" size={20} />
              </a>
              {/* <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#33FEBF] p-2 rounded-full hover:opacity-90 transition-colors"
              >
                <FaFacebook className="text-[#141e28]" size={20} />
              </a> */}
              <a
                href="https://www.instagram.com/bolt.labs?igsh=MWhvd2twaWF3d2VpOA=="
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#33FEBF] p-2 rounded-full hover:opacity-90 transition-colors"
              >
                <FaInstagram className="text-[#141e28]" size={20} />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link to="/" className="hover:text-[#33FEBF]">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#33FEBF]">
                  About Us
                </Link>
              </li>
              
              <li>
                <Link to="/case-studies" className="hover:text-[#33FEBF]">
                  Our Team
                </Link>
              </li>
              <li>
                
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link
                  to="/services/software-dev"
                  className="hover:text-[#33FEBF]"
                >
                  Software Development
                </Link>
              </li>
              <li>
                <Link
                  to="/services/digital-presence"
                  className="hover:text-[#33FEBF]"
                >
                  Digital Presence Mgmt
                </Link>
              </li>
              <li>
                <Link to="/services/iot" className="hover:text-[#33FEBF]">
                  Embedded Systems & IoT
                </Link>
              </li>
              <li>
                <Link to="/services/design" className="hover:text-[#33FEBF]">
                  Design & Creatives
                </Link>
              </li>
              <li>
                <Link to="/services/support" className="hover:text-[#33FEBF]">
                  Tech Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact + Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-300 mb-6">
              <li>
                <a
                  href="mailto:hello@boltlabs.in"
                  className="hover:text-[#33FEBF]"
                >
                  we.labsbolt@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+9196466xxxxx" className="hover:text-[#33FEBF]">
                  +91 91356 49926
                </a>
              </li>
              <li>
                <a href="map" className="hover:text-[#33FEBF]">
                  SGSITS, Indore
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 border-t border-gray-700 pt-6 text-center text-gray-400 text-xs">
        &copy; {currentYear} BoltLabs. All rights reserved.
        <div className="mt-2">
          <Link to="/privacy" className="hover:text-[#33FEBF] mx-2">
            Privacy Policy
          </Link>
          |
          <Link to="/terms" className="hover:text-[#33FEBF] mx-2">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
