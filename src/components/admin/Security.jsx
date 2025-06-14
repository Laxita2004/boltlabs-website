import { useState } from 'react';

const Security = () => {
  const [securitySettings, setSecuritySettings] = useState({
    passwordPolicy: "medium",
    maxAttempts: 5,
    whitelistIps: "192.168.1.1; 10.0.0.1",
    requireHttps: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSecuritySettings(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save logic here
    alert('Security settings saved!');
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Security Settings</h2>
      <p className="text-gray-600 mb-6">Configure security policies and access controls</p>
      
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-3">Password Policy</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <input
                  type="radio"
                  name="passwordPolicy"
                  value="low"
                  checked={securitySettings.passwordPolicy === "low"}
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-600"
                />
                <label className="ml-3 block text-sm font-medium text-gray-700">
                  Low (minimum 6 characters)
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  name="passwordPolicy"
                  value="medium"
                  checked={securitySettings.passwordPolicy === "medium"}
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-600"
                />
                <label className="ml-3 block text-sm font-medium text-gray-700">
                  Medium (8 characters, mixed case)
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  name="passwordPolicy"
                  value="high"
                  checked={securitySettings.passwordPolicy === "high"}
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-600"
                />
                <label className="ml-3 block text-sm font-medium text-gray-700">
                  High (12 characters, special characters)
                </label>
              </div>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Max Login Attempts
            </label>
            <input
              type="number"
              name="maxAttempts"
              value={securitySettings.maxAttempts}
              onChange={handleChange}
              min="1"
              max="10"
              className="w-24 p-2 border border-gray-300 rounded-md"
            />
          </div>
          
          <div>
            <div className="flex items-center">
              <input
                type="checkbox"
                name="whitelistEnabled"
                checked={true}
                readOnly
                className="h-4 w-4 text-blue-600 rounded"
              />
              <label className="ml-3 block text-sm font-medium text-gray-700">
                Whitelist IPs (comma separated)
              </label>
            </div>
            <textarea
              name="whitelistIps"
              value={securitySettings.whitelistIps}
              onChange={handleChange}
              rows="2"
              className="mt-2 w-full p-2 border border-gray-300 rounded-md"
            ></textarea>
          </div>
          
          <div className="flex items-center">
            <input
              type="checkbox"
              name="requireHttps"
              checked={securitySettings.requireHttps}
              onChange={handleChange}
              className="h-4 w-4 text-blue-600 rounded"
            />
            <label className="ml-3 block text-sm font-medium text-gray-700">
              Require HTTPS Only
            </label>
          </div>
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

export default Security;