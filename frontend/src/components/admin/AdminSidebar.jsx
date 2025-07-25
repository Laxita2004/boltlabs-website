import { Link, useLocation } from "react-router-dom";
import {
  FiHome,
  FiUsers,
  FiFolder,
  FiMessageSquare,
  FiSettings,
  FiLogOut,
  FiGlobe
} from "react-icons/fi";

const AdminSidebar = () => {
  const location = useLocation();

  const navLinks = [
    { to: "/admin", label: "Dashboard", icon: <FiHome /> },
    { to: "/admin/users", label: "Team Management", icon: <FiUsers /> },
    { to: "/admin/projects", label: "Projects", icon: <FiFolder /> },
    { to: "/admin/domains", label: "Domain Management", icon: <FiGlobe /> },
    { to: "/admin/service-requests", label: "Service Requests", icon: <FiMessageSquare /> },
    { to: "/admin/settings", label: "Settings", icon: <FiSettings /> }
  ];

  return (
    <aside className="w-64 bg-[#1F2937] border-r border-gray-700/50 flex flex-col">
      <div className="h-16 flex items-center px-6 text-xl font-bold border-b border-gray-700/50 text-white">
        BoltLabs
      </div>

      <nav className="flex-1 px-4 py-6 space-y-1">
        {navLinks.map((link) => {
          const isActive = location.pathname === link.to;
          return (
            <Link
              key={link.to}
              to={link.to}
              className={`flex items-center px-4 py-3 rounded-lg transition ${
                isActive
                  ? "bg-teal-500/10 text-teal-300 font-medium"
                  : "text-gray-400 hover:text-white hover:bg-gray-700/50"
              }`}
            >
              <span className="mr-3">{link.icon}</span>
              <span>{link.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="px-4 py-4 border-t border-gray-700/50">
        <button className="flex items-center text-gray-400 hover:text-white w-full px-4 py-2 rounded-lg hover:bg-gray-700/50">
          <FiLogOut className="mr-3" />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default AdminSidebar;