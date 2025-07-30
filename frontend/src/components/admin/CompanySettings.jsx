import { useState } from 'react';

const CompanySettings = () => {
  const [companyInfo, setCompanyInfo] = useState({
    name: "SolidLink",
    phone: "+1 (555) 122-4567",
    address: "123 Tech Street, Silicon Valley, CA 94105",
    timezone: "Pacific Time (PT)",
    email: "admin@SolidLink.com",
    website: "https://solidlink.com"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCompanyInfo(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save logic here
    alert('Company information saved successfully!');
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-white mb-2">Company Information</h2>
      <p className="text-gray-400 mb-6">Update your company details and contact information</p>
      
      <form onSubmit={handleSubmit}>
        <div className="bg-[#1F2937] p-6 rounded-lg shadow-lg border border-gray-700/50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Company Name</label>
              <input
                type="text"
                name="name"
                value={companyInfo.name}
                onChange={handleChange}
                className="w-full p-2 bg-[#0e1a24] border border-gray-600 rounded-md text-white focus:ring-teal-500 focus:border-teal-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Phone</label>
              <input
                type="text"
                name="phone"
                value={companyInfo.phone}
                onChange={handleChange}
                className="w-full p-2 bg-[#0e1a24] border border-gray-600 rounded-md text-white focus:ring-teal-500 focus:border-teal-500"
              />
            </div>
            
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-300 mb-1">Address</label>
              <input
                type="text"
                name="address"
                value={companyInfo.address}
                onChange={handleChange}
                className="w-full p-2 bg-[#0e1a24] border border-gray-600 rounded-md text-white focus:ring-teal-500 focus:border-teal-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Timezone</label>
              <input
                type="text"
                name="timezone"
                value={companyInfo.timezone}
                onChange={handleChange}
                className="w-full p-2 bg-[#0e1a24] border border-gray-600 rounded-md text-white focus:ring-teal-500 focus:border-teal-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={companyInfo.email}
                onChange={handleChange}
                className="w-full p-2 bg-[#0e1a24] border border-gray-600 rounded-md text-white focus:ring-teal-500 focus:border-teal-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Website</label>
              <input
                type="url"
                name="website"
                value={companyInfo.website}
                onChange={handleChange}
                className="w-full p-2 bg-[#0e1a24] border border-gray-600 rounded-md text-white focus:ring-teal-500 focus:border-teal-500"
              />
            </div>
          </div>
          
          <button
            type="submit"
            className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default CompanySettings;