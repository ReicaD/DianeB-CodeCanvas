import React from "react";
import "./works.css";
import Portfolio1 from "../../assets2/portfolio1.png";
import Portfolio2 from "../../assets2/portfolio2.png";
import Portfolio3 from "../../assets2/portfolio3.png";
import Portfolio4 from "../../assets2/portfolio4.png";
import Portfolio5 from "../../assets2/portfolio5.png";
import Portfolio6 from "../../assets2/portfolio6.png";

function Works() {
  return (
    <section id="works">
      {" "}
      <h2 className="worksTitle">My Portfolio</h2> 
      <span className="worksDesc">
        Dynamic and motivated professional with a proven record of generating
        and building relationships, managing projects from concept to
        completion, designing educational strategies, and coaching individuals
        to success.
      </span>
      <div className="worksImgs">
        <img src={Portfolio1} alt="portfolio1" className="wokrsImg" />
        <img src={Portfolio2} alt="portfolio2" className="wokrsImg" />
        <img src={Portfolio3} alt="portfolio3" className="wokrsImg" />
        <img src={Portfolio4} alt="portfolio4" className="wokrsImg" />
        <img src={Portfolio5} alt="portfolio5" className="wokrsImg" />
        <img src={Portfolio6} alt="portfolio6" className="wokrsImg" />
      </div>
      <button className="workBtn">
        See More
      </button>
    </section>
  );
}

export default Works;
