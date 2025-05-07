// components/ChatInput.jsx
import React, { useState } from "react";
import { Mic } from "lucide-react";

export default function ChatInput({ onSend, loading }) {
  const [input, setInput] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    await onSend(input);
    setInput("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center w-full max-w-3xl mx-auto mt-6 space-x-3"
    >
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-grow px-4 py-3 rounded-full bg-black/60 text-white border border-gray-600 placeholder-gray-400 shadow-inner"
        placeholder="Ask anything..."
        disabled={loading}
      />
      <button
        type="submit"
        className={`px-4 py-2 rounded-full ${
          loading
            ? "bg-gray-600 cursor-not-allowed"
            : "bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-105"
        } text-white shadow`}
        disabled={loading}
      >
        {loading ? "⏳" : "➤"}
      </button>
      <button type="button" disabled className="p-2 bg-black/30 rounded-full text-white border border-gray-700">
        <Mic size={20} />
      </button>
    </form>
  );
}
