import React, { useState } from "react";
import { FiUser, FiMail, FiPlus, FiTrash2 } from "react-icons/fi";

const initialMembers = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    tags: ["Web Development", "Mobile Apps"],
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    tags: ["Digital Marketing"],
  },
];

const UserManagement = () => {
  const [members, setMembers] = useState(initialMembers);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newMember, setNewMember] = useState({ name: "", email: "", tags: "" });

  const handleAddMember = () => {
    if (!newMember.name || !newMember.email) return;
    setMembers([
      ...members,
      {
        id: Math.max(0, ...members.map((m) => m.id)) + 1,
        name: newMember.name,
        email: newMember.email,
        tags: newMember.tags.split(",").map((t) => t.trim()).filter(Boolean),
      },
    ]);
    setNewMember({ name: "", email: "", tags: "" });
    setIsModalOpen(false);
  };

  const handleDeleteMember = (id) => {
    setMembers(members.filter((m) => m.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#0e1a24] text-white p-8">
      <h1 className="text-3xl font-bold mb-1">User Management</h1>
      <p className="mb-6 text-gray-300">Manage team members and their domain access</p>
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
              key={member.id}
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
                    {member.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-[#232f3e] text-gray-100 text-xs font-semibold px-3 py-1 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <button
                className="ml-auto bg-red-500 hover:bg-red-600 text-white p-3 rounded-md transition flex items-center"
                onClick={() => handleDeleteMember(member.id)}
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
                <label className="block text-sm font-medium mb-1">Tags <span className="text-xs text-gray-400">(comma separated)</span></label>
                <input
                  type="text"
                  className="w-full px-3 py-2 rounded-md bg-[#0e1a24] border border-gray-600 text-white focus:outline-none"
                  value={newMember.tags}
                  onChange={(e) => setNewMember({ ...newMember, tags: e.target.value })}
                  placeholder="e.g. Web Development, Mobile Apps"
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