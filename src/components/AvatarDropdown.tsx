// AvatarDropdown.tsx
import React, { useState, useRef, useEffect } from "react";
import "./avatarDropdown.css";

const AvatarDropdown: React.FC = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setOpen(!open);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="avatar-container" ref={dropdownRef}>
      <button className="avatar-btn" onClick={toggleDropdown}>
        <img
          src="https://i.pravatar.cc/502"
          alt="User Avatar"
          className="avatar-img"
        />
      </button>
      {open && (
        <div className="dropdown-menu">
          <ul>
            <li>👤 Profile</li>
            <li>⚙️ Settings</li>
            <li>🚪 Logout</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default AvatarDropdown;
