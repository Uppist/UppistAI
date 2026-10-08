/** @format */

import { useParams } from "react-router-dom";
import FirstGrid from "./FirstGrid/FirstGrid";
import SecondGrid from "./SecondGrid/SecondGrid";
import ThirdGrid from "./ThirdGrid";
import { ChannelContext, UserContext } from "../../../contexts/Context";
import { useContext, useEffect, useMemo, useState } from "react";
import api from "../../../api/axios";
import { toast } from "react-toastify";
import { connectSSE } from "../../../api/sse";

export default function Channels() {
  const { type } = useParams();
  // const [isClick, setIsClick] = useState(false);
  const [assignedUserId, setAssignedUserId] = useState("");
  const [isLoadingConversation, setIsLoadingConversation] = useState(false);
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [details, setDetails] = useState({
    intent: "",
    ai_agent: "",
  });
  const { conversations, setEachConversations, setSelectedSessionId } =
    useContext(ChannelContext);
  const { userDetails } = useContext(UserContext);

  const title =
    type === "whatsapp"
      ? "Whatsapp"
      : type === "website"
        ? "Website"
        : type === "email"
          ? "Email"
          : "Social Media";

  const filteredConversations = useMemo(() => {
    if (type === "whatsapp") {
      return conversations.filter((c) => c.channel === "whatsapp");
    }

    if (type === "website") {
      return conversations.filter((c) => c.channel === "web");
    }

    if (type === "chats") {
      return conversations.filter(
        (c) => c.channel === "instagram" || c.channel === "x",
      );
    }

    return [];
  }, [conversations, type]);

  async function handleEmailClick(email) {
    const conversation = filteredConversations.find(
      (c) => c.sessionId === email.sessionId,
    );

    if (!conversation) {
      toast.error("Conversation not found");
      return;
    }

    console.log(conversation.sessionId);

    setIsLoadingConversation(true);
    const token = localStorage.getItem("Token");

    try {
      // Load the messages
      if (
        userDetails?.user?.role === "admin" ||
        userDetails?.user?.role === "owner"
      ) {
        const messageRes = await api.get(
          `/v1/conversations/${email.sessionId}/messages`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
        setEachConversations(messageRes.data.messages);
      } else {
        const agentRes = await api.get(
          `dashboard/conversations/${email.sessionId}/messages`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
        setEachConversations(agentRes.data.messages);
        console.log("agent response");
      }

      {
        type === "chats"
          ? setSelectedEmail(conversation.contactName)
          : setSelectedEmail(conversation.contactIdentifier);
      }
      setSelectedSessionId(conversation.sessionId);
      setSelectedStatus(conversation.status);
      setDetails({
        intent: conversation.intentTag,
        ai_agent: conversation.aiAgentName,
      });

      // Join conversation if agent/admin
      if (
        (userDetails?.user?.role === "agent" &&
          conversation?.status !== "resolved") ||
        userDetails?.user?.role === "admin"
      ) {
        const joinRes = await api.post(
          `/dashboard/conversations/${conversation.sessionId}/join`,
          {},
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("Token")}`,
            },
          },
        );

        setAssignedUserId(joinRes.data.ticket.assignedUserId);
        // console.log(joinRes.data);
      }
    } catch (err) {
      console.error(err.response);
      toast.error(err.response?.data?.error || "Failed to load conversation");
    } finally {
      setIsLoadingConversation(false);
    }
  }

  return (
    <>
      <div className="grid grid-cols-[25%_50%_25%] h-full">
        <FirstGrid
          title={title}
          type={type}
          filteredConversations={filteredConversations}
          handleEmailClick={handleEmailClick}
        />
        <SecondGrid
          filteredConversations={filteredConversations}
          selectedEmail={selectedEmail}
          assignedUserId={assignedUserId}
          isLoadingConversation={isLoadingConversation}
          type={type}
          details={details}
          selectedStatus={selectedStatus}
        />
        <ThirdGrid
          filteredConversations={filteredConversations}
          details={details}
        />
      </div>
    </>
  );
}
