import React from "react";
import "./works.css";
import Portfolio1 from "../../assets2/portfolio1.png";
// import Portfolio2 from "../../assets2/portfolio2.png";
// import Portfolio3 from "../../assets2/portfolio3.png";
import Portfolio4 from "../../assets2/portfolio4.png";
import Portfolio5 from "../../assets2/portfolio5.png";
import Portfolio6 from "../../assets2/portfolio6.png";

function Works() {
  return (
    <section id="works">
      {" "}
      <h2 className="worksTitle">My Portfolio</h2>
      <span className="worksDesc">
      Results-oriented Software Developer with a proven history of crafting dynamic, 
      user-centric web applications. Expertise lies in the MERN Stack, coupled with 
      a deep understanding of contemporary software development methodologies.
      </span>
      <div className="worksImgs">
        <img src={Portfolio1} alt="portfolio1" className="worksImg" />
        {/* <img src={Portfolio2} alt="portfolio2" className="worksImg" /> */}
        {/* <img src={Portfolio3} alt="portfolio3" className="worksImg" /> */}
        <img src={Portfolio4} alt="portfolio4" className="worksImg" />
        <img src={Portfolio5} alt="portfolio5" className="worksImg" />
        <img src={Portfolio6} alt="portfolio6" className="worksImg" />
        
      </div>
      <button className="workBtn">See More</button>
    </section>
  );
}

export default Works;
