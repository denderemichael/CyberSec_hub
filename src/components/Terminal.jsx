import React, { useState, useEffect } from 'react';
import { Terminal as TerminalIcon, Zap, Shield, Target, XCircle } from 'lucide-react';
import './StylesFolder/Terminal.css'; // Make sure Terminal.css is in the correct path

// 1. ADD THIS IMPORT LINE:
import TerminalSimulator from './TerminalSimulator'; // Assuming TerminalSimulator.jsx is in the same directory

// --- REMOVE the TerminalSimulatorPlaceholder function entirely ---


const QUICK_COMMANDS = [
    { name: 'help', description: 'Show available commands' },
    { name: 'ls -la', description: 'List all files with details' },
    { name: 'nmap 192.168.1.1', description: 'Scan network host' },
    { name: 'ifconfig', description: 'Show network interfaces' },
    { name: 'whoami', description: 'Display current user' },
    { name: 'pwd', description: 'Show current directory' },
];

const TERMINAL_TIPS = [
    {
        icon: Zap,
        title: 'Pro Tip',
        content: 'Use Tab for auto-completion and arrow keys to navigate command history.',
    },
    {
        icon: Shield,
        title: 'Security Note',
        content: 'This is a safe simulation. Real commands may require elevated privileges.',
    },
    {
        icon: Target,
        title: 'Practice',
        content: 'Try combining commands with pipes (|) and redirects (>, >>) for advanced usage.',
    },
];

export default function Terminal() {
    const [showTipPopup, setShowTipPopup] = useState(true);

    // Effect to manage the 1-minute tip popup
    useEffect(() => {
        if (showTipPopup) {
            const timer = setTimeout(() => {
                setShowTipPopup(false);
            }, 60000); // 60,000 milliseconds = 1 minute

            return () => clearTimeout(timer); // Cleanup the timer
        }
    }, [showTipPopup]);

    return (
        <div className="terminal-page-container">
            <div className="terminal-header-area">
                <h1 className="terminal-main-title">
                    <TerminalIcon className="h-8 w-8" />
                    Terminal Simulator
                </h1>
                <p className="terminal-subtitle">
                    Practice Kali Linux commands in a safe, simulated environment
                </p>
            </div>

            <div className="terminal-grid-layout">
                {/* Terminal Area */}
                <div className="terminal-simulator-wrapper">
                    {/* Tip Popup */}
                    {showTipPopup && (
                        <div className="terminal-tip-popup">
                            <div className="tip-content">
                                <Zap className="h-5 w-5 tip-icon" />
                                <p className="tip-text">
                                    **Quick Tip**: The terminal is active for practice! Try **`help`** for a list of valid commands.
                                </p>
                            </div>
                            <button onClick={() => setShowTipPopup(false)} className="tip-close-btn">
                                <XCircle className="h-4 w-4" />
                            </button>
                        </div>
                    )}
                    
                    {/* 2. RENDER THE ACTUAL COMPONENT HERE: */}
                    <TerminalSimulator />
                    
                </div>

                {/* Sidebar */}
                <div className="terminal-sidebar">
                    {/* Quick Commands */}
                    <div className="sidebar-card">
                        <h3 className="card-title">Quick Commands</h3>
                        <div className="command-list">
                            {QUICK_COMMANDS.map((cmd) => (
                                <div key={cmd.name} className="command-item">
                                    <div className="command-badge">
                                        {cmd.name}
                                    </div>
                                    <p className="command-description">{cmd.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Tips */}
                    <div className="sidebar-card">
                        <h3 className="card-title">Terminal Tips</h3>
                        <div className="tip-list">
                            {TERMINAL_TIPS.map((tip, index) => (
                                <div key={index} className="tip-item">
                                    <div className="tip-icon-wrapper">
                                        <tip.icon className="tip-list-icon" />
                                    </div>
                                    <div>
                                        <h4 className="tip-list-title">{tip.title}</h4>
                                        <p className="tip-list-content">{tip.content}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Command History */}
                    <div className="sidebar-card">
                        <h3 className="card-title">Recent Commands</h3>
                        <div className="history-list">
                            <div className="history-item history-command">ls -la</div>
                            <div className="history-item history-command">pwd</div>
                            <div className="history-item history-command">ifconfig</div>
                            <div className="history-item history-placeholder">No more history</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}