import React, { useState } from "react";
import { FiSearch, FiPlus, FiChevronDown, FiMoreVertical, FiEdit2, FiTrash2 } from "react-icons/fi";

const ProjectManagement = () => {
  // Sample initial project data
  const initialProjects = [
    {
      id: 1,
      name: "E-commerce Website",
      client: "TechStart Solutions",
      progress: 65,
      status: "in-progress",
      team: "3/5",
      milestones: 2,
      deadline: "2024-02-15",
      budget: "£15,000"
    },
    {
      id: 2,
      name: "Restaurant Website",
      client: "ABC Restaurant Chain",
      progress: 100,
      status: "completed",
      team: "4/4",
      milestones: 3,
      deadline: "2024-01-30",
      budget: "£6,500"
    },
    {
      id: 3,
      name: "Marketing Landing Page",
      client: "Digital Marketing Pro",
      progress: 20,
      status: "not-started",
      team: "1/6",
      milestones: 1,
      deadline: "2024-03-01",
      budget: "£6,000"
    }
  ];

  // State management
  const [projects, setProjects] = useState(initialProjects);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newProject, setNewProject] = useState({
    name: "",
    client: "",
    progress: 0,
    status: "not-started",
    team: "",
    milestones: 0,
    deadline: "",
    budget: ""
  });

  // Filter projects based on search and status
  const filteredProjects = projects.filter(project => {
    const matchesSearch = 
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.client.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === "all" || project.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  // Handle adding new project
  const handleAddProject = () => {
    const newId = Math.max(...projects.map(p => p.id), 0) + 1;
    setProjects([...projects, { ...newProject, id: newId }]);
    setIsModalOpen(false);
    setNewProject({
      name: "",
      client: "",
      progress: 0,
      status: "not-started",
      team: "",
      milestones: 0,
      deadline: "",
      budget: ""
    });
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProject(prev => ({ ...prev, [name]: value }));
  };

  // Handle status change for existing project
  const handleStatusChange = (id, newStatus) => {
    setProjects(projects.map(project => 
      project.id === id ? { ...project, status: newStatus } : project
    ));
  };

  // Handle delete project
  const handleDeleteProject = (id) => {
    setProjects(projects.filter(project => project.id !== id));
  };

  // Progress bar component
  const ProgressBar = ({ progress }) => {
    return (
      <div className="w-full bg-gray-700 rounded-full h-2.5">
        <div 
          className={`h-2.5 rounded-full ${
            progress === 100 ? 'bg-green-500' : 
            progress > 50 ? 'bg-teal-500' : 
            'bg-yellow-500'
          }`} 
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    );
  };

  return (
    <div className="p-6 bg-[#0e1a24] text-white min-h-screen">
      <h1 className="text-3xl font-bold text-white mb-2">BoltLabs Admin</h1>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-300 mb-4">Project Management</h2>
        <p className="text-gray-400">Manage your projects and track progress</p>
      </div>
      
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium text-gray-300">Projects ({filteredProjects.length})</h3>
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors"
          >
            <FiPlus className="mr-2" />
            Add Project
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
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 w-full border border-gray-600 rounded-md bg-[#1F2937] text-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            />
          </div>
          
          <div className="relative">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="appearance-none pl-3 pr-8 py-2 border border-gray-600 rounded-md bg-[#1F2937] text-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            >
              <option value="all" className="bg-[#1F2937]">All Status</option>
              <option value="not-started" className="bg-[#1F2937]">Not Started</option>
              <option value="in-progress" className="bg-[#1F2937]">In Progress</option>
              <option value="completed" className="bg-[#1F2937]">Completed</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <FiChevronDown className="text-gray-500" />
            </div>
          </div>
        </div>
        
        {/* Projects List */}
        <div className="space-y-6">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-[#1F2937] rounded-lg shadow-lg overflow-hidden border border-gray-700/50">
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-bold text-white">{project.name}</h3>
                    <p className="text-gray-400">{project.client}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      project.status === "completed" 
                        ? "bg-green-900/50 text-green-300" 
                        : project.status === "in-progress"
                          ? "bg-teal-900/50 text-teal-300"
                          : "bg-gray-700 text-gray-300"
                    }`}>
                      {project.status.replace("-", " ")}
                    </span>
                    <button className="text-gray-500 hover:text-gray-300">
                      <FiMoreVertical />
                    </button>
                  </div>
                </div>
                
                <div className="mt-4">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-gray-300">Progress: {project.progress}%</span>
                    <span className="text-sm text-gray-400">{project.team} members</span>
                  </div>
                  <ProgressBar progress={project.progress} />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 text-sm">
                  <div>
                    <p className="text-gray-400">Milestones</p>
                    <p className="font-medium text-white">{project.milestones}</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Deadline</p>
                    <p className="font-medium text-white">{project.deadline}</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Budget</p>
                    <p className="font-medium text-white">{project.budget}</p>
                  </div>
                </div>
                
                <div className="mt-4 flex justify-end space-x-2">
                  <button 
                    onClick={() => handleStatusChange(project.id, "in-progress")}
                    className="px-3 py-1 text-sm bg-gray-700/50 text-gray-300 rounded-md hover:bg-gray-600/50"
                  >
                    <FiEdit2 className="inline mr-1" /> Edit
                  </button>
                  <button
                    onClick={() => handleDeleteProject(project.id)}
                    className="px-3 py-1 text-sm bg-red-900/50 text-red-300 rounded-md hover:bg-red-800/50"
                  >
                    <FiTrash2 className="inline mr-1" /> Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add Project Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
          <div className="bg-[#1F2937] rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto border border-gray-700/50">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-white">Add New Project</h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-400 hover:text-white"
                >
                  <FiX className="h-6 w-6" />
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Project Name</label>
                  <input
                    type="text"
                    name="name"
                    value={newProject.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-600 rounded-md bg-[#0e1a24] text-white focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Client</label>
                  <input
                    type="text"
                    name="client"
                    value={newProject.client}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-600 rounded-md bg-[#0e1a24] text-white focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Team Size</label>
                    <input
                      type="text"
                      name="team"
                      value={newProject.team}
                      onChange={handleInputChange}
                      placeholder="e.g. 3/5"
                      className="w-full px-3 py-2 border border-gray-600 rounded-md bg-[#0e1a24] text-white focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Budget</label>
                    <input
                      type="text"
                      name="budget"
                      value={newProject.budget}
                      onChange={handleInputChange}
                      placeholder="e.g. £10,000"
                      className="w-full px-3 py-2 border border-gray-600 rounded-md bg-[#0e1a24] text-white focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Deadline</label>
                  <input
                    type="date"
                    name="deadline"
                    value={newProject.deadline}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-600 rounded-md bg-[#0e1a24] text-white focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                  />
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
                onClick={handleAddProject}
                className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700"
              >
                Add Project
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectManagement;