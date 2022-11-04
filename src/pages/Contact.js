import React from "react";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
      <div className="contact">
        <h1 className="title">Contact Me</h1>
        <p>Hi there, contact me to ask me about anything you have in mind.</p>

        <form>
          <div className="name">
            <div className="first">
              <label>First Name</label>
              <br />
              <input type="text" placeholder="   Enter your first name" />
            </div>
            <div className="last">
              <label>Last Name</label>
              <br />
              <input type="text" placeholder="   Enter your last name" />
            </div>
          </div>
          <label>Email</label>
          <input type="email" placeholder="   yourname@email.com" />
          <label>Message</label>
          <textarea placeholder="Send me a message and I'll reply you as soon as possible..."></textarea>
          <div className="check">
            <input type="checkbox" />
            <label>
              You agree to providing your data to Aminat who may contact you.
            </label>
          </div>

          <button className="btn">Send message</button>
        </form>
      </div>

      <div className="footer-contact">
        <div className="hr" />
        <Footer />
      </div>
    </>
  );
};

export default Contact;
