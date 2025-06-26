import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Mail, Lock, Eye, EyeOff } from 'lucide-react';

const SignUp = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    setError('');
    // On successful sign up:
    localStorage.setItem('token', 'demo-token'); // Set a token
    localStorage.setItem('userName', form.name); // Store user name
    localStorage.setItem('userEmail', form.email); // Store user email
    window.location.reload(); // Refresh to show user icon in header
  };

  return (
    <div className="min-h-screen bg-[#0e1a24] flex flex-col justify-center items-center py-12 sm:px-6 lg:px-8 pb-16">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-white mb-2">Create Account</h1>
        <p className="text-gray-400">Join us today and get started</p>
      </div>
      <div className="bg-[#1F2937] rounded-lg shadow-lg p-8 w-full max-w-md border border-gray-700/50">
        <h2 className="text-2xl font-semibold text-white text-center mb-1">Sign Up</h2>
        <p className="text-gray-400 text-center mb-6">Enter your details to create your account</p>
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Full Name */}
          <div>
            <label className="block text-gray-300 mb-1" htmlFor="name">Full Name</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <User size={18} />
              </span>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full pl-10 pr-3 py-2 rounded-md bg-[#0e1a24] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
                autoComplete="name"
                required
              />
            </div>
          </div>
          {/* Email */}
          <div>
            <label className="block text-gray-300 mb-1" htmlFor="email">Email Address</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <Mail size={18} />
              </span>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full pl-10 pr-3 py-2 rounded-md bg-[#0e1a24] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
                autoComplete="email"
                required
              />
            </div>
          </div>
          {/* Password */}
          <div>
            <label className="block text-gray-300 mb-1" htmlFor="password">Password</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <Lock size={18} />
              </span>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Create a password"
                className="w-full pl-10 pr-10 py-2 rounded-md bg-[#0e1a24] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
                autoComplete="new-password"
                required
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                onClick={() => setShowPassword((v) => !v)}
                tabIndex={-1}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>
          {/* Confirm Password */}
          <div>
            <label className="block text-gray-300 mb-1" htmlFor="confirmPassword">Confirm Password</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <Lock size={18} />
              </span>
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                id="confirmPassword"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                className="w-full pl-10 pr-10 py-2 rounded-md bg-[#0e1a24] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
                autoComplete="new-password"
                required
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                onClick={() => setShowConfirmPassword((v) => !v)}
                tabIndex={-1}
              >
                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>
          {error && <p className="text-red-500 text-xs text-center">{error}</p>}
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 rounded-md bg-teal-600 hover:bg-teal-700 text-white font-semibold transition-colors"
          >
            Create Account
          </button>
        </form>
        <div className="mt-6 text-center text-gray-400">
          Already have an account?{' '}
          <Link to="/login" className="text-teal-400 hover:underline font-medium">Log in</Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp; 