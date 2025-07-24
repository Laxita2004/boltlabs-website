

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { teamMembers } from '../../data/members';

const DomainMembers = ({ domain }) => {
 
 const members = teamMembers[domain] || [];

  return (
    <section className="container mx-auto px-6 pb-20">
      {/* Optional Domain Title */}
      <h2 className="text-3xl font-bold text-center text-dark mb-10 uppercase">
        {domain?.replaceAll("-", " ")}
      </h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {members.map((member, index) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100"
          >
            {/* Avatar */}
            <div className="relative h-64">
              <img
                src={member.avatar}
                alt={member.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-30" />
              <div className="absolute bottom-4 left-4">
                <span className="bg-white/80 text-[#33FEBF] px-3 py-1 rounded-full text-xs font-bold">
                  {member.emp_id}
                </span>
              </div>
            </div>

            {/* Info */}
            <div className="p-6 relative">
              <h3 className="text-2xl font-bold text-dark mt-2">{member.name}</h3>
              <p className="text-accent font-medium mb-3">{member.role}</p>
              <p className="text-gray-600 text-sm mb-4">{member.bio}</p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mb-6">
                {member.expertise.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-gray-100 text-dark text-xs px-3 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Profile Button */}
              <Link
                to={`/team/${domain}/${member.id}`}
                className="w-full bg-dark text-white px-4 py-3 rounded-lg text-sm font-semibold hover:bg-[#33FEBF] transition-colors flex items-center justify-center"
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
  );
};

export default DomainMembers;
