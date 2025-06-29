import { useState } from 'react';
import axios from '../api/axios';
import { useNavigate } from 'react-router-dom';

const FirstLoginChange = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (newPassword !== confirmPassword) {
      return setError('Passwords do not match');
    }

    try {
      await axios.post('/auth/change-password', { newPassword });
      localStorage.setItem('firstLogin', 'false');
      setSuccess('Password changed successfully');
      setTimeout(() => navigate('/member-home'), 1500);
    } catch (err) {
      setError(err.response?.data?.error || 'Password update failed');
    }
  };

  return (
    <div className="min-h-screen bg-[#0e1a24] flex items-center justify-center px-4">
      <form onSubmit={handleSubmit} className="bg-[#1F2937] p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-white text-2xl font-semibold mb-4">Change Your Password</h2>
        <p className="text-gray-400 mb-6">This is your first login. Please set a new password.</p>

        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="w-full p-2 mb-4 bg-[#0e1a24] border border-gray-600 rounded text-white"
          required
        />
        <input
          type="password"
          placeholder="Confirm New Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full p-2 mb-4 bg-[#0e1a24] border border-gray-600 rounded text-white"
          required
        />

        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
        {success && <p className="text-green-500 text-sm mb-2">{success}</p>}

        <button
          type="submit"
          className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2 rounded transition"
        >
          Update Password
        </button>
      </form>
    </div>
  );
};

export default FirstLoginChange;
