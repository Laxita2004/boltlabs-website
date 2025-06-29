import React, { useState } from 'react';
import { User, PlusCircle, Clock } from 'lucide-react';

const TABS = [
  { id: 'profile', label: 'Profile', icon: User },
  { id: 'new-request', label: 'New Request', icon: PlusCircle },
  { id: 'history', label: 'Request History', icon: Clock },
];

const dummyDomains = [
  { domain_id: '1', name: 'Web Development' },
  { domain_id: '2', name: 'API Integration' },
];

const priorities = ['Low', 'Medium', 'High'];

const requestHistory = [
  {
    id: 1,
    service: 'Web Development',
    domain: 'E-commerce',
    description: 'Need a complete e-commerce website with payment integration',
    date: '6/25/2024',
    priority: 'High',
    status: 'In Progress',
  },
  {
    id: 2,
    service: 'API Integration',
    domain: 'Healthcare',
    description: 'Integration with third-party medical records API',
    date: '6/20/2024',
    priority: 'Medium',
    status: 'Completed',
  },
];

const badgeColors = {
  High: 'bg-red-600 text-white',
  Medium: 'bg-yellow-400 text-gray-900',
  Low: 'bg-blue-400 text-white',
  'In Progress': 'bg-blue-600 text-white',
  Completed: 'bg-green-500 text-white',
};

const UserPanel = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [form, setForm] = useState({
    serviceType: '',
    domain: '',
    priority: 'Medium',
    description: '',
  });
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert('Request submitted! (frontend only)');
    setForm({ serviceType: '', domain: '', priority: 'Medium', description: '' });
  };

  return (
    <div className="bg-[#0e1a24] text-white min-h-screen pt-32 p-4 sm:p-6 md:p-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-white">User Panel</h1>
          <p className="text-gray-400 mt-1">Manage your profile and service requests</p>
        </header>
        <div className="border-b border-slate-700 mb-6">
          <nav className="flex space-x-8">
            {TABS.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-teal-400 text-teal-400'
                    : 'border-transparent text-gray-400 hover:text-gray-300'
                }`}
              >
                <tab.icon size={16} />
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
        <div className="bg-[#19202A] rounded-2xl p-8 border border-gray-700/50">
          {activeTab === 'new-request' && (
            <div>
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <PlusCircle /> New Service Request
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-1">Service Type</label>
                  <input
                    type="text"
                    name="serviceType"
                    value={form.serviceType}
                    onChange={handleChange}
                    placeholder="e.g., Web Development, API Integration"
                    className="w-full bg-[#232B39] border border-gray-600 rounded-lg text-white px-4 py-3 focus:ring-2 focus:ring-teal-500 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Domain</label>
                  <select
                    name="domain"
                    value={form.domain}
                    onChange={handleChange}
                    className="w-full bg-[#232B39] border border-gray-600 rounded-lg text-white px-4 py-3"
                    required
                  >
                    <option value="">Select a domain</option>
                    {dummyDomains.map(domain => (
                      <option key={domain.domain_id} value={domain.domain_id}>{domain.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Priority</label>
                  <select
                    name="priority"
                    value={form.priority}
                    onChange={handleChange}
                    className="w-full bg-[#232B39] border border-gray-600 rounded-lg text-white px-4 py-3"
                  >
                    {priorities.map(p => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Description</label>
                  <textarea
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    placeholder="Describe your service requirements in detail..."
                    className="w-full bg-[#232B39] border border-gray-600 rounded-lg text-white px-4 py-3 min-h-[100px]"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition"
                >
                  <span className="mr-2">Submit Request</span>
                </button>
              </form>
            </div>
          )}
          {activeTab === 'profile' && (
            <div className="bg-[#232B39] rounded-xl p-8 border border-gray-700/50">
              <h2 className="text-2xl font-semibold mb-6">Profile Information</h2>
              <form
                onSubmit={e => {
                  e.preventDefault();
                  alert('Profile updated! (frontend only)');
                }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                <div>
                  <label className="block text-sm font-medium mb-1">Name</label>
                  <input
                    type="text"
                    className="w-full bg-[#2d3748] border border-gray-600 rounded-lg text-white px-4 py-3"
                    value={profile.name}
                    onChange={e => setProfile({ ...profile, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input
                    type="email"
                    className="w-full bg-[#2d3748] border border-gray-600 rounded-lg text-white px-4 py-3"
                    value={profile.email}
                    onChange={e => setProfile({ ...profile, email: e.target.value })}
                    required
                  />
                </div>
                <div className="col-span-2 mt-4">
                  <button
                    type="submit"
                    className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-6 rounded-lg"
                  >
                    Update Profile
                  </button>
                </div>
              </form>
            </div>
          )}
          {activeTab === 'history' && (
            <div className="bg-[#232B39] rounded-xl p-8 border border-gray-700/50">
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Clock /> Request History
              </h2>
              <div className="space-y-6">
                {requestHistory.map(req => (
                  <div key={req.id} className="bg-[#374151] rounded-lg p-6 border border-gray-600/30 flex flex-col gap-2">
                    <div className="flex flex-wrap justify-between items-center mb-2">
                      <div>
                        <div className="font-bold text-lg text-white">{req.service}</div>
                        <div className="text-gray-300 text-sm">Domain: <span className="font-medium">{req.domain}</span></div>
                      </div>
                      <div className="flex gap-2 mt-2 md:mt-0">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${badgeColors[req.priority]}`}>{req.priority}</span>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${badgeColors[req.status]}`}>{req.status}</span>
                      </div>
                    </div>
                    <div className="text-gray-200 mb-2">{req.description}</div>
                    <div className="text-gray-400 text-xs">Submitted on {req.date}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserPanel; 