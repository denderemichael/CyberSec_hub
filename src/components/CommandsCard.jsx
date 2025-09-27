import React from "react";
import "./StylesFolder/CommandsCard.css";

export default function CommandCard({ command, description, options, examples, difficulty, category }) {
  return (
    <div className="command-card">
      <h2 className="command-title">{command}</h2>
      <p className="command-description">{description}</p>

      {options.length > 0 && (
        <div className="command-options">
          <h4>Options:</h4>
          <ul>
            {options.map((opt, idx) => <li key={idx}>{opt}</li>)}
          </ul>
        </div>
      )}

      {examples.length > 0 && (
        <div className="command-examples">
          <h4>Examples:</h4>
          <ul>
            {examples.map((ex, idx) => <li key={idx}><code>{ex}</code></li>)}
          </ul>
        </div>
      )}

      <div className="command-meta">
        <span className="tag category">{category}</span>
        <span className={`tag difficulty ${difficulty.toLowerCase()}`}>{difficulty}</span>
      </div>
    </div>
  );
}
