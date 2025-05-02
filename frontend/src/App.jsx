// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MasterXHome from "./pages/MasterXHome";
import React from 'react';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<MasterXHome />} />
      </Routes>
    </Router>
  );
}

export default App;



