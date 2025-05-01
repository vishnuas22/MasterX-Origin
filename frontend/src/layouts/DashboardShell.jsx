// src/layouts/DashboardShell.jsx
import React from "react";
import Sidebar from "../components/Sidebar";

const DashboardShell = ({ children }) => {
  return (
    <div className="flex min-h-screen w-full bg-black text-white">
      {/* Sidebar - fixed and floating left */}
      <aside className="fixed top-0 left-0 h-screen w-64 z-50 backdrop-blur-lg bg-white/10 border-r border-white/20 shadow-lg">
        <Sidebar />
      </aside>

      {/* Main Dashboard Content */}
      <main className="ml-64 flex-1 min-h-screen overflow-x-hidden overflow-y-auto">
      {children}
      </main>
    </div>
  );
};

export default DashboardShell;
