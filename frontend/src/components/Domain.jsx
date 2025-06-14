import React from 'react'
import profile from '../assets/profile.png'

const Domain = () => {
    return (
        <div className="bg-[#141e28] min-h-screen px-4 py-12 flex items-center justify-center">
            <div className="max-w-6xl w-full text-center">
                {/* Section Header */}
                <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#33febf] to-teal-400 mb-4">
                    Our Domains
                </h1>
                <span className="text-gray-300 text-lg max-w-3xl mx-auto block mb-12">
                    From technology to strategy, our domains represent the pillars of our excellence and innovation
                </span>

                {/* Cards Grid */}
                <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">

                    {/* Card */}
                    <div className="bg-[#1f2a38] border border-[#33febf] rounded-2xl p-6 shadow-md text-white hover:shadow-lg transition">
                        <img src={profile} alt="team-lead" className="w-20 h-20 rounded-full mx-auto mb-4" />
                        <h2 className="text-xl font-semibold text-[#33febf]">Web-Development</h2>
                        <h3 className="text-sm text-gray-400 mb-2">Head of Web-D</h3>
                        <span className="text-gray-300 text-sm">Building web solutions that are clean, efficient, and user-first.</span>
                    </div>

                    <div className="bg-[#1f2a38] border border-[#33febf] rounded-2xl p-6 shadow-md text-white hover:shadow-lg transition">
                        <img src={profile} alt="team-lead" className="w-20 h-20 rounded-full mx-auto mb-4" />
                        <h2 className="text-xl font-semibold text-[#33febf]">Graphics</h2>
                        <h3 className="text-sm text-gray-400 mb-2">Head of Graphics</h3>
                        <span className="text-gray-300 text-sm">Shaping ideas into visuals that speak louder than words.</span>
                    </div>

                    <div className="bg-[#1f2a38] border border-[#33febf] rounded-2xl p-6 shadow-md text-white hover:shadow-lg transition">
                        <img src={profile} alt="team-lead" className="w-20 h-20 rounded-full mx-auto mb-4" />
                        <h2 className="text-xl font-semibold text-[#33febf]">Internet of Things</h2>
                        <h3 className="text-sm text-gray-400 mb-2">Head of IoT</h3>
                        <span className="text-gray-300 text-sm">Connecting the physical and digital to create smarter experiences.</span>
                    </div>

                    <div className="bg-[#1f2a38] border border-[#33febf] rounded-2xl p-6 shadow-md text-white hover:shadow-lg transition">
                        <img src={profile} alt="team-lead" className="w-20 h-20 rounded-full mx-auto mb-4" />
                        <h2 className="text-xl font-semibold text-[#33febf]">Management</h2>
                        <h3 className="text-sm text-gray-400 mb-2">Head of Management</h3>
                        <span className="text-gray-300 text-sm">Driving clarity, coordination, and execution across every initiative.</span>
                    </div>

                    <div className="bg-[#1f2a38] border border-[#33febf] rounded-2xl p-6 shadow-md text-white hover:shadow-lg transition">
                        <img src={profile} alt="team-lead" className="w-20 h-20 rounded-full mx-auto mb-4" />
                        <h2 className="text-xl font-semibold text-[#33febf]">Social Media</h2>
                        <h3 className="text-sm text-gray-400 mb-2">Head of Media</h3>
                        <span className="text-gray-300 text-sm">Telling impactful stories through powerful visuals and sound.</span>
                    </div>

                    <div className="bg-[#1f2a38] border border-[#33febf] rounded-2xl p-6 shadow-md text-white hover:shadow-lg transition">
                        <img src={profile} alt="team-lead" className="w-20 h-20 rounded-full mx-auto mb-4" />
                        <h2 className="text-xl font-semibold text-[#33febf]">Customer Care</h2>
                        <h3 className="text-sm text-gray-400 mb-2">Head of Care</h3>
                        <span className="text-gray-300 text-sm">Here to listen, support, and deliver a seamless experience for every user.</span>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Domain
