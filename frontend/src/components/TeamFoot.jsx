import React from 'react'

const TeamFoot = () => {
    return (
        <div className="bg-[#141e28] py-16 px-4 flex items-center justify-center">
            <div className="max-w-4xl w-full text-center space-y-8">

                {/* Heading and Description */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                        Want to join our innovative minds?
                    </h2>
                    <span className="text-gray-300 text-lg block max-w-2xl mx-auto">
                        We're looking for passionate, curious, and driven individuals to join our team. Whether you're a designer, developer, strategist, or innovator—there’s a place for you here. Step in, learn, grow, and build with us.
                    </span>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
                    <button className="bg-[#33febf] text-[#141e28] font-semibold px-6 py-3 rounded-xl hover:bg-teal-300 transition">
                        View Open Positions
                    </button>
                    <button className="border border-[#33febf] text-[#33febf] font-semibold px-6 py-3 rounded-xl hover:bg-[#1f2a38] transition">
                        Learn About Culture
                    </button>
                </div>
            </div>
        </div>

    )
}

export default TeamFoot
