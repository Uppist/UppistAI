/** @format */

import { useEffect, useState } from "react";
import { AuditContext } from "./Context";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

export default function AuditProvider({ children }) {
  const [auditLog, setAuditLog] = useState([]);
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(() =>
    Boolean(localStorage.getItem("Token")),
  );
  const [pagination, setPagination] = useState({
    page: 1,
    pageSize: 20,
    total: 0,
    totalPages: 0,
    hasNextPage: false,
    hasPreviousPage: false,
  });

  useEffect(() => {
    const syncAuthState = () => {
      setIsAuthenticated(Boolean(localStorage.getItem("Token")));
    };

    syncAuthState();
    window.addEventListener("auth:token-updated", syncAuthState);
    window.addEventListener("auth:token-removed", syncAuthState);

    return () => {
      window.removeEventListener("auth:token-updated", syncAuthState);
      window.removeEventListener("auth:token-removed", syncAuthState);
    };
  }, []);

  const getAuditLogs = async (page = 1) => {
    if (!isAuthenticated) return;

    try {
      const token = localStorage.getItem("Token");

      const res = await api.get("dashboard/audit-logs", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          page,
        },
      });

      setAuditLog(res.data.logs || []);
      setPagination(res.data.pagination);
    } catch (err) {
      if (err.response?.status === 401) {
        localStorage.removeItem("Token");
        window.dispatchEvent(new Event("auth:token-removed"));
        navigate("/signin");
      }
    }
  };

  useEffect(() => {
    getAuditLogs(1);
  }, [isAuthenticated]);

  return (
    <AuditContext.Provider
      value={{ auditLog, setAuditLog, pagination, getAuditLogs }}
    >
      {children}
    </AuditContext.Provider>
  );
}
