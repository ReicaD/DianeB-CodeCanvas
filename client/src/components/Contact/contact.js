import React from "react";
import  { useRef } from 'react';
import "./contact.css";
import Linkedin from "../../assets2/linkedin.png";
import Github from "../../assets2/github.png";
import InstagramIcon from "../../assets2/instagram-logo.png";
import TwitterIcon from "../../assets2/twitter.png";
import {ToastContainer, toast} from "react-toastify";
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const notify = () => toast.success('Success notification!');
  const sendEmail = (e) => {
    e.preventDefault();
    // service_ppmgtxi
    // vuP3L-fQRsxwRcaCVZVUm
    // const pKey = "b3_k1yczymlY7nCqZ";
    emailjs.sendForm('service_0pr57c9', 'template_7day9sh', form.current, "b3_k1yczymlY7nCqZ")
      .then((result) => {

          // console.log(result.text);
            e.target.reset();
           toast.success("Email sent 📧 ")
           alert("Email sent !");
          }, (error) => {
            console.log(error);
          });
        }
        
        return (
          <section id="contactPage">
      <div id="clients">

            <button onClick={notify}>Show Success Alert</button>
      <ToastContainer/>
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
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input type="text" className="name" placeholder="Your Name"  name="your_name"/>
          <input type="email" className="email" placeholder="Your Email" name="your_email"/>
          <textarea
            className="msg"
            name="message"
            rows="5"
            placeholder=" your message"
          ></textarea>
          <button type="submit" value="send" className="submitBtn">
            Submit
          </button>
          <div className="links">
            <img src={InstagramIcon} alt="Instagram" className="link" />
            <img src={TwitterIcon} alt="twitter" className="link" />
            
          </div>
        </form>
      </div>
    </section>
  );
}
export default Contact
