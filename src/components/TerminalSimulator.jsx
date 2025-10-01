import React, { useState, useRef, useEffect } from 'react';
import { Maximize2, Minimize2 } from 'lucide-react';
import './StylesFolder/TerminalSimulator.css'; // Importing dedicated styles

// Defining command structure (removed interface)
// const TerminalLine = { type: 'input' | 'output' | 'error', content: string, timestamp: Date };

const COMMANDS = {
  help: 'Available commands: ls, pwd, cd, whoami, ifconfig, nmap, clear, date, uname, echo [text]',
  ls: 'Desktop\tDocuments\tDownloads\tPictures\tVideos\tTools',
  pwd: '/home/kali',
  whoami: 'kali',
  ifconfig: 'eth0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500\n        inet 192.168.1.100  netmask 255.255.255.0  broadcast 192.168.1.255',
  nmap: 'Starting Nmap scan...\nHost is up (0.0010s latency)\nPORT      STATE SERVICE\n22/tcp    open  ssh\n80/tcp    open  http\n443/tcp   open  https',
  date: new Date().toString(),
  uname: 'Linux kali 5.15.0-kali3-amd64 #1 SMP Debian 5.15.15-2kali1 (2022-01-31) x86_64 GNU/Linux'
};

export default function TerminalSimulator() {
  const [lines, setLines] = useState([
    { type: 'output', content: 'Welcome to CyberSec Hub Terminal Simulator', timestamp: new Date() },
    { type: 'output', content: 'Type "help" to see available commands', timestamp: new Date() },
  ]);
  const [currentInput, setCurrentInput] = useState('');
  const [isMaximized, setIsMaximized] = useState(false);
  const inputRef = useRef(null);
  const terminalRef = useRef(null);

  // Prompt details for history and live input
  const userHost = 'kali@cybersec';
  const userDir = '~$';

  // Scroll to bottom on new line
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [lines]);

  // Handle Command Logic
  const handleCommand = (input) => {
    const inputTrimmed = input.trim();
    const args = inputTrimmed.split(/\s+/);
    const command = args[0].toLowerCase();
    
    // Add the user's input line to history
    const newLines = [
        ...lines,
        { type: 'input', content: inputTrimmed, timestamp: new Date() }
    ];

    if (command === 'clear') {
      setLines([]);
      return;
    }

    if (command === 'echo') {
        const text = args.slice(1).join(' ');
        newLines.push({ type: 'output', content: text, timestamp: new Date() });
    } else if (COMMANDS[command]) {
      const output = COMMANDS[command];
      newLines.push({
        type: 'output',
        content: output,
        timestamp: new Date()
      });
    } else if (command) {
      newLines.push({
        type: 'error',
        content: `bash: ${command}: command not found. Type 'help' for available commands.`,
        timestamp: new Date()
      });
    }
    
    setLines(newLines);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleCommand(currentInput);
      setCurrentInput('');
    }
  };

  const handleTerminalClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className={`terminal-window ${isMaximized ? 'maximized' : 'default-size'}`}>
      
      {/* Terminal Header (Title Bar) */}
      <div className="terminal-header">
        <div className="terminal-header-dots">
          <div className="dot-close"></div>
          <div className="dot-minimize"></div>
          <div className="dot-maximize"></div>
        </div>
        
        <span className="terminal-title-text">{userHost}: ~</span>

        <div className="terminal-actions">
          {/* Replaced Button component with native button */}
          <button
            className="terminal-action-btn"
            onClick={() => setIsMaximized(!isMaximized)}
          >
            {isMaximized ? <Minimize2 className="icon-size" /> : <Maximize2 className="icon-size" />}
          </button>
        </div>
      </div>

      {/* Terminal Content (Output and Input Area) */}
      <div
        ref={terminalRef}
        className="terminal-content"
        onClick={handleTerminalClick}
      >
        {lines.map((line, index) => (
          <div 
            key={index} 
            className="terminal-line"
          >
            {/* Displaying command history (input lines) */}
            {line.type === 'input' && (
              <span className="terminal-prompt-history">
                <span className="prompt-user-host">{userHost}</span>
                <span className="prompt-dir">{userDir}</span>
                <span className="prompt-command-text">{line.content}</span>
              </span>
            )}

            {/* Displaying output and errors */}
            {line.type !== 'input' && (
                <pre className={`terminal-output-text ${line.type === 'output' ? 'output-style' : 'error-style'}`}>
                    {line.content}
                </pre>
            )}
          </div>
        ))}
        
        {/* Current Live Input Line */}
        <div className="terminal-input-line">
          <span className="terminal-prompt-live">
            <span className="prompt-user-host">{userHost}</span>
            <span className="prompt-dir">{userDir}</span>
          </span>
          <input
            ref={inputRef}
            type="text"
            value={currentInput}
            onChange={(e) => setCurrentInput(e.target.value)}
            onKeyDown={handleKeyPress}
            className="terminal-input-field"
            placeholder=""
            autoFocus
            spellCheck="false"
          />
        </div>
      </div>
    </div>
  );
}