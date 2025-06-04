

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin,  } from 'react-icons/fa';

const DomainMembers = ({ domain }) => {
  //  sample data 
  const teamMembers = {
    'web-development': [
      {
        id: 1,
        name: "Alex Johnson",
        role: "Frontend Architect",
        expertise: ["React", "Tailwind CSS", "TypeScript"],
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        projects: 18,
        github: "#",
        linkedin: "#",
        bio: "Specializes in building performant, accessible web applications"
      },
      {
        id: 2,
        name: "Sarah Chen",
        role: "Fullstack Developer",
        expertise: ["Node.js", "GraphQL", "AWS"],
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        projects: 23,
        github: "#",
        linkedin: "#",
        bio: "Passionate about scalable backend systems"
      }
    ],
    'app-development': [
      {
        id: 3,
        name: "Michael Rodriguez",
        role: "Mobile Lead",
        expertise: ["React Native", "Flutter", "Firebase"],
        avatar: "https://randomuser.me/api/portraits/men/75.jpg",
        projects: 15,
        github: "#",
        linkedin: "#",
        bio: "Creates buttery smooth mobile experiences"
      }
    ]
  };

  // Domain icons mapping
  // const domainIcons = {
  //   'web-development': <FaCode className="text-3xl text-accent" />,
  //   'app-development': <FaMobileAlt className="text-3xl text-accent" />,
  //   'ui-ux': <FaPalette className="text-3xl text-accent" />
  // };

  return (
    <section className="container mx-auto px-6 pb-20">
      {/* Domain Header with Icon */}
      {/* <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-center mb-12"
      > */}
        {/* <div className="bg-accent bg-opacity-10 p-4 rounded-full">
          {domainIcons[domain] || <FaCode className="text-3xl text-accent" />}
        </div>
      </motion.div> */}

      {/* Team Grid */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {teamMembers[domain]?.map((member, index) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100"
          >
            {/* Avatar with gradient overlay */}
            <div className="relative h-64">
              <img 
                src={member.avatar} 
                alt={member.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-30"></div>
              <div className="absolute bottom-4 left-4">
                <span className="bg-accent text-dark px-3 py-1 rounded-full text-xs font-bold">
                  {member.projects}+ projects
                </span>
              </div>
            </div>

            {/* Member Info */}
            <div className="p-6 relative">
              {/* Social links floating on top */}
              <div className="absolute -top-5 right-6 flex space-x-2">
                <a href={member.github} className="bg-dark text-white p-2 rounded-full hover:bg-accent transition-colors">
                  <FaGithub />
                </a>
                <a href={member.linkedin} className="bg-dark text-white p-2 rounded-full hover:bg-accent transition-colors">
                  <FaLinkedin />
                </a>
              </div>

              <h3 className="text-2xl font-bold text-dark mt-2">{member.name}</h3>
              <p className="text-accent font-medium mb-3">{member.role}</p>
              <p className="text-gray-600 text-sm mb-4">{member.bio}</p>

              {/* Expertise  */}
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
        ))}
      </motion.div>
    </section>
  );
};

export default DomainMembers;