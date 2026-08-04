/** @format */

import { useState } from "react";
import { DashboardContext } from "./Context";

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
