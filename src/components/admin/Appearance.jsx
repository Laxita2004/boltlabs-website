import { useState } from 'react';

const Appearance = () => {
  const [appearanceSettings, setAppearanceSettings] = useState({
    theme: "light",
    primaryColor: "#3865d6",
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
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Appearance Settings</h2>
      <p className="text-gray-600 mb-6">Customize the look and feel of your admin panel</p>
      
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-3">Theme</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <input
                  type="radio"
                  name="theme"
                  value="light"
                  checked={appearanceSettings.theme === "light"}
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-600"
                />
                <label className="ml-3 block text-sm font-medium text-gray-700">
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
                  className="h-4 w-4 text-blue-600"
                />
                <label className="ml-3 block text-sm font-medium text-gray-700">
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
                  className="h-4 w-4 text-blue-600"
                />
                <label className="ml-3 block text-sm font-medium text-gray-700">
                  System Preference
                </label>
              </div>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
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
              <span className="ml-3 text-sm font-medium text-gray-700">
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
              className="h-4 w-4 text-blue-600 rounded"
            />
            <label className="ml-3 block text-sm font-medium text-gray-700">
              Collapse Sidebar by Default
            </label>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Font Size
            </label>
            <select
              name="fontSize"
              value={appearanceSettings.fontSize}
              onChange={handleChange}
              className="w-full md:w-48 p-2 border border-gray-300 rounded-md"
            >
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
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

export default Appearance;