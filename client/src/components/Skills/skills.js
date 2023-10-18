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
              UI designers are responsible for designing the layout and visual
              elements of a website.UX designers focus on improving the overall
              user experience.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>WebDesign</h2>
            <p>
              Web design focuses on creating the visual and interactive aspects
              of websites. Functions within web design include:
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2> App Design</h2>
            <p>
              Designers create app icons and splash screens that represent the
              app and create a positive first impression.
            </p>
          </div>
        </div>
      </div>
      <h1>This is about page</h1>
    </section>
  );
}

export default skills;
