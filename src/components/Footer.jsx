<<<<<<< HEAD
import React from 'react';
import logo from "../assets/logobolt.svg";
import insta from "../assets/instagramIcon.svg";
import fb from "../assets/facebookIcon.svg";
import X from "../assets/twitterIcon.svg";
import linked from "../assets/linkendinIcon.svg";
import arrow from "../assets/arrowIcon.svg";

const Footer = () => {
    return (
        <footer className="bg-[#141e28] text-white pt-12 px-6 md:px-16 lg:px-24 xl:px-32">
            <div className="flex flex-wrap justify-between gap-12 md:gap-8">

                {/* Branding and Description */}
                <div className="max-w-96">
                    <img src={logo} alt="logo-icon" className="mb-4 h-10 w-auto" />
                    <p className="text-sm text-gray-300 leading-relaxed">
                        At BoltLabs, we help businesses get online and grow with confidence. Whether you're just starting out or looking to refresh your online presence, we build modern, custom websites that actually work — fast, clean, and made to impress.
                    </p>
                    <div className="flex items-center gap-4 mt-4">
                        <img src={insta} alt="Instagram" className="h-5 w-5 hover:opacity-80 cursor-pointer" />
                        <img src={fb} alt="Facebook" className="h-5 w-5 hover:opacity-80 cursor-pointer" />
                        <img src={X} alt="Twitter" className="h-5 w-5 hover:opacity-80 cursor-pointer" />
                        <img src={linked} alt="LinkedIn" className="h-5 w-5 hover:opacity-80 cursor-pointer" />
                    </div>
                </div>

                {/* Company Links */}
                <div>
                    <p className="text-[#33febf] font-semibold text-lg mb-3">Company</p>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li><a href="#" className="hover:text-[#33febf] transition">About</a></li>
                        <li><a href="#" className="hover:text-[#33febf] transition">Careers</a></li>
                        <li><a href="#" className="hover:text-[#33febf] transition">Press</a></li>
                        <li><a href="#" className="hover:text-[#33febf] transition">Blog</a></li>
                        <li><a href="#" className="hover:text-[#33febf] transition">Partners</a></li>
                    </ul>
                </div>

                {/* Support Links */}
                <div>
                    <p className="text-[#33febf] font-semibold text-lg mb-3">Support</p>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li><a href="#" className="hover:text-[#33febf] transition">Help Center</a></li>
                        <li><a href="#" className="hover:text-[#33febf] transition">Safety Information</a></li>
                        <li><a href="#" className="hover:text-[#33febf] transition">Contact Us</a></li>
                        <li><a href="#" className="hover:text-[#33febf] transition">Accessibility</a></li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div className="max-w-96">
                    <p className="text-[#33febf] font-semibold text-lg mb-3">Stay Updated</p>
                    <p className="text-sm text-gray-300 mb-4">
                        Subscribe to our newsletter for inspiration and special offers.
                    </p>
                    
                    <div className="flex">
                        <input
                            type="email"
                            className="bg-[#1e2a38] text-white placeholder:text-gray-400 border-2 border-[#33febf] rounded-l px-4 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-[#33febf]"
                            placeholder="Your email"
                        />
                        <button className="bg-[#33febf] hover:bg-[#2be0aa] rounded-r px-4 flex items-center justify-center">
                            <img src={arrow} alt="Submit" className="h-4 w-4 invert" />
                        </button>
                    </div>


                </div>
            </div>

            {/* Divider */}
            <hr className="border-gray-700 my-8" />

            {/* Bottom Section */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-6 text-sm text-gray-400">
                <p>© {new Date().getFullYear()} BoltLabs. All rights reserved.</p>
                <ul className="flex gap-4">
                    <li><a href="#" className="hover:text-[#33febf] transition">Privacy</a></li>
                    <li><a href="#" className="hover:text-[#33febf] transition">Terms</a></li>
                    <li><a href="#" className="hover:text-[#33febf] transition">Sitemap</a></li>
                </ul>
            </div>
        </footer>
    );
=======
import {
  FaBolt,
  FaTwitter,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram
} from "react-icons/fa";
import logo from "../images/logo.png";

const Footer = () => {
  const links = {
    company: [
      { name: "About Us", url: "/about" },
      { name: "Careers", url: "/careers" },
      { name: "Case Studies", url: "/case-studies" },
      { name: "Blog", url: "/blog" }
    ],
    services: [
      { name: "Web Development", url: "/services/web" },
      { name: "App Development", url: "/services/app" }
    ],
    contact: [
      { name: "hello@boltlabs.in", url: "mailto:hello@boltlabs.in" },
      { name: "+91-96466xxxxx", url: "tel:+9196466xxxxx" },
      { name: "Visit Us", url: "/contact" },
      { name: "Support", url: "/support" }
    ]
  };

  const socialLinks = [
    { icon: FaTwitter, url: "https://twitter.com/yourprofile" },
    { icon: FaLinkedinIn, url: "https://linkedin.com/company/yourpage" },
    { icon: FaFacebookF, url: "https://facebook.com/yourpage" },
    { icon: FaInstagram, url: "https://instagram.com/yourprofile" }
  ];

  return (
    <footer className="bg-dark text-white pt-20 pb-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="footer-about">
          <div className="flex items-center text-2xl font-bold">
            <img src={logo} alt="BoltLab Logo" className="h-32 w-32 -mt-14" />
          </div>
          <p className="mb-6 text-gray-400">
            Empowering local businesses with cutting-edge technology solutions
            since 2025.
          </p>
          <div className="flex gap-4">
            {socialLinks.map(({ icon: Icon, url }, index) => (
              <a
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-accent text-dark flex items-center justify-center hover:shadow-glow transition-all"
              >
                <Icon className="text-lg" />
              </a>
            ))}
          </div>
        </div>

        {Object.entries(links).map(([title, items]) => (
          <div key={title} className="footer-links">
            <h3 className="text-lg font-bold mb-6 capitalize">{title}</h3>
            <ul className="space-y-3">
              {items.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.url}
                    className="text-gray-400 hover:text-accent transition-colors"
                    target={item.url.startsWith("http") ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="container mx-auto px-6 mt-16 pt-6 border-t border-gray-800 text-center text-gray-500">
        &copy; 2025 Bolt Labs. All rights reserved.
      </div>
    </footer>
  );
>>>>>>> main
};

export default Footer;
