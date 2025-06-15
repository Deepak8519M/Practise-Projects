import React from "react";
import Button from "../Button/Button";
import "./HeroBtm.css";

function HeroBtm() {
  return (
    <div className="container btm">
      <div className="left">
        <div className="button-grp">
          <Button text="VIA SUPPORT CHAT" icon={} />
          <Button />
        </div>
      </div>
      <div className="right">
        <img src="http://localhost:5173/images/contact.svg" alt="" />
      </div>
    </div>
  );
}

export default HeroBtm;
