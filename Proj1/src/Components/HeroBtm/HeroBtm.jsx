import React, { useState } from "react";
import Button from "../Button/Button";
import "./HeroBtm.css";

import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function HeroBtm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const handle = (e) => {
    e.preventDefault();
    setName(e.target[0].value);
    setEmail(e.target[1].value);
    setText(e.target[2].value);

    console.log(name);
    console.log(email);
    console.log(text);
  };
  return (
    <div className="btm">
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
        <form onSubmit={handle}>
          <div className="contact">
            <label htmlFor="name">Name</label>
            <input type="text" />
          </div>
          <div className="contact">
            <label htmlFor="email">Email</label>
            <input type="email" />
          </div>
          <div className="contact">
            <label htmlFor="text">Text</label>
            <textarea
              style={{ padding: "20px" }}
              name="text"
              rows={6}
            ></textarea>
          </div>
          <div className="btn_left">
            <button className="primary_btn">Submit</button>
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
