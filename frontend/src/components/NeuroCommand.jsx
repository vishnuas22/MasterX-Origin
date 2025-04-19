// NeuroCommand.jsx

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mic, Send } from "lucide-react";

const NeuroCommand = ({ onCommandSubmit }) => {
  const [input, setInput] = useState("");
  const [isListening, setIsListening] = useState(false);

  const handleInputChange = (e) => setInput(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onCommandSubmit(input);
      setInput("");
    }
  };

  const toggleVoiceInput = () => {
    if (!("webkitSpeechRecognition" in window)) {
      alert("Your browser does not support speech recognition.");
      return;
    }

    const recognition = new window.webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "en-US";

    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);
    recognition.onerror = () => setIsListening(false);

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setInput(transcript);
      setTimeout(() => {
        onCommandSubmit(transcript);
        setInput("");
      }, 100);
    };

    recognition.start();
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="flex items-center gap-4 w-full bg-zinc-900 p-4 rounded-2xl shadow-inner border border-zinc-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Speak to MasterX..."
        className="flex-grow bg-transparent outline-none text-zinc-100 placeholder:text-zinc-500 text-base px-2"
      />

      <button
        type="button"
        onClick={toggleVoiceInput}
        className={`p-2 rounded-full ${isListening ? "bg-emerald-600" : "bg-zinc-800"} hover:bg-emerald-500 transition`}
        title="Voice Command"
      >
        <Mic className="text-white w-5 h-5" />
      </button>

      <button
        type="submit"
        className="p-2 bg-emerald-600 hover:bg-emerald-500 rounded-full transition"
        title="Send Command"
      >
        <Send className="text-white w-5 h-5" />
      </button>
    </motion.form>
  );
};

export default NeuroCommand;
