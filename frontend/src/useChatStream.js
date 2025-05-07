// hooks/useChatStream.js
import { useState } from "react";

export default function useChatStream() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async (userInput) => {
    const newMessages = [...messages, { role: "user", content: userInput }];
    setMessages(newMessages);
    setLoading(true);

    const res = await fetch("/api/chat", {
      method: "POST",
      body: JSON.stringify({ messages: newMessages }),
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) {
      setMessages([...newMessages, { role: "assistant", content: "⚠️ Error from Ollama" }]);
      setLoading(false);
      return;
    }

    const reader = res.body.getReader();
    const decoder = new TextDecoder();
    let fullResponse = "";

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      const chunk = decoder.decode(value, { stream: true });
      fullResponse += chunk;
      setMessages([...newMessages, { role: "assistant", content: fullResponse }]);
    }

    setLoading(false);
  };

  return { messages, sendMessage, loading };
}
