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
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Notification Preferences</h2>
      <p className="text-gray-600 mb-6">Configure how you receive notifications</p>
      
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="space-y-4">
          {Object.entries(notificationSettings).map(([key, value]) => (
            <div key={key} className="flex items-center">
              <input
                type="checkbox"
                id={key}
                name={key}
                checked={value}
                onChange={handleChange}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor={key} className="ml-3 block text-sm font-medium text-gray-700">
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
          className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default Notifications;