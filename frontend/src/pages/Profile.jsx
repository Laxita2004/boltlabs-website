import React, { useRef, useState } from 'react';
import { FiUser, FiCamera, FiMail, FiPhone, FiLock } from 'react-icons/fi';

const Profile = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [profile, setProfile] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
    phone: '+1 (555) 123-4567',
  });
  const [passwords, setPasswords] = useState({
    current: '',
    new: '',
    confirm: '',
  });
  const fileInputRef = useRef();

  const handleProfileChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };
  const handlePasswordChange = (e) => {
    setPasswords({ ...passwords, [e.target.name]: e.target.value });
  };
  const handleProfileSubmit = (e) => {
    e.preventDefault();
    alert('Profile updated! (mock)');
  };
  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (passwords.new !== passwords.confirm) {
      alert('Passwords do not match!');
      return;
    }
    alert('Password updated! (mock)');
  };
  const handlePicClick = () => fileInputRef.current.click();
  const handlePicChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setProfilePic(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div className="min-h-screen bg-[#0e1a24] py-12 px-2">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-1">Edit Profile</h1>
        <p className="text-gray-400 mb-8">Update your personal information and preferences</p>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Profile Picture */}
          <div className="bg-gray-800 rounded-xl shadow p-6 flex flex-col items-center w-full md:w-1/3 mb-6 md:mb-0">
            <div className="relative group">
              <div className="w-32 h-32 rounded-full bg-[#33FEBF] flex items-center justify-center text-[#0e1a24] text-6xl mb-2 overflow-hidden">
                {profilePic ? (
                  <img src={profilePic} alt="Profile" className="w-full h-full object-cover rounded-full" />
                ) : (
                  <FiUser />
                )}
              </div>
              <button
                type="button"
                onClick={handlePicClick}
                className="absolute bottom-3 right-3 bg-gray-900 border border-gray-700 rounded-full p-2 shadow hover:bg-[#33FEBF] hover:text-[#0e1a24] transition-colors"
                title="Upload photo"
              >
                <FiCamera className="text-[#33FEBF] text-xl group-hover:text-[#0e1a24]" />
              </button>
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                className="hidden"
                onChange={handlePicChange}
              />
            </div>
            <p className="text-gray-400 text-sm mt-2 text-center">Click the camera icon to upload a new photo</p>
          </div>
          {/* Personal Info */}
          <form onSubmit={handleProfileSubmit} className="bg-gray-800 rounded-xl shadow p-6 flex-1 space-y-6">
            <h2 className="text-lg font-semibold text-white mb-4">Personal Information</h2>
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-300 mb-1">First Name</label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-gray-500"><FiUser /></span>
                  <input
                    type="text"
                    name="firstName"
                    value={profile.firstName}
                    onChange={handleProfileChange}
                    className="pl-10 pr-3 py-2 border border-gray-700 rounded-md w-full focus:ring-2 focus:ring-[#33FEBF] focus:border-[#33FEBF] bg-gray-900 text-white"
                    required
                  />
                </div>
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-300 mb-1">Last Name</label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-gray-500"><FiUser /></span>
                  <input
                    type="text"
                    name="lastName"
                    value={profile.lastName}
                    onChange={handleProfileChange}
                    className="pl-10 pr-3 py-2 border border-gray-700 rounded-md w-full focus:ring-2 focus:ring-[#33FEBF] focus:border-[#33FEBF] bg-gray-900 text-white"
                    required
                  />
                </div>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
              <div className="relative">
                <span className="absolute left-3 top-2.5 text-gray-500"><FiMail /></span>
                <input
                  type="email"
                  name="email"
                  value={profile.email}
                  onChange={handleProfileChange}
                  className="pl-10 pr-3 py-2 border border-gray-700 rounded-md w-full focus:ring-2 focus:ring-[#33FEBF] focus:border-[#33FEBF] bg-gray-900 text-white"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Phone Number</label>
              <div className="relative">
                <span className="absolute left-3 top-2.5 text-gray-500"><FiPhone /></span>
                <input
                  type="tel"
                  name="phone"
                  value={profile.phone}
                  onChange={handleProfileChange}
                  className="pl-10 pr-3 py-2 border border-gray-700 rounded-md w-full focus:ring-2 focus:ring-[#33FEBF] focus:border-[#33FEBF] bg-gray-900 text-white"
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-[#33FEBF] text-[#0e1a24] font-semibold py-2 rounded-md flex items-center justify-center gap-2 hover:bg-[#28cfa0] transition-colors"
            >
              <FiUser /> Update Profile
            </button>
          </form>
        </div>
        {/* Change Password */}
        <div className="max-w-2xl mx-auto mt-8">
          <form onSubmit={handlePasswordSubmit} className="bg-gray-800 rounded-xl shadow p-6 space-y-6">
            <h2 className="text-lg font-semibold text-white mb-4">Change Password</h2>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Current Password</label>
              <div className="relative">
                <span className="absolute left-3 top-2.5 text-gray-500"><FiLock /></span>
                <input
                  type="password"
                  name="current"
                  value={passwords.current}
                  onChange={handlePasswordChange}
                  className="pl-10 pr-3 py-2 border border-gray-700 rounded-md w-full focus:ring-2 focus:ring-[#33FEBF] focus:border-[#33FEBF] bg-gray-900 text-white"
                  required
                />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-300 mb-1">New Password</label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-gray-500"><FiLock /></span>
                  <input
                    type="password"
                    name="new"
                    value={passwords.new}
                    onChange={handlePasswordChange}
                    className="pl-10 pr-3 py-2 border border-gray-700 rounded-md w-full focus:ring-2 focus:ring-[#33FEBF] focus:border-[#33FEBF] bg-gray-900 text-white"
                    required
                  />
                </div>
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-300 mb-1">Confirm New Password</label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-gray-500"><FiLock /></span>
                  <input
                    type="password"
                    name="confirm"
                    value={passwords.confirm}
                    onChange={handlePasswordChange}
                    className="pl-10 pr-3 py-2 border border-gray-700 rounded-md w-full focus:ring-2 focus:ring-[#33FEBF] focus:border-[#33FEBF] bg-gray-900 text-white"
                    required
                  />
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-gray-900 text-white font-semibold py-2 rounded-md flex items-center justify-center gap-2 hover:bg-gray-700 transition-colors"
            >
              <FiLock /> Update Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile; 