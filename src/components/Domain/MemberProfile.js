import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMemberDetails } from '../../services/teamapi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const MemberProfile = () => {
  const { domain, memberId } = useParams();
  const [member, setMember] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadMember = async () => {
      try {
        const memberData = await fetchMemberDetails(domain, memberId);
        setMember(memberData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadMember();
  }, [domain, memberId]);

  if (loading) {
    return (
      <div className="container mx-auto px-6 py-20 text-center">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-accent"></div>
        <p className="mt-4 text-gray-600">Loading member profile...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-6 py-20 text-center">
        <p className="text-red-500">Error loading profile: {error}</p>
      </div>
    );
  }

  if (!member) {
    return (
      <div className="container mx-auto px-6 py-20 text-center">
        <p className="text-gray-600">Member not found.</p>
      </div>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto px-6 py-12"
    >
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/3 bg-gray-100">
            <img
              className="w-full h-full object-cover"
              src={member.avatar}
              alt={member.name}
            />
          </div>
          <div className="p-8 md:w-2/3">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-3xl font-bold text-dark">{member.name}</h1>
                <p className="text-accent text-lg font-medium mt-2">{member.role}</p>
                <p className="text-gray-600 mt-4">{member.bio}</p>
              </div>
              <div className="flex space-x-3">
                <a href={member.github} className="text-dark hover:text-accent transition-colors">
                  <FaGithub size={24} />
                </a>
                <a href={member.linkedin} className="text-dark hover:text-accent transition-colors">
                  <FaLinkedin size={24} />
                </a>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-semibold text-dark mb-4">Expertise</h2>
              <div className="flex flex-wrap gap-2">
                {member.expertise.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-dark px-4 py-2 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-semibold text-dark mb-2">Projects Completed</h2>
              <p className="text-gray-700">{member.projects}+</p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default MemberProfile;