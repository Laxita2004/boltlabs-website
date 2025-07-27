import React, { useState, useEffect } from "react";
import { User, PlusCircle, Clock, Pencil } from "lucide-react";
import { useUser } from "../hooks/useUser.js";
import { Link, useLocation } from "react-router-dom";
import DashboardHeader from "../components/userDashBoard/userDashHeader.jsx";

const TABS = [
  { id: "profile", label: "Profile", icon: User },
  { id: "new-request", label: "New Request", icon: PlusCircle },
  { id: "history", label: "Request History", icon: Clock },
];

const UserPanel = () => {
  const location = useLocation();

  // Check if navigation triggered to open New Request tab
  const initialTab = location.state?.openNewRequest ? "new-request" : "profile";
  const [activeTab, setActiveTab] = useState(initialTab);

  const [form, setForm] = useState({
    service: "",
    domain_id: "",
    description: "",
  });

  const {
    currentUser,
    loading,
    error,
    userRequests,
    userProfile,
    domains,
    createServiceRequest,
    fetchUserRequests,
    fetchUserProfile,
    fetchDomains,
    clearError,
  } = useUser();

  // Fetch profile, requests, and domains
  useEffect(() => {
    fetchUserProfile();
    fetchUserRequests();
    fetchDomains();
  }, []);

  // Clear location state after initial tab load
  useEffect(() => {
    if (location.state?.openNewRequest) {
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  const profile = {
    name: userProfile?.name || currentUser.name || "Loading...",
    email: userProfile?.email || currentUser.email || "Loading...",
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createServiceRequest({
        service: form.service,
        domain_id: form.domain_id,
        description: form.description,
      });
      setForm({ service: "", domain_id: "", description: "" });
      alert("Service request submitted successfully!");
    } catch (err) {
      console.error("Submit request error:", err);
      alert("Failed to submit request.");
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="bg-[#0e1a24] text-white min-h-screen pt-32 p-4 sm:p-6 md:p-8">
      <DashboardHeader />
      <div className="max-w-4xl mx-auto mt-14">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-white">User Panel</h1>
          <p className="text-gray-400 mt-1">
            Manage your profile and service requests
          </p>
        </header>

        {error && (
          <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 mb-6">
            <p className="text-red-400">Error: {error}</p>
            <button
              onClick={clearError}
              className="mt-2 text-sm text-red-300 hover:text-red-200 underline"
            >
              Dismiss
            </button>
          </div>
        )}

        <div className="border-b border-slate-700 mb-6">
          <nav className="flex space-x-8">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${activeTab === tab.id
                    ? "border-[#33FEBF] text-[#33FEBF]"
                    : "border-transparent text-gray-400 hover:text-gray-300"
                  }`}
              >
                <tab.icon size={16} />
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="bg-[#19202A] rounded-2xl p-8 border border-gray-700/50">
          {activeTab === "profile" && (
            <div>
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <User /> Profile Information
              </h2>
              {loading ? (
                <div className="flex items-center justify-center h-32">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#33FEBF]"></div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      value={profile.name}
                      disabled
                      className="w-full bg-[#232B39] border border-gray-600 rounded-lg text-white px-4 py-3 opacity-50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      value={profile.email}
                      disabled
                      className="w-full bg-[#232B39] border border-gray-600 rounded-lg text-white px-4 py-3 opacity-50"
                    />
                  </div>
                  <div className="pt-2">
                    <Link
                      to="/edit-profile"
                      className="inline-flex items-center gap-1 text-[#33FEBF] underline hover:text-teal-300 transition-colors text-sm font-medium"
                    >
                      <Pencil size={16} />
                      Edit Profile
                    </Link>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === "new-request" && (
            <div>
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <PlusCircle /> New Service Request
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Service Type
                  </label>
                  <input
                    type="text"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    placeholder="e.g., Digital Presence Management"
                    className="w-full bg-[#232B39] border border-gray-600 rounded-lg text-white px-4 py-3 focus:ring-2 focus:ring-teal-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Domain
                  </label>
                  <select
                    name="domain_id"
                    value={form.domain_id}
                    onChange={handleChange}
                    className="w-full bg-[#232B39] border border-gray-600 rounded-lg text-white px-4 py-3"
                    required
                  >
                    <option value="">Select a domain</option>
                    {domains.map((domain) => (
                      <option key={domain.domain_id} value={domain.domain_id}>
                        {domain.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Description
                  </label>
                  <textarea
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    placeholder="Describe your service requirements..."
                    className="w-full bg-[#232B39] border border-gray-600 rounded-lg text-white px-4 py-3 min-h-[100px]"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-60 bg-[#33FEBF] text-[#0e1a24] hover:bg-teal-700 disabled:bg-teal-800 font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition"
                >
                  {loading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <span>Submit Request</span>
                  )}
                </button>
              </form>
            </div>
          )}

          {activeTab === "history" && (
            <div>
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Clock /> Request History
              </h2>
              {loading ? (
                <div className="flex items-center justify-center h-32">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-teal-400"></div>
                </div>
              ) : userRequests.length === 0 ? (
                <div className="text-center py-12">
                  <div className="text-gray-400 text-lg mb-2">
                    No service requests found
                  </div>
                  <p className="text-gray-500">
                    You haven't submitted any requests yet.
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  {userRequests.map((req) => (
                    <div
                      key={req.req_id}
                      className="bg-[#374151] rounded-lg p-6 border border-gray-600/30"
                    >
                      <div className="flex flex-wrap justify-between items-center mb-2">
                        <div>
                          <div className="font-bold text-lg text-white">
                            {req.service}
                          </div>
                          <div className="text-gray-300 text-sm">
                            Domain:{" "}
                            <span className="font-medium">
                              {req.domain?.name || "Unknown"}
                            </span>
                          </div>
                        </div>
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-yellow-600">
                          Submitted
                        </span>
                      </div>
                      <div className="text-gray-400 text-xs">
                        Submitted on {formatDate(req.request_date)}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserPanel;
