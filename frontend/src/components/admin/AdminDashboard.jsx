import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useAdmin } from "../../hooks/useAdmin.js";
import AdminSidebar from "./adminSidebar.jsx";

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

  const navigate = useNavigate();

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
    {
      label: "Add New Client",
      onClick: () => navigate("/admin/add-client")
    }
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
        <h1 className="text-3xl font-bold text-white mb-2">BoltLabs Admin</h1>

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
          <p className="text-gray-400 mb-6">Monitor your BoltLabs business metrics and recent activity</p>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-[#1F2937] p-6 rounded-lg shadow-lg border border-gray-700/50">
              <h3 className="text-gray-400 font-medium mb-2">Total Domains</h3>
              <p className="text-3xl font-bold text-white mb-1">{dashboardStats.totalClients}</p>
              {/* <p className="text-green-400 text-sm">Active clients</p> */}
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
                  <button
                    className="w-full text-left px-4 py-2 bg-[#0e1a24] text-gray-300 rounded-md hover:bg-gray-700/50 transition-colors"
                    onClick={action.onClick}
                  >
                    {action.label}
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
      </div>
    </div>
  );
};

const AdminDashboard = () => {
  return (
    <div className="flex min-h-screen bg-[#0e1a24]">
      <AdminSidebar/>

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