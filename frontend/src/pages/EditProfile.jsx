import React, { useState, useEffect, useRef } from 'react';
import axios from '../api/axios';
import { User, Mail, Phone, Lock, Save, Camera } from 'lucide-react';
import DashboardHeader from '../components/userDashBoard/userDashHeader';

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

  // const handlePictureUpload = () => {
  //   fileInputRef.current.click();
  // };

  // const handleFileChange = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     setProfilePicture(URL.createObjectURL(file));
  //     // you could upload file via FormData here
  //     console.log('Selected profile image file:', file);
  //   }
  // };

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
  <div className="bg-[#0e1a24] text-white min-h-screen pt-28 px-4 sm:px-6 md:px-10">
    <DashboardHeader/>
    <div className="max-w-5xl mx-auto">
      {/* Header */}
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#33FEBF] to-[#0ff]">
          Edit Your Profile
        </h1>
        <p className="text-gray-400 mt-2 text-sm">Manage your personal info and password securely</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Profile Section */}
        <form onSubmit={handleProfileUpdate} className="bg-[#141E28] rounded-2xl p-8 border border-gray-700 shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-white">Personal Information</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <InputField icon={<User size={20} />} label="Full Name" type="text" name="name" value={profile.name} onChange={handleProfileChange} />
            <InputField icon={<Phone size={20} />} label="Phone Number" type="tel" name="phone" value={profile.phone} onChange={handleProfileChange} />
            <InputField icon={<Mail size={20} />} label="Email Address" type="email" name="email" value={profile.email} onChange={handleProfileChange} />
          </div>
          <div className="mt-8 text-right">
            <button type="submit" className="bg-gradient-to-r from-[#33FEBF] to-[#0ff] text-[#0e1a24] font-semibold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all">
              <Save size={18} className="inline mr-2" />
              Update Profile
            </button>
          </div>
        </form>

        {/* Password Section */}
        <form onSubmit={handlePasswordUpdate} className="bg-[#141E28] rounded-2xl p-8 border border-gray-700 shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-white">Change Password</h2>
          <div className="space-y-6">
            <InputField icon={<Lock size={20} />} label="Current Password" type="password" name="current" value={password.current} onChange={handlePasswordChange} placeholder="Enter current password" />
            <InputField icon={<Lock size={20} />} label="New Password" type="password" name="new" value={password.new} onChange={handlePasswordChange} placeholder="New password" />
            <InputField icon={<Lock size={20} />} label="Confirm New Password" type="password" name="confirm" value={password.confirm} onChange={handlePasswordChange} placeholder="Confirm new password" />
          </div>
          <div className="mt-8 text-right">
            <button type="submit" className="bg-[#0e1a24] text-white border border-[#33FEBF] hover:bg-[#33FEBF] hover:text-[#0e1a24] font-semibold py-3 px-6 rounded-full transition-all">
              <Lock size={18} className="inline mr-2" />
              Update Password
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
);

};

export default EditProfile;
