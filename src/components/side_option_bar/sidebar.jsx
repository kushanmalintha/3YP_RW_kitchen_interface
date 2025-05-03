import React, { useState } from "react";
import "./Sidebar.css";

const Sidebar = ({ selected, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleHistoryClick = () => {
    // Navigate in the same window to the history page
    window.location.href = "/history";
  };

  const handleCurrentOrdersClick = () => {
    // If the user is on the history page, navigate back to the main page
    if (window.location.pathname === "/history") {
      window.location.href = "/home";
    }
    onSelect("current");
  };

  return (
    <div className="sidebar-container">
      <button className="toggle-button" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>
      <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
        <ul className="sidebar-menu">
          <li
            className={selected === "current" ? "active" : ""}
            onClick={handleCurrentOrdersClick}
          >
            Current Orders
          </li>
          <li
            className={selected === "upcoming" ? "active" : ""}
            onClick={() => onSelect("upcoming")}
          >
            Upcoming Orders
          </li>
          <li
            className={selected === "history" ? "active" : ""}
            onClick={handleHistoryClick}
          >
            History
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
