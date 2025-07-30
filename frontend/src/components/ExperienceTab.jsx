import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const ExperienceTab = () => {
  const experiences = [
    {
      title: 'Marketing Director',
      company: 'TechCorp Solutions',
      period: 'February 2020 - Present',
      description: 'Leading strategic marketing initiatives and digital transformation projects. Increased brand awareness by 150% and drove customer acquisition growth by 85%.',
      achievements: [
        'Launched 5 successful product campaigns',
        'Built marketing team from 3 to 15 members',
        'Implemented data-driven marketing strategies'
      ]
    },
    {
      title: 'Senior Marketing Manager',
      company: 'Innovation Labs',
      period: 'June 2017 - January 2020',
      description: 'Managed comprehensive marketing campaigns across digital and traditional channels. Specialized in B2B marketing and lead generation.',
      achievements: [
        'Generated $2M in qualified leads',
        'Improved conversion rates by 40%',
        'Developed content marketing strategy'
      ]
    },
    {
      title: 'Marketing Specialist',
      company: 'StartupX',
      period: 'March 2015 - May 2017',
      description: 'Focused on brand development and digital marketing for early-stage startup. Built marketing foundation from ground up.',
      achievements: [
        'Created brand identity and guidelines',
        'Established social media presence',
        'Designed and executed launch campaigns'
      ]
    }
  ];

  return (
    <div className="max-w-4xl">
      <div className="flex items-center gap-2 mb-6">
        <Briefcase className="text-teal-400" size={24} />
        <h2 className="text-2xl font-bold">Professional Experience</h2>
      </div>
      
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-slate-800 rounded-lg p-6 hover:bg-slate-750 transition-colors">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-white mb-1">{exp.title}</h3>
                <p className="text-teal-400 font-medium">{exp.company}</p>
              </div>
              <div className="flex items-center gap-1 text-gray-400 mt-2 md:mt-0">
                <Calendar size={16} />
                <span className="text-sm">{exp.period}</span>
              </div>
            </div>
            
            <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
            
            <div>
              <h4 className="text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wide">Key Achievements</h4>
              <ul className="space-y-1">
                {exp.achievements.map((achievement, achievementIndex) => (
                  <li key={achievementIndex} className="flex items-start gap-2 text-gray-300">
                    <div className="w-1.5 h-1.5 bg-teal-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTab;
