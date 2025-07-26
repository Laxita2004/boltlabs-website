import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Mail, Globe, Twitter, MapPin, Calendar, ArrowLeft } from "lucide-react";
import { adminAPI } from "../services/api";// adjust path if needed

const ProfileHeader = () => {
  const navigate = useNavigate();
  const { member_id } = useParams();
  const [member, setMember] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMember = async () => {
      try {
       const res = await adminAPI.getMemberById(member_id);
        setMember(res.data);
      } catch (err) {
        console.error("Failed to fetch member:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMember();
  }, [member_id]);

  if (loading) {
    return <div className="text-center text-white py-10">Loading...</div>;
  }

  if (!member) {
    return <div className="text-center text-red-400 py-10">Member not found.</div>;
  }

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div className="mb-8">
      {/* Back Button */}
      <button
        onClick={handleBackClick}
        className="flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors mb-6"
      >
        <ArrowLeft size={16} />
        <span>Back to Team</span>
      </button>

      {/* Profile Section */}
      <div className="flex flex-col md:flex-row gap-6 items-start">
        {/* Profile Image */}
        <div className="relative">
          <img
            src={member.pic}
            alt={member.name}
            className="w-32 h-32 rounded-full object-cover border-4 border-slate-700"
          />
        </div>

        {/* Profile Info */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-2">{member.name}</h1>
          <p className="text-xl text-teal-400 mb-4">{member.role || member.description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {(member.skillTags || []).map((tag, i) => (
              <span key={i} className="bg-slate-700 px-3 py-1 rounded-full text-sm">
                {tag}
              </span>
            ))}
          </div>

          {/* Location and Join Date */}
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-300">
            {member.location && (
              <div className="flex items-center gap-1">
                <MapPin size={16} className="text-teal-400" />
                <span>{member.location}</span>
              </div>
            )}
            {member.joinDate && (
              <div className="flex items-center gap-1">
                <Calendar size={16} className="text-teal-400" />
                <span>Joined {new Date(member.joinDate).toLocaleDateString()}</span>
              </div>
            )}
          </div>

          {/* Social Links */}
          <div className="flex gap-3">
            {member.email && (
              <a href={`mailto:${member.email}`} className="p-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors">
                <Mail size={18} />
              </a>
            )}
            {member.website && (
              <a href={member.website} target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors">
                <Globe size={18} />
              </a>
            )}
            {member.twitter && (
              <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors">
                <Twitter size={18} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
