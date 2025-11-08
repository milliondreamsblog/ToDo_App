import React, { useState } from "react";
import "./NavBar.css";
import logo from "/logo/logo.png"; // Replace with your own logo path

const NavBar = () => {
  const [isSettingOpen, setIsSettingOpen] = useState(false);
  const [isNotificationVisible, setIsNotificationVisible] = useState(false);

  const handleNotificationPopup = () => {
    setIsNotificationVisible((prev) => !prev);
  };

  const user = {
    name: "Akshat Darshi",
    role: "Manager",
    profilePicture: "https://i.imgur.com/6VBx3io.png",
  };

  return (
    <header className="navbar-container">
      {/* Logo */}
      <div className="navbar-logo">
        <img src={logo} alt="App logo" />
        <span className="navbar-title">Project M.</span>
      </div>

      {/* Right side content */}
      <div className="navbar-content">
        <div className="user-section">
          {/* Simple notification bell icon (pure CSS/Unicode) */}
          <button className="icon-button" onClick={handleNotificationPopup}>
            🔔
          </button>

          {/* Simple message icon */}
          <button className="icon-button">💬</button>

          {/* User info */}
          <div className="user-info" onClick={() => setIsSettingOpen(true)}>
            <div className="user-details">
              <span className="user-name">{user.name}</span>
              <span className="user-role">{user.role}</span>
            </div>
            <img
              src={user.profilePicture}
              alt="User"
              className="user-avatar"
            />
          </div>
        </div>
      </div>

      {/* Simple popup for notifications */}
      {isNotificationVisible && (
        <div className="notification-popup">
          <h4>Notifications</h4>
          <p>No new notifications 🎉</p>
        </div>
      )}

      {/* Simple popup for settings */}
      {isSettingOpen && (
        <div className="settings-popup">
          <div className="settings-box">
            <h3>User Settings</h3>
            <p>Here you can add account options later.</p>
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
