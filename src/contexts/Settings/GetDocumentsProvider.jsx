/** @format */

import { useCallback, useEffect, useState } from "react";
import { GetDocumentContext } from "../Context";
import api from "../../api/axios";

export default function GetDocumentsProvider({ children }) {
  const [documents, setDocuments] = useState([]);
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

  const fetchDocumentData = useCallback(async () => {
    if (!isAuthenticated) return;

    const token = localStorage.getItem("Token");

    try {
      const res = await api.get("kb/documents", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(res.data);
      setDocuments(res.data.documents);
    } catch (err) {
      console.log(err.response);
    }
  }, [isAuthenticated, setDocuments]);

  useEffect(() => {
    if (!isAuthenticated) return;

    const interval = setInterval(() => {
      fetchDocumentData();
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [isAuthenticated, fetchDocumentData]);
  return (
    <GetDocumentContext.Provider value={{ documents, setDocuments }}>
      {children}
    </GetDocumentContext.Provider>
  );
}
