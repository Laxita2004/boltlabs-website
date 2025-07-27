// import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';


const SettingsLayout = () => {
  return (
    <div className="flex h-screen bg-[#0e1a24] text-white">
      <Sidebar />
      <div className="flex-1 p-8 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default SettingsLayout;