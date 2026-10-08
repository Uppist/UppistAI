import React, { useEffect, useState, useCallback } from "react";
import api from "../api/axios";
import { AgentDashboardContext } from "./Context";

export default function AgentDashboardProvider({ children }) {
  const [conversations, setConversations] = useState(0);
  const [resolved, setResolved] = useState(0);
  const [responseTime, setResponseTime] = useState(0);
  const [Csat, setCsat] = useState(0);
  const [ticketClosed, setTicketClosed] = useState(0);
  const [recentConversation, setRecentConversation] = useState([]);

  const fetchDashboardStats = useCallback(async () => {
    try {
      const token = localStorage.getItem("Token");
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      const res = await api.get("dashboard/agents/me/stats", {
        headers,
      });

      console.log(res.data);

      setConversations(res.data.kpis.totalConversations);
      setResolved(res.data.kpis.resolvedToday);
      setResponseTime(res.data.kpis.avgResponseTime);
      setCsat(res.data.kpis.avgCsat);
      setTicketClosed(res.data.kpis.totalNumberOfTicketsClosed);
      setRecentConversation(res.data.recentConversations);
    } catch (error) {
      console.error("Failed to fetch dashboard stats:", error);
    }
  }, []);

  useEffect(() => {
    fetchDashboardStats();
  }, [fetchDashboardStats]);

  return (
    <AgentDashboardContext.Provider
      value={{
        conversations,
        setConversations,
        resolved,
        setResolved,
        responseTime,
        setResponseTime,
        Csat,
        setCsat,
        ticketClosed,
        setTicketClosed,
        recentConversation,
        setRecentConversation,
        refreshDashboard: fetchDashboardStats,
      }}
    >
      {children}
    </AgentDashboardContext.Provider>
  );
}
