import React from "react";
import "./contact.css";
import Linkedin from "../../assets2/linkedin.png"
import Github from "../../assets2/github.png"
 




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
        <div className="clientImg">

            <img src={Linkedin} alt="Client" className="clientImg"/>
            <img src={Github} alt="Client" className="clientImg"/>
            
        </div>
      </div>
      <div id="contact"></div>
    </section>
  );
}
export default Contact;
