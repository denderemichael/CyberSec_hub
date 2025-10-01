import React, { useState } from 'react';
import { Trophy, Target, Clock } from 'lucide-react';
import './StylesFolder/Challenges.css';

// --- Data Structures ---
const CHALLENGES = [
  {
    id: '1',
    title: 'File System Explorer',
    description: 'Navigate directories and find hidden files using essential Linux commands (ls, cd, find).',
    difficulty: 'Beginner',
    category: 'File System',
    points: 100,
    completed: true,
    locked: false,
    estimatedTime: '15 min',
  },
  {
    id: '2',
    title: 'Network Detective',
    description: 'Discover active hosts on a network and identify running services using nmap.',
    difficulty: 'Intermediate',
    category: 'Network Scanning',
    points: 250,
    completed: false,
    locked: false,
    estimatedTime: '30 min',
  },
  {
    id: '3',
    title: 'Port Scanner Master',
    description: 'Perform comprehensive port scans and analyze results to identify open ports and services.',
    difficulty: 'Advanced',
    category: 'Vulnerability Assessment',
    points: 500,
    completed: false,
    locked: false,
    estimatedTime: '45 min',
  },
  {
    id: '4',
    title: 'Stealth Reconnaissance',
    description: 'Gather information about targets without being detected using advanced nmap techniques.',
    difficulty: 'Advanced',
    category: 'Reconnaissance',
    points: 750,
    completed: false,
    locked: true,
    estimatedTime: '60 min',
  },
];

// --- Custom Components ---
const CustomCard = ({ children, className = '' }) => (
  <div className={`custom-card ${className}`}>
    {children}
  </div>
);

const CustomBadge = ({ children, className = '' }) => (
  <div className={`custom-badge ${className}`}>
    {children}
  </div>
);

const CustomButton = ({ children, onClick, variant = 'default', size = 'sm', disabled = false }) => (
  <button
    className={`custom-button ${variant} ${size} ${disabled ? 'disabled' : ''}`}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
);

export default function Challenges() {
  const [selectedChallenge, setSelectedChallenge] = useState(null);

  return (
    <div className="challenge-container">
      <header className="challenge-header">
        <h1>
          <Trophy />
          Cybersecurity Skill Challenges
        </h1>
        <p>Test your offensive and defensive skills with hands-on labs and real-world scenarios.</p>
      </header>

      <main>
        <div>
          {selectedChallenge && (
            <div className="challenge-modal">
              <CustomCard>
                <h3>{selectedChallenge.title}</h3>
                <p>{selectedChallenge.category}</p>
                <p>{selectedChallenge.description}</p>

                <div className="challenge-details">
                  <div>
                    <span>Difficulty:</span>
                    <CustomBadge>{selectedChallenge.difficulty}</CustomBadge>
                  </div>
                  <div>
                    <span>Points:</span>
                    <span>
                      <Trophy />
                      {selectedChallenge.points} pts
                    </span>
                  </div>
                  <div>
                    <span>Estimated Time:</span>
                    <span>
                      <Clock />
                      {selectedChallenge.estimatedTime}
                    </span>
                  </div>
                </div>

                <div className="challenge-actions">
                  <CustomButton variant="outline" size="sm" onClick={() => setSelectedChallenge(null)}>
                    Close
                  </CustomButton>
                  <CustomButton
                    size="sm"
                    variant={selectedChallenge.completed ? 'outline' : 'default'}
                    onClick={() => {
                      console.log('Action performed');
                      setSelectedChallenge(null);
                    }}
                  >
                    {selectedChallenge.completed ? 'Review Solution' : 'Start Challenge'}
                  </CustomButton>
                </div>
              </CustomCard>
            </div>
          )}

          <div>
            <CustomCard className="cyber-card coming-soon-card">
              <Target />
              <h3>Challenges Coming Soon!</h3>
              <p>We are actively developing new, exciting hands-on labs. Check back soon for new content!</p>
            </CustomCard>
          </div>
        </div>
      </main>
    </div>
  );
}
