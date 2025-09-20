import { useState } from "react";

export default function Chatbot() {
  const [messages, setMessages] = useState([]);

  const qaPairs = [
    { q: "what crop is best for summer", a: "Maize, Rice, and Cotton are great summer crops." },
    { q: "what crop is best for winter", a: "Wheat, Mustard, and Barley are good winter crops." },
    { q: "best crop for rainy season", a: "Rice, Sugarcane, and Jute thrive in rainy season." },
    { q: "hello", a: "Hello! How can I help you with farming today?" },
  ];

  const handleSend = (input) => {
    const newMsg = { text: input, sender: "user" };
    setMessages((prev) => [...prev, newMsg]);

    // Normalize input (lowercase, remove extra spaces)
    const normalized = input.toLowerCase().trim();

    // Try to find an answer
    const found = qaPairs.find((p) => normalized.includes(p.q));
    const reply = found
      ? found.a
      : "Sorry, I don't have an answer for that yet.";

    setMessages((prev) => [...prev, { text: reply, sender: "bot" }]);
  };

  return (
    <div className="chat-container">
      <h2 className="text-center font-bold mb-2">Chat with AI Assistant</h2>
      <div className="messages bg-gray-100 p-4 rounded-md h-80 overflow-y-auto mb-2">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`mb-2 ${
              msg.sender === "user"
                ? "text-right text-green-700"
                : "text-left text-gray-700"
            }`}
          >
            <span className="px-2 py-1 rounded-md bg-white shadow">
              {msg.text}
            </span>
          </div>
        ))}
      </div>
      <ChatInput onSend={handleSend} />
    </div>
  );
}

function ChatInput({ onSend }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    onSend(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex">
      <input
        type="text"
        className="flex-grow border rounded-l-md px-2 py-1"
        placeholder="Ask a question..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="bg-green-600 text-white px-4 rounded-r-md"
      >
        Send
      </button>
    </form>
  );
}
