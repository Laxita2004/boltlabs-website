import React, { useState } from "react";
import { FiSearch, FiUser, FiUserPlus, FiMoreVertical, FiX, FiEdit2, FiChevronDown } from "react-icons/fi";

const UserManagement = () => {
  // Sample initial user data
  const initialUsers = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      role: "admin",
      status: "active",
      lastLogin: "2024-01-15"
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      role: "moderator",
      status: "active",
      lastLogin: "2024-01-14"
    },
    {
      id: 3,
      name: "Bob Wilson",
      email: "bob@example.com",
      role: "user",
      status: "inactive",
      lastLogin: "2024-01-10"
    },
    {
      id: 4,
      name: "Alice Brown",
      email: "alice@example.com",
      role: "user",
      status: "active",
      lastLogin: "2024-01-13"
    }
  ];

  // State management
  const [users, setUsers] = useState(initialUsers);
  const [searchTerm, setSearchTerm] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    role: "user",
    status: "active"
  });

  // Filter users based on search and role
  const filteredUsers = users.filter(user => {
    const matchesSearch = 
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesRole = roleFilter === "all" || user.role === roleFilter;
    
    return matchesSearch && matchesRole;
  });

  // Handle adding new user
  const handleAddUser = () => {
    const newId = Math.max(...users.map(u => u.id), 0) + 1;
    setUsers([...users, { ...newUser, id: newId, lastLogin: new Date().toISOString().split('T')[0] }]);
    setIsModalOpen(false);
    setNewUser({
      name: "",
      email: "",
      role: "user",
      status: "active"
    });
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser(prev => ({ ...prev, [name]: value }));
  };

  // Handle status change for existing user
  const handleStatusChange = (id, newStatus) => {
    setUsers(users.map(user => 
      user.id === id ? { ...user, status: newStatus } : user
    ));
  };

  // Handle delete user
  const handleDeleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div className="p-6 bg-[#0e1a24] text-white min-h-screen">
      <h1 className="text-3xl font-bold text-white mb-2">BoltLabs Admin</h1>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-300 mb-4">User Management</h2>
        <p className="text-gray-400">Manage team members and their permissions</p>
      </div>
      
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium text-gray-300">Users ({filteredUsers.length})</h3>
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors"
          >
            <FiUserPlus className="mr-2" />
            Add User
          </button>
        </div>
        
        {/* Search and Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className="text-gray-500" />
            </div>
            <input
              type="text"
              placeholder="Search users..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 w-full border border-gray-600 rounded-md bg-[#1F2937] text-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            />
          </div>
          
          <div className="relative">
            <select
              value={roleFilter}
              onChange={(e) => setRoleFilter(e.target.value)}
              className="appearance-none pl-3 pr-8 py-2 border border-gray-600 rounded-md bg-[#1F2937] text-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            >
              <option value="all" className="bg-[#1F2937]">All Roles</option>
              <option value="admin" className="bg-[#1F2937]">Admin</option>
              <option value="moderator" className="bg-[#1F2937]">Moderator</option>
              <option value="user" className="bg-[#1F2937]">User</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <FiChevronDown className="text-gray-500" />
            </div>
          </div>
        </div>
        
        {/* Users Table */}
        <div className="overflow-x-auto bg-[#1F2937] rounded-lg shadow-lg border border-gray-700/50">
          <table className="min-w-full divide-y divide-gray-700/50">
            <thead className="bg-gray-800/50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Name</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Email</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Role</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Last Login</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-[#1F2937] divide-y divide-gray-700/50">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-gray-800/50">
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-white">
                    {user.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-400">
                    {user.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      user.role === "admin" 
                        ? "bg-purple-900/50 text-purple-300" 
                        : user.role === "moderator"
                          ? "bg-blue-900/50 text-blue-300"
                          : "bg-gray-700 text-gray-300"
                    }`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      user.status === "active" 
                        ? "bg-green-900/50 text-green-300" 
                        : "bg-gray-700 text-gray-300"
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-400">
                    {user.lastLogin}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center justify-end space-x-2">
                      <button 
                        onClick={() => handleStatusChange(user.id, user.status === 'active' ? 'inactive' : 'active')}
                        className={user.status === 'active' ? "text-yellow-400 hover:text-yellow-300" : "text-green-400 hover:text-green-300"}
                        title={user.status === 'active' ? "Deactivate user" : "Activate user"}
                      >
                        <FiEdit2 />
                      </button>
                      <button
                        onClick={() => handleDeleteUser(user.id)}
                        className="text-red-500 hover:text-red-400"
                        title="Delete user"
                      >
                        <FiX />
                      </button>
                      <button className="text-gray-500 hover:text-gray-300">
                        <FiMoreVertical />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add User Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
          <div className="bg-[#1F2937] rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto border border-gray-700/50">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-white">Add New User</h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-400 hover:text-white"
                >
                  <FiX className="h-6 w-6" />
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={newUser.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-600 rounded-md bg-[#0e1a24] text-white focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={newUser.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-600 rounded-md bg-[#0e1a24] text-white focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Role</label>
                  <select
                    name="role"
                    value={newUser.role}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-600 rounded-md bg-[#0e1a24] text-white focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                  >
                    <option value="user" className="bg-[#0e1a24]">User</option>
                    <option value="moderator" className="bg-[#0e1a24]">Moderator</option>
                    <option value="admin" className="bg-[#0e1a24]">Admin</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="px-6 py-4 bg-gray-800/50 flex justify-end space-x-2">
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 rounded-md text-gray-300 hover:bg-gray-700/50"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleAddUser}
                className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700"
              >
                Add User
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserManagement;