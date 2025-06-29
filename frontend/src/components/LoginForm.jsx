import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaLock, FaEnvelope } from 'react-icons/fa';
import axios from '../api/axios';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user'); // default role
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const res = await axios.post('/auth/login', {
        email,
        password,
        role,
      });

      // Store tokens and role
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('role', res.data.role);
      localStorage.setItem('firstLogin', res.data.firstLogin);

      // Redirect based on role
      if (res.data.role === 'admin') navigate('/admin');
      else if (res.data.role === 'member') {
        if (res.data.firstLogin) navigate('/first-login-change');
        else navigate('/member-home');
      } else {
        navigate('/dashboard');
      }
    } catch (err) {
      setError(err.response?.data?.error || 'Login failed');
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="role" className="block text-sm font-medium text-gray-300">
          Role
        </label>
        <select
          id="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full bg-[#0e1a24] border border-gray-600 rounded-lg text-white pl-3 pr-4 py-2 mt-1 focus:ring-2 focus:ring-teal-500 focus:outline-none transition"
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
          <option value="member">Member</option>
        </select>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300">
          Email
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaEnvelope className="h-5 w-5 text-gray-400" />
          </div>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-[#0e1a24] border border-gray-600 rounded-lg text-white pl-10 pr-4 py-2 focus:ring-2 focus:ring-teal-500 focus:outline-none transition"
          />
        </div>
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-300">
          Password
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaLock className="h-5 w-5 text-gray-400" />
          </div>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="w-full bg-[#0e1a24] border border-gray-600 rounded-lg text-white pl-10 pr-4 py-2 focus:ring-2 focus:ring-teal-500 focus:outline-none transition"
          />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-600 rounded bg-gray-700"
          />
          <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-300">
            Remember me
          </label>
        </div>

        <div className="text-sm">
          <a href="/forgot-password" className="font-medium text-teal-400 hover:text-teal-300">
            Forgot your password?
          </a>
        </div>
      </div>

      {error && <p className="text-sm text-red-500 text-center">{error}</p>}

      <div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
        >
          Sign In
        </button>
      </div>

      <div className="text-center text-sm mt-4">
        <a href="/signup" className="font-medium text-teal-400 hover:text-teal-300">
          Don't have an account? Sign Up
        </a>
      </div>
    </form>
  );
};

export default LoginForm;
