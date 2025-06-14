
import React from "react";
import { Link, Outlet } from "react-router-dom";
import { FiHome, FiUsers, FiFolder, FiMessageSquare, FiFileText, FiSettings, FiLogOut } from "react-icons/fi";
import { FiGlobe } from 'react-icons/fi';

const stats = [
  {
    label: "Total Clients",
    value: "89",
    change: "+155 from last month",
  },
  {
    label: "Action Projects",
    value: "24",
    change: "+76 from last month",
  },
  {
    label: "Team Members",
    value: "-",
    change: "+55 from last month",
  },
  {
    label: "Complaint Projects",
    value: "342",
    change: "+195 from last month",
  },
];

const activities = [
  {
    title: "New client enhanced",
    description: "RedStart Solutions",
  },
  {
    title: "Project milestone completed",
    description: "E-commerce Site for AEC Corp",
  },
  {
    title: "New support ticket",
    description: "Digital Marketing Pro",
  },
  {
    title: "Template deployed",
    description: "Restaurant Website",
  },
];

const quickActions = [
  "Add New Client",
  "Create Project",
  "Support Tickets",
  "Template"
];

const DashboardOverview = () => (
  <div className="min-h-screen bg-gray-50 p-6">
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">BolltLabs Admin</h1>
      
      <div className="mb-10">
        <h2 className="text-xl font-semibold text-gray-700 mb-6">Dashboard Overview</h2>
        <p className="text-gray-500 mb-6">Monitor your BolltLabs business metrics and recent activity</p>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-gray-500 font-medium mb-2">{stat.label}</h3>
              <p className="text-3xl font-bold text-gray-800 mb-1">{stat.value}</p>
              <p className="text-green-500 text-sm">{stat.change}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Quick Actions */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-gray-700 mb-6">Quick Actions</h2>
          <ul className="space-y-3">
            {quickActions.map((action, index) => (
              <li key={index}>
                <button className="w-full text-left px-4 py-2 bg-gray-50 text-gray-600 rounded-md hover:bg-gray-100 transition-colors">
                  {action}
                </button>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Recent Activity */}
        <div className="bg-white p-6 rounded-lg shadow-sm lg:col-span-2">
          <h2 className="text-xl font-semibold text-gray-700 mb-6">Recent Activity</h2>
          <ul className="space-y-4">
            {activities.map((activity, idx) => (
              <li key={idx} className={idx < activities.length - 1 ? "border-b pb-4" : ""}>
                <p className="font-medium text-gray-800">{activity.title}</p>
                <p className="text-gray-500">{activity.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      {/* Legend checkbox */}
      <div className="mt-6 flex items-center">
        <input type="checkbox" id="legend" className="mr-2" />
        <label htmlFor="legend" className="text-gray-500">Legend</label>
      </div>
    </div>
  </div>
);

const AdminDashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="h-16 flex items-center px-6 text-xl font-bold border-b border-gray-200">
          BolltLabs
        </div>
        <nav className="flex-1 px-4 py-6 space-y-1">
          <Link 
            to="/admin" 
            className="flex items-center px-4 py-3 rounded-lg bg-blue-50 text-blue-600 font-medium"
          >
            <FiHome className="mr-3" />
            <span>Dashboard</span>
          </Link>
          <Link 
            to="/admin/users" 
            className="flex items-center px-4 py-3 rounded-lg hover:bg-gray-100 text-gray-600 transition"
          >
            <FiUsers className="mr-3" />
            <span>User Management</span>
          </Link>
          <Link 
            to="/admin/clients" 
            className="flex items-center px-4 py-3 rounded-lg hover:bg-gray-100 text-gray-600 transition"
          >
            <FiUsers className="mr-3" />
            <span>Clients</span>
          </Link>
          <Link 
            to="/admin/projects" 
            className="flex items-center px-4 py-3 rounded-lg hover:bg-gray-100 text-gray-600 transition"
          >
            <FiFolder className="mr-3" />
            <span>Projects</span>
          </Link>
          
          <Link 
             to="/admin/domains" 
             className="flex items-center px-4 py-3 rounded-lg hover:bg-gray-100 text-gray-600 transition"
          >
             <FiGlobe className="mr-3" />
             <span>Domain Management</span>
          </Link>

          {/* <Link 
            to="/admin/support" 
            className="flex items-center px-4 py-3 rounded-lg hover:bg-gray-100 text-gray-600 transition"
          >
            <FiMessageSquare className="mr-3" />
            <span>Support</span>
          </Link>
          <Link 
            to="/admin/templates" 
            className="flex items-center px-4 py-3 rounded-lg hover:bg-gray-100 text-gray-600 transition"
          >
            <FiFileText className="mr-3" />
            <span>Templates</span>
          </Link> */}
          <Link 
            to="/admin/settings" 
            className="flex items-center px-4 py-3 rounded-lg hover:bg-gray-100 text-gray-600 transition"
          >
            <FiSettings className="mr-3" />
            <span>Settings</span>
          </Link>
        </nav>
        <div className="px-4 py-4 border-t border-gray-200">
          <button className="flex items-center text-gray-600 hover:text-gray-900 w-full px-4 py-2 rounded-lg hover:bg-gray-100">
            <FiLogOut className="mr-3" />
            <span>Logout</span>
          </button>
        </div>
      </aside>
      
      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <div className="flex justify-between items-center h-16 px-8 border-b border-gray-200 bg-white">
          <h2 className="text-lg font-semibold text-gray-800">Dashboard</h2>
          <div className="flex items-center space-x-4">
            <span className="text-gray-600">Welcome, Admin</span>
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-medium">
              A
            </div>
          </div>
        </div>
        
        {/* Dashboard Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export { DashboardOverview };
export default AdminDashboard;

