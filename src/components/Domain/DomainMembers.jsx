// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import { FaGithub, FaLinkedin,  } from 'react-icons/fa';

// const DomainMembers = ({ domain }) => {
//   //  sample data 
//   const teamMembers = {
//     'web-development': [
//       {
//         id: 1,
//         name: "Alex Johnson",
//         role: "Frontend Architect",
//         expertise: ["React", "Tailwind CSS", "TypeScript"],
//         avatar: "https://randomuser.me/api/portraits/men/32.jpg",
//         projects: 18,
//         github: "#",
//         linkedin: "#",
//         bio: "Specializes in building performant, accessible web applications"
//       },
//       {
//         id: 2,
//         name: "Sarah Chen",
//         role: "Fullstack Developer",
//         expertise: ["Node.js", "GraphQL", "AWS"],
//         avatar: "https://randomuser.me/api/portraits/women/44.jpg",
//         projects: 23,
//         github: "#",
//         linkedin: "#",
//         bio: "Passionate about scalable backend systems"
//       }
//     ],
//     'app-development': [
//       {
//         id: 3,
//         name: "Michael Rodriguez",
//         role: "Mobile Lead",
//         expertise: ["React Native", "Flutter", "Firebase"],
//         avatar: "https://randomuser.me/api/portraits/men/75.jpg",
//         projects: 15,
//         github: "#",
//         linkedin: "#",
//         bio: "Creates buttery smooth mobile experiences"
//       }
//     ]
//   };

 

//   return (
//     <section className="container mx-auto px-6 pb-20">
     

//       {/* Team Grid */}
//       <motion.div 
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         viewport={{ once: true }}
//         className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//       >
//         {teamMembers[domain]?.map((member, index) => (
//           <motion.div
//             key={member.id}
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: index * 0.1 }}
//             whileHover={{ y: -5, scale: 1.02 }}
//             className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100"
//           >
//             {/* Avatar with gradient overlay */}
//             <div className="relative h-64">
//               <img 
//                 src={member.avatar} 
//                 alt={member.name}
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-30"></div>
//               <div className="absolute bottom-4 left-4">
//                 <span className="bg-accent text-dark px-3 py-1 rounded-full text-xs font-bold">
//                   {member.projects}+ projects
//                 </span>
//               </div>
//             </div>

//             {/* Member Info */}
//             <div className="p-6 relative">
//               {/* Social links floating on top */}
//               <div className="absolute -top-5 right-6 flex space-x-2">
//                 <a href={member.github} className="bg-dark text-white p-2 rounded-full hover:bg-accent transition-colors">
//                   <FaGithub />
//                 </a>
//                 <a href={member.linkedin} className="bg-dark text-white p-2 rounded-full hover:bg-accent transition-colors">
//                   <FaLinkedin />
//                 </a>
//               </div>

//               <h3 className="text-2xl font-bold text-dark mt-2">{member.name}</h3>
//               <p className="text-accent font-medium mb-3">{member.role}</p>
//               <p className="text-gray-600 text-sm mb-4">{member.bio}</p>

//               {/* Expertise  */}
//               <div className="flex flex-wrap gap-2 mb-6">
//                 {member.expertise.map((skill, i) => (
//                   <span 
//                     key={i}
//                     className="bg-gray-100 text-dark text-xs px-3 py-1 rounded-full"
//                   >
//                     {skill}
//                   </span>
//                 ))}
//               </div>

//               <Link 
//                 to={`/team/${domain}/${member.id}`}
//                 className="w-full bg-dark text-white px-4 py-3 rounded-lg text-sm font-semibold hover:bg-accent transition-colors flex items-center justify-center"
//               >
//                 View Full Profile
//                 <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
//                 </svg>
//               </Link>
//             </div>
//           </motion.div>
//         ))}
//       </motion.div>
//     </section>
//   );
// };

// export default DomainMembers;

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { fetchDomainMembers } from '../../services/teamapi';

const DomainMembers = ({ domain }) => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadMembers = async () => {
      try {
        const members = await fetchDomainMembers(domain);
        // Ensure members is always an array
        setTeamMembers(Array.isArray(members) ? members : []);
      } catch (err) {
        console.error('Error fetching team members:', err);
        setError(err.message || 'Failed to load team members');
        setTeamMembers([]); // Set to empty array on error
      } finally {
        setLoading(false);
      }
    };

    loadMembers();
  }, [domain]);

  if (loading) {
    return (
      <div className="container mx-auto px-6 py-20 text-center">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-accent"></div>
        <p className="mt-4 text-gray-600">Loading team members...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-6 py-20 text-center">
        <p className="text-red-500">Error: {error}</p>
      </div>
    );
  }

  
  return (
    <section className="container mx-auto px-6 pb-20">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {teamMembers.length > 0 ? (
          teamMembers.map((member, index) => (
            <motion.div
              key={member.id || index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              {/* Rest of your member card JSX */}
              <div className="relative h-64">
                <img 
                  src={member.avatar || '/default-avatar.png'} 
                  alt={member.name || 'Team member'}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = '/default-avatar.png';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-30"></div>
                {member.projects && (
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-accent text-dark px-3 py-1 rounded-full text-xs font-bold">
                      {member.projects}+ projects
                    </span>
                  </div>
                )}
              </div>

              <div className="p-6 relative">
                <div className="absolute -top-5 right-6 flex space-x-2">
                  {member.github && (
                    <a href={member.github} target="_blank" rel="noopener noreferrer" className="bg-dark text-white p-2 rounded-full hover:bg-accent transition-colors">
                      <FaGithub />
                    </a>
                  )}
                  {member.linkedin && (
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="bg-dark text-white p-2 rounded-full hover:bg-accent transition-colors">
                      <FaLinkedin />
                    </a>
                  )}
                </div>

                <h3 className="text-2xl font-bold text-dark mt-2">{member.name}</h3>
                <p className="text-accent font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm mb-4">{member.bio}</p>

                {member.expertise?.length > 0 && (
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
                )}

                <Link 
                  to={`/team/${domain}/${member.id}`}
                  className="w-full bg-dark text-white px-4 py-3 rounded-lg text-sm font-semibold hover:bg-accent transition-colors flex items-center justify-center"
                >
                  View Full Profile
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))
        ) : (
          <div className="col-span-full text-center py-10">
            <p className="text-gray-600">No team members found for this domain.</p>
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default DomainMembers;