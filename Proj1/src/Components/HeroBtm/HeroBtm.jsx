import React from "react";
import Button from "../Button/Button";
import "./HeroBtm.css";

import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function HeroBtm() {
  return (
    <div className="container btm">
      <div className="left">
        <div className="button-grp">
          <Button
            isActive={false}
            text="VIA SUPPORT CHAT"
            icon={<MdMessage />}
          />
          <Button
            isActive={false}
            text="VIA SUPPORT CHAT"
            icon={<FaPhoneAlt />}
          />
        </div>
        <Button isActive={true} text="VIA EMAIL FORM" icon={<MdEmail />} />
        <form>
          <div className="contact">
            <label htmlFor="name">Name</label>
            <input type="text" />
          </div>
        </form>
      </div>
      <div className="right">
        <img src="http://localhost:5173/images/contact.svg" alt="" />
      </div>
    </div>
  );
}

export default HeroBtm;
