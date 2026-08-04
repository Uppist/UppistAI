/** @format */

import { useEffect, useState } from "react";
import { ChannelContext } from "./Context";
import api from "../api/axios";
// import { useNavigate } from "react-router-dom";

export default function ChannelProvider({ children }) {
  const [conversations, setConversations] = useState([]);
  const [eachConversations, setEachConversations] = useState([]);
  const [selectedSessionId, setSelectedSessionId] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(() =>
    Boolean(localStorage.getItem("Token")),
  );
  const [saveAPI, setSaveAPI] = useState(() => {
    return JSON.parse(localStorage.getItem("saveAPI")) || false;
  });

  const [activeChannel, setActiveChannel] = useState(null);

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
      .get("/dashboard/conversations", { headers })
      .then((res) => {
        const conversationsData = res.data.conversations || res.data;
        setConversations(conversationsData);
      })
      .catch((err) => {
        console.log("Agent conversations error:", err);
      });

    api
      .get("/channels", { headers })
      .then((res) => {
        const channelsData = res.data.channels || res.data;
        setActiveChannel(channelsData);
      })
      .catch((err) => {
        console.log("Agent channels error:", err);
      });
  }, [isAuthenticated]);

  return (
    <ChannelContext.Provider
      value={{
        conversations,
        setConversations,
        eachConversations,
        setEachConversations,
        saveAPI,
        setSaveAPI,
        activeChannel,
        setActiveChannel,
        selectedSessionId,
        setSelectedSessionId,
      }}
    >
      {children}
    </ChannelContext.Provider>
  );
}
