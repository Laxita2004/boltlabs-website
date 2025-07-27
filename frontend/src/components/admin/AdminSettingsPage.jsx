import React, { useState, useEffect } from "react";
import axios from "../../api/axios";
import { FiUser, FiMail, FiLock } from "react-icons/fi";

const AdminSettingsPage = () => {
  const [profile, setProfile] = useState({ name: "", email: "" });
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // Fetch current admin profile
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get("/admin/profile", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        setProfile({ name: res.data.name || "", email: res.data.email || "" });
      } catch (err) {
        setError("Failed to load profile");
      }
    };
    fetchProfile();
  }, []);

  const handleProfileChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    setLoading(true);

    // Validation
    if (!profile.name || !profile.email) {
      setError("Name and email are required.");
      setLoading(false);
      return;
    }
    if (newPassword && newPassword !== confirmPassword) {
      setError("New password and confirm password do not match.");
      setLoading(false);
      return;
    }

    try {
      // Update profile (name/email)
      await axios.put(
        "/admin/profile",
        { name: profile.name, email: profile.email },
        { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
      );
      // Update password if fields are filled
      if (currentPassword && newPassword) {
        await axios.put(
          "/admin/password",
          { currentPassword, newPassword },
          { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
        );
      }
      setMessage("Profile updated successfully!");
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (err) {
      setError(err.response?.data?.error || "Update failed");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#131c27] py-10 px-2">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-1">Settings</h1>
        <p className="text-gray-300 mb-8">Manage your account settings and preferences</p>
        <div className="bg-[#181f2a] rounded-lg shadow-lg p-8">
          <form onSubmit={handleSubmit}>
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <FiUser className="text-xl text-gray-400 mr-2" />
                <h2 className="text-xl font-semibold text-white">Profile Information</h2>
              </div>
              <div className="mb-4">
                <label className="block text-gray-300 mb-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={profile.name}
                  onChange={handleProfileChange}
                  className="w-full bg-[#1e293b] border border-gray-700 rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-300 mb-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={profile.email}
                  onChange={handleProfileChange}
                  className="w-full bg-[#1e293b] border border-gray-700 rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                  required
                />
              </div>
            </div>
            <hr className="border-gray-700 mb-8" />
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <FiLock className="text-xl text-gray-400 mr-2" />
                <h2 className="text-xl font-semibold text-white">Change Password</h2>
              </div>
              <div className="mb-4">
                <label className="block text-gray-300 mb-1">Current Password</label>
                <input
                  type="password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  className="w-full bg-[#1e293b] border border-gray-700 rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                  autoComplete="current-password"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-300 mb-1">New Password (optional)</label>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full bg-[#1e293b] border border-gray-700 rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Leave blank to keep current password"
                  autoComplete="new-password"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-300 mb-1">Confirm New Password</label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full bg-[#1e293b] border border-gray-700 rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Confirm your new password"
                  autoComplete="new-password"
                />
              </div>
            </div>
            {message && <div className="mb-4 text-green-400 bg-green-900/30 p-2 rounded">{message}</div>}
            {error && <div className="mb-4 text-red-400 bg-red-900/30 p-2 rounded">{error}</div>}
            <div className="flex gap-4">
              <button
                type="submit"
                className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-6 py-2 rounded transition disabled:opacity-50"
                disabled={loading}
              >
                {loading ? "Updating..." : "Update Profile"}
              </button>
              <button
                type="button"
                className="bg-gray-700 hover:bg-gray-600 text-white font-semibold px-6 py-2 rounded transition"
                onClick={() => {
                  setProfile({ ...profile });
                  setCurrentPassword("");
                  setNewPassword("");
                  setConfirmPassword("");
                  setMessage("");
                  setError("");
                }}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminSettingsPage; 