/** @format */

// src/api/sse.js

import { fetchEventSource } from "@microsoft/fetch-event-source";

let abortController = null;

export function connectSSE({
  sessionId,
  apiKey,
  onConnected,
  onAssistantMessage,
  onAgentMessage,
  onStatus,
  onError,
}) {
  // Close any previous connection

  abortController?.abort();

  abortController = new AbortController();

  fetchEventSource(
    `${import.meta.env.VITE_API_URL}/v1/conversations/${sessionId}/events`,
    {
      method: "GET",

      headers: {
        Authorization: `Bearer ${apiKey}`,
        Accept: "text/event-stream",
      },

      signal: abortController.signal,

      async onopen(response) {
        if (response.ok) {
          console.log("SSE Connected");
          return;
        }

        throw new Error("Unable to connect");
      },

      onmessage(event) {
        if (!event.data) return;

        const data = JSON.parse(event.data);

        switch (event.event) {
          case "connected":
            onConnected?.(data);
            break;

          case "assistant_message":
            onAssistantMessage?.(data);
            break;

          case "agent_message":
            onAgentMessage?.(data);
            break;

          case "status":
            onStatus?.(data);
            break;

          case "ping":
            // Ignore keep-alive
            break;

          default:
            console.log("Unknown event:", event.event, data);
        }
      },

      onerror(error) {
        console.error(error);
        onError?.(error);

        // Throw so fetch-event-source reconnects automatically
        throw error;
      },
    },
  );
}

export function disconnectSSE() {
  abortController?.abort();
  abortController = null;
}
