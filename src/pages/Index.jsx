import React, { useState } from 'react';
import { User, Briefcase, FolderOpen, MessageCircle } from 'lucide-react';
import ProfileHeader from '../components/ProfileHeader';
import TabNavigation from '../components/TabNavigation';
import OverviewTab from '../components/OverviewTab';
import ExperienceTab from '../components/ExperienceTab';
import ProjectsTab from '../components/ProjectsTab';
import ContactTab from '../components/ContactTab';

const Index = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: User },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'contact', label: 'Contact', icon: MessageCircle }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return <OverviewTab />;
      case 'experience':
        return <ExperienceTab />;
      case 'projects':
        return <ProjectsTab />;
      case 'contact':
        return <ContactTab />;
      default:
        return <OverviewTab />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <ProfileHeader />
        <TabNavigation 
          tabs={tabs} 
          activeTab={activeTab} 
          onTabChange={setActiveTab} 
        />
        <div className="mt-8">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default Index;
