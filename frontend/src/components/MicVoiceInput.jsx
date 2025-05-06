import React, { useState, useEffect, useRef } from "react";
import { Mic, X, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const MicVoiceInput = ({ onTranscriptSubmit }) => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const recognitionRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;

      if (SpeechRecognition) {
        recognitionRef.current = new SpeechRecognition();
        recognitionRef.current.continuous = true;
        recognitionRef.current.interimResults = true;
        recognitionRef.current.lang = "en-US";

        recognitionRef.current.onresult = (event) => {
          let interim = "";
          for (let i = event.resultIndex; i < event.results.length; i++) {
            const chunk = event.results[i][0].transcript;
            if (event.results[i].isFinal) {
              setTranscript((prev) => prev + chunk + " ");
            } else {
              interim += chunk;
            }
          }
        };

        recognitionRef.current.onerror = (e) => {
          console.error("Recognition Error:", e);
          setIsListening(false);
        };

        recognitionRef.current.onend = () => {
          if (isListening) recognitionRef.current.start();
        };
      }
    }
  }, []);

  const toggleListening = () => {
    if (!recognitionRef.current) return;

    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      setTranscript("");
      recognitionRef.current.start();
      setIsListening(true);
    }
  };

  const handleClear = () => {
    setTranscript("");
    if (recognitionRef.current) recognitionRef.current.stop();
    setIsListening(false);
  };

  const handleSubmit = () => {
    if (transcript.trim() && onTranscriptSubmit) {
      onTranscriptSubmit(transcript.trim());
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3"
    >
      {/* Transcript Box */}
      <AnimatePresence>
        {transcript && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="bg-white/10 text-cyan-200 border border-white/20 rounded-xl px-4 py-2 backdrop-blur-md shadow-lg max-w-xs w-full text-sm"
          >
            <div className="flex justify-between items-start">
              <p className="break-words flex-1">{transcript}</p>
              <button onClick={handleClear}>
                <X size={16} className="text-red-400 ml-2" />
              </button>
            </div>
            <button
              onClick={handleSubmit}
              className="mt-2 w-full flex items-center justify-center gap-2 text-sm text-cyan-100 border border-cyan-300/20 px-2 py-1 rounded-md hover:bg-cyan-500/20 transition"
            >
              <Send size={14} />
              Submit
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mic Button */}
      <motion.button
        onClick={toggleListening}
        className={`w-16 h-16 rounded-full border border-white/20 bg-white/10 shadow-xl backdrop-blur-lg flex items-center justify-center
        hover:bg-white/20 hover:scale-105 transition-all duration-300 ${
          isListening ? "ring-4 ring-cyan-400/50 animate-pulse" : ""
        }`}
      >
        <Mic size={24} className="text-cyan-300" />
      </motion.button>
    </motion.div>
  );
};

export default MicVoiceInput;
