<input
  type="text"
  placeholder="Type your message..."
  value={text}
  aria-label="Message input"
  className={error ? "error" : ""}
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
/>