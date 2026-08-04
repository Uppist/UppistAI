/** @format */

import { useParams } from "react-router-dom";
import FirstGrid from "./FirstGrid/FirstGrid";
import SecondGrid from "./SecondGrid/SecondGrid";
import ThirdGrid from "./ThirdGrid";
import { ChannelContext } from "../../../contexts/Context";
import { useContext, useEffect, useMemo, useState } from "react";
import { Box, CircularProgress } from "@mui/material";
import api from "../../../api/axios";
import { toast } from "react-toastify";
// import { useContext } from "react";
// import { ChannelContext } from "../../../contexts/Context";
const storage_key = "website_api_key";
const expiry_date = "website_api_key_expiry";

export default function Channels() {
  const { type } = useParams();
  const [isClick, setIsClick] = useState(false);
  const [selectedEmail, setSelectedEmail] = useState(null);
  const { conversations, setSaveAPI, saveAPI, setEachConversations } =
    useContext(ChannelContext);

  function getStoredApiKey() {
    const key = localStorage.getItem(storage_key);
    const expiry = localStorage.getItem(expiry_date);

    if (!key || !expiry) return "";

    if (Date.now() > Number(expiry)) {
      localStorage.removeItem(storage_key);
      localStorage.removeItem(expiry_date);
      return "";
    }

    return key;
  }

  const [apiKey, setApiKey] = useState(() => getStoredApiKey());
  const [isApiKeyAccepted, setIsApiKeyAccepted] = useState(() =>
    Boolean(localStorage.getItem(storage_key)),
  );
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

    if (type === "social_media") {
      return conversations.filter(
        (c) => c.channel === "instagram" || c.channel === "x",
      );
    }

    return [];
  }, [conversations, type]);
  async function Enter() {
    if (type !== "website" || !filteredConversations.length) {
      // toast.error("No conversations available to validate the API key.");
      return;
    }

    setIsClick(true);

    try {
      const headers = {
        Authorization: `Bearer ${apiKey}`,
      };

      // Validate the API key
      await api.get(
        `/v1/conversations/${filteredConversations[0].sessionId}/messages`,
        { headers },
      );

      // API key is valid
      setSaveAPI(apiKey);
      setIsApiKeyAccepted(true);

      localStorage.setItem(storage_key, apiKey);
      localStorage.setItem(
        expiry_date,
        (Date.now() + 7 * 24 * 60 * 60 * 1000).toString(),
      );
    } catch (err) {
      // API key is invalid
      toast.error(err.response?.data?.error || "Invalid API key");
    } finally {
      setIsClick(false);
    }
  }

  function handleEmailClick(email) {
    const headers =
      type === "website"
        ? { Authorization: `Bearer ${saveAPI}` }
        : { Authorization: `Bearer ${localStorage.getItem("Token")}` };
    const conversation = filteredConversations.find(
      (c) => c.sessionId === email.sessionId,
    );

    if (!conversation) {
      toast.error("Conversation not found");
      return;
    }
    console.log("Email:", conversation.contactIdentifier);

    // console.log(saveAPI);

    api
      .get(`/v1/conversations/${email.sessionId}/messages`, {
        headers,
      })
      .then((res) => {
        console.log(res.data.messages);
        setEachConversations(res.data.messages);
        setSelectedEmail(conversation.contactIdentifier);
      })
      .catch((err) => {
        console.log(err.response);
        toast.error(err.response?.data?.error);
      });

    // console.log(email.sessionId);
  }

  useEffect(() => {
    if (type !== "website" || !apiKey) return;

    if (isApiKeyAccepted) {
      setSaveAPI(apiKey);
    }
  }, [apiKey, isApiKeyAccepted, setSaveAPI, type]);

  const shouldShowApiKeyModal = type === "website" && !isApiKeyAccepted;

  return (
    <>
      <div className='grid grid-cols-[25%_50%_25%] h-full'>
        <FirstGrid
          title={title}
          filteredConversations={filteredConversations}
          handleEmailClick={handleEmailClick}
        />
        <SecondGrid
          filteredConversations={filteredConversations}
          selectedEmail={selectedEmail}
        />
        <ThirdGrid />

        {shouldShowApiKeyModal && (
          <div className='fixed inset-0 flex items-center justify-center left-18'>
            <div className='absolute inset-0 bg-black/40 backdrop-blur-sm'></div>
            <div className='bg-white p-4 absolute flex flex-col items-end gap-y-2.5 w-1/2'>
              <div className='flex flex-col z-100 items-center gap-y-2'>
                <h3 className='text-center text-xl text-bg font-semibold'>
                  Enter API Key
                </h3>
                <p className='text-base font-normal text-center text-grey w-9/12'>
                  Paste the API key you previously generated to access your
                  website chat history.
                </p>
                <div className='flex items-center gap-x-2'>
                  <input
                    type='password'
                    name='api'
                    value={apiKey}
                    onChange={(e) => {
                      setApiKey(e.target.value);
                      setIsApiKeyAccepted(false);
                    }}
                    className='input'
                    id=''
                  />
                </div>
                <button
                  className='button w-full'
                  onClick={Enter}
                  disabled={!apiKey}
                >
                  {isClick ? (
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <CircularProgress
                        size={20}
                        sx={{ color: "white" }}
                        aria-label='loading...'
                      />
                    </Box>
                  ) : (
                    "Enter"
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
