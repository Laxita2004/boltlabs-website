import { useState } from 'react';

const UserProfile = () => {
  const [profile, setProfile] = useState({
    fullName: "Admin User",
    email: "admin@bottlabs.com",
    twoFactorEnabled: false,
    sessionTimeout: 24
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProfile(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save logic here
    alert('Profile updated successfully!');
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-2">Settings</h1>
      <p className="text-gray-600 mb-6">Manage your admin panel configuration</p>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">User Profile</h2>
        <p className="text-gray-600 mb-6">Manage your personal admin account settings.</p>

        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={profile.fullName}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                disabled
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="twoFactorEnabled"
                checked={profile.twoFactorEnabled}
                onChange={handleChange}
                className="rounded text-blue-600"
              />
              <span className="text-sm font-medium text-gray-700">Enable Two-Factor Authentication</span>
            </label>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Session Timeout (hours)</label>
            <select
              name="sessionTimeout"
              value={profile.sessionTimeout}
              onChange={handleChange}
              className="w-full md:w-48 p-2 border border-gray-300 rounded-md"
            >
              {[1, 2, 4, 8, 12, 24].map(hour => (
                <option key={hour} value={hour}>{hour} Hour{hour !== 1 ? 's' : ''}</option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserProfile;