import React from "react";
import "./skills.css";
import UIDesign from "../../assets2/user-experience.png";
import WebDesign from "../../assets2/designer.png";
import AppDesign from "../../assets2/responsive-design.png";

function skills() {
  return (
    <section id="skills">
      <span className="skillTitle">About My work</span>
      <span className="skillDesc">
        {" "}
        Proficient: JavaScript, Typescript
Familiar: Vue.js, AWS (Amplify, API Gateway, Lambda functions) Front-End Technologies: React.js, Redux, React Native, Next.js, Rails Back-end: Node.js, Express.js, Nest.js
Databases: MySQL, MongoDB, PostgreSQL
        Detail-oriented, organized and meticulous employee. Works at fast pace
        to meet tight deadlines.{" "}
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
          {/* <img src="" alt="" className="" /> */}
          <div className="skillBarText">
            <h2>UI/UX Designs</h2>
            <p>
            Crafting intuitive and visually appealing user interfaces, 
            I specialize in enhancing user experiences through thoughtful design, 
            from wireframes to prototypes
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>WebDesign</h2>
            <p>
            Transforming ideas into responsive web layouts,
            I create captivating websites that not only grab attention but also provide seamless navigation for users.

            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2> App Design</h2>
            <p>
            Specializing in mobile app design, 
            I blend aesthetics with usability to create visually appealing applications 
            that offer an engaging user experience.

            </p>
          </div>
        </div>
      </div>
      {/* <h1>This is about page</h1> */}
    </section>
  );
}

export default skills;
