import React, { useState } from "react";
import CommandCard from "./CommandsCard"; // ✅ match filename exactly
import LessonsData from "../data/LessionsData"; // ✅ export default from LessionsData.js
import "./StylesFolder/Lessons.css";

const CATEGORIES = ["All", "File System", "Navigation", "Network", "Traffic Analysis", "Exploitation"];
const DIFFICULTIES = ["All", "Beginner", "Intermediate", "Advanced"];

export default function Lessons() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");

  // ✅ Filter LessonsData safely
  const filteredLessons = Array.isArray(LessonsData)
    ? LessonsData.filter((lesson) => {
        const matchesSearch =
          lesson.command.toLowerCase().includes(searchTerm.toLowerCase()) ||
          lesson.description.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesCategory =
          selectedCategory === "All" || lesson.category === selectedCategory;

        const matchesDifficulty =
          selectedDifficulty === "All" || lesson.difficulty === selectedDifficulty;

        return matchesSearch && matchesCategory && matchesDifficulty;
      })
    : [];

  return (
    <div className="lessons-container">
      <header className="lessons-header">
        <h1>Kali Linux Commands</h1>
        <p>Master essential cybersecurity commands step by step</p>
      </header>

      {/* Filters */}
      <div className="filters">
        <input
          type="text"
          placeholder="Search commands..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />

        <div className="filter-group">
          <label>Category:</label>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={selectedCategory === cat ? "filter-btn active" : "filter-btn"}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="filter-group">
          <label>Difficulty:</label>
          {DIFFICULTIES.map((diff) => (
            <button
              key={diff}
              className={selectedDifficulty === diff ? "filter-btn active" : "filter-btn"}
              onClick={() => setSelectedDifficulty(diff)}
            >
              {diff}
            </button>
          ))}
        </div>
      </div>

      {/* Lessons Grid */}
      <div className="command-grid">
        {filteredLessons.length > 0 ? (
          filteredLessons.map((lesson) => (
            <CommandCard key={lesson.command} {...lesson} />
          ))
        ) : (
          <p className="no-results">No commands found.</p>
        )}
      </div>
    </div>
  );
}

