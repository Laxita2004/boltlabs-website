import { useState } from 'react';

const Notifications = () => {
  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: false,
    projectUpdates: true,
    clientMessages: true,
    systemAlerts: true,
    weeklyReports: true
  });

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setNotificationSettings(prev => ({
      ...prev,
      [name]: checked
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save logic here
    alert('Notification preferences saved!');
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-white mb-2">Notification Preferences</h2>
      <p className="text-gray-400 mb-6">Configure how you receive notifications</p>
      
      <form onSubmit={handleSubmit} className="bg-[#1F2937] p-6 rounded-lg shadow-lg border border-gray-700/50">
        <div className="space-y-4">
          {Object.entries(notificationSettings).map(([key, value]) => (
            <div key={key} className="flex items-center">
              <input
                type="checkbox"
                id={key}
                name={key}
                checked={value}
                onChange={handleChange}
                className="h-4 w-4 bg-gray-700 border-gray-600 rounded text-teal-500 focus:ring-teal-600"
              />
              <label htmlFor={key} className="ml-3 block text-sm font-medium text-gray-300">
                {key === 'emailNotifications' && 'Email Notifications'}
                {key === 'projectUpdates' && 'Project Status Updates'}
                {key === 'clientMessages' && 'Client Messages'}
                {key === 'systemAlerts' && 'System Alerts'}
                {key === 'weeklyReports' && 'Weekly Reports'}
              </label>
            </div>
          ))}
        </div>
        
        <button
          type="submit"
          className="mt-6 px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default Notifications;