import React, { useState, useEffect } from "react";
import { FiUser, FiMail, FiPlus, FiTrash2 } from "react-icons/fi";
import { adminAPI } from "../../services/api";

const TeamManagement = () => {
  const [members, setMembers] = useState([]);
  const [domains, setDomains] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState("");

  const [newMember, setNewMember] = useState({
    name: "",
    email: "",
    empId: "",
    pic: "",
    description: "",
    skillTags: "",
    password: "",
    selectedDomains: []
  });

  useEffect(() => {
    fetchMembers();
    fetchDomains();
  }, []);

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "auto";
  }, [isModalOpen]);

  const fetchMembers = async () => {
    try {
      const res = await adminAPI.getMembers();
      setMembers(res.data || []);
    } catch {
      setError("Failed to fetch members");
    }
  };

  const fetchDomains = async () => {
    try {
      const res = await adminAPI.getDomains();
      setDomains(res.data || []);
    } catch {
      setError("Failed to fetch domains");
    }
  };

  const handleAddMember = async () => {
    const { name, email, password, selectedDomains } = newMember;
    if (!name || !email || !password || selectedDomains.length === 0) {
      setError("Name, email, password, and at least one domain are required.");
      return;
    }

    try {
      const res = await adminAPI.createMember({
        name: newMember.name,
        email: newMember.email,
        empId: newMember.empId,
        pic: newMember.pic,
        description: newMember.description,
        skillTags: newMember.skillTags.split(',').map(tag => tag.trim()),
        password: newMember.password,
        domain_ids: newMember.selectedDomains
      });

      setMembers(prev => [...prev, res.data]);
      setIsModalOpen(false);
      setNewMember({
        name: "", email: "", empId: "", pic: "", description: "",
        skillTags: "", password: "", selectedDomains: []
      });
      setError("");
    } catch (err) {
      setError(err?.response?.data?.error || "Failed to add member");
    }
  };

  const handleDeleteMember = async (id) => {
    try {
      await adminAPI.deleteMember(id);
      setMembers(prev => prev.filter(m => m.member_id !== id));
    } catch {
      setError("Failed to delete member");
    }
  };

  return (
    <div className="min-h-screen max-h-screen overflow-y-auto bg-[#0e1a24] text-white px-4 py-6 sm:px-8 sm:py-8">
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
                {member.pic ? (
                  <img src={member.pic} alt="Profile" className="w-14 h-14 rounded-full object-cover mr-6" />
                ) : (
                  <div className="w-14 h-14 rounded-full bg-teal-700 flex items-center justify-center mr-6">
                    <FiUser className="text-3xl text-white" />
                  </div>
                )}
                <div>
                  <div className="text-lg font-bold">{member.name}</div>
                  <div className="flex items-center text-gray-300 text-sm">
                    <FiMail className="mr-1" />
                    {member.email}
                  </div>
                  {member.empId && <div className="text-xs text-gray-400">Emp ID: {member.empId}</div>}
                  {member.description && <div className="text-sm text-gray-200 mt-1">{member.description}</div>}
                  {member.skillTags?.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {member.skillTags.map((tag, idx) => (
                        <span key={idx} className="bg-teal-800 text-white text-xs font-semibold px-2 py-1 rounded-md">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  <div className="flex flex-wrap gap-2 mt-2">
                    {member.domains.map((d, idx) => (
                      <span key={idx} className="bg-[#232f3e] text-gray-100 text-xs font-semibold px-3 py-1 rounded-md">
                        {d.domain.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <button
                className="ml-auto bg-red-500 hover:bg-red-600 text-white p-3 rounded-md transition flex items-center"
                onClick={() => handleDeleteMember(member.member_id)}
              >
                <FiTrash2 className="text-lg" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 overflow-y-auto p-4">
          <div className="bg-[#232f3e] rounded-lg shadow-xl w-full max-w-md p-6 border border-gray-700 max-h-[90vh] overflow-y-auto">
            <h3 className="text-xl font-semibold mb-4">Add Member</h3>
            <div className="space-y-4">
              {[
                { label: "Name", key: "name", placeholder: "Enter name" },
                { label: "Email", key: "email", placeholder: "Enter email" },
                { label: "Password", key: "password", placeholder: "Enter password", type: "password" },
                { label: "Employee ID", key: "empId", placeholder: "EMP001" },
                { label: "Picture URL", key: "pic", placeholder: "https://..." },
                { label: "Description", key: "description", placeholder: "Short bio" },
                { label: "Skill Tags (comma-separated)", key: "skillTags", placeholder: "React, Node, SQL" }
              ].map(({ label, key, placeholder, type = "text" }) => (
                <div key={key}>
                  <label className="block text-sm font-medium mb-1">{label}</label>
                  <input
                    type={type}
                    className="w-full px-3 py-2 rounded-md bg-[#0e1a24] border border-gray-600 text-white focus:outline-none text-sm"
                    value={newMember[key]}
                    onChange={(e) => setNewMember({ ...newMember, [key]: e.target.value })}
                    placeholder={placeholder}
                  />
                </div>
              ))}
              <div>
                <label className="block text-sm font-medium mb-1">Domains</label>
                <select
                  multiple
                  value={newMember.selectedDomains}
                  onChange={(e) => {
                    const selected = Array.from(e.target.selectedOptions, (option) => option.value);
                    setNewMember({ ...newMember, selectedDomains: selected });
                  }}
                  className="w-full px-3 py-2 rounded-md bg-[#0e1a24] border border-gray-600 text-white focus:outline-none text-sm"
                  style={{ height: "8rem" }}
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
                  setNewMember({
                    name: "", email: "", empId: "", pic: "", description: "",
                    skillTags: "", password: "", selectedDomains: []
                  });
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

export default TeamManagement;
