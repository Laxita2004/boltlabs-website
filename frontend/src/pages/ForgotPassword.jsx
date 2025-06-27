import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import axios from '../api/axios';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('user');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    try {
      const res = await axios.post('/auth/forgot-password', { email, role });
      setMessage(res.data.message);
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to send reset link');
    }
  };

  return (
    <div className="min-h-screen bg-[#0e1a24] flex flex-col justify-center items-center py-12 px-4">
      <div className="max-w-md w-full bg-[#1F2937] p-8 rounded-lg shadow-md border border-gray-700/50">
        <h2 className="text-2xl font-semibold text-white mb-2 text-center">
          Forgot Password
        </h2>
        <p className="text-gray-400 mb-6 text-center">
          Enter your email and role to receive a reset link
        </p>

        {message && <p className="text-green-500 text-sm text-center mb-4">{message}</p>}
        {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm text-gray-300 mb-1">Email Address</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <Mail size={18} />
              </span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full pl-10 pr-3 py-2 rounded-md bg-[#0e1a24] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-1">Select Role</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full bg-[#0e1a24] text-white border border-gray-600 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
              <option value="member">Member</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-2 rounded-md bg-teal-600 hover:bg-teal-700 text-white font-semibold"
          >
            Send Reset Link
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
