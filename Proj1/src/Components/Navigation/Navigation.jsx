import React from "react";
import "./Navigation.css";

function Navigation() {
  return (
    <nav className="container">
      <div className="logo">
        <img src="http://localhost:5173/images/logo.png" alt="" />
      </div>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Support</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
