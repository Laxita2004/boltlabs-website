import { useState } from 'react';

const Appearance = () => {
  const [appearanceSettings, setAppearanceSettings] = useState({
    theme: "dark",
    primaryColor: "#10B981",
    collapseSidebar: false,
    fontSize: "medium"
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setAppearanceSettings(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save logic here
    alert('Appearance settings saved!');
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-white mb-2">Appearance Settings</h2>
      <p className="text-gray-400 mb-6">Customize the look and feel of your admin panel</p>
      
      <form onSubmit={handleSubmit} className="bg-[#1F2937] p-6 rounded-lg shadow-lg border border-gray-700/50">
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium text-white mb-3">Theme</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <input
                  type="radio"
                  name="theme"
                  value="light"
                  checked={appearanceSettings.theme === "light"}
                  onChange={handleChange}
                  className="h-4 w-4 text-teal-500 bg-gray-700 border-gray-600 focus:ring-teal-600"
                />
                <label className="ml-3 block text-sm font-medium text-gray-300">
                  Light
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  name="theme"
                  value="dark"
                  checked={appearanceSettings.theme === "dark"}
                  onChange={handleChange}
                  className="h-4 w-4 text-teal-500 bg-gray-700 border-gray-600 focus:ring-teal-600"
                />
                <label className="ml-3 block text-sm font-medium text-gray-300">
                  Dark
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  name="theme"
                  value="system"
                  checked={appearanceSettings.theme === "system"}
                  onChange={handleChange}
                  className="h-4 w-4 text-teal-500 bg-gray-700 border-gray-600 focus:ring-teal-600"
                />
                <label className="ml-3 block text-sm font-medium text-gray-300">
                  System Preference
                </label>
              </div>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Primary Color
            </label>
            <div className="flex items-center">
              <input
                type="color"
                name="primaryColor"
                value={appearanceSettings.primaryColor}
                onChange={handleChange}
                className="w-12 h-12 border-0 rounded cursor-pointer"
              />
              <span className="ml-3 text-sm font-medium text-gray-300">
                {appearanceSettings.primaryColor}
              </span>
            </div>
          </div>
          
          <div className="flex items-center">
            <input
              type="checkbox"
              name="collapseSidebar"
              checked={appearanceSettings.collapseSidebar}
              onChange={handleChange}
              className="h-4 w-4 text-teal-500 bg-gray-700 border-gray-600 rounded focus:ring-teal-600"
            />
            <label className="ml-3 block text-sm font-medium text-gray-300">
              Collapse Sidebar by Default
            </label>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Font Size
            </label>
            <select
              name="fontSize"
              value={appearanceSettings.fontSize}
              onChange={handleChange}
              className="w-full md:w-48 p-2 bg-[#0e1a24] border border-gray-600 rounded-md text-white focus:ring-teal-500 focus:border-teal-500"
            >
              <option value="small" className="bg-[#0e1a24] text-white">Small</option>
              <option value="medium" className="bg-[#0e1a24] text-white">Medium</option>
              <option value="large" className="bg-[#0e1a24] text-white">Large</option>
            </select>
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

export default Appearance;