import React from "react";
import "./intro.css";
import bg from "../../assets2/pictured.png";
import btnImg from "../../assets2/user-experience.png";
import { Link } from "react-scroll";
 
function Intro() {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Diane</span>
          <br />
          Software Developer
        </span>
        <p className="introPara">
     
           Ready
           to contribute
          to company success.
        </p>
        <Link to="/"><button className="btn"><img src={btnImg} alt="Ready To Work" className="btnImg"/>Ready To Work</button></Link>
      </div>
      <img src={bg} alt="Profile" className="bg" />
    </section>
  );
}

export default Intro;
