import { useContext, useEffect, useRef } from "react";
import { ChatContext } from "../context/ChatContext";

function MessageList() {
  const { messages } = useContext(ChatContext);

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  return (
    <div className="message-list">
      {messages.length === 0 ? (
        <div className="empty-state">
          <h2>No Messages</h2>

          <p>Start a conversation...</p>
        </div>
      ) : (
        messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${
              msg.sender === "Staff"
                ? "staff-message"
                : "customer-message"
            }`}
          >
            <strong>{msg.sender}</strong>

            <p>{msg.text}</p>

            <small>{msg.time}</small>
          </div>
        ))
      )}

      <div ref={bottomRef}></div>
    </div>
  );
}

export default MessageList;