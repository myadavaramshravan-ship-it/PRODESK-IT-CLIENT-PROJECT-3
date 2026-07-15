import { createContext, useEffect, useState } from "react";
import socket from "../services/socket";

export const ChatContext = createContext();

export function ChatProvider({ children }) {
  const [messages, setMessages] = useState([]);
  const [connected, setConnected] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    socket.on("connect", () => {
      setConnected(true);
      setLoading(false);
    });

    socket.on("disconnect", () => {
      setConnected(false);
    });

    socket.on("receive_message", (message) => {
      setMessages((prev) => [...prev, message]);
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("receive_message");
    };
  }, []);

  return (
    <ChatContext.Provider
      value={{
        messages,
        connected,
        loading,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}