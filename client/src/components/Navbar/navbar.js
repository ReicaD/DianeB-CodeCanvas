import React from "react";
import "./navbar.css";
import logo from "../../assets2/letter-d.png";
import contactImg from "../../assets2/contact (1).png";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <div className="desktopMenu">
        <Link activeClass="active" to="intro"  spy={true} smooth={true} offset={100} duration={500} className="desktopMenuListItem">Home</Link>
        <Link activeClass="active" to="skills"  spy={true} smooth={true} offset={100} duration={500} className="desktopMenuListItem">About</Link>
        <Link activeClass="active" to="works"  spy={true} smooth={true} offset={100} duration={500} className="desktopMenuListItem">Portfolio</Link>
        <Link activeClass="active" to="client"  spy={true} smooth={true} offset={100} duration={500} className="desktopMenuListItem">Client</Link>
      </div>
      <button className="desktopMenuBtn" onClick={()=>{
         document.getElementById("contact").scrollIntoView({behaviour:"smooth"});
      }}>
        <img src={contactImg} alt="" className="desktopMenuImg" />
        Contact Me
      </button>
    </nav>
  );
}

export default Navbar;

{/* <Link to="about"  className="desktopMenuListItem">About</Link>
<Link to="portfolio" className="desktopMenuListItem">Portfolio</Link>
<Link to="client" className="desktopMenuListItem">Client</Link> */}