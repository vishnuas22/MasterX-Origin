import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Mic, UploadCloud, Volume2, Loader } from "lucide-react";

const ChatFeed = () => {
  // Session-based setup
  const [sessionId] = useState(() => {
    return localStorage.getItem("masterx-session") || generateSessionId();
  });

  const [messages, setMessages] = useState([
    { role: "system", text: "Welcome to MasterX. Ask anything." },
  ]);
  const [input, setInput] = useState("");
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const chatEndRef = useRef(null);

  // Generate unique session ID and store
  function generateSessionId() {
    const id = `session-${Date.now()}-${Math.random().toString(36).slice(2)}`;
    localStorage.setItem("masterx-session", id);
    return id;
  }

  // Load messages from session
  useEffect(() => {
    const stored = localStorage.getItem(sessionId);
    if (stored) setMessages(JSON.parse(stored));
  }, [sessionId]);

  // Save messages on update
  useEffect(() => {
    localStorage.setItem(sessionId, JSON.stringify(messages));
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMessage = { role: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    await fetchLLMResponse([...messages, userMessage]);
  };

  const fetchLLMResponse = async (chatHistory) => {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: chatHistory }),
    });

    if (!response.body) return;

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let aiResponse = "";
    setMessages((prev) => [...prev, { role: "assistant", text: "" }]);

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      aiResponse += decoder.decode(value, { stream: true });
      setMessages((prev) => {
        const last = prev[prev.length - 1];
        if (last.role === "assistant") {
          return [...prev.slice(0, -1), { role: "assistant", text: aiResponse }];
        }
        return prev;
      });
    }
  };

  const handleSpeak = (text) => {
    if (!window.speechSynthesis) return;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    speechSynthesis.speak(utterance);
  };

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setIsUploading(true);
    const reader = new FileReader();
    reader.onload = () => {
      setTimeout(() => {
        const transcription = `Transcribed content from "${file.name}".`;
        const userMessage = { role: "user", text: transcription };
        setMessages((prev) => [...prev, userMessage]);
        fetchLLMResponse([...messages, userMessage]);
        setIsUploading(false);
      }, 1000);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="mt-10 w-full max-w-4xl bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-lg shadow-lg">
      {/* Chat Feed */}
      <div className="h-[400px] overflow-y-auto pr-2 mb-4 space-y-4">
        {messages.map((msg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`rounded-lg px-4 py-3 text-sm max-w-[80%] ${
              msg.role === "user"
                ? "ml-auto bg-cyan-600 text-white"
                : "bg-white/10 text-white"
            }`}
          >
            <div className="flex justify-between items-center gap-3">
              <span>{msg.text}</span>
              {msg.role === "assistant" && msg.text && (
                <button
                  onClick={() => handleSpeak(msg.text)}
                  className="text-cyan-300 hover:text-white ml-3"
                >
                  <Volume2 size={16} />
                </button>
              )}
            </div>
          </motion.div>
        ))}
        <div ref={chatEndRef} />
      </div>

      {/* Input Bar */}
      <div className="relative flex items-center w-full">
        <input
          type="text"
          placeholder="Ask something..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-grow px-4 py-3 rounded-l-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />
        <button
          onClick={handleSend}
          className="px-5 py-3 bg-cyan-500 text-white rounded-r-lg hover:bg-cyan-600"
        >
          Send
        </button>
      </div>

      {/* Controls */}
      <div className="flex gap-4 items-center mt-4">
        <label className="flex items-center gap-2 text-white/70 hover:text-cyan-300 cursor-pointer">
          <UploadCloud size={18} /> Upload Audio
          <input
            type="file"
            accept="audio/*"
            onChange={handleUpload}
            className="hidden"
          />
        </label>

        {isUploading && (
          <span className="flex items-center text-white/50 gap-2">
            <Loader size={18} className="animate-spin" /> Transcribing audio...
          </span>
        )}
      </div>
    </div>
  );
};

export default ChatFeed;
