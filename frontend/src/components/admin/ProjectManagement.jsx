import React, { useState } from "react";
import { FiSearch, FiPlus } from "react-icons/fi";

const initialProjects = [
  {
    id: 1,
    name: "E-commerce Website Development",
    client: "RedStart Solutions",
    domain: "Web Development",
    status: "Active",
    team: ["John Doe", "Alice Johnson"],
    budget: 7500,
    payment: "Payment Pending",
  },
  {
    id: 2,
    name: "Mobile App for iOS",
    client: "TechCorp Inc",
    domain: "Mobile Apps",
    status: "Active",
    team: ["John Doe"],
    budget: 8000,
    payment: null,
  },
  {
    id: 3,
    name: "SEO Optimization Package",
    client: "Digital Marketing Pro",
    domain: "Digital Marketing",
    status: "Inactive",
    team: ["Jane Smith"],
    budget: 1500,
    payment: "Payment Pending",
  },
];

const allDomains = ["All Domains", "Web Development", "Mobile Apps", "Digital Marketing"];
const allStatus = ["All Status", "Active", "Inactive"];

const ProjectManagement = () => {
  const [projects, setProjects] = useState(initialProjects);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All Status");
  const [domain, setDomain] = useState("All Domains");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newProject, setNewProject] = useState({
    name: "",
    client: "",
    domain: "Web Development",
    status: "Active",
    team: "",
    budget: "",
    payment: "",
  });

  const filteredProjects = projects.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.client.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = status === "All Status" || p.status === status;
    const matchesDomain = domain === "All Domains" || p.domain === domain;
    return matchesSearch && matchesStatus && matchesDomain;
  });

  const handleAddProject = () => {
    if (!newProject.name || !newProject.client || !newProject.domain) return;
    setProjects([
      ...projects,
      {
        ...newProject,
        id: Math.max(0, ...projects.map((p) => p.id)) + 1,
        team: newProject.team.split(",").map((t) => t.trim()).filter(Boolean),
        budget: Number(newProject.budget),
        payment: newProject.payment || null,
      },
    ]);
    setNewProject({
      name: "",
      client: "",
      domain: "Web Development",
      status: "Active",
      team: "",
      budget: "",
      payment: "",
    });
    setIsModalOpen(false);
  };

  const handleDeleteProject = (id) => {
    setProjects(projects.filter((p) => p.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#0e1a24] text-white p-8">
      <h1 className="text-3xl font-bold mb-1">Projects</h1>
      <p className="mb-6 text-gray-300">Manage active services and project assignments</p>
      <div className="bg-[#232f3e] rounded-xl p-6 shadow mb-8">
        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
          <div className="relative flex-1">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              className="w-full pl-10 pr-4 py-2 rounded-md bg-[#2c384a] border border-gray-600 text-white focus:outline-none"
              placeholder="Search projects or clients..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <select
            className="px-4 py-2 rounded-md bg-[#2c384a] border border-gray-600 text-white focus:outline-none"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            {allStatus.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
          <select
            className="px-4 py-2 rounded-md bg-[#2c384a] border border-gray-600 text-white focus:outline-none"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
          >
            {allDomains.map((d) => (
              <option key={d}>{d}</option>
            ))}
          </select>
          <button
            className="flex items-center bg-teal-600 hover:bg-teal-700 text-white font-semibold px-5 py-2 rounded-md transition"
            onClick={() => setIsModalOpen(true)}
          >
            <FiPlus className="mr-2" /> Add Project
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-[#2c384a] rounded-lg p-6 shadow relative flex flex-col"
            >
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl font-bold">{project.name}</h2>
                <span
                  className={`px-3 py-1 text-xs font-semibold rounded-full ${
                    project.status === "Active"
                      ? "bg-green-700 text-green-200"
                      : "bg-gray-600 text-gray-200"
                  }`}
                >
                  {project.status}
                </span>
              </div>
              <div className="flex items-center gap-4 text-gray-300 text-sm mb-2">
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 15c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  {project.client}
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 20l9-5-9-5-9 5 9 5z" /></svg>
                  {project.domain}
                </span>
              </div>
              <div className="font-semibold mb-2">Team Members</div>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.team.map((member, idx) => (
                  <span
                    key={idx}
                    className="bg-teal-700 text-white text-xs font-semibold px-3 py-1 rounded-md"
                  >
                    {member}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between border-t border-gray-600 pt-4 mt-auto">
                <div className="flex items-center gap-2 text-lg font-semibold">
                  <span>$</span>
                  <span>{project.budget.toLocaleString()}</span>
                </div>
                {project.payment && (
                  <span className="px-3 py-1 text-xs font-semibold rounded-md border border-yellow-400 text-yellow-300 bg-transparent">
                    {project.payment}
                  </span>
                )}
                <button
                  className="ml-2 bg-red-500 hover:bg-red-600 text-white p-2 rounded-md transition"
                  onClick={() => handleDeleteProject(project.id)}
                  title="Delete Project"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Add Project Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-[#232f3e] rounded-lg shadow-xl w-full max-w-md p-8 border border-gray-700">
            <h3 className="text-xl font-semibold mb-4">Add Project</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Project Name</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 rounded-md bg-[#0e1a24] border border-gray-600 text-white focus:outline-none"
                  value={newProject.name}
                  onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
                  placeholder="Enter project name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Client</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 rounded-md bg-[#0e1a24] border border-gray-600 text-white focus:outline-none"
                  value={newProject.client}
                  onChange={(e) => setNewProject({ ...newProject, client: e.target.value })}
                  placeholder="Enter client name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Domain</label>
                <select
                  className="w-full px-3 py-2 rounded-md bg-[#0e1a24] border border-gray-600 text-white focus:outline-none"
                  value={newProject.domain}
                  onChange={(e) => setNewProject({ ...newProject, domain: e.target.value })}
                >
                  {allDomains.slice(1).map((d) => (
                    <option key={d}>{d}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Status</label>
                <select
                  className="w-full px-3 py-2 rounded-md bg-[#0e1a24] border border-gray-600 text-white focus:outline-none"
                  value={newProject.status}
                  onChange={(e) => setNewProject({ ...newProject, status: e.target.value })}
                >
                  {allStatus.slice(1).map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Team Members <span className="text-xs text-gray-400">(comma separated)</span></label>
                <input
                  type="text"
                  className="w-full px-3 py-2 rounded-md bg-[#0e1a24] border border-gray-600 text-white focus:outline-none"
                  value={newProject.team}
                  onChange={(e) => setNewProject({ ...newProject, team: e.target.value })}
                  placeholder="e.g. John Doe, Alice Johnson"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Budget ($)</label>
                <input
                  type="number"
                  className="w-full px-3 py-2 rounded-md bg-[#0e1a24] border border-gray-600 text-white focus:outline-none"
                  value={newProject.budget}
                  onChange={(e) => setNewProject({ ...newProject, budget: e.target.value })}
                  placeholder="Enter budget"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Payment Status <span className="text-xs text-gray-400">(optional)</span></label>
                <input
                  type="text"
                  className="w-full px-3 py-2 rounded-md bg-[#0e1a24] border border-gray-600 text-white focus:outline-none"
                  value={newProject.payment}
                  onChange={(e) => setNewProject({ ...newProject, payment: e.target.value })}
                  placeholder="e.g. Payment Pending"
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
                onClick={handleAddProject}
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