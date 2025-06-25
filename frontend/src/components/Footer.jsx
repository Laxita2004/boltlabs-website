import React from "react";
import {
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPhone,
  FaFax,
  FaMapMarkerAlt,
} from "react-icons/fa";
import logo from "../assets/logo.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; {currentYear} BoltLabs. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
