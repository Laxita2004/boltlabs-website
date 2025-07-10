import React, { useState, useEffect, useRef } from 'react';
import axios from '../api/axios';
import { User, Mail, Phone, Lock, Save, Camera } from 'lucide-react';

const InputField = ({ icon, label, type, value, onChange, name, placeholder }) => (
  <div className="relative">
    <label className="block text-sm font-medium text-gray-400 mb-1">{label}</label>
    <div className="relative">
      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
        {icon}
      </span>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full bg-[#1F2937] border border-gray-600 rounded-lg text-white pl-12 pr-4 py-3 focus:ring-2 focus:ring-teal-500 focus:outline-none transition"
      />
    </div>
  </div>
);

const EditProfile = () => {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [password, setPassword] = useState({
    current: '',
    new: '',
    confirm: '',
  });

  const [profilePicture, setProfilePicture] = useState(null);
  const fileInputRef = useRef(null);

  const userId = localStorage.getItem('user_id');
  // console.log("🔍 user_id from localStorage:", userId);

  useEffect(() => {
    if (!userId) {
      console.warn("🚨 No user_id found.");
      // navigate('/login');
      return;
    }

    const fetchProfile = async () => {
      try {
        console.log(`📡 Fetching profile from /user/${userId}`);
        const res = await axios.get(`/user/${userId}`);
        console.log("✅ Profile API response:", res.data);
        const user = res.data;
        setProfile({
          name: user.name || '',
          email: user.email || '',
          phone: user.phone || '',
        });
      } catch (err) {
        console.error('❌ Failed to fetch user profile:', err.response?.data || err);
      }
    };

    fetchProfile();
  }, [userId]);


  const handleProfileChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setPassword({ ...password, [e.target.name]: e.target.value });
  };

  const handlePictureUpload = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePicture(URL.createObjectURL(file));
      // you could upload file via FormData here
      console.log('Selected profile image file:', file);
    }
  };

  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put('/user/profile', profile, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      alert('Profile updated successfully!');
    } catch (err) {
      console.error('Update profile error:', err.response?.data || err);
      alert('Failed to update profile.');
    }
  };

  const handlePasswordUpdate = async (e) => {
    e.preventDefault();
    if (password.new !== password.confirm) {
      alert("New passwords don't match!");
      return;
    }
    try {
      await axios.put('/user/password', {
        currentPassword: password.current,
        newPassword: password.new
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      alert('Password updated successfully!');
      setPassword({ current: '', new: '', confirm: '' });
    } catch (err) {
      console.error('Update password error:', err);
      alert('Failed to update password.');
    }
  };

  return (
    <div className="bg-[#0e1a24] text-white min-h-screen pt-32 p-4 sm:p-6 md:p-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-10">
          <h1 className="text-3xl font-bold text-white">Edit Profile</h1>
          <p className="text-gray-400 mt-1">Update your personal information and preferences</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Profile Picture */}
          <div className="md:col-span-1">
            <div className="bg-[#1F2937] rounded-2xl p-6 text-center border border-gray-700/50">
              <h2 className="text-xl font-semibold text-white mb-4">Profile Picture</h2>
              <div className="relative w-32 h-32 mx-auto mb-4">
                <div className="w-full h-full rounded-full bg-teal-500 flex items-center justify-center text-white">
                  {profilePicture ? (
                    <img src={profilePicture} alt="Profile" className="w-full h-full rounded-full object-cover" />
                  ) : (
                    <User size={64} />
                  )}
                </div>
                <button
                  onClick={handlePictureUpload}
                  className="absolute bottom-1 right-1 bg-gray-800/80 hover:bg-gray-700/80 text-white rounded-full p-2 transition"
                  aria-label="Upload new photo"
                >
                  <Camera size={20} />
                </button>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  className="hidden"
                  accept="image/*"
                />
              </div>
              <p className="text-xs text-gray-500">Click the camera icon to upload a new photo</p>
            </div>
          </div>

          {/* Personal Info & Password */}
          <div className="md:col-span-2 space-y-8">
            <form onSubmit={handleProfileUpdate} className="bg-[#1F2937] rounded-2xl p-6 border border-gray-700/50">
              <h2 className="text-xl font-semibold text-white mb-6">Personal Information</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <InputField icon={<User size={20} />} label="Full Name" type="text" name="name" value={profile.name} onChange={handleProfileChange} />

              </div>
              <div className="mt-6">
                <InputField icon={<Mail size={20} />} label="Email Address" type="email" name="email" value={profile.email} onChange={handleProfileChange} />
              </div>
              <div className="mt-6">
                <InputField icon={<Phone size={20} />} label="Phone Number" type="tel" name="phone" value={profile.phone} onChange={handleProfileChange} />
              </div>
              <div className="mt-8 text-right">
                <button type="submit" className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-lg inline-flex items-center gap-2 transition">
                  <Save size={18} />
                  <span>Update Profile</span>
                </button>
              </div>
            </form>

            <form onSubmit={handlePasswordUpdate} className="bg-[#1F2937] rounded-2xl p-6 border border-gray-700/50">
              <h2 className="text-xl font-semibold text-white mb-6">Change Password</h2>
              <div className="space-y-6">
                <InputField icon={<Lock size={20} />} label="Current Password" type="password" name="current" value={password.current} onChange={handlePasswordChange} placeholder="Enter your current password" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <InputField icon={<Lock size={20} />} label="New Password" type="password" name="new" value={password.new} onChange={handlePasswordChange} placeholder="Enter new password" />
                  <InputField icon={<Lock size={20} />} label="Confirm New Password" type="password" name="confirm" value={password.confirm} onChange={handlePasswordChange} placeholder="Confirm new password" />
                </div>
              </div>
              <div className="mt-8 text-right">
                <button type="submit" className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg inline-flex items-center gap-2 transition">
                  <Lock size={18} />
                  <span>Update Password</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
