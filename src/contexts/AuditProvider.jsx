/** @format */

import { useEffect, useState } from "react";
import { AuditContext } from "./Context";
import api from "../api/axios";

export default function AuditProvider({ children }) {
  const [auditLog, setAuditLog] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(() =>
    Boolean(localStorage.getItem("Token")),
  );

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

  useEffect(() => {
    if (!isAuthenticated) return;

    const token = localStorage.getItem("Token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    api
      .get("dashboard/audit-logs", { headers })
      .then((res) => {
        setAuditLog(res.data.logs || []);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, [isAuthenticated]);
  return (
    <AuditContext.Provider value={{ auditLog, setAuditLog }}>
      {children}
    </AuditContext.Provider>
  );
}
