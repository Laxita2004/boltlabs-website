import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import DomainTeam from "./pages/DomainTeam";
import Team from "./pages/Team";
import Index from './pages/Index';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import AdminDashboard, { DashboardOverview } from './components/admin/AdminDashboard';
import ClientManagement from './components/admin/ClientManagement';
import UserManagement from './components/admin/UserManagement';
import ProjectManagement from './components/admin/ProjectManagement';
import DomainManagement from './components/admin/DomainManagement';


import SettingsLayout from './components/admin/SettingsLayout';
import CompanySettings from './components/admin/CompanySettings';
import UserProfile from './components/admin/UserProfile';
import Notifications from './components/admin/Notifications';
import Security from './components/admin/Security';
import Appearance from './components/admin/Appearance';
import ApiIntegrations from './components/admin/ApiIntegrations';

// const ProtectedRoute = ({ children }) => {
//   const isAuthenticated = localStorage.getItem('admin_token');
//   return isAuthenticated ? children : <Navigate to="/login" replace />;
// };

const App = () => {
  return (
    <>
      <Header />
      <div className='min-h-[70vh] bg-gray-50'>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

           <Route element={<Layout showHeader={false} />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          </Route>

          {/* Our Team section */}
          <Route path="/team" element={<Team />} />
          <Route path="/team/:domain" element={<DomainTeam />} />
          <Route path="/team/:domain/:memberId" element={<Index />} />

          {/* Admin dashboard with nested routes */}
          <Route path="/admin" element={<AdminDashboard />}>
            <Route index element={<DashboardOverview />} />
            <Route path="clients" element={<ClientManagement />} />
            <Route path="users" element={<UserManagement />} />
            <Route path="projects" element={<ProjectManagement />} />
            <Route path="domains" element={<DomainManagement />} />

            {/* <Route path="settings" element={<SettingsLayout />} /> */}

             <Route path="settings" element={<SettingsLayout />}>
              <Route index element={<Navigate to="company" replace />} />
              <Route path="company" element={<CompanySettings />} />
              <Route path="profile" element={<UserProfile />} />
              <Route path="notifications" element={<Notifications />} />
              <Route path="security" element={<Security />} />
              <Route path="appearance" element={<Appearance />} />
              <Route path="api" element={<ApiIntegrations />} />
             </Route>

          </Route>

          {/* Redirect unknown routes to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
