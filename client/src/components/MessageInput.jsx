import { useState } from "react";
import socket from "../services/socket";
import sanitize from "../utils/sanitize";

function MessageInput() {
  const [text, setText] = useState("");
  const [error, setError] = useState(false);

  const sendMessage = () => {
    if (!text.trim()) {
      setError(true);
      return;
    }

    const cleanText = sanitize(text);

    socket.emit("send_message", {
      sender: "Staff",
      text: cleanText,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    });

    console.log(
      "[Analytics] User interacted with Real-Time Chat Support"
    );

    setText("");
    setError(false);
  };

  return (
    <div className="message-input">
      <input
        type="text"
        placeholder="Type your message..."
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          if (e.target.value.trim()) {
            setError(false);
          }
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            sendMessage();
          }
        }}
        className={error ? "error" : ""}
        aria-label="Message input"
      />

      <button onClick={sendMessage} aria-label="Send message">
        Send
      </button>
    </div>
  );
}

export default MessageInput;