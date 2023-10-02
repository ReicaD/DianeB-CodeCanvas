import React from "react";
import "./contact.css";
import Linkedin from "../../assets2/linkedin.png";
import Github from "../../assets2/github.png";
// import { Link } from "react-scroll";

function Contact() {
  return (
    <section id="contactPage">
      <div id="clients">
        <h1 className="contactPageTitle">Clients</h1>
        <p className="clientDesc">
          An adaptable and transformational leader with an ability to work
          independently and with a team creating effective presentations and
          developing opportunities that further establish organizational goals.
        </p>
        <div className="clientImgs">
          <img src={Linkedin} alt="Linkedin" className="clientImg" />
          <img src={Github} alt="Github" className="clientImg" />
        </div>
      </div>
      <div id="contact">
        <h1 className="contactPageTitle"> Contact Me</h1>
        <span className="contactDesc">
          Please fill this below to discuss work opportunities
        </span>
        <form className="contactForm">
          <input type="text" className="name" placeholder="your name" />
          <input type="email" className="email" placeholder="your email" />
          <textarea
            className="msg"
            name="message"
            rows="5"
            placeholder=" your message"
          ></textarea>
          <button type="submit" value="send" className="submitBtn">
            submit
          </button>
          <div className="links">
            <img src={"link"} alt="" className="link" />
            <img src={"link"} alt="" className="link" />
          </div>
        </form>
      </div>
    </section>
  );
}
export default Contact;
