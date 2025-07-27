import React from 'react';
import call from "../assets/emergency-call.png";
import email from "../assets/email.png";
import address from "../assets/location.png";

const Content = () => {
    return (
        <div className="relative bg-[#141e28] text-white py-20 px-6 md:px-16 lg:px-24 xl:px-32 overflow-hidden ">

            {/* ✨ Decorative Background Elements */}
            <div className="absolute top-[-60px] right-[-80px] w-64 h-64 bg-[#33febf] opacity-10 rounded-full blur-[120px] z-0 animate-pulse mt-10"></div>
            <div className="absolute bottom-[-80px] left-[-60px] w-52 h-52 bg-[#33febf] opacity-20 rounded-full blur-3xl z-0 animate-ping mt-10"></div>
            <div className="absolute top-[65%] right-[-40px] w-28 h-28 bg-white opacity-10 rounded-full blur-xl z-0 animate-spin-slow mt-10"></div>

            {/* Decorative Triangles */}
            <div className="absolute bottom-0 left-0 z-0 opacity-10">
                <svg width="160" height="120">
                    <polygon points="0,120 160,0 160,120" fill="#33febf" />
                </svg>
            </div>
            <div className="absolute top-0 right-0 z-0 opacity-10">
                <svg width="140" height="100">
                    <polygon points="0,0 140,0 140,100" fill="white" />
                </svg>
            </div>

            {/* ✉️ Main Contact Section */}
            <div className="relative z-10">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight tracking-wide mt-10">
                        <span className="text-[#33febf]">Contact</span> Us
                    </h1>
                    <p className="text-gray-300 text-lg">
                        We’d love to hear from you. Let’s build something amazing together.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row bg-gradient-to-br from-[#1e2a38] to-[#202f3e] rounded-3xl overflow-hidden shadow-2xl border border-[#33febf]/30">

                    {/* 📞 Contact Info */}
                    <div className="lg:w-1/2 p-10 bg-[#141e28] flex flex-col justify-center relative">
                        <h2 className="text-2xl font-bold mb-6 text-white">Get in Touch</h2>

                        <div className="space-y-6 text-sm text-gray-200">

                            <div className="flex items-center gap-4 group">
                                <img src={call} alt="Phone Icon" className="h-6 w-6 invert group-hover:scale-110 transition" />
                                <span>+91 91356 49926</span>
                            </div>

                            <div className="flex items-center gap-4 group">
                                <img src={email} alt="Email Icon" className="h-6 w-6 invert group-hover:scale-110 transition" />
                                <span>we.labsbolt@gmail.com</span>
                            </div>

                            <div className="flex items-center gap-4 group">
                                <img src={address} alt="Location Icon" className="h-6 w-6 invert group-hover:scale-110 transition" />
                                <span>Y.N. Road, SGSITS, Indore</span>
                            </div>

                        </div>

                        <div className="mt-10 h-[1px] w-full bg-[#33febf]/30" />

                        <p className="text-sm mt-6 text-[#9adcd1] italic">
                            We're here to help you grow online 🌐
                        </p>
                    </div>



                    {/* 📝 Contact Form */}
                    <div className="lg:w-1/2 p-10 bg-[#141e28]">
                        <form className="space-y-6">
                            <div className="flex gap-4 flex-col md:flex-row">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="flex-1 px-4 py-3 rounded-md bg-white text-[#141e28] placeholder-gray-600 border border-[#33febf] focus:outline-none focus:ring-2 focus:ring-[#33febf] transition"
                                />
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="flex-1 px-4 py-3 rounded-md bg-white text-[#141e28] placeholder-gray-600 border border-[#33febf] focus:outline-none focus:ring-2 focus:ring-[#33febf] transition"
                                />
                            </div>
                            <input
                                type="tel"
                                placeholder="Contact Number"
                                className="w-full px-4 py-3 rounded-md bg-white text-[#141e28] placeholder-gray-600 border border-[#33febf] focus:outline-none focus:ring-2 focus:ring-[#33febf] transition"
                            />
                            <select
                                className="w-full px-4 py-3 rounded-md bg-white text-[#33febf] border border-[#33febf] focus:outline-none transition"
                            >
                                <option disabled selected>Select Subject</option>
                                <option value="inquiry">Inquiry</option>
                                <option value="message">Message</option>
                                <option value="remarks">Remarks</option>
                                <option value="feedback">Feedback</option>
                            </select>
                            <textarea
                                rows="4"
                                placeholder="Write Your Message Here..."
                                className="w-full px-4 py-3 rounded-md bg-white text-[#0e1a24] placeholder-gray-600 border border-[#33febf] focus:outline-none focus:ring-2 focus:ring-[#33febf] transition"
                            />
                            <button
                                type="submit"
                                className="bg-gradient-to-r from-[#33febf] to-[#2be0aa] text-[#141e28] font-bold py-3 px-6 rounded-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
                            >
                                Send Message 🚀
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Content;
