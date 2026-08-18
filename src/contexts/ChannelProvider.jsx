/** @format */

import { ChannelContext, UserContext } from "./Context";
import api from "../api/axios";
// import { useNavigate } from "react-router-dom";
import { connectSSE, disconnectSSE } from "../api/sse";

import { useCallback, useContext, useEffect, useRef, useState } from "react";

const getConversationSessionId = (value) =>
  value?.session_id ??
  value?.sessionId ??
  value?.conversation_id ??
  value?.conversationId ??
  null;

const getMessageContent = (value) =>
  value?.content ?? value?.message ?? value?.text ?? "";

const getMessageCreatedAt = (value) =>
  value?.created_at ?? value?.createdAt ?? new Date().toISOString();

export default function ChannelProvider({ children }) {
  const [conversations, setConversations] = useState([]);
  const [eachConversations, setEachConversations] = useState([]);
  const [selectedSessionId, setSelectedSessionId] = useState(null);
  const [saveAPI, setSaveAPI] = useState(() => {
    return JSON.parse(localStorage.getItem("saveAPI")) || false;
  });

  const [activeChannel, setActiveChannel] = useState([]);
  const userContext = useContext(UserContext);
  const isAuthenticated =
    userContext?.isAuthenticated ?? Boolean(localStorage.getItem("Token"));

  // const navigate = useNavigate();

  // useEffect(() => {
  //   const token = localStorage.getItem("Token");
  //   const headers = {
  //     Authorization: `Bearer ${token}`,
  //   };

  //   //get all conversations
  //   api
  //     .get("/dashboard/conversations", { headers })
  //     .then((res) => {
  //       const conversationsData = res.data.conversations || res.data;
  //       setConversations(conversationsData);
  //       console.log(res.data);
  //     })
  //     .catch((err) => {
  //       console.log("Agent conversations error:", err);
  //       // navigate("/signin");
  //     });

  //   api
  //     .get("/channels", { headers })
  //     .then((res) => {
  //       const channelsData = res.data.channels || res.data;
  //       setActiveChannel(channelsData);
  //       console.log(res.data);
  //     })
  //     .catch((err) => {
  //       console.log("Agent channels error:", err);
  //       // navigate("/signin");
  //     });
  // }, []);

  const fetchChannelData = useCallback(async () => {
    const token = localStorage.getItem("Token");
    if (!token) return;
    const headers = { Authorization: `Bearer ${token}` };
    try {
      const [conversationRes, channelRes] = await Promise.all([
        api.get("/dashboard/conversations", { headers }),
        api.get("/channels", { headers }),
      ]);
      setConversations(
        conversationRes.data.conversations || conversationRes.data,
      );
      setActiveChannel(channelRes.data.channels || channelRes.data);
    } catch (err) {
      console.error("Channel fetch error:", err);
    }
  }, []);

  const selectedSessionIdRef = useRef(null);

  useEffect(() => {
    selectedSessionIdRef.current = selectedSessionId;
  }, [selectedSessionId]);

  useEffect(() => {
    if (!isAuthenticated) return;

    fetchChannelData();
    const interval = setInterval(() => {
      fetchChannelData();
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [isAuthenticated, fetchChannelData]);
  //listen for incoming message
  useEffect(() => {
    if (!selectedSessionId || !saveAPI) return;

    connectSSE({
      sessionId: selectedSessionId,
      apiKey: saveAPI,

      onConnected(data) {
        console.log("Connected", data);
      },

      onAssistantMessage(message) {
        const sessionId = getConversationSessionId(message);
        const content = getMessageContent(message);
        const createdAt = getMessageCreatedAt(message);

        if (!sessionId || sessionId !== selectedSessionIdRef.current) return;

        const normalizedMessage = {
          ...message,
          session_id: sessionId,
          sessionId,
          content,
          created_at: createdAt,
        };

        setEachConversations((prev) => {
          const alreadyExists = prev.some(
            (item) =>
              (item?.id &&
                normalizedMessage?.id &&
                item.id === normalizedMessage.id) ||
              (item?.created_at === normalizedMessage.created_at &&
                item?.content === normalizedMessage.content),
          );

          return alreadyExists ? prev : [...prev, normalizedMessage];
        });

        setConversations((prev) =>
          prev.map((conversation) => {
            const conversationSessionId =
              getConversationSessionId(conversation);

            return conversationSessionId === sessionId
              ? {
                  ...conversation,
                  last_message: content,
                  updated_at: createdAt,
                }
              : conversation;
          }),
        );
      },

      onAgentMessage(message) {
        const sessionId = getConversationSessionId(message);
        const content = getMessageContent(message);
        const createdAt = getMessageCreatedAt(message);

        if (!sessionId || sessionId !== selectedSessionIdRef.current) return;

        const normalizedMessage = {
          ...message,
          session_id: sessionId,
          sessionId,
          content,
          created_at: createdAt,
        };

        setEachConversations((prev) => {
          const alreadyExists = prev.some(
            (item) =>
              (item?.id &&
                normalizedMessage?.id &&
                item.id === normalizedMessage.id) ||
              (item?.created_at === normalizedMessage.created_at &&
                item?.content === normalizedMessage.content),
          );

          return alreadyExists ? prev : [...prev, normalizedMessage];
        });

        setConversations((prev) =>
          prev.map((conversation) => {
            const conversationSessionId =
              getConversationSessionId(conversation);

            return conversationSessionId === sessionId
              ? {
                  ...conversation,
                  last_message: content,
                  updated_at: createdAt,
                }
              : conversation;
          }),
        );
      },

      onStatus(status) {
        // setConversationStatus(status);
        console.log(status);
      },

      onError(error) {
        console.error(error);
      },
    });

    return () => disconnectSSE();
  }, [selectedSessionId, saveAPI]);

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
        fetchChannelData,
      }}
    >
      {children}
    </ChannelContext.Provider>
  );
}
