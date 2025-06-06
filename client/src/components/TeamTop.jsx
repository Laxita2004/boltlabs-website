import React from 'react'

const TeamTop = () => {
    return (
        <div class="bg-[#141e28] min-h-screen flex items-center justify-center px-4 py-10">
            <div class="max-w-5xl w-full bg-[#1f2a38] rounded-3xl shadow-lg p-10 text-center">


                <h1 class="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#33febf] to-teal-400 mb-4">
                    OUR TEAM
                </h1>


                <p class="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-12">
                    Meet the talented individuals who drive our mission forward with passion, expertise and innovation.
                </p>


                <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">

                    <div class="bg-[#141e28] border border-[#33febf] rounded-2xl p-6 text-white shadow-md hover:shadow-lg transition duration-200">
                        <p class="text-lg font-medium">Team Members</p>
                        <span class="text-3xl font-bold text-[#33febf] mt-2 block">21</span>
                    </div>


                    <div class="bg-[#141e28] border border-[#33febf] rounded-2xl p-6 text-white shadow-md hover:shadow-lg transition duration-200">
                        <p class="text-lg font-medium">Departments</p>
                        <span class="text-3xl font-bold text-[#33febf] mt-2 block">5</span>
                    </div>


                    <div class="bg-[#141e28] border border-[#33febf] rounded-2xl p-6 text-white shadow-md hover:shadow-lg transition duration-200">
                        <p class="text-lg font-medium">Experience</p>
                        <span class="text-3xl font-bold text-[#33febf] mt-2 block">+6 years</span>
                    </div>

                </div>
            </div>
        </div>


    )
}

export default TeamTop
