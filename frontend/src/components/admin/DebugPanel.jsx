import React, { useState } from 'react';
import { adminAPI } from '../../services/api.js';

const DebugPanel = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [testResult, setTestResult] = useState(null);
  const [healthResult, setHealthResult] = useState(null);

  const handleTestConnection = async () => {
    try {
      setLoading(true);
      setError(null);
      setTestResult(null);
      const result = await adminAPI.testConnection();
      setTestResult(result.data);
    } catch (err) {
      console.error('Test failed:', err);
      setError(err.response?.data?.error || err.message || 'Failed to connect to server');
    } finally {
      setLoading(false);
    }
  };

  const handleHealthCheck = async () => {
    try {
      setLoading(true);
      setError(null);
      setHealthResult(null);
      const result = await adminAPI.healthCheck();
      setHealthResult(result.data);
    } catch (err) {
      console.error('Health check failed:', err);
      setError(err.response?.data?.error || err.message || 'Health check failed');
    } finally {
      setLoading(false);
    }
  };

  const clearError = () => setError(null);

  return (
    <div className="bg-[#0e1a24] text-white p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-6">Debug Panel</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Connection Test */}
          <div className="bg-[#1F2937] p-6 rounded-lg shadow-lg border border-gray-700/50">
            <h2 className="text-xl font-semibold text-white mb-4">Connection Test</h2>
            
            <button
              onClick={handleTestConnection}
              disabled={loading}
              className="w-full px-6 py-3 bg-teal-500 hover:bg-teal-400 disabled:bg-gray-600 text-white rounded-lg font-semibold transition-colors mb-4"
            >
              {loading ? 'Testing...' : 'Test Admin Routes'}
            </button>

            {testResult && (
              <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg">
                <h3 className="text-green-300 font-semibold mb-2">Success:</h3>
                <p className="text-green-300">{JSON.stringify(testResult, null, 2)}</p>
              </div>
            )}
          </div>

          {/* Health Check */}
          <div className="bg-[#1F2937] p-6 rounded-lg shadow-lg border border-gray-700/50">
            <h2 className="text-xl font-semibold text-white mb-4">Health Check</h2>
            
            <button
              onClick={handleHealthCheck}
              disabled={loading}
              className="w-full px-6 py-3 bg-blue-500 hover:bg-blue-400 disabled:bg-gray-600 text-white rounded-lg font-semibold transition-colors mb-4"
            >
              {loading ? 'Checking...' : 'Check Server Health'}
            </button>

            {healthResult && (
              <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg">
                <h3 className="text-green-300 font-semibold mb-2">Server Status:</h3>
                <p className="text-green-300">{JSON.stringify(healthResult, null, 2)}</p>
              </div>
            )}
          </div>
        </div>

        {error && (
          <div className="bg-[#1F2937] p-6 rounded-lg shadow-lg border border-red-500/50 mb-6">
            <h2 className="text-xl font-semibold text-red-300 mb-4">Error Details</h2>
            <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg">
              <h3 className="text-red-300 font-semibold mb-2">Error:</h3>
              <p className="text-red-300">{error}</p>
              <button 
                onClick={clearError}
                className="mt-2 text-red-300 hover:text-red-100 underline"
              >
                Clear Error
              </button>
            </div>
          </div>
        )}

        <div className="bg-[#1F2937] p-6 rounded-lg shadow-lg border border-gray-700/50">
          <h2 className="text-xl font-semibold text-white mb-4">Troubleshooting Steps</h2>
          
          <div className="space-y-4 text-gray-300">
            <div>
              <h3 className="font-semibold text-white mb-2">1. Start Backend Server</h3>
              <p>Open a terminal and run:</p>
              <code className="block bg-gray-800 p-2 rounded mt-2 text-sm">
                cd boltlabs-website/backend && npm start
              </code>
              <p className="text-sm text-gray-400 mt-1">You should see: "🚀 Server running on port 5000"</p>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-2">2. Create Environment File</h3>
              <p>Create a <code className="bg-gray-800 px-1 rounded">.env</code> file in the backend directory with:</p>
              <code className="block bg-gray-800 p-2 rounded mt-2 text-sm">
                SUPABASE_URL=your_supabase_url<br/>
                SUPABASE_KEY=your_supabase_key<br/>
                JWT_SECRET=your_jwt_secret<br/>
                DATABASE_URL=your_database_url<br/>
                PORT=5000
              </code>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-2">3. Check Database</h3>
              <p>Make sure your database is running and accessible. If using Prisma, run:</p>
              <code className="block bg-gray-800 p-2 rounded mt-2 text-sm">
                npx prisma generate && npx prisma db push
              </code>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-2">4. Check Browser Console</h3>
              <p>Open browser developer tools (F12) and check:</p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>Console tab for JavaScript errors</li>
                <li>Network tab for failed API requests</li>
                <li>Look for CORS errors or connection refused</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-2">5. Common Issues</h3>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Backend server not running on port 5000</li>
                <li>Missing or incorrect environment variables</li>
                <li>Database connection issues</li>
                <li>CORS configuration problems</li>
                <li>Firewall blocking localhost connections</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DebugPanel; 