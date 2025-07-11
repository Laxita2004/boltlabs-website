import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

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
import UserDashboard from './pages/UserDashboard';
import EditProfile from './pages/EditProfile';
import MemberPage from './pages/MemberPage';
import AdminDashboard, { DashboardOverview } from './components/admin/AdminDashboard';
import UserManagement from './components/admin/UserManagement';
import ProjectManagement from './components/admin/ProjectManagement';
import DomainManagement from './components/admin/DomainManagement';
import ServiceRequests from './components/admin/ServiceRequests';

import SettingsLayout from './components/admin/SettingsLayout';
import CompanySettings from './components/admin/CompanySettings';
import UserProfile from './components/admin/UserProfile';
import Notifications from './components/admin/Notifications';
import Security from './components/admin/Security';
import Appearance from './components/admin/Appearance';
import ApiIntegrations from './components/admin/ApiIntegrations';
// import MemberHome from './pages/MemberHome';
import FirstLoginChange from './pages/FirstLoginChange';
import ProtectedRoute from './components/ProtectedRoute';
import ForgotPassword from './pages/ForgotPassword';

const App = () => {
  return (
    <>
      <Header />
      <main className='min-h-screen mt-14'>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/user-dashboard" element={<UserDashboard />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          {/* Team Routes */}
          <Route path="/team" element={<Team />} />
          <Route path="/team/:domain" element={<DomainTeam />} />
          <Route path="/team/:domain/:memberId" element={<Index />} />

          {/* User Dashboard */}
          <Route path="/dashboard" element={
            <ProtectedRoute allowedRoles={['user']}>
              <UserDashboard />
            </ProtectedRoute>
          } />

          {/* Member Dashboard */}
          <Route path="/member-home" element={
            <ProtectedRoute allowedRoles={['member']}>
              {/* <MemberHome /> */}
            </ProtectedRoute>
          } />

          {/* First Login Password Change */}
          <Route path="/first-login-change" element={
            <ProtectedRoute allowedRoles={['member']}>
              <FirstLoginChange />
            </ProtectedRoute>
          } />

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminDashboard />}>
            <Route index element={<DashboardOverview />} />
            <Route path="users" element={<UserManagement />} />
            <Route path="projects" element={<ProjectManagement />} />
            <Route path="domains" element={<DomainManagement />} />
            <Route path="service-requests" element={<ServiceRequests />} />

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

          {/* Route for members only */}

          {/* <Route
            path="/member"
            element={
              localStorage.getItem('token') && localStorage.getItem('role') === 'member' ? (
                <MemberPage />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          /> */}

          <Route path="/member" element={<MemberPage />} />

          {/* Redirect unknown routes to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
