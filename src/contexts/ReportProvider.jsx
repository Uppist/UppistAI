/** @format */

import { useEffect, useState } from "react";
import { ReportContext } from "./Context";
import api from "../api/axios";

export default function ReportProvider({ children }) {
  const [totalConversations, setTotalConversations] = useState(0);
  const [resolved, setResolved] = useState(0);
  const [responseTime, setResponseTime] = useState(0);
  const [Csat, setCsat] = useState(0);
  const [activeChannels, setActiveChannels] = useState([]);
  const [distribution, setDistribution] = useState([]);
  const [liveAgentResolved, setLiveAgentResolved] = useState([]);
  const [contacts, setContacts] = useState([]);
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
    const headers = { Authorization: `Bearer ${token}` };

    api.get("dashboard/reports", { headers }).then((res) => {
      console.log(res.data);
      setTotalConversations(res.data.kpis.totalConversations);
      setResolved(res.data.kpis.resolvedByAi);
      setResponseTime(res.data.kpis.avgResponseTime);
      setCsat(res.data.kpis.avgCsat);
      setLiveAgentResolved(res.data.kpis.liveAgentsResolved);
      setActiveChannels(res.data.volume);
      setDistribution(res.data.csatDistribution);
      setContacts(res.data.kpis.newContacts);
    });
  }, [isAuthenticated]);

  return (
    <ReportContext.Provider
      value={{
        totalConversations,
        resolved,
        responseTime,
        Csat,
        activeChannels,
        distribution,
        liveAgentResolved,
        contacts,
      }}
    >
      {children}
    </ReportContext.Provider>
  );
}
