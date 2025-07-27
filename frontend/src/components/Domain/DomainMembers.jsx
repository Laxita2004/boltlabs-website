import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import adminAPI from '../../services/api';
import DomainHero from './DomainHero';
import Header from '../Header';

const DomainMembers = () => {
  const { slug } = useParams();
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);

 useEffect(() => {
  const fetchDomainMembers = async () => {
    try {
      const allDomains = await adminAPI.get("api/admin/domains");
      console.log("All Domains:", allDomains.data);
      console.log("Slug:", slug);
      allDomains.data.forEach((d) =>
        console.log(
          d.name,
          "->",
          d.name.toLowerCase().replace(/\s+/g, "-")
        )
      );

      const domain = allDomains.data.find(
  (d) => d.name.trim().toLowerCase().replace(/\s+/g, "-") === slug
);

      if (domain) {
        console.log("Domain found:", domain);
        const res = await adminAPI.get(
          `api/admin/domains/${domain.domain_id}/members`
        );
        console.log("Members fetched:", res.data);
        setMembers(res.data);
      } else {
        console.error("Domain not found for slug:", slug);
      }
    } catch (err) {
      console.error("Failed to fetch domain members:", err);
    } finally {
      setLoading(false);
    }
  };

  fetchDomainMembers();
}, [slug]);

  if (loading) return <div className="text-center text-white py-10">Loading...</div>;

  return (
    <>
    <Header />
      <DomainHero domain={slug} />
      <section className="container mx-auto px-6 pb-20 ">
        <h2 className="text-3xl font-bold text-center text-white mb-10 uppercase">
          {slug.replace(/-/g, ' ')}
        </h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {members.map((member, index) => (
            <motion.div
              key={member.member_id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white text-black rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="relative h-64">
                <img
                  src={member.pic}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-white/80 text-[#33FEBF] px-3 py-1 rounded-full text-xs font-bold">
                    {member.empId}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold">{member.name}</h3>
                <p className="text-sm text-gray-700 mb-3">{member.description}</p>
                <div className="flex flex-wrap gap-2">
                  {(member.skillTags || []).map((tag, i) => (
                    <span key={i} className="bg-gray-200 text-xs px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                {/* profile button */}
                <Link
                  to={`/team/${slug}/${member.member_id}`}
                  className="w-full bg-black text-white px-4 py-3 rounded-lg text-sm font-semibold hover:bg-[#33FEBF] transition-colors flex items-center justify-center mt-4"
                >
                  View Full Profile
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  );
};

export default DomainMembers;
