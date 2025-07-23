

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin,  } from 'react-icons/fa';

const DomainMembers = ({ domain }) => {
 
  const teamMembers = {
    'Software-Development': [
      {
        id: 1,
        name: "Arjun Bhattrai",
        role: "Web Developer",
        expertise: ["React", "Tailwind CSS", "TypeScript"],
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        emp_id: "WBD26001",
        bio: "Specializes in building performant, accessible web applications"
      },
      {
        id: 2,
        name: "Laxita Thakur",
        role: "Web Developer",
        expertise: ["Node.js", "GraphQL", "AWS"],
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        emp_id: "WBD26002",
        bio: "Passionate about scalable backend systems"
      },
      {
        id: 3,
        name: "Dilpreet Singh Gill",
        role: "Web Developer",
        expertise: ["Node.js", "GraphQL", "AWS"],
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        emp_id: "WBD27001",
        bio: "Passionate about scalable backend systems"
      },
      {
        id: 4,
        name: "Nandani Kushwaha",
        role: "Web Developer",
        expertise: ["Node.js", "GraphQL", "AWS"],
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        emp_id: "WBD27002",
        bio: "Passionate about scalable backend systems"
      },
      {
        id: 5,
        name: "Sahil Malik",
        role: "Web Developer",
        expertise: ["Node.js", "GraphQL", "AWS"],
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        emp_id: "WBD27003",
        bio: "Passionate about scalable backend systems"
      },
      {
        id: 6,
        name: "Shiva Khanna",
        role: "Web Developer",
        expertise: ["Node.js", "GraphQL", "AWS"],
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        emp_id: "WBD27004",
        bio: "Passionate about scalable backend systems"
      },
      {
        id: 7,
        name: "Aditya Golait",
        role: "Web Developer",
        expertise: ["Node.js", "GraphQL", "AWS"],
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        emp_id: "WBD26003",
        bio: "Passionate about scalable backend systems"
      }
    ],
    'Graphics-Design': [
      {
        id: 7,
        name: "Vinayak Varun",
        role: "Graphic Designer",
        expertise: ["React Native", "Flutter", "Firebase"],
        avatar: "https://randomuser.me/api/portraits/men/75.jpg",
        emp_id: "GCD26001",
        bio: "Creates buttery smooth mobile experiences"
      },
      {
        id: 8,
        name: "Himanshi Mandloi",
        role: "Graphic Designer",
        expertise: ["React Native", "Flutter", "Firebase"],
        avatar: "https://randomuser.me/api/portraits/men/75.jpg",
        emp_id: "GCD26002",
        bio: "Creates buttery smooth mobile experiences"
      },
      {
        id: 9,
        name: "Jatin Sisodiya",
        role: "Graphic Designer",
        expertise: ["React Native", "Flutter", "Firebase"],
        avatar: "https://randomuser.me/api/portraits/men/75.jpg",
        emp_id: "GCD27001",
        bio: "Creates buttery smooth mobile experiences"
      },
      {
        id: 10,
        name: "Jatin Gaur",
        role: "Graphic Designer",
        expertise: ["React Native", "Flutter", "Firebase"],
        avatar: "https://randomuser.me/api/portraits/men/75.jpg",
        emp_id: "GCD27002",
        bio: "Creates buttery smooth mobile experiences"
      },
      {
        id: 11,
        name: "Simran Saxena",
        role: "Graphic Designer",
        expertise: ["React Native", "Flutter", "Firebase"],
        avatar: "https://randomuser.me/api/portraits/men/75.jpg",
        emp_id: "GCD27003",
        bio: "Creates buttery smooth mobile experiences"
      },
    ], 
    "Internet-of-Things-(IoT)": [
      {
        id: 12,
        name: "Rohan Warkhade",
        role: "IoT Engineer",
        expertise: ["Raspberry Pi", "Arduino", "MQTT"],
        avatar: "https://randomuser.me/api/portraits/men/55.jpg",
        emp_id: "IOT26001",
        bio: "Connects devices and data to build smart solutions",
      },
      {
        id: 13,
        name: "Shailesh Chouhan",
        role: "IoT Engineer",
        expertise: ["Raspberry Pi", "Arduino", "MQTT"],
        avatar: "https://randomuser.me/api/portraits/men/55.jpg",
        emp_id: "IOT26002",
        bio: "Connects devices and data to build smart solutions",
      },
      {
        id: 14,
        name: "Adwait Dubey",
        role: "IoT Engineer",
        expertise: ["Raspberry Pi", "Arduino", "MQTT"],
        avatar: "https://randomuser.me/api/portraits/men/55.jpg",
        emp_id: "IOT26003",
        bio: "Connects devices and data to build smart solutions",
      },
      {
        id: 15,
        name: "Anushka Sharma",
        role: "IoT Engineer",
        expertise: ["Raspberry Pi", "Arduino", "MQTT"],
        avatar: "https://randomuser.me/api/portraits/men/55.jpg",
        emp_id: "IOT26004",
        bio: "Connects devices and data to build smart solutions",
      },
      {
        id: 16,
        name: "Vinayak Varun",
        role: "IoT Engineer",
        expertise: ["Raspberry Pi", "Arduino", "MQTT"],
        avatar: "https://randomuser.me/api/portraits/men/55.jpg",
        emp_id: "GCD26001",
        bio: "Connects devices and data to build smart solutions",
      },
      {
        id: 17,
        name: "Manish Verma",
        role: "IoT Engineer",
        expertise: ["Raspberry Pi", "Arduino", "MQTT"],
        avatar: "https://randomuser.me/api/portraits/men/55.jpg",
        emp_id: "IOT27001",
        bio: "Connects devices and data to build smart solutions",
      },
      {
        id: 18,
        name: "Riddhi Sitlani",
        role: "IoT Engineer",
        expertise: ["Raspberry Pi", "Arduino", "MQTT"],
        avatar: "https://randomuser.me/api/portraits/men/55.jpg",
        emp_id: "IOT26005",
        bio: "Connects devices and data to build smart solutions",
      },
    ],
    "PR-and-Lead-Generation": [
      {
        id: 19,
        name: "Anjali Gharwal",
        role: "PR Strategist",
        expertise: ["Outreach", "Lead Funnels", "Campaigns"],
        avatar: "https://randomuser.me/api/portraits/women/52.jpg",
        emp_id: "PLG26001",
        bio: "Drives growth through targeted communications",
      },
      {
        id: 20,
        name: "Manish Verma",
        role: "PR Strategist",
        expertise: ["Outreach", "Lead Funnels", "Campaigns"],
        avatar: "https://randomuser.me/api/portraits/women/52.jpg",
        emp_id: "IOT27001",
        bio: "Drives growth through targeted communications",
      },
    ],
    "Digital-Marketing": [
      {
        id: 21,
        name: "Jatin Sisodiya",
        role: "SEO Expert",
        expertise: ["SEO", "Social Media", "Email Marketing"],
        avatar: "https://randomuser.me/api/portraits/men/88.jpg",
        emp_id: "GCD27001",
        bio: "Maximizes digital visibility and engagement",
      },
      {
        id: 22,
        name: "Laxita Thakur",
        role: "Content Stratergist",
        expertise: ["SEO", "Social Media", "Email Marketing"],
        avatar: "https://randomuser.me/api/portraits/men/88.jpg",
        emp_id: "WBD26002",
        bio: "Maximizes digital visibility and engagement",
      },
      {
        id: 23,
        name: "Himanshi Mandloi",
        role: "Content Stratergist",
        expertise: ["SEO", "Social Media", "Email Marketing"],
        avatar: "https://randomuser.me/api/portraits/men/88.jpg",
        emp_id: "GCD26002",
        bio: "Maximizes digital visibility and engagement",
      },
    ],
    "Technical-Support": [
      {
        id: 24,
        name: "Anushka Sharma",
        role: "Support Engineer",
        expertise: ["Troubleshooting", "Customer Success", "CRM"],
        avatar: "https://randomuser.me/api/portraits/women/22.jpg",
        emp_id: "IOT26004",
        bio: "Ensures smooth user experiences with empathy and speed",
      },
      {
        id: 25,
        name: "Vinayak Varun",
        role: "Support Engineer",
        expertise: ["Troubleshooting", "Customer Success", "CRM"],
        avatar: "https://randomuser.me/api/portraits/women/22.jpg",
        emp_id: "GCD26001",
        bio: "Ensures smooth user experiences with empathy and speed",
      },
      {
        id: 26,
        name: "Rohan Warkhade",
        role: "Support Engineer",
        expertise: ["Troubleshooting", "Customer Success", "CRM"],
        avatar: "https://randomuser.me/api/portraits/women/22.jpg",
        emp_id: "IOT26001",
        bio: "Ensures smooth user experiences with empathy and speed",
      },
      {
        id: 27,
        name: "Shailesh Chouhan",
        role: "Support Engineer",
        expertise: ["Troubleshooting", "Customer Success", "CRM"],
        avatar: "https://randomuser.me/api/portraits/women/22.jpg",
        emp_id: "IOT26002",
        bio: "Ensures smooth user experiences with empathy and speed",
      },
    ],
  };

  return (
    <section className="container mx-auto px-6 pb-20">
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
                <span className="bg-accent text-[#33FEBF] px-3 py-1 rounded-full text-xs font-bold">
                  {member.emp_id}
                </span>
              </div>
            </div>

            {/* Member Info */}
            <div className="p-6 relative">

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
