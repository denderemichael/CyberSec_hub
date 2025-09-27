import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Import your pages
import Homepage from "./components/Homepage";
import Lessons from "./components/Lessons";
import Terminal from "./components/Terminal";

// Sidebar
import KaliSidebar from "./components/KaliSidebar";

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Sidebar always visible */}
        <KaliSidebar />

        {/* Main content area */}
        <div className="content">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/lessons" element={<Lessons />} />
            <Route path="/terminal" element={<Terminal />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;


