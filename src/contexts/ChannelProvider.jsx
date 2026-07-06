/** @format */

import { useEffect, useState } from "react";
import { ChannelContext } from "./Context";
import api from "../api/axios";
// import { useNavigate } from "react-router-dom";

export default function ChannelProvider({ children }) {
  const [conversations, setConversations] = useState([]);
  const [eachConversations, setEachConversations] = useState([]);

  // const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("Token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    //get all conversations
    api
      .get("/dashboard/conversations", { headers })
      .then((res) => {
        const conversationsData = res.data.conversations || res.data;
        setConversations(conversationsData);
      })
      .catch((err) => {
        console.log("Agent conversations error:", err);
        // navigate("/signin");
      });
  }, []);
  return (
    <ChannelContext.Provider
      value={{
        conversations,
        setConversations,
        eachConversations,
        setEachConversations,
      }}
    >
      {children}
    </ChannelContext.Provider>
  );
}
