/** @format */

import { useEffect, useState } from "react";
import { CreateAgentContext } from "../Context";
import api from "../../api/axios";

export default function CreateAgentProvider({ children }) {
  const [getAgents, setGetAgents] = useState([]);
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

    api
      .get("/agents", { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => {
        console.log(res.data);
        setGetAgents(res.data.agents);
      });
  }, [isAuthenticated, setGetAgents]);
  return (
    <CreateAgentContext.Provider value={{ getAgents, setGetAgents }}>
      {children}
    </CreateAgentContext.Provider>
  );
}
