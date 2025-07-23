import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { FiHome, FiUsers, FiFolder, FiMessageSquare, FiFileText, FiSettings, FiLogOut, FiGlobe } from "react-icons/fi";
import { useAdmin } from "../../hooks/useAdmin.js";

const DashboardOverview = () => {
  const {
    loading,
    error,
    dashboardStats,
    requests,
    fetchDashboardStats,
    fetchRequests,
    clearError
  } = useAdmin();

  useEffect(() => {
    fetchDashboardStats();
    fetchRequests();
  }, []);

  // Generate recent activities from requests
  const activities = requests.slice(0, 4).map((request, index) => ({
    title: `New service request`,
    description: `${request.service} - ${request.user?.name || 'Unknown User'}`,
    timestamp: new Date(request.created_at).toLocaleDateString()
  }));

  const quickActions = [
    "Add New Client",
    "Create Project",
    "Support Tickets",
    "Template"
  ];

  if (loading) {
    return (
      <div className="bg-[#0e1a24] text-white p-6">
        <div className="max-w-7xl mx-auto">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-700 rounded w-1/4 mb-6"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-[#1F2937] p-6 rounded-lg h-32"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#0e1a24] text-white p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-2">BolltLabs Admin</h1>

        {error && (
          <div className="mb-4 p-4 bg-red-500/20 border border-red-500/50 rounded-lg">
            <p className="text-red-300">{error}</p>
            <button
              onClick={clearError}
              className="mt-2 text-red-300 hover:text-red-100 underline"
            >
              Dismiss
            </button>
          </div>
        )}

        <div className="mb-10">
          <h2 className="text-xl font-semibold text-gray-300 mb-6">Dashboard Overview</h2>
          <p className="text-gray-400 mb-6">Monitor your BolltLabs business metrics and recent activity</p>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-[#1F2937] p-6 rounded-lg shadow-lg border border-gray-700/50">
              <h3 className="text-gray-400 font-medium mb-2">Total Clients</h3>
              <p className="text-3xl font-bold text-white mb-1">{dashboardStats.totalClients}</p>
              <p className="text-green-400 text-sm">Active clients</p>
            </div>
            <div className="bg-[#1F2937] p-6 rounded-lg shadow-lg border border-gray-700/50">
              <h3 className="text-gray-400 font-medium mb-2">Active Projects</h3>
              <p className="text-3xl font-bold text-white mb-1">{dashboardStats.activeProjects}</p>
              <p className="text-blue-400 text-sm">Currently running</p>
            </div>
            <div className="bg-[#1F2937] p-6 rounded-lg shadow-lg border border-gray-700/50">
              <h3 className="text-gray-400 font-medium mb-2">Team Members</h3>
              <p className="text-3xl font-bold text-white mb-1">{dashboardStats.teamMembers}</p>
              <p className="text-purple-400 text-sm">Available members</p>
            </div>
            <div className="bg-[#1F2937] p-6 rounded-lg shadow-lg border border-gray-700/50">
              <h3 className="text-gray-400 font-medium mb-2">Completed Projects</h3>
              <p className="text-3xl font-bold text-white mb-1">{dashboardStats.completedProjects}</p>
              <p className="text-green-400 text-sm">Successfully delivered</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <div className="bg-[#1F2937] p-6 rounded-lg shadow-lg border border-gray-700/50">
            <h2 className="text-xl font-semibold text-white mb-6">Quick Actions</h2>
            <ul className="space-y-3">
              {quickActions.map((action, index) => (
                <li key={index}>
                  <button className="w-full text-left px-4 py-2 bg-[#0e1a24] text-gray-300 rounded-md hover:bg-gray-700/50 transition-colors">
                    {action}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Activity */}
          <div className="bg-[#1F2937] p-6 rounded-lg shadow-lg lg:col-span-2 border border-gray-700/50">
            <h2 className="text-xl font-semibold text-white mb-6">Recent Activity</h2>
            {activities.length > 0 ? (
              <ul className="space-y-4">
                {activities.map((activity, idx) => (
                  <li key={idx} className={idx < activities.length - 1 ? "border-b border-gray-700/50 pb-4" : ""}>
                    <p className="font-medium text-white">{activity.title}</p>
                    <p className="text-gray-400">{activity.description}</p>
                    <p className="text-gray-500 text-sm">{activity.timestamp}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-400">No recent activity</p>
            )}
          </div>
        </div>

        {/* Legend checkbox */}
        {/* <div className="mt-6 flex items-center">
          <input type="checkbox" id="legend" className="mr-2 rounded bg-gray-700 border-gray-600 focus:ring-teal-500" />
          <label htmlFor="legend" className="text-gray-400">Legend</label>
        </div> */}
      </div>
    </div>
  );
};

const AdminDashboard = () => {
  return (
    <div className="flex min-h-screen bg-[#0e1a24]">
      {/* Sidebar */}
      <aside className="w-64 bg-[#1F2937] border-r border-gray-700/50 flex flex-col">
        <div className="h-16 flex items-center px-6 text-xl font-bold border-b border-gray-700/50 text-white">
          BolltLabs
        </div>
        <nav className="flex-1 px-4 py-6 space-y-1">
          <Link
            to="/admin"
            className="flex items-center px-4 py-3 rounded-lg bg-teal-500/10 text-teal-300 font-medium"
          >
            <FiHome className="mr-3" />
            <span>Dashboard</span>
          </Link>
          <Link
            to="/admin/users"
            className="flex items-center px-4 py-3 rounded-lg hover:bg-gray-700/50 text-gray-400 hover:text-white transition"
          >
            <FiUsers className="mr-3" />
            <span>User Management</span>
          </Link>
          <Link
            to="/admin/projects"
            className="flex items-center px-4 py-3 rounded-lg hover:bg-gray-700/50 text-gray-400 hover:text-white transition"
          >
            <FiFolder className="mr-3" />
            <span>Projects</span>
          </Link>

          <Link
            to="/admin/domains"
            className="flex items-center px-4 py-3 rounded-lg hover:bg-gray-700/50 text-gray-400 hover:text-white transition"
          >
            <FiGlobe className="mr-3" />
            <span>Domain Management</span>
          </Link>
          <Link
            to="/admin/service-requests"
            className="flex items-center px-4 py-3 rounded-lg hover:bg-gray-700/50 text-gray-400 hover:text-white transition"
          >
            <FiMessageSquare className="mr-3" />
            <span>Service Requests</span>
          </Link>
          <Link
            to="/admin/settings"
            className="flex items-center px-4 py-3 rounded-lg hover:bg-gray-700/50 text-gray-400 hover:text-white transition"
          >
            <FiSettings className="mr-3" />
            <span>Settings</span>
          </Link>
        </nav>
        <div className="px-4 py-4 border-t border-gray-700/50">
          <button className="flex items-center text-gray-400 hover:text-white w-full px-4 py-2 rounded-lg hover:bg-gray-700/50">
            <FiLogOut className="mr-3" />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <div className="flex justify-between items-center h-16 px-8 border-b border-gray-700/50 bg-[#1F2937]">
          <h2 className="text-lg font-semibold text-white">Dashboard</h2>
          <div className="flex items-center space-x-4">
            <span className="text-gray-400">Welcome, Admin</span>
            <div className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center text-white font-medium">
              A
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="flex-1 overflow-y-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export { DashboardOverview };
export default AdminDashboard;