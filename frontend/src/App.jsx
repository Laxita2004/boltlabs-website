// src/App.jsx
import Domain from "./components/Domain";
import DomainMembers from "./components/Domain/DomainMembers";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import DomainTeam from "./pages/DomainTeam";
import Team from "./pages/Team";
import Index from "./pages/Index";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import UserDashboard from "./pages/UserDashboard";
import EditProfile from "./pages/EditProfile";
import MemberPage from "./pages/MemberPage";
import AdminDashboard, {
  DashboardOverview,
} from "./components/admin/AdminDashboard";
import ProjectManagement from "./components/admin/ProjectManagement";
import DomainManagement from "./components/admin/DomainManagement";
import ServiceRequests from "./components/admin/ServiceRequests";
import UserProfile from "./components/admin/UserProfile";
import FirstLoginChange from "./pages/FirstLoginChange";
import ProtectedRoute from "./components/ProtectedRoute";
import ForgotPassword from "./pages/ForgotPassword";
import TeamManagement from "./components/admin/TeamManagement";
import AddClientPage from "./components/admin/AddClientPage";
import AdminSettingsPage from "./components/admin/AdminSettingsPage";
import MemberProfile from "./components/Member/MemberProfile";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfService from "./components/TermsOfService";


const App = () => {
  return (
    <>
      <main className="min-h-screen bg-[#0e1721] text-white">
        <Routes>
          {/* ✅ Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          {/* ✅ Team & Domain Pages */}
          <Route path="/team" element={<Team />} />
          <Route path="/team/:slug" element={<DomainMembers />} />{" "}
          {/* Renders members of domain */}
          <Route path="/team/:slug/:member_id" element={<MemberProfile />} />
          {/* User Dashboard - Protected */}
          <Route
            path="/user-dashboard"
            element={
              <ProtectedRoute allowedRoles={["user"]}>
                <UserDashboard />
              </ProtectedRoute>
            }
          />
          {/* Alias for backward compatibility */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute allowedRoles={["user"]}>
                <UserDashboard />
              </ProtectedRoute>
            }
          />
          {/* Member Dashboard */}
          <Route
            path="/member-home"
            element={
              <ProtectedRoute allowedRoles={["member"]}>
                <MemberPage />
              </ProtectedRoute>
            }
          />
          {/* First Login Password Change */}
          <Route
            path="/first-login-change"
            element={
              <ProtectedRoute allowedRoles={["member"]}>
                <FirstLoginChange />
              </ProtectedRoute>
            }
          />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          {/* Admin Routes */}
          <Route path="/admin" element={<AdminDashboard />}>
            <Route index element={<DashboardOverview />} />
            <Route path="projects" element={<ProjectManagement />} />
            <Route path="domains" element={<DomainManagement />} />
            <Route path="service-requests" element={<ServiceRequests />} />
            <Route path="users" element={<TeamManagement />} />
            <Route path="add-client" element={<AddClientPage />} />
            <Route path="settings" element={<AdminSettingsPage />} />
            <Route path="profile" element={<UserProfile />} />
          </Route>
          {/* ✅ 404 Catch-All */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
