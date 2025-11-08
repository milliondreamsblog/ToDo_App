import React, { useState } from "react";
import "./Navbar.css";

const NavBar = () => {
  const [isSettingOpen, setIsSettingOpen] = useState(false);
  const [isNotificationVisible, setIsNotificationVisible] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const handleNotificationPopup = () => {
    setIsNotificationVisible((prev) => !prev);
  };

  const user = {
    name: "Akshat Darshi",
    location: "Uttar Pradesh, India",
    profilePicture: "https://i.imgur.com/6VBx3io.png",
  };

  return (
    <header className="navbar-container">
      {/* Left Section: Logo + Collapse Button */}
      <div className="left-section">
        <div className="logo-section">
          <div className="logo-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" fill="#6366f1" />
            </svg>
          </div>
          <span className="navbar-title">Project M.</span>
        </div>
        <button
          className="collapse-button"
          onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
        >
        </button>
      </div>

      {/* Search Bar */}
      <div className="search-container">
        <svg
          className="search-icon"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>
        <input
          type="text"
          placeholder="Search for anything..."
          className="search-input"
        />
      </div>

      {/* Right Section: Icons + User Info */}
      <div className="navbar-content">
        <div className="user-section">
          {/* Calendar Icon */}
          <button className="icon-button">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
          </button>

          {/* Message Icon */}
          <button className="icon-button">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </button>

          {/* Notification Icon */}
          <button className="icon-button" onClick={handleNotificationPopup}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 0 1-3.46 0" />
            </svg>
          </button>

          {/* User Info */}
          <div
            className="user-info"
            onClick={() => setIsSettingOpen(!isSettingOpen)}
          >
            <div className="user-details">
              <span className="user-name">{user.name}</span>
              <span className="user-location">{user.location}</span>
            </div>
            <img
              src={user.profilePicture}
              alt="User"
              className="user-avatar"
            />
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="chevron-down"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
        </div>
      </div>

      {/* Notification Popup */}
      {isNotificationVisible && (
        <div className="notification-popup">
          <h4 className="popup-title">Notifications</h4>
          <p className="popup-text">No new notifications 🎉</p>
        </div>
      )}

      {/* Settings Popup */}
      {isSettingOpen && (
        <div className="settings-popup">
          <div className="settings-box">
            <h3 className="settings-title">User Settings</h3>
            <p className="settings-text">
              Here you can add account options later.
            </p>
            <button
              className="close-btn"
              onClick={() => setIsSettingOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;