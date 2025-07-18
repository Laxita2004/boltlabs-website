import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 bg-[#1F2937] border-r border-gray-700/50">
      <div className="p-4 border-b border-gray-700/50">
        <h1 className="text-xl font-bold text-white">Settings</h1>
        <p className="text-sm text-gray-400">Manage your admin panel configuration</p>
      </div>
      
      <nav className="p-4">
        {/* Only main sidebar item for Service Requests, not in settings/company */}
        {/* If you want it as a main item, keep this block. If not, remove it. */}
        {/* <ul className="mb-6 space-y-1">
          <li>
            <NavLink 
              to="/admin/service-requests"
              className={({ isActive }) => 
                `block px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-teal-500/10 text-teal-300' : 'text-gray-400 hover:bg-gray-700/50 hover:text-white'}`
              }
            >
              Service Requests
            </NavLink>
          </li>
        </ul> */}
        <div className="mb-6">
          <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Company</h2>
          <ul className="space-y-1">
            <li>
              <NavLink 
                to="company"
                className={({ isActive }) => 
                  `block px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-teal-500/10 text-teal-300' : 'text-gray-400 hover:bg-gray-700/50 hover:text-white'}`
                }
              >
                Company Information
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="profile"
                className={({ isActive }) => 
                  `block px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-teal-500/10 text-teal-300' : 'text-gray-400 hover:bg-gray-700/50 hover:text-white'}`
                }
              >
                User Profile
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="notifications"
                className={({ isActive }) => 
                  `block px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-teal-500/10 text-teal-300' : 'text-gray-400 hover:bg-gray-700/50 hover:text-white'}`
                }
              >
                Notifications
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="security"
                className={({ isActive }) => 
                  `block px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-teal-500/10 text-teal-300' : 'text-gray-400 hover:bg-gray-700/50 hover:text-white'}`
                }
              >
                Security
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="appearance"
                className={({ isActive }) => 
                  `block px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-teal-500/10 text-teal-300' : 'text-gray-400 hover:bg-gray-700/50 hover:text-white'}`
                }
              >
                Appearance
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="api"
                className={({ isActive }) => 
                  `block px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-teal-500/10 text-teal-300' : 'text-gray-400 hover:bg-gray-700/50 hover:text-white'}`
                }
              >
                API & Integrations
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="users"
                className={({ isActive }) => 
                  `block px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-teal-500/10 text-teal-300' : 'text-gray-400 hover:bg-gray-700/50 hover:text-white'}`
                }
              >
                User Management
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;