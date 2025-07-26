import React, { useState } from "react";
import { adminAPI } from "../../services/api.js";

const initialState = {
  clientName: "",
  domain: "",
  description: "",
};

const AddClientPage = () => {
  const [form, setForm] = useState(initialState);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const domains = [
    "Cloud Services",
    "Database Design", 
    "Web Development",
    "API Integration",
    "Mobile Development"
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    setLoading(true);
    
    // Basic validation
    if (!form.clientName || !form.domain || !form.description) {
      setError("Please fill all required fields.");
      setLoading(false);
      return;
    }
    
    try {
      const response = await adminAPI.createClient(form);
      setMessage("Client added successfully!");
      setForm(initialState);
    } catch (err) {
      setError(err.response?.data?.error || "Failed to add client");
    }
    setLoading(false);
  };

  const handleCancel = () => {
    setForm(initialState);
    setMessage("");
    setError("");
  };

  return (
    <div className="min-h-screen bg-[#131c27] py-10 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Add New Client</h1>
          <p className="text-gray-300">Enter client details and select domain.</p>
        </div>

        {/* Messages */}
        {message && (
          <div className="mb-6 p-4 bg-green-900/30 border border-green-500/50 rounded-lg">
            <p className="text-green-400">{message}</p>
          </div>
        )}
        {error && (
          <div className="mb-6 p-4 bg-red-900/30 border border-red-500/50 rounded-lg">
            <p className="text-red-400">{error}</p>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Client Information Card */}
          <div className="bg-[#1e293b] rounded-lg p-6 shadow-lg border border-gray-700/50">
            <h2 className="text-xl font-semibold text-white mb-6">Client Information</h2>
            
            <div className="space-y-6">
              {/* Client Name */}
              <div>
                <label className="block text-gray-300 mb-2 font-medium">
                  Client Name *
                </label>
                <input
                  type="text"
                  name="clientName"
                  value={form.clientName}
                  onChange={handleChange}
                  className="w-full bg-[#2d3748] border border-teal-500/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                  placeholder="Enter client name"
                  required
                />
              </div>

              {/* Domain */}
              <div>
                <label className="block text-gray-300 mb-2 font-medium">
                  Domain *
                </label>
                <select
                  name="domain"
                  value={form.domain}
                  onChange={handleChange}
                  className="w-full bg-[#2d3748] border border-teal-500/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all appearance-none cursor-pointer"
                  required
                >
                  <option value="">Select a domain</option>
                  {domains.map((domain) => (
                    <option key={domain} value={domain} className="bg-[#2d3748] text-white">
                      {domain}
                    </option>
                  ))}
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-gray-300 mb-2 font-medium">
                  Description *
                </label>
                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  className="w-full bg-[#2d3748] border border-teal-500/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all resize-none"
                  placeholder="Describe the project requirements"
                  rows={4}
                  required
                />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end space-x-4 pt-6">
            <button
              type="button"
              onClick={handleCancel}
              className="px-6 py-3 bg-[#374151] hover:bg-[#4b5563] text-white font-medium rounded-lg transition-colors duration-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Adding..." : "Add Client"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddClientPage; 