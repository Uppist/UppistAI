/** @format */

import { useParams } from "react-router-dom";
import FirstGrid from "./FirstGrid/FirstGrid";
import SecondGrid from "./SecondGrid/SecondGrid";
import ThirdGrid from "./ThirdGrid";
import { ChannelContext, UserContext } from "../../../contexts/Context";
import { useContext, useMemo, useState } from "react";
import api from "../../../api/axios";
import { toast } from "react-toastify";

export default function Channels() {
  const { type } = useParams();
  // const [isClick, setIsClick] = useState(false);
  const [assignedUserId, setAssignedUserId] = useState("");
  const [isLoadingConversation, setIsLoadingConversation] = useState(false);
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [details, setDetails] = useState({
    intent: "",
    ai_agent: "",
  });
  const {
    conversations,
    // setSaveAPI,
    // saveAPI,
    setEachConversations,
    setSelectedSessionId,
  } = useContext(ChannelContext);
  const { userDetails } = useContext(UserContext);

  // function getStoredApiKey() {
  //   const key = localStorage.getItem(storage_key);
  //   const expiry = localStorage.getItem(expiry_date);

  //   if (!key || !expiry) return "";

  //   if (Date.now() > Number(expiry)) {
  //     localStorage.removeItem(storage_key);
  //     localStorage.removeItem(expiry_date);
  //     return "";
  //   }

  //   return key;
  // }

  // const [apiKey, setApiKey] = useState(() => getStoredApiKey());
  // const [isApiKeyAccepted, setIsApiKeyAccepted] = useState(() =>
  //   Boolean(localStorage.getItem(storage_key)),
  // );
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

    setIsLoadingConversation(true);
    const token = localStorage.getItem("Token");

    try {
      // Load the messages
      const messageRes = await api.get(
        `/v1/conversations/${email.sessionId}/messages`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      setEachConversations(messageRes.data.messages);
      {
        type === "chats"
          ? setSelectedEmail(conversation.contactName)
          : setSelectedEmail(conversation.contactIdentifier);
      }
      setSelectedSessionId(conversation.sessionId);
      setDetails({
        intent: conversation.intentTag,
        ai_agent: conversation.aiAgentName,
      });

      // Join conversation if agent/admin
      if (
        userDetails?.user?.role === "agent" ||
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

        setAssignedUserId(joinRes.data.assignedUserId);
      }
    } catch (err) {
      console.error(err.response);
      toast.error(err.response?.data?.error || "Failed to load conversation");
    } finally {
      setIsLoadingConversation(false);
    }
  }

  // useEffect(() => {
  //   if (type !== "website" || !apiKey) return;

  //   if (isApiKeyAccepted) {
  //     setSaveAPI(apiKey);
  //   }
  // }, [apiKey, setSaveAPI, type]);

  // const shouldShowApiKeyModal =
  //   filteredConversations.length > 0 && !isApiKeyAccepted;
  // console.log();
  return (
    <>
      <div className='grid grid-cols-[25%_50%_25%] h-full'>
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
        />
        <ThirdGrid
          filteredConversations={filteredConversations}
          details={details}
        />

        {/* {shouldShowApiKeyModal && (
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
        )} */}
      </div>
    </>
  );
}
