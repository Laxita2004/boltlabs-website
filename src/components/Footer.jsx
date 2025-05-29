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
};

export default Footer;
