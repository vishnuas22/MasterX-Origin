// src/layouts/CoreLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/oldSidebar";
import Navbar from "../components/Navbar";

const CoreLayout = () => {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default CoreLayout;
