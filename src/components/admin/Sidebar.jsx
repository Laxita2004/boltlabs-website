import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 bg-white shadow-md">
      <div className="p-4 border-b">
        <h1 className="text-xl font-bold text-gray-800">Settings</h1>
        <p className="text-sm text-gray-600">Manage your admin panel configuration</p>
      </div>
      
      <nav className="p-4">
        <div className="mb-6">
          <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Company</h2>
          <ul className="space-y-1">
            <li>
              <NavLink 
                to="company"
                className={({ isActive }) => 
                  `block px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`
                }
              >
                Company Information
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="profile"
                className={({ isActive }) => 
                  `block px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`
                }
              >
                User Profile
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="notifications"
                className={({ isActive }) => 
                  `block px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`
                }
              >
                Notifications
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="security"
                className={({ isActive }) => 
                  `block px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`
                }
              >
                Security
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="appearance"
                className={({ isActive }) => 
                  `block px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`
                }
              >
                Appearance
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="api"
                className={({ isActive }) => 
                  `block px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`
                }
              >
                API & Integrations
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;