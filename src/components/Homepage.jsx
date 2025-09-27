import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Shield,
  Terminal,
  Trophy,
  BookOpen,
  Zap,
  Target,
  Users,
} from "lucide-react";
// import kaliDragon from "./assets/kali-dragon.png";
import "./StylesFolder/Homepage.css";

const FEATURES = [
  {
    icon: BookOpen,
    title: "Interactive Lessons",
    description:
      "Learn Kali Linux commands with step-by-step tutorials and real examples.",
  },
  {
    icon: Terminal,
    title: "Terminal Simulator",
    description:
      "Practice commands in a safe, simulated environment that mimics real Kali Linux.",
  },
  {
    icon: Trophy,
    title: "Challenges & Quests",
    description:
      "Test your skills with cybersecurity challenges and earn achievement badges.",
  },
  {
    icon: Target,
    title: "Practical Scenarios",
    description:
      "Apply your knowledge with real-world cybersecurity scenarios and case studies.",
  },
];

const STATS = [
  { label: "Commands Covered", value: "50+" },
  { label: "Learning Modules", value: "12" },
  { label: "Practice Challenges", value: "25+" },
  { label: "Skill Levels", value: "3" },
];

export default function Index() {
  return (
    <div className="homepage">
      {/* Background Dragon */}
      {/* <div
        className="dragon-bg"
        style={{ backgroundImage: `url(${kaliDragon})` }}
      /> */}

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-title">
            <Shield className="icon-glow" />
            <h1>CyberSec Hub</h1>
          </div>

          <p className="subtitle">Master Kali Linux & Cybersecurity</p>
          <p className="description">
            Your gateway to cybersecurity mastery. Learn essential Kali Linux
            commands, practice in our terminal simulator, and tackle real-world
            security challenges.
          </p>

          <div className="cta-buttons">
            <Link to="/lessons" className="btn primary">
              Start Learning <ArrowRight size={18} />
            </Link>
            <Link to="/terminal" className="btn outline">
              <Terminal size={18} /> Try Terminal
            </Link>
          </div>

          <div className="stats">
            {STATS.map((stat) => (
              <div key={stat.label} className="stat-card">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <h2>Everything You Need to Master Cybersecurity</h2>
        <p className="features-desc">
          From basic commands to advanced penetration testing techniques, we've
          got you covered.
        </p>
        <div className="features-grid">
          {FEATURES.map((feature) => (
            <div key={feature.title} className="feature-card">
              <feature.icon size={28} className="feature-icon" />
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="cta-card">
          <div className="cta-title">
            <Zap className="zap-icon" />
            <h2>Ready to Start Your Cyber Journey?</h2>
          </div>
          <p>
            Join thousands of aspiring cybersecurity professionals learning
            essential skills with our interactive platform.
          </p>
          <div className="cta-buttons">
            <Link to="/lessons" className="btn primary">
              <BookOpen size={18} /> Start with Lessons
            </Link>
            <Link to="/challenges" className="btn outline">
              <Trophy size={18} /> Take a Challenge
            </Link>
          </div>
          <div className="cta-trusted">
            <Users size={14} /> Trusted by 10,000+ security enthusiasts
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <Shield size={20} className="icon-glow" />
            <span>CyberSec Hub</span>
          </div>
          <div className="footer-text">
            Built for the next generation of ethical hackers 🔹
          </div>
        </div>
      </footer>
    </div>
  );
}
