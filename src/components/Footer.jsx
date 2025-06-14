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
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; 2023 BoltLabs. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
