/** @format */

import { io } from "socket.io-client";

let socket = null;

export function connectSocket() {
  if (socket?.connected) return socket;
  console.log("Socket URL:", import.meta.env.VITE_SOCKET_URL);

  socket = io("https://bot.uppist.xyz", {
    path: "/ominiai/api/socket.io/",
    transports: ["websocket"],
  });

  console.log("Socket connected:", socket.io.uri);
  return socket;
}

export function getSocket() {
  return socket;
}

export function disconnectSocket() {
  if (socket) {
    socket.disconnect();
    socket = null;
  }
}
