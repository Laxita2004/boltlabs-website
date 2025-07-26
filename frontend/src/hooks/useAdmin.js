import { useState, useCallback } from "react";
import { adminAPI } from "../services/api.js";

export const useAdmin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [dashboardStats, setDashboardStats] = useState({
    totalClients: 0,
    activeProjects: 0,
    teamMembers: 0,
    completedProjects: 0,
  });

  const [domains, setDomains] = useState([]);
  const [members, setMembers] = useState([]);
  const [requests, setRequests] = useState([]);
  const [services, setServices] = useState([]);

  const testConnection = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await adminAPI.testConnection();
      console.log("Connection test successful:", response.data);
      return response.data;
    } catch (err) {
      console.error("Connection test failed:", err);
      setError(
        err.response?.data?.error ||
          err.message ||
          "Failed to connect to server"
      );
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchDashboardStats = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      await testConnection();

      const [domainsRes, membersRes, requestsRes, servicesRes] =
        await Promise.all([
          adminAPI.getDomains(),
          adminAPI.getMembers(),
          adminAPI.getRequests(),
          adminAPI.getServices(),
        ]);

      const stats = {
        totalClients: domainsRes.data.length,
        activeProjects: servicesRes.data.services.filter(
          (s) => s.status === "ACTIVE"
        ).length,
        teamMembers: membersRes.data.length,
        completedProjects: servicesRes.data.services.filter(
          (s) => s.status === "COMPLETED"
        ).length,
      };

      setDashboardStats(stats);
    } catch (err) {
      console.error("Dashboard stats error:", err);
      setError(
        err.response?.data?.error ||
          err.message ||
          "Failed to fetch dashboard stats"
      );
    } finally {
      setLoading(false);
    }
  }, [testConnection]);

  const fetchDomains = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await adminAPI.getDomains();
      setDomains(response.data);
    } catch (err) {
      console.error("Fetch domains error:", err);
      setError(
        err.response?.data?.error || err.message || "Failed to fetch domains"
      );
    } finally {
      setLoading(false);
    }
  }, []);

  const createDomain = useCallback(async (domainData) => {
    try {
      setLoading(true);
      setError(null);
      const response = await adminAPI.createDomain(domainData);
      setDomains((prev) => [...prev, response.data]);
      return response.data;
    } catch (err) {
      console.error("Create domain error:", err);
      setError(
        err.response?.data?.error || err.message || "Failed to create domain"
      );
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const deleteDomain = useCallback(async (domainId) => {
    try {
      setLoading(true);
      setError(null);
      await adminAPI.deleteDomain(domainId);
      setDomains((prev) =>
        prev.filter((domain) => domain.domain_id !== domainId)
      );
    } catch (err) {
      console.error("Delete domain error:", err);
      setError(
        err.response?.data?.error || err.message || "Failed to delete domain"
      );
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchMembers = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await adminAPI.getMembers();
      setMembers(response.data);
    } catch (err) {
      console.error("Fetch members error:", err);
      setError(
        err.response?.data?.error || err.message || "Failed to fetch members"
      );
    } finally {
      setLoading(false);
    }
  }, []);

  const createMember = useCallback(async (memberData) => {
    try {
      setLoading(true);
      setError(null);
      const response = await adminAPI.createMember(memberData);
      setMembers((prev) => [...prev, response.data]);
      return response.data;
    } catch (err) {
      console.error("Create member error:", err);
      setError(
        err.response?.data?.error || err.message || "Failed to create member"
      );
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const deleteMember = useCallback(async (memberId) => {
    try {
      setLoading(true);
      setError(null);
      await adminAPI.deleteMember(memberId);
      setMembers((prev) =>
        prev.filter((member) => member.member_id !== memberId)
      );
    } catch (err) {
      console.error("Delete member error:", err);
      setError(
        err.response?.data?.error || err.message || "Failed to delete member"
      );
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchRequests = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await adminAPI.getRequests();

      if (response.status === 304) {
        console.log("No new request data (304 Not Modified)");
        return;
      }

      setRequests(response.data?.requests || []);
    } catch (err) {
      console.error("Fetch requests error:", err);
      setError(
        err.response?.data?.error || err.message || "Failed to fetch requests"
      );
    } finally {
      setLoading(false);
    }
  }, []);

  const respondToRequest = useCallback(async (reqId, responseData) => {
    try {
      setLoading(true);
      setError(null);
      const response = await adminAPI.respondToRequest(reqId, responseData);
      setRequests((prev) => prev.filter((req) => req.req_id !== reqId));
      return response.data;
    } catch (err) {
      console.error("Respond to request error:", err);
      setError(
        err.response?.data?.error ||
          err.message ||
          "Failed to respond to request"
      );
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchServices = useCallback(async (params = {}) => {
    try {
      setLoading(true);
      setError(null);
      const response = await adminAPI.getServices(params);
      setServices(response.data);
    } catch (err) {
      console.error("Fetch services error:", err);
      setError(
        err.response?.data?.error || err.message || "Failed to fetch services"
      );
    } finally {
      setLoading(false);
    }
  }, []);

  const clearError = useCallback(() => setError(null), []);

  return {
    loading,
    error,
    dashboardStats,
    domains,
    members,
    requests,
    services,

    testConnection,
    fetchDashboardStats,
    fetchDomains,
    createDomain,
    deleteDomain,
    fetchMembers,
    createMember,
    deleteMember,
    fetchRequests,
    respondToRequest,
    fetchServices,
    clearError,
  };
};
