// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "@/pages/Dashboard";
import React from 'react';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Navigate to="/dashboard" />} />
      <Route path="*" element={<Dashboard />} /> {/* Fallback route */}
      </Routes>
    </Router>
  );
}

export default App;



