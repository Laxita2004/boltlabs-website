import { useState } from 'react';

const ApiIntegrations = () => {
  const [apiSettings, setApiSettings] = useState({
    webhookUrl: "https://api.example.com/webhook",
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
      <h2 className="text-2xl font-bold text-white mb-2">API & Integrations</h2>
      <p className="text-gray-400 mb-6">Manage API keys and third-party integrations</p>
      
      <form onSubmit={handleSubmit} className="bg-[#1F2937] p-6 rounded-lg shadow-lg border border-gray-700/50">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Webhook URL
            </label>
            <input
              type="url"
              name="webhookUrl"
              value={apiSettings.webhookUrl}
              onChange={handleChange}
              className="w-full p-2 bg-[#0e1a24] border border-gray-600 rounded-md text-white focus:ring-teal-500 focus:border-teal-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              API Rate Limit (requests/hour)
            </label>
            <input
              type="number"
              name="rateLimit"
              value={apiSettings.rateLimit}
              onChange={handleChange}
              min="100"
              max="10000"
              className="w-32 p-2 bg-[#0e1a24] border border-gray-600 rounded-md text-white focus:ring-teal-500 focus:border-teal-500"
            />
          </div>
          
          <div className="flex items-center">
            <input
              type="checkbox"
              name="analyticsTracking"
              checked={apiSettings.analyticsTracking}
              onChange={handleChange}
              className="h-4 w-4 text-teal-500 bg-gray-700 border-gray-600 rounded focus:ring-teal-600"
            />
            <label className="ml-3 block text-sm font-medium text-gray-300">
              Enable Analytics Tracking
            </label>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-white mb-3">API Keys</h3>
            <div className="bg-[#0e1a24] p-4 rounded-md border border-gray-700/50">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Production API Key
              </label>
              <div className="flex items-center">
                <input
                  type="text"
                  value={apiSettings.apiKey}
                  readOnly
                  className="flex-1 p-2 border border-gray-600 rounded-md bg-gray-800 text-gray-300"
                />
                <button
                  type="button"
                  className="ml-2 px-3 py-2 bg-gray-600 text-gray-200 rounded-md hover:bg-gray-500"
                  onClick={() => navigator.clipboard.writeText(apiSettings.apiKey)}
                >
                  Copy
                </button>
              </div>
              <p className="mt-2 text-sm text-gray-400">
                API Documentation: <a href={apiSettings.webhookUrl} className="text-teal-400 hover:underline">{apiSettings.webhookUrl}</a>
              </p>
            </div>
          </div>
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

export default ApiIntegrations;