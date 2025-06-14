import React from 'react';
import { User, Award } from 'lucide-react';

const OverviewTab = () => {
  const skills = [
    'Digital Marketing',
    'Brand Strategy',
    'Analytics',
    'Content Marketing',
    'SEO'
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* About Section */}
      <div className="bg-slate-800 rounded-lg p-6">
        <div className="flex items-center gap-2 mb-4">
          <User className="text-teal-400" size={20} />
          <h2 className="text-xl font-semibold">About</h2>
        </div>
        <p className="text-gray-300 leading-relaxed">
          Driving brand growth through strategic campaigns and digital marketing excellence. Lisa has transformed our market 
          presence and built lasting customer relationships.
        </p>
      </div>

      {/* Skills & Expertise Section */}
      <div className="bg-slate-800 rounded-lg p-6">
        <div className="flex items-center gap-2 mb-4">
          <Award className="text-teal-400" size={20} />
          <h2 className="text-xl font-semibold">Skills & Expertise</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span 
              key={index} 
              className="bg-slate-700 border border-slate-600 px-3 py-1 rounded-full text-sm hover:bg-slate-600 transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Languages Section */}
      <div className="bg-slate-800 rounded-lg p-6 lg:col-span-2">
        <h2 className="text-xl font-semibold mb-4">Languages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h3 className="font-medium">English (Native)</h3>
          </div>
          <div>
            <h3 className="font-medium">Mandarin (Fluent)</h3>
          </div>
          <div>
            <h3 className="font-medium">German (Intermediate)</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewTab;
