import React from 'react';
import { FolderOpen, ExternalLink, Calendar } from 'lucide-react';

const ProjectsTab = () => {
  const projects = [
    {
      title: 'Brand Redesign Campaign',
      category: 'Brand Strategy',
      period: '2023',
      description: 'Complete brand identity overhaul including logo redesign, brand guidelines, and marketing collateral. Resulted in 40% increase in brand recognition.',
      technologies: ['Adobe Creative Suite', 'Figma', 'Brand Strategy'],
      status: 'Completed',
      impact: '40% increase in brand recognition'
    },
    {
      title: 'Digital Marketing Automation',
      category: 'Marketing Technology',
      period: '2022-2023',
      description: 'Implemented comprehensive marketing automation platform including email sequences, lead scoring, and customer journey mapping.',
      technologies: ['HubSpot', 'Salesforce', 'Google Analytics'],
      status: 'Completed',
      impact: '65% improvement in lead quality'
    },
    {
      title: 'Content Marketing Strategy',
      category: 'Content Strategy',
      period: '2022',
      description: 'Developed and executed content marketing strategy across multiple channels including blog, social media, and video content.',
      technologies: ['WordPress', 'SEO Tools', 'Video Production'],
      status: 'Ongoing',
      impact: '200% increase in organic traffic'
    },
    {
      title: 'Customer Analytics Dashboard',
      category: 'Data Analytics',
      period: '2021',
      description: 'Built comprehensive analytics dashboard to track customer behavior, campaign performance, and ROI metrics.',
      technologies: ['Google Analytics', 'Tableau', 'SQL'],
      status: 'Completed',
      impact: 'Real-time performance insights'
    }
  ];

  return (
    <div className="max-w-6xl">
      <div className="flex items-center gap-2 mb-6">
        <FolderOpen className="text-teal-400" size={24} />
        <h2 className="text-2xl font-bold">Featured Projects</h2>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-slate-800 rounded-lg p-6 hover:bg-slate-750 transition-colors group">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-teal-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-teal-400 text-sm font-medium">{project.category}</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 text-gray-400">
                  <Calendar size={14} />
                  <span className="text-xs">{project.period}</span>
                </div>
                <button className="p-1 text-gray-400 hover:text-teal-400 transition-colors">
                  <ExternalLink size={16} />
                </button>
              </div>
            </div>
            
            <p className="text-gray-300 mb-4 leading-relaxed text-sm">{project.description}</p>
            
            <div className="mb-4">
              <div className="flex flex-wrap gap-1 mb-3">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex} 
                    className="bg-slate-700 px-2 py-1 rounded text-xs text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${project.status === 'Completed' ? 'bg-green-400' : 'bg-yellow-400'}`}></div>
                <span className="text-xs text-gray-400">{project.status}</span>
              </div>
              <div className="text-xs text-teal-400 font-medium">{project.impact}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsTab;
