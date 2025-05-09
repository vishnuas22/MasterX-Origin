import React, { useEffect, useState } from "react";

const ChatHistory = ({ onSelectSession }) => {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    // Scan localStorage for sessions
    const allKeys = Object.keys(localStorage);
    const chatKeys = allKeys.filter((key) => key.startsWith("session-"));
    const sortedKeys = chatKeys.sort((a, b) => {
      const aTime = parseInt(a.split("-")[1]);
      const bTime = parseInt(b.split("-")[1]);
      return bTime - aTime; // Most recent first
    });

    const sessionList = sortedKeys.map((key) => {
      const messages = JSON.parse(localStorage.getItem(key) || "[]");
      const preview = messages.find((m) => m.role === "user")?.text || "(no message)";
      return {
        id: key,
        date: new Date(parseInt(key.split("-")[1])).toLocaleString(),
        preview,
      };
    });

    setSessions(sessionList);
  }, []);

  return (
    <div className="w-full max-w-md p-4 bg-black/30 rounded-xl border border-white/10 text-white">
      <h2 className="text-lg font-semibold mb-3">🧠 Chat History</h2>
      <ul className="space-y-2 max-h-96 overflow-y-auto">
        {sessions.map((session) => (
          <li
            key={session.id}
            className="p-3 rounded-lg bg-white/10 hover:bg-cyan-700 cursor-pointer"
            onClick={() => onSelectSession(session.id)}
          >
            <div className="text-sm font-medium">{session.date}</div>
            <div className="text-xs text-white/70 truncate">{session.preview}</div>
          </li>
        ))}
        {sessions.length === 0 && <li className="text-sm text-white/50">No sessions found.</li>}
      </ul>
    </div>
  );
};

export default ChatHistory;
