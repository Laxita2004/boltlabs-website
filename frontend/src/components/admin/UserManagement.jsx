import React, { useState, useEffect } from "react";
import { FiUser, FiMail, FiPlus, FiTrash2 } from "react-icons/fi";
import { adminAPI } from "../../services/api";

const UserManagement = () => {
  const [members, setMembers] = useState([]);
  const [domains, setDomains] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newMember, setNewMember] = useState({ name: "", email: "", selectedDomains: [] });
  const [error, setError] = useState("");

  // Fetch members and domains
  const fetchMembers = async () => {
    try {
      const res = await adminAPI.getMembers();
      setMembers(res.data || []);
    } catch (err) {
      setError("Failed to fetch members");
    }
  };

  const fetchDomains = async () => {
    try {
      const res = await adminAPI.getDomains();
      setDomains(res.data || []);
    } catch (err) {
      setError("Failed to fetch domains");
    }
  };

  useEffect(() => {
    fetchMembers();
    fetchDomains();
  }, []);

  // Add Member API
  const handleAddMember = async () => {
    if (!newMember.name || !newMember.email || newMember.selectedDomains.length === 0) {
      setError("Name, email, and at least one domain are required.");
      return;
    }
    try {
      const res = await adminAPI.createMember({
        name: newMember.name,
        email: newMember.email,
        password: "test1234", // Default/hardcoded for now
        domain_ids: newMember.selectedDomains,
      });
      setMembers((prev) => [...prev, res.data]);
      setNewMember({ name: "", email: "", selectedDomains: [] });
      setIsModalOpen(false);
      setError("");
    } catch (err) {
      setError(err?.response?.data?.error || "Failed to add member");
    }
  };

  // Delete Member API
  const handleDeleteMember = async (id) => {
    try {
      await adminAPI.deleteMember(id);
      setMembers(members.filter((m) => m.member_id !== id));
    } catch (err) {
      setError("Failed to delete member");
    }
  };

  return (
    <div className="min-h-screen bg-[#0e1a24] text-white p-8">
      <h1 className="text-3xl font-bold mb-1">User Management</h1>
      <p className="mb-6 text-gray-300">Manage team members and their domain access</p>
      {error && <div className="text-red-400 mb-4">{error}</div>}

      <div className="bg-[#232f3e] rounded-xl p-6 shadow mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Team Members</h2>
          <button
            className="flex items-center bg-teal-600 hover:bg-teal-700 text-white font-semibold px-5 py-2 rounded-md transition"
            onClick={() => setIsModalOpen(true)}
          >
            <FiPlus className="mr-2" /> Add Member
          </button>
        </div>

        <div className="space-y-6">
          {members.map((member) => (
            <div
              key={member.member_id}
              className="flex items-center bg-[#3a4656] rounded-lg px-6 py-6 mb-2 shadow relative"
            >
              <div className="flex items-center">
                <div className="w-14 h-14 rounded-full bg-teal-700 flex items-center justify-center mr-6">
                  <FiUser className="text-3xl text-white" />
                </div>
                <div>
                  <div className="text-lg font-bold">{member.name}</div>
                  <div className="flex items-center text-gray-300 text-sm">
                    <FiMail className="mr-1" />
                    {member.email}
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {member.domains.map((d, idx) => (
                      <span
                        key={idx}
                        className="bg-[#232f3e] text-gray-100 text-xs font-semibold px-3 py-1 rounded-md"
                      >
                        {d.domain.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <button
                className="ml-auto bg-red-500 hover:bg-red-600 text-white p-3 rounded-md transition flex items-center"
                onClick={() => handleDeleteMember(member.member_id)}
                title="Delete Member"
              >
                <FiTrash2 className="text-lg" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Add Member Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-[#232f3e] rounded-lg shadow-xl w-full max-w-md p-8 border border-gray-700">
            <h3 className="text-xl font-semibold mb-4">Add Member</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 rounded-md bg-[#0e1a24] border border-gray-600 text-white focus:outline-none"
                  value={newMember.name}
                  onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
                  placeholder="Enter name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  className="w-full px-3 py-2 rounded-md bg-[#0e1a24] border border-gray-600 text-white focus:outline-none"
                  value={newMember.email}
                  onChange={(e) => setNewMember({ ...newMember, email: e.target.value })}
                  placeholder="Enter email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Domains</label>
                <select
                  multiple
                  value={newMember.selectedDomains}
                  onChange={(e) => {
                    const selected = Array.from(e.target.selectedOptions, (option) => option.value);
                    setNewMember({ ...newMember, selectedDomains: selected });
                  }}
                  className="w-full h-40 px-3 py-2 rounded-md bg-[#0e1a24] border border-gray-600 text-white focus:outline-none"
                >
                  {domains.map((domain) => (
                    <option key={domain.domain_id} value={domain.domain_id}>
                      {domain.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex justify-end gap-2 mt-6">
              <button
                className="px-4 py-2 rounded-md text-gray-300 hover:bg-gray-700"
                onClick={() => {
                  setIsModalOpen(false);
                  setNewMember({ name: "", email: "", selectedDomains: [] });
                  setError("");
                }}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700"
                onClick={handleAddMember}
              >
                Add Member
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserManagement;
