import { useState } from 'react';

const ApiIntegrations = () => {
  const [apiSettings, setApiSettings] = useState({
    weblockUrl: "https://api.example.com/weblock",
    rateLimit: 1000,
    analyticsTracking: true,
    apiKey: "sk_1234567890abcdef1234567890abcdef"
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setApiSettings(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save logic here
    alert('API settings saved!');
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">API & Integrations</h2>
      <p className="text-gray-600 mb-6">Manage API keys and third-party integrations</p>
      
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Weblock URL
            </label>
            <input
              type="url"
              name="weblockUrl"
              value={apiSettings.weblockUrl}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              API Rate Limit (requests/hour)
            </label>
            <input
              type="number"
              name="rateLimit"
              value={apiSettings.rateLimit}
              onChange={handleChange}
              min="100"
              max="10000"
              className="w-32 p-2 border border-gray-300 rounded-md"
            />
          </div>
          
          <div className="flex items-center">
            <input
              type="checkbox"
              name="analyticsTracking"
              checked={apiSettings.analyticsTracking}
              onChange={handleChange}
              className="h-4 w-4 text-blue-600 rounded"
            />
            <label className="ml-3 block text-sm font-medium text-gray-700">
              Enable Analytics Tracking
            </label>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-3">API Keys</h3>
            <div className="bg-gray-50 p-4 rounded-md">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Production API Key
              </label>
              <div className="flex items-center">
                <input
                  type="text"
                  value={apiSettings.apiKey}
                  readOnly
                  className="flex-1 p-2 border border-gray-300 rounded-md bg-white"
                />
                <button
                  type="button"
                  className="ml-2 px-3 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
                  onClick={() => navigator.clipboard.writeText(apiSettings.apiKey)}
                >
                  Copy
                </button>
              </div>
              <p className="mt-2 text-sm text-gray-500">
                API Documentation: <a href={apiSettings.weblockUrl} className="text-blue-600 hover:underline">{apiSettings.weblockUrl}</a>
              </p>
            </div>
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

export default ApiIntegrations;