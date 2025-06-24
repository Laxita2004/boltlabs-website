import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LockClosedIcon, EnvelopeIcon } from '@heroicons/react/24/solid';

const LoginForm = () => {
  const [email, setEmail] = useState('admin@example.com');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your authentication logic here
    console.log('Login attempted with:', { email, password });
    // For demo purposes, navigate to dashboard if credentials match
    if (email === 'admin@example.com' && password === 'admin123') {
      navigate('/dashboard'); // You'll need to create this route
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      {/* The heading has been moved to the parent Login.jsx, so this can be removed or commented out */}
      {/* <div>
        <h2 className="text-center text-xl font-semibold text-white mb-6">
          Login
        </h2>
        <p className="text-center text-sm text-gray-400 mb-6">
          Enter your credentials to access the admin dashboard
        </p>
      </div> */}

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300">
          Email
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <EnvelopeIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
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
            <LockClosedIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
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
          <a href="#" className="font-medium text-teal-400 hover:text-teal-300">
            Forgot your password?
          </a>
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
        >
          Sign In
        </button>
      </div>

      <div className="mt-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-600" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-[#1F2937] text-gray-400">Demo Credentials:</span>
          </div>
        </div>

        <div className="mt-4 text-center text-sm text-gray-400">
          <p>Email: admin@example.com</p>
          <p>Password: admin123</p>
        </div>
      </div>

      <div className="text-center text-sm">
        <a href="/signup" className="font-medium text-teal-400 hover:text-teal-300">
          Go to Sign Up
        </a>
      </div>
    </form>
  );
};

export default LoginForm;