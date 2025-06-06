import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import profile from '../assets/profile.png'


const Domain = () => {

    const [domains, setDomains] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/api/domains').then((res) => setDomains(res.data))
            .catch((err) => console.log(err));

    }, []);
    return (

        <div className="bg-[#141e28] min-h-screen px-4 pt-0 flex items-center justify-center">
            <div className="max-w-6xl w-full text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#33febf] to-teal-400 mb-4">
                    Our Domains
                </h1>
                <span className="text-gray-300 text-lg max-w-3xl mx-auto block mb-12">
                    From technology to strategy, our domains represent the pillars of our excellence and innovation
                </span>

                <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {domains.map((domain) => (
                        <div key={domain.id} className="bg-[#1f2a38] border border-[#33febf] rounded-2xl p-6 shadow-md text-white hover:shadow-lg transition">
                            <img src={profile} alt="team-lead" className="w-20 h-20 rounded-full mx-auto mb-4" />
                            <h2 className="text-xl font-semibold text-[#33febf]">{domain.name}</h2>
                            <h3 className="text-sm text-gray-400 mb-2">{domain.head}</h3>
                            <span className="text-gray-300 text-sm">{domain.description}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Domain
