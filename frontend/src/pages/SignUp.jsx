import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your sign up logic here
  };

  return (
    <div className="min-h-screen bg-[#18191A] flex flex-col justify-center items-center">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-white mb-2">Create Account</h1>
        <p className="text-gray-400">Join us today and get started</p>
      </div>
      <div className="bg-[#23272F] rounded-lg shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-white text-center mb-1">Sign Up</h2>
        <p className="text-gray-400 text-center mb-6">Enter your details to create your account</p>
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Full Name */}
          <div>
            <label className="block text-gray-300 mb-1" htmlFor="name">Full Name</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-8 0v2"/><circle cx="12" cy="7" r="4"/></svg>
              </span>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full pl-10 pr-3 py-2 rounded-md bg-[#18191A] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
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
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M22 5 12 13 2 5"/></svg>
              </span>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full pl-10 pr-3 py-2 rounded-md bg-[#18191A] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
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
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              </span>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Create a password"
                className="w-full pl-10 pr-10 py-2 rounded-md bg-[#18191A] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
                autoComplete="new-password"
                required
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                onClick={() => setShowPassword((v) => !v)}
                tabIndex={-1}
              >
                {showPassword ? (
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M13.875 18.825A10.05 10.05 0 0 1 12 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 0 1 1.563-3.029m5.858.908a3 3 0 1 1 4.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0 1 12 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 0 1-4.132 5.411m0 0L21 21" /></svg>
                ) : (
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                )}
              </button>
            </div>
          </div>
          {/* Confirm Password */}
          <div>
            <label className="block text-gray-300 mb-1" htmlFor="confirmPassword">Confirm Password</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              </span>
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                className="w-full pl-10 pr-10 py-2 rounded-md bg-[#18191A] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
                autoComplete="new-password"
                required
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                onClick={() => setShowConfirmPassword((v) => !v)}
                tabIndex={-1}
              >
                {showConfirmPassword ? (
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M13.875 18.825A10.05 10.05 0 0 1 12 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 0 1 1.563-3.029m5.858.908a3 3 0 1 1 4.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0 1 12 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 0 1-4.132 5.411m0 0L21 21" /></svg>
                ) : (
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                )}
              </button>
            </div>
          </div>
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