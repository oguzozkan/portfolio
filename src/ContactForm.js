import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "../src/css/ContactForm.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { MdCancel } from "react-icons/md";
const ContactForm = ({ Contacttoggle }) => {
  const setTimeToMail = () => {
    setTimeout(() => {
      Contacttoggle();
    }, 1);
  };

  const AppContainer = styled.div`
    width: 50%;
    height: 60%;
    display: flex;
    border-radius: 26px;
    border: 2px solid #fff;
    align-items: center;
    justify-content: center;
    z-index: 20;
    backdrop-filter: blur(10px);
    padding-top: 5px;
    padding-bottom: 20px;

    background: linear-gradient(
      90deg,
      rgba(255, 238, 187, 1) 0%,
      rgba(249, 244, 228, 0.100455216266194) 0%,
      rgba(255, 255, 255, 0.1) 100%
    );
  `;
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <AppContainer data-aos="fade-up">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-right">
            <MdCancel
              onClick={Contacttoggle}
              size={30}
              style={{ fill: "white" }}
            ></MdCancel>
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label htmlFor="name">Name:</label>
          </div>
          <div className="col-75">
            <input type="text" id="name" required />
          </div>
        </div>

        <div className="row">
          <div className="col-25">
            <label htmlFor="email">Email:</label>
          </div>
          <div className="col-75">
            <input type="email" id="email" required />
          </div>
        </div>

        <div className="row">
          <div className="col-25">
            <label htmlFor="message">Message:</label>
          </div>
          <div className="col-75">
            <textarea id="message" required />
          </div>
        </div>
        <div className="vertical-center">
          <button type="submit" onClick={setTimeToMail}>
            Send
          </button>
        </div>
      </form>
    </AppContainer>
  );
};

export default ContactForm;
