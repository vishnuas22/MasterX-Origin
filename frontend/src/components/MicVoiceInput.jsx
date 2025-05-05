import React, { useState, useEffect, useRef } from "react";
import { Mic } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const MicVoiceInput = () => {
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
          let interimTranscript = "";
          for (let i = event.resultIndex; i < event.results.length; i++) {
            const transcriptChunk = event.results[i][0].transcript;
            if (event.results[i].isFinal) {
              setTranscript((prev) => prev + transcriptChunk + " ");
            } else {
              interimTranscript += transcriptChunk;
            }
          }
        };

        recognitionRef.current.onerror = (e) => {
          console.error("Speech recognition error", e);
          setIsListening(false);
        };

        recognitionRef.current.onend = () => {
          if (isListening) {
            recognitionRef.current.start(); // restart if still listening
          }
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

  return (
    <div className="relative flex flex-col items-center mt-10">
      {/* Mic Button */}
      <motion.button
        onClick={toggleListening}
        className={`w-24 h-24 rounded-full border border-white/20 bg-white/10 shadow-xl backdrop-blur-lg flex items-center justify-center
        hover:bg-white/20 hover:scale-105 transition-all duration-300 ${
          isListening ? "ring-4 ring-cyan-400/50 animate-pulse" : ""
        }`}
      >
        <Mic size={30} className="text-cyan-300" />
      </motion.button>

      {/* Listening Label */}
      <AnimatePresence>
        {isListening && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: -30 }}
            exit={{ opacity: 0, y: 0 }}
            className="absolute top-0 bg-cyan-400/10 text-cyan-200 px-4 py-2 rounded-full border border-cyan-400/20 shadow-lg backdrop-blur-lg text-sm"
          >
            <span className="animate-pulse">🎙 Listening...</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Live Transcript */}
      {transcript && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 20 }}
          className="mt-6 px-4 py-2 text-sm text-cyan-200 bg-white/5 rounded-xl max-w-md text-center border border-white/10 backdrop-blur-lg"
        >
          {transcript}
        </motion.div>
      )}
    </div>
  );
};

export default MicVoiceInput;
