// src/components/Domain.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import slugify from "slugify";
import adminAPI from "../services/api";
import domainBg from "../assets/domain-bg.png";

const Domain = () => {
  const [domains, setDomains] = useState([]);

  useEffect(() => {
    const fetchDomains = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await adminAPI.get("/api/admin/domains", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setDomains(res.data || []);
      } catch (err) {
        console.error("Failed to fetch domains", err);
      }
    };
    fetchDomains();
  }, []);


  return (
    <div className="bg-[#0e1721] py-24 px-4 flex items-center justify-center relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-[#33febf]/10 blur-3xl" />

      <div className="max-w-7xl w-full text-center relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#33febf] to-teal-400 mb-4">
          Our Core Domains
        </h1>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-14">
          We specialize in diverse fields, driving innovation and delivering
          high-impact solutions.
        </p>

        <div className="grid justify-center items-center gap-6 grid-cols-1 sm:grid-cols-3 lg:grid-cols-5">
          {domains.map((d) => {
            const slug = slugify(d.name, { lower: true });
            return (
              <Link key={d.domain_id} to={`/team/${slug}`} className="group">
                <motion.div
                  whileHover={{ y: -8, scale: 1.03 }}
                  className="relative w-60 rounded-2xl overflow-hidden shadow-lg transition duration-300"
                >
                  <div
                    className="h-60 bg-cover bg-center border border-[#33FEBF] rounded-2xl overflow-hidden relative"
                    style={{ backgroundImage: `url(${domainBg})` }}
                  >
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-all duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h2 className="text-md text-white font-semibold z-10 px-4 text-center">
                        {d.name.toUpperCase()}
                      </h2>
                    </div>
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Domain;
