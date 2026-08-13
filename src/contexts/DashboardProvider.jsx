/** @format */

import { useEffect, useState } from "react";
import { DashboardContext } from "./Context";
import api from "../api/axios";

export default function DashboardProvider({ children }) {
  const [conversations, setConversations] = useState(0);
  const [resolved, setResolved] = useState(0);
  const [onlineAgent, setOnlineAgent] = useState(0);
  const [responseTime, setResponseTime] = useState(0);
  const [Csat, setCsat] = useState(0);
  const [recentConversation, setRecentConversation] = useState([]);
  const [activeChannels, setActiveChannels] = useState([]);
  const [topIntent, setTopIntent] = useState([]);
  const [liveAgentResolved, setLiveAgentResolved] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("Token");
    const headers = { Authorization: `Bearer ${token}` };

    api.get("dashboard/stats", { headers }).then((res) => {
      console.log(res.data);
      setConversations(res.data.kpis.activeConversations);
      setOnlineAgent(res.data.kpis.onlineLiveAgents);
      setResolved(res.data.kpis.resolvedToday);
      setResponseTime(res.data.kpis.avgResponseTime);
      setCsat(res.data.kpis.avgCsat);
      setRecentConversation(res.data.recentConversations);
      setActiveChannels(res.data.activeByChannel);
      setTopIntent(res.data.topIntentTags);
    });
  }, []);

  return (
    <DashboardContext.Provider
      value={{
        conversations,
        setConversations,
        resolved,
        setResolved,
        onlineAgent,
        setOnlineAgent,
        responseTime,
        setResponseTime,
        Csat,
        setCsat,
        recentConversation,
        setRecentConversation,
        activeChannels,
        setActiveChannels,
        topIntent,
        setTopIntent,
        liveAgentResolved,
        setLiveAgentResolved,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}
