import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Home, BookOpen, Terminal, Trophy, Shield } from "lucide-react";
import "./StylesFolder/KaliSidebar.css";

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "Lessons", href: "/lessons", icon: BookOpen },
  { name: "Terminal", href: "/terminal", icon: Terminal },
  { name: "Challenges", href: "/challenges", icon: Trophy },
];

export function KaliSidebar() {
  return (
    <div className="layout">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <Shield className="sidebar-logo" />
          <div>
            <h1 className="sidebar-title">CyberSec Hub</h1>
            <p className="sidebar-subtitle">Kali Linux Training</p>
          </div>
        </div>

        <nav className="sidebar-nav">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              <item.icon className="nav-icon" />
              {item.name}
            </NavLink>
          ))}
        </nav>

        <div className="sidebar-footer">
          <div className="sidebar-version">Version 1.0.0</div>
          <div className="sidebar-status">Ready to hack 🔹</div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}
export default KaliSidebar;
