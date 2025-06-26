import React, { useState } from "react";
import { FiGlobe, FiPlus, FiTrash2 } from "react-icons/fi";

const initialDomains = [
  {
    id: 1,
    name: "Web Development",
    team: ["John Doe", "Alice Johnson"],
    services: ["E-commerce Website", "Corporate Website"],
  },
  {
    id: 2,
    name: "Mobile Apps",
    team: ["John Doe"],
    services: ["iOS App Development"],
  },
  {
    id: 3,
    name: "Digital Marketing",
    team: ["Jane Smith"],
    services: ["SEO Optimization", "Social Media Management"],
  },
];

const DomainManagement = () => {
  const [domains, setDomains] = useState(initialDomains);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newDomain, setNewDomain] = useState({
    name: "",
    team: "",
    services: "",
  });

  const handleAddDomain = () => {
    if (!newDomain.name) return;
    setDomains([
      ...domains,
      {
        id: Math.max(0, ...domains.map((d) => d.id)) + 1,
        name: newDomain.name,
        team: newDomain.team.split(",").map((t) => t.trim()).filter(Boolean),
        services: newDomain.services.split(",").map((s) => s.trim()).filter(Boolean),
      },
    ]);
    setNewDomain({ name: "", team: "", services: "" });
    setIsModalOpen(false);
  };

  const handleDeleteDomain = (id) => {
    setDomains(domains.filter((d) => d.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#0e1a24] text-white p-8">
      <h1 className="text-3xl font-bold mb-1">Domain Management</h1>
      <p className="mb-6 text-gray-300">Manage service domains and their assignments</p>
      <div className="flex justify-end mb-6">
        <button
          className="flex items-center bg-teal-600 hover:bg-teal-700 text-white font-semibold px-5 py-2 rounded-md transition"
          onClick={() => setIsModalOpen(true)}
        >
          <FiPlus className="mr-2" /> Add Domain
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {domains.map((domain) => (
          <div
            key={domain.id}
            className="bg-[#232f3e] rounded-lg p-6 shadow relative flex flex-col border border-[#3a4656]"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <FiGlobe className="text-2xl text-teal-400" />
                <h2 className="text-xl font-bold">{domain.name}</h2>
              </div>
              <button
                className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-md transition flex items-center"
                onClick={() => handleDeleteDomain(domain.id)}
                title="Delete Domain"
              >
                <FiTrash2 className="text-lg" />
              </button>
            </div>
            <div className="mb-2">
              <div className="font-semibold mb-1">Team Members</div>
              <div className="flex flex-wrap gap-2">
                {domain.team.map((member, idx) => (
                  <span
                    key={idx}
                    className="bg-[#3a4656] text-white text-xs font-semibold px-3 py-1 rounded-md"
                  >
                    {member}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <div className="font-semibold mb-1">Services</div>
              <ul className="list-disc list-inside text-gray-200">
                {domain.services.map((service, idx) => (
                  <li key={idx}>{service}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      {/* Add Domain Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-[#232f3e] rounded-lg shadow-xl w-full max-w-md p-8 border border-gray-700">
            <h3 className="text-xl font-semibold mb-4">Add Domain</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Domain Name</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 rounded-md bg-[#0e1a24] border border-gray-600 text-white focus:outline-none"
                  value={newDomain.name}
                  onChange={(e) => setNewDomain({ ...newDomain, name: e.target.value })}
                  placeholder="Enter domain name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Team Members <span className="text-xs text-gray-400">(comma separated)</span></label>
                <input
                  type="text"
                  className="w-full px-3 py-2 rounded-md bg-[#0e1a24] border border-gray-600 text-white focus:outline-none"
                  value={newDomain.team}
                  onChange={(e) => setNewDomain({ ...newDomain, team: e.target.value })}
                  placeholder="e.g. John Doe, Alice Johnson"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Services <span className="text-xs text-gray-400">(comma separated)</span></label>
                <input
                  type="text"
                  className="w-full px-3 py-2 rounded-md bg-[#0e1a24] border border-gray-600 text-white focus:outline-none"
                  value={newDomain.services}
                  onChange={(e) => setNewDomain({ ...newDomain, services: e.target.value })}
                  placeholder="e.g. E-commerce Website, Corporate Website"
                />
              </div>
            </div>
            <div className="flex justify-end gap-2 mt-6">
              <button
                className="px-4 py-2 rounded-md text-gray-300 hover:bg-gray-700"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700"
                onClick={handleAddDomain}
              >
                Add Domain
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DomainManagement;