import MessageList from "../components/MessageList";
import MessageInput from "../components/MessageInput";

function Chat() {
  return (
    <div className="chat-container">

      <div className="chat-header">
        <div>
          <h1>🔧 Electronics Repair Shop</h1>
          <p>Real-Time Customer Support</p>
        </div>

        <span className="status">
          ● Online
        </span>
      </div>

      <MessageList />

      <MessageInput />

    </div>
  );
}

export default Chat;