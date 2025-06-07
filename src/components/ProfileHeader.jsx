import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Globe, Twitter, MapPin, Calendar, ArrowLeft } from 'lucide-react';

const ProfileHeader = () => {

  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/'); // or navigate(-1) to go back to previous page
  };

  return (
    <div className="mb-8">
      {/* Back to Team Button */}
      <button className="flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors mb-6">
        <ArrowLeft size={16} />
        <span>Back to Team</span>
      </button>

      {/* Profile Section */}
      <div className="flex flex-col md:flex-row gap-6 items-start">
        {/* Profile Image */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
            alt="Lisa Wang"
            className="w-32 h-32 rounded-full object-cover border-4 border-slate-700"
          />
        </div>

        {/* Profile Info */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-2">Lisa Wang</h1>
          <p className="text-xl text-teal-400 mb-4">Marketing Director</p>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-red-600 px-3 py-1 rounded-full text-sm">Marketing</span>
            <span className="bg-slate-700 px-3 py-1 rounded-full text-sm">9+ years</span>
          </div>

          {/* Location and Join Date */}
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-300">
            <div className="flex items-center gap-1">
              <MapPin size={16} className="text-teal-400" />
              <span>Los Angeles, CA</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar size={16} className="text-teal-400" />
              <span>Joined February 2020</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-3">
            <button className="p-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors">
              <Mail size={18} />
            </button>
            <button className="p-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors">
              <Globe size={18} />
            </button>
            <button className="p-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors">
              <Twitter size={18} />
            </button>
            <button className="p-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors">
              <Globe size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
