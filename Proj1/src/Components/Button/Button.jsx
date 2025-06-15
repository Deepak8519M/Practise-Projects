import React from "react";
import "./Button.css";

function Button({ text, icon, isActive }) {
  return (
    <div>
      <button className={isActive ? "secondary_btn" : "primary_btn"}>
        {icon} {text}
      </button>
    </div>
  );
}

export default Button;
