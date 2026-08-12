/** @format */

export function registerSocketHandlers({
  socket,
  selectedSessionIdRef,
  setEachConversations,
  setConversations,
  setActiveChannel,
}) {
  socket.on("connect", () => {
    console.log("Socket connected:", socket.id);

    socket.onAny((event, ...args) => {
      console.log(event, args);
    });
  });

  socket.on("disconnect", (reason) => {
    console.log("Socket disconnected:", reason);
  });

  socket.on("connect_error", (err) => {
    console.log("Socket error:", err.message);
  });

  socket.on("new_message", (message) => {
    const sessionId = message.sessionId || message.conversationId;

    if (selectedSessionIdRef.current === sessionId) {
      setEachConversations((prev) => [...prev, message]);
    }
  });

  socket.on("conversation_update", (conversation) => {
    setConversations((prev) =>
      prev.map((item) =>
        item.sessionId === conversation.sessionId || item.id === conversation.id
          ? { ...item, ...conversation }
          : item,
      ),
    );
  });

  socket.on("active_channels", (channels) => {
    setActiveChannel(channels);
  });

  socket.on("channels_updated", (channels) => {
    setActiveChannel(channels);
  });
}
